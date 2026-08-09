"use client";

import {
  ChapterSection,
  ConceptCard,
  DataTable,
  DipoleStructureFigure,
  ExamTrap,
  FigureFrame,
  FormulaCard,
  K,
  KB,
  KeyIdea,
  PartShell,
} from "../../dipole-moment-shared";

export default function DipoleMomentPart02() {
  return (
    <PartShell
      part={2}
      title="Vector Nature"
      description="Vector addition of bond moments, the equal-dipole special case, and how symmetry cancels polar bonds to zero."
    >
      <ChapterSection
        id="vector-addition"
        index="01"
        eyebrow="Vector nature"
        title="Vector addition of two dipoles"
        intro="The net, experimentally measured dipole of a whole molecule is the vector sum of all bond and lone-pair moments — never a simple arithmetic sum of magnitudes."
      >
        <FigureFrame title="Two bond-moment vectors, added by the parallelogram rule" caption="μ₁ and μ₂ separated by angle θ.">
          <DipoleStructureFigure id="vector-triangle" />
        </FigureFrame>

        <FormulaCard title="General case">
          <KB>{String.raw`\mu_R = \sqrt{\mu_1^2 + \mu_2^2 + 2\mu_1\mu_2\cos\theta}`}</KB>
        </FormulaCard>

        <FormulaCard title="Special case: μ₁ = μ₂ = μ_b">
          <KB>{String.raw`\mu_R = 2\mu_b\cos(\theta/2)`}</KB>
        </FormulaCard>

        <DataTable
          headers={["θ", "cos term", "Result"]}
          rows={[
            [<K key="a">0°</K>, <K key="b">{String.raw`\cos 0 = 1`}</K>, <span key="c"><K>{String.raw`\mu = 2\mu_b`}</K> (maximum, full reinforcement)</span>],
            [<span key="a">109.5° (tetrahedral)</span>, <K key="b">{String.raw`\cos 54.75° \approx 0.577`}</K>, <K key="c">{String.raw`\mu \approx 1.15\,\mu_b`}</K>],
            [<span key="a">120° (trigonal)</span>, <K key="b">{String.raw`\cos 60° = 0.5`}</K>, <K key="c">{String.raw`\mu = \mu_b`}</K>],
            [<span key="a">180° (linear)</span>, <K key="b">{String.raw`\cos 90° = 0`}</K>, <span key="c"><K>{String.raw`\mu = 0`}</K> (complete cancellation)</span>],
          ]}
        />
      </ChapterSection>

      <ChapterSection
        id="symmetry-cancellation"
        index="02"
        eyebrow="Vector nature"
        title="Symmetry and cancellation"
        intro="A molecule can contain highly polar bonds yet be completely nonpolar overall if symmetry forces the bond-moment vectors to cancel exactly."
      >
        <FigureFrame title="CO₂ — polar bonds, nonpolar molecule" caption="Polar C=O bonds, but the linear geometry forces μ₁ + μ₂ = 0 (equal, opposite, collinear).">
          <DipoleStructureFigure id="co2-cancellation" />
        </FigureFrame>

        <div className="grid gap-5 xl:grid-cols-2">
          <ConceptCard title="BF₃, BCl₃ — trigonal planar" tone="cyan" eyebrow="μ = 0">
            <p>Three identical, highly polar B–F bonds at 120° to each other sum to exactly zero — each bond moment is cancelled by the resultant of the other two.</p>
          </ConceptCard>
          <ConceptCard title="CH₄, CCl₄ — tetrahedral" tone="violet" eyebrow="μ = 0">
            <p>Four identical bonds at 109.5° also cancel exactly, by the same vector logic. The full geometry-to-polarity rule set (all SN/BP/LP combinations) is built out in Part F.</p>
          </ConceptCard>
        </div>

        <ExamTrap>
          A polar bond does not imply a polar molecule, and a nonpolar molecule does not imply nonpolar bonds — only the vector resultant decides <K>{String.raw`\mu`}</K>. CO₂, CCl₄, BF₃ and PF₅ are all built from strongly polar bonds yet are all μ = 0.
        </ExamTrap>

        <KeyIdea>
          Cancellation requires both equal-magnitude vectors <strong className="text-white">and</strong> the right geometry. Change either — swap one substituent, or distort the angle — and the cancellation breaks. This is exactly the lever the chloromethane series (Part E) and the substituted-benzene o/m/p trend (Part G) exploit.
        </KeyIdea>
      </ChapterSection>
    </PartShell>
  );
}
