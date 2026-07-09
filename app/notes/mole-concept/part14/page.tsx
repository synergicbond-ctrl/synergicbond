import React from "react";
import Link from "next/link";
import MoleConceptPart14 from "../part14";

export const metadata = {
  title: "Mole Concept — Ozonized Oxygen and Mixture Analysis — SYNERGIC BOND",
  description: "Advanced multi-component gas mixtures, vapour density correlations, and ozonized oxygen conversion kinetics.",
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
            <Link href="/notes/mole-concept/part13" className="rounded-full bg-slate-800 px-3 py-1 text-xs font-bold text-slate-300 hover:bg-slate-700">
              ← Gas Mixtures
            </Link>
            <span className="rounded-full bg-lime-500/20 px-3 py-1 text-xs font-bold text-lime-300">Ozonized Oxygen</span>
            <Link href="/notes/mole-concept/part15" className="rounded-full bg-slate-800 px-3 py-1 text-xs font-bold text-cyan-300 hover:bg-slate-700">
              Next: Dissociation &amp; Review →
            </Link>
          </div>
        </div>
      </div>
      <MoleConceptPart14 />
    </div>
  );
}
