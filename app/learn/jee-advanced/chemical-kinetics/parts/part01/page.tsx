"use client";

import { ChapterSection, ConceptCard, ExamTrap, ExtentProgressFigure, FigureFrame, FormulaCard, IntegratedSourcePages, K, KB, PartShell, RateGeometryFigure, ReferenceExpansion, WorkedExample } from "../../chemical-kinetics-shared";

export default function ChemicalKineticsPart01() {
  return (
    <PartShell part={1} title={"Foundations, Stoichiometry and Rate"} description={"Historical development, stoichiometric numbers, extent, rate definitions and graphical rate interpretation."}>
      <ChapterSection
            id="scope"
            index="01"
            eyebrow="Foundations"
            title="Scope, language and notation"
            intro={<>Chemical kinetics connects what we observe in the laboratory with a molecular model of how a reaction proceeds. It asks how fast composition changes, how the rate responds to controllable variables, and whether a proposed sequence of elementary events reproduces the measured rate law.</>}
          >
            <div className="grid gap-5 xl:grid-cols-3">
              <ConceptCard title="What kinetics measures" tone="cyan" eyebrow="Macroscopic">
                <p>Concentration, amount, pressure, absorbance, conductance, optical rotation, gas volume or any calibrated signal may be followed as a function of time.</p>
                <p>The observable must be related unambiguously to the amount of at least one reacting species.</p>
              </ConceptCard>
              <ConceptCard title="What kinetics infers" tone="violet" eyebrow="Microscopic">
                <p>Rate data can reject mechanisms, identify a plausible rate-controlling sequence, estimate activation parameters and distinguish elementary from composite behaviour.</p>
                <p>A rate law alone rarely proves a unique mechanism; independent evidence is essential.</p>
              </ConceptCard>
              <ConceptCard title="Standard symbols" tone="amber" eyebrow="Notation">
                <p><K>{String.raw`[A]`}</K>: molar concentration; <K>{String.raw`n_A`}</K>: amount; <K>{String.raw`\nu_A`}</K>: signed stoichiometric number; <K>{String.raw`\xi`}</K>: extent; <K>{String.raw`r`}</K>: rate of reaction; <K>{String.raw`k`}</K>: rate constant.</p>
                <p>Reactant stoichiometric numbers are negative; product values are positive.</p>
              </ConceptCard>
            </div>
            <div className="grid gap-5 xl:grid-cols-2">
              <FormulaCard title="A useful hierarchy">
                <KB>{String.raw`\text{measured signal}\ \longrightarrow\ \text{composition}\ \longrightarrow\ \text{rate law}\ \longrightarrow\ \text{mechanistic test}`}</KB>
              </FormulaCard>
              <ConceptCard title="Three statements that must never be mixed" tone="rose">
                <p><strong className="text-white">Balanced equation:</strong> material bookkeeping.</p>
                <p><strong className="text-white">Rate law:</strong> experimentally determined dependence of rate on composition.</p>
                <p><strong className="text-white">Mechanism:</strong> a proposed sequence of elementary molecular events.</p>
                <ExamTrap>The exponents in an overall rate law are not copied from the balanced equation unless the equation represents a single elementary event.</ExamTrap>
              </ConceptCard>
            </div>
          </ChapterSection>

<ChapterSection
            id="stoichiometry"
            index="02"
            eyebrow="Reaction progress"
            title="Stoichiometry, extent and time dependence"
            intro={<>When one balanced equation describes the composition throughout the experiment, every species can be expressed using one progress variable, the extent of reaction. This gives a species-independent definition of rate and prevents errors caused by unequal stoichiometric coefficients.</>}
          >
            <FigureFrame title="One progress variable controls all species" caption={<>For time-independent stoichiometry, <K>{String.raw`dn_i=\nu_i\,d\xi`}</K>. The same <K>{String.raw`\xi`}</K> must be obtained from every species.</>}>
              <ExtentProgressFigure />
            </FigureFrame>
            <div className="grid gap-5 xl:grid-cols-2">
              <FormulaCard title="General stoichiometric relation" note={<>The signed convention removes the need to insert minus signs separately.</>}>
                <KB>{String.raw`aA+bB\longrightarrow yY+zZ`}</KB>
                <KB>{String.raw`\nu_A=-a,\quad \nu_B=-b,\quad \nu_Y=+y,\quad \nu_Z=+z`}</KB>
                <KB>{String.raw`n_i=n_{i,0}+\nu_i\xi\qquad\Longrightarrow\qquad \xi=\frac{n_i-n_{i,0}}{\nu_i}`}</KB>
              </FormulaCard>
              <ConceptCard title="Maximum extent and limiting reactant" tone="emerald">
                <p>For each reactant, the largest permitted extent is <K>{String.raw`n_{i,0}/|\nu_i|`}</K>. The smallest of these values fixes <K>{String.raw`\xi_{\max}`}</K>.</p>
                <KB>{String.raw`\xi_{\max}=\min_{\text{reactants}}\left(\frac{n_{i,0}}{|\nu_i|}\right)`}</KB>
                <p>Products initially present do not limit the forward extent, although they may matter in a reversible system.</p>
              </ConceptCard>
            </div>
            <div className="grid gap-5 xl:grid-cols-2">
              <ConceptCard title="Time-independent stoichiometry" tone="cyan">
                <p>A single overall equation remains valid at every sampled time. Intermediates may exist at tiny steady concentrations, but they do not accumulate enough to destroy the one-extent description.</p>
                <p>Examples include many simple decompositions and reactions monitored after the rapid establishment of a steady-state intermediate.</p>
              </ConceptCard>
              <ConceptCard title="Time-dependent stoichiometry" tone="rose">
                <p>Appreciable intermediates or changing product channels make the instantaneous composition impossible to describe by one fixed overall equation.</p>
                <p>Then a separate extent for each independent elementary reaction is required:</p>
                <KB>{String.raw`dn_i=\sum_j \nu_{ij}\,d\xi_j`}</KB>
              </ConceptCard>
            </div>
            <WorkedExample
              number={1}
              difficulty="Foundation"
              title="Extent and limiting reactant"
              concept="The original-note problem type is retained, but all quantities are new."
              question={<>For <K>{String.raw`2A+3B\rightarrow 4C`}</K>, a vessel initially contains 0.46 mol A, 0.81 mol B and 0.08 mol C. At a certain time, 0.30 mol A remains. Find the extent and the amounts of B and C. Also find the maximum possible extent.</>}
              solution={<>
                <p>From A, <K>{String.raw`n_A=n_{A,0}-2\xi`}</K>. Therefore</p>
                <KB>{String.raw`0.30=0.46-2\xi\quad\Rightarrow\quad \xi=0.080\ \mathrm{mol}`}</KB>
                <p>Apply the same extent to the other species:</p>
                <KB>{String.raw`n_B=0.81-3(0.080)=0.570\ \mathrm{mol}`}</KB>
                <KB>{String.raw`n_C=0.08+4(0.080)=0.400\ \mathrm{mol}`}</KB>
                <p>For completion, compare the possible extents supplied by A and B:</p>
                <KB>{String.raw`\xi_A=\frac{0.46}{2}=0.230,\qquad \xi_B=\frac{0.81}{3}=0.270\ \mathrm{mol}`}</KB>
                <p>A is limiting, so <K>{String.raw`\xi_{\max}=0.230\ \mathrm{mol}`}</K>.</p>
              </>}
              answer={<>At the stated time: <K>{String.raw`\xi=0.080\ \mathrm{mol}`}</K>, <K>{String.raw`n_B=0.570\ \mathrm{mol}`}</K>, <K>{String.raw`n_C=0.400\ \mathrm{mol}`}</K>; maximum extent <K>{String.raw`0.230\ \mathrm{mol}`}</K>.</>}
            />
          </ChapterSection>

<ChapterSection
            id="rate"
            index="03"
            eyebrow="Differential description"
            title="Rate of reaction: average, instantaneous and normalised"
            intro={<>A species may disappear or appear at a different numerical rate because its stoichiometric coefficient is different. Dividing each species rate by its coefficient produces one common rate of reaction.</>}
          >
            <FigureFrame title="Secant and tangent interpretations" caption={<>The slope of a secant gives an average rate over a finite interval. The tangent gives the instantaneous rate at one time. Reactant slopes are negative, so a minus sign is used for a positive rate of disappearance.</>}>
              <RateGeometryFigure />
            </FigureFrame>
            <div className="grid gap-5 xl:grid-cols-2">
              <FormulaCard title="Average rate over t₁ to t₂">
                <KB>{String.raw`r_{\mathrm{av}}=-\frac{1}{a}\frac{\Delta[A]}{\Delta t}=-\frac{1}{b}\frac{\Delta[B]}{\Delta t}=\frac{1}{y}\frac{\Delta[Y]}{\Delta t}=\frac{1}{z}\frac{\Delta[Z]}{\Delta t}`}</KB>
              </FormulaCard>
              <FormulaCard title="Instantaneous rate at constant volume">
                <KB>{String.raw`r=-\frac{1}{a}\frac{d[A]}{dt}=-\frac{1}{b}\frac{d[B]}{dt}=\frac{1}{y}\frac{d[Y]}{dt}=\frac{1}{z}\frac{d[Z]}{dt}`}</KB>
                <KB>{String.raw`r=\frac{1}{V}\frac{d\xi}{dt}`}</KB>
              </FormulaCard>
            </div>
            <div className="grid gap-5 xl:grid-cols-3">
              <ConceptCard title="Species rate" tone="amber">
                <p><K>{String.raw`-d[A]/dt`}</K> is the rate of disappearance of A. It is not automatically the overall rate of reaction.</p>
              </ConceptCard>
              <ConceptCard title="Reaction rate" tone="cyan">
                <p>The coefficient-normalised quantity is invariant to which species is measured.</p>
              </ConceptCard>
              <ConceptCard title="Units" tone="violet">
                <p>Concentration rate: <K>{String.raw`\mathrm{mol\,L^{-1}\,s^{-1}}`}</K> or <K>{String.raw`\mathrm{M\,s^{-1}}`}</K>. A pressure rate may be expressed in <K>{String.raw`\mathrm{Pa\,s^{-1}}`}</K> or <K>{String.raw`\mathrm{bar\,s^{-1}}`}</K>.</p>
              </ConceptCard>
            </div>
            <ConceptCard title="Variable-volume systems" tone="rose" eyebrow="Important correction">
              <p>Concentration changes can occur because of reaction and because the container volume changes. Since <K>{String.raw`n_i=C_iV`}</K>,</p>
              <KB>{String.raw`\frac{dn_i}{dt}=V\frac{dC_i}{dt}+C_i\frac{dV}{dt}`}</KB>
              <p>Therefore the species rate based on amount is</p>
              <KB>{String.raw`\frac{1}{V}\frac{dn_i}{dt}=\frac{dC_i}{dt}+\frac{C_i}{V}\frac{dV}{dt}`}</KB>
              <ExamTrap>Do not use <K>{String.raw`-d[A]/dt`}</K> alone as the chemical consumption rate in an expanding or contracting batch reactor.</ExamTrap>
            </ConceptCard>
            <WorkedExample
              number={2}
              difficulty="JEE Main+"
              title="Converting one species rate into all others"
              concept="Stoichiometric normalisation in differential form."
              question={<>For <K>{String.raw`2\mathrm{NO}+\mathrm{O_2}\rightarrow2\mathrm{NO_2}`}</K>, the instantaneous formation rate of NO₂ is <K>{String.raw`7.2\times10^{-5}\ \mathrm{mol\,L^{-1}\,s^{-1}}`}</K>. Find the rate of reaction and the disappearance rates of NO and O₂.</>}
              solution={<>
                <p>Use the coefficient-normalised definition:</p>
                <KB>{String.raw`r=\frac{1}{2}\frac{d[\mathrm{NO_2}]}{dt}=\frac{1}{2}(7.2\times10^{-5})=3.6\times10^{-5}\ \mathrm{M\,s^{-1}}`}</KB>
                <p>For NO, its coefficient is 2:</p>
                <KB>{String.raw`-\frac{d[\mathrm{NO}]}{dt}=2r=7.2\times10^{-5}\ \mathrm{M\,s^{-1}}`}</KB>
                <p>For O₂, its coefficient is 1:</p>
                <KB>{String.raw`-\frac{d[\mathrm{O_2}]}{dt}=r=3.6\times10^{-5}\ \mathrm{M\,s^{-1}}`}</KB>
              </>}
              answer={<>Reaction rate <K>{String.raw`3.6\times10^{-5}\ \mathrm{M\,s^{-1}}`}</K>; NO disappears at <K>{String.raw`7.2\times10^{-5}`}</K> and O₂ at <K>{String.raw`3.6\times10^{-5}\ \mathrm{M\,s^{-1}}`}</K>.</>}
            />
          </ChapterSection>
      <ReferenceExpansion sheets={[1, 2, 4]} />
      <IntegratedSourcePages start={1} end={15} />
    </PartShell>
  );
}
