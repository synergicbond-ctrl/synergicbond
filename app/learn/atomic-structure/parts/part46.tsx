"use client";

import { AtomicPartShell, AuditComment, DataTable, DiagramBox, FormulaLine, MathText, NoteBlock, SourcePage } from "./_shared";

export default function Part46() {
  return (
    <AtomicPartShell part={46} title="dz² as a Sum of Cloverleaves, and Orbital Shapes with Node Counts" pages="145-147">
      <SourcePage page={145}>
        <NoteBlock title="dz² as the superposition of two cloverleaf lobes">
          <DiagramBox title="d(z²−y²) + d(z²−x²) → dz² (diagram)">
            <p>
              Left: a four-lobe cloverleaf in the y–z plane labelled <MathText math="d_{z^{2}-y^{2}}" />. Middle: a
              four-lobe cloverleaf in the x–z plane labelled <MathText math="d_{z^{2}-x^{2}}" />. Their sum gives the{" "}
              <MathText math="d_{z^{2}}" /> orbital on the right: two lobes along z plus an orange ring around the origin.
            </p>
          </DiagramBox>
          <p>The equatorial ring of the dz² orbital is called the doughnut or belly band.</p>
        </NoteBlock>
      </SourcePage>

      <SourcePage page={146}>
        <NoteBlock title="Shape of orbital — node rules">
          <FormulaLine math="\text{Radial node}=n-l-1" />
          <FormulaLine math="\text{angular node}=l" />
          <FormulaLine math="\text{Total node}=n-1" />
          <FormulaLine math="\text{nodal plane}=l" />
        </NoteBlock>
        <NoteBlock title="s-orbital">
          <p>Shape = spherical, non directional.</p>
          <DiagramBox title="1s / 2s / 3s (printed)">
            <p>
              1s a single filled disc; 2s a disc with one surrounding ring; 3s a disc with two surrounding rings — the dark
              gaps are the radial nodes.
            </p>
          </DiagramBox>
          <DataTable
            headers={["", "1s", "2s", "3s"]}
            rows={[
              ["Radial node", "0", "1", "2"],
              ["angular node", "0", "0", "0"],
            ]}
          />
        </NoteBlock>
        <NoteBlock title="p-orbital">
          <p>Shape = dumbbell.</p>
          <DiagramBox title="2pₓ / 2p_y / 2p_z (printed)">
            <p>
              Three dumbbells: 2pₓ with the nodal (yz) plane, 2p_y with its nodal (xz) plane, 2p_z along z with the xy nodal
              plane. Each lobe pair has one orange (+) and one blue (−) lobe.
            </p>
          </DiagramBox>
          <DataTable
            headers={["", "2pₓ", "2p_y", "2p_z"]}
            rows={[
              ["Radial node", "0", "0", "0"],
              ["angular node", "1", "1", "1"],
            ]}
          />
        </NoteBlock>
      </SourcePage>

      <SourcePage page={147}>
        <NoteBlock title="Nodal planes of the p-orbitals">
          <DiagramBox title="p_z / pₓ / p_y nodal planes (diagram)">
            <p>
              p_z: dumbbell along z, nodal plane yz. pₓ: dumbbell along x, nodal plane zx. p_y: dumbbell along the y
              diagonal, nodal plane xy. Each p-orbital has exactly one nodal plane (angular node = 1).
            </p>
          </DiagramBox>
        </NoteBlock>
        <NoteBlock title="Radial nodes across the np series">
          <DiagramBox title="2p / 3p / 4p / 5p (diagram)">
            <p>
              Nested dumbbells along the same axis: 2p a single dumbbell, 3p with one extra inner shell, 4p with two, 5p
              with three — the number of nested extra loops equals the radial-node count.
            </p>
          </DiagramBox>
          <DataTable
            headers={["orbital", "2p", "3p", "4p", "5p"]}
            rows={[["Radial node", "0", "1", "2", "3"]]}
          />
        </NoteBlock>
      </SourcePage>

      <AuditComment pages="145-147" unclear={0} />
    </AtomicPartShell>
  );
}
