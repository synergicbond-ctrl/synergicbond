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

export default function DipoleMomentPart02() {
  return (
    <PartShell
      part={2}
      title="Factors & Classic JEE Comparisons"
      description="The six physical contributions that determine every observed moment, then applied to NH₃ vs. NF₃, the chloromethane series, and the Group 15/16 hydride trends."
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
              <p className="text-sm text-slate-400">Important caution: numbers like 4.4 D, 3.7 D, or a specific 71° lone-pair angle are model-dependent orbital quantities from a simplified localized-orbital picture — not directly measured, universal experimental constants.</p>
            </ConceptCard>
            <ConceptCard title="HCl in full: the three-way tug-of-war" tone="rose" eyebrow="The one full derivation">
              <p>If Cl used pure 3s/3p orbitals for its lone pairs, they would contribute nothing. Using sp³ hybrids instead, all three lone pairs point into the hemisphere opposite the H–Cl bond, each making ≈71° with the −z axis.</p>
              <p>Their combined contribution — <K>{String.raw`3\mu_L\cos71°`}</K> — <strong className="text-white">reinforces</strong> <K>{String.raw`\mu_e`}</K> but is <strong className="text-white">opposed</strong> by <K>{String.raw`\mu_h`}</K> (which points toward H, per the previous factor).</p>
              <p>The low observed <K>{String.raw`\mu(\text{HCl}) = 1.03\ \text{D}`}</K> reflects this three-way tug-of-war between <K>{String.raw`\mu_e`}</K>, <K>{String.raw`\mu_h`}</K> and <K>{String.raw`\mu_L`}</K> — not electronegativity alone. This is the only place in the chapter this full three-factor HCl breakdown is worked; the bare bond value and the %ionic calculation (both Part 1) build on it without repeating it.</p>
            </ConceptCard>
          </div>

          <div className="space-y-4">
            <FactorHeading symbol="μg" title="Group moment" />
            <ConceptCard title="Functional groups behave as one vector" tone="emerald">
              <p>Groups such as –CH₃, –OH, –NH₂, –NO₂, –Cl behave as a single vector — the resultant of all bond/electronic moments inside that group — and this vector is approximately transferable between different parent molecules.</p>
              <KB>{String.raw`\mu_{CH_3} = 3\mu_{C\text{–}H}\cos70°32' = \mu_{C\text{–}H} \approx 0.4\ \text{D}`}</KB>
            </ConceptCard>
            <FigureFrame title="Group moment concept" caption="A functional group behaves as a single resultant vector, transferable between different parent molecules.">
              <DipoleStructureFigure id="group-moment-ch3" />
            </FigureFrame>
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
              <p>In CO, the dative contribution nearly cancels the ordinary electronegativity-based moment, explaining CO&apos;s remarkably small <K>{String.raw`\mu \approx 0.11\text{–}0.12\ \text{D}`}</K> — the full structure, resonance diagram, and three-way competing-effects breakdown are in Part 4, which is where this factor gets its complete worked treatment.</p>
            </ConceptCard>
          </div>

          <div className="space-y-4">
            <FactorHeading symbol="μᵢ" title="Induced dipole moment" />
            <ConceptCard title="Field-driven, not always external" tone="cyan">
              <p>An external electric field — or the field of a neighbouring polar bond — can separate the charge centroids of an otherwise nonpolar region, creating an induced dipole.</p>
              <KB>{String.raw`\mu_{\text{induced}} = \alpha E`}</KB>
              <p>No external field is even required in some cases: in the chloromethane series (below), polarisation of one C–Cl bond electronically induces a moment in the other C–Cl bonds, opposing them and steadily reducing the net dipole as chlorination increases.</p>
            </ConceptCard>
          </div>
        </div>

        <ExamTrap>
          Six factors, one resultant. When a comparison &ldquo;shouldn&apos;t&rdquo; work by electronegativity alone (NH₃ vs. NF₃, CO&apos;s tiny μ, the chloromethane order), the explanation is always one of these other five factors overriding or reinforcing <K>{String.raw`\mu_e`}</K> — never a new rule.
        </ExamTrap>

        <KeyIdea>
          Parts 3 and 4 are, structurally, this same six-factor toolkit applied to specific molecules. Recognising <em>which</em> factor is doing the work in each comparison is the actual JEE skill — the factor names themselves are just vocabulary.
        </KeyIdea>
      </ChapterSection>

      <ChapterSection
        id="lone-pair-reversal"
        index="02"
        eyebrow="Classic comparisons"
        title="NH₃ vs. NF₃ and H₂O vs. OF₂ — the lone-pair reversal"
        intro="Two pairs of near-identical Δχ that give wildly different μ, because the lone-pair moment reinforces in one case and opposes in the other."
      >
        <FigureFrame title="NH₃ vs. NF₃" caption="NH₃ (μ = 1.46–1.50 D): lone-pair and bond-resultant moments reinforce. NF₃ (μ = 0.20 D): they nearly cancel.">
          <DipoleStructureFigure id="nh3-nf3" />
        </FigureFrame>
        <ConceptCard title="Despite almost-identical Δχ" tone="cyan">
          <p>N–H (Δχ = 0.94) and N–F (Δχ = 0.96) are almost identical in electronegativity difference, yet <K>{String.raw`\mu(\text{NH}_3) = 1.46\ \text{D} \gg \mu(\text{NF}_3) = 0.20\ \text{D}`}</K>.</p>
          <p>Reason: <K>{String.raw`\mu(\text{NH}_3) = \mu_R + \mu_L`}</K> (reinforcement) while <K>{String.raw`\mu(\text{NF}_3) = \mu_R - \mu_L`}</K> (opposition), where <K>{String.raw`\mu_L`}</K> is the N lone-pair moment and <K>{String.raw`\mu_R`}</K> the resultant of the three bond moments.</p>
        </ConceptCard>

        <FigureFrame title="H₂O vs. F₂O (OF₂)" caption="H₂O (μ = 1.84–1.85 D): lone-pair resultant reinforces the bond resultant. F₂O (μ = 0.3 D): they nearly cancel.">
          <DipoleStructureFigure id="h2o-of2" />
        </FigureFrame>
        <ConceptCard title="The same mechanism in a bent molecule" tone="violet">
          <p>Same mechanism as NH₃/NF₃: in H₂O, the O lone-pair resultant reinforces the O–H bond resultant; in F₂O it opposes it. Additionally, O–F (Δχ = 0.5) is intrinsically a weaker bond moment than O–H (Δχ = 1.4).</p>
        </ConceptCard>

        <FigureFrame title="N₂F₂ cis vs. trans" caption="trans-N₂F₂ (μ = 0) and cis-N₂F₂ (μ ≈ 0.16 D) — both far smaller than naive bond-vector reasoning alone would predict.">
          <DipoleStructureFigure id="n2f2-cis-trans" />
        </FigureFrame>
        <ConceptCard title="N₂F₂ cis vs. trans — lone pairs defeat the naive prediction" tone="rose" eyebrow="Both nearly zero">
          <p>Naive vector reasoning predicts trans-N₂F₂ (F atoms opposite) should have small/zero μ and cis-N₂F₂ (F atoms same side) should have a large μ — but the observed trans is exactly zero while cis is also nearly zero (0.16 D), because nitrogen lone-pair contributions substantially offset the bond-moment picture in <strong className="text-white">both</strong> isomers.</p>
        </ConceptCard>
      </ChapterSection>

      <ChapterSection
        id="chloromethanes"
        index="03"
        eyebrow="Classic comparisons"
        title="The chloromethane series — induced-dipole opposition"
        intro="μ order: CH₃Cl > CH₂Cl₂ > CHCl₃ > CCl₄ (0). Naively, CH₂Cl₂ should exceed CH₃Cl, and CHCl₃'s C–Cl moment should equal CH₃Cl's — but the reverse is observed."
      >
        <FigureFrame title="The chloromethane series" caption="CH₃Cl (1.87 D) > CH₂Cl₂ (1.55 D) > CHCl₃ (1.02 D) > CCl₄ (0 D), each carbon drawn in genuine tetrahedral wedge/hash perspective.">
          <DipoleStructureFigure id="chloromethane-series" />
        </FigureFrame>

        <ExamTrap>
          Each polarised C–Cl bond (δ⁺C–Clδ⁻) induces an opposing dipole (μ<sub>induced</sub>, above) in the neighbouring C–Cl bonds. This induced-dipole opposition is negligible for the single C–Cl in CH₃Cl but grows with each additional chlorine, progressively suppressing the net C–Cl bond moment until CCl₄, symmetric, cancels to exactly zero. Also: CH₃Cl &gt; CH₃F &gt; CH₃Br &gt; CH₃I (mixed-halide trend) and HF &gt; HCl &gt; HBr &gt; HI.
        </ExamTrap>

        <ConceptCard title="CH₃OH — full geometric vector calculation" tone="amber">
          <p>Using <K>{String.raw`\mu(\text{O–H})=1.7\,\text{D}`}</K>, <K>{String.raw`\mu(\text{C–O})=0.7\,\text{D}`}</K>, <K>{String.raw`\mu(\text{CH}_3)=0.4\,\text{D}`}</K> and the 110° C–O–H angle: geometric summation gives <K>{String.raw`\mu_{\text{calc}}\approx1.56\ \text{D}`}</K> vs. <K>{String.raw`\mu_{\text{obs}}=1.65\ \text{D}`}</K> — the small gap is the (here-omitted) oxygen lone-pair contribution.</p>
        </ConceptCard>
        <FigureFrame title="CH₃OH vector calculation" caption="Full geometric combination of the C–O, O–H and C–H bond moments at their tetrahedral angles.">
          <DipoleStructureFigure id="ch3oh-vector-calc" />
        </FigureFrame>
      </ChapterSection>

      <ChapterSection
        id="hydride-trends"
        index="04"
        eyebrow="Classic comparisons"
        title="The Group 15 and Group 16 hydride trends"
        intro="Two clean, monotonic (mostly) trends built from the same electronegativity + s-character logic as the NH₃/NF₃ pair above."
      >
        <FigureFrame title="Group 15 hydrides" caption="NH₃ > PH₃ > AsH₃ > SbH₃, decreasing monotonically from 1.47 D to 0.12 D.">
          <DipoleStructureFigure id="group15-hydrides" />
        </FigureFrame>
        <ConceptCard title="Two effects act together going down the group" tone="cyan">
          <p>The electronegativity difference <K>{String.raw`\chi(E)-\chi(H)`}</K> shrinks, weakening <K>{String.raw`\mu_e`}</K>, and the bond angle closes toward 90° (from 107° in NH₃ to ~92° in SbH₃) — meaning less s-character in the bonding orbitals, which lowers the hybrid lone-pair moment&apos;s reinforcement of <K>{String.raw`\mu_e`}</K> (above).</p>
        </ConceptCard>

        <FigureFrame title="Group 16 hydrides" caption="H₂O > H₂S > H₂Se > H₂Te, with the bond angle closing toward 90° down the group.">
          <DipoleStructureFigure id="group16-hydrides" />
        </FigureFrame>
        <ConceptCard title="Same reasoning, one wrinkle" tone="violet">
          <p>Same reasoning as Group 15. The trend is not perfectly smooth — H₂Se and H₂Te are very close — because the shrinking electronegativity difference has nearly bottomed out and other small effects (relativistic contraction in Te, changing homopolar contribution <K>{String.raw`\mu_h`}</K>) become comparable in size.</p>
        </ConceptCard>

        <KeyIdea>
          Both trends are the μ<sub>e</sub> + μ<sub>L</sub> interplay from above playing out across a whole group, not a new rule — the same two-factor logic that separated NH₃ from NF₃ earlier in this part.
        </KeyIdea>
      </ChapterSection>
    </PartShell>
  );
}
