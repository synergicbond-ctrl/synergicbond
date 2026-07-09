import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Eudiometry — Synergic Bond Course Chapter",
  description: "Comprehensive interactive course modules on Eudiometry, gas-phase combustion stoichiometry, selective chemical absorbents, and molecular formula determination.",
};

const modules = [
  {
    slug: "part1",
    badge: "Module 1",
    color: "cyan",
    title: "Gas Volume Foundations & Eudiometry Principles",
    description:
      "Gay-Lussac's Law of Combining Volumes, Avogadro's Hypothesis, Amagat's additive volume law for non-reacting mixtures, phase treatment rules, and air composition assumptions.",
  },
  {
    slug: "part2",
    badge: "Module 2",
    color: "amber",
    title: "Combustion & Final Gas Composition Analysis",
    description:
      "Limiting reagent identification directly from volume ratios, simultaneous algebraic equations for binary hydrocarbon mixtures, and non-combustion volume shifts (carbon reduction and ozonisation).",
  },
  {
    slug: "part3",
    badge: "Module 3",
    color: "emerald",
    title: "Volume Contraction & Residual Gas Analysis",
    description:
      "Theory of volumetric contraction (steam condensation and mole reduction), spectator nitrogen accounting during air combustion, and multi-component industrial fuel mixtures (Coal Gas).",
  },
  {
    slug: "part4",
    badge: "Module 4",
    color: "violet",
    title: "Hydrogen, Nitrogen & Oxygen Gas Mixture Firing",
    description:
      "Selective hydrogen oxidation, rigorous hypothesis testing for unknown limiting reagents, and multi-stage sequential firings with secondary oxygen additions.",
  },
  {
    slug: "part5",
    badge: "Module 5",
    color: "cyan",
    title: "Absorption-Based Gas Analysis & Selective Scrubbing",
    description:
      "Comprehensive reference table of the six selective chemical absorbents (KOH, alkaline pyrogallol, ammoniacal cuprous chloride, turpentine oil) and sequential volumetric gas isolation.",
  },
  {
    slug: "part6",
    badge: "Module 6",
    color: "rose",
    title: "Molecular Formula from Eudiometry & Hydrocarbon Identification",
    description:
      "Master combustion stoichiometry for C_xH_y and C_xH_yO_z, deriving molecular formula subscripts directly from contraction/absorption data, and homologous series identification across Alkanes, Alkenes, Alkynes, and Arenes.",
  },
];

export default function EudiometryHub() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-12 text-slate-100 md:px-10">
      <div className="mx-auto max-w-5xl space-y-10">
        {/* Hub Header */}
        <div className="flex flex-col gap-4 border-b border-slate-800 pb-6 md:flex-row md:items-center md:justify-between">
          <div>
            <span className="rounded-full bg-cyan-500/20 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
              Synergic Bond Chapter Engine
            </span>
            <h1 className="mt-3 text-4xl font-black text-white md:text-5xl">Eudiometry</h1>
            <p className="mt-2 text-sm text-slate-400 max-w-2xl leading-relaxed">
              Quantitative analysis of reacting gaseous mixtures and determination of molecular formulas using calibrated eudiometer tubes over mercury. Select a course module below to master each core concept.
            </p>
          </div>
          <div className="flex shrink-0 gap-3">
            <Link
              href="/notes"
              className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-2.5 text-xs font-bold text-slate-300 transition hover:bg-slate-800 hover:text-white"
            >
              ← All Notes Hub
            </Link>
            <Link
              href="/programs/jee-main/chapter/mole-concept"
              className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2.5 text-xs font-bold text-white shadow-lg transition hover:from-cyan-400 hover:to-blue-500"
            >
              Chapter Engine →
            </Link>
          </div>
        </div>

        {/* Modules Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {modules.map((mod) => {
            const badgeColors: Record<string, string> = {
              cyan: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
              amber: "bg-amber-500/20 text-amber-300 border-amber-500/30",
              emerald: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
              violet: "bg-violet-500/20 text-violet-300 border-violet-500/30",
              rose: "bg-rose-500/20 text-rose-300 border-rose-500/30",
            };

            const borderHoverColors: Record<string, string> = {
              cyan: "hover:border-cyan-400/50 hover:shadow-cyan-500/10",
              amber: "hover:border-amber-400/50 hover:shadow-amber-500/10",
              emerald: "hover:border-emerald-400/50 hover:shadow-emerald-500/10",
              violet: "hover:border-violet-400/50 hover:shadow-violet-500/10",
              rose: "hover:border-rose-400/50 hover:shadow-rose-500/10",
            };

            return (
              <Link
                key={mod.slug}
                href={`/notes/eudiometry/${mod.slug}`}
                className={`group flex flex-col justify-between rounded-3xl border border-slate-800 bg-slate-900/90 p-6 shadow-xl transition-all duration-300 ${borderHoverColors[mod.color]}`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className={`rounded-full border px-3 py-1 text-xs font-bold ${badgeColors[mod.color]}`}>
                      {mod.badge}
                    </span>
                    <span className="text-xs font-bold text-slate-500 group-hover:text-slate-300 transition">
                      Module Lesson
                    </span>
                  </div>
                  <h2 className="mt-4 text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {mod.title}
                  </h2>
                  <p className="mt-2 text-xs text-slate-400 leading-relaxed">{mod.description}</p>
                </div>
                <div className="mt-6 flex items-center justify-between border-t border-slate-800/80 pt-4 text-xs font-bold">
                  <span className="text-slate-400 group-hover:text-white transition">Start Interactive Module</span>
                  <span className="text-cyan-400 group-hover:translate-x-1 transition-transform">Explore →</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}
