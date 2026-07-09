import React from "react";
import Link from "next/link";
import MoleConceptPart8 from "../part8";

export const metadata = {
  title: "Mole Concept — Compound Composition Problems — SYNERGIC BOND",
  description: "Simultaneous linear mass extraction across dual binary compounds, organometallic analysis, and CH4 extraction stoichiometry.",
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
            <Link href="/notes/mole-concept/part7" className="rounded-full bg-slate-800 px-3 py-1 text-xs font-bold text-slate-300 hover:bg-slate-700">
              ← Charge Counting
            </Link>
            <span className="rounded-full bg-amber-500/20 px-3 py-1 text-xs font-bold text-amber-300">Compound Composition</span>
            <Link href="/notes/mole-concept/part9" className="rounded-full bg-slate-800 px-3 py-1 text-xs font-bold text-cyan-300 hover:bg-slate-700">
              Next: Gaseous Molar Volume →
            </Link>
          </div>
        </div>
      </div>
      <MoleConceptPart8 />
    </div>
  );
}
