"use client";

import {
  ChapterSection,
  ConceptCard,
  DataTable,
  ExamTrap,
  FormulaCard,
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
      title="Ionic Character"
      description="Theoretical 100%-ionic moment, percentage ionic character, and the Pauling and Hannay–Smyth equations."
    >
      <ChapterSection
        id="percentage-ionic"
        index="01"
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

        <WorkedExample
          number={1}
          title="Percentage ionic character of H–Cl"
          difficulty="Foundation"
          concept="Reuses the μ(H–Cl) = 1.03 D bond moment established in Part A — only the new %ionic calculation is worked here."
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
      </ChapterSection>

      <ChapterSection
        id="pauling-hannay-smyth"
        index="02"
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
            <KB>{String.raw`3.5\chi_{\text{Li}}^2 - 24\chi_{\text{Li}} + 35.67 = 0`}</KB>
            <p>Roots: <K>{String.raw`\chi_{\text{Li}} = 0.9`}</K> or <K>{String.raw`\chi_{\text{Li}} = 13.5`}</K>.</p>
          </>}
          answer={<><K>{String.raw`\chi_{\text{Li}} = 13.5`}</K> is rejected — electronegativity cannot exceed 4.0 (the scale maximum, set by fluorine). The chemically acceptable root, <K>{String.raw`\chi_{\text{Li}} = 0.9`}</K>, is in excellent agreement with the accepted value for lithium (≈0.98).</>}
        />
      </ChapterSection>
    </PartShell>
  );
}
