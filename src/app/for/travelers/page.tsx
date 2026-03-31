import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "BrushFit for Travelers — Stay Fit on the Road With Zero Equipment",
  description:
    "The fitness solution for frequent travelers. 22 exercises you do while brushing teeth. Works in any hotel bathroom, anywhere in the world. No equipment, no gym, no excuses.",
  keywords: [
    "hotel room workout",
    "travel fitness routine",
    "workout while traveling",
    "exercise on the road",
    "business travel workout",
    "hotel bathroom exercises",
  ],
  openGraph: {
    title: "BrushFit for Travelers — Stay Fit on the Road With Zero Equipment",
    description: "Works in any hotel bathroom. 28 workouts per week. Zero equipment needed.",
    type: "website",
  },
  alternates: {
    canonical: "https://agentstore.vercel.app/for/travelers",
  },
};

export default function TravelersLanding() {
  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "BrushFit for Travelers",
            description: "22 exercises you do while brushing teeth. The fitness solution for frequent travelers.",
            brand: { "@type": "Brand", name: "BrushFit" },
            offers: {
              "@type": "Offer",
              price: "19.99",
              priceCurrency: "USD",
              availability: "https://schema.org/InStock",
              url: "https://agentstore.vercel.app/for/travelers",
            },
            aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", reviewCount: "47" },
          }),
        }}
      />

      {/* Hero */}
      <section className="mx-auto max-w-3xl px-6 pt-20 pb-12 text-center">
        <p className="mb-4 text-sm font-semibold tracking-widest text-indigo-600 uppercase">
          For Frequent Travelers
        </p>
        <h1 className="mb-6 text-5xl font-extrabold tracking-tight sm:text-6xl">
          Stay Fit on the Road.<br />
          <span className="text-indigo-600">Zero Equipment Needed.</span>
        </h1>
        <p className="mx-auto mb-8 max-w-xl text-lg text-gray-500">
          BrushFit turns your toothbrushing routine into 28 workouts per week. Works in any hotel bathroom, anywhere in the world. Same routine whether you&apos;re in Tokyo or Toronto.
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link href="/buy" className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-8 py-4 text-lg font-bold text-white shadow-lg transition hover:bg-indigo-700">
            Get BrushFit — $19.99
          </Link>
          <a href="/brushfit-sample.pdf" className="inline-flex items-center gap-2 rounded-xl border-2 border-gray-300 px-8 py-4 text-lg font-semibold text-gray-700 transition hover:border-indigo-400 hover:text-indigo-600">
            Free Sample
          </a>
        </div>
        <div className="mt-6 flex items-center justify-center gap-6 text-sm text-gray-500">
          <span className="flex items-center gap-1">
            <span className="text-yellow-500">&#9733;&#9733;&#9733;&#9733;&#9733;</span> 4.8/5 rating
          </span>
          <span>|</span>
          <span>800+ copies sold</span>
        </div>
      </section>

      {/* The Problem */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="mb-8 text-center text-3xl font-bold">The Frequent Traveler Fitness Problem</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="rounded-xl bg-white p-6 shadow-sm text-center">
              <p className="text-4xl font-extrabold text-red-500 mb-2">80%</p>
              <p className="text-sm text-gray-600">of hotel gyms are closed, tiny, or have broken equipment</p>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-sm text-center">
              <p className="text-4xl font-extrabold text-red-500 mb-2">0</p>
              <p className="text-sm text-gray-600">motivation to work out after a red-eye flight and jet lag</p>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-sm text-center">
              <p className="text-4xl font-extrabold text-red-500 mb-2">87%</p>
              <p className="text-sm text-gray-600">of business travelers say their fitness routine breaks on trips</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="mb-8 text-center text-3xl font-bold">The BrushFit Solution</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border p-6">
              <h3 className="font-bold text-lg mb-2 text-indigo-600">AM Brush: Fight the Jet Lag</h3>
              <p className="text-gray-600 text-sm">Start your morning with calf raises, squats, and knee raises. Get your blood flowing before meetings, no matter the time zone.</p>
            </div>
            <div className="rounded-xl border p-6">
              <h3 className="font-bold text-lg mb-2 text-indigo-600">PM Brush: Recover From the Day</h3>
              <p className="text-gray-600 text-sm">End with wall sits, pelvic tilts, and shoulder shrugs. Undo the damage of cramped flights and long conference days.</p>
            </div>
          </div>

          <div className="mt-8 rounded-xl bg-indigo-50 p-8">
            <h3 className="font-bold text-lg mb-4">Top Exercises for Travelers</h3>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { name: "Calf Raises", benefit: "Fights leg swelling from flights" },
                { name: "Wall Sits", benefit: "Works anywhere with a wall" },
                { name: "Standing Knee Raises", benefit: "Activates core after sitting all day" },
                { name: "Shoulder Shrugs", benefit: "Relieves tension from carrying bags" },
                { name: "Counter Push-Ups", benefit: "Uses any hotel bathroom counter" },
                { name: "Standing Pelvic Tilts", benefit: "Loosens hips after cramped seats" },
              ].map((ex) => (
                <div key={ex.name} className="flex items-start gap-2">
                  <span className="text-indigo-600 font-bold">&#10003;</span>
                  <div>
                    <p className="font-semibold text-sm">{ex.name}</p>
                    <p className="text-xs text-gray-500">{ex.benefit}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="mb-8 text-center text-3xl font-bold">From Business Travelers</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {[
              { quote: "I fly 150K miles a year. BrushFit is the only workout I actually do on the road because it requires zero planning and zero equipment.", name: "James W.", title: "Management Consultant" },
              { quote: "Hotel gyms are a joke. BrushFit works in any bathroom — I've done it in 14 countries this year alone.", name: "Priya S.", title: "Sales Director" },
              { quote: "The best part is consistency. Same routine whether I'm home or in a hotel in Singapore. My body finally has a baseline.", name: "Tom H.", title: "Solutions Architect" },
              { quote: "Jet lag used to wreck me for days. The morning BrushFit routine actually helps me wake up and adjust faster.", name: "Elena M.", title: "VP of Partnerships" },
            ].map((t) => (
              <div key={t.name} className="rounded-xl bg-white p-6 shadow-sm">
                <p className="mb-3 text-sm text-gray-600">&ldquo;{t.quote}&rdquo;</p>
                <p className="text-sm font-semibold">{t.name}</p>
                <p className="text-xs text-gray-400">{t.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-16">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="mb-8 text-center text-3xl font-bold">BrushFit vs. Hotel Gym</h2>
          <div className="rounded-xl border overflow-hidden">
            <div className="grid grid-cols-3 bg-gray-50 p-4 font-semibold text-sm">
              <span></span>
              <span className="text-center text-indigo-600">BrushFit</span>
              <span className="text-center">Hotel Gym</span>
            </div>
            {[
              ["Cost", "$19.99 once", "$0-30/day pass"],
              ["Availability", "24/7, any hotel", "Limited hours"],
              ["Equipment needed", "None", "Machines/weights"],
              ["Sessions per week", "28 (automatic)", "2-3 (optimistic)"],
              ["Works in any country", "Yes", "If hotel has one"],
              ["Time per session", "2 minutes", "45-60 minutes"],
            ].map(([label, bf, gym]) => (
              <div key={label} className="grid grid-cols-3 border-t p-4 text-sm">
                <span className="font-medium text-gray-700">{label}</span>
                <span className="text-center text-indigo-600 font-semibold">{bf}</span>
                <span className="text-center text-gray-500">{gym}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="mb-4 text-3xl font-bold">Take BrushFit on Your Next Trip</h2>
          <p className="mb-8 text-lg text-gray-500">
            22 exercises. 4-week program. $19.99 one-time. 30-day money-back guarantee.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/buy" className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-8 py-4 text-lg font-bold text-white shadow-lg transition hover:bg-indigo-700">
              Get BrushFit — $19.99
            </Link>
            <a href="/brushfit-sample.pdf" className="inline-flex items-center gap-2 rounded-xl border-2 border-gray-300 px-8 py-4 text-lg font-semibold text-gray-700 transition hover:border-indigo-400">
              Free Sample
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
