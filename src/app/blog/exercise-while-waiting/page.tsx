import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Exercises While Waiting: Turn Dead Time Into Workout Time",
  description:
    "15 exercises you can do while waiting — brushing teeth, microwave, coffee brewing, elevator, checkout line. Turn wasted minutes into fitness gains with zero extra time.",
  keywords: [
    "exercises while waiting",
    "exercise while brushing teeth",
    "workout while waiting",
    "exercises during daily routine",
    "micro exercises throughout the day",
    "exercise snacking ideas",
    "calf raises while waiting",
    "squats while brushing teeth",
    "dead time workout",
    "exercises in line",
  ],
  openGraph: {
    title: "Exercises While Waiting: Turn Dead Time Into Workout Time",
    description: "15 exercises you can do while waiting. Zero extra time needed.",
    type: "article",
  },
  alternates: {
    canonical: "https://agentstore.vercel.app/blog/exercise-while-waiting",
  },
};

export default function ExerciseWhileWaiting() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Exercises While Waiting: Turn Dead Time Into Workout Time",
            description: "15 exercises you can do during daily waiting moments. Zero extra time required.",
            author: { "@type": "Person", name: "Rob Balian" },
            publisher: { "@type": "Organization", name: "BrushFit AgentStore" },
            datePublished: "2026-03-31",
            dateModified: "2026-03-31",
          }),
        }}
      />

      <nav className="mb-8 text-sm text-gray-400">
        <Link href="/" className="hover:text-indigo-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-indigo-600">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-600">Exercises While Waiting</span>
      </nav>

      <header className="mb-12">
        <p className="mb-2 text-sm font-semibold text-indigo-600">Fitness Tips</p>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
          Exercises While Waiting: Turn Dead Time Into Workout Time
        </h1>
        <p className="text-lg text-gray-500">
          You spend 30-60 minutes per day waiting. Brushing teeth, microwaving food, brewing coffee, standing in line. Here&apos;s how to turn that dead time into fitness gains.
        </p>
      </header>

      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl font-bold mt-10 mb-4">The Hidden Workout Time in Your Day</h2>
        <p className="text-gray-700 mb-4">
          Most people say they don&apos;t have time to exercise. But consider how much time you spend just... waiting:
        </p>
        <div className="rounded-xl bg-gray-50 p-6 my-8">
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="flex justify-between"><span className="text-gray-600">Brushing teeth (2x)</span><span className="font-bold">4 min</span></div>
            <div className="flex justify-between"><span className="text-gray-600">Microwave/oven</span><span className="font-bold">5 min</span></div>
            <div className="flex justify-between"><span className="text-gray-600">Coffee brewing</span><span className="font-bold">3 min</span></div>
            <div className="flex justify-between"><span className="text-gray-600">Waiting for elevator</span><span className="font-bold">2 min</span></div>
            <div className="flex justify-between"><span className="text-gray-600">Checkout lines</span><span className="font-bold">5 min</span></div>
            <div className="flex justify-between"><span className="text-gray-600">Water boiling</span><span className="font-bold">3 min</span></div>
          </div>
          <div className="mt-4 pt-4 border-t flex justify-between font-bold">
            <span>Total recoverable time:</span>
            <span className="text-indigo-600">22+ minutes/day</span>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4">While Brushing Teeth (The BrushFit Method)</h2>
        <p className="text-gray-700 mb-4">
          This is the gold standard of waiting exercises. You do it twice a day, every day, for exactly 2 minutes. BrushFit has 22 exercises designed specifically for this moment:
        </p>
        <div className="space-y-3 mb-6">
          <div className="rounded-lg border p-4">
            <h4 className="font-semibold">Calf Raises</h4>
            <p className="text-sm text-gray-600">Rise onto your toes, hold, lower slowly. 30-50 reps per brush session.</p>
          </div>
          <div className="rounded-lg border p-4">
            <h4 className="font-semibold">Wall Sits</h4>
            <p className="text-sm text-gray-600">Lean against bathroom wall, slide down to 90 degrees, hold for the full 2 minutes.</p>
          </div>
          <div className="rounded-lg border p-4">
            <h4 className="font-semibold">Bodyweight Squats</h4>
            <p className="text-sm text-gray-600">Slow, controlled squats. 15-20 reps during one brush session.</p>
          </div>
          <div className="rounded-lg border p-4">
            <h4 className="font-semibold">Standing Knee Raises</h4>
            <p className="text-sm text-gray-600">Alternate knee lifts for core activation and hip mobility.</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4">While Microwaving Food</h2>
        <p className="text-gray-700 mb-4">
          The average microwave session is 2-3 minutes. Perfect for:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
          <li><strong>Counter push-ups:</strong> Use the kitchen counter for incline push-ups. 15-20 reps.</li>
          <li><strong>Standing oblique crunches:</strong> Side bends with hands behind head. 10 per side.</li>
          <li><strong>Calf raises:</strong> The universal waiting exercise. 30+ reps.</li>
          <li><strong>Sumo squats:</strong> Wide stance squats with toes pointed out. Great for inner thighs.</li>
        </ul>

        <h2 className="text-2xl font-bold mt-10 mb-4">While Brewing Coffee</h2>
        <p className="text-gray-700 mb-4">
          Whether it&apos;s a French press, drip, or pour-over, you have 3-5 minutes of standing time:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
          <li><strong>Standing march:</strong> High knees in place. Gets your heart rate up before the caffeine kicks in.</li>
          <li><strong>Shoulder rolls:</strong> Forward and backward. Release morning tension.</li>
          <li><strong>Wrist rotations:</strong> Especially good before a day of typing.</li>
        </ul>

        <h2 className="text-2xl font-bold mt-10 mb-4">While Waiting for the Elevator</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
          <li><strong>Calf raises:</strong> Quick set while you wait. 10-15 reps.</li>
          <li><strong>Isometric wall press:</strong> Push against the wall with both hands. Hold 10 seconds.</li>
          <li><strong>Single-leg balance:</strong> Stand on one foot. Switch when the elevator arrives.</li>
        </ul>

        <h2 className="text-2xl font-bold mt-10 mb-4">While Standing in Line</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
          <li><strong>Subtle calf raises:</strong> Small, slow raises that nobody notices.</li>
          <li><strong>Glute squeezes:</strong> Squeeze and hold for 5 seconds. Release. Repeat.</li>
          <li><strong>Core engagement:</strong> Pull your belly button to spine, hold 10 seconds.</li>
        </ul>

        <h2 className="text-2xl font-bold mt-10 mb-4">The Science of Exercise Snacking</h2>
        <p className="text-gray-700 mb-4">
          Research from the <em>British Journal of Sports Medicine</em> shows that &ldquo;exercise snacks&rdquo; — short bursts of 1-2 minutes throughout the day — produce measurable improvements in cardiorespiratory fitness, muscle endurance, and metabolic health.
        </p>
        <p className="text-gray-700 mb-4">
          The key insight: <strong>frequency matters more than duration</strong>. Ten 2-minute sessions beat one 20-minute session for most health markers.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">Why Toothbrushing Is the Best Anchor Habit</h2>
        <p className="text-gray-700 mb-4">
          Of all waiting moments, toothbrushing is the most reliable because:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
          <li>You do it at the same time every day (morning and night)</li>
          <li>You&apos;re already standing in a private space with a counter for support</li>
          <li>The duration is fixed at exactly 2 minutes</li>
          <li>You literally cannot forget — dental hygiene is non-negotiable</li>
          <li>It bookends your day: energizing exercises in AM, calming in PM</li>
        </ul>

        <div className="rounded-xl bg-indigo-50 p-6 my-8">
          <h3 className="font-bold text-lg mb-2">The Compounding Effect</h3>
          <p className="text-gray-700">
            If you exercise during just toothbrushing, that&apos;s <strong>28 sessions per week</strong>. Add microwaving and coffee? That&apos;s <strong>40+ micro-workouts per week</strong>. All without a single extra minute. In a year, that&apos;s over <strong>2,000 exercise sessions</strong> you wouldn&apos;t have done otherwise.
          </p>
        </div>
      </div>

      <div className="mt-12 rounded-xl bg-indigo-50 p-8 text-center">
        <h3 className="mb-2 text-xl font-bold">Start with BrushFit</h3>
        <p className="mb-4 text-gray-600">
          22 exercises designed for your toothbrushing routine. The easiest way to start exercising while waiting.
        </p>
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link href="/buy" className="inline-block rounded-xl bg-indigo-600 px-8 py-3 font-bold text-white transition hover:bg-indigo-700">
            Get BrushFit — $19.99
          </Link>
          <a href="/brushfit-sample.pdf" className="inline-block rounded-xl border-2 border-gray-300 px-8 py-3 font-semibold text-gray-700 transition hover:border-indigo-400">
            Free Sample
          </a>
        </div>
      </div>
    </article>
  );
}
