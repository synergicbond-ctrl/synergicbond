"use client";

import type { SnapSolveResponse, SnapSolveClassification } from "@/lib/snapSolveTypes";
import { renderChemistry } from "@/lib/renderChemistry";

const CLASS_STYLE: Record<SnapSolveClassification, { cls: string; emoji: string }> = {
  Organic:    { cls: "bg-emerald-500/15 text-emerald-300 border-emerald-500/25", emoji: "🧬" },
  Inorganic:  { cls: "bg-cyan-500/15 text-cyan-300 border-cyan-500/25", emoji: "⚗️" },
  Physical:   { cls: "bg-violet-500/15 text-violet-300 border-violet-500/25", emoji: "📐" },
  Analytical: { cls: "bg-amber-500/15 text-amber-300 border-amber-500/25", emoji: "🔬" },
  General:    { cls: "bg-slate-500/15 text-slate-300 border-slate-500/25", emoji: "🧪" },
};

function confidenceTone(c: number): string {
  if (c >= 0.85) return "#34D399";
  if (c >= 0.7) return "#FBBF24";
  return "#F87171";
}

export default function SnapSolveResult({ data }: { data: SnapSolveResponse }) {
  const cls = CLASS_STYLE[data.classification];
  const confPct = Math.round(data.ocrConfidence * 100);

  return (
    <div className="rounded-2xl border border-white/[0.08] bg-[#111827] p-5 space-y-5">
      {/* Utility header: classification (left) · reading precision (right) */}
      <div className="flex items-center justify-between gap-3">
        <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-bold ${cls.cls}`}>
          {cls.emoji} {data.classification}
        </span>
        <div className="flex items-center gap-2 text-xs text-white/45">
          <span className="hidden sm:inline">Reading precision</span>
          <span className="inline-block h-1.5 w-16 overflow-hidden rounded-full bg-white/10">
            <span className="block h-full rounded-full" style={{ width: `${confPct}%`, background: confidenceTone(data.ocrConfidence) }} />
          </span>
          <span className="tabular-nums font-semibold" style={{ color: confidenceTone(data.ocrConfidence) }}>{confPct}%</span>
        </div>
      </div>

      {/* Low-confidence guidance */}
      {data.fallbackTriggered && (
        <div className="rounded-xl border border-amber-500/25 bg-amber-500/[0.08] px-4 py-3 text-sm text-amber-200">
          ⚠️ Low-confidence read — type the question manually, or adjust your camera’s contrast / lighting and retake the photo for an exact solution.
        </div>
      )}

      {/* Parsed problem */}
      <div>
        <p className="mb-1 text-[10px] font-bold uppercase tracking-wider text-white/40">Problem identified</p>
        <p className="text-sm text-white/80">{renderChemistry(data.parsedProblem)}</p>
      </div>

      {/* Step-wise vertical timeline */}
      {data.solution.steps.length > 0 && (
        <div>
          <p className="mb-3 text-[10px] font-bold uppercase tracking-wider text-white/40">Step-by-step solution</p>
          <div className="border-l-2 border-slate-800 ml-4 pl-6 space-y-6">
            {data.solution.steps.map((s) => (
              <div key={s.stepNumber} className="relative">
                {/* timeline node */}
                <span className="absolute -left-[33px] flex h-5 w-5 items-center justify-center rounded-full bg-cyan-500/20 text-[11px] font-black text-cyan-300 ring-4 ring-[#111827]">
                  {s.stepNumber}
                </span>
                <h4 className="text-sm font-bold text-white">{s.title}</h4>
                {s.equation && (
                  <div className="mt-2 inline-block font-mono bg-slate-950/60 border border-slate-900 px-3 py-1.5 rounded text-rose-400 text-xs tracking-wide max-w-full overflow-x-auto whitespace-nowrap">
                    {renderChemistry(s.equation)}
                  </div>
                )}
                <p className="mt-1.5 text-sm text-white/65">{renderChemistry(s.explanation)}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* High-yield exception */}
      {data.solution.exceptionFlag && (
        <div className="rounded-xl border border-rose-500/25 bg-rose-500/[0.08] px-4 py-3">
          <p className="mb-1 text-[10px] font-bold uppercase tracking-wider text-rose-300">⚡ High-yield exception</p>
          <p className="text-sm text-rose-100">{renderChemistry(data.solution.exceptionFlag)}</p>
        </div>
      )}

      {/* Core answer */}
      <div className="rounded-xl border border-emerald-500/25 bg-emerald-500/[0.08] px-4 py-3">
        <p className="mb-1 text-[10px] font-bold uppercase tracking-wider text-emerald-300">✅ Final answer</p>
        <p className="text-base font-semibold text-emerald-100">{renderChemistry(data.solution.coreAnswer)}</p>
      </div>

      {/* Recommended practice */}
      {data.recommendedPractice.length > 0 && (
        <div>
          <p className="mb-2 text-[10px] font-bold uppercase tracking-wider text-white/40">🎯 Practice next</p>
          <div className="flex flex-wrap gap-1.5">
            {data.recommendedPractice.map((t) => (
              <span key={t} className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs text-white/70">{t}</span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
