import React from "react";
import Link from "next/link";
import ConcentrationTermsPart1 from "../part1";

export const metadata = {
  title: "Concentration Terms — Topic 1: Solute vs Solvent & Percentage Solutions — SYNERGIC BOND",
  description: "Transcribed classroom notes: Solution definitions, Solute vs Solvent selection rules, and Percentage formulas (% w/w, w/v, v/v).",
};

export default function Page() {
  return (
    <div className="bg-slate-950 min-h-screen">
      <div className="sticky top-0 z-50 border-b border-white/10 bg-slate-900/95 px-4 py-3 text-white backdrop-blur md:px-10">
        <div className="mx-auto flex max-w-6xl items-center justify-between text-sm">
          <div className="flex items-center gap-4">
            <Link href="/programs/jee-main/chapter/mole-concept" className="font-semibold text-cyan-400 hover:underline">
              ← Back to Chapter Engine
            </Link>
            <span className="text-slate-500">|</span>
            <Link href="/notes/concentration-terms" className="text-slate-300 hover:text-white">
              Concentration Hub
            </Link>
          </div>
          <div className="flex gap-2">
            <span className="rounded-full bg-rose-500/20 px-3 py-1 text-xs font-bold text-rose-300">Topic 1 of 6</span>
            <Link href="/notes/concentration-terms/part2" className="rounded-full bg-slate-800 px-3 py-1 text-xs font-bold text-cyan-300 hover:bg-slate-700">
              Next: Topic 2 →
            </Link>
          </div>
        </div>
      </div>
      <ConcentrationTermsPart1 />
    </div>
  );
}
