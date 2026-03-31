import { NextRequest, NextResponse } from "next/server";

// Email subscriber storage — in production, use a database or email service API
// (Mailchimp, ConvertKit, Resend, etc.)
const subscribers = new Set<string>();

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { error: "Valid email required." },
        { status: 400 }
      );
    }

    const normalizedEmail = email.toLowerCase().trim();
    subscribers.add(normalizedEmail);

    // TODO: Send to email marketing provider (ConvertKit, Resend, Mailchimp)
    // For now, log to server console so you can capture subscribers
    console.log(`[SUBSCRIBER] ${normalizedEmail} — ${new Date().toISOString()}`);

    return NextResponse.json({
      success: true,
      message: "You're in! Check your inbox for BrushFit tips.",
    });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Try again." },
      { status: 500 }
    );
  }
}
