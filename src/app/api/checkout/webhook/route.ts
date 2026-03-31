import { NextRequest, NextResponse } from "next/server";
import { createDownloadToken } from "@/lib/download-tokens";

const STRIPE_WEBHOOK_SECRET = process.env.STRIPE_WEBHOOK_SECRET;
const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://agentstore.vercel.app";

async function verifyStripeSignature(payload: string, signature: string, secret: string): Promise<boolean> {
  // Parse the Stripe-Signature header
  const parts = signature.split(",").reduce((acc, part) => {
    const [key, value] = part.split("=");
    acc[key.trim()] = value;
    return acc;
  }, {} as Record<string, string>);

  const timestamp = parts["t"];
  const expectedSig = parts["v1"];

  if (!timestamp || !expectedSig) return false;

  // Verify timestamp is within 5 minutes
  const age = Math.abs(Date.now() / 1000 - parseInt(timestamp));
  if (age > 300) return false;

  // Compute expected signature
  const signedPayload = `${timestamp}.${payload}`;
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const sig = await crypto.subtle.sign("HMAC", key, encoder.encode(signedPayload));
  const computed = Array.from(new Uint8Array(sig))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");

  return computed === expectedSig;
}

export async function POST(req: NextRequest) {
  if (!STRIPE_WEBHOOK_SECRET) {
    return NextResponse.json({ error: "Webhook not configured" }, { status: 503 });
  }

  const signature = req.headers.get("stripe-signature");
  if (!signature) {
    return NextResponse.json({ error: "Missing signature" }, { status: 400 });
  }

  const body = await req.text();

  // Verify webhook signature
  const isValid = await verifyStripeSignature(body, signature, STRIPE_WEBHOOK_SECRET);
  if (!isValid) {
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  try {
    const event = JSON.parse(body);

    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object;
        const email = session.customer_details?.email;
        const sessionId = session.id;

        console.log(`Payment completed: ${sessionId}, email: ${email}`);

        // Create a download token for this purchase
        const downloadToken = createDownloadToken();
        const downloadUrl = `${SITE_URL}/api/download?token=${downloadToken}`;

        console.log(`Download token created for ${email}: ${downloadUrl}`);

        // If Stripe secret key is available, update the session metadata with the download URL
        // This allows the success page to retrieve it
        if (STRIPE_SECRET_KEY && sessionId) {
          try {
            await fetch(`https://api.stripe.com/v1/checkout/sessions/${sessionId}`, {
              method: "POST",
              headers: {
                Authorization: `Bearer ${STRIPE_SECRET_KEY}`,
                "Content-Type": "application/x-www-form-urlencoded",
              },
              body: new URLSearchParams({
                "metadata[download_token]": downloadToken,
              }).toString(),
            });
          } catch (e) {
            console.error("Failed to update session metadata:", e);
          }
        }

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
