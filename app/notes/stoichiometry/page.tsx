import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Stoichiometry — Transcribed Notes — SYNERGIC BOND",
  description: "Comprehensive page-by-page digital transcriptions of notes for Stoichiometric Calculations.",
};

export default function StoichiometryHub() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-12 text-slate-100 md:px-10">
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="flex items-center justify-between border-b border-slate-800 pb-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-amber-400">Transcribed Notes Module</p>
            <h1 className="mt-2 text-4xl font-black text-white">Stoichiometry & Reaction Calculations</h1>
          </div>
          <Link href="/notes/mole-concept" className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-2.5 text-sm font-bold text-slate-300 hover:bg-slate-800 transition">
            ← Mole Concept Notes Hub
          </Link>
        </div>

        <p className="text-lg text-slate-300 leading-relaxed">
          Select a part below to view page-by-page digital transcriptions of stoichiometry rules, mass-mass, mass-volume, and volume-volume relationships with solved illustrations.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <Link href="/notes/stoichiometry/part1" className="group rounded-2xl border border-slate-800 bg-slate-900 p-6 hover:border-amber-400/50 transition flex flex-col justify-between">
            <div>
              <span className="rounded-full bg-amber-500/20 px-3 py-1 text-xs font-bold text-amber-300">Part 1</span>
              <h2 className="mt-4 text-xl font-bold text-white group-hover:text-amber-400 transition">Pages 1–4</h2>
              <p className="mt-2 text-sm text-slate-400">Stoichiometric coefficients ($\nu_i$), Mass-Mass, Mass-Volume at STP, and Gay-Lussac&apos;s Law of gaseous volumes.</p>
            </div>
            <span className="mt-6 text-xs font-bold text-cyan-400 group-hover:underline">Read Pages 1–4 →</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
