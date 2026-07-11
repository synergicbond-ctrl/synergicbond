"use client";

import { AtomicPartShell, AuditComment, DiagramBox, FormulaLine, MathText, NoteBlock, SourcePage } from "./_shared";

export default function Part38() {
  return (
    <AtomicPartShell part={38} title="Acceptable Wave Functions, Probability Density and Normalisation" pages="119-121">
      <SourcePage page={119}>
        <NoteBlock title="Conditions on an acceptable ψ">
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <MathText math="\psi" /> can never be infinite in finite region.
            </li>
            <li>
              <MathText math="\psi" /> must be single valued function.
            </li>
            <li>
              <MathText math="\psi" /> must be continuous function.
            </li>
            <li>
              Slope of <MathText math="\psi" /> must be continuous function.
            </li>
          </ul>
          <DiagramBox title="Single-valued / continuity illustrations">
            <p>
              Three sketched curves against a common axis: (1) an S-shaped curve cut by a dotted vertical that meets it at
              three marked points — a multi-valued (rejected) function; (2) a looped curve crossing the axis with a dotted
              vertical through the loop — again multi-valued; (3) a smooth continuous S-curve rising to the right with a
              single dotted reference — an acceptable single-valued, continuous function.
            </p>
          </DiagramBox>
        </NoteBlock>
      </SourcePage>

      <SourcePage page={120}>
        <NoteBlock title="Probability density from ψ">
          <p>
            <MathText math="\psi" /> should max where probability is max.
          </p>
          <FormulaLine math="\psi=f(x,y,z)" />
          <FormulaLine math="\psi^{2}=\frac{P}{dV}\qquad P=\psi^{2}\,dV" />
          <p>
            <MathText math="|\psi^{2}|" /> represents probability density (probability of finding of electron at a point
            or in a very small vol. around the nucleus).
          </p>
          <FormulaLine math="\text{Probability of finding of }e^{-}\ (P)=\psi^{2}\,dV" />
          <FormulaLine math="\int P=1" />
          <p>The 3D space where probability of finding of e&#8315; is maximum is called orbital.</p>
        </NoteBlock>
        <NoteBlock title="Normalised Wave Function">
          <p>
            <MathText math="|\psi(x)|^{2}\,dx" /> probability of finding the particle in range x to dx. It is called Born
            interpretation.
          </p>
          <p>If</p>
          <FormulaLine math="\int_{-\infty}^{\infty}|\psi(x)|^{2}\,dx=1,\quad \psi\text{ is a normalised wave function}" />
        </NoteBlock>
        <NoteBlock title="Boundary surface (contour) diagram">
          <p>
            The shape of orbital are given either as graphical representation or boundary surface (contour) diagram for the
            probability of finding electron according to SWE.
          </p>
          <p>
            In boundary surface diagram the 3D space around the nucleus is covered in which probability of finding e&#8315;
            very high (&#8776; 90%).
          </p>
        </NoteBlock>
      </SourcePage>

      <SourcePage page={121}>
        <NoteBlock title="Q. Why is a 100% boundary surface not drawn?">
          <p>
            Q. Why do we not draw a boundary surface diagram which bounds a region in which the probability of finding
            e&#8315; is 100%?
          </p>
          <p>
            Ans — The probability density <MathText math="|\psi^{2}|" /> has always some value, howsoever small it may be,
            at any finite distance from the nucleus. It is therefore not possible to draw a boundary surface diagram of
            rigid size in which the probability of finding of e&#8315; is 100%.
          </p>
        </NoteBlock>
        <NoteBlock title="Physical meaning of ψ">
          <p>Let a ball rolling on a surface. it has 100%.</p>
          <DiagramBox title="Rolling ball (printed)">
            <p>A blue ball on a horizontal line with a 100% probability marker pinned above it — probability at a place.</p>
          </DiagramBox>
          <DiagramBox title="ψ and |ψ(x)|² (printed)">
            <p>
              Top: a red <MathText math="\psi" />-vs-x curve oscillating above and below the axis. Bottom: the
              corresponding <MathText math="|\psi(x)|^{2}" />-vs-x curve, all lobes positive, with the tallest central lobe
              circled as &quot;Max probability&quot; at point A and the axis crossings circled as &quot;Zero
              probability.&quot;
            </p>
          </DiagramBox>
        </NoteBlock>
      </SourcePage>

      <AuditComment pages="119-121" unclear={0} />
    </AtomicPartShell>
  );
}
