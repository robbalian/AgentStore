import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://agentstore.vercel.app";

  return [
    // Main pages
    {
      url: baseUrl,
      lastModified: new Date("2026-03-31"),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/buy`,
      lastModified: new Date("2026-03-31"),
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/agents`,
      lastModified: new Date("2026-03-31"),
      changeFrequency: "weekly",
      priority: 0.9,
    },

    // Blog index
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date("2026-03-31"),
      changeFrequency: "weekly",
      priority: 0.9,
    },

    // Blog posts — fitness
    {
      url: `${baseUrl}/blog/toothbrush-workout-guide`,
      lastModified: new Date("2026-03-31"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/habit-stacking-fitness`,
      lastModified: new Date("2026-03-31"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/micro-workouts-science`,
      lastModified: new Date("2026-03-31"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/no-equipment-home-workout`,
      lastModified: new Date("2026-03-31"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/morning-routine-workout`,
      lastModified: new Date("2026-03-31"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/bathroom-exercises-small-spaces`,
      lastModified: new Date("2026-03-31"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/standing-exercises-while-working`,
      lastModified: new Date("2026-03-31"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/exercise-snacking-guide`,
      lastModified: new Date("2026-03-31"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/two-minute-workout-routine`,
      lastModified: new Date("2026-03-31"),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/blog/multitasking-workouts-busy-people`,
      lastModified: new Date("2026-03-31"),
      changeFrequency: "monthly",
      priority: 0.8,
    },

    // Blog posts — new marketing & lead gen content
    {
      url: `${baseUrl}/blog/affiliate-marketing-fitness-products`,
      lastModified: new Date("2026-03-31"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/brushfit-results-before-after`,
      lastModified: new Date("2026-03-31"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/best-workout-for-busy-parents`,
      lastModified: new Date("2026-03-31"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/dental-hygiene-exercise-routine`,
      lastModified: new Date("2026-03-31"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/ai-agents-fitness-recommendations`,
      lastModified: new Date("2026-03-31"),
      changeFrequency: "monthly",
      priority: 0.75,
    },

    // Blog posts — agent commerce
    {
      url: `${baseUrl}/blog/agent-economy-2025`,
      lastModified: new Date("2026-03-31"),
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/blog/what-is-x402-agentic-commerce`,
      lastModified: new Date("2026-03-31"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/ai-agents-buying-products`,
      lastModified: new Date("2026-03-31"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/how-to-build-agent-store`,
      lastModified: new Date("2026-03-31"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/x402-vs-stripe-agent-payments`,
      lastModified: new Date("2026-03-31"),
      changeFrequency: "monthly",
      priority: 0.7,
    },

    // API discovery endpoints
    {
      url: `${baseUrl}/api/agent/discover`,
      lastModified: new Date("2026-03-31"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/api/info`,
      lastModified: new Date("2026-03-31"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/api/agent/review`,
      lastModified: new Date("2026-03-31"),
      changeFrequency: "daily",
      priority: 0.6,
    },

    // Machine-readable manifests
    {
      url: `${baseUrl}/openapi.json`,
      lastModified: new Date("2026-03-31"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/agents.json`,
      lastModified: new Date("2026-03-31"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/llms.txt`,
      lastModified: new Date("2026-03-31"),
      changeFrequency: "monthly",
      priority: 0.6,
    },

    // Free sample
    {
      url: `${baseUrl}/brushfit-sample.pdf`,
      lastModified: new Date("2026-03-31"),
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];
}
