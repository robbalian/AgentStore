/**
 * Agent buyer script — purchases BrushFit via x402 protocol
 *
 * Usage:
 *   npx tsx scripts/buy-brushfit.ts
 *
 * Env vars (or set in .env):
 *   BUYER_PRIVATE_KEY  — private key of the wallet paying USDC
 *   STORE_URL          — base URL of the store (default: http://localhost:3000)
 */

import { x402Client } from "@x402/core/client";
import { wrapFetchWithPayment } from "@x402/fetch";
import { registerExactEvmScheme } from "@x402/evm/exact/client";
import { privateKeyToAccount } from "viem/accounts";
import { writeFileSync } from "fs";

const BUYER_KEY = process.env.BUYER_PRIVATE_KEY;
if (!BUYER_KEY) {
  console.error("Set BUYER_PRIVATE_KEY env var (0x-prefixed hex)");
  process.exit(1);
}

const STORE_URL = process.env.STORE_URL || "http://localhost:3000";

async function main() {
  console.log("🤖 BrushFit Agent Buyer");
  console.log(`   Store: ${STORE_URL}`);
  console.log();

  // 1. Discover product info
  console.log("1️⃣  Discovering product...");
  const infoRes = await fetch(`${STORE_URL}/api/info`);
  const info = await infoRes.json();
  console.log(`   Product: ${info.product}`);
  console.log(`   Price:   ${info.price} ${info.currency} on ${info.network}`);
  console.log();

  // 2. Set up x402 payment client
  console.log("2️⃣  Setting up x402 payment client...");
  const account = privateKeyToAccount(BUYER_KEY as `0x${string}`);
  console.log(`   Buyer wallet: ${account.address}`);

  const client = new x402Client();
  registerExactEvmScheme(client, { signer: account });

  const fetchWithPay = wrapFetchWithPayment(fetch, client);
  console.log();

  // 3. Purchase — this handles the 402 → sign → retry flow automatically
  console.log("3️⃣  Purchasing BrushFit via x402...");
  console.log("   → GET /api/x402/purchase");
  console.log("   → Expecting 402 Payment Required...");
  console.log("   → Will auto-sign USDC transfer and retry...");
  console.log();

  const res = await fetchWithPay(`${STORE_URL}/api/x402/purchase`);

  console.log(`   Response: ${res.status} ${res.statusText}`);

  // Check payment response header
  const paymentResponse = res.headers.get("payment-response");
  if (paymentResponse) {
    const decoded = JSON.parse(
      Buffer.from(paymentResponse, "base64").toString()
    );
    console.log(`   Settlement: ${decoded.success ? "✅ SUCCESS" : "❌ FAILED"}`);
    if (decoded.transaction) {
      console.log(`   Transaction: ${decoded.transaction}`);
    }
  }

  if (res.ok) {
    // 4. Save the PDF
    const pdfBuffer = Buffer.from(await res.arrayBuffer());
    const outPath = "BrushFit-Guide-PURCHASED.pdf";
    writeFileSync(outPath, pdfBuffer);
    console.log();
    console.log(`4️⃣  ✅ PDF saved to ${outPath} (${(pdfBuffer.length / 1024).toFixed(0)} KB)`);
    console.log();
    console.log("Done! The agent successfully purchased BrushFit via x402.");
  } else {
    console.error();
    console.error(`❌ Purchase failed: ${res.status}`);
    const body = await res.text();
    console.error(body.slice(0, 500));
  }
}

main().catch((err) => {
  console.error("Fatal error:", err.message || err);
  process.exit(1);
});
