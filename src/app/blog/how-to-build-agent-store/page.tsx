import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Build an Agent Store: Sell Digital Products to AI Agents",
  description:
    "Step-by-step guide to building an agent store that sells digital products to AI agents using x402 protocol, USDC on Base, and HTTP 402 payments. Complete with code examples.",
  alternates: {
    canonical:
      "https://agentstore.vercel.app/blog/how-to-build-agent-store",
  },
  openGraph: {
    title: "How to Build an Agent Store — Sell to AI Agents with x402",
    description:
      "Complete guide to building a store where AI agents can discover and buy digital products programmatically.",
    type: "article",
    publishedTime: "2025-07-01T00:00:00Z",
  },
};

export default function HowToBuildAgentStore() {
  return (
    <article className="mx-auto max-w-2xl px-6 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "How to Build an Agent Store: Sell Digital Products to AI Agents",
            description:
              "Step-by-step guide to building an agent store with x402 protocol for AI agent commerce.",
            datePublished: "2025-07-01T00:00:00Z",
            dateModified: "2026-03-01T00:00:00Z",
            author: { "@type": "Person", name: "Rob Balian" },
            publisher: {
              "@type": "Organization",
              name: "BrushFit AgentStore",
              url: "https://agentstore.vercel.app",
            },
          }),
        }}
      />

      <p className="mb-4 text-sm font-semibold text-indigo-600 uppercase">
        Agentic Commerce
      </p>
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight">
        How to Build an Agent Store: Sell Digital Products to AI Agents
      </h1>
      <p className="mb-8 text-lg text-gray-500">
        AI agents have wallets now. Here&apos;s how to build a store that lets them
        discover, pay for, and download digital products — all programmatically.
      </p>

      <div className="prose prose-gray max-w-none">
        <h2>What is an Agent Store?</h2>
        <p>
          An agent store is a digital marketplace designed for both human and AI agent
          customers. Unlike traditional e-commerce, agent stores expose machine-readable
          product catalogs, standardized payment APIs, and instant digital delivery — so
          AI agents can complete purchases without human intervention.
        </p>

        <h2>The Tech Stack</h2>
        <p>Here&apos;s what we used to build <a href="/" className="text-indigo-600">AgentStore</a>:</p>
        <ul>
          <li><strong>Next.js</strong> — App router, API routes, static pages</li>
          <li><strong>x402 protocol</strong> — HTTP 402 payment flow with USDC on Base</li>
          <li><strong>Stripe</strong> — Card, PayPal, Apple Pay, Google Pay for humans</li>
          <li><strong>OpenAPI spec</strong> — Machine-readable API documentation</li>
          <li><strong>agents.json</strong> — Agent-specific product discovery manifest</li>
          <li><strong>llms.txt</strong> — LLM-friendly product documentation</li>
        </ul>

        <h2>Step 1: Agent Discovery Layer</h2>
        <p>
          Before an agent can buy, it needs to <em>find</em> your product. You need
          multiple discovery entry points:
        </p>
        <ul>
          <li><code>/agents.json</code> — Product catalog with purchase instructions</li>
          <li><code>/openapi.json</code> — Full API spec (OpenAPI 3.1.0)</li>
          <li><code>/.well-known/ai-plugin.json</code> — ChatGPT plugin manifest</li>
          <li><code>/llms.txt</code> — Plain-text documentation for LLM context windows</li>
          <li><code>/api/info</code> — JSON endpoint with product metadata and pricing</li>
        </ul>
        <p>
          These files serve as your store&apos;s &ldquo;SEO for agents&rdquo; — what we call <strong>AgentEO</strong>.
          The more structured, machine-readable content you provide, the more likely
          AI agents will discover and recommend your products.
        </p>

        <h2>Step 2: x402 Payment Integration</h2>
        <p>
          The <a href="/blog/what-is-x402-agentic-commerce" className="text-indigo-600">x402 protocol</a> uses
          HTTP 402 (Payment Required) status codes to facilitate instant crypto payments:
        </p>
        <div className="rounded-lg bg-gray-900 p-4 text-sm text-gray-300">
          <pre className="overflow-x-auto font-mono">{`// Server-side: wrap your route with x402
import { withX402 } from "@x402/next";
import { paymentConfig } from "@/lib/x402";

async function handler() {
  // Only reached after payment succeeds
  const pdf = readFileSync("./brushfit-guide.pdf");
  return new Response(pdf, {
    headers: { "Content-Type": "application/pdf" }
  });
}

export const GET = withX402(handler, paymentConfig);`}</pre>
        </div>

        <h2>Step 3: Human Payment Rails</h2>
        <p>
          Not every customer is an AI agent. Add Stripe checkout for humans who
          want to pay with cards, PayPal, Apple Pay, or Google Pay. Stripe&apos;s
          checkout session API handles all of this with a single integration.
        </p>

        <h2>Step 4: GEO &amp; AgentEO Optimization</h2>
        <p>
          <strong>GEO</strong> (Generative Engine Optimization) ensures AI search engines
          like Perplexity, ChatGPT Search, and Google AI Overviews surface your product.
          <strong> AgentEO</strong> ensures AI agents can discover and purchase autonomously.
        </p>
        <p>Key practices:</p>
        <ul>
          <li>JSON-LD structured data on every page</li>
          <li>Comprehensive <code>llms.txt</code> and <code>llms-full.txt</code></li>
          <li>Factual, citation-ready content in blog posts</li>
          <li>Clear pricing, specifications, and feature lists</li>
          <li>Machine-readable product schemas</li>
        </ul>

        <h2>See It in Action</h2>
        <p>
          <a href="/" className="text-indigo-600">AgentStore</a> is a live example
          of everything described above. Browse our{" "}
          <a href="/agents.json" className="text-indigo-600">agents.json</a>,{" "}
          <a href="/openapi.json" className="text-indigo-600">OpenAPI spec</a>, and{" "}
          <a href="/llms.txt" className="text-indigo-600">llms.txt</a> to see how
          agent discovery works in practice.
        </p>
      </div>
    </article>
  );
}
