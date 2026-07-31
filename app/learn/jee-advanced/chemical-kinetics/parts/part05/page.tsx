"use client";

import { ChapterSection, ConceptCard, ExamTrap, FigureFrame, FormulaCard, IntegratedSourcePages, K, KB, PartShell, ReferenceExpansion, ReversibleFigure, WorkedExample } from "../../chemical-kinetics-shared";

export default function ChemicalKineticsPart05() {
  return (
    <PartShell part={5} title={"Reversible Reactions and Relaxation"} description={"Opposing first-order processes, approach to equilibrium and relaxation kinetics."}>
      <ChapterSection
            id="reversible"
            index="09"
            eyebrow="Opposed pathways"
            title="Reversible first-order reactions and relaxation"
            intro={<>In a reversible system, the forward rate falls as A is consumed while the reverse rate grows as B accumulates. Equilibrium is reached when the two rates are equal, not when molecular motion stops.</>}
          >
            <FigureFrame title="Approach to equilibrium" caption={<>Both concentrations approach finite equilibrium values exponentially. The distance from equilibrium decays with the relaxation constant <K>{String.raw`k_f+k_b`}</K>.</>}>
              <ReversibleFigure />
            </FigureFrame>
            <div className="grid gap-5 xl:grid-cols-2">
              <FormulaCard title="A ⇌ B, first order in each direction">
                <KB>{String.raw`A\ \mathop{\rightleftharpoons}^{k_f}_{k_b}\ B`}</KB>
                <KB>{String.raw`\frac{dx}{dt}=k_f(a-x)-k_b(b+x)`}</KB>
                <KB>{String.raw`x_t=x_{eq}\left(1-e^{-(k_f+k_b)t}\right)`}</KB>
              </FormulaCard>
              <FormulaCard title="Equilibrium and kinetic constants">
                <KB>{String.raw`K_c=\frac{[B]_{eq}}{[A]_{eq}}=\frac{k_f}{k_b}`}</KB>
                <KB>{String.raw`k_{\mathrm{relax}}=k_f+k_b`}</KB>
                <KB>{String.raw`k_f=\frac{K_c}{1+K_c}k_{\mathrm{relax}},\qquad k_b=\frac{1}{1+K_c}k_{\mathrm{relax}}`}</KB>
              </FormulaCard>
            </div>
            <ConceptCard title="Distance-from-equilibrium form" tone="cyan">
              <p>Any small displacement <K>{String.raw`\delta_t=x_{eq}-x_t`}</K> satisfies</p>
              <KB>{String.raw`\delta_t=\delta_0e^{-(k_f+k_b)t}`}</KB>
              <p>This is why temperature-jump and pressure-jump experiments can determine the sum of forward and reverse constants from relaxation back to equilibrium.</p>
            </ConceptCard>
            <ExamTrap>The equilibrium constant is <K>{String.raw`k_f/k_b`}</K>, whereas the observed exponential constant is <K>{String.raw`k_f+k_b`}</K>. Confusing the ratio with the sum is a frequent error.</ExamTrap>
            <WorkedExample
              number={13}
              title="Separating forward and reverse constants"
              concept="Combine equilibrium composition with relaxation kinetics."
              question={<>For <K>{String.raw`A\rightleftharpoons B`}</K>, an initially pure A sample reaches <K>{String.raw`[B]_{eq}/[A]_{eq}=3.00`}</K>. A small perturbation from equilibrium decays with half-time 46.2 s. Find <K>{String.raw`k_f`}</K> and <K>{String.raw`k_b`}</K>.</>}
              solution={<>
                <p>The relaxation constant follows a first-order decay:</p>
                <KB>{String.raw`k_{relax}=\frac{\ln2}{46.2}=1.500\times10^{-2}\ \mathrm{s^{-1}}`}</KB>
                <p>Also <K>{String.raw`K_c=k_f/k_b=3.00`}</K>, so <K>{String.raw`k_f=3k_b`}</K>. Therefore</p>
                <KB>{String.raw`k_f+k_b=4k_b=1.500\times10^{-2}`}</KB>
                <KB>{String.raw`k_b=3.75\times10^{-3}\ \mathrm{s^{-1}},\qquad k_f=1.125\times10^{-2}\ \mathrm{s^{-1}}`}</KB>
              </>}
              answer={<><K>{String.raw`k_f=1.125\times10^{-2}\ \mathrm{s^{-1}}`}</K>, <K>{String.raw`k_b=3.75\times10^{-3}\ \mathrm{s^{-1}}`}</K>.</>}
            />
          </ChapterSection>
      <ReferenceExpansion sheets={[24, 25]} />
      <IntegratedSourcePages start={62} end={74} />
    </PartShell>
  );
}
