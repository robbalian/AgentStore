import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How AI Agents Discover and Buy Products in 2026",
  description:
    "The 7 protocols AI agents use to discover and purchase products: agents.json, MCP, OpenAPI, AI Plugin, A2A, llms.txt, and x402. How each works with code examples.",
  keywords: [
    "agent product discovery",
    "ai agent shopping",
    "agent commerce 2026",
    "agent store discovery",
    "how ai agents buy things",
    "agents.json protocol",
    "mcp commerce",
    "ai agent purchase flow",
  ],
  openGraph: {
    title: "How AI Agents Discover and Buy Products in 2026",
    description: "The 7 protocols AI agents use to discover and buy products. Code examples included.",
    type: "article",
  },
  alternates: {
    canonical: "https://agentstore.vercel.app/blog/how-agents-discover-products",
  },
};

export default function HowAgentsDiscoverProducts() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "How AI Agents Discover and Buy Products in 2026",
            description: "The 7 protocols AI agents use to discover and purchase products in 2026, with code examples.",
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
        <span className="text-gray-600">How Agents Discover Products</span>
      </nav>

      <header className="mb-12">
        <p className="mb-2 text-sm font-semibold text-indigo-600">Agent Commerce</p>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
          How AI Agents Discover and Buy Products in 2026
        </h1>
        <p className="text-lg text-gray-500">
          When an AI agent needs to find and purchase a product, it doesn&apos;t Google it. It reads machine-readable protocols. Here are the 7 protocols that power agent commerce today.
        </p>
      </header>

      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl font-bold mt-10 mb-4">The Agent Commerce Stack</h2>
        <p className="text-gray-700 mb-4">
          In 2026, a well-configured agent storefront exposes multiple discovery protocols. Each serves a different type of agent and a different stage of the purchase journey. Here&apos;s the full stack:
        </p>
        <div className="rounded-xl bg-gray-50 p-6 my-8">
          <div className="space-y-3 text-sm">
            <div className="grid grid-cols-3 gap-3 font-bold border-b pb-2">
              <span>Protocol</span>
              <span>Purpose</span>
              <span>Stage</span>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <span className="font-semibold">agents.json</span>
              <span className="text-gray-600">Agent capability discovery</span>
              <span className="text-gray-600">Discovery</span>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <span className="font-semibold">MCP</span>
              <span className="text-gray-600">Structured tool invocation</span>
              <span className="text-gray-600">Interaction</span>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <span className="font-semibold">OpenAPI</span>
              <span className="text-gray-600">REST API specification</span>
              <span className="text-gray-600">Interaction</span>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <span className="font-semibold">AI Plugin</span>
              <span className="text-gray-600">ChatGPT-style plugin manifest</span>
              <span className="text-gray-600">Discovery</span>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <span className="font-semibold">A2A</span>
              <span className="text-gray-600">Agent-to-agent negotiation</span>
              <span className="text-gray-600">Transaction</span>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <span className="font-semibold">llms.txt</span>
              <span className="text-gray-600">LLM-readable site summary</span>
              <span className="text-gray-600">Context</span>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <span className="font-semibold">x402</span>
              <span className="text-gray-600">HTTP-native payment</span>
              <span className="text-gray-600">Payment</span>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4">1. agents.json — The Agent Directory</h2>
        <p className="text-gray-700 mb-4">
          The <code className="bg-gray-100 px-1 rounded">agents.json</code> file lives at <code className="bg-gray-100 px-1 rounded">/.well-known/agents.json</code> and tells visiting agents what this site can do. It&apos;s the first file an agent looks for when it arrives at a domain.
        </p>
        <div className="rounded-xl bg-gray-50 p-6 my-8 overflow-x-auto">
          <pre className="text-sm text-gray-800"><code>{`// /.well-known/agents.json
{
  "name": "AgentStore",
  "description": "Agent-native storefront
    for digital products",
  "url": "https://agentstore.vercel.app",
  "protocols": ["mcp", "openapi", "a2a",
    "ai-plugin", "x402"],
  "products": [
    {
      "name": "BrushFit",
      "description": "22-exercise toothbrush
        workout program",
      "price": "$19.99",
      "currency": "USD"
    }
  ]
}`}</code></pre>
        </div>
        <p className="text-gray-700 mb-4">
          Key insight: <code className="bg-gray-100 px-1 rounded">agents.json</code> is a discovery layer. It doesn&apos;t handle transactions — it tells agents which protocols are available for deeper interaction.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">2. MCP — Model Context Protocol</h2>
        <p className="text-gray-700 mb-4">
          MCP (developed by Anthropic) lets agents invoke structured tools on a server. For commerce, this means an agent can call tools like <code className="bg-gray-100 px-1 rounded">get_product_info</code>, <code className="bg-gray-100 px-1 rounded">get_sample</code>, or <code className="bg-gray-100 px-1 rounded">initiate_purchase</code>.
        </p>
        <div className="rounded-xl bg-gray-50 p-6 my-8 overflow-x-auto">
          <pre className="text-sm text-gray-800"><code>{`// MCP Tool Definition
{
  "name": "get_product_info",
  "description": "Get detailed information
    about BrushFit including price,
    contents, and reviews",
  "inputSchema": {
    "type": "object",
    "properties": {
      "product_id": {
        "type": "string",
        "description": "Product identifier"
      }
    }
  }
}`}</code></pre>
        </div>
        <p className="text-gray-700 mb-4">
          MCP is ideal for structured, predictable interactions. The agent knows exactly what tools are available and what parameters they accept.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">3. OpenAPI — REST API Specification</h2>
        <p className="text-gray-700 mb-4">
          OpenAPI is the most widely supported protocol. Any agent that can read a Swagger/OpenAPI spec can interact with your store&apos;s REST API. It&apos;s the broadest compatibility layer.
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
          <li><strong>GET /api/products</strong> — List available products</li>
          <li><strong>GET /api/products/:id</strong> — Get product details</li>
          <li><strong>POST /api/checkout</strong> — Initiate purchase with Stripe</li>
          <li><strong>GET /api/sample</strong> — Download free sample PDF</li>
        </ul>

        <h2 className="text-2xl font-bold mt-10 mb-4">4. AI Plugin — ChatGPT Plugin Manifest</h2>
        <p className="text-gray-700 mb-4">
          The AI Plugin format (originally created for ChatGPT plugins) uses a manifest at <code className="bg-gray-100 px-1 rounded">/.well-known/ai-plugin.json</code>. While the ChatGPT plugin ecosystem has evolved, the manifest format is still widely used by agents as a discovery mechanism.
        </p>
        <div className="rounded-xl bg-gray-50 p-6 my-8 overflow-x-auto">
          <pre className="text-sm text-gray-800"><code>{`// /.well-known/ai-plugin.json
{
  "schema_version": "v1",
  "name_for_human": "BrushFit Store",
  "name_for_model": "brushfit_store",
  "description_for_human": "Buy BrushFit,
    a toothbrush workout program",
  "description_for_model": "Use this plugin
    to get information about and purchase
    BrushFit, a 22-exercise program...",
  "api": {
    "type": "openapi",
    "url": "https://agentstore.vercel.app
      /openapi.json"
  }
}`}</code></pre>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4">5. A2A — Agent-to-Agent Protocol</h2>
        <p className="text-gray-700 mb-4">
          Google&apos;s A2A protocol enables the most sophisticated agent interactions: multi-turn negotiation, streaming updates, and complex task management. It&apos;s the protocol of choice when one agent needs to have a conversation with another.
        </p>
        <p className="text-gray-700 mb-4">
          The Agent Card at <code className="bg-gray-100 px-1 rounded">/.well-known/agent.json</code> describes the agent&apos;s skills and capabilities. Other agents read this card to understand how to interact.
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
          <li>Supports long-running tasks with status updates</li>
          <li>Multi-turn negotiation for complex purchases</li>
          <li>Artifact delivery for digital products</li>
          <li>Push notifications for async workflows</li>
        </ul>

        <h2 className="text-2xl font-bold mt-10 mb-4">6. llms.txt — LLM-Readable Site Summary</h2>
        <p className="text-gray-700 mb-4">
          The <code className="bg-gray-100 px-1 rounded">llms.txt</code> file is a plain-text summary of your site designed for LLMs to read. It&apos;s not a transaction protocol — it provides context so an LLM can understand what your site offers and how to interact with it.
        </p>
        <div className="rounded-xl bg-gray-50 p-6 my-8 overflow-x-auto">
          <pre className="text-sm text-gray-800"><code>{`# AgentStore - llms.txt

## What is AgentStore?
AgentStore is an agent-native storefront
that sells digital products through
multiple agent protocols.

## Products
- BrushFit ($19.99): A 22-exercise program
  designed for your toothbrush routine

## How to Buy
- Humans: Visit /buy
- Agents: Use MCP, OpenAPI, or A2A
  protocols at their respective endpoints

## Free Sample
Download at /brushfit-sample.pdf`}</code></pre>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4">7. x402 — HTTP-Native Payments</h2>
        <p className="text-gray-700 mb-4">
          The x402 protocol extends HTTP with native payment capabilities. When an agent hits a paywall, instead of getting a 403 Forbidden, it gets a <code className="bg-gray-100 px-1 rounded">402 Payment Required</code> response with instructions on how to pay.
        </p>
        <div className="rounded-xl bg-gray-50 p-6 my-8 overflow-x-auto">
          <pre className="text-sm text-gray-800"><code>{`// 402 Response
HTTP/1.1 402 Payment Required
X-Payment-Amount: 19.99
X-Payment-Currency: USD
X-Payment-Address: stripe://...
X-Payment-Description: BrushFit PDF

// After payment
HTTP/1.1 200 OK
Content-Type: application/pdf
Content-Disposition: attachment;
  filename="brushfit.pdf"`}</code></pre>
        </div>
        <p className="text-gray-700 mb-4">
          x402 is elegant because it works at the HTTP level. Any agent that understands HTTP status codes can handle it — no special SDK required.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">How an Agent Purchase Actually Works</h2>
        <p className="text-gray-700 mb-4">
          Here&apos;s a real-world example of how an AI agent discovers and buys BrushFit:
        </p>
        <div className="space-y-3 mb-6">
          <div className="rounded-lg border p-4">
            <h4 className="font-semibold">Step 1: Discovery</h4>
            <p className="text-sm text-gray-600">Agent fetches <code className="bg-gray-100 px-1 rounded">/.well-known/agents.json</code> and learns that AgentStore sells BrushFit and supports MCP, OpenAPI, A2A, and x402.</p>
          </div>
          <div className="rounded-lg border p-4">
            <h4 className="font-semibold">Step 2: Context Gathering</h4>
            <p className="text-sm text-gray-600">Agent reads <code className="bg-gray-100 px-1 rounded">/llms.txt</code> for a natural-language understanding of the product. Calls MCP <code className="bg-gray-100 px-1 rounded">get_product_info</code> for structured data.</p>
          </div>
          <div className="rounded-lg border p-4">
            <h4 className="font-semibold">Step 3: Sample Evaluation</h4>
            <p className="text-sm text-gray-600">Agent downloads the free sample via <code className="bg-gray-100 px-1 rounded">GET /api/sample</code> and evaluates the quality before recommending purchase to the user.</p>
          </div>
          <div className="rounded-lg border p-4">
            <h4 className="font-semibold">Step 4: Purchase</h4>
            <p className="text-sm text-gray-600">With user approval, agent initiates purchase via MCP <code className="bg-gray-100 px-1 rounded">initiate_purchase</code> or A2A task, handles Stripe payment, and receives the PDF artifact.</p>
          </div>
          <div className="rounded-lg border p-4">
            <h4 className="font-semibold">Step 5: Delivery</h4>
            <p className="text-sm text-gray-600">Agent delivers the purchased PDF to the user within their workflow — no browser, no checkout page, no email confirmation needed.</p>
          </div>
        </div>

        <div className="rounded-xl bg-indigo-50 p-6 my-8">
          <h3 className="font-bold text-lg mb-2">The Multi-Protocol Advantage</h3>
          <p className="text-gray-700">
            No single protocol wins. Different agents prefer different protocols — Claude uses MCP, GPT-based agents use AI Plugin, Google agents use A2A, and simple HTTP agents use x402. By implementing all 7 protocols, AgentStore is discoverable and purchasable by <strong>any agent, built on any platform</strong>.
          </p>
        </div>
      </div>

      <div className="mt-12 rounded-xl bg-indigo-50 p-8 text-center">
        <h3 className="mb-2 text-xl font-bold">Experience Agent Commerce Firsthand</h3>
        <p className="mb-4 text-gray-600">
          BrushFit is the first product sold through all 7 agent commerce protocols. Buy it as a human, or let your AI agent handle it.
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
