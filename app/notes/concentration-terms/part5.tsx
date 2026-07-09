"use client";

import React from "react";
import { InlineMath, BlockMath } from "@/components/math/react-katex";

export default function ConcentrationTermsPart5() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-8 text-slate-100 md:px-10">
      <article className="mx-auto max-w-5xl space-y-10">
        <header className="rounded-3xl border border-violet-400/30 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-6 shadow-2xl md:p-8">
          <div className="flex items-center justify-between">
            <span className="rounded-full bg-violet-500/20 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-violet-300">
              Concentration Terms — Topic 5
            </span>
            <span className="text-xs font-bold text-slate-400">Quantitative Solution Chemistry</span>
          </div>

          <h1 className="mt-4 text-3xl font-black text-white md:text-4xl">
            Normality (<InlineMath math="N" />), Equivalent Weight (<InlineMath math="E" />) &amp; Valency Factors (<InlineMath math="n\text{-factor}" />)
          </h1>

          <p className="mt-3 text-sm leading-relaxed text-slate-300 md:text-base">
            Comprehensive quantitative analysis of equivalent weight and normality across acid-base titrations, redox transformations, and ionic precipitations. Complete derivation of the universal law of chemical equivalence (<InlineMath math="N_1 V_1 = N_2 V_2" />).
          </p>
        </header>

        {/* Section 1: Equivalent Weight & n-factor */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-violet-300 border-l-4 border-violet-400 pl-3">
            1. Equivalent Weight (<InlineMath math="E" />) &amp; The Valency Factor (<InlineMath math="n\text{-factor}" />)
          </h2>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 space-y-4 text-sm leading-relaxed text-slate-200">
            <p>
              Equivalent weight (<InlineMath math="E" />) is the mass of a substance that reacts with or displaces exactly <InlineMath math="1.008\text{ g}" /> of hydrogen, <InlineMath math="8\text{ g}" /> of oxygen, or <InlineMath math="35.5\text{ g}" /> of chlorine. For any compound of molar mass <InlineMath math="M'" />, it is defined as:
            </p>

            <div className="overflow-x-auto py-3 bg-slate-950 rounded-2xl border border-slate-800 px-4">
              <BlockMath math={String.raw`E = \frac{\text{Molar Mass } (M')}{n\text{-factor} \ (\text{Valency Factor / Equivalent Factor})}`} />
            </div>

            <div className="grid gap-4 md:grid-cols-3 pt-2">
              <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
                <h3 className="font-bold text-cyan-300 mb-2">1. For Acids (<InlineMath math="n\text{-factor}" /> = Basicity)</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Number of replaceable <InlineMath math="\text{H}^+" /> ions per molecule in aqueous solution.
                </p>
                <div className="mt-2 text-xs font-mono text-slate-400">
                  Example: <InlineMath math="\text{H}_2\text{SO}_4 \implies n = 2 \implies E = \frac{98}{2} = 49\text{ g/eq}" />
                </div>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
                <h3 className="font-bold text-emerald-300 mb-2">2. For Bases (<InlineMath math="n\text{-factor}" /> = Acidity)</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Number of ionizable <InlineMath math="\text{OH}^-" /> ions per molecule in aqueous solution.
                </p>
                <div className="mt-2 text-xs font-mono text-slate-400">
                  Example: <InlineMath math="\text{Ca(OH)}_2 \implies n = 2 \implies E = \frac{74}{2} = 37\text{ g/eq}" />
                </div>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
                <h3 className="font-bold text-amber-300 mb-2">3. For Salts (<InlineMath math="n\text{-factor}" /> = Total Charge)</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Total positive charge on all cations (or total negative charge on all anions) in one formula unit.
                </p>
                <div className="mt-2 text-xs font-mono text-slate-400">
                  Example: <InlineMath math="\text{Al}_2(\text{SO}_4)_3 \implies n = 6 \implies E = \frac{342}{6} = 57\text{ g/eq}" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Normality (N) Definition */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-violet-300 border-l-4 border-violet-400 pl-3">
            2. Normality (<InlineMath math="N" />) &amp; Gram Equivalents
          </h2>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 space-y-4 text-sm leading-relaxed text-slate-200">
            <p>
              Normality (<InlineMath math="N" />) is defined as the number of <strong className="text-violet-300">Gram Equivalents (<InlineMath math="g\text{-eq}" />)</strong> of solute dissolved per exact litre of solution (<InlineMath math="\text{eq/L}" /> or <InlineMath math="N" />). Being volumetric, it varies with temperature.
            </p>

            <div className="overflow-x-auto py-3 bg-slate-950 rounded-2xl border border-slate-800 px-4 space-y-2">
              <BlockMath math={String.raw`N = \frac{\text{Gram Equivalents of Solute}}{\text{Volume of Solution (L)}} = \frac{w}{E} \times \frac{1000}{V (\text{mL})} = \frac{w \times (n\text{-factor}) \times 1000}{M' \times V (\text{mL})}`} />
              <div className="border-t border-slate-800 pt-2 text-center text-cyan-300 font-bold">
                Direct Relation between Normality and Molarity: <InlineMath math="N = M \times (n\text{-factor})" />
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 pt-2 text-xs font-mono">
              <div className="rounded-xl border border-slate-800 bg-slate-950 p-5 space-y-2">
                <span className="font-bold text-white">Solved Example: Normality of Sulfuric Acid</span>
                <p className="text-slate-300 font-sans">
                  Calculate the normality (<InlineMath math="N" />) of a <InlineMath math="0.25\ M\ \text{H}_2\text{SO}_4" /> aqueous solution.
                </p>
                <div className="mt-2 text-cyan-300 border-t border-slate-800 pt-2 space-y-1">
                  <BlockMath math={String.raw`n\text{-factor of } \text{H}_2\text{SO}_4 = 2`} />
                  <BlockMath math={String.raw`N = M \times (n\text{-factor}) = 0.25 \times 2 = 0.50\ N\ (\text{Seminormal})`} />
                </div>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-950 p-5 space-y-2">
                <span className="font-bold text-white">Solved Example: Solute Mass from Normality</span>
                <p className="text-slate-300 font-sans">
                  Calculate the exact mass of oxalic acid crystal (<InlineMath math="\text{H}_2\text{C}_2\text{O}_4 \cdot 2\text{H}_2\text{O}, M'=126" />) needed to prepare <InlineMath math="250\text{ mL}" /> of <InlineMath math="0.1\ N" /> solution.
                </p>
                <div className="mt-2 text-emerald-300 border-t border-slate-800 pt-2 space-y-1">
                  <BlockMath math={String.raw`n\text{-factor} = 2 \implies E = \frac{126}{2} = 63\text{ g/eq}`} />
                  <BlockMath math={String.raw`w = N \times E \times V(\text{L}) = 0.1 \times 63 \times 0.25 = 1.575\text{ g}`} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Law of Chemical Equivalence */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-violet-300 border-l-4 border-violet-400 pl-3">
            3. The Universal Law of Chemical Equivalence (<InlineMath math="N_1 V_1 = N_2 V_2" />)
          </h2>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 space-y-4 text-sm leading-relaxed text-slate-200">
            <p>
              When two chemical substances react completely (whether in acid-base neutralization, precipitation, or redox), they <strong className="text-violet-300">always react in the exact ratio of identical gram equivalents</strong>:
            </p>

            <div className="overflow-x-auto py-3 bg-slate-950 rounded-2xl border border-slate-800 px-4 text-center">
              <BlockMath math={String.raw`\text{Equivalents of Acid} = \text{Equivalents of Base} \implies N_1 V_1 = N_2 V_2`} />
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-950 p-5 space-y-2 text-xs font-mono">
              <span className="font-bold text-white">Solved Titration Application: Acid-Base Neutralization</span>
              <p className="text-slate-300 font-sans">
                What volume of <InlineMath math="0.1\ N\ \text{NaOH}" /> solution is required to completely neutralize <InlineMath math="25\text{ mL}" /> of <InlineMath math="0.2\ M\ \text{H}_2\text{SO}_4" /> solution?
              </p>
              <div className="pt-2 text-amber-300 border-t border-slate-800 space-y-1">
                <BlockMath math={String.raw`N_{\text{acid}} = M \times 2 = 0.2 \times 2 = 0.4\ N, \quad V_{\text{acid}} = 25\text{ mL}`} />
                <BlockMath math={String.raw`N_{\text{acid}} V_{\text{acid}} = N_{\text{base}} V_{\text{base}} \implies 0.4 \times 25 = 0.1 \times V_{\text{base}} \implies V_{\text{base}} = 100\text{ mL}`} />
              </div>
            </div>
          </div>
        </section>

        {/* Footer info */}
        <footer className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 text-center text-xs text-slate-400">
          <p>Concentration Terms Module • Topic 5: Normality (N), Equivalent Weight &amp; Valency Factors</p>
        </footer>
      </article>
    </main>
  );
}
