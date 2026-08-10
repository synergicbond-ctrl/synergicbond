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
  WorkedExample,
} from "../../dipole-moment-shared";

export default function DipoleMomentPart01() {
  return (
    <PartShell
      part={1}
      title="Foundation, Vector Nature & Ionic Character"
      description="What dipole moment measures, vector addition and symmetry cancellation, and percentage ionic character via the Pauling and Hannay–Smyth equations."
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

      <ChapterSection
        id="vector-addition"
        index="03"
        eyebrow="Vector nature"
        title="Vector addition of two dipoles"
        intro="The net, experimentally measured dipole of a whole molecule is the vector sum of all bond and lone-pair moments — never a simple arithmetic sum of magnitudes."
      >
        <FigureFrame title="Two bond-moment vectors, added by the parallelogram rule" caption="μ₁ and μ₂ separated by angle θ.">
          <DipoleStructureFigure id="vector-triangle" />
        </FigureFrame>

        <FigureFrame title="Molecular dipole as a vector sum" caption="The molecular dipole is a vector sum over every individual bond dipole.">
          <DipoleStructureFigure id="vector-sum-equation" />
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
        index="04"
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
            <p>Four identical bonds at 109.5° also cancel exactly, by the same vector logic. The full geometry-to-polarity rule set (all SN/BP/LP combinations) is built out in Part 3.</p>
          </ConceptCard>
        </div>

        <ExamTrap>
          A polar bond does not imply a polar molecule, and a nonpolar molecule does not imply nonpolar bonds — only the vector resultant decides <K>{String.raw`\mu`}</K>. CO₂, CCl₄, BF₃ and PF₅ are all built from strongly polar bonds yet are all μ = 0.
        </ExamTrap>

        <FigureFrame title="Polar bonds, nonpolar molecule" caption="Because dipole moment is a vector quantity, mu_molecule = 0 is possible even with strongly polar individual bonds, if symmetry cancels them.">
          <DipoleStructureFigure id="polar-bond-nonpolar-molecule" />
        </FigureFrame>

        <FigureFrame title="Symmetry cancellation gallery" caption="Linear O=C=O and S=C=S, and trigonal-planar BX₃ — all μ = 0 by geometry alone, regardless of individual bond polarity.">
          <DipoleStructureFigure id="symmetry-gallery" />
        </FigureFrame>

        <KeyIdea>
          Cancellation requires both equal-magnitude vectors <strong className="text-white">and</strong> the right geometry. Change either — swap one substituent, or distort the angle — and the cancellation breaks. This is exactly the lever the chloromethane series and the substituted-benzene o/m/p trend (both Part 2/3) exploit.
        </KeyIdea>
      </ChapterSection>

      <ChapterSection
        id="percentage-ionic"
        index="05"
        eyebrow="Ionic character"
        title="Percentage ionic character"
        intro="If a bond A–B were 100% ionic, complete unit-charge separation would give a theoretical maximum ('ionic') dipole moment. Comparing the observed moment to this theoretical maximum gives the percentage ionic character."
      >
        <FormulaCard title="Theoretical 100%-ionic moment">
          <KB>{String.raw`\mu_{\text{ionic}} = e \times d`}</KB>
        </FormulaCard>
        <FormulaCard title="Percentage ionic character">
          <KB>{String.raw`\%\ \text{ionic character} = \frac{\mu_{\text{observed}}}{\mu_{\text{ionic}}}\times 100`}</KB>
        </FormulaCard>

        <FigureFrame title="Percentage ionic character, worked for HCl" caption="mu_ionic = e·d for a hypothetical 100% ionic bond, then %ionic = (mu_observed / mu_ionic) × 100 — worked here for HCl to ≈17%.">
          <DipoleStructureFigure id="percentage-ionic-character-intro" />
        </FigureFrame>

        <WorkedExample
          number={1}
          title="Percentage ionic character of H–Cl"
          difficulty="Foundation"
          concept="Reuses the μ(H–Cl) = 1.03 D bond moment established above — only the new %ionic calculation is worked here."
          question={<>Given <K>{String.raw`\mu_{\text{obs}}(\text{HCl}) = 1.03\ \text{D}`}</K>, bond length <K>{String.raw`d = 1.27\ \text{Å} = 1.27\times10^{-8}\ \text{cm}`}</K>. Find the % ionic character.</>}
          solution={<>
            <p>Step 1 — theoretical 100%-ionic moment:</p>
            <KB>{String.raw`\mu_{\text{ionic}} = (4.8\times10^{-10}\ \text{esu}) \times (1.27\times10^{-8}\ \text{cm}) = 6.1\times10^{-18}\ \text{esu·cm} = 6.1\ \text{D}`}</KB>
            <p>Step 2 — % ionic character:</p>
            <KB>{String.raw`\%\ \text{ionic} = \frac{1.03}{6.1}\times100 = 17.0\%`}</KB>
          </>}
          answer={<>H–Cl is only ≈17% ionic (≈83% covalent) — despite the substantial electronegativity gap, the bond is predominantly covalent.</>}
        />

        <DataTable
          headers={["", "HF", "HCl", "HBr", "HI"]}
          rows={[
            ["μ_obs (D)", "1.98", "1.03", "0.79", "0.38"],
            ["% ionic character", "45", "17", "12", "5"],
          ]}
        />

        <KeyIdea>
          Cross-check via charge ratio: <K>{String.raw`\%\ \text{ionic} = (q_{\text{obs}}/q_{\text{calc}})\times100`}</K>. For LiF, <K>{String.raw`\mu_{\text{obs}} = 6.32\ \text{D}`}</K>, <K>{String.raw`d = 0.156\ \text{nm}`}</K> ⟹ <K>{String.raw`\mu_{\text{ionic}} = (1.602\times10^{-19}\,\text{C})(0.156\times10^{-9}\,\text{m}) = 2.496\times10^{-29}\ \text{C·m}`}</K>. <K>{String.raw`\%\ \text{ionic} = (6.32\times3.33\times10^{-30})/(2.496\times10^{-29})\times100 = 84.3\%`}</K> — the identical numeric result as the Hannay–Smyth cross-check below.
        </KeyIdea>

        <FigureFrame title="LiF charge-ratio cross-check" caption="mu_ionic = ed ≈ 7.50 D, giving %ionic character ≈ 84.3% — consistent with the Hannay–Smyth result below.">
          <DipoleStructureFigure id="lif-charge-ratio-crosscheck" />
        </FigureFrame>
      </ChapterSection>

      <ChapterSection
        id="pauling-hannay-smyth"
        index="06"
        eyebrow="Ionic character"
        title="The Pauling and Hannay–Smyth equations"
        intro="Two empirical equations predict % ionic character directly from electronegativity difference, without needing an observed dipole moment at all."
      >
        <ConceptCard title="Pauling empirical equation" tone="cyan" eyebrow="Historical">
          <KB>{String.raw`\%\ \text{ionic} = 100\left[1 - e^{-\tfrac{1}{4}(\chi_A-\chi_B)^2}\right]`}</KB>
        </ConceptCard>

        <DataTable
          headers={["Δχ", "0.1", "0.5", "1.0", "1.5", "1.7", "2.0", "2.5", "3.0"]}
          rows={[["% ionic", "0.5", "6", "22", "43", "50", "63", "79", "89"]]}
        />

        <FigureFrame title="Pauling equation and table" caption="The Pauling empirical equation for percent ionic character versus electronegativity difference.">
          <DipoleStructureFigure id="pauling-equation-table" />
        </FigureFrame>

        <ExamTrap>
          Agreement is poor at high Δχ. Alkali-metal hydrides and hydrides of Ca, Sr, Ba are predominantly ionic even though Δχ &lt; 1.7. HF: Δχ = 1.9 predicts 60% ionic character, but the true value is only ≈45%. The Δχ ≈ 1.7 &ldquo;50% ionic&rdquo; boundary is an empirical guideline, not an absolute law.
        </ExamTrap>

        <ConceptCard title="Hannay–Smyth equation" tone="violet" eyebrow="Corrects Pauling's shortcomings">
          <KB>{String.raw`\%\ \text{ionic} = 16(\Delta\chi) + 3.5(\Delta\chi)^2`}</KB>
        </ConceptCard>

        <DataTable
          headers={["", "HF", "HCl", "HBr", "HI"]}
          rows={[
            ["% ionic (approx.)", "43", "17", "13", "7"],
            ["% covalent (approx.)", "57", "83", "87", "93"],
          ]}
        />

        <FigureFrame title="Hannay–Smyth equation and table" caption="The Hannay–Smyth equation, tabulated for HF/HCl/HBr/HI, plus a worked HCl example giving ≈17.2% ionic character.">
          <DipoleStructureFigure id="hannay-smyth-equation-table" />
        </FigureFrame>

        <FigureFrame title="Pauling vs. Hannay–Smyth" caption="Percent ionic character compared across the two treatments for common bonds.">
          <DipoleStructureFigure id="pauling-hannay-smyth-chart" />
        </FigureFrame>

        <WorkedExample
          number={2}
          title="LiF, solving for χ(Li)"
          difficulty="JEE Advanced"
          concept="Using the Hannay–Smyth equation backwards to recover an unknown electronegativity, with a physically-motivated root rejection."
          question={<>Given <K>{String.raw`\mu(\text{LiF}) = 6.32\ \text{D}`}</K>, <K>{String.raw`\chi_F = 4.0`}</K>, bond length <K>{String.raw`= 0.156\ \text{nm}`}</K>. Find <K>{String.raw`\chi_{\text{Li}}`}</K>.</>}
          solution={<>
            <p>Theoretical ionic moment:</p>
            <KB>{String.raw`\mu_{\text{ionic}} = (1.6\times10^{-19}\,\text{C})(0.156\times10^{-9}\,\text{m}) = 2.496\times10^{-29}\ \text{C·m}`}</KB>
            <p>Observed % ionic character:</p>
            <KB>{String.raw`\frac{6.32 \times 3.34\times10^{-30}}{2.496\times10^{-29}} \times 100 = 84.33\%`}</KB>
            <p>Substitute into Hannay–Smyth and expand the quadratic:</p>
            <KB>{String.raw`84.33 = 16(4.0-\chi_{\text{Li}}) + 3.5(4.0-\chi_{\text{Li}})^2`}</KB>
            <KB>{String.raw`3.5\chi_{\text{Li}}^2 - 44\chi_{\text{Li}} + 35.67 = 0`}</KB>
            <p>Roots: <K>{String.raw`\chi_{\text{Li}} \approx 0.87`}</K> or <K>{String.raw`\chi_{\text{Li}} \approx 11.7`}</K>.</p>
          </>}
          answer={<><K>{String.raw`\chi_{\text{Li}} \approx 11.7`}</K> is rejected — electronegativity cannot exceed 4.0 (the scale maximum, set by fluorine). The chemically acceptable root, <K>{String.raw`\chi_{\text{Li}} \approx 0.87`}</K>, is in excellent agreement with the accepted value for lithium (≈0.98).</>}
        />

        <FigureFrame title="LiF: determination of χ(Li)" caption="The full worked derivation, including the corrected quadratic — roots ≈0.87 and ≈11.7, only 0.87 chemically meaningful.">
          <DipoleStructureFigure id="lif-electronegativity-determination" />
        </FigureFrame>
      </ChapterSection>
    </PartShell>
  );
}
