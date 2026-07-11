"use client";

import { AtomicPartShell, AuditComment, DataTable, DiagramBox, FormulaLine, MathText, NoteBlock, SourcePage } from "./_shared";

export default function Part47() {
  return (
    <AtomicPartShell part={47} title="np Density Pictures, the Five d-Orbitals and Gerade/Ungerade" pages="148-150">
      <SourcePage page={148}>
        <NoteBlock title="Electron-density pictures of 2p, 3p, 4p, 5p (printed)">
          <DiagramBox title="2P / 3P / 4P / 5P density clouds (printed)">
            <p>
              Four dot-density plots. 2P: a clean two-lobe dumbbell with a single nodal gap across the middle. 3P: the
              dumbbell plus one bright inner core (one radial node). 4P: dumbbell plus two inner bright regions. 5P:
              dumbbell plus additional concentric bright shells — the inner structure grows with n while the outer dumbbell
              shape persists.
            </p>
          </DiagramBox>
        </NoteBlock>
      </SourcePage>

      <SourcePage page={149}>
        <NoteBlock title="d-orbital shapes">
          <DiagramBox title="dxy / dyz / dzx (diagram)">
            <p>
              Three four-lobe cloverleaves lying between the axes: dxy in the x–y plane (nodal planes zx, yz), dyz in the
              y–z plane (nodal planes xy, zx), dzx in the z–x plane (nodal planes xy, yz). Each has four lobes and two
              nodal planes.
            </p>
          </DiagramBox>
          <FormulaLine math="d_{xy}:\ \text{nodal plane}=2\ (zx,\ yz)" />
          <FormulaLine math="d_{yz}:\ \text{nodal plane}=2\ (xy,\ zx)" />
          <FormulaLine math="d_{zx}:\ \text{nodal plane}=2\ (xy,\ yz)" />
          <DiagramBox title="d(x²−y²) (diagram)">
            <p>Four-lobe cloverleaf lying along the x and y axes; nodal planes at x = y and x = −y (45°, 135°).</p>
          </DiagramBox>
          <FormulaLine math="d_{x^{2}-y^{2}}:\ x^{2}-y^{2}=0\ \Rightarrow\ x=y,\ x=-y\ (45^{\circ},135^{\circ})\ \text{four lobe}" />
          <DiagramBox title="dz² (diagram)">
            <p>
              Two lobes along z with an orange equatorial ring; the nodal surfaces are two cones at θ = 54.3° and 125.7°.
            </p>
          </DiagramBox>
          <FormulaLine math="d_{z^{2}}:\ \theta=54.3^{\circ},125.7^{\circ}\ \text{— Nodal surfaces are conical}" />
          <p>d-subshell — two axial, three non-axial orbitals.</p>
          <DiagramBox title="4d / 5d radial growth (diagram)">
            <p>Nested cloverleaves: 4d adds one inner shell, 5d adds two inner shells (increasing radial nodes).</p>
          </DiagramBox>
        </NoteBlock>
      </SourcePage>

      <SourcePage page={150}>
        <NoteBlock title="Gerade and ungerade">
          <p>
            Orbital with even no. of l value are symmetrical and known as gerade while the orbitals with odd no. of l value
            are unsymmetrical and known as ungerade.
          </p>
        </NoteBlock>
        <NoteBlock title="m (magnetic quantum number) assignments">
          <FormulaLine math="s:\ m=0" />
          <FormulaLine math="p:\ m=-1,0,+1\qquad p_x,p_y=\pm1;\ p_z=0" />
          <FormulaLine math="d:\ m=-2,-1,0,+1,+2" />
          <DataTable
            headers={["d orbital", "m"]}
            rows={[
              ["d(xy), d(x²−y²)", "±2"],
              ["d(yz), d(zx)", "±1"],
              ["d(z²)", "0"],
            ]}
          />
        </NoteBlock>
      </SourcePage>

      <AuditComment pages="148-150" unclear={0} />
    </AtomicPartShell>
  );
}
