"use client";

import React from "react";
import { InlineMath, BlockMath } from "@/components/math/react-katex";

/* Reusable UI Components */
const ConceptCard = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="my-6 rounded-2xl border border-cyan-400/30 bg-slate-900/90 p-6 shadow-xl">
    <h3 className="border-b border-slate-800 pb-3 text-lg font-bold text-cyan-300">{title}</h3>
    <div className="mt-4 space-y-3 text-sm leading-relaxed text-slate-200">{children}</div>
  </div>
);

const FormulaBox = ({ title, formula, description }: { title: string; formula: string; description?: string }) => (
  <div className="my-6 rounded-2xl border border-amber-400/30 bg-slate-950 p-6 shadow-lg text-center space-y-3">
    <span className="rounded-full bg-amber-500/20 px-3 py-1 text-xs font-bold uppercase tracking-widest text-amber-300">
      {title}
    </span>
    <div className="overflow-x-auto py-2">
      <BlockMath math={formula} />
    </div>
    {description && <p className="text-xs text-slate-400 font-sans">{description}</p>}
  </div>
);

const WorkedExample = ({
  title,
  problem,
  steps,
  result,
}: {
  title: string;
  problem: React.ReactNode;
  steps: React.ReactNode;
  result: React.ReactNode;
}) => (
  <div className="my-8 rounded-3xl border border-rose-400/30 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 p-6 shadow-2xl md:p-8 space-y-5">
    <div className="flex items-center justify-between border-b border-slate-800 pb-4">
      <span className="rounded-full bg-rose-500/20 px-3 py-1 text-xs font-bold uppercase tracking-widest text-rose-300">
        Worked Example
      </span>
      <span className="text-xs font-bold text-slate-400">{title}</span>
    </div>
    <div className="text-sm font-medium leading-relaxed text-slate-100">{problem}</div>
    <div className="rounded-2xl border border-slate-800/80 bg-slate-950/80 p-5 space-y-3 font-mono text-xs text-slate-300">
      {steps}
    </div>
    <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-center text-xs font-bold text-emerald-300">
      Result: {result}
    </div>
  </div>
);

const StepBox = ({ number, title, children }: { number: number; title: string; children: React.ReactNode }) => (
  <div className="flex gap-3 text-left">
    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-500/20 text-xs font-bold text-cyan-300">
      {number}
    </span>
    <div>
      <h4 className="text-xs font-bold text-white mb-1">{title}</h4>
      <div className="text-xs text-slate-300 leading-relaxed">{children}</div>
    </div>
  </div>
);

export default function MoleConceptPart9() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-8 text-slate-100 md:px-10">
      <article className="mx-auto max-w-5xl space-y-10">
        {/* Module Header */}
        <header className="rounded-3xl border border-cyan-400/30 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-6 shadow-2xl md:p-8">
          <div className="flex items-center justify-between">
            <span className="rounded-full bg-cyan-500/20 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
              Quantitative Chemistry Lesson
            </span>
            <span className="text-xs font-bold text-slate-400">Gaseous Molar Volume</span>
          </div>

          <h1 className="mt-4 text-3xl font-black text-white md:text-4xl">
            Gaseous Molar Volume, Ideal Gas Equation &amp; Gas Constant Units
          </h1>

          <p className="mt-3 text-sm leading-relaxed text-slate-300 md:text-base">
            Transitioning from mass-based mole counting to volumetric gas state relations. Master standard molar volume at STP/NTP, derive the universal ideal gas equation of state, and execute exact unit conversions for pressure and the universal gas constant (<InlineMath math="R" />).
          </p>
        </header>

        {/* Section 1: Standard Molar Volume at STP / NTP */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-cyan-300 border-l-4 border-cyan-400 pl-3">
            Standard Temperature &amp; Pressure (STP / NTP)
          </h2>

          <ConceptCard title="Avogadro's Volumetric Principle">
            <p>
              Under identical conditions of temperature and pressure, equal volumes of all gases contain equal numbers of molecules (Avogadro&apos;s Hypothesis). At <strong className="text-amber-300">Standard Temperature and Pressure (STP / NTP: <InlineMath math="T = 0^\circ\text{C} = 273.15\text{ K}" /> and <InlineMath math="P = 1.0\text{ atm}" />)</strong>, exactly <InlineMath math="1.0\text{ mole}" /> of any ideal gas occupies precisely <strong className="text-lime-300">22.4 Liters (or 22,400 mL)</strong>.
            </p>
            <p>
              Therefore, when gas volume <InlineMath math="V" /> is measured at STP, the total number of moles is directly extracted without weighing:
            </p>
          </ConceptCard>

          <FormulaBox
            title="Volumetric Mole Conversion Formula at STP"
            formula={String.raw`n = \frac{V_{\text{gas at STP (in L)}}}{22.4\text{ L mol}^{-1}} = \frac{V_{\text{gas at STP (in mL)}}}{22,400\text{ mL mol}^{-1}}`}
            description="Mass of gas w = n × M = (V_STP / 22.4) × M."
          />
        </section>

        {/* Section 2: Universal Ideal Gas Equation of State */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-cyan-300 border-l-4 border-cyan-400 pl-3">
            The Ideal Gas Equation (<InlineMath math="PV = nRT" />)
          </h2>

          <ConceptCard title="Synthesizing Gas Laws into One Universal Equation">
            <p>
              Combining Boyle&apos;s Law (<InlineMath math="V \propto 1/P" /> at constant <InlineMath math="T, n" />), Charles&apos;s Law (<InlineMath math="V \propto T" /> at constant <InlineMath math="P, n" />), and Avogadro&apos;s Law (<InlineMath math="V \propto n" /> at constant <InlineMath math="P, T" />) yields the universal equation of state for ideal gases:
            </p>
          </ConceptCard>

          <FormulaBox
            title="Ideal Gas Equation of State"
            formula={String.raw`P \cdot V = n \cdot R \cdot T = \left(\frac{w}{M}\right) R T`}
            description="Where P is pressure, V is volume, n is moles, T is absolute Kelvin temperature, and R is the Universal Gas Constant."
          />
        </section>

        {/* Section 3: Universal Gas Constant (R) and Pressure Conversions */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-cyan-300 border-l-4 border-cyan-400 pl-3">
            Numerical Values of <InlineMath math="R" /> &amp; Pressure Conversions
          </h2>

          <ConceptCard title="Exact Numerical Multipliers for Gas Constant R">
            <p>
              Because the dimensions of <InlineMath math="R = (P \cdot V) / (n \cdot T)" /> depend entirely on the units chosen for pressure and volume, exact numerical substitutions must match the chosen system:
            </p>
            <ul className="list-disc ml-5 space-y-2 text-xs text-slate-300 pt-1 font-mono">
              <li>
                <strong className="text-cyan-300">Liter-Atmosphere Scale:</strong> <InlineMath math="R = \frac{1\text{ atm} \times 22.4\text{ L}}{1\text{ mol} \times 273.15\text{ K}} \approx 0.0821\text{ L atm K}^{-1}\text{ mol}^{-1}" />.
              </li>
              <li>
                <strong className="text-emerald-300">SI Joule Scale:</strong> <InlineMath math="R \approx 8.314\text{ J K}^{-1}\text{ mol}^{-1} = 8.314 \times 10^7\text{ ergs K}^{-1}\text{ mol}^{-1}" />.
              </li>
              <li>
                <strong className="text-amber-300">Calorimetric Calorie Scale:</strong> <InlineMath math="R \approx 1.987\text{ cal K}^{-1}\text{ mol}^{-1} \approx 2.0\text{ cal K}^{-1}\text{ mol}^{-1}" />.
              </li>
            </ul>
          </ConceptCard>

          <FormulaBox
            title="Standard Pressure Unit Equivalence Scale"
            formula={String.raw`1.0\text{ atm} \equiv 76.0\text{ cm Hg} \equiv 760\text{ mm Hg (or Torr)} \equiv 1.01325 \times 10^5\text{ N m}^{-2}\text{ (or Pa)} \equiv 1.01325\text{ bar}`}
            description="When pressure P is given in cm Hg or mm Hg, divide by 76 or 760 respectively to convert into atmospheres before using R = 0.0821."
          />

          <WorkedExample
            title="Computing Moles and Mass of Nitrogen at Arbitrary P & T"
            problem={
              <span>
                A laboratory gas cylinder of volume <InlineMath math="V = 16.42\text{ L}" /> contains pure nitrogen gas (<InlineMath math="\text{N}_2, M = 28\text{ g mol}^{-1}" />) measured at a pressure of <InlineMath math="P = 152\text{ cm Hg}" /> and a temperature of <InlineMath math="T = 127^\circ\text{C}" />. Calculate:
                <br />(a) The total number of moles of nitrogen gas inside the cylinder.
                <br />(b) The exact mass of nitrogen gas present.
              </span>
            }
            steps={
              <div className="space-y-3">
                <StepBox number={1} title="Convert Pressure to Atmospheres and Temperature to Kelvin">
                  <BlockMath math={String.raw`P = \frac{152\text{ cm Hg}}{76\text{ cm Hg atm}^{-1}} = 2.0\text{ atm}, \quad T = 127 + 273 = 400\text{ K}`} />
                </StepBox>
                <StepBox number={2} title="Apply Ideal Gas Equation (n = PV / RT)">
                  <BlockMath math={String.raw`n = \frac{P \cdot V}{R \cdot T} = \frac{2.0\text{ atm} \times 16.42\text{ L}}{0.0821\text{ L atm K}^{-1}\text{ mol}^{-1} \times 400\text{ K}} = \frac{32.84}{32.84} = 1.00\text{ mol}`} />
                </StepBox>
                <StepBox number={3} title="Compute Mass from Moles">
                  <BlockMath math={String.raw`w = n \times M = 1.00\text{ mol} \times 28\text{ g mol}^{-1} = 28.0\text{ g}`} />
                </StepBox>
              </div>
            }
            result={<InlineMath math="n = 1.00\text{ mol of N}_2, \quad w = 28.0\text{ grams}" />}
          />
        </section>

        {/* Footer info */}
        <footer className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 text-center text-xs text-slate-400">
          <p>Synergic Bond Quantitative Chemistry • Lesson: Gaseous Molar Volume</p>
        </footer>
      </article>
    </main>
  );
}
