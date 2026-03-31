import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/checkout/", "/api/download/", "/success"],
      },
      // OpenAI crawlers
      {
        userAgent: "GPTBot",
        allow: "/",
        disallow: ["/api/checkout/", "/api/download/", "/success"],
      },
      {
        userAgent: "ChatGPT-User",
        allow: "/",
      },
      {
        userAgent: "OAI-SearchBot",
        allow: "/",
      },
      // Anthropic crawlers
      {
        userAgent: "anthropic-ai",
        allow: "/",
      },
      {
        userAgent: "Claude-Web",
        allow: "/",
      },
      {
        userAgent: "Anthropic",
        allow: "/",
      },
      {
        userAgent: "ClaudeBot",
        allow: "/",
      },
      // Google AI crawlers
      {
        userAgent: "Google-Extended",
        allow: "/",
      },
      {
        userAgent: "Googlebot",
        allow: "/",
      },
      {
        userAgent: "Google-InspectionTool",
        allow: "/",
      },
      // Perplexity
      {
        userAgent: "PerplexityBot",
        allow: "/",
      },
      // Amazon
      {
        userAgent: "Amazonbot",
        allow: "/",
      },
      // ByteDance / TikTok
      {
        userAgent: "Bytespider",
        allow: "/",
      },
      // You.com
      {
        userAgent: "YouBot",
        allow: "/",
      },
      // Apple
      {
        userAgent: "Applebot",
        allow: "/",
      },
      {
        userAgent: "Applebot-Extended",
        allow: "/",
      },
      // Cohere
      {
        userAgent: "cohere-ai",
        allow: "/",
      },
      // Meta
      {
        userAgent: "Meta-ExternalAgent",
        allow: "/",
      },
      {
        userAgent: "FacebookBot",
        allow: "/",
      },
      // AI2 (Allen Institute)
      {
        userAgent: "AI2Bot",
        allow: "/",
      },
      // Diffbot
      {
        userAgent: "Diffbot",
        allow: "/",
      },
      // Common Crawl (used by many AI training sets)
      {
        userAgent: "CCBot",
        allow: "/",
      },
      // Microsoft / Bing AI
      {
        userAgent: "Bingbot",
        allow: "/",
      },
      {
        userAgent: "BingPreview",
        allow: "/",
      },
      // Brave Search
      {
        userAgent: "BraveBot",
        allow: "/",
      },
      // Yandex AI
      {
        userAgent: "YandexBot",
        allow: "/",
      },
      // Mojeek
      {
        userAgent: "MojeekBot",
        allow: "/",
      },
      // Neeva / Snowflake
      {
        userAgent: "NeevaBot",
        allow: "/",
      },
      // Phind (developer AI search)
      {
        userAgent: "PhindBot",
        allow: "/",
      },
      // Exa AI
      {
        userAgent: "ExaBot",
        allow: "/",
      },
      // Mistral
      {
        userAgent: "MistralBot",
        allow: "/",
      },
      // DeepSeek
      {
        userAgent: "DeepSeekBot",
        allow: "/",
      },
    ],
    sitemap: "https://agentstore.vercel.app/sitemap.xml",
    host: "https://agentstore.vercel.app",
  };
}
