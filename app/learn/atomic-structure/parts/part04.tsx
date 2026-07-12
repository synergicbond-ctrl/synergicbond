"use client";

import { AtomicPartShell, AuditComment, DiagramBox, FormulaLine, MathText, NoteBlock, SourcePage } from "./_shared";
import { LearningObjectives, ImportantNote, PracticeQuestion, SummaryStrip } from "../_components/AtomicLearning";
import { GoldFoilVisual, RutherfordAtomVisual, ThomsonModelVisual } from "../_components/AtomicVisuals";

export default function Part04() {
  return (
    <AtomicPartShell part={4} title="Neutron Discovery and Rutherford Scattering" pages="10-12">
      <LearningObjectives items={["Write the beryllium transmutation reaction used in neutron discovery.", "Contrast Thomson’s historical model with Rutherford’s nuclear model.", "Connect each gold-foil observation to its conclusion.", "Use the angular dependence in Rutherford scattering."]} />
      <SourcePage page={10}>
        <NoteBlock title="Discovery of Neutron">
          <p>
            When atom of <MathText math="{}^{9}_{4}\mathrm{Be}" /> was bombarded by α-particle, some particles having no
            charge but mass slightly greater than mass of proton were observed.
          </p>
          <p>With the help of transmutation, neutron is also a fundamental particle.</p>
          <FormulaLine math="{}^{9}_{4}\mathrm{Be}+{}^{4}_{2}\mathrm{He}\longrightarrow{}^{12}_{6}\mathrm{C}+{}^{1}_{0}\mathrm{n}" />
          <p>charge = 0</p>
          <FormulaLine math="\mathrm{mass}=1.675\times10^{-27}\ \mathrm{kg}=1.00867\ \mathrm{u}" />
          <FormulaLine math="\frac{e}{m}=0" />
        </NoteBlock>
        <NoteBlock title="Atomic Model">
          <ol className="list-decimal space-y-2 pl-5">
            <li>Thomson atomic model</li>
            <li>Rutherford atomic model</li>
            <li>Bohr&apos;s atomic model</li>
          </ol>
        </NoteBlock>
        <NoteBlock title="Thomson atomic model">
          <p>
            Atoms are spherical system, in which positively charged particles are uniformly distributed and negatively
            charge particles are embedded in them.
          </p>
          <DiagramBox title="Thomson atomic model">
            <ThomsonModelVisual />
          </DiagramBox>
        </NoteBlock>
      </SourcePage>

      <SourcePage page={11}>
        <NoteBlock title="Lenard&apos;s Suggestion">
          <p>
            When a beam of β-particles was projected on very thin gold foil, most of β-particles passed the foil without
            any deviation.
          </p>
          <p>It is only when most of the part inside the atom is empty.</p>
        </NoteBlock>
        <NoteBlock title="Rutherford α-ray scattering Experiment and atomic model">
          <DiagramBox title="Rutherford gold foil experiment">
            <GoldFoilVisual />
            <div className="grid gap-3 text-sm text-white/75 sm:grid-cols-2">
              <div>
                <p className="font-bold text-white">Visible labels</p>
                <p>Rutherford&apos;s Gold Foil Experiment</p>
                <p>Radioactive Source; Beam of α particles; Detector; Gold Foil</p>
              </div>
              <div>
                <p className="font-bold text-white">Observation / Interpretation</p>
                <p>Most α particles travel through the foil undeflected → The atom is mostly empty space.</p>
                <p>Some α particles are deflected by small angles → The nucleus is positively charged, as is the α particle.</p>
                <p>Occasionally, an α particle travels back from the foil → The nucleus carries most of the atom&apos;s mass.</p>
              </div>
            </div>
          </DiagramBox>
          <DiagramBox title="Rutherford atom sketch">
            <RutherfordAtomVisual />
          </DiagramBox>
        </NoteBlock>
      </SourcePage>

      <SourcePage page={12}>
        <NoteBlock title="Observations and conclusions">
          <ol className="list-decimal space-y-3 pl-5">
            <li>
              Most of the α-particles passed the gold foil without any deviation; hence most of the part of an atom must
              be empty.
            </li>
            <li>Almost about one in 20000 are return back.</li>
            <li>No. of α-particle deviated from their path at certain angles -</li>
          </ol>
          <FormulaLine math="N(\theta)=\frac{N_i n L Z^2 K^2 e^4}{4r^2(KE)^2\sin^4(\theta/2)}" />
          <div className="space-y-1">
            <p>N<sub>i</sub> = number of incident alpha particles</p>
            <p>n = atom per unit volume in target</p>
            <p>L = thickness of target</p>
            <p>e = electron charge</p>
            <p>K = Coulomb&apos;s constant</p>
            <p>r = target to detector distance</p>
            <p>KE = Kinetic Energy</p>
            <p>θ = scattering angle</p>
          </div>
          <FormulaLine math="N(\theta)\propto\frac{1}{\sin^4(\theta/2)}" />
          <FormulaLine math="\frac{N_1}{N_2}=\frac{\sin^4(\theta_2/2)}{\sin^4(\theta_1/2)}" />
          <p>No. of α-particles scattered by a gold foil by Geiger and Marsden&apos;s experiments :-</p>
        </NoteBlock>
      </SourcePage>
      <ImportantNote title="Historical framing">The Rutherford scattering relation describes Coulomb scattering by nuclei; the atom’s electronic structure requires later quantum models.</ImportantNote>
      <PracticeQuestion prompt={<>If the scattering angle increases, what happens to the count predicted by <MathText math="N(\theta)\propto1/\sin^4(\theta/2)" />?</>} answer="It decreases sharply, because sin(θ/2) increases as θ increases from small angles." />
      <SummaryStrip items={["Chadwick’s neutron is neutral: mₙ = 1.675 × 10⁻²⁷ kg = 1.00867 u.", "Most α particles pass through foil: the atom is largely empty space; rare backscattering reveals a compact massive nucleus.", "Rutherford scattering count varies as 1/sin⁴(θ/2)."]} />
      <AuditComment pages="10-12" unclear={0} />
    </AtomicPartShell>
  );
}
