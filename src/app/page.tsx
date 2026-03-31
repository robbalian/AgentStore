export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="mx-auto max-w-3xl px-6 pt-20 pb-16 text-center">
        <p className="mb-4 text-sm font-semibold tracking-widest text-indigo-600 uppercase">
          Habit Stacking × Fitness
        </p>
        <h1 className="mb-6 text-5xl font-extrabold tracking-tight sm:text-6xl">
          BrushFit
        </h1>
        <p className="mb-2 text-xl text-gray-600 sm:text-2xl">
          The 2-Minute Toothbrush Workout Guide
        </p>
        <p className="mx-auto mb-10 max-w-xl text-lg text-gray-500">
          22 illustrated exercises you do while brushing your teeth — one hand
          brushes, one hand works out. No equipment. No gym. No extra time.
        </p>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="/api/x402/purchase"
            className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-8 py-4 text-lg font-bold text-white shadow-lg transition hover:bg-indigo-700"
          >
            Buy with x402 — $19.99
            <span className="text-sm font-normal opacity-80">USDC on Base</span>
          </a>
          <a
            href="/brushfit-sample.pdf"
            className="inline-flex items-center gap-2 rounded-xl border-2 border-gray-300 px-8 py-4 text-lg font-semibold text-gray-700 transition hover:border-indigo-400 hover:text-indigo-600"
          >
            Free Sample
            <span className="text-sm font-normal opacity-70">Legs + Core</span>
          </a>
        </div>
      </section>

      {/* How x402 Works */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="mb-2 text-center text-sm font-semibold tracking-widest text-indigo-600 uppercase">
            Agentic Commerce
          </h2>
          <h3 className="mb-8 text-center text-3xl font-bold">
            Pay with x402 Protocol
          </h3>
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <div className="mb-3 text-2xl">1</div>
              <h4 className="mb-2 font-semibold">Request</h4>
              <p className="text-sm text-gray-500">
                Your agent or wallet hits our API endpoint. Gets back HTTP 402
                with payment requirements.
              </p>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <div className="mb-3 text-2xl">2</div>
              <h4 className="mb-2 font-semibold">Pay</h4>
              <p className="text-sm text-gray-500">
                Sign a USDC transfer authorization on Base. No accounts, no
                sessions — just a cryptographic signature.
              </p>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <div className="mb-3 text-2xl">3</div>
              <h4 className="mb-2 font-semibold">Receive</h4>
              <p className="text-sm text-gray-500">
                Retry with payment proof. The facilitator settles on-chain and
                you get the full BrushFit PDF instantly.
              </p>
            </div>
          </div>
          <div className="mt-8 rounded-xl bg-gray-900 p-6 text-sm text-gray-300">
            <p className="mb-2 font-mono text-indigo-400">
              # Agent / CLI purchase with x402-fetch
            </p>
            <pre className="overflow-x-auto font-mono">{`import { wrapFetchWithPayment } from "@x402/fetch";

const pay = wrapFetchWithPayment(fetch, client);
const res = await pay("https://agentstore.vercel.app/api/x402/purchase");
const pdf = await res.blob(); // BrushFit Guide PDF`}</pre>
          </div>
        </div>
      </section>

      {/* What's Inside */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="mb-10 text-center text-3xl font-bold">
            What&apos;s Inside
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {[
              {
                icon: "🦵",
                title: "Legs (6 exercises)",
                desc: "Squats, calf raises, wall sits, sumo squats, single-leg balance, static lunge holds",
              },
              {
                icon: "🧘",
                title: "Core (4 exercises)",
                desc: "Standing knee raises, oblique crunches, stomach vacuums, pelvic tilts",
              },
              {
                icon: "💪",
                title: "Arms & Upper Body (9 exercises)",
                desc: "Wall push-ups, counter push-ups, door frame press, shampoo bottle curls, lateral raises, and more",
              },
              {
                icon: "🔙",
                title: "Back (3 exercises)",
                desc: "Towel door row, wall pull-apart, reverse wall press",
              },
            ].map((cat) => (
              <div key={cat.title} className="rounded-xl border p-6">
                <p className="mb-2 text-2xl">{cat.icon}</p>
                <h4 className="mb-1 font-semibold">{cat.title}</h4>
                <p className="text-sm text-gray-500">{cat.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-xl bg-indigo-50 p-8">
            <h4 className="mb-4 text-lg font-bold">The Full Package</h4>
            <ul className="space-y-2 text-gray-700">
              <li>✦ 22 illustrated bodyweight exercises</li>
              <li>✦ 4-week progressive program (AM + PM)</li>
              <li>✦ Clear form illustrations for every exercise</li>
              <li>✦ Pro tips on every page</li>
              <li>✦ Zero equipment — just your bathroom</li>
              <li>✦ 31-page PDF — instant download</li>
              <li>✦ One exercise per brush. Two minutes. Done.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* The Math */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="mb-4 text-3xl font-bold">The Math</h2>
          <p className="text-lg text-gray-600">
            You brush your teeth 2× a day. That&apos;s{" "}
            <span className="font-bold text-indigo-600">
              28 sessions a week
            </span>{" "}
            you&apos;re already doing. BrushFit turns those into workouts — with
            zero extra time.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="mb-8 text-center text-3xl font-bold">FAQ</h2>
          <div className="space-y-6">
            {[
              {
                q: "Do I need any equipment?",
                a: "Nope. Everything uses your bodyweight and stuff already in your bathroom — a shampoo bottle for arm exercises, a wall, the counter.",
              },
              {
                q: "Can I really get fit in 2 minutes?",
                a: "One session is a start. But you brush twice a day, every day. That's 28 workouts a week you weren't doing before — with zero extra time commitment. Consistency beats intensity.",
              },
              {
                q: "What is x402?",
                a: "x402 is an open payment protocol that uses HTTP 402 status codes for instant stablecoin payments. Your AI agent or crypto wallet can programmatically buy this guide with USDC on Base — no accounts or sessions needed.",
              },
              {
                q: "Is this a joke?",
                a: "The concept is fun. The exercises are real. Try a 2-minute wall sit while brushing and get back to us.",
              },
            ].map((faq) => (
              <div key={faq.q}>
                <h4 className="mb-1 font-semibold">{faq.q}</h4>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 text-center text-sm text-gray-400">
        <p>BrushFit — AgentStore</p>
        <p className="mt-1">
          Payments via{" "}
          <span className="font-medium text-gray-500">x402 Protocol</span>{" "}
          (USDC on Base)
        </p>
      </footer>
    </main>
  );
}
