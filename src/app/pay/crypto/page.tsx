import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pay with Crypto — Direct Transfer | BrushFit",
  description:
    "Send BTC, ETH, or USDC directly to purchase BrushFit ($19.99). Manual crypto payment with wallet addresses and QR codes.",
  alternates: { canonical: "https://agentstore.vercel.app/pay/crypto" },
};

const USDC_BASE_ADDRESS =
  process.env.NEXT_PUBLIC_USDC_BASE_ADDRESS || "";
const ETH_ADDRESS =
  process.env.NEXT_PUBLIC_ETH_ADDRESS || "";
const BTC_ADDRESS = process.env.NEXT_PUBLIC_BTC_ADDRESS || "";
const SOLANA_ADDRESS = process.env.NEXT_PUBLIC_SOLANA_ADDRESS || "";

function qrImageUrl(data: string): string {
  // Use a public QR code API for simplicity — no JS dependency needed
  return `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(data)}`;
}

function WalletCard({
  name,
  symbol,
  address,
  network,
  color,
  qrData,
}: {
  name: string;
  symbol: string;
  address: string;
  network: string;
  color: string;
  qrData?: string;
}) {
  if (!address) return null;
  const qr = qrData || address;

  return (
    <div className={`rounded-2xl border-2 p-6 ${color}`}>
      <div className="mb-2 flex items-center justify-between">
        <h3 className="text-lg font-bold">{name}</h3>
        <span className="rounded-full bg-white/80 px-3 py-0.5 text-xs font-semibold">
          {symbol}
        </span>
      </div>
      <p className="mb-4 text-xs text-gray-600">{network}</p>

      <div className="mb-4 flex justify-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={qrImageUrl(qr)}
          alt={`QR code for ${name} address`}
          width={160}
          height={160}
          className="rounded-lg border bg-white p-1"
        />
      </div>

      <div className="rounded-lg bg-white/70 p-3">
        <p className="mb-1 text-xs font-semibold text-gray-500">
          Send exactly $19.99 worth of {symbol} to:
        </p>
        <p className="break-all font-mono text-xs text-gray-800">{address}</p>
      </div>
    </div>
  );
}

export default function CryptoPayPage() {
  const hasAnyAddress = USDC_BASE_ADDRESS || ETH_ADDRESS || BTC_ADDRESS || SOLANA_ADDRESS;

  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-4xl px-6 pt-16 pb-20">
        <a
          href="/buy"
          className="mb-8 inline-block text-sm text-indigo-600 hover:text-indigo-700"
        >
          &larr; Back to all payment methods
        </a>

        <h1 className="mb-2 text-4xl font-extrabold tracking-tight sm:text-5xl">
          Pay with Crypto
        </h1>
        <p className="mb-4 text-xl text-gray-500">
          BrushFit — $19.99 via direct crypto transfer
        </p>

        <div className="mb-10 rounded-xl border-2 border-amber-200 bg-amber-50 p-5">
          <h2 className="mb-2 text-lg font-bold text-amber-800">
            How it works
          </h2>
          <ol className="list-inside list-decimal space-y-1 text-sm text-amber-900">
            <li>Send exactly $19.99 worth of crypto to the address below</li>
            <li>
              Email your transaction hash/ID to{" "}
              <a
                href="mailto:rob@robbalian.com?subject=BrushFit%20Crypto%20Purchase"
                className="font-semibold underline"
              >
                rob@robbalian.com
              </a>
            </li>
            <li>
              Receive BrushFit PDF within 24 hours (usually much faster)
            </li>
          </ol>
          <p className="mt-3 text-xs text-amber-700">
            For instant delivery, use{" "}
            <a href="/buy" className="underline">
              card/PayPal checkout
            </a>{" "}
            or the{" "}
            <a href="/api/x402/purchase" className="underline">
              x402 protocol
            </a>
            .
          </p>
        </div>

        {hasAnyAddress ? (
          <div className="grid gap-6 sm:grid-cols-2">
            <WalletCard
              name="USDC on Base"
              symbol="USDC"
              address={USDC_BASE_ADDRESS}
              network="Base (Coinbase L2) — ERC-20"
              color="border-blue-200 bg-blue-50"
              qrData={
                USDC_BASE_ADDRESS
                  ? `ethereum:${USDC_BASE_ADDRESS}@8453`
                  : undefined
              }
            />
            <WalletCard
              name="Ethereum"
              symbol="ETH"
              address={ETH_ADDRESS}
              network="Ethereum Mainnet"
              color="border-purple-200 bg-purple-50"
              qrData={
                ETH_ADDRESS ? `ethereum:${ETH_ADDRESS}` : undefined
              }
            />
            <WalletCard
              name="Bitcoin"
              symbol="BTC"
              address={BTC_ADDRESS}
              network="Bitcoin Mainnet"
              color="border-orange-200 bg-orange-50"
              qrData={
                BTC_ADDRESS ? `bitcoin:${BTC_ADDRESS}` : undefined
              }
            />
            <WalletCard
              name="USDC on Solana"
              symbol="USDC-SPL"
              address={SOLANA_ADDRESS}
              network="Solana Mainnet"
              color="border-green-200 bg-green-50"
              qrData={
                SOLANA_ADDRESS
                  ? `solana:${SOLANA_ADDRESS}`
                  : undefined
              }
            />
          </div>
        ) : (
          <div className="rounded-2xl border-2 border-gray-200 p-8 text-center">
            <p className="text-lg font-semibold text-gray-600">
              Direct crypto payments are not yet configured.
            </p>
            <p className="mt-2 text-sm text-gray-500">
              Wallet addresses will appear here once configured. In the
              meantime, use{" "}
              <a href="/buy" className="text-indigo-600 underline">
                card, PayPal, or x402 checkout
              </a>
              .
            </p>
          </div>
        )}

        <div className="mt-10 rounded-xl bg-gray-50 p-6">
          <h3 className="mb-3 text-lg font-bold">Other ways to pay</h3>
          <div className="grid gap-3 sm:grid-cols-3">
            <a
              href="/api/checkout"
              className="rounded-lg border bg-white p-4 text-center transition hover:border-indigo-400"
            >
              <p className="font-semibold">Card / PayPal</p>
              <p className="text-xs text-gray-500">Instant delivery</p>
            </a>
            <a
              href="/api/x402/purchase"
              className="rounded-lg border bg-white p-4 text-center transition hover:border-indigo-400"
            >
              <p className="font-semibold">x402 (USDC on Base)</p>
              <p className="text-xs text-gray-500">For AI agents</p>
            </a>
            <a
              href="/api/coinbase/checkout"
              className="rounded-lg border bg-white p-4 text-center transition hover:border-indigo-400"
            >
              <p className="font-semibold">Coinbase Commerce</p>
              <p className="text-xs text-gray-500">Multi-crypto checkout</p>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
