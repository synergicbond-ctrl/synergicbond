"use client";

import {
  ChapterSection,
  ConceptCard,
  DataTable,
  DipoleStructureFigure,
  ExamTrap,
  FactorHeading,
  FigureFrame,
  FormulaCard,
  K,
  KB,
  KeyIdea,
  PartShell,
} from "../../dipole-moment-shared";

export default function DipoleMomentPart04() {
  return (
    <PartShell
      part={4}
      title="Factors Determining Molecular Dipole"
      description="The six physical contributions that combine into every observed molecular moment — worked one at a time, in the order they matter most."
    >
      <ChapterSection
        id="six-factors"
        index="01"
        eyebrow="The six contributions"
        title="Factors Affecting Dipole Moment"
        intro="The observed molecular dipole moment is the resultant of six distinct physical contributions. Treating polarity as 'electronegativity difference alone' is the single most common error in this topic."
      >
        <FormulaCard title="The complete resultant">
          <KB>{String.raw`\vec\mu = \vec\mu_e + \vec\mu_h + \vec\mu_L + \vec\mu_g + \vec\mu_d + \vec\mu_{\text{induced}}`}</KB>
        </FormulaCard>

        <div className="space-y-10">
          <div className="space-y-4">
            <FactorHeading symbol="μe" title="Electronegativity / bond-pair moment" />
            <ConceptCard title="The familiar contribution" tone="cyan">
              <p>Unequal sharing of the bonding electron pair shifts density toward the more electronegative atom. This is usually — but not always — the dominant term.</p>
              <p>Generally <K>{String.raw`\mu_e > \mu_h`}</K> in magnitude, so the net bond moment is directed toward the more electronegative atom. But as the next factor shows, <K>{String.raw`\mu_h`}</K> is never negligible in a rigorous treatment.</p>
            </ConceptCard>
          </div>

          <div className="space-y-4">
            <FactorHeading symbol="μh" title="Intrinsic homopolar dipole" />
            <FigureFrame title="Origin of the intrinsic homopolar dipole" caption="The overlap electron cloud shifts toward the atom using the more compact orbital, even at zero electronegativity difference.">
              <DipoleStructureFigure id="homopolar-origin" />
            </FigureFrame>
            <ConceptCard title="Arises purely from orbital-size mismatch" tone="violet">
              <p>Exists even when <K>{String.raw`\Delta\chi = 0`}</K> (pure covalent bond). When one atom uses a more compact orbital, the overlap electron cloud is displaced toward it.</p>
              <p>In every H–X hydrogen halide, hydrogen&apos;s 1s orbital is far more compact than any halogen orbital, so <K>{String.raw`\mu_h`}</K> always acts <strong className="text-white">toward H</strong> — directly opposing the electronegativity-based moment, which acts toward X.</p>
            </ConceptCard>
          </div>

          <div className="space-y-4">
            <FactorHeading symbol="μL" title="Hybrid lone-pair moment" />
            <FigureFrame title="HCl — three sp³ lone pairs on Cl" caption="Each lone pair sits ≈71° from the H–Cl bond axis, reinforcing the electronegativity-based bond moment.">
              <DipoleStructureFigure id="hcl-lone-pairs" />
            </FigureFrame>
            <ConceptCard title="Only a hybrid lone pair has a net moment" tone="amber">
              <p>A lone pair contributes <strong className="text-white">zero</strong> dipole moment if it occupies a pure s or p orbital: the s-orbital is spherically symmetric, and a pure p-orbital&apos;s two lobes point in exactly opposite directions and cancel. Only a lone pair housed in a hybrid orbital has a net directional moment.</p>
              <KB>{String.raw`sp > sp^2 > sp^3`}</KB>
              <p className="text-sm text-slate-400">Lone-pair moment order for carbon-type hybrids: 4.4 D → 3.7 D.</p>
            </ConceptCard>
            <ConceptCard title="HCl in full: the three-way tug-of-war" tone="rose" eyebrow="The one full derivation">
              <p>If Cl used pure 3s/3p orbitals for its lone pairs, they would contribute nothing. Using sp³ hybrids instead, all three lone pairs point into the hemisphere opposite the H–Cl bond, each making ≈71° with the −z axis.</p>
              <p>Their combined contribution — <K>{String.raw`3\mu_L\cos71°`}</K> — <strong className="text-white">reinforces</strong> <K>{String.raw`\mu_e`}</K> but is <strong className="text-white">opposed</strong> by <K>{String.raw`\mu_h`}</K> (which points toward H, per the previous factor).</p>
              <p>The low observed <K>{String.raw`\mu(\text{HCl}) = 1.03\ \text{D}`}</K> reflects this three-way tug-of-war between <K>{String.raw`\mu_e`}</K>, <K>{String.raw`\mu_h`}</K> and <K>{String.raw`\mu_L`}</K> — not electronegativity alone. This is the only place in the chapter this full three-factor HCl breakdown is worked; the bare bond value (Part A) and the %ionic calculation (Part C) both build on it without repeating it.</p>
            </ConceptCard>
          </div>

          <div className="space-y-4">
            <FactorHeading symbol="μg" title="Group moment" />
            <ConceptCard title="Functional groups behave as one vector" tone="emerald">
              <p>Groups such as –CH₃, –OH, –NH₂, –NO₂, –Cl behave as a single vector — the resultant of all bond/electronic moments inside that group — and this vector is approximately transferable between different parent molecules.</p>
              <KB>{String.raw`\mu_{CH_3} = 3\mu_{C\text{–}H}\cos70°32' = \mu_{C\text{–}H} \approx 0.4\ \text{D}`}</KB>
            </ConceptCard>
            <DataTable
              headers={["Group", "μ (D)", "Direction (aromatic ring)"]}
              rows={[
                ["–NO₂", "3.95", "away (−I and −R same direction)"],
                ["–CHO", "2.8", "away"],
                ["–OH", "1.7", "away (−I predominates over +R)"],
                ["–Cl", "1.55", "away"],
                ["–CO₂H", "0.9", "away"],
                ["–CH₃", "0.4", "toward"],
                ["–NH₂", "1.53", "toward (+R predominates over −I)"],
              ]}
            />
          </div>

          <div className="space-y-4">
            <FactorHeading symbol="μd" title="Dative / coordinate-bond moment" />
            <ConceptCard title="Charge separation from a coordinate bond" tone="violet">
              <p>Arises from charge separation associated with a coordinate bond or a charge-separated resonance contributor. Important in CO and B–N systems.</p>
              <p>In CO, the dative contribution nearly cancels the ordinary electronegativity-based moment, explaining CO&apos;s remarkably small <K>{String.raw`\mu \approx 0.11\text{–}0.12\ \text{D}`}</K> — the full structure, resonance diagram, and three-way competing-effects breakdown are in Part H, which is where this factor gets its complete worked treatment.</p>
            </ConceptCard>
          </div>

          <div className="space-y-4">
            <FactorHeading symbol="μᵢ" title="Induced dipole moment" />
            <ConceptCard title="Field-driven, not always external" tone="cyan">
              <p>An external electric field — or the field of a neighbouring polar bond — can separate the charge centroids of an otherwise nonpolar region, creating an induced dipole.</p>
              <KB>{String.raw`\mu_{\text{induced}} = \alpha E`}</KB>
              <p>No external field is even required in some cases: in the chloromethane series (Part E), polarisation of one C–Cl bond electronically induces a moment in the other C–Cl bonds, opposing them and steadily reducing the net dipole as chlorination increases.</p>
            </ConceptCard>
          </div>
        </div>

        <ExamTrap>
          Six factors, one resultant. When a comparison &ldquo;shouldn&apos;t&rdquo; work by electronegativity alone (NH₃ vs. NF₃, CO&apos;s tiny μ, the chloromethane order), the explanation is always one of these other five factors overriding or reinforcing <K>{String.raw`\mu_e`}</K> — never a new rule.
        </ExamTrap>

        <KeyIdea>
          Parts E through H are, structurally, this same six-factor toolkit applied to specific molecules. Recognising <em>which</em> factor is doing the work in each comparison is the actual JEE skill — the factor names themselves are just vocabulary.
        </KeyIdea>
      </ChapterSection>
    </PartShell>
  );
}
