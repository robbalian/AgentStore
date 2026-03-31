import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://agentstore.vercel.app";

  return [
    {
      url: baseUrl,
      lastModified: new Date("2026-03-31"),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/agents`,
      lastModified: new Date("2026-03-31"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
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
  ];
}
