"use client";

import { useState } from "react";
import type { FlowNode } from "@/lib/mechanismSchema";

const KIND: Record<string, string> = {
  reactant: "border-sky-400/40 bg-sky-500/10 text-sky-200",
  reagent: "border-amber-400/40 bg-amber-500/10 text-amber-200",
  intermediate: "border-purple-400/40 bg-purple-500/10 text-purple-200",
  transition: "border-fuchsia-400/30 bg-fuchsia-500/5 text-fuchsia-200/80 border-dashed",
  product: "border-emerald-400/40 bg-emerald-500/10 text-emerald-200",
};

// Horizontal, clickable reaction timeline (mobile = horizontal scroll).
export default function FlowMap({ nodes, onPick }: { nodes: FlowNode[]; onPick?: (i: number) => void }) {
  const [active, setActive] = useState<number | null>(null);
  return (
    <div className="-mx-1 flex items-center gap-1 overflow-x-auto pb-2">
      {nodes.map((n, i) => (
        <div key={i} className="flex shrink-0 items-center">
          <button
            onClick={() => { setActive(i); onPick?.(i); }}
            className={`rounded-xl border px-3 py-2 text-xs font-semibold transition ${KIND[n.kind] || KIND.intermediate} ${active === i ? "ring-2 ring-white/40" : "hover:brightness-125"}`}
          >
            {n.label}
          </button>
          {i < nodes.length - 1 && <span className="px-1 text-white/30">→</span>}
        </div>
      ))}
    </div>
  );
}
