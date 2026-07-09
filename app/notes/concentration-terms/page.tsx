import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Concentration Terms — Complete Transcribed Notes — SYNERGIC BOND",
  description: "Comprehensive digital transcriptions of Concentration Terms across all 6 core quantitative solution chemistry topics.",
};

const topics = [
  {
    badge: "Topic 1",
    title: "Solute vs. Solvent & Percentage Solutions",
    desc: "Criteria for identifying solute/solvent across phase mixtures, and percentage formulas (% w/w, % w/v, % v/v, % v/w) with solved density interconversions.",
    href: "/notes/concentration-terms/part1",
    color: "rose",
  },
  {
    badge: "Topic 2",
    title: "Dilution Formulas, Mixing & PPM / PPB",
    desc: "Principle of mole conservation during dilution (M₁V₁ = M₂V₂), molarity of mixed solutions (M_mix = [M₁V₁ + M₂V₂]/[V₁ + V₂]), and trace concentration scales (ppm / ppb).",
    href: "/notes/concentration-terms/part2",
    color: "amber",
  },
  {
    badge: "Topic 3",
    title: "Gram/Litre Strength & Molarity (M)",
    desc: "Exact definitions of strength (S = w/V in g/L), molarity calculations, temperature dependence of volume-based scales, and direct relationships (S = M × Molar Mass).",
    href: "/notes/concentration-terms/part3",
    color: "cyan",
  },
  {
    badge: "Topic 4",
    title: "Molality (m) & Mole Fraction (χ)",
    desc: "Temperature-independent concentration scales: molality (moles per kg solvent), mole fraction summation laws (χ_A + χ_B = 1), and binary solution derivations.",
    href: "/notes/concentration-terms/part4",
    color: "emerald",
  },
  {
    badge: "Topic 5",
    title: "Normality (N), Equivalent Weight & Valency Factors",
    desc: "Law of chemical equivalence, equivalent weight derivations (E = M/n-factor), normality calculations across acids, bases & oxidants/reductants, and dilution of normality.",
    href: "/notes/concentration-terms/part5",
    color: "violet",
  },
  {
    badge: "Topic 6",
    title: "Master Interconversions & Special Industrial Scales",
    desc: "Direct mathematical relations connecting M, m, χ, and N, alongside volume strength of H₂O₂ (1 V = 0.089 M) and percentage labeling of Oleum (104.5% H₂SO₄).",
    href: "/notes/concentration-terms/part6",
    color: "rose",
  },
];

const colorClasses: Record<string, { badge: string; border: string; hover: string; link: string }> = {
  rose: {
    badge: "bg-rose-500/20 text-rose-300 border-rose-500/30",
    border: "border-slate-800",
    hover: "hover:border-rose-400/50 hover:shadow-rose-500/10",
    link: "text-rose-400 group-hover:text-rose-300",
  },
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
};

export default function ConcentrationTermsHub() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-12 text-slate-100 md:px-10">
      <div className="mx-auto max-w-6xl space-y-10">
        <div className="flex flex-col gap-4 border-b border-slate-800 pb-8 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-rose-500/20 px-3 py-1 text-xs font-bold uppercase tracking-widest text-rose-300">
                Transcribed Notes Module
              </span>
              <span className="text-xs font-bold text-slate-400">Quantitative Solution Chemistry</span>
            </div>
            <h1 className="mt-3 text-4xl font-black text-white md:text-5xl tracking-tight">
              Concentration Terms
            </h1>
            <p className="mt-3 max-w-2xl text-base text-slate-300 leading-relaxed">
              Complete digital transcriptions exploring exact solution composition scales, dilution conservation principles, and advanced interconversions.
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

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {topics.map((t, index) => {
            const style = colorClasses[t.color] || colorClasses.rose;
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
                  <h2 className="mt-4 text-xl font-bold text-white group-hover:text-rose-300 transition leading-snug">
                    {t.title}
                  </h2>
                  <p className="mt-3 text-sm text-slate-400 leading-relaxed">
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
