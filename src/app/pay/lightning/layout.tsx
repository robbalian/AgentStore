import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Pay with Bitcoin Lightning Network — BrushFit | Instant, Low-Fee Bitcoin Payments",
  description:
    "Buy BrushFit for $19.99 using Bitcoin Lightning Network. Instant settlement, near-zero fees. Scan a QR code or paste a BOLT11 invoice from any Lightning wallet.",
  alternates: { canonical: "https://agentstore.vercel.app/pay/lightning" },
  openGraph: {
    title: "Pay with Bitcoin Lightning — BrushFit $19.99",
    description:
      "Instant Bitcoin payments via Lightning Network. Near-zero fees, settles in seconds. Pay from Phoenix, Muun, Breez, Strike, Cash App, or any Lightning wallet.",
  },
};

export default function LightningLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
