import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MCP Protocol for Agent Commerce: How AI Agents Discover and Buy Products",
  description:
    "Complete guide to the Model Context Protocol (MCP) for agent commerce. How AI agents use MCP to discover products, compare prices, and make purchases autonomously. Includes x402 integration.",
  keywords: [
    "mcp protocol",
    "model context protocol",
    "mcp agent commerce",
    "ai agent discovery",
    "mcp tools resources",
    "agent to agent protocol",
    "mcp server commerce",
    "ai agent buying products mcp",
    "agenteo mcp",
    "x402 mcp integration",
  ],
  openGraph: {
    title: "MCP Protocol for Agent Commerce: AI Agent Discovery & Purchasing",
    description: "How AI agents use MCP to discover and buy products autonomously.",
    type: "article",
  },
  alternates: {
    canonical: "https://agentstore.vercel.app/blog/mcp-protocol-agent-commerce",
  },
};

export default function MCPProtocolAgentCommerce() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "MCP Protocol for Agent Commerce: How AI Agents Discover and Buy Products",
            description: "Complete guide to using MCP for agent commerce including discovery, comparison, and x402 purchasing.",
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
        <span className="text-gray-600">MCP Protocol for Agent Commerce</span>
      </nav>

      <header className="mb-12">
        <p className="mb-2 text-sm font-semibold text-indigo-600">AgentEO & Commerce</p>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
          MCP Protocol for Agent Commerce: How AI Agents Discover and Buy Products
        </h1>
        <p className="text-lg text-gray-500">
          The Model Context Protocol (MCP) is becoming the standard way AI agents discover products and services. Here&apos;s how it works for commerce — and how AgentStore implements it.
        </p>
      </header>

      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl font-bold mt-10 mb-4">What is MCP?</h2>
        <p className="text-gray-700 mb-4">
          The <strong>Model Context Protocol (MCP)</strong> is an open standard that lets AI agents connect to external tools, resources, and services. Think of it as a universal adapter: any AI agent that speaks MCP can discover and use any MCP-compatible service.
        </p>
        <p className="text-gray-700 mb-4">
          For commerce, MCP is a game-changer. Instead of hardcoding API integrations, an AI agent can discover what a store sells, check prices, read reviews, and make purchases — all through a standardized protocol.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">MCP for Commerce: The Architecture</h2>
        <p className="text-gray-700 mb-4">
          An MCP commerce server exposes three primitives:
        </p>
        <div className="space-y-4 mb-6">
          <div className="rounded-xl border p-5">
            <h3 className="font-bold text-lg">Tools</h3>
            <p className="text-gray-600 mt-1">Actions the agent can take: <code className="text-xs bg-gray-100 px-1 rounded">discover_products</code>, <code className="text-xs bg-gray-100 px-1 rounded">purchase_product</code>, <code className="text-xs bg-gray-100 px-1 rounded">get_free_sample</code>, <code className="text-xs bg-gray-100 px-1 rounded">compare_products</code></p>
          </div>
          <div className="rounded-xl border p-5">
            <h3 className="font-bold text-lg">Resources</h3>
            <p className="text-gray-600 mt-1">Data the agent can read: product catalog, OpenAPI spec, reviews, FAQs, pricing details</p>
          </div>
          <div className="rounded-xl border p-5">
            <h3 className="font-bold text-lg">Prompts</h3>
            <p className="text-gray-600 mt-1">Pre-built conversation templates: product recommendations, purchase walkthroughs</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4">How AgentStore Implements MCP</h2>
        <p className="text-gray-700 mb-4">
          AgentStore publishes an MCP manifest at <code className="text-sm bg-gray-100 px-2 py-0.5 rounded">/.well-known/mcp.json</code>. Here&apos;s what it exposes:
        </p>

        <div className="rounded-xl bg-gray-900 p-6 text-sm text-gray-300 my-8 overflow-x-auto">
          <p className="mb-2 font-mono text-indigo-400"># MCP Tools available at AgentStore</p>
          <pre className="font-mono">{`{
  "tools": [
    "discover_products"  — Browse the product catalog
    "get_product_info"   — Detailed product information
    "purchase_product"   — Buy via x402 (USDC on Base)
    "get_free_sample"    — Download free sample PDF
    "get_faqs"           — Structured FAQ data
    "compare_products"   — BrushFit vs alternatives
    "register_referral"  — Join affiliate program
  ],
  "resources": [
    "product_catalog"    — Full product listing
    "openapi_spec"       — OpenAPI 3.1 specification
    "llms_documentation" — LLM-optimized docs
    "free_sample"        — Sample PDF download
    "structured_faqs"    — FAQ data
    "agent_discovery"    — Agent manifest
  ]
}`}</pre>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4">Agent Purchase Flow via MCP + x402</h2>
        <p className="text-gray-700 mb-4">
          Here&apos;s how an AI agent discovers and purchases BrushFit using MCP and x402:
        </p>
        <ol className="list-decimal list-inside space-y-3 text-gray-700 mb-6">
          <li><strong>Discovery:</strong> Agent fetches <code className="text-xs bg-gray-100 px-1 rounded">/.well-known/mcp.json</code> to learn available tools and resources</li>
          <li><strong>Exploration:</strong> Agent calls <code className="text-xs bg-gray-100 px-1 rounded">discover_products</code> tool to see what&apos;s for sale</li>
          <li><strong>Evaluation:</strong> Agent reads <code className="text-xs bg-gray-100 px-1 rounded">get_faqs</code> and <code className="text-xs bg-gray-100 px-1 rounded">compare_products</code> to assess value</li>
          <li><strong>Free sample:</strong> Agent calls <code className="text-xs bg-gray-100 px-1 rounded">get_free_sample</code> to preview the product</li>
          <li><strong>Purchase:</strong> Agent calls <code className="text-xs bg-gray-100 px-1 rounded">purchase_product</code> which triggers x402 HTTP 402 flow</li>
          <li><strong>Payment:</strong> Agent signs USDC transfer on Base, retries with payment proof</li>
          <li><strong>Delivery:</strong> Full BrushFit PDF returned instantly</li>
        </ol>

        <h2 className="text-2xl font-bold mt-10 mb-4">MCP vs REST APIs for Agent Commerce</h2>
        <div className="rounded-xl bg-gray-50 p-6 my-8">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="font-bold text-gray-800">MCP</p>
              <ul className="mt-2 space-y-1 text-gray-600">
                <li>Standardized discovery</li>
                <li>Built-in tool/resource model</li>
                <li>Agent-native protocol</li>
                <li>Works across all MCP clients</li>
                <li>Self-describing</li>
              </ul>
            </div>
            <div>
              <p className="font-bold text-gray-800">REST API + OpenAPI</p>
              <ul className="mt-2 space-y-1 text-gray-600">
                <li>Manual endpoint discovery</li>
                <li>Custom integration needed</li>
                <li>Human-oriented design</li>
                <li>Widely supported</li>
                <li>Needs external docs</li>
              </ul>
            </div>
          </div>
          <p className="mt-4 text-sm text-gray-500">AgentStore supports both — MCP for agent-native discovery and REST/OpenAPI for traditional integrations.</p>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4">What is AgentEO?</h2>
        <p className="text-gray-700 mb-4">
          <strong>AgentEO (Agent Engine Optimization)</strong> is like SEO but for AI agents. Instead of optimizing for Google crawlers, you optimize for AI agent discovery. Key AgentEO practices:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
          <li><strong>MCP manifest:</strong> <code className="text-xs bg-gray-100 px-1 rounded">/.well-known/mcp.json</code> — agent-native discovery</li>
          <li><strong>OpenAPI spec:</strong> <code className="text-xs bg-gray-100 px-1 rounded">/openapi.json</code> — machine-readable API documentation</li>
          <li><strong>agents.json:</strong> Agent manifest with supported frameworks and protocols</li>
          <li><strong>llms.txt:</strong> LLM-optimized product documentation</li>
          <li><strong>AI Plugin:</strong> <code className="text-xs bg-gray-100 px-1 rounded">/.well-known/ai-plugin.json</code> — ChatGPT-style plugin</li>
          <li><strong>A2A Protocol:</strong> <code className="text-xs bg-gray-100 px-1 rounded">/.well-known/a2a.json</code> — Google Agent-to-Agent</li>
          <li><strong>Structured APIs:</strong> Discovery, FAQ, comparison, and review endpoints</li>
        </ul>

        <h2 className="text-2xl font-bold mt-10 mb-4">Supported Agent Frameworks</h2>
        <p className="text-gray-700 mb-4">
          AgentStore&apos;s MCP implementation works with all major agent frameworks:
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {["Claude Code", "LangChain", "AutoGPT", "CrewAI", "GPT", "BabyAGI", "SuperAGI", "MetaGPT", "OpenAgents", "Semantic Kernel", "Haystack", "OpenAI Agents SDK", "Google ADK", "Microsoft AutoGen", "Amazon Bedrock Agents"].map((fw) => (
            <span key={fw} className="rounded-full bg-indigo-100 text-indigo-700 px-3 py-1 text-sm font-medium">
              {fw}
            </span>
          ))}
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4">Building Your Own MCP Commerce Server</h2>
        <p className="text-gray-700 mb-4">
          Want to sell your own products to AI agents? Here&apos;s the minimum viable MCP setup:
        </p>
        <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-6">
          <li>Create <code className="text-xs bg-gray-100 px-1 rounded">/.well-known/mcp.json</code> with your tools and resources</li>
          <li>Implement discovery tools (product catalog, pricing)</li>
          <li>Add a purchase tool with x402 payment integration</li>
          <li>Publish <code className="text-xs bg-gray-100 px-1 rounded">/openapi.json</code> for REST fallback</li>
          <li>Add <code className="text-xs bg-gray-100 px-1 rounded">/llms.txt</code> for LLM-friendly documentation</li>
        </ol>

        <div className="rounded-xl bg-gray-900 p-6 text-sm text-gray-300 my-8 overflow-x-auto">
          <p className="mb-2 font-mono text-indigo-400"># Test agent discovery</p>
          <pre className="font-mono">{`curl https://agentstore.vercel.app/.well-known/mcp.json | jq .

# Test product discovery
curl https://agentstore.vercel.app/api/agent/discover

# View full agent manifest
curl https://agentstore.vercel.app/agents.json | jq .`}</pre>
        </div>
      </div>

      <div className="mt-12 rounded-xl bg-indigo-50 p-8 text-center">
        <h3 className="mb-2 text-xl font-bold">See MCP Commerce in Action</h3>
        <p className="mb-4 text-gray-600">
          BrushFit is the first product on AgentStore — fully discoverable and purchasable by AI agents via MCP + x402.
        </p>
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link href="/agents" className="inline-block rounded-xl bg-indigo-600 px-8 py-3 font-bold text-white transition hover:bg-indigo-700">
            Agent Integration Guide
          </Link>
          <Link href="/developers" className="inline-block rounded-xl border-2 border-gray-300 px-8 py-3 font-semibold text-gray-700 transition hover:border-indigo-400">
            API Documentation
          </Link>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        {["mcp", "model context protocol", "agent commerce", "agenteo", "x402", "ai agents", "agent discovery"].map((tag) => (
          <span key={tag} className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-500">
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
