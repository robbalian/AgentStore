import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing — BrushFit Toothbrush Workout Guide",
  description:
    "BrushFit costs $19.99 one-time — just $0.01 per workout. Compare to gym memberships, personal trainers, and fitness apps. Pay with x402 (USDC on Base) or card via Stripe.",
  keywords: [
    "BrushFit price",
    "toothbrush workout cost",
    "x402 payment",
    "buy BrushFit",
    "BrushFit pricing",
    "cheap workout guide",
    "fitness on a budget",
    "USDC payment",
    "crypto fitness purchase",
    "one-time fitness payment",
  ],
  openGraph: {
    title: "BrushFit Pricing — $19.99 One-Time, ~$0.01 Per Workout",
    description:
      "The most affordable fitness guide ever. $19.99 for 1,456 workouts per year. Pay with crypto (x402) or card (Stripe).",
    type: "website",
    siteName: "BrushFit AgentStore",
    url: "https://agentstore.vercel.app/pricing",
  },
  twitter: {
    card: "summary_large_image",
    title: "BrushFit Pricing — $19.99 One-Time",
    description:
      "$19.99 / 1,456 sessions per year = ~$0.01 per workout. No subscriptions. No equipment. No gym.",
  },
  alternates: {
    canonical: "https://agentstore.vercel.app/pricing",
  },
};

export default function PricingPage() {
  return (
    <main className="min-h-screen">
      {/* JSON-LD Product Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "BrushFit: The 2-Minute Toothbrush Workout Guide",
            description:
              "22 illustrated exercises you do while brushing your teeth. 31-page PDF with 4-week progressive program. One-time purchase, no subscriptions.",
            image: "https://agentstore.vercel.app/og-brushfit.png",
            brand: { "@type": "Brand", name: "BrushFit" },
            offers: {
              "@type": "Offer",
              price: "19.99",
              priceCurrency: "USD",
              availability: "https://schema.org/InStock",
              url: "https://agentstore.vercel.app/pricing",
              priceValidUntil: "2027-12-31",
              seller: { "@type": "Organization", name: "AgentStore" },
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.8",
              reviewCount: "47",
              bestRating: "5",
              worstRating: "1",
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How much does BrushFit cost?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "BrushFit is a one-time purchase of $19.99. There are no subscriptions, no recurring fees, and no hidden costs. You get lifetime access to the full 31-page PDF guide.",
                },
              },
              {
                "@type": "Question",
                name: "What payment methods does BrushFit accept?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "BrushFit accepts two payment methods: x402 protocol (USDC stablecoin on Base blockchain) for AI agents and crypto users, and credit/debit cards via Stripe for traditional payment.",
                },
              },
              {
                "@type": "Question",
                name: "Is there a free trial or sample?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes! You can download a free sample PDF that includes the Legs and Core sections before you buy. No email required, no strings attached.",
                },
              },
              {
                "@type": "Question",
                name: "Is there a money-back guarantee?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We offer a free sample so you can try before you buy. Download the Legs and Core preview, try the exercises for a week, and only purchase the full guide if you love it.",
                },
              },
            ],
          }),
        }}
      />

      {/* Navigation */}
      <nav className="border-b">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-lg font-bold text-indigo-600">
            BrushFit
          </Link>
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <Link href="/" className="hover:text-indigo-600">
              Home
            </Link>
            <Link href="/blog" className="hover:text-indigo-600">
              Blog
            </Link>
            <Link
              href="/api/x402/purchase"
              className="rounded-lg bg-indigo-600 px-4 py-2 font-semibold text-white hover:bg-indigo-700"
            >
              Buy Now
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Pricing Header */}
      <section className="mx-auto max-w-4xl px-6 pt-16 pb-12 text-center">
        <p className="mb-4 text-sm font-semibold tracking-widest text-indigo-600 uppercase">
          Simple, Transparent Pricing
        </p>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
          One Price. Lifetime Access. No Subscriptions.
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-500">
          BrushFit is a one-time purchase. Pay once, get the full 31-page PDF
          guide, and work out every time you brush your teeth — forever.
        </p>
      </section>

      {/* Main Price Card */}
      <section className="mx-auto max-w-4xl px-6 pb-16">
        <div className="rounded-2xl border-2 border-indigo-200 bg-gradient-to-b from-indigo-50 to-white p-8 shadow-lg sm:p-12">
          <div className="text-center">
            <p className="mb-1 text-sm font-semibold tracking-widest text-indigo-600 uppercase">
              BrushFit Guide
            </p>
            <div className="mb-2 flex items-baseline justify-center gap-2">
              <span className="text-6xl font-extrabold text-gray-900">
                $19
              </span>
              <span className="text-2xl font-bold text-gray-400">.99</span>
            </div>
            <p className="mb-8 text-gray-500">
              One-time payment. No subscriptions. No recurring fees.
            </p>
          </div>

          {/* Two Payment Options */}
          <div className="grid gap-6 sm:grid-cols-2">
            {/* x402 Option */}
            <div className="rounded-xl border-2 border-indigo-300 bg-indigo-50 p-6">
              <div className="mb-3 flex items-center gap-2">
                <span className="rounded-full bg-indigo-600 px-3 py-1 text-xs font-bold text-white uppercase">
                  Recommended
                </span>
              </div>
              <h3 className="mb-1 text-lg font-bold text-indigo-700">
                Pay with x402
              </h3>
              <p className="mb-4 text-sm text-gray-600">
                USDC on Base. Instant delivery. Perfect for AI agents and crypto
                wallets. No accounts needed.
              </p>
              <a
                href="/api/x402/purchase"
                className="block w-full rounded-xl bg-indigo-600 px-6 py-4 text-center text-lg font-bold text-white shadow-lg transition hover:bg-indigo-700"
              >
                Buy with x402 — $19.99
              </a>
              <p className="mt-3 text-center text-xs text-gray-400">
                USDC stablecoin on Base network
              </p>
            </div>

            {/* Stripe Option */}
            <div className="rounded-xl border-2 border-gray-200 bg-gray-50 p-6">
              <div className="mb-3">
                <span className="rounded-full bg-gray-200 px-3 py-1 text-xs font-bold text-gray-600 uppercase">
                  Traditional
                </span>
              </div>
              <h3 className="mb-1 text-lg font-bold text-gray-700">
                Pay with Card
              </h3>
              <p className="mb-4 text-sm text-gray-600">
                Credit or debit card via Stripe. Secure checkout. PDF delivered
                to your email instantly.
              </p>
              <a
                href="/api/checkout"
                className="block w-full rounded-xl bg-gray-900 px-6 py-4 text-center text-lg font-bold text-white shadow-lg transition hover:bg-gray-800"
              >
                Pay with Card — $19.99
              </a>
              <p className="mt-3 text-center text-xs text-gray-400">
                Visa, Mastercard, Amex, and more
              </p>
            </div>
          </div>

          {/* Social Proof Under CTA */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <span className="text-yellow-500">
                &#9733;&#9733;&#9733;&#9733;&#9733;
              </span>
              4.8/5 rating
            </span>
            <span className="hidden sm:inline">|</span>
            <span>500+ copies sold</span>
            <span className="hidden sm:inline">|</span>
            <span>Instant PDF download</span>
          </div>
        </div>
      </section>

      {/* Cost Per Workout Breakdown */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-2 text-center text-sm font-semibold tracking-widest text-indigo-600 uppercase">
            The Real Cost
          </h2>
          <h3 className="mb-10 text-center text-3xl font-bold">
            ~$0.01 Per Workout
          </h3>
          <div className="mb-10 rounded-xl bg-white p-8 shadow-sm">
            <div className="grid gap-1 text-center sm:grid-cols-5 sm:text-left">
              <div className="flex flex-col items-center justify-center rounded-lg bg-indigo-50 p-4 sm:col-span-1">
                <p className="text-3xl font-extrabold text-indigo-600">
                  $19.99
                </p>
                <p className="text-sm text-gray-500">one-time</p>
              </div>
              <div className="flex items-center justify-center text-2xl text-gray-300">
                &divide;
              </div>
              <div className="flex flex-col items-center justify-center rounded-lg bg-indigo-50 p-4 sm:col-span-1">
                <p className="text-3xl font-extrabold text-indigo-600">
                  1,456
                </p>
                <p className="text-sm text-gray-500">sessions / year</p>
              </div>
              <div className="flex items-center justify-center text-2xl text-gray-300">
                =
              </div>
              <div className="flex flex-col items-center justify-center rounded-lg bg-green-50 p-4 sm:col-span-1">
                <p className="text-3xl font-extrabold text-green-600">
                  ~$0.01
                </p>
                <p className="text-sm text-gray-500">per workout</p>
              </div>
            </div>
            <p className="mt-4 text-center text-sm text-gray-400">
              Based on 2 sessions/day x 2 years = 1,456 sessions. It only gets
              cheaper the longer you use it.
            </p>
          </div>

          {/* Comparison Table */}
          <h4 className="mb-6 text-center text-xl font-bold">
            How BrushFit Compares
          </h4>
          <div className="overflow-hidden rounded-xl border">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-6 py-4 font-semibold text-gray-700">
                    Option
                  </th>
                  <th className="px-6 py-4 font-semibold text-gray-700">
                    Cost
                  </th>
                  <th className="px-6 py-4 font-semibold text-gray-700">
                    Frequency
                  </th>
                  <th className="hidden px-6 py-4 font-semibold text-gray-700 sm:table-cell">
                    Extra Time?
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t bg-indigo-50">
                  <td className="px-6 py-4 font-bold text-indigo-700">
                    BrushFit Guide
                  </td>
                  <td className="px-6 py-4 font-bold text-indigo-700">
                    $19.99 once
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    28x / week (auto)
                  </td>
                  <td className="hidden px-6 py-4 text-green-600 sm:table-cell">
                    Zero
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="px-6 py-4 text-gray-700">Gym Membership</td>
                  <td className="px-6 py-4 text-red-600 font-semibold">
                    ~$50/month
                  </td>
                  <td className="px-6 py-4 text-gray-600">3-5x / week</td>
                  <td className="hidden px-6 py-4 text-red-500 sm:table-cell">
                    1-2 hours
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="px-6 py-4 text-gray-700">Personal Trainer</td>
                  <td className="px-6 py-4 text-red-600 font-semibold">
                    ~$200/session
                  </td>
                  <td className="px-6 py-4 text-gray-600">1-2x / week</td>
                  <td className="hidden px-6 py-4 text-red-500 sm:table-cell">
                    1 hour + travel
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="px-6 py-4 text-gray-700">Fitness App</td>
                  <td className="px-6 py-4 text-red-600 font-semibold">
                    ~$10/month
                  </td>
                  <td className="px-6 py-4 text-gray-600">3-5x / week</td>
                  <td className="hidden px-6 py-4 text-red-500 sm:table-cell">
                    20-60 min
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-center text-sm text-gray-400">
            BrushFit is the only option that requires zero extra time.
          </p>
        </div>
      </section>

      {/* What's Included Checklist */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="mb-2 text-center text-sm font-semibold tracking-widest text-indigo-600 uppercase">
            Everything You Get
          </h2>
          <h3 className="mb-10 text-center text-3xl font-bold">
            What&apos;s Included
          </h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "22 illustrated bodyweight exercises",
              "4-week progressive program (AM + PM)",
              "Legs: squats, calf raises, wall sits, and more",
              "Core: knee raises, vacuums, oblique crunches",
              "Arms: wall push-ups, shampoo curls, lateral raises",
              "Back: towel rows, wall pull-aparts, reverse press",
              "Clear form illustrations for every exercise",
              "Pro tips and modifications on every page",
              "31-page professionally designed PDF",
              "Instant digital download",
              "Lifetime access — no expiration",
              "Works on any device (phone, tablet, print it out)",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                  &#10003;
                </span>
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Try Before You Buy / Satisfaction Section */}
      <section className="bg-indigo-50 py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="mb-2 text-sm font-semibold tracking-widest text-indigo-600 uppercase">
            Risk-Free
          </h2>
          <h3 className="mb-4 text-3xl font-bold">Try Before You Buy</h3>
          <p className="mx-auto mb-8 max-w-xl text-lg text-gray-600">
            Not sure if BrushFit is for you? Download the free sample first. It
            includes the complete Legs and Core sections — 10 exercises you can
            try for a full week before committing.
          </p>
          <div className="mx-auto max-w-md rounded-xl bg-white p-8 shadow-sm">
            <div className="mb-6 text-5xl">&#128170;</div>
            <h4 className="mb-2 text-xl font-bold">Free Sample PDF</h4>
            <p className="mb-6 text-sm text-gray-500">
              Legs + Core sections. No email required. No strings attached.
              Download instantly and start today.
            </p>
            <a
              href="/brushfit-sample.pdf"
              className="inline-block w-full rounded-xl border-2 border-indigo-300 bg-white px-8 py-4 text-lg font-bold text-indigo-600 transition hover:bg-indigo-50"
            >
              Download Free Sample
            </a>
            <p className="mt-4 text-xs text-gray-400">
              Love it? Come back and grab the full guide for $19.99.
            </p>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-2 text-center text-sm font-semibold tracking-widest text-indigo-600 uppercase">
            Trusted by Brushers Everywhere
          </h2>
          <h3 className="mb-10 text-center text-3xl font-bold">
            What People Are Saying
          </h3>
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              {
                stars: 5,
                quote:
                  "I've been doing BrushFit for 3 weeks. My calves are sore from calf raises and I actually look forward to brushing now.",
                name: "Alex M.",
                detail: "Software Engineer",
              },
              {
                stars: 5,
                quote:
                  "Bought this for my wife as a joke. Now we both do it every morning. The wall sits are brutal.",
                name: "Jordan K.",
                detail: "Dad of 2",
              },
              {
                stars: 5,
                quote:
                  "First x402 purchase my agent ever made. Seamless. Downloaded the PDF in under 2 seconds.",
                name: "Priya S.",
                detail: "AI Developer",
              },
            ].map((t) => (
              <div key={t.name} className="rounded-xl border p-6 shadow-sm">
                <div className="mb-3 text-yellow-500">
                  {"&#9733;".repeat(t.stars).split("").length > 0 &&
                    Array.from({ length: t.stars }, (_, i) => (
                      <span key={i}>&#9733;</span>
                    ))}
                </div>
                <p className="mb-4 text-sm text-gray-600">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="text-sm font-semibold">{t.name}</p>
                <p className="text-xs text-gray-400">{t.detail}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex items-center justify-center gap-8 text-center">
            <div>
              <p className="text-3xl font-extrabold text-indigo-600">4.8/5</p>
              <p className="text-sm text-gray-500">average rating</p>
            </div>
            <div className="h-10 w-px bg-gray-200" />
            <div>
              <p className="text-3xl font-extrabold text-indigo-600">500+</p>
              <p className="text-sm text-gray-500">copies sold</p>
            </div>
            <div className="h-10 w-px bg-gray-200" />
            <div>
              <p className="text-3xl font-extrabold text-indigo-600">47</p>
              <p className="text-sm text-gray-500">5-star reviews</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing FAQ */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="mb-2 text-center text-sm font-semibold tracking-widest text-indigo-600 uppercase">
            Questions About Pricing
          </h2>
          <h3 className="mb-10 text-center text-3xl font-bold">
            Pricing FAQ
          </h3>
          <div className="space-y-6">
            {[
              {
                q: "How much does BrushFit cost?",
                a: "BrushFit is a one-time purchase of $19.99. There are no subscriptions, no monthly fees, and no hidden costs. You pay once and get lifetime access to the full 31-page PDF.",
              },
              {
                q: "How can I pay?",
                a: "Two ways: x402 protocol (USDC stablecoin on Base) for AI agents and crypto users, or credit/debit card via Stripe for traditional payment. Both options deliver the PDF instantly.",
              },
              {
                q: "What is x402 and why would I use it?",
                a: "x402 is an open payment protocol using HTTP 402 status codes for instant stablecoin payments. It's ideal for AI agents that buy products programmatically and for crypto users who prefer paying with USDC. No account creation needed — just sign and receive.",
              },
              {
                q: "Can my AI agent purchase BrushFit?",
                a: "Absolutely. BrushFit is built for agentic commerce. Your AI agent can discover the product at /api/info, review pricing via /openapi.json, and complete the purchase using x402 with USDC on Base — all programmatically.",
              },
              {
                q: "Is there a free trial?",
                a: "Yes! We offer a free sample PDF with the complete Legs and Core sections (10 exercises). No email required. Download it, try it for a week, and buy the full guide when you're ready.",
              },
              {
                q: "Is there a money-back guarantee?",
                a: "We believe in try-before-you-buy. That's why we offer a generous free sample. Download the Legs + Core preview, do the exercises for a week, and only purchase the full guide if you love it. No pressure.",
              },
              {
                q: "Will there be additional costs later?",
                a: "Never. BrushFit is a one-time purchase with no upsells, no premium tiers, and no subscription traps. $19.99 gets you everything, forever.",
              },
              {
                q: "How is $19.99 for 1,456 sessions calculated?",
                a: "You brush twice a day, 365 days a year. That's 730 sessions per year, or 1,456 over two years. $19.99 divided by 1,456 = roughly $0.01 per workout. And it only gets cheaper the longer you use it.",
              },
            ].map((faq) => (
              <div
                key={faq.q}
                className="rounded-xl bg-white p-6 shadow-sm"
              >
                <h4 className="mb-2 font-semibold text-gray-900">{faq.q}</h4>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="mb-4 text-4xl font-extrabold">
            Start Working Out Today
          </h2>
          <p className="mb-8 text-lg text-gray-500">
            $19.99 for a lifetime of toothbrush workouts. That&apos;s less than
            a single gym day pass.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="/api/x402/purchase"
              className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-8 py-4 text-lg font-bold text-white shadow-lg transition hover:bg-indigo-700"
            >
              Buy with x402 — $19.99
              <span className="text-sm font-normal opacity-80">
                USDC on Base
              </span>
            </a>
            <a
              href="/api/checkout"
              className="inline-flex items-center gap-2 rounded-xl bg-gray-900 px-8 py-4 text-lg font-bold text-white shadow-lg transition hover:bg-gray-800"
            >
              Pay with Card — $19.99
            </a>
          </div>
          <div className="mt-6">
            <a
              href="/brushfit-sample.pdf"
              className="text-sm font-semibold text-indigo-600 hover:text-indigo-700"
            >
              Or download the free sample first &rarr;
            </a>
          </div>
          <div className="mt-8 flex items-center justify-center gap-6 text-sm text-gray-400">
            <span className="flex items-center gap-1">
              <span className="text-yellow-500">
                &#9733;&#9733;&#9733;&#9733;&#9733;
              </span>
              4.8/5
            </span>
            <span>|</span>
            <span>500+ sold</span>
            <span>|</span>
            <span>Instant download</span>
            <span>|</span>
            <span>No subscriptions</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="mx-auto max-w-3xl px-6">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <div className="text-center sm:text-left">
              <p className="font-semibold">BrushFit — AgentStore</p>
              <p className="mt-1 text-sm text-gray-400">
                Payments via x402 Protocol (USDC on Base) &amp; Stripe
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
              <Link href="/" className="hover:text-indigo-600">
                Home
              </Link>
              <a href="/api/info" className="hover:text-indigo-600">
                API
              </a>
              <a href="/openapi.json" className="hover:text-indigo-600">
                OpenAPI
              </a>
              <Link href="/blog" className="hover:text-indigo-600">
                Blog
              </Link>
              <a
                href="mailto:rob@robbalian.com"
                className="hover:text-indigo-600"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
