import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Build Your Own Agent Store: A Developer's Guide to x402 Commerce | BrushFit AgentStore",
  description:
    "A technical guide to building an agent-compatible store using x402 payments, Next.js, discovery files, and machine-readable APIs. Includes code examples and architecture patterns.",
  keywords: [
    "build agent store",
    "x402 tutorial",
    "agentic commerce developer guide",
    "agent payments setup",
    "x402 Next.js",
    "agent commerce tutorial",
    "agents.json setup",
    "llms.txt guide",
    "machine to machine payments",
    "AgentStore",
  ],
  openGraph: {
    title: "Build Your Own Agent Store: A Developer's Guide to x402 Commerce",
    description:
      "A technical guide to building an agent-compatible store using x402, Next.js, and discovery files.",
    type: "article",
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
              "Build Your Own Agent Store: A Developer's Guide to x402 Commerce",
            description:
              "A technical guide to building an agent-compatible store using x402 payments, Next.js, and machine-readable discovery files.",
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
        Developer Guide
      </p>
      <h1 className="mb-6 text-4xl font-extrabold tracking-tight">
        Build Your Own Agent Store: A Developer&apos;s Guide to x402 Commerce
      </h1>
      <p className="mb-10 text-lg text-gray-500">
        A step-by-step technical guide to building an online store that sells
        digital products to both humans and AI agents — using Next.js, the x402
        payment protocol, and machine-readable discovery files.
      </p>

      <div className="prose prose-gray max-w-none space-y-6 text-gray-700 leading-relaxed">
        <h2 className="text-2xl font-bold text-gray-900">
          What You&apos;re Building
        </h2>
        <p>
          By the end of this guide, you&apos;ll have a Next.js application that
          can sell digital products (PDFs, API keys, licenses, or any
          downloadable asset) to both human customers and AI agents. Human
          customers will see a normal web storefront. AI agents will interact
          with your store through structured discovery files and the x402
          payment protocol — never rendering a single pixel of UI.
        </p>
        <p>
          This is the same architecture used by the{" "}
          <Link href="/" className="text-indigo-600 underline">
            BrushFit AgentStore
          </Link>
          , which sells a digital fitness guide to both humans and agents. We&apos;ll
          reference its implementation throughout this guide.
        </p>

        <h2 className="text-2xl font-bold text-gray-900">
          Architecture Overview
        </h2>
        <p>
          An agent-compatible store has four components that a traditional
          e-commerce site doesn&apos;t:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>Discovery files</strong> — machine-readable documents that
            tell agents what you sell and how to buy it
          </li>
          <li>
            <strong>A payment endpoint</strong> — an API route that speaks the
            x402 protocol for agent transactions
          </li>
          <li>
            <strong>A delivery endpoint</strong> — an API route that serves the
            digital product after payment verification
          </li>
          <li>
            <strong>Payment verification middleware</strong> — logic that
            validates x402 payment proofs before releasing products
          </li>
        </ul>
        <p>
          Everything else — the marketing page, the human checkout flow, the
          blog — stays exactly the same as any Next.js site. Agent commerce is
          additive, not a rewrite.
        </p>

        <h2 className="text-2xl font-bold text-gray-900">
          Step 1: Set Up Discovery Files
        </h2>
        <p>
          Discovery files are how AI agents find and understand your store.
          You need three files in your <code>public/</code> directory:
        </p>

        <h3 className="text-xl font-semibold text-gray-900">
          agents.json
        </h3>
        <p>
          This is the primary machine-readable discovery file. Place it at{" "}
          <code>public/agents.json</code> so it&apos;s served at your domain
          root. Here&apos;s the structure:
        </p>
        <pre className="overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-gray-100">
{`{
  "name": "Your Store Name",
  "description": "What you sell, in one sentence.",
  "url": "https://yourstore.com",
  "products": [
    {
      "id": "product-slug",
      "name": "Product Name",
      "description": "What the product is and who it's for.",
      "price": { "amount": "19.99", "currency": "USD" },
      "payment_methods": ["x402", "stripe"],
      "purchase_url": "https://yourstore.com/api/purchase/product-slug",
      "sample_url": "https://yourstore.com/sample.pdf",
      "delivery": "instant_download",
      "content_type": "application/pdf"
    }
  ],
  "payment_protocols": {
    "x402": {
      "supported_currencies": ["USDC"],
      "network": "base"
    }
  },
  "openapi_spec": "https://yourstore.com/openapi.json"
}`}
        </pre>
        <p>
          The key fields are <code>purchase_url</code> (where agents send
          payment), <code>sample_url</code> (for pre-purchase evaluation), and
          the <code>payment_protocols</code> section (which tells agents what
          currency and network you accept).
        </p>

        <h3 className="text-xl font-semibold text-gray-900">
          llms.txt
        </h3>
        <p>
          Place this at <code>public/llms.txt</code>. Unlike{" "}
          <code>agents.json</code>, this file is written in natural language
          for LLM consumption:
        </p>
        <pre className="overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-gray-100">
{`# Your Store Name

> One-line description of what you sell.

## Products

- **Product Name** ($19.99): Description of the product,
  who it's for, and what problem it solves.
  Purchase: https://yourstore.com/api/purchase/product-slug
  Sample: https://yourstore.com/sample.pdf

## How to Buy

This store supports x402 payments. Send a GET request to
the purchase URL. You'll receive a 402 response with
payment details. Complete payment and re-request with
the payment proof header.`}
        </pre>

        <h3 className="text-xl font-semibold text-gray-900">
          OpenAPI Specification
        </h3>
        <p>
          Place your OpenAPI spec at <code>public/openapi.json</code>. This
          provides the detailed API contract for every endpoint an agent can
          call. Include your product listing endpoint, purchase endpoint, and
          delivery endpoint with full request/response schemas. Tools like{" "}
          <code>swagger-jsdoc</code> can generate this from your route
          handlers automatically.
        </p>

        <h2 className="text-2xl font-bold text-gray-900">
          Step 2: Build the x402 Payment Endpoint
        </h2>
        <p>
          The x402 protocol is elegant in its simplicity. It repurposes the
          HTTP 402 (Payment Required) status code — which has been reserved
          since 1999 but never widely adopted — as a machine-readable payment
          negotiation mechanism.
        </p>
        <p>
          Create a Next.js API route at{" "}
          <code>src/app/api/purchase/[slug]/route.ts</code>:
        </p>
        <pre className="overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-gray-100">
{`import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  const product = getProduct(params.slug);
  if (!product) {
    return NextResponse.json(
      { error: "Product not found" },
      { status: 404 }
    );
  }

  // Check for x402 payment proof header
  const paymentProof = request.headers.get("X-Payment-Proof");

  if (!paymentProof) {
    // No payment — return 402 with payment instructions
    return NextResponse.json(
      {
        product: product.name,
        price: product.price,
        currency: "USDC",
        network: "base",
        payment_address: process.env.PAYMENT_ADDRESS,
        description: product.description,
      },
      {
        status: 402,
        headers: {
          "X-Payment-Required": "true",
          "X-Price": product.price,
          "X-Currency": "USDC",
          "X-Network": "base",
          "X-Payment-Address": process.env.PAYMENT_ADDRESS!,
        },
      }
    );
  }

  // Verify the payment proof
  const isValid = await verifyPayment(paymentProof, product.price);
  if (!isValid) {
    return NextResponse.json(
      { error: "Invalid payment proof" },
      { status: 403 }
    );
  }

  // Payment verified — deliver the product
  return deliverProduct(product);
}`}
        </pre>
        <p>
          The flow is: agent requests the resource, gets a 402 with payment
          details, completes the on-chain transaction, then re-requests with
          the proof. Your server verifies and delivers. No checkout page. No
          cart. No sessions.
        </p>

        <h2 className="text-2xl font-bold text-gray-900">
          Step 3: Payment Verification
        </h2>
        <p>
          The <code>verifyPayment</code> function is where the security lives.
          It needs to confirm that the payment proof represents a real on-chain
          transaction, that the correct amount was sent, and that the payment
          went to your address. Here&apos;s the logic:
        </p>
        <pre className="overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-gray-100">
{`import { createPublicClient, http } from "viem";
import { base } from "viem/chains";

const client = createPublicClient({
  chain: base,
  transport: http(),
});

async function verifyPayment(
  proof: string,
  expectedAmount: string
): Promise<boolean> {
  try {
    const { txHash, sender } = JSON.parse(
      Buffer.from(proof, "base64").toString()
    );

    // Fetch the transaction receipt
    const receipt = await client.getTransactionReceipt({
      hash: txHash,
    });

    // Verify the transaction was successful
    if (receipt.status !== "success") return false;

    // Verify the USDC transfer event matches
    // expected amount and recipient
    const transferLog = receipt.logs.find(
      (log) => isUSDCTransfer(log, expectedAmount)
    );

    return !!transferLog;
  } catch {
    return false;
  }
}`}
        </pre>
        <p>
          In production, add replay protection (track used transaction hashes),
          timeout windows (reject proofs older than 10 minutes), and rate
          limiting. The BrushFit AgentStore uses the{" "}
          <code>@coinbase/x402</code> SDK which handles these concerns out of
          the box.
        </p>

        <h2 className="text-2xl font-bold text-gray-900">
          Step 4: Product Delivery
        </h2>
        <p>
          After verifying payment, deliver the digital product. For a PDF
          guide (like BrushFit), this means streaming the file in the
          response:
        </p>
        <pre className="overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-gray-100">
{`import { readFile } from "fs/promises";
import path from "path";

async function deliverProduct(product: Product) {
  const filePath = path.join(
    process.cwd(),
    "private",
    product.fileName
  );
  const fileBuffer = await readFile(filePath);

  return new NextResponse(fileBuffer, {
    status: 200,
    headers: {
      "Content-Type": product.contentType,
      "Content-Disposition":
        \`attachment; filename="\${product.fileName}"\`,
      "X-Product-Name": product.name,
      "X-Product-Version": product.version,
    },
  });
}`}
        </pre>
        <p>
          Important: store your paid products outside the <code>public/</code>{" "}
          directory. Use a <code>private/</code> directory that&apos;s only
          accessible via your API routes after payment verification. Never
          serve paid digital products from a publicly accessible URL.
        </p>

        <h2 className="text-2xl font-bold text-gray-900">
          Step 5: The Human Storefront
        </h2>
        <p>
          Agent commerce doesn&apos;t replace your human storefront — it
          augments it. Your Next.js pages continue to serve beautiful HTML to
          human visitors. The same product that an agent buys via x402, a
          human can buy through Stripe, PayPal, or any traditional payment
          processor.
        </p>
        <p>
          The BrushFit AgentStore renders a full marketing page with product
          descriptions, testimonials, and a Stripe checkout button for human
          visitors. The same server also responds to agent requests via the
          x402 API endpoint. Two audiences, one codebase, zero duplication.
        </p>

        <h2 className="text-2xl font-bold text-gray-900">
          Step 6: Testing with Agent Clients
        </h2>
        <p>
          Before going live, test your agent commerce flow end-to-end. You can
          simulate an agent interaction with curl:
        </p>
        <pre className="overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-gray-100">
{`# Step 1: Discover the store
curl https://yourstore.com/agents.json

# Step 2: Request the product (expect 402)
curl -v https://yourstore.com/api/purchase/your-product

# Step 3: After making payment, submit proof
curl -H "X-Payment-Proof: <base64-proof>" \\
  https://yourstore.com/api/purchase/your-product`}
        </pre>
        <p>
          For a more realistic test, use an agent framework like LangChain or
          AutoGPT configured with a testnet wallet. Fund the wallet with
          testnet USDC and run a full purchase cycle. Verify that the agent
          can discover your product via <code>agents.json</code>, interpret
          the 402 response, make payment, and receive the product.
        </p>

        <h2 className="text-2xl font-bold text-gray-900">
          Deployment Checklist
        </h2>
        <p>
          Before deploying your agent store to production, verify each of
          these items:
        </p>
        <ol className="list-decimal space-y-2 pl-6">
          <li>
            <strong>agents.json is accessible</strong> at your domain root and
            returns valid JSON
          </li>
          <li>
            <strong>llms.txt is accessible</strong> and contains accurate,
            up-to-date product descriptions
          </li>
          <li>
            <strong>OpenAPI spec is valid</strong> — run it through a validator
            to catch schema errors
          </li>
          <li>
            <strong>402 responses include all required headers</strong> — price,
            currency, network, and payment address
          </li>
          <li>
            <strong>Payment verification is secure</strong> — replay protection,
            amount validation, address validation
          </li>
          <li>
            <strong>Product files are not publicly accessible</strong> — only
            served through authenticated API routes
          </li>
          <li>
            <strong>CORS headers allow agent access</strong> — agents may call
            your API from different origins
          </li>
          <li>
            <strong>Rate limiting is in place</strong> — protect against abuse
            of both free and paid endpoints
          </li>
          <li>
            <strong>Error responses are machine-readable</strong> — return JSON
            with clear error codes, not HTML error pages
          </li>
          <li>
            <strong>Logging tracks agent transactions</strong> — you need
            visibility into agent purchases for reconciliation and debugging
          </li>
        </ol>

        <h2 className="text-2xl font-bold text-gray-900">
          What&apos;s Next
        </h2>
        <p>
          The agent commerce ecosystem is evolving rapidly. Here are areas to
          watch and invest in as the space matures:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>Agent reputation systems</strong> — verifying that an agent
            is acting on behalf of a legitimate user
          </li>
          <li>
            <strong>Subscription models for agents</strong> — recurring x402
            payments for SaaS-style digital products
          </li>
          <li>
            <strong>Agent referral tracking</strong> — understanding which AI
            systems drive the most purchases
          </li>
          <li>
            <strong>Multi-product bundling</strong> — allowing agents to
            purchase collections of products in a single transaction
          </li>
        </ul>
        <p>
          The{" "}
          <Link href="/" className="text-indigo-600 underline">
            BrushFit AgentStore
          </Link>{" "}
          is open as a reference implementation. Explore its{" "}
          <code>agents.json</code>, hit its API endpoints, and study how it
          handles the complete agent purchase flow. Then build your own. The
          infrastructure is ready. The agents are shopping. Your store should
          be open for business.
        </p>
      </div>

      <div className="mt-12 rounded-xl bg-indigo-50 p-8 text-center">
        <h3 className="mb-2 text-xl font-bold">See a Live Agent Store</h3>
        <p className="mb-4 text-gray-600">
          BrushFit AgentStore is a working implementation of everything in this
          guide.
        </p>
        <Link
          href="/"
          className="inline-block rounded-xl bg-indigo-600 px-8 py-3 font-bold text-white transition hover:bg-indigo-700"
        >
          Explore the AgentStore
        </Link>
      </div>
    </article>
  );
}
