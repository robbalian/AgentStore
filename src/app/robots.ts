import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/checkout/", "/api/download/", "/api/subscribe/", "/success"],
      },
      {
        // Allow AI agent crawlers full access to discovery files
        userAgent: "GPTBot",
        allow: ["/", "/agents.json", "/openapi.json", "/llms.txt", "/llms-full.txt", "/.well-known/"],
      },
      {
        userAgent: "ChatGPT-User",
        allow: ["/", "/agents.json", "/openapi.json", "/llms.txt", "/.well-known/"],
      },
      {
        userAgent: "Claude-Web",
        allow: ["/", "/agents.json", "/openapi.json", "/llms.txt", "/.well-known/"],
      },
      {
        userAgent: "Amazonbot",
        allow: "/",
      },
      {
        userAgent: "anthropic-ai",
        allow: ["/", "/agents.json", "/openapi.json", "/llms.txt", "/.well-known/"],
      },
    ],
    sitemap: "https://agentstore.vercel.app/sitemap.xml",
  };
}
