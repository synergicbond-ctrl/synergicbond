"use client";

import React from "react";
import { InlineMath, BlockMath } from "@/components/math/react-katex";

export default function ConcentrationTermsPart1() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-8 text-slate-100 md:px-10">
      <article className="mx-auto max-w-5xl space-y-10">
        <header className="rounded-3xl border border-rose-400/30 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-6 shadow-2xl md:p-8">
          <div className="flex items-center justify-between">
            <span className="rounded-full bg-rose-500/20 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-rose-300">
              Concentration Terms — Topic 1
            </span>
            <span className="text-xs font-bold text-slate-400">Quantitative Solution Chemistry</span>
          </div>

          <h1 className="mt-4 text-3xl font-black text-white md:text-4xl">
            Solute vs. Solvent Definitions &amp; Percentage Method (<InlineMath math="\% w/w, w/v, v/v, v/w" />)
          </h1>

          <p className="mt-3 text-sm leading-relaxed text-slate-300 md:text-base">
            Comprehensive foundations of solution chemistry: exact criteria for designating solute versus solvent across multi-phase binary systems, classification of aqueous solutions, and master formulas for the four fundamental percentage concentration scales.
          </p>
        </header>

        {/* Section 1: Solution Definitions & Phase Criteria */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-rose-300 border-l-4 border-rose-400 pl-3">
            1. Solution Definition &amp; Phase Selection Criteria
          </h2>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 space-y-4 text-sm leading-relaxed text-slate-200">
            <p>
              A <strong className="text-white">Solution</strong> is defined as a homogeneous mixture of two or more pure chemical substances whose composition can be varied continuously within certain limits.
            </p>

            <div className="grid gap-6 md:grid-cols-2 pt-2">
              <div className="rounded-xl border border-slate-800 bg-slate-950 p-5">
                <h3 className="font-bold text-cyan-300 mb-2">Solute</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  The component which dissolves in the solvent, generally present in lesser molar quantity or undergoing a physical phase change upon dissolution.
                </p>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-950 p-5">
                <h3 className="font-bold text-emerald-300 mb-2">Solvent</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  The dispersion medium which dissolves other substances inside it. The final physical state of the solution is always identical to the physical state of the solvent.
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-slate-950 p-5 border border-slate-800 space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-300">Universal Phase &amp; Molar Criteria</span>
              <ul className="list-disc ml-5 space-y-2 text-xs text-slate-300">
                <li>
                  <strong className="text-white">Solute and Solvent in different physical states:</strong> The component whose physical state is retained in the final solution is designated as the solvent. (Example: In an aqueous salt solution formed from <InlineMath math="200\text{ g } \text{NaCl (s)}" /> and <InlineMath math="100\text{ g } \text{H}_2\text{O (l)}" />, water is the solvent because the final solution is liquid, regardless of mass).
                </li>
                <li>
                  <strong className="text-white">Solute and Solvent completely miscible in identical physical states:</strong> If both components are mutually soluble liquids (e.g., Ethanol <InlineMath math="\text{ROH}" /> and Water <InlineMath math="\text{H}_2\text{O}" />), the substance present in the <strong className="text-cyan-300">greater amount by number of moles (<InlineMath math="n" />)</strong> is designated as the solvent.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 2: Classification of Binary Solutions */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-rose-300 border-l-4 border-rose-400 pl-3">
            2. Classification of Binary Solutions across Physical States
          </h2>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 space-y-4">
            <p className="text-sm text-slate-300 leading-relaxed">
              Depending on the physical state of the solute and solvent, nine distinct types of binary solutions can exist:
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs font-mono">
                <thead>
                  <tr className="border-b border-slate-700 bg-slate-950/60 text-slate-300">
                    <th className="p-3">Solvent State</th>
                    <th className="p-3">Solute State</th>
                    <th className="p-3">Representative Chemical Examples</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 text-slate-200">
                  <tr>
                    <td className="p-3 font-bold text-cyan-300">Solid</td>
                    <td className="p-3">Solid</td>
                    <td className="p-3">Metallic Alloys (e.g., Brass, Bronze, Steel)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-cyan-300">Solid</td>
                    <td className="p-3">Liquid</td>
                    <td className="p-3">Amalgams of Mercury with metals (<InlineMath math="\text{Hg-Na}" /> or <InlineMath math="\text{Hg-Zn}" />)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-cyan-300">Solid</td>
                    <td className="p-3">Gas</td>
                    <td className="p-3">Hydrogen (<InlineMath math="\text{H}_2" />) gas adsorbed in Palladium (<InlineMath math="\text{Pd}" />) or Platinum</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-emerald-300">Liquid</td>
                    <td className="p-3">Solid</td>
                    <td className="p-3">Aqueous salt solutions (Water + <InlineMath math="\text{NaCl}" />, Sugar in water)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-emerald-300">Liquid</td>
                    <td className="p-3">Liquid</td>
                    <td className="p-3">Miscible liquid mixtures (Water + Ethanol, Acetone + Benzene)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-emerald-300">Liquid</td>
                    <td className="p-3">Gas</td>
                    <td className="p-3">Aerated/Carbonated drinks (<InlineMath math="\text{CO}_2" /> in water), Dissolved <InlineMath math="\text{O}_2" /> in lakes</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-amber-300">Gas</td>
                    <td className="p-3">Solid</td>
                    <td className="p-3">Sublimable solids in air (Camphor vapour or Iodine sublimation in <InlineMath math="\text{N}_2" />)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-amber-300">Gas</td>
                    <td className="p-3">Liquid</td>
                    <td className="p-3">Volatile liquids in gas (Chloroform <InlineMath math="\text{CHCl}_3" /> or <InlineMath math="\text{CCl}_4" /> vapour in nitrogen)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-amber-300">Gas</td>
                    <td className="p-3">Gas</td>
                    <td className="p-3">Any gaseous mixture (Air: <InlineMath math="\text{N}_2 + \text{O}_2 + \text{Ar}" />)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-xs text-rose-300 font-semibold pt-2">
              Note: In our quantitative chemistry syllabus, we will focus exclusively on aqueous binary solutions where water is the universal solvent.
            </p>
          </div>
        </section>

        {/* Section 3: The Four Percentage Concentration Scales */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-rose-300 border-l-4 border-rose-400 pl-3">
            3. The Percentage Concentration Method (<InlineMath math="\% w/w, \% w/v, \% v/v, \% v/w" />)
          </h2>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 space-y-4 text-sm leading-relaxed text-slate-200">
            <p>
              The percentage method expresses the quantity of solute dissolved in exactly <InlineMath math="100\text{ units}" /> (grams or millilitres) of the total solution.
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-slate-800 bg-slate-950 p-5 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-cyan-300 mb-2">1. Percentage by Weight (<InlineMath math="\% w/w" />)</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Mass of solute in grams dissolved per <InlineMath math="100\text{ g}" /> of total solution. Being mass-based, it is <strong className="text-white">temperature independent</strong>.
                  </p>
                  <div className="mt-3 overflow-x-auto py-2">
                    <BlockMath math={String.raw`\% (w/w) = \frac{\text{Mass of solute (g)}}{\text{Mass of solution (g)}} \times 100`} />
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-950 p-5 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-emerald-300 mb-2">2. Weight-Volume Percentage (<InlineMath math="\% w/v" />)</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Mass of solute in grams dissolved per <InlineMath math="100\text{ mL}" /> of solution. Being volume-dependent, it <strong className="text-white">varies with temperature</strong>.
                  </p>
                  <div className="mt-3 overflow-x-auto py-2">
                    <BlockMath math={String.raw`\% (w/v) = \frac{\text{Mass of solute (g)}}{\text{Volume of solution (mL)}} \times 100`} />
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-950 p-5 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-amber-300 mb-2">3. Volume-Weight Percentage (<InlineMath math="\% v/w" />)</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Volume of liquid/gaseous solute in millilitres dissolved per <InlineMath math="100\text{ g}" /> of total solution.
                  </p>
                  <div className="mt-3 overflow-x-auto py-2">
                    <BlockMath math={String.raw`\% (v/w) = \frac{\text{Volume of solute (mL)}}{\text{Mass of solution (g)}} \times 100`} />
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-950 p-5 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-rose-300 mb-2">4. Percentage by Volume (<InlineMath math="\% v/v" />)</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Volume of liquid solute in millilitres dissolved per <InlineMath math="100\text{ mL}" /> of total solution. Widely used for liquid mixtures (e.g., alcohol in water).
                  </p>
                  <div className="mt-3 overflow-x-auto py-2">
                    <BlockMath math={String.raw`\% (v/v) = \frac{\text{Volume of solute (mL)}}{\text{Volume of solution (mL)}} \times 100`} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Solved Example */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-rose-300 border-l-4 border-rose-400 pl-3">
            4. Solved Application: Density Interconversion
          </h2>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 space-y-4 text-sm leading-relaxed text-slate-200">
            <div className="rounded-xl border border-slate-800 bg-slate-950 p-5 space-y-3">
              <h3 className="font-bold text-white text-base">Problem Statement</h3>
              <p className="text-slate-300 text-xs leading-relaxed">
                <InlineMath math="40\text{ g}" /> of a solid solute is dissolved in <InlineMath math="160\text{ g}" /> of pure water to form a solution having a measured density <InlineMath math="d = 1.25\text{ g/mL}" />. Calculate the concentration of this solution in both <InlineMath math="\% (w/w)" /> and <InlineMath math="\% (w/v)" />.
              </p>

              <div className="border-t border-slate-800 pt-3 space-y-2 text-xs font-mono">
                <div className="text-slate-400">Step 1: Calculate total mass of solution</div>
                <BlockMath math={String.raw`m_{\text{solution}} = m_{\text{solute}} + m_{\text{solvent}} = 40 + 160 = 200\text{ g}`} />

                <div className="text-slate-400 pt-2">Step 2: Calculate Percentage by Weight (<InlineMath math="\% w/w" />)</div>
                <BlockMath math={String.raw`\% (w/w) = \frac{40}{200} \times 100 = 20\%`} />

                <div className="text-slate-400 pt-2">Step 3: Calculate volume of solution using density <InlineMath math="V = \frac{m}{d}" /></div>
                <BlockMath math={String.raw`V_{\text{solution}} = \frac{200\text{ g}}{1.25\text{ g/mL}} = 160\text{ mL}`} />

                <div className="text-slate-400 pt-2">Step 4: Calculate Weight-Volume Percentage (<InlineMath math="\% w/v" />)</div>
                <BlockMath math={String.raw`\% (w/v) = \frac{40\text{ g}}{160\text{ mL}} \times 100 = 25\%`} />
              </div>

              <div className="rounded-lg bg-emerald-500/10 border border-emerald-500/20 p-3 font-bold text-emerald-300 text-xs text-center">
                Final Answer: <InlineMath math="20\% (w/w)" /> and <InlineMath math="25\% (w/v)" />.
              </div>
            </div>
          </div>
        </section>

        {/* Footer info */}
        <footer className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 text-center text-xs text-slate-400">
          <p>Concentration Terms Module • Topic 1: Solute vs Solvent Definitions &amp; Percentage Method</p>
        </footer>
      </article>
    </main>
  );
}
