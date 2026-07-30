"use client";

import { PartShell, ChapterSection, ConceptCard, EnergyProfilesFigure, EnzymeFigure, FigureFrame, FormulaCard, K, KB, SurfaceFigure, WorkedExample } from "../../chemical-kinetics-shared";

export default function ChemicalKineticsPart14() {
  return (
    <PartShell
      part={14}
      title={"Catalysis and Enzyme Kinetics"}
      description={"Homogeneous, heterogeneous and enzyme catalysis, adsorption, inhibition and Michaelis\u2013Menten kinetics."}
    >
<ChapterSection
            id="catalysis"
            index="15"
            eyebrow="Alternative pathways"
            title="Catalysis, adsorption and enzyme kinetics"
            intro={<>A catalyst participates in elementary steps and is regenerated. It changes the mechanism and therefore the kinetic pathway, but it does not alter the thermodynamic equilibrium constant at a fixed temperature.</>}
          >
            <FigureFrame title="Catalysed and uncatalysed energy paths" caption={<>The catalyst lowers the highest kinetic bottleneck through a different sequence. Both forward and reverse reactions are accelerated consistently with the same equilibrium constant.</>}>
              <EnergyProfilesFigure />
            </FigureFrame>
            <div className="grid gap-5 xl:grid-cols-2">
              <ConceptCard title="What a catalyst changes" tone="cyan">
                <p>Mechanism, rate constant, activation parameters, intermediate identities and possibly selectivity.</p>
                <p>Because A and Eₐ can both change, “a catalyst only lowers activation energy” is an incomplete description.</p>
              </ConceptCard>
              <ConceptCard title="What a catalyst does not change" tone="rose">
                <p>Standard Gibbs energy, enthalpy, equilibrium constant and final equilibrium composition at the same T and P.</p>
                <p>It cannot make a thermodynamically impossible product stable; it can only help a kinetically accessible route reach equilibrium faster.</p>
              </ConceptCard>
              <ConceptCard title="Positive, negative and autocatalysis" tone="amber">
                <p>A positive catalyst accelerates; an inhibitor retards; an autocatalytic product accelerates its own formation, often producing a sigmoidal concentration-time curve.</p>
              </ConceptCard>
              <ConceptCard title="Promoters and poisons" tone="violet">
                <p>A promoter improves catalytic activity or durability without being the principal catalyst. A poison strongly blocks active sites or alters the active phase, reducing rate.</p>
              </ConceptCard>
            </div>
            <FigureFrame title="Heterogeneous catalysis on active sites" caption={<>Adsorption raises local concentration and can weaken bonds. The overall rate may be controlled by adsorption, surface reaction, product desorption or mass transport.</>}>
              <SurfaceFigure />
            </FigureFrame>
            <ConceptCard title="Langmuir saturation and changing apparent order" tone="emerald">
              <p>For one reactant adsorbing by <K>{String.raw`\theta=KP/(1+KP)`}</K> and reacting from the surface,</p>
              <KB>{String.raw`r=k\theta=\frac{kKP}{1+KP}`}</KB>
              <p>At low pressure, <K>{String.raw`KP\ll1`}</K>, so <K>{String.raw`r\approx kKP`}</K>: first order. At high pressure, <K>{String.raw`KP\gg1`}</K>, so <K>{String.raw`r\approx k`}</K>: zero order due to site saturation.</p>
            </ConceptCard>
            <FigureFrame title="Enzyme–substrate complex and saturation curve" caption={<>At low substrate concentration the rate is approximately first order in substrate; at high concentration every active site is occupied and the rate approaches Vmax.</>}>
              <EnzymeFigure />
            </FigureFrame>
            <div className="grid gap-5 xl:grid-cols-2">
              <FormulaCard title="Michaelis–Menten mechanism">
                <KB>{String.raw`E+S\ \mathop{\rightleftharpoons}^{k_1}_{k_{-1}}\ ES\xrightarrow{k_2}E+P`}</KB>
                <KB>{String.raw`v=\frac{V_{max}[S]}{K_M+[S]}`}</KB>
                <KB>{String.raw`V_{max}=k_2[E]_T,\qquad K_M=\frac{k_{-1}+k_2}{k_1}`}</KB>
              </FormulaCard>
              <FormulaCard title="Useful limits and linear form">
                <KB>{String.raw`[S]\ll K_M:\quad v\approx\frac{V_{max}}{K_M}[S]`}</KB>
                <KB>{String.raw`[S]\gg K_M:\quad v\approx V_{max}`}</KB>
                <KB>{String.raw`\frac1v=\frac{K_M}{V_{max}}\frac1{[S]}+\frac1{V_{max}}`}</KB>
              </FormulaCard>
            </div>
            <ConceptCard title="Enzyme temperature and pH profiles" tone="amber">
              <p>Below the structural optimum, the catalytic step often speeds up with temperature. Beyond the optimum, loss of active conformation can dominate, so the observed rate falls. pH changes protonation states involved in binding or catalysis and may also affect protein structure.</p>
            </ConceptCard>
            <WorkedExample
              number={26}
              title="Rate enhancement by a catalyst"
              concept="Compare Arrhenius factors when both pathways share the same prefactor approximation."
              question={<>At 350 K, a catalyst lowers the apparent activation energy from 92 kJ mol⁻¹ to 58 kJ mol⁻¹. If the prefactors are equal, estimate <K>{String.raw`k_{cat}/k_{uncat}`}</K>.</>}
              solution={<>
                <KB>{String.raw`\frac{k_{cat}}{k_{uncat}}=\exp\left(\frac{E_{a,uncat}-E_{a,cat}}{RT}\right)`}</KB>
                <KB>{String.raw`=\exp\left(\frac{34000}{(8.314)(350)}\right)=e^{11.68}=1.18\times10^5`}</KB>
                <p>This estimate isolates the barrier effect. Real catalysts may also change A substantially.</p>
              </>}
              answer={<>Approximately <K>{String.raw`1.2\times10^5`}</K>-fold faster under the equal-prefactor assumption.</>}
            />
            <WorkedExample
              number={27}
              title="Langmuir surface kinetics"
              concept="Identify low- and high-pressure limits."
              question={<>A surface reaction obeys <K>{String.raw`r=kKP/(1+KP)`}</K>, with <K>{String.raw`k=0.080\ \mathrm{mol\,m^{-2}\,s^{-1}}`}</K> and <K>{String.raw`K=2.5\ \mathrm{bar^{-1}}`}</K>. Find r at P = 0.10 bar and 8.0 bar, and state the apparent order in each limit.</>}
              solution={<>
                <p>At 0.10 bar, <K>{String.raw`KP=0.25`}</K>:</p>
                <KB>{String.raw`r=0.080\frac{0.25}{1.25}=0.0160\ \mathrm{mol\,m^{-2}\,s^{-1}}`}</KB>
                <p>At 8.0 bar, <K>{String.raw`KP=20`}</K>:</p>
                <KB>{String.raw`r=0.080\frac{20}{21}=0.0762\ \mathrm{mol\,m^{-2}\,s^{-1}}`}</KB>
                <p>The low-pressure limit is first order in P; the high-pressure limit tends to zero order.</p>
              </>}
              answer={<>0.0160 and 0.0762 mol m⁻² s⁻¹; first order at low P, zero order at high P.</>}
            />
            <WorkedExample
              number={28}
              title="Michaelis–Menten parameters"
              concept="Use one half-saturation point and Vmax."
              question={<>An enzyme has <K>{String.raw`V_{max}=3.60\times10^{-5}\ \mathrm{M\,s^{-1}}`}</K>. At [S] = 2.0 mM, the rate is <K>{String.raw`1.20\times10^{-5}\ \mathrm{M\,s^{-1}}`}</K>. Find Kₘ and the rate at [S] = 8.0 mM.</>}
              solution={<>
                <p>From <K>{String.raw`v/V_{max}=1/3`}</K>:</p>
                <KB>{String.raw`\frac13=\frac{2.0}{K_M+2.0}\quad\Rightarrow\quad K_M=4.0\ \mathrm{mM}`}</KB>
                <p>At 8.0 mM:</p>
                <KB>{String.raw`v=(3.60\times10^{-5})\frac{8.0}{4.0+8.0}=2.40\times10^{-5}\ \mathrm{M\,s^{-1}}`}</KB>
              </>}
              answer={<>Kₘ = 4.0 mM; <K>{String.raw`v=2.40\times10^{-5}\ \mathrm{M\,s^{-1}}`}</K> at 8.0 mM.</>}
            />
          </ChapterSection>
    </PartShell>
  );
}
