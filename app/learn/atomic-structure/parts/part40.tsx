"use client";

import { AtomicPartShell, AuditComment, DataTable, DiagramBox, FormulaLine, MathText, NoteBlock, SourcePage } from "./_shared";

export default function Part40() {
  return (
    <AtomicPartShell part={40} title="Radial Probability Distribution, Normalisation and Angular Functions" pages="125-128">
      <SourcePage page={125}>
        <NoteBlock title="Radial probability density and distribution">
          <FormulaLine math="\text{Probability}=\left(R(r)\,\Theta(\theta)\,\Phi(\phi)\right)^{2}r^{2}\sin\theta\,d\theta\,d\phi\;[=d\tau]" />
          <p>
            Radial Probability density — It is probability at distance r in a specified direction. Radial probability
            density at constant angle is
          </p>
          <FormulaLine math="=[R(r)]^{2}=\psi^{2}(r)" />
          <p>Radial probability in a volume 4πr²dr at distance &apos;r&apos; from nucleus</p>
          <FormulaLine math="=[R(r)]^{2}\,4\pi r^{2}dr" />
          <DiagramBox title="Shell of thickness dr (diagram)">
            <p>Two concentric spheres of radii r and r + dr; the thin shell between them is the volume element.</p>
          </DiagramBox>
          <FormulaLine math="\text{vol}=\frac{4}{3}\pi(r+dr)^{3}-\frac{4}{3}\pi r^{3}" />
          <FormulaLine math="=\frac{4}{3}\pi\left(r^{3}+3r^{2}dr+3r\,dr^{2}+dr^{3}-r^{3}\right)" />
          <FormulaLine math="=\frac{4}{3}\pi\cdot 3r^{2}dr=4\pi r^{2}dr" />
          <p>Radial probability distribution — It give spherical sence of probability without any specified direction.</p>
          <FormulaLine math="\text{Radial probability distribution}=[R(r)]^{2}\,4\pi r^{2}dr=4\pi r^{2}\psi^{2}(r)\,dr=P(r)" />
          <FormulaLine math="\text{Radial probability distribution function}=4\pi r^{2}\psi^{2}(r)=\frac{P(r)}{dr}" />
        </NoteBlock>
      </SourcePage>

      <SourcePage page={126}>
        <NoteBlock title="Total probability and normalisation">
          <p>Total probability</p>
          <FormulaLine math="\psi_{n,l,m}^{2}\,d\tau\qquad\text{or}\qquad \psi_{n,l,m}\,\psi_{n,l,m}^{*}\,d\tau" />
          <p>Total probability over entire vol is unity i.e.</p>
          <FormulaLine math="\int_{0}^{\infty}\int_{0}^{\pi}\int_{0}^{2\pi}\psi_{n,l,m}^{2}\,r^{2}\sin\theta\,d\theta\,d\phi\,dr=1" />
          <FormulaLine math="\text{or}\quad\int_{0}^{\infty}\int_{0}^{\pi}\int_{0}^{2\pi}\psi_{n,l,m}\,\psi_{n,l,m}^{*}\,r^{2}\sin\theta\,d\theta\,d\phi\,dr=1" />
          <p>condition of normalisation of radial and angular parts of the wave functions are:</p>
          <FormulaLine math="\int_{0}^{\infty}\left[R_{n,l}(r)\right]^{2}r^{2}\,dr=1" />
          <FormulaLine math="\int_{0}^{2\pi}\left[\Phi_m(\phi)\right]\left[\Phi_m^{*}(\phi)\right]d\phi=1" />
          <FormulaLine math="\int_{0}^{\pi}\left[\Theta(\theta)\right]\left[\Theta^{*}(\theta)\right]\sin\theta\,d\theta=1" />
        </NoteBlock>
        <NoteBlock title="Complete wave function">
          <p>It should be</p>
          <FormulaLine math="\boxed{\psi_{n,l,m,s}=\psi_{\text{orbital}}\times\psi_{\text{spin}}}" />
        </NoteBlock>
      </SourcePage>

      <SourcePage page={127}>
        <NoteBlock title="cos θ reference table">
          <DataTable
            headers={["θ", "0", "30", "45", "60", "90"]}
            rows={[["cos θ", "1.0", "0.866", "0.707", "0.5", "0"]]}
          />
          <DataTable
            headers={["θ", "120", "135", "150", "180"]}
            rows={[["cos θ", "−0.5", "−0.707", "−0.866", "−1.0"]]}
          />
        </NoteBlock>
        <NoteBlock title="Angular Function Graphs">
          <FormulaLine math="Y(\theta,\phi)=f(l,m_l)" />
          <p>S-orbital (l = 0, m_l = 0):</p>
          <FormulaLine math="Y(\theta,\phi)=\sqrt{\frac{1}{4\pi}}" />
          <p>Independent from θ and φ ⇒ Spherical Graph ⇒ shape of s-orbital ⇒ spherical.</p>
          <DiagramBox title="s-orbital (diagram)">
            <p>A single sphere centred at the origin of the x, y, z axes.</p>
          </DiagramBox>
        </NoteBlock>
        <NoteBlock title="p-orbital angular functions">
          <FormulaLine math="l=1,\ m_l=0\ (p_z):\quad Y=\sqrt{\frac{3}{4\pi}}\cos\theta" />
          <FormulaLine math="m_l=\pm1\ (p_x):\quad Y=\sqrt{\frac{3}{4\pi}}\sin\theta\cos\phi" />
          <FormulaLine math="(p_y):\quad Y=\sqrt{\frac{3}{4\pi}}\sin\theta\sin\phi" />
        </NoteBlock>
      </SourcePage>

      <SourcePage page={128}>
        <NoteBlock title="pz orbital">
          <FormulaLine math="Y(\theta,\phi)=\sqrt{\frac{3}{4\pi}}\cos\theta" />
          <ul className="list-disc space-y-2 pl-5">
            <li>Shape — Dumbbell</li>
            <li>&apos;+&apos; and &apos;−&apos; only represents the sign of angular wave function</li>
            <li>Angular node = 1 (xy-plane)</li>
          </ul>
          <DiagramBox title="pz orbital (printed)">
            <p>
              Two lobes along the z-axis: an orange (+) lobe above and a white (−) lobe below, tangent at the origin.
              Dashed rays at 30°, 45°, 60°, 90°, 120°, 135°, 150° carry the values +0.866K, +0.707K, 0.5K, 0, −0.5K,
              −0.707K, −0.866K respectively (K cos θ). The xy-plane (90°) is the angular node.
            </p>
          </DiagramBox>
        </NoteBlock>
        <NoteBlock title="px orbital">
          <FormulaLine math="Y(\theta,\phi)=\sqrt{\frac{3}{4\pi}}\sin\theta\cos\phi" />
          <p>Angular nodes are always decided by the consideration of θ and φ.</p>
          <FormulaLine math="\theta=0^{\circ}\Rightarrow z\text{-axis}" />
          <FormulaLine math="\phi=90^{\circ},270^{\circ}\Rightarrow y\text{-axis}" />
          <p>Angular node = 1 (yz-plane).</p>
          <DiagramBox title="px orbital (diagram)">
            <p>
              Two lobes along the x-axis in the x–y plane: a (+) lobe toward +x and a (−) lobe toward −x, with dashed rays
              at 30°, 45°, 60°, 90° marking the angular spread; the yz-plane is the nodal plane.
            </p>
          </DiagramBox>
        </NoteBlock>
      </SourcePage>

      <AuditComment pages="125-128" unclear={0} />
    </AtomicPartShell>
  );
}
