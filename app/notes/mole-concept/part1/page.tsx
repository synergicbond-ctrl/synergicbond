import React from "react";
import Link from "next/link";
import MoleConceptPart01 from "../part1";

export const metadata = {
  title: "Mole Concept Part 1 (Pages 1–4) — SYNERGIC BOND",
  description: "Transcribed handwritten notes for Mole Concept Part 1: Quantity Representation, Need of Mole, Avogadro Number, Molecule and Formula Unit.",
};

export default function Page() {
  return (
    <div className="bg-slate-950 min-h-screen">
      <div className="sticky top-0 z-50 border-b border-white/10 bg-slate-900/90 px-4 py-3 backdrop-blur md:px-10">
        <div className="mx-auto flex max-w-6xl items-center justify-between text-sm">
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
            <span className="rounded-full bg-cyan-500/20 px-3 py-1 text-xs font-bold text-cyan-300">Part 1/15</span>
          </div>
        </div>
      </div>
      <MoleConceptPart01 />
    </div>
  );
}
