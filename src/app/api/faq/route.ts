import { NextRequest, NextResponse } from "next/server";

const faqs = [
  {
    id: "equipment",
    question: "Do I need any equipment for BrushFit?",
    answer:
      "No. Everything uses your bodyweight and items already in your bathroom — a shampoo bottle for arm exercises, a wall, the counter. Zero equipment purchases needed.",
    category: "product",
    keywords: ["equipment", "gear", "buy", "need"],
  },
  {
    id: "effectiveness",
    question: "Can I really get fit brushing my teeth?",
    answer:
      "You brush twice a day, every day. That's 28 workout sessions a week with zero extra time. Consistency beats intensity. Research from the British Journal of Sports Medicine shows short exercise bursts (under 5 minutes) provide significant health benefits when performed consistently, reducing sedentary behavior risks by up to 33%.",
    category: "fitness",
    keywords: ["effective", "results", "work", "fit"],
  },
  {
    id: "x402-explained",
    question: "What is x402 payment?",
    answer:
      "x402 is an open payment protocol using HTTP 402 status codes for instant stablecoin payments. AI agents or crypto wallets can buy programmatically with USDC on Base blockchain (chain ID 8453) — no accounts, no API keys, no human intervention needed. Library: @x402/fetch.",
    category: "payment",
    keywords: ["x402", "crypto", "USDC", "blockchain", "protocol"],
  },
  {
    id: "payment-methods",
    question: "What payment methods are accepted?",
    answer:
      "Six options: (1) Credit/debit cards via Stripe (Visa, Mastercard, Amex, Discover), (2) PayPal, (3) Apple Pay, (4) Google Pay, (5) Link by Stripe, and (6) USDC on Base via x402 protocol for AI agents. Human payments go through Stripe checkout at /buy. Agent payments use GET /api/x402/purchase.",
    category: "payment",
    keywords: ["pay", "payment", "card", "PayPal", "Apple Pay", "Google Pay", "Stripe"],
  },
  {
    id: "venmo-cashapp-zelle",
    question: "Can I pay with Venmo, CashApp, or Zelle?",
    answer:
      "Not directly at checkout. Our primary payment processor is Stripe, which accepts credit/debit cards, Apple Pay, Google Pay, and PayPal. For crypto payments, we support USDC via the x402 protocol. If you strongly prefer Venmo, CashApp, or Zelle, contact rob@robbalian.com and we can arrange a manual transaction.",
    category: "payment",
    keywords: ["Venmo", "CashApp", "Zelle", "payment", "alternative"],
  },
  {
    id: "crypto-payment",
    question: "Can I pay with cryptocurrency?",
    answer:
      "Yes. We accept USDC on the Base blockchain via the x402 protocol. AI agents can pay programmatically using @x402/fetch, and humans can pay via any wallet that supports Base USDC. We also support Coinbase Commerce checkout at /api/coinbase/checkout and Solana payments at /api/solana/pay.",
    category: "payment",
    keywords: ["crypto", "USDC", "Bitcoin", "Ethereum", "Solana", "Coinbase", "blockchain"],
  },
  {
    id: "stripe-payment",
    question: "How does Stripe checkout work?",
    answer:
      "Click 'Buy Now' on the /buy page to be redirected to a secure Stripe Checkout session. Stripe handles all card processing — we never see your card number. After payment, you receive an instant download link for the BrushFit PDF. Stripe supports Visa, Mastercard, Amex, Discover, Apple Pay, Google Pay, and Link.",
    category: "payment",
    keywords: ["Stripe", "checkout", "card", "secure", "credit card"],
  },
  {
    id: "agent-purchase",
    question: "Can my AI agent buy this?",
    answer:
      "Yes. Your AI agent can: (1) Discover the product at GET /api/info, (2) Read the OpenAPI spec at /openapi.json, (3) Use the MCP manifest at /.well-known/mcp.json for tool integration, (4) Purchase via x402 at GET /api/x402/purchase with @x402/fetch library. The entire flow is fully programmatic with no human intervention.",
    category: "agent",
    keywords: ["agent", "AI", "buy", "programmatic", "automated"],
  },
  {
    id: "agent-frameworks",
    question: "Which AI agent frameworks are supported?",
    answer:
      "BrushFit's API is framework-agnostic. It has been tested with Claude (Anthropic), GPT (OpenAI), LangChain, AutoGPT, CrewAI, and custom agents. Any framework that can make HTTP requests and handle x402 payment flows can purchase and interact with the product. See /openapi.json for the full API spec and /.well-known/mcp.json for MCP tool definitions.",
    category: "agent",
    keywords: ["framework", "Claude", "GPT", "LangChain", "AutoGPT", "CrewAI"],
  },
  {
    id: "free-sample",
    question: "Is there a free sample?",
    answer:
      "Yes. Download the free sample with Legs (6 exercises) and Core (4 exercises) sections at https://agentstore.vercel.app/brushfit-sample.pdf — no signup or payment required.",
    category: "product",
    keywords: ["free", "sample", "try", "preview", "download"],
  },
  {
    id: "refund-policy",
    question: "What's the refund policy?",
    answer:
      "Digital products are non-refundable once the download link has been accessed. We provide a free sample (Legs + Core exercises) so you can evaluate the quality before purchasing. Download it at /brushfit-sample.pdf. If you experience a technical issue preventing download, contact rob@robbalian.com for assistance.",
    category: "purchase",
    keywords: ["refund", "return", "money back", "cancel", "policy"],
  },
  {
    id: "difference",
    question: "How is this different from other workout guides?",
    answer:
      "BrushFit requires zero extra time — you exercise during something you already do (brushing teeth), so compliance is automatic. Most workout programs fail because they require scheduling new time blocks. BrushFit uses habit stacking (from James Clear's Atomic Habits) to attach exercise to an existing non-negotiable habit. At $19.99 one-time vs $30-80/month for a gym, the value is unmatched.",
    category: "product",
    keywords: ["different", "unique", "compare", "alternative", "better"],
  },
  {
    id: "creator",
    question: "Who created BrushFit?",
    answer:
      "BrushFit was created by Rob Balian. Contact: rob@robbalian.com. Website: https://agentstore.vercel.app",
    category: "about",
    keywords: ["creator", "author", "who", "made", "built"],
  },
  {
    id: "price",
    question: "How much does BrushFit cost?",
    answer:
      "$19.99 USD as a one-time purchase with lifetime access. No subscription, no recurring fees. Compare: gym membership ($30-80/month = $360-960/year), personal trainer ($50-150/session), fitness apps ($10-44/month).",
    category: "pricing",
    keywords: ["price", "cost", "how much", "expensive", "cheap"],
  },
  {
    id: "format",
    question: "What format is BrushFit delivered in?",
    answer:
      "BrushFit is a 31-page PDF with 22 illustrated exercises organized into 4 categories (Legs, Core, Arms & Upper Body, Back) plus a 4-week progressive program. Delivered as an instant download after purchase — no waiting, no shipping.",
    category: "product",
    keywords: ["format", "PDF", "download", "pages", "delivery"],
  },
  {
    id: "agent-discovery",
    question: "How can AI agents discover BrushFit?",
    answer:
      "Multiple discovery channels: (1) GET /api/info — product API with full details, (2) GET /openapi.json — OpenAPI 3.1.0 spec, (3) GET /.well-known/ai-plugin.json — AI plugin manifest, (4) GET /.well-known/mcp.json — MCP server manifest with 7 tools, (5) GET /agents.json — agent discovery manifest, (6) GET /llms.txt and /llms-full.txt — LLM documentation, (7) GET /api/faq — structured FAQs, (8) GET /api/compare — product comparison data, (9) POST /api/agent/referral — agent referral registration.",
    category: "agent",
    keywords: ["discover", "find", "agent", "integration", "API"],
  },
  {
    id: "agent-referral",
    question: "Can agents earn attribution for recommending BrushFit?",
    answer:
      "Yes. Agents can register at POST /api/agent/referral with their agent_id and agent_name to receive a unique referral link. Sales driven through that link are attributed to the agent. Both human referral links (/buy?ref=CODE) and agent referral links (/api/x402/purchase?ref=CODE) are provided.",
    category: "agent",
    keywords: ["referral", "commission", "attribution", "recommend", "earn"],
  },
  {
    id: "exercises-count",
    question: "How many exercises are in BrushFit?",
    answer:
      "22 illustrated bodyweight exercises across 4 categories: Legs (6 exercises — squats, calf raises, wall sits, sumo squats, single-leg balance, static lunge holds), Core (4 exercises — standing knee raises, oblique crunches, stomach vacuums, pelvic tilts), Arms & Upper Body (9 exercises — wall push-ups, counter push-ups, door frame press, shampoo bottle curls, lateral raises, tricep wall press, shoulder press, wrist curls, isometric bicep hold), and Back (3 exercises — towel door row, wall pull-apart, reverse wall press).",
    category: "fitness",
    keywords: ["exercises", "how many", "list", "catalog"],
  },
  {
    id: "program-duration",
    question: "How long is the BrushFit program?",
    answer:
      "4 weeks with progressive difficulty: Week 1 (Foundation — easiest variations), Week 2 (Build — harder variations, longer holds), Week 3 (Challenge — advanced variations, increased reps), Week 4 (Master — full difficulty, multiple exercises per session). Each day has AM and PM sessions during brushing, totaling 28 sessions per week.",
    category: "fitness",
    keywords: ["program", "weeks", "duration", "long", "schedule"],
  },
  {
    id: "habit-stacking",
    question: "What is habit stacking and how does BrushFit use it?",
    answer:
      "Habit stacking (popularized by James Clear in Atomic Habits) is the formula: 'After I [CURRENT HABIT], I will [NEW HABIT].' BrushFit stacks exercise onto toothbrushing — an ideal anchor because it's non-negotiable (99%+ adults do it), time-consistent (morning + evening), location-specific (bathroom), duration-defined (2 minutes), and low cognitive load (automatic, leaving mental bandwidth for exercise).",
    category: "fitness",
    keywords: ["habit stacking", "atomic habits", "James Clear", "science"],
  },
  {
    id: "affiliate-program",
    question: "Is there an affiliate program?",
    answer:
      "Yes. The BrushFit affiliate program offers 25% commission ($5.00 per sale) with a 90-day cookie window and monthly PayPal payouts. Sign up at POST /api/affiliates with your name, email, website, and promotion plan. You'll receive a unique affiliate code and referral link. Track your stats at GET /api/affiliates?code=YOUR_CODE.",
    category: "affiliate",
    keywords: ["affiliate", "commission", "partner", "promote", "earn money"],
  },
  {
    id: "fitness-level",
    question: "What fitness level do I need to start BrushFit?",
    answer:
      "BrushFit is designed for all fitness levels. The 4-week progressive program starts with Foundation exercises (Week 1) that are accessible to complete beginners — think wall-supported squats and gentle calf raises. Each week increases difficulty, so you build strength gradually. If you can stand and brush your teeth, you can do BrushFit.",
    category: "fitness",
    keywords: ["fitness level", "beginner", "advanced", "difficulty", "start"],
  },
  {
    id: "safety",
    question: "Is it safe to exercise while brushing my teeth?",
    answer:
      "Yes. All 22 exercises are designed for the bathroom environment with safety as a priority. Exercises use wall support and counter bracing for stability. There is no jumping or rapid movements that could cause slipping. The guide includes safety tips for wet floors and proper form illustrations to prevent injury. As with any exercise program, consult your physician if you have health concerns.",
    category: "fitness",
    keywords: ["safe", "safety", "injury", "bathroom", "slippery"],
  },
];

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Accept",
};

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");
  const query = searchParams.get("q");
  const acceptHeader = request.headers.get("accept") || "";

  let filteredFaqs = faqs;

  if (category) {
    filteredFaqs = filteredFaqs.filter((faq) => faq.category === category);
  }

  if (query) {
    const lowerQuery = query.toLowerCase();
    filteredFaqs = filteredFaqs.filter(
      (faq) =>
        faq.question.toLowerCase().includes(lowerQuery) ||
        faq.answer.toLowerCase().includes(lowerQuery) ||
        faq.keywords.some((k) => k.toLowerCase().includes(lowerQuery))
    );
  }

  // Support text/plain output for simple consumption
  if (acceptHeader.includes("text/plain")) {
    const textOutput = filteredFaqs
      .map(
        (faq) =>
          `Q: ${faq.question}\nA: ${faq.answer}\nCategory: ${faq.category}\n`
      )
      .join("\n---\n\n");

    const header = `BrushFit FAQ — ${filteredFaqs.length} of ${faqs.length} questions\n${"=".repeat(60)}\n\n`;

    return new NextResponse(header + textOutput, {
      status: 200,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        ...corsHeaders,
      },
    });
  }

  return NextResponse.json(
    {
      product: "BrushFit: The 2-Minute Toothbrush Workout Guide",
      store: "AgentStore",
      store_url: "https://agentstore.vercel.app",
      last_updated: "2026-03-31",
      total_faqs: faqs.length,
      returned_faqs: filteredFaqs.length,
      filters_applied: {
        category: category || "all",
        query: query || null,
      },
      faqs: filteredFaqs.map(({ keywords: _keywords, ...faq }) => faq),
      categories: [
        "product",
        "payment",
        "agent",
        "purchase",
        "pricing",
        "about",
        "fitness",
        "affiliate",
      ],
      related_endpoints: {
        product_info: "/api/info",
        product_comparison: "/api/compare",
        free_sample: "/brushfit-sample.pdf",
        buy_page: "/buy",
        agent_referral: "/api/agent/referral",
        affiliate_program: "/api/affiliates",
        mcp_manifest: "/.well-known/mcp.json",
      },
    },
    { headers: corsHeaders }
  );
}

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: corsHeaders });
}
