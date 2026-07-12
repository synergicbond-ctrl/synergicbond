"use client";

import { AtomicPartShell, AuditComment, DiagramBox, FormulaLine, MathText, NoteBlock, SourcePage } from "./_shared";
import { KmaxFrequencyGraph, PhotocurrentPotentialGraph, PhotoelectronEnergyDistributionVisual } from "../_components/AtomicVisuals";
import { DefinitionCard, FigureCaption, ImportantNote, LearningObjectives, PracticeQuestion, SummaryStrip } from "../_components/AtomicLearning";

export default function Part12() {
  return (
    <AtomicPartShell part={12} title="Photoelectric Current and Stopping Potential" pages="36-38">
      <LearningObjectives items={["Describe photoelectron energy range.", "Relate Kmax and V₀.", "Interpret saturation current.", "Interpret retarding-potential behaviour."]} />
      <DefinitionCard term="Five quantities that must not be conflated"><p><strong>Photocurrent</strong> is charge collected per unit time. <strong>Saturation current</strong> is its limiting value when all emitted electrons are collected. A <strong>retarding potential</strong> opposes them; its stopping magnitude gives <MathText math="K_{\max}=eV_0" />.</p></DefinitionCard>
      <SourcePage page={36}>
        <NoteBlock title="Photoelectric emission">
          <ol className="list-decimal space-y-3 pl-5" start={3}>
            <li>In the simplified one-photon account, photon energy either enables immediate ejection or does not produce photoemission.</li>
            <li>For most metals, the work function is nearly half of the ionisation energy (I.E.).</li>
          </ol>
          <p>If the photon has energy equal to or greater than the work function, the electron becomes free from the influence of the nucleus and may eject out.</p>
          <DiagramBox title="Energy distribution of photoelectrons">
            <PhotoelectronEnergyDistributionVisual />
            <p>Labels: <MathText math="E=h\nu_0" />, <MathText math="E=h\nu" />, <MathText math="KE=0" />, <MathText math="KE_{max}" /> and energy levels marked <MathText math="E_0" /> and <MathText math="E" />.</p>
          </DiagramBox>
          <p>The kinetic energy of a photoelectron may have a value from 0 to <MathText math="h\nu-\phi" />.</p>
          <p>The maximum kinetic energy is:</p>
          <FormulaLine math="KE_{max}=h\nu-\phi" />
          <p>Einstein&apos;s photoelectric equation.</p>
        </NoteBlock>
      </SourcePage>
      <ImportantNote title="Graph reading">Saturation current measures how many emitted electrons are collected; stopping potential measures the most energetic electron.</ImportantNote>

      <SourcePage page={37}>
        <NoteBlock title="Maximum kinetic energy">
          <FormulaLine math="KE_{max}=h\nu-\phi" />
          <FormulaLine math="KE_{max}=eV_0" />
          <FormulaLine math="\frac{mv_{max}^{2}}{2}=h\nu-\phi" />
          <FormulaLine math="\nu_0=\frac{\phi}{h}" />
          <FormulaLine math="\lambda_0=\frac{hc}{\phi}" />
          <DiagramBox title="KE versus frequency">
            <KmaxFrequencyGraph />
            <p>Axes: <MathText math="KE_{max}" /> versus <MathText math="\nu" />. The straight-line slope is <MathText math="h" /> and the frequency-axis intercept is <MathText math="\nu_0" />.</p>
          </DiagramBox>
          <p>On the particle nature: increase in intensity represents increase in the number of photons of the same frequency. As the energy of each photon remains unchanged, <MathText math="KE_{max}" /> remains unchanged; but due to increase in photons, the number of photoelectrons and photocurrent increase.</p>
        </NoteBlock>
      </SourcePage>

      <SourcePage page={38}>
        <NoteBlock title="Saturation current and stopping potential">
          <DiagramBox title="Photoelectric-current versus collector potential">
            <PhotocurrentPotentialGraph />
            <FigureCaption>At equal intensity, the curves share a saturation current. Stronger retarding potential is left of zero; higher frequency requires a more negative stopping potential because <MathText math="K_{\max}" /> is larger.</FigureCaption>
          </DiagramBox>
          <ol className="list-decimal space-y-3 pl-5">
            <li><MathText math="V_A&lt;V_C" />: some photoelectrons reach electrode C and result in current. Such current is called photocurrent.</li>
            <li><MathText math="V_A\ll V_C" />: on increasing the potential of C, slower electrons also reach the electrode, increasing photocurrent. On further increase in positive potential, even the slowest electron reaches C. The resulting maximum photocurrent is called saturation current.</li>
            <li><MathText math="V_A&gt;V_C" />: due to low potential at C, some electrons are repelled by C and photocurrent decreases. On further decrease in potential, even the fastest electron just fails to reach C, resulting in no photocurrent. The potential of C relative to A in this state is called stopping potential <MathText math="V_0" />.</li>
          </ol>
          <p><MathText math="V_0" /> is related to maximum kinetic energy.</p>
        </NoteBlock>
      </SourcePage>
      <PracticeQuestion prompt="What does stopping potential measure?" answer="The maximum kinetic energy per unit charge of the photoelectrons." /><SummaryStrip items={["Kmax = hν − φ.", "Kmax = eV₀.", "Saturation current collects even the slowest emitted electrons."]} /><AuditComment pages="36-38" unclear={0} />
    </AtomicPartShell>
  );
}
