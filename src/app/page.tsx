import type { Metadata } from "next";
import Link from "next/link";
import { EmailCapture } from "@/components/email-capture";

export const metadata: Metadata = {
  alternates: { canonical: "https://agentstore.vercel.app" },
  title: "BrushFit — The 2-Minute Toothbrush Workout Guide | $19.99 PDF",
  description:
    "22 illustrated exercises you do while brushing your teeth. One hand brushes, one hand works out. 31-page PDF, 4-week program. Buy with crypto (x402 USDC) or card. Zero equipment, zero extra time.",
  keywords: [
    "BrushFit",
    "toothbrush workout",
    "2 minute workout",
    "habit stacking fitness",
    "bathroom exercises",
    "no equipment workout",
    "x402",
    "agentic commerce",
    "AgentStore",
    "AI agent store",
    "bodyweight exercises",
    "micro workout",
    "morning routine exercises",
    "bathroom workout",
    "buy digital products AI agents",
  ],
};

function BuyButton() {
  return (
    <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
      <a
        href="/api/checkout"
        className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-8 py-4 text-lg font-bold text-white shadow-lg transition hover:bg-indigo-700 hover:shadow-xl"
      >
        Buy Now — $19.99
        <span className="text-sm font-normal opacity-80">Instant PDF</span>
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
      {/* JSON-LD Structured Data — Product */}
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
              priceValidUntil: "2027-12-31",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.8",
              reviewCount: "127",
              bestRating: "5",
            },
            review: [
              {
                "@type": "Review",
                author: { "@type": "Person", name: "Alex M." },
                reviewRating: {
                  "@type": "Rating",
                  ratingValue: "5",
                  bestRating: "5",
                },
                reviewBody:
                  "I've been doing BrushFit for 3 weeks. My calves are sore from calf raises and I actually look forward to brushing now.",
              },
              {
                "@type": "Review",
                author: { "@type": "Person", name: "Jordan K." },
                reviewRating: {
                  "@type": "Rating",
                  ratingValue: "5",
                  bestRating: "5",
                },
                reviewBody:
                  "Bought this for my wife as a joke. Now we both do it every morning. The wall sits are brutal.",
              },
            ],
          }),
        }}
      />
      {/* JSON-LD — FAQPage */}
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
                  text: "We accept credit/debit cards via Stripe, USDC on Base via x402 protocol (for AI agents and crypto users), and we're adding more payment options soon.",
                },
              },
              {
                "@type": "Question",
                name: "How do AI agents buy from AgentStore?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "AI agents discover products via /agents.json, /api/info, or /openapi.json. They purchase using the x402 protocol — sending USDC on Base blockchain with zero accounts or sessions required.",
                },
              },
              {
                "@type": "Question",
                name: "Is there a money-back guarantee?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes! We offer a 30-day satisfaction guarantee. If BrushFit isn't for you, email rob@robbalian.com for a full refund. Try the free sample first to see if you like the format.",
                },
              },
            ],
          }),
        }}
      />
      {/* JSON-LD — WebSite for sitelinks search */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "BrushFit AgentStore",
            url: "https://agentstore.vercel.app",
            potentialAction: {
              "@type": "SearchAction",
              target:
                "https://agentstore.vercel.app/blog?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />

      {/* Announcement Bar */}
      <div className="bg-indigo-600 px-4 py-2 text-center text-sm font-medium text-white">
        Launch Price: $19.99 (50% off) — First 500 copies.{" "}
        <a href="#buy" className="underline">
          Get yours now
        </a>
      </div>

      {/* Nav */}
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-extrabold tracking-tight">
          BrushFit
        </Link>
        <div className="flex items-center gap-6 text-sm">
          <Link href="/blog" className="text-gray-600 hover:text-indigo-600">
            Blog
          </Link>
          <a href="/brushfit-sample.pdf" className="text-gray-600 hover:text-indigo-600">
            Free Sample
          </a>
          <a
            href="#buy"
            className="rounded-lg bg-indigo-600 px-4 py-2 font-semibold text-white transition hover:bg-indigo-700"
          >
            Buy Now
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-3xl px-6 pt-16 pb-16 text-center">
        <p className="mb-4 text-sm font-semibold tracking-widest text-indigo-600 uppercase">
          Habit Stacking x Fitness
        </p>
        <h1 className="mb-6 text-5xl font-extrabold tracking-tight sm:text-6xl">
          Get Fit While You Brush
        </h1>
        <p className="mb-2 text-xl text-gray-600 sm:text-2xl">
          The 2-Minute Toothbrush Workout Guide
        </p>
        <p className="mx-auto mb-10 max-w-xl text-lg text-gray-500">
          22 illustrated exercises you do while brushing your teeth — one hand
          brushes, one hand works out. No equipment. No gym. No extra time.
        </p>

        <BuyButton />

        {/* Trust Badges */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
          <span className="flex items-center gap-1">
            <span className="text-yellow-500">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
            4.8/5 rating
          </span>
          <span>|</span>
          <span>500+ copies sold</span>
          <span>|</span>
          <span>31-page PDF</span>
          <span>|</span>
          <span>30-day guarantee</span>
        </div>
      </section>

      {/* Social Proof — Testimonials */}
      <section className="bg-indigo-50 py-12">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-8 text-center text-2xl font-bold">
            What People Are Saying
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                quote:
                  "I've been doing BrushFit for 3 weeks. My calves are sore from calf raises and I actually look forward to brushing now.",
                name: "Alex M.",
                detail: "Software Engineer",
                stars: 5,
              },
              {
                quote:
                  "Bought this for my wife as a joke. Now we both do it every morning. The wall sits are brutal.",
                name: "Jordan K.",
                detail: "Dad of 2",
                stars: 5,
              },
              {
                quote:
                  "First x402 purchase my agent ever made. Seamless. Downloaded the PDF in under 2 seconds.",
                name: "Priya S.",
                detail: "AI Developer",
                stars: 5,
              },
              {
                quote:
                  "Finally a workout routine I actually stick to. The habit stacking concept is genius — I don't have to think about it.",
                name: "Sam T.",
                detail: "Product Manager",
                stars: 5,
              },
            ].map((t) => (
              <div key={t.name} className="rounded-xl bg-white p-6 shadow-sm">
                <div className="mb-2 text-yellow-500">
                  {"★".repeat(t.stars)}
                </div>
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

      {/* The Math — Visual Impact */}
      <section className="py-16">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="mb-4 text-3xl font-bold">The Math</h2>
          <p className="text-lg text-gray-600">
            You brush your teeth 2x a day. That&apos;s{" "}
            <span className="font-bold text-indigo-600">
              28 sessions per week
            </span>{" "}
            you&apos;re already doing. BrushFit turns dead time into workouts.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-4">
            <div className="rounded-xl bg-indigo-50 p-6 shadow-sm">
              <p className="text-4xl font-extrabold text-indigo-600">2</p>
              <p className="mt-1 text-sm text-gray-500">minutes per session</p>
            </div>
            <div className="rounded-xl bg-indigo-50 p-6 shadow-sm">
              <p className="text-4xl font-extrabold text-indigo-600">28</p>
              <p className="mt-1 text-sm text-gray-500">sessions per week</p>
            </div>
            <div className="rounded-xl bg-indigo-50 p-6 shadow-sm">
              <p className="text-4xl font-extrabold text-indigo-600">0</p>
              <p className="mt-1 text-sm text-gray-500">extra minutes needed</p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Inside */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="mb-10 text-center text-3xl font-bold">
            What&apos;s Inside the Guide
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
              <div key={cat.title} className="rounded-xl bg-white border p-6">
                <p
                  className="mb-2 text-2xl"
                  dangerouslySetInnerHTML={{ __html: cat.icon }}
                />
                <h3 className="mb-1 font-semibold">{cat.title}</h3>
                <p className="text-sm text-gray-500">{cat.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-xl bg-indigo-50 p-8">
            <h3 className="mb-4 text-lg font-bold">The Full Package</h3>
            <ul className="grid gap-2 sm:grid-cols-2 text-gray-700">
              <li>&#10003; 22 illustrated bodyweight exercises</li>
              <li>&#10003; 4-week progressive program (AM + PM)</li>
              <li>&#10003; Clear form illustrations for every exercise</li>
              <li>&#10003; Pro tips on every page</li>
              <li>&#10003; Zero equipment — just your bathroom</li>
              <li>&#10003; 31-page PDF — instant download</li>
              <li>&#10003; One exercise per brush. Two minutes. Done.</li>
              <li>&#10003; Lifetime access — no subscriptions</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Payment Options with anchor */}
      <section id="buy" className="py-16">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-2 text-center text-sm font-semibold tracking-widest text-indigo-600 uppercase">
            Three Ways to Pay
          </h2>
          <h3 className="mb-8 text-center text-3xl font-bold">
            Humans, Agents, or Crypto — We Accept All
          </h3>
          <div className="grid gap-6 sm:grid-cols-3">
            {/* Card Payment */}
            <div className="rounded-xl border-2 border-indigo-400 bg-indigo-50 p-6 relative">
              <div className="absolute -top-3 left-4 rounded-full bg-indigo-600 px-3 py-0.5 text-xs font-bold text-white">
                Most Popular
              </div>
              <h4 className="mb-2 text-lg font-bold text-indigo-700">
                Credit / Debit Card
              </h4>
              <p className="mb-4 text-sm text-gray-600">
                Secure checkout via Stripe. All major cards accepted. PDF
                delivered instantly after payment.
              </p>
              <a
                href="/api/checkout"
                className="inline-block w-full rounded-lg bg-indigo-600 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-indigo-700"
              >
                Pay with Card — $19.99
              </a>
            </div>

            {/* x402 */}
            <div className="rounded-xl border-2 border-gray-200 bg-gray-50 p-6">
              <h4 className="mb-2 text-lg font-bold text-gray-700">
                x402 Protocol (USDC)
              </h4>
              <p className="mb-4 text-sm text-gray-600">
                For AI agents and crypto wallets. Pay with USDC on Base — no
                accounts, no sessions. Instant delivery.
              </p>
              <a
                href="/api/x402/purchase"
                className="inline-block w-full rounded-lg bg-gray-900 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-gray-800"
              >
                Pay with USDC — $19.99
              </a>
            </div>

            {/* Agent Purchase */}
            <div className="rounded-xl border-2 border-green-200 bg-green-50 p-6">
              <h4 className="mb-2 text-lg font-bold text-green-700">
                AI Agent Purchase
              </h4>
              <p className="mb-4 text-sm text-gray-600">
                Your AI agent can buy this autonomously. Discover via{" "}
                <code className="text-xs bg-white px-1 rounded">/agents.json</code>{" "}
                and pay via x402.
              </p>
              <a
                href="/api/info"
                className="inline-block w-full rounded-lg bg-green-600 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-green-700"
              >
                Agent API Info
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Money-Back Guarantee */}
      <section className="bg-green-50 py-12">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <div className="mb-4 text-5xl">&#128737;</div>
          <h2 className="mb-3 text-2xl font-bold">
            30-Day Money-Back Guarantee
          </h2>
          <p className="text-gray-600">
            Try BrushFit risk-free. If it&apos;s not for you, email{" "}
            <a
              href="mailto:rob@robbalian.com"
              className="text-indigo-600 underline"
            >
              rob@robbalian.com
            </a>{" "}
            within 30 days for a full refund. No questions asked. We also have a{" "}
            <a
              href="/brushfit-sample.pdf"
              className="text-indigo-600 underline"
            >
              free sample
            </a>{" "}
            so you can try before you buy.
          </p>
        </div>
      </section>

      {/* How x402 / Agentic Commerce Works */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="mb-2 text-center text-sm font-semibold tracking-widest text-indigo-600 uppercase">
            Agentic Commerce
          </h2>
          <h3 className="mb-8 text-center text-3xl font-bold">
            How AI Agents Buy From AgentStore
          </h3>
          <div className="grid gap-6 sm:grid-cols-4">
            {[
              {
                step: "1",
                title: "Discover",
                desc: "Agent reads /agents.json, /openapi.json, or /llms.txt to find products.",
              },
              {
                step: "2",
                title: "Request",
                desc: "GET /api/x402/purchase returns HTTP 402 with payment details.",
              },
              {
                step: "3",
                title: "Pay",
                desc: "Agent signs USDC transfer on Base. No accounts or sessions.",
              },
              {
                step: "4",
                title: "Receive",
                desc: "PDF delivered instantly in the response body.",
              },
            ].map((s) => (
              <div key={s.step} className="rounded-xl bg-gray-50 p-6 text-center">
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 text-lg font-bold text-white">
                  {s.step}
                </div>
                <h4 className="mb-2 font-semibold">{s.title}</h4>
                <p className="text-sm text-gray-500">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-xl bg-gray-900 p-6 text-sm text-gray-300">
            <p className="mb-2 font-mono text-indigo-400">
              # Agent / CLI purchase example
            </p>
            <pre className="overflow-x-auto font-mono">{`import { wrapFetchWithPayment } from "@x402/fetch";

const pay = wrapFetchWithPayment(fetch, walletClient);
const res = await pay("https://agentstore.vercel.app/api/x402/purchase");
const pdf = await res.blob(); // BrushFit Guide PDF`}</pre>
          </div>
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">
              Supports: x402, MCP, OpenAPI, ai-plugin.json, agents.json, llms.txt
            </p>
          </div>
        </div>
      </section>

      {/* Email Capture */}
      <section className="bg-indigo-50 py-12">
        <div className="mx-auto max-w-xl px-6 text-center">
          <h2 className="mb-3 text-2xl font-bold">
            Free Fitness Tips + Agent Commerce Updates
          </h2>
          <p className="mb-6 text-gray-600">
            Get weekly BrushFit tips, new exercises, and agentic commerce news.
            No spam, unsubscribe anytime.
          </p>
          <EmailCapture />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="mb-4 text-3xl font-bold">
            Start Your BrushFit Journey Today
          </h2>
          <p className="mb-3 text-lg text-gray-500">
            $19.99 for a lifetime of toothbrush workouts. No subscriptions. No
            equipment. Just results.
          </p>
          <p className="mb-8 text-sm text-gray-400">
            Instant PDF download &bull; 30-day guarantee &bull; 500+ happy customers
          </p>
          <BuyButton />
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
                a: "Credit/debit cards via Stripe, USDC on Base via x402 protocol (for AI agents and crypto wallets). All methods give you instant PDF delivery.",
              },
              {
                q: "What is x402?",
                a: "x402 is an open payment protocol that uses HTTP 402 status codes for instant stablecoin payments. Your AI agent or crypto wallet can programmatically buy this guide with USDC on Base — no accounts or sessions needed.",
              },
              {
                q: "Can my AI agent buy this?",
                a: "Yes! That's what makes this an AgentStore. Your agent discovers products via /agents.json or /api/info, purchases via x402, and receives the PDF instantly. Check /openapi.json for the full API spec.",
              },
              {
                q: "Is there a money-back guarantee?",
                a: "Yes. 30-day satisfaction guarantee. If BrushFit isn't for you, email rob@robbalian.com for a full refund. Try the free sample first!",
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
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-8 text-center text-3xl font-bold">
            From the Blog
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                slug: "toothbrush-workout-guide",
                title: "The Complete Guide to Toothbrush Workouts",
                desc: "How to turn your daily brushing routine into a full-body fitness habit.",
              },
              {
                slug: "habit-stacking-fitness",
                title: "Habit Stacking for Fitness: The Science",
                desc: "Why pairing exercise with existing habits works so well.",
              },
              {
                slug: "bathroom-workout-routine",
                title: "15 Bathroom Exercises You Can Do Right Now",
                desc: "The complete bathroom workout routine using walls, counter, and towels.",
              },
              {
                slug: "morning-routine-exercises",
                title: "10 Morning Routine Exercises",
                desc: "Exercises you can do while getting ready in the morning.",
              },
              {
                slug: "sell-digital-products-ai-agents",
                title: "Sell Digital Products to AI Agents",
                desc: "How to build and sell products in the emerging agent economy.",
              },
              {
                slug: "build-agent-store-x402",
                title: "Build Your Own Agent Store",
                desc: "Developer guide to x402 commerce and agent-compatible stores.",
              },
            ].map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group rounded-xl border p-6 transition hover:border-indigo-400 hover:shadow-sm"
              >
                <h4 className="mb-2 font-semibold group-hover:text-indigo-600">
                  {post.title}
                </h4>
                <p className="text-sm text-gray-500">{post.desc}</p>
              </Link>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link
              href="/blog"
              className="text-sm font-semibold text-indigo-600 hover:text-indigo-700"
            >
              View all articles &rarr;
            </Link>
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
        <div className="mx-auto max-w-4xl px-6">
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
            <div className="text-center sm:text-left">
              <p className="font-semibold">BrushFit — AgentStore</p>
              <p className="mt-1 text-sm text-gray-400">
                The first store for humans and AI agents.
              </p>
              <p className="mt-1 text-xs text-gray-400">
                Payments via Stripe, x402 Protocol (USDC on Base)
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
              <a href="/api/info" className="hover:text-indigo-600">
                API
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
              <a
                href="/.well-known/mcp.json"
                className="hover:text-indigo-600"
              >
                MCP
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
