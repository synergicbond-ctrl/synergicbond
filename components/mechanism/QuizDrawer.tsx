"use client";

import { useState } from "react";
import { X, Check, RotateCcw } from "lucide-react";
import type { Example } from "@/lib/mechanismSchema";

// Inline flashcard quiz — NEVER redirects. Self-graded run through the
// reaction's examples with an instant score at the end.
export default function QuizDrawer({ open, onClose, name, examples }: { open: boolean; onClose: () => void; name: string; examples: Example[] }) {
  const [i, setI] = useState(0);
  const [show, setShow] = useState(false);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  if (!open) return null;
  const q = examples[i];

  function grade(correct: boolean) {
    if (correct) setScore((s) => s + 1);
    if (i + 1 >= examples.length) setDone(true);
    else { setI(i + 1); setShow(false); }
  }
  function restart() { setI(0); setShow(false); setScore(0); setDone(false); }

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center bg-black/75 backdrop-blur-sm p-0 sm:p-6" onClick={onClose}>
      <div className="flex h-full w-full flex-col sm:h-auto sm:max-w-md sm:rounded-3xl border border-white/[0.08] bg-[#111827] shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-3.5">
          <span className="text-sm font-bold text-white">Quiz · {name}</span>
          <button onClick={onClose} className="p-1 text-white/40 hover:text-white"><X className="h-5 w-5" /></button>
        </div>

        <div className="flex flex-1 flex-col justify-center px-5 py-6">
          {done ? (
            <div className="text-center">
              <p className="text-4xl font-black text-white">{score}/{examples.length}</p>
              <p className="mt-1 text-sm text-white/55">{score === examples.length ? "Perfect! 🎯" : score >= examples.length / 2 ? "Solid — review the misses." : "Revisit the mechanism, then retry."}</p>
              <button onClick={restart} className="mt-4 inline-flex items-center gap-1.5 rounded-xl bg-purple-500 px-4 py-2 text-sm font-bold text-white"><RotateCcw className="h-4 w-4" /> Retry</button>
            </div>
          ) : (
            <>
              <p className="mb-1 text-[11px] text-white/40">Q{i + 1} / {examples.length} · {q.tier}</p>
              <p className="text-base font-semibold text-white">{q.prompt}</p>
              {show ? (
                <>
                  <p className="mt-3 rounded-xl bg-emerald-500/10 px-3 py-2 text-sm text-emerald-200">{q.answer}</p>
                  <div className="mt-4 grid grid-cols-2 gap-2">
                    <button onClick={() => grade(false)} className="rounded-xl border border-white/10 py-2.5 text-sm font-semibold text-white/70 hover:bg-white/5">Missed it</button>
                    <button onClick={() => grade(true)} className="flex items-center justify-center gap-1.5 rounded-xl bg-emerald-500/20 py-2.5 text-sm font-semibold text-emerald-200 ring-1 ring-emerald-400/30"><Check className="h-4 w-4" /> Got it</button>
                  </div>
                </>
              ) : (
                <button onClick={() => setShow(true)} className="mt-4 rounded-xl bg-purple-500 py-2.5 text-sm font-bold text-white">Show answer</button>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
