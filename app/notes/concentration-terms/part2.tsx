"use client";

import React from "react";
import { InlineMath, BlockMath } from "@/components/math/react-katex";

export default function ConcentrationTermsPart2() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-8 text-slate-100 md:px-10">
      <article className="mx-auto max-w-5xl space-y-10">
        <header className="rounded-3xl border border-amber-400/30 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-6 shadow-2xl md:p-8">
          <div className="flex items-center justify-between">
            <span className="rounded-full bg-amber-500/20 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-amber-300">
              Concentration Terms — Topic 2
            </span>
            <span className="text-xs font-bold text-slate-400">Quantitative Solution Chemistry</span>
          </div>

          <h1 className="mt-4 text-3xl font-black text-white md:text-4xl">
            Dilution Formulas, Mixing of Solutions &amp; Trace Scales (<InlineMath math="\text{ppm / ppb / ppt}" />)
          </h1>

          <p className="mt-3 text-sm leading-relaxed text-slate-300 md:text-base">
            Detailed calculations involving the conservation of solute mass during dilution (<InlineMath math="C_1V_1 = C_2V_2" />), derivation of resultant concentration when mixing multiple solutions, and quantitative treatment of ultra-dilute trace concentrations using parts per million (<InlineMath math="\text{ppm}" />).
          </p>
        </header>

        {/* Section 1: Solute Mass Calculation from % Concentration */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-amber-300 border-l-4 border-amber-400 pl-3">
            1. Solute Mass Extraction from Percentage Solutions
          </h2>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 space-y-4 text-sm leading-relaxed text-slate-200">
            <p>
              To extract the absolute mass of solute from any given solution, multiply the total solution mass or volume by the percentage factor (<InlineMath math="\frac{\%}{100}" />):
            </p>

            <div className="grid gap-6 md:grid-cols-2 pt-2">
              <div className="rounded-xl border border-slate-800 bg-slate-950 p-5 space-y-2 font-mono text-xs">
                <span className="text-cyan-300 font-bold">Example 1: <InlineMath math="400\text{ g}" /> of <InlineMath math="20\% (w/w)" /> <InlineMath math="\text{KMnO}_4" /></span>
                <BlockMath math={String.raw`m_{\text{solute}} = 400 \times \frac{20}{100} = 80\text{ g}`} />
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-950 p-5 space-y-2 font-mono text-xs">
                <span className="text-emerald-300 font-bold">Example 2: <InlineMath math="250\text{ mL}" /> of <InlineMath math="12\% (w/v)" /> <InlineMath math="\text{NaOH}" /></span>
                <BlockMath math={String.raw`m_{\text{solute}} = 250 \times \frac{12}{100} = 30\text{ g}`} />
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-950 p-5 space-y-2 font-mono text-xs">
                <span className="text-amber-300 font-bold">Example 3: <InlineMath math="300\text{ mL}" /> of <InlineMath math="10\% (w/w)" /> <InlineMath math="\text{HCl}" /> (<InlineMath math="d = \frac{4}{3}\text{ g/mL}" />)</span>
                <BlockMath math={String.raw`m_{\text{solution}} = 300 \times \frac{4}{3} = 400\text{ g} \implies m_{\text{solute}} = 400 \times \frac{10}{100} = 40\text{ g}`} />
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-950 p-5 space-y-2 font-mono text-xs">
                <span className="text-rose-300 font-bold">Example 4: <InlineMath math="500\text{ g}" /> of <InlineMath math="40\% (w/v)" /> <InlineMath math="\text{HNO}_3" /> (<InlineMath math="d = 1.2\text{ g/mL}" />)</span>
                <BlockMath math={String.raw`V_{\text{solution}} = \frac{500}{1.2}\text{ mL} \implies m_{\text{solute}} = \left(\frac{500}{1.2}\right) \times \frac{40}{100} = 166.67\text{ g}`} />
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Dilution Conservation Law */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-amber-300 border-l-4 border-amber-400 pl-3">
            2. The Conservation of Solute Mass during Dilution
          </h2>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 space-y-4 text-sm leading-relaxed text-slate-200">
            <p>
              When pure solvent (water) is added to a solution to dilute it, the <strong className="text-amber-300">total mass (or moles) of solute remains strictly constant</strong>:
            </p>

            <div className="overflow-x-auto py-3 bg-slate-950 rounded-2xl border border-slate-800 px-4">
              <BlockMath math={String.raw`\text{Mass of Solute Before Dilution} = \text{Mass of Solute After Dilution} \implies C_1 V_1 = C_2 V_2`} />
            </div>

            <div className="grid gap-6 md:grid-cols-2 pt-2">
              <div className="rounded-xl border border-slate-800 bg-slate-950 p-5 space-y-2 text-xs font-mono">
                <h4 className="font-bold text-white">Illustration 1: <InlineMath math="\text{H}_2\text{SO}_4" /> Dilution</h4>
                <p className="text-slate-300">
                  <InlineMath math="40\text{ mL}" /> of <InlineMath math="20\% (w/v)" /> <InlineMath math="\text{H}_2\text{SO}_4" /> is diluted with water to <InlineMath math="500\text{ mL}" />. Find final <InlineMath math="\% (w/v)" />.
                </p>
                <div className="pt-2 text-cyan-300 border-t border-slate-800">
                  <BlockMath math={String.raw`40 \times \frac{20}{100} = 500 \times \frac{C_2}{100} \implies C_2 = 1.6\% (w/v)`} />
                </div>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-950 p-5 space-y-2 text-xs font-mono">
                <h4 className="font-bold text-white">Illustration 2: Urea Solution Target</h4>
                <p className="text-slate-300">
                  How much water must be added to <InlineMath math="25\text{ g}" /> of <InlineMath math="40\% (w/v)" /> urea (<InlineMath math="d=1.5\text{ g/mL}" />) to reach <InlineMath math="5\% (w/w)" />?
                </p>
                <div className="pt-2 text-emerald-300 border-t border-slate-800">
                  <BlockMath math={String.raw`\left(\frac{25}{1.5}\right) \times \frac{40}{100} = (25 + w_{\text{H}_2\text{O}}) \times \frac{5}{100} \implies w_{\text{H}_2\text{O}} = 108.33\text{ g}`} />
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-950 p-5 space-y-3">
              <h4 className="font-bold text-amber-300 text-xs uppercase tracking-wider">Advanced Dilution with Density Change</h4>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                An unknown initial volume <InlineMath math="V_1" /> of <InlineMath math="60\% (w/w)" /> <InlineMath math="\text{H}_2\text{SO}_4" /> (<InlineMath math="d_1 = 1.6\text{ g/mL}" />) is diluted with water until its density drops to <InlineMath math="d_2 = 1.1\text{ g/mL}" />. Calculate final <InlineMath math="\% (w/w)" /> and <InlineMath math="\% (w/v)" />.
              </p>
              <div className="space-y-2 text-xs font-mono text-slate-300 border-t border-slate-800 pt-2">
                <div>Mass balance across entire solution (<InlineMath math="d_{\text{water}} = 1.0\text{ g/mL}" />):</div>
                <BlockMath math={String.raw`V_1(1.6) + (V_2 - V_1)(1.0) = V_2(1.1) \implies 0.6 V_1 = 0.1 V_2 \implies V_2 = 6 V_1`} />
                <div>Solute mass conservation (<InlineMath math="\% w/w = x" />):</div>
                <BlockMath math={String.raw`[V_1(1.6)] \times \frac{60}{100} = [6V_1(1.1)] \times \frac{x}{100} \implies x = \frac{1.6 \times 60}{6 \times 1.1} = \frac{160}{11}\% (w/w) \approx 14.55\%`} />
                <div>For <InlineMath math="\% (w/v) = y" />:</div>
                <BlockMath math={String.raw`V_1(1.6) \times \frac{60}{100} = (6V_1) \times \frac{y}{100} \implies y = \frac{1.6 \times 60}{6} = 16\% (w/v)`} />
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Mixing of Two Solutions */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-amber-300 border-l-4 border-amber-400 pl-3">
            3. Mixing of Multiple Solutions of the Same Solute
          </h2>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 space-y-4 text-sm leading-relaxed text-slate-200">
            <p>
              When two or more solutions containing identical solutes are mixed together without chemical reaction, the total mass of solute in the mixture is the exact arithmetic sum of the individual solute masses:
            </p>

            <div className="overflow-x-auto py-3 bg-slate-950 rounded-2xl border border-slate-800 px-4">
              <BlockMath math={String.raw`C_{\text{final}} = \frac{C_1 V_1 + C_2 V_2}{V_1 + V_2}`} />
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-950 p-5 space-y-2 text-xs font-mono">
              <span className="font-bold text-white">Solved Mixing Example: Hydrochloric Acid</span>
              <p className="text-slate-300 font-sans">
                <InlineMath math="40\text{ mL}" /> of <InlineMath math="40\% (w/v)" /> <InlineMath math="\text{HCl}" /> is mixed with <InlineMath math="80\text{ mL}" /> of <InlineMath math="20\% (w/v)" /> <InlineMath math="\text{HCl}" />. Calculate the resultant concentration in <InlineMath math="\% (w/v)" />.
              </p>
              <div className="pt-2 text-emerald-300 border-t border-slate-800">
                <BlockMath math={String.raw`40 \left(\frac{40}{100}\right) + 80 \left(\frac{20}{100}\right) = (40 + 80) \left(\frac{C_f}{100}\right) \implies C_f = \frac{1600 + 1600}{120} = \frac{80}{3}\% (w/v) \approx 26.67\%`} />
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Parts per Million (PPM) & PPB */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-amber-300 border-l-4 border-amber-400 pl-3">
            4. Parts per Million (<InlineMath math="\text{ppm}" />) &amp; Trace Concentration Scales
          </h2>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 space-y-4 text-sm leading-relaxed text-slate-200">
            <p>
              When a solute is present in extremely minute trace quantities (such as pollutants in air or mineral ions in drinking water), percentage scales become impractical. Instead, we use parts per million (<InlineMath math="\text{ppm}" />), parts per billion (<InlineMath math="\text{ppb}" />), and parts per trillion (<InlineMath math="\text{ppt}" />):
            </p>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-xl border border-slate-800 bg-slate-950 p-4 text-center">
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-300">PPM (<InlineMath math="10^6" />)</span>
                <div className="mt-2 overflow-x-auto">
                  <BlockMath math={String.raw`\text{ppm} = \frac{w_{\text{solute}}}{w_{\text{solution}}} \times 10^6`} />
                </div>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-950 p-4 text-center">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-300">PPB (<InlineMath math="10^9" />)</span>
                <div className="mt-2 overflow-x-auto">
                  <BlockMath math={String.raw`\text{ppb} = \frac{w_{\text{solute}}}{w_{\text{solution}}} \times 10^9`} />
                </div>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-950 p-4 text-center">
                <span className="text-xs font-bold uppercase tracking-wider text-violet-300">PPT (<InlineMath math="10^{12}" />)</span>
                <div className="mt-2 overflow-x-auto">
                  <BlockMath math={String.raw`\text{ppt} = \frac{w_{\text{solute}}}{w_{\text{solution}}} \times 10^{12}`} />
                </div>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 pt-2">
              <div className="rounded-xl border border-slate-800 bg-slate-950 p-5 space-y-2 font-mono text-xs">
                <h4 className="font-bold text-white">Illustration 1: Toothpaste Fluoride</h4>
                <p className="text-slate-300 font-sans">
                  A toothpaste sample contains <InlineMath math="40\text{ ppm}" /> fluoride (<InlineMath math="\text{F}^-" />). Express this strength in <InlineMath math="\% (w/w)" />.
                </p>
                <div className="pt-2 text-cyan-300 border-t border-slate-800">
                  <BlockMath math={String.raw`\% (w/w) = \frac{\text{ppm}}{10^6} \times 100 = \frac{40}{10^6} \times 100 = 0.004\%`} />
                </div>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-950 p-5 space-y-2 font-mono text-xs">
                <h4 className="font-bold text-white">Illustration 2: Sea Water Calcium Assay</h4>
                <p className="text-slate-300 font-sans">
                  Sea water contains <InlineMath math="40\text{ ppm}" /> calcium. Calculate the mass of <InlineMath math="\text{Ca(NO}_3)_2" /> (<InlineMath math="M=164" />) present inside <InlineMath math="50\text{ L}" /> (<InlineMath math="\approx 50\text{ kg}" />) of water, assuming it is the sole source of calcium (<InlineMath math="A_r=40" />).
                </p>
                <div className="pt-2 text-emerald-300 border-t border-slate-800 space-y-1">
                  <BlockMath math={String.raw`m_{\text{Ca}} = \frac{40}{10^6} \times (50 \times 10^3\text{ g}) = 2.0\text{ g}`} />
                  <BlockMath math={String.raw`m_{\text{Ca(NO}_3)_2} = m_{\text{Ca}} \times \frac{M_{\text{salt}}}{A_r} = 2.0 \times \frac{164}{40} = 8.2\text{ g}`} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer info */}
        <footer className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 text-center text-xs text-slate-400">
          <p>Concentration Terms Module • Topic 2: Dilution Formulas, Mixing &amp; Trace Scales (ppm / ppb)</p>
        </footer>
      </article>
    </main>
  );
}
