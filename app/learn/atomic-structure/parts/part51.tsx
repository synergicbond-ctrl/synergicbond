"use client";

import { AtomicPartShell, AuditComment, DiagramBox, MathText, NoteBlock, SourcePage } from "./_shared";

export default function Part51() {
  return (
    <AtomicPartShell part={51} title="7f Orbitals and the Nine 5g and 6g Orbitals" pages="161-163">
      <SourcePage page={161}>
        <NoteBlock title="7f atomic orbitals — general and cubic sets (printed)">
          <DiagramBox title="7f general set (printed)">
            <p>
              The seven 7f orbitals (general set), green (+) / white (−): <MathText math="7f_{z^{3}}" />;{" "}
              <MathText math="7f_{yz^{2}}" />, <MathText math="7f_{xz^{2}}" />; <MathText math="7f_{xyz}" />,{" "}
              <MathText math="7f_{z(x^{2}-y^{2})}" />; <MathText math="7f_{y(3x^{2}-y^{2})}" />,{" "}
              <MathText math="7f_{x(x^{2}-3y^{2})}" />. Each carries additional nested radial shells (more spherical
              nodes) than the 6f set.
            </p>
          </DiagramBox>
          <DiagramBox title="7f cubic set (printed)">
            <p>
              From left to right: (top row) <MathText math="7f_{y^{3}}" />, <MathText math="7f_{z^{3}}" />,{" "}
              <MathText math="7f_{x^{3}}" />; (middle row) <MathText math="7f_{y(z^{2}-x^{2})}" />,{" "}
              <MathText math="7f_{z(x^{2}-y^{2})}" />, <MathText math="7f_{x(z^{2}-y^{2})}" />; (bottom row){" "}
              <MathText math="7f_{xyz}" />.
            </p>
          </DiagramBox>
        </NoteBlock>
      </SourcePage>

      <SourcePage page={162}>
        <NoteBlock title="5g atomic orbitals (printed)">
          <p>
            For any atom, there are nine 5g orbitals. The higher g-orbitals (6g and 7g) are more complex since they have
            spherical nodes.
          </p>
          <DiagramBox title="Nine 5g orbitals (printed)">
            <p>
              The nine 5g orbitals, purple (+) / white (−). From left to right: (top row) <MathText math="5g_{z^{4}}" />;
              (next to top row) <MathText math="5g_{z^{3}y}" /> and <MathText math="5g_{z^{3}x}" />; (centre row){" "}
              <MathText math="5g_{z^{2}xy}" /> and <MathText math="5g_{z^{2}(x^{2}-y^{2})}" />; (next to bottom row){" "}
              <MathText math="5g_{zy^{3}}" /> and <MathText math="5g_{zx^{3}}" />; (bottom row){" "}
              <MathText math="5g_{xy(x^{2}-y^{2})}" /> and <MathText math="5g_{x^{4}+y^{4}}" />.
            </p>
          </DiagramBox>
        </NoteBlock>
      </SourcePage>

      <SourcePage page={163}>
        <NoteBlock title="6g atomic orbitals (printed)">
          <DiagramBox title="Nine 6g orbitals (printed)">
            <p>
              The nine 6g orbitals, purple (+) / white (−). From left to right: (top row) <MathText math="6g_{z^{4}}" />;
              (next to top row) <MathText math="6g_{z^{3}x}" /> and <MathText math="6g_{z^{3}y}" />; (middle row){" "}
              <MathText math="6g_{z^{2}xy}" /> and <MathText math="6g_{z^{2}(x^{2}-y^{2})}" />; (next to bottom row){" "}
              <MathText math="6g_{zx^{3}}" /> and <MathText math="6g_{zy^{3}}" />; (bottom row){" "}
              <MathText math="6g_{xy(x^{2}-y^{2})}" /> and <MathText math="6g_{x^{4}+y^{4}}" />. Additional inner shells
              appear relative to the 5g set.
            </p>
          </DiagramBox>
        </NoteBlock>
      </SourcePage>

      <AuditComment pages="161-163" unclear={0} />
    </AtomicPartShell>
  );
}
