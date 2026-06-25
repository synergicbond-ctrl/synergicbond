"use client";

import { useState } from "react";

const quickTopics = [
  "Atomic Structure",
  "Chemical Bonding",
  "Thermodynamics",
  "Equilibrium",
  "Organic Chemistry",
];

export default function HeroSearch() {
  const [query, setQuery] = useState("");

  return (
    <div className="mt-12 w-full rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">

      <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">
        AI Chemistry Engine
      </p>

      <h2 className="mt-3 text-3xl font-bold">
        Ask anything in Chemistry
      </h2>

      <p className="mt-2 text-white/60">
        Search concepts, reactions, formulas and previous year questions.
      </p>

      <div className="mt-8 flex flex-col gap-4 md:flex-row">

        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search Atomic Structure, Thermodynamics..."
          className="flex-1 rounded-2xl border border-white/10 bg-black/40 px-6 py-4 outline-none transition focus:border-cyan-400/50"
        />

        <button className="rounded-2xl bg-white px-8 py-4 font-semibold text-black transition hover:scale-105">
          Ask AI
        </button>

      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        {quickTopics.map((topic) => (
          <button
            key={topic}
            onClick={() => setQuery(topic)}
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 transition hover:bg-white/10"
          >
            {topic}
          </button>
        ))}
      </div>

    </div>
  );
}