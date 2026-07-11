"use client";

import { AtomicPartShell, AuditComment, DiagramBox, FormulaLine, MathText, NoteBlock, SourcePage } from "./_shared";
import { EMWaveVisual, ElectromagneticSpectrumVisual, VisibleSpectrumStripVisual } from "../_components/AtomicVisuals";
import { LearningObjectives, ImportantNote, PracticeQuestion, SummaryStrip } from "../_components/AtomicLearning";

export default function Part07() {
  return (
    <AtomicPartShell part={7} title="Rutherford Drawbacks and EM Waves" pages="20-22">
      <LearningObjectives items={["Apply the inverse-square momentum dependence of closest approach.", "State the classical stability problem in Rutherford’s model.", "Describe electromagnetic-wave field geometry.", "Order electromagnetic radiation by frequency and wavelength."]} />
      <SourcePage page={20}>
        <NoteBlock title="Problem">
          <p>
            The distance of closest approach of an α-particle fired towards a nucleus with momentum P is r. What will be
            the distance of closest approach when momentum of α-particle is 2P?
          </p>
          <FormulaLine math="KE=\frac{1}{2}mv^2" />
          <FormulaLine math="KE=\frac{p^2}{2m}" />
          <FormulaLine math="r=\frac{Kq_1q_2}{p^2/2m}" />
          <FormulaLine math="r\propto\frac{1}{p^2}" />
          <FormulaLine math="\frac{r_1}{r_2}=\frac{p_2^2}{p_1^2}" />
          <FormulaLine math="r_2=\frac{r_1}{4}" />
        </NoteBlock>
        <NoteBlock title="Drawback of Rutherford model">
          <ol className="list-decimal space-y-3 pl-5">
            <li>
              From Maxwell concept of electrodynamics, any accelerated charge particle should radiate energy
              continuously. Bohr calculated that the energy of electron revolving around the Nu depends on distance from
              Nu.
              <FormulaLine math="E\propto\frac{1}{r}" />
            </li>
          </ol>
        </NoteBlock>
      </SourcePage>

      <SourcePage page={21}>
        <NoteBlock title="Drawback of Rutherford model continued">
          <p>
            As the e<sup>-</sup> radiates energy continuously its distance from Nu should decrease; it should drop in Nu
            (<MathText math="\simeq t=10^{-8}\ \mathrm{sec}" />).
          </p>
          <ol start={2} className="list-decimal space-y-3 pl-5">
            <li>It does not explain the arrangement of e<sup>-</sup> revolving around the nucleus.</li>
            <li>It does not explain the stability of Nu against high protonic rebulsion.</li>
            <li>It does not explain atomic spectrum.</li>
          </ol>
        </NoteBlock>
        <NoteBlock title="Electromagnetic Waves - Maxwell Theory">
          <p>Acc. Maxwell EM waves can be produced by oscillating charge particle.</p>
          <h3 className="font-black text-white">Characteristics</h3>
          <ol className="list-decimal space-y-3 pl-5">
            <li>They consist of EF and MF oscillating ⟂ to each other as well as direction of propagation.</li>
          </ol>
          <DiagramBox title="Electromagnetic wave labels">
            <EMWaveVisual />
            <p>Electric Field, Magnetic Field, Wavelength λ, Electromagnetic Waves, Direction, x, y, z.</p>
          </DiagramBox>
        </NoteBlock>
      </SourcePage>

      <SourcePage page={22}>
        <NoteBlock title="More characteristics of EM waves">
          <ol start={2} className="list-decimal space-y-3 pl-5">
            <li>They do not require medium.</li>
            <li>Light is also an example of EMW.</li>
            <li>All electromagnetic waves travel at the speed of light in vacuum.</li>
            <li>
              If all EMW are arranged in ↑ or ↓ order of frequency or wavelength, then the arrangement obtained is called
              spectrum.
            </li>
          </ol>
          <DiagramBox title="Electromagnetic spectrum">
            <ElectromagneticSpectrumVisual />
            <p>Increasing Frequency (ν): γ rays, X rays, UV, IR, Microwave, FM radio waves, AM, Long radio waves.</p>
            <p>Increasing Wavelength (λ): visible spectrum 400-700 nm.</p>
            <p>Order from low to high frequency: radio waves, microwaves, infrared, visible light, ultraviolet, X-rays, γ rays.</p>
          </DiagramBox>
          <p>[UNCLEAR] The original note contains an unverified statement about x-ray guns; no scientific inference is made from it.</p>
          <DiagramBox title="Visible Range">
            <VisibleSpectrumStripVisual />
            <p>Visible Range → V I B G Y O R</p>
          </DiagramBox>
        </NoteBlock>
      </SourcePage>
      <ImportantNote>Electromagnetic waves do not require a material medium; their vacuum speed is c.</ImportantNote>
      <PracticeQuestion prompt="If an α particle’s momentum doubles, what happens to its head-on closest-approach distance?" answer="It becomes one quarter of the original distance." />
      <SummaryStrip items={["Classical radiation predicts an orbiting electron would lose energy and collapse.", "EM electric and magnetic fields are mutually perpendicular and transverse to propagation.", "Frequency increases from radio to γ rays; wavelength changes in the reverse order."]} />
      <AuditComment pages="20-22" unclear={0} />
    </AtomicPartShell>
  );
}
