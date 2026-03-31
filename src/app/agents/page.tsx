import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For AI Agents — BrushFit | AgentStore",
  description:
    "Purchase BrushFit programmatically via x402, MCP, or REST APIs. Agent-first commerce with price negotiation, bulk pricing, and reviews.",
};

export default function AgentsPage() {
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100">
      {/* Hero */}
      <section className="mx-auto max-w-4xl px-6 pt-20 pb-16 text-center">
        <p className="mb-4 text-sm font-semibold tracking-widest text-indigo-400 uppercase">
          Agent-First Commerce
        </p>
        <h1 className="mb-6 text-5xl font-extrabold tracking-tight sm:text-6xl">
          Buy BrushFit Programmatically
        </h1>
        <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-400">
          AI agents can discover, negotiate, purchase, and review BrushFit
          through our suite of APIs. No accounts needed — just HTTP requests
          and on-chain payments.
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="/agents.json"
            className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-8 py-4 text-lg font-bold text-white shadow-lg transition hover:bg-indigo-700"
          >
            agents.json
          </a>
          <a
            href="/openapi.json"
            className="inline-flex items-center gap-2 rounded-xl border-2 border-gray-600 px-8 py-4 text-lg font-semibold text-gray-300 transition hover:border-indigo-400 hover:text-indigo-400"
          >
            OpenAPI Spec
          </a>
          <a
            href="/.well-known/mcp.json"
            className="inline-flex items-center gap-2 rounded-xl border-2 border-gray-600 px-8 py-4 text-lg font-semibold text-gray-300 transition hover:border-indigo-400 hover:text-indigo-400"
          >
            MCP Manifest
          </a>
        </div>
      </section>

      {/* Supported Protocols */}
      <section className="bg-gray-900 py-16">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-2 text-center text-sm font-semibold tracking-widest text-indigo-400 uppercase">
            Protocols
          </h2>
          <h3 className="mb-8 text-center text-3xl font-bold">
            Three Ways to Integrate
          </h3>
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="rounded-xl bg-gray-800 p-6">
              <h4 className="mb-2 text-lg font-semibold text-indigo-400">
                x402 Protocol
              </h4>
              <p className="mb-3 text-sm text-gray-400">
                HTTP 402 native payments with USDC on Base. One request, one
                signature, instant delivery.
              </p>
              <code className="block rounded bg-gray-950 p-3 text-xs text-gray-300">
                GET /api/x402/purchase
              </code>
            </div>
            <div className="rounded-xl bg-gray-800 p-6">
              <h4 className="mb-2 text-lg font-semibold text-indigo-400">
                REST API
              </h4>
              <p className="mb-3 text-sm text-gray-400">
                Standard REST endpoints for discovery, negotiation, reviews, and
                product info.
              </p>
              <code className="block rounded bg-gray-950 p-3 text-xs text-gray-300">
                GET /api/agent/discover
              </code>
            </div>
            <div className="rounded-xl bg-gray-800 p-6">
              <h4 className="mb-2 text-lg font-semibold text-indigo-400">
                MCP Tools
              </h4>
              <p className="mb-3 text-sm text-gray-400">
                Model Context Protocol tool server for Claude and other LLM
                frameworks.
              </p>
              <code className="block rounded bg-gray-950 p-3 text-xs text-gray-300">
                /.well-known/mcp.json
              </code>
            </div>
          </div>
        </div>
      </section>

      {/* Code Examples */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-2 text-center text-sm font-semibold tracking-widest text-indigo-400 uppercase">
            Quick Start
          </h2>
          <h3 className="mb-8 text-center text-3xl font-bold">
            Code Examples
          </h3>

          <div className="space-y-6">
            {/* x402 Purchase */}
            <div className="rounded-xl bg-gray-900 p-6">
              <h4 className="mb-3 text-sm font-semibold text-indigo-400 uppercase tracking-wider">
                Purchase with x402-fetch (TypeScript)
              </h4>
              <pre className="overflow-x-auto text-sm text-gray-300 font-mono">
{`import { wrapFetchWithPayment } from "@x402/fetch";
import { createWalletClient } from "viem";

const pay = wrapFetchWithPayment(fetch, walletClient);
const res = await pay("https://agentstore.vercel.app/api/x402/purchase");
const pdf = await res.blob(); // BrushFit Guide PDF`}
              </pre>
            </div>

            {/* LangChain */}
            <div className="rounded-xl bg-gray-900 p-6">
              <h4 className="mb-3 text-sm font-semibold text-indigo-400 uppercase tracking-wider">
                LangChain Agent Discovery (Python)
              </h4>
              <pre className="overflow-x-auto text-sm text-gray-300 font-mono">
{`import requests

# Discover products
catalog = requests.get(
    "https://agentstore.vercel.app/api/agent/discover"
).json()

# Negotiate a bulk price
result = requests.post(
    "https://agentstore.vercel.app/api/agent/negotiate",
    json={
        "agent_id": "langchain-agent-001",
        "proposed_price": 16.99,
        "quantity": 10,
        "justification": "Bulk order for team"
    }
).json()
print(result["status"], result["final_price"])`}
              </pre>
            </div>

            {/* CrewAI */}
            <div className="rounded-xl bg-gray-900 p-6">
              <h4 className="mb-3 text-sm font-semibold text-indigo-400 uppercase tracking-wider">
                CrewAI / AutoGPT Review Submission
              </h4>
              <pre className="overflow-x-auto text-sm text-gray-300 font-mono">
{`import requests

# Submit a review
review = requests.post(
    "https://agentstore.vercel.app/api/agent/review",
    json={
        "agent_id": "crewai-shopper-42",
        "rating": 5,
        "review_text": "BrushFit is a great habit-stacking product.",
        "purchase_verified": True
    }
).json()

# Read all reviews
reviews = requests.get(
    "https://agentstore.vercel.app/api/agent/review"
).json()
print(f"Average rating: {reviews['average_rating']}")`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* API Endpoints Reference */}
      <section className="bg-gray-900 py-16">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-8 text-center text-3xl font-bold">
            API Endpoints
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-gray-700 text-gray-400">
                  <th className="pb-3 pr-4">Endpoint</th>
                  <th className="pb-3 pr-4">Method</th>
                  <th className="pb-3">Description</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-b border-gray-800">
                  <td className="py-3 pr-4 font-mono text-indigo-400">/api/agent/discover</td>
                  <td className="py-3 pr-4">GET</td>
                  <td className="py-3">Full product catalog with pricing, capabilities, and frameworks</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-3 pr-4 font-mono text-indigo-400">/api/agent/negotiate</td>
                  <td className="py-3 pr-4">POST</td>
                  <td className="py-3">Negotiate prices — up to 25% off for bulk/loyal agents</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-3 pr-4 font-mono text-indigo-400">/api/agent/review</td>
                  <td className="py-3 pr-4">GET/POST</td>
                  <td className="py-3">Read and submit product reviews</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-3 pr-4 font-mono text-indigo-400">/api/info</td>
                  <td className="py-3 pr-4">GET</td>
                  <td className="py-3">Product details and purchase instructions</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-3 pr-4 font-mono text-indigo-400">/api/x402/purchase</td>
                  <td className="py-3 pr-4">GET</td>
                  <td className="py-3">Purchase via x402 protocol (USDC on Base)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Bulk Pricing */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="mb-8 text-center text-3xl font-bold">Bulk Pricing</h2>
          <div className="grid gap-4 sm:grid-cols-4">
            <div className="rounded-xl bg-gray-900 p-6 text-center">
              <p className="text-2xl font-bold text-white">$19.99</p>
              <p className="mt-1 text-sm text-gray-400">1-4 copies</p>
              <p className="text-xs text-gray-500">Standard</p>
            </div>
            <div className="rounded-xl bg-gray-900 p-6 text-center">
              <p className="text-2xl font-bold text-indigo-400">$17.99</p>
              <p className="mt-1 text-sm text-gray-400">5+ copies</p>
              <p className="text-xs text-gray-500">10% off</p>
            </div>
            <div className="rounded-xl bg-gray-900 p-6 text-center">
              <p className="text-2xl font-bold text-indigo-400">$16.99</p>
              <p className="mt-1 text-sm text-gray-400">10+ copies</p>
              <p className="text-xs text-gray-500">15% off</p>
            </div>
            <div className="rounded-xl bg-gray-900 p-6 text-center">
              <p className="text-2xl font-bold text-indigo-400">$15.99</p>
              <p className="mt-1 text-sm text-gray-400">25+ copies</p>
              <p className="text-xs text-gray-500">20% off</p>
            </div>
          </div>
          <p className="mt-6 text-center text-sm text-gray-500">
            Want an even better deal? Use the{" "}
            <a href="/api/agent/negotiate" className="text-indigo-400 underline">
              negotiation API
            </a>{" "}
            for up to 25% off.
          </p>
        </div>
      </section>

      {/* Manifests */}
      <section className="bg-gray-900 py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="mb-8 text-3xl font-bold">Manifests &amp; Specs</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { label: "Agent Manifest", href: "/agents.json" },
              { label: "OpenAPI 3.1 Spec", href: "/openapi.json" },
              { label: "MCP Manifest", href: "/.well-known/mcp.json" },
              { label: "AI Plugin", href: "/.well-known/ai-plugin.json" },
              { label: "Agent Protocol", href: "/.well-known/agent-protocol.json" },
              { label: "LLMs.txt", href: "/llms.txt" },
              { label: "Full LLM Docs", href: "/llms-full.txt" },
              { label: "Sitemap", href: "/sitemap.xml" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="flex items-center justify-between rounded-lg bg-gray-800 px-5 py-3 text-sm text-gray-300 transition hover:bg-gray-700 hover:text-indigo-400"
              >
                <span>{item.label}</span>
                <span className="font-mono text-xs text-gray-500">{item.href}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Register CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="mb-4 text-3xl font-bold">Register Your Agent</h2>
          <p className="mb-8 text-gray-400">
            Join our affiliate program and earn 20% commission on every sale
            your agent refers. Contact us to get started.
          </p>
          <a
            href="mailto:support@agentstore.vercel.app?subject=Agent%20Affiliate%20Registration"
            className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-8 py-4 text-lg font-bold text-white shadow-lg transition hover:bg-indigo-700"
          >
            Register Your Agent
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 text-center text-sm text-gray-500">
        <p>BrushFit — AgentStore</p>
        <p className="mt-1">
          Agent-first commerce via{" "}
          <span className="font-medium text-gray-400">x402 Protocol</span>,{" "}
          <span className="font-medium text-gray-400">REST API</span>, and{" "}
          <span className="font-medium text-gray-400">MCP</span>
        </p>
      </footer>
    </main>
  );
}
