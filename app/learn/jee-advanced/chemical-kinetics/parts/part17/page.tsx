"use client";

import { ChapterSection, ConceptCard, IntegratedSourcePages, K, KB, PartShell, WorkedExample } from "../../chemical-kinetics-shared";

export default function ChemicalKineticsPart17() {
  return (
    <PartShell part={17} title={"Comprehensive Practice II — Complex Reactions and Temperature"} description={"Fully solved examples connected to source practice pages 216–226."}>
      <ChapterSection
            id="practice"
            index="18"
            eyebrow="Synthesis problems"
            title="Integrated JEE Advanced worked examples"
            intro={<>These final problems combine multiple ideas. The numerical data and scenarios are newly designed while preserving the conceptual level of the source material.</>}
          >
            <WorkedExample
              number={32}
              title="Mixed stoichiometry, pressure and first-order kinetics"
              concept="Use total pressure to recover the reactant partial pressure."
              question={<>A(g) decomposes by <K>{String.raw`2A\rightarrow B+3C`}</K> in a rigid vessel. Initially only A is present at 500 mmHg. After 20.0 min, total pressure is 650 mmHg. Assuming first-order disappearance of A, find k and the total pressure at 50.0% conversion.</>}
              solution={<>
                <p>Let the pressure-equivalent extent be x for the balanced equation. Changes are A: −2x, B: +x, C: +3x.</p>
                <KB>{String.raw`P_t=(500-2x)+x+3x=500+2x`}</KB>
                <p>At 20 min, <K>{String.raw`650=500+2x`}</K>, so x = 75 mmHg and <K>{String.raw`P_A=500-150=350`}</K> mmHg.</p>
                <KB>{String.raw`k=\frac1{20}\ln\frac{500}{350}=1.783\times10^{-2}\ \mathrm{min^{-1}}`}</KB>
                <p>At 50% conversion, A falls from 500 to 250 mmHg. Thus 2x = 250, x = 125 mmHg:</p>
                <KB>{String.raw`P_{total}=500+2(125)=750\ \mathrm{mmHg}`}</KB>
              </>}
              answer={<>k = <K>{String.raw`1.78\times10^{-2}\ \mathrm{min^{-1}}`}</K>; total pressure at 50% conversion = 750 mmHg.</>}
            />
            <WorkedExample
              number={33}
              title="Mechanism discrimination from limiting orders"
              concept="A rational rate law reveals saturation and pre-equilibrium behaviour."
              question={<>An observed law is <K>{String.raw`r=k[A][B]/(1+K[B])`}</K>. Determine the orders in A and B at low and high [B], and identify which of the following qualitative mechanisms is compatible: (i) one elementary A+B collision; (ii) A forms an intermediate reversibly with B, followed by a step whose rate is limited by the finite intermediate population.</>}
              solution={<>
                <p>At low B, <K>{String.raw`K[B]\ll1`}</K>:</p>
                <KB>{String.raw`r\approx k[A][B]`}</KB>
                <p>The rate is first order in A and first order in B.</p>
                <p>At high B, <K>{String.raw`K[B]\gg1`}</K>:</p>
                <KB>{String.raw`r\approx\frac{k[A][B]}{K[B]}=\frac{k}{K}[A]`}</KB>
                <p>The rate remains first order in A but becomes zero order in B. A single elementary collision cannot change order with concentration. A saturation mechanism involving a finite or equilibrated intermediate population is compatible.</p>
              </>}
              answer={<>Low B: order A = 1, B = 1. High B: order A = 1, B = 0. Mechanism (ii) is compatible.</>}
            />
            <WorkedExample
              number={34}
              title="Observed activation energy of two parallel channels"
              concept="Weighted activation energy of summed rate constants."
              question={<>At a certain temperature, two parallel channels have <K>{String.raw`k_1=3k_2`}</K>, with <K>{String.raw`E_{a,1}=50\ \mathrm{kJ\,mol^{-1}}`}</K> and <K>{String.raw`E_{a,2}=110\ \mathrm{kJ\,mol^{-1}}`}</K>. Find the instantaneous apparent activation energy of <K>{String.raw`k_{obs}=k_1+k_2`}</K>.</>}
              solution={<>
                <KB>{String.raw`E_{a,obs}=\frac{k_1E_{a,1}+k_2E_{a,2}}{k_1+k_2}`}</KB>
                <p>Put <K>{String.raw`k_1=3k_2`}</K>:</p>
                <KB>{String.raw`E_{a,obs}=\frac{3(50)+1(110)}{4}=65\ \mathrm{kJ\,mol^{-1}}`}</KB>
                <p>The observed value lies between the channel values and is closer to the dominant channel’s activation energy.</p>
              </>}
              answer={<><K>{String.raw`E_{a,obs}=65\ \mathrm{kJ\,mol^{-1}}`}</K>.</>}
            />
            <WorkedExample
              number={35}
              title="Full mechanism test with pre-equilibrium and catalyst regeneration"
              concept="Check net equation, catalyst cancellation and rate law."
              question={<>A catalysed reaction A + B → P is proposed to occur by:</>}
              solution={<>
                <KB>{String.raw`A+C\ \mathop{\rightleftharpoons}^{k_1}_{k_{-1}}\ AC\quad\text{fast}`}</KB>
                <KB>{String.raw`AC+B\xrightarrow{k_2}P+C\quad\text{slow}`}</KB>
                <p>Adding the steps and cancelling AC and C gives A + B → P; C is regenerated and is therefore a catalyst.</p>
                <p>Slow-step rate:</p>
                <KB>{String.raw`r=k_2[AC][B]`}</KB>
                <p>Fast pre-equilibrium:</p>
                <KB>{String.raw`K_1=\frac{[AC]}{[A][C]}=\frac{k_1}{k_{-1}}`}</KB>
                <p>Thus</p>
                <KB>{String.raw`r=k_2K_1[A][B][C]=\frac{k_1k_2}{k_{-1}}[A][B][C]`}</KB>
                <p>The catalyst appears in the measurable rate law even though it cancels from the net equation. Doubling [C] doubles the rate in this unsaturated pre-equilibrium model.</p>
              </>}
              answer={<><K>{String.raw`r=(k_1k_2/k_{-1})[A][B][C]`}</K>; C is a catalyst and AC is an intermediate.</>}
            />

            <ConceptCard title="Final self-audit" tone="emerald">
              <p>Before finalising any kinetics solution, verify four layers:</p>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  ["Bookkeeping", "balanced equation, signs, coefficients and units"],
                  ["Model", "correct order law and valid limiting assumptions"],
                  ["Mathematics", "proper integration, logarithm base and kelvin temperature"],
                  ["Chemistry", "plausible elementary steps, eliminated intermediates and sensible trends"],
                ].map(([a,b]) => (
                  <div key={a} className="rounded-lg border border-emerald-300/15 bg-emerald-300/[0.04] p-4">
                    <div className="font-semibold text-emerald-200">{a}</div>
                    <div className="mt-1 text-sm leading-6 text-slate-300">{b}</div>
                  </div>
                ))}
              </div>
            </ConceptCard>
          </ChapterSection>
      
      <IntegratedSourcePages start={216} end={226} />
    </PartShell>
  );
}
