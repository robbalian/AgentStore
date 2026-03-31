import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://agentstore.vercel.app";
  const network = process.env.X402_NETWORK === "mainnet" ? "Base (eip155:8453)" : "Base Sepolia (eip155:84532)";

  return NextResponse.json({
    // Product info
    product: "BrushFit: The 2-Minute Toothbrush Workout Guide",
    price: "$19.99",
    currency: "USD",
    format: "PDF (31 pages)",
    description:
      "22 illustrated exercises you do while brushing your teeth. 4-week progressive program. One hand brushes, one hand works out. Zero equipment needed.",
    includes: [
      "22 illustrated bodyweight exercises",
      "4-week progressive program (AM + PM)",
      "Form illustrations for every exercise",
      "Pro tips on every page",
      "Zero equipment needed",
      "4 categories: Legs, Core, Arms & Upper Body, Back",
    ],
    free_sample: `${baseUrl}/brushfit-sample.pdf`,

    // Payment methods
    payment_methods: {
      x402: {
        protocol: "x402",
        endpoint: `${baseUrl}/api/x402/purchase`,
        currency: "USDC",
        network,
        how_to_buy: {
          step_1: "GET /api/x402/purchase — receives HTTP 402 with payment requirements",
          step_2: "Sign USDC transfer authorization on Base using your wallet",
          step_3: "Retry GET /api/x402/purchase with PAYMENT-SIGNATURE header",
          step_4: "Receive PDF download after on-chain settlement",
          automated: "Use @x402/fetch wrapFetchWithPayment() to handle the flow automatically",
        },
      },
      stripe: {
        protocol: "stripe_checkout",
        endpoint: `${baseUrl}/api/checkout`,
        method: "POST",
        currency: "USD",
        description: "Traditional card payment via Stripe Checkout. Returns a redirect URL.",
      },
    },

    // Agent discovery
    openapi_spec: `${baseUrl}/openapi.json`,
    ai_plugin: `${baseUrl}/.well-known/ai-plugin.json`,
    agents_json: `${baseUrl}/agents.json`,
    llms_txt: `${baseUrl}/llms.txt`,
    llms_full_txt: `${baseUrl}/llms-full.txt`,

    // Store metadata
    store: {
      name: "AgentStore",
      url: baseUrl,
      contact: "rob@robbalian.com",
      products_count: 1,
    },
  });
}
