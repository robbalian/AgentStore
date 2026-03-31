import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for AgentStore and BrushFit. Learn how we collect, use, and protect your information when purchasing digital products.",
  alternates: { canonical: "https://agentstore.vercel.app/privacy" },
  openGraph: {
    title: "Privacy Policy — AgentStore",
    description:
      "How AgentStore handles your data when you purchase BrushFit and other digital products.",
    url: "https://agentstore.vercel.app/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-3xl px-6 pt-16 pb-20">
        <a
          href="/"
          className="mb-8 inline-block text-sm text-indigo-600 hover:text-indigo-700"
        >
          &larr; Back to BrushFit
        </a>

        <h1 className="mb-2 text-4xl font-extrabold tracking-tight sm:text-5xl">
          Privacy Policy
        </h1>
        <p className="mb-10 text-sm text-gray-500">
          Last updated: March 31, 2026
        </p>

        <div className="space-y-10 text-gray-700">
          {/* Intro */}
          <div>
            <p>
              AgentStore (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
              &ldquo;our&rdquo;) operates{" "}
              <a
                href="https://agentstore.vercel.app"
                className="text-indigo-600 hover:text-indigo-700"
              >
                agentstore.vercel.app
              </a>
              . This Privacy Policy explains how we collect, use, and protect
              your information when you use our website and purchase digital
              products, including BrushFit.
            </p>
          </div>

          {/* Information We Collect */}
          <div className="rounded-xl border p-6">
            <h2 className="mb-4 text-2xl font-bold">
              Information We Collect
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="mb-1 font-semibold">Email Address</h3>
                <p className="text-sm text-gray-600">
                  We collect your email address when you make a purchase. This is
                  used to deliver your digital product (PDF download link) and
                  send your purchase receipt.
                </p>
              </div>
              <div>
                <h3 className="mb-1 font-semibold">Payment Information</h3>
                <p className="text-sm text-gray-600">
                  Payment details (credit card numbers, PayPal accounts, etc.)
                  are processed directly by our payment processors. We do not
                  store your full payment information on our servers.
                </p>
              </div>
              <div>
                <h3 className="mb-1 font-semibold">
                  Blockchain Transaction Data
                </h3>
                <p className="text-sm text-gray-600">
                  For x402 and cryptocurrency purchases, transaction hashes and
                  wallet addresses are recorded on-chain. This data is publicly
                  visible on the blockchain by design.
                </p>
              </div>
            </div>
          </div>

          {/* How We Use Information */}
          <div className="rounded-xl border p-6">
            <h2 className="mb-4 text-2xl font-bold">
              How We Use Your Information
            </h2>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-indigo-600">&#10003;</span>
                <span>
                  <strong>Order fulfillment:</strong> Delivering your purchased
                  PDF and download links
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-indigo-600">&#10003;</span>
                <span>
                  <strong>Email delivery:</strong> Sending purchase receipts and
                  download instructions
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-indigo-600">&#10003;</span>
                <span>
                  <strong>Customer support:</strong> Responding to refund
                  requests and questions
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-indigo-600">&#10003;</span>
                <span>
                  <strong>Affiliate tracking:</strong> Attributing referral
                  commissions to affiliate partners
                </span>
              </li>
            </ul>
            <p className="mt-4 text-sm text-gray-600">
              We do not sell, rent, or share your personal information with third
              parties for marketing purposes.
            </p>
          </div>

          {/* Payment Processing */}
          <div className="rounded-xl border p-6">
            <h2 className="mb-4 text-2xl font-bold">Payment Processing</h2>
            <div className="space-y-4">
              <div>
                <h3 className="mb-1 font-semibold">Stripe</h3>
                <p className="text-sm text-gray-600">
                  Credit/debit card, PayPal, Apple Pay, and Google Pay payments
                  are processed by Stripe. Stripe&apos;s privacy policy applies
                  to payment data they collect. See{" "}
                  <a
                    href="https://stripe.com/privacy"
                    className="text-indigo-600 hover:text-indigo-700"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    stripe.com/privacy
                  </a>
                  .
                </p>
              </div>
              <div>
                <h3 className="mb-1 font-semibold">
                  x402 Protocol (On-Chain)
                </h3>
                <p className="text-sm text-gray-600">
                  x402 payments use USDC on Base blockchain. Transactions are
                  settled on-chain through a facilitator. No personal
                  information is collected — only the cryptographic payment
                  proof and wallet address.
                </p>
              </div>
              <div>
                <h3 className="mb-1 font-semibold">Coinbase Commerce</h3>
                <p className="text-sm text-gray-600">
                  Cryptocurrency payments via Coinbase Commerce are subject to
                  Coinbase&apos;s privacy policy. See{" "}
                  <a
                    href="https://www.coinbase.com/legal/privacy"
                    className="text-indigo-600 hover:text-indigo-700"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    coinbase.com/legal/privacy
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>

          {/* Cookies and Analytics */}
          <div className="rounded-xl border p-6">
            <h2 className="mb-4 text-2xl font-bold">Cookies &amp; Analytics</h2>
            <p className="text-sm text-gray-600">
              We use minimal cookies necessary for site functionality, including
              affiliate referral tracking. We may use privacy-respecting
              analytics to understand site usage (page views, traffic sources).
              We do not use invasive tracking or sell data to advertisers.
            </p>
          </div>

          {/* Data Retention */}
          <div className="rounded-xl border p-6">
            <h2 className="mb-4 text-2xl font-bold">Data Retention</h2>
            <p className="text-sm text-gray-600">
              We retain purchase records (email, transaction ID, date) for
              accounting and customer support purposes. Download links expire
              after a reasonable period. You may request deletion of your
              personal data at any time by contacting us.
            </p>
          </div>

          {/* Your Rights */}
          <div className="rounded-xl border p-6">
            <h2 className="mb-4 text-2xl font-bold">Your Rights</h2>
            <div className="space-y-4">
              <div>
                <h3 className="mb-1 font-semibold">
                  GDPR (European Economic Area)
                </h3>
                <p className="text-sm text-gray-600">
                  If you are in the EEA, you have the right to access, correct,
                  delete, or port your personal data. You may also object to
                  processing or request restriction. Contact us to exercise
                  these rights.
                </p>
              </div>
              <div>
                <h3 className="mb-1 font-semibold">CCPA (California)</h3>
                <p className="text-sm text-gray-600">
                  California residents have the right to know what personal
                  information we collect, request deletion, and opt out of the
                  sale of personal information. We do not sell personal
                  information.
                </p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="rounded-xl bg-gray-50 p-6">
            <h2 className="mb-4 text-2xl font-bold">Contact Us</h2>
            <p className="text-sm text-gray-600">
              If you have any questions about this Privacy Policy or wish to
              exercise your data rights, please contact us at:
            </p>
            <p className="mt-2">
              <a
                href="mailto:rob@robbalian.com"
                className="font-semibold text-indigo-600 hover:text-indigo-700"
              >
                rob@robbalian.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
