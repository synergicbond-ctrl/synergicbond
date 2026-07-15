import React from "react";
import Link from "next/link";
import ChapterHero from "@/components/notes/ChapterHero";

export const metadata = {
  title: "Mole Concept Notes Hub — SYNERGIC BOND",
  description: "Comprehensive notes and classroom concepts for Mole Concept, Stoichiometry, Concentration Terms & Eudiometry.",
};

const moleConceptTopics = [
  {
    badge: "Foundation",
    title: "Foundations of the Mole",
    desc: "SI definition of the mole, Avogadro constant, Faraday constant, and elementary charge conversions across phases.",
    href: "/notes/mole-concept/part1",
    color: "cyan",
  },
  {
    badge: "Counting & Avogadro",
    title: "Avogadro Constant and Counting Particles",
    desc: "Atomic number vs mass number, nuclear mass defect calculations, and Einstein mass-energy equivalence.",
    href: "/notes/mole-concept/part2",
    color: "emerald",
  },
  {
    badge: "Atomic Scale",
    title: "Atomic Mass and Mass Scale",
    desc: "Historical H/O/C-12 reference scales, unified atomic mass unit (u), and Gram Atomic Mass (GAM) mass-to-mole conversions.",
    href: "/notes/mole-concept/part3",
    color: "amber",
  },
  {
    badge: "Molar Conversions",
    title: "Gram Atomic Mass and Conversions",
    desc: "Atomic dimensions vs molar volume, crystal lattice packing efficiency (SC/BCC/FCC), and line-up atom calculations.",
    href: "/notes/mole-concept/part4",
    color: "violet",
  },
  {
    badge: "Molecular Scale",
    title: "Molecular Mass and Formula Mass",
    desc: "Molecular mass summation, Gram Molecular Mass (GMM), Lavoisier mass conservation, and largest-number ranking calculations.",
    href: "/notes/mole-concept/part5",
    color: "rose",
  },
  {
    badge: "Crystalline Salts",
    title: "Formula Units and Hydrated Salts",
    desc: "Virus particle specific volume derivations, hydrated salt formula unit inventories, and equal-hydrogen stoichiometry comparisons.",
    href: "/notes/mole-concept/part6",
    color: "cyan",
  },
  {
    badge: "Ionic Charge",
    title: "Charge Counting in Ions",
    desc: "Polyatomic ionic electron/proton inventories, total Coulombs of charge, and AB2/A2B3 under-constrained linear systems.",
    href: "/notes/mole-concept/part7",
    color: "emerald",
  },
  {
    badge: "Composition Ratio",
    title: "Compound Composition Problems",
    desc: "Simultaneous linear mass extraction across dual binary compounds, organometallic analysis, and CH4 molecule extraction.",
    href: "/notes/mole-concept/part8",
    color: "amber",
  },
  {
    badge: "Volumetric Scale",
    title: "Gaseous Molar Volume",
    desc: "Standard molar volume (22.4 L) at STP/NTP, universal ideal gas equation of state PV=nRT, and exact gas constant conversions.",
    href: "/notes/mole-concept/part9",
    color: "violet",
  },
  {
    badge: "Gas Transformations",
    title: "Ideal Gas Applications",
    desc: "Metric volume interconversions, Celsius to Kelvin transformations, and the Combined Gas Equation (P1V1/T1 = P2V2/T2).",
    href: "/notes/mole-concept/part10",
    color: "rose",
  },
  {
    badge: "Density & VD",
    title: "Gas Density and Vapour Density",
    desc: "Absolute gas density (PM=dRT), Vapour Density (VD=M/2), diatomic chlorine volume at STP, and mass spectrometry physics.",
    href: "/notes/mole-concept/part11",
    color: "cyan",
  },
  {
    badge: "Isotopic Averages",
    title: "Isotopes and Average Atomic Mass",
    desc: "Isotopic abundance weighted average calculations across Cl, B, Li, O, and N systems, and average neutron counts.",
    href: "/notes/mole-concept/part12",
    color: "emerald",
  },
  {
    badge: "Gas Mixtures",
    title: "Gas Mixtures and Partial Pressure",
    desc: "Dalton's law of partial pressures, Amagat's partial volume law, and volume percentage vs mole percentage equality.",
    href: "/notes/mole-concept/part13",
    color: "amber",
  },
  {
    badge: "Ozonized Systems",
    title: "Ozonized Oxygen and Mixture Analysis",
    desc: "Mass composition reciprocal formula calculations, binary hydrocarbon atomic ratios, and ozonized oxygen kinetics at STP.",
    href: "/notes/mole-concept/part14",
    color: "violet",
  },
  {
    badge: "Equilibrium & Review",
    title: "Dissociation, Association and Final Review",
    desc: "Thermal dissociation degree (alpha), apparent molecular weight reduction bounds, and complete curriculum synthesis.",
    href: "/notes/mole-concept/part15",
    color: "rose",
  },
];

const colorClasses: Record<string, { badge: string; border: string; hover: string; link: string }> = {
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
  amber: {
    badge: "bg-amber-500/20 text-amber-300 border-amber-500/30",
    border: "border-slate-800",
    hover: "hover:border-amber-400/50 hover:shadow-amber-500/10",
    link: "text-amber-400 group-hover:text-amber-300",
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
};

export default function MoleConceptNotesHub() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-12 text-slate-100 md:px-10">
      <div className="mx-auto max-w-6xl space-y-12">
        {/* Top Header */}
        <ChapterHero
          eyebrow="Quantitative Chemistry OS"
          category="Exact Chapter Order"
          title="Some Basic Concepts of Chemistry"
          description="Complete physical chemistry lessons organized into 4 comprehensive chapters: Mole Concept, Stoichiometry, Concentration Terms, and Eudiometry."
          backHref="/programs/jee-main/chapter/mole-concept"
          backLabel="Open Chapter Engine →"
          accent="cyan"
        />

        {/* 4 Core Chapters Overview Grid */}
        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-400 mb-4">
            Chapter Navigation
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* 1. Mole Concept */}
            <div className="rounded-3xl border border-cyan-500/40 bg-gradient-to-b from-cyan-950/20 to-slate-900 p-6 space-y-4 flex flex-col justify-between shadow-xl">
              <div>
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-cyan-400/20 px-3 py-1 text-xs font-bold text-cyan-300">Chapter 1</span>
                  <span className="text-xs font-bold text-slate-400">15 Core Lessons</span>
                </div>
                <h3 className="mt-4 text-2xl font-bold text-white">Mole Concept</h3>
                <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                  Fundamental definitions, Avogadro constant, amu, molar mass, interconversion formulas, gas densities, isotopes, mixtures, and dissociation.
                </p>
              </div>
              <div className="pt-4">
                <a href="#mole-concept-topics" className="block text-center rounded-xl bg-cyan-400 px-4 py-2.5 text-sm font-bold text-slate-950 hover:bg-cyan-300 transition">
                  Explore All Lessons ↓
                </a>
              </div>
            </div>

            {/* 2. Stoichiometry */}
            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 space-y-4 flex flex-col justify-between shadow-xl hover:border-amber-400/40 transition">
              <div>
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-amber-500/20 px-3 py-1 text-xs font-bold text-amber-300">Chapter 2</span>
                  <span className="text-xs font-bold text-slate-400">9 Core Lessons</span>
                </div>
                <h3 className="mt-4 text-2xl font-bold text-white">Stoichiometry</h3>
                <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                  Stoichiometric coefficients (νᵢ), Mass-Mass relationships, Limiting Reagents (LR), % Yield, % Purity, POAC, and Parallel/Sequential reactions.
                </p>
              </div>
              <div className="pt-4">
                <Link href="/notes/stoichiometry" className="block text-center rounded-xl bg-amber-500 px-4 py-2.5 text-sm font-bold text-slate-950 hover:bg-amber-400 transition">
                  Open Stoichiometry Hub →
                </Link>
              </div>
            </div>

            {/* 3. Concentration Terms */}
            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 space-y-4 flex flex-col justify-between shadow-xl hover:border-emerald-400/40 transition">
              <div>
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-bold text-emerald-300">Chapter 3</span>
                  <span className="text-xs font-bold text-slate-400">6 Core Lessons</span>
                </div>
                <h3 className="mt-4 text-2xl font-bold text-white">Concentration Terms</h3>
                <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                  Molarity (M), Molality (m), Mole Fraction (χ), Normality (N), Equivalent weight, mixing &amp; dilution formulas, and H₂O₂ volume strength.
                </p>
              </div>
              <div className="pt-4">
                <Link href="/notes/concentration-terms" className="block text-center rounded-xl bg-emerald-500 px-4 py-2.5 text-sm font-bold text-slate-950 hover:bg-emerald-400 transition">
                  Open Concentration Hub →
                </Link>
              </div>
            </div>

            {/* 4. Eudiometry */}
            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 space-y-4 flex flex-col justify-between shadow-xl hover:border-violet-400/40 transition">
              <div>
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-violet-500/20 px-3 py-1 text-xs font-bold text-violet-300">Chapter 4</span>
                  <span className="text-xs font-bold text-slate-400">3 Core Lessons</span>
                </div>
                <h3 className="mt-4 text-2xl font-bold text-white">Eudiometry</h3>
                <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                  Gas volume analysis by sparking, hydrocarbon combustion stoichiometry, ozone ozoniser derivations, and complex residual volume analysis.
                </p>
              </div>
              <div className="pt-4">
                <Link href="/notes/eudiometry" className="block text-center rounded-xl bg-violet-500 px-4 py-2.5 text-sm font-bold text-slate-950 hover:bg-violet-400 transition">
                  Open Eudiometry Hub →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Section: Chapter 1 — Mole Concept Detailed Topic Grid */}
        <div id="mole-concept-topics" className="space-y-6 pt-6 border-t border-slate-800">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">Chapter 1 Deep Dive</span>
              <h2 className="mt-1 text-2xl font-black text-white md:text-3xl">Mole Concept — All 15 Course Lessons</h2>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {moleConceptTopics.map((t, index) => {
              const style = colorClasses[t.color] || colorClasses.cyan;
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
                    <h3 className="mt-4 text-xl font-bold text-white group-hover:text-cyan-300 transition leading-snug">
                      {t.title}
                    </h3>
                    <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                      {t.desc}
                    </p>
                  </div>
                  <div className="mt-6 flex items-center justify-between border-t border-slate-800/80 pt-4 text-xs font-bold">
                    <span className={style.link}>Open Lesson Notes →</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
