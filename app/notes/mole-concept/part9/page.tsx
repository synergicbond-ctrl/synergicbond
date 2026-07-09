import React from "react";
import Link from "next/link";
import MoleConceptPart9 from "../part9";

export const metadata = {
  title: "Mole Concept — Gaseous Molar Volume — SYNERGIC BOND",
  description: "Standard molar volume at STP/NTP (22.4 L/mol vs 22.7 L/mol), ideal gas equation PV=nRT, and gas constant unit interconversions.",
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
            <Link href="/notes/mole-concept/part8" className="rounded-full bg-slate-800 px-3 py-1 text-xs font-bold text-slate-300 hover:bg-slate-700">
              ← Compound Composition
            </Link>
            <span className="rounded-full bg-cyan-500/20 px-3 py-1 text-xs font-bold text-cyan-300">Gaseous Molar Volume</span>
            <Link href="/notes/mole-concept/part10" className="rounded-full bg-slate-800 px-3 py-1 text-xs font-bold text-lime-300 hover:bg-slate-700">
              Next: Ideal Gas Applications →
            </Link>
          </div>
        </div>
      </div>
      <MoleConceptPart9 />
    </div>
  );
}
