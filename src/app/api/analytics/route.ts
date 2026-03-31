import { NextRequest, NextResponse } from "next/server";

// TODO: Replace in-memory storage with database or analytics service
// TODO: Integrate with PostHog, Mixpanel, or Plausible for production analytics
// TODO: Add rate limiting and bot filtering

interface AnalyticsEvent {
  event: string;
  timestamp: string;
  source?: string;
  referrer?: string;
  userAgent?: string;
  sessionId?: string;
  metadata?: Record<string, string>;
}

const events: AnalyticsEvent[] = [];
const validEvents = [
  "page_view",
  "button_click",
  "purchase",
  "sample_download",
  "newsletter_signup",
  "exit_intent_shown",
  "exit_intent_converted",
  "affiliate_click",
] as const;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { event, source, metadata } = body;

    if (!event || !validEvents.includes(event)) {
      return NextResponse.json(
        {
          error: `Invalid event. Must be one of: ${validEvents.join(", ")}`,
        },
        { status: 400 }
      );
    }

    const analyticsEvent: AnalyticsEvent = {
      event,
      timestamp: new Date().toISOString(),
      source: source || undefined,
      referrer: request.headers.get("referer") || undefined,
      userAgent: request.headers.get("user-agent") || undefined,
      sessionId: request.headers.get("x-session-id") || undefined,
      metadata: metadata || undefined,
    };

    events.push(analyticsEvent);

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }
}

export async function GET() {
  const now = new Date();
  const oneDayAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000);
  const sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);

  const last24h = events.filter((e) => new Date(e.timestamp) >= oneDayAgo);
  const last7d = events.filter((e) => new Date(e.timestamp) >= sevenDaysAgo);

  const countByEvent = (
    eventList: AnalyticsEvent[],
    eventName: string
  ): number => eventList.filter((e) => e.event === eventName).length;

  // Estimate unique visitors by unique user agents in the period
  const uniqueVisitors24h = new Set(
    last24h.filter((e) => e.userAgent).map((e) => e.userAgent)
  ).size;
  const uniqueVisitors7d = new Set(
    last7d.filter((e) => e.userAgent).map((e) => e.userAgent)
  ).size;

  return NextResponse.json({
    total: {
      events: events.length,
      pageViews: countByEvent(events, "page_view"),
      purchases: countByEvent(events, "purchase"),
      sampleDownloads: countByEvent(events, "sample_download"),
      newsletterSignups: countByEvent(events, "newsletter_signup"),
      buttonClicks: countByEvent(events, "button_click"),
    },
    last24h: {
      events: last24h.length,
      pageViews: countByEvent(last24h, "page_view"),
      uniqueVisitorsEstimate: uniqueVisitors24h,
      purchases: countByEvent(last24h, "purchase"),
      sampleDownloads: countByEvent(last24h, "sample_download"),
      newsletterSignups: countByEvent(last24h, "newsletter_signup"),
    },
    last7d: {
      events: last7d.length,
      pageViews: countByEvent(last7d, "page_view"),
      uniqueVisitorsEstimate: uniqueVisitors7d,
      purchases: countByEvent(last7d, "purchase"),
      sampleDownloads: countByEvent(last7d, "sample_download"),
      newsletterSignups: countByEvent(last7d, "newsletter_signup"),
    },
  });
}
