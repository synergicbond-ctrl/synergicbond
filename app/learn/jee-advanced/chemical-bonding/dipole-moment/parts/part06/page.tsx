"use client";

import {
  ChapterSection,
  ConceptCard,
  DataTable,
  DipoleStructureFigure,
  ExamTrap,
  FigureFrame,
  K,
  KB,
  KeyIdea,
  PartShell,
  WorkedExample,
} from "../../dipole-moment-shared";

export default function DipoleMomentPart06() {
  return (
    <PartShell
      part={6}
      title="Structural Applications"
      description="Predicting geometry from μ, cis–trans isomerism, isomeric equilibria, and dipolar-repulsion conformational stability."
    >
      <ChapterSection
        id="geometry-from-mu"
        index="01"
        eyebrow="Structural applications"
        title="Predicting molecular geometry from dipole moment"
        intro="Steric number (SN) = bond pairs (BP) + lone pairs (LP) on the central atom; the shape and its polarity follow directly once BP and LP are counted separately."
      >
        <DataTable
          headers={["Hybrid.", "Formula", "SN", "BP", "LP", "Shape", "Polarity", "Examples"]}
          rows={[
            ["sp", "AB₂", "2", "2", "0", "Linear", "μ=0", "CO₂, CS₂, BeCl₂"],
            ["sp²", "AB₃", "3", "3", "0", "Trigonal planar", "μ=0", "BH₃, BCl₃, SO₃, BF₃"],
            ["sp²", "AB₂L", "3", "2", "1", "Bent", "μ≠0", "SnCl₂, CCl₂"],
            ["sp³", "AB₄", "4", "4", "0", "Tetrahedral", "μ=0", "CH₄, SiCl₄, CCl₄, CF₄"],
            ["sp³", "AB₃L", "4", "3", "1", "Pyramidal", "μ≠0", "NH₃, CCl₃⁻, NCl₃, NF₃"],
            ["sp³", "AB₂L₂", "4", "2", "2", "Bent", "μ≠0", "H₂O, H₂S, R–O–R, ICl₂⁺, I₃⁺"],
            ["sp³d", "AB₅", "5", "5", "0", "Trigonal bipyramidal", "μ=0", "PCl₅, PF₅, AsCl₅, SbCl₅"],
            ["sp³d", "AB₄L", "5", "4", "1", "See-saw", "μ≠0", "SF₄, SCl₄, SeCl₄"],
            ["sp³d", "AB₃L₂", "5", "3", "2", "T-shaped", "μ≠0", "ClF₃, BrF₃, IF₃"],
            ["sp³d", "AB₂L₃", "5", "2", "3", "Linear", "μ=0", "XeF₂, ICl₂⁻, I₃⁻"],
            ["sp³d²", "AB₆", "6", "6", "0", "Octahedral", "μ=0", "SF₆, TeF₆, ICl₆⁺, SCl₆"],
            ["sp³d²", "AB₅L", "6", "5", "1", "Square pyramidal", "μ≠0", "IF₅, BrF₅"],
            ["sp³d²", "AB₄L₂", "6", "4", "2", "Square planar", "μ=0", "XeF₄, I₅⁻, ICl₄⁻"],
            ["sp³d³", "AB₇", "7", "7", "0", "Pentagonal bipyramidal", "μ=0", "IF₇"],
            ["sp³d³", "AB₆L", "7", "6", "1", "Distorted octahedral", "μ≠0", "XeF₆"],
            ["sp³d³", "AB₅L₂", "7", "5", "2", "Pentagonal planar", "μ=0", "XeF₅⁻"],
          ]}
        />

        <ExamTrap>
          A nonzero dipole moment alone cannot distinguish cis-1,2-dichloroethene from the constitutionally different isomer 1,1-dichloroethene, which is also polar. Dipole moment must always be interpreted together with connectivity, not geometry alone.
        </ExamTrap>
      </ChapterSection>

      <ChapterSection
        id="cis-trans-equilibria"
        index="02"
        eyebrow="Structural applications"
        title="Cis–trans isomerism and isomeric equilibria"
        intro="Dipole moment measurements can track the ratio of cis- to trans-forms in a dynamic equilibrium — the observed moment is the weighted average of the two forms present."
      >
        <FigureFrame title="1,2-dichloroethene" caption="cis (μ ≠ 0) versus trans (μ = 0). Later sources give cis ≈ 1.90 D against the classic 1.86 D value; trans is zero either way.">
          <DipoleStructureFigure id="cis-trans-dichloroethene" />
        </FigureFrame>

        <WorkedExample
          number={1}
          title="Monitoring an isomeric equilibrium"
          difficulty="JEE Advanced"
          concept="The observed dipole moment of a rapidly-interconverting mixture is the mole-fraction-weighted average of the pure-form moments."
          question={<>For cis/trans Pt(Et₃P)₂Cl₂: <K>{String.raw`\mu(\text{cis}) \approx 10\ \text{D}`}</K>, <K>{String.raw`\mu(\text{trans}) = 0\ \text{D}`}</K>. At a given temperature, <K>{String.raw`\mu_{\text{obs}} = 4\ \text{D}`}</K>. Find the composition and <K>{String.raw`K_{eq}`}</K>.</>}
          solution={<>
            <p>The observed moment is the weighted average of the two forms:</p>
            <KB>{String.raw`4\ \text{D} = (x)(10\ \text{D}) + (1-x)(0) \implies x = 0.40`}</KB>
            <p>So the equilibrium is 40% cis, 60% trans.</p>
            <KB>{String.raw`K_{eq} = \frac{[\text{trans}]}{[\text{cis}]} = \frac{60}{40} = 1.5`}</KB>
          </>}
          answer={<>40% cis, 60% trans present at equilibrium; <K>{String.raw`K_{eq} = 1.5`}</K>.</>}
        />
      </ChapterSection>

      <ChapterSection
        id="conformational-stability"
        index="03"
        eyebrow="Structural applications"
        title="Dipolar repulsion and conformational stability"
        intro="Minimising repulsion between like-charged bond-dipole ends often — but not always — picks the more stable conformer."
      >
        <div className="grid gap-5 xl:grid-cols-3">
          <ConceptCard title="Butane-2,3-dione" tone="cyan" eyebrow="Repulsion wins">
            <p><strong className="text-white">trans</strong>-form (μ = 0, more stable): the two C=O dipoles point opposite ways, minimising repulsion between the negative O centres.</p>
            <p><strong className="text-white">cis</strong>-form (μ ≠ 0, less stable): reinforcing dipoles, higher repulsion.</p>
          </ConceptCard>
          <ConceptCard title="1,2-Dichloroethane" tone="violet" eyebrow="Repulsion wins, but not completely">
            <p><strong className="text-white">anti</strong>-form has the two C–Cl moments pointing opposite ways (μ = 0) and is intrinsically the more stable rotamer.</p>
            <p>Yet the observed gas-phase <K>{String.raw`\mu = 1.2\ \text{D}`}</K> is clearly nonzero — proof that a significant population of the higher-energy <strong className="text-white">gauche</strong> rotamer (μ = 3.2 D) is thermally populated.</p>
          </ConceptCard>
          <ConceptCard title="1,2-Ethanediol" tone="rose" eyebrow="H-bonding overrides repulsion">
            <p>Dipolar-repulsion logic alone predicts anti should be preferred, exactly as for dichloroethane. But the <strong className="text-white">gauche</strong> form is actually more stable, because it allows an intramolecular O–H···O hydrogen bond that the anti form cannot form.</p>
          </ConceptCard>
        </div>

        <KeyIdea>
          1,2-Ethanediol is the one case in this whole topic where a stronger, independent stabilising interaction (H-bonding) overrides the dipole-repulsion argument. Recognise it as the exception, not a new rule.
        </KeyIdea>
      </ChapterSection>
    </PartShell>
  );
}
