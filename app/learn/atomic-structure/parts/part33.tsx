"use client";

import { AtomicPartShell, AuditComment, DiagramBox, FormulaLine, MathText, NoteBlock, SourcePage } from "./_shared";
import { OrbitalFillRowsVisual } from "../_components/AtomicVisuals";
import { DerivationPanel, ImportantNote, LearningObjectives, SummaryStrip, WorkedExample } from "../_components/AtomicLearning";

export default function Part33() {
  return (
    <AtomicPartShell part={33} title="Magnetic Moment Calculations" pages="103-105">
      <LearningObjectives items={["calculate spin-only moments from unpaired electrons", "compare moments through a ratio without decimal rounding", "apply the lanthanide g-factor route to Gd³⁺"]} />
      <SourcePage page={103}>
        <NoteBlock title="Spin-only moments of common ions">
          <FormulaLine math="Fe^{2+}=[Ar]\,3d^{6}\ (\uparrow\downarrow\,\uparrow\,\uparrow\,\uparrow\,\uparrow)\qquad\mu=\sqrt{4(4+2)}=\sqrt{24}\ \text{BM}" />
          <FormulaLine math="Cr^{+}=[Ar]\,3d^{5}\ (\uparrow\,\uparrow\,\uparrow\,\uparrow\,\uparrow)\qquad\mu=\sqrt{5(5+2)}=\sqrt{35}\ \text{BM}" />
          <FormulaLine math="Mn^{2+}=[Ar]\,3d^{5}\ (\uparrow\,\uparrow\,\uparrow\,\uparrow\,\uparrow)\qquad\mu=\sqrt{5(5+2)}=\sqrt{35}\ \text{BM}" />
          <FormulaLine math="Co^{3+}=[Ar]\,3d^{6}\ (\uparrow\downarrow\,\uparrow\,\uparrow\,\uparrow\,\uparrow)\qquad\mu=\sqrt{4(4+2)}=\sqrt{24}\ \text{BM}" />
          <FormulaLine math="Fe^{3+}=[Ar]\,3d^{5}\ (\uparrow\,\uparrow\,\uparrow\,\uparrow\,\uparrow)\qquad\mu=\sqrt{5(5+2)}=\sqrt{35}\ \text{BM}" />
        </NoteBlock>
        <WorkedExample title="Question — magnetic moment of Cr⁺ˣ">
          <p>
            Q. Magnetic moment of <MathText math="Cr^{+x}" /> is 3.87 BM. Calculate x.
          </p>
          <FormulaLine math="n=3" />
          <FormulaLine math="{}_{24}Cr=(\uparrow\,\uparrow\,\uparrow\,\uparrow\,\uparrow)\ (\uparrow)" />
          <FormulaLine math="Cr^{3+}=3d^{3}\ (\uparrow\,\uparrow\,\uparrow\,\square\,\square)" />
          <FormulaLine math="x=3" />
        </WorkedExample>
        <WorkedExample title="Ratio of magnetic moments of Co²⁺ and Ni²⁺">
          <p>Find the ratio of magnetic moment of Co&#178;&#8314; and Ni&#178;&#8314;.</p>
          <FormulaLine math="{}_{27}Co=4s^{2}3d^{7}\qquad Co^{2+}=3d^{7}\quad n=3\quad\mu=\sqrt{15}" />
          <FormulaLine math="{}_{28}Ni=4s^{2}3d^{8}\qquad Ni^{2+}=3d^{8}\quad n=2\quad\mu=\sqrt{8}" />
          <FormulaLine math="\frac{\mu_{Co^{2+}}}{\mu_{Ni^{2+}}}=\sqrt{\frac{15}{8}}" />
          <p>
            Magnetic moment of d-block elements <MathText math="=\sqrt{n(n+2)}" /> BM. This is not valid for lanthanides.
          </p>
        </WorkedExample>
      </SourcePage>

      <SourcePage page={104}>
        <NoteBlock title="Explanation — origin of magnetic moment">
          <p>Origin of magnetic moment → orbital motion and spin motion. In case of</p>
        </NoteBlock>
        <DerivationPanel title="Magnetic moment of Gd³⁺ (lanthanide treatment)">
          <p>Calculate the magnetic moment of Gd&#179;&#8314;</p>
          <FormulaLine math="Gd^{3+}=4f^{7}" />
          <FormulaLine math="\mu=g\sqrt{J(J+1)}" />
          <FormulaLine math="g=\frac{3}{2}+\frac{S(S+1)-L(L+1)}{2J(J+1)}" />
          <DiagramBox title="4f⁷ boxes">
            <OrbitalFillRowsVisual
              title="Half-filled 4f subshell"
              description="Seven 4f orbital boxes, each holding a single up arrow: seven unpaired electrons."
              rows={[{ label: "4f⁷", boxes: ["up", "up", "up", "up", "up", "up", "up"], note: "7 unpaired electrons" }]}
            />
            <p>Seven boxes each holding one electron (1 1 1 1 1 1 1).</p>
          </DiagramBox>
          <FormulaLine math="L=\sum m_l=(-3)+(-2)+(-1)+0+1+2+3=0" />
          <FormulaLine math="S=\sum m_s=\frac{7}{2}" />
          <FormulaLine math="g=\frac{3}{2}+\frac{\frac{7}{2}\left(\frac{9}{2}\right)-0}{2\cdot\frac{7}{2}\cdot\frac{9}{2}}=2" />
          <FormulaLine math="\mu=2\sqrt{S(S+1)}=2\sqrt{\frac{7}{2}\cdot\frac{9}{2}}=\sqrt{63}=7.93\ \text{BM}" />
        </DerivationPanel>
      </SourcePage>

      <ImportantNote title="Two treatments, two scopes">The <MathText math="\sqrt{n(n+2)}" /> BM expression is identified here as a d-block spin-only result; the Gd³⁺ calculation deliberately uses <MathText math="g\sqrt{J(J+1)}" /> instead.</ImportantNote>
      <SummaryStrip items={["For Fe²⁺ and Co³⁺, n = 4 gives √24 BM.", "For Co²⁺/Ni²⁺, preserve the exact ratio √(15/8).", "For Gd³⁺, L = 0, S = 7/2, g = 2, and μ = 7.93 BM."]} />

      <AuditComment pages="103-105" unclear={0} note="the final section contains no additional instructional material" />
    </AtomicPartShell>
  );
}
