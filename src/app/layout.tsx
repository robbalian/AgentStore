import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "BrushFit — The 2-Minute Toothbrush Workout Guide | AgentStore",
    template: "%s | AgentStore",
  },
  description:
    "22 illustrated exercises you do while brushing your teeth. One hand brushes, one hand works out. $19.99 instant PDF download. Pay with card, crypto, or AI agent.",
  keywords: [
    "toothbrush workout",
    "brushfit",
    "2 minute workout",
    "exercise while brushing teeth",
    "habit stacking fitness",
    "micro workout",
    "bodyweight exercises",
    "no equipment workout",
    "bathroom exercises",
    "fitness pdf",
    "agent store",
    "x402 payment",
    "buy with crypto",
    "ai agent commerce",
  ],
  authors: [{ name: "Rob Balian" }],
  creator: "Rob Balian",
  publisher: "AgentStore",
  openGraph: {
    title: "BrushFit — The 2-Minute Toothbrush Workout Guide",
    description:
      "Turn your toothbrushing routine into a full-body workout. 22 exercises, 4-week program, instant PDF. $19.99.",
    type: "website",
    siteName: "AgentStore",
    url: "https://agentstore.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "BrushFit — 2-Minute Toothbrush Workout",
    description: "22 exercises while brushing your teeth. $19.99 PDF. Pay with card, crypto, or AI agent.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://agentstore.vercel.app",
  },
  verification: {
    google: "GOOGLE_SITE_VERIFICATION_PLACEHOLDER",
    other: {
      "msvalidate.01": "BING_SITE_VERIFICATION_PLACEHOLDER",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="alternate" type="application/rss+xml" title="BrushFit AgentStore Blog" href="/feed.xml" />
      </head>
      <body className="bg-white text-gray-900 antialiased" style={{ fontFamily: "'Inter', sans-serif" }}>
        {/* Top Promo Banner */}
        <div className="bg-indigo-600 text-white text-center text-sm py-2 px-4">
          <a href="/buy" className="hover:underline">
            Get BrushFit — 22 toothbrush workouts for $19.99. Instant PDF download &rarr;
          </a>
        </div>

        {children}

        {/* Structured Navigation Footer */}
        <nav className="border-t bg-gray-50 py-6">
          <div className="mx-auto max-w-4xl px-6">
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
              <a href="/" className="hover:text-indigo-600">Home</a>
              <a href="/buy" className="hover:text-indigo-600">Buy</a>
              <a href="/pricing" className="hover:text-indigo-600">Pricing</a>
              <a href="/exercises" className="hover:text-indigo-600">Exercises</a>
              <a href="/reviews" className="hover:text-indigo-600">Reviews</a>
              <a href="/blog" className="hover:text-indigo-600">Blog</a>
              <a href="/agents" className="hover:text-indigo-600">Agents</a>
              <a href="/developers" className="hover:text-indigo-600">Developers</a>
              <a href="/affiliates" className="hover:text-indigo-600">Affiliates</a>
              <a href="/about" className="hover:text-indigo-600">About</a>
              <a href="/payments" className="hover:text-indigo-600">Payments</a>
            </div>
            <div className="mt-2 flex flex-wrap justify-center gap-6 text-xs text-gray-500">
              <a href="/for/remote-workers" className="hover:text-indigo-600">For Remote Workers</a>
              <a href="/for/seniors" className="hover:text-indigo-600">For Seniors</a>
              <a href="/for/busy-parents" className="hover:text-indigo-600">For Busy Parents</a>
              <a href="/for/college-students" className="hover:text-indigo-600">For College Students</a>
              <a href="/for/travelers" className="hover:text-indigo-600">For Travelers</a>
              <a href="/agent-registries" className="hover:text-indigo-600">Agent Registries</a>
            </div>
            <div className="mt-3 flex flex-wrap justify-center gap-6 text-xs text-gray-400">
              <a href="/privacy" className="hover:text-gray-600">Privacy</a>
              <a href="/terms" className="hover:text-gray-600">Terms</a>
              <a href="/refund-policy" className="hover:text-gray-600">Refund Policy</a>
              <a href="mailto:rob@robbalian.com" className="hover:text-gray-600">Contact</a>
            </div>
          </div>
        </nav>
      </body>
    </html>
  );
}
