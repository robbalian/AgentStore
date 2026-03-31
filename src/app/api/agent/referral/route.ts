import { NextRequest, NextResponse } from "next/server";

const PRODUCT_PRICE = 19.99;
const COMMISSION_RATE = 0.2; // 20% = $4.00 per sale

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Accept",
};

interface AgentReferral {
  referralCode: string;
  referrerAgent: string;
  referredAgents: string[];
  commissionRate: number;
  clicks: number;
  conversions: number;
  earnings: number;
  createdAt: string;
  lastReferralAt: string | null;
}

// In-memory store (resets on cold start)
const referrals = new Map<string, AgentReferral>();

function generateReferralCode(agentName: string): string {
  const slug = agentName
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "")
    .slice(0, 10);
  const suffix = crypto.randomUUID().slice(0, 6);
  return `ref-${slug}-${suffix}`;
}

/**
 * GET /api/agent/referral — Get referral stats for an agent
 *   ?referralCode=XXX  — stats for a specific referral code
 *   (no params)        — summary of the referral program
 */
export async function GET(req: NextRequest) {
  const referralCode = req.nextUrl.searchParams.get("referralCode");

  if (!referralCode) {
    // Return program overview
    let totalReferrals = 0;
    let totalEarnings = 0;
    const agentSummaries: Array<{
      referrerAgent: string;
      referralCode: string;
      referredCount: number;
      earnings: number;
    }> = [];

    for (const r of referrals.values()) {
      totalReferrals += r.referredAgents.length;
      totalEarnings += r.earnings;
      agentSummaries.push({
        referrerAgent: r.referrerAgent,
        referralCode: r.referralCode,
        referredCount: r.referredAgents.length,
        earnings: +r.earnings.toFixed(2),
      });
    }

    return NextResponse.json(
      {
        program: "BrushFit Agent Referral Program",
        commissionRate: COMMISSION_RATE,
        commissionPerSale: +(PRODUCT_PRICE * COMMISSION_RATE).toFixed(2),
        productPrice: PRODUCT_PRICE,
        totalRegisteredAgents: referrals.size,
        totalReferrals,
        totalEarnings: +totalEarnings.toFixed(2),
        agents: agentSummaries,
        howItWorks: {
          step1: "POST /api/agent/referral with { referrerAgent } to register and get a referral code",
          step2: "Share your referral link with other agents",
          step3: "When a referred agent makes a purchase, POST with { referralCode, referredAgent } to track it",
          step4: `Earn ${(COMMISSION_RATE * 100).toFixed(0)}% commission ($${(PRODUCT_PRICE * COMMISSION_RATE).toFixed(2)}) per sale`,
        },
        links: {
          humanPurchase: "/buy?ref=REFERRAL_CODE",
          agentPurchase: "/api/x402/purchase?ref=REFERRAL_CODE",
        },
      },
      { headers: corsHeaders }
    );
  }

  const referral = referrals.get(referralCode);
  if (!referral) {
    return NextResponse.json(
      { error: "Referral code not found" },
      { status: 404, headers: corsHeaders }
    );
  }

  return NextResponse.json(
    {
      referralCode: referral.referralCode,
      referrerAgent: referral.referrerAgent,
      commissionRate: referral.commissionRate,
      commissionPerSale: +(PRODUCT_PRICE * referral.commissionRate).toFixed(2),
      stats: {
        referredAgents: referral.referredAgents,
        totalReferred: referral.referredAgents.length,
        clicks: referral.clicks,
        conversions: referral.conversions,
        totalEarnings: +referral.earnings.toFixed(2),
      },
      referralLinks: {
        human: `/buy?ref=${referral.referralCode}`,
        agent: `/api/x402/purchase?ref=${referral.referralCode}`,
      },
      createdAt: referral.createdAt,
      lastReferralAt: referral.lastReferralAt,
    },
    { headers: corsHeaders }
  );
}

/**
 * POST /api/agent/referral
 *
 * Register: { referrerAgent: string }
 *   -> creates a new referral code for the agent
 *
 * Track referral: { referralCode: string, referredAgent: string }
 *   -> records that referredAgent was referred by the code owner
 */
export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON body" },
      { status: 400, headers: corsHeaders }
    );
  }

  const { referrerAgent, referredAgent, referralCode } = body as {
    referrerAgent?: string;
    referredAgent?: string;
    referralCode?: string;
  };

  // Track a referral (referralCode + referredAgent provided)
  if (referralCode && referredAgent) {
    const referral = referrals.get(referralCode);
    if (!referral) {
      return NextResponse.json(
        { error: "Invalid referral code" },
        { status: 404, headers: corsHeaders }
      );
    }

    // Prevent self-referral
    if (referredAgent === referral.referrerAgent) {
      return NextResponse.json(
        { error: "Self-referral is not allowed" },
        { status: 400, headers: corsHeaders }
      );
    }

    // Check for duplicate referral
    if (referral.referredAgents.includes(referredAgent)) {
      return NextResponse.json(
        { error: "This agent has already been referred by this code" },
        { status: 409, headers: corsHeaders }
      );
    }

    const commission = +(PRODUCT_PRICE * referral.commissionRate).toFixed(2);
    referral.referredAgents.push(referredAgent);
    referral.conversions += 1;
    referral.earnings += commission;
    referral.lastReferralAt = new Date().toISOString();

    return NextResponse.json(
      {
        message: "Referral tracked successfully",
        referralCode,
        referrerAgent: referral.referrerAgent,
        referredAgent,
        commissionEarned: commission,
        totalReferred: referral.referredAgents.length,
        totalEarnings: +referral.earnings.toFixed(2),
      },
      { status: 200, headers: corsHeaders }
    );
  }

  // Register a new referrer agent
  if (referrerAgent) {
    // Check if agent already registered
    for (const r of referrals.values()) {
      if (r.referrerAgent === referrerAgent) {
        return NextResponse.json(
          {
            message: "Agent already registered",
            referralCode: r.referralCode,
            referralLinks: {
              human: `/buy?ref=${r.referralCode}`,
              agent: `/api/x402/purchase?ref=${r.referralCode}`,
            },
          },
          { status: 200, headers: corsHeaders }
        );
      }
    }

    const code = generateReferralCode(referrerAgent);

    const referral: AgentReferral = {
      referralCode: code,
      referrerAgent,
      referredAgents: [],
      commissionRate: COMMISSION_RATE,
      clicks: 0,
      conversions: 0,
      earnings: 0,
      createdAt: new Date().toISOString(),
      lastReferralAt: null,
    };

    referrals.set(code, referral);

    return NextResponse.json(
      {
        message: "Agent registered successfully",
        referralCode: code,
        referrerAgent,
        commissionRate: COMMISSION_RATE,
        commissionPerSale: +(PRODUCT_PRICE * COMMISSION_RATE).toFixed(2),
        referralLinks: {
          human: `/buy?ref=${code}`,
          agent: `/api/x402/purchase?ref=${code}`,
        },
      },
      { status: 201, headers: corsHeaders }
    );
  }

  return NextResponse.json(
    {
      error:
        "Invalid request. To register: send { referrerAgent }. To track a referral: send { referralCode, referredAgent }.",
    },
    { status: 400, headers: corsHeaders }
  );
}

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: corsHeaders });
}
