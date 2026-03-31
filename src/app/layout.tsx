import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://agentstore.vercel.app"),
  title: {
    default: "BrushFit — The 2-Minute Toothbrush Workout Guide",
    template: "%s | BrushFit AgentStore",
  },
  description:
    "22 illustrated exercises you do while brushing your teeth. One hand brushes, one hand works out. $19.99 instant PDF download. Buy with crypto (x402) or card (Stripe).",
  keywords: [
    "BrushFit",
    "toothbrush workout",
    "2 minute workout",
    "2 minute workout routine",
    "habit stacking fitness",
    "bathroom exercises",
    "no equipment workout",
    "exercise snacking",
    "movement snacks",
    "standing exercises",
    "multitasking workout",
    "exercise while brushing teeth",
    "quick workout routine",
    "x402",
    "agentic commerce",
    "agent economy",
    "AgentStore",
    "AI agent store",
    "bodyweight exercises",
    "micro workout",
    "morning routine workout",
    "small space exercises",
    "agent payments",
    "buy with crypto",
    "USDC payment",
    "Coinbase Commerce",
    "Solana Pay",
    "Bitcoin payment",
    "Apple Pay fitness",
    "PayPal fitness guide",
    "AI agent commerce",
    "agent-to-agent payments",
  ],
  openGraph: {
    title: "BrushFit — The 2-Minute Toothbrush Workout Guide",
    description:
      "Turn your toothbrushing routine into a full-body workout. 22 exercises, 4-week program, instant PDF. Buy with x402 or card.",
    type: "website",
    siteName: "BrushFit AgentStore",
    url: "https://agentstore.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "BrushFit — The 2-Minute Toothbrush Workout Guide",
    description:
      "22 exercises you do while brushing your teeth. $19.99 PDF. Zero equipment. Zero extra time.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "https://agentstore.vercel.app",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://agentstore.vercel.app" />
        <link rel="alternate" type="text/plain" href="https://agentstore.vercel.app/llms.txt" title="LLM Documentation" />
        <link rel="alternate" type="text/plain" href="https://agentstore.vercel.app/llms-full.txt" title="LLM Full Documentation" />
        <link rel="alternate" type="application/json" href="https://agentstore.vercel.app/agents.json" title="Agent Discovery" />
        <link rel="alternate" type="application/json" href="https://agentstore.vercel.app/.well-known/mcp.json" title="MCP Server Manifest" />
        <link rel="alternate" type="application/json" href="https://agentstore.vercel.app/openapi.json" title="OpenAPI Specification" />
        <link rel="alternate" type="application/json" href="https://agentstore.vercel.app/.well-known/ai-plugin.json" title="AI Plugin Manifest" />
        <meta name="ai-content-declaration" content="This site sells BrushFit, a $19.99 PDF fitness guide with 22 exercises. Payment via card, PayPal, Apple Pay, Google Pay, or USDC crypto (x402 protocol). Free sample at /brushfit-sample.pdf. MCP manifest at /.well-known/mcp.json. Structured FAQs at /api/faq. Product comparisons at /api/compare. Agent referral registration at /api/agent/referral." />
      </head>
      <body className="bg-white text-gray-900 antialiased">{children}</body>
    </html>
  );
}
