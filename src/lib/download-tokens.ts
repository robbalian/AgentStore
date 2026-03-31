// In-memory download token store.
// In production, use Redis or a database for persistence across serverless invocations.
const downloadTokens = new Map<string, { createdAt: number; uses: number }>();

const TOKEN_EXPIRY_MS = 24 * 60 * 60 * 1000; // 24 hours
const MAX_USES = 5;

export function createDownloadToken(): string {
  const token = crypto.randomUUID();
  downloadTokens.set(token, { createdAt: Date.now(), uses: 0 });
  return token;
}

export function validateDownloadToken(token: string): { valid: boolean; error?: string } {
  const record = downloadTokens.get(token);

  if (!record) {
    return { valid: false, error: "Invalid or expired download token." };
  }

  if (Date.now() - record.createdAt > TOKEN_EXPIRY_MS) {
    downloadTokens.delete(token);
    return { valid: false, error: "Download token has expired. Contact rob@robbalian.com for assistance." };
  }

  if (record.uses >= MAX_USES) {
    return { valid: false, error: "Download limit reached. Contact rob@robbalian.com for assistance." };
  }

  record.uses++;
  return { valid: true };
}
