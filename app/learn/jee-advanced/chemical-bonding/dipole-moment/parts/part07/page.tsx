"use client";

import {
  ChapterSection,
  ConceptCard,
  DataTable,
  DipoleStructureFigure,
  FigureFrame,
  K,
  KeyIdea,
  PartShell,
} from "../../dipole-moment-shared";

export default function DipoleMomentPart07() {
  return (
    <PartShell
      part={7}
      title="Organic Applications"
      description="Substituted benzenes, o/m/p disubstitution, and the resonance corrections that overturn simple group-vector addition."
    >
      <ChapterSection
        id="substituted-benzenes"
        index="01"
        eyebrow="Organic applications"
        title="Substituted benzenes"
        intro="Monosubstituted benzenes take the ring's own group moment (Part D) straight from the data bank; disubstituted benzenes add two group vectors at a fixed ring angle."
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
        index="02"
        eyebrow="Organic applications"
        title="Resonance corrections"
        intro="Simple group-vector addition (Part D + the section above) is a first approximation. Every entry here is a case where resonance, conjugation, or orbital overlap pushes the real μ away from that naive prediction."
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
          Every correction in this section is the μ<sub>d</sub>/resonance factor from Part D acting on top of the ordinary group-vector sum — never a mechanism outside the six-factor toolkit.
        </KeyIdea>
      </ChapterSection>
    </PartShell>
  );
}
