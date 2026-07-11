"use client";

import { AtomicPartShell, AuditComment, DiagramBox, MathText, NoteBlock, SourcePage } from "./_shared";

export default function Part52() {
  return (
    <AtomicPartShell part={52} title="The Nine 7g Orbitals and the Eleven 6h and 7h Orbitals" pages="164-166">
      <SourcePage page={164}>
        <NoteBlock title="7g atomic orbitals (printed)">
          <DiagramBox title="Nine 7g orbitals (printed)">
            <p>
              The nine 7g orbitals, purple (+) / white (−). From left to right: (top row) <MathText math="7g_{z^{4}}" />;
              (next to top row) <MathText math="7g_{z^{3}x}" /> and <MathText math="7g_{z^{3}y}" />; (middle row){" "}
              <MathText math="7g_{z^{2}xy}" /> and <MathText math="7g_{z^{2}(x^{2}-y^{2})}" />; (next to bottom row){" "}
              <MathText math="7g_{zx^{3}}" /> and <MathText math="7g_{zy^{3}}" />; (bottom row){" "}
              <MathText math="7g_{xy(x^{2}-y^{2})}" /> and <MathText math="7g_{x^{4}+y^{4}}" />. Each orbital sits inside a
              faint spherical node shell.
            </p>
          </DiagramBox>
        </NoteBlock>
      </SourcePage>

      <SourcePage page={165}>
        <NoteBlock title="6h atomic orbitals (printed)">
          <p>
            There are eleven 6h orbitals. These are labelled <MathText math="6h_{z^{5}}" />, <MathText math="6h_{yz^{4}}" />,{" "}
            <MathText math="6h_{xz^{4}}" />, <MathText math="6h_{z^{3}xy}" />, <MathText math="6h_{z^{3}(x^{2}-y^{2})}" />,{" "}
            <MathText math="6h_{z^{2}y^{3}}" />, <MathText math="6h_{z^{2}x^{3}}" />,{" "}
            <MathText math="6h_{z(4x^{3}y-4xy^{3})}" />, <MathText math="6h_{z(x^{4}-6x^{2}y^{2}+y^{4})}" />,{" "}
            <MathText math="6h_{yx^{4}}" />, and <MathText math="6h_{xy^{4}}" />.
          </p>
          <DiagramBox title="Eleven 6h orbitals (printed)">
            <p>
              Eleven 3-D orbital shapes, turquoise/cyan (+) and white (−). Progressing from the axial{" "}
              <MathText math="6h_{z^{5}}" /> (stacked rings and lobes along z) through increasingly multi-lobed
              cloverleaf and rosette shapes down to the equatorial <MathText math="6h_{xy^{4}}" /> — the number of angular
              lobes increases across the set.
            </p>
          </DiagramBox>
        </NoteBlock>
      </SourcePage>

      <SourcePage page={166}>
        <NoteBlock title="7h atomic orbitals (printed)">
          <p>
            There are eleven 7h orbitals. These are labelled <MathText math="7h_{z^{5}}" />, <MathText math="7h_{yz^{4}}" />,{" "}
            <MathText math="7h_{xz^{4}}" />, <MathText math="7h_{z^{3}xy}" />, <MathText math="7h_{z^{3}(x^{2}-y^{2})}" />,{" "}
            <MathText math="7h_{z^{2}y^{3}}" />, <MathText math="7h_{z^{2}x^{3}}" />,{" "}
            <MathText math="7h_{z(4x^{3}y-4xy^{3})}" />, <MathText math="7h_{z(x^{4}-6x^{2}y^{2}+y^{4})}" />,{" "}
            <MathText math="7h_{yx^{4}}" />, and <MathText math="7h_{xy^{4}}" />.
          </p>
          <DiagramBox title="Eleven 7h orbitals (printed)">
            <p>
              Eleven 3-D orbital shapes, turquoise/cyan (+) and white (−), each enclosed in a faint spherical (radial)
              node shell. Same labelling family as 6h but with an added radial node, so extra concentric shells appear
              inside every lobe.
            </p>
          </DiagramBox>
        </NoteBlock>
      </SourcePage>

      <AuditComment pages="164-166" unclear={0} />
    </AtomicPartShell>
  );
}
