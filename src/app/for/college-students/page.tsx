import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "BrushFit for College Students — Get Fit Without a Gym Membership",
  description:
    "The fitness solution for broke, busy college students. 22 exercises you do while brushing teeth. No gym, no equipment, no extra time. Works in any dorm bathroom.",
  keywords: [
    "college student workout",
    "dorm room exercises",
    "student fitness routine",
    "cheap workout plan college",
    "no gym workout student",
    "freshman fitness",
    "college fitness no equipment",
    "brushfit college students",
  ],
  openGraph: {
    title: "BrushFit for College Students — Get Fit Without a Gym Membership",
    description: "22 exercises. Zero equipment. Works in any dorm bathroom. $19.99 one-time.",
    type: "website",
  },
  alternates: {
    canonical: "https://agentstore.vercel.app/for/college-students",
  },
};

export default function CollegeStudentsLanding() {
  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "BrushFit for College Students",
            description: "22 exercises you do while brushing teeth. The fitness solution for college students.",
            brand: { "@type": "Brand", name: "BrushFit" },
            offers: {
              "@type": "Offer",
              price: "19.99",
              priceCurrency: "USD",
              availability: "https://schema.org/InStock",
              url: "https://agentstore.vercel.app/for/college-students",
            },
            aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", reviewCount: "47" },
          }),
        }}
      />

      {/* Hero */}
      <section className="mx-auto max-w-3xl px-6 pt-20 pb-12 text-center">
        <p className="mb-4 text-sm font-semibold tracking-widest text-indigo-600 uppercase">
          For College Students
        </p>
        <h1 className="mb-6 text-5xl font-extrabold tracking-tight sm:text-6xl">
          $19.99 — Less Than One Month<br />
          <span className="text-indigo-600">of Gym Membership.</span>
        </h1>
        <p className="mx-auto mb-8 max-w-xl text-lg text-gray-500">
          BrushFit turns your toothbrushing routine into 28 workouts per week. No gym, no equipment, no extra time. Just exercise while you brush — in any dorm bathroom.
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
          <h2 className="mb-8 text-center text-3xl font-bold">The College Student Fitness Problem</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl bg-white p-6 shadow-sm text-center">
              <p className="text-4xl font-extrabold text-red-500 mb-2">8x10</p>
              <p className="text-sm text-gray-600">Your dorm room is tiny — no space for equipment or workout mats</p>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-sm text-center">
              <p className="text-4xl font-extrabold text-red-500 mb-2">5pm</p>
              <p className="text-sm text-gray-600">The campus gym is packed from 4-8pm — you&apos;ll wait 20 min for a bench</p>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-sm text-center">
              <p className="text-4xl font-extrabold text-red-500 mb-2">$0</p>
              <p className="text-sm text-gray-600">Your budget after tuition, textbooks, and ramen — broke and busy</p>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-sm text-center">
              <p className="text-4xl font-extrabold text-red-500 mb-2">18hr</p>
              <p className="text-sm text-gray-600">Between classes, studying, and part-time jobs — zero free time</p>
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
              <h3 className="font-bold text-lg mb-2 text-indigo-600">Works in Any Bathroom</h3>
              <p className="text-gray-600 text-sm">Dorm bathroom, shared suite, apartment — all you need is a sink and 2 feet of floor space. No equipment, no mats, no weights.</p>
            </div>
            <div className="rounded-xl border p-6">
              <h3 className="font-bold text-lg mb-2 text-indigo-600">Zero Extra Time</h3>
              <p className="text-gray-600 text-sm">You&apos;re already brushing your teeth twice a day. BrushFit turns those 4 minutes into real exercise. No schedule changes needed.</p>
            </div>
          </div>

          <div className="mt-8 rounded-xl bg-indigo-50 p-8">
            <h3 className="font-bold text-lg mb-4">Top Exercises for Students</h3>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { name: "Calf Raises", benefit: "Build legs without any equipment" },
                { name: "Wall Sits", benefit: "Strengthen quads between study sessions" },
                { name: "Counter Push-Ups", benefit: "Build upper body using any sink counter" },
                { name: "Standing Knee Raises", benefit: "Core work in minimal space" },
                { name: "Shoulder Shrugs", benefit: "Release tension from hunching over textbooks" },
                { name: "Standing Pelvic Tilts", benefit: "Fix posture from sitting in lectures" },
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
          <h2 className="mb-8 text-center text-3xl font-bold">From College Students</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {[
              { quote: "The campus gym is always packed and I never went. BrushFit is the first workout I've actually stuck with all semester.", name: "Jake M.", title: "Sophomore, Business Major" },
              { quote: "I gained the freshman 15 because the dining hall food is terrible and I never exercised. Down 8 lbs since starting BrushFit.", name: "Priya S.", title: "Freshman, Pre-Med" },
              { quote: "My roommate thought I was weird doing calf raises while brushing. Now she bought it too. Our whole floor does it.", name: "Taylor R.", title: "Junior, Communications" },
              { quote: "Between 18 credit hours and my part-time job I have zero free time. BrushFit literally costs me zero extra minutes.", name: "Chris D.", title: "Senior, Computer Science" },
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
          <h2 className="mb-8 text-center text-3xl font-bold">BrushFit vs. Campus Gym</h2>
          <div className="rounded-xl border overflow-hidden">
            <div className="grid grid-cols-3 bg-gray-50 p-4 font-semibold text-sm">
              <span></span>
              <span className="text-center text-indigo-600">BrushFit</span>
              <span className="text-center">Campus Gym</span>
            </div>
            {[
              ["Cost", "$19.99 once", "$30-60/semester"],
              ["Extra time needed", "0 minutes", "60-90 min/session"],
              ["Sessions per week", "28 (automatic)", "2-3 (realistic)"],
              ["Crowded?", "Never", "Always at peak hours"],
              ["Equipment", "None", "Wait for machines"],
              ["Works in pajamas?", "Yes", "Definitely not"],
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
            22 exercises. 4-week program. $19.99 one-time — less than two dining hall meals. 30-day money-back guarantee.
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
