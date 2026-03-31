import { NextRequest, NextResponse } from "next/server";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://agentstore.vercel.app";

const catalog = {
  schema_version: "1.0.0",
  last_updated: "2026-03-31T00:00:00Z",
  store: {
    name: "AgentStore",
    url: BASE_URL,
    description:
      "AI-native digital product store with agent-first commerce via x402, MCP, and REST APIs.",
    contact: "support@agentstore.vercel.app",
  },
  products: [
    {
      id: "brushfit-guide",
      name: "BrushFit: The 2-Minute Toothbrush Workout Guide",
      slug: "brushfit",
      description:
        "22 illustrated bodyweight exercises you do while brushing your teeth. One hand brushes, one hand works out. 4-week progressive program. No equipment needed.",
      price: {
        amount: 19.99,
        currency: "USD",
        display: "$19.99",
      },
      bulk_pricing: [
        { min_quantity: 5, discount_percent: 10, unit_price: 17.99 },
        { min_quantity: 10, discount_percent: 15, unit_price: 16.99 },
        { min_quantity: 25, discount_percent: 20, unit_price: 15.99 },
      ],
      negotiation: {
        enabled: true,
        endpoint: `${BASE_URL}/api/agent/negotiate`,
        min_accepted_price: 14.99,
        max_discount_percent: 25,
      },
      format: "PDF",
      pages: 31,
      includes: [
        "22 illustrated bodyweight exercises",
        "4-week progressive program (AM + PM)",
        "Form illustrations for every exercise",
        "Pro tips on every page",
        "Zero equipment needed",
      ],
      categories: ["fitness", "health", "habit-stacking", "digital-download"],
      free_sample: `${BASE_URL}/brushfit-sample.pdf`,
      purchase_endpoints: {
        x402: `${BASE_URL}/api/x402/purchase`,
        info: `${BASE_URL}/api/info`,
      },
      delivery: "instant_download",
      refund_policy: "30-day money-back guarantee",
    },
  ],
  payment_protocols: [
    {
      name: "x402",
      description: "HTTP 402 native payment protocol using USDC on Base",
      endpoint: `${BASE_URL}/api/x402/purchase`,
      currency: "USDC",
      network: "Base (eip155:8453)",
    },
  ],
  api_endpoints: {
    product_info: `${BASE_URL}/api/info`,
    agent_discover: `${BASE_URL}/api/agent/discover`,
    agent_negotiate: `${BASE_URL}/api/agent/negotiate`,
    agent_reviews: `${BASE_URL}/api/agent/review`,
    x402_purchase: `${BASE_URL}/api/x402/purchase`,
    openapi_spec: `${BASE_URL}/openapi.json`,
    agent_manifest: `${BASE_URL}/agents.json`,
    mcp_manifest: `${BASE_URL}/.well-known/mcp.json`,
    agent_protocol: `${BASE_URL}/.well-known/agent-protocol.json`,
  },
  capabilities: [
    "product_discovery",
    "programmatic_purchase",
    "price_negotiation",
    "bulk_ordering",
    "review_submission",
    "affiliate_referral",
    "free_sample_download",
  ],
  supported_agent_frameworks: [
    "LangChain",
    "AutoGPT",
    "CrewAI",
    "Claude",
    "GPT",
    "BabyAGI",
    "SuperAGI",
    "MetaGPT",
    "OpenAgents",
  ],
};

function catalogToPlainText(): string {
  const lines: string[] = [
    "# AgentStore Product Catalog",
    `# Schema Version: ${catalog.schema_version}`,
    `# Last Updated: ${catalog.last_updated}`,
    "",
    "## Store",
    `Name: ${catalog.store.name}`,
    `URL: ${catalog.store.url}`,
    `Description: ${catalog.store.description}`,
    "",
    "## Products",
    "",
  ];

  for (const product of catalog.products) {
    lines.push(`### ${product.name}`);
    lines.push(`ID: ${product.id}`);
    lines.push(`Price: ${product.price.display}`);
    lines.push(`Format: ${product.format} (${product.pages} pages)`);
    lines.push(`Description: ${product.description}`);
    lines.push(`Free Sample: ${product.free_sample}`);
    lines.push(`Purchase (x402): ${product.purchase_endpoints.x402}`);
    lines.push("");
    lines.push("Bulk Pricing:");
    for (const tier of product.bulk_pricing) {
      lines.push(
        `  ${tier.min_quantity}+ copies: ${tier.discount_percent}% off ($${tier.unit_price}/each)`,
      );
    }
    lines.push("");
    lines.push("Negotiation:");
    lines.push(`  Enabled: ${product.negotiation.enabled}`);
    lines.push(`  Endpoint: ${product.negotiation.endpoint}`);
    lines.push(
      `  Max Discount: ${product.negotiation.max_discount_percent}%`,
    );
    lines.push("");
  }

  lines.push("## API Endpoints");
  for (const [key, url] of Object.entries(catalog.api_endpoints)) {
    lines.push(`${key}: ${url}`);
  }
  lines.push("");

  lines.push("## Capabilities");
  lines.push(catalog.capabilities.join(", "));
  lines.push("");

  lines.push("## Supported Agent Frameworks");
  lines.push(catalog.supported_agent_frameworks.join(", "));

  return lines.join("\n");
}

export async function GET(request: NextRequest) {
  const accept = request.headers.get("accept") || "application/json";

  if (accept.includes("text/plain")) {
    return new NextResponse(catalogToPlainText(), {
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  }

  return NextResponse.json(catalog);
}
