import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Purchase Complete — BrushFit",
  description: "Your BrushFit guide is ready to download.",
  robots: { index: false, follow: false },
};

export default async function SuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string; token?: string }>;
}) {
  const params = await searchParams;
  const token = params.token;

  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="max-w-md text-center">
        <div className="mb-6 text-6xl">&#10003;</div>
        <h1 className="mb-4 text-3xl font-extrabold">You&apos;re In!</h1>
        <p className="mb-6 text-lg text-gray-600">
          Your BrushFit guide is ready. Click below to download your 31-page PDF
          with all 22 exercises and the 4-week program.
        </p>
        {token ? (
          <a
            href={`/api/download?token=${token}`}
            className="mb-4 inline-block rounded-xl bg-indigo-600 px-8 py-4 text-lg font-bold text-white shadow-lg transition hover:bg-indigo-700"
          >
            Download BrushFit PDF
          </a>
        ) : (
          <div className="mb-4 rounded-xl bg-yellow-50 border border-yellow-200 p-4">
            <p className="text-sm text-yellow-800">
              If your download link didn&apos;t appear, check your email for the
              download link or contact{" "}
              <a href="mailto:rob@robbalian.com" className="underline">
                rob@robbalian.com
              </a>
              .
            </p>
          </div>
        )}
        <p className="mt-4 text-sm text-gray-400">
          Your download link is valid for 24 hours with up to 5 downloads.
        </p>
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
