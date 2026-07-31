"use client";

import { ChapterSection, ConceptCard, DataTable, EnergyProfilesFigure, EnzymeFigure, ExamTrap, FigureFrame, FormulaCard, IntegratedSourcePages, K, KB, PartShell, ReferenceExpansion, SurfaceFigure, WorkedExample } from "../../chemical-kinetics-shared";

export default function ChemicalKineticsPart08() {
  return (
    <PartShell part={8} title={"Mechanisms, Steady State and Catalysis"} description={"Elementary steps, RDS logic, pre-equilibrium, steady state and catalytic pathways."}>
      <ChapterSection
            id="mechanism"
            index="14"
            eyebrow="From steps to rate law"
            title="Reaction mechanisms, rate-determining steps and approximations"
            intro={<>A proposed mechanism must reproduce the overall equation, avoid impossible elementary events, generate the observed rate law after intermediates are eliminated, and agree with independent chemical evidence.</>}
          >
            <div className="grid gap-5 xl:grid-cols-3">
              <ConceptCard title="Elementary-step law" tone="cyan">
                <p>For an elementary step, the rate-law exponents equal the numbers of reacting entities in that step.</p>
                <KB>{String.raw`A+2B\xrightarrow{k}I\quad\Rightarrow\quad r=k[A][B]^2`}</KB>
              </ConceptCard>
              <ConceptCard title="Intermediate" tone="violet">
                <p>Formed in one step and consumed in a later step; absent from the net equation. It should not remain in the final rate law unless its concentration is independently controlled and measured.</p>
              </ConceptCard>
              <ConceptCard title="Catalyst" tone="amber">
                <p>Consumed in an early step and regenerated later; absent from the net equation but allowed in the rate law because its concentration can be experimentally varied.</p>
              </ConceptCard>
            </div>
            <ConceptCard title="Mechanism audit checklist" tone="emerald">
              <ol className="list-decimal space-y-2 pl-5">
                <li>Add all steps and cancel intermediates/catalysts to recover the balanced overall equation.</li>
                <li>Write the rate law of each elementary step from its molecularity.</li>
                <li>Identify whether a fast pre-equilibrium or steady-state treatment is justified.</li>
                <li>Eliminate every unmeasured intermediate.</li>
                <li>Compare the predicted law, kinetic isotope effects, product distribution and activation parameters with experiment.</li>
              </ol>
            </ConceptCard>
            <div className="grid gap-5 xl:grid-cols-2">
              <ConceptCard title="Rate-determining-step approximation" tone="rose">
                <p>If one step is much slower than every other dynamically relevant step, it may control flux. However, the slow step’s raw elementary law may contain an intermediate and must then be combined with earlier fast steps.</p>
                <ExamTrap>The overall order need not equal the molecularity of the slow step after the intermediate is eliminated.</ExamTrap>
              </ConceptCard>
              <ConceptCard title="Pre-equilibrium approximation" tone="cyan">
                <p>If an early reversible step equilibrates much faster than the subsequent product-forming step,</p>
                <KB>{String.raw`K=\frac{[I]}{[A][B]}\quad\Rightarrow\quad[I]=K[A][B]`}</KB>
                <p>Substitute this relation into the slow-step rate law.</p>
              </ConceptCard>
              <ConceptCard title="Steady-state approximation" tone="violet">
                <p>For a reactive intermediate I present at low, nearly constant concentration after a brief induction period,</p>
                <KB>{String.raw`\frac{d[I]}{dt}\approx0\quad\Rightarrow\quad \text{rate of formation}\approx\text{rate of consumption}`}</KB>
                <p>This does not imply equilibrium; the forward flux through the mechanism can be substantial.</p>
              </ConceptCard>
              <ConceptCard title="Quasi-equilibrium versus steady state" tone="amber">
                <p>Pre-equilibrium equates the forward and reverse rates of one reversible step. Steady state balances all formation and removal routes of an intermediate. They are different approximations and may predict different laws.</p>
              </ConceptCard>
            </div>
            <ConceptCard title="Chain reactions" tone="navy">
              <p>A chain mechanism contains initiation, propagation and termination. Reactive radicals or atoms are chain carriers.</p>
              <DataTable headers={["Stage", "Function", "Generic step"]} rows={[
                ["Initiation", "create carriers", <K key="chain-initiation">{String.raw`M\rightarrow2R^\bullet`}</K>],
                ["Propagation", "consume one carrier and create another", <K key="chain-propagation">{String.raw`R^\bullet+A\rightarrow P+S^\bullet`}</K>],
                ["Branching", "one carrier creates several", <K key="chain-branching">{String.raw`R^\bullet+A\rightarrow2R^\bullet+P`}</K>],
                ["Termination", "remove carriers", <K key="chain-termination">{String.raw`2R^\bullet\rightarrow R_2`}</K>],
              ]}/>
              <p>Applying steady state to the carrier often produces fractional orders, such as a square-root dependence when bimolecular termination balances first-order initiation.</p>
            </ConceptCard>
            <WorkedExample
              number={23}
              title="Fast pre-equilibrium followed by a slow step"
              concept="Eliminate an intermediate using an equilibrium relation."
              question={<>A mechanism is proposed:</>}
              solution={<>
                <KB>{String.raw`A+B\ \mathop{\rightleftharpoons}^{k_1}_{k_{-1}}\ I\quad\text{fast}`}</KB>
                <KB>{String.raw`I+B\xrightarrow{k_2}P\quad\text{slow}`}</KB>
                <p>The slow-step rate is <K>{String.raw`r=k_2[I][B]`}</K>. From the fast equilibrium,</p>
                <KB>{String.raw`K_1=\frac{k_1}{k_{-1}}=\frac{[I]}{[A][B]}\quad\Rightarrow\quad[I]=K_1[A][B]`}</KB>
                <p>Substitution gives</p>
                <KB>{String.raw`r=k_2K_1[A][B]^2=\frac{k_1k_2}{k_{-1}}[A][B]^2`}</KB>
                <p>The mechanism predicts first order in A, second order in B and overall third order, although the slow elementary step itself is only bimolecular.</p>
              </>}
              answer={<><K>{String.raw`r=(k_1k_2/k_{-1})[A][B]^2`}</K>.</>}
            />
            <WorkedExample
              number={24}
              title="Steady-state intermediate"
              concept="Derive a saturating composite rate law."
              question={<>For the mechanism <K>{String.raw`A\xrightarrow{k_1}I`}</K>, <K>{String.raw`I\xrightarrow{k_{-1}}A`}</K>, and <K>{String.raw`I+B\xrightarrow{k_2}P`}</K>, derive the product rate using steady state for I.</>}
              solution={<>
                <p>Write the intermediate balance:</p>
                <KB>{String.raw`\frac{d[I]}{dt}=k_1[A]-k_{-1}[I]-k_2[I][B]\approx0`}</KB>
                <KB>{String.raw`[I]=\frac{k_1[A]}{k_{-1}+k_2[B]}`}</KB>
                <p>Product forms in the last step:</p>
                <KB>{String.raw`r_P=k_2[I][B]=\frac{k_1k_2[A][B]}{k_{-1}+k_2[B]}`}</KB>
                <p>At low B, <K>{String.raw`r\approx(k_1k_2/k_{-1})[A][B]`}</K>. At high B, <K>{String.raw`r\approx k_1[A]`}</K>, independent of B.</p>
              </>}
              answer={<><K>{String.raw`r_P=\dfrac{k_1k_2[A][B]}{k_{-1}+k_2[B]}`}</K>; first order in B at low B and zero order in B at high B.</>}
            />
            <WorkedExample
              number={25}
              title="Square-root law from radical steady state"
              concept="Initiation balanced by bimolecular termination."
              question={<>Radicals are generated at rate <K>{String.raw`2k_i[I]`}</K>, consumed by termination <K>{String.raw`2R^\bullet\xrightarrow{k_t}`}</K>, and form product through <K>{String.raw`R^\bullet+A\xrightarrow{k_p}P`}</K>. Derive the product rate.</>}
              solution={<>
                <p>With the conventional termination event rate <K>{String.raw`k_t[R^\bullet]^2`}</K>, two radicals disappear per event:</p>
                <KB>{String.raw`\frac{d[R^\bullet]}{dt}=2k_i[I]-2k_t[R^\bullet]^2\approx0`}</KB>
                <KB>{String.raw`[R^\bullet]=\left(\frac{k_i[I]}{k_t}\right)^{1/2}`}</KB>
                <p>Therefore</p>
                <KB>{String.raw`r_P=k_p[A][R^\bullet]=k_p\left(\frac{k_i}{k_t}\right)^{1/2}[A][I]^{1/2}`}</KB>
              </>}
              answer={<>First order in A and half order in initiator I: <K>{String.raw`r_P=k_p(k_i/k_t)^{1/2}[A][I]^{1/2}`}</K>.</>}
            />
          </ChapterSection>

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
      <ReferenceExpansion sheets={[29, 30, 39]} />
      <IntegratedSourcePages start={103} end={120} />
    </PartShell>
  );
}
