import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy — 30-Day Money-Back Guarantee",
  description:
    "BrushFit offers a 30-day no-questions-asked money-back guarantee. Learn how to request a refund and processing times for every payment method.",
  alternates: { canonical: "https://agentstore.vercel.app/refund-policy" },
  openGraph: {
    title: "Refund Policy — AgentStore",
    description:
      "30-day no-questions-asked money-back guarantee on BrushFit. Full details on refund processing times and procedures.",
    url: "https://agentstore.vercel.app/refund-policy",
  },
};

export default function RefundPolicyPage() {
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
          Refund Policy
        </h1>
        <p className="mb-10 text-sm text-gray-500">
          Last updated: March 31, 2026
        </p>

        <div className="space-y-10 text-gray-700">
          {/* Guarantee */}
          <div className="rounded-xl border-2 border-indigo-200 bg-indigo-50 p-8 text-center">
            <p className="mb-2 text-sm font-semibold tracking-widest text-indigo-600 uppercase">
              Our Promise
            </p>
            <h2 className="mb-4 text-3xl font-extrabold">
              30-Day No-Questions-Asked Money-Back Guarantee
            </h2>
            <p className="mx-auto max-w-xl text-gray-700">
              If BrushFit isn&apos;t right for you, we&apos;ll give you a full
              refund. No hoops, no forms, no guilt. Just send us an email
              within 30 days of your purchase.
            </p>
          </div>

          {/* How to Request */}
          <div className="rounded-xl border p-6">
            <h2 className="mb-4 text-2xl font-bold">How to Request a Refund</h2>
            <ol className="space-y-4 text-sm text-gray-600">
              <li className="flex items-start gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-sm font-bold text-white">
                  1
                </span>
                <div>
                  <p className="font-semibold text-gray-800">Send us an email</p>
                  <p>
                    Email{" "}
                    <a
                      href="mailto:rob@robbalian.com"
                      className="font-semibold text-indigo-600 hover:text-indigo-700"
                    >
                      rob@robbalian.com
                    </a>{" "}
                    with the subject line &ldquo;Refund Request&rdquo; and include
                    the email address you used for your purchase.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-sm font-bold text-white">
                  2
                </span>
                <div>
                  <p className="font-semibold text-gray-800">
                    We confirm within 24 hours
                  </p>
                  <p>
                    You&apos;ll receive a confirmation email once your refund has
                    been initiated. No questions asked.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-sm font-bold text-white">
                  3
                </span>
                <div>
                  <p className="font-semibold text-gray-800">
                    Refund is processed
                  </p>
                  <p>
                    Your refund is issued back to your original payment method.
                    Processing times vary by method (see below).
                  </p>
                </div>
              </li>
            </ol>
          </div>

          {/* Processing Times */}
          <div className="rounded-xl border p-6">
            <h2 className="mb-4 text-2xl font-bold">
              Refund Processing Times by Payment Method
            </h2>
            <div className="overflow-hidden rounded-lg border">
              <table className="w-full text-left text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 font-semibold text-gray-700">
                      Payment Method
                    </th>
                    <th className="px-4 py-3 font-semibold text-gray-700">
                      Processing Time
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y text-gray-600">
                  <tr>
                    <td className="px-4 py-3">Credit / Debit Card (Stripe)</td>
                    <td className="px-4 py-3">5&ndash;10 business days</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">PayPal</td>
                    <td className="px-4 py-3">3&ndash;5 business days</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Apple Pay / Google Pay</td>
                    <td className="px-4 py-3">5&ndash;10 business days</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">USDC on Base (x402)</td>
                    <td className="px-4 py-3">1&ndash;3 business days</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">
                      Coinbase Commerce (BTC, ETH, USDC)
                    </td>
                    <td className="px-4 py-3">3&ndash;5 business days</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Venmo / Cash App / Zelle</td>
                    <td className="px-4 py-3">1&ndash;3 business days</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-xs text-gray-500">
              Crypto refunds are returned to the originating wallet address at the
              USD-equivalent value at the time of refund, which may differ from
              the original transaction amount due to price fluctuations.
            </p>
          </div>

          {/* What Happens After */}
          <div className="rounded-xl border p-6">
            <h2 className="mb-4 text-2xl font-bold">
              What Happens After a Refund
            </h2>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-gray-400">&bull;</span>
                <span>
                  Your download link will be <strong>deactivated</strong> once the
                  refund is processed.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-gray-400">&bull;</span>
                <span>
                  If you previously downloaded the PDF, we ask that you delete your
                  copy in good faith.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-gray-400">&bull;</span>
                <span>
                  You are welcome to repurchase at any time if you change your
                  mind.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-gray-400">&bull;</span>
                <span>
                  Affiliate commissions earned on refunded purchases will be
                  reversed.
                </span>
              </li>
            </ul>
          </div>

          {/* Exceptions */}
          <div className="rounded-xl border p-6">
            <h2 className="mb-4 text-2xl font-bold">Exceptions</h2>
            <p className="text-sm text-gray-600">
              Refund requests made more than 30 days after purchase are handled on
              a case-by-case basis. We want you to be happy with your purchase, so
              reach out even if you&apos;re outside the window and we&apos;ll do
              our best to help.
            </p>
          </div>

          {/* Contact */}
          <div className="rounded-xl bg-gray-50 p-6">
            <h2 className="mb-4 text-2xl font-bold">Need a Refund?</h2>
            <p className="mb-2 text-sm text-gray-600">
              Just email us. It&apos;s that simple.
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
                href="/terms"
                className="text-indigo-600 hover:text-indigo-700"
              >
                Terms of Service
              </a>
              <a
                href="/privacy"
                className="text-indigo-600 hover:text-indigo-700"
              >
                Privacy Policy
              </a>
              <a
                href="/buy"
                className="text-indigo-600 hover:text-indigo-700"
              >
                Buy BrushFit
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
