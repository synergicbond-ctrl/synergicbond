"use client";

import { useState } from "react";
import { GitBranch, ArrowRight, Sparkles } from "lucide-react";

export default function ReactionPredictorPage() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");

  return (
    <main className="min-h-screen bg-[#0B0F19] text-white">
      <div className="mx-auto max-w-3xl px-6 py-14">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/25 bg-amber-500/10 px-3 py-1 text-amber-300 text-[11px] font-bold tracking-wider mb-4">
            <Sparkles className="h-3.5 w-3.5" /> COMING SOON · AI FEATURE
          </div>
          <h1 className="text-4xl font-black md:text-5xl">Reaction Predictor</h1>
          <p className="mt-3 text-white/60 text-sm max-w-xl mx-auto">
            Enter two reactants and our AI will predict the product, mechanism type and conditions — <span className="text-amber-300">launching soon</span>. Try the inputs below to see the flow.
          </p>
        </div>

        <div className="rounded-3xl bg-[#111827] border border-white/[0.06] p-6 md:p-8">
          <div className="flex items-center gap-3 flex-wrap justify-center">
            <input value={a} onChange={(e) => setA(e.target.value)} placeholder="Reactant A (e.g. CH₃CHO)"
              className="flex-1 min-w-[140px] rounded-xl border border-white/[0.08] bg-black/40 px-4 py-3 text-sm text-white placeholder-white/30 outline-none focus:border-cyan-400/50 text-center" />
            <span className="text-2xl font-black text-cyan-400">+</span>
            <input value={b} onChange={(e) => setB(e.target.value)} placeholder="Reactant B (e.g. NaOH)"
              className="flex-1 min-w-[140px] rounded-xl border border-white/[0.08] bg-black/40 px-4 py-3 text-sm text-white placeholder-white/30 outline-none focus:border-cyan-400/50 text-center" />
            <ArrowRight className="h-6 w-6 text-cyan-400" />
            <span className="flex-1 min-w-[140px] rounded-xl border border-dashed border-white/15 px-4 py-3 text-sm text-white/30 text-center">Product → ?</span>
          </div>

          <button
            onClick={() => alert("Reaction Predictor AI is launching soon! For now, use the AI Tutor or Doubt Solver for reaction predictions.")}
            className="mt-6 w-full rounded-xl bg-gradient-to-r from-amber-400/80 to-orange-500/80 px-6 py-3 text-sm font-bold text-black transition hover:-translate-y-0.5 flex items-center justify-center gap-2"
          >
            <GitBranch className="h-4 w-4" /> Predict Reaction (Soon)
          </button>

          <p className="text-xs text-white/40 text-center mt-5">
            Meanwhile, get instant reaction help from the{" "}
            <a href="/tutor" className="text-cyan-300 font-semibold">AI Tutor</a> or{" "}
            <a href="/doubt-solver" className="text-cyan-300 font-semibold">Doubt Solver</a>.
          </p>
        </div>
      </div>
    </main>
  );
}
