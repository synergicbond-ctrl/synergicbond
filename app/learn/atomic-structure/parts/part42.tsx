import { AtomicPartShell, AuditComment, DiagramBox, FormulaLine, MathText, NoteBlock, SourcePage } from "./_shared";
import { RadialDistributionVisual, RadialFunctionCurvesVisual } from "../_components/AtomicVisuals";
import { DefinitionCard, FigureCaption, ImportantNote, LearningObjectives, SummaryStrip, WorkedExample } from "../_components/AtomicLearning";

export default function Part42() {
  return (
    <AtomicPartShell part={42} title="Radial Function Curves, Radial Nodes and Radial Distribution Function" pages="132-134">
      <LearningObjectives items={["identify n and l from a radial polynomial", "distinguish radial-function zeros from radial nodes", "derive the radial distribution function from a spherical shell"]} />
      <SourcePage page={132}>
        <WorkedExample title="Identifying an orbital from its radial polynomial">
          <FormulaLine math="R(r)=\psi(r)=K\,e^{-\sigma/2}\,\underbrace{\sigma^{2}}_{l}\,\underbrace{\left(5-2\sigma+3\sigma^{2}-4\sigma^{3}\right)}_{n-l-1}" />
          <FormulaLine math="l=2\qquad n-l-1=3\qquad n=6\ \Rightarrow\ 6d" />
        </WorkedExample>
        <NoteBlock title="Radial Function Curve [R(r) vs r]">
          <DiagramBox title="R(r) vs r for nodeless orbitals (diagram)">
            <RadialFunctionCurvesVisual nodes={0} />
            <p>
              For n − l − 1 = 0 (1s, 2p, 3d, 4f, 5g …): the 1s curve starts at K on the R(r) axis and decays
              monotonically to zero; the 2p, 3d, 4f … curves start at zero, rise to a single maximum, then decay — no
              radial node.
            </p>
          </DiagramBox>
          <FormulaLine math="R(r)=K\,e^{-\sigma/2}\,\sigma^{l}\quad\begin{cases}l=0\l\neq0\end{cases}\qquad \sigma=\frac{2Z}{n a_0}\,r" />
          <DiagramBox title="R(r) vs r for one-node orbitals (diagram)">
            <RadialFunctionCurvesVisual nodes={1} />
            <p>
              For n − l − 1 = 1 (2s, 3p, 4d, 5f …): the 2s curve starts at aK, falls, crosses zero (the radial node,
              circled) and goes negative; the 3p, 4d, 5f … curves start at zero, rise, then cross the axis once — one
              radial node.
            </p>
          </DiagramBox>
        </NoteBlock>
      </SourcePage>

      <SourcePage page={133}>
        <DefinitionCard term="Radial node"><p>A radial node is a finite radius at which the radial wave function crosses zero. The endpoints r = 0 and r → ∞ are not counted as radial nodes.</p></DefinitionCard>
        <NoteBlock title="Radial nodes from the polynomial">
          <FormulaLine math="R(r)=K\,e^{-\sigma/2}\,\sigma^{l}\,(a-b\sigma)" />
          <p>The factors vanish at σ → ∞ through the exponential, at σ = 0 through σ<sup>l</sup> when l ≠ 0, and at σ = a/b through (a − bσ). Only the finite polynomial root is the radial node in this one-node form.</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              No. of radial nodes = <MathText math="n-l-1" />
            </li>
            <li>r = 0 and r = ∞ are never considered as node.</li>
            <li>Node is always that point through which the wave passes (crosses).</li>
            <li>
              Only for s-orbital <MathText math="R(r)\neq0" /> at r = 0.
            </li>
          </ul>
        </NoteBlock>
        <NoteBlock title="Radial Probability Distribution Function [P(r) vs r]">
          <FormulaLine math="|\psi|^{2}\propto\text{Probability Density}\propto\frac{P}{dV}" />
          <FormulaLine math="P=|\psi|^{2}\,dV\times\text{constant}" />
          <p>(constant already involved in the radial function equation during the solution of SWE.)</p>
          <FormulaLine math="\text{Probability of finding of }e^{-}=\psi^{2}\,dV" />
          <FormulaLine math="\text{Radial Probability of finding }e^{-}=R^{2}(r)\,dV=\psi_r^{2}\,dV" />
          <FormulaLine math="dV=dx\,dy\,dz" />
          <DiagramBox title="Volume element in a sphere (diagram)">
            <svg role="img" aria-labelledby="volume-title volume-desc" viewBox="0 0 420 230" className="h-auto w-full"><title id="volume-title">Cartesian volume element within a sphere</title><desc id="volume-desc">A sphere of radius r contains a small rectangular differential volume dx dy dz near its surface.</desc><circle cx="185" cy="112" r="82" fill="#67e8f9" fillOpacity=".08" stroke="#67e8f9" strokeWidth="2"/><circle cx="185" cy="112" r="4" fill="#fbbf24"/><path d="M185 112L255 72" stroke="#e2e8f0" strokeWidth="1.6"/><text x="225" y="83" fill="#e2e8f0" fontSize="14">r</text><path d="M240 104h32v28h-32zM240 104l12 -9h32l-12 9M272 104l12 -9v28l-12 9" fill="#f472b6" fillOpacity=".28" stroke="#f472b6"/><text x="292" y="109" fill="#f9a8d4" fontSize="13">dx</text><text x="273" y="146" fill="#f9a8d4" fontSize="13">dy</text><text x="250" y="91" fill="#f9a8d4" fontSize="13">dz</text><text x="40" y="212" fill="#94a3b8" fontSize="13">dV = dx dy dz; (dV)total is the entire sphere</text></svg>
          </DiagramBox>
        </NoteBlock>
      </SourcePage>

      <SourcePage page={134}>
        <NoteBlock title="Radial distribution function and most probable radius">
          <p>Total Probability of finding of e&#8315; at a distance r from nucleus</p>
          <FormulaLine math="=\psi^{2}(r)\,dV" />
          <FormulaLine math="P_{\text{Total}}=R^{2}(r)\left(4\pi r^{2}\,dr\right)" />
          <FormulaLine math="\frac{P_{\text{Total}}}{dr}=4\pi r^{2}\,R^{2}(r)=P(r)=\text{Radial Distribution Function}" />
          <DiagramBox title="P(r) vs r for hydrogen s states">
            <RadialDistributionVisual />
            <FigureCaption>
              For n − l − 1 = 0 (1s, 2p, 3d, 4f, 5g …): a single hump rising from the origin to a peak then falling to
              zero. The peak sits at the most probable radius.
            </FigureCaption>
          </DiagramBox>
          <FormulaLine math="r_{mp}=\frac{n^{2}a_0}{Z}" />
          <FormulaLine math="P(r)=4\pi r^{2}\cdot\left(K\,e^{-\sigma/2}\,\sigma^{l}\right)^{2}" />
          <p>
            P(r) = 0 at r = 0 (from the r² factor, and additionally from σ<sup>l</sup> when l ≠ 0) and as r → ∞ (from the
            exponential factor).
          </p>
          <p>r_mp = most probable radius of electron from nucleus.</p>
          <ImportantNote title="Scope of the radius formula">The stated r<sub>mp</sub> = n<sup>2</sup>a<sub>0</sub>/Z applies here to the nodeless hydrogen-like sequence 1s, 2p, 3d, 4f, 5g, …; orbitals with radial nodes can have more than one radial-distribution maximum.</ImportantNote>
        </NoteBlock>
      </SourcePage>
      <SummaryStrip items={["The σ power reveals l; polynomial degree reveals n − l − 1.", "A radial node is a finite crossing of R(r), never an endpoint.", "P(r) = 4πr²R²(r) is probability per unit radial distance."]} />

      <AuditComment pages="132-134" unclear={0} />
    </AtomicPartShell>
  );
}
