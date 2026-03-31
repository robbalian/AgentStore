import type { MetadataRoute } from "next";

const BASE_URL = "https://agentstore.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const blogPosts = [
    // New posts (2026)
    { slug: "morning-routine-exercises", priority: 0.8 },
    { slug: "bathroom-workout-routine", priority: 0.8 },
    { slug: "sell-digital-products-ai-agents", priority: 0.8 },
    { slug: "build-agent-store-x402", priority: 0.8 },
    // Original posts (2025)
    { slug: "toothbrush-workout-guide", priority: 0.8 },
    { slug: "habit-stacking-fitness", priority: 0.8 },
    { slug: "micro-workouts-science", priority: 0.8 },
    { slug: "no-equipment-home-workout", priority: 0.8 },
    { slug: "what-is-x402-agentic-commerce", priority: 0.7 },
    { slug: "ai-agents-buying-products", priority: 0.7 },
  ];

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...blogPosts.map((post) => ({
      url: `${BASE_URL}/blog/${post.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: post.priority,
    })),
  ];
}
