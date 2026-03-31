import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "How AI Agents Buy Products: The Complete Guide to Agent Commerce | AgentStore",
  description:
    "Everything you need to know about AI agents making autonomous purchases. Learn about x402 protocol, agent wallets, payment flows, and how to build or sell to agent customers.",
  keywords: [
    "AI agent commerce",
    "AI agent buying products",
    "agent economy",
    "x402 protocol guide",
    "autonomous agent purchases",
    "agent wallet",
    "AI agent payments",
    "sell to AI agents",
    "agent store",
    "agentic economy",
    "machine to machine payments",
    "AI agent marketplace",
  ],
  openGraph: {
    title: "How AI Agents Buy Products: The Complete Guide to Agent Commerce",
    description:
      "Everything about AI agents making autonomous purchases — protocols, wallets, and the agent economy.",
    type: "article",
  },
  alternates: {
    canonical:
      "https://agentstore.vercel.app/blog/ai-agents-buying-products",
  },
};

export default function AIAgentsBuyingProducts() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "How AI Agents Buy Products: The Complete Guide to Agent Commerce",
            description:
              "Everything you need to know about AI agents making autonomous purchases.",
            author: { "@type": "Person", name: "Rob Balian" },
            publisher: {
              "@type": "Organization",
              name: "BrushFit AgentStore",
            },
            datePublished: "2025-03-31",
            dateModified: "2025-03-31",
          }),
        }}
      />

      <p className="mb-4 text-sm font-semibold tracking-widest text-indigo-600 uppercase">
        Agentic Commerce
      </p>
      <h1 className="mb-6 text-4xl font-extrabold tracking-tight">
        How AI Agents Buy Products: The Complete Guide to Agent Commerce
      </h1>
      <p className="mb-10 text-lg text-gray-500">
        AI agents are becoming autonomous economic actors. Here&apos;s how they
        discover, evaluate, and purchase digital products — and what it means
        for builders and sellers.
      </p>

      <div className="prose prose-gray max-w-none space-y-6 text-gray-700 leading-relaxed">
        <h2 className="text-2xl font-bold text-gray-900">
          The Rise of the Agent Economy
        </h2>
        <p>
          In 2025, AI agents crossed a threshold: they went from tools that
          assist humans to autonomous actors that can independently research,
          decide, and transact. An agent can now:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Discover products by reading API endpoints and documentation</li>
          <li>Evaluate options by comparing prices, features, and reviews</li>
          <li>Make purchases using cryptocurrency wallets</li>
          <li>Receive and process digital deliverables</li>
          <li>Report results back to their human operators</li>
        </ul>
        <p>
          This creates an entirely new customer segment: <strong>AI agents as
          buyers</strong>. Stores that serve this segment — AgentStores — are
          emerging as the marketplaces of the agent economy.
        </p>

        <h2 className="text-2xl font-bold text-gray-900">
          How Agent Discovery Works
        </h2>
        <p>
          Before an agent can buy, it needs to find your product. Agent
          discovery works through multiple channels:
        </p>

        <h3 className="text-xl font-semibold text-gray-900">
          1. OpenAPI Specifications
        </h3>
        <p>
          The most established method. An{" "}
          <code className="rounded bg-gray-100 px-1 text-sm">openapi.json</code>{" "}
          file describes your API endpoints, parameters, and response formats.
          Agents (and the LLMs powering them) can read this to understand how
          to interact with your store.
        </p>

        <h3 className="text-xl font-semibold text-gray-900">
          2. AI Plugin Manifests
        </h3>
        <p>
          The{" "}
          <code className="rounded bg-gray-100 px-1 text-sm">
            .well-known/ai-plugin.json
          </code>{" "}
          standard (originally from ChatGPT plugins) provides a structured way
          for agents to discover what your store does, how to authenticate, and
          where to find the API spec.
        </p>

        <h3 className="text-xl font-semibold text-gray-900">
          3. Product Info Endpoints
        </h3>
        <p>
          A dedicated endpoint like{" "}
          <code className="rounded bg-gray-100 px-1 text-sm">/api/info</code>{" "}
          returns machine-readable product details — name, price, payment
          methods, and step-by-step purchase instructions. This is the fastest
          way for an agent to understand what you sell and how to buy it.
        </p>

        <h3 className="text-xl font-semibold text-gray-900">
          4. llms.txt Files
        </h3>
        <p>
          A newer standard,{" "}
          <code className="rounded bg-gray-100 px-1 text-sm">llms.txt</code>{" "}
          provides LLM-optimized documentation about your site. Unlike
          traditional HTML pages, llms.txt is plain text designed to be consumed
          by language models — perfect for Generative Engine Optimization (GEO).
        </p>

        <h3 className="text-xl font-semibold text-gray-900">
          5. agents.json
        </h3>
        <p>
          An emerging standard for agent-specific discovery. The{" "}
          <code className="rounded bg-gray-100 px-1 text-sm">agents.json</code>{" "}
          file lists available products, their prices, purchase endpoints, and
          the exact payment flow — everything an agent needs to go from
          discovery to purchase.
        </p>

        <h2 className="text-2xl font-bold text-gray-900">
          How Agents Pay: The x402 Protocol
        </h2>
        <p>
          Traditional payment systems (Stripe, PayPal, credit cards) require
          human interaction — form fields, CAPTCHAs, session cookies. The{" "}
          <Link
            href="/blog/what-is-x402-agentic-commerce"
            className="text-indigo-600 underline"
          >
            x402 protocol
          </Link>{" "}
          solves this with a pure HTTP payment flow:
        </p>

        <div className="rounded-xl bg-gray-50 p-6">
          <ol className="list-decimal space-y-3 pl-6">
            <li>
              <strong>Request</strong>: Agent sends{" "}
              <code className="rounded bg-white px-1 text-sm">
                GET /api/x402/purchase
              </code>
            </li>
            <li>
              <strong>402 Response</strong>: Server returns HTTP 402 with
              structured payment requirements (price, currency, network,
              recipient address)
            </li>
            <li>
              <strong>Sign</strong>: Agent uses its crypto wallet to sign a USDC
              transfer authorization on Base blockchain
            </li>
            <li>
              <strong>Retry</strong>: Agent retries the request with{" "}
              <code className="rounded bg-white px-1 text-sm">
                PAYMENT-SIGNATURE
              </code>{" "}
              header
            </li>
            <li>
              <strong>Settle</strong>: A facilitator verifies and settles the
              payment on-chain
            </li>
            <li>
              <strong>Deliver</strong>: Server returns HTTP 200 with the
              purchased content
            </li>
          </ol>
        </div>

        <p>
          The entire flow is stateless, sessionless, and requires no human
          interaction. An agent with a funded wallet can discover and purchase
          in under 10 seconds.
        </p>

        <h2 className="text-2xl font-bold text-gray-900">
          Agent Wallets: How Agents Hold Money
        </h2>
        <p>
          For an agent to make purchases, it needs a funded crypto wallet.
          There are several approaches:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>Operator-funded wallets</strong> — the human operator funds
            a wallet with USDC and gives the agent the private key. The agent
            can spend up to the wallet balance.
          </li>
          <li>
            <strong>Smart contract allowances</strong> — the operator approves
            a spending limit via a smart contract. The agent can spend up to
            the allowance without holding the private key.
          </li>
          <li>
            <strong>Budget-constrained wallets</strong> — wallets with
            programmatic spending limits (e.g., max $100/day, max $20/purchase).
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900">
          Building an Agent-Ready Store
        </h2>
        <p>
          If you want to sell to AI agents, your store needs to be
          machine-readable and support programmatic payment. Here&apos;s the
          checklist:
        </p>
        <ol className="list-decimal space-y-2 pl-6">
          <li>
            <strong>Publish an OpenAPI spec</strong> — describe all endpoints
            in machine-readable format
          </li>
          <li>
            <strong>Add a product info endpoint</strong> — return structured
            JSON with pricing and payment instructions
          </li>
          <li>
            <strong>Implement x402</strong> — add HTTP 402 payment flow using
            libraries like @x402/next
          </li>
          <li>
            <strong>Create an ai-plugin.json</strong> — standard discovery
            manifest
          </li>
          <li>
            <strong>Add agents.json</strong> — agent-specific product and
            payment listing
          </li>
          <li>
            <strong>Write llms.txt</strong> — LLM-optimized documentation
          </li>
          <li>
            <strong>Support dual payment rails</strong> — x402 for agents,
            traditional checkout for humans
          </li>
          <li>
            <strong>Deliver digitally</strong> — return content directly in
            the HTTP response (PDF, JSON, API keys, etc.)
          </li>
        </ol>

        <h2 className="text-2xl font-bold text-gray-900">
          Real-World Example: BrushFit AgentStore
        </h2>
        <p>
          BrushFit AgentStore is a live implementation of agent commerce. An AI
          agent can:
        </p>
        <ol className="list-decimal space-y-2 pl-6">
          <li>
            Read{" "}
            <a href="/agents.json" className="text-indigo-600 underline">
              agents.json
            </a>{" "}
            to discover available products
          </li>
          <li>
            Call{" "}
            <a href="/api/info" className="text-indigo-600 underline">
              /api/info
            </a>{" "}
            for detailed product information and payment instructions
          </li>
          <li>Purchase the BrushFit PDF via x402 with USDC on Base</li>
          <li>Receive the 31-page PDF directly in the response</li>
        </ol>

        <div className="rounded-xl bg-gray-900 p-6 text-sm text-gray-300">
          <p className="mb-2 font-mono text-indigo-400">
            # Complete agent purchase flow
          </p>
          <pre className="overflow-x-auto font-mono">{`import { wrapFetchWithPayment } from "@x402/fetch";
import { createWalletClient, http } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { base } from "viem/chains";

// Set up agent wallet
const account = privateKeyToAccount(AGENT_PRIVATE_KEY);
const client = createWalletClient({
  account, chain: base, transport: http()
});

// Wrap fetch to handle x402 automatically
const agentFetch = wrapFetchWithPayment(fetch, client);

// Discover product
const info = await fetch("https://agentstore.vercel.app/api/info")
  .then(r => r.json());
console.log(info.product, info.price);

// Purchase — handles 402 → sign → retry automatically
const pdf = await agentFetch(info.payment_methods.x402.endpoint);
const blob = await pdf.blob();`}</pre>
        </div>

        <h2 className="text-2xl font-bold text-gray-900">
          The Future of Agent Commerce
        </h2>
        <p>
          Agent commerce is still early, but the trajectory is clear. As AI
          agents become more autonomous and are given spending budgets by their
          operators, the demand for agent-ready stores will grow exponentially.
          Key trends to watch:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>Agent-to-agent commerce</strong> — agents buying from other
            agents&apos; stores, creating machine-driven supply chains
          </li>
          <li>
            <strong>Reputation systems</strong> — on-chain transaction history
            as agent &ldquo;credit scores&rdquo;
          </li>
          <li>
            <strong>Dynamic pricing</strong> — prices that adjust based on
            agent demand and on-chain analytics
          </li>
          <li>
            <strong>Multi-protocol support</strong> — stores accepting multiple
            agent payment protocols
          </li>
          <li>
            <strong>Agent marketplaces</strong> — aggregators that help agents
            discover and compare across multiple stores
          </li>
        </ul>
        <p>
          The stores that become agent-ready today will have a first-mover
          advantage as the agent economy scales.
        </p>
      </div>

      <div className="mt-12 rounded-xl bg-gray-900 p-8 text-center text-white">
        <h3 className="mb-2 text-xl font-bold">
          See Agent Commerce in Action
        </h3>
        <p className="mb-4 text-gray-400">
          BrushFit AgentStore is a live x402 implementation. Try it with your
          agent or explore the API.
        </p>
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a
            href="/api/info"
            className="inline-block rounded-xl bg-indigo-600 px-8 py-3 font-bold text-white transition hover:bg-indigo-500"
          >
            Explore the API
          </a>
          <Link
            href="/"
            className="inline-block rounded-xl border-2 border-gray-600 px-8 py-3 font-semibold text-gray-300 transition hover:border-indigo-400"
          >
            Buy BrushFit
          </Link>
        </div>
      </div>
    </article>
  );
}
