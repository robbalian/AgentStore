import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About BrushFit & Rob Balian — Our Mission",
  description:
    "BrushFit was created by Rob Balian to prove that fitness doesn't need extra time. Learn about the AgentStore mission — the first AI-native digital product store.",
  alternates: { canonical: "https://agentstore.vercel.app/about" },
  keywords: [
    "Rob Balian",
    "BrushFit creator",
    "AgentStore",
    "AI-native store",
    "habit stacking fitness",
    "toothbrush workout origin",
  ],
  openGraph: {
    title: "About BrushFit & Rob Balian — Our Mission",
    description:
      "The story behind BrushFit and the first AI-native digital product store. Built by Rob Balian.",
    url: "https://agentstore.vercel.app/about",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* JSON-LD Person Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Rob Balian",
            url: "https://agentstore.vercel.app/about",
            jobTitle: "Creator & Founder",
            worksFor: {
              "@type": "Organization",
              name: "AgentStore",
              url: "https://agentstore.vercel.app",
            },
            knowsAbout: [
              "Fitness",
              "Habit Stacking",
              "AI Agent Commerce",
              "x402 Protocol",
              "Digital Products",
            ],
            email: "rob@robbalian.com",
          }),
        }}
      />

      {/* Hero */}
      <section className="mx-auto max-w-3xl px-6 pt-20 pb-16 text-center">
        <p className="mb-4 text-sm font-semibold tracking-widest text-indigo-600 uppercase">
          The Origin Story
        </p>
        <h1 className="mb-6 text-5xl font-extrabold tracking-tight sm:text-6xl">
          Habit Stacking + Fitness = Genius Simplicity
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-600">
          What if the best workout in the world was one you never had to find
          time for? BrushFit was born from a single idea: you already brush your
          teeth twice a day. That&apos;s 28 sessions a week — waiting to become
          workouts.
        </p>
        <p className="mx-auto max-w-xl text-lg text-gray-500">
          One hand brushes. One hand works out. No equipment. No gym. No extra
          time. Just results stacked on a habit you already have.
        </p>
      </section>

      {/* Rob Balian Bio */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-3xl px-6">
          <div className="rounded-xl bg-white p-8 shadow-sm">
            <h2 className="mb-2 text-sm font-semibold tracking-widest text-indigo-600 uppercase">
              Meet the Creator
            </h2>
            <h3 className="mb-6 text-3xl font-bold">Rob Balian</h3>
            <div className="space-y-4 text-gray-600">
              <p>
                Rob is a builder, fitness enthusiast, and the person who thought
                &ldquo;what if I did wall sits while brushing my teeth?&rdquo;
                and then actually turned it into a product. He&apos;s been
                building digital products at the intersection of technology,
                fitness, and commerce for years.
              </p>
              <p>
                When he&apos;s not creating workout routines that fit inside
                daily habits, Rob is exploring the frontier of AI agent commerce
                — building tools that let AI agents discover, evaluate, and
                purchase digital products autonomously.
              </p>
              <p>
                BrushFit is the first product on AgentStore, and it represents
                everything Rob believes about great products: they should be
                simple, useful, and fit seamlessly into your life.
              </p>
            </div>
            <div className="mt-6">
              <a
                href="mailto:rob@robbalian.com"
                className="text-sm font-semibold text-indigo-600 hover:text-indigo-700"
              >
                rob@robbalian.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* The AgentStore Mission */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="mb-2 text-center text-sm font-semibold tracking-widest text-indigo-600 uppercase">
            Our Mission
          </h2>
          <h3 className="mb-8 text-center text-3xl font-bold">
            The First AI-Native Digital Product Store
          </h3>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border p-6">
              <h4 className="mb-2 text-lg font-semibold">For Humans</h4>
              <p className="text-sm text-gray-600">
                Buy digital products with the payment method you prefer — credit
                card, PayPal, Apple Pay, crypto, Venmo, or Cash App. Instant
                delivery, no subscriptions.
              </p>
            </div>
            <div className="rounded-xl border p-6">
              <h4 className="mb-2 text-lg font-semibold">For AI Agents</h4>
              <p className="text-sm text-gray-600">
                AI agents can discover products via API, evaluate them
                programmatically, and purchase using x402 protocol — no accounts,
                no sessions, just a cryptographic signature.
              </p>
            </div>
            <div className="rounded-xl border p-6">
              <h4 className="mb-2 text-lg font-semibold">Open Protocols</h4>
              <p className="text-sm text-gray-600">
                Built on open standards: OpenAPI specs, agents.json manifests,
                MCP server configs, and the x402 HTTP payment protocol. Any
                agent framework can integrate.
              </p>
            </div>
            <div className="rounded-xl border p-6">
              <h4 className="mb-2 text-lg font-semibold">Real Products</h4>
              <p className="text-sm text-gray-600">
                AgentStore isn&apos;t a demo. BrushFit is a real product that
                real people use. 800+ copies sold, 4.8/5 rating, and growing
                every day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why BrushFit Exists */}
      <section className="bg-indigo-50 py-16">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="mb-6 text-3xl font-bold">Why BrushFit Exists</h2>
          <p className="mb-8 text-lg text-gray-600">
            Most people don&apos;t skip workouts because they&apos;re lazy. They
            skip because they don&apos;t have time. BrushFit eliminates that
            excuse entirely.
          </p>
          <div className="grid grid-cols-3 gap-4">
            <div className="rounded-xl bg-white p-4 shadow-sm">
              <p className="text-3xl font-extrabold text-indigo-600">28</p>
              <p className="text-sm text-gray-500">sessions per week</p>
            </div>
            <div className="rounded-xl bg-white p-4 shadow-sm">
              <p className="text-3xl font-extrabold text-indigo-600">0</p>
              <p className="text-sm text-gray-500">extra minutes needed</p>
            </div>
            <div className="rounded-xl bg-white p-4 shadow-sm">
              <p className="text-3xl font-extrabold text-indigo-600">22</p>
              <p className="text-sm text-gray-500">illustrated exercises</p>
            </div>
          </div>
          <p className="mt-8 text-gray-600">
            You brush your teeth twice a day, every single day. BrushFit turns
            that existing habit into a full-body fitness routine. Consistency
            beats intensity — and nothing is more consistent than brushing your
            teeth.
          </p>
        </div>
      </section>

      {/* CTA Links */}
      <section className="py-16">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="mb-8 text-3xl font-bold">Get Started</h2>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="/buy"
              className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-8 py-4 text-lg font-bold text-white shadow-lg transition hover:bg-indigo-700"
            >
              Buy BrushFit — $19.99
            </a>
            <a
              href="/agents"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-gray-300 px-8 py-4 text-lg font-semibold text-gray-700 transition hover:border-indigo-400 hover:text-indigo-600"
            >
              Agent Integration
            </a>
          </div>
          <div className="mt-6">
            <a
              href="/affiliates"
              className="text-sm font-semibold text-indigo-600 hover:text-indigo-700"
            >
              Become an affiliate and earn commissions &rarr;
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
