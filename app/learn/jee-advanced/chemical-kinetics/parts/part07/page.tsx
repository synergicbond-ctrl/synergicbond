"use client";

import { PartShell, ChapterSection, ConceptCard, K, KB, WorkedExample } from "../../chemical-kinetics-shared";

export default function ChemicalKineticsPart07() {
  return (
    <PartShell
      part={7}
      title={"Pressure, Volume and Optical Methods"}
      description={"Gas-phase stoichiometric pressure relations, volume data, polarimetry, absorbance and conductance."}
    >
<ChapterSection
            id="special-methods"
            index="08"
            eyebrow="Indirect concentration tracking"
            title="Pressure, volume, titration and optical-rotation methods"
            intro={<>Many JEE problems provide a measured property rather than concentration. The central skill is to construct a stoichiometric mapping from the signal at time t to the amount of unreacted material.</>}
          >
            <div className="grid gap-5 xl:grid-cols-2">
              <ConceptCard title="Total-pressure method at constant T and V" tone="cyan">
                <p>For ideal gases, pressure is proportional to total moles. Write an ICE table in pressure units and express the reactant partial pressure in terms of <K>{String.raw`P_0`}</K>, <K>{String.raw`P_t`}</K> and, if needed, <K>{String.raw`P_\infty`}</K>.</p>
                <p>Never insert total pressure directly into a rate law unless the algebra proves it is proportional to the reacting species.</p>
              </ConceptCard>
              <ConceptCard title="Gas-volume method at constant T and P" tone="violet">
                <p>Volume is proportional to moles. The same ICE-table method applies, with V replacing P.</p>
                <p>At completion, <K>{String.raw`V_\infty`}</K> often supplies the calibration needed to find the unreacted amount.</p>
              </ConceptCard>
              <ConceptCard title="Titration reading" tone="amber">
                <p>If titrant volume is proportional to unreacted reactant, a first-order equation may appear as</p>
                <KB>{String.raw`k=\frac{2.303}{t}\log\frac{V_0-V_\infty}{V_t-V_\infty}`}</KB>
                <p>The precise numerator and denominator depend on what is titrated; derive them rather than memorising blindly.</p>
              </ConceptCard>
              <ConceptCard title="Optical rotation" tone="emerald">
                <p>When rotation is a linear sum of contributions, the distance from the final reading is proportional to unreacted material:</p>
                <KB>{String.raw`k=\frac{2.303}{t}\log\frac{\alpha_0-\alpha_\infty}{\alpha_t-\alpha_\infty}`}</KB>
              </ConceptCard>
            </div>
            <WorkedExample
              number={11}
              title="First-order decomposition from total pressure"
              concept="Construct the pressure ICE relation before using the integrated law."
              question={<>A gas A decomposes as <K>{String.raw`A(g)\rightarrow B(g)+2C(g)`}</K> in a constant-volume vessel. The initial pressure is 240 torr and the total pressure after 18.0 min is 372 torr. Find k.</>}
              solution={<>
                <p>Let the pressure-equivalent amount decomposed be x. The pressure table is:</p>
                <KB>{String.raw`A:240-x,\qquad B:x,\qquad C:2x`}</KB>
                <KB>{String.raw`P_t=(240-x)+x+2x=240+2x`}</KB>
                <p>At 18.0 min, <K>{String.raw`372=240+2x`}</K>, so <K>{String.raw`x=66`}</K> torr and <K>{String.raw`P_A=174`}</K> torr.</p>
                <KB>{String.raw`k=\frac1t\ln\frac{P_{A,0}}{P_{A,t}}=\frac1{18.0}\ln\frac{240}{174}=1.79\times10^{-2}\ \mathrm{min^{-1}}`}</KB>
              </>}
              answer={<><K>{String.raw`k=1.79\times10^{-2}\ \mathrm{min^{-1}}`}</K>.</>}
            />
            <WorkedExample
              number={12}
              title="Optical-rotation kinetics"
              concept="Use displacement from the final rotation, not raw rotation."
              question={<>In an inversion experiment, the observed rotations are <K>{String.raw`\alpha_0=+28.0^\circ`}</K>, <K>{String.raw`\alpha_{30}=+8.0^\circ`}</K>, and <K>{String.raw`\alpha_\infty=-12.0^\circ`}</K>. Assuming pseudo-first-order kinetics, calculate k.</>}
              solution={<>
                <p>The signal proportional to unreacted substrate is <K>{String.raw`\alpha_t-\alpha_\infty`}</K>.</p>
                <KB>{String.raw`\alpha_0-\alpha_\infty=28-(-12)=40`}</KB>
                <KB>{String.raw`\alpha_{30}-\alpha_\infty=8-(-12)=20`}</KB>
                <KB>{String.raw`k=\frac1{30}\ln\frac{40}{20}=\frac{0.6931}{30}=2.31\times10^{-2}\ \mathrm{min^{-1}}`}</KB>
              </>}
              answer={<><K>{String.raw`2.31\times10^{-2}\ \mathrm{min^{-1}}`}</K>; the 30 min reading is exactly one half-life.</>}
            />
          </ChapterSection>
    </PartShell>
  );
}
