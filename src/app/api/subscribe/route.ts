import { NextRequest, NextResponse } from "next/server";
import { appendFile } from "fs/promises";
import { join } from "path";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ error: "Valid email required." }, { status: 400 });
    }

    // Sanitize email
    const sanitized = email.trim().toLowerCase().slice(0, 254);

    // Append to subscribers file (simple flat-file storage)
    // In production, use a database or email service API (Mailchimp, Resend, etc.)
    const subscribersPath = join(process.cwd(), "subscribers.csv");
    const timestamp = new Date().toISOString();
    await appendFile(subscribersPath, `${sanitized},${timestamp}\n`);

    console.log(`New subscriber: ${sanitized}`);

    return NextResponse.json({ success: true, message: "You're in! Check your inbox for BrushFit tips." });
  } catch {
    return NextResponse.json({ error: "Something went wrong. Try again." }, { status: 500 });
  }
}
