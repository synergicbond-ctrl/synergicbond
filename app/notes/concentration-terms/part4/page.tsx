import React from "react";
import Link from "next/link";
import ConcentrationTermsPart4 from "../part4";

export const metadata = {
  title: "Concentration Terms — Topic 4: Molality & Mole Fraction — SYNERGIC BOND",
  description: "Transcribed classroom notes: Temperature-independent concentration scales including Molality (m), Mole Fraction (χ), and binary summation rules.",
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
            <Link href="/notes/concentration-terms" className="text-slate-300 hover:text-white">
              Concentration Hub
            </Link>
          </div>
          <div className="flex gap-2">
            <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-bold text-emerald-300">Topic 4 of 6</span>
            <Link href="/notes/concentration-terms/part5" className="rounded-full bg-slate-800 px-3 py-1 text-xs font-bold text-cyan-300 hover:bg-slate-700">
              Next: Topic 5 →
            </Link>
          </div>
        </div>
      </div>
      <ConcentrationTermsPart4 />
    </div>
  );
}
