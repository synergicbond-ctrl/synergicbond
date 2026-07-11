"use client";

import { AtomicPartShell, AuditComment, DiagramBox, FormulaLine, MathText, NoteBlock, SourcePage } from "./_shared";

export default function Part44() {
  return (
    <AtomicPartShell part={44} title="Real Hydrogen Wave Functions and Electron-Density Graphs" pages="138-140">
      <SourcePage page={138}>
        <NoteBlock title="Real Wave Functions For Hydrogen Atom (printed table)">
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
          <DiagramBox title="1s / 2s / 3s panels (printed)">
            <p>
              Three columns (1s: n=1,l=0; 2s: n=2,l=0; 3s: n=3,l=0). Top row: dot-density clouds — 1s a single ball, 2s a
              core plus one shell, 3s a core plus two shells. Middle row: ψ(r) vs r — 1s decays monotonically; 2s crosses
              the axis once (one radial node, marked); 3s crosses twice. Third row: ψ²(r) vs r — same but all-positive,
              nodes marked where the curve touches zero. Bottom row: 4πr²ψ²(r) vs r — 1s one hump, 2s two humps, 3s three
              humps, each tallest peak at r_max.
            </p>
          </DiagramBox>
          <p>For H:</p>
          <FormulaLine math="r_{mp}=0.529\ \text{Å}" />
        </NoteBlock>
      </SourcePage>

      <SourcePage page={140}>
        <NoteBlock title="Electron-density distribution in 2pₓ, 3pₓ and 4pₓ orbitals (printed)">
          <DiagramBox title="2pₓ / 3pₓ / 4pₓ panels (printed)">
            <p>
              Three columns (2pₓ, 3pₓ, 4pₓ). Top row: dumbbell dot-density along the x-axis, gaining extra dotted shells as
              n increases. Second row: ψ(r) vs r — 2pₓ rises to one peak and decays (no radial node); 3pₓ crosses the axis
              once; 4pₓ crosses twice. Third row: ψ²(r) vs r — 2pₓ one hump, 3pₓ two humps, 4pₓ three humps. Bottom row:
              4πr²ψ²(r) vs r — the number of humps increases with n and the outermost (tallest) peak sits at r_max.
            </p>
          </DiagramBox>
        </NoteBlock>
      </SourcePage>

      <AuditComment pages="138-140" unclear={0} />
    </AtomicPartShell>
  );
}
