import type { PremiumChapterNotes } from "../schema";

// ─────────────────────────────────────────────────────────────────────────────
// MOLE CONCEPT — Chemical Calculations (JEE Advanced Masterbook Chapter 1).
//
// Authored from the founder's source pack (content plan + master curriculum +
// 52-page lecture notes + JEE Advanced worksheets): why the mole exists →
// atomic-mass architecture → the conversion wheel → laws of combination →
// formulae → stoichiometry → limiting reagent & POAC → eudiometry →
// concentration dynamics → special strength labels (H₂O₂, oleum) → mean molar
// mass & dissociation. Exam tags scope the deepest material to JEE Main /
// JEE Advanced; untagged content serves all programs. Unicode chemistry.
//
// Numerical conventions (stated in-content): molar volume 22.4 L at STP
// (0 °C, 1 atm) — 22.7 L at 1 bar noted; H₂O₂ volume strength = 11.2 × M.
// ─────────────────────────────────────────────────────────────────────────────

export const MOLE_CONCEPT_NOTES: PremiumChapterNotes = {
  chapterId: "mole-concept",
  title: "Mole Concept — Chemical Calculations",
  tagline: "One idea — count particles by weighing — powers every calculation in chemistry: stoichiometry, gas analysis, solutions, and the hardest JEE Advanced arithmetic.",
  topics: [
    // ═════════════════════════════ TOPIC 1 ═════════════════════════════
    {
      id: "mole",
      title: "The Mole — Counting Matter",
      intro: "Atoms are too small to count and too light to weigh one at a time. The mole is chemistry's bridge between the invisible particle world and the laboratory balance.",
      subtopics: [
        {
          id: "amount-of-substance",
          title: "Amount of Substance & Avogadro's Constant",
          blocks: [
            {
              kind: "detailed",
              heading: "Why the mole exists",
              paras: [
                "Matter is measured three ways in the lab: by mass (solids — kg, g), by volume (fluids — m³, L; gases additionally need a stated pressure and temperature), and by count. Chemical reactions, however, happen particle-to-particle: one N₂ meets three H₂, not one gram meets three grams. So chemistry needs a unit that counts particles while we weigh grams — that unit is the mole, the SI unit of amount of substance.",
                "One mole is the amount of substance containing as many elementary entities as there are atoms in exactly 12 g of the ¹²C isotope. That number is Avogadro's constant, N_A = 6.022 × 10²³ mol⁻¹. It applies to whatever entity you name: 1 mol of atoms = N_A atoms, 1 mol of molecules = N_A molecules, 1 mol of ions = N_A ions, 1 mol of electrons = N_A electrons.",
              ],
              points: [
                "n = N / N_A — moles from a particle count.",
                "The entity must be specified: 1 mol of O atoms ≠ 1 mol of O₂ molecules ≠ 1 mol of O₃ molecules.",
                "For ionic compounds (NaCl, CaCO₃) say formula unit, not molecule — the crystal has no discrete molecules.",
              ],
            },
            {
              kind: "visual",
              title: "The Mole Conversion Map",
              visual: "mole-conversion-map",
              caption: "Every quantitative problem in this chapter is a walk on this map: convert the given quantity INTO moles, reason with the balanced equation, convert OUT into the asked quantity.",
            },
            {
              kind: "focus",
              title: "What examiners actually test here",
              points: [
                "Specifying the entity: total atoms vs molecules vs ions in a sample (the O₃ / P₄ / Ca(NO₃)₂ family).",
                "Electron / proton / neutron counts in a given mass (needs n × N_A × per-particle count).",
                "Comparisons — \"which sample has the largest number of atoms?\" — always convert every option to moles of ATOMS first.",
              ],
            },
            {
              kind: "illustration",
              level: "basic",
              question: "How many individual atoms are in 15.5 g of white phosphorus, P₄? (M = 124 g/mol)",
              thinking: "Mass → moles of P₄ molecules → molecules → atoms. Two multipliers after the mole step: N_A, then 4 atoms per molecule.",
              solution: "n(P₄) = 15.5/124 = 0.125 mol. Molecules = 0.125 × 6.022 × 10²³ ≈ 7.53 × 10²². Each molecule holds 4 atoms → atoms = 4 × 7.53 × 10²² ≈ 3.01 × 10²³ atoms.",
              fastMethod: "Moles of ATOMS directly: 0.125 mol P₄ × 4 = 0.5 mol atoms → 0.5 N_A ≈ 3.01 × 10²³.",
              commonMistakes: ["Multiplying by N_A but forgetting the 4 atoms per P₄ molecule.", "Using M = 31 (atomic) with the molecular sample — read WHAT the 15.5 g is made of."],
            },
            {
              kind: "illustration",
              level: "intermediate",
              question: "How many total electrons are present in 1.8 g of water? (H = 1, O = 8 by atomic number)",
              thinking: "Mass → moles → molecules → electrons per molecule. H₂O carries 2(1) + 8 = 10 electrons.",
              solution: "n = 1.8/18 = 0.1 mol → molecules = 0.1 N_A = 6.022 × 10²². Electrons = 10 × 6.022 × 10²² = 6.022 × 10²³ — exactly one mole of electrons.",
              fastMethod: "18 g H₂O has 10 mol electrons ⇒ 1.8 g has 1 mol. Scale, don't recompute.",
            },
            {
              kind: "misc",
              level: "easy",
              question: "A sample contains 9.033 × 10²² helium atoms. How many moles is that?",
              answer: "0.15 mol",
              explanation: "n = N/N_A = 9.033 × 10²² / 6.022 × 10²³ = 0.15 mol. Helium is monoatomic, so atoms = molecules here.",
            },
            {
              kind: "misc",
              level: "medium",
              question: "A sample of ozone (O₃) contains 1.806 × 10²⁴ oxygen ATOMS. What volume does the gas occupy at STP (1 atm, 0 °C)?",
              answer: "22.4 L",
              explanation: "Moles of atoms = 1.806 × 10²⁴/6.022 × 10²³ = 3 mol. O₃ has 3 atoms per molecule → 1 mol molecules → 22.4 L. The atom→molecule division is the whole question.",
            },
            {
              kind: "trap",
              items: [
                { trap: "\"1 mole of oxygen\" — so N_A atoms.", reality: "Ambiguous by design. 1 mol O₂ = N_A molecules = 2N_A atoms. JEE wording always specifies the entity — read it twice." },
                { trap: "Bigger mass ⇒ more particles.", reality: "Only within the same substance. 4 g of H₂ (2 mol) has more molecules than 44 g of CO₂ (1 mol)." },
              ],
            },
          ],
        },
      ],
    },
    // ═════════════════════════════ TOPIC 2 ═════════════════════════════
    {
      id: "atomic-mass",
      title: "Atomic & Molecular Mass Architecture",
      intro: "Absolute atomic masses are unmeasurably small, so chemistry runs on a relative scale — whose zero-point moved twice in history before settling on carbon-12.",
      subtopics: [
        {
          id: "amu-scale",
          title: "The ¹²C Scale & the amu",
          blocks: [
            {
              kind: "detailed",
              heading: "From hydrogen to oxygen to carbon-12",
              paras: [
                "Because a single atom's mass (~10⁻²³ g) cannot be weighed, atomic masses are expressed relative to a standard. History tried hydrogen (H = 1) and then oxygen (O = 16) before IUPAC adopted the carbon-12 scale: one atomic mass unit (amu, u) is exactly 1/12 the mass of one ¹²C atom.",
                "The amu and Avogadro's constant are two faces of the same definition: 1 amu = 1/N_A gram ≈ 1.66 × 10⁻²⁴ g. That is precisely why the atomic mass in amu and the molar mass in g/mol carry the same number — N_A amu-sized particles weigh that many grams.",
              ],
              points: [
                "Atomic mass (amu) = mass of one atom relative to ¹²C/12.",
                "Gram atomic mass: A grams of an element = 1 mol of its atoms (n = w/A).",
                "The actual atomic mass is slightly LESS than the sum of its protons, neutrons and electrons — the difference (mass defect Δm) left as binding energy, E = Δm·c². This is why atomic masses are not integers.",
              ],
              exams: ["JEE Main", "JEE Advanced"],
            },
            {
              kind: "detailed",
              heading: "Dalton's famous mistake — why formulas matter",
              paras: [
                "Dalton assigned water the formula HO, which forced oxygen's relative mass to ~8 from the measured 88.89% O / 11.11% H composition. Gay-Lussac's combining-volume data (2 vol H₂ + 1 vol O₂ → 2 vol steam) plus Avogadro's hypothesis fixed the formula as H₂O — and oxygen's mass corrected to 16. Lesson: a relative atomic mass is only as good as the molecular formula behind the measurement.",
              ],
              exams: ["JEE Advanced"],
            },
            {
              kind: "misc",
              level: "easy",
              question: "What is the mass of one nitrogen atom in grams?",
              answer: "≈ 2.32 × 10⁻²³ g",
              explanation: "14 amu × 1.66 × 10⁻²⁴ g/amu ≈ 2.32 × 10⁻²³ g. Equivalently 14/N_A.",
            },
            {
              kind: "trick",
              items: [
                { trick: "\"amu-to-gram = divide by N_A\"", recall: "1 amu = 1/N_A g. Mass of one atom/molecule in grams = (M in amu)/N_A." },
              ],
            },
          ],
        },
        {
          id: "average-atomic-mass",
          title: "Average Atomic Mass — Isotopes",
          blocks: [
            {
              kind: "detailed",
              heading: "The periodic table prints a weighted average",
              paras: [
                "Most elements are isotope mixtures. The tabulated atomic mass is the abundance-weighted mean: M_avg = Σ fᵢMᵢ over fractional abundances fᵢ. Chlorine's 35.5 is not an atom's mass — no chlorine atom weighs 35.5 u; it is ¾ × 35 + ¼ × 37.",
              ],
              points: [
                "Forward problem: masses + abundances → M_avg.",
                "Reverse problem (JEE favourite): M_avg + isotope masses → abundances. One unknown x (fraction of the lighter isotope), one linear equation.",
                "Isotopes are detected and massed by mass spectrometry.",
              ],
            },
            {
              kind: "illustration",
              level: "intermediate",
              question: "Copper's average atomic mass is 63.546 u and it consists of ⁶³Cu and ⁶⁵Cu. Find the percentage of ⁶³Cu.",
              thinking: "Let x = fraction of ⁶³Cu, so (1 − x) is ⁶⁵Cu. Weighted mean equation, solve for x.",
              solution: "63.546 = 63x + 65(1 − x) → 63.546 = 65 − 2x → 2x = 1.454 → x = 0.727. So ⁶³Cu ≈ 72.7%.",
              fastMethod: "Lever rule: x(⁶³Cu) = (65 − 63.546)/(65 − 63) = 1.454/2 = 72.7%. Distance from the OTHER isotope over the full gap.",
              commonMistakes: ["Setting up 63x + 65x = 63.546 (fractions must sum to 1).", "Reporting the ⁶⁵Cu fraction because the lever was taken from the wrong end."],
            },
            {
              kind: "misc",
              level: "easy",
              question: "Boron: ¹⁰B (19.9%) and ¹¹B (80.1%). Average atomic mass?",
              answer: "10.80 u",
              explanation: "0.199 × 10 + 0.801 × 11 = 1.99 + 8.811 = 10.80 u.",
            },
            {
              kind: "misc",
              level: "medium",
              question: "Element X has isotopes ³⁵X (75%) and ³⁷X (25%). Average mass?",
              answer: "35.5 u",
              explanation: "0.75 × 35 + 0.25 × 37 = 35.5 — this is exactly chlorine's story.",
            },
          ],
        },
        {
          id: "molecular-formula-mass",
          title: "Molecular Mass & Formula Mass",
          blocks: [
            {
              kind: "detailed",
              heading: "Adding up the architecture",
              paras: [
                "Molecular mass = sum of the atomic masses in one molecule (CO₂: 12 + 32 = 44 u). For ionic / network solids with no discrete molecule, the same sum over one formula unit is the formula mass (NaCl: 58.5 u). Hydrates count every water: Na₂CO₃·10H₂O = 106 + 180 = 286 u.",
              ],
              points: [
                "K₂Cr₂O₇: 2(39) + 2(52) + 7(16) = 294 u.",
                "Al₂(SO₄)₃·18H₂O: 54 + 288 + 324 = 666 u — bracket multiplication is where marks die.",
                "Gram molecular mass: M grams = 1 mol of molecules/formula units.",
              ],
            },
            {
              kind: "mistake",
              items: [
                { wrong: "Ca(NO₃)₂ has 3 oxygens.", right: "The subscript outside the bracket multiplies EVERYTHING inside: 2 × 3 = 6 O atoms, 2 N atoms." },
                { wrong: "Ignoring water of crystallisation in molar mass.", right: "CuSO₄·5H₂O is 249.5, not 159.5 — hydrate problems always test this." },
              ],
            },
            {
              kind: "misc",
              level: "medium",
              question: "How many moles of ions are released by 0.5 mol of Al₂(SO₄)₃ in water?",
              answer: "2.5 mol ions",
              explanation: "Each formula unit gives 2 Al³⁺ + 3 SO₄²⁻ = 5 ions → 0.5 × 5 = 2.5 mol.",
            },
            {
              kind: "misc",
              level: "hard",
              question: "How many moles of electrons are in 1 mol of CH₄?",
              answer: "10 mol electrons",
              explanation: "C contributes 6, each H contributes 1 → 6 + 4 = 10 electrons per molecule → 10 mol per mole of CH₄.",
              exams: ["JEE Main", "JEE Advanced"],
            },
          ],
        },
      ],
    },
    // ═════════════════════════════ TOPIC 3 ═════════════════════════════
    {
      id: "molar-conversions",
      title: "Molar Mass, Gas Volume & the Conversion Wheel",
      intro: "Three doors into the mole: weigh it (n = w/M), count it (n = N/N_A), or — for a gas — measure it (n = V/V_m or PV = nRT).",
      subtopics: [
        {
          id: "mass-mole",
          title: "Mass ↔ Mole (n = w/M)",
          blocks: [
            {
              kind: "detailed",
              heading: "The workhorse relation",
              paras: [
                "Molar mass M (g/mol) converts between the balance and the mole: n = w/M. Combined with n = N/N_A this solves every \"how many grams / how many particles\" question in one or two hops on the conversion map.",
              ],
              points: [
                "n = w/M = N/N_A — memorise as one chained equality.",
                "Moles of a component inside a compound = (moles of compound) × (subscript). 0.25 mol Ca(NO₃)₂ ⇒ 1.5 mol O atoms.",
                "Mass of one molecule = M/N_A grams.",
              ],
            },
            {
              kind: "illustration",
              level: "basic",
              question: "How many oxygen atoms are in 0.25 mol of calcium nitrate, Ca(NO₃)₂?",
              thinking: "Subscript arithmetic first (6 O per formula unit), then N_A.",
              solution: "O atoms per unit = 2 × 3 = 6 → moles of O = 0.25 × 6 = 1.5 mol → N = 1.5 × 6.022 × 10²³ ≈ 9.03 × 10²³ atoms.",
              commonMistakes: ["Counting 3 O instead of 6 (bracket).", "Stopping at 1.5 mol when the question asks for a COUNT."],
            },
            {
              kind: "misc",
              level: "easy",
              question: "Convert 12.5 g of CuSO₄ (M = 159.6) to moles.",
              answer: "≈ 0.0783 mol",
              explanation: "n = 12.5/159.6 = 0.0783 mol.",
            },
            {
              kind: "misc",
              level: "medium",
              question: "How many carbon atoms are in 18 g of glucose, C₆H₁₂O₆?",
              answer: "≈ 3.6 × 10²³ atoms",
              explanation: "n = 18/180 = 0.1 mol glucose → 0.6 mol C atoms → 0.6 N_A ≈ 3.6 × 10²³.",
            },
          ],
        },
        {
          id: "gas-volume",
          title: "Gas Volume ↔ Mole — Molar Volume & the Ideal Gas Equation",
          blocks: [
            {
              kind: "detailed",
              heading: "22.4 L, and when you must abandon it",
              paras: [
                "Avogadro's law (equal volumes of all gases at the same P, T hold equal numbers of molecules) gives gases a universal molar volume. At STP taken as 0 °C and 1 atm, V_m = 22.4 L/mol; with the 1 bar convention it is 22.7 L/mol. This chapter states which convention each problem uses — JEE problems overwhelmingly use 22.4 L at 1 atm.",
                "Away from STP there is no shortcut: use PV = nRT with R = 0.0821 L·atm·K⁻¹·mol⁻¹ (= 8.314 J·K⁻¹·mol⁻¹), T in kelvin (T = t°C + 273), and matching pressure units (1 atm = 760 mm Hg = 1.013 bar).",
              ],
              points: [
                "n = V/22.4 ONLY at STP (1 atm, 0 °C).",
                "Density form: PM = dRT — molar mass straight from a gas density.",
                "At STP, gas density d = M/22.4 g/L.",
              ],
            },
            {
              kind: "illustration",
              level: "intermediate",
              question: "An unknown gas has density 1.43 g/L at STP. Identify its molar mass.",
              thinking: "At STP one mole occupies 22.4 L, so a litre weighs M/22.4 grams.",
              solution: "M = d × 22.4 = 1.43 × 22.4 ≈ 32.0 g/mol — consistent with O₂.",
              fastMethod: "d(STP) × 22.4 = M. One multiplication.",
            },
            {
              kind: "illustration",
              level: "advanced",
              question: "A 0.4 g sample of an organic compound liberated 44.8 mL of N₂ at STP (Dumas method). Find the percentage of nitrogen.",
              thinking: "Gas volume → moles of N₂ → mass of N → percentage of sample. Classic analytical bridge.",
              solution: "n(N₂) = 44.8/22400 = 0.002 mol → mass N = 0.002 × 28 = 0.056 g → %N = (0.056/0.4) × 100 = 14%.",
              commonMistakes: ["Dividing by 22.4 with the volume still in mL.", "Using 14 g/mol for N₂ — the GAS is diatomic; the 28 already contains both atoms."],
              exams: ["JEE Main", "JEE Advanced"],
            },
            {
              kind: "misc",
              level: "easy",
              question: "Mass of 11.2 L of CH₄ at STP?",
              answer: "8.0 g",
              explanation: "n = 11.2/22.4 = 0.5 mol × 16 g/mol = 8.0 g.",
            },
            {
              kind: "misc",
              level: "medium",
              question: "A gas sample: 5.6 L weighs 11 g at STP. Molar mass?",
              answer: "44 g/mol",
              explanation: "n = 5.6/22.4 = 0.25 mol → M = 11/0.25 = 44 (CO₂ or C₃H₈ or N₂O — density alone cannot distinguish isomers of mass).",
            },
            {
              kind: "trap",
              items: [
                { trap: "Applying n = V/22.4 at 25 °C because \"room temperature is basically standard\".", reality: "22.4 L is 0 °C only. At 25 °C, 1 atm the molar volume is ≈ 24.5 L — use PV = nRT." },
                { trap: "Plugging °C into PV = nRT.", reality: "Kelvin only: T = t + 273. A 27 °C problem is T = 300 K — JEE picks temperatures that turn into round kelvins as a hint." },
              ],
            },
          ],
        },
        {
          id: "vapour-density",
          title: "Density & Vapour Density",
          blocks: [
            {
              kind: "detailed",
              heading: "Vapour density — molar mass in disguise",
              paras: [
                "Vapour density VD = (density of gas)/(density of H₂ at the same P, T) = M/2. It is dimensionless and temperature-independent, which is why old gas-analysis data is reported in VD. Any problem giving VD is handing you the molar mass: M = 2 × VD.",
              ],
              points: [
                "VD(CO₂) = 22, VD(SO₂) = 32, VD(O₂) = 16.",
                "Absolute gas density d = PM/RT — depends on P and T; VD does not.",
              ],
              exams: ["JEE Main", "JEE Advanced"],
            },
            {
              kind: "misc",
              level: "medium",
              question: "Density of SO₂ at STP?",
              answer: "≈ 2.86 g/L",
              explanation: "d = M/22.4 = 64/22.4 ≈ 2.86 g/L.",
            },
            {
              kind: "trick",
              items: [
                { trick: "\"VD doubles up\"", recall: "M = 2 × VD, always. See VD, write molar mass immediately." },
              ],
            },
          ],
        },
      ],
    },
    // ═════════════════════════════ TOPIC 4 ═════════════════════════════
    {
      id: "laws",
      title: "Laws of Chemical Combination",
      intro: "Five experimental laws forced chemistry to accept atoms. They still appear directly as JEE assertion–reason and data-check questions.",
      subtopics: [
        {
          id: "mass-laws",
          title: "The Mass Laws",
          blocks: [
            {
              kind: "detailed",
              heading: "Conservation, definite and multiple proportions",
              paras: [
                "Law of conservation of mass (Lavoisier): in a closed system total mass is constant — Σ mass(reactants) = Σ mass(products) + mass(unreacted). Every mass-balance and POAC argument in this chapter is this law in disguise.",
                "Law of definite proportions (Proust): a given compound always contains the same elements in the same mass ratio, whatever its source. Water is 1:8 H:O by mass from a tap or a comet.",
                "Law of multiple proportions (Dalton): when two elements form several compounds, the masses of one element combining with a FIXED mass of the other are in small whole-number ratios. CO vs CO₂: with 12 g C, oxygen is 16 g vs 32 g → 1:2.",
              ],
              points: [
                "Conservation check-question format: 15 g A + 20 g B → 28.5 g C + x g unreacted B ⇒ x = 6.5 g.",
                "Definite-proportion format: 7 g metal : 3 g O in sample 1 ⇒ 14 g metal needs 6 g O in sample 2.",
              ],
            },
            {
              kind: "misc",
              level: "easy",
              question: "Which of Dalton's postulates explains the law of conservation of mass?",
              answer: "Atoms are neither created nor destroyed in a chemical reaction",
              explanation: "Reactions only rearrange atoms; the atom count per element — hence total mass — is fixed.",
            },
          ],
        },
        {
          id: "volume-laws",
          title: "Gay-Lussac & Avogadro — the Volume Story",
          blocks: [
            {
              kind: "detailed",
              heading: "Volumes react in simple ratios — and why that needed molecules",
              paras: [
                "Gay-Lussac: gases combine (and are produced) in simple whole-number ratios BY VOLUME at the same P and T. H₂ + Cl₂ → 2HCl is 1:1:2 by volume exactly.",
                "Berzelius tried to explain this as \"equal volumes hold equal numbers of ATOMS\" — which breaks for H₂ + Cl₂ → 2HCl (one atom cannot split into two molecules of product). Avogadro fixed it: equal volumes hold equal numbers of MOLECULES, and elemental gases like H₂, O₂, N₂, Cl₂ are diatomic. This single idea turned volume ratios into molecule ratios and is the engine behind all of eudiometry (Topic 8).",
                "Worked historical deduction: 20 mL N₂ + 40 mL H₂ → 20 mL of product implies each product molecule holds 2 N and 4 H → N₂H₄ formula follows purely from volumes.",
              ],
              points: [
                "Volume ratios = mole ratios = molecule ratios (gases, same P·T).",
                "This law is the ONLY combination law stated in volumes; the other four are mass laws.",
              ],
              exams: ["JEE Main", "JEE Advanced"],
            },
            {
              kind: "trap",
              items: [
                { trap: "Applying volume ratios to liquids or solids in an equation.", reality: "Gay-Lussac/Avogadro reasoning applies to GASES only. H₂O(l) in a combustion at room temperature contributes ~zero volume." },
                { trap: "\"Equal volumes → equal masses\".", reality: "Equal volumes → equal MOLECULES. Masses differ by the ratio of molar masses — that is how vapour density works." },
              ],
            },
            {
              kind: "misc",
              level: "medium",
              question: "10 mL of H₂ reacts with 10 mL of Cl₂. What is the final volume at the same P, T?",
              answer: "20 mL of HCl",
              explanation: "H₂ + Cl₂ → 2HCl: 10 + 10 → 20. No contraction — moles of gas are conserved in this particular reaction.",
            },
          ],
        },
      ],
    },
    // ═════════════════════════════ TOPIC 5 ═════════════════════════════
    {
      id: "formulae",
      title: "Percentage Composition & Formula Determination",
      intro: "From a compound to its numbers (% composition) and back from numbers to the compound (empirical → molecular formula) — the two-way street of analysis.",
      subtopics: [
        {
          id: "percent-composition",
          title: "Percentage Composition",
          blocks: [
            {
              kind: "detailed",
              heading: "Mass percent of an element in a compound",
              paras: [
                "% element = (mass of that element in one mole of compound / molar mass) × 100. It is a per-mole statement, so it never depends on sample size.",
              ],
              points: [
                "Urea NH₂CONH₂ (M = 60): %C = 12/60 = 20%; %N = 28/60 ≈ 46.7% — highest N of the common fertilisers, a JEE trivia favourite.",
                "NH₄NO₃ (M = 80): %N = 28/80 = 35%.",
                "KClO₃ (M = 122.5): %O = 48/122.5 ≈ 39.2%.",
              ],
            },
            {
              kind: "illustration",
              level: "intermediate",
              question: "A metal M forms the oxide M₂O₃ which is 70% metal by mass. Find the atomic mass of M.",
              thinking: "Write the mass fraction of M in M₂O₃ symbolically and solve.",
              solution: "2M/(2M + 48) = 0.70 → 2M = 1.4M + 33.6 → 0.6M = 33.6 → M = 56 (iron).",
              fastMethod: "Metal:O mass ratio = 70:30 = 7:3. So 2M/48 = 7/3 → M = 56.",
              commonMistakes: ["Using 3 × 16 = 48 for oxygen but forgetting the 2 on the metal.", "Solving for 2M and reporting 112."],
              exams: ["JEE Main", "JEE Advanced"],
            },
            {
              kind: "misc",
              level: "hard",
              question: "1.0 g of a divalent metal's chloride contains 0.355 g of chlorine. Find the metal's atomic mass.",
              answer: "129",
              explanation: "MCl₂: n(Cl) = 0.355/35.5 = 0.01 → n(M) = 0.005. Mass of M = 1.0 − 0.355 = 0.645 g → A = 0.645/0.005 = 129.",
              exams: ["JEE Advanced"],
            },
          ],
        },
        {
          id: "ef-mf",
          title: "Empirical & Molecular Formula",
          blocks: [
            {
              kind: "detailed",
              heading: "The four-step EF algorithm",
              paras: [
                "Empirical formula = simplest whole-number atom ratio; molecular formula = (EF)ₙ where n = M(molecular)/M(empirical). The algorithm: (1) take 100 g so percentages become grams, (2) divide each by its atomic mass → moles, (3) divide all by the smallest, (4) clear fractions by the smallest integer multiplier (a ratio of 1 : 1.33 means ×3 → 3 : 4 — never round 1.33 to 1).",
              ],
              points: [
                "CH₂ with M = 56 → n = 56/14 = 4 → C₄H₈.",
                "Combustion analysis feeds this: mass CO₂ → moles C; mass H₂O → moles H (×2!); oxygen by difference.",
                "Different compounds can share an EF (CH₂O: formaldehyde, acetic acid, glucose) — only M separates them.",
              ],
            },
            {
              kind: "illustration",
              level: "advanced",
              question: "A compound is 40% C, 6.7% H, 53.3% O. 1.5 × 10²² of its molecules weigh 4.5 g. Find the molecular formula.",
              thinking: "Two independent measurements: composition → EF; count + mass → M. Combine.",
              solution: "Moles per 100 g: C 40/12 = 3.33, H 6.7, O 53.3/16 = 3.33 → ratio 1:2:1 → EF = CH₂O (mass 30). M = 4.5 g / (1.5 × 10²²/6.022 × 10²³ mol) = 4.5/0.025 ≈ 180. n = 180/30 = 6 → C₆H₁₂O₆ (glucose).",
              commonMistakes: ["Rounding 3.33/3.33/6.7 carelessly and getting C₂H₄O.", "Using the 4.5 g with the EF mass instead of computing M first."],
              exams: ["JEE Main", "JEE Advanced"],
            },
            {
              kind: "misc",
              level: "medium",
              question: "A compound: 24.27% C, 4.07% H, 71.65% Cl. Empirical formula?",
              answer: "CH₂Cl",
              explanation: "C: 24.27/12 = 2.02; H: 4.07; Cl: 71.65/35.5 = 2.02 → 1:2:1 → CH₂Cl (the compound with M = 99 would be C₂H₄Cl₂).",
            },
            {
              kind: "mistake",
              items: [
                { wrong: "Rounding a 1 : 1.5 mole ratio to 1 : 2.", right: "Multiply to clear the fraction: 1 : 1.5 = 2 : 3. Rounding fabricates a different compound." },
                { wrong: "From H₂O mass, taking moles of H = moles of H₂O.", right: "Each H₂O carries TWO hydrogens: n(H) = 2 × n(H₂O)." },
              ],
            },
          ],
        },
      ],
    },
    // ═════════════════════════════ TOPIC 6 ═════════════════════════════
    {
      id: "stoichiometry",
      title: "Stoichiometry — the Calculus of Reactions",
      intro: "A balanced equation is a mole-ratio machine. Everything else — masses, gas volumes, purities, sequential steps — is conversion in and out of that machine.",
      subtopics: [
        {
          id: "mole-ratio",
          title: "The Stoichiometric Ratio",
          blocks: [
            {
              kind: "detailed",
              heading: "One equality runs everything",
              paras: [
                "For aA + bB → cC + dD, the amounts consumed and produced obey n_A/a = n_B/b = n_C/c = n_D/d. The full method: convert the GIVEN to moles → cross the reaction with the coefficient ratio → convert to the ASKED. Mass-to-mass, mass-to-volume and particle problems are all the same three hops.",
              ],
              points: [
                "Always balance first; an unbalanced ratio poisons everything downstream.",
                "Ratios connect ANY two species — including product-to-product.",
              ],
            },
            {
              kind: "illustration",
              level: "intermediate",
              question: "Airbags inflate by 2NaN₃(s) → 2Na(s) + 3N₂(g). What mass of sodium azide (M = 65) generates 75.0 L of N₂ at STP?",
              thinking: "Volume → moles of N₂ → coefficient ratio 2:3 → moles of NaN₃ → mass.",
              solution: "n(N₂) = 75.0/22.4 ≈ 3.35 mol → n(NaN₃) = (2/3) × 3.35 ≈ 2.23 mol → m = 2.23 × 65 ≈ 145 g.",
              commonMistakes: ["Inverting the 2/3 ratio — write the ratio as (wanted coefficient)/(given coefficient).", "Using 28 g/mol anywhere: the volume already speaks in moles."],
            },
            {
              kind: "misc",
              level: "easy",
              question: "In N₂ + 3H₂ → 2NH₃, how many moles of NH₃ form from 0.45 mol H₂ (excess N₂)?",
              answer: "0.30 mol",
              explanation: "n(NH₃) = 0.45 × (2/3) = 0.30 mol.",
            },
            {
              kind: "misc",
              level: "medium",
              question: "Mass of Fe from 120 g Fe₂O₃ (M = 159.7) with excess CO: Fe₂O₃ + 3CO → 2Fe + 3CO₂?",
              answer: "≈ 83.9 g",
              explanation: "n(Fe₂O₃) = 0.751 → n(Fe) = 1.502 → m = 1.502 × 55.85 ≈ 83.9 g.",
            },
            {
              kind: "misc",
              level: "medium",
              question: "Volume of O₂ at STP needed to burn 20 g of H₂?",
              answer: "112 L",
              explanation: "2H₂ + O₂ → 2H₂O: n(H₂) = 10 → n(O₂) = 5 → V = 5 × 22.4 = 112 L.",
            },
          ],
        },
        {
          id: "purity-mixtures",
          title: "Purity, Mixtures & Sequential Reactions",
          blocks: [
            {
              kind: "detailed",
              heading: "Real samples are dirty",
              paras: [
                "Purity: only the pure fraction reacts. A 10 g sample of 75% pure CaCO₃ contributes 7.5 g = 0.075 mol to the stoichiometry; the 25% junk is spectator mass.",
                "Two-component mixtures: assign x and (total − x), write one equation from the reacting data, solve. Example: 5.0 g of NaOH + KOH neutralised by 110 mmol HCl ⇒ x/40 + (5 − x)/56.1 = 0.11 → x ≈ 2.9 g NaOH.",
                "Sequential (series) reactions: chain the mole ratios step by step — or jump over all steps at once with atom conservation (POAC, Topic 7) when only ends matter.",
              ],
              exams: ["JEE Main", "JEE Advanced"],
            },
            {
              kind: "illustration",
              level: "advanced",
              question: "Sulfur burns by S → SO₂ → SO₃ (2SO₂ + O₂ → 2SO₃). How much sulfur is needed for 80 g of SO₃, assuming complete conversion?",
              thinking: "S atoms are conserved along the whole chain: one S per SO₃.",
              solution: "n(SO₃) = 80/80 = 1 mol → n(S) = 1 mol → 32 g of sulfur.",
              fastMethod: "Atom balance beats step-chaining whenever the chain conserves the atom you track.",
              exams: ["JEE Main", "JEE Advanced"],
            },
            {
              kind: "illustration",
              level: "advanced",
              question: "12 g of carbon burns in limited oxygen giving a 1:1 molar mixture of CO and CO₂. How much O₂ was used?",
              thinking: "Parallel reactions C + O₂ → CO₂ and 2C + O₂ → 2CO share the carbon. Split n(C) = 1 mol as x to CO₂ and y to CO with x = y.",
              solution: "x + y = 1 and x = y → x = y = 0.5. O₂ used = x (for CO₂) + y/2 (for CO) = 0.5 + 0.25 = 0.75 mol = 24 g.",
              commonMistakes: ["Assuming ALL carbon goes to CO₂ then \"adjusting\".", "Using 1:1 by MASS instead of by moles."],
              exams: ["JEE Advanced"],
            },
            {
              kind: "misc",
              level: "medium",
              question: "10 g of 80% pure CaCO₃ decomposes. Volume of CO₂ at STP?",
              answer: "1.792 L",
              explanation: "Pure = 8 g = 0.08 mol → V = 0.08 × 22.4 = 1.792 L.",
            },
            {
              kind: "misc",
              level: "hard",
              question: "1 mol Fe and 1 mol S are heated; 0.7 mol FeS forms. Mass of unreacted Fe?",
              answer: "≈ 16.7 g",
              explanation: "Fe + S → FeS is 1:1 → 0.3 mol Fe left = 0.3 × 55.8 ≈ 16.7 g (incomplete reaction ≠ limiting-reagent problem).",
              exams: ["JEE Main", "JEE Advanced"],
            },
          ],
        },
      ],
    },
    // ═════════════════════════════ TOPIC 7 ═════════════════════════════
    {
      id: "limiting-poac",
      title: "Limiting Reagent, Yield & POAC",
      intro: "Real mixtures are rarely stoichiometric, real reactions rarely give 100%, and real problem-setters rarely give balanced equations. Three tools fix all three.",
      subtopics: [
        {
          id: "limiting-reagent",
          title: "Finding the Limiting Reagent",
          blocks: [
            {
              kind: "detailed",
              heading: "The divide-by-coefficient test",
              paras: [
                "The limiting reagent (LR) is the reactant that runs out first — every theoretical yield is computed FROM the LR. Test: for each reactant compute n(available)/ν (its coefficient). The SMALLEST value marks the LR. Never compare raw moles or raw masses; the coefficients weight the comparison.",
              ],
              points: [
                "After identifying the LR, base every product and every excess-left-over calculation on it.",
                "Excess remaining = n(available) − n(consumed by LR stoichiometry).",
                "If all n/ν are equal, the mixture is exactly stoichiometric — everything is consumed (5 g H₂ + 40 g O₂ is exactly 2:1 → 45 g H₂O, no LR at all).",
              ],
            },
            {
              kind: "visual",
              title: "The Limiting Reagent at a Glance",
              visual: "limiting-reagent-bars",
              caption: "Divide each available amount by its coefficient; the shortest bar is the limiting reagent, and every product amount flows from it.",
            },
            {
              kind: "illustration",
              level: "intermediate",
              question: "10.0 g of Al reacts with 10.0 g of Cl₂ by 2Al + 3Cl₂ → 2AlCl₃. Find the mass of AlCl₃ formed.",
              thinking: "Moles: Al = 10/27 = 0.37, Cl₂ = 10/71 = 0.141. Divide by coefficients: Al 0.185, Cl₂ 0.047 → Cl₂ is LR.",
              solution: "n(AlCl₃) = (2/3) × 0.141 = 0.094 mol → m = 0.094 × 133.5 ≈ 12.5 g.",
              commonMistakes: ["Declaring Al limiting because 10 g of it is \"less stuff per gram\" — always the n/ν test.", "Computing the product from the excess reagent."],
            },
            {
              kind: "illustration",
              level: "advanced",
              question: "25.0 g of 80% pure CaC₂ reacts with 15.0 g of water: CaC₂ + 2H₂O → Ca(OH)₂ + C₂H₂. Find the volume of acetylene at STP.",
              thinking: "Purity first (20 g pure = 0.312 mol), then the LR test with the 2:1 water demand.",
              solution: "n(H₂O) = 15/18 = 0.833 mol; CaC₂ needs 2 × 0.312 = 0.624 mol water < 0.833 → CaC₂ is LR. n(C₂H₂) = 0.312 mol → V = 0.312 × 22.4 ≈ 6.99 L.",
              commonMistakes: ["Skipping the purity cut.", "Testing LR with raw moles 0.312 vs 0.833 and forgetting the coefficient 2."],
              exams: ["JEE Main", "JEE Advanced"],
            },
            {
              kind: "misc",
              level: "hard",
              question: "A + 3B → 2C with 10 mol A and 24 mol B. Moles of C formed and A left?",
              answer: "16 mol C; 2 mol A remains",
              explanation: "n/ν: A = 10, B = 8 → B limits. C = (2/3) × 24 = 16; A used = 8, left = 2.",
            },
          ],
        },
        {
          id: "yield",
          title: "Theoretical, Actual & Percent Yield",
          blocks: [
            {
              kind: "detailed",
              heading: "Reactions keep less than they promise",
              paras: [
                "% yield = (actual/theoretical) × 100, with the theoretical amount ALWAYS computed from the limiting reagent. Side reactions, equilibria and handling losses eat the difference.",
                "Sequential yields multiply: a chain of 80% and 60% steps delivers 0.8 × 0.6 = 48% overall. JEE Advanced loves stacking these.",
              ],
              exams: ["JEE Main", "JEE Advanced"],
            },
            {
              kind: "illustration",
              level: "advanced",
              question: "S → SO₂ at 90% yield, then 2SO₂ + O₂ → 2SO₃ at 70% yield. What mass of SO₃ comes from 32.1 g of sulfur?",
              thinking: "Chain the actual (not theoretical) amounts through each step.",
              solution: "n(S) = 1.0 mol → SO₂ actual = 0.9 mol → SO₃ theoretical from that = 0.9, actual = 0.9 × 0.7 = 0.63 mol → m = 0.63 × 80 ≈ 50.5 g.",
              fastMethod: "Overall factor = 0.9 × 0.7 = 0.63 applied once to the 1:1 atom chain.",
              exams: ["JEE Advanced"],
            },
            {
              kind: "misc",
              level: "easy",
              question: "Theoretical yield 12.4 g; actual 10.8 g. Percent yield?",
              answer: "87.1%",
              explanation: "(10.8/12.4) × 100 = 87.1%.",
            },
            {
              kind: "misc",
              level: "medium",
              question: "10 g of H₂ burns to give 80 g of water. Percent yield?",
              answer: "≈ 88.9%",
              explanation: "Theoretical = 5 × 18 = 90 g → 80/90 ≈ 88.9%.",
            },
          ],
        },
        {
          id: "poac",
          title: "POAC — Principle of Atomic Conservation",
          blocks: [
            {
              kind: "detailed",
              heading: "Balance atoms, skip the equation",
              paras: [
                "Atoms of each element are conserved even when the equation is unbalanced, unknown, or a multi-step black box. POAC equates the moles of a chosen element on both ends: (atoms of X per formula of A) × n_A = (atoms of X per formula of P) × n_P. Choose an element that appears in exactly one known reactant and one known product.",
                "This is gravimetric analysis' engine: precipitate the element quantitatively into a weighable compound, walk the atom count backwards.",
              ],
              points: [
                "KClO₃ → KCl + O₂ without balancing: O-balance gives 3 × n(KClO₃) = 2 × n(O₂).",
                "Phosphorus assay: all P in a sample lands in Mg₂P₂O₇ → n(P) = 2 × n(Mg₂P₂O₇).",
                "Silver assay: n(Ag in alloy) = n(AgCl precipitated).",
              ],
              exams: ["JEE Main", "JEE Advanced"],
            },
            {
              kind: "illustration",
              level: "advanced",
              question: "2.45 g of KClO₃ (M = 122.5) decomposes to KCl and O₂. Find the mass of O₂ — without balancing the equation.",
              thinking: "Track oxygen: 3 per KClO₃, 2 per O₂.",
              solution: "3 × (2.45/122.5) = 2 × (m/32) → 3 × 0.02 = m/16 → m = 0.96 g.",
              fastMethod: "POAC turns a decomposition into one line. The balanced equation (2KClO₃ → 2KCl + 3O₂) gives the same 3:2 — POAC just never needed it.",
              exams: ["JEE Main", "JEE Advanced"],
            },
            {
              kind: "illustration",
              level: "advanced",
              question: "A 1.50 g sample containing phosphorus is processed so all P ends up as 0.85 g of Mg₂P₂O₇ (M = 222.6). Find %P in the sample.",
              thinking: "P-atom conservation across the entire unknown chain of steps.",
              solution: "n(Mg₂P₂O₇) = 0.85/222.6 ≈ 3.82 × 10⁻³ mol → n(P) = 2 × 3.82 × 10⁻³ = 7.64 × 10⁻³ mol → m(P) = 7.64 × 10⁻³ × 31 ≈ 0.237 g → %P = 15.8%.",
              exams: ["JEE Advanced"],
            },
            {
              kind: "misc",
              level: "challenge",
              question: "P₄S₃ + 8O₂ → P₄O₁₀ + 3SO₂. Mass of P₄S₃ (M = 220) needed for 28.4 g of P₄O₁₀ (M = 284)?",
              answer: "22.0 g",
              explanation: "P-balance: 4·n(P₄S₃) = 4·n(P₄O₁₀) → n = 0.1 mol → 22.0 g.",
              exams: ["JEE Advanced"],
            },
            {
              kind: "misc",
              level: "hard",
              question: "2.0 g of Mg is fully converted to Mg₃(PO₄)₂ (M = 262.9). Mass of product?",
              answer: "≈ 7.21 g",
              explanation: "Mg-balance: n(Mg) = 3 × n(product) → (2/24.3) = 3 × (m/262.9) → m ≈ 7.21 g.",
              exams: ["JEE Main", "JEE Advanced"],
            },
          ],
        },
      ],
    },
    // ═════════════════════════════ TOPIC 8 ═════════════════════════════
    {
      id: "eudiometry",
      title: "Eudiometry — Gas Phase Analysis",
      intro: "A graduated tube, a spark, and Avogadro's law: volumes read moles directly, so an explosion plus a few absorbers can solve a molecular formula.",
      exams: ["JEE Advanced"],
      subtopics: [
        {
          id: "eudiometer",
          title: "The Eudiometer & Volume Relationships",
          blocks: [
            {
              kind: "detailed",
              heading: "The protocol",
              paras: [
                "A measured gas mixture is sealed over mercury (or water) in a graduated eudiometer tube, excess O₂ is added, and the mixture is sparked. Because volumes at constant P, T are proportional to moles (Avogadro), every coefficient in the combustion equation is also a VOLUME ratio.",
                "After the explosion the tube is cooled to the initial temperature: water formed condenses to negligible liquid volume. The volume drop on cooling — contraction = V(initial gases) + V(O₂ added) − V(residual) — is the first data point. Passing the residue through selective absorbers then reads off each component: KOH absorbs CO₂, alkaline pyrogallol absorbs O₂, turpentine oil absorbs O₃, ammoniacal Cu₂Cl₂ absorbs CO, conc. H₂SO₄/CaCl₂ absorbs water vapour.",
              ],
              points: [
                "Everything is at constant P and T → work entirely in mL, never convert to moles.",
                "H₂O(l) after cooling counts as ZERO volume.",
                "N₂ survives combustion and absorbers — whatever volume remains at the end is usually N₂ (or a noble gas).",
              ],
            },
            {
              kind: "visual",
              title: "Eudiometry — Apparatus & Absorber Table",
              visual: "eudiometry-tube",
              caption: "The five standard absorbers are non-negotiable memory work — every mixture-analysis problem keys on them.",
            },
            {
              kind: "trick",
              items: [
                { trick: "\"KOH Pyro Turps Copper Dry\"", recall: "KOH→CO₂ · pyrogallol→O₂ · turpentine→O₃ · Cu₂Cl₂(NH₃)→CO · H₂SO₄/CaCl₂→H₂O." },
              ],
            },
            {
              kind: "misc",
              level: "medium",
              question: "100 mL of ozonised oxygen (O₂ + O₃) passed through turpentine oil shrinks to 80 mL. % of O₃ by volume?",
              answer: "20%",
              explanation: "Turpentine removes only O₃ → V(O₃) = 20 mL of the original 100 mL.",
            },
          ],
        },
        {
          id: "hydrocarbon-combustion",
          title: "Hydrocarbon Combustion Analysis",
          blocks: [
            {
              kind: "detailed",
              heading: "The master equation",
              paras: [
                "CₓH_y + (x + y/4) O₂ → x CO₂ + (y/2) H₂O. Per volume of hydrocarbon: O₂ consumed = (x + y/4) volumes, CO₂ formed = x volumes. Two readings (O₂ used and CO₂ formed — or a contraction) give two equations in x and y: the molecular formula falls out of pure volume arithmetic, no masses anywhere.",
                "Contraction on cooling for CₓH_y burnt in excess O₂ = V_HC × (1 + y/4) — the '1' is the fuel volume itself, y/4 is the net O₂-to-water loss.",
              ],
              points: [
                "x = V(CO₂)/V(fuel).",
                "x + y/4 = V(O₂ consumed)/V(fuel).",
                "Oxygen-containing fuels (CₓH_yO_z) subtract z/2 from the O₂ demand: (x + y/4 − z/2).",
              ],
            },
            {
              kind: "illustration",
              level: "advanced",
              question: "15 mL of a hydrocarbon needs 75 mL of O₂ for complete combustion and yields 45 mL of CO₂. Find the formula.",
              thinking: "Both master ratios at once: x from CO₂, x + y/4 from O₂.",
              solution: "x = 45/15 = 3. x + y/4 = 75/15 = 5 → y/4 = 2 → y = 8. The hydrocarbon is C₃H₈ (propane).",
              commonMistakes: ["Reading '75 mL O₂ TAKEN' as consumed when the problem later reports leftover O₂ — subtract the excess first."],
            },
            {
              kind: "illustration",
              level: "advanced",
              question: "30 mL of CH₄ is exploded with 80 mL of O₂. What is the volume after cooling?",
              thinking: "CH₄ + 2O₂ → CO₂ + 2H₂O(l). Track each species' volume through the reaction.",
              solution: "O₂ used = 60 mL, CO₂ formed = 30 mL, water condenses. Residual = CO₂ 30 + excess O₂ (80 − 60) = 20 → 50 mL.",
              fastMethod: "Contraction = 30 × (1 + 4/4) = 60 mL from initial 110 mL → 50 mL. Both routes must agree.",
            },
            {
              kind: "misc",
              level: "hard",
              question: "10 mL of C₂H₂ burns in excess O₂. Volume contraction on cooling?",
              answer: "15 mL",
              explanation: "C₂H₂ + 2.5 O₂ → 2CO₂ + H₂O(l): contraction per volume = (1 + 2.5) − 2 = 1.5 → 15 mL.",
            },
            {
              kind: "misc",
              level: "medium",
              question: "1.0 L of a fuel gas: 80% CH₄ + 20% C₂H₆ (by volume). O₂ needed for complete combustion?",
              answer: "2.3 L",
              explanation: "CH₄ needs 2 vol (→1.6 L); C₂H₆ needs 3.5 vol (→0.7 L). Total 2.3 L.",
            },
          ],
        },
        {
          id: "mixture-analysis",
          title: "Mixture Analysis with Absorbers",
          blocks: [
            {
              kind: "detailed",
              heading: "Unknown mixtures: variables + volume bookkeeping",
              paras: [
                "Assign a volume variable to each component, write (1) the total-volume equation, (2) the residual-volume or contraction equation after explosion, (3) the absorber readings (KOH drop = total CO₂, etc.). Each observation is one linear equation; solve the system. Inert components (He, N₂) pass through everything — they appear only in the total.",
              ],
            },
            {
              kind: "illustration",
              level: "advanced",
              question: "25 mL of a CO + C₂H₄ mixture is exploded with 75 mL of O₂. After cooling, the volume is 65 mL. Find the volume of CO in the original mixture.",
              thinking: "CO + ½O₂ → CO₂ (no water); C₂H₄ + 3O₂ → 2CO₂ + 2H₂O(l). Let CO = a, C₂H₄ = b.",
              solution: "a + b = 25. Residual = (75 − 0.5a − 3b) + (a + 2b) = 75 + 0.5a − b = 65 → b − 0.5a = 10. Substituting b = 25 − a: 25 − 1.5a = 10 → a = 10 mL CO (and b = 15 mL).",
              commonMistakes: ["Forgetting that CO₂ from BOTH fuels stays in the residue until KOH.", "Adding water volume — it condensed."],
            },
            {
              kind: "illustration",
              level: "advanced",
              question: "A 20 mL mixture of CO, CH₄ and He is exploded with excess O₂: contraction 15 mL; after KOH, further contraction 12 mL. Find V(He).",
              thinking: "KOH drop = total CO₂ = V(CO) + V(CH₄). The inert He never changes.",
              solution: "Let CO = x, CH₄ = y, He = z. Total: x + y + z = 20. KOH drop = CO₂ = x + y = 12 → z = He = 8 mL. (Bonus: contraction per CO = 0.5, per CH₄ = 2, so 0.5x + 2y = 15; with x + y = 12 this gives x = 6, y = 6.)",
              commonMistakes: ["Using the first contraction as CO₂ — contraction and absorber readings are different observables."],
            },
            {
              kind: "focus",
              title: "What examiners actually test here",
              points: [
                "The absorber table (which reagent removes which gas) — asked directly and inside multi-step problems.",
                "Contraction bookkeeping with H₂O(l) at zero volume.",
                "Inert-gas isolation: whatever survives all absorbers is N₂/noble gas.",
                "General formula CₓH_y + (x + y/4)O₂ manipulations, including the O-containing variant.",
              ],
            },
          ],
        },
      ],
    },
    // ═════════════════════════════ TOPIC 9 ═════════════════════════════
    {
      id: "concentration",
      title: "Concentration Terms & Solution Stoichiometry",
      intro: "Six ways to state 'how much is dissolved' — and one golden method (fix a basis, convert everything to masses) that interconverts them all.",
      subtopics: [
        {
          id: "toolbox",
          title: "The Concentration Toolbox",
          blocks: [
            {
              kind: "detailed",
              heading: "Definitions that must be automatic",
              paras: [
                "Molarity M = moles of solute per LITRE of SOLUTION. Molality m = moles of solute per KILOGRAM of SOLVENT. Mole fraction Xᵢ = nᵢ/Σn. Mass percent (w/w) = solute mass per 100 g solution; (w/v) = solute grams per 100 mL solution; ppm = (mass solute/mass solution) × 10⁶, ppb uses 10⁹.",
                "Temperature test: anything defined through a VOLUME (M, w/v) drifts with temperature because solutions expand; anything defined purely through masses/moles (m, X, w/w, ppm) is temperature-independent. This single distinction is a repeated one-mark JEE question.",
              ],
              points: [
                "n(solute) = M × V(L) — the working form for all titration-style arithmetic.",
                "Ion molarity multiplies by the subscript: 0.1 M CaCl₂ is 0.2 M in Cl⁻; 0.2 M Na₂SO₄ is 0.4 M in Na⁺.",
                "For dilute aqueous solutions (d ≈ 1 g/mL): 1 ppm ≈ 1 mg/L.",
              ],
            },
            {
              kind: "visual",
              title: "The Concentration Interconversion Map",
              visual: "concentration-map",
              caption: "Density is the only bridge between volume-based and mass-based scales. Fix a basis (1 L solution or 1 kg solvent), convert everything to masses, then re-divide into the target definition.",
            },
            {
              kind: "misc",
              level: "easy",
              question: "Molarity of 6.3 g HNO₃ (M = 63) in 250 mL of solution?",
              answer: "0.4 M",
              explanation: "n = 0.1 mol → M = 0.1/0.25 = 0.4 M.",
            },
            {
              kind: "misc",
              level: "easy",
              question: "10 g NaOH in 500 g of water. Molality?",
              answer: "0.5 m",
              explanation: "n = 0.25 mol → m = 0.25/0.5 kg = 0.5 m.",
            },
            {
              kind: "misc",
              level: "medium",
              question: "Water contains 150 ppm of MgSO₄ (M = 120.4, d = 1 g/mL). Molarity?",
              answer: "≈ 1.25 × 10⁻³ M",
              explanation: "1 L = 1000 g solution → 0.150 g solute → n = 0.150/120.4 ≈ 1.25 × 10⁻³ mol.",
            },
            {
              kind: "mistake",
              items: [
                { wrong: "Molality = moles per kg of SOLUTION.", right: "Per kg of SOLVENT. The two differ by exactly the solute's own mass — the m↔M bridge formula exists because of this." },
                { wrong: "Adding molarities of mixed solutions directly.", right: "Add MOLES, then divide by TOTAL volume: M(final) = (M₁V₁ + M₂V₂)/(V₁ + V₂)." },
              ],
            },
          ],
        },
        {
          id: "interconversions",
          title: "Interconversions — the Density Bridge",
          blocks: [
            {
              kind: "detailed",
              heading: "One derivation, every conversion",
              paras: [
                "M → m: take exactly 1 L of solution. Solution mass = 1000d grams; solute mass = M × M₂ (M₂ = solute molar mass); solvent mass = 1000d − M·M₂ grams. Then m = 1000M/(1000d − M·M₂). Every other interconversion (X ↔ m, %w/w ↔ M) is the same three moves with a different basis — never memorise more than the method.",
                "X → m shortcut for aqueous solutions: with solute fraction X₂, molality m = 1000·X₂/(18·X₁) where X₁ = 1 − X₂ (water's 18 g/mol appears because the solvent is water).",
              ],
              points: [
                "%w/w + density → M: mass of solute in 1 L = 10 × (%w/w) × d grams → divide by M₂.",
                "m → M needs density of the SOLUTION, taken over basis 1 kg solvent.",
              ],
              exams: ["JEE Main", "JEE Advanced"],
            },
            {
              kind: "illustration",
              level: "intermediate",
              question: "A 15% (w/w) H₂SO₄ solution has density 1.10 g/mL. Find its molarity.",
              thinking: "Basis 1 L of solution → 1100 g → 15% of it is acid.",
              solution: "Solute = 0.15 × 1100 = 165 g → n = 165/98 ≈ 1.68 mol in 1 L → 1.68 M.",
              fastMethod: "M = 10·x·d/M₂ = 10 × 15 × 1.10/98 ≈ 1.68 M.",
              exams: ["JEE Main", "JEE Advanced"],
            },
            {
              kind: "illustration",
              level: "advanced",
              question: "A 3.0 m aqueous KOH solution (M₂ = 56.1) has density 1.15 g/mL. Find its molarity.",
              thinking: "Basis 1 kg of water: 3 mol solute; find total volume via total mass and density.",
              solution: "Solute = 3 × 56.1 = 168.3 g; solution mass = 1168.3 g; V = 1168.3/1.15 ≈ 1016 mL = 1.016 L → M = 3/1.016 ≈ 2.95 M.",
              commonMistakes: ["Dividing 3 mol by 1 L because \"1 kg water ≈ 1 L\" — the SOLUTION volume includes the solute."],
              exams: ["JEE Advanced"],
            },
            {
              kind: "illustration",
              level: "advanced",
              question: "The mole fraction of solute in an aqueous solution is 0.1. Find the molality.",
              thinking: "Basis 1 mol total: 0.1 mol solute in 0.9 mol water.",
              solution: "Solvent mass = 0.9 × 18 = 16.2 g = 0.0162 kg → m = 0.1/0.0162 ≈ 6.17 m.",
              fastMethod: "m = 1000X₂/(18X₁) = 1000 × 0.1/(18 × 0.9) ≈ 6.17 m.",
              exams: ["JEE Main", "JEE Advanced"],
            },
            {
              kind: "misc",
              level: "hard",
              question: "Molality of 5 M H₂SO₄ of density 1.28 g/mL?",
              answer: "≈ 6.33 m",
              explanation: "1 L: solution 1280 g, solute 490 g, solvent 790 g → m = 5/0.79 ≈ 6.33 m.",
              exams: ["JEE Main", "JEE Advanced"],
            },
            {
              kind: "misc",
              level: "hard",
              question: "Mole fraction of ethanol in 46% (w/w) aqueous ethanol?",
              answer: "0.25",
              explanation: "Basis 100 g: 46 g EtOH = 1 mol; 54 g water = 3 mol → X = 1/4.",
            },
          ],
        },
        {
          id: "dilution-mixing",
          title: "Dilution, Mixing & Solution Reactions",
          blocks: [
            {
              kind: "detailed",
              heading: "Moles survive dilution",
              paras: [
                "Adding solvent changes concentration but not the moles of solute: M₁V₁ = M₂V₂. Mixing two solutions of the SAME solute: M(final) = (M₁V₁ + M₂V₂)/(V₁ + V₂), assuming additive volumes (a stated assumption — real volumes can contract slightly; if the problem gives a contraction, divide moles by the ACTUAL final volume).",
                "Reactions in solution are ordinary stoichiometry with n = MV as the entry mole count: LR analysis, product molarity, back-titration all follow.",
              ],
              points: [
                "Dilute 100 mL of 2 M to 0.5 M → V₂ = 400 mL → ADD 300 mL of water (the asked number is usually the added water, not V₂).",
                "Ion targets: dilute 0.2 M Na₂SO₄ until [Na⁺] = 0.05 M → initial [Na⁺] = 0.4 M → V₂ = 800 mL per 100 mL.",
              ],
            },
            {
              kind: "illustration",
              level: "intermediate",
              question: "10.0 g of CaCO₃ is added to 250 mL of 1.0 M HCl. Find the molarity of CaCl₂ formed (volume unchanged).",
              thinking: "CaCO₃ + 2HCl → CaCl₂ + CO₂ + H₂O. Moles: CaCO₃ 0.1, HCl 0.25. LR test with the 2:1 demand.",
              solution: "CaCO₃ needs 0.2 mol HCl < 0.25 available → CaCO₃ is LR. n(CaCl₂) = 0.1 mol → M = 0.1/0.25 = 0.4 M.",
              commonMistakes: ["Taking HCl as limiting because 0.25 < 2 × 0.25.", "Dividing by the 'new' volume — the problem states volume unchanged."],
              exams: ["JEE Main", "JEE Advanced"],
            },
            {
              kind: "misc",
              level: "easy",
              question: "250 mL of 0.2 M HCl + 750 mL of 0.1 M HCl. Final molarity?",
              answer: "0.125 M",
              explanation: "(50 + 75) mmol / 1000 mL = 0.125 M.",
            },
            {
              kind: "misc",
              level: "medium",
              question: "Volume of 0.5 M NaOH to neutralise 50 mL of 0.2 M H₂SO₄?",
              answer: "40 mL",
              explanation: "H₂SO₄ supplies 2 H⁺: 0.5 × V = 0.2 × 50 × 2 → V = 40 mL.",
            },
            {
              kind: "misc",
              level: "challenge",
              question: "100 mL of 10 M HCl (d = 1.2) is mixed with 400 mL of 2 M HCl (d = 1.05). Mass % of the final solution?",
              answer: "≈ 12.2% (w/w)",
              explanation: "Moles: 1.0 + 0.8 = 1.8 → 65.7 g HCl. Masses: 120 + 420 = 540 g → 65.7/540 ≈ 12.17%.",
              exams: ["JEE Advanced"],
            },
          ],
        },
      ],
    },
    // ═════════════════════════════ TOPIC 10 ═════════════════════════════
    {
      id: "special-labels",
      title: "Special Strength Labels — H₂O₂, Oleum & Mean Molar Mass",
      intro: "Industry labels bottles its own way: 'volume strength' peroxide, '109% oleum', and gas mixtures reported by a single average molar mass. Decode all three.",
      exams: ["JEE Main", "JEE Advanced"],
      subtopics: [
        {
          id: "h2o2",
          title: "Volume Strength of H₂O₂",
          blocks: [
            {
              kind: "detailed",
              heading: "'x V' means x litres of O₂ per litre of solution",
              paras: [
                "H₂O₂ decomposes: 2H₂O₂ → 2H₂O + O₂. A solution labelled 'x V' releases x litres of O₂ at STP from 1 litre of solution. One litre of a 1 M solution holds 1 mol H₂O₂ → ½ mol O₂ → 11.2 L at STP. Hence Volume Strength = 11.2 × Molarity (with STP as 1 atm/0 °C; the 1 bar convention gives 11.35 — JEE states which; default here is 11.2).",
              ],
              points: [
                "M = VS/11.2 · Normality = 2 × M (n-factor 2) → N = VS/5.6.",
                "'x V' → grams per litre = (x/11.2) × 34.",
                "Decomposition on storage: remaining O₂ capacity scales the label down linearly.",
              ],
            },
            {
              kind: "illustration",
              level: "intermediate",
              question: "Find the molarity and %(w/v) of a '22.4 V' H₂O₂ solution.",
              thinking: "Divide by 11.2 for molarity, then convert to grams per 100 mL.",
              solution: "M = 22.4/11.2 = 2.0 M → 68 g of H₂O₂ per litre → 6.8% (w/v).",
            },
            {
              kind: "illustration",
              level: "advanced",
              question: "500 mL of '20 V' H₂O₂ loses 2.0 L of O₂ (STP) during storage. Find the new volume strength.",
              thinking: "Volume strength is an O₂-capacity label: track capacity, not concentration formulas.",
              solution: "Initial capacity = 0.5 L × 20 = 10 L of O₂. Remaining = 8 L in the same 0.5 L → new VS = 8/0.5 = 16 V.",
              fastMethod: "Capacity bookkeeping beats recomputing molarity — the volume of solution never changed.",
              exams: ["JEE Advanced"],
            },
            {
              kind: "misc",
              level: "medium",
              question: "Mix 200 mL of '10 V' with 300 mL of '20 V' H₂O₂. Resulting volume strength?",
              answer: "16 V",
              explanation: "O₂ capacity = 2 + 6 = 8 L over 0.5 L → 16 V (capacity-weighted mean, exactly like mixing molarities).",
              exams: ["JEE Advanced"],
            },
            {
              kind: "misc",
              level: "medium",
              question: "Normality of '11.2 V' H₂O₂?",
              answer: "2 N",
              explanation: "M = 1.0; n-factor = 2 → N = 2.0 N.",
            },
          ],
        },
        {
          id: "oleum",
          title: "Oleum Labelling",
          blocks: [
            {
              kind: "detailed",
              heading: "Why a percentage can exceed 100",
              paras: [
                "Oleum is H₂SO₄ with dissolved free SO₃. Adding water converts the SO₃: SO₃ + H₂O → H₂SO₄. The label '(100 + x)%' means 100 g of oleum yields (100 + x) g of H₂SO₄ after absorbing exactly x g of water. Because 18 g of water converts 80 g of SO₃: % free SO₃ = (80/18)·x.",
              ],
              points: [
                "109% oleum: x = 9 → 40% free SO₃, 60% H₂SO₄.",
                "118% oleum: x = 18 → 80% free SO₃ — the maximum meaningful label (100% SO₃ would be x = 22.5, i.e. '122.5%').",
                "Mixing oleums: the x-values mass-average, exactly like molarities.",
              ],
            },
            {
              kind: "visual",
              title: "Oleum — Composition & Label Logic",
              visual: "oleum-bar",
              caption: "The label is a promise about the future: how much H₂SO₄ exists AFTER x g of water finishes the SO₃.",
            },
            {
              kind: "illustration",
              level: "intermediate",
              question: "A 104.5% oleum: what mass of pure H₂SO₄ is present in 200 g of it right now?",
              thinking: "x = 4.5 → free SO₃ %(w/w) = (80/18) × 4.5 = 20%. The rest is already H₂SO₄.",
              solution: "Free SO₃ = 20% of 200 g = 40 g → present H₂SO₄ = 160 g. (After hydration it would become 209 g — a different question.)",
              commonMistakes: ["Reporting 209 g — the label describes POST-hydration mass; the sample right now holds 160 g of H₂SO₄."],
            },
            {
              kind: "illustration",
              level: "advanced",
              question: "How much water converts 50 g of 118% oleum into 109% oleum?",
              thinking: "Each label states remaining water demand per 100 g. Partial hydration = difference of demands.",
              solution: "118%: demand 18 g/100 g → 9 g per 50 g. 109%: demand 9 g/100 g → 4.5 g per 50 g. Water to add = 9 − 4.5 = 4.5 g.",
              exams: ["JEE Advanced"],
            },
            {
              kind: "misc",
              level: "medium",
              question: "Label of an oleum containing 20% free SO₃?",
              answer: "104.5%",
              explanation: "20 = (80/18)x → x = 4.5 → 104.5%.",
            },
            {
              kind: "misc",
              level: "challenge",
              question: "Total sulfur %(w/w) in a 112.5% oleum?",
              answer: "≈ 36.7%",
              explanation: "x = 12.5 → SO₃ = 55.56%, H₂SO₄ = 44.44%. S = 0.5556 × (32/80) + 0.4444 × (32/98) ≈ 0.222 + 0.145 = 36.7%.",
              exams: ["JEE Advanced"],
            },
          ],
        },
        {
          id: "mean-molar-mass",
          title: "Mean Molar Mass & Dissociation",
          blocks: [
            {
              kind: "detailed",
              heading: "One number for a mixture",
              paras: [
                "A gas mixture behaves as if it had molar mass M(mix) = (total mass)/(total moles) = Σ XᵢMᵢ (mole-fraction weighted). Air's ≈ 29 comes from 0.79 × 28 + 0.21 × 32.",
                "Dissociation lowers M(mix): N₂O₄ ⇌ 2NO₂ starting from n₀ mol with degree of dissociation α gives total moles n₀(1 + α) at unchanged total mass, so M(mix) = M₀/(1 + α) → α = M₀/M(mix) − 1. Measuring an average molar mass (via vapour density) therefore MEASURES the extent of dissociation — the bridge into chemical equilibrium.",
              ],
              points: [
                "For A ⇌ k products: M₀/M(mix) = 1 + (k − 1)α.",
                "Adding an inert gas changes M(mix) toward the added gas's mass but does NOT change α (at constant volume).",
                "Mole % and mass % of a mixture differ unless all components share M — converting between them is a one-step weighted calculation.",
              ],
              exams: ["JEE Advanced"],
            },
            {
              kind: "illustration",
              level: "advanced",
              question: "The vapour density of an N₂O₄ sample at equilibrium is 34.5. Find the degree of dissociation into NO₂.",
              thinking: "VD → M(mix) = 69; pure N₂O₄ has M₀ = 92; the (1 + α) dilution of molar mass gives α.",
              solution: "M(mix) = 2 × 34.5 = 69 → 1 + α = 92/69 = 4/3 → α = 1/3 ≈ 33.3%.",
              fastMethod: "α = (D − d)/d with D = VD of pure N₂O₄ (46) and d = observed VD: (46 − 34.5)/34.5 = 1/3.",
              exams: ["JEE Advanced"],
            },
            {
              kind: "misc",
              level: "hard",
              question: "A mixture holds SO₂ and SO₃ with mean molar mass 72. Mole ratio SO₂ : SO₃?",
              answer: "1 : 1",
              explanation: "72 is exactly midway between 64 and 80 → equal mole fractions.",
              exams: ["JEE Advanced"],
            },
            {
              kind: "trap",
              items: [
                { trap: "Mass % equals mole % for a gas mixture.", reality: "Only when all molar masses are equal. Heavier components carry more mass % than mole % — the ozonised-oxygen problems live on this gap." },
              ],
            },
          ],
        },
      ],
    },
  ],
  chapterRevision: [
    "n = w/M = N/N_A = V(STP)/22.4 — the four-way identity; specify the ENTITY (atoms vs molecules vs formula units).",
    "1 amu = 1/N_A g ≈ 1.66 × 10⁻²⁴ g; atomic masses are ¹²C-relative weighted isotope averages (lever rule for reverse-abundance).",
    "PV = nRT (T in kelvin, R = 0.0821 L·atm/K·mol) · PM = dRT · VD = M/2 · d(STP) = M/22.4.",
    "Five combination laws; Gay-Lussac + Avogadro: gas volume ratios = mole ratios (same P, T).",
    "EF algorithm: % → ÷ atomic mass → ÷ smallest → clear fractions; MF = EF × (M/EF-mass).",
    "Stoichiometric equality n_A/a = n_B/b; purity cuts the sample first; sequential yields multiply.",
    "LR = smallest n/ν; every theoretical yield comes from the LR; % yield = actual/theoretical × 100.",
    "POAC: (atoms per formula) × n is conserved per element — balance atoms, skip equations.",
    "Eudiometry: work in mL; H₂O(l) = 0 volume; CₓH_y needs (x + y/4) O₂ and makes x CO₂; absorbers: KOH→CO₂, pyrogallol→O₂, turpentine→O₃, Cu₂Cl₂→CO, H₂SO₄→H₂O.",
    "M = n/V(L) · m = n/kg-solvent · m = 1000M/(1000d − M·M₂) · M = 10·(%w/w)·d/M₂ · dilution M₁V₁ = M₂V₂ (moles survive).",
    "Temperature-independent: m, X, %w/w, ppm. Temperature-dependent: M, %w/v.",
    "H₂O₂: VS = 11.2 × M, N = VS/5.6. Oleum '(100+x)%': free SO₃ = (80/18)x. Dissociation: M₀/M(mix) = 1 + (k−1)α.",
  ],
};
