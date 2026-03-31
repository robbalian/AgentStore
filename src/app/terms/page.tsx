import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of service for AgentStore and BrushFit digital products. Covers licensing, payments, refunds, and intellectual property.",
  alternates: { canonical: "https://agentstore.vercel.app/terms" },
  openGraph: {
    title: "Terms of Service — AgentStore",
    description:
      "Terms and conditions for purchasing and using BrushFit and other AgentStore digital products.",
    url: "https://agentstore.vercel.app/terms",
  },
};

export default function TermsPage() {
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
          Terms of Service
        </h1>
        <p className="mb-10 text-sm text-gray-500">
          Last updated: March 31, 2026
        </p>

        <div className="space-y-10 text-gray-700">
          {/* Intro */}
          <div>
            <p>
              These Terms of Service (&ldquo;Terms&rdquo;) govern your use of
              AgentStore (
              <a
                href="https://agentstore.vercel.app"
                className="text-indigo-600 hover:text-indigo-700"
              >
                agentstore.vercel.app
              </a>
              ) and the purchase of digital products, including BrushFit: The
              2-Minute Toothbrush Workout Guide. By purchasing or using our
              products, you agree to these Terms.
            </p>
          </div>

          {/* Digital Product License */}
          <div className="rounded-xl border p-6">
            <h2 className="mb-4 text-2xl font-bold">
              Digital Product License
            </h2>
            <p className="mb-4 text-sm text-gray-600">
              When you purchase a digital product from AgentStore, you receive a
              personal, non-exclusive, non-transferable license to use the
              product for your own personal use.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-green-500">&#10003;</span>
                <span>
                  Use the product for personal fitness and reference
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-green-500">&#10003;</span>
                <span>Print copies for your own personal use</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-green-500">&#10003;</span>
                <span>Access your download for a lifetime — no subscriptions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-red-500">&#10007;</span>
                <span>
                  Redistribute, resell, or share the product publicly
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-red-500">&#10007;</span>
                <span>
                  Modify and distribute derivative works commercially
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-red-500">&#10007;</span>
                <span>
                  Claim authorship or remove attribution
                </span>
              </li>
            </ul>
          </div>

          {/* Payment Terms */}
          <div className="rounded-xl border p-6">
            <h2 className="mb-4 text-2xl font-bold">Payment Terms</h2>
            <p className="mb-4 text-sm text-gray-600">
              BrushFit is priced at{" "}
              <strong>$19.99 USD</strong> as a one-time purchase. No
              subscriptions, no recurring charges.
            </p>
            <h3 className="mb-2 font-semibold">Accepted Payment Methods</h3>
            <div className="grid gap-2 sm:grid-cols-2 text-sm text-gray-600">
              <div className="rounded-lg bg-gray-50 px-3 py-2">
                Credit / Debit Cards (via Stripe)
              </div>
              <div className="rounded-lg bg-gray-50 px-3 py-2">
                PayPal (via Stripe)
              </div>
              <div className="rounded-lg bg-gray-50 px-3 py-2">
                Apple Pay / Google Pay
              </div>
              <div className="rounded-lg bg-gray-50 px-3 py-2">
                USDC on Base (x402 Protocol)
              </div>
              <div className="rounded-lg bg-gray-50 px-3 py-2">
                Coinbase Commerce (BTC, ETH, USDC)
              </div>
              <div className="rounded-lg bg-gray-50 px-3 py-2">
                Venmo, Cash App, Zelle
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-600">
              All prices are in USD. Crypto payments are settled at the
              equivalent USD value at the time of transaction.
            </p>
          </div>

          {/* Refund Policy */}
          <div className="rounded-xl border-2 border-indigo-200 bg-indigo-50 p-6">
            <h2 className="mb-4 text-2xl font-bold">
              30-Day Money-Back Guarantee
            </h2>
            <p className="mb-4 text-sm text-gray-700">
              We offer a <strong>30-day no-questions-asked money-back
              guarantee</strong> on all purchases. If you&apos;re not satisfied
              with BrushFit for any reason, email us for a full refund.
            </p>
            <p className="text-sm text-gray-600">
              See our full{" "}
              <a
                href="/refund-policy"
                className="font-semibold text-indigo-600 hover:text-indigo-700"
              >
                Refund Policy
              </a>{" "}
              for details on processing times and procedures.
            </p>
          </div>

          {/* Intellectual Property */}
          <div className="rounded-xl border p-6">
            <h2 className="mb-4 text-2xl font-bold">Intellectual Property</h2>
            <p className="text-sm text-gray-600">
              All content in BrushFit, including text, illustrations, design,
              and layout, is the intellectual property of AgentStore and Rob
              Balian. The BrushFit name, logo, and brand are trademarks of
              AgentStore. Purchasing a copy grants you a personal use license as
              described above — it does not transfer ownership of any
              intellectual property.
            </p>
          </div>

          {/* Limitation of Liability */}
          <div className="rounded-xl border p-6">
            <h2 className="mb-4 text-2xl font-bold">
              Limitation of Liability
            </h2>
            <p className="mb-4 text-sm text-gray-600">
              BrushFit is a fitness guide for informational purposes. You should
              consult a healthcare professional before starting any exercise
              program. AgentStore and Rob Balian are not liable for any injuries,
              health issues, or damages arising from the use of our products.
            </p>
            <p className="text-sm text-gray-600">
              To the maximum extent permitted by law, AgentStore&apos;s total
              liability for any claim arising from your use of our products is
              limited to the amount you paid for the product ($19.99).
            </p>
          </div>

          {/* Governing Law */}
          <div className="rounded-xl border p-6">
            <h2 className="mb-4 text-2xl font-bold">Governing Law</h2>
            <p className="text-sm text-gray-600">
              These Terms are governed by and construed in accordance with the
              laws of the United States. Any disputes shall be resolved through
              good-faith negotiation first, followed by binding arbitration if
              necessary.
            </p>
          </div>

          {/* Changes to Terms */}
          <div className="rounded-xl border p-6">
            <h2 className="mb-4 text-2xl font-bold">Changes to These Terms</h2>
            <p className="text-sm text-gray-600">
              We may update these Terms from time to time. Changes will be
              posted on this page with an updated &ldquo;Last updated&rdquo;
              date. Continued use of our products after changes constitutes
              acceptance of the new Terms.
            </p>
          </div>

          {/* Contact */}
          <div className="rounded-xl bg-gray-50 p-6">
            <h2 className="mb-4 text-2xl font-bold">Contact</h2>
            <p className="mb-2 text-sm text-gray-600">
              Questions about these Terms? Contact us at:
            </p>
            <p>
              <a
                href="mailto:rob@robbalian.com"
                className="font-semibold text-indigo-600 hover:text-indigo-700"
              >
                rob@robbalian.com
              </a>
            </p>
            <div className="mt-4 flex flex-wrap gap-4 text-sm">
              <a
                href="/privacy"
                className="text-indigo-600 hover:text-indigo-700"
              >
                Privacy Policy
              </a>
              <a
                href="/refund-policy"
                className="text-indigo-600 hover:text-indigo-700"
              >
                Refund Policy
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
