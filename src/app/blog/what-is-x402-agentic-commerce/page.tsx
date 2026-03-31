import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What is x402? The Future of Agentic Commerce | AgentStore",
  description:
    "Learn how x402 protocol enables AI agents to buy products programmatically using HTTP 402 and USDC stablecoins. The future of agent-to-agent commerce explained.",
  keywords: [
    "x402 protocol",
    "agentic commerce",
    "AI agent payments",
    "HTTP 402",
    "agent commerce",
    "crypto payments API",
    "USDC payments",
    "Base blockchain",
    "programmatic purchases",
    "AgentStore",
    "agent economy",
  ],
  openGraph: {
    title: "What is x402? The Future of Agentic Commerce",
    description:
      "How AI agents buy products using HTTP 402 and stablecoins — and why it matters for the agent economy.",
    type: "article",
  },
  alternates: {
    canonical:
      "https://agentstore.vercel.app/blog/what-is-x402-agentic-commerce",
  },
};

export default function WhatIsX402() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "What is x402? The Future of Agentic Commerce",
            description:
              "How AI agents buy products using HTTP 402 and stablecoins.",
            author: { "@type": "Person", name: "Rob Balian" },
            publisher: { "@type": "Organization", name: "BrushFit AgentStore" },
            datePublished: "2025-03-30",
            dateModified: "2025-03-30",
          }),
        }}
      />

      <p className="mb-4 text-sm font-semibold tracking-widest text-indigo-600 uppercase">
        Agentic Commerce
      </p>
      <h1 className="mb-6 text-4xl font-extrabold tracking-tight">
        What is x402? The Future of Agentic Commerce
      </h1>
      <p className="mb-10 text-lg text-gray-500">
        How AI agents buy products using HTTP 402 status codes and USDC
        stablecoins — and why it&apos;s the foundation of the agent economy.
      </p>

      <div className="prose prose-gray max-w-none space-y-6 text-gray-700 leading-relaxed">
        <h2 className="text-2xl font-bold text-gray-900">
          The Problem: AI Agents Can&apos;t Buy Things
        </h2>
        <p>
          AI agents are increasingly capable of performing complex tasks
          autonomously. They can research, write, code, and analyze. But when
          they need to <em>buy</em> something — a PDF, an API call, a dataset
          — they hit a wall. Traditional payment systems require:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Human-operated accounts with logins and passwords</li>
          <li>Session cookies and CSRF tokens</li>
          <li>Credit card forms designed for human fingers</li>
          <li>CAPTCHAs explicitly designed to block bots</li>
        </ul>
        <p>
          None of this works for an autonomous agent. The web was built for
          humans, and the payment layer reflects that.
        </p>

        <h2 className="text-2xl font-bold text-gray-900">
          Enter HTTP 402: Payment Required
        </h2>
        <p>
          HTTP status code 402 has been &ldquo;reserved for future use&rdquo;
          since 1997. The x402 protocol finally puts it to work. Here&apos;s
          how it works:
        </p>
        <ol className="list-decimal space-y-3 pl-6">
          <li>
            <strong>Agent requests a resource</strong> — e.g.,{" "}
            <code className="rounded bg-gray-100 px-1 text-sm">
              GET /api/x402/purchase
            </code>
          </li>
          <li>
            <strong>Server responds with 402</strong> — the response body
            contains structured payment requirements: price, currency,
            network, recipient address
          </li>
          <li>
            <strong>Agent signs a payment</strong> — using its crypto wallet,
            the agent signs a USDC transfer authorization on Base blockchain
          </li>
          <li>
            <strong>Agent retries with proof</strong> — the signed payment goes
            in the <code className="rounded bg-gray-100 px-1 text-sm">PAYMENT-SIGNATURE</code> header
          </li>
          <li>
            <strong>Facilitator settles on-chain</strong> — a trusted
            facilitator (like Coinbase&apos;s x402.org) verifies the signature
            and settles the payment
          </li>
          <li>
            <strong>Resource is delivered</strong> — the server returns 200
            with the purchased content
          </li>
        </ol>

        <h2 className="text-2xl font-bold text-gray-900">
          Why USDC on Base?
        </h2>
        <p>
          The x402 protocol uses USDC (a USD stablecoin) on the Base
          blockchain for several reasons:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>Stable value</strong> — 1 USDC = $1 USD, no volatility
            risk
          </li>
          <li>
            <strong>Low fees</strong> — Base (Coinbase&apos;s L2) has
            sub-cent transaction costs
          </li>
          <li>
            <strong>Fast settlement</strong> — transactions confirm in seconds
          </li>
          <li>
            <strong>Programmable</strong> — agents can sign transactions with a
            private key, no human needed
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900">
          What is an AgentStore?
        </h2>
        <p>
          An AgentStore is a storefront designed for both humans and AI agents.
          It&apos;s discoverable via standard protocols (OpenAPI, ai-plugin.json),
          purchasable via x402, and also supports traditional payments for
          humans. Think of it as an app store where the customers are AI agents.
        </p>
        <p>
          Key characteristics of an AgentStore:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>Machine-readable product catalog</strong> — via{" "}
            <code className="rounded bg-gray-100 px-1 text-sm">/api/info</code>{" "}
            and OpenAPI spec
          </li>
          <li>
            <strong>Programmatic purchasing</strong> — agents can discover,
            evaluate, and buy without human intervention
          </li>
          <li>
            <strong>Dual payment rails</strong> — x402 for agents, Stripe for
            humans
          </li>
          <li>
            <strong>Instant delivery</strong> — digital products delivered
            immediately after payment
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900">
          How to Buy from an AgentStore (Code Example)
        </h2>
        <div className="rounded-xl bg-gray-900 p-6 text-sm text-gray-300">
          <pre className="overflow-x-auto font-mono">{`import { wrapFetchWithPayment } from "@x402/fetch";
import { createWalletClient, http } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { base } from "viem/chains";

// 1. Set up wallet
const account = privateKeyToAccount(PRIVATE_KEY);
const client = createWalletClient({
  account,
  chain: base,
  transport: http(),
});

// 2. Wrap fetch with x402 payment handling
const payableFetch = wrapFetchWithPayment(fetch, client);

// 3. Buy — the library handles 402 → sign → retry automatically
const response = await payableFetch(
  "https://agentstore.vercel.app/api/x402/purchase"
);
const pdf = await response.blob();`}</pre>
        </div>

        <h2 className="text-2xl font-bold text-gray-900">
          The Agent Economy is Here
        </h2>
        <p>
          As AI agents become more autonomous, they&apos;ll need to transact
          with each other and with digital storefronts. x402 provides the
          payment infrastructure for this emerging economy. Today it&apos;s
          PDF guides. Tomorrow it&apos;s API access, datasets, compute time,
          and services — all purchasable by agents, for agents.
        </p>

        <h2 className="text-2xl font-bold text-gray-900">
          Try It Yourself
        </h2>
        <p>
          BrushFit AgentStore is a live implementation of x402 agentic
          commerce. You can:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <a href="/api/info" className="text-indigo-600 underline">
              View the product API
            </a>{" "}
            — machine-readable product info
          </li>
          <li>
            <a href="/openapi.json" className="text-indigo-600 underline">
              Read the OpenAPI spec
            </a>{" "}
            — full API documentation
          </li>
          <li>
            <a
              href="/brushfit-sample.pdf"
              className="text-indigo-600 underline"
            >
              Download the free sample
            </a>{" "}
            — no payment required
          </li>
          <li>
            <Link href="/" className="text-indigo-600 underline">
              Buy the full guide
            </Link>{" "}
            — via x402 or card
          </li>
        </ul>
      </div>

      <div className="mt-12 rounded-xl bg-gray-900 p-8 text-center text-white">
        <h3 className="mb-2 text-xl font-bold">
          Build Your Own AgentStore
        </h3>
        <p className="mb-4 text-gray-400">
          Sell digital products to humans and AI agents with x402 + Stripe.
        </p>
        <a
          href="/api/info"
          className="inline-block rounded-xl bg-indigo-600 px-8 py-3 font-bold text-white transition hover:bg-indigo-500"
        >
          Explore the API
        </a>
      </div>
    </article>
  );
}
