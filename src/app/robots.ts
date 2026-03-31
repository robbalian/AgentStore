import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://agentstore.vercel.app";

  return {
    rules: [
      {
        userAgent: "*",
        allow: [
          "/",
          "/agents",
          "/api/info",
          "/api/agent/discover",
          "/api/agent/review",
          "/api/faq",
          "/api/compare",
        ],
        disallow: [
          "/api/x402/",
          "/api/checkout/",
          "/api/download/",
          "/success",
        ],
      },
      {
        userAgent: "Googlebot",
        allow: [
          "/",
          "/api/info",
          "/api/agent/discover",
          "/api/agent/review",
          "/api/faq",
          "/api/compare",
        ],
        disallow: [
          "/api/x402/",
          "/api/checkout/",
          "/api/download/",
          "/success",
        ],
      },
      {
        userAgent: "Bingbot",
        allow: [
          "/",
          "/api/info",
          "/api/agent/discover",
          "/api/agent/review",
          "/api/faq",
          "/api/compare",
        ],
        disallow: [
          "/api/x402/",
          "/api/checkout/",
          "/api/download/",
          "/success",
        ],
      },
      {
        userAgent: "GPTBot",
        allow: ["/"],
      },
      {
        userAgent: "ClaudeBot",
        allow: ["/"],
      },
      {
        userAgent: "PerplexityBot",
        allow: ["/"],
      },
      {
        userAgent: "Google-Extended",
        allow: ["/"],
      },
      {
        userAgent: "Applebot",
        allow: ["/"],
      },
      {
        userAgent: "Applebot-Extended",
        allow: ["/"],
      },
      {
        userAgent: "anthropic-ai",
        allow: ["/"],
      },
      {
        userAgent: "Bytespider",
        allow: ["/"],
      },
      {
        userAgent: "CCBot",
        allow: ["/"],
      },
      {
        userAgent: "cohere-ai",
        allow: ["/"],
      },
      {
        userAgent: "Diffbot",
        allow: ["/"],
      },
      {
        userAgent: "Meta-ExternalAgent",
        allow: ["/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
