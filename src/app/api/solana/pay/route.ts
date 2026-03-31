import { NextRequest, NextResponse } from "next/server";

const SOLANA_PAY_RECIPIENT = process.env.SOLANA_PAY_RECIPIENT;

// USDC-SPL token mint on Solana mainnet
const USDC_SPL_MINT = "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v";
const PRICE_USDC = 19.99;
// USDC has 6 decimals on Solana
const PRICE_LAMPORTS = Math.round(PRICE_USDC * 1_000_000);

export async function GET(_req: NextRequest) {
  if (!SOLANA_PAY_RECIPIENT) {
    return NextResponse.json(
      {
        error: "Solana Pay is not configured.",
        message:
          "Set the SOLANA_PAY_RECIPIENT environment variable to a Solana wallet address to enable Solana Pay.",
        alternatives: {
          x402: "https://agentstore.vercel.app/api/x402/purchase",
          stripe: "https://agentstore.vercel.app/api/checkout",
          coinbase: "https://agentstore.vercel.app/api/coinbase/checkout",
          direct_crypto: "https://agentstore.vercel.app/pay/crypto",
        },
      },
      { status: 503 }
    );
  }

  // Solana Pay transaction request format
  // https://docs.solanapay.com/spec#transaction-request
  const reference = generateReference();

  const transactionRequest = {
    label: "BrushFit",
    icon: "https://agentstore.vercel.app/icon.png",
    message: "BrushFit: The 2-Minute Toothbrush Workout Guide — $19.99 USDC",
    recipient: SOLANA_PAY_RECIPIENT,
    amount: PRICE_USDC,
    splToken: USDC_SPL_MINT,
    reference,
    memo: "brushfit-guide",
  };

  // Also produce a solana: URI for QR codes / deep links
  const solanaPayUrl = buildSolanaPayUrl(SOLANA_PAY_RECIPIENT);

  return NextResponse.json({
    ...transactionRequest,
    solana_pay_url: solanaPayUrl,
    price: { amount: String(PRICE_USDC), currency: "USDC", lamports: PRICE_LAMPORTS },
    instructions:
      "Send the USDC-SPL transfer to the recipient address. After payment, email your transaction signature to rob@robbalian.com to receive the PDF.",
    configured: true,
  });
}

function generateReference(): string {
  const bytes = new Uint8Array(32);
  crypto.getRandomValues(bytes);
  return Array.from(bytes)
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

function buildSolanaPayUrl(recipient: string): string {
  // solana:<recipient>?amount=<amount>&spl-token=<mint>&memo=brushfit-guide
  const params = new URLSearchParams({
    amount: String(PRICE_USDC),
    "spl-token": USDC_SPL_MINT,
    memo: "brushfit-guide",
    label: "BrushFit",
    message: "BrushFit Workout Guide",
  });
  return `solana:${recipient}?${params.toString()}`;
}
