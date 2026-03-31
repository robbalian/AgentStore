import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Buy BrushFit — All Payment Methods | Card, PayPal, Apple Pay, Venmo, Cash App, Zelle, Crypto, Bitcoin, Lightning",
  description:
    "Buy BrushFit: The 2-Minute Toothbrush Workout Guide for $19.99. Pay with credit card, PayPal, Apple Pay, Google Pay, Venmo, Cash App, Zelle, USDC via x402, Coinbase Commerce (BTC/ETH/USDC), Solana Pay, or direct crypto transfer. Instant PDF download.",
  alternates: { canonical: "https://agentstore.vercel.app/buy" },
  openGraph: {
    title: "Buy BrushFit — $19.99 | Card, PayPal, Apple Pay, Venmo, Cash App, Zelle, Crypto, Bitcoin",
    description:
      "12+ ways to pay for BrushFit. Credit card, PayPal, Apple Pay, Google Pay, Venmo, Cash App, Zelle, USDC on Base via x402, Coinbase Commerce, Solana Pay, or direct crypto transfer.",
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
                  { "@type": "PaymentMethod", name: "Bitcoin (Coinbase Commerce)" },
                  { "@type": "PaymentMethod", name: "Ethereum (Coinbase Commerce)" },
                  { "@type": "PaymentMethod", name: "USDC (Coinbase Commerce)" },
                  { "@type": "PaymentMethod", name: "Solana Pay (USDC-SPL)" },
                  { "@type": "PaymentMethod", name: "Direct Crypto Transfer" },
                  { "@type": "PaymentMethod", name: "Bitcoin Lightning Network" },
                  { "@type": "PaymentMethod", name: "Venmo" },
                  { "@type": "PaymentMethod", name: "Cash App" },
                  { "@type": "PaymentMethod", name: "Zelle" },
                  { "@type": "PaymentMethod", name: "Gumroad" },
                  { "@type": "PaymentMethod", name: "Lemon Squeezy" },
                  { "@type": "PaymentMethod", name: "Buy Me a Coffee" },
                  { "@type": "PaymentMethod", name: "Ko-fi" },
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
              Pay with x402 Protocol
            </h2>
            <p className="mb-6 text-sm text-gray-600">
              USDC on Base blockchain — instant delivery
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

          {/* Coinbase Commerce */}
          <div className="rounded-2xl border-2 border-blue-200 bg-blue-50 p-8">
            <h2 className="mb-1 text-2xl font-bold text-blue-700">
              Coinbase Commerce
            </h2>
            <p className="mb-6 text-sm text-gray-600">
              Pay with BTC, ETH, USDC, and 6+ other cryptos
            </p>

            <div className="mb-6 grid grid-cols-3 gap-2">
              {[
                { name: "BTC", icon: "₿" },
                { name: "ETH", icon: "⟠" },
                { name: "USDC", icon: "🔵" },
                { name: "DAI", icon: "◆" },
                { name: "LTC", icon: "Ł" },
                { name: "DOGE", icon: "🐕" },
              ].map((c) => (
                <div
                  key={c.name}
                  className="flex items-center justify-center gap-1 rounded-lg border border-blue-200 bg-white px-2 py-2 text-sm"
                >
                  <span>{c.icon}</span>
                  <span className="font-medium">{c.name}</span>
                </div>
              ))}
            </div>

            <a
              href="/api/coinbase/checkout"
              className="block w-full rounded-xl bg-blue-600 py-4 text-center text-lg font-bold text-white transition hover:bg-blue-700"
            >
              Pay with Coinbase — $19.99
            </a>
            <p className="mt-3 text-center text-xs text-gray-400">
              Hosted checkout by Coinbase Commerce
            </p>
          </div>

          {/* Direct Crypto / Solana Pay */}
          <div className="rounded-2xl border-2 border-green-200 bg-green-50 p-8">
            <h2 className="mb-1 text-2xl font-bold text-green-700">
              Direct Crypto Transfer
            </h2>
            <p className="mb-6 text-sm text-gray-600">
              Send BTC, ETH, USDC, or SOL directly + Solana Pay
            </p>

            <div className="mb-6 space-y-3">
              <div className="flex items-center gap-2 rounded-lg border border-green-200 bg-white px-3 py-2 text-sm">
                <span>📋</span>
                <span>Wallet addresses with QR codes</span>
              </div>
              <div className="flex items-center gap-2 rounded-lg border border-green-200 bg-white px-3 py-2 text-sm">
                <span>⚡</span>
                <span>Solana Pay (USDC-SPL) also available</span>
              </div>
              <div className="rounded-lg border border-green-100 bg-white p-3 text-xs text-gray-500">
                Send crypto, email your tx hash, and receive the PDF within 24 hours.
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <a
                href="/pay/crypto"
                className="block w-full rounded-xl bg-green-600 py-4 text-center text-sm font-bold text-white transition hover:bg-green-700"
              >
                Wallet Addresses
              </a>
              <a
                href="/api/solana/pay"
                className="block w-full rounded-xl border-2 border-green-600 py-4 text-center text-sm font-bold text-green-700 transition hover:bg-green-100"
              >
                Solana Pay
              </a>
            </div>
            <p className="mt-3 text-center text-xs text-gray-400">
              Manual fulfillment — email receipt to rob@robbalian.com
            </p>
          </div>

          {/* Bitcoin Lightning */}
          <div className="rounded-2xl border-2 border-amber-200 bg-amber-50 p-8">
            <h2 className="mb-1 text-2xl font-bold text-amber-700">
              <span className="mr-2">&#9889;</span>Bitcoin Lightning
            </h2>
            <p className="mb-6 text-sm text-gray-600">
              Instant, near-zero fees — pay with any Lightning wallet
            </p>

            <div className="mb-6 space-y-3">
              <div className="flex items-center gap-2 rounded-lg border border-amber-200 bg-white px-3 py-2 text-sm">
                <span>&#9889;</span>
                <span>Settles in seconds, not minutes</span>
              </div>
              <div className="flex items-center gap-2 rounded-lg border border-amber-200 bg-white px-3 py-2 text-sm">
                <span>&#8383;</span>
                <span>Pay in Bitcoin over Lightning Network</span>
              </div>
              <div className="rounded-lg border border-amber-100 bg-white p-3 text-xs text-gray-500">
                Generate a BOLT11 invoice, scan or paste it in your Lightning
                wallet (Phoenix, Muun, Breez, Strike, Cash App, etc.), and
                receive BrushFit instantly.
              </div>
            </div>

            <a
              href="/pay/lightning"
              className="block w-full rounded-xl bg-amber-500 py-4 text-center text-lg font-bold text-white transition hover:bg-amber-600"
            >
              Pay with Lightning — $19.99
            </a>
            <p className="mt-3 text-center text-xs text-gray-400">
              Fast settlement — BOLT11 invoice with QR code
            </p>
          </div>

          {/* Venmo / Cash App / Zelle */}
          <div className="rounded-2xl border-2 border-violet-200 bg-violet-50 p-8">
            <h2 className="mb-1 text-2xl font-bold text-violet-700">
              Quick Pay
            </h2>
            <p className="mb-6 text-sm text-gray-600">
              Venmo, Cash App, or Zelle — send payment &amp; email receipt
            </p>

            <div className="mb-6 space-y-3">
              <div className="flex items-center gap-2 rounded-lg border border-violet-200 bg-white px-3 py-2 text-sm">
                <span>💜</span>
                <span>Venmo: <span className="font-semibold">@robbalian</span></span>
              </div>
              <div className="flex items-center gap-2 rounded-lg border border-violet-200 bg-white px-3 py-2 text-sm">
                <span>💵</span>
                <span>Cash App: <span className="font-semibold">$robbalian</span></span>
              </div>
              <div className="flex items-center gap-2 rounded-lg border border-violet-200 bg-white px-3 py-2 text-sm">
                <span>🏦</span>
                <span>Zelle: <span className="font-semibold">rob@robbalian.com</span></span>
              </div>
              <div className="rounded-lg border border-violet-100 bg-white p-3 text-xs text-gray-500">
                Send $19.99 with note &quot;BrushFit Guide&quot;, then email your
                payment confirmation to receive your PDF within 1 hour.
              </div>
            </div>

            <a
              href="mailto:rob@robbalian.com?subject=BrushFit%20Purchase"
              className="block w-full rounded-xl bg-violet-600 py-4 text-center text-lg font-bold text-white transition hover:bg-violet-700"
            >
              Email Receipt — rob@robbalian.com
            </a>
            <p className="mt-3 text-center text-xs text-gray-400">
              Manual fulfillment — PDF delivered within 1 hour
            </p>
          </div>

          {/* Buy for a Friend / Gift */}
          <div className="rounded-2xl border-2 border-amber-200 bg-amber-50 p-8">
            <h2 className="mb-1 text-2xl font-bold text-amber-700">
              Buy for a Friend
            </h2>
            <p className="mb-6 text-sm text-gray-600">
              Purchase a gift link to share with someone special
            </p>

            <div className="mb-6 space-y-3">
              <div className="flex items-center gap-2 rounded-lg border border-amber-200 bg-white px-3 py-2 text-sm">
                <span>🎁</span>
                <span>Get a unique download link to share</span>
              </div>
              <div className="flex items-center gap-2 rounded-lg border border-amber-200 bg-white px-3 py-2 text-sm">
                <span>💌</span>
                <span>Send it via text, email, or social</span>
              </div>
              <div className="rounded-lg border border-amber-100 bg-white p-3 text-xs text-gray-500">
                After checkout you&apos;ll receive a shareable download link
                instead of an immediate download. Perfect for birthdays,
                holidays, or just being awesome.
              </div>
            </div>

            <a
              href="/api/checkout?gift=true"
              className="block w-full rounded-xl bg-amber-600 py-4 text-center text-lg font-bold text-white transition hover:bg-amber-700"
            >
              Gift BrushFit — $19.99
            </a>
            <p className="mt-3 text-center text-xs text-gray-400">
              Recipient gets a personal download link
            </p>
          </div>

          {/* Gumroad */}
          <div className="rounded-2xl border-2 border-pink-200 bg-pink-50 p-8">
            <h2 className="mb-1 text-2xl font-bold text-pink-700">
              Gumroad
            </h2>
            <p className="mb-6 text-sm text-gray-600">
              Buy on Gumroad — trusted by 10M+ creators and buyers
            </p>

            <div className="mb-6 space-y-3">
              <div className="flex items-center gap-2 rounded-lg border border-pink-200 bg-white px-3 py-2 text-sm">
                <span>🛒</span>
                <span>Familiar checkout experience</span>
              </div>
              <div className="flex items-center gap-2 rounded-lg border border-pink-200 bg-white px-3 py-2 text-sm">
                <span>📧</span>
                <span>Automatic email delivery</span>
              </div>
              <div className="rounded-lg border border-pink-100 bg-white p-3 text-xs text-gray-500">
                Purchase through Gumroad&apos;s secure checkout. PDF delivered instantly to your email with lifetime access.
              </div>
            </div>

            <a
              href="/api/gumroad/checkout"
              className="block w-full rounded-xl bg-pink-600 py-4 text-center text-lg font-bold text-white transition hover:bg-pink-700"
            >
              Buy on Gumroad — $19.99
            </a>
            <p className="mt-3 text-center text-xs text-gray-400">
              Secure checkout by Gumroad
            </p>
          </div>

          {/* Lemon Squeezy */}
          <div className="rounded-2xl border-2 border-yellow-200 bg-yellow-50 p-8">
            <h2 className="mb-1 text-2xl font-bold text-yellow-700">
              Lemon Squeezy
            </h2>
            <p className="mb-6 text-sm text-gray-600">
              Modern checkout with global tax handling built in
            </p>

            <div className="mb-6 space-y-3">
              <div className="flex items-center gap-2 rounded-lg border border-yellow-200 bg-white px-3 py-2 text-sm">
                <span>🍋</span>
                <span>Automatic VAT/GST/sales tax</span>
              </div>
              <div className="flex items-center gap-2 rounded-lg border border-yellow-200 bg-white px-3 py-2 text-sm">
                <span>🌍</span>
                <span>Localized pricing &amp; currencies</span>
              </div>
              <div className="rounded-lg border border-yellow-100 bg-white p-3 text-xs text-gray-500">
                Lemon Squeezy handles tax compliance in 100+ countries. Perfect if you want a proper invoice.
              </div>
            </div>

            <a
              href="/api/lemonsqueezy/checkout"
              className="block w-full rounded-xl bg-yellow-500 py-4 text-center text-lg font-bold text-white transition hover:bg-yellow-600"
            >
              Buy on Lemon Squeezy — $19.99
            </a>
            <p className="mt-3 text-center text-xs text-gray-400">
              Tax-compliant checkout by Lemon Squeezy
            </p>
          </div>

          {/* Buy Me a Coffee / Ko-fi */}
          <div className="rounded-2xl border-2 border-teal-200 bg-teal-50 p-8">
            <h2 className="mb-1 text-2xl font-bold text-teal-700">
              Tip Jar &amp; Support
            </h2>
            <p className="mb-6 text-sm text-gray-600">
              Buy Me a Coffee or Ko-fi — support BrushFit directly
            </p>

            <div className="mb-6 space-y-3">
              <div className="flex items-center gap-2 rounded-lg border border-teal-200 bg-white px-3 py-2 text-sm">
                <span>&#9749;</span>
                <span>Buy Me a Coffee — quick one-click support</span>
              </div>
              <div className="flex items-center gap-2 rounded-lg border border-teal-200 bg-white px-3 py-2 text-sm">
                <span>&#10084;&#65039;</span>
                <span>Ko-fi — no fees on donations</span>
              </div>
              <div className="rounded-lg border border-teal-100 bg-white p-3 text-xs text-gray-500">
                Love BrushFit? Leave a tip, buy an extra copy for a friend, or support continued development.
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <a
                href="/api/buymeacoffee"
                className="block w-full rounded-xl bg-teal-600 py-4 text-center text-sm font-bold text-white transition hover:bg-teal-700"
              >
                Buy Me a Coffee
              </a>
              <a
                href="/api/buymeacoffee"
                className="block w-full rounded-xl border-2 border-teal-600 py-4 text-center text-sm font-bold text-teal-700 transition hover:bg-teal-100"
              >
                Ko-fi
              </a>
            </div>
            <p className="mt-3 text-center text-xs text-gray-400">
              Direct support — 100% goes to the creator
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
          <span>800+ copies sold</span>
          <span>|</span>
          <span>17+ payment methods</span>
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
