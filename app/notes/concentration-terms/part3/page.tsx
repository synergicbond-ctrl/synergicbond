import React from "react";
import Link from "next/link";
import ConcentrationTermsPart3 from "../part3";

export const metadata = {
  title: "Concentration Terms Part 3 (Page 9) — SYNERGIC BOND",
  description: "Transcribed handwritten notes: gm/litre strength calculations and relationship with Molarity (M).",
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
            <Link href="/notes/mole-concept" className="text-slate-300 hover:text-white">
              Mole Concept Notes Hub
            </Link>
          </div>
          <div className="flex gap-2">
            <Link href="/notes/concentration-terms/part2" className="rounded-full bg-slate-800 px-3 py-1 text-xs font-bold text-slate-300 hover:bg-slate-700">
              ← Prev: Part 2
            </Link>
            <span className="rounded-full bg-red-500/20 px-3 py-1 text-xs font-bold text-red-300">Part 3 (Page 9)</span>
          </div>
        </div>
      </div>
      <ConcentrationTermsPart3 />
    </div>
  );
}
