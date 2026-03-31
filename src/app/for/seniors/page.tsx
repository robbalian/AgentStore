import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "BrushFit for Seniors — Safe, Gentle Exercises for Older Adults",
  description:
    "Safe exercises for seniors you can do while brushing your teeth. Build balance, prevent falls, and stay active. No equipment, no gym, no floor exercises. Counter support built in.",
  keywords: [
    "fitness for seniors",
    "senior exercises at home",
    "gentle exercises older adults",
    "balance exercises elderly",
    "fall prevention exercises",
    "senior workout no equipment",
    "exercises for 60 plus",
    "senior home fitness",
    "brushfit seniors",
    "safe exercises older adults",
  ],
  openGraph: {
    title: "BrushFit for Seniors — Safe, Gentle Exercises",
    description: "Build balance and prevent falls. Safe exercises while brushing your teeth.",
    type: "website",
  },
  alternates: {
    canonical: "https://agentstore.vercel.app/for/seniors",
  },
};

export default function SeniorsLanding() {
  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "BrushFit for Seniors",
            description: "Safe, gentle exercises for older adults. Build balance and strength while brushing teeth.",
            brand: { "@type": "Brand", name: "BrushFit" },
            offers: {
              "@type": "Offer",
              price: "19.99",
              priceCurrency: "USD",
              availability: "https://schema.org/InStock",
              url: "https://agentstore.vercel.app/for/seniors",
            },
            aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", reviewCount: "47" },
          }),
        }}
      />

      {/* Hero */}
      <section className="mx-auto max-w-3xl px-6 pt-20 pb-12 text-center">
        <p className="mb-4 text-sm font-semibold tracking-widest text-indigo-600 uppercase">
          For Older Adults 60+
        </p>
        <h1 className="mb-6 text-5xl font-extrabold tracking-tight sm:text-6xl">
          Stay Strong.<br />
          <span className="text-indigo-600">Stay Balanced.</span>
        </h1>
        <p className="mx-auto mb-8 max-w-xl text-lg text-gray-500">
          Gentle exercises you do while brushing your teeth. No floor exercises, no equipment, and the bathroom counter is always there for support.
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link href="/buy" className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-8 py-4 text-lg font-bold text-white shadow-lg transition hover:bg-indigo-700">
            Get BrushFit — $19.99
          </Link>
          <a href="/brushfit-sample.pdf" className="inline-flex items-center gap-2 rounded-xl border-2 border-gray-300 px-8 py-4 text-lg font-semibold text-gray-700 transition hover:border-indigo-400 hover:text-indigo-600">
            Free Sample
          </a>
        </div>
      </section>

      {/* Safety Banner */}
      <section className="bg-green-50 py-8">
        <div className="mx-auto max-w-3xl px-6">
          <div className="grid gap-6 sm:grid-cols-4 text-center">
            {[
              { icon: "&#9989;", text: "No floor exercises" },
              { icon: "&#9989;", text: "Counter support built in" },
              { icon: "&#9989;", text: "Low impact & gentle" },
              { icon: "&#9989;", text: "All standing exercises" },
            ].map((item) => (
              <div key={item.text}>
                <span className="text-2xl" dangerouslySetInnerHTML={{ __html: item.icon }} />
                <p className="mt-1 text-sm font-semibold text-gray-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Works */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="mb-8 text-center text-3xl font-bold">Why BrushFit Works for Seniors</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border p-6">
              <h3 className="font-bold text-lg mb-2">Fall Prevention</h3>
              <p className="text-gray-600 text-sm">Calf raises and knee lifts build the balance and leg strength that prevent falls — the #1 injury risk for adults 65+.</p>
            </div>
            <div className="rounded-xl border p-6">
              <h3 className="font-bold text-lg mb-2">Automatic Habit</h3>
              <p className="text-gray-600 text-sm">You already brush twice a day. No motivation needed, no scheduling. The habit is built in.</p>
            </div>
            <div className="rounded-xl border p-6">
              <h3 className="font-bold text-lg mb-2">Built-In Safety</h3>
              <p className="text-gray-600 text-sm">Every exercise is done standing at the sink. The counter provides balance support whenever you need it.</p>
            </div>
            <div className="rounded-xl border p-6">
              <h3 className="font-bold text-lg mb-2">Gentle Progression</h3>
              <p className="text-gray-600 text-sm">Start with 1 exercise per brush and build up slowly. No pressure, no exhaustion. Just steady improvement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended Exercises */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="mb-8 text-center text-3xl font-bold">Recommended Exercises for Seniors</h2>
          <div className="space-y-4">
            {[
              { name: "Supported Calf Raises", benefit: "Ankle stability & circulation", level: "Beginner", desc: "Hold counter, rise onto toes, hold 2 seconds, lower slowly." },
              { name: "Standing Knee Raises", benefit: "Balance & hip strength", level: "Beginner", desc: "Lift knee to hip height with counter support. Alternate legs." },
              { name: "Standing Pelvic Tilts", benefit: "Lower back relief", level: "Beginner", desc: "Gentle forward/back pelvic tilts. Decompresses the spine." },
              { name: "Shoulder Shrugs", benefit: "Neck & shoulder mobility", level: "Beginner", desc: "Raise shoulders, hold 2 seconds, release. Reduces tension." },
              { name: "Partial Wall Sits", benefit: "Quad strength for stairs", level: "Intermediate", desc: "Lean against wall, slide down partially. Hold as comfortable." },
            ].map((ex) => (
              <div key={ex.name} className="rounded-xl bg-white p-5 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold">{ex.name}</h3>
                  <span className={`text-xs px-2 py-1 rounded-full ${ex.level === "Beginner" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`}>
                    {ex.level}
                  </span>
                </div>
                <p className="text-sm text-gray-600">{ex.desc}</p>
                <p className="text-xs text-indigo-600 mt-1 font-semibold">Benefit: {ex.benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="mb-8 text-3xl font-bold">The Numbers</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="rounded-xl bg-indigo-50 p-6">
              <p className="text-3xl font-extrabold text-indigo-600">1 in 4</p>
              <p className="text-sm text-gray-500 mt-1">adults 65+ fall each year (CDC)</p>
            </div>
            <div className="rounded-xl bg-indigo-50 p-6">
              <p className="text-3xl font-extrabold text-indigo-600">28</p>
              <p className="text-sm text-gray-500 mt-1">exercise sessions per week with BrushFit</p>
            </div>
            <div className="rounded-xl bg-indigo-50 p-6">
              <p className="text-3xl font-extrabold text-indigo-600">0</p>
              <p className="text-sm text-gray-500 mt-1">extra minutes needed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gift */}
      <section className="bg-indigo-50 py-12">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="mb-4 text-2xl font-bold">Gift BrushFit to Your Parents</h2>
          <p className="mb-6 text-gray-600">
            A thoughtful gift for aging parents or grandparents. Gentle exercises that build real strength. Bulk pricing available for families.
          </p>
          <Link href="/pricing" className="text-sm font-semibold text-indigo-600 hover:text-indigo-700">
            View bulk pricing &rarr;
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="mb-4 text-3xl font-bold">Start Gentle. Stay Consistent.</h2>
          <p className="mb-8 text-lg text-gray-500">
            22 exercises with modifications for every level. 30-day money-back guarantee. Instant PDF download.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/buy" className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-8 py-4 text-lg font-bold text-white shadow-lg transition hover:bg-indigo-700">
              Get BrushFit — $19.99
            </Link>
            <a href="/brushfit-sample.pdf" className="inline-flex items-center gap-2 rounded-xl border-2 border-gray-300 px-8 py-4 text-lg font-semibold text-gray-700 transition hover:border-indigo-400">
              Free Sample
            </a>
          </div>
          <p className="mt-4 text-sm text-gray-400">30-day money-back guarantee. No questions asked.</p>
        </div>
      </section>
    </main>
  );
}
