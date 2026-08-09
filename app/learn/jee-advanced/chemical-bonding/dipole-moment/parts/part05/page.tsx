"use client";

import {
  ChapterSection,
  ConceptCard,
  DipoleStructureFigure,
  ExamTrap,
  FigureFrame,
  K,
  KeyIdea,
  PartShell,
} from "../../dipole-moment-shared";

export default function DipoleMomentPart05() {
  return (
    <PartShell
      part={5}
      title="Classic JEE Comparisons"
      description="NH₃ vs. NF₃, H₂O vs. OF₂, the chloromethane series, and the Group 15/16 hydride trends — the lone-pair/electronegativity comparison family."
    >
      <ChapterSection
        id="lone-pair-reversal"
        index="01"
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

        <ConceptCard title="N₂F₂ cis vs. trans — lone pairs defeat the naive prediction" tone="rose" eyebrow="Both nearly zero">
          <p>Naive vector reasoning predicts trans-N₂F₂ (F atoms opposite) should have small/zero μ and cis-N₂F₂ (F atoms same side) should have a large μ — but the observed trans is exactly zero while cis is also nearly zero (0.16 D), because nitrogen lone-pair contributions substantially offset the bond-moment picture in <strong className="text-white">both</strong> isomers.</p>
        </ConceptCard>
      </ChapterSection>

      <ChapterSection
        id="chloromethanes"
        index="02"
        eyebrow="Classic comparisons"
        title="The chloromethane series — induced-dipole opposition"
        intro="μ order: CH₃Cl > CH₂Cl₂ > CHCl₃ > CCl₄ (0). Naively, CH₂Cl₂ should exceed CH₃Cl, and CHCl₃'s C–Cl moment should equal CH₃Cl's — but the reverse is observed."
      >
        <FigureFrame title="The chloromethane series" caption="CH₃Cl (1.87 D) > CH₂Cl₂ (1.55 D) > CHCl₃ (1.02 D) > CCl₄ (0 D), each carbon drawn in genuine tetrahedral wedge/hash perspective.">
          <DipoleStructureFigure id="chloromethane-series" />
        </FigureFrame>

        <ExamTrap>
          Each polarised C–Cl bond (δ⁺C–Clδ⁻) induces an opposing dipole (μ<sub>induced</sub>, Part D) in the neighbouring C–Cl bonds. This induced-dipole opposition is negligible for the single C–Cl in CH₃Cl but grows with each additional chlorine, progressively suppressing the net C–Cl bond moment until CCl₄, symmetric, cancels to exactly zero. Also: CH₃Cl &gt; CH₃F &gt; CH₃Br &gt; CH₃I (mixed-halide trend) and HF &gt; HCl &gt; HBr &gt; HI.
        </ExamTrap>

        <ConceptCard title="CH₃OH — full geometric vector calculation" tone="amber">
          <p>Using <K>{String.raw`\mu(\text{O–H})=1.7\,\text{D}`}</K>, <K>{String.raw`\mu(\text{C–O})=0.7\,\text{D}`}</K>, <K>{String.raw`\mu(\text{CH}_3)=0.4\,\text{D}`}</K> and the 110° C–O–H angle: geometric summation gives <K>{String.raw`\mu_{\text{calc}}\approx1.56\ \text{D}`}</K> vs. <K>{String.raw`\mu_{\text{obs}}=1.65\ \text{D}`}</K> — the small gap is the (here-omitted) oxygen lone-pair contribution.</p>
        </ConceptCard>
      </ChapterSection>

      <ChapterSection
        id="hydride-trends"
        index="03"
        eyebrow="Classic comparisons"
        title="The Group 15 and Group 16 hydride trends"
        intro="Two clean, monotonic (mostly) trends built from the same electronegativity + s-character logic as the NH₃/NF₃ pair above."
      >
        <FigureFrame title="Group 15 hydrides" caption="NH₃ > PH₃ > AsH₃ > SbH₃, decreasing monotonically from 1.47 D to 0.12 D.">
          <DipoleStructureFigure id="group15-hydrides" />
        </FigureFrame>
        <ConceptCard title="Two effects act together going down the group" tone="cyan">
          <p>The electronegativity difference <K>{String.raw`\chi(E)-\chi(H)`}</K> shrinks, weakening <K>{String.raw`\mu_e`}</K>, and the bond angle closes toward 90° (from 107° in NH₃ to ~92° in SbH₃) — meaning less s-character in the bonding orbitals, which lowers the hybrid lone-pair moment&apos;s reinforcement of <K>{String.raw`\mu_e`}</K> (Part D).</p>
        </ConceptCard>

        <FigureFrame title="Group 16 hydrides" caption="H₂O > H₂S > H₂Se > H₂Te, with the bond angle closing toward 90° down the group.">
          <DipoleStructureFigure id="group16-hydrides" />
        </FigureFrame>
        <ConceptCard title="Same reasoning, one wrinkle" tone="violet">
          <p>Same reasoning as Group 15. The trend is not perfectly smooth — H₂Se and H₂Te are very close — because the shrinking electronegativity difference has nearly bottomed out and other small effects (relativistic contraction in Te, changing homopolar contribution <K>{String.raw`\mu_h`}</K>) become comparable in size.</p>
        </ConceptCard>

        <KeyIdea>
          Both trends are the μ<sub>e</sub> + μ<sub>L</sub> interplay from Part D playing out across a whole group, not a new rule — the same two-factor logic that separated NH₃ from NF₃ at the top of this part.
        </KeyIdea>
      </ChapterSection>
    </PartShell>
  );
}
