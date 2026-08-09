"use client";

import {
  ChapterSection,
  ConceptCard,
  DipoleStructureFigure,
  FigureFrame,
  FormulaCard,
  K,
  KB,
  KeyIdea,
  PartShell,
} from "../../dipole-moment-shared";

export default function DipoleMomentPart01() {
  return (
    <PartShell
      part={1}
      title="Foundation"
      description="What dipole moment measures, the direction convention, units, and bond moment vs. molecular dipole moment."
    >
      <ChapterSection
        id="what-it-measures"
        index="01"
        eyebrow="Foundation"
        title="What dipole moment measures"
        intro={<>Dipole moment (<K>{String.raw`\mu`}</K>) is a quantitative measure of the polarity of a bond or molecule. It arises whenever the centre of positive charge and the centre of negative charge in a system do not coincide. It is a vector quantity — it possesses both magnitude and direction.</>}
      >
        <ConceptCard title="Definition" tone="cyan" eyebrow="Core idea">
          <p><K>{String.raw`\mu`}</K> is the product of the magnitude of the separated charge (<K>q</K>) and the distance (<K>d</K>) between the centres of positive and negative charge.</p>
          <KB>{String.raw`\mu = q \times d`}</KB>
          <p>A true 100% covalent bond does not exist even in a homonuclear diatomic molecule such as H₂ — ionic resonance structures contribute a small amount, but because they contribute equally in opposite directions, no net bond moment survives. Whenever the two atoms differ in electronegativity, this cancellation is incomplete and a partial ionic character results, measured by <K>{String.raw`\mu`}</K>.</p>
        </ConceptCard>

        <FigureFrame
          title="Direction convention"
          caption="The dipole arrow is drawn from the positive end to the negative end — from the less electronegative atom to the more electronegative atom — with the crossed tail (+) sitting on the electropositive atom."
        >
          <DipoleStructureFigure id="dipole-arrow" />
        </FigureFrame>

        <KeyIdea>
          By convention the arrow points <strong className="text-white">toward</strong> the more electronegative atom. Reading it backwards is the single most common sign error in this topic.
        </KeyIdea>

        <FormulaCard title="Units">
          <div className="space-y-4">
            <KB>{String.raw`1\ \text{D} = 10^{-18}\ \text{esu·cm} = 3.336\times10^{-30}\ \text{C·m}`}</KB>
            <KB>{String.raw`e = 1.6\times10^{-19}\ \text{C} = 4.8\times10^{-10}\ \text{esu}`}</KB>
          </div>
        </FormulaCard>
      </ChapterSection>

      <ChapterSection
        id="bond-vs-molecular"
        index="02"
        eyebrow="Foundation"
        title="Bond moment vs. molecular dipole moment"
        intro="How the moment of one bond relates to the moment of the whole molecule — worked here once with H–Cl, the example every later part will point back to instead of re-deriving."
      >
        <div className="grid gap-5 xl:grid-cols-3">
          <ConceptCard title="Diatomic heteronuclear" tone="cyan" eyebrow="e.g. HCl">
            <p>Bond moment = molecular dipole moment. There is only one bond, so nothing to add.</p>
          </ConceptCard>
          <ConceptCard title="Diatomic homonuclear" tone="navy" eyebrow="e.g. Cl₂, N₂">
            <p><K>{String.raw`\mu = 0`}</K> because <K>q=0</K> — no permanent shift of the bond pair between two identical atoms.</p>
          </ConceptCard>
          <ConceptCard title="Polyatomic molecule" tone="violet" eyebrow="General case">
            <p>The molecular dipole moment is the <strong className="text-white">vector sum</strong> of every bond moment and every lone-pair moment present.</p>
          </ConceptCard>
        </div>

        <FormulaCard title="Vector sum">
          <KB>{String.raw`\vec\mu_{\text{molecule}} = \sum \vec\mu_{\text{bonds}} + \sum \vec\mu_{\text{lone pairs}}`}</KB>
        </FormulaCard>

        <FigureFrame title="Bond dipole of H–Cl" caption="μ(H–Cl) = 1.03 D, directed toward chlorine — the more electronegative atom pulls the shared pair, generating a bond moment toward Cl. Bond moments like this one are approximately transferable between molecules and form the basis of every vector-addition calculation in this chapter.">
          <DipoleStructureFigure id="hcl-bond" />
        </FigureFrame>

        <KeyIdea>
          Every later part that needs H–Cl&apos;s bond moment (percentage ionic character, the six-factor breakdown, the Group hydride trends) reuses this <K>{String.raw`\mu(\text{H–Cl}) = 1.03\ \text{D}`}</K> value rather than re-deriving it.
        </KeyIdea>
      </ChapterSection>
    </PartShell>
  );
}
