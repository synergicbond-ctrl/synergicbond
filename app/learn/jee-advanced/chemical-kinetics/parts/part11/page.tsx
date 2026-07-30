"use client";

import { PartShell, ArrheniusFigure, ChapterSection, ConceptCard, FigureFrame, FormulaCard, K, KB, MaxwellFigure, TemperatureResponseFigure, WorkedExample } from "../../chemical-kinetics-shared";

export default function ChemicalKineticsPart11() {
  return (
    <PartShell
      part={11}
      title={"Temperature and Arrhenius Kinetics"}
      description={"Arrhenius equation, activation energy, two-temperature relations and non-Arrhenius behaviour."}
    >
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
    </PartShell>
  );
}
