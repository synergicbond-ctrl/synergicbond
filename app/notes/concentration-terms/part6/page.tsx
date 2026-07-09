import React from "react";
import Link from "next/link";
import ConcentrationTermsPart6 from "../part6";

export const metadata = {
  title: "Concentration Terms — Topic 6: Interconversions & Industrial Scales — SYNERGIC BOND",
  description: "Transcribed classroom notes: Master interconversions (M, m, χ, d), Volume strength of H2O2 (1 V = 0.089 M), and percentage labeling of Oleum.",
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
            <span className="rounded-full bg-rose-500/20 px-3 py-1 text-xs font-bold text-rose-300">Topic 6 of 6</span>
          </div>
        </div>
      </div>
      <ConcentrationTermsPart6 />
    </div>
  );
}
