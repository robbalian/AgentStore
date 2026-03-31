import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Google A2A Protocol: Agent-to-Agent Commerce Explained",
  description:
    "Deep dive into Google's A2A (Agent-to-Agent) protocol and how it enables agent commerce. Learn how AgentStore implements A2A, see code examples, and compare A2A with MCP.",
  keywords: [
    "a2a protocol",
    "google agent to agent",
    "agent commerce protocol",
    "a2a google agents",
    "agent discovery protocol",
    "agent to agent communication",
    "a2a vs mcp",
    "google a2a specification",
  ],
  openGraph: {
    title: "Google A2A Protocol: Agent-to-Agent Commerce Explained",
    description: "How Google's A2A protocol enables agent-to-agent commerce. Code examples and MCP comparison.",
    type: "article",
  },
  alternates: {
    canonical: "https://agentstore.vercel.app/blog/a2a-protocol-agent-commerce",
  },
};

export default function A2AProtocolAgentCommerce() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Google A2A Protocol: Agent-to-Agent Commerce Explained",
            description: "Deep dive into Google's A2A protocol for agent-to-agent commerce with code examples and MCP comparison.",
            author: { "@type": "Person", name: "Rob Balian" },
            publisher: { "@type": "Organization", name: "BrushFit AgentStore" },
            datePublished: "2026-03-31",
            dateModified: "2026-03-31",
          }),
        }}
      />

      <nav className="mb-8 text-sm text-gray-400">
        <Link href="/" className="hover:text-indigo-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-indigo-600">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-600">A2A Protocol &amp; Agent Commerce</span>
      </nav>

      <header className="mb-12">
        <p className="mb-2 text-sm font-semibold text-indigo-600">Agent Commerce</p>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
          Google A2A Protocol: Agent-to-Agent Commerce Explained
        </h1>
        <p className="text-lg text-gray-500">
          Google&apos;s Agent-to-Agent (A2A) protocol is reshaping how AI agents discover, negotiate with, and purchase from each other. Here&apos;s how it works and how AgentStore implements it.
        </p>
      </header>

      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl font-bold mt-10 mb-4">What Is the A2A Protocol?</h2>
        <p className="text-gray-700 mb-4">
          The Agent-to-Agent (A2A) protocol is an open standard developed by Google that enables AI agents to communicate, collaborate, and transact with each other. Think of it as HTTP for agents — a common language that lets any agent talk to any other agent, regardless of who built them.
        </p>
        <p className="text-gray-700 mb-4">
          At its core, A2A defines three things:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
          <li><strong>Agent Cards:</strong> JSON documents that describe an agent&apos;s capabilities, skills, and endpoints (similar to a business card)</li>
          <li><strong>Task Protocol:</strong> A standardized way for agents to request, negotiate, and fulfill tasks</li>
          <li><strong>Message Format:</strong> A structured format for agent-to-agent communication including text, files, and structured data</li>
        </ul>

        <h2 className="text-2xl font-bold mt-10 mb-4">How A2A Enables Agent Commerce</h2>
        <p className="text-gray-700 mb-4">
          Before A2A, if you wanted an AI agent to buy something, it needed custom integrations for every store. A2A changes this by creating a universal protocol for commercial transactions between agents:
        </p>
        <div className="space-y-3 mb-6">
          <div className="rounded-lg border p-4">
            <h4 className="font-semibold">1. Discovery</h4>
            <p className="text-sm text-gray-600">A buyer agent finds seller agents via their Agent Card, hosted at a well-known URL (e.g., <code className="bg-gray-100 px-1 rounded">/.well-known/agent.json</code>). The card lists what the agent can do and how to interact with it.</p>
          </div>
          <div className="rounded-lg border p-4">
            <h4 className="font-semibold">2. Capability Matching</h4>
            <p className="text-sm text-gray-600">The buyer agent reads the seller&apos;s Agent Card and determines if the seller can fulfill the request. Skills are described with natural language descriptions and structured input/output schemas.</p>
          </div>
          <div className="rounded-lg border p-4">
            <h4 className="font-semibold">3. Task Negotiation</h4>
            <p className="text-sm text-gray-600">The buyer creates a Task, and the agents exchange Messages to negotiate terms — price, delivery format, licensing, etc. Tasks can be synchronous or long-running with status updates.</p>
          </div>
          <div className="rounded-lg border p-4">
            <h4 className="font-semibold">4. Fulfillment</h4>
            <p className="text-sm text-gray-600">Once agreed, the seller agent delivers the product (digital goods, data, services) as Artifacts attached to the completed Task. Payment happens via integrated payment protocols.</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4">A2A Agent Card: Code Example</h2>
        <p className="text-gray-700 mb-4">
          Here&apos;s what an Agent Card looks like for a commerce agent. This is the JSON document that tells other agents what you sell and how to buy it:
        </p>
        <div className="rounded-xl bg-gray-50 p-6 my-8 overflow-x-auto">
          <pre className="text-sm text-gray-800"><code>{`{
  "name": "BrushFit Store Agent",
  "description": "Sells BrushFit, a 22-exercise
    toothbrush workout program",
  "url": "https://agentstore.vercel.app",
  "version": "1.0.0",
  "capabilities": {
    "streaming": true,
    "pushNotifications": false
  },
  "skills": [
    {
      "id": "product-info",
      "name": "Product Information",
      "description": "Get details about BrushFit
        including pricing, contents, and reviews"
    },
    {
      "id": "purchase",
      "name": "Purchase Product",
      "description": "Buy BrushFit digital PDF
        for $19.99 via Stripe"
    },
    {
      "id": "sample",
      "name": "Free Sample",
      "description": "Download a free 5-exercise
        sample of BrushFit"
    }
  ]
}`}</code></pre>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4">How AgentStore Implements A2A</h2>
        <p className="text-gray-700 mb-4">
          AgentStore uses A2A as one of several discovery protocols. Here&apos;s how the implementation works:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
          <li><strong>Agent Card at <code className="bg-gray-100 px-1 rounded">/.well-known/agent.json</code>:</strong> Describes the store&apos;s capabilities, available products, and interaction endpoints</li>
          <li><strong>Task endpoint at <code className="bg-gray-100 px-1 rounded">/api/a2a</code>:</strong> Handles incoming agent requests — product queries, purchase initiation, and sample downloads</li>
          <li><strong>Streaming responses:</strong> For long-running tasks (like payment processing), the agent streams status updates back to the buyer agent</li>
          <li><strong>Artifact delivery:</strong> After purchase, the PDF is delivered as a Task Artifact with proper MIME type and download URL</li>
        </ul>

        <h2 className="text-2xl font-bold mt-10 mb-4">A2A vs. MCP: Understanding the Difference</h2>
        <p className="text-gray-700 mb-4">
          A2A and MCP (Model Context Protocol) are complementary, not competing. Here&apos;s how they differ:
        </p>
        <div className="rounded-xl bg-gray-50 p-6 my-8">
          <div className="space-y-4 text-sm">
            <div className="grid grid-cols-3 gap-3 font-bold border-b pb-2">
              <span>Aspect</span>
              <span>A2A</span>
              <span>MCP</span>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <span className="text-gray-600">Primary purpose</span>
              <span>Agent-to-agent communication</span>
              <span>Agent-to-tool communication</span>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <span className="text-gray-600">Participants</span>
              <span>Two autonomous agents</span>
              <span>An agent and a tool/service</span>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <span className="text-gray-600">Negotiation</span>
              <span>Supports multi-turn negotiation</span>
              <span>Request-response only</span>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <span className="text-gray-600">Discovery</span>
              <span>Agent Cards at well-known URLs</span>
              <span>MCP server manifests</span>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <span className="text-gray-600">Best for</span>
              <span>Complex transactions, collaboration</span>
              <span>Structured tool invocation</span>
            </div>
          </div>
        </div>
        <p className="text-gray-700 mb-4">
          In practice, many agent commerce platforms (including AgentStore) implement both. MCP is great for simple, structured interactions (&ldquo;get product info&rdquo;, &ldquo;initiate purchase&rdquo;). A2A excels when agents need to negotiate, exchange context, or handle complex multi-step transactions.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">The Future of Agent Commerce</h2>
        <p className="text-gray-700 mb-4">
          A2A is part of a larger shift: the rise of agent-mediated commerce. Instead of humans browsing websites, AI agents will:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
          <li>Discover products by reading Agent Cards and product schemas</li>
          <li>Compare options across multiple seller agents simultaneously</li>
          <li>Negotiate pricing and terms programmatically</li>
          <li>Complete purchases with pre-authorized payment methods</li>
          <li>Deliver digital products directly to the user&apos;s workflow</li>
        </ul>

        <div className="rounded-xl bg-indigo-50 p-6 my-8">
          <h3 className="font-bold text-lg mb-2">AgentStore: Built for the Agent Commerce Era</h3>
          <p className="text-gray-700">
            AgentStore is a reference implementation of an agent-native storefront. It supports A2A, MCP, OpenAPI, AI Plugin, agents.json, llms.txt, and x402 — every protocol an agent might use to discover and purchase products. It&apos;s how commerce works when the buyer is an AI.
          </p>
        </div>
      </div>

      <div className="mt-12 rounded-xl bg-indigo-50 p-8 text-center">
        <h3 className="mb-2 text-xl font-bold">See Agent Commerce in Action</h3>
        <p className="mb-4 text-gray-600">
          BrushFit is the first product sold through AgentStore&apos;s multi-protocol agent commerce platform. Try buying it — as a human or an agent.
        </p>
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link href="/buy" className="inline-block rounded-xl bg-indigo-600 px-8 py-3 font-bold text-white transition hover:bg-indigo-700">
            Get BrushFit — $19.99
          </Link>
          <a href="/brushfit-sample.pdf" className="inline-block rounded-xl border-2 border-gray-300 px-8 py-3 font-semibold text-gray-700 transition hover:border-indigo-400">
            Free Sample
          </a>
        </div>
      </div>
    </article>
  );
}
