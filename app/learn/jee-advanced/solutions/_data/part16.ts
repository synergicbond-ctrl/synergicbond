import type { SolutionPart } from "./types";

export const part16: SolutionPart = {
  "number": 16,
  "slug": "16-vant-hoff-factor",
  "shortTitle": "van’t Hoff Factor",
  "title": "Abnormal Colligative Properties, Dissociation and Association",
  "subtitle": "Effective particle count, degree of ionisation or association, electrolyte formulas and transformed source problems.",
  "sourcePages": "73–77",
  "objectives": [
    "Define and calculate van’t Hoff factor.",
    "Relate i to degree of dissociation.",
    "Relate i to degree of association.",
    "Use i in every colligative-property equation.",
    "Solve electrolyte and dimerisation problems."
  ],
  "blocks": [
    {
      "kind": "theory",
      "title": "Why colligative molar masses can appear abnormal",
      "paragraphs": [
        "Colligative properties count effective solute particles. If a solute dissociates, particle count rises and the observed effect is larger than expected from formula-unit moles. If solute molecules associate, particle count falls and the observed effect is smaller.",
        "The van’t Hoff factor i is the ratio of the observed colligative effect to the value calculated for no change in particle count. It is also the ratio of actual final solute-particle moles to initial formula-unit moles in the idealised model."
      ],
      "equations": [
        "i = observed colligative property / calculated colligative property",
        "i = normal molar mass / observed colligative molar mass",
        "π=iCRT; ΔT_b=iK_bm; ΔT_f=iK_fm; relative lowering≈ix₂"
      ],
      "sourcePages": "73–75",
      "visual": "vant-hoff"
    },
    {
      "kind": "derivation",
      "title": "Dissociation into ν particles",
      "steps": [
        "Start with 1 mol of formula units.",
        "If degree of dissociation is α, undissociated amount is 1−α.",
        "Dissociated amount α produces να moles of particles.",
        "Total final particles=(1−α)+να=1+(ν−1)α."
      ],
      "result": "i = 1 + (ν−1)α;  α=(i−1)/(ν−1)",
      "assumptions": [
        "All ions contribute independently.",
        "No ion pairing beyond what is represented by α."
      ],
      "sourcePages": "74–76"
    },
    {
      "kind": "derivation",
      "title": "Association of n monomers into one aggregate",
      "steps": [
        "Start with 1 mol monomer.",
        "If fraction α of monomer units associates, unassociated monomer amount is 1−α.",
        "Associated monomer units α form α/n moles of n-mer.",
        "Total particles=(1−α)+α/n."
      ],
      "result": "i = 1 − α(1−1/n);  α = n(1−i)/(n−1)",
      "assumptions": [
        "Only one n-mer type forms.",
        "Association equilibrium is represented by one overall degree α."
      ],
      "sourcePages": "75–77"
    },
    {
      "kind": "table",
      "title": "Ideal limiting i values for complete dissociation",
      "headers": [
        "Solute type",
        "Ideal dissociation",
        "ν",
        "i at α=1"
      ],
      "rows": [
        [
          "AB",
          "A⁺ + B⁻",
          "2",
          "2"
        ],
        [
          "AB₂ or A₂B",
          "3 ions",
          "3",
          "3"
        ],
        [
          "AB₃ or A₃B",
          "4 ions",
          "4",
          "4"
        ],
        [
          "Al₂(SO₄)₃",
          "2 Al³⁺ + 3 SO₄²⁻",
          "5",
          "5"
        ],
        [
          "Nonelectrolyte",
          "No dissociation",
          "1",
          "1"
        ]
      ],
      "note": "Real electrolyte i values are usually below the ideal integer because of ion pairing and interionic interactions.",
      "sourcePages": "74–76"
    },
    {
      "kind": "example",
      "number": "16.1",
      "title": "Degree of dissociation of aluminium sulfate",
      "question": "A 0.0200 m Al₂(SO₄)₃ solution freezes at −0.149°C. Use K𝒇(water)=1.86 K kg mol⁻¹ and assume only incomplete dissociation. Find i and α.",
      "steps": [
        "i=ΔT_f/(K_fm)=0.149/(1.86×0.0200)=4.005.",
        "For Al₂(SO₄)₃, ν=5.",
        "α=(i−1)/(ν−1)=(4.005−1)/4=0.751."
      ],
      "answer": "i≈4.01 and degree of dissociation α≈0.751 (75.1%).",
      "sourcePages": "75–76",
      "transformation": "Molality and freezing depression changed from the source aluminium-sulfate problem."
    },
    {
      "kind": "example",
      "number": "16.2",
      "title": "Benzoic-acid dimerisation in benzene",
      "question": "1.22 g benzoic acid (M=122 g mol⁻¹) is dissolved in 100 g benzene. The freezing-point depression is 0.384 K; K𝒇(benzene)=5.12 K kg mol⁻¹. Assuming dimerisation only, find the degree of association.",
      "steps": [
        "Formal molality=(1.22/122)/0.100=0.100 m.",
        "i=0.384/(5.12×0.100)=0.750.",
        "For dimerisation, i=1−α/2.",
        "α=2(1−0.750)=0.500."
      ],
      "answer": "50.0% of benzoic-acid monomer units are associated into dimers.",
      "sourcePages": "75–77",
      "transformation": "Masses and observed depression changed from the source association problem."
    },
    {
      "kind": "example",
      "number": "16.3",
      "title": "Boiling point with partial acetic-acid dimerisation",
      "question": "6.00 g acetic acid is dissolved in 200 g benzene. If 40.0% of the acid associates as dimers and Kᵦ(benzene)=2.53 K kg mol⁻¹, find the boiling-point elevation.",
      "steps": [
        "Formal moles acid=6.00/60.0=0.100 mol; formal molality=0.100/0.200=0.500 m.",
        "For dimerisation, i=1−α/2=1−0.400/2=0.800.",
        "ΔT_b=iK_bm=0.800×2.53×0.500=1.012 K."
      ],
      "answer": "ΔTᵦ=1.01 K.",
      "sourcePages": "76–77",
      "transformation": "Acid mass, benzene mass and degree of association changed."
    },
    {
      "kind": "example",
      "number": "16.4",
      "title": "Rank freezing points descriptively",
      "question": "Equal-molal aqueous solutions of glucose, NaCl, CaCl₂ and Al₂(SO₄)₃ are prepared. Assume complete ideal dissociation. Arrange them from highest to lowest freezing point and explain.",
      "steps": [
        "For equal molality, ΔT_f∝i.",
        "Ideal i values are glucose 1, NaCl 2, CaCl₂ 3 and Al₂(SO₄)₃ 5.",
        "Larger i gives a larger depression and therefore a lower freezing point."
      ],
      "answer": "Highest to lowest freezing point: glucose > NaCl > CaCl₂ > Al₂(SO₄)₃.",
      "sourcePages": "77",
      "transformation": "Converted the final source objective item into a descriptive solved ranking with no options."
    },
    {
      "kind": "example",
      "number": "16.5",
      "title": "Observed molar mass and van’t Hoff factor",
      "question": "A solute has true molar mass 120 g mol⁻¹ but a freezing-point experiment gives 80 g mol⁻¹. Determine i and infer whether association or dissociation dominates.",
      "steps": [
        "i=normal molar mass/observed molar mass=120/80=1.50.",
        "Since i>1, effective particle count increased.",
        "Dissociation dominates."
      ],
      "answer": "i=1.50; the solute undergoes dissociation.",
      "sourcePages": "73–75",
      "transformation": "Added changed data to cover the source abnormal-molar-mass relation."
    },
    {
      "kind": "reference",
      "title": "Why real electrolyte i is concentration-dependent",
      "paragraphs": [
        "Ions interact through long-range electrostatic forces. At finite concentration, ion atmospheres and ion pairing reduce the number of independently acting particles, so i is below the complete-dissociation integer.",
        "As concentration approaches zero, strong electrolytes approach their ideal stoichiometric particle count, although activity corrections remain the rigorous description."
      ],
      "sourceLabel": "Supplemental electrolyte-solution depth."
    },
    {
      "kind": "reference",
      "title": "Osmotic coefficient and rigorous electrolyte treatment",
      "paragraphs": [
        "For concentrated electrolyte solutions, a single integer particle multiplier is inadequate. The osmotic coefficient relates measured solvent activity or osmotic pressure to the ideal stoichiometric prediction.",
        "Advanced models such as Debye–Hückel and Pitzer equations describe activity coefficients rather than treating ions as independent ideal particles."
      ],
      "sourceLabel": "Supplemental reference-depth treatment."
    },
    {
      "kind": "reference",
      "title": "Ion pairing and apparent dissociation",
      "paragraphs": [
        "Oppositely charged ions can remain associated as contact or solvent-separated ion pairs. These pairs contribute fewer independent particles than fully separated ions.",
        "Lower dielectric constant, higher ionic charge and higher concentration generally favour ion pairing. Temperature effects depend on solvent and enthalpy of association.",
        "The degree α inferred from a colligative property is therefore an effective dissociation measure, not necessarily a direct count of covalent bond cleavage."
      ],
      "sourceLabel": "Supplemental expansion synthesised from Atkins, Monk, Mortimer, Petrucci, Zumdahl and advanced coaching-level physical chemistry."
    },
    {
      "kind": "reference",
      "title": "Successive association equilibria",
      "paragraphs": [
        "Some solutes form dimers, trimers and larger aggregates simultaneously. A single n-mer formula then cannot describe the particle distribution.",
        "The observed i equals total aggregate-particle moles divided by initial monomer-unit moles and can be expressed through equilibrium constants and mass balance.",
        "If multiple aggregates are possible, one colligative measurement alone cannot uniquely determine every association constant."
      ],
      "sourceLabel": "Supplemental expansion synthesised from Atkins, Monk, Mortimer, Petrucci, Zumdahl and advanced coaching-level physical chemistry."
    },
    {
      "kind": "reference",
      "title": "Concentration dependence of i",
      "paragraphs": [
        "The simple formulas i=1+(ν−1)α and i=1−α(1−1/n) remain algebraically correct for a defined α, but α itself generally depends on concentration and temperature.",
        "Dilution often increases electrolyte dissociation and weakens molecular association, driving i toward the appropriate limiting value.",
        "Comparing i at several concentrations can reveal whether association, dissociation or interionic nonideality dominates."
      ],
      "sourceLabel": "Supplemental expansion synthesised from Atkins, Monk, Mortimer, Petrucci, Zumdahl and advanced coaching-level physical chemistry."
    },
    {
      "kind": "trap",
      "title": "Degree of association is defined for monomer units",
      "paragraphs": [
        "For dimerisation, α is the fraction of initial monomer units that participate, not the fraction of final particles that are dimers. The associated amount in moles of dimers is αn₀/2."
      ],
      "sourcePages": "75–77"
    }
  ]
};
