import { NextRequest, NextResponse } from "next/server";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://agentstore.vercel.app";

const BASE_PRICE = 19.99;
const MIN_ACCEPTED_PRICE = 14.99;

const BULK_TIERS = [
  { min: 25, discount: 0.2 },
  { min: 10, discount: 0.15 },
  { min: 5, discount: 0.1 },
];

/** In-memory negotiation history (resets on cold start). */
const negotiationHistory: Map<
  string,
  Array<{
    timestamp: string;
    proposed_price: number;
    quantity: number;
    result: string;
    final_price: number;
  }>
> = new Map();

function getBulkDiscount(quantity: number): number {
  for (const tier of BULK_TIERS) {
    if (quantity >= tier.min) return tier.discount;
  }
  return 0;
}

function roundPrice(n: number): number {
  return Math.round(n * 100) / 100;
}

interface NegotiateBody {
  agent_id: string;
  proposed_price: number;
  quantity?: number;
  justification?: string;
}

export async function POST(request: NextRequest) {
  let body: NegotiateBody;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON body" },
      { status: 400 },
    );
  }

  const { agent_id, proposed_price, quantity = 1, justification } = body;

  if (!agent_id || typeof proposed_price !== "number") {
    return NextResponse.json(
      {
        error: "Missing required fields: agent_id (string), proposed_price (number)",
      },
      { status: 400 },
    );
  }

  if (proposed_price <= 0) {
    return NextResponse.json(
      { error: "proposed_price must be positive" },
      { status: 400 },
    );
  }

  if (quantity < 1 || !Number.isInteger(quantity)) {
    return NextResponse.json(
      { error: "quantity must be a positive integer" },
      { status: 400 },
    );
  }

  // Calculate best price this agent can get
  const bulkDiscount = getBulkDiscount(quantity);
  const bulkPrice = roundPrice(BASE_PRICE * (1 - bulkDiscount));

  // Loyalty bonus: agents with 3+ previous negotiations get an extra 5% off
  const history = negotiationHistory.get(agent_id) || [];
  const loyaltyDiscount = history.length >= 3 ? 0.05 : 0;
  const floorPrice = roundPrice(
    Math.max(MIN_ACCEPTED_PRICE, bulkPrice * (1 - loyaltyDiscount)),
  );

  const accepted = proposed_price >= floorPrice;
  const finalPrice = accepted ? roundPrice(proposed_price) : floorPrice;

  const entry = {
    timestamp: new Date().toISOString(),
    proposed_price: roundPrice(proposed_price),
    quantity,
    result: accepted ? "accepted" : "counter",
    final_price: finalPrice,
  };

  history.push(entry);
  negotiationHistory.set(agent_id, history);

  if (accepted) {
    return NextResponse.json({
      status: "accepted",
      agent_id,
      proposed_price: roundPrice(proposed_price),
      final_price: finalPrice,
      quantity,
      total: roundPrice(finalPrice * quantity),
      purchase_url: `${BASE_URL}/api/x402/purchase`,
      message: "Price accepted. Proceed to purchase_url with x402 payment.",
      negotiation_count: history.length,
    });
  }

  return NextResponse.json(
    {
      status: "counter",
      agent_id,
      proposed_price: roundPrice(proposed_price),
      counter_price: floorPrice,
      quantity,
      total_at_counter: roundPrice(floorPrice * quantity),
      base_price: BASE_PRICE,
      bulk_discount_applied: bulkDiscount > 0 ? `${bulkDiscount * 100}%` : null,
      loyalty_discount_applied:
        loyaltyDiscount > 0 ? `${loyaltyDiscount * 100}%` : null,
      justification_received: justification || null,
      purchase_url: `${BASE_URL}/api/x402/purchase`,
      message: `Proposed price $${roundPrice(proposed_price)} is below our minimum of $${floorPrice}. Counter-offer: $${floorPrice}/copy.`,
      hint: "Try increasing quantity for bulk discounts, or negotiate again for loyalty discounts after 3+ interactions.",
      negotiation_count: history.length,
    },
    { status: 200 },
  );
}
