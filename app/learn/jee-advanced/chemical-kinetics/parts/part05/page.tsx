"use client";

import { PartShell, ChapterSection, ConceptCard, FigureFrame, FormulaCard, IntegratedPlotsFigure, K, KB, KeyIdea, WorkedExample } from "../../chemical-kinetics-shared";

export default function ChemicalKineticsPart05() {
  return (
    <PartShell
      part={5}
      title={"Integrated Rate Laws"}
      description={"Zero-, first-, second- and general-order equations, half-life relations, plots and limiting cases."}
    >
<ChapterSection
            id="integrated"
            index="06"
            eyebrow="Concentration against time"
            title="Integrated rate laws, half-life and mean life"
            intro={<>Integration converts a differential rate law into a direct relation among concentration, time and the rate constant. These equations are valid only when the assumed rate law remains valid over the fitted concentration range.</>}
          >
            <FigureFrame title="Diagnostic straight-line plots" caption={<>A straight line is necessary but not always sufficient evidence. Check units, residuals, independent data and whether the mechanism can plausibly maintain the same law.</>}>
              <IntegratedPlotsFigure />
            </FigureFrame>
            <div className="grid gap-5 xl:grid-cols-3">
              <FormulaCard title="Zero order">
                <KB>{String.raw`-\frac{d[A]}{dt}=k`}</KB>
                <KB>{String.raw`[A]_t=[A]_0-kt`}</KB>
                <KB>{String.raw`t_{1/2}=\frac{[A]_0}{2k}`}</KB>
              </FormulaCard>
              <FormulaCard title="First order">
                <KB>{String.raw`-\frac{d[A]}{dt}=k[A]`}</KB>
                <KB>{String.raw`\ln\frac{[A]_0}{[A]_t}=kt`}</KB>
                <KB>{String.raw`t_{1/2}=\frac{\ln2}{k},\quad \tau=\frac1k`}</KB>
              </FormulaCard>
              <FormulaCard title="Second order: 2A or equal A+B">
                <KB>{String.raw`-\frac{d[A]}{dt}=k[A]^2`}</KB>
                <KB>{String.raw`\frac1{[A]_t}-\frac1{[A]_0}=kt`}</KB>
                <KB>{String.raw`t_{1/2}=\frac1{k[A]_0}`}</KB>
              </FormulaCard>
            </div>
            <ConceptCard title="General nth-order single-reactant law" tone="violet">
              <p>For <K>{String.raw`-d[A]/dt=k[A]^n`}</K> and <K>{String.raw`n\ne1`}</K>,</p>
              <KB>{String.raw`[A]_t^{\,1-n}=[A]_0^{\,1-n}+(n-1)kt`}</KB>
              <KB>{String.raw`t_{1/2}=\frac{2^{n-1}-1}{(n-1)k[A]_0^{\,n-1}}`}</KB>
              <p>Therefore <K>{String.raw`t_{1/2}\propto[A]_0^{\,1-n}`}</K>. This dependence is a powerful order test.</p>
            </ConceptCard>
            <div className="grid gap-5 xl:grid-cols-2">
              <ConceptCard title="A + B with unequal initial concentrations" tone="cyan">
                <p>For <K>{String.raw`A+B\rightarrow P`}</K>, initial concentrations a and b, and reacted amount x:</p>
                <KB>{String.raw`kt=\frac{1}{b-a}\ln\left[\frac{a(b-x)}{b(a-x)}\right]`}</KB>
                <p>The equal-concentration equation is the limit as <K>{String.raw`b\to a`}</K>; do not substitute b = a directly into the unequal formula.</p>
              </ConceptCard>
              <ConceptCard title="Useful fraction forms" tone="amber">
                <p>First order, fraction remaining <K>{String.raw`f=[A]_t/[A]_0`}</K>:</p>
                <KB>{String.raw`kt=-\ln f,\qquad t=\frac{2.303}{k}\log\frac1f`}</KB>
                <p>After m half-lives, <K>{String.raw`f=2^{-m}`}</K>; percent decomposed is <K>{String.raw`100(1-2^{-m})`}</K>.</p>
              </ConceptCard>
            </div>
            <KeyIdea>Equal successive concentration drops indicate zero order; equal successive fractions or equal half-lives indicate first order; equal successive increases in reciprocal concentration indicate second order.</KeyIdea>
            <div className="space-y-4">
              <WorkedExample
                number={5}
                difficulty="JEE Main+"
                title="Zero-order exhaustion and half-life"
                concept="Finite completion time is a hallmark of the ideal zero-order model."
                question={<>A surface-catalysed decomposition is zero order in A with <K>{String.raw`k=3.6\times10^{-4}\ \mathrm{mol\,L^{-1}\,s^{-1}}`}</K>. If <K>{String.raw`[A]_0=0.180\ \mathrm{M}`}</K>, find the concentration after 250 s, the half-life and the exhaustion time.</>}
                solution={<>
                  <KB>{String.raw`[A]_{250}=0.180-(3.6\times10^{-4})(250)=0.090\ \mathrm{M}`}</KB>
                  <KB>{String.raw`t_{1/2}=\frac{0.180}{2(3.6\times10^{-4})}=250\ \mathrm{s}`}</KB>
                  <p>At exhaustion, <K>{String.raw`[A]_t=0`}</K>:</p>
                  <KB>{String.raw`t_{\mathrm{end}}=\frac{[A]_0}{k}=500\ \mathrm{s}`}</KB>
                </>}
                answer={<>After 250 s: 0.090 M; <K>{String.raw`t_{1/2}=250\ \mathrm{s}`}</K>; ideal exhaustion at 500 s.</>}
              />
              <WorkedExample
                number={6}
                difficulty="JEE Main+"
                title="First-order fraction remaining"
                concept="Use logarithms or half-life reasoning."
                question={<>A first-order reactant has <K>{String.raw`k=4.20\times10^{-3}\ \mathrm{s^{-1}}`}</K>. How long is required for 84.0% decomposition?</>}
                solution={<>
                  <p>If 84.0% decomposes, 16.0% remains, so <K>{String.raw`f=0.160`}</K>.</p>
                  <KB>{String.raw`t=\frac{-\ln(0.160)}{4.20\times10^{-3}}=436.3\ \mathrm{s}`}</KB>
                  <p>The result is about 7.27 min.</p>
                </>}
                answer={<><K>{String.raw`t=4.36\times10^2\ \mathrm{s}=7.27\ \mathrm{min}`}</K>.</>}
              />
              <WorkedExample
                number={7}
                title="Second-order unequal reactants"
                concept="Integrated A + B law with a ≠ b."
                question={<>For <K>{String.raw`A+B\rightarrow P`}</K>, <K>{String.raw`k=0.480\ \mathrm{L\,mol^{-1}\,min^{-1}}`}</K>, <K>{String.raw`a=0.150\ \mathrm{M}`}</K> and <K>{String.raw`b=0.250\ \mathrm{M}`}</K>. Find the time when 0.090 M of each reactant has been consumed.</>}
                solution={<>
                  <p>Here x = 0.090 M, so <K>{String.raw`a-x=0.060`}</K> and <K>{String.raw`b-x=0.160`}</K>.</p>
                  <KB>{String.raw`kt=\frac1{0.250-0.150}\ln\left[\frac{(0.150)(0.160)}{(0.250)(0.060)}\right]`}</KB>
                  <KB>{String.raw`0.480t=10\ln(1.6)=4.700`}</KB>
                  <KB>{String.raw`t=9.79\ \mathrm{min}`}</KB>
                </>}
                answer={<><K>{String.raw`9.79\ \mathrm{min}`}</K>.</>}
              />
              <WorkedExample
                number={8}
                title="Order from half-life scaling"
                concept="Apply t½ ∝ [A]₀^(1−n)."
                question={<>When the initial concentration is raised from 0.050 M to 0.200 M, the measured half-life falls from 96 min to 6.0 min. Determine the order.</>}
                solution={<>
                  <KB>{String.raw`\frac{t_{1/2,2}}{t_{1/2,1}}=\left(\frac{[A]_{0,2}}{[A]_{0,1}}\right)^{1-n}`}</KB>
                  <KB>{String.raw`\frac6{96}=\left(\frac{0.200}{0.050}\right)^{1-n}`}</KB>
                  <KB>{String.raw`\frac1{16}=4^{1-n}=4^{-2}`}</KB>
                  <p>Therefore <K>{String.raw`1-n=-2`}</K>, hence <K>{String.raw`n=3`}</K>.</p>
                </>}
                answer={<>Third order.</>}
              />
            </div>
          </ChapterSection>
    </PartShell>
  );
}
