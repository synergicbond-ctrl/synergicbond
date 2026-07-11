"use client";

import { AtomicPartShell, AuditComment, DiagramBox, FormulaLine, MathText, NoteBlock, SourcePage } from "./_shared";

export default function Part53() {
  return (
    <AtomicPartShell part={53} title="7i Orbitals and Hybridisation Bond-Angle Proofs (sp, sp²)" pages="167-169">
      <SourcePage page={167}>
        <NoteBlock title="7i atomic orbitals (printed)">
          <p>There are 13 7i orbitals, labelled by their angular polynomials (e.g.</p>
          <FormulaLine math="7i_{z^{6}},\ 7i_{yz^{5}},\ 7i_{xz^{5}},\ 7i_{xyz^{4}},\ 7i_{(x^{2}-y^{2})z^{4}},\ 7i_{y(3x^{2}-y^{2})(11z^{3}-3zr^{2})},\ \dots,\ 7i_{x^{6}-15x^{4}y^{2}+15x^{2}y^{4}-y^{6}}" />
          <DiagramBox title="Thirteen 7i orbitals (printed)">
            <p>
              Thirteen 3-D orbital shapes, orange (+) / white (−). They range from the axial <MathText math="7i_{z^{6}}" />
              (many stacked rings and lobes along z) through progressively more multi-lobed rosettes to the equatorial
              members, each name shown beneath its image.
            </p>
          </DiagramBox>
        </NoteBlock>
      </SourcePage>

      <SourcePage page={168}>
        <NoteBlock title="Chemical Bonding — sp hybridisation gives 180°">
          <p>Problem — In sp hybridization, show that the angle between the two hybrid bonds is 180°.</p>
          <p>Solution — As the two hybrids are equivalent, each must have equal s and p character.</p>
          <FormulaLine math="\psi_1=\frac{1}{\sqrt{2}}s+\frac{1}{\sqrt{2}}p_1" />
          <FormulaLine math="\psi_2=\frac{1}{\sqrt{2}}s+\frac{1}{\sqrt{2}}p_2" />
          <p>Since ⟨ψ₁|ψ₂⟩ = 0,</p>
          <FormulaLine math="\left\langle\frac{1}{\sqrt{2}}(s+p_1)\middle|\frac{1}{\sqrt{2}}(s+p_2)\right\rangle=0" />
          <FormulaLine math="\frac{1}{2}\langle s|s\rangle+\frac{1}{2}\langle p_1|p_2\rangle+\frac{1}{2}\langle s|p_2\rangle+\frac{1}{2}\langle p_1|s\rangle=0" />
          <p>The last two terms are zero. If θ₁₂ is the angle between the hybrids,</p>
          <FormulaLine math="\frac{1}{2}+\frac{1}{2}\cos\theta_{12}=0\quad\text{or}\quad\cos\theta_{12}=-1" />
          <FormulaLine math="\theta_{12}=180^{\circ}" />
        </NoteBlock>
        <NoteBlock title="sp² hybridisation gives 120°">
          <p>Problem — Show that the three hybrid bonds in sp² hybridization are inclined to each other by 120°.</p>
          <p>
            Solution — Of the 3p-orbitals we leave one (say p_z) unmixed and mix the other two with the s-orbital, so the
            three hybrids lie in the xy-plane.
          </p>
          <FormulaLine math="\phi=a\,p_x+b\,p_y" />
          <FormulaLine math="\psi_1=c_1 s+c_2 p_1" />
          <p>Each hybrid has one-third s-character and two-third p-character:</p>
          <FormulaLine math="c_1^{2}=\frac{1}{3},\ c_2^{2}=\frac{2}{3}\quad\text{or}\quad c_1=\frac{1}{\sqrt{3}},\ c_2=\sqrt{\frac{2}{3}}" />
          <FormulaLine math="\psi_1=\frac{1}{\sqrt{3}}s+\sqrt{\frac{2}{3}}p_1\qquad \psi_2=\frac{1}{\sqrt{3}}s+\sqrt{\frac{2}{3}}p_2" />
          <p>Since ψ₁ and ψ₂ are orthogonal,</p>
          <FormulaLine math="\frac{1}{3}\langle s|s\rangle+\frac{2}{3}\langle p_1|p_2\rangle+\frac{\sqrt{2}}{3}\langle s|p_2\rangle+\frac{\sqrt{2}}{3}\langle p_1|s\rangle=0" />
          <p>The net s–p overlap on the same nucleus is zero, so, writing p₂ = p₁ cos θ₁₂,</p>
          <FormulaLine math="\frac{1}{3}+\frac{2}{3}\langle p_1|p_1\rangle\cos\theta_{12}=0\quad\text{or}\quad\cos\theta_{12}=-\frac{1}{2}" />
          <FormulaLine math="\theta_{12}=120^{\circ}" />
        </NoteBlock>
      </SourcePage>

      <SourcePage page={169}>
        <NoteBlock title="sp³ hybridisation gives 109°28′">
          <p>Problem — Prove that the angle between any two of the sp³ hybrids is 109°28′.</p>
          <p>
            Solution — A linear combination of three p-orbitals φ = a·p_x + b·p_y + c·p_z gives another p-orbital p₁ in the
            direction of the first bond. The hybrid of the first bond is
          </p>
          <FormulaLine math="\psi_1=c_1 s+c_2 p_1" />
          <p>Each of the four equivalent hybrids has ¼ s-character and ¾ p-character:</p>
          <FormulaLine math="c_1^{2}=\frac{1}{4},\ c_2^{2}=\frac{3}{4}" />
          <FormulaLine math="\psi_1=\frac{1}{2}s+\frac{\sqrt{3}}{2}p_1\qquad \psi_2=\frac{1}{2}s+\frac{\sqrt{3}}{2}p_2" />
          <p>Since ψ₁ and ψ₂ are orthogonal,</p>
          <FormulaLine math="\frac{1}{4}\langle s|s\rangle+\frac{3}{4}\langle p_1|p_2\rangle+\frac{\sqrt{3}}{4}\langle s|p_2\rangle+\frac{\sqrt{3}}{4}\langle p_1|s\rangle=0" />
          <p>The s–p overlap terms vanish; writing p₂ = p₁ cos θ₁₂,</p>
          <FormulaLine math="\frac{1}{4}+\frac{3}{4}\langle p_1|p_1\rangle\cos\theta_{12}=0" />
          <FormulaLine math="\cos\theta_{12}=-\frac{1}{3}\quad\text{or}\quad\theta_{12}=109^{\circ}28'" />
          <p>(after G. Aruldhas)</p>
        </NoteBlock>
      </SourcePage>

      <AuditComment pages="167-169" unclear={0} />
    </AtomicPartShell>
  );
}
