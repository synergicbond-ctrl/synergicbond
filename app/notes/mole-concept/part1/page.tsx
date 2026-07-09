import React from "react";
import Link from "next/link";
import MoleConceptPart1 from "../part1";

export const metadata = {
  title: "Mole Concept — Foundations of the Mole — SYNERGIC BOND",
  description: "SI definition of the mole, Avogadro constant, Faraday constant relationship, formula units, and particle-to-mole calculations.",
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
            <Link href="/notes/mole-concept" className="text-slate-300 hover:text-white">
              Mole Concept Hub
            </Link>
          </div>
          <div className="flex gap-2">
            <span className="rounded-full bg-lime-500/20 px-3 py-1 text-xs font-bold text-lime-300">Foundations of the Mole</span>
            <Link href="/notes/mole-concept/part2" className="rounded-full bg-slate-800 px-3 py-1 text-xs font-bold text-cyan-300 hover:bg-slate-700">
              Next: Avogadro Constant →
            </Link>
          </div>
        </div>
      </div>
      <MoleConceptPart1 />
    </div>
  );
}
