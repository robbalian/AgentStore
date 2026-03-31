const baseUrl = "https://agentstore.vercel.app";

const posts = [
  { slug: "calf-raises-while-brushing-teeth", title: "Calf Raises While Brushing Teeth: Build Stronger Legs in 2 Minutes", description: "Master calf raises during your toothbrushing routine. Proper form, sets, reps, and progressions.", date: "2026-03-31" },
  { slug: "remote-worker-fitness-routine", title: "Remote Worker Fitness Routine: Stay Fit Working From Home", description: "The complete fitness routine for remote workers. Exercise without leaving your home office.", date: "2026-03-31" },
  { slug: "senior-fitness-exercises-at-home", title: "Senior Fitness Exercises at Home: Safe Workouts for Older Adults", description: "Safe, gentle exercises for seniors. Build balance and strength while brushing your teeth.", date: "2026-03-31" },
  { slug: "mcp-protocol-agent-commerce", title: "MCP Protocol for Agent Commerce: How AI Agents Discover and Buy Products", description: "Complete guide to Model Context Protocol for agent commerce including discovery and x402 purchasing.", date: "2026-03-31" },
  { slug: "exercise-while-waiting", title: "Exercises While Waiting: Turn Dead Time Into Workout Time", description: "15 exercises you can do while waiting. Brushing teeth, microwave, coffee, elevator.", date: "2026-03-31" },
  { slug: "agentic-payments-explained", title: "Agentic Payments Explained: How AI Agents Pay for Things in 2026", description: "The complete guide to machine-to-machine payments. x402 protocol, USDC stablecoins, and autonomous purchasing.", date: "2026-03-31" },
  { slug: "isometric-exercises-guide", title: "The Complete Guide to Isometric Exercises", description: "Build strength without moving. The science behind static holds and how BrushFit uses them.", date: "2026-03-31" },
  { slug: "how-to-stay-consistent-with-exercise", title: "How to Stay Consistent with Exercise: The Habit Stacking Method", description: "Why 80% of people quit exercise — and how habit stacking makes consistency automatic.", date: "2026-03-31" },
  { slug: "best-exercises-for-small-apartments", title: "Best Exercises for Small Apartments", description: "15+ exercises that work in the tiniest apartments.", date: "2026-03-31" },
  { slug: "digital-product-agent-economy", title: "Selling Digital Products in the Agent Economy", description: "How to sell to AI agents with x402, MCP, and the BrushFit case study.", date: "2026-03-31" },
  { slug: "bodyweight-exercises-for-beginners", title: "Bodyweight Exercises for Beginners", description: "Start your fitness journey with beginner-friendly bodyweight moves.", date: "2026-03-31" },
  { slug: "buy-digital-products-with-crypto", title: "How to Buy Digital Products with Crypto", description: "Complete guide to purchasing digital products using cryptocurrency.", date: "2026-03-31" },
  { slug: "fitness-pdf-guide-download", title: "Best Fitness PDF Guides to Download in 2026", description: "Top-rated downloadable fitness guides for home workouts.", date: "2026-03-31" },
  { slug: "wall-sit-while-brushing-teeth", title: "Wall Sit While Brushing Your Teeth", description: "Master the wall sit during your brushing routine.", date: "2026-03-31" },
  { slug: "quick-workouts-no-time", title: "Quick Workouts When You Have No Time", description: "Effective micro workouts for the busiest schedules.", date: "2026-03-31" },
  { slug: "ai-agents-fitness-recommendations", title: "How AI Agents Are Changing Fitness Product Discovery", description: "AI agents transforming fitness product recommendations.", date: "2026-03-31" },
  { slug: "dental-hygiene-exercise-routine", title: "Combine Dental Hygiene with Exercise", description: "Build a routine that improves oral health and fitness simultaneously.", date: "2026-03-28" },
  { slug: "best-workout-for-busy-parents", title: "The Best Workout for Busy Parents", description: "Zero extra time. 28 workouts per week while brushing your teeth.", date: "2026-03-25" },
  { slug: "brushfit-results-before-after", title: "Real BrushFit Results: Before & After", description: "What 2 minutes twice a day can do. Honest results from 4 weeks.", date: "2026-03-22" },
  { slug: "affiliate-marketing-fitness-products", title: "How to Earn Passive Income Promoting BrushFit", description: "Affiliate marketing guide for fitness products.", date: "2026-03-20" },
  { slug: "multitasking-workouts-busy-people", title: "Multitasking Workouts for Busy People", description: "Exercise without extra time. Workouts while doing other things.", date: "2026-03-15" },
  { slug: "agent-economy-2025", title: "The Agent Economy in 2025", description: "How AI agents are changing commerce.", date: "2026-03-01" },
  { slug: "two-minute-workout-routine", title: "The Best 2-Minute Workout Routines", description: "Science-backed 2-minute workout routines.", date: "2026-02-15" },
  { slug: "exercise-snacking-guide", title: "Exercise Snacking: The Complete Guide", description: "Short bursts of exercise throughout your day.", date: "2026-02-01" },
  { slug: "standing-exercises-while-working", title: "12 Standing Exercises While Working", description: "Exercises at your standing desk or working from home.", date: "2026-01-15" },
  { slug: "toothbrush-workout-guide", title: "The Complete Guide to Toothbrush Workouts", description: "Turn your brushing routine into a full-body fitness habit.", date: "2025-03-30" },
  { slug: "habit-stacking-fitness", title: "Habit Stacking for Fitness: The Science", description: "Why pairing exercise with existing habits works best.", date: "2025-03-30" },
  { slug: "what-is-x402-agentic-commerce", title: "What is x402? Agentic Commerce", description: "How AI agents buy products using HTTP 402 and stablecoins.", date: "2025-03-30" },
  { slug: "micro-workouts-science", title: "The Science of Micro Workouts", description: "Why 2-minute exercise bursts are surprisingly effective.", date: "2025-03-31" },
  { slug: "no-equipment-home-workout", title: "The Ultimate No-Equipment Home Workout Guide", description: "Build strength anywhere with zero equipment.", date: "2025-03-31" },
  { slug: "ai-agents-buying-products", title: "How AI Agents Buy Products", description: "The complete guide to agent commerce.", date: "2025-03-31" },
  { slug: "how-to-build-agent-store", title: "How to Build an Agent Store", description: "Sell digital products to AI agents using x402.", date: "2025-07-01" },
];

export async function GET() {
  const items = posts
    .map(
      (post) => `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${baseUrl}/blog/${post.slug}</link>
      <guid isPermaLink="true">${baseUrl}/blog/${post.slug}</guid>
      <description>${escapeXml(post.description)}</description>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <category>Fitness</category>
    </item>`
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>BrushFit AgentStore Blog</title>
    <link>${baseUrl}/blog</link>
    <description>Fitness tips, habit stacking science, toothbrush workouts, and the future of agentic commerce. From BrushFit AgentStore.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    <image>
      <url>${baseUrl}/og-brushfit.png</url>
      <title>BrushFit AgentStore Blog</title>
      <link>${baseUrl}</link>
    </image>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}
