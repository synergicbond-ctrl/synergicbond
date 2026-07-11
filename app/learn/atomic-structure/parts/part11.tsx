"use client";

import { AtomicPartShell, AuditComment, DiagramBox, FormulaLine, MathText, NoteBlock, SourcePage } from "./_shared";
import { KmaxFrequencyGraph, PhotoelectricApparatusVisual } from "../_components/AtomicVisuals";

export default function Part11() {
  return (
    <AtomicPartShell part={11} title="Photoelectric Effect and Einstein Equation" pages="33-35">
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
            <p>Light source, metal surface, emitted electrons, current meter, variable voltage source, anode and cathode.</p>
            <p>Arrows show ejection of photoelectrons from the illuminated metal plate.</p>
          </DiagramBox>
        </NoteBlock>
      </SourcePage>

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
            <p>Graph is a straight line starting at threshold frequency ν₀ on the frequency axis.</p>
            <p>Labels: Kmax, ν, ν₀, slope = h, intercept on ν-axis = threshold frequency.</p>
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

      <AuditComment pages="33-35" unclear={0} note="printed introductory exposition condensed" />
    </AtomicPartShell>
  );
}
