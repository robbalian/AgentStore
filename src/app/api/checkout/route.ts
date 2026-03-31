import { NextRequest, NextResponse } from "next/server";

const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://agentstore.vercel.app";

export async function POST(req: NextRequest) {
  if (!STRIPE_SECRET_KEY) {
    return NextResponse.json(
      { error: "Stripe is not configured. Use x402 payment or contact us." },
      { status: 503 }
    );
  }

  try {
    const body = new URLSearchParams({
      "payment_method_types[]": "card",
      "line_items[0][price_data][currency]": "usd",
      "line_items[0][price_data][product_data][name]":
        "BrushFit: The 2-Minute Toothbrush Workout Guide",
      "line_items[0][price_data][product_data][description]":
        "22 illustrated exercises, 4-week program, 31-page PDF",
      "line_items[0][price_data][unit_amount]": "1999",
      "line_items[0][quantity]": "1",
      mode: "payment",
      success_url: `${SITE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${SITE_URL}/?canceled=true`,
    });

    const response = await fetch("https://api.stripe.com/v1/checkout/sessions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${STRIPE_SECRET_KEY}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: body.toString(),
    });

    const session = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { error: session.error?.message || "Failed to create checkout session" },
        { status: 400 }
      );
    }

    return NextResponse.json({ url: session.url });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
