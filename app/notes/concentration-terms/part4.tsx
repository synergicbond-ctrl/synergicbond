"use client";

import React from "react";
import { InlineMath, BlockMath } from "@/components/math/react-katex";

export default function ConcentrationTermsPart4() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-8 text-slate-100 md:px-10">
      <article className="mx-auto max-w-5xl space-y-10">
        <header className="rounded-3xl border border-emerald-400/30 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-6 shadow-2xl md:p-8">
          <div className="flex items-center justify-between">
            <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">
              Concentration Terms — Topic 4
            </span>
            <span className="text-xs font-bold text-slate-400">Quantitative Solution Chemistry</span>
          </div>

          <h1 className="mt-4 text-3xl font-black text-white md:text-4xl">
            Molality (<InlineMath math="m" />), Mole Fraction (<InlineMath math="\chi" />) &amp; Temperature-Independent Scales
          </h1>

          <p className="mt-3 text-sm leading-relaxed text-slate-300 md:text-base">
            Detailed exploration of mass-based solution concentration scales that remain strictly invariant under thermal expansion or contraction: Molality (<InlineMath math="m" />) defined per kilogram of solvent, Mole Fraction (<InlineMath math="\chi" />) summation laws, and solved multi-component mixing ratios.
          </p>
        </header>

        {/* Section 1: Advanced Mixing Volume Ratios (from Page 13) */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-emerald-300 border-l-4 border-emerald-400 pl-3">
            1. Volumetric Ratios &amp; Ionic Mixing in Molar Solutions
          </h2>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 space-y-4 text-sm leading-relaxed text-slate-200">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-slate-800 bg-slate-950 p-5 space-y-2 text-xs font-mono flex flex-col justify-between">
                <div>
                  <span className="font-bold text-white">Illustration 1: Target Molarity Volume Ratio</span>
                  <p className="text-slate-300 font-sans mt-1">
                    In what exact volume ratio should <InlineMath math="2\ M\ \text{NaOH}" /> and <InlineMath math="5\ M\ \text{NaOH}" /> solutions be mixed together to obtain a resultant solution of exactly <InlineMath math="4\ M" /> concentration?
                  </p>
                  <div className="mt-3 text-cyan-300 space-y-1 border-t border-slate-800 pt-2">
                    <BlockMath math={String.raw`M_f = \frac{M_1 V_1 + M_2 V_2}{V_1 + V_2} \implies 4(V_1 + V_2) = 2V_1 + 5V_2`} />
                    <BlockMath math={String.raw`4V_1 + 4V_2 = 2V_1 + 5V_2 \implies 2V_1 = 1V_2`} />
                  </div>
                </div>
                <div className="mt-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 p-2 text-center font-bold text-emerald-300">
                  Required Volume Ratio <InlineMath math="V_1 : V_2 = 1 : 2" />
                </div>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-950 p-5 space-y-2 text-xs font-mono flex flex-col justify-between">
                <div>
                  <span className="font-bold text-white">Illustration 2: Target Chloride Ion Equivalence</span>
                  <p className="text-slate-300 font-sans mt-1">
                    What volume of <InlineMath math="0.4\ M\ \text{MgCl}_2" /> must be mixed with <InlineMath math="40\text{ mL}" /> of <InlineMath math="0.5\ M\ \text{AlCl}_3" /> to obtain a final mixture whose chloride ion concentration is exactly <InlineMath math="[\text{Cl}^-] = 1.2\ M" />?
                  </p>
                  <div className="mt-3 text-amber-300 space-y-1 border-t border-slate-800 pt-2">
                    <BlockMath math={String.raw`[\text{Cl}^-]_1 = 2(0.4) = 0.8\ M, \quad [\text{Cl}^-]_2 = 3(0.5) = 1.5\ M`} />
                    <BlockMath math={String.raw`1.2 = \frac{0.8 V_1 + 1.5(40)}{V_1 + 40} \implies 1.2 V_1 + 48 = 0.8 V_1 + 60`} />
                    <BlockMath math={String.raw`0.4 V_1 = 12 \implies V_1 = 30\text{ mL}`} />
                  </div>
                </div>
                <div className="mt-3 rounded-lg bg-cyan-500/10 border border-cyan-500/20 p-2 text-center font-bold text-cyan-300">
                  Required Volume <InlineMath math="V_1 = 30\text{ mL}" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Molality (m) */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-emerald-300 border-l-4 border-emerald-400 pl-3">
            2. Molality (<InlineMath math="m" />) — Definition &amp; Thermal Independence
          </h2>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 space-y-4 text-sm leading-relaxed text-slate-200">
            <p>
              Molality (<InlineMath math="m" />) is defined as the number of moles of solute dissolved per <strong className="text-emerald-300">exact kilogram (<InlineMath math="1000\text{ g}" />) of pure solvent</strong>.
            </p>

            <div className="overflow-x-auto py-3 bg-slate-950 rounded-2xl border border-slate-800 px-4">
              <BlockMath math={String.raw`m = \frac{\text{Moles of solute } (n)}{\text{Mass of solvent in kilograms } (W_{\text{kg}})} = \frac{w_{\text{solute}} \times 1000}{M_{\text{solute}} \times W_{\text{solvent (g)}}}`} />
            </div>

            <div className="rounded-xl bg-emerald-500/10 border border-emerald-500/20 p-4 text-xs text-emerald-200 space-y-2">
              <div className="font-bold uppercase tracking-wider">Why Molality is Superior for High-Precision Colligative Studies</div>
              <p>
                Unlike Molarity (<InlineMath math="M" />) which depends on total solution volume (<InlineMath math="V" />), Molality (<InlineMath math="m" />) is constructed entirely from mass quantities (<InlineMath math="w_{\text{solute}}" /> and <InlineMath math="W_{\text{solvent}}" />). Because mass does not expand or contract when heated or cooled, <strong className="text-white">Molality is strictly temperature-independent</strong>.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 pt-2 text-xs font-mono">
              <div className="rounded-xl border border-slate-800 bg-slate-950 p-5 space-y-2">
                <span className="font-bold text-white">Solved Example: Molality of Glucose Solution</span>
                <p className="text-slate-300 font-sans">
                  <InlineMath math="18\text{ g}" /> of glucose (<InlineMath math="\text{C}_6\text{H}_{12}\text{O}_6, M'=180" />) is dissolved inside <InlineMath math="500\text{ g}" /> of pure water. Calculate the molality (<InlineMath math="m" />).
                </p>
                <div className="mt-2 text-cyan-300 border-t border-slate-800 pt-2">
                  <BlockMath math={String.raw`n = \frac{18}{180} = 0.1\text{ mol}, \quad W_{\text{water}} = 0.5\text{ kg}`} />
                  <BlockMath math={String.raw`m = \frac{0.1\text{ mol}}{0.5\text{ kg}} = 0.2\ m\ (\text{molal})`} />
                </div>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-950 p-5 space-y-2">
                <span className="font-bold text-white">Solved Example: Molality from <InlineMath math="\% w/w" /></span>
                <p className="text-slate-300 font-sans">
                  Calculate the molality of a <InlineMath math="20\% (w/w)" /> aqueous sodium hydroxide (<InlineMath math="\text{NaOH}, M'=40" />) solution.
                </p>
                <div className="mt-2 text-emerald-300 border-t border-slate-800 pt-2">
                  <BlockMath math={String.raw`\text{In } 100\text{ g solution: } w_{\text{NaOH}} = 20\text{ g}, \quad W_{\text{water}} = 80\text{ g}`} />
                  <BlockMath math={String.raw`m = \frac{20/40}{80/1000} = \frac{0.5 \times 1000}{80} = 6.25\ m`} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Mole Fraction (χ) */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-emerald-300 border-l-4 border-emerald-400 pl-3">
            3. Mole Fraction (<InlineMath math="\chi" />) &amp; Summation Axioms
          </h2>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 space-y-4 text-sm leading-relaxed text-slate-200">
            <p>
              Mole fraction (<InlineMath math="\chi_i" />) of any component in a mixture is the dimensionless ratio of the number of moles of that component (<InlineMath math="n_i" />) to the total number of moles of all components present inside the solution (<InlineMath math="n_{\text{total}}" />). Being pure counts of particles, it is <strong className="text-emerald-300">temperature-independent</strong>.
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-slate-800 bg-slate-950 p-5 text-center">
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-300">Binary Solution (<InlineMath math="A + B" />) Formulas</span>
                <div className="mt-3 overflow-x-auto space-y-2">
                  <BlockMath math={String.raw`\chi_A = \frac{n_A}{n_A + n_B}, \quad \chi_B = \frac{n_B}{n_A + n_B}`} />
                </div>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-950 p-5 text-center flex flex-col justify-center">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-300">Summation Axiom</span>
                <div className="mt-3 overflow-x-auto">
                  <BlockMath math={String.raw`\sum \chi_i = \chi_1 + \chi_2 + \dots + \chi_n = 1`} />
                </div>
                <p className="text-xs text-slate-400 mt-1">For any binary solution: <InlineMath math="\chi_A + \chi_B = 1" />.</p>
              </div>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-950 p-5 space-y-2 text-xs font-mono">
              <span className="font-bold text-white">Solved Application: Ethanol-Water Mixture</span>
              <p className="text-slate-300 font-sans">
                A solution contains <InlineMath math="46\text{ g}" /> of ethanol (<InlineMath math="\text{C}_2\text{H}_5\text{OH}, M'=46" />) mixed with <InlineMath math="72\text{ g}" /> of pure water (<InlineMath math="\text{H}_2\text{O}, M'=18" />). Calculate the mole fraction of both components.
              </p>
              <div className="pt-2 text-amber-300 border-t border-slate-800 space-y-1">
                <BlockMath math={String.raw`n_{\text{ethanol}} = \frac{46}{46} = 1\text{ mol}, \quad n_{\text{water}} = \frac{72}{18} = 4\text{ mol} \implies n_{\text{total}} = 5\text{ mol}`} />
                <BlockMath math={String.raw`\chi_{\text{ethanol}} = \frac{1}{5} = 0.20, \quad \chi_{\text{water}} = \frac{4}{5} = 0.80 \quad (\text{Check: } 0.20 + 0.80 = 1.0)`} />
              </div>
            </div>
          </div>
        </section>

        {/* Footer info */}
        <footer className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 text-center text-xs text-slate-400">
          <p>Concentration Terms Module • Topic 4: Molality (m), Mole Fraction (χ) &amp; Thermal Independence</p>
        </footer>
      </article>
    </main>
  );
}
