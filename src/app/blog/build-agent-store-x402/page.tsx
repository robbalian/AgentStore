import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "How to Build an Agent Store with x402 Payment Protocol | AgentStore",
  description:
    "Step-by-step technical tutorial on building a storefront that accepts payments from AI agents using x402 protocol. Covers agents.json, OpenAPI specs, llms.txt, and discovery endpoints.",
  keywords: [
    "build agent store",
    "x402 tutorial",
    "agentic commerce tutorial",
    "sell to AI agents",
    "agent payment protocol",
    "x402 integration guide",
    "agents.json specification",
    "llms.txt",
    "OpenAPI agent commerce",
    "AI agent storefront",
  ],
  openGraph: {
    title: "How to Build an Agent Store with x402 Payment Protocol",
    description:
      "Technical tutorial on building a storefront that accepts payments from AI agents using x402, agents.json, and OpenAPI.",
    type: "article",
    publishedTime: "2026-03-31T00:00:00Z",
  },
  alternates: {
    canonical:
      "https://agentstore.vercel.app/blog/build-agent-store-x402",
  },
};

export default function BuildAgentStoreX402() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "How to Build an Agent Store with x402 Payment Protocol",
            description:
              "Step-by-step tutorial on building a storefront that accepts payments from AI agents using x402.",
            author: { "@type": "Person", name: "Rob Balian" },
            publisher: {
              "@type": "Organization",
              name: "BrushFit AgentStore",
            },
            datePublished: "2026-03-31",
            dateModified: "2026-03-31",
          }),
        }}
      />

      <p className="mb-4 text-sm font-semibold tracking-widest text-indigo-600 uppercase">
        Developer Tutorial
      </p>
      <h1 className="mb-6 text-4xl font-extrabold tracking-tight">
        How to Build an Agent Store with x402 Payment Protocol
      </h1>
      <p className="mb-10 text-lg text-gray-500">
        A complete technical guide to building a storefront that sells digital
        products to both humans and AI agents. We&apos;ll use BrushFit
        AgentStore as the reference implementation, covering discovery,
        payments, and delivery end to end.
      </p>

      <div className="prose prose-gray max-w-none space-y-6 text-gray-700 leading-relaxed">
        <h2 className="text-2xl font-bold text-gray-900">
          What is an Agent Store?
        </h2>
        <p>
          An Agent Store is a web storefront designed to serve two types of
          customers: humans browsing with a web browser and AI agents making
          programmatic HTTP requests. Humans see a polished UI and pay with
          credit cards. Agents read machine-readable endpoints and pay with{" "}
          <Link
            href="/blog/what-is-x402-agentic-commerce"
            className="text-indigo-600 underline"
          >
            x402 protocol
          </Link>{" "}
          using USDC stablecoins on Base blockchain.
        </p>
        <p>
          The core architecture has four layers: discovery (how agents find your
          store), catalog (how agents understand your products), payment (how
          agents pay), and delivery (how agents receive purchased goods). We
          will walk through each layer with working code from the BrushFit
          AgentStore reference implementation.
        </p>

        <h2 className="text-2xl font-bold text-gray-900">
          Prerequisites
        </h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>Node.js 18+ and a Next.js project (App Router recommended)</li>
          <li>
            A Coinbase Commerce or direct wallet setup for receiving USDC on
            Base
          </li>
          <li>
            The{" "}
            <code className="rounded bg-gray-100 px-1 text-sm">
              @x402/next
            </code>{" "}
            package for server-side x402 middleware
          </li>
          <li>
            Optional: Stripe for human payment fallback
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900">
          Layer 1: Discovery — Making Your Store Findable by Agents
        </h2>
        <p>
          AI agents need to discover your store programmatically. There are
          three discovery mechanisms you should implement:
        </p>

        <h3 className="text-xl font-semibold text-gray-900">
          agents.json — The Agent Discovery Manifest
        </h3>
        <p>
          Place an{" "}
          <code className="rounded bg-gray-100 px-1 text-sm">
            agents.json
          </code>{" "}
          file at your domain root (similar to{" "}
          <code className="rounded bg-gray-100 px-1 text-sm">robots.txt</code>
          ). This tells agents what your store offers and where to find the
          API:
        </p>
        <div className="rounded-xl bg-gray-900 p-6 text-sm text-gray-300">
          <pre className="overflow-x-auto font-mono">{`// public/agents.json
{
  "name": "BrushFit AgentStore",
  "description": "Digital fitness guides optimized for purchase by AI agents",
  "url": "https://agentstore.vercel.app",
  "api": {
    "type": "openapi",
    "url": "https://agentstore.vercel.app/openapi.json"
  },
  "products": [
    {
      "id": "brushfit-guide",
      "name": "BrushFit: The Toothbrush Workout Guide",
      "description": "22 exercises you do while brushing your teeth",
      "price": { "amount": "19.99", "currency": "USD" },
      "purchase_url": "/api/x402/purchase",
      "sample_url": "/brushfit-sample.pdf"
    }
  ],
  "payment_methods": ["x402", "stripe"],
  "contact": "support@agentstore.vercel.app"
}`}</pre>
        </div>

        <h3 className="text-xl font-semibold text-gray-900">
          llms.txt — Context for Language Model Agents
        </h3>
        <p>
          The{" "}
          <code className="rounded bg-gray-100 px-1 text-sm">llms.txt</code>{" "}
          file provides natural-language context that LLM-based agents can
          consume to understand your store. Place it at your domain root:
        </p>
        <div className="rounded-xl bg-gray-900 p-6 text-sm text-gray-300">
          <pre className="overflow-x-auto font-mono">{`// public/llms.txt
# BrushFit AgentStore

## What We Sell
Digital fitness guides, starting with BrushFit — a program
of 22 exercises designed to be performed while brushing teeth.

## How to Buy (for AI Agents)
1. GET /api/info — returns product details and pricing
2. GET /api/x402/purchase — returns 402 with payment requirements
3. Sign a USDC payment on Base and retry with payment header
4. Receive the PDF in the response body

## API Documentation
OpenAPI spec: /openapi.json
Product info: /api/info
Free sample: /brushfit-sample.pdf

## Payment
We accept x402 (USDC on Base) and Stripe (credit cards).
x402 facilitator: https://x402.org/facilitator`}</pre>
        </div>

        <h3 className="text-xl font-semibold text-gray-900">
          OpenAPI Specification
        </h3>
        <p>
          A machine-readable OpenAPI 3.0 spec lets agents understand your
          entire API surface. Serve it at{" "}
          <code className="rounded bg-gray-100 px-1 text-sm">
            /openapi.json
          </code>
          . Include all endpoints, request/response schemas, and authentication
          requirements. The x402 purchase endpoint should document the 402
          response schema so agents know how to construct payment headers.
        </p>

        <h2 className="text-2xl font-bold text-gray-900">
          Layer 2: Catalog — The Product Info Endpoint
        </h2>
        <p>
          Create a{" "}
          <code className="rounded bg-gray-100 px-1 text-sm">
            /api/info
          </code>{" "}
          endpoint that returns structured product data. This is the first
          thing an agent calls to understand what you sell:
        </p>
        <div className="rounded-xl bg-gray-900 p-6 text-sm text-gray-300">
          <pre className="overflow-x-auto font-mono">{`// app/api/info/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    store: "BrushFit AgentStore",
    products: [
      {
        id: "brushfit-guide",
        name: "BrushFit: The Toothbrush Workout Guide",
        description: "22 bodyweight exercises for your brushing routine",
        format: "PDF",
        price: { amount: 19.99, currency: "USD" },
        purchase: {
          x402: "/api/x402/purchase",
          stripe: "/api/checkout",
        },
        sample: "/brushfit-sample.pdf",
      },
    ],
  });
}`}</pre>
        </div>

        <h2 className="text-2xl font-bold text-gray-900">
          Layer 3: Payment — Integrating x402
        </h2>
        <p>
          The{" "}
          <Link
            href="/blog/what-is-x402-agentic-commerce"
            className="text-indigo-600 underline"
          >
            x402 protocol
          </Link>{" "}
          uses HTTP 402 status codes to negotiate payments. Here&apos;s how to
          implement it:
        </p>

        <h3 className="text-xl font-semibold text-gray-900">
          Install the x402 Middleware
        </h3>
        <div className="rounded-xl bg-gray-900 p-6 text-sm text-gray-300">
          <pre className="overflow-x-auto font-mono">{`npm install @x402/next`}</pre>
        </div>

        <h3 className="text-xl font-semibold text-gray-900">
          Configure the Payment Gateway
        </h3>
        <div className="rounded-xl bg-gray-900 p-6 text-sm text-gray-300">
          <pre className="overflow-x-auto font-mono">{`// middleware.ts
import { paymentMiddleware } from "@x402/next";

export default paymentMiddleware(
  // Your wallet address (receives USDC)
  "0xYourWalletAddress",
  // x402 facilitator URL
  { url: "https://x402.org/facilitator" },
  // Route-specific pricing
  {
    "/api/x402/purchase": {
      price: "$19.99",
      network: "base",
      config: {
        description: "BrushFit: The Toothbrush Workout Guide (PDF)",
      },
    },
  }
);

export const config = {
  matcher: "/api/x402/:path*",
};`}</pre>
        </div>
        <p>
          When an agent hits{" "}
          <code className="rounded bg-gray-100 px-1 text-sm">
            GET /api/x402/purchase
          </code>{" "}
          without a payment header, the middleware automatically returns a 402
          response with the payment requirements. The agent signs a USDC
          transfer, adds it to the{" "}
          <code className="rounded bg-gray-100 px-1 text-sm">
            X-PAYMENT
          </code>{" "}
          header, and retries. The facilitator verifies and settles the
          payment on-chain before the request reaches your route handler.
        </p>

        <h3 className="text-xl font-semibold text-gray-900">
          The Purchase Route Handler
        </h3>
        <div className="rounded-xl bg-gray-900 p-6 text-sm text-gray-300">
          <pre className="overflow-x-auto font-mono">{`// app/api/x402/purchase/route.ts
import { NextResponse } from "next/server";
import { readFile } from "fs/promises";
import path from "path";

export async function GET() {
  // If we reach here, payment was already verified by middleware
  const filePath = path.join(process.cwd(), "private", "brushfit.pdf");
  const fileBuffer = await readFile(filePath);

  return new NextResponse(fileBuffer, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition":
        'attachment; filename="brushfit-guide.pdf"',
    },
  });
}`}</pre>
        </div>

        <h2 className="text-2xl font-bold text-gray-900">
          Layer 4: Delivery — Serving the Product
        </h2>
        <p>
          After payment verification, your route handler delivers the digital
          product. For PDFs, return the binary file with appropriate headers.
          For API access products, return an API key. For datasets, return a
          signed download URL. The delivery mechanism depends on your product
          type, but the x402 payment flow is the same.
        </p>
        <p>
          Important considerations for delivery:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>Idempotency</strong> — agents may retry requests. Track
            payment signatures to avoid double-delivery or double-charging.
          </li>
          <li>
            <strong>Error handling</strong> — return clear error messages in
            JSON format. Agents cannot read HTML error pages.
          </li>
          <li>
            <strong>Rate limiting</strong> — protect your endpoints from abuse
            while allowing legitimate agent traffic.
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900">
          Testing Your Agent Store
        </h2>
        <p>
          Test from the agent&apos;s perspective using the x402 fetch wrapper:
        </p>
        <div className="rounded-xl bg-gray-900 p-6 text-sm text-gray-300">
          <pre className="overflow-x-auto font-mono">{`import { wrapFetchWithPayment } from "@x402/fetch";
import { createWalletClient, http } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { base } from "viem/chains";

const account = privateKeyToAccount(process.env.TEST_PRIVATE_KEY);
const client = createWalletClient({
  account,
  chain: base,
  transport: http(),
});

const payableFetch = wrapFetchWithPayment(fetch, client);

// This will: GET -> receive 402 -> sign payment -> retry -> receive PDF
const res = await payableFetch("http://localhost:3000/api/x402/purchase");
console.log(res.status); // 200
console.log(res.headers.get("content-type")); // application/pdf`}</pre>
        </div>
        <p>
          You can also test the discovery layer manually:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <code className="rounded bg-gray-100 px-1 text-sm">
              curl http://localhost:3000/agents.json
            </code>{" "}
            — verify discovery manifest
          </li>
          <li>
            <code className="rounded bg-gray-100 px-1 text-sm">
              curl http://localhost:3000/api/info
            </code>{" "}
            — verify product catalog
          </li>
          <li>
            <code className="rounded bg-gray-100 px-1 text-sm">
              curl http://localhost:3000/openapi.json
            </code>{" "}
            — verify API spec
          </li>
          <li>
            <code className="rounded bg-gray-100 px-1 text-sm">
              curl -I http://localhost:3000/api/x402/purchase
            </code>{" "}
            — verify 402 response with payment requirements
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900">
          Architecture Checklist
        </h2>
        <p>
          Use this checklist to verify your Agent Store is fully operational:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <code className="rounded bg-gray-100 px-1 text-sm">
              /agents.json
            </code>{" "}
            — discovery manifest with product listings and API URLs
          </li>
          <li>
            <code className="rounded bg-gray-100 px-1 text-sm">
              /llms.txt
            </code>{" "}
            — natural-language context for LLM agents
          </li>
          <li>
            <code className="rounded bg-gray-100 px-1 text-sm">
              /openapi.json
            </code>{" "}
            — machine-readable API specification
          </li>
          <li>
            <code className="rounded bg-gray-100 px-1 text-sm">
              /api/info
            </code>{" "}
            — structured product catalog endpoint
          </li>
          <li>
            <code className="rounded bg-gray-100 px-1 text-sm">
              /api/x402/purchase
            </code>{" "}
            — x402-protected purchase endpoint
          </li>
          <li>
            x402 middleware configured with wallet address, facilitator, and
            pricing
          </li>
          <li>
            Human payment fallback (Stripe) for browser-based customers
          </li>
          <li>
            Free sample endpoint for agents to evaluate before purchasing
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900">
          What&apos;s Next: The Agent Economy
        </h2>
        <p>
          Building an Agent Store positions you at the forefront of{" "}
          <Link
            href="/blog/ai-agents-buying-products"
            className="text-indigo-600 underline"
          >
            agentic commerce
          </Link>
          . As AI agents become more autonomous — handling research, purchasing,
          and task completion on behalf of users — the demand for
          agent-compatible storefronts will grow exponentially. Every digital
          product, API, and dataset is a candidate for agent-based distribution.
        </p>
        <p>
          The BrushFit AgentStore is open as a reference implementation. Explore
          the{" "}
          <a href="/api/info" className="text-indigo-600 underline">
            live API
          </a>
          ,{" "}
          <a href="/openapi.json" className="text-indigo-600 underline">
            OpenAPI spec
          </a>
          , and{" "}
          <a href="/agents.json" className="text-indigo-600 underline">
            agents.json
          </a>{" "}
          to see the patterns in production.
        </p>
      </div>

      <div className="mt-12 rounded-xl bg-gray-900 p-8 text-center text-white">
        <h3 className="mb-2 text-xl font-bold">
          See the Reference Implementation
        </h3>
        <p className="mb-4 text-gray-400">
          BrushFit AgentStore — a live x402 storefront for humans and AI
          agents.
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
