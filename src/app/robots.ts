import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/checkout/", "/api/download/", "/success"],
      },
    ],
    sitemap: "https://agentstore.vercel.app/sitemap.xml",
  };
}
