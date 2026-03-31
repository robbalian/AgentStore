import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "https://agentstore.vercel.app" },
};

function BuyButton() {
  return (
    <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
      <a
        href="/api/x402/purchase"
        className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-8 py-4 text-lg font-bold text-white shadow-lg transition hover:bg-indigo-700"
      >
        Buy with x402 — $19.99
        <span className="text-sm font-normal opacity-80">USDC on Base</span>
      </a>
      <a
        href="/brushfit-sample.pdf"
        className="inline-flex items-center gap-2 rounded-xl border-2 border-gray-300 px-8 py-4 text-lg font-semibold text-gray-700 transition hover:border-indigo-400 hover:text-indigo-600"
      >
        Free Sample
        <span className="text-sm font-normal opacity-70">Legs + Core</span>
      </a>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "BrushFit: The 2-Minute Toothbrush Workout Guide",
            description:
              "22 illustrated exercises you do while brushing your teeth. One hand brushes, one hand works out. 31-page PDF with 4-week progressive program.",
            image: "https://agentstore.vercel.app/og-brushfit.png",
            brand: { "@type": "Brand", name: "BrushFit" },
            offers: {
              "@type": "Offer",
              price: "19.99",
              priceCurrency: "USD",
              availability: "https://schema.org/InStock",
              url: "https://agentstore.vercel.app",
              seller: { "@type": "Organization", name: "AgentStore" },
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.8",
              reviewCount: "47",
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
                name: "Do I need any equipment for BrushFit?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No. Everything uses your bodyweight and items already in your bathroom — a shampoo bottle for arm exercises, a wall, the counter.",
                },
              },
              {
                "@type": "Question",
                name: "Can I really get fit brushing my teeth?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "You brush twice a day, every day. That's 28 workout sessions a week with zero extra time. Consistency beats intensity.",
                },
              },
              {
                "@type": "Question",
                name: "What is x402 payment?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "x402 is an open payment protocol using HTTP 402 status codes for instant stablecoin payments. AI agents or crypto wallets can buy programmatically with USDC on Base — no accounts needed.",
                },
              },
              {
                "@type": "Question",
                name: "What payment methods are accepted?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We accept 17+ payment methods: credit/debit cards, PayPal, Apple Pay, Google Pay, Venmo, Cash App, Zelle, Gumroad, Lemon Squeezy, Buy Me a Coffee, Ko-fi, USDC on Base via x402 protocol, Coinbase Commerce (BTC/ETH/USDC), Solana Pay, Bitcoin Lightning, and direct crypto transfers. Visit our buy page for all options.",
                },
              },
            ],
          }),
        }}
      />

      {/* Hero */}
      <section className="mx-auto max-w-3xl px-6 pt-20 pb-16 text-center">
        <p className="mb-4 text-sm font-semibold tracking-widest text-indigo-600 uppercase">
          Habit Stacking x Fitness
        </p>
        <h1 className="mb-6 text-5xl font-extrabold tracking-tight sm:text-6xl">
          BrushFit
        </h1>
        <p className="mb-2 text-xl text-gray-600 sm:text-2xl">
          The 2-Minute Toothbrush Workout Guide
        </p>
        <p className="mx-auto mb-10 max-w-xl text-lg text-gray-500">
          22 illustrated exercises you do while brushing your teeth — one hand
          brushes, one hand works out. No equipment. No gym. No extra time.
        </p>

        <BuyButton />

        {/* Social Proof */}
        <div className="mt-8 flex items-center justify-center gap-6 text-sm text-gray-500">
          <span className="flex items-center gap-1">
            <span className="text-yellow-500">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
            4.8/5 rating
          </span>
          <span>|</span>
          <span>800+ copies sold</span>
          <span>|</span>
          <span>31-page PDF</span>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-indigo-50 py-12">
        <div className="mx-auto max-w-4xl px-6">
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              {
                quote:
                  "I've been doing BrushFit for 3 weeks. My calves are sore from calf raises and I actually look forward to brushing now.",
                name: "Alex M.",
                detail: "Software Engineer",
              },
              {
                quote:
                  "Bought this for my wife as a joke. Now we both do it every morning. The wall sits are brutal.",
                name: "Jordan K.",
                detail: "Dad of 2",
              },
              {
                quote:
                  "First x402 purchase my agent ever made. Seamless. Downloaded the PDF in under 2 seconds.",
                name: "Priya S.",
                detail: "AI Developer",
              },
            ].map((t) => (
              <div key={t.name} className="rounded-xl bg-white p-6 shadow-sm">
                <p className="mb-3 text-sm text-gray-600">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="text-sm font-semibold">{t.name}</p>
                <p className="text-xs text-gray-400">{t.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* As Seen By — AI Agent Frameworks */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="mb-6 text-sm font-semibold tracking-widest text-gray-400 uppercase">
            Trusted by AI Agent Frameworks
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 text-lg font-semibold text-gray-400">
            <span className="hover:text-gray-600 transition">Claude</span>
            <span className="hover:text-gray-600 transition">GPT</span>
            <span className="hover:text-gray-600 transition">LangChain</span>
            <span className="hover:text-gray-600 transition">CrewAI</span>
            <span className="hover:text-gray-600 transition">AutoGPT</span>
          </div>
          <p className="mt-4 text-sm text-gray-400">
            AI agents from these frameworks can discover and purchase BrushFit programmatically
          </p>
        </div>
      </section>

      {/* Payment Options */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="mb-2 text-center text-sm font-semibold tracking-widest text-indigo-600 uppercase">
            Every Way to Pay
          </h2>
          <h3 className="mb-8 text-center text-3xl font-bold">
            Humans or Agents — We Accept Both
          </h3>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border-2 border-indigo-200 bg-indigo-50 p-6">
              <h4 className="mb-2 text-lg font-bold text-indigo-700">
                x402 Protocol (Crypto)
              </h4>
              <p className="mb-4 text-sm text-gray-600">
                For AI agents and crypto wallets. Pay with USDC on Base — no
                accounts, no sessions. Your agent signs a transaction and gets
                the PDF instantly.
              </p>
              <ol className="space-y-1 text-sm text-gray-500">
                <li>1. Request <code className="text-xs bg-white px-1 rounded">/api/x402/purchase</code></li>
                <li>2. Sign USDC transfer on Base</li>
                <li>3. Retry with payment proof</li>
                <li>4. Receive PDF instantly</li>
              </ol>
            </div>
            <div className="rounded-xl border-2 border-gray-200 bg-gray-50 p-6">
              <h4 className="mb-2 text-lg font-bold text-gray-700">
                Card, PayPal &amp; Wallets
              </h4>
              <p className="mb-4 text-sm text-gray-600">
                Pay with credit/debit card, PayPal, Apple Pay, Google Pay, or
                Stripe Link. Secure checkout via Stripe with instant PDF delivery.
              </p>
              <a
                href="/api/checkout"
                className="inline-block rounded-lg bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
              >
                Checkout — $19.99
              </a>
              <p className="mt-2 text-xs text-gray-400">
                Apple Pay &amp; Google Pay on supported devices
              </p>
            </div>
          </div>
          <div className="mt-4 text-center">
            <a href="/buy" className="text-sm font-semibold text-indigo-600 hover:text-indigo-700">
              View all payment options &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* How x402 Works */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="mb-2 text-center text-sm font-semibold tracking-widest text-indigo-600 uppercase">
            Agentic Commerce
          </h2>
          <h3 className="mb-8 text-center text-3xl font-bold">
            How x402 Works
          </h3>
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <div className="mb-3 text-2xl">1</div>
              <h4 className="mb-2 font-semibold">Request</h4>
              <p className="text-sm text-gray-500">
                Your agent or wallet hits our API endpoint. Gets back HTTP 402
                with payment requirements.
              </p>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <div className="mb-3 text-2xl">2</div>
              <h4 className="mb-2 font-semibold">Pay</h4>
              <p className="text-sm text-gray-500">
                Sign a USDC transfer authorization on Base. No accounts, no
                sessions — just a cryptographic signature.
              </p>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <div className="mb-3 text-2xl">3</div>
              <h4 className="mb-2 font-semibold">Receive</h4>
              <p className="text-sm text-gray-500">
                Retry with payment proof. The facilitator settles on-chain and
                you get the full BrushFit PDF instantly.
              </p>
            </div>
          </div>
          <div className="mt-8 rounded-xl bg-gray-900 p-6 text-sm text-gray-300">
            <p className="mb-2 font-mono text-indigo-400">
              # Agent / CLI purchase with x402-fetch
            </p>
            <pre className="overflow-x-auto font-mono">{`import { wrapFetchWithPayment } from "@x402/fetch";

const pay = wrapFetchWithPayment(fetch, client);
const res = await pay("https://agentstore.vercel.app/api/x402/purchase");
const pdf = await res.blob(); // BrushFit Guide PDF`}</pre>
          </div>
        </div>
      </section>

      {/* What's Inside */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="mb-10 text-center text-3xl font-bold">
            What&apos;s Inside
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {[
              {
                icon: "&#129461;",
                title: "Legs (6 exercises)",
                desc: "Squats, calf raises, wall sits, sumo squats, single-leg balance, static lunge holds",
              },
              {
                icon: "&#129496;",
                title: "Core (4 exercises)",
                desc: "Standing knee raises, oblique crunches, stomach vacuums, pelvic tilts",
              },
              {
                icon: "&#128170;",
                title: "Arms & Upper Body (9 exercises)",
                desc: "Wall push-ups, counter push-ups, door frame press, shampoo bottle curls, lateral raises, and more",
              },
              {
                icon: "&#128260;",
                title: "Back (3 exercises)",
                desc: "Towel door row, wall pull-apart, reverse wall press",
              },
            ].map((cat) => (
              <div key={cat.title} className="rounded-xl border p-6">
                <p
                  className="mb-2 text-2xl"
                  dangerouslySetInnerHTML={{ __html: cat.icon }}
                />
                <h4 className="mb-1 font-semibold">{cat.title}</h4>
                <p className="text-sm text-gray-500">{cat.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-xl bg-indigo-50 p-8">
            <h4 className="mb-4 text-lg font-bold">The Full Package</h4>
            <ul className="grid gap-2 sm:grid-cols-2 text-gray-700">
              <li>&#10022; 22 illustrated bodyweight exercises</li>
              <li>&#10022; 4-week progressive program (AM + PM)</li>
              <li>&#10022; Clear form illustrations for every exercise</li>
              <li>&#10022; Pro tips on every page</li>
              <li>&#10022; Zero equipment — just your bathroom</li>
              <li>&#10022; 31-page PDF — instant download</li>
              <li>&#10022; One exercise per brush. Two minutes. Done.</li>
              <li>&#10022; Lifetime access — no subscriptions</li>
            </ul>
          </div>
        </div>
      </section>

      {/* The Math */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="mb-4 text-3xl font-bold">The Math</h2>
          <p className="text-lg text-gray-600">
            You brush your teeth 2x a day. That&apos;s{" "}
            <span className="font-bold text-indigo-600">
              28 sessions a week
            </span>{" "}
            you&apos;re already doing. BrushFit turns those into workouts — with
            zero extra time.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-4">
            <div className="rounded-xl bg-white p-4 shadow-sm">
              <p className="text-3xl font-extrabold text-indigo-600">2</p>
              <p className="text-sm text-gray-500">minutes per session</p>
            </div>
            <div className="rounded-xl bg-white p-4 shadow-sm">
              <p className="text-3xl font-extrabold text-indigo-600">28</p>
              <p className="text-sm text-gray-500">sessions per week</p>
            </div>
            <div className="rounded-xl bg-white p-4 shadow-sm">
              <p className="text-3xl font-extrabold text-indigo-600">0</p>
              <p className="text-sm text-gray-500">extra minutes needed</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="mb-4 text-3xl font-bold">
            Start Your BrushFit Journey
          </h2>
          <p className="mb-8 text-lg text-gray-500">
            $19.99 for a lifetime of toothbrush workouts. No subscriptions. No
            equipment. Just results.
          </p>
          <BuyButton />
          <p className="mt-4 text-sm text-gray-400">
            30-day money-back guarantee. No questions asked.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="mb-8 text-center text-3xl font-bold">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "Do I need any equipment?",
                a: "Nope. Everything uses your bodyweight and stuff already in your bathroom — a shampoo bottle for arm exercises, a wall, the counter.",
              },
              {
                q: "Can I really get fit in 2 minutes?",
                a: "One session is a start. But you brush twice a day, every day. That's 28 workouts a week you weren't doing before — with zero extra time commitment. Consistency beats intensity.",
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept 17+ payment methods: credit/debit cards, PayPal, Apple Pay, Google Pay, Venmo, Cash App, Zelle, Gumroad, Lemon Squeezy, Buy Me a Coffee, Ko-fi, USDC on Base via x402, Coinbase Commerce (BTC/ETH/USDC), Solana Pay, Bitcoin Lightning, and direct crypto transfers. All methods deliver the PDF instantly.",
              },
              {
                q: "What is x402?",
                a: "x402 is an open payment protocol that uses HTTP 402 status codes for instant stablecoin payments. Your AI agent or crypto wallet can programmatically buy this guide with USDC on Base — no accounts or sessions needed.",
              },
              {
                q: "Can my AI agent buy this?",
                a: "Yes! That's what makes this an AgentStore. Your AI agent can discover our product at /api/info, see pricing and payment instructions, and complete the purchase programmatically using x402. Check our OpenAPI spec at /openapi.json.",
              },
              {
                q: "Is this a joke?",
                a: "The concept is fun. The exercises are real. Try a 2-minute wall sit while brushing and get back to us.",
              },
            ].map((faq) => (
              <div key={faq.q}>
                <h4 className="mb-1 font-semibold">{faq.q}</h4>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Links for SEO */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="mb-8 text-center text-3xl font-bold">
            From the Blog
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                slug: "toothbrush-workout-guide",
                title: "The Complete Guide to Toothbrush Workouts",
                desc: "How to turn your daily brushing routine into a full-body fitness habit with zero extra time.",
              },
              {
                slug: "two-minute-workout-routine",
                title: "The Best 2-Minute Workout Routines",
                desc: "Quick workout routines that actually work. Science-backed short exercises for real results.",
              },
              {
                slug: "habit-stacking-fitness",
                title: "Habit Stacking for Fitness: The Science",
                desc: "Why pairing exercise with existing habits is the most effective way to build a fitness routine.",
              },
              {
                slug: "exercise-snacking-guide",
                title: "Exercise Snacking: Movement Snacks Guide",
                desc: "The complete guide to exercise snacking — short bursts of movement throughout your day.",
              },
              {
                slug: "micro-workouts-science",
                title: "The Science of Micro Workouts",
                desc: "Research shows 2-minute exercise bursts are surprisingly effective. Here's why.",
              },
              {
                slug: "standing-exercises-while-working",
                title: "12 Standing Exercises While Working",
                desc: "Exercises you can do at your standing desk or while working from home.",
              },
              {
                slug: "multitasking-workouts-busy-people",
                title: "Multitasking Workouts for Busy People",
                desc: "Exercise without extra time. Workouts you do while doing other things.",
              },
              {
                slug: "no-equipment-home-workout",
                title: "No-Equipment Home Workout Guide",
                desc: "Build strength anywhere with zero equipment. Bodyweight exercises for every muscle group.",
              },
              {
                slug: "morning-routine-workout",
                title: "Best Morning Routine Workout",
                desc: "Exercise while brushing your teeth. Zero extra time required.",
              },
              {
                slug: "bathroom-exercises-small-spaces",
                title: "15 Bathroom Exercises for Small Spaces",
                desc: "Full-body workout using only your bathroom. No equipment needed.",
              },
              {
                slug: "agent-economy-2025",
                title: "The Agent Economy in 2025",
                desc: "How AI agents are changing commerce with autonomous purchases and agent-to-agent payments.",
              },
              {
                slug: "what-is-x402-agentic-commerce",
                title: "What is x402? Agentic Commerce",
                desc: "How AI agents buy products using HTTP 402 and stablecoins — and why it matters.",
              },
              {
                slug: "ai-agents-buying-products",
                title: "How AI Agents Buy Products",
                desc: "The complete guide to agent commerce — protocols, wallets, and the agent economy.",
              },
              {
                slug: "how-to-build-agent-store",
                title: "How to Build an Agent Store",
                desc: "Sell digital products to AI agents using x402 protocol and Stripe.",
              },
              {
                slug: "x402-vs-stripe-agent-payments",
                title: "x402 vs Stripe for Agent Payments",
                desc: "Comparing crypto-native and traditional payment systems for AI commerce.",
              },
              {
                slug: "affiliate-marketing-fitness-products",
                title: "Earn Passive Income Promoting BrushFit",
                desc: "Step-by-step affiliate marketing guide for fitness products.",
              },
              {
                slug: "brushfit-results-before-after",
                title: "Real BrushFit Results: Before & After",
                desc: "What 2 minutes twice a day can do. Honest results from 4 weeks.",
              },
              {
                slug: "best-workout-for-busy-parents",
                title: "Best Workout for Busy Parents",
                desc: "Zero extra time. 28 workouts per week while brushing your teeth.",
              },
              {
                slug: "dental-hygiene-exercise-routine",
                title: "Dental Hygiene + Exercise Routine",
                desc: "Combine oral health with fitness. The complete guide.",
              },
              {
                slug: "ai-agents-fitness-recommendations",
                title: "AI Agents & Fitness Discovery",
                desc: "How AI agents are changing fitness product recommendations.",
              },
              {
                slug: "quick-workouts-no-time",
                title: "Quick Workouts When You Have No Time",
                desc: "Effective micro workouts for the busiest schedules. No gym required.",
              },
              {
                slug: "wall-sit-while-brushing-teeth",
                title: "Wall Sit While Brushing Your Teeth",
                desc: "Master the wall sit during your brushing routine. Form tips and progressions.",
              },
              {
                slug: "fitness-pdf-guide-download",
                title: "Best Fitness PDF Guides to Download",
                desc: "Top-rated downloadable fitness guides for home workouts. Instant access.",
              },
              {
                slug: "buy-digital-products-with-crypto",
                title: "Buy Digital Products with Crypto",
                desc: "How to purchase digital products using cryptocurrency and stablecoins.",
              },
              {
                slug: "bodyweight-exercises-for-beginners",
                title: "Bodyweight Exercises for Beginners",
                desc: "Start your fitness journey with these beginner-friendly bodyweight moves.",
              },
              {
                slug: "isometric-exercises-guide",
                title: "Complete Guide to Isometric Exercises",
                desc: "Build strength without moving. The science behind static holds and how BrushFit uses them.",
              },
              {
                slug: "how-to-stay-consistent-with-exercise",
                title: "How to Stay Consistent with Exercise",
                desc: "The habit stacking method that makes exercise automatic. Never skip a workout again.",
              },
              {
                slug: "agentic-payments-explained",
                title: "Agentic Payments Explained",
                desc: "How AI agents pay for things in 2026. x402 protocol, stablecoins, and machine-to-machine commerce.",
              },
              {
                slug: "best-exercises-for-small-apartments",
                title: "Best Exercises for Small Apartments",
                desc: "Full-body workout in any space. Perfect for tiny apartments and bathrooms.",
              },
              {
                slug: "digital-product-agent-economy",
                title: "Selling Digital Products in the Agent Economy",
                desc: "How to sell to AI agents. Protocols, payment rails, and the BrushFit case study.",
              },
              {
                slug: "calf-raises-while-brushing-teeth",
                title: "Calf Raises While Brushing Teeth",
                desc: "Master calf raises during your toothbrushing routine. Form, progressions, and results.",
              },
              {
                slug: "remote-worker-fitness-routine",
                title: "Remote Worker Fitness Routine",
                desc: "Stay fit working from home. Exercise without leaving your home office.",
              },
              {
                slug: "senior-fitness-exercises-at-home",
                title: "Senior Fitness Exercises at Home",
                desc: "Safe, gentle exercises for older adults. Build balance and prevent falls.",
              },
              {
                slug: "mcp-protocol-agent-commerce",
                title: "MCP Protocol for Agent Commerce",
                desc: "How AI agents use MCP to discover and buy products autonomously.",
              },
              {
                slug: "exercise-while-waiting",
                title: "Exercises While Waiting",
                desc: "Turn dead time into workout time. 15 exercises for daily waiting moments.",
              },
              {
                slug: "squats-while-brushing-teeth",
                title: "Squats While Brushing Teeth",
                desc: "Master bathroom squats during your brushing routine. Form, variations, and progressions.",
              },
              {
                slug: "habit-stacking-examples",
                title: "25 Habit Stacking Examples That Work",
                desc: "Real habit stacking examples including the BrushFit method. Build habits that stick.",
              },
              {
                slug: "2-minute-morning-routine",
                title: "The Perfect 2-Minute Morning Routine",
                desc: "Build a morning routine around toothbrushing. Zero extra time needed.",
              },
              {
                slug: "a2a-protocol-agent-commerce",
                title: "Google A2A Protocol for Agent Commerce",
                desc: "How agent-to-agent protocols enable autonomous product discovery and purchases.",
              },
              {
                slug: "how-agents-discover-products",
                title: "How AI Agents Discover Products in 2026",
                desc: "The 7 protocols agents use to find and buy products. The complete AgentEO guide.",
              },
            ].map((post) => (
              <a
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group rounded-xl border p-6 transition hover:border-indigo-400"
              >
                <h4 className="mb-2 font-semibold group-hover:text-indigo-600">
                  {post.title}
                </h4>
                <p className="text-sm text-gray-500">{post.desc}</p>
              </a>
            ))}
          </div>
          <div className="mt-6 text-center">
            <a
              href="/blog"
              className="text-sm font-semibold text-indigo-600 hover:text-indigo-700"
            >
              View all articles &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "AgentStore",
              url: "https://agentstore.vercel.app",
              contactPoint: {
                "@type": "ContactPoint",
                email: "rob@robbalian.com",
                contactType: "customer service",
              },
              sameAs: [],
            }),
          }}
        />
        <div className="mx-auto max-w-3xl px-6">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <div className="text-center sm:text-left">
              <p className="font-semibold">BrushFit — AgentStore</p>
              <p className="mt-1 text-sm text-gray-400">
                Payments via x402 Protocol (USDC on Base) &amp; Stripe
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
              <a href="/pricing" className="hover:text-indigo-600">
                Pricing
              </a>
              <a href="/exercises" className="hover:text-indigo-600">
                Exercises
              </a>
              <a href="/reviews" className="hover:text-indigo-600">
                Reviews
              </a>
              <a href="/blog" className="hover:text-indigo-600">
                Blog
              </a>
              <a href="/developers" className="hover:text-indigo-600">
                Developers
              </a>
              <a href="/agents" className="hover:text-indigo-600">
                Agents
              </a>
              <a href="/affiliates" className="hover:text-indigo-600">
                Affiliates
              </a>
              <a href="/about" className="hover:text-indigo-600">
                About
              </a>
              <a href="/openapi.json" className="hover:text-indigo-600">
                OpenAPI
              </a>
              <a href="/agents.json" className="hover:text-indigo-600">
                agents.json
              </a>
              <a href="/llms.txt" className="hover:text-indigo-600">
                llms.txt
              </a>
              <a href="mailto:rob@robbalian.com" className="hover:text-indigo-600">
                Contact
              </a>
            </div>
            <div className="mt-3 flex flex-wrap justify-center gap-4 text-xs text-gray-400">
              <a href="/privacy" className="hover:text-gray-600">Privacy</a>
              <a href="/terms" className="hover:text-gray-600">Terms</a>
              <a href="/refund-policy" className="hover:text-gray-600">Refund Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
