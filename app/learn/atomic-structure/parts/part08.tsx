"use client";

import { AtomicPartShell, AuditComment, DiagramBox, FormulaLine, MathText, NoteBlock, SourcePage } from "./_shared";
import { LearningObjectives, PracticeQuestion, SummaryStrip } from "../_components/AtomicLearning";
import { BlackBodyCavityVisual, BlackBodyCurvesVisual, WienGraphVisual } from "../_components/AtomicVisuals";

export default function Part08() {
  return (
    <AtomicPartShell part={8} title="Wave Terms and Black Body Radiation" pages="23-25">
      <LearningObjectives items={["Relate wavelength, frequency, wavenumber and wave speed.", "Calculate frequency from wavenumber.", "Explain an ideal black body and Kirchhoff’s law.", "Use Wien’s displacement law and interpret spectral curves."]} />
      <SourcePage page={23}>
        <NoteBlock title="Terms related wave">
          <ol className="list-decimal space-y-4 pl-5">
            <li>wavelength (λ)</li>
            <li>
              wave number (<MathText math="\bar{\nu}" />) - It is reciprocal of λ.
              <br />- No. of waves per unit distance
            </li>
            <li>
              Frequency ν - No of waves per unit time
              <FormulaLine math="\nu=\frac{c}{\lambda}=c\bar{\nu}" />
              <p>unit = sec<sup>-1</sup> = Hertz (Hz)</p>
            </li>
            <li>
              speed (c)
              <FormulaLine math="c=\nu\lambda" />
            </li>
          </ol>
        </NoteBlock>
        <NoteBlock title="Frequency problem">
          <p>
            Calculate frequency of EM radiation having <MathText math="\bar{\nu}=6\times10^5\ \mathrm{cm^{-1}}" />.
          </p>
          <FormulaLine math="\nu=\frac{c}{\lambda}=c\bar{\nu}" />
          <FormulaLine math="=3\times10^{10}\times6\times10^5" />
          <FormulaLine math="=1.8\times10^{16}\ \mathrm{Hz\ or\ sec^{-1}}" />
        </NoteBlock>
        <NoteBlock title="Drawback">
          <ol className="list-decimal space-y-2 pl-5">
            <li>It could not explain Black body radiation.</li>
            <li>It could not explain Hydrogen-spectrum.</li>
            <li>It could not explain photoelectric effect.</li>
            <li>It could not explain variation of heat capacities of solids.</li>
          </ol>
        </NoteBlock>
      </SourcePage>

      <SourcePage page={24}>
        <NoteBlock title="Black Body Radiation">
          <p>Radiation emitted by a black body is called black-body radiation.</p>
          <p>An ideal black body absorbs all incident radiation; at thermal equilibrium, it is also an ideal emitter.</p>
          <DiagramBox title="Black-body cavity and radiation graph">
            <BlackBodyCurvesVisual />
            <p>Circular cavity with internal reflections and outgoing radiation.</p>
            <p>Graph labels: T, blackbody radiation, spectral irradiance (kW/m²/nm), wavelength (nm), 3000 K, 4000 K, 5000 K, 6000 K, 7000 K.</p>
            <p>Annotations: decrease in λ with ↑ in temperature; ↑ of intensity with T and ↓ of peak of λ with T.</p>
          </DiagramBox>
        </NoteBlock>
      </SourcePage>

      <SourcePage page={25}>
        <NoteBlock title="Kirchhoff">
          <p>Every substance can absorb and emit radiation.</p>
          <p>At a given temperature and wavelength, a good absorber is a good emitter.</p>
          <p>An ideal black body absorbs all incident radiation.</p>
          <DiagramBox title="Absorption and emission by black body">
            <BlackBodyCavityVisual />
            <p>Two black-body cavity sketches: one absorbing incoming radiation, one emitting arrows outward.</p>
            <p>T = constant</p>
          </DiagramBox>
        </NoteBlock>
        <NoteBlock title="Wein&apos;s Radiation Law">
          <p>
            Wien&apos;s law relates the peak wavelength of black-body radiation inversely with temperature.
          </p>
          <FormulaLine math="\lambda_{\max}T=2.898\times10^{-3}\ \mathrm{m\cdot K}" />
          <p>
            b is Wien&apos;s displacement constant = <MathText math="2.8977\times10^{-3}\ \mathrm{m\cdot K}" />.
          </p>
          <p>T is the temperature in kelvins.</p>
          <DiagramBox title="Wien radiation law graph">
            <WienGraphVisual />
            <p>
              U<sub>λ</sub> = energy of radiation per unit volume in range of λ to λ + dλ.
            </p>
            <p>Graph labels: U<sub>λ</sub>, λ, 400 nm, 700 nm, λ<sub>m</sub>, 100 V, 60 V, 40 V, 20 V.</p>
            <p>Wien Radiation law: <MathText math="U_\lambda=a\nu^3e^{-b\nu/T}" /></p>
          </DiagramBox>
        </NoteBlock>
      </SourcePage>
      <PracticeQuestion prompt={<>A radiation has <MathText math="\bar\nu=6\times10^5\ \mathrm{cm^{-1}}" />. What frequency follows using c = 3 × 10¹⁰ cm s⁻¹?</>} answer="1.8 × 10¹⁶ Hz." />
      <SummaryStrip items={["ν = c/λ = cν̄ and c = νλ.", "A good absorber is a good emitter at the same temperature and wavelength.", "Wien’s law: λmaxT = 2.898 × 10⁻³ m K."]} />
      <AuditComment pages="23-25" unclear={0} note="law paragraph reviewed" />
    </AtomicPartShell>
  );
}
