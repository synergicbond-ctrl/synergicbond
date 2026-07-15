
import { AtomicPartShell, AuditComment, DiagramBox, FormulaLine, MathText, NoteBlock, SourcePage } from "./_shared";
import { LearningObjectives, PracticeQuestion, SummaryStrip } from "../_components/AtomicLearning";
import { PlanckComparisonVisual, RadiationComparisonPanelsVisual } from "../_components/AtomicVisuals";

export default function Part10() {
  return (
    <AtomicPartShell part={10} title="Rayleigh-Jeans and Planck Quantum Theory" pages="29-32">
      <LearningObjectives items={["State the Rayleigh–Jeans formula and its failure.", "Explain Planck’s quantum hypothesis.", "Calculate photon energy from wavelength or energy.", "Find photon number from a required absorbed energy."]} />
      <SourcePage page={29}>
        <NoteBlock title="Rayleigh-Jeans Formula">
          <FormulaLine math="u(\nu)d\nu=\bar{E}G(\nu)d\nu=\frac{8\pi KT}{c^3}\nu^2d\nu" />
          <p>
            where <MathText math="G(\nu)d\nu" /> = Density of standing waves in cavity
          </p>
          <FormulaLine math="G(\nu)d\nu=\frac{8\pi\nu^2d\nu}{c^3}" />
          <p>Classical average energy</p>
          <FormulaLine math="\bar{E}=KT" />
          <p>
            u(ν)dν - Total energy per unit volume in the cavity in the frequency from ν to ν + dν
          </p>
          <DiagramBox title="Classical vs quantum radiation curves">
            <PlanckComparisonVisual />
            <p>Axes: Radiated Intensity vs Frequency.</p>
            <p>Labels: Towards Ultraviolet Catastrophe; Rayleigh-Jeans Law; Classical; Quantum; Planck Law; curves agree at very low frequencies.</p>
            <p>
              Formula labels: <MathText math="\frac{8\pi\nu^2}{c^3}KT" /> and{" "}
              <MathText math="\frac{8\pi\nu^2}{c^3}\frac{h\nu}{e^{h\nu/kT}-1}" />.
            </p>
          </DiagramBox>
          <DiagramBox title="Comparison graphs">
            <RadiationComparisonPanelsVisual />
            <p>Left graph: 3000 K, 4000 K, 5000 K, 6000 K; ultraviolet, visible light, infrared; wavelength (angstroms).</p>
            <p>Right graph: T = 5800 K; Rayleigh-Jeans, Planck, Wien; ν [THz].</p>
          </DiagramBox>
        </NoteBlock>
      </SourcePage>

      <SourcePage page={30}>
        <NoteBlock title="Planck&apos;s Quantum Theory">
          <p>An ideal black body may absorb as well as emit the radiation of all frequency.</p>
          <p>
            When a sample of iron is heated the colour changes from red to orange, then yellow and finally bluish. This
            colour change should not be explained by considering light as mechanical wave (classical wave) because for
            classical wave on increasing energy, amplitude of wave should change without change in λ or ν. From classical
            wave concept, on heating, the brightness of iron sample should increase without change in colour.
          </p>
          <p>Planck explained this observation by proposing that radiation is emitted and absorbed in discrete packets.</p>
          <p>According to him</p>
          <ol className="list-decimal space-y-3 pl-5">
            <li>
              A body may absorb or emit radiation discontinuously in the form of small packets called quanta. The
              packets of light are called photons.
            </li>
            <li>The energy of each quantum is directly proportional to the frequency of the radiation involved.</li>
          </ol>
        </NoteBlock>
      </SourcePage>

      <SourcePage page={31}>
        <NoteBlock title="Energy of quanta">
          <FormulaLine math="E\propto\nu" />
          <FormulaLine math="E=h\nu" />
          <p>h = Planck&apos;s constant</p>
          <FormulaLine math="h=6.626\times10^{-34}\ \mathrm{J\,s}" />
          <ol start={3} className="list-decimal space-y-3 pl-5">
            <li>Total energy absorbed or emitted out must be integral multiple of hν.</li>
          </ol>
          <FormulaLine math="E=nh\nu" />
          <p>n = no. of quanta / photon</p>
          <p>n = 1, 2, 3 ....</p>
        </NoteBlock>
        <NoteBlock title="Problem">
          <p>Calculate the energy of electromagnetic radiation per quanta of wavelength 6626 Å.</p>
          <FormulaLine math="E=h\nu=\frac{hc}{\lambda}" />
          <p>
            <MathText math="1\ \mathrm{\AA}=10^{-10}\ \mathrm{m}" />
          </p>
          <FormulaLine math="=\frac{6.626\times10^{-34}\times3\times10^8}{6626\times10^{-10}}" />
          <FormulaLine math="=3\times10^{-19}\ \mathrm{J/quanta}" />
        </NoteBlock>
      </SourcePage>

      <SourcePage page={32}>
        <NoteBlock title="Problem">
          <p>The energy of an EMR is 20 eV/quanta. Calculate its wavelength.</p>
          <FormulaLine math="E=\frac{hc}{\lambda}" />
          <FormulaLine math="\lambda=\frac{hc}{E}" />
          <p>
            <MathText math="1\ \mathrm{eV}=1.6\times10^{-19}\ \mathrm{J}" />
          </p>
          <FormulaLine math="20\ \mathrm{eV}=20\times1.6\times10^{-19}\ \mathrm{J}" />
          <FormulaLine math="\lambda=\frac{6.626\times10^{-34}\times3\times10^8}{20\times1.6\times10^{-19}}" />
          <FormulaLine math="=0.6212\times10^{-7}\ \mathrm{m}=621.2\times10^{-10}\ \mathrm{m}=621.2\ \mathrm{\AA}" />
        </NoteBlock>
        <NoteBlock title="Problem">
          <p>
            In order to see an object a minimum <MathText math="10^{-17}\ \mathrm{J}" /> energy must required by human
            eye. Calculate min. no. of photon of green light (λ = 550 nm) which must be absorbed?
          </p>
          <FormulaLine math="\frac{1}{hc}=5.03\times10^{24}" />
          <FormulaLine math="E=n\frac{hc}{\lambda}" />
          <FormulaLine math="n=\frac{E\lambda}{hc}" />
          <FormulaLine math="=10^{-17}\times550\times10^{-9}\times5.03\times10^{24}" />
          <FormulaLine math="=27.7\simeq28" />
        </NoteBlock>
      </SourcePage>
      <PracticeQuestion prompt={<>What wavelength corresponds to a photon energy of <MathText math="20\ \mathrm{eV}" /> in the worked calculation?</>} answer={<MathText math="621.2\ \mathrm{\AA}" />} />
      <SummaryStrip items={["Rayleigh–Jeans uses average oscillator energy kT and fails at high frequency.", "Planck proposed discrete quanta with E = hν and total energy E = nhν.", "The worked green-light threshold problem gives approximately 28 photons."]} />
      <AuditComment pages="29-32" unclear={0} />
    </AtomicPartShell>
  );
}