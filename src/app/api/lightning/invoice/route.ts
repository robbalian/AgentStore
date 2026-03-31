import { NextResponse } from "next/server";

const PRICE_USD = 19.99;
// Approximate BTC/USD rate for sat conversion — in production, fetch a live rate
const APPROX_BTC_USD = 67_000;
const SATS_PER_BTC = 100_000_000;

function usdToSats(usd: number): number {
  return Math.ceil((usd / APPROX_BTC_USD) * SATS_PER_BTC);
}

function corsHeaders() {
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  };
}

export async function OPTIONS() {
  return NextResponse.json(null, { status: 204, headers: corsHeaders() });
}

export async function GET() {
  const sats = usdToSats(PRICE_USD);
  return NextResponse.json(
    {
      paymentMethod: "Bitcoin Lightning Network",
      priceUsd: PRICE_USD,
      approximateSats: sats,
      description:
        "Pay for BrushFit using Bitcoin over the Lightning Network. Instant settlement, near-zero fees.",
      endpoint: "POST /api/lightning/invoice to generate a BOLT11 invoice",
      configured: !!(
        process.env.LIGHTNING_NODE_URL && process.env.LIGHTNING_API_KEY
      ),
    },
    { headers: corsHeaders() }
  );
}

export async function POST() {
  const nodeUrl = process.env.LIGHTNING_NODE_URL;
  const apiKey = process.env.LIGHTNING_API_KEY;

  // If Lightning node is not configured, return mock invoice with setup instructions
  if (!nodeUrl || !apiKey) {
    const sats = usdToSats(PRICE_USD);
    const mockPaymentHash =
      "mock_" + Math.random().toString(36).substring(2, 15);
    const mockBolt11 =
      "lnbc" +
      sats +
      "n1pjmock" +
      Math.random().toString(36).substring(2, 30) +
      "..." +
      "placeholder";

    return NextResponse.json(
      {
        ok: true,
        mock: true,
        message:
          "Lightning node not configured. This is a mock invoice for development. " +
          "Set LIGHTNING_NODE_URL and LIGHTNING_API_KEY environment variables to connect a real Lightning node (e.g. LND, CLN, LNbits, Alby, Voltage).",
        setup: {
          LIGHTNING_NODE_URL:
            "URL of your Lightning node REST API (e.g. https://your-node:8080 for LND, or your LNbits/Alby endpoint)",
          LIGHTNING_API_KEY:
            "Macaroon (hex) for LND, or API key for LNbits/Alby",
          supportedBackends: [
            "LND (lndrest)",
            "Core Lightning (CLN)",
            "LNbits",
            "Alby",
            "Voltage",
            "Strike",
          ],
        },
        invoice: {
          bolt11: mockBolt11,
          paymentHash: mockPaymentHash,
          amountSats: sats,
          amountUsd: PRICE_USD,
          expiresIn: 3600,
          expiresAt: new Date(Date.now() + 3600 * 1000).toISOString(),
        },
      },
      { headers: corsHeaders() }
    );
  }

  // --- Production path: call real Lightning node ---
  try {
    const sats = usdToSats(PRICE_USD);

    const res = await fetch(`${nodeUrl}/v1/invoices`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Grpc-Metadata-macaroon": apiKey,
      },
      body: JSON.stringify({
        value: sats,
        memo: "BrushFit: The 2-Minute Toothbrush Workout Guide",
        expiry: 3600,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      return NextResponse.json(
        { ok: false, error: "Lightning node error", details: err },
        { status: 502, headers: corsHeaders() }
      );
    }

    const data = await res.json();

    return NextResponse.json(
      {
        ok: true,
        mock: false,
        invoice: {
          bolt11: data.payment_request,
          paymentHash: Buffer.from(data.r_hash, "base64").toString("hex"),
          amountSats: sats,
          amountUsd: PRICE_USD,
          expiresIn: 3600,
          expiresAt: new Date(Date.now() + 3600 * 1000).toISOString(),
        },
      },
      { headers: corsHeaders() }
    );
  } catch (err) {
    return NextResponse.json(
      {
        ok: false,
        error: "Failed to reach Lightning node",
        details: err instanceof Error ? err.message : String(err),
      },
      { status: 502, headers: corsHeaders() }
    );
  }
}
