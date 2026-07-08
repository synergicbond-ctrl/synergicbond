import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Concentration Terms — Transcribed Notes — SYNERGIC BOND",
  description: "Comprehensive page-by-page digital transcriptions of handwritten notes for Concentration Terms.",
};

export default function ConcentrationTermsHub() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-12 text-slate-100 md:px-10">
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="flex items-center justify-between border-b border-slate-800 pb-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-red-400">Transcribed Notes Module</p>
            <h1 className="mt-2 text-4xl font-black text-white">Concentration Terms</h1>
          </div>
          <Link href="/notes/mole-concept" className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-2.5 text-sm font-bold text-slate-300 hover:bg-slate-800 transition">
            ← Mole Concept Notes Hub
          </Link>
        </div>

        <p className="text-lg text-slate-300 leading-relaxed">
          Select a part below to view page-by-page digital transcriptions of solved examples, concentration formulas, definitions, and mixing/dilution derivations.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          <Link href="/notes/concentration-terms/part1" className="group rounded-2xl border border-slate-800 bg-slate-900 p-6 hover:border-red-400/50 transition flex flex-col justify-between">
            <div>
              <span className="rounded-full bg-red-500/20 px-3 py-1 text-xs font-bold text-red-300">Part 1</span>
              <h2 className="mt-4 text-xl font-bold text-white group-hover:text-red-400 transition">Pages 1–4</h2>
              <p className="mt-2 text-sm text-slate-400">Solute vs Solvent, % (w/w, w/v, v/w, v/v) and Solved Examples.</p>
            </div>
            <span className="mt-6 text-xs font-bold text-cyan-400 group-hover:underline">Read Pages 1–4 →</span>
          </Link>

          <Link href="/notes/concentration-terms/part2" className="group rounded-2xl border border-slate-800 bg-slate-900 p-6 hover:border-red-400/50 transition flex flex-col justify-between">
            <div>
              <span className="rounded-full bg-red-500/20 px-3 py-1 text-xs font-bold text-red-300">Part 2</span>
              <h2 className="mt-4 text-xl font-bold text-white group-hover:text-red-400 transition">Pages 5–8</h2>
              <p className="mt-2 text-sm text-slate-400">% (w/v) Solved Examples, Dilution formula, Mixing of solutions, and PPM.</p>
            </div>
            <span className="mt-6 text-xs font-bold text-cyan-400 group-hover:underline">Read Pages 5–8 →</span>
          </Link>

          <Link href="/notes/concentration-terms/part3" className="group rounded-2xl border border-slate-800 bg-slate-900 p-6 hover:border-red-400/50 transition flex flex-col justify-between">
            <div>
              <span className="rounded-full bg-red-500/20 px-3 py-1 text-xs font-bold text-red-300">Part 3</span>
              <h2 className="mt-4 text-xl font-bold text-white group-hover:text-red-400 transition">Page 9</h2>
              <p className="mt-2 text-sm text-slate-400">gm/litre strength calculations and direct relationship with Molarity (M).</p>
            </div>
            <span className="mt-6 text-xs font-bold text-cyan-400 group-hover:underline">Read Page 9 →</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
