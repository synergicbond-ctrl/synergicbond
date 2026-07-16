
import { AtomicPartShell, AuditComment, DataTable, DiagramBox, FormulaLine, MathText, NoteBlock, SourcePage } from "./_shared";
import { LearningObjectives, ImportantNote, PracticeQuestion, SummaryStrip } from "../_components/AtomicLearning";
import { BlackBodyCurvesVisual, BulbHeatingSequenceVisual, EnergyBandStripVisual } from "../_components/AtomicVisuals";

export default function Part09() {
  return (
    <AtomicPartShell part={9} title="Radiation Laws and Planck Formula" pages="26-28">
      <LearningObjectives items={["Relate black-body peak wavelength to temperature.", "Use Stefan–Boltzmann and emissivity relations.", "Recognise Planck’s distribution and its low-frequency limit.", "Explain the ultraviolet catastrophe."]} />
      <SourcePage page={26}>
        <NoteBlock title="Heating visual inserts">
          <DiagramBox title="Bulb heating sequence">
            <BulbHeatingSequenceVisual />
            <p>As the tungsten filament is heated, its radiance rises and its visible glow shifts from dim red through orange toward yellow-white. The colour transition is qualitative; the black-body curve below gives the quantitative wavelength trend.</p>
          </DiagramBox>
          <DiagramBox title="Black-body peak graph">
            <BlackBodyCurvesVisual />
            <p>
              Graph labels: <MathText math="\lambda_{\mathrm{peak}}T=2.898\times10^{-3}\ \mathrm{m\cdot K}" />, 483 nm,
              580 nm, 724 nm, 966 nm (IR), visible, 6000 K, 5000 K, 4000 K, 3000 K.
            </p>
            <p>Temperature relation: the wavelength of the peak blackbody radiation curve gives a measure of temperature.</p>
          </DiagramBox>
        </NoteBlock>
      </SourcePage>

      <SourcePage page={27}>
        <NoteBlock title="Stefan-Boltzmann Law">
          <FormulaLine math="U=\int_0^\infty u(\nu)\,d\nu=\frac{8\pi^{5}k^{4}}{15c^{3}h^{3}}\,T^{4}=aT^{4}" />
          <p>a is universal constant.</p>
          <p>The total energy density is proportional to the fourth power of the absolute temperature.</p>
          <FormulaLine math="M=e\sigma T^4" />
          <p>For a perfectly black body</p>
          <FormulaLine math="M=\sigma T^4" />
          <p>σ = Stefan-Boltzmann constant; M is radiant exitance (power emitted per unit area).</p>
          <FormulaLine math="\sigma=\frac{ac}{4}=5.670\times10^{-8}\ \mathrm{W\,m^{-2}\,K^{-4}}" />
          <p>emissivity e-</p>
          <DataTable
            headers={["Emissivity", "Surface"]}
            rows={[
              ["0", "for a perfect reflector which do not radiate at all"],
              ["1", "for black body"],
              ["0.07", "for polished steel"],
              ["0.6", "for oxidized Cu and brass"],
              ["0.97", "for matte black paint"],
            ]}
          />
          <p>
            u<sub>λ</sub>dλ = energy per unit volume in the wavelength interval λ to λ + dλ.
          </p>
          <DiagramBox title="Energy in dλ band">
            <EnergyBandStripVisual />
            <p>Curve with a narrow vertical strip marked dλ.</p>
          </DiagramBox>
        </NoteBlock>
      </SourcePage>

      <SourcePage page={28}>
        <NoteBlock title="Planck&apos;s Radiation Formula">
          <FormulaLine math="u(\nu)d\nu=\frac{8\pi h}{c^3}\frac{\nu^3\,d\nu}{e^{h\nu/kT}-1}" />
          <FormulaLine math="e^x=1+x+\frac{x^2}{2!}+\frac{x^3}{3!}+\cdots" />
          <p>
            If x is small, <MathText math="e^x\simeq1+x" /> so for <MathText math="h\nu/kT<<1" />, we have:
          </p>
          <FormulaLine math="\frac{1}{e^{h\nu/kT}-1}\simeq\frac{1}{1+\frac{h\nu}{kT}-1}\simeq\frac{kT}{h\nu},\qquad h\nu<<kT" />
          <p>Thus at low frequency Planck&apos;s Formula becomes,</p>
          <FormulaLine math="u(\nu)d\nu=\frac{8\pi h}{c^3}\nu^3\frac{kT}{h\nu}\simeq\frac{8\pi kT}{c^3}\nu^2d\nu" />
          <p>which is the Rayleigh-Jeans formula.</p>
          <p>Oscillator Energy</p>
          <FormulaLine math="E=n h\nu" />
          <FormulaLine math="n=0,1,2,\ldots" />
          <p>Actual average energy per standing wave</p>
          <FormulaLine math="\varepsilon=\frac{h\nu}{e^{h\nu/kT}-1}" />
          <p>Wien Radiation law</p>
          <FormulaLine math="u(\nu)=a\nu^{3}e^{-b\nu/T}" />
          <div className="rounded-lg border border-amber-400/20 bg-amber-400/[0.06] p-3 text-sm text-amber-100">
            <strong>Ultraviolet catastrophe.</strong> Classical Rayleigh-Jeans theory predicts unlimited high-frequency radiation, which is physically impossible and not observed.
          </div>
        </NoteBlock>
      </SourcePage>
      <ImportantNote>The Rayleigh–Jeans form is the low-frequency approximation of Planck’s formula, valid when hν ≪ kT.</ImportantNote>
      <PracticeQuestion prompt="What value of emissivity corresponds to an ideal black body?" answer="e = 1." />
      <SummaryStrip items={["Radiant exitance M = eσT⁴; an ideal black body has e = 1.", "Planck distribution contains the factor 1/(e^(hν/kT) − 1).", "Quantisation avoids the classical ultraviolet catastrophe."]} />
      <AuditComment pages="26-28" unclear={0} note="law paragraph reviewed" />
    </AtomicPartShell>
  );
}