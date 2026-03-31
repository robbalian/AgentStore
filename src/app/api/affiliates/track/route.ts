import { NextRequest, NextResponse } from "next/server";
import { affiliates } from "../route";

interface ClickRecord {
  affiliateCode: string;
  ip: string;
  userAgent: string;
  timestamp: string;
}

// In-memory click log (replace with database in production)
const clickLog: ClickRecord[] = [];

/**
 * GET /api/affiliates/track?ref=CODE — Record a click and redirect to homepage
 *
 * Increments the affiliate's click count, logs the click details (IP, user
 * agent, timestamp), sets a 90-day `ref` cookie, and redirects to the
 * homepage.
 */
export async function GET(req: NextRequest) {
  const code = req.nextUrl.searchParams.get("ref");

  if (!code) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // Look up the affiliate and increment clicks directly on the shared store
  const affiliate = affiliates.get(code);
  if (!affiliate) {
    // Invalid code — redirect to homepage without setting a cookie
    return NextResponse.redirect(new URL("/", req.url));
  }

  // Record click details
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown";
  const userAgent = req.headers.get("user-agent") || "unknown";
  const now = new Date().toISOString();

  clickLog.push({
    affiliateCode: code,
    ip,
    userAgent,
    timestamp: now,
  });

  // Increment click count on the affiliate record
  affiliate.clicks += 1;
  affiliate.lastClickAt = now;

  // Redirect to homepage with ref cookie (90-day expiry)
  const response = NextResponse.redirect(new URL("/", req.url));

  response.cookies.set("ref", code, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 90, // 90 days
    path: "/",
  });

  return response;
}

/** Export click log for analytics or other route handlers */
export function getClickLog() {
  return clickLog;
}
