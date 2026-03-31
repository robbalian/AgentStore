import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://agentstore.vercel.app"),
  title: {
    default: "BrushFit — The 2-Minute Toothbrush Workout Guide | AgentStore",
    template: "%s | BrushFit AgentStore",
  },
  description:
    "22 illustrated exercises you do while brushing your teeth. One hand brushes, one hand works out. $19.99 instant PDF download. Buy with card (Stripe) or crypto (x402 USDC). The first store for humans and AI agents.",
  keywords: [
    "BrushFit",
    "toothbrush workout",
    "2 minute workout",
    "habit stacking fitness",
    "bathroom exercises",
    "no equipment workout",
    "x402",
    "agentic commerce",
    "AgentStore",
    "AI agent store",
    "bodyweight exercises",
    "micro workout",
    "morning routine exercises",
    "bathroom workout routine",
    "agent commerce",
    "buy products AI agents",
    "USDC payment",
    "digital products marketplace",
    "MCP server",
    "agent protocol",
  ],
  openGraph: {
    title: "BrushFit — The 2-Minute Toothbrush Workout Guide",
    description:
      "Turn your toothbrushing routine into a full-body workout. 22 exercises, 4-week program, instant PDF. Buy with card or crypto. The first store for humans and AI agents.",
    type: "website",
    siteName: "BrushFit AgentStore",
    url: "https://agentstore.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "BrushFit — The 2-Minute Toothbrush Workout Guide",
    description:
      "22 exercises you do while brushing your teeth. $19.99 PDF. Zero equipment. Zero extra time. Buy with card or crypto.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "https://agentstore.vercel.app",
  },
  verification: {
    // Add your Google Search Console and Bing verification codes here
    // google: "your-google-verification-code",
    // other: { "msvalidate.01": "your-bing-verification-code" },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://agentstore.vercel.app" />
        <link
          rel="alternate"
          type="text/plain"
          href="https://agentstore.vercel.app/llms.txt"
          title="LLM Documentation"
        />
        <link
          rel="alternate"
          type="application/json"
          href="https://agentstore.vercel.app/agents.json"
          title="Agent Discovery"
        />
        <meta name="agent-protocol" content="https://agentstore.vercel.app/.well-known/agent-protocol.json" />
        <meta name="mcp-server" content="https://agentstore.vercel.app/.well-known/mcp.json" />

        {/* Google Analytics — set NEXT_PUBLIC_GA_ID in env to enable */}
        {GA_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`,
              }}
            />
          </>
        )}
      </head>
      <body className="bg-white text-gray-900 antialiased">{children}</body>
    </html>
  );
}
