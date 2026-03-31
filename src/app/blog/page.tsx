import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog — BrushFit AgentStore",
  description:
    "Articles about toothbrush workouts, habit stacking fitness, micro workouts, agentic commerce, x402 protocol, and the AI agent economy. Tips, science, and guides.",
  keywords: [
    "fitness blog",
    "toothbrush workout blog",
    "habit stacking articles",
    "micro workout tips",
    "agentic commerce blog",
    "x402 articles",
    "AI agent economy",
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
    slug: "what-is-x402-agentic-commerce",
    title: "What is x402? The Future of Agentic Commerce",
    description:
      "How AI agents buy products using HTTP 402 and stablecoins — and why it matters.",
    category: "Agentic Commerce",
    date: "2025-03-30",
  },
  {
    slug: "micro-workouts-science",
    title: "The Science of Micro Workouts: Why 2 Minutes Matters",
    description:
      "Research shows short exercise bursts are surprisingly effective. Here's why 2-minute workouts work and how to maximize them.",
    category: "Fitness Science",
    date: "2025-03-31",
  },
  {
    slug: "no-equipment-home-workout",
    title: "The Ultimate No-Equipment Home Workout Guide",
    description:
      "Build strength anywhere with zero equipment. Bodyweight exercises for every muscle group using walls, doors, and household items.",
    category: "Fitness Guide",
    date: "2025-03-31",
  },
  {
    slug: "ai-agents-buying-products",
    title: "How AI Agents Buy Products: The Complete Guide to Agent Commerce",
    description:
      "Everything you need to know about AI agents making autonomous purchases — protocols, wallets, and the emerging agent economy.",
    category: "Agentic Commerce",
    date: "2025-03-31",
  },
  {
    slug: "morning-routine-workout",
    title: "Best Morning Routine Workout: Exercise While Brushing Teeth",
    description:
      "Build a morning workout routine that requires zero extra time. Learn how to exercise while brushing your teeth.",
    category: "Fitness Guide",
    date: "2025-06-15",
  },
  {
    slug: "how-to-build-agent-store",
    title: "How to Build an Agent Store: Sell Digital Products to AI Agents",
    description:
      "Step-by-step guide to building a store where AI agents can discover and buy digital products programmatically using x402.",
    category: "Agentic Commerce",
    date: "2025-07-01",
  },
  {
    slug: "bathroom-exercises-small-spaces",
    title: "15 Bathroom Exercises for Small Spaces — No Equipment Needed",
    description:
      "The best exercises you can do in your bathroom with zero equipment. Wall push-ups, squats, calf raises, and more.",
    category: "Fitness Guide",
    date: "2025-08-10",
  },
  {
    slug: "x402-vs-stripe-agent-payments",
    title: "x402 vs Stripe: Which Payment System for AI Agent Commerce?",
    description:
      "Comparing x402 protocol (crypto) and Stripe (cards) for selling to AI agents. When to use each and why we use both.",
    category: "Agent Payments",
    date: "2025-09-05",
  },
  {
    slug: "standing-exercises-while-working",
    title: "12 Standing Exercises You Can Do While Working From Home",
    description:
      "Multitasking exercises for your standing desk or work-from-home setup. Build strength without leaving your workspace.",
    category: "Fitness Guide",
    date: "2026-01-15",
  },
  {
    slug: "exercise-snacking-guide",
    title: "Exercise Snacking: The Complete Guide to Movement Snacks",
    description:
      "Short bursts of exercise throughout the day add up to real fitness gains. The science behind exercise snacking and how to start.",
    category: "Fitness Science",
    date: "2026-02-01",
  },
  {
    slug: "two-minute-workout-routine",
    title: "The Best 2-Minute Workout Routines That Actually Work",
    description:
      "Science-backed 2-minute workout routines for every fitness level. Quick exercises that deliver real results.",
    category: "Fitness Guide",
    date: "2026-02-15",
  },
  {
    slug: "agent-economy-2025",
    title: "The Agent Economy in 2025: How AI Agents Are Changing Commerce",
    description:
      "AI agents are making autonomous purchases, comparing products, and driving a new agent-to-agent economy. Here's what's happening.",
    category: "Agentic Commerce",
    date: "2026-03-01",
  },
  {
    slug: "multitasking-workouts-busy-people",
    title: "Multitasking Workouts for Busy People: Exercise Without Extra Time",
    description:
      "No time for the gym? Exercise while doing chores, brushing teeth, or waiting in line. The busy person's guide to fitness.",
    category: "Fitness Guide",
    date: "2026-03-15",
  },
  {
    slug: "affiliate-marketing-fitness-products",
    title: "How to Earn Passive Income Promoting BrushFit",
    description:
      "Step-by-step affiliate marketing guide for fitness products. Earn commissions promoting BrushFit with proven content strategies.",
    category: "Affiliate Marketing",
    date: "2026-03-20",
  },
  {
    slug: "brushfit-results-before-after",
    title: "Real BrushFit Results: What 2 Minutes Twice a Day Can Do",
    description:
      "Honest results from 4 weeks of BrushFit toothbrush workouts. See what consistency beats intensity really means.",
    category: "Results & Reviews",
    date: "2026-03-22",
  },
  {
    slug: "best-workout-for-busy-parents",
    title: "The Best Workout for Busy Parents Who Have Zero Time",
    description:
      "No gym, no equipment, no extra time. Turn toothbrushing into 28 workouts per week for parents who can't find a minute.",
    category: "Fitness for Parents",
    date: "2026-03-25",
  },
  {
    slug: "dental-hygiene-exercise-routine",
    title: "Combine Dental Hygiene with Exercise: The Complete Guide",
    description:
      "Build a routine that improves oral health and physical fitness at the same time. Zero extra time needed.",
    category: "Health & Fitness",
    date: "2026-03-28",
  },
  {
    slug: "ai-agents-fitness-recommendations",
    title: "How AI Agents Are Changing Fitness Product Discovery",
    description:
      "AI agents are transforming how people discover fitness products with autonomous evaluation and purchasing via x402.",
    category: "AI & Fitness",
    date: "2026-03-31",
  },
  {
    slug: "quick-workouts-no-time",
    title: "Quick Workouts When You Have No Time",
    description:
      "Effective micro workouts for the busiest schedules. No gym, no equipment, no excuses — just results in minutes.",
    category: "Fitness Guide",
    date: "2026-03-31",
  },
  {
    slug: "wall-sit-while-brushing-teeth",
    title: "Wall Sit While Brushing Your Teeth: Form, Tips & Progressions",
    description:
      "Master the wall sit during your brushing routine. Proper form, progressions, and how to build leg strength in 2 minutes.",
    category: "Exercise Deep Dive",
    date: "2026-03-31",
  },
  {
    slug: "fitness-pdf-guide-download",
    title: "Best Fitness PDF Guides to Download in 2026",
    description:
      "Top-rated downloadable fitness guides for home workouts. Instant access, no subscriptions, real results.",
    category: "Fitness Resources",
    date: "2026-03-31",
  },
  {
    slug: "buy-digital-products-with-crypto",
    title: "How to Buy Digital Products with Crypto in 2026",
    description:
      "Complete guide to purchasing digital products using Bitcoin, Ethereum, USDC, and stablecoins. x402, Coinbase Commerce, and more.",
    category: "Crypto Commerce",
    date: "2026-03-31",
  },
  {
    slug: "bodyweight-exercises-for-beginners",
    title: "Bodyweight Exercises for Beginners: Start Your Fitness Journey",
    description:
      "Start your fitness journey with beginner-friendly bodyweight moves. No gym needed. Perfect for absolute beginners.",
    category: "Fitness for Beginners",
    date: "2026-03-31",
  },
  {
    slug: "isometric-exercises-guide",
    title: "The Complete Guide to Isometric Exercises: Build Strength Without Moving",
    description:
      "Everything you need to know about isometric exercises — the science, benefits, and 10+ exercises including wall sits, static lunges, and door frame press.",
    category: "Fitness Science",
    date: "2026-03-31",
  },
  {
    slug: "how-to-stay-consistent-with-exercise",
    title: "How to Stay Consistent with Exercise: The Habit Stacking Method",
    description:
      "Why 80% of people quit exercise within 5 months — and how habit stacking makes consistency automatic.",
    category: "Behavioral Science",
    date: "2026-03-31",
  },
  {
    slug: "agentic-payments-explained",
    title: "Agentic Payments Explained: How AI Agents Pay for Things in 2026",
    description:
      "The complete guide to machine-to-machine payments. x402 protocol, USDC stablecoins, and how AI agents buy digital products autonomously.",
    category: "Agentic Commerce",
    date: "2026-03-31",
  },
  {
    slug: "best-exercises-for-small-apartments",
    title: "Best Exercises for Small Apartments: Full-Body Workout in Any Space",
    description:
      "15+ exercises that work in the tiniest apartments. Turn your bathroom, hallway, or kitchen into a gym.",
    category: "Fitness Guide",
    date: "2026-03-31",
  },
  {
    slug: "digital-product-agent-economy",
    title: "Selling Digital Products in the Agent Economy: A Complete Guide",
    description:
      "How to sell to AI agents. Payment protocols, discovery mechanisms, and the BrushFit case study.",
    category: "Agentic Commerce",
    date: "2026-03-31",
  },
];

export default function BlogIndex() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
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
            Get BrushFit
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
