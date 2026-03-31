import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "The Ultimate No-Equipment Home Workout Guide | BrushFit",
  description:
    "Build strength anywhere with zero equipment. Complete guide to bodyweight exercises for every muscle group using walls, doors, counters, and household items.",
  keywords: [
    "no equipment workout",
    "home workout no equipment",
    "bodyweight exercises",
    "no gym workout",
    "workout at home",
    "zero equipment exercises",
    "wall exercises",
    "household item workout",
    "bathroom workout",
    "bodyweight strength training",
  ],
  openGraph: {
    title: "The Ultimate No-Equipment Home Workout Guide",
    description:
      "Build strength anywhere with zero equipment. Bodyweight exercises for every muscle group.",
    type: "article",
  },
  alternates: {
    canonical:
      "https://agentstore.vercel.app/blog/no-equipment-home-workout",
  },
};

export default function NoEquipmentWorkout() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "The Ultimate No-Equipment Home Workout Guide",
            description:
              "Build strength anywhere with zero equipment. Bodyweight exercises for every muscle group.",
            author: { "@type": "Person", name: "Rob Balian" },
            publisher: {
              "@type": "Organization",
              name: "BrushFit AgentStore",
            },
            datePublished: "2025-03-31",
            dateModified: "2025-03-31",
          }),
        }}
      />

      <p className="mb-4 text-sm font-semibold tracking-widest text-indigo-600 uppercase">
        Fitness Guide
      </p>
      <h1 className="mb-6 text-4xl font-extrabold tracking-tight">
        The Ultimate No-Equipment Home Workout Guide
      </h1>
      <p className="mb-10 text-lg text-gray-500">
        You don&apos;t need a gym, dumbbells, or resistance bands. Everything
        you need for a full-body workout is already in your home.
      </p>

      <div className="prose prose-gray max-w-none space-y-6 text-gray-700 leading-relaxed">
        <h2 className="text-2xl font-bold text-gray-900">
          Why No-Equipment Training Works
        </h2>
        <p>
          Bodyweight training has been building strong, functional bodies for
          thousands of years — long before the first gym opened. The advantages
          are clear:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>Always available</strong> — your body is the only equipment
            you&apos;ll never forget at home
          </li>
          <li>
            <strong>Functional strength</strong> — bodyweight movements train
            real-world movement patterns
          </li>
          <li>
            <strong>Joint-friendly</strong> — natural movement arcs reduce
            injury risk compared to loaded exercises
          </li>
          <li>
            <strong>Infinitely scalable</strong> — every exercise has easier and
            harder progressions
          </li>
          <li>
            <strong>Zero cost</strong> — no membership, no equipment purchases
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900">
          Your Home is a Gym: Equipment Hiding in Plain Sight
        </h2>
        <p>
          Look around your home — it&apos;s full of workout equipment you
          haven&apos;t recognized yet:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>Walls</strong> — wall push-ups, wall sits, wall presses,
            handstand progressions
          </li>
          <li>
            <strong>Counters &amp; tables</strong> — incline push-ups, tricep
            dips, inverted rows
          </li>
          <li>
            <strong>Door frames</strong> — isometric presses, pull-up bar
            mounting point, stretches
          </li>
          <li>
            <strong>Towels</strong> — door rows (wrap around handle), sliding
            exercises on hard floors
          </li>
          <li>
            <strong>Stairs</strong> — step-ups, calf raises, decline push-ups
          </li>
          <li>
            <strong>Bottles &amp; containers</strong> — curls, lateral raises,
            overhead presses (shampoo, detergent, milk jugs)
          </li>
          <li>
            <strong>Chairs</strong> — dips, elevated push-ups, step-ups,
            single-leg squats
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900">
          Full-Body No-Equipment Exercises by Muscle Group
        </h2>

        <h3 className="text-xl font-semibold text-gray-900">Legs</h3>
        <p>
          Your legs contain the largest muscles in your body and respond
          incredibly well to bodyweight training:
        </p>
        <ul className="list-disc space-y-1 pl-6">
          <li>Squats (standard, sumo, single-leg, jump)</li>
          <li>Lunges (forward, reverse, walking, lateral)</li>
          <li>Wall sits (timed holds, single-leg variations)</li>
          <li>Calf raises (double-leg, single-leg, on stairs for extra range)</li>
          <li>Glute bridges (double-leg, single-leg, elevated)</li>
          <li>Step-ups (using stairs or a sturdy chair)</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-900">
          Chest &amp; Arms
        </h3>
        <p>
          Push-up variations alone can build an impressive upper body:
        </p>
        <ul className="list-disc space-y-1 pl-6">
          <li>Wall push-ups (beginner-friendly, great for bathroom workouts)</li>
          <li>Counter/incline push-ups (intermediate progression)</li>
          <li>Floor push-ups (standard, wide, narrow, diamond)</li>
          <li>Decline push-ups (feet on stairs or chair)</li>
          <li>Bottle curls and lateral raises (household items as weights)</li>
          <li>Tricep dips (using a chair or counter edge)</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-900">Back</h3>
        <p>
          Back training without equipment takes creativity, but it&apos;s
          entirely possible:
        </p>
        <ul className="list-disc space-y-1 pl-6">
          <li>Towel door rows (wrap a towel around a door handle and row)</li>
          <li>Reverse wall press (back to wall, press arms back)</li>
          <li>Superman holds (lying face down, lift chest and legs)</li>
          <li>Table inverted rows (lie under a sturdy table, pull up)</li>
          <li>Wall pull-aparts (hands on wall, squeeze shoulder blades)</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-900">Core</h3>
        <p>
          Core training is where bodyweight exercise truly excels:
        </p>
        <ul className="list-disc space-y-1 pl-6">
          <li>Planks (front, side, variations)</li>
          <li>Standing knee raises (perfect for bathroom workouts)</li>
          <li>Stomach vacuums (can do anywhere, even with your mouth closed)</li>
          <li>Dead bugs (lying on back, alternate arm/leg extensions)</li>
          <li>Mountain climbers (also great cardio)</li>
          <li>Oblique crunches (standing or lying)</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900">
          The Bathroom as a Home Gym
        </h2>
        <p>
          Your bathroom is actually the ideal micro-gym. It has everything
          you need:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>Walls</strong> on every side for push-ups, wall sits, and
            presses
          </li>
          <li>
            <strong>A counter</strong> for incline push-ups and tricep dips
          </li>
          <li>
            <strong>A door frame</strong> for isometric presses and stretches
          </li>
          <li>
            <strong>Bottles</strong> (shampoo, conditioner) for arm exercises
          </li>
          <li>
            <strong>A towel</strong> for door rows and floor slides
          </li>
          <li>
            <strong>A mirror</strong> for form checks
          </li>
          <li>
            <strong>A built-in timer</strong> — your 2-minute toothbrushing
            session
          </li>
        </ul>
        <p>
          This is exactly the insight behind{" "}
          <Link href="/" className="text-indigo-600 underline">
            BrushFit
          </Link>
          . By pairing exercises with toothbrushing, you get a built-in gym
          session, timer, and habit trigger all in one.
        </p>

        <h2 className="text-2xl font-bold text-gray-900">
          Programming: How to Structure No-Equipment Training
        </h2>
        <ol className="list-decimal space-y-2 pl-6">
          <li>
            <strong>Start with consistency over intensity</strong> — one exercise
            per day beats an ambitious plan you skip
          </li>
          <li>
            <strong>Progress through variations</strong> — wall push-ups →
            counter push-ups → floor push-ups → decline push-ups
          </li>
          <li>
            <strong>Alternate muscle groups</strong> — legs one session, upper
            body the next
          </li>
          <li>
            <strong>Increase volume weekly</strong> — add reps or time before
            adding difficulty
          </li>
          <li>
            <strong>Use habit stacking</strong> — attach workouts to existing
            habits (brushing, coffee, etc.)
          </li>
        </ol>

        <h2 className="text-2xl font-bold text-gray-900">
          Get Started Now
        </h2>
        <p>
          The best workout is the one you actually do. Start small — try a set
          of squats while brushing your teeth tonight. The{" "}
          <Link href="/" className="text-indigo-600 underline">
            BrushFit guide
          </Link>{" "}
          gives you 22 no-equipment exercises specifically designed for
          bathroom workouts, with a structured 4-week program that builds from
          beginner to advanced.
        </p>
        <p>
          <a
            href="/brushfit-sample.pdf"
            className="text-indigo-600 underline"
          >
            Download the free sample
          </a>{" "}
          to try the Legs + Core exercises today.
        </p>
      </div>

      <div className="mt-12 rounded-xl bg-indigo-50 p-8 text-center">
        <h3 className="mb-2 text-xl font-bold">Your Bathroom. Your Gym.</h3>
        <p className="mb-4 text-gray-600">
          22 no-equipment exercises. 4-week program. Zero excuses.
        </p>
        <Link
          href="/"
          className="inline-block rounded-xl bg-indigo-600 px-8 py-3 font-bold text-white transition hover:bg-indigo-700"
        >
          Get BrushFit — $19.99
        </Link>
      </div>
    </article>
  );
}
