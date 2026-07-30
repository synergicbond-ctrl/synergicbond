"use client";

import { PartShell, ChapterSection, ConceptCard, ConsecutiveFigure, FigureFrame, FormulaCard, K, KB, WorkedExample } from "../../chemical-kinetics-shared";

export default function ChemicalKineticsPart10() {
  return (
    <PartShell
      part={10}
      title={"Consecutive Reactions"}
      description={"Sequential first-order reactions, intermediate maxima, limiting cases and kinetic profiles."}
    >
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
                <p className="text-center text-sm text-slate-400">Equivalent forms are possible after substituting tmax.</p>
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
    </PartShell>
  );
}
