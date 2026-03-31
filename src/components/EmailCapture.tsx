"use client";

import { useState } from "react";

interface EmailCaptureProps {
  variant?: "inline" | "banner" | "modal";
  source?: string;
  heading?: string;
  subheading?: string;
  ctaText?: string;
  showName?: boolean;
}

export default function EmailCapture({
  variant = "inline",
  source = "homepage",
  heading = "Get the free BrushFit sample + exclusive tips",
  subheading = "Join 500+ fitness enthusiasts who are getting fit while brushing their teeth.",
  ctaText = "Send Me the Free Sample",
  showName = false,
}: EmailCaptureProps) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name: name || undefined, source }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setMessage(data.message);
        // Track the signup
        fetch("/api/analytics", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ event: "newsletter_signup", source }),
        });
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  };

  if (status === "success") {
    return (
      <div className={containerClass(variant)}>
        <div className="text-center py-6">
          <div className="mb-3 text-4xl">&#9993;</div>
          <h3 className="mb-2 text-xl font-bold text-white">
            Check your email for the free sample!
          </h3>
          <p className="text-gray-400">{message}</p>
        </div>
      </div>
    );
  }

  if (variant === "banner") {
    return (
      <div className="w-full bg-gradient-to-r from-gray-900 via-indigo-950 to-gray-900 border-y border-gray-800">
        <div className="mx-auto max-w-4xl px-6 py-8">
          <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
            <div className="text-center md:text-left">
              <h3 className="mb-1 text-lg font-bold text-white">{heading}</h3>
              <p className="text-sm text-gray-400">{subheading}</p>
            </div>
            <form onSubmit={handleSubmit} className="flex w-full max-w-md gap-2 md:w-auto">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="flex-1 rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-sm text-white placeholder-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="whitespace-nowrap rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700 disabled:opacity-50"
              >
                {status === "loading" ? "..." : ctaText}
              </button>
            </form>
          </div>
          {status === "error" && (
            <p className="mt-2 text-center text-sm text-red-400">{message}</p>
          )}
        </div>
      </div>
    );
  }

  if (variant === "modal") {
    return (
      <div className="rounded-2xl bg-gray-900 p-8 shadow-2xl border border-gray-800 max-w-md w-full">
        <div className="mb-6 text-center">
          <div className="mb-3 text-3xl">&#127942;</div>
          <h3 className="mb-2 text-xl font-bold text-white">{heading}</h3>
          <p className="text-sm text-gray-400">{subheading}</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-3">
          {showName && (
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name (optional)"
              className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-sm text-white placeholder-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
          )}
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-sm text-white placeholder-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full rounded-lg bg-indigo-600 py-3 text-sm font-bold text-white transition hover:bg-indigo-700 disabled:opacity-50"
          >
            {status === "loading" ? "Signing up..." : ctaText}
          </button>
        </form>
        {status === "error" && (
          <p className="mt-3 text-center text-sm text-red-400">{message}</p>
        )}
        <p className="mt-4 text-center text-xs text-gray-600">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    );
  }

  // Default: inline (horizontal)
  return (
    <div className="rounded-2xl bg-gray-900 p-8 border border-gray-800">
      <div className="mb-6 text-center">
        <h3 className="mb-2 text-xl font-bold text-white">{heading}</h3>
        <p className="text-sm text-gray-400">{subheading}</p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center"
      >
        {showName && (
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name (optional)"
            className="rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-sm text-white placeholder-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
          />
        )}
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="flex-1 rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-sm text-white placeholder-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:max-w-xs"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="rounded-lg bg-indigo-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-indigo-700 disabled:opacity-50"
        >
          {status === "loading" ? "Signing up..." : ctaText}
        </button>
      </form>
      {status === "error" && (
        <p className="mt-3 text-center text-sm text-red-400">{message}</p>
      )}
      <p className="mt-4 text-center text-xs text-gray-600">
        No spam. Unsubscribe anytime.
      </p>
    </div>
  );
}

function containerClass(variant: string): string {
  switch (variant) {
    case "banner":
      return "w-full bg-gradient-to-r from-gray-900 via-indigo-950 to-gray-900 border-y border-gray-800";
    case "modal":
      return "rounded-2xl bg-gray-900 p-8 shadow-2xl border border-gray-800 max-w-md w-full";
    default:
      return "rounded-2xl bg-gray-900 p-8 border border-gray-800";
  }
}
