"use client";

import { AtomicPartShell, AuditComment, DiagramBox, FormulaLine, MathText, NoteBlock, SourcePage } from "./_shared";
import { KmaxFrequencyGraph, PhotoelectricApparatusVisual } from "../_components/AtomicVisuals";
import { ConceptCard, DefinitionCard, FigureCaption, FormulaCard, LearningObjectives, PracticeQuestion, SummaryStrip } from "../_components/AtomicLearning";

export default function Part11() {
  return (
    <AtomicPartShell part={11} title="Photoelectric Effect and Einstein Equation" pages="33-35">
      <LearningObjectives items={["Define threshold frequency and work function.", "Apply Einstein’s photoelectric equation.", "Distinguish effects of intensity and frequency.", "Relate stopping potential to maximum kinetic energy."]} />
      <DefinitionCard term="Threshold frequency, ν₀"><p>The least frequency that can produce photoemission from a specified metal. At threshold, <MathText math="K_{\max}=0" />, so <MathText math="h\nu_0=\phi" />.</p></DefinitionCard>
      <SourcePage page={33}>
        <NoteBlock title="Photoelectric effect">
          <p>
            When light falls on certain metal surfaces, electrons are emitted from the surface. These emitted
            electrons are called photoelectrons.
          </p>
          <p>
            The effect depends on frequency of light, not only on intensity. A minimum frequency is required to eject
            electrons from a metal surface.
          </p>
          <FormulaLine math="\nu_0=\text{threshold frequency}" />
          <FormulaLine math="\phi=h\nu_0" />
          <p>
            <MathText math="\phi" /> is the work function of the metal.
          </p>
          <DiagramBox title="Photoelectric setup">
            <PhotoelectricApparatusVisual />
            <FigureCaption>Light ejects electrons from the illuminated emitter; the collector and microammeter register photocurrent. The variable potential can aid collection or oppose the emitted electrons.</FigureCaption>
          </DiagramBox>
        </NoteBlock>
      </SourcePage>

      <ConceptCard title="Read the equation as an energy budget"><p><MathText math="h\nu" /> is the photon energy. First supply the work function <MathText math="\phi" />; only the remainder can appear as <MathText math="K_{\max}" />.</p></ConceptCard>
      <FormulaCard label="Einstein relation"><FormulaLine math="h\nu=\phi+K_{\max}=\phi+\frac12mv_{\max}^2" /></FormulaCard>
      <SourcePage page={34}>
        <NoteBlock title="Einstein's photoelectric equation">
          <FormulaLine math="h\nu=\phi+K_{\max}" />
          <FormulaLine math="K_{\max}=\frac{1}{2}mv_{\max}^2" />
          <FormulaLine math="K_{\max}=h(\nu-\nu_0)" />
          <p>
            If <MathText math="\nu<\nu_0" />, emission does not occur. If <MathText math="\nu>\nu_0" />, the excess
            energy appears as kinetic energy of the emitted electron.
          </p>
          <DiagramBox title="Kinetic energy versus frequency">
            <KmaxFrequencyGraph />
            <FigureCaption><MathText math="K_{\max}=h\nu-\phi" /> has gradient <MathText math="h" />, crosses the frequency axis at <MathText math="\nu_0" />, and extrapolates to <MathText math="-\phi" /> on the energy axis. No photoemission occurs for <MathText math="\nu&lt;\nu_0" />.</FigureCaption>
          </DiagramBox>
        </NoteBlock>
        <NoteBlock title="Intensity versus frequency">
          <p>
            For a fixed frequency above the threshold, higher intensity means more emitted electrons, not higher maximum
            kinetic energy.
          </p>
          <p>For a fixed intensity, increasing frequency increases the kinetic energy of photoelectrons.</p>
        </NoteBlock>
      </SourcePage>

      <SourcePage page={35}>
        <NoteBlock title="Work function and stopping potential">
          <FormulaLine math="eV_0=K_{\max}" />
          <FormulaLine math="eV_0=h\nu-\phi" />
          <p>
            <MathText math="V_0" /> is the stopping potential required to stop the most energetic photoelectrons.
          </p>
          <FormulaLine math="\phi=\frac{hc}{\lambda_0}" />
          <p>Threshold wavelength is denoted by λ₀.</p>
        </NoteBlock>
        <NoteBlock title="Important observations">
          <ol className="list-decimal space-y-3 pl-5">
            <li>No photoelectric emission occurs if light frequency is below threshold frequency.</li>
            <li>Photoemission is instantaneous once the threshold condition is satisfied.</li>
            <li>Photoelectric current depends on intensity, while maximum kinetic energy depends on frequency.</li>
            <li>The phenomenon supports the particle nature of light.</li>
          </ol>
        </NoteBlock>
      </SourcePage>

      <PracticeQuestion prompt="At fixed frequency above threshold, what does increasing intensity change?" answer="The number of emitted electrons and photocurrent, not maximum kinetic energy." /><SummaryStrip items={["φ = hν₀.", "hν = φ + Kmax.", "eV₀ = Kmax."]} /><AuditComment pages="33-35" unclear={0} note="introductory exposition reviewed" />
    </AtomicPartShell>
  );
}
