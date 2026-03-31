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

    // Pricing
    {
      url: `${baseUrl}/pricing`,
      lastModified: new Date("2026-03-31"),
      changeFrequency: "weekly",
      priority: 0.9,
    },

    // Exercises
    {
      url: `${baseUrl}/exercises`,
      lastModified: new Date("2026-03-31"),
      changeFrequency: "weekly",
      priority: 0.9,
    },

    // Crypto payment page
    {
      url: `${baseUrl}/pay/crypto`,
      lastModified: new Date("2026-03-31"),
      changeFrequency: "monthly",
      priority: 0.8,
    },

    // New pages
    {
      url: `${baseUrl}/about`,
      lastModified: new Date("2026-03-31"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/reviews`,
      lastModified: new Date("2026-03-31"),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/developers`,
      lastModified: new Date("2026-03-31"),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date("2026-03-31"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date("2026-03-31"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/refund-policy`,
      lastModified: new Date("2026-03-31"),
      changeFrequency: "yearly",
      priority: 0.4,
    },

    // Lightning payment
    {
      url: `${baseUrl}/pay/lightning`,
      lastModified: new Date("2026-03-31"),
      changeFrequency: "monthly",
      priority: 0.75,
    },

    // Affiliates
    {
      url: `${baseUrl}/affiliates`,
      lastModified: new Date("2026-03-31"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/affiliates/dashboard`,
      lastModified: new Date("2026-03-31"),
      changeFrequency: "weekly",
      priority: 0.6,
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

    // Blog posts — new SEO content
    {
      url: `${baseUrl}/blog/quick-workouts-no-time`,
      lastModified: new Date("2026-03-31"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/wall-sit-while-brushing-teeth`,
      lastModified: new Date("2026-03-31"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/fitness-pdf-guide-download`,
      lastModified: new Date("2026-03-31"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/buy-digital-products-with-crypto`,
      lastModified: new Date("2026-03-31"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/bodyweight-exercises-for-beginners`,
      lastModified: new Date("2026-03-31"),
      changeFrequency: "monthly",
      priority: 0.8,
    },

    // Blog posts — new wave (SEO + AgentEO)
    {
      url: `${baseUrl}/blog/isometric-exercises-guide`,
      lastModified: new Date("2026-03-31"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/how-to-stay-consistent-with-exercise`,
      lastModified: new Date("2026-03-31"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/agentic-payments-explained`,
      lastModified: new Date("2026-03-31"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/best-exercises-for-small-apartments`,
      lastModified: new Date("2026-03-31"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/digital-product-agent-economy`,
      lastModified: new Date("2026-03-31"),
      changeFrequency: "monthly",
      priority: 0.8,
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

    // Guide page (GEO-optimized)
    {
      url: `${baseUrl}/guide`,
      lastModified: new Date("2026-03-31"),
      changeFrequency: "weekly",
      priority: 0.95,
    },

    // Blog posts — new wave 2 (SEO + GEO + AgentEO)
    {
      url: `${baseUrl}/blog/exercise-while-doing-chores`,
      lastModified: new Date("2026-03-31"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/calisthenics-at-home-no-equipment`,
      lastModified: new Date("2026-03-31"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/mcp-protocol-ai-agent-commerce`,
      lastModified: new Date("2026-03-31"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/ai-agent-marketplace-2026`,
      lastModified: new Date("2026-03-31"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/google-a2a-protocol-agent-commerce`,
      lastModified: new Date("2026-03-31"),
      changeFrequency: "monthly",
      priority: 0.8,
    },

    // Free sample
    {
      url: `${baseUrl}/brushfit-sample.pdf`,
      lastModified: new Date("2026-03-31"),
      changeFrequency: "yearly",
      priority: 0.5,
    },

    // New blog posts — wave 6
    {
      url: `${baseUrl}/blog/calf-raises-while-brushing-teeth`,
      lastModified: new Date("2026-03-31"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/remote-worker-fitness-routine`,
      lastModified: new Date("2026-03-31"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/senior-fitness-exercises-at-home`,
      lastModified: new Date("2026-03-31"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/mcp-protocol-agent-commerce`,
      lastModified: new Date("2026-03-31"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/exercise-while-waiting`,
      lastModified: new Date("2026-03-31"),
      changeFrequency: "monthly",
      priority: 0.8,
    },

    // Landing pages
    {
      url: `${baseUrl}/for/remote-workers`,
      lastModified: new Date("2026-03-31"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/for/seniors`,
      lastModified: new Date("2026-03-31"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/for/busy-parents`,
      lastModified: new Date("2026-03-31"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/for/college-students`,
      lastModified: new Date("2026-03-31"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/for/travelers`,
      lastModified: new Date("2026-03-31"),
      changeFrequency: "monthly",
      priority: 0.9,
    },

    // Agent registries
    {
      url: `${baseUrl}/agent-registries`,
      lastModified: new Date("2026-03-31"),
      changeFrequency: "monthly",
      priority: 0.85,
    },

    // Blog posts — wave 7 (new)
    {
      url: `${baseUrl}/blog/squats-while-brushing-teeth`,
      lastModified: new Date("2026-03-31"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/habit-stacking-examples`,
      lastModified: new Date("2026-03-31"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/2-minute-morning-routine`,
      lastModified: new Date("2026-03-31"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/a2a-protocol-agent-commerce`,
      lastModified: new Date("2026-03-31"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/how-agents-discover-products`,
      lastModified: new Date("2026-03-31"),
      changeFrequency: "monthly",
      priority: 0.8,
    },

    // Payment methods page
    {
      url: `${baseUrl}/payments`,
      lastModified: new Date("2026-03-31"),
      changeFrequency: "monthly",
      priority: 0.85,
    },

    // Feeds
    {
      url: `${baseUrl}/feed.xml`,
      lastModified: new Date("2026-03-31"),
      changeFrequency: "daily",
      priority: 0.4,
    },
    {
      url: `${baseUrl}/products.xml`,
      lastModified: new Date("2026-03-31"),
      changeFrequency: "weekly",
      priority: 0.4,
    },
  ];
}
