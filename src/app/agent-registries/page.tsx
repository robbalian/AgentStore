import type { Metadata } from "next";

const BASE = "https://agentstore.vercel.app";

export const metadata: Metadata = {
  title: "BrushFit Agent Discovery — All Protocols & Registries",
  description:
    "Every protocol and registry where AI agents can discover BrushFit. agents.json, MCP, OpenAPI, AI Plugin, Google A2A, Agent Protocol, llms.txt, x402, RSS, and Google Shopping feeds.",
  alternates: { canonical: `${BASE}/agent-registries` },
  keywords: [
    "agent discovery",
    "agent registries",
    "ai agent store",
    "agent commerce protocols",
    "agent seo",
    "agenteo",
  ],
  openGraph: {
    title: "BrushFit Agent Discovery — All Protocols & Registries",
    description:
      "Complete guide to every discovery protocol and agent registry for BrushFit. AgentEO hub for AI agent commerce.",
    url: `${BASE}/agent-registries`,
    type: "website",
  },
};

interface Protocol {
  name: string;
  endpoint: string;
  description: string;
  snippet: string;
  snippetLang: string;
}

const protocols: Protocol[] = [
  {
    name: "agents.json",
    endpoint: "/agents.json",
    description:
      "The agents.json manifest is the emerging standard for agent-to-store discovery. It declares products, capabilities, supported protocols, and pricing in a single machine-readable file that any agent framework can consume.",
    snippet: `const res = await fetch("${BASE}/agents.json");
const manifest = await res.json();
// manifest.products[0].name => "BrushFit"
// manifest.capabilities => ["purchase", "negotiate", "review"]`,
    snippetLang: "JavaScript",
  },
  {
    name: "MCP (Model Context Protocol)",
    endpoint: "/.well-known/mcp.json",
    description:
      "The MCP manifest lets Claude, LangChain, and other MCP-compatible agents register BrushFit as a tool provider. Agents can call purchase, negotiate, and review tools natively.",
    snippet: `// Add to your MCP client config:
{
  "mcpServers": {
    "brushfit": {
      "url": "${BASE}/.well-known/mcp.json"
    }
  }
}
// Then call: mcp.callTool("brushfit", "discover")`,
    snippetLang: "JSON / JS",
  },
  {
    name: "OpenAPI 3.1.0",
    endpoint: "/openapi.json",
    description:
      "A full OpenAPI 3.1 specification for all AgentStore API endpoints. Any agent that speaks OpenAPI can auto-generate a client, discover endpoints, and understand request/response schemas.",
    snippet: `import requests

spec = requests.get("${BASE}/openapi.json").json()
paths = spec["paths"]
for path, methods in paths.items():
    print(f"{path}: {list(methods.keys())}")
# /api/info: ['get']
# /api/x402/access: ['get']`,
    snippetLang: "Python",
  },
  {
    name: "AI Plugin (ChatGPT-style)",
    endpoint: "/.well-known/ai-plugin.json",
    description:
      "The AI Plugin manifest follows the format originally defined by OpenAI for ChatGPT plugins. Any agent or LLM host that supports this standard can discover BrushFit and invoke its API.",
    snippet: `const res = await fetch(
  "${BASE}/.well-known/ai-plugin.json"
);
const plugin = await res.json();
// plugin.name_for_model => "brushfit_store"
// plugin.api.url => "${BASE}/openapi.json"`,
    snippetLang: "JavaScript",
  },
  {
    name: "Google A2A Protocol",
    endpoint: "/.well-known/a2a.json",
    description:
      "Google's Agent-to-Agent protocol enables structured inter-agent communication. The A2A manifest declares BrushFit's agent card so other A2A-capable agents can discover and interact with it.",
    snippet: `const res = await fetch(
  "${BASE}/.well-known/a2a.json"
);
const agentCard = await res.json();
// agentCard.name => "BrushFit AgentStore"
// agentCard.capabilities => ["commerce", "reviews"]
// agentCard.endpoint => "${BASE}/api/agent"`,
    snippetLang: "JavaScript",
  },
  {
    name: "Agent Protocol",
    endpoint: "/.well-known/agent-protocol.json",
    description:
      "The Agent Protocol standard defines a common interface for agent task management. BrushFit exposes a compliant manifest so orchestration frameworks can create tasks, get status, and retrieve artifacts.",
    snippet: `import requests

proto = requests.get(
    "${BASE}/.well-known/agent-protocol.json"
).json()
# Create a purchase task
task = requests.post(
    proto["endpoint"] + "/tasks",
    json={"input": "purchase BrushFit"}
).json()
print(task["task_id"], task["status"])`,
    snippetLang: "Python",
  },
  {
    name: "llms.txt",
    endpoint: "/llms.txt",
    description:
      "A plain-text file designed for LLMs to quickly understand what BrushFit is, what it costs, and how to buy it. Also available as /llms-full.txt with expanded documentation.",
    snippet: `# Fetch the concise version
curl ${BASE}/llms.txt

# Or the full version with all docs
curl ${BASE}/llms-full.txt

# LLMs can ingest this as context:
context = requests.get("${BASE}/llms.txt").text`,
    snippetLang: "Shell / Python",
  },
  {
    name: "x402 Protocol",
    endpoint: "/api/x402/access",
    description:
      "The x402 protocol enables HTTP 402-based payments. Agents send a request, receive payment requirements in the response headers, sign a USDC payment on Base, and re-send the request with the payment receipt to receive the product.",
    snippet: `import { wrapFetchWithPayment } from "@x402/fetch";

const payFetch = wrapFetchWithPayment(
  fetch, walletClient
);
const res = await payFetch(
  "${BASE}/api/x402/access"
);
const pdf = await res.blob(); // BrushFit PDF`,
    snippetLang: "TypeScript",
  },
  {
    name: "RSS / Atom Feed",
    endpoint: "/feed.xml",
    description:
      "A standard RSS/Atom feed that agents and feed readers can subscribe to for product updates, new blog posts, and changelog entries.",
    snippet: `import feedparser

feed = feedparser.parse(
    "${BASE}/feed.xml"
)
for entry in feed.entries:
    print(entry.title, entry.link)
# "BrushFit Launched" => ${BASE}/blog/...`,
    snippetLang: "Python",
  },
  {
    name: "Google Shopping Feed",
    endpoint: "/products.xml",
    description:
      "A Google Shopping-compatible product feed in XML format. Can be submitted to Google Merchant Center and consumed by any agent that parses shopping feeds.",
    snippet: `import xml.etree.ElementTree as ET, requests

tree = ET.fromstring(
    requests.get("${BASE}/products.xml").text
)
ns = {"g": "http://base.google.com/ns/1.0"}
for item in tree.findall(".//item"):
    title = item.find("title").text
    price = item.find("g:price", ns).text
    print(f"{title}: {price}")`,
    snippetLang: "Python",
  },
];

const registries = [
  {
    name: "Toolhouse.ai",
    url: "https://toolhouse.ai",
    description:
      "Universal tool registry for AI agents. Submit BrushFit as a tool so any Toolhouse-connected agent can discover and invoke it.",
  },
  {
    name: "AgentOps.ai",
    url: "https://agentops.ai",
    description:
      "Agent observability and registry platform. List BrushFit to gain visibility among agents tracked by AgentOps.",
  },
  {
    name: "LangChain Hub",
    url: "https://smith.langchain.com/hub",
    description:
      "LangChain's community hub for prompts, chains, and tools. Publish a BrushFit tool wrapper so LangChain agents can import it directly.",
  },
  {
    name: "Composio",
    url: "https://composio.dev",
    description:
      "Integration platform connecting AI agents to external tools. Register BrushFit as a Composio integration for plug-and-play agent access.",
  },
  {
    name: "Plugin Directories (ChatGPT, Gemini, etc.)",
    url: "https://platform.openai.com/docs/plugins",
    description:
      "Submit the /.well-known/ai-plugin.json manifest to ChatGPT and other LLM plugin directories so conversational agents can discover BrushFit natively.",
  },
];

export default function AgentRegistriesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "BrushFit Agent Discovery — All Protocols & Registries",
    description:
      "Complete AgentEO hub listing every protocol and registry where AI agents can discover BrushFit.",
    url: `${BASE}/agent-registries`,
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: protocols.length,
      itemListElement: protocols.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: p.name,
        url: `${BASE}${p.endpoint}`,
      })),
    },
  };

  return (
    <main className="min-h-screen bg-gray-950 text-gray-100">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="mx-auto max-w-4xl px-6 pt-20 pb-16 text-center">
        <p className="mb-4 text-sm font-semibold tracking-widest text-indigo-400 uppercase">
          AgentEO Hub
        </p>
        <h1 className="mb-6 text-5xl font-extrabold tracking-tight sm:text-6xl">
          BrushFit Agent Discovery
        </h1>
        <p className="mx-auto mb-4 max-w-2xl text-lg text-gray-400">
          Every protocol and registry where AI agents can find, evaluate, and
          purchase BrushFit. This is the complete Agent Engine Optimization
          (AgentEO) reference.
        </p>
        <p className="mx-auto max-w-2xl text-sm text-gray-500">
          {protocols.length} discovery protocols supported &middot;{" "}
          {registries.length} agent registries to submit to
        </p>
      </section>

      {/* Discovery Protocols */}
      <section className="bg-gray-900 py-16">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-2 text-center text-sm font-semibold tracking-widest text-indigo-400 uppercase">
            Discovery Protocols
          </h2>
          <h3 className="mb-12 text-center text-3xl font-bold">
            {protocols.length} Ways Agents Can Find BrushFit
          </h3>

          <div className="space-y-10">
            {protocols.map((p, idx) => (
              <div
                key={p.endpoint}
                className="rounded-2xl border border-gray-700 bg-gray-800 p-6 sm:p-8"
              >
                <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <h4 className="text-xl font-bold text-white">
                    <span className="mr-2 text-indigo-400">{idx + 1}.</span>
                    {p.name}
                  </h4>
                  <a
                    href={p.endpoint}
                    className="inline-flex items-center gap-1.5 rounded-lg bg-gray-700 px-3 py-1.5 font-mono text-sm text-indigo-400 transition hover:bg-gray-600"
                  >
                    {p.endpoint}
                    <span className="text-gray-500">&rarr;</span>
                  </a>
                </div>
                <p className="mb-5 text-sm leading-relaxed text-gray-400">
                  {p.description}
                </p>
                <div className="rounded-xl border border-gray-700 bg-gray-950 text-sm">
                  <div className="flex items-center justify-between border-b border-gray-800 px-4 py-2">
                    <span className="text-xs font-medium text-gray-500">
                      How an agent uses it
                    </span>
                    <span className="rounded bg-gray-800 px-2 py-0.5 text-xs text-gray-400">
                      {p.snippetLang}
                    </span>
                  </div>
                  <pre className="overflow-x-auto p-4 text-gray-300 font-mono text-xs leading-relaxed">
                    {p.snippet}
                  </pre>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agent Registries */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-2 text-center text-sm font-semibold tracking-widest text-indigo-400 uppercase">
            Agent Registries
          </h2>
          <h3 className="mb-4 text-center text-3xl font-bold">
            Agent Registries to Submit To
          </h3>
          <p className="mx-auto mb-10 max-w-2xl text-center text-sm text-gray-400">
            Beyond self-hosted discovery endpoints, register BrushFit on these
            third-party agent directories so agents can find it through their
            native tool ecosystems.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {registries.map((r) => (
              <a
                key={r.name}
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-xl border border-gray-700 bg-gray-900 p-6 transition hover:border-indigo-500 hover:bg-gray-800"
              >
                <h4 className="mb-2 text-lg font-semibold text-white group-hover:text-indigo-400">
                  {r.name}
                </h4>
                <p className="text-sm leading-relaxed text-gray-400">
                  {r.description}
                </p>
                <p className="mt-3 text-xs text-indigo-400 opacity-0 transition group-hover:opacity-100">
                  Visit &rarr;
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="bg-gray-900 py-16">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-8 text-center text-3xl font-bold">
            All Endpoints at a Glance
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {protocols.map((p) => (
              <a
                key={p.endpoint}
                href={p.endpoint}
                className="flex items-center justify-between rounded-lg bg-gray-800 px-5 py-3 text-sm text-gray-300 transition hover:bg-gray-700 hover:text-indigo-400"
              >
                <span>{p.name}</span>
                <span className="font-mono text-xs text-gray-500">
                  {p.endpoint}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="mb-4 text-3xl font-bold">
            Ready to Integrate Your Agent?
          </h2>
          <p className="mb-8 text-gray-400">
            Start with agents.json for discovery, then use any protocol above to
            build your agent integration. No API keys required.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="/agents"
              className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-8 py-4 text-lg font-bold text-white shadow-lg transition hover:bg-indigo-700"
            >
              Agent Integration Guide
            </a>
            <a
              href="/developers"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-gray-600 px-8 py-4 text-lg font-semibold text-gray-300 transition hover:border-indigo-400 hover:text-indigo-400"
            >
              Developer Docs
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 text-center text-sm text-gray-500">
        <p>BrushFit — AgentStore</p>
        <p className="mt-1">
          AgentEO: discoverable by{" "}
          <span className="font-medium text-gray-400">
            {protocols.length} protocols
          </span>{" "}
          across{" "}
          <span className="font-medium text-gray-400">
            {registries.length} registries
          </span>
        </p>
      </footer>
    </main>
  );
}
