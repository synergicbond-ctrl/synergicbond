import React from "react";
import Link from "next/link";
import MoleConceptPart10 from "../part10";

export const metadata = {
  title: "Mole Concept — Ideal Gas Applications — SYNERGIC BOND",
  description: "Combined gas law transformations across multiple states and temperature/pressure interconversions.",
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
            <Link href="/notes/mole-concept/part9" className="rounded-full bg-slate-800 px-3 py-1 text-xs font-bold text-slate-300 hover:bg-slate-700">
              ← Gaseous Molar Volume
            </Link>
            <span className="rounded-full bg-lime-500/20 px-3 py-1 text-xs font-bold text-lime-300">Ideal Gas Applications</span>
            <Link href="/notes/mole-concept/part11" className="rounded-full bg-slate-800 px-3 py-1 text-xs font-bold text-cyan-300 hover:bg-slate-700">
              Next: Gas &amp; Vapour Density →
            </Link>
          </div>
        </div>
      </div>
      <MoleConceptPart10 />
    </div>
  );
}
