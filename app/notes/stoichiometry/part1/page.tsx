import React from "react";
import Link from "next/link";
import StoichiometryPart1 from "../part1";

export const metadata = {
  title: "Stoichiometry Part 1 (Pages 1–4) — SYNERGIC BOND",
  description: "Transcribed notes: Stoichiometric coefficients, Mass-Mass, Mass-Volume, and Volume-Volume relationship calculations.",
};

export default function Page() {
  return (
    <div className="bg-white min-h-screen">
      <div className="sticky top-0 z-50 border-b border-slate-200 bg-slate-900/95 px-4 py-3 text-white backdrop-blur md:px-10">
        <div className="mx-auto flex max-w-5xl items-center justify-between text-sm">
          <div className="flex items-center gap-4">
            <Link href="/programs/jee-main/chapter/mole-concept" className="font-semibold text-cyan-400 hover:underline">
              ← Back to Chapter Engine
            </Link>
            <span className="text-slate-500">|</span>
            <Link href="/notes/stoichiometry" className="text-slate-300 hover:text-white">
              Stoichiometry Notes Hub
            </Link>
          </div>
          <div className="flex gap-2">
            <span className="rounded-full bg-amber-500/20 px-3 py-1 text-xs font-bold text-amber-300">Part 1 (Pages 1–4)</span>
          </div>
        </div>
      </div>
      <StoichiometryPart1 />
    </div>
  );
}
