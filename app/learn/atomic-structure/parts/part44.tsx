"use client";

import { AtomicPartShell, AuditComment, DiagramBox, FormulaLine, MathText, NoteBlock, SourcePage } from "./_shared";
import { DefinitionCard, FigureCaption, ImportantNote, LearningObjectives, SummaryStrip } from "../_components/AtomicLearning";
import { DotDensityOrbitalVisual, ElectronDensityGridVisual, RadialDistributionVisual } from "../_components/AtomicVisuals";

export default function Part44() {
  return (
    <AtomicPartShell part={44} title="Real Hydrogen Wave Functions and Electron-Density Graphs" pages="138-140">
      <LearningObjectives items={["read real Cartesian forms of p and d hydrogen orbitals", "separate the sign of ψ from the non-negative density ψ²", "relate radial nodes to density shells and distribution humps"]} />
      <SourcePage page={138}>
        <DefinitionCard term="Real hydrogen-orbital forms"><p>Real p and d wave functions are formed from real combinations of the angular solutions. The coordinate relations below connect their Cartesian labels to spherical polar coordinates.</p></DefinitionCard>
        <NoteBlock title="Real Wave Functions For Hydrogen Atom">
          <p>With the coordinate relations z = r cos θ, x = r sin θ cos φ, y = r sin θ sin φ:</p>
          <FormulaLine math="\psi_{2p_x}=\frac{1}{4\sqrt{2\pi}}\left(\frac{1}{a_0}\right)^{3/2}\frac{r}{a_0}\,e^{-r/2a_0}\sin\theta\cos\phi" />
          <FormulaLine math="\psi_{2p_y}=\frac{1}{4\sqrt{2\pi}}\left(\frac{1}{a_0}\right)^{3/2}\frac{r}{a_0}\,e^{-r/2a_0}\sin\theta\sin\phi" />
          <FormulaLine math="\psi_{2p_z}=\frac{1}{4\sqrt{2\pi}}\left(\frac{1}{a_0}\right)^{3/2}\frac{r}{a_0}\,e^{-r/2a_0}\cos\theta" />
          <FormulaLine math="\psi_{3p_x}=\frac{\sqrt{2}}{81\sqrt{\pi}}\left(\frac{1}{a_0}\right)^{3/2}\left(6\frac{r}{a_0}-\frac{r^{2}}{a_0^{2}}\right)e^{-r/3a_0}\sin\theta\cos\phi" />
          <FormulaLine math="\psi_{3p_y}=\frac{\sqrt{2}}{81\sqrt{\pi}}\left(\frac{1}{a_0}\right)^{3/2}\left(6\frac{r}{a_0}-\frac{r^{2}}{a_0^{2}}\right)e^{-r/3a_0}\sin\theta\sin\phi" />
          <FormulaLine math="\psi_{3p_z}=\frac{\sqrt{2}}{81\sqrt{\pi}}\left(\frac{1}{a_0}\right)^{3/2}\left(6\frac{r}{a_0}-\frac{r^{2}}{a_0^{2}}\right)e^{-r/3a_0}\cos\theta" />
          <FormulaLine math="\psi_{3d_{z^{2}}}=\frac{1}{81\sqrt{6\pi}}\left(\frac{1}{a_0}\right)^{3/2}\frac{r^{2}}{a_0^{2}}\,e^{-r/3a_0}\left(3\cos^{2}\theta-1\right)" />
          <FormulaLine math="\psi_{3d_{xz}}=\frac{\sqrt{2}}{81\sqrt{\pi}}\left(\frac{1}{a_0}\right)^{3/2}\frac{r^{2}}{a_0^{2}}\,e^{-r/3a_0}\sin\theta\cos\theta\cos\phi" />
          <FormulaLine math="\psi_{3d_{yz}}=\frac{\sqrt{2}}{81\sqrt{\pi}}\left(\frac{1}{a_0}\right)^{3/2}\frac{r^{2}}{a_0^{2}}\,e^{-r/3a_0}\sin\theta\cos\theta\sin\phi" />
          <FormulaLine math="\psi_{3d_{x^{2}-y^{2}}}=\frac{1}{81\sqrt{2\pi}}\left(\frac{1}{a_0}\right)^{3/2}\frac{r^{2}}{a_0^{2}}\,e^{-r/3a_0}\sin^{2}\theta\cos 2\phi" />
          <FormulaLine math="\psi_{3d_{xy}}=\frac{1}{81\sqrt{2\pi}}\left(\frac{1}{a_0}\right)^{3/2}\frac{r^{2}}{a_0^{2}}\,e^{-r/3a_0}\sin^{2}\theta\sin 2\phi" />
        </NoteBlock>
      </SourcePage>

      <SourcePage page={139}>
        <NoteBlock title="Graphs — Electron-density distribution in 1s, 2s and 3s-orbitals">
          <p>
            The lower part of the fig. shows how the electron density, represented by <MathText math="\psi^{2}" /> varies as
            a function of distance from the nucleus. In the 2s and 3s-orbitals, the electron-density function drops to zero
            at certain distances from the nucleus. The spherical surfaces around the nucleus at which{" "}
            <MathText math="\psi^{2}" /> is zero are called nodes.
          </p>
          <DiagramBox title="1s, 2s and 3s: ψ, ψ² and radial distribution">
            <ElectronDensityGridVisual />
            <FigureCaption>
              Three columns (1s: n=1,l=0; 2s: n=2,l=0; 3s: n=3,l=0). Top row: dot-density clouds — 1s a single ball, 2s a
              core plus one shell, 3s a core plus two shells. Middle row: ψ(r) vs r — 1s decays monotonically; 2s crosses
              the axis once (one radial node, marked); 3s crosses twice. Third row: ψ²(r) vs r — same but all-positive,
              nodes marked where the curve touches zero. Bottom row: 4πr²ψ²(r) vs r — 1s one hump, 2s two humps, 3s three
              humps, each tallest peak at r_max.
            </FigureCaption>
          </DiagramBox>
          <DiagramBox title="Dot-density photographs: 1s through 5s">
            <DotDensityOrbitalVisual orbitals={["1s", "2s", "3s", "4s", "5s"]} />
            <FigureCaption>Bright rings mark where the electron is most often found; dark gaps between rings are the radial nodes (count = n − 1 for s orbitals).</FigureCaption>
          </DiagramBox>
          <DiagramBox title="Radial distribution function, 1s vs 2s vs 3s">
            <RadialDistributionVisual />
            <FigureCaption>Each curve is scaled to the same peak height; the number of humps equals n, and each tallest peak marks the most probable radius r_max.</FigureCaption>
          </DiagramBox>
          <p>For H:</p>
          <FormulaLine math="r_{mp}=0.529\ \text{Å}" />
          <ImportantNote>For H, the 1s radial-distribution maximum occurs at a<sub>0</sub> = 0.529 Å. The individual curves for 2s and 3s have additional maxima because radial nodes divide the probability into shells.</ImportantNote>
        </NoteBlock>
      </SourcePage>

      <SourcePage page={140}>
        <NoteBlock title="Electron-density distribution in 2pₓ, 3pₓ and 4pₓ orbitals">
          <DiagramBox title="pₓ sequence: radial nodes increase with n">
            <svg role="img" aria-labelledby="px-density-title px-density-desc" viewBox="0 0 700 230" className="h-auto w-full"><title id="px-density-title">2p x, 3p x and 4p x radial-node sequence</title><desc id="px-density-desc">Three p x dumbbell diagrams show zero, one and two radial nodes as the principal quantum number increases.</desc>{[[125,"2pₓ",0,"#67e8f9"],[350,"3pₓ",1,"#facc15"],[575,"4pₓ",2,"#f472b6"]].map(([cx,label,nodes,col])=><g key={label as string}><text x={cx as number} y="25" textAnchor="middle" fill={col as string} fontSize="16" fontWeight="700">{label as string}</text><ellipse cx={(cx as number)-48} cy="95" rx="43" ry="25" fill={col as string} fillOpacity=".3" stroke={col as string} strokeWidth="2"/><ellipse cx={(cx as number)+48} cy="95" rx="43" ry="25" fill={col as string} fillOpacity=".3" stroke={col as string} strokeWidth="2"/><path d={`M${cx} 48V142`} stroke="#94a3b8" strokeDasharray="4 4"/>{Array.from({length:nodes as number},(_,i)=><ellipse key={i} cx={(cx as number)-48} cy="95" rx={18+i*9} ry={10+i*5} fill="none" stroke="#08111f" strokeWidth="5"/>)}<text x={cx as number} y="165" textAnchor="middle" fill="#e2e8f0" fontSize="13">{nodes as number} radial node{nodes===1?"":"s"}</text></g>)}<text x="18" y="215" fill="#94a3b8" fontSize="12">all pₓ orbitals retain the yz angular nodal plane; added nodes are spherical radial surfaces</text></svg>
            <FigureCaption>
              Three columns (2pₓ, 3pₓ, 4pₓ). Top row: dumbbell dot-density along the x-axis, gaining extra dotted shells as
              n increases. Second row: ψ(r) vs r — 2pₓ rises to one peak and decays (no radial node); 3pₓ crosses the axis
              once; 4pₓ crosses twice. Third row: ψ²(r) vs r — 2pₓ one hump, 3pₓ two humps, 4pₓ three humps. Bottom row:
              4πr²ψ²(r) vs r — the number of humps increases with n and the outermost (tallest) peak sits at r_max.
            </FigureCaption>
          </DiagramBox>
        </NoteBlock>
      </SourcePage>
      <SummaryStrip items={["Coordinate substitutions turn angular factors into real p and d labels.", "Nodes are surfaces where ψ² = 0, even though ψ changes sign across them.", "For a fixed l, increasing n adds radial nodes and radial-distribution humps."]} />

      <AuditComment pages="138-140" unclear={0} />
    </AtomicPartShell>
  );
}
