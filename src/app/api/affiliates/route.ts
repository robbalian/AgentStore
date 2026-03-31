import { NextRequest, NextResponse } from "next/server";

const PRODUCT_PRICE = 19.99;
const DEFAULT_AFFILIATE_COMMISSION_RATE = 0.25; // 25% = $5.00 per sale
const COOKIE_WINDOW_DAYS = 90;
const PAYOUT_SCHEDULE = "Monthly via PayPal";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Accept",
};

export interface Affiliate {
  code: string;
  name: string;
  email: string;
  website: string;
  promotionPlan: string;
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
 * GET /api/affiliates — Affiliate program info or affiliate stats
 *   ?code=XXX  — stats for a specific affiliate
 *   (no params) — program overview and terms
 */
export async function GET(req: NextRequest) {
  const code = req.nextUrl.searchParams.get("code");

  // If no code, return program information
  if (!code) {
    return NextResponse.json(
      {
        program: "BrushFit Affiliate Program",
        product: "BrushFit: The 2-Minute Toothbrush Workout Guide",
        productPrice: PRODUCT_PRICE,
        commissionRate: DEFAULT_AFFILIATE_COMMISSION_RATE,
        commissionPerSale: +(PRODUCT_PRICE * DEFAULT_AFFILIATE_COMMISSION_RATE).toFixed(2),
        cookieWindowDays: COOKIE_WINDOW_DAYS,
        payoutSchedule: PAYOUT_SCHEDULE,
        terms: {
          commission: `${(DEFAULT_AFFILIATE_COMMISSION_RATE * 100).toFixed(0)}% commission ($${(PRODUCT_PRICE * DEFAULT_AFFILIATE_COMMISSION_RATE).toFixed(2)}) per sale`,
          cookieWindow: `${COOKIE_WINDOW_DAYS}-day cookie — you earn commission on any purchase within ${COOKIE_WINDOW_DAYS} days of a referral click`,
          payouts: "Monthly PayPal payouts on the 1st of each month for the previous month's earnings",
          minimumPayout: "$10.00 minimum payout threshold",
          restrictions: "No spam, no misleading claims, no bidding on branded keywords",
        },
        howToJoin: {
          step1: "POST /api/affiliates with { name, email, website, promotionPlan }",
          step2: "Receive your unique affiliate code and referral link",
          step3: "Share your referral link on your website, social media, or newsletter",
          step4: "Track your stats at GET /api/affiliates?code=YOUR_CODE",
          step5: "Receive monthly PayPal payouts for earned commissions",
        },
        totalAffiliates: affiliates.size,
        links: {
          signup: "POST /api/affiliates",
          track: "/api/affiliates/track?ref=YOUR_CODE",
          dashboard: "/affiliates/dashboard?code=YOUR_CODE",
          productPage: "/buy",
          freeSample: "/brushfit-sample.pdf",
        },
      },
      { headers: corsHeaders }
    );
  }

  const affiliate = affiliates.get(code);
  if (!affiliate) {
    return NextResponse.json(
      { error: "Affiliate not found" },
      { status: 404, headers: corsHeaders }
    );
  }

  const conversionRate =
    affiliate.clicks > 0
      ? ((affiliate.conversions / affiliate.clicks) * 100).toFixed(1)
      : "0.0";

  return NextResponse.json(
    {
      code: affiliate.code,
      name: affiliate.name,
      email: affiliate.email,
      website: affiliate.website,
      promotionPlan: affiliate.promotionPlan,
      commissionRate: affiliate.commissionRate,
      commissionPerSale: +(PRODUCT_PRICE * affiliate.commissionRate).toFixed(2),
      cookieWindowDays: COOKIE_WINDOW_DAYS,
      payoutSchedule: PAYOUT_SCHEDULE,
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
    },
    { headers: corsHeaders }
  );
}

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

  const { name, email, website, promotionPlan, paypal_email, action, code } =
    body as {
      name?: string;
      email?: string;
      website?: string;
      promotionPlan?: string;
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
        { status: 404, headers: corsHeaders }
      );
    }

    const commission = +(PRODUCT_PRICE * affiliate.commissionRate).toFixed(2);
    affiliate.conversions += 1;
    affiliate.earnings += commission;
    affiliate.lastConversionAt = new Date().toISOString();

    return NextResponse.json(
      {
        message: "Conversion recorded",
        code: affiliate.code,
        commissionEarned: commission,
        totalConversions: affiliate.conversions,
        totalEarnings: +affiliate.earnings.toFixed(2),
      },
      { headers: corsHeaders }
    );
  }

  // Register a new affiliate
  if (!name || !email) {
    return NextResponse.json(
      {
        error:
          "Missing required fields: name and email are required. Optional: website, promotionPlan, paypal_email.",
      },
      { status: 400, headers: corsHeaders }
    );
  }

  // Check for duplicate email
  for (const affiliate of affiliates.values()) {
    if (affiliate.email === email) {
      return NextResponse.json(
        { error: "An affiliate with this email already exists" },
        { status: 409, headers: corsHeaders }
      );
    }
  }

  const affiliateCode = generateAffiliateCode(name);

  const affiliate: Affiliate = {
    code: affiliateCode,
    name,
    email,
    website: website || "",
    promotionPlan: promotionPlan || "",
    paypalEmail: paypal_email || email,
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
      cookieWindowDays: COOKIE_WINDOW_DAYS,
      payoutSchedule: PAYOUT_SCHEDULE,
      referralLink: `/api/affiliates/track?ref=${affiliateCode}`,
      dashboardLink: `/affiliates/dashboard?code=${affiliateCode}`,
    },
    { status: 201, headers: corsHeaders }
  );
}

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: corsHeaders });
}
