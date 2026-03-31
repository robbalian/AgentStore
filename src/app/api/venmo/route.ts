import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    product: "BrushFit: The 2-Minute Toothbrush Workout Guide",
    price: "$19.99",
    payment_methods: {
      venmo: { handle: "@robbalian", note: "BrushFit Guide" },
      cashapp: { handle: "$robbalian", note: "BrushFit Guide" },
      zelle: { email: "rob@robbalian.com", note: "BrushFit Guide" },
    },
    after_payment:
      "Email your payment confirmation to rob@robbalian.com to receive your PDF within 1 hour.",
    instant_alternatives: {
      stripe: "/api/checkout",
      x402: "/api/x402/purchase",
    },
  });
}
