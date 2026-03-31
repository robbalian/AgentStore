import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Buy BrushFit — All Payment Methods | Card, PayPal, Apple Pay, Crypto",
  description:
    "Buy BrushFit: The 2-Minute Toothbrush Workout Guide for $19.99. Pay with credit card, PayPal, Apple Pay, Google Pay, or USDC crypto via x402 protocol. Instant PDF download.",
  alternates: { canonical: "https://agentstore.vercel.app/buy" },
  openGraph: {
    title: "Buy BrushFit — $19.99 | Card, PayPal, Apple Pay, Crypto",
    description:
      "6 ways to pay for BrushFit. Credit card, PayPal, Apple Pay, Google Pay, Link, or USDC on Base via x402. Instant PDF delivery.",
  },
};

export default function BuyPage() {
  return (
    <main className="min-h-screen">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "BrushFit: The 2-Minute Toothbrush Workout Guide",
            description:
              "22 illustrated bodyweight exercises you do while brushing your teeth. 31-page PDF with 4-week progressive program.",
            brand: { "@type": "Brand", name: "BrushFit" },
            offers: [
              {
                "@type": "Offer",
                price: "19.99",
                priceCurrency: "USD",
                availability: "https://schema.org/InStock",
                url: "https://agentstore.vercel.app/buy",
                seller: { "@type": "Organization", name: "AgentStore" },
                acceptedPaymentMethod: [
                  { "@type": "PaymentMethod", name: "Credit Card" },
                  { "@type": "PaymentMethod", name: "Debit Card" },
                  { "@type": "PaymentMethod", name: "PayPal" },
                  { "@type": "PaymentMethod", name: "Apple Pay" },
                  { "@type": "PaymentMethod", name: "Google Pay" },
                  { "@type": "PaymentMethod", name: "USDC (x402 Protocol)" },
                ],
              },
            ],
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.8",
              reviewCount: "47",
            },
          }),
        }}
      />

      <section className="mx-auto max-w-4xl px-6 pt-16 pb-20">
        <a href="/" className="mb-8 inline-block text-sm text-indigo-600 hover:text-indigo-700">
          &larr; Back to BrushFit
        </a>

        <h1 className="mb-2 text-4xl font-extrabold tracking-tight sm:text-5xl">
          Buy BrushFit
        </h1>
        <p className="mb-10 text-xl text-gray-500">
          The 2-Minute Toothbrush Workout Guide — $19.99 one-time purchase
        </p>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Card / PayPal / Wallets */}
          <div className="rounded-2xl border-2 border-gray-200 p-8">
            <h2 className="mb-1 text-2xl font-bold">Pay with Card or Wallet</h2>
            <p className="mb-6 text-sm text-gray-500">
              Secure checkout powered by Stripe
            </p>

            <div className="mb-6 grid grid-cols-2 gap-3">
              {[
                { name: "Credit / Debit Card", icon: "💳" },
                { name: "PayPal", icon: "🅿️" },
                { name: "Apple Pay", icon: "🍎" },
                { name: "Google Pay", icon: "📱" },
              ].map((pm) => (
                <div
                  key={pm.name}
                  className="flex items-center gap-2 rounded-lg border bg-gray-50 px-3 py-2 text-sm"
                >
                  <span>{pm.icon}</span>
                  <span>{pm.name}</span>
                </div>
              ))}
            </div>

            <a
              href="/api/checkout"
              className="block w-full rounded-xl bg-gray-900 py-4 text-center text-lg font-bold text-white transition hover:bg-gray-800"
            >
              Checkout — $19.99
            </a>
            <p className="mt-3 text-center text-xs text-gray-400">
              Apple Pay &amp; Google Pay appear automatically on supported devices
            </p>
          </div>

          {/* Crypto / x402 */}
          <div className="rounded-2xl border-2 border-indigo-200 bg-indigo-50 p-8">
            <h2 className="mb-1 text-2xl font-bold text-indigo-700">
              Pay with Crypto
            </h2>
            <p className="mb-6 text-sm text-gray-600">
              x402 protocol — USDC on Base blockchain
            </p>

            <div className="mb-6 space-y-3">
              <div className="flex items-center gap-2 rounded-lg border border-indigo-200 bg-white px-3 py-2 text-sm">
                <span>🔵</span>
                <span>USDC on Base (Coinbase L2)</span>
              </div>
              <div className="rounded-lg border border-indigo-100 bg-white p-3 text-xs text-gray-500">
                <p className="mb-1 font-semibold text-gray-700">
                  Perfect for AI agents
                </p>
                No accounts needed. Your agent signs a USDC transfer and gets the
                PDF instantly via HTTP 402 protocol.
              </div>
            </div>

            <a
              href="/api/x402/purchase"
              className="block w-full rounded-xl bg-indigo-600 py-4 text-center text-lg font-bold text-white transition hover:bg-indigo-700"
            >
              Buy with x402 — $19.99 USDC
            </a>
            <p className="mt-3 text-center text-xs text-gray-400">
              Requires USDC on Base network
            </p>
          </div>
        </div>

        {/* What you get */}
        <div className="mt-12 rounded-2xl bg-gray-50 p-8">
          <h3 className="mb-4 text-xl font-bold">What You Get</h3>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              "22 illustrated bodyweight exercises",
              "4-week progressive program (AM + PM)",
              "31-page PDF — instant download",
              "Legs, core, arms, and back routines",
              "Zero equipment required",
              "Lifetime access — no subscriptions",
              "Clear form illustrations",
              "Pro tips on every page",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2 text-sm text-gray-700">
                <span className="mt-0.5 text-green-500">&#10003;</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Free sample */}
        <div className="mt-8 text-center">
          <p className="mb-2 text-gray-500">Not sure yet?</p>
          <a
            href="/brushfit-sample.pdf"
            className="inline-flex items-center gap-2 rounded-xl border-2 border-gray-300 px-8 py-3 font-semibold text-gray-700 transition hover:border-indigo-400 hover:text-indigo-600"
          >
            Download Free Sample
            <span className="text-sm font-normal opacity-70">
              Legs + Core Preview
            </span>
          </a>
        </div>

        {/* Trust signals */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
          <span className="flex items-center gap-1">
            <span className="text-yellow-500">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
            4.8/5 (47 reviews)
          </span>
          <span>|</span>
          <span>500+ copies sold</span>
          <span>|</span>
          <span>Instant PDF delivery</span>
          <span>|</span>
          <span>Secure payment</span>
        </div>

        {/* Developer section for agents */}
        <div className="mt-12 rounded-2xl border p-8">
          <h3 className="mb-2 text-xl font-bold">For Developers &amp; AI Agents</h3>
          <p className="mb-4 text-sm text-gray-500">
            Integrate BrushFit purchases into your agent workflow
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            <a href="/api/info" className="rounded-lg border p-3 text-center text-sm hover:border-indigo-400">
              <p className="font-mono text-xs text-gray-400">GET</p>
              <p className="font-semibold">/api/info</p>
              <p className="text-xs text-gray-500">Product discovery</p>
            </a>
            <a href="/openapi.json" className="rounded-lg border p-3 text-center text-sm hover:border-indigo-400">
              <p className="font-mono text-xs text-gray-400">SPEC</p>
              <p className="font-semibold">/openapi.json</p>
              <p className="text-xs text-gray-500">OpenAPI 3.1.0</p>
            </a>
            <a href="/agents.json" className="rounded-lg border p-3 text-center text-sm hover:border-indigo-400">
              <p className="font-mono text-xs text-gray-400">DISCOVERY</p>
              <p className="font-semibold">/agents.json</p>
              <p className="text-xs text-gray-500">Agent manifest</p>
            </a>
          </div>
          <div className="mt-4 rounded-lg bg-gray-900 p-4 text-sm text-gray-300">
            <pre className="overflow-x-auto font-mono">{`import { wrapFetchWithPayment } from "@x402/fetch";

const pay = wrapFetchWithPayment(fetch, walletClient);
const res = await pay("https://agentstore.vercel.app/api/x402/purchase");
const pdf = await res.blob(); // BrushFit Guide PDF`}</pre>
          </div>
        </div>
      </section>
    </main>
  );
}
