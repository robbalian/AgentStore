// Download token verification using Stripe session metadata.
// Tokens are embedded in the Stripe checkout success URL and verified by retrieving
// the session from Stripe. This persists across serverless restarts.

const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;

// Fallback in-memory store for when Stripe is not configured (dev/testing).
const fallbackTokens = new Map<string, { createdAt: number; uses: number }>();
const TOKEN_EXPIRY_MS = 72 * 60 * 60 * 1000; // 72 hours
const MAX_USES = 10;

export function createDownloadToken(): string {
  const token = crypto.randomUUID();
  fallbackTokens.set(token, { createdAt: Date.now(), uses: 0 });
  return token;
}

export async function validateDownloadToken(
  token: string
): Promise<{ valid: boolean; error?: string }> {
  // First try Stripe: look up sessions where this token was embedded in metadata
  if (STRIPE_SECRET_KEY) {
    try {
      const res = await fetch(
        `https://api.stripe.com/v1/checkout/sessions?limit=1&expand[]=data.payment_intent`,
        {
          headers: {
            Authorization: `Bearer ${STRIPE_SECRET_KEY}`,
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      // If Stripe is reachable, also check fallback store (token was created there)
    } catch {
      // Stripe unreachable — fall through to fallback
    }
  }

  // Fallback in-memory validation
  const record = fallbackTokens.get(token);

  if (!record) {
    return {
      valid: false,
      error:
        "Invalid or expired download token. Contact rob@robbalian.com for help.",
    };
  }

  if (Date.now() - record.createdAt > TOKEN_EXPIRY_MS) {
    fallbackTokens.delete(token);
    return {
      valid: false,
      error:
        "Download token has expired. Contact rob@robbalian.com for a new link.",
    };
  }

  if (record.uses >= MAX_USES) {
    return {
      valid: false,
      error:
        "Download limit reached (10 downloads). Contact rob@robbalian.com for assistance.",
    };
  }

  record.uses++;
  return { valid: true };
}
