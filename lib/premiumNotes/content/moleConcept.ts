import type { PremiumChapterNotes } from "../schema";

// ─────────────────────────────────────────────────────────────────────────────
// MOLE CONCEPT — Chemical Calculations (JEE Advanced Masterbook, Chapter 1).
//
// Authored from the founder's source pack. DESIGN PRINCIPLE (v2): learn through
// SOLVED EXAMPLES, not walls of theory. Every concept is immediately followed by
// a step-by-step worked example, and most subtopics end with a TRICKY /
// CONCEPTUAL JEE-Advanced problem (tricky:true) that exposes the classic trap.
// Steps render as a numbered timeline; each carries a boxed answer + key insight.
//
// Conventions (stated in-content): molar volume 22.4 L at STP (1 atm, 0 °C);
// H₂O₂ volume strength = 11.2 × M. Unicode chemistry throughout.
// ─────────────────────────────────────────────────────────────────────────────

export const MOLE_CONCEPT_NOTES: PremiumChapterNotes = {
  chapterId: "mole-concept",
  title: "Mole Concept — Chemical Calculations",
  tagline: "One idea — count particles by weighing them — powers all of chemistry. Learn it the way toppers do: through worked examples and the tricky problems that separate ranks.",
  topics: [
    // ═════════════════════════════ TOPIC 1 ═════════════════════════════
    {
      id: "mole",
      title: "The Mole — Counting by Weighing",
      intro: "Atoms are too small to count and too light to weigh singly. The mole is chemistry's bridge from the invisible particle to the laboratory balance.",
      subtopics: [
        {
          id: "amount-of-substance",
          title: "Amount of Substance & Avogadro's Constant",
          blocks: [
            {
              kind: "detailed",
              heading: "Why the mole had to be invented",
              paras: [
                "Matter is measured three ways: by mass (solids — g, kg), by volume (fluids — L; a gas also needs a stated P and T), and by count. But reactions happen particle-to-particle: one N₂ meets three H₂, never one gram meets three grams. Chemistry therefore needs a unit that counts particles while we weigh grams — the mole, the SI unit of amount of substance.",
                "One mole is the amount of a substance containing as many elementary entities as there are atoms in exactly 12 g of ¹²C. That count is Avogadro's constant, N_A = 6.022 × 10²³ mol⁻¹. It applies to whatever entity you name: 1 mol of atoms = N_A atoms, 1 mol of molecules = N_A molecules, 1 mol of electrons = N_A electrons.",
              ],
              points: [
                "n = N / N_A — moles from a raw particle count.",
                "ALWAYS specify the entity: 1 mol O atoms ≠ 1 mol O₂ molecules ≠ 1 mol O₃ molecules.",
                "For ionic solids (NaCl, CaCO₃) say formula unit, not molecule — the crystal has no discrete molecule.",
              ],
            },
            {
              kind: "illustration",
              level: "basic",
              concept: "n = N / N_A",
              question: "A sample contains 9.033 × 10²² helium atoms. How many moles of He is this?",
              thinking: "Helium is monoatomic, so atoms = entities. Straight n = N/N_A.",
              steps: [
                { label: "Write the relation", work: "n = N / N_A." },
                { label: "Substitute", work: "n = (9.033 × 10²²) / (6.022 × 10²³)." },
                { label: "Divide", work: "= 0.150 mol." },
              ],
              answer: "0.15 mol He",
              insight: "N_A is just a conversion factor between 'a count' and 'moles'. Any count ÷ N_A is moles — that never changes.",
            },
            {
              kind: "detailed",
              heading: "The entity trap — atoms vs molecules vs ions",
              paras: [
                "The single most common early error is answering for the wrong entity. Elemental gases are diatomic (H₂, O₂, N₂, Cl₂), phosphorus is P₄, sulfur is S₈, ozone is O₃. So 1 mole of a substance can carry many moles of atoms. Read the question twice: does it ask for molecules, atoms, ions, or electrons?",
              ],
            },
            {
              kind: "illustration",
              level: "intermediate",
              concept: "Molecules → atoms",
              question: "How many individual atoms are present in 15.5 g of white phosphorus, P₄? (M = 124 g/mol)",
              thinking: "Mass → moles of P₄ → count. Then remember each P₄ holds 4 atoms.",
              steps: [
                { label: "Mass → moles of P₄", work: "n = w/M = 15.5 / 124 = 0.125 mol of P₄ molecules." },
                { label: "Moles → molecules", work: "molecules = 0.125 × 6.022 × 10²³ ≈ 7.53 × 10²²." },
                { label: "Molecules → atoms", work: "each P₄ has 4 atoms → atoms = 4 × 7.53 × 10²² ≈ 3.01 × 10²³." },
              ],
              answer: "≈ 3.01 × 10²³ atoms",
              fastMethod: "Go via moles of ATOMS: 0.125 mol P₄ × 4 = 0.5 mol atoms → 0.5 × N_A = 3.01 × 10²³.",
              commonMistakes: ["Forgetting the ×4 (reporting molecules as atoms).", "Using M = 31 (atomic) for a molecular P₄ sample."],
            },
            {
              kind: "illustration",
              level: "advanced",
              tricky: true,
              concept: "Entity discipline + reverse count",
              question: "A sample of ozone (O₃) contains 1.806 × 10²⁴ oxygen ATOMS. What volume does this ozone occupy at STP (1 atm, 0 °C)?",
              thinking: "The trap: you're given ATOMS but molar volume works on MOLECULES. Convert atoms → moles of atoms → moles of O₃ molecules (÷3) → volume.",
              steps: [
                { label: "Atoms → moles of atoms", work: "n(O atoms) = 1.806 × 10²⁴ / 6.022 × 10²³ = 3 mol of O atoms." },
                { label: "Atoms → molecules", work: "O₃ has 3 atoms per molecule → n(O₃) = 3 / 3 = 1 mol of molecules." },
                { label: "Moles → volume at STP", work: "V = 1 × 22.4 = 22.4 L." },
              ],
              answer: "22.4 L",
              insight: "Whenever molar volume or Avogadro's law is in play, you MUST be at the molecule level. The ÷3 (atoms → O₃) is the entire question — a student who divides by N_A and stops gets 3 mol and a 3× wrong volume.",
            },
            {
              kind: "focus",
              title: "What examiners test in this subtopic",
              points: [
                "Reverse counts where the entity given ≠ the entity asked (atoms↔molecules↔ions).",
                "Electron / proton / neutron totals in a given mass.",
                "'Which sample has the most atoms?' — convert every option to moles of ATOMS first.",
              ],
            },
            {
              kind: "trick",
              items: [
                { trick: "\"INTO moles, then reason, then OUT\"", recall: "Every mole problem: convert the given quantity into moles, use ratios, convert out to what's asked. Never jump given → asked directly." },
              ],
            },
          ],
        },
        {
          id: "particle-counting",
          title: "Counting Sub-particles — Electrons, Protons, Neutrons",
          blocks: [
            {
              kind: "detailed",
              heading: "Layered counting",
              paras: [
                "Sub-particle problems stack one more multiplier onto the count: mass → moles → molecules → (particles per molecule). Electrons per molecule = sum of atomic numbers (adjust for charge); protons likewise; neutrons = Σ(A − Z).",
              ],
            },
            {
              kind: "illustration",
              level: "intermediate",
              concept: "Layered particle count",
              question: "How many total electrons are present in 1.8 g of water? (H: Z = 1, O: Z = 8)",
              thinking: "Mass → moles → molecules → electrons/molecule. H₂O carries 2(1) + 8 = 10 electrons.",
              steps: [
                { label: "Mass → moles", work: "n = 1.8 / 18 = 0.1 mol." },
                { label: "Moles → molecules", work: "0.1 × N_A = 6.022 × 10²²." },
                { label: "× electrons per molecule", work: "10 × 6.022 × 10²² = 6.022 × 10²³ electrons." },
              ],
              answer: "6.022 × 10²³ electrons (= 1 mol of electrons)",
              fastMethod: "18 g H₂O carries 10 mol electrons ⇒ 1.8 g carries exactly 1 mol. Scale, don't recompute.",
            },
            {
              kind: "misc",
              level: "medium",
              question: "How many moles of electrons are in 1 mol of CH₄?",
              answer: "10 mol electrons",
              explanation: "C gives 6, each H gives 1 → 6 + 4 = 10 electrons per molecule → 10 mol.",
              exams: ["JEE Main", "JEE Advanced"],
            },
            {
              kind: "misc",
              level: "hard",
              question: "How many neutrons are in 14 g of ¹⁴C?",
              answer: "8 N_A ≈ 4.82 × 10²⁴",
              explanation: "14 g of ¹⁴C = 1 mol atoms. Neutrons/atom = A − Z = 14 − 6 = 8 → 8 N_A.",
              exams: ["JEE Advanced"],
            },
          ],
        },
      ],
    },
    // ═════════════════════════════ TOPIC 2 ═════════════════════════════
    {
      id: "atomic-mass",
      title: "Atomic & Molecular Mass Architecture",
      intro: "Absolute atomic masses are unweighably small, so chemistry runs on a RELATIVE scale — whose zero-point moved twice before settling on carbon-12.",
      subtopics: [
        {
          id: "amu-scale",
          title: "The ¹²C Scale & the amu",
          blocks: [
            {
              kind: "detailed",
              heading: "From hydrogen to oxygen to carbon-12",
              paras: [
                "A single atom (~10⁻²³ g) can't be weighed, so masses are relative to a standard. History tried H = 1, then O = 16, before IUPAC fixed carbon-12: one atomic mass unit (amu, u) is exactly 1/12 the mass of one ¹²C atom.",
                "The amu and N_A are two faces of one definition: 1 amu = 1/N_A gram ≈ 1.66 × 10⁻²⁴ g. That is EXACTLY why atomic mass in amu and molar mass in g/mol share the same number — N_A amu-sized particles weigh that many grams.",
              ],
              points: [
                "Gram atomic mass: A grams of an element = 1 mol of atoms → n = w/A.",
                "Actual atomic mass < Σ(protons + neutrons + electrons): the deficit Δm is binding energy, E = Δm·c² — which is why atomic masses aren't integers.",
              ],
              exams: ["JEE Main", "JEE Advanced"],
            },
            {
              kind: "illustration",
              level: "basic",
              concept: "amu → grams",
              question: "What is the mass of one nitrogen atom in grams?",
              thinking: "Convert the relative mass (14 amu) to grams via 1 amu = 1/N_A g.",
              steps: [
                { label: "State the bridge", work: "1 amu = 1.66 × 10⁻²⁴ g (= 1/N_A g)." },
                { label: "Multiply by 14", work: "14 × 1.66 × 10⁻²⁴ ≈ 2.32 × 10⁻²³ g." },
              ],
              answer: "≈ 2.32 × 10⁻²³ g",
              insight: "Mass of ONE particle (atom or molecule) in grams = (its mass in amu)/N_A. This one line answers a whole family of questions.",
            },
            {
              kind: "detailed",
              heading: "Dalton's famous mistake — why formulas matter",
              paras: [
                "Dalton wrote water as HO, which forced oxygen's relative mass to ~8 from the measured 88.89% O / 11.11% H. Gay-Lussac's combining-volume data (2 vol H₂ + 1 vol O₂ → 2 vol steam) plus Avogadro's hypothesis corrected the formula to H₂O — and oxygen's mass to 16. A relative atomic mass is only as trustworthy as the molecular formula behind it.",
              ],
              exams: ["JEE Advanced"],
            },
            {
              kind: "trick",
              items: [
                { trick: "\"one particle = M / N_A grams\"", recall: "Mass of a single atom/molecule in grams = molar mass ÷ Avogadro number." },
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
                "Most elements are isotope mixtures. The tabulated mass is the abundance-weighted mean, M_avg = Σ fᵢMᵢ. Chlorine's 35.5 is not any atom's mass — it is ¾ × 35 + ¼ × 37. Two problem types: forward (masses + abundances → mean) and reverse (mean + masses → abundances).",
              ],
            },
            {
              kind: "illustration",
              level: "basic",
              concept: "Weighted mean (forward)",
              question: "Boron has ¹⁰B (19.9%) and ¹¹B (80.1%). Find its average atomic mass.",
              thinking: "Weight each isotope mass by its fractional abundance and add.",
              steps: [
                { label: "Convert % to fractions", work: "f(¹⁰B) = 0.199, f(¹¹B) = 0.801." },
                { label: "Weighted sum", work: "M = 0.199 × 10 + 0.801 × 11 = 1.99 + 8.811." },
                { label: "Add", work: "= 10.80 u." },
              ],
              answer: "10.80 u",
            },
            {
              kind: "illustration",
              level: "advanced",
              tricky: true,
              concept: "Reverse abundance (lever rule)",
              question: "Copper's average atomic mass is 63.546 u; it consists of ⁶³Cu and ⁶⁵Cu. Find the % of ⁶³Cu.",
              thinking: "One unknown (fraction x of ⁶³Cu), one linear equation. Or use the lever rule to skip algebra.",
              steps: [
                { label: "Set the unknown", work: "Let x = fraction of ⁶³Cu, so (1 − x) is ⁶⁵Cu." },
                { label: "Weighted-mean equation", work: "63x + 65(1 − x) = 63.546." },
                { label: "Solve", work: "65 − 2x = 63.546 → 2x = 1.454 → x = 0.727." },
              ],
              answer: "⁶³Cu ≈ 72.7%",
              fastMethod: "Lever rule: x(lighter) = (heavier − mean)/(heavier − lighter) = (65 − 63.546)/(65 − 63) = 1.454/2 = 72.7%. Distance is measured from the OTHER isotope.",
              insight: "The lever rule is the fast, error-proof route: the closer the mean sits to an isotope's mass, the more abundant that isotope is. The mean 63.546 is near 63 → ⁶³Cu dominates.",
              commonMistakes: ["Writing 63x + 65x = 63.546 (fractions must sum to 1, not the masses).", "Reporting the ⁶⁵Cu fraction by taking the lever from the wrong end."],
            },
            {
              kind: "misc",
              level: "medium",
              question: "Element X: ³⁵X (75%) and ³⁷X (25%). Average mass?",
              answer: "35.5 u",
              explanation: "0.75 × 35 + 0.25 × 37 = 35.5 — this is exactly chlorine's story.",
            },
          ],
        },
        {
          id: "molecular-formula-mass",
          title: "Molecular Mass, Formula Mass & Hydrates",
          blocks: [
            {
              kind: "detailed",
              heading: "Adding up the architecture (mind the brackets)",
              paras: [
                "Molecular mass = Σ atomic masses in one molecule (CO₂ = 44). Ionic/network solids have no molecule, so the same sum over one formula unit is the formula mass (NaCl = 58.5). Hydrates count every water: CuSO₄·5H₂O = 159.5 + 90 = 249.5. The subscript OUTSIDE a bracket multiplies everything inside — the single biggest source of silly errors.",
              ],
            },
            {
              kind: "illustration",
              level: "intermediate",
              concept: "Bracket + hydrate arithmetic",
              question: "Compute the formula mass of Al₂(SO₄)₃·18H₂O.",
              thinking: "Three parts: 2 Al, 3 sulfate units, 18 waters. Multiply the bracket fully.",
              steps: [
                { label: "Aluminium", work: "2 × 27 = 54." },
                { label: "Sulfate ×3", work: "3 × (32 + 4×16) = 3 × 96 = 288." },
                { label: "Water ×18", work: "18 × 18 = 324." },
                { label: "Sum", work: "54 + 288 + 324 = 666 u." },
              ],
              answer: "666 u",
              commonMistakes: ["Counting 4 oxygens total instead of 4 per sulfate × 3.", "Dropping the 18 waters entirely."],
            },
            {
              kind: "misc",
              level: "medium",
              question: "Moles of ions released by 0.5 mol Al₂(SO₄)₃ in water?",
              answer: "2.5 mol ions",
              explanation: "Each formula unit → 2 Al³⁺ + 3 SO₄²⁻ = 5 ions → 0.5 × 5 = 2.5 mol.",
            },
          ],
        },
      ],
    },
    // ═════════════════════════════ TOPIC 3 ═════════════════════════════
    {
      id: "molar-conversions",
      title: "The Conversion Wheel — Mass, Particles & Gas Volume",
      intro: "Three doors into the mole: weigh it (n = w/M), count it (n = N/N_A), or — for a gas — measure it (n = V/22.4 or PV = nRT). Master the wheel and every numerical melts.",
      subtopics: [
        {
          id: "the-wheel",
          title: "The Master Conversion Map",
          blocks: [
            {
              kind: "detailed",
              heading: "One diagram behind every calculation",
              paras: [
                "The mole sits at the centre; mass, particle count and gas volume hang off it. Every problem is a walk: convert the GIVEN into moles, cross the reaction (Topic 6) if needed, then convert OUT. Memorise the chained identity: n = w/M = N/N_A = V(STP)/22.4.",
              ],
            },
            {
              kind: "visual",
              title: "The Mole Conversion Map",
              visual: "mole-conversion-map",
              caption: "Convert INTO moles at the hub, reason, then convert OUT. Density (PM = dRT) and Avogadro's law connect the outer nodes.",
            },
            {
              kind: "illustration",
              level: "basic",
              concept: "Compound → element atoms",
              question: "How many oxygen atoms are in 0.25 mol of calcium nitrate, Ca(NO₃)₂?",
              thinking: "Subscript arithmetic first (O per formula unit), then ×N_A.",
              steps: [
                { label: "O atoms per formula unit", work: "2 nitrate groups × 3 O = 6 O atoms." },
                { label: "Moles of O atoms", work: "0.25 × 6 = 1.5 mol O atoms." },
                { label: "Count", work: "1.5 × 6.022 × 10²³ ≈ 9.03 × 10²³ atoms." },
              ],
              answer: "≈ 9.03 × 10²³ O atoms",
              commonMistakes: ["Counting 3 O instead of 6 (the bracket).", "Stopping at 1.5 mol when a COUNT is asked."],
            },
          ],
        },
        {
          id: "gas-volume",
          title: "Gas Volume ↔ Mole — Molar Volume & PV = nRT",
          blocks: [
            {
              kind: "detailed",
              heading: "22.4 L — and exactly when it fails",
              paras: [
                "Avogadro's law (equal volumes of gases at the same P, T hold equal molecules) gives every gas a universal molar volume: 22.4 L/mol at STP (1 atm, 0 °C); 22.7 L/mol on the 1 bar convention. Away from STP there is NO shortcut — use PV = nRT with R = 0.0821 L·atm·K⁻¹·mol⁻¹, T in kelvin (T = t°C + 273), matched pressure units (1 atm = 760 mm Hg = 1.013 bar).",
              ],
              points: [
                "n = V/22.4 ONLY at STP. At 25 °C the molar volume is ≈ 24.5 L.",
                "Density forms: PM = dRT, and at STP d = M/22.4 g/L.",
                "Vapour density VD = M/2 (dimensionless, T-independent) — see it, write molar mass.",
              ],
            },
            {
              kind: "illustration",
              level: "intermediate",
              concept: "Gas density → molar mass",
              question: "An unknown gas has density 1.43 g/L at STP. Find its molar mass.",
              thinking: "At STP a mole fills 22.4 L, so one litre weighs M/22.4 grams.",
              steps: [
                { label: "Relation", work: "d(STP) = M / 22.4 → M = d × 22.4." },
                { label: "Substitute", work: "M = 1.43 × 22.4 ≈ 32.0 g/mol." },
              ],
              answer: "≈ 32 g/mol (O₂)",
              fastMethod: "One multiplication: d × 22.4. Reserve PV = nRT for non-STP.",
            },
            {
              kind: "illustration",
              level: "advanced",
              tricky: true,
              concept: "Non-STP + aqueous tension",
              question: "0.50 g of an organic base gave 60 mL of N₂ collected over water at 27 °C and 720 mm Hg (Dumas). Aqueous tension at 27 °C = 20 mm. Find %N.",
              thinking: "Two traps: (1) the gas is 'wet' — subtract water vapour pressure; (2) it's NOT at STP — use PV = nRT, not 22.4.",
              steps: [
                { label: "Correct the pressure", work: "P(dry N₂) = 720 − 20 = 700 mm = 700/760 = 0.921 atm." },
                { label: "Moles via PV = nRT", work: "n = PV/RT = (0.921 × 0.060)/(0.0821 × 300) ≈ 2.24 × 10⁻³ mol." },
                { label: "Mass of N", work: "0.00224 × 28 = 0.0628 g." },
                { label: "Percentage", work: "%N = (0.0628/0.50) × 100 ≈ 12.6%." },
              ],
              answer: "≈ 12.6% N",
              insight: "Gas 'collected over water' is a wet-gas flag — always deduct aqueous tension BEFORE using PV = nRT. Forgetting it inflates the answer by a few percent, exactly enough to lose the mark.",
              commonMistakes: ["Using 22.4 L at 27 °C.", "Skipping the aqueous-tension correction.", "Using 14 for N₂ — the 28 already holds both atoms."],
            },
            {
              kind: "misc",
              level: "easy",
              question: "Mass of 11.2 L of CH₄ at STP?",
              answer: "8.0 g",
              explanation: "n = 11.2/22.4 = 0.5 mol × 16 = 8.0 g.",
            },
            {
              kind: "misc",
              level: "medium",
              question: "5.6 L of a gas weighs 11 g at STP. Molar mass?",
              answer: "44 g/mol",
              explanation: "n = 5.6/22.4 = 0.25 → M = 11/0.25 = 44 (CO₂ / N₂O / C₃H₈ — mass alone can't distinguish).",
            },
            {
              kind: "trap",
              items: [
                { trap: "'Room temperature ≈ standard', so use 22.4 L at 25 °C.", reality: "22.4 L is 0 °C only. At 25 °C, 1 atm the molar volume is ≈ 24.5 L. Use PV = nRT." },
                { trap: "Plugging °C into PV = nRT.", reality: "Kelvin only: T = t + 273. JEE picks temperatures (27 °C → 300 K) that hint at this." },
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
      intro: "Five experimental laws forced chemistry to accept atoms — and still appear directly as JEE assertion–reason and data-check questions.",
      subtopics: [
        {
          id: "mass-laws",
          title: "The Mass Laws",
          blocks: [
            {
              kind: "detailed",
              heading: "Conservation, definite & multiple proportions",
              paras: [
                "Conservation of mass (Lavoisier): in a closed system, Σ mass(reactants) = Σ mass(products) + mass(unreacted). Every mass-balance and POAC argument is this law in disguise.",
                "Definite proportions (Proust): a given compound always holds the same elements in the same mass ratio, whatever its source — water is 1:8 H:O from a tap or a comet.",
                "Multiple proportions (Dalton): when two elements form several compounds, the masses of one combining with a FIXED mass of the other are in small whole-number ratios. CO vs CO₂: with 12 g C, oxygen is 16 g vs 32 g → 1:2.",
              ],
            },
            {
              kind: "illustration",
              level: "basic",
              concept: "Conservation of mass",
              question: "15.0 g of A reacts with 20.0 g of B to give 28.5 g of C, leaving some B unreacted. Find the mass of unreacted B.",
              thinking: "Total mass in = total mass out. The 'unreacted B' is just the balancing term.",
              steps: [
                { label: "Balance masses", work: "15.0 + 20.0 = 28.5 + x." },
                { label: "Solve", work: "35.0 − 28.5 = x → x = 6.5 g." },
              ],
              answer: "6.5 g of B unreacted",
            },
            {
              kind: "illustration",
              level: "intermediate",
              tricky: true,
              concept: "Multiple proportions (data check)",
              question: "Two oxides of nitrogen: oxide P has 63.6% N, oxide Q has 46.7% N. Show the data obey the law of multiple proportions.",
              thinking: "Fix the mass of nitrogen at, say, the same amount in each, and compare the oxygen that combines with it. Simple whole-number ratio ⇒ law holds.",
              steps: [
                { label: "Oxide P — per gram N", work: "N:O = 63.6 : 36.4 → O per 1 g N = 36.4/63.6 = 0.572 g." },
                { label: "Oxide Q — per gram N", work: "N:O = 46.7 : 53.3 → O per 1 g N = 53.3/46.7 = 1.142 g." },
                { label: "Ratio of oxygens", work: "0.572 : 1.142 ≈ 1 : 2 — small whole numbers ✓." },
              ],
              answer: "Oxygen ratio ≈ 1 : 2 → law obeyed (these are NO and NO₂)",
              insight: "The move that makes multiple-proportion problems trivial: normalise to a FIXED mass of the common element (1 g of N here), then compare the other element. Ratios of raw percentages are meaningless.",
            },
            {
              kind: "misc",
              level: "easy",
              question: "Which Dalton postulate explains conservation of mass?",
              answer: "Atoms are neither created nor destroyed in a reaction",
              explanation: "Reactions only rearrange atoms; per-element atom counts — hence total mass — are fixed.",
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
                "Gay-Lussac: gases combine (and form) in simple whole-number ratios BY VOLUME at the same P, T. Berzelius tried 'equal volumes hold equal ATOMS', which breaks for H₂ + Cl₂ → 2HCl (one atom can't become two molecules). Avogadro fixed it: equal volumes hold equal MOLECULES, and elemental gases are diatomic. This single idea turns volume ratios into mole ratios — the engine of all eudiometry (Topic 8).",
              ],
              points: [
                "Volume ratio = mole ratio = molecule ratio (gases, same P·T).",
                "This is the only combination law stated in volumes; the other four are mass laws.",
              ],
              exams: ["JEE Main", "JEE Advanced"],
            },
            {
              kind: "illustration",
              level: "intermediate",
              tricky: true,
              concept: "Formula from combining volumes",
              question: "20 mL of N₂ combines with 60 mL of H₂ to give 40 mL of a gaseous compound (same P, T). Deduce its formula.",
              thinking: "Volumes are mole ratios. Compare reactant volumes consumed per volume of product to read the atom count in one product molecule.",
              steps: [
                { label: "Ratio of volumes", work: "N₂ : H₂ : product = 20 : 60 : 40 = 1 : 3 : 2." },
                { label: "Per molecule of product", work: "2 product molecules use 1 N₂ (=2 N) and 3 H₂ (=6 H) → each product molecule has 1 N and 3 H." },
                { label: "Formula", work: "NH₃." },
              ],
              answer: "NH₃",
              insight: "Divide reactant atoms by the number of product MOLECULES (not volumes). 2 N atoms shared over 2 product molecules = 1 N each. This is exactly how Avogadro cracked molecular formulas from volume data alone.",
            },
            {
              kind: "misc",
              level: "easy",
              question: "10 mL H₂ + 10 mL Cl₂ react. Final volume (same P, T)?",
              answer: "20 mL HCl",
              explanation: "H₂ + Cl₂ → 2HCl: 10 + 10 → 20. No contraction here — gas moles are conserved in this reaction.",
            },
            {
              kind: "trap",
              items: [
                { trap: "Applying volume ratios to liquids/solids in an equation.", reality: "Only GASES obey Avogadro's volume↔mole link. Liquid water in a combustion contributes ~zero volume." },
                { trap: "'Equal volumes → equal masses'.", reality: "Equal volumes → equal MOLECULES. Masses differ by the molar-mass ratio — that's how vapour density works." },
              ],
            },
          ],
        },
      ],
    },
    // ═════════════════════════════ TOPIC 5 ═════════════════════════════
    {
      id: "formulae",
      title: "Percentage Composition & Formula Determination",
      intro: "From a compound to its numbers (% composition) and back from numbers to the compound (empirical → molecular). The two-way street of analysis.",
      subtopics: [
        {
          id: "percent-composition",
          title: "Percentage Composition & Molar Mass from Data",
          blocks: [
            {
              kind: "detailed",
              heading: "Mass percent — the Z·A/M formula",
              paras: [
                "The mass percent of an element is a per-mole statement, independent of sample size: %element = (Z·A / M) × 100, where Z = number of atoms of that element per molecule, A = its atomic mass, and M = molar mass of the compound. For glucose C₆H₁₂O₆ (M = 180): %C = (6×12/180)×100 = 40%, %H = 6.67%, %O = 53.33%.",
                "Reversing it drives two JEE classics: (1) composition → atomic mass of an unknown metal (write the mass fraction symbolically and solve); (2) minimum molecular mass — since Z must be a whole number, M = (Z·A/%)×100 is smallest when Z = 1 for the given element.",
              ],
              points: [
                "%element = (Z·A/M) × 100  ⇒  M = (Z·A/%element) × 100.",
                "Urea NH₂CONH₂ (M = 60): %N ≈ 46.7% — highest-N common fertiliser.",
              ],
            },
            {
              kind: "illustration",
              level: "advanced",
              tricky: true,
              concept: "Minimum molecular mass",
              question: "A compound contains 16% sulfur and 24% oxygen by mass. What is the minimum possible molecular mass of the compound?",
              thinking: "Each element gives M = (Z·A/%)×100 with Z a positive integer. The smallest M consistent with BOTH must satisfy each element's series — take the larger minimum.",
              steps: [
                { label: "Sulfur series", work: "M = (Z_S × 32 / 16) × 100 = 200·Z_S → possible M = 200, 400, 600, … (Z_S = 1, 2, 3…)." },
                { label: "Oxygen series", work: "M = (Z_O × 16 / 24) × 100 = (200/3)·Z_O → 66.7, 133.3, 200, … (Z_O = 1, 2, 3…)." },
                { label: "Smallest common-feasible M", work: "S needs M ≥ 200 (its first term). At M = 200: Z_S = 1, Z_O = 3 — both integers ✓." },
              ],
              answer: "Minimum molecular mass = 200",
              insight: "The atom count Z can't be fractional, so each element forces M into an arithmetic series. The true minimum is the smallest value appearing in every element's series — here 200 (one S atom, three O atoms).",
              exams: ["JEE Advanced"],
            },
            {
              kind: "illustration",
              level: "advanced",
              tricky: true,
              concept: "Reverse: composition → atomic mass",
              question: "A metal M forms the oxide M₂O₃, which is 70% metal by mass. Find the atomic mass of M.",
              thinking: "Write the metal mass fraction of M₂O₃ in terms of M and set it to 0.70. One equation, one unknown.",
              steps: [
                { label: "Mass fraction of metal", work: "2M / (2M + 3×16) = 2M/(2M + 48) = 0.70." },
                { label: "Clear the fraction", work: "2M = 0.70(2M + 48) = 1.4M + 33.6." },
                { label: "Solve", work: "0.6M = 33.6 → M = 56." },
              ],
              answer: "M = 56 (iron)",
              fastMethod: "Metal : O mass ratio = 70 : 30 = 7 : 3. So 2M : 48 = 7 : 3 → 2M = 112 → M = 56.",
              insight: "Set up the fraction with the FORMULA's subscripts (2M and 3O), not '1 metal 3 oxygen'. The 2 on the metal is what students drop, halving M to 28.",
              commonMistakes: ["Using M instead of 2M in the numerator.", "Solving for 2M and reporting 112."],
            },
            {
              kind: "misc",
              level: "hard",
              question: "1.0 g of a divalent metal's chloride contains 0.355 g Cl. Atomic mass of the metal?",
              answer: "129",
              explanation: "MCl₂: n(Cl) = 0.355/35.5 = 0.01 → n(M) = 0.005; mass M = 0.645 g → A = 0.645/0.005 = 129.",
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
              heading: "The four-step algorithm",
              paras: [
                "Empirical formula = simplest whole-number atom ratio; molecular formula = (EF)ₙ with n = M(molecular)/M(empirical). Different compounds can share an EF (CH₂O: formaldehyde, acetic acid, glucose) — only M separates them. Combustion analysis feeds this: mass CO₂ → moles C; mass H₂O → moles H (×2!); oxygen by difference.",
              ],
            },
            {
              kind: "visual",
              title: "Empirical → Molecular Formula",
              visual: "empirical-formula-flow",
              caption: "The fixed five-step pipeline. The killer rule: never round a 1 : 1.33 ratio — multiply to clear it (×3 → 3 : 4).",
            },
            {
              kind: "illustration",
              level: "advanced",
              concept: "Two data sources → MF",
              question: "A compound is 40% C, 6.7% H, 53.3% O. 1.5 × 10²² of its molecules weigh 4.5 g. Find the molecular formula.",
              thinking: "Composition gives the EF; count + mass gives M. Combine: n = M/EF-mass.",
              steps: [
                { label: "Moles per 100 g", work: "C: 40/12 = 3.33 · H: 6.7/1 = 6.7 · O: 53.3/16 = 3.33." },
                { label: "Divide by smallest → EF", work: "3.33 : 6.7 : 3.33 = 1 : 2 : 1 → EF = CH₂O (mass 30)." },
                { label: "Find M", work: "n(sample) = 1.5×10²² / 6.022×10²³ = 0.0249 mol → M = 4.5/0.0249 ≈ 180." },
                { label: "EF → MF", work: "n = 180/30 = 6 → (CH₂O)₆ = C₆H₁₂O₆." },
              ],
              answer: "C₆H₁₂O₆ (glucose)",
              commonMistakes: ["Rounding 3.33 carelessly and getting C₂H₄O.", "Using the 4.5 g with the EF mass before computing M."],
            },
            {
              kind: "mistake",
              items: [
                { wrong: "Rounding a 1 : 1.5 mole ratio to 1 : 2.", right: "Multiply to clear: 1 : 1.5 = 2 : 3. Rounding fabricates a different compound." },
                { wrong: "From H₂O mass, moles of H = moles of H₂O.", right: "Each H₂O carries TWO hydrogens: n(H) = 2 × n(H₂O)." },
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
      intro: "A balanced equation is a mole-ratio machine. Masses, gas volumes, purities and sequential steps are all just conversions in and out of it.",
      subtopics: [
        {
          id: "mole-ratio",
          title: "The Stoichiometric Ratio",
          blocks: [
            {
              kind: "detailed",
              heading: "One equality runs everything",
              paras: [
                "For aA + bB → cC + dD, amounts obey n_A/a = n_B/b = n_C/c = n_D/d. Method: convert the GIVEN → moles, cross with the coefficient ratio, convert to the ASKED. Balance FIRST — an unbalanced ratio poisons everything downstream.",
              ],
            },
            {
              kind: "illustration",
              level: "intermediate",
              concept: "Volume → mass across a reaction",
              question: "Airbags inflate by 2NaN₃ → 2Na + 3N₂. What mass of NaN₃ (M = 65) makes 75.0 L of N₂ at STP?",
              thinking: "Volume → moles N₂ → coefficient ratio 2:3 → moles NaN₃ → mass.",
              steps: [
                { label: "Gas volume → moles", work: "n(N₂) = 75.0/22.4 ≈ 3.35 mol." },
                { label: "Cross the ratio", work: "n(NaN₃) = (2/3) × 3.35 ≈ 2.23 mol." },
                { label: "Moles → mass", work: "m = 2.23 × 65 ≈ 145 g." },
              ],
              answer: "≈ 145 g NaN₃",
              commonMistakes: ["Inverting the ratio — write it as (wanted coeff)/(given coeff).", "Using 28 anywhere; the volume already speaks in moles."],
            },
            {
              kind: "misc",
              level: "easy",
              question: "In N₂ + 3H₂ → 2NH₃, moles of NH₃ from 0.45 mol H₂ (excess N₂)?",
              answer: "0.30 mol",
              explanation: "n(NH₃) = 0.45 × (2/3) = 0.30 mol.",
            },
          ],
        },
        {
          id: "purity-mixtures",
          title: "Purity, Mixtures & Parallel Reactions",
          blocks: [
            {
              kind: "detailed",
              heading: "Real samples are dirty",
              paras: [
                "Purity: only the pure fraction reacts (10 g of 75% CaCO₃ = 7.5 g = 0.075 mol; the rest is spectator mass). Two-component mixtures: assign x and (total − x), write one equation from the reacting data, solve. Parallel reactions split a shared reactant between two products — set up simultaneous equations.",
              ],
              exams: ["JEE Main", "JEE Advanced"],
            },
            {
              kind: "illustration",
              level: "advanced",
              tricky: true,
              concept: "Parallel reactions (shared reactant)",
              question: "12 g of carbon burns in limited O₂, giving a 1:1 MOLAR mixture of CO and CO₂. How much O₂ (in grams) was consumed?",
              thinking: "Two reactions share the 1 mol of carbon. Let x mol → CO₂ and y mol → CO. Use the 1:1 product ratio, then sum the O₂ each path needs.",
              steps: [
                { label: "Total carbon", work: "n(C) = 12/12 = 1 mol, split as x (→CO₂) + y (→CO), so x + y = 1." },
                { label: "Apply 1:1 product ratio", work: "CO : CO₂ = 1 : 1 → x = y → x = y = 0.5 mol." },
                { label: "O₂ per path", work: "C + O₂ → CO₂ needs 1 O₂/C → 0.5 mol; 2C + O₂ → 2CO needs 0.5 O₂/C → 0.25 mol." },
                { label: "Total O₂", work: "0.5 + 0.25 = 0.75 mol → 0.75 × 32 = 24 g." },
              ],
              answer: "0.75 mol = 24 g of O₂",
              insight: "The '1:1' is by MOLES of product, not mass. And CO needs only HALF an O₂ per carbon — mixing up the two O₂-per-carbon rates is the classic slip here.",
              commonMistakes: ["Assuming all C → CO₂ first.", "Reading 1:1 as a mass ratio."],
            },
            {
              kind: "illustration",
              level: "advanced",
              concept: "Two-component mixture",
              question: "5.0 g of a NaOH + KOH mixture is neutralised by exactly 110 mmol of HCl. Find the mass of NaOH.",
              thinking: "Let NaOH = x g, KOH = (5 − x) g. Both are 1:1 with HCl. Sum their moles = 0.110.",
              steps: [
                { label: "Moles of each", work: "n(NaOH) = x/40, n(KOH) = (5 − x)/56.1." },
                { label: "Total = HCl moles", work: "x/40 + (5 − x)/56.1 = 0.110." },
                { label: "Solve", work: "0.025x + 0.0891 − 0.0178x = 0.110 → 0.0072x = 0.0209 → x ≈ 2.9 g." },
              ],
              answer: "≈ 2.9 g NaOH (and 2.1 g KOH)",
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
              question: "1 mol Fe + 1 mol S heated; only 0.7 mol FeS forms. Mass of unreacted Fe?",
              answer: "≈ 16.7 g",
              explanation: "Fe + S → FeS (1:1) → 0.3 mol Fe left = 0.3 × 55.8 ≈ 16.7 g. Incomplete reaction ≠ limiting-reagent problem.",
              exams: ["JEE Main", "JEE Advanced"],
            },
          ],
        },
      ],
    },
    // ═════════════════════════════ TOPIC 7 ═════════════════════════════
    {
      id: "limiting-poac",
      title: "Limiting Reagent & Percent Yield",
      intro: "Real mixtures are rarely stoichiometric and real reactions rarely hit 100%. Two tools handle both — then the next topic removes the need to balance equations at all.",
      subtopics: [
        {
          id: "limiting-reagent",
          title: "Finding the Limiting Reagent",
          blocks: [
            {
              kind: "detailed",
              heading: "The divide-by-coefficient test",
              paras: [
                "The limiting reagent (LR) runs out first; every theoretical yield is computed from it. Test: for each reactant compute n(available)/ν (its coefficient) — the SMALLEST value is the LR. Never compare raw moles or masses; coefficients weight the race. If all n/ν are equal, the mix is exactly stoichiometric (no LR — everything is consumed).",
              ],
            },
            {
              kind: "visual",
              title: "Limiting Reagent at a Glance",
              visual: "limiting-reagent-bars",
              caption: "Divide each available amount by its coefficient; the shortest bar limits, and every product amount flows from it.",
            },
            {
              kind: "illustration",
              level: "intermediate",
              concept: "n/ν test → product mass",
              question: "10.0 g Al reacts with 10.0 g Cl₂ by 2Al + 3Cl₂ → 2AlCl₃. Find the mass of AlCl₃ formed.",
              thinking: "Moles of each, divide by coefficients to find the LR, then product from the LR.",
              steps: [
                { label: "Moles", work: "Al = 10/27 = 0.370 · Cl₂ = 10/71 = 0.141." },
                { label: "n/ν test", work: "Al: 0.370/2 = 0.185 · Cl₂: 0.141/3 = 0.047 → Cl₂ limits." },
                { label: "Product from LR", work: "n(AlCl₃) = (2/3) × 0.141 = 0.094 mol." },
                { label: "Mass", work: "0.094 × 133.5 ≈ 12.5 g." },
              ],
              answer: "≈ 12.5 g AlCl₃",
              commonMistakes: ["Calling Al limiting because 10 g 'looks like less' — always the n/ν test.", "Computing the product from the excess reagent."],
            },
            {
              kind: "illustration",
              level: "advanced",
              tricky: true,
              concept: "Purity + LR together",
              question: "25.0 g of 80% pure CaC₂ reacts with 15.0 g of water: CaC₂ + 2H₂O → Ca(OH)₂ + C₂H₂. Find the volume of acetylene at STP.",
              thinking: "Two layered traps: cut to pure CaC₂ first, THEN run the LR test with the 2:1 water demand.",
              steps: [
                { label: "Purity cut", work: "Pure CaC₂ = 0.80 × 25 = 20 g → n = 20/64.1 = 0.312 mol." },
                { label: "Water moles", work: "n(H₂O) = 15/18 = 0.833 mol." },
                { label: "LR test (2:1)", work: "0.312 mol CaC₂ needs 2 × 0.312 = 0.624 mol water < 0.833 → CaC₂ limits." },
                { label: "Product → volume", work: "n(C₂H₂) = 0.312 mol → V = 0.312 × 22.4 ≈ 6.99 L." },
              ],
              answer: "≈ 6.99 L C₂H₂",
              insight: "Sequence matters: apply purity BEFORE the LR test. And test with the coefficient (2 water per CaC₂), not raw moles 0.312 vs 0.833 — raw comparison would wrongly call water limiting.",
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
                "% yield = (actual/theoretical) × 100, theoretical ALWAYS from the LR. Sequential yields multiply: an 80% step then a 60% step delivers 0.8 × 0.6 = 48% overall — JEE Advanced loves stacking these.",
              ],
              exams: ["JEE Main", "JEE Advanced"],
            },
            {
              kind: "visual",
              title: "The Percent-Yield Funnel",
              visual: "yield-funnel",
              caption: "Theoretical yield (from the LR) narrows to actual yield through side reactions, equilibrium and losses. Sequential steps multiply.",
            },
            {
              kind: "illustration",
              level: "advanced",
              concept: "Sequential yields multiply",
              question: "S → SO₂ at 90% yield, then 2SO₂ + O₂ → 2SO₃ at 70% yield. Mass of SO₃ from 32.1 g of sulfur?",
              thinking: "Chain the ACTUAL amounts through each step (S conserved 1:1 to SO₂ to SO₃).",
              steps: [
                { label: "Moles of S", work: "n(S) = 32.1/32.1 = 1.0 mol." },
                { label: "Step 1 (90%)", work: "actual SO₂ = 1.0 × 0.90 = 0.90 mol." },
                { label: "Step 2 (70%)", work: "actual SO₃ = 0.90 × 0.70 = 0.63 mol." },
                { label: "Mass", work: "0.63 × 80 ≈ 50.5 g." },
              ],
              answer: "≈ 50.5 g SO₃",
              fastMethod: "Overall factor 0.9 × 0.7 = 0.63 applied once to the 1:1 atom chain.",
              exams: ["JEE Advanced"],
            },
            {
              kind: "misc",
              level: "easy",
              question: "Theoretical yield 12.4 g, actual 10.8 g. Percent yield?",
              answer: "87.1%",
              explanation: "(10.8/12.4) × 100 = 87.1%.",
            },
          ],
        },
      ],
    },
    // ═════════════════════════════ TOPIC 8 · POAC ═════════════════════════════
    {
      id: "poac-sequential",
      title: "POAC & Sequential Reactions",
      intro: "The most powerful shortcut in stoichiometry: when only the start and end matter, conserve an ATOM and skip every balanced equation in between.",
      exams: ["JEE Main", "JEE Advanced"],
      subtopics: [
        {
          id: "poac-principle",
          title: "The Principle of Atomic Conservation",
          blocks: [
            {
              kind: "detailed",
              heading: "Atoms are never created or destroyed",
              paras: [
                "The Principle of Atomic Conservation (POAC) is the Law of Conservation of Mass applied atom-by-atom: the total number of atoms of any element is the same before and after a reaction — even if the reaction is unbalanced, multi-step, or an unknown black box. So for any chosen element X, (atoms of X per formula of reactant A) × moles of A = (atoms of X per formula of product P) × moles of P.",
                "Strategy: pick an element X that appears in exactly ONE known reactant and ONE known product, and whose amounts you can relate to what's asked. POAC then gives a single linear equation — no balancing, no intermediates. It is the engine behind all gravimetric analysis (precipitate the element into a weighable compound, count backwards).",
              ],
              points: [
                "a·n(A) = p·n(P), where a, p = atoms of X per formula unit.",
                "Choose X that links a known reactant to a known product.",
                "POAC is a special case of the mole-bridge (≡) method where the linking species is an ATOM.",
              ],
            },
            {
              kind: "visual",
              title: "POAC — Conserve One Element End-to-End",
              visual: "poac-bridge",
              caption: "Pick an element in exactly one reactant and one product; its atom count is conserved through any number of unknown steps.",
            },
            {
              kind: "illustration",
              level: "intermediate",
              concept: "POAC without balancing",
              question: "2.45 g of KClO₃ (M = 122.5) decomposes to KCl and O₂. Find the mass of O₂ — WITHOUT balancing the equation.",
              thinking: "Track oxygen only: 3 O per KClO₃, 2 O per O₂. Conserve O atoms end to end.",
              steps: [
                { label: "Moles of KClO₃", work: "n = 2.45/122.5 = 0.020 mol." },
                { label: "O-atom balance", work: "3 × n(KClO₃) = 2 × n(O₂) → 3 × 0.020 = 2 × n(O₂)." },
                { label: "Solve", work: "n(O₂) = 0.030 mol → m = 0.030 × 32 = 0.96 g." },
              ],
              answer: "0.96 g O₂",
              insight: "POAC turns any decomposition into one line — you never needed the balanced 2KClO₃ → 2KCl + 3O₂. Choose the element that links one reactant to one product; here oxygen does it cleanly.",
            },
            {
              kind: "illustration",
              level: "advanced",
              concept: "Gravimetric POAC (%element)",
              question: "A 1.50 g sample is processed so all its phosphorus ends up as 0.85 g of Mg₂P₂O₇ (M = 222.6). Find %P in the sample.",
              thinking: "P-atom conservation across the whole unknown chain: 2 P per Mg₂P₂O₇.",
              steps: [
                { label: "Moles of pyrophosphate", work: "n = 0.85/222.6 = 3.82 × 10⁻³ mol." },
                { label: "P-atom balance", work: "n(P) = 2 × 3.82 × 10⁻³ = 7.64 × 10⁻³ mol." },
                { label: "Mass and %", work: "m(P) = 7.64 × 10⁻³ × 31 = 0.237 g → %P = (0.237/1.50) × 100 = 15.8%." },
              ],
              answer: "15.8% P",
              exams: ["JEE Advanced"],
            },
            {
              kind: "misc",
              level: "challenge",
              question: "P₄S₃ + 8O₂ → P₄O₁₀ + 3SO₂. Mass of P₄S₃ (M = 220) for 28.4 g of P₄O₁₀ (M = 284)?",
              answer: "22.0 g",
              explanation: "P-balance: 4·n(P₄S₃) = 4·n(P₄O₁₀) → n = 0.1 mol → 22.0 g.",
              exams: ["JEE Advanced"],
            },
          ],
        },
        {
          id: "sequential",
          title: "Sequential Reactions & the Mole-Bridge",
          blocks: [
            {
              kind: "detailed",
              heading: "Three ways to chain reactions",
              paras: [
                "When a substance is made through a chain of reactions (A → B → C → …), three methods relate the ends. Method I: solve each reaction independently, feeding each product forward (safe but slow). Method II: add/subtract the balanced equations after scaling so the common linking species cancels — the resulting (possibly hypothetical) equation correctly relates the ends. Method III (the mole-bridge): write a single equivalence chain '1 mol of A ≡ … ≡ … mol of end product' by matching the shared species step by step.",
                "POAC is Method III specialised to a conserved ATOM. For a polymer or an element assay, the C-atom (or metal-atom) chain is usually the fastest bridge of all.",
              ],
              points: [
                "Common species cancels → hypothetical net equation relates the ends.",
                "Mole-bridge: 1 mol C₂H₆ ≡ 7/2 mol O₂ ≡ 7/3 mol KClO₃ (linked through O₂).",
              ],
            },
            {
              kind: "visual",
              title: "Linking Sequential Reactions",
              visual: "sequential-reactions",
              caption: "Scale each step so the shared species matches, then read moles straight across the chain. POAC is this method with an atom as the link.",
            },
            {
              kind: "illustration",
              level: "advanced",
              tricky: true,
              concept: "C-atom POAC through a polymer chain",
              question: "How many grams of CaC₂ are needed to produce 84 g of polyethene, (C₂H₄)ₙ? (chain: CaC₂ → C₂H₂ → C₂H₄ → (C₂H₄)ₙ)",
              thinking: "Every carbon that starts in CaC₂ ends in the polymer. Conserve C atoms directly: 2 C per CaC₂, 2n C per (C₂H₄)ₙ.",
              steps: [
                { label: "Mole-bridge on carbon", work: "1 mol (C₂H₄)ₙ ≡ n mol C₂H₄ ≡ n mol C₂H₂ ≡ n mol CaC₂ (2 C carried through each)." },
                { label: "Per-mass form", work: "n·CaC₂ (n×64 g) ⇄ (C₂H₄)ₙ (28n g)." },
                { label: "Scale to 84 g", work: "mass CaC₂ = (n×64)/(28n) × 84 = (64/28) × 84 = 192 g." },
              ],
              answer: "192 g CaC₂",
              insight: "The polymer's n vanishes — carbon count scales identically on both sides, so you never need to know the degree of polymerisation. That cancellation is exactly why atom-conservation beats step-by-step chaining here.",
              exams: ["JEE Advanced"],
            },
            {
              kind: "illustration",
              level: "advanced",
              tricky: true,
              concept: "Linking two unrelated reactions",
              question: "How many grams of Al must dissolve in excess dilute H₂SO₄ to produce exactly enough H₂ to react with all the O₂ from complete decomposition of 170 g of H₂O₂? (2Al + 3H₂SO₄ → Al₂(SO₄)₃ + 3H₂; 2H₂ + O₂ → 2H₂O; 2H₂O₂ → 2H₂O + O₂)",
              thinking: "Build one equivalence chain: H₂O₂ → O₂ → H₂ (needed) → Al. The linking species are O₂ then H₂.",
              steps: [
                { label: "Moles of H₂O₂", work: "n = 170/34 = 5 mol." },
                { label: "Chain the equivalences", work: "2 mol H₂O₂ ≡ 1 mol O₂ ≡ 2 mol H₂ ≡ 4/3 mol Al (from 2Al ≡ 3H₂)." },
                { label: "Scale to 5 mol H₂O₂", work: "mol Al = (4/3)/2 × 5 = 10/3 mol → mass = (10/3) × 27 = 90 g." },
              ],
              answer: "90 g Al",
              insight: "Three separate reactions collapse into one chain because each shares a species with the next (O₂, then H₂). You never balance a combined equation — you just carry the moles across each ≡ link.",
              exams: ["JEE Advanced"],
            },
            {
              kind: "misc",
              level: "challenge",
              question: "How many grams of FeS₂ must be roasted to give SO₂ that just decolourises 7.9 g KMnO₄? (2FeS₂ + 11/2 O₂ → Fe₂O₃ + 4SO₂; 2KMnO₄ + 5SO₂ + 2H₂O → K₂SO₄ + 2MnSO₄ + 2H₂SO₄)",
              answer: "≈ 7.5 g FeS₂",
              explanation: "Chain via SO₂: 2 mol KMnO₄ ≡ 5 mol SO₂ ≡ 5/2 mol FeS₂. n(KMnO₄) = 7.9/158 = 0.05 → FeS₂ = (5/2)/2 × 0.05 = 0.0625 mol → × 120 = 7.5 g.",
              exams: ["JEE Advanced"],
            },
          ],
        },
      ],
    },
    // ═════════════════════════════ TOPIC 9 (was 8) ═════════════════════════════
    {
      id: "eudiometry",
      title: "Eudiometry — Gas Phase Analysis",
      intro: "A graduated tube, a spark, and Avogadro's law: gas volumes read moles directly, so an explosion plus a few absorbers can crack a molecular formula.",
      exams: ["JEE Advanced"],
      subtopics: [
        {
          id: "eudiometer",
          title: "The Eudiometer & the Absorber Table",
          blocks: [
            {
              kind: "detailed",
              heading: "The protocol and its five governing rules",
              paras: [
                "A measured gas mixture over mercury is sparked with excess O₂. Since volume ∝ moles at constant P, T (Gay-Lussac + Avogadro), every combustion coefficient is also a VOLUME ratio. Cooling condenses water (liquid → ~0 volume); the contraction = V(initial gases) + V(O₂) − V(residual). Selective absorbers then read each component off.",
              ],
              points: [
                "① All volumes measured at the SAME P and T (so volume = mole ratio).",
                "② Amagat's law holds: V(mixture) = V₁ + V₂ + … (partial volumes of non-reacting gases add).",
                "③ Solids/liquids have negligible volume — H₂O(l) after cooling counts as ZERO (18 mL vs 22 400 mL for the gas, <0.1%).",
                "④ N₂ is treated as UNREACTIVE — its reaction (N₂ + O₂ → 2NO) needs ~3000 °C, which would shatter the glass tube; noble gases likewise survive combustion AND absorbers, so the leftover is usually N₂.",
                "⑤ Air is taken as 21% O₂ + 79% N₂ by volume (trace gases lumped into N₂). ΔV arises ONLY from a change in the number of moles of GASEOUS species.",
              ],
            },
            {
              kind: "visual",
              title: "Eudiometry — Apparatus & Absorbers",
              visual: "eudiometry-tube",
              caption: "The five standard absorbers are non-negotiable memory work: KOH→CO₂, pyrogallol→O₂, turpentine→O₃, ammoniacal Cu₂Cl₂→CO, conc. H₂SO₄/CaCl₂→H₂O.",
            },
            {
              kind: "trick",
              items: [
                { trick: "\"KOH Pyro Turps Copper Dry\"", recall: "KOH→CO₂ · pyrogallol→O₂ · turpentine→O₃ · ammoniacal Cu₂Cl₂→CO · H₂SO₄/CaCl₂→H₂O." },
              ],
            },
            {
              kind: "misc",
              level: "medium",
              question: "100 mL of ozonised oxygen (O₂ + O₃) through turpentine oil shrinks to 80 mL. % O₃ by volume?",
              answer: "20%",
              explanation: "Turpentine removes only O₃ → V(O₃) = 20 mL of the original 100 mL.",
            },
          ],
        },
        {
          id: "hydrocarbon-combustion",
          title: "Hydrocarbon Combustion",
          blocks: [
            {
              kind: "detailed",
              heading: "The master equation",
              paras: [
                "CₓH_y + (x + y/4) O₂ → x CO₂ + (y/2) H₂O. Per volume of fuel: O₂ consumed = (x + y/4), CO₂ formed = x. Two readings give two equations in x and y. Oxygen-bearing fuels CₓH_yO_z subtract z/2 from the O₂ demand.",
              ],
            },
            {
              kind: "illustration",
              level: "advanced",
              concept: "Formula from volumes",
              question: "15 mL of a hydrocarbon needs 75 mL of O₂ for complete combustion and yields 45 mL of CO₂. Find the formula.",
              thinking: "x from the CO₂ ratio; (x + y/4) from the O₂ ratio; solve for y.",
              steps: [
                { label: "Find x", work: "x = V(CO₂)/V(fuel) = 45/15 = 3." },
                { label: "Find x + y/4", work: "(x + y/4) = V(O₂)/V(fuel) = 75/15 = 5." },
                { label: "Solve for y", work: "3 + y/4 = 5 → y/4 = 2 → y = 8." },
                { label: "Formula", work: "C₃H₈ (propane)." },
              ],
              answer: "C₃H₈",
            },
            {
              kind: "illustration",
              level: "advanced",
              tricky: true,
              concept: "Mixture + absorber bookkeeping",
              question: "25 mL of a CO + C₂H₄ mixture is exploded with 75 mL of O₂. After cooling, the total volume is 65 mL. Find the volume of CO.",
              thinking: "Let CO = a, C₂H₄ = b. Track O₂ consumed and CO₂ produced; water condenses. Build the residual-volume equation.",
              steps: [
                { label: "Composition", work: "a + b = 25." },
                { label: "Per-gas reactions", work: "CO + ½O₂ → CO₂ (O₂: 0.5a, CO₂: a); C₂H₄ + 3O₂ → 2CO₂ + 2H₂O(l) (O₂: 3b, CO₂: 2b)." },
                { label: "Residual volume", work: "(75 − 0.5a − 3b) + (a + 2b) = 65 → 75 + 0.5a − b = 65 → b − 0.5a = 10." },
                { label: "Solve", work: "Sub b = 25 − a: 25 − 1.5a = 10 → a = 10 mL." },
              ],
              answer: "V(CO) = 10 mL (V(C₂H₄) = 15 mL)",
              insight: "Residual = (leftover O₂) + (all CO₂), because CO₂ from BOTH fuels stays until KOH and water is already gone. Adding water volume, or forgetting the excess O₂, are the two ways this problem is failed.",
              commonMistakes: ["Counting condensed water as volume.", "Forgetting CO₂ from C₂H₄ in the residue."],
            },
            {
              kind: "misc",
              level: "hard",
              question: "10 mL of C₂H₂ burns in excess O₂. Volume contraction on cooling?",
              answer: "15 mL",
              explanation: "C₂H₂ + 2.5O₂ → 2CO₂ + H₂O(l): contraction/vol = (1 + 2.5) − 2 = 1.5 → 15 mL.",
            },
          ],
        },
        {
          id: "mixture-analysis",
          title: "Mixtures, Multi-Explosion & Formula from Dissociation",
          blocks: [
            {
              kind: "detailed",
              heading: "Variables + volume bookkeeping",
              paras: [
                "For an unknown mixture, assign a volume variable to each component and write one linear equation per observation: total volume, contraction after firing, and each absorber reading. Inert gases (N₂, He) pass through everything and appear only in the total. Reactions producing/consuming gas can also be run in reverse — CO₂ over red-hot charcoal (CO₂ + C → 2CO) and O₂ under silent electric discharge (3O₂ → 2O₃) both expand or contract predictably.",
              ],
            },
            {
              kind: "illustration",
              level: "advanced",
              tricky: true,
              concept: "Two-stage explosion (limiting-reagent detective work)",
              question: "20 mL of an N₂ + H₂ mixture is mixed with 8 mL of O₂ and fired; the final volume becomes 10 mL. Determine the initial and final composition.",
              thinking: "First TEST whether O₂ is limiting. If it were, the contraction would be fixed; compare with the observed contraction of (20+8) − 10 = 18 mL. The mismatch reveals which gas actually limits.",
              steps: [
                { label: "Assume O₂ limiting", work: "H₂ + ½O₂ → H₂O(l): 8 mL O₂ would burn 16 mL H₂. Contraction = (16 + 8) − 0 = 24 mL." },
                { label: "Compare with data", work: "Observed contraction = (20 + 8) − 10 = 18 mL ≠ 24 → O₂ is NOT limiting; H₂ is." },
                { label: "Let H₂ = x, all of it burns", work: "consumes x mL H₂ + x/2 mL O₂ → water (0 vol). Contraction = (x + x/2) − 0 = 18 ⇒ 3x/2 = 18 ⇒ x = 12." },
                { label: "Compositions", work: "Initial: H₂ = 12, N₂ = 20 − 12 = 8 mL. Final: N₂ = 8, O₂ left = 8 − 6 = 2 → total 10 mL ✓." },
              ],
              answer: "Initial H₂ = 12 mL, N₂ = 8 mL; final N₂ = 8 mL, O₂ = 2 mL",
              insight: "Never assume which reactant limits in eudiometry — TEST it. The contraction under the 'O₂-limiting' assumption (24 mL) disagreeing with the observed 18 mL is the tell that H₂ ran out first. This limiting-reagent-by-contradiction is the signature of the hardest gas-analysis problems.",
              exams: ["JEE Advanced"],
            },
            {
              kind: "illustration",
              level: "advanced",
              tricky: true,
              concept: "Molecular formula of a compound by dissociation",
              question: "50 mL of ammonia is sparked to dissociate into N₂ and H₂; the volume becomes 97 mL. Passing through water leaves 94 mL of dry gas. Then 100 mL O₂ is added and fired; the final volume is 88.25 mL. Find the formula NₓHᵧ.",
              thinking: "Unreacted NH₃ is absorbed by water; the volume rise gives how much dissociated. Then the H₂ combustion contraction fixes y, and the N-balance fixes x.",
              steps: [
                { label: "How much dissociated", work: "unreacted NₓHᵧ = 97 − 94 = 3 mL → reacted = 50 − 3 = 47 mL." },
                { label: "Products from 47 mL", work: "NₓHᵧ → (x/2)N₂ + (y/2)H₂; total = 47(x+y)/2 = 94 ⇒ x + y = 4." },
                { label: "Burn the H₂", work: "H₂ = 47y/2 mL; H₂ + ½O₂ → H₂O(l), contraction = (3/2)(47y/2) = (94+100) − 88.25 ⇒ y = 3." },
                { label: "Solve", work: "x + y = 4, y = 3 ⇒ x = 1 → NH₃." },
              ],
              answer: "NH₃ (x = 1, y = 3)",
              insight: "Water absorbs only the leftover NH₃ (polar), not N₂/H₂ — that single step separates 'undissociated' from 'products'. The formula then falls out of two conservation equations (volume of products, and the H₂ combustion contraction).",
              exams: ["JEE Advanced"],
            },
            {
              kind: "misc",
              level: "hard",
              question: "40 mL of a CO + C₂H₂ mixture is fired with excess air; passing through KOH gives 65 mL contraction (= total CO₂). Find the CO volume.",
              answer: "CO = 15 mL (C₂H₂ = 25 mL)",
              explanation: "x + y = 40; CO₂ = x + 2y = 65 → y = 25, x = 15. KOH contraction equals total CO₂ from both gases.",
              exams: ["JEE Advanced"],
            },
          ],
        },
      ],
    },
    // ═════════════════════════════ TOPIC 9 ═════════════════════════════
    {
      id: "concentration",
      title: "Concentration Terms & Solution Stoichiometry",
      intro: "A solution is a homogeneous mixture; the component in larger mole amount is the solvent. There are ten ways to state 'how much is dissolved' — and one golden method (fix a basis, convert to masses) that interconverts them all.",
      subtopics: [
        {
          id: "toolbox",
          title: "The Concentration Toolbox — All Ten Terms",
          blocks: [
            {
              kind: "detailed",
              heading: "Solution, solute, solvent",
              paras: [
                "A solution is a homogeneous mixture of two or more pure substances. The solute dissolves; the solvent does the dissolving. When both are mutually soluble (water + ethanol), the one present in the greater MOLE amount is the solvent, and the solution's physical state is the solvent's state. We study mainly aqueous binary solutions.",
                "Concentration (strength) is the amount of solute in a given amount of solution. Depending on the units chosen for 'amount', there are many concentration terms — the ten that matter for JEE are below.",
              ],
              points: [
                "① Percentage (w/w, w/v, v/w, v/v)  ② ppm / ppb / ppt  ③ strength g/L  ④ Molarity M  ⑤ Formality F  ⑥ Normality N",
                "⑦ Molality m  ⑧ Mole fraction X  ⑨ Volume strength of H₂O₂  ⑩ Labelling of oleum.",
                "Temperature test: volume-based terms (M, N, F, %w/v, g/L) DRIFT with temperature (solutions expand); mass/mole-based terms (m, X, %w/w, ppm) are temperature-INDEPENDENT.",
              ],
            },
            {
              kind: "visual",
              title: "Concentration Terms — Master Map",
              visual: "concentration-terms-map",
              caption: "Every term is either mass/mole-based (temperature-independent) or volume-based (temperature-dependent). Density is the one bridge between the two families.",
            },
            {
              kind: "detailed",
              heading: "Percentage, ppm and g/L",
              paras: [
                "Percentage = amount of solute per 100 amounts of solution. Four flavours: %w/w (g solute / 100 g soln), %w/v (g / 100 mL soln), %v/w (mL / 100 g), %v/v (mL / 100 mL). ppm = g solute per 10⁶ g solution (ppb → 10⁹, ppt → 10¹²), used for very dilute solutions like trace ions in water. Strength g/L = grams of solute per litre of solution.",
              ],
              points: [
                "For a dilute aqueous solution (d ≈ 1 g/mL), 1 ppm ≈ 1 mg/L.",
                "g of solute = (mass or volume of solution) × (percentage / 100) — the workhorse for every %-problem.",
              ],
            },
            {
              kind: "illustration",
              level: "intermediate",
              concept: "% → mass of solute (with density)",
              question: "How many grams of solute are in 300 mL of a 10% (w/w) HCl solution of density 4/3 g/mL?",
              thinking: "%w/w needs the solution MASS. Convert the 300 mL to grams via density first, then take 10%.",
              steps: [
                { label: "Volume → mass of solution", work: "m(soln) = 300 × 4/3 = 400 g." },
                { label: "Apply the percentage", work: "m(solute) = 400 × 10/100 = 40 g." },
              ],
              answer: "40 g of HCl",
              insight: "%w/v would multiply the 300 mL directly; %w/w must go through the solution MASS. Reading w/w as w/v (or vice-versa) is the single commonest concentration slip.",
            },
            {
              kind: "misc",
              level: "medium",
              question: "Sea water contains 40 ppm calcium (as the only Ca source, Ca(NO₃)₂). Mass of Ca(NO₃)₂ in 50 L of it (d ≈ 1 g/mL)?",
              answer: "8.2 g",
              explanation: "50 L = 50 000 g. m(Ca) = (40/10⁶) × 50 000 = 2 g. Ca(NO₃)₂/Ca = 164/40 → m = (164/40) × 2 = 8.2 g.",
              exams: ["JEE Main", "JEE Advanced"],
            },
            {
              kind: "detailed",
              heading: "Molarity — definition and its derivation",
              paras: [
                "Molarity M = moles of solute per LITRE of solution. Take w g of a solute of molar mass M′ dissolved to give V mL of solution. Moles of solute = w/M′, and this occupies V/1000 litre, so M = (w/M′)/(V/1000) = (w × 1000)/(M′ × V). Two immediate corollaries drop out: moles of solute n = M·V/1000 (V in mL), and strength g/L = M × M′.",
                "Formality F is the same idea for ionic solids (which have no molecules): it counts g-formula-units per litre. For ionic compounds 'molarity' is really formality — numerically identical, just the honest name.",
              ],
              points: [
                "M = (w × 1000)/(M′ × V)   ·   n(solute) = M·V/1000   ·   strength (g/L) = M × M′.",
                "Named molarities: decimolar = M/10, semimolar = M/2, centimolar = M/100.",
                "Ion molarity multiplies by the subscript: 0.1 M CaCl₂ is 0.2 M in Cl⁻; 3 M Na₂S₂O₃ is 6 M in Na⁺.",
              ],
            },
            {
              kind: "illustration",
              level: "intermediate",
              concept: "%w/w + density → Molarity",
              question: "Calculate the molarity of a 10% (w/w) NaOH solution of specific gravity 1.10.",
              thinking: "Take a convenient basis of 100 g of solution; find moles of NaOH and the volume from density.",
              steps: [
                { label: "Basis 100 g solution", work: "NaOH = 10 g = 10/40 = 0.25 mol." },
                { label: "Volume from density", work: "V = 100/1.10 = 90.9 mL = 0.0909 L." },
                { label: "Molarity", work: "M = 0.25 / 0.0909 = 2.75 M." },
              ],
              answer: "2.75 M",
              fastMethod: "M = 10·(%w/w)·d / M′ = 10 × 10 × 1.10 / 40 = 2.75 M.",
            },
            {
              kind: "illustration",
              level: "advanced",
              tricky: true,
              concept: "Equal ion concentration (design problem)",
              question: "How many grams of CaCl₂ must be dissolved to get 200 mL of a solution having the same molar concentration of Cl⁻ as 400 mL of AlCl₃ solution containing 2.67 g of solute per litre?",
              thinking: "Match [Cl⁻] from both salts. CaCl₂ gives 2 Cl⁻, AlCl₃ gives 3 Cl⁻. Build each [Cl⁻] and equate.",
              steps: [
                { label: "[Cl⁻] from AlCl₃", work: "AlCl₃ = 2.67 g/L → M(AlCl₃) = 2.67/133.5 mol/L; [Cl⁻] = 3 × 2.67/133.5." },
                { label: "[Cl⁻] from CaCl₂", work: "with w g in 200 mL: M(CaCl₂) = (w/111)×(1000/200); [Cl⁻] = 2 × that." },
                { label: "Equate & solve", work: "(w/111)(1000/200)(2) = (2.67/133.5)(3) → w = 0.666 g." },
              ],
              answer: "≈ 0.666 g CaCl₂",
              insight: "The catch is the stoichiometric multiplier on the ANION — 2 for CaCl₂, 3 for AlCl₃. Comparing salt molarities directly (ignoring the Cl⁻ count) is the trap the whole problem is built around.",
              exams: ["JEE Advanced"],
            },
          ],
        },
        {
          id: "normality",
          title: "Normality, Equivalents & the n-factor",
          exams: ["JEE Main", "JEE Advanced"],
          blocks: [
            {
              kind: "detailed",
              heading: "Counting reactive capacity, not just moles",
              paras: [
                "Normality N = number of g-equivalents of solute per litre of solution. A gram-equivalent packages the reactive capacity of a species: g-equivalents n_eq = w / E, where the equivalent weight E = (molar mass M) / (n-factor). The n-factor is the reactive valency — how many H⁺, OH⁻, electrons or unit charges one formula unit exchanges.",
                "Because n_eq = w/E = w/(M/n-factor) = (w/M) × n-factor = moles × n-factor, everything collapses to two clean bridges: n_eq = moles × n-factor and N = M × n-factor. Normality is just molarity scaled by reactive capacity — which is why titrations balance so neatly as N₁V₁ = N₂V₂.",
              ],
              points: [
                "E = M / (n-factor)  ·  n_eq = w/E = moles × n-factor  ·  N = M × n-factor.",
                "n-factor: element → valency · ion → |charge| · acid → basicity · base → acidity · salt → (metal atoms)×valency · redox agent → change in oxidation number.",
              ],
            },
            {
              kind: "visual",
              title: "n-factor, Equivalent Weight & Normality",
              visual: "normality-nfactor",
              caption: "The n-factor is the bridge from moles to equivalents. E = M/n-factor and N = M × n-factor are the only two relations you need.",
            },
            {
              kind: "illustration",
              level: "intermediate",
              concept: "Normality via n-factor",
              question: "Calculate the normality of a 0.49% (w/v) H₃PO₄ solution.",
              thinking: "%w/v → grams per litre → moles per litre (M) → multiply by the n-factor (basicity 3).",
              steps: [
                { label: "Grams per litre", work: "0.49% w/v = 0.49 g/100 mL = 4.9 g/L." },
                { label: "Molarity", work: "M = 4.9/98 = 0.05 M." },
                { label: "Apply n-factor", work: "H₃PO₄ basicity = 3 → N = M × 3 = 0.05 × 3 = 0.15 N." },
              ],
              answer: "0.15 N",
              commonMistakes: ["Using n-factor 1 (forgetting phosphoric acid is tribasic).", "Stopping at M = 0.05 and reporting it as N."],
            },
            {
              kind: "illustration",
              level: "advanced",
              tricky: true,
              concept: "Equivalents ⇒ mass",
              question: "How many grams of solute are present in 5 L of 0.01 N H₂SO₄?",
              thinking: "Equivalents = N × V, then mass = equivalents × equivalent weight.",
              steps: [
                { label: "g-equivalents", work: "n_eq = N × V = 0.01 × 5 = 0.05." },
                { label: "Equivalent weight", work: "E(H₂SO₄) = M/n-factor = 98/2 = 49." },
                { label: "Mass", work: "w = n_eq × E = 0.05 × 49 = 2.45 g." },
              ],
              answer: "2.45 g H₂SO₄",
              insight: "Going through equivalents (not moles) is faster in acid–base/redox work because it absorbs the stoichiometry: 0.05 equivalents of ANY diprotic acid is the same 0.05 equivalents of base — no balanced equation needed.",
              exams: ["JEE Advanced"],
            },
          ],
        },
        {
          id: "interconversions",
          title: "Molality, Mole Fraction & the Density Bridge",
          blocks: [
            {
              kind: "detailed",
              heading: "Molality and mole fraction — the temperature-proof pair",
              paras: [
                "Molality m = moles of solute per KILOGRAM of SOLVENT (not solution). Mole fraction Xᵢ = nᵢ / Σn; for a binary solution X_solute + X_solvent = 1. Both use only masses/moles, so — unlike molarity — they never change with temperature. That makes them the natural variables for colligative properties later.",
                "Density is the ONLY bridge between the volume-based family (M, N, %w/v) and the mass-based family (m, X, %w/w). Golden method for any interconversion: fix a basis (1 L solution for M/N, or 1 kg solvent for m, or 1 mol total for X), convert every quantity to a MASS, then re-divide into the target definition.",
              ],
              points: [
                "m = moles solute / kg solvent  ·  X_i = n_i/Σn  ·  X_solute + X_solvent = 1.",
                "For water solvent, X → m shortcut: m = 1000·X_solute / (18·X_solvent).",
              ],
              exams: ["JEE Main", "JEE Advanced"],
            },
            {
              kind: "visual",
              title: "Concentration Interconversion Map",
              visual: "concentration-map",
              caption: "Fix a basis, cross the density bridge, re-divide. Memorise the METHOD, not a dozen formulas.",
            },
            {
              kind: "illustration",
              level: "advanced",
              tricky: true,
              concept: "DERIVATION: the M ↔ m ↔ density relation",
              question: "Derive a relation between molarity M, molality m and density d for a solution whose solute has molar mass M′.",
              thinking: "Fix a basis of 1 litre of solution (natural for molarity), find the mass of solvent, then apply the molality definition.",
              steps: [
                { label: "Basis: 1 L solution", work: "It holds M moles of solute (definition of molarity) = M·M′ grams of solute." },
                { label: "Mass of solution", work: "1 L weighs 1000d grams (d in g/mL)." },
                { label: "Mass of solvent", work: "solvent = (1000d − M·M′) grams = (1000d − M·M′)/1000 kg." },
                { label: "Apply molality", work: "m = M / [(1000d − M·M′)/1000] = 1000M / (1000d − M·M′)." },
                { label: "Invert to the clean form", work: "1/m = (1000d − M·M′)/(1000M) = d/M − M′/1000." },
              ],
              answer: "1/m = d/M − M′/1000   (equivalently m = 1000M/(1000d − M·M′))",
              insight: "The elegant form 1/m = d/M − M′/1000 shows M ≈ m only when M′/1000 is negligible beside d/M — i.e. for very dilute aqueous solutions. That single line justifies the common 'dilute ⇒ M ≈ m' approximation used everywhere in colligative properties.",
              exams: ["JEE Advanced"],
            },
            {
              kind: "illustration",
              level: "intermediate",
              concept: "%w/w → molality",
              question: "Calculate the molality of a 20% (w/v) H₂SO₄ solution of density 1.2 g/mL.",
              thinking: "%w/v gives grams per 100 mL; density gives the solution mass; subtract solute to get solvent, then molality.",
              steps: [
                { label: "Basis 100 mL solution", work: "H₂SO₄ = 20 g = 20/98 mol; solution mass = 100 × 1.2 = 120 g." },
                { label: "Solvent mass", work: "120 − 20 = 100 g = 0.100 kg." },
                { label: "Molality", work: "m = (20/98) / 0.100 = 100/49 ≈ 2.04 m." },
              ],
              answer: "≈ 2.04 m",
            },
            {
              kind: "illustration",
              level: "advanced",
              tricky: true,
              concept: "Molality of ions from density",
              question: "The density of a 3 M Na₂S₂O₃ solution is 1.25 g/mL. Find the molal concentration of Na⁺ and S₂O₃²⁻ ions.",
              thinking: "Basis 1 L: get solute mass, then solvent mass, then molality of the salt; multiply by ion subscripts.",
              steps: [
                { label: "Basis 1 L solution", work: "solution mass = 1250 g; Na₂S₂O₃ = 3 mol = 3 × 158 = 474 g." },
                { label: "Solvent mass", work: "1250 − 474 = 776 g = 0.776 kg." },
                { label: "Molality of salt", work: "m(salt) = 3 / 0.776 = 3000/776 m." },
                { label: "Ion molalities", work: "Na⁺: 2 × 3000/776 = 6000/776 m ≈ 7.73 m; S₂O₃²⁻: 3000/776 ≈ 3.87 m." },
              ],
              answer: "Na⁺ ≈ 7.73 m, S₂O₃²⁻ ≈ 3.87 m",
              insight: "The ion subscript multiplies concentration in EVERY term — molarity, molality or normality alike. Na₂S₂O₃ → 2 Na⁺ + 1 S₂O₃²⁻, so [Na⁺] is always twice the salt value.",
              exams: ["JEE Advanced"],
            },
            {
              kind: "illustration",
              level: "advanced",
              tricky: true,
              concept: "Multi-solute mole fraction",
              question: "An aqueous solution has glucose at 0.5 M and urea at molality 0.8 m; density 1.4 g/mL. Find the mole fraction of water.",
              thinking: "Basis 1 L: glucose moles from molarity; urea moles need the solvent mass (which depends on urea itself) — set up water mass as an unknown and solve.",
              steps: [
                { label: "Basis 1 L", work: "solution = 1400 g; glucose = 0.5 mol = 90 g; let urea = x mol = 60x g." },
                { label: "Water mass", work: "water = 1400 − 90 − 60x = (1310 − 60x) g." },
                { label: "Use urea molality", work: "0.8 = x / [(1310 − 60x)/1000] → x = 0.8(1310 − 60x)/1000 → x = 1.0 mol." },
                { label: "Mole fraction of water", work: "n(water) = 1250/18 = 69.4; X_water = 69.4 / (0.5 + 1.0 + 69.4) ≈ 0.979." },
              ],
              answer: "X(water) ≈ 0.98",
              insight: "Urea's molality is defined per kg of SOLVENT, but the solvent mass itself contains the unknown urea mass — so x appears on both sides. Setting up water as (total − glucose − urea) and solving the linear equation is the whole trick.",
              exams: ["JEE Advanced"],
            },
            {
              kind: "illustration",
              level: "advanced",
              tricky: true,
              concept: "Molality → molarity (basis trap)",
              question: "A 3.0 m aqueous KOH solution (M₂ = 56.1) has density 1.15 g/mL. Find its molarity.",
              thinking: "Molality fixes a basis of 1 kg SOLVENT. Build the total solution mass, get its volume from density, then M = moles/volume.",
              steps: [
                { label: "Basis: 1 kg water", work: "It contains 3.0 mol KOH (definition of 3.0 m)." },
                { label: "Total solution mass", work: "solute = 3 × 56.1 = 168.3 g → solution = 1000 + 168.3 = 1168.3 g." },
                { label: "Volume from density", work: "V = 1168.3 / 1.15 ≈ 1016 mL = 1.016 L." },
                { label: "Molarity", work: "M = 3.0 / 1.016 ≈ 2.95 M." },
              ],
              answer: "≈ 2.95 M",
              insight: "The trap is writing M = 3/1: '1 kg water ≈ 1 L'. But the SOLUTION volume includes the dissolved solute AND is set by the solution's density, not water's. That's why M < m here.",
              commonMistakes: ["Dividing 3 mol by 1 L.", "Using water's density instead of the solution's."],
            },
            {
              kind: "illustration",
              level: "intermediate",
              concept: "%w/w → molarity",
              question: "A 15% (w/w) H₂SO₄ solution has density 1.10 g/mL. Find its molarity.",
              thinking: "Basis 1 L of solution → total mass from density → 15% is acid → moles → M.",
              steps: [
                { label: "Basis: 1 L solution", work: "mass = 1000 × 1.10 = 1100 g." },
                { label: "Solute mass", work: "0.15 × 1100 = 165 g." },
                { label: "Moles → M", work: "n = 165/98 = 1.68 mol in 1 L → 1.68 M." },
              ],
              answer: "≈ 1.68 M",
              fastMethod: "M = 10·(%w/w)·d / M₂ = 10 × 15 × 1.10 / 98 ≈ 1.68 M.",
              exams: ["JEE Main", "JEE Advanced"],
            },
          ],
        },
        {
          id: "titration",
          title: "Dilution, Mixing & Titration",
          blocks: [
            {
              kind: "detailed",
              heading: "Moles survive dilution; equivalents match at the end point",
              paras: [
                "Dilution adds solvent but not solute, so moles are conserved: (M₁V₁)/1000 = (M₂V₂)/1000 ⇒ M₁V₁ = M₂V₂ (the dilution formula, V in mL). Mixing two solutions of the SAME solute conserves total moles: (V_f M_f)/1000 = (V₁M₁)/1000 + (V₂M₂)/1000 ⇒ V_f M_f = V₁M₁ + V₂M₂.",
                "⚠ These VOLUME formulas hold for MOLARITY only. Molality is defined per mass of solvent, so a molality dilution must be redone through masses (moles of solute unchanged, solvent mass increased) — the tempting 'W₁m₁ = W₂m₂' is WRONG. In acid–base/redox titration, equivalents balance at the end point: n₁M₁V₁ = n₂M₂V₂ (n = valence factor), or simply N₁V₁ = N₂V₂.",
              ],
              points: [
                "Dilution: M₁V₁ = M₂V₂ (molarity, mL).  Mixing same solute: V_f M_f = V₁M₁ + V₂M₂.",
                "Volume-ratio mixing: to hit target M_f, (V₁ + V₂)M_f = V₁M₁ + V₂M₂ gives V₁ : V₂.",
                "Molality dilution ≠ V₁m₁ = V₂m₂ — recompute via masses.",
              ],
            },
            {
              kind: "illustration",
              level: "advanced",
              tricky: true,
              concept: "Molality dilution (the volume-formula trap)",
              question: "200 g of a 2 m aqueous urea solution (M′ = 60) is diluted to 500 g. Find the molality of the diluted solution.",
              thinking: "Do NOT use V₁M₁=V₂M₂ (that's molarity). Find the moles of urea actually present in 200 g, then the new solvent mass after dilution.",
              steps: [
                { label: "Composition of 2 m solution", work: "1 kg solvent + 2 mol urea = 1000 + 120 = 1120 g per '2 m batch'." },
                { label: "Urea in 200 g", work: "urea mass = (120/1120) × 200 = 21.43 g → 21.43/60 = 0.357 mol." },
                { label: "New solvent mass", work: "diluted to 500 g total → solvent = 500 − 21.43 = 478.6 g = 0.4786 kg." },
                { label: "New molality", work: "m = 0.357 / 0.4786 ≈ 0.746 m." },
              ],
              answer: "≈ 0.746 m",
              insight: "The whole problem exists to punish 'W₁m₁ = W₂m₂' (which would give 200×2 = 500×m₂ → 0.8 m, WRONG). Molality's denominator is SOLVENT mass, which does not scale linearly with total mass — you must track moles of solute and solvent mass separately.",
              exams: ["JEE Advanced"],
            },
            {
              kind: "illustration",
              level: "intermediate",
              concept: "Volume ratio for a target molarity",
              question: "In what volume ratio should 2 M NaOH and 5 M NaOH be mixed to get 4 M NaOH?",
              thinking: "Apply V_f M_f = V₁M₁ + V₂M₂ with V_f = V₁ + V₂.",
              steps: [
                { label: "Mixing equation", work: "(V₁ + V₂) × 4 = V₁ × 2 + V₂ × 5." },
                { label: "Expand", work: "4V₁ + 4V₂ = 2V₁ + 5V₂ → 2V₁ = V₂." },
                { label: "Ratio", work: "V₁ : V₂ = 1 : 2." },
              ],
              answer: "V₁ : V₂ = 1 : 2 (two parts of the 5 M per one part of the 2 M)",
            },
            {
              kind: "visual",
              title: "Titration & the Equivalence Relation",
              visual: "titration-setup",
              caption: "At the end point equivalents match. Use mL with M directly to get millimoles — no ÷1000.",
            },
            {
              kind: "illustration",
              level: "intermediate",
              concept: "Valence-factor titration",
              question: "What volume of 0.5 M NaOH neutralises 50 mL of 0.2 M H₂SO₄?",
              thinking: "H₂SO₄ has 2 replaceable H⁺ (n = 2); NaOH n = 1. Match equivalents.",
              steps: [
                { label: "Equivalence relation", work: "n(acid)·M(acid)·V(acid) = n(base)·M(base)·V(base)." },
                { label: "Substitute", work: "2 × 0.2 × 50 = 1 × 0.5 × V." },
                { label: "Solve", work: "20 = 0.5V → V = 40 mL." },
              ],
              answer: "40 mL of NaOH",
              commonMistakes: ["Dropping the valence factor 2 for H₂SO₄ (gives 100 mL).", "Mixing normality and molarity mid-equation."],
            },
            {
              kind: "illustration",
              level: "advanced",
              tricky: true,
              concept: "Solution reaction with LR",
              question: "10.0 g of CaCO₃ is added to 250 mL of 1.0 M HCl. Find the molarity of CaCl₂ formed (volume unchanged).",
              thinking: "It's a limiting-reagent problem dressed as a solution problem: CaCO₃ + 2HCl → CaCl₂ + CO₂ + H₂O.",
              steps: [
                { label: "Moles", work: "n(CaCO₃) = 10/100 = 0.10; n(HCl) = 0.250 × 1.0 = 0.25." },
                { label: "LR test (needs 2 HCl per CaCO₃)", work: "0.10 mol CaCO₃ needs 0.20 mol HCl < 0.25 available → CaCO₃ limits." },
                { label: "Product molarity", work: "n(CaCl₂) = 0.10 mol → M = 0.10/0.250 = 0.40 M." },
              ],
              answer: "0.40 M CaCl₂",
              insight: "Two traps: (1) HCl looks limiting (0.25 < 0.20×2?) until you apply the 2:1 ratio correctly — CaCO₃ limits; (2) 0.05 mol HCl is left over, so the final solution is also acidic, but the CaCl₂ molarity is set by the LR.",
            },
            {
              kind: "misc",
              level: "easy",
              question: "250 mL of 0.2 M HCl + 750 mL of 0.1 M HCl. Final molarity?",
              answer: "0.125 M",
              explanation: "(50 + 75) mmol / 1000 mL = 0.125 M.",
            },
            {
              kind: "detailed",
              heading: "Nature of the solution after neutralisation",
              paras: [
                "When an acid meets a base, first cancel equivalents (n·M·V) to find the excess. If exactly stoichiometric, the nature of the leftover salt decides: strong acid + strong base → NEUTRAL; strong acid + weak base → ACIDIC; weak acid + strong base → BASIC; weak acid + weak base → cannot say without more data. If one reactant is in excess, that excess sets the pH directly.",
              ],
              exams: ["JEE Main", "JEE Advanced"],
            },
            {
              kind: "illustration",
              level: "advanced",
              tricky: true,
              concept: "Excess reagent + nature",
              question: "50 mL of 2 M HCl is mixed with 100 mL of 1.5 M NaOH. State whether the final solution is acidic or basic, and find the molarity of the excess reagent.",
              thinking: "Both are strong and monovalent, so compare moles directly; whichever survives sets the nature and its concentration is over the TOTAL volume.",
              steps: [
                { label: "Moles", work: "HCl = 50 × 2/1000 = 0.10 mol; NaOH = 100 × 1.5/1000 = 0.15 mol." },
                { label: "React 1:1", work: "0.10 mol HCl consumes 0.10 mol NaOH → NaOH left = 0.05 mol; HCl = 0." },
                { label: "Nature & concentration", work: "excess strong base → BASIC; [NaOH] = 0.05 / 0.150 L = 1/3 M." },
              ],
              answer: "Basic; [NaOH]excess = 1/3 M ≈ 0.33 M",
              insight: "Excess base = basic solution — the salt (NaCl here) is neutral, so pH is dictated entirely by the leftover 0.05 mol of NaOH spread over the full 150 mL.",
            },
            {
              kind: "illustration",
              level: "advanced",
              tricky: true,
              concept: "Ion concentrations after mixing + dilution",
              question: "100 mL of 1.2 M Fe(NO₃)₂ is mixed with 200 mL of 0.6 M Al(NO₃)₃ and diluted to 500 mL. Find the molar concentrations of Fe²⁺, NO₃⁻ and Al³⁺.",
              thinking: "Moles of each ion are conserved on mixing/dilution; NO₃⁻ comes from BOTH salts. Divide total ion moles by the final 500 mL.",
              steps: [
                { label: "Fe²⁺", work: "only from Fe(NO₃)₂: n = 100 × 1.2/1000 = 0.12 mol → 0.12/0.5 = 0.24 M." },
                { label: "Al³⁺", work: "only from Al(NO₃)₃: n = 200 × 0.6/1000 = 0.12 mol → 0.12/0.5 = 0.24 M." },
                { label: "NO₃⁻ (both salts)", work: "from Fe(NO₃)₂: 2 × 0.12 = 0.24; from Al(NO₃)₃: 3 × 0.12 = 0.36; total 0.60 mol → 0.60/0.5 = 1.2 M." },
              ],
              answer: "[Fe²⁺] = 0.24 M, [Al³⁺] = 0.24 M, [NO₃⁻] = 1.2 M",
              insight: "The spectator anion NO₃⁻ is pooled from every salt that carries it — with the correct subscript on each (2 from the ferrous, 3 from the aluminium). Charge balance is a free check: 2(0.24) + 3(0.24) = 1.20 = [NO₃⁻] ✓.",
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
      intro: "Industry labels its bottles its own way: 'volume strength' peroxide, '109% oleum', and gas mixtures reported by one average molar mass. Decode all three.",
      exams: ["JEE Main", "JEE Advanced"],
      subtopics: [
        {
          id: "h2o2",
          title: "Volume Strength of H₂O₂",
          blocks: [
            {
              kind: "detailed",
              heading: "'x V' = x litres of O₂ per litre of solution",
              paras: [
                "H₂O₂ decomposes: 2H₂O₂ → 2H₂O + O₂. 'x V' releases x litres of O₂ at STP from 1 litre of solution. One litre of 1 M holds 1 mol H₂O₂ → ½ mol O₂ → 11.2 L. Hence Volume Strength = 11.2 × Molarity (STP = 1 atm/0 °C). N = 2M (n-factor 2) → N = VS/5.6.",
              ],
            },
            {
              kind: "illustration",
              level: "intermediate",
              concept: "Volume strength → M and %(w/v)",
              question: "For a '22.4 V' H₂O₂ solution, find the molarity and the %(w/v).",
              thinking: "÷11.2 for molarity; then grams per litre → per 100 mL.",
              steps: [
                { label: "Molarity", work: "M = 22.4/11.2 = 2.0 M." },
                { label: "Grams per litre", work: "2.0 × 34 = 68 g/L." },
                { label: "%(w/v)", work: "68 g/L = 6.8 g per 100 mL = 6.8% (w/v)." },
              ],
              answer: "2.0 M and 6.8% (w/v)",
            },
            {
              kind: "illustration",
              level: "advanced",
              tricky: true,
              concept: "Capacity bookkeeping",
              question: "500 mL of '20 V' H₂O₂ loses 2.0 L of O₂ (at STP) during storage. Find the new volume strength.",
              thinking: "Volume strength is an O₂-CAPACITY label. Track litres of O₂, not molarity formulas — the solution volume is unchanged.",
              steps: [
                { label: "Initial O₂ capacity", work: "0.5 L × 20 = 10 L of O₂." },
                { label: "Remaining capacity", work: "10 − 2.0 = 8 L." },
                { label: "New strength", work: "8 L over 0.5 L → 8/0.5 = 16 V." },
              ],
              answer: "16 V",
              insight: "Don't convert to molarity and back — 'volume strength' IS oxygen capacity per litre. Subtract the lost O₂, divide by the (unchanged) volume. Mixing two peroxides works the same way: add capacities.",
            },
            {
              kind: "misc",
              level: "medium",
              question: "Normality of '11.2 V' H₂O₂?",
              answer: "2 N",
              explanation: "M = 1.0; n-factor 2 → N = 2.0 N.",
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
                "Oleum is H₂SO₄ + dissolved free SO₃. Adding water converts it: SO₃ + H₂O → H₂SO₄. The label '(100 + x)%' means 100 g of oleum yields (100 + x) g of H₂SO₄ after absorbing exactly x g of water. Since 18 g water converts 80 g SO₃: % free SO₃ = (80/18)·x.",
              ],
              points: [
                "109% → x = 9 → 40% free SO₃; 118% → x = 18 → 80% (max meaningful label).",
                "Mixing oleums: the x-values mass-average, exactly like molarities.",
              ],
            },
            {
              kind: "visual",
              title: "Oleum — Composition & Label Logic",
              visual: "oleum-bar",
              caption: "The label is a promise about the FUTURE: how much H₂SO₄ exists after x g of water finishes the SO₃.",
            },
            {
              kind: "illustration",
              level: "advanced",
              tricky: true,
              concept: "Label ≠ present composition",
              question: "In 200 g of 104.5% oleum, what mass of pure H₂SO₄ is present RIGHT NOW?",
              thinking: "The label describes mass AFTER hydration; the sample right now is part H₂SO₄, part free SO₃. Find the free-SO₃ %, subtract.",
              steps: [
                { label: "x from the label", work: "104.5% → x = 4.5 g water per 100 g." },
                { label: "% free SO₃", work: "(80/18) × 4.5 = 20% → free SO₃ = 20% of 200 = 40 g." },
                { label: "Present H₂SO₄", work: "200 − 40 = 160 g." },
              ],
              answer: "160 g of H₂SO₄ (now)",
              insight: "'104.5%' does NOT mean 209 g of acid in your 200 g bottle — that's the post-hydration figure. Present acid = total − free SO₃ = 160 g. Confusing the future label with the present mass is the whole trap.",
              commonMistakes: ["Reporting 209 g.", "Using (80/18) upside-down."],
            },
            {
              kind: "misc",
              level: "medium",
              question: "Label of an oleum containing 20% free SO₃?",
              answer: "104.5%",
              explanation: "20 = (80/18)x → x = 4.5 → 104.5%.",
            },
          ],
        },
        {
          id: "mean-molar-mass",
          title: "Mean Molar Mass & Dissociation",
          blocks: [
            {
              kind: "detailed",
              heading: "One number for a mixture — and a window into equilibrium",
              paras: [
                "A gas mixture behaves as if it had M(mix) = (total mass)/(total moles) = Σ XᵢMᵢ. Dissociation LOWERS it: for A ⇌ (k products), starting n₀ with degree α gives total moles n₀[1 + (k−1)α] at unchanged mass, so M₀/M(mix) = 1 + (k−1)α. Measuring an average molar mass (via vapour density) therefore MEASURES the dissociation — the bridge into chemical equilibrium.",
              ],
              exams: ["JEE Advanced"],
            },
            {
              kind: "illustration",
              level: "advanced",
              tricky: true,
              concept: "VD → degree of dissociation",
              question: "The vapour density of an N₂O₄ sample at equilibrium is 34.5. Find its degree of dissociation into NO₂.",
              thinking: "VD → M(mix). Pure N₂O₄ has M₀ = 92 (k = 2 products). Use M₀/M(mix) = 1 + α.",
              steps: [
                { label: "VD → M(mix)", work: "M(mix) = 2 × VD = 2 × 34.5 = 69." },
                { label: "Apply the relation", work: "M₀/M(mix) = 1 + (2−1)α → 92/69 = 1 + α." },
                { label: "Solve", work: "1.333 = 1 + α → α = 0.333." },
              ],
              answer: "α ≈ 33.3%",
              fastMethod: "α = (D − d)/((k−1)d) with vapour densities: D = 46 (pure), d = 34.5 → (46 − 34.5)/34.5 = 1/3.",
              insight: "Dissociation raises the number of moles at fixed mass, so the AVERAGE molar mass drops — and a falling vapour density is a direct, measurable readout of how far the reaction has gone. This is the doorway to Kp problems.",
            },
            {
              kind: "misc",
              level: "hard",
              question: "A mixture of SO₂ and SO₃ has mean molar mass 72. Mole ratio SO₂ : SO₃?",
              answer: "1 : 1",
              explanation: "72 is exactly midway between 64 and 80 → equal mole fractions.",
              exams: ["JEE Advanced"],
            },
            {
              kind: "trap",
              items: [
                { trap: "Mass % equals mole % for a gas mixture.", reality: "Only when all molar masses are equal. Heavier components carry more mass % than mole % — ozonised-oxygen problems live on this gap." },
              ],
            },
          ],
        },
      ],
    },
  ],
  chapterRevision: [
    "n = w/M = N/N_A = V(STP)/22.4 — the four-way identity; always specify the ENTITY (atoms vs molecules vs formula units).",
    "1 amu = 1/N_A g ≈ 1.66 × 10⁻²⁴ g; atomic masses are ¹²C-relative weighted isotope averages (use the lever rule for reverse abundance).",
    "PV = nRT (T in kelvin, R = 0.0821); PM = dRT; VD = M/2; d(STP) = M/22.4. Wet gas → subtract aqueous tension first.",
    "Five combination laws; Gay-Lussac + Avogadro: gas VOLUME ratios = mole ratios (same P, T).",
    "EF pipeline: % → ÷atomic mass → ÷smallest → clear fractions; MF = EF × (M/EF-mass). Never round 1.33 → 1.",
    "Stoichiometric equality n_A/a = n_B/b; apply purity BEFORE the LR test; parallel reactions split a shared reactant.",
    "LR = smallest n/ν; every theoretical yield comes from the LR; sequential yields MULTIPLY.",
    "POAC: (atoms per formula) × n is conserved per element — balance atoms, skip the equation.",
    "Eudiometry: work in mL; H₂O(l) = 0 volume; CₓH_y needs (x + y/4) O₂, makes x CO₂; absorbers KOH→CO₂, pyrogallol→O₂, turpentine→O₃, Cu₂Cl₂→CO, H₂SO₄→H₂O.",
    "M = n/V(L); m = n/kg-solvent; m = 1000M/(1000d − M·M₂); M = 10·(%w/w)·d/M₂; dilution M₁V₁ = M₂V₂; titration n₁M₁V₁ = n₂M₂V₂.",
    "Temperature-independent: m, X, %w/w, ppm. Temperature-dependent: M, %w/v.",
    "H₂O₂: VS = 11.2 × M, N = VS/5.6 (track O₂ capacity for storage/mixing). Oleum '(100+x)%': free SO₃ = (80/18)x; label ≠ present acid. Dissociation: M₀/M(mix) = 1 + (k−1)α.",
  ],
};
