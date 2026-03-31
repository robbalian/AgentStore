import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BrushFit Exercises — 22 Illustrated Bodyweight Exercises",
  description:
    "All 22 BrushFit exercises organized by category: Legs (6), Core (4), Arms & Upper Body (7), Back (5). Each exercise takes 2 minutes while brushing your teeth. Illustrated PDF with a 4-week progressive program.",
  alternates: { canonical: "https://agentstore.vercel.app/exercises" },
  openGraph: {
    title: "BrushFit Exercises — 22 Illustrated Bodyweight Exercises",
    description:
      "All 22 BrushFit exercises: Legs, Core, Arms & Upper Body, and Back. No equipment. 2 minutes while brushing your teeth.",
    url: "https://agentstore.vercel.app/exercises",
  },
};

const categories = [
  {
    name: "Legs",
    count: 6,
    description:
      "Build lower-body strength and balance while brushing. These one-handed exercises target quads, glutes, hamstrings, and calves.",
    exercises: [
      {
        name: "Calf Raises",
        description:
          "Rise onto the balls of your feet and slowly lower back down. Targets calf muscles. 15-20 reps per set.",
      },
      {
        name: "Single-Leg Calf Raises",
        description:
          "Same as calf raises but on one foot for added difficulty and balance challenge. 10-15 reps per leg.",
      },
      {
        name: "Bodyweight Squats",
        description:
          "Stand with feet shoulder-width apart, lower your hips as if sitting in a chair, then push back up. 10-15 reps.",
      },
      {
        name: "Wall Sit",
        description:
          "Lean your back flat against the wall and slide down until your thighs are parallel to the floor. Hold for 30-60 seconds.",
      },
      {
        name: "Standing Kickbacks",
        description:
          "Stand on one leg and extend the other leg straight behind you, squeezing the glute at the top. 12-15 reps per leg.",
      },
      {
        name: "Side Leg Raises",
        description:
          "Stand on one leg and raise the other leg out to the side, targeting the hip abductors. 12-15 reps per leg.",
      },
    ],
  },
  {
    name: "Core",
    count: 4,
    description:
      "Strengthen your abs, obliques, and deep stabilizers without getting on the floor. All performed standing with one free hand.",
    exercises: [
      {
        name: "Standing Knee Raises",
        description:
          "Lift one knee toward your chest, engaging your lower abs. Alternate legs. 15-20 reps total.",
      },
      {
        name: "Standing Oblique Crunches",
        description:
          "Bring your elbow toward your raised knee on the same side, crunching the obliques. 12-15 reps per side.",
      },
      {
        name: "Standing March",
        description:
          "March in place with high knees, keeping your core tight and posture tall. 30-60 seconds.",
      },
      {
        name: "Standing Pelvic Tilts",
        description:
          "Tilt your pelvis forward and back, engaging your deep core muscles. Improves posture and core activation. 15-20 reps.",
      },
    ],
  },
  {
    name: "Arms & Upper Body",
    count: 7,
    description:
      "Tone your arms, shoulders, and chest using the counter, wall, or just body resistance. All one-arm friendly.",
    exercises: [
      {
        name: "Counter Push-Ups",
        description:
          "Place your free hand on the bathroom counter and perform an incline push-up. 10-15 reps.",
      },
      {
        name: "Wall Push-Ups",
        description:
          "Place your free hand flat on the wall at shoulder height and push in and out. 15-20 reps.",
      },
      {
        name: "Tricep Counter Dips",
        description:
          "Grip the counter edge behind you and lower your body by bending your elbows. 10-12 reps.",
      },
      {
        name: "Shoulder Taps",
        description:
          "In a standing position, tap each shoulder alternately with your free hand while keeping your core stable. 20 reps.",
      },
      {
        name: "Arm Circles",
        description:
          "Extend your free arm to the side and make small circles, gradually increasing size. 30 seconds forward, 30 seconds backward.",
      },
      {
        name: "Isometric Bicep Hold",
        description:
          "Press your free hand against the underside of the counter and push upward, holding the contraction. Hold 20-30 seconds.",
      },
      {
        name: "Wrist Curls (Counter Edge)",
        description:
          "Rest your forearm on the counter edge and curl your wrist up and down for forearm strength. 15-20 reps.",
      },
    ],
  },
  {
    name: "Back",
    count: 5,
    description:
      "Improve posture and strengthen your upper and lower back. Essential for anyone who sits at a desk all day.",
    exercises: [
      {
        name: "Wall Angels",
        description:
          "Stand with your back against the wall and slide your arm up and down like making a snow angel. 10-12 reps.",
      },
      {
        name: "Reverse Wall Push-Ups",
        description:
          "Face away from the wall, press your free hand back against it and push, engaging the rear deltoids and upper back. 12-15 reps.",
      },
      {
        name: "Standing Back Extension",
        description:
          "Place your free hand on your lower back and gently arch backward, squeezing the lower back muscles. 10-12 reps.",
      },
      {
        name: "Scapular Squeezes",
        description:
          "Pull your shoulder blades together and hold for 3-5 seconds. Improves posture and upper back strength. 12-15 reps.",
      },
      {
        name: "Single-Arm Row (Counter)",
        description:
          "Hinge at the hips, grip the counter edge with your free hand, and pull yourself toward it in a rowing motion. 10-12 reps.",
      },
    ],
  },
];

const weeklyProgram = [
  {
    week: "Week 1 — Foundation",
    am: "Legs (Calf Raises, Squats, Wall Sit)",
    pm: "Core (Standing Knee Raises, Standing March)",
    note: "Focus on form. 1 set per exercise.",
  },
  {
    week: "Week 2 — Build",
    am: "Arms & Upper Body (Counter Push-Ups, Arm Circles, Tricep Dips)",
    pm: "Back (Wall Angels, Scapular Squeezes, Standing Back Extension)",
    note: "Add a second set. Increase hold times.",
  },
  {
    week: "Week 3 — Intensify",
    am: "Legs + Core combo (Squats, Single-Leg Calf Raises, Oblique Crunches, Pelvic Tilts)",
    pm: "Arms + Back combo (Wall Push-Ups, Isometric Bicep Hold, Single-Arm Row, Reverse Wall Push-Ups)",
    note: "2 sets per exercise. Slower reps for more time under tension.",
  },
  {
    week: "Week 4 — Full Circuit",
    am: "Full-body AM circuit: pick 3 exercises from any category",
    pm: "Full-body PM circuit: pick 3 different exercises",
    note: "2-3 sets. Minimal rest. You are now a BrushFit athlete.",
  },
];

export default function ExercisesPage() {
  const howToJsonLd = categories.map((cat) => ({
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: `BrushFit ${cat.name} Exercises`,
    description: cat.description,
    totalTime: "PT2M",
    tool: { "@type": "HowToTool", name: "Toothbrush" },
    step: cat.exercises.map((ex, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: ex.name,
      text: ex.description,
    })),
  }));

  const exerciseListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "BrushFit Exercise List",
    description:
      "All 22 bodyweight exercises from the BrushFit toothbrush workout guide.",
    numberOfItems: 22,
    itemListElement: categories.flatMap((cat, ci) =>
      cat.exercises.map((ex, ei) => ({
        "@type": "ListItem",
        position: ci * 10 + ei + 1,
        name: ex.name,
        description: ex.description,
      }))
    ),
  };

  return (
    <main className="min-h-screen">
      {howToJsonLd.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(exerciseListJsonLd) }}
      />

      <section className="mx-auto max-w-4xl px-6 pt-16 pb-20">
        <a
          href="/"
          className="mb-8 inline-block text-sm text-indigo-600 hover:text-indigo-700"
        >
          &larr; Back to BrushFit
        </a>

        {/* Hero */}
        <h1 className="mb-2 text-4xl font-extrabold tracking-tight sm:text-5xl">
          BrushFit Exercises
        </h1>
        <p className="mb-4 text-xl text-gray-500">
          22 illustrated bodyweight exercises you do while brushing your teeth.
          No equipment needed. Two minutes, twice a day.
        </p>
        <p className="mb-12 text-gray-600">
          BrushFit organizes all 22 exercises into 4 categories: Legs (6
          exercises), Core (4 exercises), Arms &amp; Upper Body (7 exercises),
          and Back (5 exercises). Each exercise is designed to be performed
          one-handed while you brush with the other. The full 31-page PDF
          includes step-by-step illustrations for every exercise.
        </p>

        {/* ---- Exercise Categories ---- */}
        {categories.map((cat) => (
          <div key={cat.name} className="mb-12">
            <h2 className="mb-2 text-2xl font-bold">
              {cat.name} Exercises ({cat.count})
            </h2>
            <p className="mb-6 text-gray-600">{cat.description}</p>
            <div className="grid gap-4 sm:grid-cols-2">
              {cat.exercises.map((ex) => (
                <div
                  key={ex.name}
                  className="rounded-xl border bg-white p-5 transition hover:border-indigo-300"
                >
                  <h3 className="mb-2 font-semibold text-gray-900">
                    {ex.name}
                  </h3>
                  <p className="text-sm text-gray-600">{ex.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* ---- 4-Week Program ---- */}
        <div className="mb-12">
          <h2 className="mb-4 text-2xl font-bold">
            The 4-Week BrushFit Program
          </h2>
          <p className="mb-6 text-gray-600">
            BrushFit includes a structured 4-week progressive program. You do
            one routine in the morning (AM brushing) and a different routine in
            the evening (PM brushing), so you hit every muscle group throughout
            the week.
          </p>
          <div className="space-y-4">
            {weeklyProgram.map((week) => (
              <div
                key={week.week}
                className="rounded-xl border bg-white p-6"
              >
                <h3 className="mb-3 text-lg font-bold text-indigo-700">
                  {week.week}
                </h3>
                <div className="mb-2 grid gap-2 sm:grid-cols-2">
                  <div className="rounded-lg bg-amber-50 p-3">
                    <span className="text-xs font-semibold uppercase text-amber-700">
                      AM Routine
                    </span>
                    <p className="mt-1 text-sm text-gray-700">{week.am}</p>
                  </div>
                  <div className="rounded-lg bg-blue-50 p-3">
                    <span className="text-xs font-semibold uppercase text-blue-700">
                      PM Routine
                    </span>
                    <p className="mt-1 text-sm text-gray-700">{week.pm}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-500">{week.note}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ---- Free Sample ---- */}
        <div className="mb-12 rounded-2xl border-2 border-indigo-200 bg-indigo-50 p-8 text-center">
          <h2 className="mb-2 text-2xl font-bold">Try 10 Exercises Free</h2>
          <p className="mb-6 text-gray-600">
            Download the free sample PDF to try the Legs and Core exercises (10
            of 22). No payment, no email required.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/brushfit-sample.pdf"
              className="inline-block rounded-xl border-2 border-indigo-400 px-8 py-3 text-lg font-semibold text-indigo-700 transition hover:bg-indigo-100"
            >
              Download Free Sample (PDF)
            </a>
            <a
              href="/buy"
              className="inline-block rounded-xl bg-indigo-600 px-8 py-3 text-lg font-bold text-white transition hover:bg-indigo-700"
            >
              Buy Full Guide — $19.99
            </a>
          </div>
        </div>

        {/* ---- What You Get ---- */}
        <div className="mb-12">
          <h2 className="mb-4 text-2xl font-bold">
            What Is Included in the Full BrushFit Guide?
          </h2>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-green-500">&#10003;</span>
              All 22 exercises with step-by-step illustrated instructions
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-green-500">&#10003;</span>
              4-week progressive program (AM + PM routines)
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-green-500">&#10003;</span>
              31-page PDF, instant download after purchase
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-green-500">&#10003;</span>
              No equipment needed, works in any bathroom
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-green-500">&#10003;</span>
              Suitable for all fitness levels (beginner to advanced)
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-green-500">&#10003;</span>
              30-day money-back guarantee
            </li>
          </ul>
        </div>

        {/* ---- CTA ---- */}
        <div className="mb-12 text-center">
          <a
            href="/buy"
            className="mr-4 inline-block rounded-xl bg-gray-900 px-10 py-4 text-lg font-bold text-white transition hover:bg-gray-800"
          >
            Buy BrushFit — $19.99
          </a>
          <a
            href="/pricing"
            className="inline-block rounded-xl border-2 border-gray-300 px-10 py-4 text-lg font-semibold text-gray-700 transition hover:border-indigo-400 hover:text-indigo-600"
          >
            View Pricing &amp; Bulk Discounts
          </a>
        </div>

        {/* ---- Internal Links ---- */}
        <div className="border-t pt-8">
          <h3 className="mb-4 text-lg font-semibold text-gray-800">
            Related Articles
          </h3>
          <ul className="space-y-2 text-sm text-indigo-600">
            <li>
              <a href="/blog/micro-workouts-science" className="hover:underline">
                The Science Behind Micro-Workouts
              </a>
            </li>
            <li>
              <a
                href="/blog/habit-stacking-fitness"
                className="hover:underline"
              >
                Habit Stacking: How BrushFit Makes Exercise Automatic
              </a>
            </li>
            <li>
              <a
                href="/blog/exercise-snacking-guide"
                className="hover:underline"
              >
                Exercise Snacking: The Complete Guide
              </a>
            </li>
            <li>
              <a
                href="/blog/no-equipment-home-workout"
                className="hover:underline"
              >
                No Equipment Home Workout Guide
              </a>
            </li>
            <li>
              <a
                href="/blog/bathroom-exercises-small-spaces"
                className="hover:underline"
              >
                Bathroom Exercises for Small Spaces
              </a>
            </li>
            <li>
              <a
                href="/blog/two-minute-workout-routine"
                className="hover:underline"
              >
                The 2-Minute Workout Routine
              </a>
            </li>
            <li>
              <a
                href="/blog/standing-exercises-while-working"
                className="hover:underline"
              >
                Standing Exercises While Working
              </a>
            </li>
            <li>
              <a href="/pricing" className="hover:underline">
                BrushFit Pricing &amp; Bulk Discounts
              </a>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
