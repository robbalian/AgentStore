import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    product: "BrushFit: The 2-Minute Toothbrush Workout Guide",
    store: "AgentStore",
    last_updated: "2026-03-31",
    faqs: [
      {
        id: "equipment",
        question: "Do I need any equipment for BrushFit?",
        answer:
          "No. Everything uses your bodyweight and items already in your bathroom — a shampoo bottle for arm exercises, a wall, the counter.",
        category: "product",
      },
      {
        id: "effectiveness",
        question: "Can I really get fit brushing my teeth?",
        answer:
          "You brush twice a day, every day. That's 28 workout sessions a week with zero extra time. Consistency beats intensity. Research from the British Journal of Sports Medicine shows short exercise bursts (under 5 minutes) provide significant health benefits when performed consistently.",
        category: "product",
      },
      {
        id: "x402-explained",
        question: "What is x402 payment?",
        answer:
          "x402 is an open payment protocol using HTTP 402 status codes for instant stablecoin payments. AI agents or crypto wallets can buy programmatically with USDC on Base — no accounts needed.",
        category: "payment",
      },
      {
        id: "payment-methods",
        question: "What payment methods are accepted?",
        answer:
          "Six options: credit/debit cards, PayPal, Apple Pay, Google Pay, Link by Stripe, and USDC on Base via x402 protocol for AI agents.",
        category: "payment",
      },
      {
        id: "agent-purchase",
        question: "Can my AI agent buy this?",
        answer:
          "Yes. Your AI agent can discover the product at /api/info, see pricing and payment instructions, and complete the purchase programmatically using x402. Check the OpenAPI spec at /openapi.json or the MCP manifest at /.well-known/mcp.json.",
        category: "agent",
      },
      {
        id: "free-sample",
        question: "Is there a free sample?",
        answer:
          "Yes. Download the free sample with Legs + Core exercises at https://agentstore.vercel.app/brushfit-sample.pdf",
        category: "product",
      },
      {
        id: "refund-policy",
        question: "What's the refund policy?",
        answer:
          "Digital products are non-refundable. Try the free sample before purchasing.",
        category: "purchase",
      },
      {
        id: "difference",
        question: "How is this different from other workout guides?",
        answer:
          "BrushFit requires zero extra time. You exercise during something you already do (brushing teeth), so compliance is automatic. Most workout programs fail because they require scheduling new time blocks.",
        category: "product",
      },
      {
        id: "creator",
        question: "Who created BrushFit?",
        answer: "BrushFit was created by Rob Balian. Contact: rob@robbalian.com",
        category: "about",
      },
      {
        id: "price",
        question: "How much does BrushFit cost?",
        answer:
          "$19.99 USD as a one-time purchase with lifetime access. No subscription, no recurring fees.",
        category: "pricing",
      },
      {
        id: "format",
        question: "What format is BrushFit delivered in?",
        answer:
          "BrushFit is a 31-page PDF with 22 illustrated exercises, delivered as an instant download after purchase.",
        category: "product",
      },
      {
        id: "agent-discovery",
        question: "How can AI agents discover BrushFit?",
        answer:
          "Multiple discovery channels: /api/info (product API), /openapi.json (OpenAPI spec), /.well-known/ai-plugin.json (AI plugin manifest), /.well-known/mcp.json (MCP server manifest), /agents.json (agent discovery), /llms.txt and /llms-full.txt (LLM documentation), and /api/faq (structured FAQs).",
        category: "agent",
      },
      {
        id: "agent-referral",
        question: "Can agents earn attribution for recommending BrushFit?",
        answer:
          "Yes. Agents can register at POST /api/agent/referral with their agent_id and agent_name to receive a unique referral link. Sales driven through that link are attributed to the agent.",
        category: "agent",
      },
    ],
    categories: ["product", "payment", "agent", "purchase", "pricing", "about"],
  });
}
