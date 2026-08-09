"use client";

import {
  ChapterSection,
  ConceptCard,
  DataTable,
  KeyIdea,
  PartShell,
} from "../../dipole-moment-shared";

export default function DipoleMomentPart09() {
  return (
    <PartShell
      part={9}
      title="JEE Revision Tables"
      description="Every classic comparison regrouped by deciding factor, plus the complete bond-moment, group-moment and molecular-dipole reference data banks."
    >
      <ChapterSection
        id="comparisons-by-factor"
        index="01"
        eyebrow="Revision"
        title="Quick-reference comparisons, grouped by deciding factor"
        intro="Every comparison below isolates one specific factor from Part D — resonance/conjugation, geometry/symmetry, lone-pair placement, or plain bond polarity — that decides which of two related molecules has the larger dipole moment. In several cases a larger μ does not imply greater chemical reactivity."
      >
        <ConceptCard title="Resonance & conjugation decides" tone="violet">
          <DataTable
            headers={["Comparison", "μ values", "Order", "Why"]}
            rows={[
              ["DMF vs. acetone", "3.82 D vs. 2.88 D", "DMF > acetone", "Amide resonance (⁻O–C=N⁺) increases charge separation, yet N→C=O donation makes DMF the poorer electrophile — larger μ ≠ more reactive carbonyl."],
              ["Furan vs. tetrahydrofuran", "0.66 D vs. ≈1.6–1.8 D", "THF > furan", "In furan, an O lone pair delocalises into the aromatic π system and resonance partly offsets the local C–O polarisation; THF lacks that delocalisation."],
              ["Thiophene vs. tetrahydrothiophene", "0.55 D vs. ≈1.8–2 D", "THT > thiophene", "Aromatic conjugation in thiophene redistributes the S lone-pair density and reduces the local C–S resultant."],
              ["Pyrrole vs. cyclopentadiene", "1.84 D vs. much smaller", "pyrrole > cyclopentadiene", "N contributes a lone pair to the aromatic π sextet, producing substantial internal charge redistribution."],
              ["Acrolein vs. acetaldehyde", "≈3 D vs. 2.75 D", "acrolein ≳ acetaldehyde", "Conjugation lets the C=O polarisation extend into the C=C bond — explains why acrolein's β-carbon is electrophilic."],
              ["Methyl vinyl ketone vs. acetone", "≈3 D vs. 2.88 D", "MVK ≳ acetone", "Conjugation spreads carbonyl polarisation into the alkene while keeping a strong C=O contribution — links to Michael (1,4)-addition."],
              ["Cyclohexanone vs. cyclohex-2-en-1-one", "both strongly polar", "condition-dependent", "Conjugation changes both magnitude and direction of individual bond contributions — better taught as a polarisation pattern than a numerical order."],
              ["Benzaldehyde vs. acetaldehyde", "≈3.0 D vs. 2.75 D", "benzaldehyde > acetaldehyde (usually)", "Phenyl–C=O conjugation adds charge-separated contributors — yet benzaldehyde can be less reactive toward many nucleophiles despite the larger μ."],
              ["Acetophenone vs. acetone", "≈3 D vs. 2.88 D", "acetophenone usually slightly higher", "Phenyl–carbonyl conjugation modifies charge distribution, but the total vector difference stays small."],
              ["Benzophenone vs. acetone", "≈3 D vs. 2.88 D", "comparable", "Additional phenyl groups increase delocalisation but also introduce vector/conformational effects — more conjugation does not mean much larger μ."],
              ["p-Nitroaniline vs. nitrobenzene", "≈6.2 D vs. ≈4.0 D", "p-nitroaniline > nitrobenzene", "−NH₂ (π-donor) and −NO₂ (π-acceptor) reinforce through the para-conjugated ring — push–pull enhancement beyond simple group-vector addition."],
              ["p-Nitroaniline vs. aniline", "≈6.2 D vs. ≈1.5 D", "p-nitroaniline ≫ aniline", "The para nitro acceptor converts aniline into a donor–π–acceptor system with much greater charge separation."],
              ["p-Dimethylaminobenzaldehyde vs. benzaldehyde", "donor–acceptor compound appreciably higher", "p-DMAB > benzaldehyde", "–NMe₂ donates while –CHO withdraws through the conjugated π system, reinforcing long-range charge transfer — a chromophore/solvatochromism example."],
            ]}
          />
        </ConceptCard>

        <ConceptCard title="Geometry & symmetry decides" tone="cyan">
          <DataTable
            headers={["Comparison", "μ values", "Order", "Why"]}
            rows={[
              ["Nitrobenzene vs. benzene", "≈4.0 D vs. 0 D", "nitrobenzene ≫ benzene", "Benzene is perfectly symmetric; −NO₂ introduces strong −I/−R withdrawal and N⁺O⁻ character."],
              ["Pyridine vs. benzene", "≈2.2 D vs. 0 D", "pyridine ≫ benzene", "Replacing one CH by N destroys hexagonal charge symmetry — a small structural substitution converts μ from zero to substantial."],
              ["DMSO vs. dimethyl sulfone", "≈4.0 D vs. ≈4–5 D (phase-dependent)", "close — not simply 'two S=O ⟹ double μ'", "The two S–O bond vectors in the sulfone are not parallel; geometry causes substantial vector cancellation."],
              ["cis- vs. trans-1,2-difluoroethene", "cis ≠ 0; trans ≈ 0", "cis > trans", "C–F vectors cancel by symmetry in trans, reinforce in cis — the fluorine analogue of the dichloroethene case."],
              ["SOCl₂ vs. POCl₃", "≈1.45 D vs. ≈2–2.5 D", "POCl₃ > SOCl₂", "POCl₃'s strong P–O polarisation isn't fully cancelled by the three P–Cl vectors; in SOCl₂ the S=O, S–Cl and lone-pair contributions cancel more strongly."],
              ["SOCl₂ vs. POF₃", "≈1.45 D vs. ≈2 D+", "POF₃ > SOCl₂", "POF₃'s strongly polarised P–O bond plus an asymmetric one-O/three-F ligand set keeps the resultant along the C₃ axis large."],
              ["NO₂F", "0.466 D", "small but nonzero", "Asymmetric, so μ ≠ 0 — but the N–F and two N–O contributions substantially oppose one another, leaving only a small resultant."],
              ["COF₂ vs. CO₂", "0.950 D vs. 0", "COF₂ > CO₂", "CO₂'s two identical C=O vectors cancel exactly; COF₂ has one C=O and two C–F bonds, so the non-equivalent vectors cannot cancel."],
            ]}
          />
        </ConceptCard>

        <ConceptCard title="Lone-pair placement decides" tone="amber">
          <DataTable
            headers={["Comparison", "μ values", "Order", "Why"]}
            rows={[
              ["SF₄ vs. PF₅", "0.632 D vs. 0", "SF₄ > PF₅", "PF₅'s ideal D₃ₕ symmetry cancels completely; SF₄'s equatorial lone pair destroys that cancellation — electron-pair geometry ≠ molecular symmetry."],
              ["ClF₃ vs. IF₅", "≈0.5–0.6 D vs. ≈2.1 D", "IF₅ ≫ ClF₃", "T-shaped ClF₃ cancels more than square-pyramidal IF₅, whose four basal vectors cancel in-plane but leave a substantial axial resultant."],
              ["SOCl₂ vs. SO₂Cl₂", "≈1.4–1.5 D vs. 1.81 D", "SO₂Cl₂ > SOCl₂", "'Having a lone pair' does not guarantee a larger μ — the full vector resultant matters, and SO₂Cl₂'s two strongly polar S=O bonds dominate."],
            ]}
          />
        </ConceptCard>

        <ConceptCard title="Bond polarity / induced effects decide" tone="emerald">
          <DataTable
            headers={["Comparison", "μ values", "Order", "Why"]}
            rows={[
              ["Acetonitrile vs. propyne", "≈3.9 D vs. 0.78 D", "CH₃CN ≫ propyne", "C≡N has very strong Cᵟ⁺–Nᵟ⁻ polarisation; the C≡C unit of propyne has no comparable heteronuclear dipole."],
              ["Thiophene vs. furan", "0.55 D vs. 0.66 D", "furan > thiophene", "O's stronger inductive pull outweighs S's greater polarizability."],
              ["DMSO vs. dimethyl sulfide", "≈3.96 D vs. 1.50 D", "DMSO ≫ DMS", "Oxidation introduces a strongly polarised S⁺–O⁻ linkage."],
              ["Acetaldehyde vs. acetone", "2.75 D vs. 2.88 D", "acetone > acetaldehyde", "The second methyl group modifies the resultant — yet acetaldehyde is normally the more electrophilic despite the smaller μ."],
              ["Propanal vs. acetone", "2.52 D vs. 2.88 D", "acetone > propanal", "Total molecular μ depends on the vector sum of all bond contributions, not carbonyl polarity alone — aldehyde/ketone reactivity order can't be read off μ."],
              ["1,2-Difluoroethane vs. 1,2-dichloroethane", "strongly conformer-dependent", "no single order to memorise", "Each exists as a population of conformers; 1,2-difluoroethane's gauche conformer is unusually stabilised by stereoelectronic effects — minimum μ need not mean maximum conformational stability."],
              ["H₂CO vs. H₂CS", "2.332 D vs. 1.647 D", "H₂CO > H₂CS", "O's much greater electronegativity beats S's greater polarizability — a direct counterexample to 'more polarizable ⟹ larger μ.'"],
              ["NOCl vs. NOBr", "both ≈1.8 D, values close", "no strong simple order", "Replacing Cl with Br changes bond polarity and bond length in opposite ways, and the strongly polarised N–O contribution dominates either way — a warning against ranking μ from Δχ alone."],
            ]}
          />
        </ConceptCard>
      </ChapterSection>

      <ChapterSection
        id="bond-moments-bank"
        index="02"
        eyebrow="Revision"
        title="Bond moments data bank"
        intro="Approximately transferable bond moments (Debye), the building blocks for every vector-addition calculation in this chapter."
      >
        <DataTable
          headers={["Bond", "μ (D)", "Bond", "μ (D)"]}
          rows={[
            ["H–C", "0.39", "H–N", "1.33"],
            ["N–O", "1.51", "H–P", "0.36"],
            ["H–S", "0.69", "C–N", "0.22"],
            ["C–O", "0.75", "C–F", "1.39"],
            ["C–Cl", "1.47", "C–Br", "1.42"],
            ["Si–H", "0.99", "Si–N", "1.55"],
            ["Sn–Cl", "3.00", "N–F", "0.17"],
            ["P–Cl", "0.80", "C=N", "0.90"],
            ["C=O", "2.30", "P=O", "2.70"],
            ["S=O", "3.00", "C≡N", "3.53"],
            ["N→O", "4.28", "O→B", "3.60"],
            ["N→B", "2.55", "P→B", "4.40–4.44"],
          ]}
        />
      </ChapterSection>

      <ChapterSection
        id="group-moments-bank"
        index="03"
        eyebrow="Revision"
        title="Group moments data bank"
        intro="Group moments toward benzene (Part D) plus a homologous-series check: the same group's moment stays essentially constant as the alkyl chain lengthens."
      >
        <DataTable
          headers={["Group", "μ (D)", "Direction (aromatic ring)"]}
          rows={[
            ["–NO₂", "3.95", "away"],
            ["–CHO", "2.8", "away"],
            ["–OH", "1.7", "away"],
            ["–Cl", "1.55", "away"],
            ["–CO₂H", "0.9", "away"],
            ["–CH₃", "0.4", "toward"],
            ["–NH₂", "1.53", "toward"],
            ["–H", "0", "—"],
          ]}
        />
        <ConceptCard title="Homologous-series alkyl group moments" tone="cyan" eyebrow="Constant within a series">
          <DataTable
            headers={["Alkyl group", "Alcohol (–OH)", "Amine (–NH₂)", "Chloride (–Cl)", "Nitrile (–C≡N)"]}
            rows={[
              ["C₂H₅–", "1.70", "1.30", "2.04", "3.56"],
              ["n-C₃H₇–", "1.67", "1.40", "2.04", "3.56"],
              ["n-C₄H₉–", "1.66", "1.30", "2.04", "3.56"],
            ]}
          />
        </ConceptCard>
      </ChapterSection>

      <ChapterSection
        id="molecular-dipole-master"
        index="04"
        eyebrow="Revision"
        title="Molecular dipole moments — master reference"
        intro="Every molecular μ used across all nine parts, collected into one lookup reference."
      >
        <ConceptCard title="Zero-dipole molecules (symmetry cancellation)" tone="navy">
          <DataTable
            headers={["Molecule", "μ (D)"]}
            rows={[
              ["H₂, Cl₂, Br₂, I₂, N₂", "0"],
              ["CH₄, C₃H₈, C₂H₄, C₂H₂, C₂H₆", "0"],
              ["CO₂, CS₂, CCl₄, CBr₄, SnCl₄", "0"],
              ["C₆H₆ (benzene), naphthalene", "0"],
              ["PCl₅, SF₆, PF₅, BF₃, SO₃ (planar D₃ₕ)", "0"],
            ]}
          />
        </ConceptCard>

        <ConceptCard title="Hydrides and simple diatomics/triatomics" tone="cyan">
          <DataTable
            headers={["Molecule", "μ (D)", "Molecule", "μ (D)"]}
            rows={[
              ["HF", "1.98–2.0", "HCl", "1.03"],
              ["HBr", "0.78–0.79", "HI", "0.38"],
              ["CO", "0.10–0.12", "HCN", "2.92"],
              ["H₂O", "1.84–1.85", "H₂S", "1.10"],
              ["NH₃", "1.46–1.50", "NF₃", "0.20"],
              ["PH₃", "0.55", "AsH₃", "0.16"],
              ["SbH₃", "≈0.12", "H₂Se", "≈0.24"],
              ["H₂Te", "≈0.20", "SO₂", "1.63"],
              ["N₂O", "0.17", "OF₂ (F₂O)", "0.3"],
              ["O₃", "small, nonzero", "N₂F₂ (trans)", "0"],
              ["N₂F₂ (cis)", "≈0.16", "N₂H₄", "≈1.85"],
              ["H₂O₂", "≈2.0", "PCl₃", "0.78"],
              ["ClF (interhalogen)", "≈0.88", "KCl, CsCl (gas, ionic)", "≈10.3–10.4"],
            ]}
          />
        </ConceptCard>

        <ConceptCard title="Halomethanes and simple organics" tone="violet">
          <DataTable
            headers={["Molecule", "μ (D)", "Molecule", "μ (D)"]}
            rows={[
              ["CH₃OH", "1.65", "CH₃Cl", "1.86–1.87"],
              ["CH₂Cl₂", "1.55", "CHCl₃", "1.02–1.15"],
              ["CCl₄", "0", "CH₃Br", "1.80"],
              ["C₂H₅Br", "2.03", "CH₃NH₂", "1.25"],
              ["CH₃CO₂H", "1.74", "Ethyl chloride", "2.05"],
              ["Vinyl chloride", "1.44", "1,2-dichloroethane (gas, avg)", "1.2"],
              ["1,2-dichloroethane, gauche", "3.2", "1,2-dichloroethane, anti", "0"],
              ["cis-1,2-C₂H₂Cl₂", "1.86–1.90", "trans-1,2-C₂H₂Cl₂", "0"],
              ["Maleic acid (cis)", "≠ 0", "Fumaric acid (trans)", "≈ 0"],
              ["Butane-2,3-dione, trans", "0", "Butane-2,3-dione, cis", "≠ 0"],
              ["Acetone", "2.88", "Acetonitrile", "3.92"],
              ["DMSO", "3.96", "Ethanol", "1.69"],
              ["Formaldehyde", "2.33", "Acetaldehyde", "2.75"],
              ["DMF", "≈3.82", "Diethyl ether", "1.15"],
              ["H₂CO", "2.332", "H₂CS", "1.647"],
            ]}
          />
        </ConceptCard>

        <ConceptCard title="Aromatics, complexes and fluorine/phosphorus systems" tone="amber">
          <DataTable
            headers={["Molecule", "μ (D)", "Molecule", "μ (D)"]}
            rows={[
              ["Pyrrole", "1.8", "Furan", "0.7"],
              ["Fluorobenzene", "1.63", "Chlorobenzene", "1.70–1.75"],
              ["Phenol", "1.40", "Nitrobenzene", "3.90"],
              ["Aniline", "1.50", "Toluene", "0.40"],
              ["p-Nitroaniline", "6.2", "o-Nitroaniline", "3.64–4.26"],
              ["Hydroquinone", "1.64", "Pyridine", "2.19"],
              ["cis-Pt(PEt₃)₂Cl₂", "9.9", "trans-Pt(PEt₃)₂Cl₂", "0"],
              ["cis-Pt(SEt₂)₂Cl₂", "9.5", "trans-Pt(SEt₂)₂Cl₂", "2.4"],
              ["SF₄ (see-saw, AX₄E)", "≈0.63", "ClF₃ (T-shaped, AX₃E₂)", "≈0.56"],
              ["BrF₅ (sq. pyramidal, AX₅E)", "≈1.51", "IF₅", "≈2.1"],
              ["NO₂F", "0.466", "COF₂", "0.950"],
            ]}
          />
        </ConceptCard>

        <KeyIdea>
          The alkali-halide gas-phase values (KCl, CsCl, ≈10 D) are included to give a sense of scale: these diatomics are close to 100% ionic, in sharp contrast to the &lt;50% ionic character of HF/HCl/HBr/HI worked out in Part C — even though both series are &ldquo;diatomic halides.&rdquo;
        </KeyIdea>
      </ChapterSection>
    </PartShell>
  );
}
