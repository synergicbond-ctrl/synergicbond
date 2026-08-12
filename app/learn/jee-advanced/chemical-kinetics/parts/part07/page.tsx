"use client";

import { ArrheniusFigure, ChapterSection, ConceptCard, EnergyProfilesFigure, ExamTrap, FigureFrame, FormulaCard, IntegratedSourcePages, K, KB, MaxwellFigure, OrientationFigure, PartShell, ReferenceExpansion, TemperatureResponseFigure, WorkedExample } from "../../chemical-kinetics-shared";

export default function ChemicalKineticsPart07() {
  return (
    <PartShell part={7} title={"Collision Theory, Arrhenius and Transition State"} description={"Collision frequency, energetic and steric factors, Arrhenius analysis and activated-complex theory."}>
      <ChapterSection
            id="temperature"
            index="12"
            eyebrow="Energy dependence"
            title="Temperature dependence and the Arrhenius equation"
            intro={<>Raising temperature changes the molecular energy distribution and usually increases the fraction of encounters able to cross the activation barrier. The Arrhenius equation packages this behaviour into an activation energy and a pre-exponential factor.</>}
          >
            <FigureFrame title="Energy distributions at two temperatures" caption={<>The total area under each curve is the same. At higher temperature, the curve broadens and the area beyond Eₐ becomes larger.</>}>
              <MaxwellFigure />
            </FigureFrame>
            <div className="grid gap-5 xl:grid-cols-2">
              <FormulaCard title="Arrhenius equation">
                <KB>{String.raw`k=Ae^{-E_a/(RT)}`}</KB>
                <KB>{String.raw`\ln k=\ln A-\frac{E_a}{RT}`}</KB>
                <KB>{String.raw`\log k=\log A-\frac{E_a}{2.303RT}`}</KB>
              </FormulaCard>
              <FormulaCard title="Two-temperature relation">
                <KB>{String.raw`\ln\frac{k_2}{k_1}=\frac{E_a}{R}\left(\frac1{T_1}-\frac1{T_2}\right)`}</KB>
                <KB>{String.raw`\log\frac{k_2}{k_1}=\frac{E_a}{2.303R}\left(\frac1{T_1}-\frac1{T_2}\right)`}</KB>
              </FormulaCard>
            </div>
            <FigureFrame title="Linear Arrhenius plot" caption={<>A straight line over a limited temperature interval supports approximately constant Eₐ and A. Curvature can signal changing mechanism, tunnelling, non-Arrhenius dynamics or temperature-dependent activation parameters.</>}>
              <ArrheniusFigure />
            </FigureFrame>
            <div className="grid gap-5 xl:grid-cols-3">
              <ConceptCard title="Activation energy Eₐ" tone="amber">
                <p>The Arrhenius activation energy is the negative slope parameter <K>{String.raw`-R\,d\ln k/d(1/T)`}</K>. It need not equal a simple potential-energy barrier in a complex mechanism.</p>
              </ConceptCard>
              <ConceptCard title="Pre-exponential factor A" tone="cyan">
                <p>A collects collision frequency, orientation, dynamical transmission and entropy-related effects. It can change when a catalyst changes the mechanism.</p>
              </ConceptCard>
              <ConceptCard title="Temperature coefficient" tone="violet">
                <p><K>{String.raw`\gamma=k_{T+10}/k_T`}</K> is an empirical ratio. It is not universally 2 and generally changes with temperature.</p>
              </ConceptCard>
            </div>
            <FigureFrame title="Qualitative rate–temperature responses" caption={<>Ordinary reactions often show smooth Arrhenius growth. Exothermic systems can undergo thermal runaway. Enzyme rates reach an optimum and then fall as active structure is disrupted.</>}>
              <TemperatureResponseFigure />
            </FigureFrame>
            <ConceptCard title="Negative apparent activation energy" tone="rose">
              <p>A negative observed Eₐ does not mean molecules accelerate by losing thermal energy. It usually arises from a composite mechanism in which increasing temperature shifts a pre-equilibrium away from the reactive intermediate or weakens an association needed for reaction.</p>
              <p>For a pre-equilibrium constant K followed by rate constant k₂, <K>{String.raw`k_{obs}=Kk_2`}</K>; the apparent activation energy combines the activation energy of k₂ with the enthalpy of the equilibrium.</p>
            </ConceptCard>
            <WorkedExample
              number={18}
              title="Activation energy from two rate constants"
              concept="Use kelvin and maintain the sign of the reciprocal-temperature difference."
              question={<>A rate constant rises from <K>{String.raw`2.60\times10^{-4}\ \mathrm{s^{-1}}`}</K> at 298 K to <K>{String.raw`1.92\times10^{-3}\ \mathrm{s^{-1}}`}</K> at 328 K. Calculate Eₐ.</>}
              solution={<>
                <KB>{String.raw`\ln\frac{k_2}{k_1}=\ln\frac{1.92\times10^{-3}}{2.60\times10^{-4}}=1.999`}</KB>
                <KB>{String.raw`\frac1{298}-\frac1{328}=3.069\times10^{-4}\ \mathrm{K^{-1}}`}</KB>
                <KB>{String.raw`E_a=\frac{(8.314)(1.999)}{3.069\times10^{-4}}=5.42\times10^4\ \mathrm{J\,mol^{-1}}`}</KB>
              </>}
              answer={<><K>{String.raw`E_a=54.2\ \mathrm{kJ\,mol^{-1}}`}</K>.</>}
            />
            <WorkedExample
              number={19}
              title="Rate constant from an Arrhenius plot"
              concept="Extract slope and intercept correctly."
              question={<>A straight-line fit gives <K>{String.raw`\ln k=28.40-7350/T`}</K>, with T in kelvin. Find A, Eₐ and k at 350 K.</>}
              solution={<>
                <p>Comparing with <K>{String.raw`\ln k=\ln A-E_a/(RT)`}</K>:</p>
                <KB>{String.raw`\ln A=28.40\quad\Rightarrow\quad A=e^{28.40}=2.15\times10^{12}\ \mathrm{s^{-1}}`}</KB>
                <KB>{String.raw`\frac{E_a}{R}=7350\quad\Rightarrow\quad E_a=(7350)(8.314)=61.1\ \mathrm{kJ\,mol^{-1}}`}</KB>
                <KB>{String.raw`\ln k_{350}=28.40-\frac{7350}{350}=7.400`}</KB>
                <KB>{String.raw`k_{350}=e^{7.400}=1.64\times10^3\ \mathrm{s^{-1}}`}</KB>
              </>}
              answer={<>A = <K>{String.raw`2.15\times10^{12}\ \mathrm{s^{-1}}`}</K>, Eₐ = 61.1 kJ mol⁻¹, and <K>{String.raw`k_{350}=1.64\times10^3\ \mathrm{s^{-1}}`}</K>.</>}
            />
            <WorkedExample
              number={20}
              difficulty="JEE Main+"
              title="Temperature coefficient is not a constant of nature"
              concept="Compute γ directly from Arrhenius kinetics."
              question={<>For Eₐ = 75.0 kJ mol⁻¹, calculate <K>{String.raw`k_{310}/k_{300}`}</K>.</>}
              solution={<>
                <KB>{String.raw`\ln\frac{k_{310}}{k_{300}}=\frac{75000}{8.314}\left(\frac1{300}-\frac1{310}\right)=0.970`}</KB>
                <KB>{String.raw`\frac{k_{310}}{k_{300}}=e^{0.970}=2.64`}</KB>
              </>}
              answer={<>The 10 K coefficient near 300 K is 2.64, not automatically 2.</>}
            />
          </ChapterSection>

<ChapterSection
            id="collision"
            index="13"
            eyebrow="Molecular interpretation"
            title="Collision theory and transition-state theory"
            intro={<>Molecular theories explain why only a fraction of encounters produce reaction. Sufficient energy is necessary but not sufficient: the approach geometry, internal energy flow and probability of crossing the dividing surface also matter.</>}
          >
            <div className="grid gap-5 xl:grid-cols-2">
              <ConceptCard title="Threshold and activation energies" tone="amber">
                <p>The threshold energy is a simplified collision-model picture of the minimum total energy of an encounter that can access products. Activation energy is inferred from the temperature dependence of the rate constant.</p>
                <p>In an elementary bimolecular reaction, a useful qualitative relation is:</p>
                <KB>{String.raw`E_a\approx E_{threshold}-\langle E_{reactants}\rangle`}</KB>
                <ExamTrap>Activation energy is not “the energy stored in every reacting molecule.” It is a kinetic parameter for the ensemble and mechanism under study.</ExamTrap>
              </ConceptCard>
              <ConceptCard title="Collision-theory form" tone="cyan">
                <p>For a gas-phase bimolecular event,</p>
                <KB>{String.raw`k=PZ_{AB}e^{-E_a/(RT)}`}</KB>
                <p><K>{String.raw`Z_{AB}`}</K> represents collision frequency and P is a steric or probability factor. Their product corresponds to the Arrhenius prefactor in the simplest model.</p>
              </ConceptCard>
            </div>
            <FigureFrame title="Orientation determines whether an energetic collision is useful" caption={<>Two encounters with the same translational energy can differ in outcome because the reactive sites must approach in a suitable geometry.</>}>
              <OrientationFigure />
            </FigureFrame>
            <FigureFrame title="Potential-energy profiles" caption={<>A catalyst replaces one pathway by another. A multistep path has one transition-state region per elementary step and a local minimum for each intermediate.</>}>
              <EnergyProfilesFigure />
            </FigureFrame>
            <div className="grid gap-5 xl:grid-cols-2">
              <FormulaCard title="Transition-state equation">
                <KB>{String.raw`k=\kappa\frac{k_BT}{h}K^{\ddagger}`}</KB>
                <KB>{String.raw`k=\kappa\frac{k_BT}{h}\exp\left(\frac{\Delta S^{\ddagger}}{R}\right)\exp\left(-\frac{\Delta H^{\ddagger}}{RT}\right)`}</KB>
              </FormulaCard>
              <FormulaCard title="Relation to Arrhenius parameters">
                <KB>{String.raw`E_a=\Delta H^{\ddagger}+RT`}</KB>
                <KB>{String.raw`A\approx e\,\kappa\frac{k_BT}{h}\exp\left(\frac{\Delta S^{\ddagger}}R\right)`}</KB>
                <p className="text-center text-sm text-[var(--text-muted)]">For a simple elementary reaction over a limited temperature range.</p>
              </FormulaCard>
            </div>
            <ConceptCard title="Transition state versus intermediate" tone="violet">
              <p>A transition state is the high-energy dividing region at a saddle point along a reaction coordinate; it cannot be accumulated or isolated as an ordinary chemical species. An intermediate corresponds to a local potential-energy minimum and can have a finite lifetime.</p>
              <p>The older expression “activated complex” is useful pedagogically, but it should not be imagined as a stable molecule sitting at the top of the barrier.</p>
            </ConceptCard>
            <WorkedExample
              number={21}
              title="Steric factor from experiment"
              concept="Compare observed k with collision-theory prediction."
              question={<>At 500 K, a collision model predicts <K>{String.raw`Z_{AB}e^{-E_a/(RT)}=4.0\times10^7\ \mathrm{L\,mol^{-1}\,s^{-1}}`}</K>, but the measured bimolecular rate constant is <K>{String.raw`1.6\times10^5\ \mathrm{L\,mol^{-1}\,s^{-1}}`}</K>. Find P.</>}
              solution={<>
                <KB>{String.raw`P=\frac{k_{exp}}{Z_{AB}e^{-E_a/(RT)}}=\frac{1.6\times10^5}{4.0\times10^7}=4.0\times10^{-3}`}</KB>
                <p>Only about 0.40% of collisions already energetic enough are productive within this simple model.</p>
              </>}
              answer={<><K>{String.raw`P=4.0\times10^{-3}`}</K>.</>}
            />
            <WorkedExample
              number={22}
              title="Activation entropy from the Eyring equation"
              concept="Use transition-state theory to interpret a small rate constant."
              question={<>At 298 K, an elementary first-order process has <K>{String.raw`k=2.50\times10^{-3}\ \mathrm{s^{-1}}`}</K> and <K>{String.raw`\Delta H^{\ddagger}=65.0\ \mathrm{kJ\,mol^{-1}}`}</K>. Taking <K>{String.raw`\kappa=1`}</K>, estimate <K>{String.raw`\Delta S^{\ddagger}`}</K>.</>}
              solution={<>
                <p>Rearrange the Eyring equation:</p>
                <KB>{String.raw`\Delta S^{\ddagger}=R\ln\left(\frac{kh}{k_BT}\right)+\frac{\Delta H^{\ddagger}}T`}</KB>
                <p>At 298 K, <K>{String.raw`k_BT/h=6.21\times10^{12}\ \mathrm{s^{-1}}`}</K>.</p>
                <KB>{String.raw`R\ln\left(\frac{2.50\times10^{-3}}{6.21\times10^{12}}\right)=(8.314)\ln(4.03\times10^{-16})=-294.9\ \mathrm{J\,mol^{-1}\,K^{-1}}`}</KB>
                <KB>{String.raw`\frac{65000}{298}=218.1\ \mathrm{J\,mol^{-1}\,K^{-1}}`}</KB>
                <KB>{String.raw`\Delta S^{\ddagger}=-76.8\ \mathrm{J\,mol^{-1}\,K^{-1}}`}</KB>
              </>}
              answer={<><K>{String.raw`\Delta S^{\ddagger}\approx-76.8\ \mathrm{J\,mol^{-1}\,K^{-1}}`}</K>.</>}
            />
          </ChapterSection>
      <ReferenceExpansion sheets={[33, 35, 37]} />
      <IntegratedSourcePages start={90} end={102} />
    </PartShell>
  );
}
