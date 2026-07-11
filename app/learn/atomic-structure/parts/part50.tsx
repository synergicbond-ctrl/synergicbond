"use client";

import { AtomicPartShell, AuditComment, DiagramBox, MathText, NoteBlock, SourcePage } from "./_shared";

export default function Part50() {
  return (
    <AtomicPartShell part={50} title="7d Gallery and the 4f, 5f, 6f Orbital Sets" pages="157-160">
      <SourcePage page={157}>
        <NoteBlock title="Shape of Orbitals — 7d (printed)">
          <DiagramBox title="7d orbital set (printed)">
            <p>
              A 3-D gallery of the five 7d orbitals: the dz² (two lobes plus an equatorial ring) at top, and the four
              cloverleaf orbitals d(xy), d(yz), d(zx), d(x²−y²) below, each with red (+) and white (−) sign lobes and
              several nested inner radial shells (the 7d orbitals have four radial nodes).
            </p>
          </DiagramBox>
        </NoteBlock>
      </SourcePage>

      <SourcePage page={158}>
        <NoteBlock title="4f atomic orbitals — general and cubic sets (printed)">
          <p>
            For any atom, there are seven 4f orbitals. The f-orbitals are unusual in that there are two sets of orbitals in
            common use. The first set is known as the general set. The second set is the cubic set and these might be
            appropriate to use if the atom is in a cubic environment, for instance. Three of the orbitals are common to
            both sets. These are the <MathText math="4f_{xyz}" />, <MathText math="4f_{z^{3}}" />, and{" "}
            <MathText math="4f_{z(x^{2}-y^{2})}" /> orbitals. The higher f-orbitals (5f, 6f, and 7f) are more complex since
            they have one or more spherical nodes.
          </p>
          <DiagramBox title="4f general set (printed)">
            <p>
              Seven f-orbitals, green (+) / white (−) lobes. From left to right: (top row){" "}
              <MathText math="4f_{z^{3}}" />; (next to top row) <MathText math="4f_{yz^{2}}" />,{" "}
              <MathText math="4f_{xz^{2}}" />; (next to bottom row) <MathText math="4f_{xyz}" />,{" "}
              <MathText math="4f_{z(x^{2}-y^{2})}" />; (bottom row) <MathText math="4f_{y(3x^{2}-y^{2})}" />,{" "}
              <MathText math="4f_{x(x^{2}-3y^{2})}" />.
            </p>
          </DiagramBox>
          <DiagramBox title="4f cubic set (printed)">
            <p>
              From left to right: (top row) <MathText math="4f_{y^{3}}" />, <MathText math="4f_{z^{3}}" />,{" "}
              <MathText math="4f_{x^{3}}" />; (middle row) <MathText math="4f_{y(z^{2}-x^{2})}" />,{" "}
              <MathText math="4f_{z(x^{2}-y^{2})}" />, <MathText math="4f_{x(z^{2}-y^{2})}" />; (bottom row){" "}
              <MathText math="4f_{xyz}" />.
            </p>
          </DiagramBox>
        </NoteBlock>
      </SourcePage>

      <SourcePage page={159}>
        <NoteBlock title="5f atomic orbitals — general and cubic sets (printed)">
          <DiagramBox title="5f general set (printed)">
            <p>
              The seven 5f orbitals (general set), green (+) / white (−). Same labelling as the 4f general set:{" "}
              <MathText math="5f_{z^{3}}" />; <MathText math="5f_{yz^{2}}" />, <MathText math="5f_{xz^{2}}" />;{" "}
              <MathText math="5f_{xyz}" />, <MathText math="5f_{z(x^{2}-y^{2})}" />;{" "}
              <MathText math="5f_{y(3x^{2}-y^{2})}" />, <MathText math="5f_{x(x^{2}-3y^{2})}" />. Each has an extra inner
              (radial) shell compared with the 4f set.
            </p>
          </DiagramBox>
          <DiagramBox title="5f cubic set (printed)">
            <p>
              From left to right: (top row) <MathText math="5f_{y^{3}}" />, <MathText math="5f_{z^{3}}" />,{" "}
              <MathText math="5f_{x^{3}}" />; (middle row) <MathText math="5f_{y(z^{2}-x^{2})}" />,{" "}
              <MathText math="5f_{z(x^{2}-y^{2})}" />, <MathText math="5f_{x(z^{2}-y^{2})}" />; (bottom row){" "}
              <MathText math="5f_{xyz}" />.
            </p>
          </DiagramBox>
        </NoteBlock>
      </SourcePage>

      <SourcePage page={160}>
        <NoteBlock title="6f atomic orbitals — general and cubic sets (printed)">
          <DiagramBox title="6f general set (printed)">
            <p>
              The seven 6f orbitals (general set), green (+) / white (−): <MathText math="6f_{z^{3}}" />;{" "}
              <MathText math="6f_{yz^{2}}" />, <MathText math="6f_{xz^{2}}" />; <MathText math="6f_{xyz}" />,{" "}
              <MathText math="6f_{z(x^{2}-y^{2})}" />; <MathText math="6f_{y(3x^{2}-y^{2})}" />,{" "}
              <MathText math="6f_{x(x^{2}-3y^{2})}" />. Additional nested radial shells appear (two spherical nodes).
            </p>
          </DiagramBox>
          <DiagramBox title="6f cubic set (printed)">
            <p>
              From left to right: (top row) <MathText math="6f_{y^{3}}" />, <MathText math="6f_{z^{3}}" />,{" "}
              <MathText math="6f_{x^{3}}" />; (middle row) <MathText math="6f_{y(z^{2}-x^{2})}" />,{" "}
              <MathText math="6f_{z(x^{2}-y^{2})}" />, <MathText math="6f_{x(z^{2}-y^{2})}" />; (bottom row){" "}
              <MathText math="6f_{xyz}" />.
            </p>
          </DiagramBox>
        </NoteBlock>
      </SourcePage>

      <AuditComment pages="157-160" unclear={0} />
    </AtomicPartShell>
  );
}
