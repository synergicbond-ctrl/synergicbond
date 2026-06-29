"use client";

import { useMemo, useState } from "react";
import { ChevronDown } from "lucide-react";
import type { Example } from "@/lib/mechanismSchema";

const TIERS = ["All", "Basic", "JEE Main", "JEE Advanced", "Olympiad", "PYQ"] as const;
const TIER_TONE: Record<string, string> = {
  Basic: "text-emerald-300", "JEE Main": "text-cyan-300", "JEE Advanced": "text-amber-300", Olympiad: "text-rose-300", PYQ: "text-violet-300",
};

export default function ExamplesEngine({ examples }: { examples: Example[] }) {
  const [tier, setTier] = useState<string>("All");
  const [open, setOpen] = useState<number | null>(0);
  const present = useMemo(() => new Set(examples.map((e) => e.tier)), [examples]);
  const list = useMemo(() => (tier === "All" ? examples : examples.filter((e) => e.tier === tier)), [examples, tier]);

  return (
    <div>
      <div className="mb-3 flex flex-wrap gap-1.5">
        {TIERS.filter((t) => t === "All" || present.has(t)).map((t) => (
          <button
            key={t}
            onClick={() => { setTier(t); setOpen(null); }}
            className={`rounded-full px-3 py-1 text-xs font-semibold transition ${tier === t ? "bg-purple-500 text-white" : "border border-white/10 bg-[#111827] text-white/60 hover:text-white"}`}
          >
            {t}
          </button>
        ))}
      </div>
      <div className="space-y-2">
        {list.map((e, i) => (
          <div key={i} className="rounded-xl border border-white/[0.06] bg-[#111827] overflow-hidden">
            <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between gap-2 px-3.5 py-2.5 text-left">
              <span className="min-w-0 text-[13px] text-white/85">
                <span className={`mr-2 text-[10px] font-bold uppercase ${TIER_TONE[e.tier]}`}>{e.tier}</span>
                {e.prompt}
              </span>
              <ChevronDown className={`h-4 w-4 shrink-0 text-white/40 transition-transform ${open === i ? "rotate-180" : ""}`} />
            </button>
            {open === i && <p className="border-t border-white/[0.06] px-3.5 py-2.5 text-[13px] text-emerald-200/90">{e.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
