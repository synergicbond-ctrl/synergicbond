"use client";

import { AtomicPartShell, AuditComment, DiagramBox, FormulaLine, MathText, NoteBlock, SourcePage } from "./_shared";
import { LevelDiagramVisual, PrismSpectrumVisual, ReducedMassVisual, SpectrumApparatusVisual } from "../_components/AtomicVisuals";
import { DefinitionCard, ImportantNote, LearningObjectives, PracticeQuestion, SummaryStrip } from "../_components/AtomicLearning";

export default function Part18() {
  return (
    <AtomicPartShell part={18} title="Ritz Principle, Reduced Mass and Spectrum" pages="55-57">
      <LearningObjectives items={["Apply Ritz combination relations.", "Explain reduced mass in atomic motion.", "Compare isotope-dependent Rydberg constants.", "Distinguish continuous, emission and absorption spectra."]} />
      <DefinitionCard term="Ritz combination principle"><p>When two successive transitions connect 3→2 and 2→1, the transition energy and frequency for 3→1 equal the sums of the two component transition energies and frequencies. Wavelengths themselves do not add.</p></DefinitionCard>
      <SourcePage page={55}>
        <NoteBlock title="Shortest wavelength">
          <p>
            <MathText math="\lambda_{min}" />:
          </p>
          <FormulaLine math="\frac{1}{\lambda}=R\left(\frac{1}{1^{2}}-\frac{1}{\infty^{2}}\right)" />
          <FormulaLine math="\lambda=\frac{1}{R}=912\ \text{\AA}" />
        </NoteBlock>
        <NoteBlock title="Ritz Combination Principle">
          <DiagramBox title="Levels 1, 2, 3">
            <LevelDiagramVisual nMax={3} />
            <p>Three horizontal energy levels labelled 3, 2 and 1.</p>
          </DiagramBox>
          <FormulaLine math="3\to2:\ \lambda_2,\ \nu_2,\ \bar{\nu}_2" />
          <FormulaLine math="2\to1:\ \lambda_1,\ \nu_1,\ \bar{\nu}_1" />
          <FormulaLine math="3\to1:\ \lambda_3,\ \nu_3,\ \bar{\nu}_3" />
          <FormulaLine math="\nu_3=\nu_1+\nu_2" />
          <FormulaLine math="\bar{\nu}_3=\bar{\nu}_1+\bar{\nu}_2" />
          <FormulaLine math="\Delta E_{31}=\Delta E_{32}+\Delta E_{21}" />
          <FormulaLine math="\lambda_3=\lambda_2+\lambda_1\ \Rightarrow\ \text{wrong}" />
          <p>The correct wavelength relation follows from adding wave numbers:</p>
          <FormulaLine math="\frac{1}{\lambda_3}=\frac{1}{\lambda_1}+\frac{1}{\lambda_2}" />
        </NoteBlock>
        <NoteBlock title="Reduced Mass Effect">
          <DiagramBox title="Nucleus and electron about the centre of mass">
            <ReducedMassVisual />
            <p>
              A circular orbit of radius <MathText math="r" />; below it, the line Nu — com — e marks distances{" "}
              <MathText math="r_1" /> (nucleus to centre of mass) and <MathText math="r_2" /> (centre of mass to electron).
            </p>
          </DiagramBox>
          <FormulaLine math="m_n r_1=m_e r_2=m_e(r-r_1)" />
          <FormulaLine math="r_1=\frac{m_e}{m_e+m_n}\,r" />
          <FormulaLine math="r_2=\frac{m_n}{m_e+m_n}\,r" />
          <p>modified quantisation of angular momentum,</p>
          <FormulaLine math="(I\omega)_e+(I\omega)_n=\frac{nh}{2\pi}" />
          <FormulaLine math="m_e r_2^{2}\omega+m_n r_1^{2}\omega=\frac{nh}{2\pi}" />
          <FormulaLine math="m_e\left(\frac{m_n}{m_e+m_n}r\right)^{2}\omega+m_n\left(\frac{m_e}{m_e+m_n}r\right)^{2}\omega=\frac{nh}{2\pi}" />
          <FormulaLine math="\frac{m_e m_n}{m_e+m_n}\,r^{2}\omega=\frac{nh}{2\pi}" />
        </NoteBlock>
      </SourcePage>

      <ImportantNote title="Model precision">Replacing electron mass by reduced mass is a small correction for hydrogen, but it is essential when comparing isotope spectra.</ImportantNote>

      <SourcePage page={56}>
        <NoteBlock title="Reduced mass in the quantisation condition">
          <FormulaLine math="\mu r^{2}\omega=\frac{nh}{2\pi}\qquad\cdots(i)" />
          <p>where <MathText math="\mu" /> is reduced mass,</p>
          <FormulaLine math="\boxed{\mu=\frac{m_e m_n}{m_e+m_n}}" />
          <p>when nucleus is stationary</p>
          <FormulaLine math="(I\omega)_e=\frac{nh}{2\pi}\qquad\cdots(ii)" />
          <p>in all calculation we may replace mass of e&#8315; by reduced mass (<MathText math="\mu" />)</p>
          <FormulaLine math="m_n\gg m_e" />
          <FormulaLine math="\mu\approx\frac{m_e m_n}{m_n}=m_e" />
          <p>
            Reduced mass effect does not influence the calculations significantly but it must be considered in comparison of
            isotope and some hypothetical atoms.
          </p>
          <FormulaLine math="\mu=\frac{m_e m_n}{m_e+m_n}=\frac{m_e}{\left(\frac{m_e}{m_n}\right)+1}\ \Rightarrow\ m_n\uparrow\ \mu\uparrow" />
          <FormulaLine math="R\propto\mu\qquad R_H<R_D<R_T" />
          <FormulaLine math="IE\propto\mu\qquad H<D<T" />
        </NoteBlock>
        <NoteBlock title="Spectrum">
          <p>
            The impression produced on a screen when any light falls on the screen after passing through a prism or
            prism-like material is called a spectrum.
          </p>
        </NoteBlock>
      </SourcePage>

      <SourcePage page={57}>
        <NoteBlock title="Dispersion through a prism">
          <DiagramBox title="Solar spectrum from a prism">
            <PrismSpectrumVisual />
            <p>
              Sunlight or white light enters the prism, deviates by angle <MathText math="\theta" /> and spreads onto the screen
              as the solar spectrum. Side note: <MathText math="\theta\propto\tfrac{1}{\lambda}" />.
            </p>
          </DiagramBox>
        </NoteBlock>
        <NoteBlock title="Continuous and Discontinuous spectrum">
          <p>
            In a continuous spectrum all the spectral lines overlap each other, while some gaps exist in a discontinuous
            spectrum.
          </p>
        </NoteBlock>
        <NoteBlock title="Emission and Absorption spectrum">
          <p>
            In an emission spectrum, radiation coming out from a source falls on the screen after passing through a prism;
            but in an absorption spectrum, sunlight falls on the prism after passing through a sample. As the sample absorbs
            radiation of certain wavelengths, these radiations do not appear in the solar spectrum — they show up as dark
            lines. These wavelengths are called missing wavelengths.
          </p>
          <DiagramBox title="Emission versus absorption apparatus">
            <SpectrumApparatusVisual kind="both" />
            <p>
              An excited sample sends light through a slit and prism onto a film or detector, giving the
              emission spectrum (bright lines, increasing wavelength). A white light source passing through an absorbing sample,
              slit and prism gives the absorption spectrum (dark lines on a continuous band, increasing wavelength).
            </p>
          </DiagramBox>
        </NoteBlock>
      </SourcePage>

      <PracticeQuestion prompt="Why is the relation λ₃ = λ₂ + λ₁ invalid in the Ritz example?" answer="Photon energy is proportional to frequency and wavenumber, not wavelength; the reciprocal wavelengths add." /><SummaryStrip items={["Transition frequencies and wavenumbers add in Ritz combinations.", "μ = mₑmₙ/(mₑ + mₙ).", "Emission gives bright lines; absorption gives dark missing wavelengths."]} /><AuditComment pages="55-57" unclear={0} />
    </AtomicPartShell>
  );
}
