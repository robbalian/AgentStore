import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Purchase Complete — BrushFit",
  description: "Your BrushFit guide is ready to download.",
  robots: { index: false, follow: false },
};

export default function SuccessPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="max-w-md text-center">
        <div className="mb-6 text-6xl">&#10003;</div>
        <h1 className="mb-4 text-3xl font-extrabold">You&apos;re In!</h1>
        <p className="mb-6 text-lg text-gray-600">
          Your BrushFit guide is on its way to your email. You can also download
          it directly below.
        </p>
        <a
          href="/api/x402/purchase"
          className="mb-4 inline-block rounded-xl bg-indigo-600 px-8 py-4 text-lg font-bold text-white shadow-lg transition hover:bg-indigo-700"
        >
          Download BrushFit PDF
        </a>
        <p className="mt-6 text-sm text-gray-400">
          Questions?{" "}
          <a href="mailto:rob@robbalian.com" className="underline">
            Contact us
          </a>
        </p>
        <Link
          href="/"
          className="mt-4 inline-block text-sm text-indigo-600 underline"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}
