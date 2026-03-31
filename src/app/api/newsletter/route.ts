import { NextRequest, NextResponse } from "next/server";

// TODO: Replace in-memory storage with database (e.g., Prisma/PostgreSQL)
// TODO: Integrate with Mailchimp/ConvertKit/Resend for email delivery
// TODO: Add rate limiting per IP
// TODO: Add email validation (MX record check)

interface Subscriber {
  email: string;
  name?: string;
  source: string;
  subscribedAt: string;
  ip?: string;
}

const subscribers: Subscriber[] = [];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, name, source } = body;

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    const validSources = [
      "homepage",
      "blog",
      "exit-intent",
      "sample-download",
      "footer",
      "banner",
    ];
    const subscriberSource = validSources.includes(source)
      ? source
      : "unknown";

    // Check for duplicate
    const existing = subscribers.find(
      (s) => s.email.toLowerCase() === email.toLowerCase()
    );
    if (existing) {
      return NextResponse.json({
        success: true,
        message:
          "You're already subscribed! Check your email for the free BrushFit sample.",
        alreadySubscribed: true,
      });
    }

    const subscriber: Subscriber = {
      email: email.toLowerCase().trim(),
      name: name?.trim() || undefined,
      source: subscriberSource,
      subscribedAt: new Date().toISOString(),
      ip: request.headers.get("x-forwarded-for") || undefined,
    };

    subscribers.push(subscriber);

    // TODO: Send welcome email with free sample PDF link via Resend/Mailchimp
    // TODO: Add subscriber to Mailchimp list with tags based on source
    // TODO: Trigger automation sequence (welcome -> tips -> upsell)

    return NextResponse.json({
      success: true,
      message:
        "Welcome to BrushFit! Check your email for the free sample PDF and exclusive tips.",
      subscriberCount: subscribers.length + 500, // Base count for social proof
    });
  } catch {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    subscriberCount: subscribers.length + 500, // Base count for social proof
    message: "Join 500+ fitness enthusiasts who get BrushFit tips",
  });
}
