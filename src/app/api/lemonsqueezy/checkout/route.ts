import { NextResponse } from "next/server";

export async function GET() {
  const lemonUrl = process.env.LEMONSQUEEZY_CHECKOUT_URL;
  if (lemonUrl) {
    return NextResponse.redirect(lemonUrl);
  }
  return NextResponse.json({
    product: "BrushFit: The 2-Minute Toothbrush Workout Guide",
    price: "$19.99",
    message: "Lemon Squeezy checkout is being configured. Please use another payment method.",
    alternative_checkout: "/buy",
    setup_instructions: "Set LEMONSQUEEZY_CHECKOUT_URL environment variable to enable Lemon Squeezy checkout.",
  });
}
