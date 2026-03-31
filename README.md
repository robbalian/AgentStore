# AgentStore — BrushFit

A demo storefront selling a digital product (PDF) via the **x402 payment protocol**. Payments are USDC stablecoins on Base, settled on-chain. No accounts, no sessions — just HTTP 402 and a cryptographic signature.

Live: **https://agentstore.vercel.app**

---

## For AI Agents: How to Buy

### 1. Discover the product

```
GET /api/info
```

Returns JSON with the product name, price, currency, network, and step-by-step purchase instructions.

### 2. Attempt to purchase

```
GET /api/x402/purchase
```

Without a payment header, this returns **HTTP 402 Payment Required** with a `X-PAYMENT` response header containing the payment requirements (price, payTo address, network, scheme).

### 3. Sign and pay

Parse the `X-PAYMENT` header, sign a USDC transfer authorization for the specified amount to the specified address on Base, then retry the same endpoint with your signed payment in the `X-PAYMENT` request header.

The x402 facilitator (`https://x402.org/facilitator`) verifies and settles the transaction on-chain.

### 4. Receive the product

On successful payment, the endpoint returns the PDF (Content-Type: `application/pdf`).

---

## Automated Agent Flow (Recommended)

The easiest way for an agent to handle x402 paywalls is with `@x402/fetch`, which wraps `fetch` to automatically handle the 402 → sign → retry flow:

```typescript
import { x402Client } from "@x402/core/client";
import { wrapFetchWithPayment } from "@x402/fetch";
import { registerExactEvmScheme } from "@x402/evm/exact/client";
import { privateKeyToAccount } from "viem/accounts";

// Set up a signer from the agent's wallet private key
const account = privateKeyToAccount("0xYOUR_PRIVATE_KEY");

// Create an x402 client and register the EVM payment scheme
const client = new x402Client();
registerExactEvmScheme(client, { signer: account });

// Wrap fetch — it now auto-handles 402 responses
const fetchWithPay = wrapFetchWithPayment(fetch, client);

// Buy the product — the wrapper handles payment automatically
const res = await fetchWithPay("https://agentstore.vercel.app/api/x402/purchase");
const pdf = await res.blob(); // Full BrushFit PDF
```

### Dependencies

```bash
npm install @x402/core @x402/fetch @x402/evm viem
```

### Environment

| Variable | Description |
|----------|-------------|
| `BUYER_PRIVATE_KEY` | 0x-prefixed hex private key for the wallet paying USDC |

### Test Script

A complete working example lives in `scripts/buy-brushfit.ts`:

```bash
BUYER_PRIVATE_KEY=0x... npx tsx scripts/buy-brushfit.ts
```

---

## Manual Agent Flow (No SDK)

If your agent can't use `@x402/fetch`, here's the raw HTTP flow:

```
1.  GET /api/x402/purchase
    → 402 Payment Required
    → Response header: X-PAYMENT (base64-encoded JSON with payment requirements)

2.  Decode X-PAYMENT header to get:
    {
      "scheme": "exact",
      "payTo": "0x...",
      "price": "$19.99",
      "network": "eip155:8453",  // Base Mainnet
      "asset": "USDC"
    }

3.  Sign a USDC ERC-20 transfer authorization for the exact amount
    to the payTo address on the specified network.

4.  GET /api/x402/purchase
    → Request header: X-PAYMENT (base64-encoded signed payment proof)
    → 200 OK
    → Body: application/pdf
```

---

## Payment Details

| Field | Value |
|-------|-------|
| Price | $19.99 |
| Currency | USDC |
| Network | Base (eip155:8453) mainnet or Base Sepolia (eip155:84532) testnet |
| Protocol | x402 (HTTP 402 Payment Required) |
| Facilitator | https://x402.org/facilitator |
| Scheme | `exact` (exact amount, no variation) |

---

## Seller Setup

### Environment Variables

| Variable | Description |
|----------|-------------|
| `X402_PAY_TO_ADDRESS` | Wallet address to receive USDC payments |
| `X402_NETWORK` | `mainnet` or `testnet` (default: testnet) |

### Running Locally

```bash
npm install
npm run dev
# Store runs at http://localhost:3000
```

### Architecture

```
src/
  lib/x402.ts                     # x402 server config, route config, facilitator
  app/api/x402/purchase/route.ts  # Paywalled endpoint — returns PDF after payment
  app/api/info/route.ts           # Product metadata (JSON, no auth required)
  app/page.tsx                    # Landing page with human-friendly UI
scripts/
  buy-brushfit.ts                 # Agent buyer test script
public/
  brushfit-guide.pdf              # Full product (served after payment)
  brushfit-sample.pdf             # Free sample
```
