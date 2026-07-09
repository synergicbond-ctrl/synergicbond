import React from "react";
import Link from "next/link";
import StoichiometryPart3 from "../part3";

export const metadata = {
  title: "Stoichiometry Part 3 (Pages 18–27) — SYNERGIC BOND",
  description: "Transcribed notes: Detection of Limiting Reagent, Percentage Yield, Degree of Dissociation from Vapour Density, and Solved Examples.",
};

export default function Page() {
  return (
    <div className="bg-white min-h-screen">
      <div className="sticky top-0 z-50 border-b border-slate-200 bg-slate-900/95 px-4 py-3 text-white backdrop-blur md:px-10">
        <div className="mx-auto flex max-w-5xl items-center justify-between text-sm">
          <div className="flex items-center gap-4">
            <Link href="/programs/jee-main/chapter/mole-concept" className="font-semibold text-cyan-400 hover:underline">
              ← Back to Chapter Engine
            </Link>
            <span className="text-slate-500">|</span>
            <Link href="/notes/stoichiometry" className="text-slate-300 hover:text-white">
              Stoichiometry Notes Hub
            </Link>
          </div>
          <div className="flex gap-2">
            <Link href="/notes/stoichiometry/part2" className="rounded-full bg-slate-800 px-3 py-1 text-xs font-bold text-slate-300 hover:bg-slate-700">
              ← Prev: Part 2
            </Link>
            <span className="rounded-full bg-amber-500/20 px-3 py-1 text-xs font-bold text-amber-300">Part 3 (Pages 18–27)</span>
            <Link href="/notes/stoichiometry/part4" className="rounded-full bg-slate-800 px-3 py-1 text-xs font-bold text-cyan-300 hover:bg-slate-700">
              Next: Part 4 →
            </Link>
          </div>
        </div>
      </div>
      <StoichiometryPart3 />
    </div>
  );
}
