"use client";

import Link from "next/link";
import { X, Brain, FlaskConical, Atom, Sparkles } from "lucide-react";
import type { BrainModeContext } from "@/lib/controlCenterTypes";
import { renderChemistry } from "@/lib/renderChemistry";

export default function BrainModeModal({
  data,
  onClose,
}: {
  data: BrainModeContext;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg max-h-[88vh] overflow-y-auto rounded-3xl border border-cyan-400/20 bg-[#0B0F19] shadow-[0_0_60px_-12px_rgba(34,211,238,0.4)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-white/[0.06] bg-[#0B0F19]/95 px-5 py-4 backdrop-blur">
          <div className="flex items-center gap-3">
            {/* Bold symbol accent box */}
            <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-2xl border border-cyan-400/30 bg-gradient-to-br from-cyan-500/20 to-violet-500/10">
              <span className="text-2xl font-black leading-none text-cyan-300">{data.symbol}</span>
            </div>
            <div>
              <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.25em] text-cyan-300">
                <Brain className="h-3 w-3" /> Brain Mode
              </div>
              <h2 className="text-xl font-black text-white">{data.name}</h2>
            </div>
          </div>
          <button onClick={onClose} className="p-1 text-white/40 hover:text-white"><X className="h-5 w-5" /></button>
        </div>

        <div className="px-5 py-5 space-y-5">
          {/* Exam weightage */}
          <div className="rounded-xl border border-amber-500/20 bg-amber-500/[0.06] px-4 py-3">
            <p className="text-[10px] font-bold uppercase tracking-wider text-amber-300/80">Exam Weightage</p>
            <p className="mt-0.5 text-sm font-semibold text-amber-100">{data.examWeightage}</p>
          </div>

          {/* Core concepts */}
          <div>
            <p className="mb-2 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-white/40">
              <Sparkles className="h-3 w-3 text-violet-400" /> JEE / NEET core concepts
            </p>
            <ul className="space-y-1.5">
              {data.jeeCoreConcepts.map((c) => (
                <li key={c} className="flex gap-2 text-sm text-white/75">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-cyan-400" />
                  {c}
                </li>
              ))}
            </ul>
          </div>

          {/* Reactions — LaTeX compiled to real symbols */}
          <div>
            <p className="mb-2 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-white/40">
              <FlaskConical className="h-3 w-3 text-cyan-400" /> Key reactions
            </p>
            <div className="space-y-2.5">
              {data.reactions.map((r, i) => (
                <div key={i} className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3">
                  <div className="font-mono bg-slate-950 px-3 py-1.5 rounded text-rose-400 text-xs tracking-wide overflow-x-auto whitespace-nowrap">
                    {renderChemistry(r.equation)}
                  </div>
                  <p className="mt-1.5 text-xs text-white/50">{r.mechanismContext}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Linked exploration */}
          <div className="grid grid-cols-2 gap-2 pt-1">
            <Link
              href={`/molecule?q=${data.symbol}`}
              onClick={onClose}
              className="flex items-center justify-center gap-2 rounded-lg border border-white/[0.06] bg-white/[0.03] px-3 py-2 text-xs font-semibold text-white/80 transition hover:border-cyan-400/30 hover:text-white"
            >
              <Atom className="h-3.5 w-3.5 text-cyan-400" /> Linked compounds
            </Link>
            <Link
              href="/name-reactions"
              onClick={onClose}
              className="flex items-center justify-center gap-2 rounded-lg border border-white/[0.06] bg-white/[0.03] px-3 py-2 text-xs font-semibold text-white/80 transition hover:border-cyan-400/30 hover:text-white"
            >
              <Sparkles className="h-3.5 w-3.5 text-violet-400" /> Name reactions
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
