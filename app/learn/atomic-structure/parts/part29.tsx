"use client";

import { AtomicPartShell, AuditComment, DiagramBox, FormulaLine, MathText, NoteBlock, SourcePage } from "./_shared";

export default function Part29() {
  return (
    <AtomicPartShell part={29} title="Magnetic and Spin Quantum Numbers, (n+l) Rule" pages="90-92">
      <SourcePage page={90}>
        <NoteBlock title="3. Magnetic Quantum Number (m)">
          <p>
            angular motion → electric field → magnetic field. Under the influence of external magnetic field, the electrons of
            subshell can orient themselves in certain preferred regions of space around the orbitals. The Magnetic Quantum
            Number determines no. of preferred orientation of the e&#8315; of a subshell. It depends on the value of l.
          </p>
          <FormulaLine math="\text{Preferred Orientation } m=-l\ \text{to}\ +l" />
          <FormulaLine math="s:\ m=0" />
          <FormulaLine math="p:\ m=-1,0,+1" />
          <FormulaLine math="d:\ m=-2,-1,0,+1,+2" />
          <FormulaLine math="f:\ m=-3,-2,-1,0,+1,+2,+3" />
          <p>
            Side notes: <MathText math="p_x,p_y=\pm1" />, <MathText math="p_z=0" />;{" "}
            <MathText math="d_{xy},d_{x^2-y^2}=\pm2" />; <MathText math="d_{yz},d_{zx}=\pm1" />;{" "}
            <MathText math="d_{z^2}=0" />
          </p>
          <DiagramBox title="Orientations under a magnetic field H (printed)">
            <p>
              Precessing orbit sketches for <MathText math="m_1=1" />, <MathText math="m_1=0" /> and{" "}
              <MathText math="m_1=-1" />, and a fan of allowed projections 2, 1, 0, −1, −2 along the z-axis under field H.
            </p>
          </DiagramBox>
        </NoteBlock>
      </SourcePage>

      <SourcePage page={91}>
        <NoteBlock title="4. Spin Quantum Number (s)">
          <p>It gives information about spin angular momentum (spin).</p>
          <FormulaLine math="\text{Spin angular momentum}=\sqrt{s(s+1)}\,\frac{h}{2\pi}" />
          <p>
            It has two possible values <MathText math="+\tfrac{1}{2},-\tfrac{1}{2}" />. Spinning e&#8315; can have only two
            possibilities, it can spin clockwise or anticlockwise.
          </p>
        </NoteBlock>
        <NoteBlock title="Find (n+l) value">
          <FormulaLine math="1s:\ n=1" />
          <FormulaLine math="2p:\ n=2,\ l=1,\ n+l=3\qquad 3s:\ n=3,\ l=0,\ n+l=3" />
          <FormulaLine math="3d:\ n=3,\ l=2,\ n+l=5\qquad 5p:\ n=5,\ l=1,\ n+l=6\qquad 6f:\ n=6,\ l=3,\ n+l=9" />
          <FormulaLine math="7p:\ n=7,\ l=1,\ n+l=8\qquad 7s:\ n=7,\ l=0,\ n+l=7\qquad 4f:\ n=4,\ l=3,\ n+l=7" />
        </NoteBlock>
        <NoteBlock title="Increasing order of energy">
          <p>(a) 2p, 3p, 3d, 5f — n+l values 3, 4, 5, 8:</p>
          <FormulaLine math="2p<3p<3d<5f" />
          <p>(b) 4s, 3d, 4f, 6s, 7p — n+l values 4, 5, 7, 6, 8:</p>
          <FormulaLine math="4s<3d<6s<4f<7p" />
          <p>(c) 4s, 3d, 4p, 5s — n+l values 4, 5, 5, 5:</p>
          <FormulaLine math="4s<3d<4p<5s" />
        </NoteBlock>
      </SourcePage>

      <SourcePage page={92}>
        <NoteBlock title="Increasing order of energy (continued)">
          <p>(d) 4f, 7p, 8s, 5d, 6p — n+l values 7, 8, 8, 7, 7:</p>
          <FormulaLine math="4f<5d<6p<7p<8s" />
        </NoteBlock>
      </SourcePage>

      <AuditComment pages="90-92" unclear={0} note="page 92 has a single continuation item" />
    </AtomicPartShell>
  );
}
