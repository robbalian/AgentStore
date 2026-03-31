// Signed download tokens using HMAC-SHA256.
// No external database needed — tokens are self-validating and survive serverless restarts.

const SECRET = process.env.DOWNLOAD_TOKEN_SECRET || process.env.STRIPE_WEBHOOK_SECRET || "brushfit-download-secret-change-me";
const TOKEN_EXPIRY_MS = 24 * 60 * 60 * 1000; // 24 hours
const MAX_DOWNLOADS = 5;

// In-memory counter for download tracking (best-effort rate limiting)
// This is supplementary — the real security is the HMAC signature + expiry
const downloadCounts = new Map<string, number>();

// Periodically clean up old entries to prevent memory leaks
setInterval(() => {
  downloadCounts.clear();
}, 60 * 60 * 1000); // Clear every hour

async function hmacSign(data: string): Promise<string> {
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(SECRET),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const sig = await crypto.subtle.sign("HMAC", key, encoder.encode(data));
  return Array.from(new Uint8Array(sig))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

async function hmacVerify(data: string, signature: string): Promise<boolean> {
  const expected = await hmacSign(data);
  return expected === signature;
}

export async function createDownloadToken(): Promise<string> {
  const id = crypto.randomUUID();
  const createdAt = Date.now();
  const payload = `${id}:${createdAt}`;
  const sig = await hmacSign(payload);
  // Token format: id:createdAt:signature (base64url encoded)
  const token = btoa(`${payload}:${sig}`).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
  return token;
}

export async function validateDownloadToken(token: string): Promise<{ valid: boolean; error?: string }> {
  try {
    // Decode token
    const padded = token.replace(/-/g, "+").replace(/_/g, "/");
    const decoded = atob(padded);
    const parts = decoded.split(":");
    if (parts.length !== 3) {
      return { valid: false, error: "Invalid download token format." };
    }

    const [id, createdAtStr, sig] = parts;
    const createdAt = parseInt(createdAtStr, 10);

    if (isNaN(createdAt)) {
      return { valid: false, error: "Invalid download token." };
    }

    // Verify HMAC signature
    const payload = `${id}:${createdAtStr}`;
    const isValid = await hmacVerify(payload, sig);
    if (!isValid) {
      return { valid: false, error: "Invalid download token." };
    }

    // Check expiry
    if (Date.now() - createdAt > TOKEN_EXPIRY_MS) {
      return { valid: false, error: "Download token has expired. Contact rob@robbalian.com for assistance." };
    }

    // Best-effort download counting
    const count = downloadCounts.get(id) || 0;
    if (count >= MAX_DOWNLOADS) {
      return { valid: false, error: "Download limit reached. Contact rob@robbalian.com for assistance." };
    }
    downloadCounts.set(id, count + 1);

    return { valid: true };
  } catch {
    return { valid: false, error: "Invalid download token." };
  }
}
