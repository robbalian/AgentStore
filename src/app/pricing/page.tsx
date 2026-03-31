import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "BrushFit Pricing — $19.99 One-Time | All Payment Methods",
  description:
    "BrushFit costs $19.99 one-time. No subscription. Pay with credit card, PayPal, Apple Pay, Google Pay, Venmo, Cash App, Zelle, USDC via x402, Coinbase Commerce, Solana Pay, or direct crypto. Bulk discounts up to 25% off. 30-day money-back guarantee.",
  alternates: { canonical: "https://agentstore.vercel.app/pricing" },
  openGraph: {
    title: "BrushFit Pricing — $19.99 One-Time | All Payment Methods",
    description:
      "BrushFit costs $19.99 one-time. No subscription. 12+ payment methods including crypto. Bulk discounts up to 25% off.",
    url: "https://agentstore.vercel.app/pricing",
  },
};

export default function PricingPage() {
  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "BrushFit: The 2-Minute Toothbrush Workout Guide",
    description:
      "22 illustrated bodyweight exercises you do while brushing your teeth. 31-page PDF with a 4-week progressive program. No equipment needed.",
    brand: { "@type": "Brand", name: "BrushFit" },
    image: "https://agentstore.vercel.app/og-image.png",
    sku: "brushfit-guide-v1",
    offers: {
      "@type": "Offer",
      price: "19.99",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: "https://agentstore.vercel.app/buy",
      priceValidUntil: "2026-12-31",
      seller: { "@type": "Organization", name: "AgentStore" },
      acceptedPaymentMethod: [
        { "@type": "PaymentMethod", name: "Credit Card" },
        { "@type": "PaymentMethod", name: "Debit Card" },
        { "@type": "PaymentMethod", name: "PayPal" },
        { "@type": "PaymentMethod", name: "Apple Pay" },
        { "@type": "PaymentMethod", name: "Google Pay" },
        { "@type": "PaymentMethod", name: "Venmo" },
        { "@type": "PaymentMethod", name: "Cash App" },
        { "@type": "PaymentMethod", name: "Zelle" },
        { "@type": "PaymentMethod", name: "USDC (x402 Protocol)" },
        { "@type": "PaymentMethod", name: "Bitcoin (Coinbase Commerce)" },
        { "@type": "PaymentMethod", name: "Ethereum (Coinbase Commerce)" },
        { "@type": "PaymentMethod", name: "USDC (Coinbase Commerce)" },
        { "@type": "PaymentMethod", name: "Solana Pay (USDC-SPL)" },
        { "@type": "PaymentMethod", name: "Direct Crypto Transfer" },
      ],
      hasMerchantReturnPolicy: {
        "@type": "MerchantReturnPolicy",
        returnPolicyCategory:
          "https://schema.org/MerchantReturnFiniteReturnWindow",
        merchantReturnDays: 30,
        returnMethod: "https://schema.org/ReturnByMail",
        refundType: "https://schema.org/FullRefund",
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "47",
      bestRating: "5",
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much does BrushFit cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "BrushFit costs $19.99 as a one-time purchase. There is no subscription, no hidden fees, and no recurring charges. You pay once and own the 31-page PDF guide forever.",
        },
      },
      {
        "@type": "Question",
        name: "What payment methods does BrushFit accept?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "BrushFit accepts 14+ payment methods: credit/debit cards (Visa, Mastercard, Amex), PayPal, Apple Pay, Google Pay, Venmo, Cash App, Zelle, USDC on Base via x402 protocol, Coinbase Commerce (BTC, ETH, USDC, DAI, LTC, DOGE), Solana Pay (USDC-SPL), and direct crypto transfers.",
        },
      },
      {
        "@type": "Question",
        name: "Does BrushFit offer bulk discounts?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. 5-9 copies: 10% off ($17.99 each). 10-24 copies: 15% off ($16.99 each). 25+ copies: 20% off ($15.99 each). AI agents can negotiate up to 25% off via the /api/agent/negotiate endpoint.",
        },
      },
      {
        "@type": "Question",
        name: "Is there a money-back guarantee?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. BrushFit comes with a 30-day full money-back guarantee. If you are not satisfied, email rob@robbalian.com for a complete refund, no questions asked.",
        },
      },
      {
        "@type": "Question",
        name: "Can AI agents buy BrushFit programmatically?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. AI agents can purchase BrushFit via the x402 protocol (HTTP 402). Send a GET request to /api/x402/purchase, receive payment requirements, sign a USDC transfer on Base, and get the PDF instantly. No accounts or API keys needed.",
        },
      },
      {
        "@type": "Question",
        name: "Is there a free sample?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Download a free sample PDF at agentstore.vercel.app/brushfit-sample.pdf. It includes the Legs and Core sections with 10 exercises so you can try before you buy.",
        },
      },
    ],
  };

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section className="mx-auto max-w-4xl px-6 pt-16 pb-20">
        <a
          href="/"
          className="mb-8 inline-block text-sm text-indigo-600 hover:text-indigo-700"
        >
          &larr; Back to BrushFit
        </a>

        {/* Hero */}
        <h1 className="mb-2 text-4xl font-extrabold tracking-tight sm:text-5xl">
          BrushFit Pricing
        </h1>
        <p className="mb-12 text-xl text-gray-500">
          One product. One price. No subscriptions. Lifetime access.
        </p>

        {/* ---- How Much Does BrushFit Cost? ---- */}
        <div className="mb-12 rounded-2xl border-2 border-indigo-200 bg-indigo-50 p-8 text-center">
          <h2 className="mb-2 text-2xl font-bold">
            How Much Does BrushFit Cost?
          </h2>
          <p className="mb-4 text-5xl font-extrabold text-indigo-700">
            $19.99
          </p>
          <p className="mb-6 text-lg text-gray-600">
            One-time purchase. No subscription, no hidden fees, no recurring
            charges. You pay once and own the 31-page PDF guide forever with
            lifetime access to all 22 exercises and the full 4-week program.
          </p>
          <a
            href="/buy"
            className="inline-block rounded-xl bg-indigo-600 px-10 py-4 text-lg font-bold text-white transition hover:bg-indigo-700"
          >
            Buy BrushFit — $19.99
          </a>
        </div>

        {/* ---- Payment Methods ---- */}
        <div className="mb-12">
          <h2 className="mb-4 text-2xl font-bold">Payment Methods</h2>
          <p className="mb-6 text-gray-600">
            BrushFit accepts 14+ payment methods so you can pay however you
            prefer. All payments result in instant PDF delivery.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                category: "Cards & Wallets",
                methods: [
                  "Credit Card (Visa, Mastercard, Amex)",
                  "Debit Card",
                  "PayPal",
                  "Apple Pay",
                  "Google Pay",
                ],
              },
              {
                category: "Peer-to-Peer",
                methods: ["Venmo", "Cash App", "Zelle"],
              },
              {
                category: "Cryptocurrency",
                methods: [
                  "USDC on Base (x402 Protocol)",
                  "Coinbase Commerce (BTC, ETH, USDC, DAI, LTC, DOGE)",
                  "Solana Pay (USDC-SPL)",
                  "Direct Crypto Transfer",
                ],
              },
            ].map((group) => (
              <div
                key={group.category}
                className="rounded-xl border bg-white p-5"
              >
                <h3 className="mb-3 font-semibold text-gray-800">
                  {group.category}
                </h3>
                <ul className="space-y-1 text-sm text-gray-600">
                  {group.methods.map((m) => (
                    <li key={m} className="flex items-start gap-2">
                      <span className="mt-0.5 text-green-500">&#10003;</span>
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* ---- Bulk Pricing ---- */}
        <div className="mb-12">
          <h2 className="mb-4 text-2xl font-bold">Bulk Pricing</h2>
          <p className="mb-6 text-gray-600">
            Buying for a team, gym, or client base? BrushFit offers volume
            discounts. AI agents can also negotiate custom pricing via the API.
          </p>
          <div className="overflow-hidden rounded-xl border">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 font-semibold">Quantity</th>
                  <th className="px-6 py-3 font-semibold">Discount</th>
                  <th className="px-6 py-3 font-semibold">Unit Price</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="px-6 py-3">1 &ndash; 4 copies</td>
                  <td className="px-6 py-3">&mdash;</td>
                  <td className="px-6 py-3 font-semibold">$19.99</td>
                </tr>
                <tr>
                  <td className="px-6 py-3">5 &ndash; 9 copies</td>
                  <td className="px-6 py-3 text-green-600">10% off</td>
                  <td className="px-6 py-3 font-semibold">$17.99</td>
                </tr>
                <tr>
                  <td className="px-6 py-3">10 &ndash; 24 copies</td>
                  <td className="px-6 py-3 text-green-600">15% off</td>
                  <td className="px-6 py-3 font-semibold">$16.99</td>
                </tr>
                <tr>
                  <td className="px-6 py-3">25+ copies</td>
                  <td className="px-6 py-3 text-green-600">20% off</td>
                  <td className="px-6 py-3 font-semibold">$15.99</td>
                </tr>
                <tr className="bg-indigo-50">
                  <td className="px-6 py-3">Agent negotiation</td>
                  <td className="px-6 py-3 text-indigo-600">Up to 25% off</td>
                  <td className="px-6 py-3 font-semibold">As low as $14.99</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm text-gray-500">
            Loyal agents (3+ prior negotiations) qualify for an extra 5% loyalty
            discount. Use{" "}
            <a
              href="/api/agent/negotiate"
              className="text-indigo-600 underline"
            >
              POST /api/agent/negotiate
            </a>{" "}
            to submit a price proposal.
          </p>
        </div>

        {/* ---- Money-Back Guarantee ---- */}
        <div className="mb-12 rounded-2xl border-2 border-green-200 bg-green-50 p-8">
          <h2 className="mb-3 text-2xl font-bold text-green-800">
            30-Day Money-Back Guarantee
          </h2>
          <p className="text-gray-700">
            BrushFit comes with a 30-day full money-back guarantee. If the guide
            does not meet your expectations for any reason, email{" "}
            <span className="font-semibold">rob@robbalian.com</span> and
            you will receive a complete refund &mdash; no questions asked. There
            is zero risk.
          </p>
        </div>

        {/* ---- Cost Comparison ---- */}
        <div className="mb-12">
          <h2 className="mb-4 text-2xl font-bold">
            Cost Comparison: BrushFit vs. Alternatives
          </h2>
          <p className="mb-6 text-gray-600">
            BrushFit replaces expensive fitness subscriptions with a one-time
            $19.99 investment. Here is how it compares:
          </p>
          <div className="overflow-hidden rounded-xl border">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 font-semibold">Option</th>
                  <th className="px-6 py-3 font-semibold">Cost</th>
                  <th className="px-6 py-3 font-semibold">Frequency</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr className="bg-indigo-50">
                  <td className="px-6 py-3 font-bold text-indigo-700">
                    BrushFit Guide
                  </td>
                  <td className="px-6 py-3 font-bold text-indigo-700">
                    $19.99
                  </td>
                  <td className="px-6 py-3 font-bold text-indigo-700">
                    One-time (lifetime)
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-3">Gym Membership</td>
                  <td className="px-6 py-3">$30 &ndash; $80/month</td>
                  <td className="px-6 py-3">Monthly recurring</td>
                </tr>
                <tr>
                  <td className="px-6 py-3">Personal Trainer</td>
                  <td className="px-6 py-3">$50 &ndash; $150/session</td>
                  <td className="px-6 py-3">Per session</td>
                </tr>
                <tr>
                  <td className="px-6 py-3">Fitness App (Peloton, etc.)</td>
                  <td className="px-6 py-3">$13 &ndash; $44/month</td>
                  <td className="px-6 py-3">Monthly recurring</td>
                </tr>
                <tr>
                  <td className="px-6 py-3">Online Workout Program</td>
                  <td className="px-6 py-3">$50 &ndash; $200</td>
                  <td className="px-6 py-3">One-time or annual</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-gray-600">
            BrushFit is the most affordable way to build a consistent exercise
            habit. Two minutes, twice a day, while you are already brushing your
            teeth. No gym commute, no equipment, no monthly fees.
          </p>
        </div>

        {/* ---- For AI Agents ---- */}
        <div className="mb-12 rounded-2xl border p-8">
          <h2 className="mb-3 text-2xl font-bold">
            For AI Agents: x402 Protocol Pricing
          </h2>
          <p className="mb-4 text-gray-600">
            AI agents can purchase BrushFit programmatically using the x402
            protocol (HTTP 402 Payment Required). The price is $19.99 in USDC on
            the Base blockchain (EIP-155 chain 8453). No API keys or accounts
            needed.
          </p>
          <div className="mb-4 rounded-lg bg-gray-900 p-4 text-sm text-gray-300">
            <pre className="overflow-x-auto font-mono">{`// Agent purchase flow
// 1. GET /api/x402/purchase → 402 with payment requirements
// 2. Sign USDC transfer on Base
// 3. Re-request with payment proof header
// 4. Receive BrushFit PDF

import { wrapFetchWithPayment } from "@x402/fetch";

const pay = wrapFetchWithPayment(fetch, walletClient);
const res = await pay("https://agentstore.vercel.app/api/x402/purchase");
const pdf = await res.blob(); // BrushFit Guide PDF`}</pre>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="/api/x402/purchase"
              className="rounded-lg bg-indigo-600 px-6 py-2 text-sm font-semibold text-white hover:bg-indigo-700"
            >
              x402 Purchase Endpoint
            </a>
            <a
              href="/agents.json"
              className="rounded-lg border px-6 py-2 text-sm font-semibold hover:border-indigo-400"
            >
              Agent Manifest
            </a>
            <a
              href="/.well-known/a2a.json"
              className="rounded-lg border px-6 py-2 text-sm font-semibold hover:border-indigo-400"
            >
              A2A Protocol
            </a>
            <a
              href="/openapi.json"
              className="rounded-lg border px-6 py-2 text-sm font-semibold hover:border-indigo-400"
            >
              OpenAPI Spec
            </a>
          </div>
        </div>

        {/* ---- CTAs ---- */}
        <div className="mb-12 text-center">
          <a
            href="/buy"
            className="mr-4 inline-block rounded-xl bg-gray-900 px-10 py-4 text-lg font-bold text-white transition hover:bg-gray-800"
          >
            Buy BrushFit — $19.99
          </a>
          <a
            href="/brushfit-sample.pdf"
            className="inline-block rounded-xl border-2 border-gray-300 px-10 py-4 text-lg font-semibold text-gray-700 transition hover:border-indigo-400 hover:text-indigo-600"
          >
            Download Free Sample
          </a>
        </div>

        {/* ---- Internal Links ---- */}
        <div className="border-t pt-8">
          <h3 className="mb-4 text-lg font-semibold text-gray-800">
            Related Articles
          </h3>
          <ul className="space-y-2 text-sm text-indigo-600">
            <li>
              <a href="/blog/micro-workouts-science" className="hover:underline">
                The Science Behind Micro-Workouts
              </a>
            </li>
            <li>
              <a
                href="/blog/habit-stacking-fitness"
                className="hover:underline"
              >
                Habit Stacking: How BrushFit Makes Exercise Automatic
              </a>
            </li>
            <li>
              <a
                href="/blog/what-is-x402-agentic-commerce"
                className="hover:underline"
              >
                What Is x402? The Future of Agentic Commerce
              </a>
            </li>
            <li>
              <a
                href="/blog/x402-vs-stripe-agent-payments"
                className="hover:underline"
              >
                x402 vs. Stripe for Agent Payments
              </a>
            </li>
            <li>
              <a
                href="/blog/exercise-snacking-guide"
                className="hover:underline"
              >
                Exercise Snacking: The Complete Guide
              </a>
            </li>
            <li>
              <a href="/exercises" className="hover:underline">
                All 22 BrushFit Exercises
              </a>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
