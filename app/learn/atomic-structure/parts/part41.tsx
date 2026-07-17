import { AtomicPartShell, AuditComment, DataTable, DiagramBox, FormulaLine, NoteBlock, SourcePage } from "./_shared";
import { ConceptCard, DefinitionCard, FigureCaption, LearningObjectives, SummaryStrip } from "../_components/AtomicLearning";
import { Dz2OrbitalVisual } from "../_components/AtomicVisuals";

export default function Part41() {
  return (
    <AtomicPartShell part={41} title="d-Orbital Angular Functions, Nodal Surfaces and Radial Functions" pages="129-131">
      <LearningObjectives items={["relate each real d orbital to its angular function", "locate the nodal cones of dᶻ² and the nodal planes of dₓᵧ", "read the n and l dependence of hydrogen-like radial functions"]} />
      <SourcePage page={129}>
        <DefinitionCard term="Angular function for l = 2"><p>The following real angular forms describe the directional dependence of the five d orbitals; their signs distinguish wave-function phase.</p></DefinitionCard>
        <NoteBlock title="d-orbital angular functions (l = 2)">
          <FormulaLine math="m_l=0\ (d_{z^{2}}):\quad Y=\sqrt{\frac{5}{16\pi}}\left(3\cos^{2}\theta-1\right)" />
          <FormulaLine math="m_l=\pm1\ (d_{xz}):\quad Y=\sqrt{\frac{15}{4\pi}}\sin\theta\cos\theta\cos\phi" />
          <FormulaLine math="(d_{yz}):\quad Y=\sqrt{\frac{15}{4\pi}}\sin\theta\sin\phi\cos\theta" />
          <FormulaLine math="m_l=\pm2\ (d_{xy}):\quad Y=\sqrt{\frac{15}{4\pi}}\sin^{2}\theta\sin 2\phi" />
          <FormulaLine math="(d_{x^{2}-y^{2}}):\quad Y=\sqrt{\frac{15}{4\pi}}\sin^{2}\theta\cos 2\phi" />
        </NoteBlock>
        <NoteBlock title="dz² orbital">
          <FormulaLine math="Y(\theta,\phi)=\sqrt{\frac{5}{16\pi}}\cdot\left(3\cos^{2}\theta-1\right)" />
          <p>There are two angular-node angles: θ = 54.7°, 125.3°.</p>
          <p>The nodal surfaces are two cones.</p>
        </NoteBlock>
      </SourcePage>

      <SourcePage page={130}>
        <NoteBlock title="dz² nodal cone calculation">
          <FormulaLine math="\psi^{2}=0\ \Rightarrow\ 3\cos^{2}\theta-1=0" />
          <FormulaLine math="\theta=\cos^{-1}\!\left(\frac{1}{\sqrt{3}}\right)=54.7^{\circ}" />
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
          <DiagramBox title="dᶻ² angular sign and nodal-cone map">
            <Dz2OrbitalVisual />
            <FigureCaption>Two positive lobes lie along the z-axis and a negative toroidal ring surrounds the origin in the xy-plane. The nodal cones at 54.7° separate the positive lobes from the negative ring. The table gives the angular factor’s values along selected directions.</FigureCaption>
          </DiagramBox>
        </NoteBlock>
        <NoteBlock title="dxy orbital">
          <FormulaLine math="Y(\theta,\phi)=\sqrt{\frac{15}{4\pi}}\sin^{2}\theta\sin 2\phi" />
          <p>Shape — double dumb-bell.</p>
          <p>Angular Node:</p>
          <FormulaLine math="\theta=0^{\circ}\Rightarrow z\text{-axis}" />
          <FormulaLine math="\phi=0^{\circ},90^{\circ},180^{\circ},270^{\circ}\ \ [0^{\circ},180^{\circ}\Rightarrow x\text{-axis};\ 90^{\circ},270^{\circ}\Rightarrow y\text{-axis}]" />
          <p>only two nodal surfaces = xz and yz planes.</p>
          <DiagramBox title="dₓᵧ orientation and nodes">
            <svg role="img" aria-labelledby="dxy-title dxy-desc" viewBox="0 0 420 250" className="h-auto w-full"><title id="dxy-title">d x y orbital in the x y plane</title><desc id="dxy-desc">Four alternating-sign lobes sit between the x and y axes. The x z and y z planes are nodal planes.</desc><path d="M210 25V225M35 125H385" stroke="#94a3b8" strokeWidth="2"/><text x="372" y="117" fill="#e2e8f0" fontSize="14">x</text><text x="218" y="38" fill="#e2e8f0" fontSize="14">y</text>{[[145,70,"+","#67e8f9"],[275,70,"−","#f472b6"],[145,180,"−","#f472b6"],[275,180,"+","#67e8f9"]].map(([x,y,s,c])=><g key={`${x}-${y}`}><ellipse cx={x as number} cy={y as number} rx="48" ry="28" transform={`rotate(${x===145?-45:45} ${x} ${y})`} fill={c as string} fillOpacity=".3" stroke={c as string} strokeWidth="2"/><text x={x as number} y={(y as number)+6} textAnchor="middle" fill={c as string} fontSize="17">{s as string}</text></g>)}<circle cx="210" cy="125" r="4" fill="#fbbf24"/><text x="16" y="244" fill="#94a3b8" fontSize="12">lobes lie between axes; xz and yz are the two angular nodal planes</text></svg>
            <FigureCaption>Four lobes lie in the xy-plane between the axes and alternate in sign (+, −, +, −). The xz and yz planes are nodal planes; the dashed φ rays are directions used when evaluating sin 2φ.</FigureCaption>
          </DiagramBox>
        </NoteBlock>
      </SourcePage>

      <SourcePage page={131}>
        <ConceptCard title="Radial-function pattern"><p>The exponential controls the long-range decay, σ<sup>l</sup> supplies the origin behaviour, and the polynomial of degree n − l − 1 controls radial nodes.</p></ConceptCard>
        <NoteBlock title="Radial Function">
          <FormulaLine math="R(r)=f(n,l)" />
          <FormulaLine math="\sigma=\frac{2Zr}{n a_0}\qquad a_0=0.529\ \text{Å}" />
          <p>1s-orbital (n = 1, l = 0):</p>
          <FormulaLine math="R_{1s}(r)=2\left(\frac{Z}{a_0}\right)^{3/2}e^{-\sigma/2}" />
          <p>2s-orbital (n = 2, l = 0):</p>
          <FormulaLine math="R_{2s}(r)=\frac{1}{2\sqrt{2}}\left(\frac{Z}{a_0}\right)^{3/2}(2-\sigma)\,e^{-\sigma/2}" />
          <p>2p-orbital (n = 2, l = 1):</p>
          <FormulaLine math="R_{2p}(r)=\frac{1}{2\sqrt{6}}\left(\frac{Z}{a_0}\right)^{3/2}\sigma\,e^{-\sigma/2}" />
          <p>3s-orbital (n = 3, l = 0):</p>
          <FormulaLine math="R_{3s}(r)=\frac{1}{9\sqrt{3}}\left(\frac{Z}{a_0}\right)^{3/2}\left(6-6\sigma+\sigma^{2}\right)e^{-\sigma/2}" />
          <p>3p-orbital (n = 3, l = 1):</p>
          <FormulaLine math="R_{3p}(r)=\frac{1}{9\sqrt{6}}\left(\frac{Z}{a_0}\right)^{3/2}\sigma\,(4-\sigma)\,e^{-\sigma/2}" />
          <p>3d-orbital (n = 3, l = 2):</p>
          <FormulaLine math="R_{3d}(r)=\frac{1}{9\sqrt{30}}\left(\frac{Z}{a_0}\right)^{3/2}\sigma^{2}\,e^{-\sigma/2}" />
          <p>General:</p>
          <FormulaLine math="R_{n,l}(r)=K\left(\frac{Z}{a_0}\right)^{3/2}e^{-\sigma/2}\,\sigma^{l}\cdot\underbrace{\left(a-b\sigma+c\sigma^{2}\cdots\right)}_{\text{polynomial of }\sigma^{\,n-l-1}}" />
        </NoteBlock>
      </SourcePage>
      <SummaryStrip items={["For d orbitals, l = 2 and there are two angular nodes.", "dᶻ² has conical nodes; dₓᵧ has xz and yz nodal planes.", "Radial nodes are encoded by the polynomial degree n − l − 1."]} />

      <AuditComment pages="129-131" unclear={0} />
    </AtomicPartShell>
  );
}
