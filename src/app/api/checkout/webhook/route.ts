import { NextRequest, NextResponse } from "next/server";

const STRIPE_WEBHOOK_SECRET = process.env.STRIPE_WEBHOOK_SECRET;

export async function POST(req: NextRequest) {
  if (!STRIPE_WEBHOOK_SECRET) {
    return NextResponse.json({ error: "Webhook not configured" }, { status: 503 });
  }

  const signature = req.headers.get("stripe-signature");
  if (!signature) {
    return NextResponse.json({ error: "Missing signature" }, { status: 400 });
  }

  const body = await req.text();

  // For production, verify the webhook signature using Stripe's library
  // For now, we log the event and acknowledge receipt
  try {
    const event = JSON.parse(body);

    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object;
        console.log(`Payment completed: ${session.id}, email: ${session.customer_details?.email}`);
        // TODO: Send PDF download link via email using a service like Resend/SendGrid
        break;
      }
      case "payment_intent.payment_failed": {
        const intent = event.data.object;
        console.log(`Payment failed: ${intent.id}`);
        break;
      }
    }

    return NextResponse.json({ received: true });
  } catch {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }
}
