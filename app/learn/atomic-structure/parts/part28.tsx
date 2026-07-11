"use client";

import { AtomicPartShell, AuditComment, DataTable, DiagramBox, FormulaLine, MathText, NoteBlock, SourcePage } from "./_shared";

export default function Part28() {
  return (
    <AtomicPartShell part={28} title="Azimuthal Quantum Number, Orbitals and Shapes" pages="87-89">
      <SourcePage page={87}>
        <NoteBlock title="Permissible value of l">
          <FormulaLine math="l=0\ \text{to}\ (n-1)" />
          <DataTable
            headers={["Subshell", "l", "Name"]}
            rows={[
              ["s", "0", "s — sharp"],
              ["p", "1", "p — principle"],
              ["d", "2", "d — diffuse"],
              ["f", "3", "f — fundamental"],
              ["g", "4", ""],
            ]}
          />
          <FormulaLine math="n=1\quad l=0\quad\text{1s}" />
          <FormulaLine math="n=2\quad l=0,1\quad\text{2s, 2p}" />
          <FormulaLine math="n=3\quad l=0,1,2\quad\text{3s, 3p, 3d}" />
          <FormulaLine math="n=4\quad l=0,1,2,3\quad\text{4s, 4p, 4d, 4f}" />
          <p>No. of value of l = n</p>
          <DataTable
            headers={["Subshell", "shape"]}
            rows={[
              ["s", "Spherical"],
              ["p", "dumbell"],
              ["d", "double dumbell"],
              ["f", "complex"],
            ]}
          />
          <p>min. value of n for a subshell = l + 1</p>
          <p>e.g. min value of n for g-subshell is 5.</p>
          <FormulaLine math="\text{Total number of orbital in a shell}=n^{2}" />
          <FormulaLine math="\text{Total number of orbital in a subshell}=2l+1" />
        </NoteBlock>
      </SourcePage>

      <SourcePage page={88}>
        <NoteBlock title="Orbitals per subshell">
          <FormulaLine math="s:\ 2l+1=2\times0+1=1" />
          <FormulaLine math="p:\ 2l+1=2\times1+1=3" />
          <FormulaLine math="d:\ 2l+1=2\times2+1=5" />
          <FormulaLine math="f:\ 2l+1=2\times3+1=7" />
          <DiagramBox title="Orbital boxes">
            <p>Rows of empty boxes: 1 for s, 3 for p, 5 for d and 7 for f — labelled orbital.</p>
          </DiagramBox>
          <FormulaLine math="\text{Total number of orbital in a shell}=n^{2}" />
          <FormulaLine math="n=1,\ l=0:\ \text{1s},\quad1=1^{2}" />
          <FormulaLine math="n=2,\ l=0,1:\ \text{2s 2p},\quad1+3=4=2^{2}" />
          <FormulaLine math="n=3,\ l=0,1,2:\ \text{3s 3p 3d},\quad1+3+5=9=3^{2}" />
          <FormulaLine math="n=4,\ l=0,1,2,3:\ \text{4s 4p 4d 4f},\quad1+3+5+7=16=4^{2}" />
          <p>Max two e&#8315; can reside in an orbital.</p>
          <FormulaLine math="\text{Max. no. of }e^{-}\text{ in a shell}=2\times\text{no. of orbital}=2n^{2}" />
          <FormulaLine math="\text{Max no. of }e^{-}\text{ in a subshell}=2(2l+1)=4l+2" />
          <DataTable
            headers={["Subshell", "Max e⁻"]}
            rows={[
              ["s", "2"],
              ["p", "6"],
              ["d", "10"],
              ["f", "14"],
            ]}
          />
          <DiagramBox title="Filled orbital boxes">
            <p>Boxes with paired ↑↓ arrows: 1 box for s, 3 for p, 5 for d, 7 for f.</p>
          </DiagramBox>
          <FormulaLine math="\text{Orbital Angular Momentum}=\sqrt{l(l+1)}\,\frac{h}{2\pi}" />
          <FormulaLine math="l=0\quad=0" />
        </NoteBlock>
      </SourcePage>

      <SourcePage page={89}>
        <NoteBlock title="Orbital angular momentum values and orbital shapes">
          <FormulaLine math="l=1\quad=\sqrt{2}\,\frac{h}{2\pi}" />
          <FormulaLine math="l=2\quad=\sqrt{6}\,\frac{h}{2\pi}" />
          <DiagramBox title="s orbital (printed)">
            <p>A sphere centred on the x, y, z axes.</p>
          </DiagramBox>
          <DiagramBox title="2p orbitals (printed)">
            <p>
              Dumbbell lobes along each axis with their nodal planes: <MathText math="2p_x" />, <MathText math="2p_y" /> and{" "}
              <MathText math="2p_z" />.
            </p>
          </DiagramBox>
          <DiagramBox title="3d orbitals (printed)">
            <p>
              Four-lobed <MathText math="3d_{xy}" />, <MathText math="3d_{xz}" />, <MathText math="3d_{yz}" /> and{" "}
              <MathText math="3d_{x^2-y^2}" /> with nodal planes, and <MathText math="3d_{z^2}" /> with its ring (doughnut) and
              conical nodal surfaces.
            </p>
          </DiagramBox>
          <DiagramBox title="f orbitals (printed)">
            <p>
              Complex multi-lobed shapes labelled <MathText math="f_{xyz}" />, <MathText math="f_{z(x^2-y^2)}" />,{" "}
              <MathText math="f_{x(y^2-z^2)}" />, <MathText math="f_{z^3}" />, <MathText math="f_{y(z^2-x^2)}" />,{" "}
              <MathText math="f_{x^3}" /> and <MathText math="f_{y^3}" />.
            </p>
          </DiagramBox>
        </NoteBlock>
      </SourcePage>

      <AuditComment pages="87-89" unclear={0} />
    </AtomicPartShell>
  );
}
