import React from "react";
import Link from "next/link";
import MoleConceptPart7 from "../part7";

export const metadata = {
  title: "Mole Concept — Charge Counting in Ions — SYNERGIC BOND",
  description: "Polyatomic ionic electron/proton inventories, total Coulombs of charge calculations, and AB2/A2B3 algebraic trap systems.",
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
            <Link href="/notes/mole-concept/part6" className="rounded-full bg-slate-800 px-3 py-1 text-xs font-bold text-slate-300 hover:bg-slate-700">
              ← Formula Units &amp; Hydrates
            </Link>
            <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-bold text-emerald-300">Charge Counting in Ions</span>
            <Link href="/notes/mole-concept/part8" className="rounded-full bg-slate-800 px-3 py-1 text-xs font-bold text-cyan-300 hover:bg-slate-700">
              Next: Compound Composition →
            </Link>
          </div>
        </div>
      </div>
      <MoleConceptPart7 />
    </div>
  );
}
