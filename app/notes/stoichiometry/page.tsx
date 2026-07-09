import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Stoichiometry — Complete Transcribed Notes Module — SYNERGIC BOND",
  description: "Comprehensive digital transcriptions of Stoichiometry notes across all core quantitative chemistry topics.",
};

const topics = [
  {
    badge: "Topic 1",
    title: "Chemical Equations, Coefficients & POAC",
    desc: "Chemical equations, stoichiometric coefficients (νᵢ), Mass-Mass, Mass-Volume at STP/NTP, Gay-Lussac's Law of gaseous volumes, and Principle of Atom Conservation (POAC).",
    href: "/notes/stoichiometry/part1",
    color: "amber",
  },
  {
    badge: "Topic 2",
    title: "Decomposition Stoichiometry & Thermal Assays",
    desc: "Advanced POAC problem solving, KClO₃ & NaHCO₃ thermal decomposition, volume changes, antacid tablet assay, tetraethyl lead (TEL), and algae photosynthesis calculation.",
    href: "/notes/stoichiometry/part2",
    color: "cyan",
  },
  {
    badge: "Topic 3",
    title: "Limiting Reagents (LR) & Percentage Yields",
    desc: "Detection of Limiting Reagent (LR) vs Excess Reagent, stoichiometry of multi-component systems, actual vs theoretical yields, and Percentage Yield calculations.",
    href: "/notes/stoichiometry/part3",
    color: "emerald",
  },
  {
    badge: "Topic 4",
    title: "Degree of Dissociation & Percentage Purity",
    desc: "Degree of dissociation of SO₃ & NH₃, acetylene trimerisation to benzene, Percentage Purity of samples, pyrolusite assay, and calculations involving mixtures.",
    href: "/notes/stoichiometry/part4",
    color: "violet",
  },
  {
    badge: "Topic 5",
    title: "Parallel & Competitive Reaction Mixtures",
    desc: "Equivalent reaction forms, NaCl + NaI mixture conversion, CH₄ & C₂H₆ combustion mixtures, minimum AgNO₃ volume requirement, and Parallel/Competitive reactions.",
    href: "/notes/stoichiometry/part5",
    color: "rose",
  },
  {
    badge: "Topic 6",
    title: "Sequential & Multi-Step Synthesis",
    desc: "Parallel reactions (Case 3 where both CO and CO₂ form), Sequential/Successive reactions linked through intermediate products, iron pyrite roasting, and combined yields.",
    href: "/notes/stoichiometry/part6",
    color: "blue",
  },
  {
    badge: "Topic 7",
    title: "Yield Optimization & Eudiometry Precursors",
    desc: "Decomposition yields, step-by-step yield multiplication across sequential synthesis, and volume contraction relationships during gas sparking.",
    href: "/notes/stoichiometry/part7",
    color: "amber",
  },
  {
    badge: "Topic 8",
    title: "Complex Parallel & Gravimetric Assay",
    desc: "Gravimetric analysis of complex mixtures, simultaneous equation derivations for alloy and ore composition, and precipitation stoichiometry.",
    href: "/notes/stoichiometry/part8",
    color: "emerald",
  },
  {
    badge: "Topic 9",
    title: "Advanced JEE Mixed Problems & Gas Phase Analysis",
    desc: "Comprehensive challenging problems combining limiting reagent, percentage purity, sequential reactions, and eudiometer volume contractions under variable P and T.",
    href: "/notes/stoichiometry/part9",
    color: "cyan",
  },
];

const colorClasses: Record<string, { badge: string; border: string; hover: string; link: string }> = {
  amber: {
    badge: "bg-amber-500/20 text-amber-300 border-amber-500/30",
    border: "border-slate-800",
    hover: "hover:border-amber-400/50 hover:shadow-amber-500/10",
    link: "text-amber-400 group-hover:text-amber-300",
  },
  cyan: {
    badge: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
    border: "border-slate-800",
    hover: "hover:border-cyan-400/50 hover:shadow-cyan-500/10",
    link: "text-cyan-400 group-hover:text-cyan-300",
  },
  emerald: {
    badge: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
    border: "border-slate-800",
    hover: "hover:border-emerald-400/50 hover:shadow-emerald-500/10",
    link: "text-emerald-400 group-hover:text-emerald-300",
  },
  violet: {
    badge: "bg-violet-500/20 text-violet-300 border-violet-500/30",
    border: "border-slate-800",
    hover: "hover:border-violet-400/50 hover:shadow-violet-500/10",
    link: "text-violet-400 group-hover:text-violet-300",
  },
  rose: {
    badge: "bg-rose-500/20 text-rose-300 border-rose-500/30",
    border: "border-slate-800",
    hover: "hover:border-rose-400/50 hover:shadow-rose-500/10",
    link: "text-rose-400 group-hover:text-rose-300",
  },
  blue: {
    badge: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    border: "border-slate-800",
    hover: "hover:border-blue-400/50 hover:shadow-blue-500/10",
    link: "text-blue-400 group-hover:text-blue-300",
  },
};

export default function StoichiometryHub() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-12 text-slate-100 md:px-10">
      <div className="mx-auto max-w-6xl space-y-10">
        {/* Header */}
        <div className="flex flex-col gap-4 border-b border-slate-800 pb-8 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-amber-500/20 px-3 py-1 text-xs font-bold uppercase tracking-widest text-amber-300">
                Transcribed Notes Module
              </span>
              <span className="text-xs font-bold text-slate-400">Quantitative Chemistry</span>
            </div>
            <h1 className="mt-3 text-4xl font-black text-white md:text-5xl tracking-tight">
              Stoichiometry
            </h1>
            <p className="mt-3 max-w-2xl text-base text-slate-300 leading-relaxed">
              Explore digital transcriptions across the complete quantitative chemistry syllabus — from basic stoichiometric coefficients to complex parallel reactions and percentage yields.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/notes/mole-concept"
              className="rounded-xl border border-slate-700 bg-slate-900 px-5 py-3 text-sm font-bold text-slate-200 shadow-lg hover:bg-slate-800 hover:text-white transition"
            >
              ← Mole Concept Notes Hub
            </Link>
          </div>
        </div>

        {/* Topic Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {topics.map((t, index) => {
            const style = colorClasses[t.color] || colorClasses.amber;
            return (
              <Link
                key={index}
                href={t.href}
                className={`group flex flex-col justify-between rounded-3xl border ${style.border} bg-slate-900/90 p-6 shadow-xl transition duration-300 ${style.hover}`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className={`rounded-full border px-3 py-1 text-xs font-bold ${style.badge}`}>
                      {t.badge}
                    </span>
                  </div>
                  <h2 className="mt-4 text-xl font-bold text-white group-hover:text-amber-300 transition leading-snug">
                    {t.title}
                  </h2>
                  <p className="mt-3 text-sm text-slate-400 leading-relaxed line-clamp-3">
                    {t.desc}
                  </p>
                </div>
                <div className="mt-6 flex items-center justify-between border-t border-slate-800/80 pt-4 text-xs font-bold">
                  <span className={style.link}>Open Topic Notes →</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}
