"use client";

import { forwardRef } from "react";
import { ArrowRight, AlertTriangle, Lightbulb } from "lucide-react";
import StructureView from "./StructureView";
import type { MechanismStep } from "@/lib/mechanismSchema";

function StepCard({ s }: { s: MechanismStep }) {
  return (
    <div className="rounded-2xl border border-purple-400/15 bg-[#111827] p-4">
      <div className="mb-2 flex items-center gap-2">
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-500/20 text-xs font-black text-purple-200">{s.n}</span>
        <h3 className="text-sm font-black text-white">{s.title}</h3>
      </div>

      {(s.beforeSmiles || s.afterSmiles) && (
        <div className="mb-3 flex flex-wrap items-center justify-center gap-2 rounded-xl bg-[#0B0F19] p-2">
          <StructureView smiles={s.beforeSmiles} label="before" />
          <ArrowRight className="h-5 w-5 shrink-0 text-purple-300" />
          <StructureView smiles={s.afterSmiles} label="after" />
        </div>
      )}

      {/* Electron movement — schematic one-liner (not claimed-exact geometry) */}
      <p className="rounded-lg bg-purple-500/[0.07] px-3 py-1.5 text-[13px] text-purple-100">
        <span className="font-bold">↪ </span>{s.electronMove}
      </p>

      {s.intermediate && (
        <p className="mt-1.5 text-[12px] text-white/55"><span className="font-semibold text-white/70">Intermediate:</span> {s.intermediate}</p>
      )}
      <p className="mt-1.5 text-[13px] text-white/70">{s.reason}</p>

      {(s.trap || s.hook) && (
        <div className="mt-2 space-y-1.5">
          {s.trap && (
            <p className="flex items-start gap-1.5 text-[12px] text-rose-300/90"><AlertTriangle className="mt-0.5 h-3.5 w-3.5 shrink-0" /> {s.trap}</p>
          )}
          {s.hook && (
            <p className="flex items-start gap-1.5 text-[12px] text-amber-300/90"><Lightbulb className="mt-0.5 h-3.5 w-3.5 shrink-0" /> {s.hook}</p>
          )}
        </div>
      )}
    </div>
  );
}

const MechanismSteps = forwardRef<HTMLDivElement, { steps: MechanismStep[] }>(function MechanismSteps({ steps }, ref) {
  return (
    <div ref={ref} className="space-y-3">
      {steps.map((s) => <StepCard key={s.n} s={s} />)}
    </div>
  );
});

export default MechanismSteps;
