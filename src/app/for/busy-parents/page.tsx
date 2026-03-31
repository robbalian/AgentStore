import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "BrushFit for Busy Parents — Stay Fit With Zero Free Time",
  description:
    "The fitness solution for busy parents. 22 exercises you do while brushing teeth. Zero extra time, no gym, no babysitter needed. Perfect for moms and dads who have no time to work out.",
  keywords: [
    "workout for busy parents",
    "parents fitness routine",
    "exercise with kids",
    "no time workout parents",
    "mom workout routine",
    "dad fitness routine",
    "busy parent exercise",
    "brushfit busy parents",
  ],
  openGraph: {
    title: "BrushFit for Busy Parents — Stay Fit With Zero Free Time",
    description: "Zero extra time. 28 workouts per week. Perfect for parents who can't find a minute for themselves.",
    type: "website",
  },
  alternates: {
    canonical: "https://agentstore.vercel.app/for/busy-parents",
  },
};

export default function BusyParentsLanding() {
  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "BrushFit for Busy Parents",
            description: "22 exercises you do while brushing teeth. The fitness solution for busy parents.",
            brand: { "@type": "Brand", name: "BrushFit" },
            offers: {
              "@type": "Offer",
              price: "19.99",
              priceCurrency: "USD",
              availability: "https://schema.org/InStock",
              url: "https://agentstore.vercel.app/for/busy-parents",
            },
            aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", reviewCount: "47" },
          }),
        }}
      />

      {/* Hero */}
      <section className="mx-auto max-w-3xl px-6 pt-20 pb-12 text-center">
        <p className="mb-4 text-sm font-semibold tracking-widest text-indigo-600 uppercase">
          For Busy Parents
        </p>
        <h1 className="mb-6 text-5xl font-extrabold tracking-tight sm:text-6xl">
          Zero Free Time? Zero Problem.<br />
          <span className="text-indigo-600">Work Out While You Brush.</span>
        </h1>
        <p className="mx-auto mb-8 max-w-xl text-lg text-gray-500">
          BrushFit turns your toothbrushing routine into 28 workouts per week. No gym membership, no babysitter, no extra time. You already brush your teeth with the kids watching — now you exercise too.
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
          <h2 className="mb-8 text-center text-3xl font-bold">The Parent Fitness Problem</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="rounded-xl bg-white p-6 shadow-sm text-center">
              <p className="text-4xl font-extrabold text-red-500 mb-2">76%</p>
              <p className="text-sm text-gray-600">of parents say they stopped working out after having kids</p>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-sm text-center">
              <p className="text-4xl font-extrabold text-red-500 mb-2">0</p>
              <p className="text-sm text-gray-600">minutes of free time in the average parent&apos;s morning routine</p>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-sm text-center">
              <p className="text-4xl font-extrabold text-red-500 mb-2">$1,200</p>
              <p className="text-sm text-gray-600">per year wasted on gym memberships parents never use</p>
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
              <h3 className="font-bold text-lg mb-2 text-indigo-600">AM Brush: Energize Before the Chaos</h3>
              <p className="text-gray-600 text-sm">Start your day with calf raises, squats, and knee raises while the kids brush beside you. Model healthy habits and get your blood flowing before school drop-off.</p>
            </div>
            <div className="rounded-xl border p-6">
              <h3 className="font-bold text-lg mb-2 text-indigo-600">PM Brush: Decompress After Bedtime</h3>
              <p className="text-gray-600 text-sm">End the day with wall sits, pelvic tilts, and shoulder shrugs. Release the tension from carrying kids, hunching over homework, and running around all day.</p>
            </div>
          </div>

          <div className="mt-8 rounded-xl bg-indigo-50 p-8">
            <h3 className="font-bold text-lg mb-4">Top Exercises for Busy Parents</h3>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { name: "Calf Raises", benefit: "Strengthens legs from carrying kids" },
                { name: "Wall Sits", benefit: "Builds endurance for playground duty" },
                { name: "Standing Knee Raises", benefit: "Tightens core after pregnancy" },
                { name: "Shoulder Shrugs", benefit: "Releases tension from holding toddlers" },
                { name: "Counter Push-Ups", benefit: "Rebuilds upper body strength" },
                { name: "Standing Pelvic Tilts", benefit: "Relieves postpartum back pain" },
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
          <h2 className="mb-8 text-center text-3xl font-bold">From Busy Parents</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {[
              { quote: "I have a 2-year-old and a 4-year-old. The gym is not happening. BrushFit is the only exercise I've done consistently in 3 years.", name: "Jessica M.", title: "Mom of 2" },
              { quote: "My kids now do squats with me while we brush. It's become our favorite morning routine. I'm fitter and they think it's a game.", name: "Chris D.", title: "Dad of 3" },
              { quote: "After baby #2, I couldn't find 10 minutes for myself. BrushFit uses time I already spend. That's what made it click.", name: "Amanda L.", title: "Working Mom" },
              { quote: "I cancelled my $80/month gym membership I never used. BrushFit cost me $20 and I actually do it every single day.", name: "Ryan P.", title: "Stay-at-Home Dad" },
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
          <h2 className="mb-8 text-center text-3xl font-bold">BrushFit vs. Gym for Parents</h2>
          <div className="rounded-xl border overflow-hidden">
            <div className="grid grid-cols-3 bg-gray-50 p-4 font-semibold text-sm">
              <span></span>
              <span className="text-center text-indigo-600">BrushFit</span>
              <span className="text-center">Gym</span>
            </div>
            {[
              ["Cost", "$19.99 once", "$50-100/mo"],
              ["Extra time needed", "0 minutes", "60-90 min/session"],
              ["Babysitter required?", "No", "Usually yes"],
              ["Sessions per week", "28 (automatic)", "1-2 (realistic)"],
              ["Kids can join?", "Yes, they love it", "No"],
              ["Works during bedtime chaos?", "Yes", "No"],
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
