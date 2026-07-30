"use client";

import { PartShell, ChapterSection, ConceptCard, EnergyProfilesFigure, ExamTrap, FigureFrame, FormulaCard, K, KB, OrientationFigure, WorkedExample } from "../../chemical-kinetics-shared";

export default function ChemicalKineticsPart12() {
  return (
    <PartShell
      part={12}
      title={"Collision and Transition-State Theories"}
      description={"Collision frequency, energy and orientation factors, activated complexes and Eyring treatment."}
    >
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
                <p className="text-center text-sm text-slate-400">For a simple elementary reaction over a limited temperature range.</p>
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
    </PartShell>
  );
}
