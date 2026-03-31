import { NextRequest, NextResponse } from "next/server";

const PRODUCT_PRICE = 19.99;
const DEFAULT_AFFILIATE_COMMISSION_RATE = 0.25; // 25% = $5.00 per sale

export interface Affiliate {
  code: string;
  name: string;
  email: string;
  website: string;
  paypalEmail: string;
  commissionRate: number;
  clicks: number;
  conversions: number;
  earnings: number;
  createdAt: string;
  lastClickAt: string | null;
  lastConversionAt: string | null;
}

// In-memory store (replace with database in production)
// Exported so the track route can increment clicks directly.
export const affiliates = new Map<string, Affiliate>();

function generateAffiliateCode(name: string): string {
  const slug = name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "")
    .slice(0, 8);
  const suffix = crypto.randomUUID().slice(0, 6);
  return `${slug}-${suffix}`;
}

/**
 * GET /api/affiliates?code=XXX — Get affiliate stats by code
 * POST /api/affiliates — Register a new affiliate or record a conversion
 */
export async function GET(req: NextRequest) {
  const code = req.nextUrl.searchParams.get("code");

  if (!code) {
    return NextResponse.json(
      { error: "Missing code query parameter" },
      { status: 400 }
    );
  }

  const affiliate = affiliates.get(code);
  if (!affiliate) {
    return NextResponse.json(
      { error: "Affiliate not found" },
      { status: 404 }
    );
  }

  const conversionRate =
    affiliate.clicks > 0
      ? ((affiliate.conversions / affiliate.clicks) * 100).toFixed(1)
      : "0.0";

  return NextResponse.json({
    code: affiliate.code,
    name: affiliate.name,
    email: affiliate.email,
    commissionRate: affiliate.commissionRate,
    commissionPerSale: +(PRODUCT_PRICE * affiliate.commissionRate).toFixed(2),
    stats: {
      clicks: affiliate.clicks,
      conversions: affiliate.conversions,
      conversionRate: conversionRate + "%",
      totalEarnings: +affiliate.earnings.toFixed(2),
      pendingPayout: +affiliate.earnings.toFixed(2),
    },
    referralLink: `/api/affiliates/track?ref=${affiliate.code}`,
    dashboardLink: `/affiliates/dashboard?code=${affiliate.code}`,
    createdAt: affiliate.createdAt,
    lastClickAt: affiliate.lastClickAt,
    lastConversionAt: affiliate.lastConversionAt,
  });
}

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({}));
  const { name, email, website, paypal_email, action, code } = body as {
    name?: string;
    email?: string;
    website?: string;
    paypal_email?: string;
    action?: string;
    code?: string;
  };

  // Record a conversion (called when a sale is attributed to an affiliate)
  if (action === "conversion" && code) {
    const affiliate = affiliates.get(code);
    if (!affiliate) {
      return NextResponse.json(
        { error: "Affiliate not found" },
        { status: 404 }
      );
    }

    const commission = +(PRODUCT_PRICE * affiliate.commissionRate).toFixed(2);
    affiliate.conversions += 1;
    affiliate.earnings += commission;
    affiliate.lastConversionAt = new Date().toISOString();

    return NextResponse.json({
      message: "Conversion recorded",
      code: affiliate.code,
      commissionEarned: commission,
      totalConversions: affiliate.conversions,
      totalEarnings: +affiliate.earnings.toFixed(2),
    });
  }

  // Register a new affiliate
  if (!name || !email || !paypal_email) {
    return NextResponse.json(
      {
        error:
          "Missing required fields: name, email, and paypal_email are required",
      },
      { status: 400 }
    );
  }

  // Check for duplicate email
  for (const affiliate of affiliates.values()) {
    if (affiliate.email === email) {
      return NextResponse.json(
        { error: "An affiliate with this email already exists" },
        { status: 409 }
      );
    }
  }

  const affiliateCode = generateAffiliateCode(name);

  const affiliate: Affiliate = {
    code: affiliateCode,
    name,
    email,
    website: website || "",
    paypalEmail: paypal_email,
    commissionRate: DEFAULT_AFFILIATE_COMMISSION_RATE,
    clicks: 0,
    conversions: 0,
    earnings: 0,
    createdAt: new Date().toISOString(),
    lastClickAt: null,
    lastConversionAt: null,
  };

  affiliates.set(affiliateCode, affiliate);

  return NextResponse.json(
    {
      message: "Affiliate registered successfully",
      code: affiliateCode,
      commissionRate: DEFAULT_AFFILIATE_COMMISSION_RATE,
      commissionPerSale: +(
        PRODUCT_PRICE * DEFAULT_AFFILIATE_COMMISSION_RATE
      ).toFixed(2),
      referralLink: `/api/affiliates/track?ref=${affiliateCode}`,
      dashboardLink: `/affiliates/dashboard?code=${affiliateCode}`,
    },
    { status: 201 }
  );
}
