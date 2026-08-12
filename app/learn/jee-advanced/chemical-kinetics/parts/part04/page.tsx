"use client";

import { ChapterSection, ConceptCard, DataTable, FormulaCard, IntegratedSourcePages, K, KB, PartShell, ReferenceExpansion, WorkedExample } from "../../chemical-kinetics-shared";

export default function ChemicalKineticsPart04() {
  return (
    <PartShell part={4} title={"Order Determination and Experimental Monitoring"} description={"Initial-rate, isolation, half-life, graphical, pressure, optical and instrumental methods."}>
      <ChapterSection
            id="order-methods"
            index="07"
            eyebrow="Data analysis"
            title="Experimental methods for determining order"
            intro={<>No single method is universally best. Initial rates are robust for multireactant laws, integrated plots exploit complete time traces, half-life scaling is compact, and isolation converts a multicomponent law into a pseudo-order form.</>}
          >
            <DataTable
              headers={["Method", "Core operation", "Strongest use", "Common failure"]}
              rows={[
                ["Initial rates", "compare rate ratios", "individual exponents", "initial slope estimated poorly"],
                ["Integrated plots", "test [A], ln[A], 1/[A] linearity", "0th, 1st, 2nd order", "choosing by visual appearance only"],
                ["Half-life", <span key="half-life-law"><K>{String.raw`t_{1/2}\propto[A]_0^{1-n}`}</K></span>, "single-reactant order", "side reactions distort later halves"],
                ["Isolation", "place all but one reactant in excess", "one exponent at a time", "excess species not truly constant"],
                ["Differential", <span key="differential-law"><K>{String.raw`\ln r=\ln k+n\ln[A]`}</K></span>, "nonintegral orders", "differentiation amplifies noise"],
                ["Fractional-life", "compare times for fixed fractions", "general nth order", "requires accurate endpoints"],
              ]}
            />
            <div className="grid gap-5 xl:grid-cols-2">
              <FormulaCard title="Logarithmic differential method">
                <KB>{String.raw`r=k[A]^n\quad\Longrightarrow\quad \ln r=\ln k+n\ln[A]`}</KB>
                <p className="text-center text-sm text-[var(--text-muted)]">Slope of ln r versus ln[A] = n.</p>
              </FormulaCard>
              <FormulaCard title="Two-point order formula">
                <KB>{String.raw`n=\frac{\ln(r_2/r_1)}{\ln([A]_2/[A]_1)}`}</KB>
                <p className="text-center text-sm text-[var(--text-muted)]">Valid when every other relevant variable is held fixed.</p>
              </FormulaCard>
            </div>
            <ConceptCard title="Choosing among linear plots" tone="cyan">
              <p>Fit all plausible transformations and compare not only correlation coefficients but also the pattern of residuals. A curved residual pattern means the model misses systematic behaviour even when R² is close to one.</p>
              <p>The slope must have the correct sign and unit: <K>{String.raw`-k`}</K> for [A] versus t and ln[A] versus t; <K>{String.raw`+k`}</K> for 1/[A] versus t.</p>
            </ConceptCard>
            <WorkedExample
              number={9}
              title="Order and k from a time table"
              concept="Use a diagnostic transformation rather than guessing from raw concentration drops."
              question={<>The concentration data are: t/s = 0, 100, 250, 500 and [A]/M = 0.400, 0.286, 0.211, 0.143. Identify the order and estimate k.</>}
              solution={<>
                <p>Test reciprocal concentration:</p>
                <DataTable headers={["t / s", "[A] / M", "1/[A] / M⁻¹"]} rows={[
                  [0, "0.400", "2.500"], [100, "0.286", "3.497"], [250, "0.211", "4.739"], [500, "0.143", "6.993"],
                ]}/>
                <p>The increase in <K>{String.raw`1/[A]`}</K> is approximately proportional to time. Use the endpoints:</p>
                <KB>{String.raw`k=\frac{6.993-2.500}{500}=8.99\times10^{-3}\ \mathrm{L\,mol^{-1}\,s^{-1}}`}</KB>
                <p>Checking t = 250 s predicts <K>{String.raw`1/[A]=2.500+(8.99\times10^{-3})(250)=4.748`}</K>, in close agreement with 4.739.</p>
              </>}
              answer={<>Second order; <K>{String.raw`k\approx9.0\times10^{-3}\ \mathrm{L\,mol^{-1}\,s^{-1}}`}</K>.</>}
            />
            <WorkedExample
              number={10}
              difficulty="JEE Main+"
              title="Order by isolation"
              concept="Observed constants reveal the hidden exponent of an excess reagent."
              question={<>With B in large excess, the reaction is pseudo-first-order in A. At [B] = 0.20 M, <K>{String.raw`k_{obs}=1.80\times10^{-3}\ \mathrm{s^{-1}}`}</K>; at [B] = 0.45 M, <K>{String.raw`k_{obs}=6.075\times10^{-3}\ \mathrm{s^{-1}}`}</K>. Find the order in B and the true k if the law is <K>{String.raw`r=k[A][B]^m`}</K>.</>}
              solution={<>
                <KB>{String.raw`\frac{k_{obs,2}}{k_{obs,1}}=\left(\frac{0.45}{0.20}\right)^m`}</KB>
                <KB>{String.raw`\frac{6.075}{1.80}=3.375=(2.25)^m`}</KB>
                <p>Since <K>{String.raw`2.25^{3/2}=3.375`}</K>, <K>{String.raw`m=3/2`}</K>.</p>
                <KB>{String.raw`k=\frac{1.80\times10^{-3}}{(0.20)^{3/2}}=2.01\times10^{-2}\ \mathrm{M^{-3/2}\,s^{-1}}`}</KB>
              </>}
              answer={<>Order in B = <K>{String.raw`3/2`}</K>; <K>{String.raw`k=2.01\times10^{-2}\ \mathrm{M^{-3/2}\,s^{-1}}`}</K>.</>}
            />
          </ChapterSection>

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
      <ReferenceExpansion sheets={[16, 19, 23]} />
      <IntegratedSourcePages start={47} end={61} />
    </PartShell>
  );
}
