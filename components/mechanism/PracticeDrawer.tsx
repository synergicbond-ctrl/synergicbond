"use client";

import { useState } from "react";
import { X, Eye } from "lucide-react";
import type { Example } from "@/lib/mechanismSchema";

// Inline bottom-sheet practice — NEVER redirects. Uses the reaction's own
// examples as the question pool (reveal-answer flashcards).
export default function PracticeDrawer({ open, onClose, name, examples }: { open: boolean; onClose: () => void; name: string; examples: Example[] }) {
  const [revealed, setRevealed] = useState<Set<number>>(new Set());
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[120] flex items-end sm:items-center sm:justify-center bg-black/70 backdrop-blur-sm" onClick={onClose}>
      <div
        className="w-full sm:max-w-lg max-h-[85vh] overflow-y-auto rounded-t-3xl sm:rounded-3xl border border-white/[0.08] bg-[#111827] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 flex items-center justify-between border-b border-white/[0.06] bg-[#111827] px-5 py-3.5">
          <span className="text-sm font-bold text-white">Practice · {name}</span>
          <button onClick={onClose} className="p-1 text-white/40 hover:text-white"><X className="h-5 w-5" /></button>
        </div>
        <div className="space-y-2.5 px-5 py-4">
          {examples.map((e, i) => {
            const show = revealed.has(i);
            return (
              <div key={i} className="rounded-xl border border-white/[0.06] bg-[#0e1421] p-3.5">
                <p className="text-[13px] text-white/85"><span className="mr-2 text-[10px] font-bold uppercase text-purple-300">{e.tier}</span>{e.prompt}</p>
                {show ? (
                  <p className="mt-2 rounded-lg bg-emerald-500/10 px-3 py-1.5 text-[13px] text-emerald-200">{e.answer}</p>
                ) : (
                  <button
                    onClick={() => setRevealed((s) => new Set(s).add(i))}
                    className="mt-2 inline-flex items-center gap-1.5 rounded-lg border border-white/10 px-2.5 py-1 text-xs text-white/60 hover:text-white"
                  >
                    <Eye className="h-3.5 w-3.5" /> Reveal answer
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
