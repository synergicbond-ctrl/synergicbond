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

export default function DipoleMomentPart03() {
  return (
    <PartShell
      part={3}
      title="Structural & Organic Applications"
      description="Predicting geometry from μ, cis–trans isomerism and conformational stability, substituted benzenes, and the resonance corrections that overturn simple group-vector addition."
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
        <div className="grid gap-5 lg:grid-cols-2">
          <FigureFrame title="Butane-2,3-dione: trans vs. cis" caption="trans (μ = 0, more stable) vs. cis (μ ≠ 0, less stable) — opposed vs. reinforcing C=O dipoles.">
            <DipoleStructureFigure id="butanedione-trans-cis" />
          </FigureFrame>
          <FigureFrame title="1,2-Dichloroethane: anti vs. gauche" caption="Newman projections — anti (μ = 0, more stable) vs. gauche (μ = 3.2 D).">
            <DipoleStructureFigure id="dichloroethane-anti-gauche" />
          </FigureFrame>
        </div>

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

      <ChapterSection
        id="substituted-benzenes"
        index="04"
        eyebrow="Organic applications"
        title="Substituted benzenes"
        intro="Monosubstituted benzenes take the ring's own group moment (Part 2) straight from the data bank; disubstituted benzenes add two group vectors at a fixed ring angle."
      >
        <FigureFrame title="Monosubstituted benzenes" caption="True Kekulé rings with alternating double bonds: benzene (0), chlorobenzene (1.70 D), phenol (1.40 D), nitrobenzene (3.90 D), aniline (1.50 D), toluene (0.40 D).">
          <DipoleStructureFigure id="benzene-mono" />
        </FigureFrame>

        <FigureFrame title="Dichlorobenzene: ortho, meta, para" caption="Illustrates the ortho > meta > para trend to zero.">
          <DipoleStructureFigure id="dichlorobenzene" />
        </FigureFrame>

        <ConceptCard title="Vector addition at fixed ring angles" tone="cyan">
          <p>θ<sub>ortho</sub> = 60°, θ<sub>meta</sub> = 120°, θ<sub>para</sub> = 180°:</p>
          <p><K>{String.raw`\mu = \sqrt{\mu_X^2+\mu_Y^2+2\mu_X\mu_Y\cos\theta}`}</K></p>
        </ConceptCard>

        <div className="grid gap-5 xl:grid-cols-2">
          <ConceptCard title="Identical substituents" tone="violet" eyebrow="μ_X = μ_Y">
            <p><K>{String.raw`\mu_{\text{ortho}}=\sqrt{3}\mu_X`}</K>; <K>{String.raw`\mu_{\text{meta}}=\mu_X`}</K>; <K>{String.raw`\mu_{\text{para}}=0`}</K> → order ortho &gt; meta &gt; para (e.g. dichlorobenzenes).</p>
          </ConceptCard>
          <ConceptCard title="Unlike substituents" tone="amber" eyebrow="One donating, one withdrawing">
            <p>e.g. CH₃, NO₂: order <strong className="text-white">reverses</strong> to ortho &lt; meta &lt; para. When both substituents are electron-withdrawing (e.g. Cl, NO₂), order returns to ortho &gt; meta &gt; para.</p>
          </ConceptCard>
        </div>

        <DataTable
          headers={["X, Y", "μ ortho", "μ meta", "μ para", "Trend"]}
          rows={[
            ["CH₃, Cl", "1.35", "1.78", "1.90", "o<m<p"],
            ["CH₃, NO₂", "3.76", "4.17", "4.40", "o<m<p"],
            ["Cl, NO₂", "4.60", "3.69", "2.70", "o>m>p"],
            ["NH₂, NO₂", "3.64–4.26", "4.85", "6.20", "o<m<p"],
            ["Cl, CN", "4.75", "3.40", "2.50", "o>m>p"],
          ]}
        />
      </ChapterSection>

      <ChapterSection
        id="resonance-corrections"
        index="05"
        eyebrow="Organic applications"
        title="Resonance corrections"
        intro="Simple group-vector addition (Part 2 + the section above) is a first approximation. Every entry here is a case where resonance, conjugation, or orbital overlap pushes the real μ away from that naive prediction."
      >
        <FigureFrame title="Hydroquinone (p-dihydroxybenzene)" caption="Both −OH groups drawn on the ring — the group moment tilts ≈83° from the ring diagonal because of the O lone pair not delocalised into the ring.">
          <DipoleStructureFigure id="hydroquinone" />
        </FigureFrame>
        <ConceptCard title="Why 'para' doesn't guarantee zero" tone="rose">
          <p>Simple collinear cancellation predicts μ = 0 for para-identical substituents, but hydroquinone shows μ ≈ 1.64 D. Reason: the O–H group moment is not collinear with the ring diagonal — the O lone pair (not delocalised into the ring) tilts the –OH group moment to ≈83° from the diagonal, so the two group vectors do not fully cancel.</p>
        </ConceptCard>

        <div className="grid gap-5 lg:grid-cols-2">
          <FigureFrame title="p-Nitroaniline" caption="+R(NH₂) and −R(NO₂) are electronically coupled through the ring — a push–pull pair, not two independent group vectors.">
            <DipoleStructureFigure id="p-nitroaniline-resonance" />
          </FigureFrame>
          <FigureFrame title="Ethyl chloride → vinyl chloride → chloroacetylene" caption="μ = 2.05 D (inductive only) → 1.44 D (+R opposes −I) → direction reversed (mesomeric dominates at an sp carbon).">
            <DipoleStructureFigure id="ethyl-vinyl-chloroacetylene" />
          </FigureFrame>
        </div>

        <FigureFrame title="Pyrrole vs. furan" caption="Pyrrole (μ = 1.8 D, net toward ring) vs. furan (μ = 0.7 D, net toward O) — the −I effect is stronger for O than N.">
          <DipoleStructureFigure id="pyrrole-furan" />
        </FigureFrame>

        <div className="grid gap-5 xl:grid-cols-2">
          <ConceptCard title="p- and o-Nitroaniline" tone="cyan" eyebrow="Coupled +R/−R">
            <p>Simple addition predicts <K>{String.raw`\mu \approx 5.48\ \text{D}`}</K> (1.53 + 3.95), but observed p-nitroaniline is <K>{String.raw`6.2\ \text{D}`}</K> — the +R(NH₂) and −R(NO₂) effects are electronically coupled through the ring, enhancing charge separation beyond simple group-vector addition.</p>
            <p>The same coupling enhancement shows up in <strong className="text-white">o-nitroaniline</strong>: observed μ ≈ 3.64 D, again above what simple group addition alone would predict.</p>
          </ConceptCard>
          <ConceptCard title="Ethyl chloride → vinyl chloride → chloroacetylene" tone="violet" eyebrow="Resonance competing with induction">
            <p>Ethyl chloride (μ = 2.05 D, inductive only) vs. vinyl chloride (μ = 1.44 D, +R opposes −I). Chloroacetylene has its direction fully reversed, because −I is so weak at an sp carbon that the mesomeric contribution dominates.</p>
          </ConceptCard>
          <ConceptCard title="Pyrrole vs. furan" tone="amber" eyebrow="−I vs. mesomeric donation">
            <p>Pyrrole (μ = 1.8 D, net toward ring) vs. furan (μ = 0.7 D, net toward O) — the −I effect is stronger for O than N, so furan&apos;s inductive pull wins while pyrrole&apos;s ring delocalisation wins.</p>
          </ConceptCard>
          <ConceptCard title="Fluorobenzene vs. chlorobenzene" tone="cyan" eyebrow="Smaller Δχ, bigger μ">
            <p>μ(PhF) = 1.63 D &lt; μ(PhCl) = 1.75 D — F(2p)→C(2p) π-donation is more efficient than Cl(3p)→C(2p), cancelling more of the −I effect in fluorobenzene despite F being far more electronegative.</p>
          </ConceptCard>
        </div>

        <KeyIdea>
          Every correction in this section is the μ<sub>d</sub>/resonance factor from Part 2 acting on top of the ordinary group-vector sum — never a mechanism outside the six-factor toolkit.
        </KeyIdea>
      </ChapterSection>
    </PartShell>
  );
}
