"use client";

import { PartShell, ChapterSection, ConceptCard, FigureFrame, FormulaCard, K, KB, ParallelFigure, WorkedExample } from "../../chemical-kinetics-shared";

export default function ChemicalKineticsPart09() {
  return (
    <PartShell
      part={9}
      title={"Parallel Reactions"}
      description={"Competing channels, product ratios, selectivity, temperature effects and apparent activation energy."}
    >
<ChapterSection
            id="parallel"
            index="10"
            eyebrow="Competing channels"
            title="Parallel reactions, selectivity and effective activation energy"
            intro={<>A reactant can disappear through several simultaneous pathways. The total disappearance rate is the sum of channel rates, while product selectivity depends on their relative rates.</>}
          >
            <FigureFrame title="Two competing first-order channels" caption={<>For constant <K>{String.raw`k_1`}</K> and <K>{String.raw`k_2`}</K>, product ratio is time-independent and the reactant decays with <K>{String.raw`k_1+k_2`}</K>.</>}>
              <ParallelFigure />
            </FigureFrame>
            <div className="grid gap-5 xl:grid-cols-2">
              <FormulaCard title="First-order parallel network">
                <KB>{String.raw`A\xrightarrow{k_1}B,\qquad A\xrightarrow{k_2}C`}</KB>
                <KB>{String.raw`[A]_t=[A]_0e^{-(k_1+k_2)t}`}</KB>
                <KB>{String.raw`[B]_t=[A]_0\frac{k_1}{k_1+k_2}\left(1-e^{-(k_1+k_2)t}\right)`}</KB>
                <KB>{String.raw`[C]_t=[A]_0\frac{k_2}{k_1+k_2}\left(1-e^{-(k_1+k_2)t}\right)`}</KB>
              </FormulaCard>
              <FormulaCard title="Selectivity and yield fractions">
                <KB>{String.raw`\frac{[B]}{[C]}=\frac{k_1}{k_2}`}</KB>
                <KB>{String.raw`\phi_B=\frac{k_1}{k_1+k_2},\qquad \phi_C=\frac{k_2}{k_1+k_2}`}</KB>
                <KB>{String.raw`S_{B/C}=\frac{r_B}{r_C}`}</KB>
              </FormulaCard>
            </div>
            <ConceptCard title="Temperature controls selectivity" tone="amber">
              <p>Using Arrhenius equations for both channels,</p>
              <KB>{String.raw`\frac{k_1}{k_2}=\frac{A_1}{A_2}\exp\left[-\frac{E_{a,1}-E_{a,2}}{RT}\right]`}</KB>
              <p>If channel 1 has the larger activation energy, increasing temperature tends to favour channel 1 relative to channel 2, although the pre-exponential ratio also matters.</p>
            </ConceptCard>
            <ConceptCard title="Observed activation energy of summed channels" tone="violet">
              <p>For <K>{String.raw`k_{obs}=k_1+k_2+\cdots`}</K>, differentiation of <K>{String.raw`\ln k_{obs}`}</K> gives a rate-constant-weighted activation energy:</p>
              <KB>{String.raw`E_{a,obs}=\frac{\sum_i k_iE_{a,i}}{\sum_i k_i}`}</KB>
              <p>The observed value can shift with temperature because the channel weights change.</p>
            </ConceptCard>
            <WorkedExample
              number={14}
              title="Branching fractions in parallel decay"
              concept="Use total decay for disappearance and rate ratios for products."
              question={<>A undergoes two first-order reactions with <K>{String.raw`k_1=2.4\times10^{-3}\ \mathrm{s^{-1}}`}</K> and <K>{String.raw`k_2=6.0\times10^{-4}\ \mathrm{s^{-1}}`}</K>. Starting from 0.500 M A, find [A], [B] and [C] after 400 s.</>}
              solution={<>
                <KB>{String.raw`k_{obs}=3.0\times10^{-3}\ \mathrm{s^{-1}}`}</KB>
                <KB>{String.raw`[A]_{400}=0.500e^{-(3.0\times10^{-3})(400)}=0.1506\ \mathrm{M}`}</KB>
                <p>Total A consumed = 0.3494 M. Fractions to B and C are</p>
                <KB>{String.raw`\phi_B=\frac{2.4}{3.0}=0.80,\qquad \phi_C=0.20`}</KB>
                <KB>{String.raw`[B]=0.80(0.3494)=0.2795\ \mathrm{M}`}</KB>
                <KB>{String.raw`[C]=0.20(0.3494)=0.0699\ \mathrm{M}`}</KB>
              </>}
              answer={<>[A] = 0.1506 M, [B] = 0.2795 M, [C] = 0.0699 M.</>}
            />
            <WorkedExample
              number={15}
              title="Temperature-dependent product ratio"
              concept="Relative Arrhenius kinetics of competing channels."
              question={<>For two parallel channels, <K>{String.raw`A_1/A_2=0.25`}</K>, <K>{String.raw`E_{a,1}=82\ \mathrm{kJ\,mol^{-1}}`}</K> and <K>{String.raw`E_{a,2}=70\ \mathrm{kJ\,mol^{-1}}`}</K>. Calculate <K>{String.raw`k_1/k_2`}</K> at 600 K.</>}
              solution={<>
                <KB>{String.raw`\frac{k_1}{k_2}=0.25\exp\left[-\frac{(82-70)\times10^3}{(8.314)(600)}\right]`}</KB>
                <KB>{String.raw`\frac{k_1}{k_2}=0.25e^{-2.406}=2.25\times10^{-2}`}</KB>
                <p>Despite the numerical example having a higher activation energy in channel 1, the stated prefactor is also smaller, so channel 2 dominates at 600 K.</p>
              </>}
              answer={<><K>{String.raw`k_1/k_2=2.25\times10^{-2}`}</K>, so approximately 2.2% as much product forms through channel 1 as through channel 2.</>}
            />
          </ChapterSection>
    </PartShell>
  );
}
