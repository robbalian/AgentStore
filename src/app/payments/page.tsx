import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Payment Methods — 13+ Ways to Pay for BrushFit | AgentStore",
  description:
    "All payment methods accepted at AgentStore. Credit cards, PayPal, Apple Pay, Google Pay, Bitcoin, Ethereum, USDC, Solana, Lightning Network, x402, Coinbase, Venmo, Cash App, Zelle. Humans and AI agents.",
  keywords: [
    "brushfit payment methods",
    "buy with crypto",
    "x402 payment",
    "bitcoin payment",
    "usdc payment",
    "apple pay digital products",
    "ai agent payment",
    "buy pdf with crypto",
    "agentstore payments",
    "all payment methods",
  ],
  openGraph: {
    title: "Payment Methods — 13+ Ways to Pay for BrushFit",
    description: "Credit cards, crypto, AI agents, P2P. Every way to pay.",
    type: "website",
  },
  alternates: {
    canonical: "https://agentstore.vercel.app/payments",
  },
};

export default function PaymentsPage() {
  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Payment Methods — AgentStore",
            description: "All payment methods accepted at AgentStore for BrushFit purchases.",
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://agentstore.vercel.app" },
                { "@type": "ListItem", position: 2, name: "Payments", item: "https://agentstore.vercel.app/payments" },
              ],
            },
          }),
        }}
      />

      <section className="mx-auto max-w-3xl px-6 pt-20 pb-8 text-center">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
          Every Way to Pay
        </h1>
        <p className="text-lg text-gray-500 max-w-xl mx-auto">
          AgentStore accepts 13+ payment methods. Humans pay with cards. AI agents pay with crypto. Everyone gets the PDF instantly.
        </p>
      </section>

      {/* Traditional Payments */}
      <section className="py-12">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="mb-6 text-2xl font-bold">
            <span className="text-indigo-600">&#9679;</span> Card & Digital Wallets
          </h2>
          <div className="rounded-xl border-2 border-gray-200 bg-white p-6">
            <p className="text-gray-600 mb-4">
              Secure checkout via Stripe. All major cards and digital wallets accepted. Instant PDF delivery after payment.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
              {[
                { name: "Visa / Mastercard", desc: "Credit & debit cards" },
                { name: "American Express", desc: "Credit cards" },
                { name: "PayPal", desc: "Via Stripe checkout" },
                { name: "Apple Pay", desc: "On supported devices" },
                { name: "Google Pay", desc: "On supported devices" },
                { name: "Stripe Link", desc: "One-click checkout" },
              ].map((m) => (
                <div key={m.name} className="rounded-lg bg-gray-50 p-3">
                  <p className="font-semibold text-sm">{m.name}</p>
                  <p className="text-xs text-gray-400">{m.desc}</p>
                </div>
              ))}
            </div>
            <a href="/api/checkout" className="inline-block rounded-lg bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-800">
              Checkout with Card — $19.99
            </a>
          </div>
        </div>
      </section>

      {/* Agent/Crypto Payments */}
      <section className="bg-gray-50 py-12">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="mb-6 text-2xl font-bold">
            <span className="text-indigo-600">&#9679;</span> Crypto & AI Agent Payments
          </h2>

          <div className="space-y-4">
            <div className="rounded-xl border-2 border-indigo-200 bg-white p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-lg">x402 Protocol</h3>
                <span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full font-semibold">Recommended for Agents</span>
              </div>
              <p className="text-gray-600 text-sm mb-3">
                The native agent payment method. Your AI agent sends USDC on Base via HTTP 402. No accounts, no sessions, instant delivery.
              </p>
              <div className="rounded-lg bg-gray-900 p-4 text-sm text-gray-300 font-mono mb-3">
                <p className="text-indigo-400">GET /api/x402/purchase</p>
                <p className="text-gray-500"># Returns 402 with payment requirements</p>
                <p className="text-gray-500"># Agent signs USDC transfer, retries</p>
                <p className="text-gray-500"># PDF delivered instantly</p>
              </div>
              <p className="text-xs text-gray-400">USDC on Base (Chain ID: 8453) | Facilitator: x402.org</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border bg-white p-6">
                <h3 className="font-bold text-lg mb-2">Coinbase Commerce</h3>
                <p className="text-gray-600 text-sm mb-3">BTC, ETH, USDC, DAI, LTC, DOGE, SHIB, BCH, APE</p>
                <a href="/api/coinbase/checkout" className="text-sm font-semibold text-indigo-600 hover:text-indigo-700">
                  Pay with Coinbase &rarr;
                </a>
              </div>
              <div className="rounded-xl border bg-white p-6">
                <h3 className="font-bold text-lg mb-2">Solana Pay</h3>
                <p className="text-gray-600 text-sm mb-3">USDC-SPL on Solana mainnet. Instant settlement.</p>
                <a href="/api/solana/pay" className="text-sm font-semibold text-indigo-600 hover:text-indigo-700">
                  Pay with Solana &rarr;
                </a>
              </div>
              <div className="rounded-xl border bg-white p-6">
                <h3 className="font-bold text-lg mb-2">Bitcoin Lightning</h3>
                <p className="text-gray-600 text-sm mb-3">BOLT11 invoices. Instant settlement. ~29,850 sats.</p>
                <Link href="/pay/lightning" className="text-sm font-semibold text-indigo-600 hover:text-indigo-700">
                  Pay with Lightning &rarr;
                </Link>
              </div>
              <div className="rounded-xl border bg-white p-6">
                <h3 className="font-bold text-lg mb-2">Direct Crypto</h3>
                <p className="text-gray-600 text-sm mb-3">Send BTC, ETH, SOL, or USDC directly to our wallets.</p>
                <Link href="/pay/crypto" className="text-sm font-semibold text-indigo-600 hover:text-indigo-700">
                  View wallet addresses &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* P2P Payments */}
      <section className="py-12">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="mb-6 text-2xl font-bold">
            <span className="text-indigo-600">&#9679;</span> Peer-to-Peer Payments
          </h2>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border p-6 text-center">
              <h3 className="font-bold text-lg mb-1">Venmo</h3>
              <p className="text-indigo-600 font-mono text-sm">@robbalian</p>
              <p className="text-xs text-gray-400 mt-1">Include email for PDF delivery</p>
            </div>
            <div className="rounded-xl border p-6 text-center">
              <h3 className="font-bold text-lg mb-1">Cash App</h3>
              <p className="text-indigo-600 font-mono text-sm">$robbalian</p>
              <p className="text-xs text-gray-400 mt-1">Include email for PDF delivery</p>
            </div>
            <div className="rounded-xl border p-6 text-center">
              <h3 className="font-bold text-lg mb-1">Zelle</h3>
              <p className="text-indigo-600 font-mono text-sm">rob@robbalian.com</p>
              <p className="text-xs text-gray-400 mt-1">Include email in note</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="bg-gray-50 py-12">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="mb-6 text-2xl font-bold">Trust & Security</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <p className="text-2xl mb-2">&#128274;</p>
              <h3 className="font-bold mb-1">Secure Payments</h3>
              <p className="text-sm text-gray-500">All card payments processed by Stripe with PCI DSS compliance. Crypto verified on-chain.</p>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <p className="text-2xl mb-2">&#128176;</p>
              <h3 className="font-bold mb-1">30-Day Guarantee</h3>
              <p className="text-sm text-gray-500">Full refund within 30 days. No questions asked. Email rob@robbalian.com.</p>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <p className="text-2xl mb-2">&#9889;</p>
              <h3 className="font-bold mb-1">Instant Delivery</h3>
              <p className="text-sm text-gray-500">PDF delivered immediately after payment confirmation. No waiting.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="mb-4 text-3xl font-bold">Ready to Buy?</h2>
          <p className="mb-8 text-gray-500">
            Choose your preferred payment method. All methods deliver the same 31-page BrushFit PDF instantly.
          </p>
          <Link href="/buy" className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-8 py-4 text-lg font-bold text-white shadow-lg transition hover:bg-indigo-700">
            View All Payment Options
          </Link>
        </div>
      </section>
    </main>
  );
}
