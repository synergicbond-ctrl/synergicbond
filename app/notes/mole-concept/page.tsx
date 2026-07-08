import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Mole Concept Notes Hub — SYNERGIC BOND",
  description: "Comprehensive notes and transcribed handwritten notes for Mole Concept & Concentration Terms.",
};

export default function MoleConceptNotesHub() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-12 text-slate-100 md:px-10">
      <div className="mx-auto max-w-5xl space-y-8">
        <div className="flex items-center justify-between border-b border-slate-800 pb-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">JEE Main / NEET Chemistry</p>
            <h1 className="mt-2 text-4xl font-black text-white">Mole Concept — Transcribed Notes Hub</h1>
          </div>
          <Link href="/programs/jee-main/chapter/mole-concept" className="rounded-xl border border-cyan-400/30 bg-cyan-500/10 px-4 py-2.5 text-sm font-bold text-cyan-300 hover:bg-cyan-500/20 transition">
            Open Chapter Engine →
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 space-y-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-lime-400/20 px-3 py-1 text-xs font-bold text-lime-300">Part 1/15</span>
                <span className="text-xs text-slate-400">Pages 1–4</span>
              </div>
              <h2 className="mt-4 text-2xl font-bold text-white">Mole Concept Part 1</h2>
              <p className="mt-2 text-sm text-slate-300">Cover, Quantity Representation, Need of Mole, Avogadro Number, Molecule and Formula Unit.</p>
            </div>
            <Link href="/notes/mole-concept/part1" className="mt-6 inline-block text-center rounded-xl bg-lime-400 px-4 py-2.5 text-sm font-bold text-slate-950 hover:bg-lime-300 transition">
              Read Part 1 (Pages 1–4) →
            </Link>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 space-y-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-red-500/20 px-3 py-1 text-xs font-bold text-red-300">Concentration Module</span>
                <span className="text-xs text-slate-400">Parts 1, 2 & 3</span>
              </div>
              <h2 className="mt-4 text-2xl font-bold text-white">Concentration Terms</h2>
              <p className="mt-2 text-sm text-slate-300">Solutions, % w/w, % w/v, % v/v, Solved Examples, Dilution formulas, ppm, and gm/litre.</p>
            </div>
            <div className="flex flex-wrap gap-2 pt-4">
              <Link href="/notes/concentration-terms/part1" className="flex-1 text-center rounded-xl border border-red-400/30 bg-red-500/10 px-3 py-2 text-xs font-bold text-red-300 hover:bg-red-500/20">
                Part 1 (1–4) →
              </Link>
              <Link href="/notes/concentration-terms/part2" className="flex-1 text-center rounded-xl border border-red-400/30 bg-red-500/10 px-3 py-2 text-xs font-bold text-red-300 hover:bg-red-500/20">
                Part 2 (5–8) →
              </Link>
              <Link href="/notes/concentration-terms/part3" className="flex-1 text-center rounded-xl border border-red-400/30 bg-red-500/10 px-3 py-2 text-xs font-bold text-red-300 hover:bg-red-500/20">
                Part 3 (9) →
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 space-y-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-amber-500/20 px-3 py-1 text-xs font-bold text-amber-300">Stoichiometry</span>
                <span className="text-xs text-slate-400">Pages 1–4</span>
              </div>
              <h2 className="mt-4 text-2xl font-bold text-white">Stoichiometry Part 1</h2>
              <p className="mt-2 text-sm text-slate-300">Stoichiometric coefficients ($\nu_i$), Mass-Mass, Mass-Volume at STP, and Gay-Lussac&apos;s Law calculations.</p>
            </div>
            <Link href="/notes/stoichiometry/part1" className="mt-6 inline-block text-center rounded-xl bg-amber-400 px-4 py-2.5 text-sm font-bold text-slate-950 hover:bg-amber-300 transition">
              Read Stoichiometry Part 1 →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
