import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/checkout/", "/api/download/", "/success"],
      },
      {
        // Explicitly allow AI/agent crawlers to discover products
        userAgent: ["GPTBot", "ChatGPT-User", "Claude-Web", "Applebot-Extended", "PerplexityBot", "Amazonbot"],
        allow: ["/", "/api/info", "/agents.json", "/openapi.json", "/.well-known/", "/llms.txt", "/llms-full.txt", "/brushfit-sample.pdf"],
        disallow: ["/api/checkout/", "/api/download/", "/success"],
      },
    ],
    sitemap: "https://agentstore.vercel.app/sitemap.xml",
  };
}
