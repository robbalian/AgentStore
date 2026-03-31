import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "BrushFit for Remote Workers — Stay Fit Working From Home",
  description:
    "The fitness solution for remote workers. 22 exercises you do while brushing teeth. Zero extra time, no gym, no equipment. Perfect for WFH professionals who sit all day.",
  keywords: [
    "fitness for remote workers",
    "remote worker workout",
    "work from home fitness",
    "wfh exercise routine",
    "sedentary worker exercises",
    "desk worker fitness",
    "home office workout",
    "brushfit remote workers",
  ],
  openGraph: {
    title: "BrushFit for Remote Workers — Stay Fit Working From Home",
    description: "Zero extra time. 28 workouts per week. Perfect for WFH professionals.",
    type: "website",
  },
  alternates: {
    canonical: "https://agentstore.vercel.app/for/remote-workers",
  },
};

export default function RemoteWorkersLanding() {
  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "BrushFit for Remote Workers",
            description: "22 exercises you do while brushing teeth. The fitness solution for remote workers.",
            brand: { "@type": "Brand", name: "BrushFit" },
            offers: {
              "@type": "Offer",
              price: "19.99",
              priceCurrency: "USD",
              availability: "https://schema.org/InStock",
              url: "https://agentstore.vercel.app/for/remote-workers",
            },
            aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", reviewCount: "47" },
          }),
        }}
      />

      {/* Hero */}
      <section className="mx-auto max-w-3xl px-6 pt-20 pb-12 text-center">
        <p className="mb-4 text-sm font-semibold tracking-widest text-indigo-600 uppercase">
          For Remote Workers
        </p>
        <h1 className="mb-6 text-5xl font-extrabold tracking-tight sm:text-6xl">
          You Sit 10+ Hours a Day.<br />
          <span className="text-indigo-600">Fix That in 2 Minutes.</span>
        </h1>
        <p className="mx-auto mb-8 max-w-xl text-lg text-gray-500">
          BrushFit turns your toothbrushing routine into 28 workouts per week. No gym, no equipment, no extra time. Just exercise while you brush.
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
          <h2 className="mb-8 text-center text-3xl font-bold">The Remote Worker Fitness Problem</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="rounded-xl bg-white p-6 shadow-sm text-center">
              <p className="text-4xl font-extrabold text-red-500 mb-2">70%</p>
              <p className="text-sm text-gray-600">of remote workers say they&apos;re less active than before</p>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-sm text-center">
              <p className="text-4xl font-extrabold text-red-500 mb-2">10+</p>
              <p className="text-sm text-gray-600">hours of sitting per day for the average WFH professional</p>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-sm text-center">
              <p className="text-4xl font-extrabold text-red-500 mb-2">3K</p>
              <p className="text-sm text-gray-600">steps per day — less than half the minimum recommended</p>
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
              <h3 className="font-bold text-lg mb-2 text-indigo-600">AM Brush: Wake Up Your Body</h3>
              <p className="text-gray-600 text-sm">Start your workday with calf raises, squats, and knee raises. Activate muscles before the first Zoom call.</p>
            </div>
            <div className="rounded-xl border p-6">
              <h3 className="font-bold text-lg mb-2 text-indigo-600">PM Brush: Undo the Damage</h3>
              <p className="text-gray-600 text-sm">End with wall sits, pelvic tilts, and shoulder shrugs. Decompress your spine and release tension from sitting.</p>
            </div>
          </div>

          <div className="mt-8 rounded-xl bg-indigo-50 p-8">
            <h3 className="font-bold text-lg mb-4">Top Exercises for Desk Workers</h3>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { name: "Wall Sits", benefit: "Counters hip flexor tightness" },
                { name: "Standing Pelvic Tilts", benefit: "Relieves lower back pain" },
                { name: "Shoulder Shrugs", benefit: "Releases neck/shoulder tension" },
                { name: "Calf Raises", benefit: "Improves leg circulation" },
                { name: "Counter Push-Ups", benefit: "Strengthens chest and arms" },
                { name: "Standing Knee Raises", benefit: "Activates core muscles" },
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
          <h2 className="mb-8 text-center text-3xl font-bold">From Remote Workers</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {[
              { quote: "I sit 10 hours coding. BrushFit is the only exercise I do consistently because I can't forget — I'm already at the sink.", name: "Marcus T.", title: "Full-Stack Developer" },
              { quote: "My lower back pain from WFH is noticeably better after 3 weeks of pelvic tilts during my evening brush.", name: "Sarah K.", title: "Product Manager" },
              { quote: "Started doing wall sits while brushing. My legs haven't been this strong since pre-COVID when I went to the gym.", name: "David L.", title: "Data Scientist" },
              { quote: "As a freelancer I have zero routine. BrushFit is the one thing I do consistently every single day.", name: "Mia R.", title: "Freelance Designer" },
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
          <h2 className="mb-8 text-center text-3xl font-bold">BrushFit vs. Gym for Remote Workers</h2>
          <div className="rounded-xl border overflow-hidden">
            <div className="grid grid-cols-3 bg-gray-50 p-4 font-semibold text-sm">
              <span></span>
              <span className="text-center text-indigo-600">BrushFit</span>
              <span className="text-center">Gym</span>
            </div>
            {[
              ["Cost", "$19.99 once", "$50-100/mo"],
              ["Extra time needed", "0 minutes", "60-90 min/session"],
              ["Sessions per week", "28 (automatic)", "3-4 (realistic)"],
              ["Leave the house?", "No", "Yes"],
              ["Equipment", "None", "Machines/weights"],
              ["Works in pajamas?", "Yes", "No"],
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
          <h2 className="mb-4 text-3xl font-bold">Start Your BrushFit Routine</h2>
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
