"use client";

import { AtomicPartShell, AuditComment, DataTable, DiagramBox, FormulaLine, MathText, NoteBlock, SourcePage } from "./_shared";
import { FormulaCard, ImportantNote, LearningObjectives, SummaryStrip } from "../_components/AtomicLearning";
import { OrbitalShapesBasicVisual } from "../_components/AtomicVisuals";

export default function Part28() {
  return (
    <AtomicPartShell part={28} title="Azimuthal Quantum Number, Orbitals and Shapes" pages="87-89">
      <LearningObjectives items={[
        "list allowed l values and spectroscopic subshell names for any principal quantum number n",
        "apply n² and 2l+1 to count orbitals, and 2n² and 4l+2 to find maximum electron capacity",
        "evaluate orbital angular momentum √(l(l+1))·h/2π for s, p and d subshells",
        "describe the boundary shapes and nodal features of s, p, d and f orbitals",
      ]} />

      <SourcePage page={87}>
        <NoteBlock title="Permissible values of l and subshell names">
          <FormulaLine math="l = 0\ \text{to}\ (n-1)" />
          <DataTable
            headers={["Subshell", "l", "Spectroscopic name", "Shape"]}
            rows={[
              ["s", "0", "sharp", "Spherical"],
              ["p", "1", "principal", "Dumbbell"],
              ["d", "2", "diffuse", "Double dumbbell"],
              ["f", "3", "fundamental", "Complex"],
              ["g", "4", "—", "Very complex"],
            ]}
          />
          <FormulaLine math="n=1:\ l=0\ (1s)\quad n=2:\ l=0,1\ (2s,\,2p)" />
          <FormulaLine math="n=3:\ l=0,1,2\ (3s,\,3p,\,3d)\quad n=4:\ l=0,1,2,3\ (4s,\,4p,\,4d,\,4f)" />
          <p className="text-sm text-white/75">Number of allowed values of <MathText math="l" /> in shell n equals n.</p>
          <p className="text-sm text-white/75">Minimum value of n for a given subshell = <MathText math="l+1" /> (e.g. for the g-subshell, <MathText math="n \ge 5" />).</p>
        </NoteBlock>

        <FormulaCard label="Orbital count formulas">
          <FormulaLine math="\text{Total orbitals in a shell} = n^2" />
          <FormulaLine math="\text{Orbitals in a subshell} = 2l + 1" />
        </FormulaCard>
      </SourcePage>

      <SourcePage page={88}>
        <NoteBlock title="Orbital count and electron capacity — worked verification">
          <p>Orbitals per subshell via <MathText math="2l+1" />:</p>
          <FormulaLine math="s:\ 2(0)+1=1\quad p:\ 2(1)+1=3\quad d:\ 2(2)+1=5\quad f:\ 2(3)+1=7" />
          <DiagramBox title="Empty orbital boxes">
            <p className="text-sm text-white/75">1 box for s · 3 for p · 5 for d · 7 for f. Each box holds at most 2 electrons (Pauli).</p>
          </DiagramBox>
          <p className="mt-2">Verification that total orbitals = <MathText math="n^2" />:</p>
          <FormulaLine math="n=1:\ 1=1^{2}\quad n=2:\ 1+3=4=2^{2}\quad n=3:\ 1+3+5=9=3^{2}\quad n=4:\ 1+3+5+7=16=4^{2}" />
          <p className="mt-2">Electron capacities:</p>
          <FormulaLine math="\text{Max electrons in a shell} = 2 \times n^2 = 2n^2" />
          <FormulaLine math="\text{Max electrons in a subshell} = 2(2l+1) = 4l+2" />
          <DataTable
            headers={["Subshell", "l", "Orbitals (2l+1)", "Max electrons (4l+2)"]}
            rows={[
              ["s", "0", "1", "2"],
              ["p", "1", "3", "6"],
              ["d", "2", "5", "10"],
              ["f", "3", "7", "14"],
            ]}
          />
          <DiagramBox title="Filled orbital boxes">
            <p className="text-sm text-white/75">
              Paired <MathText math="\uparrow\downarrow" /> arrows in each box: 1 box for s, 3 for p, 5 for d, 7 for f.
            </p>
          </DiagramBox>
        </NoteBlock>

        <FormulaCard label="Orbital angular momentum">
          <FormulaLine math="\text{Orbital Angular Momentum} = \sqrt{l(l+1)}\,\frac{h}{2\pi}" />
          <FormulaLine math="l=0\ (s):\ 0\qquad l=1\ (p):\ \sqrt{2}\,\frac{h}{2\pi}\qquad l=2\ (d):\ \sqrt{6}\,\frac{h}{2\pi}" />
        </FormulaCard>
      </SourcePage>

      <SourcePage page={89}>
        <NoteBlock title="Orbital shapes">
          <DiagramBox title="s orbital — spherical">
            <OrbitalShapesBasicVisual />
            <p className="mt-3 text-sm text-slate-300">
              The s orbital (l = 0) is perfectly spherical, centred on the nucleus. All directions are
              equally probable. Orbital angular momentum = 0.
            </p>
          </DiagramBox>

          <DiagramBox title="2p orbitals — dumbbell lobes along each axis">
            <p className="text-sm text-white/75">
              Three 2p orbitals (<MathText math="2p_x,\ 2p_y,\ 2p_z" />) are mutually perpendicular dumbbells. Each has one
              nodal plane through the nucleus: <MathText math="2p_z" /> has the xy-plane; <MathText math="2p_x" /> has the yz-plane;
              <MathText math="2p_y" /> has the zx-plane.
            </p>
          </DiagramBox>

          <DiagramBox title="3d orbitals — double-dumbbell and conical shapes">
            <p className="text-sm text-white/75">
              <MathText math="3d_{xy},\ 3d_{xz},\ 3d_{yz}" /> — four-lobed, each with two perpendicular nodal planes.<br />
              <MathText math="3d_{x^2-y^2}" /> — four lobes along ±x and ±y, nodal planes at 45°.<br />
              <MathText math="3d_{z^2}" /> — dumbbell along z with a torus (doughnut ring) in the xy-plane; two conical nodal surfaces at ≈ 54.7°.
            </p>
          </DiagramBox>

          <DiagramBox title="f orbitals — complex multi-lobed shapes">
            <p className="text-sm text-white/75">
              Seven f orbitals with complex multi-lobed boundary surfaces:
              <MathText math="f_{xyz},\ f_{z(x^2-y^2)},\ f_{x(y^2-z^2)},\ f_{z^3},\ f_{y(z^2-x^2)},\ f_{x^3},\ f_{y^3}" />.
            </p>
          </DiagramBox>
        </NoteBlock>

        <ImportantNote title="Orbital angular momentum is zero for l = 0">
          The s orbital (l = 0) has zero orbital angular momentum. This is a quantum-mechanical result —
          it does not mean the electron is stationary; it means the wave function has no angular nodes.
        </ImportantNote>
      </SourcePage>

      <SummaryStrip items={[
        "l runs 0 to n−1; names are s, p, d, f, g. Orbitals per subshell = 2l+1; per shell = n².",
        "Electron capacity: 2n² per shell, 4l+2 per subshell. Orbital angular momentum = √(l(l+1))·h/2π.",
        "Shapes: s = sphere · p = dumbbell (1 node plane) · d = double dumbbell / conical · f = complex.",
      ]} />

      <AuditComment pages="87-89" unclear={0} />
    </AtomicPartShell>
  );
}
