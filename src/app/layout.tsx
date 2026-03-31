import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BrushFit — The 2-Minute Toothbrush Workout Guide",
  description:
    "22 illustrated exercises you do while brushing your teeth. One hand brushes, one hand works out. $19.99 instant PDF download.",
  openGraph: {
    title: "BrushFit — The 2-Minute Toothbrush Workout Guide",
    description:
      "Turn your toothbrushing routine into a full-body workout. 22 exercises, 4-week program, instant PDF.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased">{children}</body>
    </html>
  );
}
