"use client";

import { useState, useEffect, useCallback } from "react";

interface AffiliateStats {
  code: string;
  name: string;
  commissionRate: number;
  commissionPerSale: number;
  stats: {
    clicks: number;
    conversions: number;
    conversionRate: string;
    totalEarnings: number;
    pendingPayout: number;
  };
  referralLink: string;
  createdAt: string;
  lastClickAt: string | null;
  lastConversionAt: string | null;
}

export default function AffiliateDashboard() {
  const [code, setCode] = useState("");
  const [stats, setStats] = useState<AffiliateStats | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const fetchStats = useCallback(async (affiliateCode: string) => {
    if (!affiliateCode.trim()) return;

    setLoading(true);
    setError("");
    setStats(null);

    try {
      const res = await fetch(
        `/api/affiliates?code=${encodeURIComponent(affiliateCode.trim())}`
      );
      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Affiliate not found");
        return;
      }

      setStats(data);
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }, []);

  // Check URL params on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const urlCode = params.get("code");
    if (urlCode) {
      setCode(urlCode);
      fetchStats(urlCode);
    }
  }, [fetchStats]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    fetchStats(code);
  }

  function getReferralUrl(): string {
    if (!stats) return "";
    const origin =
      typeof window !== "undefined" ? window.location.origin : "";
    return `${origin}${stats.referralLink}`;
  }

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(getReferralUrl());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = getReferralUrl();
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }

  return (
    <main className="min-h-screen bg-gray-950 text-gray-100">
      {/* Header */}
      <section className="mx-auto max-w-4xl px-6 pt-16 pb-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="mb-1 text-sm font-semibold tracking-widest text-indigo-400 uppercase">
              Affiliate Program
            </p>
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Dashboard
            </h1>
          </div>
          <a
            href="/affiliates"
            className="rounded-lg border border-gray-700 px-4 py-2 text-sm text-gray-300 transition hover:border-indigo-500 hover:text-indigo-400"
          >
            Back to Program
          </a>
        </div>

        {/* Code Input */}
        <form onSubmit={handleSubmit} className="flex gap-3">
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Enter your affiliate code"
            className="flex-1 rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-gray-100 placeholder-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
          />
          <button
            type="submit"
            disabled={loading || !code.trim()}
            className="rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700 disabled:opacity-50"
          >
            {loading ? "Loading..." : "View Stats"}
          </button>
        </form>

        {error && (
          <p className="mt-4 rounded-lg bg-red-950 p-3 text-sm text-red-400">
            {error}
          </p>
        )}
      </section>

      {/* Stats */}
      {stats && (
        <section className="mx-auto max-w-4xl px-6 pb-16">
          {/* Welcome */}
          <div className="mb-8 rounded-xl border border-gray-800 bg-gray-900 p-6">
            <p className="text-sm text-gray-400">
              Welcome back,{" "}
              <span className="font-semibold text-gray-100">
                {stats.name}
              </span>
            </p>
            <p className="mt-1 text-sm text-gray-500">
              Member since{" "}
              {new Date(stats.createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>

          {/* Stat Cards */}
          <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            <div className="rounded-xl border border-gray-800 bg-gray-900 p-6">
              <p className="mb-1 text-sm text-gray-400">Total Clicks</p>
              <p className="text-3xl font-bold text-indigo-400">
                {stats.stats.clicks}
              </p>
            </div>
            <div className="rounded-xl border border-gray-800 bg-gray-900 p-6">
              <p className="mb-1 text-sm text-gray-400">Conversions</p>
              <p className="text-3xl font-bold text-green-400">
                {stats.stats.conversions}
              </p>
            </div>
            <div className="rounded-xl border border-gray-800 bg-gray-900 p-6">
              <p className="mb-1 text-sm text-gray-400">Conversion Rate</p>
              <p className="text-3xl font-bold text-yellow-400">
                {stats.stats.conversionRate}
              </p>
            </div>
            <div className="rounded-xl border border-gray-800 bg-gray-900 p-6">
              <p className="mb-1 text-sm text-gray-400">Total Earnings</p>
              <p className="text-3xl font-bold text-emerald-400">
                ${stats.stats.totalEarnings.toFixed(2)}
              </p>
            </div>
            <div className="rounded-xl border border-gray-800 bg-gray-900 p-6">
              <p className="mb-1 text-sm text-gray-400">Pending Payout</p>
              <p className="text-3xl font-bold text-purple-400">
                ${stats.stats.pendingPayout.toFixed(2)}
              </p>
            </div>
          </div>

          {/* Commission Info */}
          <div className="mb-8 rounded-xl border border-gray-800 bg-gray-900 p-6">
            <h3 className="mb-3 text-lg font-semibold">Commission Details</h3>
            <div className="grid gap-4 sm:grid-cols-3">
              <div>
                <p className="text-sm text-gray-400">Commission Rate</p>
                <p className="text-lg font-semibold">
                  {(stats.commissionRate * 100).toFixed(0)}%
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Per Sale</p>
                <p className="text-lg font-semibold">
                  ${stats.commissionPerSale.toFixed(2)}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Product Price</p>
                <p className="text-lg font-semibold">$19.99</p>
              </div>
            </div>
          </div>

          {/* Referral Link */}
          <div className="rounded-xl border border-gray-800 bg-gray-900 p-6">
            <h3 className="mb-3 text-lg font-semibold">Your Referral Link</h3>
            <div className="flex items-center gap-3">
              <div className="flex-1 overflow-hidden rounded-lg border border-gray-700 bg-gray-800 px-4 py-3">
                <p className="truncate font-mono text-sm text-gray-300">
                  {getReferralUrl()}
                </p>
              </div>
              <button
                onClick={copyLink}
                className="shrink-0 rounded-lg bg-indigo-600 px-5 py-3 font-semibold text-white transition hover:bg-indigo-700"
              >
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
            <p className="mt-3 text-sm text-gray-500">
              Share this link with your audience. When someone clicks it and
              purchases BrushFit within 90 days, you earn $
              {stats.commissionPerSale.toFixed(2)}.
            </p>
          </div>

          {/* Activity */}
          <div className="mt-8 rounded-xl border border-gray-800 bg-gray-900 p-6">
            <h3 className="mb-3 text-lg font-semibold">Recent Activity</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between text-gray-400">
                <span>Last click</span>
                <span>
                  {stats.lastClickAt
                    ? new Date(stats.lastClickAt).toLocaleString()
                    : "No clicks yet"}
                </span>
              </div>
              <div className="flex justify-between text-gray-400">
                <span>Last conversion</span>
                <span>
                  {stats.lastConversionAt
                    ? new Date(stats.lastConversionAt).toLocaleString()
                    : "No conversions yet"}
                </span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Empty State */}
      {!stats && !loading && !error && (
        <section className="mx-auto max-w-4xl px-6 pb-16 text-center">
          <div className="rounded-xl border border-gray-800 bg-gray-900 p-12">
            <p className="mb-2 text-lg text-gray-400">
              Enter your affiliate code above to view your dashboard.
            </p>
            <p className="text-sm text-gray-500">
              Don&apos;t have a code yet?{" "}
              <a
                href="/affiliates#signup"
                className="text-indigo-400 hover:text-indigo-300"
              >
                Join the affiliate program
              </a>
            </p>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 text-center text-sm text-gray-500">
        <p>BrushFit Affiliate Dashboard — AgentStore</p>
        <p className="mt-1">
          <a href="/" className="text-indigo-400 hover:text-indigo-300">
            Back to BrushFit
          </a>
          {" | "}
          <a
            href="/affiliates"
            className="text-indigo-400 hover:text-indigo-300"
          >
            Affiliate Program
          </a>
        </p>
      </footer>
    </main>
  );
}
