import { NextRequest, NextResponse } from "next/server";

const PRODUCT_PRICE = 19.99;
const DEFAULT_AGENT_COMMISSION_RATE = 0.2; // 20% = $4.00 per sale

interface AgentReferral {
  agentId: string;
  name: string;
  commissionRate: number;
  clicks: number;
  conversions: number;
  earnings: number;
  createdAt: string;
  lastClickAt: string | null;
  lastConversionAt: string | null;
}

// In-memory store (replace with database in production)
const agentReferrals = new Map<string, AgentReferral>();

function generateAgentId(): string {
  return "agent_" + crypto.randomUUID().replace(/-/g, "").slice(0, 12);
}

/**
 * GET /api/agent/referral?agentId=XXX — Get referral stats for an agent
 * POST /api/agent/referral — Register a new agent or record a click/conversion
 */
export async function GET(req: NextRequest) {
  const agentId = req.nextUrl.searchParams.get("agentId");

  if (!agentId) {
    return NextResponse.json(
      { error: "Missing agentId query parameter" },
      { status: 400 }
    );
  }

  const agent = agentReferrals.get(agentId);
  if (!agent) {
    return NextResponse.json(
      { error: "Agent not found" },
      { status: 404 }
    );
  }

  const conversionRate =
    agent.clicks > 0
      ? ((agent.conversions / agent.clicks) * 100).toFixed(1)
      : "0.0";

  return NextResponse.json({
    agentId: agent.agentId,
    name: agent.name,
    commissionRate: agent.commissionRate,
    commissionPerSale: +(PRODUCT_PRICE * agent.commissionRate).toFixed(2),
    stats: {
      clicks: agent.clicks,
      conversions: agent.conversions,
      conversionRate: conversionRate + "%",
      totalEarnings: +agent.earnings.toFixed(2),
      pendingPayout: +agent.earnings.toFixed(2),
    },
    referralLink: `/api/agent/referral?ref=${agent.agentId}`,
    createdAt: agent.createdAt,
    lastClickAt: agent.lastClickAt,
    lastConversionAt: agent.lastConversionAt,
  });
}

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({}));
  const { action, agentId, name, commissionRate } = body as {
    action?: string;
    agentId?: string;
    name?: string;
    commissionRate?: number;
  };

  // Register a new agent
  if (action === "register" || (!action && name)) {
    if (!name) {
      return NextResponse.json(
        { error: "Missing required field: name" },
        { status: 400 }
      );
    }

    const id = generateAgentId();
    const rate =
      typeof commissionRate === "number" &&
      commissionRate > 0 &&
      commissionRate <= 1
        ? commissionRate
        : DEFAULT_AGENT_COMMISSION_RATE;

    const agent: AgentReferral = {
      agentId: id,
      name,
      commissionRate: rate,
      clicks: 0,
      conversions: 0,
      earnings: 0,
      createdAt: new Date().toISOString(),
      lastClickAt: null,
      lastConversionAt: null,
    };

    agentReferrals.set(id, agent);

    return NextResponse.json(
      {
        message: "Agent registered successfully",
        agentId: id,
        commissionRate: rate,
        commissionPerSale: +(PRODUCT_PRICE * rate).toFixed(2),
        referralLink: `/api/agent/referral?ref=${id}`,
      },
      { status: 201 }
    );
  }

  // Record a click
  if (action === "click") {
    if (!agentId) {
      return NextResponse.json(
        { error: "Missing required field: agentId" },
        { status: 400 }
      );
    }

    const agent = agentReferrals.get(agentId);
    if (!agent) {
      return NextResponse.json(
        { error: "Agent not found" },
        { status: 404 }
      );
    }

    agent.clicks += 1;
    agent.lastClickAt = new Date().toISOString();

    return NextResponse.json({
      message: "Click recorded",
      agentId,
      totalClicks: agent.clicks,
    });
  }

  // Record a conversion (sale)
  if (action === "conversion") {
    if (!agentId) {
      return NextResponse.json(
        { error: "Missing required field: agentId" },
        { status: 400 }
      );
    }

    const agent = agentReferrals.get(agentId);
    if (!agent) {
      return NextResponse.json(
        { error: "Agent not found" },
        { status: 404 }
      );
    }

    const commission = +(PRODUCT_PRICE * agent.commissionRate).toFixed(2);
    agent.conversions += 1;
    agent.earnings += commission;
    agent.lastConversionAt = new Date().toISOString();

    return NextResponse.json({
      message: "Conversion recorded",
      agentId,
      commissionEarned: commission,
      totalConversions: agent.conversions,
      totalEarnings: +agent.earnings.toFixed(2),
    });
  }

  return NextResponse.json(
    {
      error: "Invalid action. Use 'register', 'click', or 'conversion'.",
    },
    { status: 400 }
  );
}
