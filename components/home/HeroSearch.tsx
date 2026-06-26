"use client";

import { useState } from "react";
import { Search } from "lucide-react";

const quickTopics = [
  "Atomic Structure",
  "Chemical Bonding",
  "Thermodynamics",
  "Equilibrium",
  "Organic Chemistry",
  "Electrochemistry",
];

export default function HeroSearch() {
  const [query, setQuery] = useState("");

  return (
    <div className="mx-auto w-full max-w-5xl rounded-[32px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-2xl">

      <div className="mb-6 flex items-center gap-3">
        <div className="rounded-xl bg-cyan-500/10 p-3">
          <Search className="h-6 w-6 text-cyan-300" />
        </div>

        <div className="text-left">
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">
            AI Chemistry Engine
          </p>

          <h2 className="mt-1 text-2xl font-bold text-white">
            Ask anything in Chemistry
          </h2>
        </div>
      </div>

      <p className="mb-8 text-white/60">
        Search concepts, reactions, mechanisms, formulas, PYQs and complete
        chemistry knowledge.
      </p>

      <div className="flex flex-col gap-4 md:flex-row">

        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search Atomic Structure, Thermodynamics..."
          className="flex-1 rounded-2xl border border-white/10 bg-black/40 px-6 py-4 text-white outline-none transition focus:border-cyan-400/60"
        />

        <button className="rounded-2xl bg-white px-8 py-4 font-semibold text-black transition duration-300 hover:scale-105">
          Ask AI
        </button>

      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-3">

        {quickTopics.map((topic) => (
          <button
            key={topic}
            onClick={() => setQuery(topic)}
            className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-white/70 transition hover:border-cyan-400/30 hover:bg-cyan-500/10 hover:text-white"
          >
            {topic}
          </button>
        ))}

      </div>

    </div>
  );
}