"use client";

import React from "react";
import { InlineMath, BlockMath } from "@/components/math/react-katex";

export default function ConcentrationTermsPart3() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-8 text-slate-100 md:px-10">
      <article className="mx-auto max-w-5xl space-y-10">
        <header className="rounded-3xl border border-cyan-400/30 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-6 shadow-2xl md:p-8">
          <div className="flex items-center justify-between">
            <span className="rounded-full bg-cyan-500/20 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
              Concentration Terms — Topic 3
            </span>
            <span className="text-xs font-bold text-slate-400">Quantitative Solution Chemistry</span>
          </div>

          <h1 className="mt-4 text-3xl font-black text-white md:text-4xl">
            Gram/Litre Strength (<InlineMath math="S" />) &amp; Molarity (<InlineMath math="M" />)
          </h1>

          <p className="mt-3 text-sm leading-relaxed text-slate-300 md:text-base">
            Comprehensive quantitative definitions of volumetric solution scales: Gram per Litre strength (<InlineMath math="S = \frac{w}{V}" />), molar concentration (<InlineMath math="M = \frac{n}{V}" />), temperature dependence, and multi-component mixing calculations across molar solutions.
          </p>
        </header>

        {/* Section 1: Gram per Litre Strength */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-cyan-300 border-l-4 border-cyan-400 pl-3">
            1. Gram per Litre Strength (<InlineMath math="S" />)
          </h2>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 space-y-4 text-sm leading-relaxed text-slate-200">
            <p>
              Strength (<InlineMath math="S" />) represents the absolute mass of solute in grams dissolved per exact litre of solution. Because it depends on solution volume, it is a <strong className="text-cyan-300">temperature-dependent</strong> parameter.
            </p>

            <div className="overflow-x-auto py-3 bg-slate-950 rounded-2xl border border-slate-800 px-4">
              <BlockMath math={String.raw`S (\text{g/L}) = \frac{\text{Mass of solute (g)}}{\text{Volume of solution (L)}} = \frac{w \times 1000}{V (\text{mL})}`} />
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-950 p-5 space-y-2 text-xs font-mono">
              <span className="font-bold text-white">Illustration: Sodium Hydroxide Strength</span>
              <p className="text-slate-300 font-sans">
                <InlineMath math="0.8\text{ mole}" /> of <InlineMath math="\text{NaOH}" /> (<InlineMath math="M=40\text{ g/mol}" />) is dissolved to prepare <InlineMath math="250\text{ mL}" /> of solution. Calculate its strength in <InlineMath math="\text{g/L}" />.
              </p>
              <div className="pt-2 text-cyan-300 border-t border-slate-800 space-y-1">
                <BlockMath math={String.raw`w_{\text{NaOH}} = n \times M = 0.8 \times 40 = 32\text{ g}`} />
                <BlockMath math={String.raw`S = \frac{32\text{ g}}{0.25\text{ L}} = 128\text{ g/L}`} />
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Molarity (M) & Direct Relationships */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-cyan-300 border-l-4 border-cyan-400 pl-3">
            2. Molarity (<InlineMath math="M" />) &amp; Direct Formulas
          </h2>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 space-y-4 text-sm leading-relaxed text-slate-200">
            <p>
              Molarity (<InlineMath math="M" />) is the most widely utilized volumetric concentration scale in chemistry. It represents the exact number of moles of solute dissolved per litre of total solution (<InlineMath math="\text{mol/L}" /> or <InlineMath math="M" />).
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-slate-800 bg-slate-950 p-4 text-center">
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-300">Basic Definition</span>
                <div className="mt-2 overflow-x-auto">
                  <BlockMath math={String.raw`M = \frac{n_{\text{solute}}}{V_{\text{solution (L)}}} = \frac{w \times 1000}{M' \times V_{\text{mL}}}`} />
                </div>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-950 p-4 text-center">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-300">Relation with Strength (<InlineMath math="S" />)</span>
                <div className="mt-2 overflow-x-auto">
                  <BlockMath math={String.raw`S (\text{g/L}) = M \times M' \quad (M' = \text{Molar Mass})`} />
                </div>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 pt-2">
              <div className="rounded-xl border border-slate-800 bg-slate-950 p-5 space-y-2 text-xs font-mono">
                <h4 className="font-bold text-white">Example 1: <InlineMath math="2.45\% (w/v) \text{ H}_2\text{SO}_4" /></h4>
                <p className="text-slate-300 font-sans">
                  Calculate the molarity of a <InlineMath math="2.45\% (w/v)" /> aqueous sulfuric acid solution (<InlineMath math="M'=98\text{ g/mol}" />).
                </p>
                <div className="pt-2 text-cyan-300 border-t border-slate-800">
                  <BlockMath math={String.raw`M = \frac{w}{M'} \times \frac{1000}{V} = \frac{2.45}{98} \times \frac{1000}{100} = 0.25\ M`} />
                </div>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-950 p-5 space-y-2 text-xs font-mono">
                <h4 className="font-bold text-white">Example 2: Decimolar Solution</h4>
                <p className="text-slate-300 font-sans">
                  How many moles of solute are present in <InlineMath math="400\text{ mL}" /> of a decimolar (<InlineMath math="M/10 = 0.1\ M" />) solution?
                </p>
                <div className="pt-2 text-emerald-300 border-t border-slate-800">
                  <BlockMath math={String.raw`n = M \times V(\text{L}) = 0.1 \times 0.4 = 0.04\text{ mole}`} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Advanced Molarity with Density & Ion Concentration */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-cyan-300 border-l-4 border-cyan-400 pl-3">
            3. Molarity from Mass Percentage &amp; Ionic Equivalencies
          </h2>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 space-y-4 text-sm leading-relaxed text-slate-200">
            <div className="rounded-xl border border-slate-800 bg-slate-950 p-5 space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-300">Master Relation: <InlineMath math="M = \frac{10 \times d \times (\% w/w)}{M'}" /></span>
              <p className="text-xs text-slate-300 leading-relaxed">
                When percentage by mass (<InlineMath math="\% w/w" />) and solution density (<InlineMath math="d\text{ g/mL}" />) are given, molarity can be derived directly by considering exactly <InlineMath math="100\text{ g}" /> of total solution:
              </p>

              <div className="grid gap-6 md:grid-cols-2 pt-2 text-xs font-mono">
                <div className="rounded-lg bg-slate-900 p-4 border border-slate-800">
                  <span className="font-bold text-white">Illustration: <InlineMath math="10\% (w/w)" /> <InlineMath math="\text{NaOH}" /> (<InlineMath math="d=1.10" />)</span>
                  <div className="mt-2 text-cyan-300">
                    <BlockMath math={String.raw`M = \frac{10 \times 1.10 \times 10}{40} = \frac{110}{40} = 2.75\ M`} />
                  </div>
                </div>

                <div className="rounded-lg bg-slate-900 p-4 border border-slate-800">
                  <span className="font-bold text-white">Illustration: Chloride Ion Equivalence</span>
                  <p className="text-slate-300 font-sans mt-1">
                    What mass of <InlineMath math="\text{CaCl}_2" /> (<InlineMath math="M'=111" />) must be dissolved in <InlineMath math="200\text{ mL}" /> so that <InlineMath math="[\text{Cl}^-]" /> equals that in <InlineMath math="1\text{ L}" /> of <InlineMath math="2.67\text{ g/L}" /> <InlineMath math="\text{AlCl}_3" /> (<InlineMath math="M'=133.5" />)?
                  </p>
                  <div className="mt-2 text-emerald-300 space-y-1">
                    <BlockMath math={String.raw`M_{\text{AlCl}_3} = \frac{2.67}{133.5} = 0.02\ M \implies [\text{Cl}^-] = 3(0.02) = 0.06\ M`} />
                    <BlockMath math={String.raw`[\text{Cl}^-]_{\text{CaCl}_2} = 2 M_{\text{salt}} = 0.06 \implies M_{\text{salt}} = 0.03\ M`} />
                    <BlockMath math={String.raw`w = 0.03 \times 0.2\text{ L} \times 111 = 0.666\text{ g}`} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Dilution & Mixing of Molar Solutions */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-cyan-300 border-l-4 border-cyan-400 pl-3">
            4. Dilution Conservation &amp; Multi-Component Mixing
          </h2>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 space-y-4 text-sm leading-relaxed text-slate-200">
            <p>
              Applying conservation of moles (<InlineMath math="n = M \times V" />) across dilution and mixing of solutions:
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-slate-800 bg-slate-950 p-5 space-y-2 text-xs font-mono">
                <h4 className="font-bold text-white">Dilution: <InlineMath math="M_1 V_1 = M_2 V_2" /></h4>
                <p className="text-slate-300 font-sans">
                  What volumes of <InlineMath math="2\ M\ \text{NaOH}" /> and water are required to prepare <InlineMath math="50\text{ mL}" /> of <InlineMath math="M/5\ (0.2\ M)\ \text{NaOH}" />?
                </p>
                <div className="pt-2 text-cyan-300 border-t border-slate-800 space-y-1">
                  <BlockMath math={String.raw`2 \times V_1 = 0.2 \times 50 \implies V_1 = 5\text{ mL}`} />
                  <BlockMath math={String.raw`V_{\text{water}} = 50 - 5 = 45\text{ mL}`} />
                </div>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-950 p-5 space-y-2 text-xs font-mono">
                <h4 className="font-bold text-white">Mixing: <InlineMath math="M_f = \frac{M_1 V_1 + M_2 V_2}{V_1 + V_2}" /></h4>
                <p className="text-slate-300 font-sans">
                  <InlineMath math="50\text{ mL}" /> of <InlineMath math="0.8\ M\ \text{HCl}" /> is mixed with <InlineMath math="100\text{ mL}" /> of <InlineMath math="1.2\ M\ \text{HCl}" />. Calculate resultant molarity.
                </p>
                <div className="pt-2 text-emerald-300 border-t border-slate-800">
                  <BlockMath math={String.raw`M_f = \frac{50(0.8) + 100(1.2)}{50 + 100} = \frac{160}{150} = \frac{16}{15}\ M \approx 1.0667\ M`} />
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-950 p-5 space-y-3">
              <h4 className="font-bold text-amber-300 text-xs uppercase tracking-wider">Advanced Gravimetric &amp; Volumetric Mixing (<InlineMath math="\text{K}_2\text{Cr}_2\text{O}_7" />)</h4>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                <InlineMath math="400\text{ g}" /> of <InlineMath math="0.5\ M\ \text{K}_2\text{Cr}_2\text{O}_7" /> (<InlineMath math="d_1 = 1.25\text{ g/mL}" />) is mixed with <InlineMath math="600\text{ g}" /> of <InlineMath math="0.8\ M\ \text{K}_2\text{Cr}_2\text{O}_7" /> (<InlineMath math="d_2 = 1.50\text{ g/mL}" />). The final solution density is <InlineMath math="d_f = 1.40\text{ g/mL}" />. Calculate final molarity <InlineMath math="M_f" />.
              </p>
              <div className="space-y-2 text-xs font-mono text-slate-300 border-t border-slate-800 pt-2">
                <div>Step 1: Calculate individual initial volumes <InlineMath math="V_i = \frac{m_i}{d_i}" />:</div>
                <BlockMath math={String.raw`V_1 = \frac{400}{1.25} = 320\text{ mL}, \quad V_2 = \frac{600}{1.50} = 400\text{ mL}`} />
                <div>Step 2: Calculate total final volume using total mass (<InlineMath math="400 + 600 = 1000\text{ g}" />) and final density <InlineMath math="d_f = 1.40" />:</div>
                <BlockMath math={String.raw`V_f = \frac{1000\text{ g}}{1.40\text{ g/mL}} = 714.29\text{ mL}`} />
                <div>Step 3: Apply conservation of moles across mixing:</div>
                <BlockMath math={String.raw`M_f = \frac{M_1 V_1 + M_2 V_2}{V_f} = \frac{(0.5 \times 320) + (0.8 \times 400)}{714.29} = \frac{160 + 320}{714.29} = \frac{480}{714.29} \approx 0.672\ M`} />
              </div>
            </div>
          </div>
        </section>

        {/* Footer info */}
        <footer className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 text-center text-xs text-slate-400">
          <p>Concentration Terms Module • Topic 3: Gram/Litre Strength &amp; Molarity (M)</p>
        </footer>
      </article>
    </main>
  );
}
