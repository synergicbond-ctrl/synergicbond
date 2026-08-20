"use client";

import { ChapterSection, FormulaCard, IntegratedSourcePages, KB, PartShell } from "../../chemical-kinetics-shared";

export default function ChemicalKineticsPart16() {
  return (
    <PartShell part={16} title={"Comprehensive Practice I — Foundations to Integrated Laws"} description={"Formula atlas, dimensional checks, JEE traps and source practice pages 205–215."}>
      <ChapterSection
            id="formula-atlas"
            index="17"
            eyebrow="Rapid revision"
            title="Formula atlas, limiting cases and high-frequency traps"
            intro={<>Use this section after understanding the derivations. Each equation carries an assumption; applying the correct equation to the wrong kinetic model is more dangerous than forgetting the equation.</>}
          >
            <div className="grid gap-5 xl:grid-cols-2">
              <FormulaCard title="Stoichiometric and differential relations">
                <KB>{String.raw`n_i=n_{i,0}+\nu_i\xi`}</KB>
                <KB>{String.raw`r=\frac1V\frac{d\xi}{dt}=\frac1{\nu_i}\frac{d[i]}{dt}`}</KB>
                <KB>{String.raw`\frac{dn_i}{dt}=V\frac{dC_i}{dt}+C_i\frac{dV}{dt}`}</KB>
              </FormulaCard>
              <FormulaCard title="Orders and units">
                <KB>{String.raw`r=k\prod_i[A_i]^{\alpha_i},\qquad n=\sum_i\alpha_i`}</KB>
                <KB>{String.raw`[k]=(\mathrm{concentration})^{1-n}(\mathrm{time})^{-1}`}</KB>
                <KB>{String.raw`k_{obs}=k[B]^m\quad\text{when B is effectively constant}`}</KB>
              </FormulaCard>
              <FormulaCard title="Integrated single-reactant laws">
                <KB>{String.raw`n=0:\ [A]=[A]_0-kt`}</KB>
                <KB>{String.raw`n=1:\ \ln([A]_0/[A])=kt`}</KB>
                <KB>{String.raw`n=2:\ 1/[A]-1/[A]_0=kt`}</KB>
                <KB>{String.raw`n\ne1:\ [A]^{1-n}=[A]_0^{1-n}+(n-1)kt`}</KB>
              </FormulaCard>
              <FormulaCard title="Half-life dependence">
                <KB>{String.raw`t_{1/2}(0)=\frac{[A]_0}{2k}`}</KB>
                <KB>{String.raw`t_{1/2}(1)=\frac{0.693}{k}`}</KB>
                <KB>{String.raw`t_{1/2}(2)=\frac1{k[A]_0}`}</KB>
                <KB>{String.raw`t_{1/2}(n)=\frac{2^{n-1}-1}{(n-1)k[A]_0^{n-1}}`}</KB>
              </FormulaCard>
              <FormulaCard title="Complex first-order networks">
                <KB>{String.raw`A\rightleftharpoons B:\quad k_{relax}=k_f+k_b,\ K=k_f/k_b`}</KB>
                <KB>{String.raw`A\to B,C:\quad k_{obs}=k_1+k_2,\ B/C=k_1/k_2`}</KB>
                <KB>{String.raw`A\to B\to C:\quad t_{max}=\frac{\ln(k_2/k_1)}{k_2-k_1}`}</KB>
              </FormulaCard>
              <FormulaCard title="Temperature and molecular theory">
                <KB>{String.raw`k=Ae^{-E_a/(RT)}`}</KB>
                <KB>{String.raw`\ln(k_2/k_1)=\frac{E_a}{R}(1/T_1-1/T_2)`}</KB>
                <KB>{String.raw`k=\kappa(k_BT/h)e^{\Delta S^{\ddagger}/R}e^{-\Delta H^{\ddagger}/RT}`}</KB>
                <KB>{String.raw`E_a=\Delta H^{\ddagger}+RT`}</KB>
              </FormulaCard>
            </div>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {[
                ["01", "Do not derive overall rate-law exponents from the balanced equation."],
                ["02", "Molecularity belongs to an elementary step, never to an arbitrary overall reaction."],
                ["03", "The sign of a reactant concentration slope is negative; the reported reaction rate is positive."],
                ["04", "Normalise species rates by stoichiometric coefficients before comparing them."],
                ["05", "Pressure is proportional to concentration only at fixed temperature for an ideal gas."],
                ["06", "Total pressure is not generally the reactant partial pressure."],
                ["07", "A first-order half-life is concentration-independent; a zero-order half-life is not."],
                ["08", "The unequal A+B integrated law becomes indeterminate when a=b; use its limiting equation."],
                ["09", "A catalyst changes both forward and reverse kinetics but not K at fixed T."],
                ["10", "A steady-state intermediate is not necessarily in equilibrium."],
                ["11", "The slow step may contain an intermediate; eliminate it before comparing with experiment."],
                ["12", "A straight line alone does not prove a kinetic model; test residuals and mechanism."],
                ["13", "Arrhenius temperatures must be in kelvin."],
                ["14", "Eₐ may be apparent and can change when the dominant pathway changes."],
                ["15", "At high substrate or surface coverage, saturation produces zero-order limiting behaviour."],
              ].map(([n, text]) => (
                <div key={n} className="rounded-lg border border-white/10 bg-white/[0.035] p-4">
                  <div className="font-mono text-xs text-rose-300">TRAP {n}</div>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{text}</p>
                </div>
              ))}
            </div>
          </ChapterSection>
      
      <IntegratedSourcePages start={205} end={215} />
    </PartShell>
  );
}
