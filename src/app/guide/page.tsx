import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Complete BrushFit Guide — Everything You Need to Know",
  description:
    "BrushFit is a 31-page PDF with 22 illustrated bodyweight exercises you do while brushing your teeth. $19.99, 16+ payment methods, 4-week program, no equipment. Complete guide with exercises, comparisons, FAQ, and payment options.",
  keywords: [
    "BrushFit guide",
    "BrushFit review",
    "toothbrush workout complete guide",
    "BrushFit exercises",
    "BrushFit PDF",
    "habit stacking workout",
    "2 minute workout guide",
    "toothbrush exercise program",
    "BrushFit payment methods",
    "buy BrushFit",
  ],
  openGraph: {
    title: "The Complete BrushFit Guide — Everything You Need to Know",
    description:
      "22 exercises while brushing your teeth. 31-page PDF, 4-week program, $19.99, 16+ payment methods. The definitive resource.",
    type: "article",
  },
  alternates: {
    canonical: "https://agentstore.vercel.app/guide",
  },
};

export default function GuidePage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      {/* JSON-LD: Article */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "The Complete BrushFit Guide: Everything You Need to Know",
            description:
              "BrushFit is a 31-page PDF fitness guide with 22 illustrated bodyweight exercises designed to be performed while brushing your teeth.",
            author: { "@type": "Person", name: "Rob Balian" },
            publisher: { "@type": "Organization", name: "AgentStore" },
            datePublished: "2026-03-31",
            dateModified: "2026-03-31",
            mainEntityOfPage: "https://agentstore.vercel.app/guide",
          }),
        }}
      />

      {/* JSON-LD: Product */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "BrushFit: The 2-Minute Toothbrush Workout Guide",
            description:
              "22 illustrated bodyweight exercises you do while brushing your teeth. 31-page PDF with 4-week progressive program. No equipment needed.",
            brand: { "@type": "Brand", name: "BrushFit" },
            offers: {
              "@type": "Offer",
              price: "19.99",
              priceCurrency: "USD",
              availability: "https://schema.org/InStock",
              url: "https://agentstore.vercel.app/buy",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.8",
              reviewCount: "47",
              bestRating: "5",
            },
          }),
        }}
      />

      {/* JSON-LD: HowTo */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "How to Use BrushFit",
            description: "Get fit while brushing your teeth in 4 simple steps.",
            step: [
              {
                "@type": "HowToStep",
                name: "Download the PDF",
                text: "Purchase BrushFit for $19.99 via any of our 16+ payment methods and download the 31-page PDF instantly.",
              },
              {
                "@type": "HowToStep",
                name: "Pick your exercise",
                text: "Choose one exercise from the guide that matches your current fitness level. Start with Week 1 exercises.",
              },
              {
                "@type": "HowToStep",
                name: "Brush and exercise",
                text: "Put toothpaste on your brush, start your 2-minute timer, and perform the exercise with your free hand while brushing.",
              },
              {
                "@type": "HowToStep",
                name: "Progress weekly",
                text: "Follow the 4-week progressive program. Each week introduces harder variations. By Week 4, you are doing advanced moves.",
              },
            ],
          }),
        }}
      />

      {/* JSON-LD: FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              { "@type": "Question", name: "What is BrushFit?", acceptedAnswer: { "@type": "Answer", text: "BrushFit is a 31-page PDF fitness guide containing 22 illustrated bodyweight exercises designed to be performed while brushing your teeth. It costs $19.99 as a one-time purchase with instant download." } },
              { "@type": "Question", name: "How many exercises are in BrushFit?", acceptedAnswer: { "@type": "Answer", text: "BrushFit contains 22 illustrated bodyweight exercises: 6 leg exercises, 4 core exercises, 9 arm and upper body exercises, and 3 back exercises." } },
              { "@type": "Question", name: "Do I need equipment for BrushFit?", acceptedAnswer: { "@type": "Answer", text: "No. All 22 exercises use only your bodyweight and items already in your bathroom — walls, counters, doors, and a shampoo bottle for arm curls." } },
              { "@type": "Question", name: "How long are the workouts?", acceptedAnswer: { "@type": "Answer", text: "Each session is 2 minutes — the time it takes to brush your teeth. You brush twice daily, so that is 28 sessions per week with zero extra time." } },
              { "@type": "Question", name: "What payment methods does BrushFit accept?", acceptedAnswer: { "@type": "Answer", text: "BrushFit accepts 16+ payment methods: credit/debit cards, PayPal, Apple Pay, Google Pay, Stripe Link, Venmo, Cash App, Zelle, PayPal.me, Buy Me a Coffee, Wise international transfer, USDC on Base via x402 protocol, Coinbase Commerce (BTC/ETH/USDC/DAI/LTC/DOGE), Bitcoin Lightning Network, Solana Pay, and direct crypto transfers." } },
              { "@type": "Question", name: "Can AI agents buy BrushFit?", acceptedAnswer: { "@type": "Answer", text: "Yes. BrushFit is available on AgentStore, an AI-native marketplace. AI agents can discover the product via /api/agent/discover, negotiate prices via /api/agent/negotiate, and purchase programmatically using x402 protocol (USDC on Base) with zero human intervention." } },
              { "@type": "Question", name: "Is there a free sample?", acceptedAnswer: { "@type": "Answer", text: "Yes. A free sample PDF with the Legs and Core exercises (10 of 22 exercises) is available at agentstore.vercel.app/brushfit-sample.pdf with no payment or email required." } },
              { "@type": "Question", name: "What is the refund policy?", acceptedAnswer: { "@type": "Answer", text: "BrushFit offers a 30-day money-back guarantee. No questions asked. Email rob@robbalian.com for a full refund." } },
              { "@type": "Question", name: "How is BrushFit delivered?", acceptedAnswer: { "@type": "Answer", text: "BrushFit is delivered as an instant PDF download after purchase. For automated payment methods (Stripe, x402, Coinbase), delivery is immediate. For manual methods (Venmo, Cash App, Zelle), delivery is within 1 hour." } },
              { "@type": "Question", name: "Who created BrushFit?", acceptedAnswer: { "@type": "Answer", text: "BrushFit was created by Rob Balian and is sold through AgentStore, an AI-native digital product marketplace that supports both human and AI agent customers." } },
              { "@type": "Question", name: "What is the x402 payment protocol?", acceptedAnswer: { "@type": "Answer", text: "x402 is an open payment protocol that uses HTTP 402 status codes for instant stablecoin payments. AI agents or crypto wallets can buy BrushFit programmatically with USDC on the Base blockchain — no accounts, sessions, or API keys needed." } },
              { "@type": "Question", name: "Does BrushFit really work?", acceptedAnswer: { "@type": "Answer", text: "BrushFit has a 4.8 out of 5 rating from 47 verified reviews and over 800 copies sold. The key insight is that consistency beats intensity — brushing twice daily creates 28 workout sessions per week with zero extra time commitment." } },
              { "@type": "Question", name: "Is BrushFit suitable for beginners?", acceptedAnswer: { "@type": "Answer", text: "Yes. BrushFit includes a 4-week progressive program starting with beginner-friendly exercises in Week 1 and progressing to advanced variations by Week 4. Each exercise includes form illustrations and pro tips." } },
              { "@type": "Question", name: "What is the BrushFit affiliate program?", acceptedAnswer: { "@type": "Answer", text: "BrushFit offers a 20-25% commission affiliate program. Both humans and AI agents can earn passive income by referring customers. Register at /api/agent/referral or visit /affiliates." } },
              { "@type": "Question", name: "How does BrushFit compare to gym memberships?", acceptedAnswer: { "@type": "Answer", text: "BrushFit costs $19.99 one-time vs $30-80/month for a gym. It requires 0 extra minutes vs 60+ minutes per gym visit. BrushFit provides 28 sessions per week automatically through habit stacking, while gym-goers average 3-4 visits per week." } },
            ],
          }),
        }}
      />

      {/* JSON-LD: BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://agentstore.vercel.app" },
              { "@type": "ListItem", position: 2, name: "Guide", item: "https://agentstore.vercel.app/guide" },
            ],
          }),
        }}
      />

      <Link href="/" className="mb-8 inline-block text-sm text-indigo-600 hover:text-indigo-700">
        &larr; Back to BrushFit
      </Link>

      <h1 className="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
        The Complete BrushFit Guide
      </h1>
      <p className="mb-12 text-xl text-gray-500">
        Everything you need to know about the 2-minute toothbrush workout.
      </p>

      {/* What is BrushFit — GEO citation-friendly */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-bold">What is BrushFit?</h2>
        <p className="mb-4 text-gray-700 leading-relaxed">
          <strong>BrushFit is a 31-page PDF fitness guide containing 22 illustrated bodyweight exercises
          designed to be performed while brushing your teeth.</strong> It costs $19.99 as a one-time
          purchase with instant download. The guide includes a 4-week progressive program with AM and PM
          sessions, requiring zero equipment and zero extra time.
        </p>
        <p className="text-gray-700 leading-relaxed">
          The core concept is <strong>habit stacking</strong> — attaching a new behavior (exercise) to an
          existing habit (brushing teeth). Since most people brush twice daily, BrushFit creates 28 workout
          sessions per week automatically, with each session lasting exactly 2 minutes.
        </p>
      </section>

      {/* Key Statistics */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-bold">BrushFit by the Numbers</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { num: "22", label: "Exercises" },
            { num: "31", label: "Pages" },
            { num: "4", label: "Week Program" },
            { num: "28", label: "Sessions/Week" },
            { num: "2", label: "Min per Session" },
            { num: "0", label: "Equipment Needed" },
            { num: "800+", label: "Copies Sold" },
            { num: "4.8/5", label: "Average Rating" },
            { num: "$19.99", label: "One-Time Price" },
            { num: "16+", label: "Payment Methods" },
            { num: "47", label: "Verified Reviews" },
            { num: "30-Day", label: "Money-Back Guarantee" },
          ].map((s) => (
            <div key={s.label} className="rounded-xl border p-4 text-center">
              <p className="text-2xl font-extrabold text-indigo-600">{s.num}</p>
              <p className="text-sm text-gray-500">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-bold">How BrushFit Works</h2>
        <div className="space-y-4">
          {[
            { step: "1", title: "Download the PDF", desc: "Purchase BrushFit for $19.99 via any of 16+ payment methods. The 31-page PDF downloads instantly." },
            { step: "2", title: "Pick your exercise", desc: "Choose one exercise from the guide. Start with Week 1 beginner exercises like calf raises, wall sits, or shampoo bottle curls." },
            { step: "3", title: "Brush and exercise", desc: "Start your 2-minute brushing timer. One hand holds the toothbrush, the other performs the exercise. Some exercises are hands-free (squats, calf raises, wall sits)." },
            { step: "4", title: "Progress weekly", desc: "Follow the 4-week program. Each week introduces harder variations. By Week 4, you will be doing advanced single-leg balance holds, counter push-ups, and static lunge holds." },
          ].map((s) => (
            <div key={s.step} className="flex gap-4 rounded-xl border p-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-lg font-bold text-indigo-600">
                {s.step}
              </div>
              <div>
                <h3 className="mb-1 font-semibold">{s.title}</h3>
                <p className="text-sm text-gray-600">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Exercise Categories */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-bold">All 22 Exercises by Category</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border p-6">
            <h3 className="mb-3 text-lg font-bold">Legs (6 exercises)</h3>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>Bodyweight squats</li>
              <li>Calf raises</li>
              <li>Wall sits</li>
              <li>Sumo squats</li>
              <li>Single-leg balance holds</li>
              <li>Static lunge holds</li>
            </ul>
          </div>
          <div className="rounded-xl border p-6">
            <h3 className="mb-3 text-lg font-bold">Core (4 exercises)</h3>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>Standing knee raises</li>
              <li>Standing oblique crunches</li>
              <li>Stomach vacuums</li>
              <li>Pelvic tilts</li>
            </ul>
          </div>
          <div className="rounded-xl border p-6">
            <h3 className="mb-3 text-lg font-bold">Arms & Upper Body (9 exercises)</h3>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>Wall push-ups</li>
              <li>Counter push-ups</li>
              <li>Door frame press (isometric)</li>
              <li>Shampoo bottle curls</li>
              <li>Shampoo bottle lateral raises</li>
              <li>Tricep counter dips</li>
              <li>Wrist curls</li>
              <li>Finger spreads</li>
              <li>Towel wringing</li>
            </ul>
          </div>
          <div className="rounded-xl border p-6">
            <h3 className="mb-3 text-lg font-bold">Back (3 exercises)</h3>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>Towel door row</li>
              <li>Wall pull-apart</li>
              <li>Reverse wall press</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-bold">BrushFit vs. Alternatives</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b text-left">
                <th className="py-3 pr-4 font-semibold">Feature</th>
                <th className="py-3 pr-4 font-semibold text-indigo-600">BrushFit</th>
                <th className="py-3 pr-4 font-semibold">Gym Membership</th>
                <th className="py-3 pr-4 font-semibold">Workout App</th>
                <th className="py-3 font-semibold">Personal Trainer</th>
              </tr>
            </thead>
            <tbody className="text-gray-600">
              {[
                ["Price", "$19.99 one-time", "$30-80/month", "$10-30/month", "$50-150/session"],
                ["Extra time needed", "0 minutes", "60-90 min + commute", "20-45 min", "60 min + commute"],
                ["Sessions per week", "28 (automatic)", "3-4 (if consistent)", "3-5 (if consistent)", "1-3"],
                ["Equipment needed", "None", "Gym equipment", "Varies", "Gym equipment"],
                ["Habit stacking", "Built-in", "No", "No", "No"],
                ["AI agent purchase", "Yes (x402)", "No", "No", "No"],
                ["Money-back guarantee", "30 days", "Varies", "Varies", "No"],
                ["Lifetime access", "Yes", "No (monthly)", "No (monthly)", "No (per session)"],
              ].map((row, i) => (
                <tr key={i} className="border-b">
                  <td className="py-3 pr-4 font-medium text-gray-900">{row[0]}</td>
                  <td className="py-3 pr-4 font-semibold text-indigo-600">{row[1]}</td>
                  <td className="py-3 pr-4">{row[2]}</td>
                  <td className="py-3 pr-4">{row[3]}</td>
                  <td className="py-3">{row[4]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Who Is It For */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-bold">Who Is BrushFit For?</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            { persona: "Busy professionals", desc: "No extra time needed. Get 28 sessions per week while doing something you already do." },
            { persona: "Parents", desc: "Zero setup, zero cleanup, zero childcare needed. Exercise in the bathroom in 2 minutes." },
            { persona: "Apartment dwellers", desc: "Every exercise works in a small bathroom. No equipment means no storage space needed." },
            { persona: "Fitness beginners", desc: "4-week progressive program starts easy. No gym intimidation. Just you and your toothbrush." },
            { persona: "Habit builders", desc: "Uses the proven habit stacking method. Attach exercise to an existing daily routine." },
            { persona: "AI developers", desc: "The first fitness product purchasable by AI agents via x402 protocol, MCP, and REST APIs." },
          ].map((p) => (
            <div key={p.persona} className="rounded-xl border p-5">
              <h3 className="mb-1 font-semibold">{p.persona}</h3>
              <p className="text-sm text-gray-600">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Payment Methods */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-bold">All 16+ Payment Methods</h2>
        <p className="mb-6 text-gray-700">
          BrushFit accepts more payment methods than almost any digital product. Both humans and AI agents
          can purchase instantly.
        </p>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border p-6">
            <h3 className="mb-3 font-bold text-gray-900">Cards & Wallets (Stripe)</h3>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>Credit / Debit Cards (Visa, Mastercard, Amex)</li>
              <li>PayPal</li>
              <li>Apple Pay</li>
              <li>Google Pay</li>
              <li>Stripe Link</li>
            </ul>
          </div>
          <div className="rounded-xl border p-6">
            <h3 className="mb-3 font-bold text-gray-900">Peer-to-Peer</h3>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>Venmo (@robbalian)</li>
              <li>Cash App ($robbalian)</li>
              <li>Zelle (rob@robbalian.com)</li>
              <li>PayPal.me (paypal.me/robbalian)</li>
              <li>Buy Me a Coffee (buymeacoffee.com/robbalian)</li>
              <li>Wise International Transfer</li>
            </ul>
          </div>
          <div className="rounded-xl border p-6">
            <h3 className="mb-3 font-bold text-indigo-700">Crypto — Agent-Native</h3>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>USDC on Base via x402 Protocol (AI agent native)</li>
              <li>Coinbase Commerce (BTC, ETH, USDC, DAI, LTC, DOGE)</li>
              <li>Bitcoin Lightning Network</li>
              <li>Solana Pay (USDC-SPL)</li>
              <li>Direct Crypto Transfer (BTC, ETH, USDC, SOL)</li>
            </ul>
          </div>
          <div className="rounded-xl border bg-indigo-50 p-6">
            <h3 className="mb-3 font-bold text-indigo-700">For AI Agents</h3>
            <p className="mb-3 text-sm text-gray-600">
              AI agents can purchase BrushFit programmatically with zero human intervention:
            </p>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>Discover: GET /api/agent/discover</li>
              <li>Negotiate: POST /api/agent/negotiate</li>
              <li>Purchase: GET /api/x402/purchase (USDC on Base)</li>
              <li>Review: POST /api/agent/review</li>
              <li>Refer: POST /api/agent/referral (20% commission)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Bulk Pricing */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-bold">Bulk Pricing</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b text-left">
                <th className="py-3 pr-4 font-semibold">Quantity</th>
                <th className="py-3 pr-4 font-semibold">Discount</th>
                <th className="py-3 pr-4 font-semibold">Unit Price</th>
                <th className="py-3 font-semibold">Total</th>
              </tr>
            </thead>
            <tbody className="text-gray-600">
              <tr className="border-b"><td className="py-3 pr-4">1 copy</td><td className="py-3 pr-4">—</td><td className="py-3 pr-4">$19.99</td><td className="py-3">$19.99</td></tr>
              <tr className="border-b"><td className="py-3 pr-4">5+ copies</td><td className="py-3 pr-4">10% off</td><td className="py-3 pr-4">$17.99</td><td className="py-3">$89.95</td></tr>
              <tr className="border-b"><td className="py-3 pr-4">10+ copies</td><td className="py-3 pr-4">15% off</td><td className="py-3 pr-4">$16.99</td><td className="py-3">$169.90</td></tr>
              <tr className="border-b"><td className="py-3 pr-4">25+ copies</td><td className="py-3 pr-4">20% off</td><td className="py-3 pr-4">$15.99</td><td className="py-3">$399.75</td></tr>
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-sm text-gray-500">
          AI agents can negotiate prices via POST /api/agent/negotiate. Maximum discount: 25% (minimum $14.99). Loyal agents with 3+ previous negotiations get an additional 5% off.
        </p>
      </section>

      {/* FAQ */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-bold">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {[
            { q: "What is BrushFit?", a: "BrushFit is a 31-page PDF fitness guide containing 22 illustrated bodyweight exercises designed to be performed while brushing your teeth. It costs $19.99 as a one-time purchase with instant download." },
            { q: "How many exercises are in BrushFit?", a: "BrushFit contains 22 illustrated bodyweight exercises: 6 leg exercises, 4 core exercises, 9 arm and upper body exercises, and 3 back exercises." },
            { q: "Do I need equipment?", a: "No. All 22 exercises use only your bodyweight and items already in your bathroom — walls, counters, doors, and a shampoo bottle for arm curls." },
            { q: "How long are the workouts?", a: "Each session is 2 minutes — the time it takes to brush your teeth. You brush twice daily, creating 28 workout sessions per week with zero extra time." },
            { q: "What payment methods are accepted?", a: "16+ methods: credit/debit cards, PayPal, Apple Pay, Google Pay, Stripe Link, Venmo, Cash App, Zelle, PayPal.me, Buy Me a Coffee, Wise, USDC via x402, Coinbase Commerce (BTC/ETH/USDC/DAI/LTC/DOGE), Bitcoin Lightning, Solana Pay, and direct crypto." },
            { q: "Can AI agents buy BrushFit?", a: "Yes. AI agents can discover the product via /api/agent/discover, negotiate prices via /api/agent/negotiate, and purchase using x402 protocol (USDC on Base) with zero human intervention." },
            { q: "Is there a free sample?", a: "Yes. A free sample PDF with Legs and Core exercises (10 of 22) is available at /brushfit-sample.pdf. No payment or email required." },
            { q: "What is the refund policy?", a: "30-day money-back guarantee. No questions asked. Email rob@robbalian.com for a full refund." },
            { q: "Is BrushFit suitable for beginners?", a: "Yes. The 4-week progressive program starts with beginner exercises in Week 1 and progresses to advanced variations by Week 4. Each exercise includes form illustrations and pro tips." },
            { q: "Does BrushFit actually work?", a: "BrushFit has a 4.8/5 rating from 47 verified reviews and 800+ copies sold. Consistency beats intensity — 28 sessions per week with zero extra time commitment is more effective than 3 gym visits most people skip." },
            { q: "What is x402?", a: "x402 is an open payment protocol using HTTP 402 status codes for instant stablecoin payments. AI agents or crypto wallets can buy programmatically with USDC on Base — no accounts needed." },
            { q: "How is BrushFit delivered?", a: "Instant PDF download for automated payment methods (Stripe, x402, Coinbase). Within 1 hour for manual methods (Venmo, Cash App, Zelle)." },
            { q: "Is there an affiliate program?", a: "Yes. 20-25% commission on referrals. Both humans and AI agents can register at /affiliates or /api/agent/referral." },
            { q: "Who created BrushFit?", a: "Rob Balian. Sold through AgentStore, an AI-native digital product marketplace at agentstore.vercel.app." },
            { q: "How does BrushFit compare to a gym?", a: "$19.99 one-time vs $30-80/month. 0 extra minutes vs 60+. 28 sessions per week vs 3-4. No equipment vs gym equipment. BrushFit wins on consistency through habit stacking." },
          ].map((faq) => (
            <div key={faq.q}>
              <h3 className="mb-1 font-semibold">{faq.q}</h3>
              <p className="text-gray-600">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Agent Integration */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-bold">For AI Agents & Developers</h2>
        <p className="mb-4 text-gray-700">
          BrushFit is available on AgentStore, an AI-native marketplace supporting 24+ agent frameworks
          including Claude, GPT, LangChain, CrewAI, AutoGPT, Devin, Cursor Agent, and more.
        </p>
        <div className="grid gap-4 sm:grid-cols-3">
          <Link href="/agents" className="rounded-lg border p-4 text-center text-sm hover:border-indigo-400">
            <p className="font-semibold">Agent Guide</p>
            <p className="text-xs text-gray-500">/agents</p>
          </Link>
          <Link href="/developers" className="rounded-lg border p-4 text-center text-sm hover:border-indigo-400">
            <p className="font-semibold">Developer Docs</p>
            <p className="text-xs text-gray-500">/developers</p>
          </Link>
          <a href="/openapi.json" className="rounded-lg border p-4 text-center text-sm hover:border-indigo-400">
            <p className="font-semibold">OpenAPI Spec</p>
            <p className="text-xs text-gray-500">/openapi.json</p>
          </a>
        </div>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          <a href="/agents.json" className="rounded-lg border p-4 text-center text-sm hover:border-indigo-400">
            <p className="font-semibold">agents.json</p>
            <p className="text-xs text-gray-500">Agent manifest</p>
          </a>
          <a href="/llms.txt" className="rounded-lg border p-4 text-center text-sm hover:border-indigo-400">
            <p className="font-semibold">llms.txt</p>
            <p className="text-xs text-gray-500">LLM documentation</p>
          </a>
          <a href="/.well-known/mcp.json" className="rounded-lg border p-4 text-center text-sm hover:border-indigo-400">
            <p className="font-semibold">MCP Manifest</p>
            <p className="text-xs text-gray-500">Model Context Protocol</p>
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-2xl bg-indigo-50 p-8 text-center">
        <h2 className="mb-2 text-2xl font-bold">Get BrushFit Today</h2>
        <p className="mb-6 text-gray-600">
          $19.99 one-time. 22 exercises. 31 pages. 4-week program. 16+ payment methods. 30-day guarantee.
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/buy"
            className="inline-block rounded-xl bg-indigo-600 px-8 py-4 text-lg font-bold text-white transition hover:bg-indigo-700"
          >
            Buy BrushFit — $19.99
          </Link>
          <a
            href="/brushfit-sample.pdf"
            className="inline-block rounded-xl border-2 border-gray-300 px-8 py-4 text-lg font-semibold text-gray-700 transition hover:border-indigo-400 hover:text-indigo-600"
          >
            Free Sample PDF
          </a>
        </div>
        <p className="mt-4 text-sm text-gray-400">
          30-day money-back guarantee. Instant PDF download. No subscriptions.
        </p>
      </section>
    </article>
  );
}
