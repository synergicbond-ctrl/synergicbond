"use client";

import { PartShell, ChapterSection, ConceptCard, DataTable, FormulaCard, K, KB, WorkedExample } from "../../chemical-kinetics-shared";

export default function ChemicalKineticsPart06() {
  return (
    <PartShell
      part={6}
      title={"Determination of Reaction Order"}
      description={"Initial-rate, isolation, half-life, graphical, differential and integral methods."}
    >
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
                ["Half-life", <><K>{String.raw`t_{1/2}\propto[A]_0^{1-n}`}</K></>, "single-reactant order", "side reactions distort later halves"],
                ["Isolation", "place all but one reactant in excess", "one exponent at a time", "excess species not truly constant"],
                ["Differential", <><K>{String.raw`\ln r=\ln k+n\ln[A]`}</K></>, "nonintegral orders", "differentiation amplifies noise"],
                ["Fractional-life", "compare times for fixed fractions", "general nth order", "requires accurate endpoints"],
              ]}
            />
            <div className="grid gap-5 xl:grid-cols-2">
              <FormulaCard title="Logarithmic differential method">
                <KB>{String.raw`r=k[A]^n\quad\Longrightarrow\quad \ln r=\ln k+n\ln[A]`}</KB>
                <p className="text-center text-sm text-slate-400">Slope of ln r versus ln[A] = n.</p>
              </FormulaCard>
              <FormulaCard title="Two-point order formula">
                <KB>{String.raw`n=\frac{\ln(r_2/r_1)}{\ln([A]_2/[A]_1)}`}</KB>
                <p className="text-center text-sm text-slate-400">Valid when every other relevant variable is held fixed.</p>
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
    </PartShell>
  );
}
