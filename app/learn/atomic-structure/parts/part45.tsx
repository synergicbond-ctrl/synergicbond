import { AtomicPartShell, AuditComment, DataTable, DiagramBox, FormulaLine, MathText, NoteBlock, SourcePage } from "./_shared";
import { DerivationPanel, FigureCaption, ImportantNote, LearningObjectives, SummaryStrip } from "../_components/AtomicLearning";
import { Dz2OrbitalVisual, RadialDistributionVisual } from "../_components/AtomicVisuals";

export default function Part45() {
  return (
    <AtomicPartShell part={45} title="Radial Function Chart, Average Distance and the dz² Designation" pages="141-144">
      <LearningObjectives items={["compare radial-function zero crossings and distribution humps", "distinguish average distance from most probable radius", "derive the Cartesian designation d(3z²−r²) for dᶻ²"]} />
      <SourcePage page={141}>
        <NoteBlock title="Combined R(r) and radial probability distribution chart">
          <DiagramBox title="Radial-distribution family">
            <RadialDistributionVisual />
            <FigureCaption>
              Two columns of stacked panels versus r (in units of a₀). Left column is Rₙₗ(r); right column is the radial
              probability distribution [(R)²·4πr²]. Rows top-to-bottom: 1s, 2s, 2p, 3s, 3p, 3d, 4s, 4p, 4d, 4f. The number
              of times each Rₙₗ(r) curve crosses zero equals n − l − 1 radial nodes; each right-hand distribution shows
              (n − l) humps with the outermost being the tallest.
            </FigureCaption>
          </DiagramBox>
          <p>Radial function Rₙₗ(r) and radial probability distribution [(R)²·4πr²] for the hydrogen-like atom in the 1s state show that the most probable radial position, i.e., the radius with the highest radial probability density, is a₀/Z.</p>
        </NoteBlock>
      </SourcePage>

      <SourcePage page={142}>
        <DerivationPanel title="Most probable radius for 1s">
          <FormulaLine math="r_{max}=r_{mp}=\text{most probable radius}" />
          <p>For r_max:</p>
          <FormulaLine math="\frac{dP(r)}{dr}=0" />
          <FormulaLine math="\psi_{1s}=\frac{1}{\sqrt{\pi}}\left(\frac{Z}{a_0}\right)^{3/2}e^{-\frac{Zr}{a_0}}" />
          <FormulaLine math="\frac{dP(r)}{dr}=0\ \Rightarrow\ 1-\frac{rZ}{a_0}=0\ \Rightarrow\ \boxed{r=\frac{a_0}{Z}}" />
          <NoteBlock title="For H">
            <FormulaLine math="r_{av}=\frac{3}{2}a_0\qquad r_{mp}=a_0" />
          </NoteBlock>
        </DerivationPanel>
        <NoteBlock title="Average Distance (r_av)">
          <FormulaLine math="r_{av}=\frac{n^{2}a_0}{Z}\left[1+\frac{1}{2}\left(1-\frac{l(l+1)}{n^{2}}\right)\right]=\frac{a_0}{2Z}\left\{3n^{2}-l(l+1)\right\}" />
          <FormulaLine math="r_{av}=\int_{\text{all space}}r\,P\,d\tau" />
          <FormulaLine math="=\int_{0}^{\infty}r\left[\frac{1}{\sqrt{\pi}}\left(\frac{Z}{a_0}\right)^{3/2}e^{-\frac{Zr}{a_0}}\right]^{2}4\pi r^{2}\,dr" />
          <NoteBlock title="Gamma Function">
            <FormulaLine math="\int_{0}^{\infty}z^{n}e^{-z}\,dz=n!" />
            <FormulaLine math="\int_{0}^{\infty}x^{n}e^{-mx}\,dx=\frac{n!}{m^{n+1}}" />
          </NoteBlock>
          <p>For same n, l ↑ r_av ↓.</p>
          <FormulaLine math="r_{av}:\quad 2s>2p\qquad 3s>3p>3d" />
        </NoteBlock>
      </SourcePage>

      <SourcePage page={143}>
        <NoteBlock title="Trend in average distance">
          <p>
            For the same value of &apos;n&apos;, the average distance as well as r_mp of the electron from the nucleus ↓
            with increase in &apos;l&apos; value.
          </p>
          <ImportantNote>r<sub>av</sub> is an expectation value; r<sub>mp</sub> locates a maximum of the radial distribution. They need not be equal, as the H 1s values show.</ImportantNote>
        </NoteBlock>
      </SourcePage>

      <SourcePage page={144}>
        <NoteBlock title="dz² orbital and its designation">
          <FormulaLine math="\psi_{3d_{z^{2}}}(r,\theta,\phi)=\frac{1}{81\sqrt{6\pi}}\left(\frac{1}{a_0}\right)^{3/2}\frac{r^{2}}{a_0^{2}}\,e^{-r/3a_0}\left(3\cos^{2}\theta-1\right)" />
          <FormulaLine math="\psi^{2}=0\ \Rightarrow\ 3\cos^{2}\theta-1=0\ \Rightarrow\ \theta=\cos^{-1}\!\left(\frac{1}{\sqrt{3}}\right)=54.7^{\circ}" />
          <DataTable
            headers={["θ", "3cos²θ − 1"]}
            rows={[
              ["0", "2"],
              ["30°", "1.25"],
              ["45°", "0.5"],
              ["60°", "−0.25"],
              ["90°", "−1"],
              ["135°", "0.5"],
              ["180°", "2"],
            ]}
          />
          <DiagramBox title="dᶻ² nodal-cone geometry">
            <Dz2OrbitalVisual />
            <FigureCaption>Two positive lobes lie along the z-axis with a negative torus around the origin in the xy-plane; the two nodal cones open at 54.7°.</FigureCaption>
          </DiagramBox>
        </NoteBlock>
        <NoteBlock title="Why dz² is designated d(3z²−r²)">
          <p>
            <MathText math="d_{3(z^{2}-r^{2}/3)}" /> or <MathText math="d_{(z^{2}-x^{2})+(z^{2}-y^{2})}" /> or{" "}
            <MathText math="d_{2z^{2}-x^{2}-y^{2}}" />
          </p>
          <FormulaLine math="\psi_{(d_{z^{2}})}=Y_{2,0}=\sqrt{\frac{5}{16\pi}}\left[\frac{(z^{2}-x^{2})}{r^{2}}+\frac{(z^{2}-y^{2})}{r^{2}}\right]" />
          <FormulaLine math="=\sqrt{\frac{5}{16\pi}}\left(\frac{2z^{2}-x^{2}-y^{2}}{r^{2}}\right)" />
          <FormulaLine math="=\sqrt{\frac{5}{16\pi}}\left[\frac{3\left(z^{2}-r^{2}/3\right)}{r^{2}}\right]\qquad r^{2}=x^{2}+y^{2}+z^{2}" />
        </NoteBlock>
      </SourcePage>
      <SummaryStrip items={["R(r) crossings count radial nodes; the distribution has n − l humps in this hydrogen-like chart.", "For H 1s, r_av = 3a₀/2 while r_mp = a₀.", "3z² − r² = 2z² − x² − y² gives the dᶻ² designation."]} />

      <AuditComment pages="141-144" unclear={0} />
    </AtomicPartShell>
  );
}
