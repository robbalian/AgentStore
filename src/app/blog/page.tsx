import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog — Fitness Tips, Habit Science & Agentic Commerce",
  description:
    "Articles about toothbrush workouts, bathroom exercises, habit stacking, morning routine fitness, agentic commerce, x402 protocol, MCP servers, and the AI agent economy.",
  keywords: [
    "fitness blog",
    "toothbrush workout blog",
    "habit stacking articles",
    "micro workout tips",
    "bathroom workout routine",
    "morning routine exercises",
    "agentic commerce blog",
    "x402 articles",
    "AI agent economy",
    "agent store developer guide",
    "sell digital products AI agents",
    "MCP server commerce",
  ],
  openGraph: {
    title: "Blog — BrushFit AgentStore",
    description:
      "Articles about toothbrush workouts, habit stacking, agentic commerce, and the AI agent economy.",
    type: "website",
  },
  alternates: {
    canonical: "https://agentstore.vercel.app/blog",
  },
};

const posts = [
  {
    slug: "morning-routine-exercises",
    title: "10 Morning Routine Exercises You Can Do While Getting Ready",
    description:
      "Quick exercises to do during your morning routine — while brushing teeth, waiting for coffee, and getting dressed.",
    category: "Fitness Guide",
    date: "2026-03-31",
  },
  {
    slug: "bathroom-workout-routine",
    title: "The Complete Bathroom Workout Routine: 15 Exercises",
    description:
      "A full-body workout routine using only your bathroom — walls, counter, towels, and bodyweight.",
    category: "Fitness Guide",
    date: "2026-03-31",
  },
  {
    slug: "sell-digital-products-ai-agents",
    title: "How to Sell Digital Products to AI Agents in 2026",
    description:
      "The emerging market of selling digital products to AI agents — x402 protocol, agent wallets, discovery files, and pricing strategies.",
    category: "Agentic Commerce",
    date: "2026-03-31",
  },
  {
    slug: "build-agent-store-x402",
    title: "Build Your Own Agent Store: A Developer's Guide to x402",
    description:
      "Technical guide to building an agent-compatible store with x402 payments, OpenAPI specs, and agent discovery files.",
    category: "Developer Guide",
    date: "2026-03-31",
  },
  {
    slug: "toothbrush-workout-guide",
    title: "The Complete Guide to Toothbrush Workouts",
    description:
      "How to turn your daily 2-minute brushing routine into a full-body fitness habit with zero extra time.",
    category: "Fitness Guide",
    date: "2025-03-30",
  },
  {
    slug: "habit-stacking-fitness",
    title: "Habit Stacking for Fitness: The Science Behind BrushFit",
    description:
      "Why pairing exercise with existing habits is the most effective way to build a fitness routine.",
    category: "Behavioral Science",
    date: "2025-03-30",
  },
  {
    slug: "micro-workouts-science",
    title: "The Science of Micro Workouts: Why 2 Minutes Matters",
    description:
      "Research shows short exercise bursts are surprisingly effective. Here's why 2-minute workouts work.",
    category: "Fitness Science",
    date: "2025-03-31",
  },
  {
    slug: "no-equipment-home-workout",
    title: "The Ultimate No-Equipment Home Workout Guide",
    description:
      "Build strength anywhere with zero equipment. Bodyweight exercises for every muscle group.",
    category: "Fitness Guide",
    date: "2025-03-31",
  },
  {
    slug: "what-is-x402-agentic-commerce",
    title: "What is x402? The Future of Agentic Commerce",
    description:
      "How AI agents buy products using HTTP 402 and stablecoins — and why it matters.",
    category: "Agentic Commerce",
    date: "2025-03-30",
  },
  {
    slug: "ai-agents-buying-products",
    title: "How AI Agents Buy Products: The Complete Guide",
    description:
      "Everything about AI agents making autonomous purchases — protocols, wallets, and the agent economy.",
    category: "Agentic Commerce",
    date: "2025-03-31",
  },
];

export default function BlogIndex() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <nav className="mb-8">
        <Link href="/" className="text-sm text-indigo-600 hover:text-indigo-700">
          &larr; Back to BrushFit
        </Link>
      </nav>

      <h1 className="mb-4 text-4xl font-extrabold tracking-tight">Blog</h1>
      <p className="mb-12 text-lg text-gray-500">
        Fitness tips, habit science, and the future of agentic commerce.
      </p>

      <div className="space-y-8">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block rounded-xl border p-6 transition hover:border-indigo-400 hover:shadow-sm"
          >
            <div className="mb-2 flex items-center gap-3 text-sm">
              <span className="font-semibold text-indigo-600">
                {post.category}
              </span>
              <span className="text-gray-400">{post.date}</span>
            </div>
            <h2 className="mb-2 text-xl font-bold group-hover:text-indigo-600">
              {post.title}
            </h2>
            <p className="text-gray-600">{post.description}</p>
          </Link>
        ))}
      </div>

      <div className="mt-16 rounded-xl bg-indigo-50 p-8 text-center">
        <h3 className="mb-2 text-xl font-bold">Try BrushFit</h3>
        <p className="mb-4 text-gray-600">
          22 exercises. 4-week program. $19.99. Zero extra time.
        </p>
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="inline-block rounded-xl bg-indigo-600 px-8 py-3 font-bold text-white transition hover:bg-indigo-700"
          >
            Get BrushFit — $19.99
          </Link>
          <a
            href="/brushfit-sample.pdf"
            className="inline-block rounded-xl border-2 border-gray-300 px-8 py-3 font-semibold text-gray-700 transition hover:border-indigo-400"
          >
            Free Sample
          </a>
        </div>
      </div>
    </div>
  );
}
