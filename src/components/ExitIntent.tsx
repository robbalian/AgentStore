"use client";

import { useState, useEffect, useCallback } from "react";

export default function ExitIntent() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleMouseLeave = useCallback((e: MouseEvent) => {
    if (e.clientY <= 0) {
      // Check if already shown this session
      if (typeof window !== "undefined") {
        const shown = sessionStorage.getItem("brushfit-exit-intent-shown");
        if (shown) return;
        sessionStorage.setItem("brushfit-exit-intent-shown", "1");
      }
      setIsVisible(true);
      // Track the event
      fetch("/api/analytics", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ event: "exit_intent_shown", source: "exit-intent" }),
      });
    }
  }, []);

  useEffect(() => {
    // Only attach on desktop (no hover on mobile)
    if (typeof window !== "undefined" && window.innerWidth > 768) {
      // Check if already shown
      const shown = sessionStorage.getItem("brushfit-exit-intent-shown");
      if (shown) return;

      // Delay attaching to avoid triggering on page load
      const timer = setTimeout(() => {
        document.addEventListener("mouseleave", handleMouseLeave);
      }, 5000);

      return () => {
        clearTimeout(timer);
        document.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, [handleMouseLeave]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "exit-intent" }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setMessage(data.message);
        fetch("/api/analytics", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            event: "exit_intent_converted",
            source: "exit-intent",
          }),
        });
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  };

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) setIsVisible(false);
      }}
    >
      <div className="relative w-full max-w-md rounded-2xl bg-gray-900 border border-gray-800 p-8 shadow-2xl">
        {/* Close button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-4 top-4 text-gray-500 hover:text-white transition"
          aria-label="Close"
        >
          &#10005;
        </button>

        {status === "success" ? (
          <div className="text-center py-4">
            <div className="mb-3 text-4xl">&#127881;</div>
            <h3 className="mb-2 text-xl font-bold text-white">
              You&apos;re in! Check your email.
            </h3>
            <p className="text-sm text-gray-400">{message}</p>
            <button
              onClick={() => setIsVisible(false)}
              className="mt-6 rounded-lg bg-indigo-600 px-6 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700"
            >
              Got it
            </button>
          </div>
        ) : (
          <>
            <div className="mb-6 text-center">
              <div className="mb-3 text-3xl">&#9888;&#65039;</div>
              <h3 className="mb-2 text-2xl font-bold text-white">
                Wait! Get 10% off + free sample
              </h3>
              <p className="text-sm text-gray-400">
                Before you go, grab the free BrushFit sample PDF and an
                exclusive 10% discount code. No spam, just gains.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-sm text-white placeholder-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                autoFocus
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full rounded-lg bg-indigo-600 py-3 text-sm font-bold text-white transition hover:bg-indigo-700 disabled:opacity-50"
              >
                {status === "loading"
                  ? "Signing up..."
                  : "Get 10% Off + Free Sample"}
              </button>
            </form>

            {status === "error" && (
              <p className="mt-3 text-center text-sm text-red-400">{message}</p>
            )}

            <p className="mt-4 text-center text-xs text-gray-600">
              No spam. Unsubscribe anytime.
            </p>

            <button
              onClick={() => setIsVisible(false)}
              className="mt-3 w-full text-center text-xs text-gray-600 hover:text-gray-400 transition"
            >
              No thanks, I don&apos;t want a discount
            </button>
          </>
        )}
      </div>
    </div>
  );
}
