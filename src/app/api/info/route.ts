import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    product: "BrushFit: The 2-Minute Toothbrush Workout Guide",
    price: "$19.99",
    currency: "USDC",
    network: process.env.X402_NETWORK === "mainnet" ? "Base (eip155:8453)" : "Base Sepolia (eip155:84532)",
    format: "PDF (31 pages)",
    purchase_endpoint: "/api/x402/purchase",
    payment_protocol: "x402",
    description:
      "22 illustrated exercises you do while brushing your teeth. 4-week progressive program. One hand brushes, one hand works out.",
    includes: [
      "22 illustrated bodyweight exercises",
      "4-week progressive program (AM + PM)",
      "Form illustrations for every exercise",
      "Pro tips on every page",
      "Zero equipment needed",
    ],
    free_sample: "/brushfit-sample.pdf",
    how_to_buy: {
      step_1: "GET /api/x402/purchase — receives HTTP 402 with payment requirements",
      step_2: "Sign USDC transfer authorization on Base using your wallet",
      step_3: "Retry GET /api/x402/purchase with PAYMENT-SIGNATURE header",
      step_4: "Receive PDF download after on-chain settlement",
      automated: "Use @x402/fetch wrapFetchWithPayment() to handle the flow automatically",
    },
  });
}
