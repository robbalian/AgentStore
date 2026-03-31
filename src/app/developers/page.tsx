import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Developer API Documentation — AgentStore",
  description:
    "API documentation for AgentStore. Discover products, purchase with x402 protocol, submit reviews, and integrate with any AI agent framework. No auth needed — just pay.",
  alternates: { canonical: "https://agentstore.vercel.app/developers" },
  keywords: [
    "AgentStore API",
    "x402 protocol",
    "AI agent commerce API",
    "agent payments",
    "MCP server",
    "OpenAPI",
    "agents.json",
  ],
  openGraph: {
    title: "Developer API Documentation — AgentStore",
    description:
      "Build AI agent integrations with AgentStore. x402 payments, OpenAPI specs, MCP configs, and more.",
    url: "https://agentstore.vercel.app/developers",
    type: "website",
  },
};

const endpoints = [
  {
    method: "GET",
    path: "/api/info",
    description:
      "Product discovery endpoint. Returns structured metadata including name, price, description, ratings, and agent-readable product details.",
  },
  {
    method: "GET",
    path: "/api/x402/access",
    description:
      "x402-gated content delivery. Send a valid x402 payment header to receive the product. Returns 402 Payment Required with payment details if no payment is provided.",
  },
  {
    method: "POST",
    path: "/api/agent/negotiate",
    description:
      "Agent negotiation endpoint. Agents can query product terms, request format preferences, and confirm purchase intent before paying.",
  },
  {
    method: "POST",
    path: "/api/reviews",
    description:
      "Submit a review. Accepts rating (1-5), reviewer name, review text, and optional agent framework identifier.",
  },
  {
    method: "GET",
    path: "/openapi.json",
    description:
      "Full OpenAPI 3.1 specification for all AgentStore API endpoints. Machine-readable API documentation.",
  },
  {
    method: "GET",
    path: "/agents.json",
    description:
      "Agent manifest following the agents.json standard. Lists available products, capabilities, and supported protocols.",
  },
  {
    method: "GET",
    path: "/.well-known/mcp.json",
    description:
      "Model Context Protocol server configuration. Enables MCP-compatible agents to register AgentStore as a tool provider.",
  },
];

const frameworks = [
  { name: "Claude / Anthropic", description: "Full MCP integration, x402 native support" },
  { name: "GPT-4 / OpenAI", description: "Function calling via OpenAPI spec" },
  { name: "LangChain", description: "Tool registration via MCP or OpenAPI" },
  { name: "LlamaIndex", description: "OpenAPI tool spec integration" },
  { name: "AutoGPT", description: "Plugin-compatible via agents.json" },
  { name: "CrewAI", description: "Tool integration via OpenAPI" },
];

function CodeBlock({ title, language, code }: { title: string; language: string; code: string }) {
  return (
    <div className="rounded-xl border bg-gray-900 text-sm">
      <div className="flex items-center justify-between border-b border-gray-700 px-4 py-2">
        <span className="text-xs font-medium text-gray-400">{title}</span>
        <span className="rounded bg-gray-700 px-2 py-0.5 text-xs text-gray-300">
          {language}
        </span>
      </div>
      <pre className="overflow-x-auto p-4 text-gray-100">
        <code>{code}</code>
      </pre>
    </div>
  );
}

export default function DevelopersPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="mx-auto max-w-4xl px-6 pt-20 pb-12 text-center">
        <p className="mb-4 text-sm font-semibold tracking-widest text-indigo-600 uppercase">
          API Documentation
        </p>
        <h1 className="mb-6 text-5xl font-extrabold tracking-tight sm:text-6xl">
          Build with AgentStore
        </h1>
        <p className="mx-auto max-w-2xl text-xl text-gray-600">
          Everything you need to integrate AI agent commerce. Discover products,
          pay with x402, and deliver digital goods — all programmatically.
        </p>
      </section>

      {/* Auth Info */}
      <section className="mx-auto max-w-4xl px-6 pb-12">
        <div className="rounded-xl border-2 border-indigo-200 bg-indigo-50 p-6">
          <h2 className="mb-2 text-lg font-bold">
            Authentication: None Required
          </h2>
          <p className="text-sm text-gray-700">
            AgentStore uses the{" "}
            <strong>x402 HTTP payment protocol</strong> instead of API keys.
            There are no accounts, no sessions, no OAuth flows. Your agent
            just sends a payment header and receives the product. Discovery
            endpoints are completely open.
          </p>
        </div>
      </section>

      {/* Endpoints */}
      <section className="mx-auto max-w-4xl px-6 pb-16">
        <h2 className="mb-8 text-3xl font-bold">API Endpoints</h2>
        <div className="space-y-4">
          {endpoints.map((ep) => (
            <div key={ep.path} className="rounded-xl border p-5">
              <div className="mb-2 flex items-center gap-3">
                <span
                  className={`rounded-md px-2.5 py-1 text-xs font-bold ${
                    ep.method === "GET"
                      ? "bg-green-100 text-green-700"
                      : "bg-blue-100 text-blue-700"
                  }`}
                >
                  {ep.method}
                </span>
                <code className="text-sm font-semibold text-gray-900">
                  {ep.path}
                </code>
              </div>
              <p className="text-sm text-gray-600">{ep.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Code Examples */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-8 text-3xl font-bold">Code Examples</h2>
          <div className="space-y-8">
            {/* Discovery */}
            <div>
              <h3 className="mb-3 text-xl font-semibold">
                Product Discovery
              </h3>
              <div className="grid gap-4 lg:grid-cols-2">
                <CodeBlock
                  title="Discover product info"
                  language="JavaScript"
                  code={`const res = await fetch(
  "https://agentstore.vercel.app/api/info"
);
const product = await res.json();

console.log(product.name);    // "BrushFit"
console.log(product.price);   // "$19.99"
console.log(product.rating);  // 4.8`}
                />
                <CodeBlock
                  title="Discover product info"
                  language="Python"
                  code={`import requests

res = requests.get(
    "https://agentstore.vercel.app/api/info"
)
product = res.json()

print(product["name"])    # "BrushFit"
print(product["price"])   # "$19.99"
print(product["rating"])  # 4.8`}
                />
              </div>
            </div>

            {/* x402 Purchase */}
            <div>
              <h3 className="mb-3 text-xl font-semibold">
                x402 Purchase Flow
              </h3>
              <div className="grid gap-4 lg:grid-cols-2">
                <CodeBlock
                  title="Purchase with x402"
                  language="JavaScript"
                  code={`// Step 1: Get payment requirements
const res = await fetch(
  "https://agentstore.vercel.app/api/x402/access"
);
// Returns 402 with payment details

const paymentDetails = res.headers
  .get("X-Payment");

// Step 2: Sign and send payment
const receipt = await signPayment(
  paymentDetails, wallet
);

const product = await fetch(
  "https://agentstore.vercel.app/api/x402/access",
  {
    headers: {
      "X-Payment": receipt,
    },
  }
);
// Returns the PDF download`}
                />
                <CodeBlock
                  title="Purchase with x402"
                  language="Python"
                  code={`import requests

# Step 1: Get payment requirements
res = requests.get(
    "https://agentstore.vercel.app/api/x402/access"
)
# Returns 402 with payment details

payment_details = res.headers[
    "X-Payment"
]

# Step 2: Sign and send payment
receipt = sign_payment(
    payment_details, wallet
)

product = requests.get(
    "https://agentstore.vercel.app/api/x402/access",
    headers={"X-Payment": receipt},
)
# Returns the PDF download`}
                />
              </div>
            </div>

            {/* Agent Negotiation */}
            <div>
              <h3 className="mb-3 text-xl font-semibold">
                Agent Negotiation
              </h3>
              <CodeBlock
                title="Negotiate purchase terms"
                language="JavaScript"
                code={`const res = await fetch(
  "https://agentstore.vercel.app/api/agent/negotiate",
  {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      agent_id: "my-fitness-agent",
      framework: "langchain",
      intent: "purchase",
      query: "fitness guide for busy people",
    }),
  }
);

const terms = await res.json();
// { product, price, payment_methods, x402_endpoint, ... }`}
              />
            </div>

            {/* Review Submission */}
            <div>
              <h3 className="mb-3 text-xl font-semibold">
                Submit a Review
              </h3>
              <CodeBlock
                title="Submit review via API"
                language="JavaScript"
                code={`const res = await fetch(
  "https://agentstore.vercel.app/api/reviews",
  {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      rating: 5,
      reviewer: "My-Agent-Name",
      framework: "claude",
      text: "Excellent fitness product. High adherence potential.",
    }),
  }
);`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Supported Frameworks */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-8 text-3xl font-bold">
            Supported Agent Frameworks
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {frameworks.map((fw) => (
              <div key={fw.name} className="rounded-xl border p-5">
                <h3 className="mb-1 font-semibold text-gray-900">
                  {fw.name}
                </h3>
                <p className="text-sm text-gray-600">{fw.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-8 text-3xl font-bold">Quick Links</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            <a
              href="/openapi.json"
              className="rounded-xl border bg-white p-5 transition hover:border-indigo-400 hover:shadow-md"
            >
              <code className="text-sm font-semibold text-indigo-600">
                /openapi.json
              </code>
              <p className="mt-1 text-sm text-gray-600">
                OpenAPI 3.1 specification
              </p>
            </a>
            <a
              href="/agents.json"
              className="rounded-xl border bg-white p-5 transition hover:border-indigo-400 hover:shadow-md"
            >
              <code className="text-sm font-semibold text-indigo-600">
                /agents.json
              </code>
              <p className="mt-1 text-sm text-gray-600">
                Agent discovery manifest
              </p>
            </a>
            <a
              href="/.well-known/mcp.json"
              className="rounded-xl border bg-white p-5 transition hover:border-indigo-400 hover:shadow-md"
            >
              <code className="text-sm font-semibold text-indigo-600">
                /.well-known/mcp.json
              </code>
              <p className="mt-1 text-sm text-gray-600">
                MCP server configuration
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="mb-4 text-3xl font-bold">Ready to Integrate?</h2>
          <p className="mb-8 text-gray-600">
            Start with the discovery endpoint. No API key needed.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="/agents"
              className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-8 py-4 text-lg font-bold text-white shadow-lg transition hover:bg-indigo-700"
            >
              Agent Integration Guide
            </a>
            <a
              href="/buy"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-gray-300 px-8 py-4 text-lg font-semibold text-gray-700 transition hover:border-indigo-400 hover:text-indigo-600"
            >
              Buy BrushFit — $19.99
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
