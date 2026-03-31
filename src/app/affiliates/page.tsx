"use client";

import { useState } from "react";

export default function AffiliatesPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    website: "",
    paypal_email: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<{
    code: string;
    referralLink: string;
    dashboardLink: string;
  } | null>(null);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    setResult(null);

    try {
      const res = await fetch("/api/affiliates", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong");
        return;
      }

      setResult({
        code: data.code,
        referralLink: data.referralLink,
        dashboardLink: data.dashboardLink,
      });
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen bg-gray-950 text-gray-100">
      {/* Hero */}
      <section className="mx-auto max-w-4xl px-6 pt-20 pb-16 text-center">
        <p className="mb-4 text-sm font-semibold tracking-widest text-indigo-400 uppercase">
          Affiliate Program
        </p>
        <h1 className="mb-6 text-5xl font-extrabold tracking-tight sm:text-6xl">
          Earn <span className="text-indigo-400">$5.00</span> Per Sale
        </h1>
        <p className="mx-auto mb-4 max-w-2xl text-xl text-gray-400">
          Share BrushFit with your audience and earn 25% commission on every
          sale. That is $5.00 for every $19.99 purchase — paid monthly via
          PayPal.
        </p>
        <p className="text-lg text-gray-500">
          No minimum payout. No approval wait. Start earning today.
        </p>
      </section>

      {/* Benefits */}
      <section className="bg-gray-900 py-16">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-10 text-center text-3xl font-bold">
            Why Partner With Us
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: "25%",
                title: "Generous Commission",
                desc: "Earn $5.00 on every $19.99 sale. One of the highest rates in the fitness digital product space.",
              },
              {
                icon: "90d",
                title: "90-Day Cookie",
                desc: "Your referral cookie lasts 90 days. If they buy within that window, you get credit.",
              },
              {
                icon: "Live",
                title: "Real-Time Dashboard",
                desc: "Track clicks, conversions, and earnings in real time from your affiliate dashboard.",
              },
              {
                icon: "$$",
                title: "Monthly Payouts",
                desc: "Earnings are paid out monthly via PayPal. No minimum threshold to cash out.",
              },
            ].map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-xl border border-gray-800 bg-gray-950 p-6"
              >
                <div className="mb-3 text-2xl font-bold text-indigo-400">
                  {benefit.icon}
                </div>
                <h3 className="mb-2 font-semibold">{benefit.title}</h3>
                <p className="text-sm text-gray-400">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="mb-10 text-center text-3xl font-bold">
            How It Works
          </h2>
          <div className="grid gap-8 sm:grid-cols-3">
            {[
              {
                step: "1",
                title: "Sign Up",
                desc: "Fill out the form below. You will get a unique referral link instantly.",
              },
              {
                step: "2",
                title: "Share Your Link",
                desc: "Post it on your blog, social media, newsletter, or anywhere your audience hangs out.",
              },
              {
                step: "3",
                title: "Earn Commission",
                desc: "Every time someone buys BrushFit through your link, you earn $5.00. Simple as that.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signup Form */}
      <section className="bg-gray-900 py-16" id="signup">
        <div className="mx-auto max-w-lg px-6">
          <h2 className="mb-8 text-center text-3xl font-bold">
            Join the Program
          </h2>

          {result ? (
            <div className="rounded-xl border border-green-800 bg-green-950 p-8 text-center">
              <h3 className="mb-4 text-xl font-bold text-green-400">
                Welcome aboard!
              </h3>
              <p className="mb-2 text-gray-300">Your affiliate code:</p>
              <p className="mb-4 font-mono text-lg text-indigo-400">
                {result.code}
              </p>
              <p className="mb-2 text-gray-300">Your referral link:</p>
              <p className="mb-6 break-all font-mono text-sm text-gray-400">
                {typeof window !== "undefined"
                  ? window.location.origin + result.referralLink
                  : result.referralLink}
              </p>
              <a
                href={result.dashboardLink}
                className="inline-block rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700"
              >
                Go to Dashboard
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1 block text-sm font-medium text-gray-300"
                >
                  Full Name *
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                  className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-gray-100 placeholder-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  placeholder="Jane Smith"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-1 block text-sm font-medium text-gray-300"
                >
                  Email Address *
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                  className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-gray-100 placeholder-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  placeholder="jane@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="website"
                  className="mb-1 block text-sm font-medium text-gray-300"
                >
                  Website / Social Profile
                </label>
                <input
                  id="website"
                  type="url"
                  value={form.website}
                  onChange={(e) =>
                    setForm({ ...form, website: e.target.value })
                  }
                  className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-gray-100 placeholder-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  placeholder="https://yoursite.com"
                />
              </div>

              <div>
                <label
                  htmlFor="paypal_email"
                  className="mb-1 block text-sm font-medium text-gray-300"
                >
                  PayPal Email (for payouts) *
                </label>
                <input
                  id="paypal_email"
                  type="email"
                  required
                  value={form.paypal_email}
                  onChange={(e) =>
                    setForm({ ...form, paypal_email: e.target.value })
                  }
                  className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-gray-100 placeholder-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  placeholder="paypal@example.com"
                />
              </div>

              {error && (
                <p className="rounded-lg bg-red-950 p-3 text-sm text-red-400">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="w-full rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700 disabled:opacity-50"
              >
                {submitting ? "Creating your account..." : "Join Affiliate Program"}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="mb-8 text-center text-3xl font-bold">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "How much do I earn per sale?",
                a: "You earn 25% commission on every sale, which is $5.00 per BrushFit purchase at $19.99.",
              },
              {
                q: "How long does the referral cookie last?",
                a: "Your referral cookie lasts 90 days. If a visitor clicks your link and purchases within 90 days, you receive credit for the sale.",
              },
              {
                q: "When do I get paid?",
                a: "Payouts are processed monthly via PayPal. There is no minimum payout threshold.",
              },
              {
                q: "How do I track my performance?",
                a: "Use your affiliate dashboard to see real-time stats including clicks, conversions, conversion rate, and earnings.",
              },
              {
                q: "Can I promote BrushFit on social media?",
                a: "Absolutely. Share your unique referral link on any platform — blogs, Twitter, Instagram, YouTube, newsletters, and more.",
              },
              {
                q: "Is there an approval process?",
                a: "No. Once you sign up, you get your referral link immediately and can start promoting right away.",
              },
            ].map((faq) => (
              <div
                key={faq.q}
                className="rounded-xl border border-gray-800 p-6"
              >
                <h4 className="mb-2 font-semibold text-gray-100">{faq.q}</h4>
                <p className="text-gray-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 text-center text-sm text-gray-500">
        <p>BrushFit Affiliate Program — AgentStore</p>
        <p className="mt-1">
          <a href="/" className="text-indigo-400 hover:text-indigo-300">
            Back to BrushFit
          </a>
        </p>
      </footer>
    </main>
  );
}
