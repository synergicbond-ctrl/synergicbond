"use client";

import { AtomicPartShell, AuditComment, FormulaLine, MathText, NoteBlock, SourcePage } from "./_shared";

export default function Part27() {
  return (
    <AtomicPartShell part={27} title="Uncertainty Variants and Quantum Numbers" pages="84-86">
      <SourcePage page={84}>
        <NoteBlock title="Energy–time and angular forms">
          <p>If <MathText math="\Delta x" /> is greater, <MathText math="\Delta p" /> is small and vice versa</p>
          <FormulaLine math="E=\frac{p^{2}}{2m}\qquad p=\sqrt{2Em}" />
          <FormulaLine math="F=\frac{dp}{dt}=\frac{\Delta p}{\Delta t}\qquad F\cdot\Delta t=\Delta p" />
          <FormulaLine math="\left(\frac{\Delta x}{\Delta t}\cdot F\cdot\Delta t\right)\Delta t\ge\frac{h}{4\pi}" />
          <FormulaLine math="\boxed{\Delta E\cdot\Delta t\ge\frac{h}{4\pi}}" />
          <p>In terms of angular momentum (L) and angular position <MathText math="\theta" />.</p>
          <FormulaLine math="\boxed{\Delta L\cdot\Delta\theta\ge\frac{h}{4\pi}}" />
        </NoteBlock>
        <NoteBlock title="Prove that Δx·Δλ ≥ λ²/4π">
          <FormulaLine math="\Delta x\cdot\Delta\lambda\ge\frac{\lambda^{2}}{4\pi}" />
          <FormulaLine math="p=\frac{h}{\lambda}" />
          <FormulaLine math="\left|\frac{dp}{d\lambda}\right|=\frac{h}{\lambda^{2}}" />
          <FormulaLine math="dp=\frac{h}{\lambda^{2}}\cdot d\lambda" />
          <FormulaLine math="\Delta p=\frac{h}{\lambda^{2}}\,\Delta\lambda\qquad\Delta p\ge\frac{h}{4\pi\Delta x}" />
          <p>Hence</p>
          <FormulaLine math="\boxed{\Delta x\cdot\Delta\lambda\ge\frac{\lambda^{2}}{4\pi}}" />
        </NoteBlock>
      </SourcePage>

      <SourcePage page={85}>
        <NoteBlock title="Question — equal uncertainties">
          <p>
            Q. If the uncertainty in the measurement of position and momentum are equal, calculate uncertainty in measurement of
            velocity.
          </p>
          <FormulaLine math="\Delta x\cdot\Delta p\ge\frac{h}{4\pi}" />
          <FormulaLine math="\Delta x=\Delta p" />
          <FormulaLine math="\Delta p^{2}\ge\frac{h}{4\pi}" />
          <FormulaLine math="(m\Delta v)^{2}\ge\frac{h}{4\pi}" />
          <FormulaLine math="\Delta v\ge\sqrt{\frac{h}{\pi}}\cdot\frac{1}{2m}" />
        </NoteBlock>
        <NoteBlock title="Question — electron at 600 m/s">
          <p>
            Q. In an atom e&#8315; is moving with a speed of 600 m/s with an accuracy of 0.005%, certainty with which the
            position of the electron can be located —
          </p>
          <FormulaLine math="\Delta x=\frac{h}{4\pi m\Delta v}" />
          <FormulaLine math="\Delta v=\frac{600\times0.005}{100}=0.03\ \text{m/s}" />
          <FormulaLine math="\Delta x=\frac{6.626\times10^{-34}}{4\times3.14\times9.1\times10^{-31}\times0.03}=1.92\times10^{-3}\ \text{m}" />
        </NoteBlock>
      </SourcePage>

      <SourcePage page={86}>
        <NoteBlock title="Quantum Number">
          <p>It is the set of four quantum numbers which give complete information about electrons in an atom.</p>
        </NoteBlock>
        <NoteBlock title="1. Principal Quantum Number (n)">
          <p>It gives the average distance of the e&#8315; from the nucleus</p>
          <p>It determines the energy of e&#8315;</p>
          <FormulaLine math="\text{Max. no. of }e^{-}\text{ in a shell}=2n^{2}" />
          <FormulaLine math="n=1\ \text{K shell}=2" />
          <FormulaLine math="n=2\ \text{L shell}=8" />
          <FormulaLine math="n=3\ \text{M shell}=18" />
          <FormulaLine math="n=4\ \text{N shell}=32" />
          <p>
            It cannot be zero, <MathText math="n=1\ \text{to}\ \infty" />
          </p>
          <p>
            It gives value of angular momentum of e&#8315; e.g. <MathText math="\frac{nh}{2\pi}" />
          </p>
        </NoteBlock>
        <NoteBlock title="2. Azimuthal or angular or secondary quantum number (l)">
          <p>It identifies the subshell in an atom</p>
          <p>The value of l gives the name of the subshell and the shape of the orbital</p>
          <p>It gives information about the orbital angular momentum of e&#8315;.</p>
        </NoteBlock>
      </SourcePage>

      <AuditComment pages="84-86" unclear={0} />
    </AtomicPartShell>
  );
}
