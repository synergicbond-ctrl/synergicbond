import React from "react";
import Link from "next/link";
import EudiometryPart3 from "../part3";

export const metadata = {
  title: "Eudiometry — Module 3: Contraction & Residual Gas Analysis — SYNERGIC BOND",
  description: "General volume contraction formula, spectator nitrogen accounting in air combustion, and multi-component coal gas combustion.",
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
            <Link href="/notes/eudiometry" className="text-slate-300 hover:text-white">
              Eudiometry Hub
            </Link>
          </div>
          <div className="flex gap-2">
            <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-bold text-emerald-300">Module 3 of 6</span>
            <Link href="/notes/eudiometry/part4" className="rounded-full bg-slate-800 px-3 py-1 text-xs font-bold text-cyan-300 hover:bg-slate-700">
              Next: Module 4 →
            </Link>
          </div>
        </div>
      </div>
      <EudiometryPart3 />
    </div>
  );
}
