import { NextRequest, NextResponse } from "next/server";

const COINBASE_COMMERCE_API_KEY = process.env.COINBASE_COMMERCE_API_KEY;
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://agentstore.vercel.app";

export async function POST(_req: NextRequest) {
  if (!COINBASE_COMMERCE_API_KEY) {
    return NextResponse.json(
      {
        error: "Coinbase Commerce is not configured.",
        message:
          "Set the COINBASE_COMMERCE_API_KEY environment variable. Get one at https://commerce.coinbase.com/dashboard/settings",
        alternatives: {
          x402: `${SITE_URL}/api/x402/purchase`,
          stripe: `${SITE_URL}/api/checkout`,
          direct_crypto: `${SITE_URL}/pay/crypto`,
        },
      },
      { status: 503 }
    );
  }

  try {
    const response = await fetch("https://api.commerce.coinbase.com/charges", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CC-Api-Key": COINBASE_COMMERCE_API_KEY,
        "X-CC-Version": "2018-03-22",
      },
      body: JSON.stringify({
        name: "BrushFit: The 2-Minute Toothbrush Workout Guide",
        description:
          "22 illustrated bodyweight exercises you do while brushing your teeth. 31-page PDF with 4-week progressive program.",
        pricing_type: "fixed_price",
        local_price: {
          amount: "19.99",
          currency: "USD",
        },
        metadata: {
          product_id: "brushfit-guide",
        },
        redirect_url: `${SITE_URL}/success?source=coinbase`,
        cancel_url: `${SITE_URL}/buy?canceled=true`,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        {
          error:
            data.error?.message || "Failed to create Coinbase Commerce charge",
        },
        { status: 400 }
      );
    }

    return NextResponse.json({
      url: data.data.hosted_url,
      charge_id: data.data.id,
      expires_at: data.data.expires_at,
      supported_currencies: [
        "BTC",
        "ETH",
        "USDC",
        "DAI",
        "LTC",
        "BCH",
        "DOGE",
        "SHIB",
        "APE",
      ],
    });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    service: "Coinbase Commerce",
    method: "POST",
    description:
      "Creates a Coinbase Commerce charge for BrushFit ($19.99). Returns a hosted checkout URL where the buyer can pay with BTC, ETH, USDC, and other supported cryptocurrencies.",
    price: { amount: "19.99", currency: "USD" },
    supported_currencies: [
      "BTC",
      "ETH",
      "USDC",
      "DAI",
      "LTC",
      "BCH",
      "DOGE",
      "SHIB",
      "APE",
    ],
    configured: !!COINBASE_COMMERCE_API_KEY,
  });
}
