"use client";

import React from "react";
import { InlineMath, BlockMath } from "@/components/math/react-katex";

export default function ConcentrationTermsPart6() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-8 text-slate-100 md:px-10">
      <article className="mx-auto max-w-5xl space-y-10">
        <header className="rounded-3xl border border-rose-400/30 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-6 shadow-2xl md:p-8">
          <div className="flex items-center justify-between">
            <span className="rounded-full bg-rose-500/20 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-rose-300">
              Concentration Terms — Topic 6
            </span>
            <span className="text-xs font-bold text-slate-400">Quantitative Solution Chemistry</span>
          </div>

          <h1 className="mt-4 text-3xl font-black text-white md:text-4xl">
            Master Interconversions (<InlineMath math="M \leftrightarrow m \leftrightarrow \chi" />) &amp; Industrial Scales (<InlineMath math="\text{H}_2\text{O}_2" /> Volume Strength / Oleum)
          </h1>

          <p className="mt-3 text-sm leading-relaxed text-slate-300 md:text-base">
            Ultimate synthesis of quantitative solution scales: exact mathematical bridges connecting Molarity (<InlineMath math="M" />), Molality (<InlineMath math="m" />), Mole Fraction (<InlineMath math="\chi" />), and solution density (<InlineMath math="d" />), alongside specialized industrial labeling scales for Hydrogen Peroxide (<InlineMath math="1\text{ V} \equiv 0.089\ M" />) and Fuming Sulfuric Acid (Oleum).
          </p>
        </header>

        {/* Section 1: Master Interconversion Equations */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-rose-300 border-l-4 border-rose-400 pl-3">
            1. Master Interconversion Formulas (<InlineMath math="M, m, \chi, d" />)
          </h2>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 space-y-4 text-sm leading-relaxed text-slate-200">
            <p>
              In competitive JEE &amp; NEET entrance examinations, direct interconversion across volumetric and mass-based concentration scales is crucial for speed. Below are the rigorous mathematical bridges:
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-slate-800 bg-slate-950 p-5 space-y-2">
                <span className="font-bold text-cyan-300 text-xs uppercase tracking-wider">1. Molarity (<InlineMath math="M" />) to Molality (<InlineMath math="m" />)</span>
                <p className="text-xs text-slate-300">
                  When Molarity (<InlineMath math="M" />), solute molar mass (<InlineMath math="M'_2" />), and solution density (<InlineMath math="d\text{ g/mL}" />) are known:
                </p>
                <div className="overflow-x-auto py-2">
                  <BlockMath math={String.raw`m = \frac{1000 \times M}{1000 \times d - M \times M'_2}`} />
                </div>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-950 p-5 space-y-2">
                <span className="font-bold text-emerald-300 text-xs uppercase tracking-wider">2. Molality (<InlineMath math="m" />) to Mole Fraction (<InlineMath math="\chi_2" />)</span>
                <p className="text-xs text-slate-300">
                  When molality (<InlineMath math="m" />) inside an aqueous solution (<InlineMath math="M'_1 = 18\text{ g/mol}" />) is known:
                </p>
                <div className="overflow-x-auto py-2">
                  <BlockMath math={String.raw`\chi_2 = \frac{m \times M'_1}{1000 + m \times M'_1} = \frac{18m}{1000 + 18m}`} />
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-950 p-5 space-y-2 text-xs font-mono">
              <span className="font-bold text-white">Solved Synthesis: Interconversion Application</span>
              <p className="text-slate-300 font-sans">
                An aqueous solution of urea (<InlineMath math="\text{NH}_2\text{CONH}_2, M'_2 = 60" />) has a molarity <InlineMath math="M = 3.0\ M" /> and measured density <InlineMath math="d = 1.18\text{ g/mL}" />. Calculate its molality (<InlineMath math="m" />) and mole fraction of urea (<InlineMath math="\chi_{\text{urea}}" />).
              </p>
              <div className="pt-2 text-rose-300 border-t border-slate-800 space-y-1">
                <BlockMath math={String.raw`m = \frac{1000 \times 3.0}{1000(1.18) - 3.0(60)} = \frac{3000}{1180 - 180} = \frac{3000}{1000} = 3.0\ m`} />
                <BlockMath math={String.raw`\chi_{\text{urea}} = \frac{18(3.0)}{1000 + 18(3.0)} = \frac{54}{1054} \approx 0.0512`} />
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Volume Strength of H2O2 */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-rose-300 border-l-4 border-rose-400 pl-3">
            2. Volume Strength of Hydrogen Peroxide (<InlineMath math="V\text{ or } X\text{ V}" />)
          </h2>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 space-y-4 text-sm leading-relaxed text-slate-200">
            <p>
              Commercially, hydrogen peroxide (<InlineMath math="\text{H}_2\text{O}_2" />) solutions are labeled as <strong className="text-cyan-300">&quot;10 V&quot;, &quot;20 V&quot;, or &quot;30 V&quot;</strong>. This is a volumetric concentration term representing the total volume of oxygen gas (<InlineMath math="\text{O}_2" /> in litres at STP) liberated by the complete thermal decomposition of exactly <InlineMath math="1\text{ L}" /> of that <InlineMath math="\text{H}_2\text{O}_2" /> solution.
            </p>

            <div className="rounded-xl border border-slate-800 bg-slate-950 p-5 space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Stoichiometric Derivation</span>
              <div className="overflow-x-auto py-2">
                <BlockMath math={String.raw`2 \text{ H}_2\text{O}_2 (l) \longrightarrow 2 \text{ H}_2\text{O} (l) + \text{O}_2 (g)`} />
              </div>
              <p className="text-xs text-slate-300">
                From reaction stoichiometry, <InlineMath math="2\text{ moles H}_2\text{O}_2 (68\text{ g})" /> yield <InlineMath math="1\text{ mole O}_2 (22.4\text{ L at STP})" />. Thus, if <InlineMath math="1\text{ L}" /> solution yields <InlineMath math="V\text{ litres of O}_2" />:
              </p>
              <div className="overflow-x-auto py-2 space-y-2">
                <BlockMath math={String.raw`M_{\text{H}_2\text{O}_2} = \frac{2 \times V}{22.4} = \frac{V}{11.2} \implies V = 11.2 \times M`} />
                <BlockMath math={String.raw`N_{\text{H}_2\text{O}_2} = \frac{V}{5.6} \implies V = 5.6 \times N \quad (\text{Since } n\text{-factor} = 2)`} />
                <BlockMath math={String.raw`S (\text{g/L}) = M \times 34 = \frac{V \times 34}{11.2} \approx 3.036 \times V`} />
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 pt-2 text-xs font-mono">
              <div className="rounded-xl border border-slate-800 bg-slate-950 p-5 space-y-2">
                <span className="font-bold text-white">Example: 20 V <InlineMath math="\text{H}_2\text{O}_2" /> Solution</span>
                <p className="text-slate-300 font-sans">
                  Calculate Molarity, Normality, and Percentage Strength (<InlineMath math="\% w/v" />) of a commercial &quot;20 Volume&quot; hydrogen peroxide solution.
                </p>
                <div className="mt-2 text-cyan-300 border-t border-slate-800 pt-2 space-y-1">
                  <BlockMath math={String.raw`M = \frac{20}{11.2} = 1.786\ M, \quad N = \frac{20}{5.6} = 3.571\ N`} />
                  <BlockMath math={String.raw`S = 1.786 \times 34 = 60.71\text{ g/L} \implies \% (w/v) = 6.07\%`} />
                </div>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-950 p-5 space-y-2">
                <span className="font-bold text-white">Example: Target Gas Volume</span>
                <p className="text-slate-300 font-sans">
                  What volume of <InlineMath math="\text{O}_2" /> at STP will be liberated by <InlineMath math="250\text{ mL}" /> of a <InlineMath math="1.5\ M\ \text{H}_2\text{O}_2" /> solution?
                </p>
                <div className="mt-2 text-emerald-300 border-t border-slate-800 pt-2 space-y-1">
                  <BlockMath math={String.raw`V_{\text{strength}} = 11.2 \times 1.5 = 16.8\text{ Volumes}`} />
                  <BlockMath math={String.raw`V_{\text{O}_2} = 16.8 \times 0.25\text{ L} = 4.2\text{ L of O}_2`} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Percentage Labeling of Oleum */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-rose-300 border-l-4 border-rose-400 pl-3">
            3. Percentage Labeling of Oleum (<InlineMath math="100\% + x\%" />)
          </h2>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 space-y-4 text-sm leading-relaxed text-slate-200">
            <p>
              Oleum (Fuming Sulfuric Acid, <InlineMath math="\text{H}_2\text{S}_2\text{O}_7" />) is a mixture of concentrated <InlineMath math="\text{H}_2\text{SO}_4" /> containing free dissolved sulfur trioxide (<InlineMath math="\text{SO}_3" />). It is labeled commercially as an apparent percentage exceeding <InlineMath math="100\%" /> (e.g., <strong className="text-amber-300">&quot;109% Oleum&quot;</strong>).
            </p>

            <div className="rounded-xl border border-slate-800 bg-slate-950 p-5 space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Physical Meaning of Labeling</span>
              <p className="text-xs text-slate-300">
                The label <InlineMath math="109\%" /> signifies that when <InlineMath math="9\text{ g}" /> of water is added to exactly <InlineMath math="100\text{ g}" /> of that oleum sample, all free <InlineMath math="\text{SO}_3" /> combines stoichiometrically with water to form exactly <InlineMath math="109\text{ g}" /> of pure <InlineMath math="100\% \text{ H}_2\text{SO}_4" />:
              </p>
              <div className="overflow-x-auto py-2">
                <BlockMath math={String.raw`\text{SO}_3 (l) + \text{H}_2\text{O} (l) \longrightarrow \text{H}_2\text{SO}_4 (l) \quad (80\text{ g SO}_3 \equiv 18\text{ g H}_2\text{O})`} />
              </div>
              <div className="overflow-x-auto py-2 border-t border-slate-800">
                <BlockMath math={String.raw`\% \text{ Free SO}_3\text{ in Oleum} = \frac{80}{18} \times (L - 100) \quad (\text{where } L = \text{Label Percentage})`} />
              </div>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-950 p-5 space-y-2 text-xs font-mono">
              <span className="font-bold text-white">Solved Oleum Assay</span>
              <p className="text-slate-300 font-sans">
                Calculate the percentage composition of free <InlineMath math="\text{SO}_3" /> and combined <InlineMath math="\text{H}_2\text{SO}_4" /> inside a sample labeled as &quot;104.5% Oleum&quot;.
              </p>
              <div className="pt-2 text-rose-300 border-t border-slate-800 space-y-1">
                <BlockMath math={String.raw`\% \text{ Free SO}_3 = \frac{80}{18} \times (104.5 - 100) = \frac{80}{18} \times 4.5 = 20\% \text{ free SO}_3`} />
                <BlockMath math={String.raw`\% \text{ Combined H}_2\text{SO}_4 = 100\% - 20\% = 80\% \text{ H}_2\text{SO}_4`} />
              </div>
            </div>
          </div>
        </section>

        {/* Footer info */}
        <footer className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 text-center text-xs text-slate-400">
          <p>Concentration Terms Module • Topic 6: Master Interconversions &amp; Industrial Scales (H₂O₂ / Oleum)</p>
        </footer>
      </article>
    </main>
  );
}
