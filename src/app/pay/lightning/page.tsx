"use client";

import { useState } from "react";

const PRICE_USD = 19.99;

export default function LightningPayPage() {
  const [invoice, setInvoice] = useState<{
    bolt11: string;
    paymentHash: string;
    amountSats: number;
    expiresAt: string;
  } | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [isMock, setIsMock] = useState(false);

  async function generateInvoice() {
    setLoading(true);
    setError(null);
    setInvoice(null);
    setCopied(false);

    try {
      const res = await fetch("/api/lightning/invoice", { method: "POST" });
      const data = await res.json();
      if (!res.ok || data.ok === false) {
        setError(data.error || "Failed to generate invoice");
        return;
      }
      setInvoice(data.invoice);
      setIsMock(!!data.mock);
    } catch {
      setError("Network error — could not reach the server.");
    } finally {
      setLoading(false);
    }
  }

  async function copyInvoice() {
    if (!invoice) return;
    try {
      await navigator.clipboard.writeText(invoice.bolt11);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard blocked */
    }
  }

  const mailtoHref = invoice
    ? `mailto:rob@robbalian.com?subject=${encodeURIComponent(
        "BrushFit Lightning Payment"
      )}&body=${encodeURIComponent(
        `I paid for BrushFit via Lightning Network.\n\nPayment hash: ${invoice.paymentHash}\nAmount: ${invoice.amountSats} sats ($${PRICE_USD})\n\nPlease send the PDF to this email. Thanks!`
      )}`
    : "#";

  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <section className="mx-auto max-w-2xl px-6 pt-16 pb-20">
        <a
          href="/buy"
          className="mb-8 inline-block text-sm text-indigo-600 hover:text-indigo-700"
        >
          &larr; Back to all payment methods
        </a>

        <div className="mb-2 flex items-center gap-3">
          <span className="text-4xl">&#9889;</span>
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Pay with Bitcoin Lightning Network
          </h1>
        </div>
        <p className="mb-8 text-lg text-gray-500">
          BrushFit: The 2-Minute Toothbrush Workout Guide
        </p>

        {/* Explanation */}
        <div className="mb-8 rounded-2xl border-2 border-amber-200 bg-amber-50 p-6">
          <h2 className="mb-3 text-lg font-bold text-amber-800">
            Why Lightning?
          </h2>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-amber-500">&#9889;</span>
              <span>
                <strong>Instant settlement</strong> — payments confirm in
                seconds, not minutes or hours.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-amber-500">&#9889;</span>
              <span>
                <strong>Near-zero fees</strong> — typically less than 1 sat
                (~$0.0005) in routing fees.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-amber-500">&#9889;</span>
              <span>
                <strong>Bitcoin native</strong> — pay directly from any
                Lightning wallet (Phoenix, Muun, Breez, Wallet of Satoshi,
                Strike, Cash App, etc.).
              </span>
            </li>
          </ul>
        </div>

        {/* Amount */}
        <div className="mb-8 rounded-2xl border bg-white p-6 text-center">
          <p className="text-sm text-gray-500">Amount due</p>
          <p className="text-4xl font-extrabold text-gray-900">$19.99</p>
          <p className="mt-1 text-sm text-gray-400">
            Approximately{" "}
            <span className="font-semibold text-amber-600">
              ~{Math.ceil((PRICE_USD / 67000) * 100_000_000).toLocaleString()}{" "}
              sats
            </span>{" "}
            (rate varies)
          </p>
        </div>

        {/* Instructions */}
        <div className="mb-8 rounded-2xl border bg-white p-6">
          <h2 className="mb-3 text-lg font-bold">How to pay</h2>
          <ol className="list-inside list-decimal space-y-2 text-sm text-gray-700">
            <li>
              Click <strong>&quot;Generate Lightning Invoice&quot;</strong>{" "}
              below.
            </li>
            <li>
              Copy the BOLT11 invoice string and paste it into your Lightning
              wallet, or scan the QR code.
            </li>
            <li>Confirm the payment in your wallet.</li>
            <li>
              Click <strong>&quot;Email Payment Confirmation&quot;</strong> to
              send your payment hash to{" "}
              <span className="font-semibold">rob@robbalian.com</span>.
            </li>
            <li>Receive your BrushFit PDF via email.</li>
          </ol>
        </div>

        {/* Generate Invoice */}
        {!invoice ? (
          <button
            onClick={generateInvoice}
            disabled={loading}
            className="w-full rounded-xl bg-amber-500 py-4 text-center text-lg font-bold text-white transition hover:bg-amber-600 disabled:opacity-50"
          >
            {loading ? "Generating Invoice..." : "Generate Lightning Invoice"}
          </button>
        ) : (
          <div className="space-y-4">
            {isMock && (
              <div className="rounded-xl border border-yellow-300 bg-yellow-50 p-4 text-sm text-yellow-800">
                <strong>Development mode:</strong> This is a mock invoice.
                Lightning node is not yet configured. Set{" "}
                <code className="rounded bg-yellow-100 px-1">
                  LIGHTNING_NODE_URL
                </code>{" "}
                and{" "}
                <code className="rounded bg-yellow-100 px-1">
                  LIGHTNING_API_KEY
                </code>{" "}
                to enable real payments.
              </div>
            )}

            <div className="rounded-2xl border-2 border-amber-200 bg-white p-6">
              <p className="mb-1 text-sm font-semibold text-gray-500">
                BOLT11 Invoice
              </p>
              <div className="mb-3 break-all rounded-lg bg-gray-100 p-3 font-mono text-xs text-gray-700">
                {invoice.bolt11}
              </div>
              <div className="flex gap-3">
                <button
                  onClick={copyInvoice}
                  className="flex-1 rounded-xl border-2 border-amber-400 py-3 text-center text-sm font-bold text-amber-700 transition hover:bg-amber-50"
                >
                  {copied ? "Copied!" : "Copy Invoice"}
                </button>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-lg bg-gray-50 p-3">
                  <p className="text-xs text-gray-400">Amount</p>
                  <p className="font-bold">
                    {invoice.amountSats.toLocaleString()} sats
                  </p>
                </div>
                <div className="rounded-lg bg-gray-50 p-3">
                  <p className="text-xs text-gray-400">Expires</p>
                  <p className="font-bold">
                    {new Date(invoice.expiresAt).toLocaleTimeString()}
                  </p>
                </div>
              </div>

              <div className="mt-4 rounded-lg bg-gray-50 p-3 text-sm">
                <p className="text-xs text-gray-400">Payment Hash</p>
                <p className="break-all font-mono text-xs">
                  {invoice.paymentHash}
                </p>
              </div>
            </div>

            {/* Email confirmation */}
            <a
              href={mailtoHref}
              className="block w-full rounded-xl bg-indigo-600 py-4 text-center text-lg font-bold text-white transition hover:bg-indigo-700"
            >
              Email Payment Confirmation
            </a>
            <p className="text-center text-xs text-gray-400">
              Sends your payment hash to rob@robbalian.com for PDF delivery
            </p>

            {/* Generate new */}
            <button
              onClick={generateInvoice}
              disabled={loading}
              className="w-full rounded-xl border-2 border-gray-300 py-3 text-center text-sm font-semibold text-gray-600 transition hover:border-gray-400 disabled:opacity-50"
            >
              {loading ? "Generating..." : "Generate New Invoice"}
            </button>
          </div>
        )}

        {error && (
          <div className="mt-4 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
            {error}
          </div>
        )}

        {/* Back to buy */}
        <div className="mt-10 text-center">
          <a
            href="/buy"
            className="inline-flex items-center gap-2 rounded-xl border-2 border-gray-300 px-8 py-3 font-semibold text-gray-700 transition hover:border-indigo-400 hover:text-indigo-600"
          >
            Other Payment Methods
          </a>
        </div>
      </section>
    </main>
  );
}
