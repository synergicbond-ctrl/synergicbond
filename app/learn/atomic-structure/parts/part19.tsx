import { AtomicPartShell, AuditComment, DataTable, DiagramBox, FormulaLine, MathText, NoteBlock, SourcePage } from "./_shared";
import { EmissionAbsorptionSpectraVisual, HydrogenSeriesVisual, LevelDiagramVisual, SpectrumApparatusVisual } from "../_components/AtomicVisuals";
import { DefinitionCard, FigureCaption, LearningObjectives, PracticeQuestion, SummaryStrip } from "../_components/AtomicLearning";

export default function Part19() {
  return (
    <AtomicPartShell part={19} title="Hydrogen Spectrum and Spectral Series" pages="58-60">
      <LearningObjectives items={["Compare three kinds of spectrum.", "Identify hydrogen spectral series.", "Count possible transitions.", "Find series wavelength limits."]} />
      <DefinitionCard term="A spectral series"><p>A family of hydrogen emission lines with one common final level <MathText math="n_1" />. As <MathText math="n_2" /> increases, the lines crowd toward the series limit.</p></DefinitionCard>
      <SourcePage page={58}>
        <NoteBlock title="Continuous, emission, and absorption spectra">
          <DiagramBox title="Three spectra compared">
            <EmissionAbsorptionSpectraVisual />
            <FigureCaption>
              A light bulb through a prism gives the Continuous Spectrum (unbroken band of colours). A hot gas through a prism
              gives the Emission Spectrum (bright lines on dark background). A bulb behind a cold gas gives the Absorption
              Spectrum (dark lines on the continuous band).
            </FigureCaption>
          </DiagramBox>
          <p>Atomic Spectrum or line spectrum and Band spectrum or molecular spectrum</p>
        </NoteBlock>
      </SourcePage>

      <SourcePage page={59}>
        <NoteBlock title="Hydrogen spectrum">
          <DiagramBox title="Hydrogen emission apparatus">
            <SpectrumApparatusVisual kind="emission" />
            <FigureCaption>
              Excited hydrogen sample sends radiation through a slit and prism onto a film or detector; the recorded emission
              spectrum shows lines with increasing wavelength.
            </FigureCaption>
          </DiagramBox>
          <DiagramBox title="Energy-level diagram of the hydrogen series">
            <HydrogenSeriesVisual />
            <FigureCaption>
              Levels n = 1 to 7 and <MathText math="\infty" /> drawn as horizontal lines. Downward arrows group into: Lyman
              Series to n = 1 (U.V); Balmer Series to n = 2 (visible + UV, four lines drawn); Paschen IR to n = 3; Brackett IR
              to n = 4; Pfund IR to n = 5; Humphreys IR to n = 6.
            </FigureCaption>
          </DiagramBox>
          <p>
            The max. number of spectral lines is <MathText math="\tfrac{n(n-1)}{2}" />, n = shell no.
          </p>
          <DiagramBox title="Counting lines from n = 5">
            <LevelDiagramVisual nMax={5} arrows={[{ from: 5, to: 4 }, { from: 5, to: 3 }, { from: 5, to: 2 }, { from: 5, to: 1 }, { from: 4, to: 3 }, { from: 4, to: 2 }, { from: 4, to: 1 }, { from: 3, to: 2 }, { from: 3, to: 1 }, { from: 2, to: 1 }]} footer="every downward transition among five levels: N = 5×4/2 = 10 lines" />
            <p>Five levels (5 down to 1) with all downward transitions drawn.</p>
          </DiagramBox>
          <FormulaLine math="=\frac{5\times4}{2}=10" />
        </NoteBlock>
      </SourcePage>

      <SourcePage page={60}>
        <NoteBlock title="Lines for a transit from n₂ to n₁">
          <p>If electron transits from <MathText math="n_2" /> to <MathText math="n_1" />,</p>
          <FormulaLine math="\text{Total number of lines}=\frac{(n_2-n_1)(n_2-n_1+1)}{2}" />
          <FormulaLine math="6\to3:\quad=\frac{(6-3)(6-3+1)}{2}=6" />
        </NoteBlock>
        <NoteBlock title="Spectral series table">
          <DataTable
            headers={["Series", "Discovered by", "regions", <MathText key="n" math="n_2\to n_1" />, "Number of lines"]}
            rows={[
              ["Lyman", "Lyman", "U.V. region", "n₂ = 2,3,4 … / n₁ = 1", "n₂ − 1"],
              ["Balmer", "Balmer", "UV + Visible region", "n₂ = 3,4,5 … / n₁ = 2", "n₂ − 2"],
              ["Paschen", "Paschen", "Infra red (I.R.)", "n₂ = 4,5,6 … / n₁ = 3", "n₂ − 3"],
              ["Brackett", "Brackett", "I.R. region", "n₂ = 5,6,7 … / n₁ = 4", "n₂ − 4"],
              ["Pfund", "Pfund", "I.R. region", "n₂ = 6,7,8 … / n₁ = 5", "n₂ − 5"],
              ["Humphreys", "Humphreys", "far I.R. region", "n₂ = 7,8,9 … / n₁ = 6", "n₂ − 6"],
            ]}
          />
        </NoteBlock>
        <NoteBlock title="Lyman — shortest and longest">
          <p>
            Shortest <MathText math="n_2=\infty" />, <MathText math="n_1=1" /> (Limiting):
          </p>
          <FormulaLine math="\frac{1}{\lambda}=R\left(\frac{1}{1^{2}}-\frac{1}{\infty^{2}}\right)" />
          <FormulaLine math="\lambda=\frac{1}{R}=912\ \text{\AA}" />
          <p>
            longest <MathText math="n_2=n_1+1,\ n_1=1" />:
          </p>
          <FormulaLine math="\frac{1}{\lambda}=R\left(\frac{1}{1^{2}}-\frac{1}{2^{2}}\right)" />
          <FormulaLine math="\frac{1}{\lambda}=\frac{3R}{4}" />
          <FormulaLine math="\lambda=\frac{4}{3R}=\frac{4}{3}\times912=1216\ \text{\AA}" />
        </NoteBlock>
        <NoteBlock title="Balmer — shortest and longest">
          <p>
            Shortest: <MathText math="n_2=\infty" />, <MathText math="n_1=2" />
          </p>
          <FormulaLine math="\frac{1}{\lambda}=R\left(\frac{1}{2^{2}}-\frac{1}{\infty^{2}}\right)" />
          <FormulaLine math="\lambda=\frac{4}{R}=4\times912=3648\ \text{\AA}" />
          <p>
            Longest: <MathText math="n_2=3" />, <MathText math="n_1=2" />
          </p>
          <FormulaLine math="\frac{1}{\lambda}=R\left(\frac{1}{2^{2}}-\frac{1}{3^{2}}\right)=\frac{5R}{36}" />
          <FormulaLine math="\lambda=\frac{36}{5}\times912=6566\ \text{\AA}\approx656.6\ \text{nm}" />
        </NoteBlock>
      </SourcePage>

      <PracticeQuestion prompt="How many distinct lines are possible when an electron initially at n = 6 can make every downward transition?" answer="15, using n(n − 1)/2 = 6×5/2." /><SummaryStrip items={["A series has a fixed final level.", "Maximum lines from n: n(n − 1)/2.", "Lyman ends at n = 1; Balmer ends at n = 2."]} /><AuditComment pages="58-60" unclear={0} />
    </AtomicPartShell>
  );
}
