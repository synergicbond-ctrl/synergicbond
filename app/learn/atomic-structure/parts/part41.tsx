"use client";

import { AtomicPartShell, AuditComment, DataTable, DiagramBox, FormulaLine, MathText, NoteBlock, SourcePage } from "./_shared";

export default function Part41() {
  return (
    <AtomicPartShell part={41} title="d-Orbital Angular Functions, Nodal Surfaces and Radial Functions" pages="129-131">
      <SourcePage page={129}>
        <NoteBlock title="d-orbital angular functions (l = 2)">
          <FormulaLine math="m_l=0\ (d_{z^{2}}):\quad Y=\sqrt{\frac{5}{16}}\left(3\cos^{2}\theta-1\right)" />
          <FormulaLine math="m_l=\pm1\ (d_{xz}):\quad Y=\sqrt{\frac{15}{4\pi}}\sin\theta\cos\theta\cos\phi" />
          <FormulaLine math="(d_{yz}):\quad Y=\sqrt{\frac{15}{4\pi}}\sin\theta\sin\phi\cos\theta" />
          <FormulaLine math="m_l=\pm2\ (d_{xy}):\quad Y=\sqrt{\frac{15}{4\pi}}\sin^{2}\theta\sin 2\phi" />
          <FormulaLine math="(d_{x^{2}-y^{2}}):\quad Y=\sqrt{\frac{15}{4\pi}}\sin^{2}\theta\cos 2\phi" />
        </NoteBlock>
        <NoteBlock title="dz² orbital">
          <FormulaLine math="Y(\theta,\phi)=\sqrt{\frac{5}{16\pi}}\cdot\left(3\cos^{2}\theta-1\right)" />
          <p>Angular Node = 2 at θ = 54.7°, 125.3°.</p>
          <p>Nodal Surface ⇒ both conical surface.</p>
        </NoteBlock>
      </SourcePage>

      <SourcePage page={130}>
        <NoteBlock title="dz² nodal cone calculation">
          <FormulaLine math="\psi^{2}=0\ \Rightarrow\ 3\cos^{2}\theta-1=0" />
          <FormulaLine math="\theta=\cos^{-1}\!\left(\frac{1}{\sqrt{3}}\right)=54.3^{\circ}" />
          <DataTable
            headers={["θ", "3cos²θ − 1"]}
            rows={[
              ["0", "2"],
              ["30°", "1.25"],
              ["45°", "0.5"],
              ["60°", "0.25"],
              ["90°", "−1"],
              ["135°", "0.5"],
              ["180°", "2"],
            ]}
          />
          <DiagramBox title="dz² orbital (diagram)">
            <p>
              Two green (+) lobes along the z-axis and a green (−) toroidal ring around the origin in the xy-plane. Dashed
              rays carry 1.25K, 0.5K, 2K near the top lobe (down to −K at 90° and +2K at the bottom). The two nodal cones at
              54.3° separate the (+) lobes from the (−) ring.
            </p>
          </DiagramBox>
        </NoteBlock>
        <NoteBlock title="dxy orbital">
          <FormulaLine math="Y(\theta,\phi)=\sqrt{\frac{15}{4\pi}}\sin^{2}\theta\sin 2\phi" />
          <p>Shape — double dumb-bell.</p>
          <p>Angular Node:</p>
          <FormulaLine math="\theta=0^{\circ}\Rightarrow z\text{-axis}" />
          <FormulaLine math="\phi=0^{\circ},90^{\circ},180^{\circ},270^{\circ}\ \ [0^{\circ},180^{\circ}\Rightarrow x\text{-axis};\ 90^{\circ},270^{\circ}\Rightarrow y\text{-axis}]" />
          <p>only two nodal surface = xz, yz plane.</p>
          <DiagramBox title="dxy orbital (diagram)">
            <p>
              Four lobes lying in the x–y plane between the axes, alternating sign (+, −, +, −), with dashed φ rays at 30°,
              45°, 60°, 90°, 120°, 135°, 150°, 180°. Nodal planes are xz and yz.
            </p>
          </DiagramBox>
        </NoteBlock>
      </SourcePage>

      <SourcePage page={131}>
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
          <FormulaLine math="R_{3s}(r)=\frac{1}{9\sqrt{3}}\left(\frac{Z}{a_0}\right)^{3/2}\left(6-6\sigma-\sigma^{2}\right)e^{-\sigma/2}" />
          <p>3p-orbital (n = 3, l = 1):</p>
          <FormulaLine math="R_{3p}(r)=\frac{1}{9\sqrt{6}}\left(\frac{Z}{a_0}\right)^{3/2}\sigma\,(4-\sigma)\,e^{-\sigma/2}" />
          <p>3d-orbital (n = 3, l = 2):</p>
          <FormulaLine math="R_{3d}(r)=\frac{1}{9\sqrt{30}}\left(\frac{Z}{a_0}\right)^{3/2}\sigma^{2}\,e^{-\sigma/2}" />
          <p>General:</p>
          <FormulaLine math="R_{n,l}(r)=K\left(\frac{Z}{a_0}\right)^{3/2}e^{-\sigma/2}\,\sigma^{l}\cdot\underbrace{\left(a-b\sigma+c\sigma^{2}\cdots\right)}_{\text{polynomial of }\sigma^{\,n-l-1}}" />
        </NoteBlock>
      </SourcePage>

      <AuditComment pages="129-131" unclear={0} />
    </AtomicPartShell>
  );
}
