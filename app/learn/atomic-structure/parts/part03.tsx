
import { AtomicPartShell, AuditComment, BulletList, DiagramBox, FormulaLine, MathText, NoteBlock, SourcePage } from "./_shared";
import { LearningObjectives, PracticeQuestion, SummaryStrip } from "../_components/AtomicLearning";
import { AnodeRayTubeVisual } from "../_components/AtomicVisuals";

export default function Part03() {
  return (
    <AtomicPartShell part={3} title="Discovery of Proton" pages="7-9">
      <LearningObjectives items={["Recognise the scope and limitation of classical electron-radius expressions.", "Describe the anode-ray experiment and canal rays.", "Explain why hydrogen positive ions are identified as protons.", "Compare the charge-to-mass behaviour of anode and cathode rays."]} />
      <SourcePage page={7}>
        <NoteBlock title="Classical electron-radius relations">
          <p>
            Useful classical-model formulas include{" "}
            <MathText math="W=\frac{3e^2}{5r_o}" />, <MathText math="W=\frac{e^2}{r_o}" />, and{" "}
            <MathText math="r_o=\frac{e^2}{m_oc^2}\approx3\times10^{-13}\ \mathrm{cm}" />.
          </p>
          <p>These relations are classical-model expressions for electrostatic self-energy and radius.</p>
        </NoteBlock>
      </SourcePage>

      <SourcePage page={8}>
        <NoteBlock title="Discovery of Proton">
          <h3 className="text-lg font-black text-fuchsia-300">Anode ray experiment</h3>
          <DiagramBox title="Anode ray experiment">
            <AnodeRayTubeVisual />
          </DiagramBox>
        </NoteBlock>
      </SourcePage>

      <SourcePage page={9}>
        <NoteBlock title="Anode rays and proton">
          <p>Goldstein observed positive (canal) rays. The hydrogen nucleus, H<sup>+</sup>, is the proton.</p>
          <p>Rutherford established that the proton is a constituent of atomic nuclei through artificial transmutation experiments.</p>
          <h3 className="font-black text-fuchsia-300">Properties-</h3>
          <BulletList
            items={[
              "They travel in straight line but do not come out from the surface of anode.",
              "They are stream of positively charge particle.",
              "The particle of anode ray are much heavier than particle of cathode ray.",
              <>
                Their <MathText math="\frac{e}{m}" /> depend on nature of gas.
              </>,
            ]}
          />
          <div className="space-y-1">
            <p>H → H<sup>+</sup> + e<sup>-</sup></p>
            <p>He → He<sup>+</sup> + e<sup>-</sup></p>
            <p>O<sub>2</sub> → O<sub>2</sub><sup>+</sup> + e<sup>-</sup></p>
          </div>
          <p>Positive rays or canal rays.</p>
          <p>H<sup>+</sup> = proton</p>
          <FormulaLine math="m_p=1.67\times10^{-27}\ \mathrm{kg}" />
          <FormulaLine math="\mathrm{charge}=1.6\times10^{-19}\ \mathrm{C}=1\ \mathrm{unit}\ (\mathrm{ref})" />
          <FormulaLine math="\frac{e}{m}=9.58\times10^7\ \mathrm{C/kg}" />
        </NoteBlock>
      </SourcePage>
      <PracticeQuestion prompt={<>Why does the fact that anode-ray <MathText math="e/m" /> varies with the gas distinguish these rays from cathode rays?</>} answer="The positive particles are ions of the gas, so their masses—and hence e/m values—vary with gas identity." />
      <SummaryStrip items={["Classical self-energy formulas are model expressions, not a complete quantum description.", "Goldstein’s canal rays are streams of positive particles moving opposite to cathode rays.", "The hydrogen nucleus H⁺ is the proton; mₚ = 1.67 × 10⁻²⁷ kg and e/m = 9.58 × 10⁷ C kg⁻¹."]} />
      <AuditComment pages="7-9" unclear={0} note="supplementary insert reviewed" />
    </AtomicPartShell>
  );
}