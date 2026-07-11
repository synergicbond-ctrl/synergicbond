"use client";

import { AtomicPartShell, AuditComment, DiagramBox, FormulaLine, MathText, NoteBlock, SourcePage } from "./_shared";
import { StandingWaveOrbitVisual } from "../_components/AtomicVisuals";

export default function Part26() {
  return (
    <AtomicPartShell part={26} title="Standing Electron Waves and Uncertainty Principle" pages="81-83">
      <SourcePage page={81}>
        <NoteBlock title="Problem — frequency from kinetic energy">
          <p>
            Problem: KE of a subatomic particle is <MathText math="6.626\times10^{-19}" /> J. Calculate frequency.
          </p>
          <FormulaLine math="\lambda=\frac{h}{mv}\qquad\nu=\frac{v}{\lambda}" />
          <FormulaLine math="KE=\frac{1}{2}mv^{2}=\frac{1}{2}(mv)v=\frac{1}{2}\frac{h}{\lambda}v=\frac{1}{2}h\nu\qquad(E=h\nu\ \text{not applicable})" />
          <FormulaLine math="6.626\times10^{-19}=\frac{1}{2}\times6.626\times10^{-34}\times\nu" />
          <FormulaLine math="\nu=2\times10^{15}\ \text{Hz}" />
        </NoteBlock>
        <NoteBlock title="Davisson–Germer and dual behaviour">
          <p>
            Davisson and Germer experimentally proved the wave nature of e&#8315;. They found that cathode rays also produce a
            diffraction pattern from solids similar to that of X-rays.
          </p>
          <p>
            The dual behaviour means that exact behaviour is not known. Some of the properties will be explained by wave nature
            while some by particle nature.
          </p>
        </NoteBlock>
        <NoteBlock title="de Broglie standing electron wave">
          <p>de-Broglie considered the e&#8315; wave as standing wave.</p>
          <DiagramBox title="Standing waves on orbits (n = 2, n = 3)">
            <StandingWaveOrbitVisual />
            <p>Concentric circular orbits with dashed standing-wave loops drawn around them, labelled n = 2 and n = 3.</p>
          </DiagramBox>
          <FormulaLine math="2\pi r=n\lambda=n\frac{h}{mv}" />
          <FormulaLine math="\boxed{mvr=n\frac{h}{2\pi}}" />
        </NoteBlock>
      </SourcePage>

      <SourcePage page={82}>
        <NoteBlock title="Wavelength on the nth orbit">
          <FormulaLine math="n\lambda=2\pi r" />
          <FormulaLine math="\lambda=\frac{2\pi r}{n}=\frac{2\pi}{n}\cdot0.529\,\frac{n^{2}}{Z}" />
          <FormulaLine math="\boxed{\lambda=3.32\,\frac{n}{Z}\ \text{\AA}}" />
          <DiagramBox title="Visualization of electron waves for first three Bohr orbits (printed)">
            <p>
              Electron wave resonance sketches: n = 1 with <MathText math="\lambda_1=2\pi r_1" />, n = 2 with{" "}
              <MathText math="2\lambda_2=2\pi r_2" />, n = 3 with <MathText math="3\lambda_3=2\pi r_3" />; below, circles with
              superposed waves for n = 3, 4, 5, 6 around the nucleus.
            </p>
          </DiagramBox>
        </NoteBlock>
        <NoteBlock title="Standing waves on a string">
          <FormulaLine math="\lambda=\frac{2L}{n}" />
          <DiagramBox title="Modes of a string of length L">
            <p>
              Single loop: <MathText math="\lambda=2L" />. Two loops (n = 2): <MathText math="\lambda=L" />. Three loops (n =
              3): <MathText math="\lambda=\tfrac{2L}{3}" /> with nodes and antinodes labelled. Four loops (n = 4):{" "}
              <MathText math="\lambda=\tfrac{2L}{4}" />. The span between the end nodes is{" "}
              <MathText math="L=n\lambda/2" />.
            </p>
          </DiagramBox>
        </NoteBlock>
      </SourcePage>

      <SourcePage page={83}>
        <NoteBlock title="Heisenberg's Uncertainty Principle">
          <p>It is impossible to measure the exact position and momentum (speed) of any moving object simultaneously.</p>
          <FormulaLine math="\Delta x\cdot\Delta p\ge\frac{h}{4\pi}\ \text{or}\ \frac{\hbar}{2}\qquad\hbar=\frac{h}{2\pi}" />
          <FormulaLine math="\Delta x\cdot\Delta v\ge\frac{h}{4\pi m}" />
          <p>
            <MathText math="\Delta x" /> = uncertainty in position, <MathText math="\Delta p" /> = uncertainty in momentum,{" "}
            <MathText math="\Delta v" /> = uncertainty in velocity
          </p>
          <p>
            If <MathText math="\Delta x=0" />, <MathText math="\Delta v=\infty" /> and if <MathText math="\Delta v=0" />,{" "}
            <MathText math="\Delta x=\infty" />
          </p>
          <DiagramBox title="Photon striking an electron">
            <p>
              A long light wave passes an electron on a circle (marked ✗), and a γ-radiation wave strikes an electron and
              scatters it along an arrow — illustrating the disturbance of measurement.
            </p>
          </DiagramBox>
        </NoteBlock>
      </SourcePage>

      <AuditComment pages="81-83" unclear={0} />
    </AtomicPartShell>
  );
}
