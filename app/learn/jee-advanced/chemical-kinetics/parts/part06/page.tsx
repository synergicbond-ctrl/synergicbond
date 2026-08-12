"use client";

import { ChapterSection, ConceptCard, ConsecutiveFigure, FigureFrame, FormulaCard, IntegratedSourcePages, K, KB, ParallelFigure, PartShell, ReferenceExpansion, WorkedExample } from "../../chemical-kinetics-shared";

export default function ChemicalKineticsPart06() {
  return (
    <PartShell part={6} title={"Parallel and Consecutive Reaction Networks"} description={"Competing channels, product ratios, sequential reactions and intermediate maxima."}>
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

<ChapterSection
            id="consecutive"
            index="11"
            eyebrow="Intermediates"
            title="Consecutive reactions and the maximum intermediate"
            intro={<>In a sequence A → B → C, B is formed from A and destroyed to C. Its concentration therefore rises, reaches a maximum when its formation and consumption rates become equal, and then falls.</>}
          >
            <FigureFrame title="A → B → C concentration profiles" caption={<>At the maximum of B, <K>{String.raw`d[B]/dt=0`}</K>, hence <K>{String.raw`k_1[A]=k_2[B]`}</K>.</>}>
              <ConsecutiveFigure />
            </FigureFrame>
            <div className="grid gap-5 xl:grid-cols-2">
              <FormulaCard title="Two consecutive first-order steps">
                <KB>{String.raw`A\xrightarrow{k_1}B\xrightarrow{k_2}C`}</KB>
                <KB>{String.raw`[A]_t=[A]_0e^{-k_1t}`}</KB>
                <KB>{String.raw`[B]_t=[A]_0\frac{k_1}{k_2-k_1}\left(e^{-k_1t}-e^{-k_2t}\right)`}</KB>
                <KB>{String.raw`[C]_t=[A]_0-[A]_t-[B]_t`}</KB>
              </FormulaCard>
              <FormulaCard title="Time and value of B maximum">
                <KB>{String.raw`t_{max}=\frac{\ln(k_2/k_1)}{k_2-k_1}`}</KB>
                <KB>{String.raw`[B]_{max}=\frac{k_1}{k_2}[A]_0e^{-k_1t_{max}}`}</KB>
                <p className="text-center text-sm text-[var(--text-muted)]">Equivalent forms are possible after substituting tmax.</p>
              </FormulaCard>
            </div>
            <div className="grid gap-5 xl:grid-cols-2">
              <ConceptCard title="Fast second step: k₂ ≫ k₁" tone="cyan">
                <p>B is consumed almost as soon as it forms. Its concentration stays small and the overall appearance of C is controlled mainly by the slow A → B step.</p>
                <p>This is the usual basis of a steady-state treatment of B.</p>
              </ConceptCard>
              <ConceptCard title="Slow second step: k₁ ≫ k₂" tone="amber">
                <p>A rapidly becomes B; B accumulates and then decays approximately as a first-order reactant with constant k₂.</p>
                <p>A distinct induction or build-up period may be visible.</p>
              </ConceptCard>
            </div>
            <ConceptCard title="Constant formation plus first-order loss" tone="violet">
              <p>If an intermediate is generated at constant volumetric rate q and removed by first-order loss k,</p>
              <KB>{String.raw`\frac{d[I]}{dt}=q-k[I]`}</KB>
              <KB>{String.raw`[I]_t=\frac{q}{k}\left(1-e^{-kt}\right)+[I]_0e^{-kt}`}</KB>
              <p>The steady concentration is <K>{String.raw`q/k`}</K>.</p>
            </ConceptCard>
            <WorkedExample
              number={16}
              title="Maximum concentration of an intermediate"
              concept="Exact consecutive first-order kinetics."
              question={<>For <K>{String.raw`A\xrightarrow{0.030\,\mathrm{min^{-1}}}B\xrightarrow{0.120\,\mathrm{min^{-1}}}C`}</K>, initially [A] = 0.800 M and [B] = [C] = 0. Find the time and concentration at which B is maximum.</>}
              solution={<>
                <KB>{String.raw`t_{max}=\frac{\ln(0.120/0.030)}{0.120-0.030}=\frac{\ln4}{0.090}=15.40\ \mathrm{min}`}</KB>
                <p>At the maximum, <K>{String.raw`k_1[A]=k_2[B]`}</K>. First compute A:</p>
                <KB>{String.raw`[A]_{max}=0.800e^{-(0.030)(15.40)}=0.504\ \mathrm{M}`}</KB>
                <KB>{String.raw`[B]_{max}=\frac{0.030}{0.120}(0.504)=0.126\ \mathrm{M}`}</KB>
              </>}
              answer={<><K>{String.raw`t_{max}=15.4\ \mathrm{min}`}</K>, <K>{String.raw`[B]_{max}=0.126\ \mathrm{M}`}</K>.</>}
            />
            <WorkedExample
              number={17}
              difficulty="JEE Main+"
              title="Build-up to a steady intermediate concentration"
              concept="Constant source with first-order sink."
              question={<>An intermediate is produced uniformly at <K>{String.raw`q=2.5\times10^{-6}\ \mathrm{M\,s^{-1}}`}</K> and removed with <K>{String.raw`k=0.020\ \mathrm{s^{-1}}`}</K>. Initially none is present. Find [I] after 60 s and its steady value.</>}
              solution={<>
                <KB>{String.raw`[I]_{ss}=\frac{q}{k}=\frac{2.5\times10^{-6}}{0.020}=1.25\times10^{-4}\ \mathrm{M}`}</KB>
                <KB>{String.raw`[I]_{60}=[I]_{ss}(1-e^{-k t})=(1.25\times10^{-4})(1-e^{-1.2})`}</KB>
                <KB>{String.raw`[I]_{60}=8.74\times10^{-5}\ \mathrm{M}`}</KB>
              </>}
              answer={<>After 60 s: <K>{String.raw`8.74\times10^{-5}\ \mathrm{M}`}</K>; steady value <K>{String.raw`1.25\times10^{-4}\ \mathrm{M}`}</K>.</>}
            />
          </ChapterSection>
      <ReferenceExpansion sheets={[27, 28]} />
      <IntegratedSourcePages start={75} end={89} />
    </PartShell>
  );
}
