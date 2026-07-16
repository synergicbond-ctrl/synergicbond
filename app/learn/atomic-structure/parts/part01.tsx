
import { AtomicPartShell, AuditComment, BulletList, DiagramBox, FormulaLine, MathText, NoteBlock, SourcePage } from "./_shared";
import { LearningObjectives, PracticeQuestion, SummaryStrip } from "../_components/AtomicLearning";
import { CathodeRayTubeVisual } from "../_components/AtomicVisuals";

export default function Part01() {
  return (
    <AtomicPartShell part={1} title="Dalton Theory and Cathode Rays" pages="1-3">
      <LearningObjectives items={["State Dalton’s atomic theory and its chemical-reaction implication.", "Describe how a low-pressure discharge tube produces cathode rays.", "List observations that identify cathode rays as electrons.", "Interpret Thomson’s specific-charge result with its unit."]} />
      <SourcePage page={1}>
        <NoteBlock title="Atomic Structure">
          <h3 className="text-xl font-black text-amber-300">Dalton&apos;s Atomic Theory</h3>
          <ol className="list-decimal space-y-3 pl-5">
            <li>In Dalton&apos;s model, atoms were treated as the smallest particles of a substance and as indestructible.</li>
            <li>In ordinary chemical reactions, atoms are not created or destroyed; they are rearranged.</li>
            <li>Dalton pictured atoms as hard, dense particles.</li>
            <li>
              Atoms of a given element were considered identical in all respects, whereas atoms of different elements were considered different.
            </li>
            <li>Compounds form when atoms of different elements combine in a fixed ratio by mass.</li>
          </ol>
        </NoteBlock>
      </SourcePage>

      <SourcePage page={2}>
        <NoteBlock title="Discovery of electron - Cathode ray">
          <p className="text-emerald-300">Cathode Ray Tube or Discharge tube experiment</p>
          <DiagramBox title="Cathode ray tube or discharge tube experiment">
            <CathodeRayTubeVisual />
          </DiagramBox>
          <p>Gases are poor/bad conductor of electricity.</p>
          <p>
            Their conductance may be <span className="text-emerald-300">increased</span> by decreasing the pressure and
            increasing potential difference between electrode/plate.
          </p>
          <p>Potential applied depends:</p>
          <ol className="list-decimal space-y-1 pl-5">
            <li>Distance between plate</li>
            <li>Nature of metal plate</li>
            <li>Nature of gas</li>
            <li>Pressure</li>
          </ol>
          <div className="space-y-1">
            <p>H → H<sup>+</sup> + e<sup>-</sup></p>
            <p>He → He<sup>+</sup> + e<sup>-</sup></p>
            <p>O → O<sup>+</sup> + e<sup>-</sup></p>
          </div>
          <p className="font-semibold text-sky-300">Properties of cathode rays -</p>
        </NoteBlock>
      </SourcePage>

      <SourcePage page={3}>
        <NoteBlock title="Properties of cathode rays">
          <BulletList
            items={[
              "The properties of cathode rays are independent of the nature of the gas.",
              <>
                They travel in straight line <MathText math="\perp" /> to surface of the cathode.
              </>,
              "They possess momentum and K.E. by virtue of which they can cause a mechanical motion in small paddle wheel placed in their path of travelling.",
              "They can produce ionisation in gases.",
              "They can affect photographic plate.",
              "They can produce fluorescence.",
              "They can produce x-rays on striking matter. Generally they are allowed to impinge on a metallic target called anticathode and x-rays are emitted.",
            ]}
          />
        </NoteBlock>
        <NoteBlock title="J. J. Thomson specific charge">
          <p>
            J. J. Thomson calculated <MathText math="\frac{e}{m}" /> (specific charge) for cathode rays. It is found that{" "}
            <MathText math="\frac{e}{m}" /> ratio is constant for all the combinations of gas and electrode.
          </p>
          <p>
            He concluded that it is possible only when cathode rays are made up of only one kind of particle and that
            particle must be present in all atoms. He gave the name electron to these particle.
          </p>
          <FormulaLine math="\frac{e}{m}=1.758\times 10^{11}\ \mathrm{C/kg}" />
        </NoteBlock>
      </SourcePage>
      <PracticeQuestion prompt="Why does the constant value of e/m for every gas–electrode combination support the conclusion that cathode rays contain a universal particle?" answer="A constant ratio shows the rays are made of the same kind of particle, present in all atoms: the electron." />
      <SummaryStrip items={["Dalton treated atoms as hard, dense and indestructible; chemical reactions rearrange atoms.", "Reduced gas pressure and a high potential difference enable discharge through a gas.", "Thomson found |e/m| = 1.758 × 10¹¹ C kg⁻¹ for cathode-ray particles."]} />
      <AuditComment pages="1-3" unclear={0} />
    </AtomicPartShell>
  );
}