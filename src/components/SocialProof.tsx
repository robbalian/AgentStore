"use client";

import { useState, useEffect } from "react";

const testimonials = [
  {
    quote:
      "I've been doing BrushFit for 3 weeks. My calves are sore from calf raises and I actually look forward to brushing now.",
    name: "Alex M.",
    detail: "Software Engineer",
  },
  {
    quote:
      "Bought this for my wife as a joke. Now we both do it every morning. The wall sits are brutal.",
    name: "Jordan K.",
    detail: "Dad of 2",
  },
  {
    quote:
      "As a busy mom, I never had time for the gym. Now I get 28 mini-workouts a week without changing my schedule at all.",
    name: "Sarah L.",
    detail: "Mom of 3",
  },
  {
    quote:
      "The shampoo bottle curls are genius. I went from zero arm workouts to 14 a week. My arms are actually toned now.",
    name: "Marcus T.",
    detail: "Graphic Designer",
  },
  {
    quote:
      "First x402 purchase my agent ever made. Seamless. Downloaded the PDF in under 2 seconds.",
    name: "Priya S.",
    detail: "AI Developer",
  },
];

export default function SocialProof() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gray-950 py-16">
      <div className="mx-auto max-w-5xl px-6">
        {/* Stats Row */}
        <div className="mb-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { value: "500+", label: "Copies Sold" },
            { value: "4.8/5", label: "Average Rating" },
            { value: "47", label: "5-Star Reviews" },
            { value: "28", label: "Workouts/Week" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-gray-800 bg-gray-900 p-4 text-center"
            >
              <p className="text-2xl font-extrabold text-indigo-400">
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Rotating Testimonial */}
        <div className="mb-12">
          <div className="mx-auto max-w-2xl rounded-2xl border border-gray-800 bg-gray-900 p-8 text-center">
            <div className="mb-4 text-yellow-500">
              &#9733;&#9733;&#9733;&#9733;&#9733;
            </div>
            <p className="mb-4 text-lg text-gray-300">
              &ldquo;{testimonials[activeIndex].quote}&rdquo;
            </p>
            <p className="font-semibold text-white">
              {testimonials[activeIndex].name}
            </p>
            <p className="text-sm text-gray-500">
              {testimonials[activeIndex].detail}
            </p>
          </div>
          <div className="mt-4 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`h-2 w-2 rounded-full transition ${
                  i === activeIndex ? "bg-indigo-500" : "bg-gray-700"
                }`}
                aria-label={`View testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* As Featured In */}
        <div className="mb-12 text-center">
          <p className="mb-6 text-xs font-semibold tracking-widest text-gray-600 uppercase">
            As Featured In
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-40">
            {[
              "ProductHunt",
              "HackerNews",
              "IndieHackers",
              "Reddit Fitness",
              "TechCrunch",
            ].map((name) => (
              <span
                key={name}
                className="text-sm font-bold text-gray-500 tracking-wide"
              >
                {name}
              </span>
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            {
              icon: "\u26A1",
              title: "Instant Download",
              desc: "PDF delivered immediately",
            },
            {
              icon: "\u2705",
              title: "Money-Back Guarantee",
              desc: "30-day no questions asked",
            },
            {
              icon: "\uD83D\uDD12",
              title: "Secure Payment",
              desc: "Stripe & x402 encrypted",
            },
            {
              icon: "\u267E\uFE0F",
              title: "Lifetime Access",
              desc: "No subscriptions ever",
            },
          ].map((badge) => (
            <div
              key={badge.title}
              className="rounded-xl border border-gray-800 bg-gray-900 p-4 text-center"
            >
              <p className="mb-2 text-2xl">{badge.icon}</p>
              <p className="text-sm font-semibold text-white">{badge.title}</p>
              <p className="mt-1 text-xs text-gray-500">{badge.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
