import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "15 Bathroom Exercises for Small Spaces — No Equipment Needed",
  description:
    "The best exercises you can do in your bathroom with zero equipment. Wall push-ups, squats, calf raises, and more. Perfect for apartments, dorms, and small homes.",
  alternates: {
    canonical:
      "https://agentstore.vercel.app/blog/bathroom-exercises-small-spaces",
  },
  openGraph: {
    title: "15 Bathroom Exercises for Small Spaces",
    description:
      "Full-body workout using only your bathroom. Wall push-ups, counter dips, towel rows, and more — zero equipment required.",
    type: "article",
    publishedTime: "2025-08-10T00:00:00Z",
  },
};

export default function BathroomExercises() {
  return (
    <article className="mx-auto max-w-2xl px-6 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "15 Bathroom Exercises for Small Spaces — No Equipment Needed",
            description:
              "Full-body workout routine using only your bathroom. Zero equipment required.",
            datePublished: "2025-08-10T00:00:00Z",
            dateModified: "2026-03-01T00:00:00Z",
            author: { "@type": "Person", name: "Rob Balian" },
            publisher: {
              "@type": "Organization",
              name: "BrushFit AgentStore",
              url: "https://agentstore.vercel.app",
            },
          }),
        }}
      />

      <p className="mb-4 text-sm font-semibold text-indigo-600 uppercase">
        Small Space Fitness
      </p>
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight">
        15 Bathroom Exercises for Small Spaces — No Equipment Needed
      </h1>
      <p className="mb-8 text-lg text-gray-500">
        Your bathroom has everything you need for a full-body workout: walls,
        a counter, a towel, and a door. Here are 15 exercises that prove it.
      </p>

      <div className="prose prose-gray max-w-none">
        <h2>Why the Bathroom?</h2>
        <p>
          The bathroom is actually one of the best workout spaces in your home.
          It has hard floors (stable surface), walls on every side (for push-ups
          and isometric holds), a counter (for incline exercises), and a door
          (for rows). Plus, you&apos;re already there twice a day brushing your teeth.
        </p>

        <h2>Lower Body (5 Exercises)</h2>
        <ol>
          <li>
            <strong>Bodyweight squats</strong> — Stand in front of the mirror
            to check your form. Keep weight in your heels, chest up, knees
            tracking over toes. 15-20 reps.
          </li>
          <li>
            <strong>Wall sits</strong> — Back flat against the wall, thighs
            parallel to the floor. Hold for 30-60 seconds. The bathroom
            wall is perfect for this.
          </li>
          <li>
            <strong>Calf raises</strong> — Rise onto your toes, hold 2 seconds,
            lower slowly. Use the counter for balance. 20-25 reps.
          </li>
          <li>
            <strong>Sumo squats</strong> — Wide stance, toes turned out 45 degrees.
            Targets inner thighs and glutes. 12-15 reps.
          </li>
          <li>
            <strong>Static lunge holds</strong> — Step one foot forward, lower
            into a lunge, hold. 30 seconds per leg.
          </li>
        </ol>

        <h2>Upper Body (5 Exercises)</h2>
        <ol start={6}>
          <li>
            <strong>Wall push-ups</strong> — Hands on the wall, shoulder width
            apart. Lean in, push out. Easier than floor push-ups but still
            effective. 15-20 reps.
          </li>
          <li>
            <strong>Counter push-ups</strong> — Hands on the bathroom counter,
            body at 45 degrees. More challenging than wall push-ups. 10-15 reps.
          </li>
          <li>
            <strong>Door frame press</strong> — Stand in the doorway, press
            outward on both sides. Isometric chest and shoulder activation.
            Hold 15-20 seconds.
          </li>
          <li>
            <strong>Shampoo bottle curls</strong> — Grab a full shampoo or
            conditioner bottle. Bicep curls with slow, controlled movement.
            12-15 reps per arm.
          </li>
          <li>
            <strong>Tricep wall press</strong> — Face away from the wall,
            hands behind you on the wall. Press your body away. 12-15 reps.
          </li>
        </ol>

        <h2>Core (3 Exercises)</h2>
        <ol start={11}>
          <li>
            <strong>Standing knee raises</strong> — Drive alternating knees to
            chest height. Engages lower abs and hip flexors. 20 reps per side.
          </li>
          <li>
            <strong>Standing oblique crunches</strong> — Elbow to opposite knee,
            standing. Works the obliques without getting on the floor. 15 per side.
          </li>
          <li>
            <strong>Stomach vacuums</strong> — Exhale completely, pull belly
            button to spine, hold 15-20 seconds. Works the transverse
            abdominis — your deep core muscles.
          </li>
        </ol>

        <h2>Back (2 Exercises)</h2>
        <ol start={14}>
          <li>
            <strong>Towel door rows</strong> — Drape a towel over a door
            handle, grab both ends, lean back, and row yourself forward.
            10-12 reps.
          </li>
          <li>
            <strong>Reverse wall press</strong> — Stand with your back to the
            wall, arms at 90 degrees, press elbows and hands into the wall.
            Squeeze shoulder blades. Hold 20 seconds.
          </li>
        </ol>

        <h2>Combine It with Toothbrushing</h2>
        <p>
          The best time to do these exercises? <strong>While you brush your teeth.</strong>{" "}
          You&apos;re already in the bathroom, already standing, already spending 2 minutes
          twice a day. The <a href="/" className="text-indigo-600">BrushFit Guide</a> turns
          this exact concept into a structured 4-week program with all 22 exercises
          illustrated and scheduled.
        </p>
        <p>
          <a href="/buy" className="text-indigo-600 font-semibold hover:text-indigo-700">
            Get BrushFit for $19.99 &rarr;
          </a>
          {" "}or try the{" "}
          <a href="/brushfit-sample.pdf" className="text-indigo-600">free sample</a>.
        </p>
      </div>
    </article>
  );
}
