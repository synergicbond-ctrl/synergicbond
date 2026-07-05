import type { PremiumChapterNotes } from "../schema";

// ─────────────────────────────────────────────────────────────────────────────
// FLAGSHIP CHAPTER — Chemical Bonding & Molecular Structure.
//
// The template every future chapter follows: Topic → Subtopic → typed blocks,
// standard NCERT + JEE canon content in Unicode chemistry notation. Exam tags
// scope the deepest material (advanced illustrations → JEE Advanced; numeric
// dipole work → JEE Main/Advanced); everything untagged serves all programs.
// ─────────────────────────────────────────────────────────────────────────────

export const CHEMICAL_BONDING_NOTES: PremiumChapterNotes = {
  chapterId: "chemical-bonding",
  title: "Chemical Bonding & Molecular Structure",
  tagline: "Why atoms combine, what shapes molecules take, and how theories from Lewis to MOT explain — and fail to explain — real molecules.",
  topics: [
    // ═════════════════════════════ TOPIC 1 ═════════════════════════════
    {
      id: "lewis",
      title: "Why Atoms Bond — Kössel–Lewis Approach",
      intro: "Bond formation as the drive toward a stable noble-gas configuration — and where that simple picture breaks.",
      subtopics: [
        {
          id: "octet-rule",
          title: "Octet Rule & Lewis Symbols",
          blocks: [
            {
              kind: "detailed",
              heading: "The Kössel–Lewis picture",
              paras: [
                "Atoms combine to attain the stable outer shell of the nearest noble gas — by complete electron transfer (ionic bond) or by sharing electron pairs (covalent bond). A Lewis symbol shows the element's valence electrons as dots around its symbol; the number of dots equals the group valence electrons.",
                "Kössel's framing: highly electronegative halogens sit just before the noble gases and highly electropositive alkali metals just after them, so electron transfer between them yields ions with noble-gas configurations, held by electrostatic attraction.",
              ],
              points: [
                "Octet rule: atoms tend to have eight electrons in the valence shell after bonding (hydrogen: a duplet).",
                "Ionic valence = number of electrons gained or lost; covalence = number of shared pairs.",
              ],
            },
            {
              kind: "exception",
              items: [
                { statement: "Incomplete octet: BeH₂ (4 e⁻ on Be), BCl₃ / BF₃ (6 e⁻ on B), LiCl.", why: "Too few valence electrons on the central atom — these behave as Lewis acids (BF₃ accepts a pair from NH₃)." },
                { statement: "Expanded octet: PF₅ (10 e⁻), SF₆ (12 e⁻), H₂SO₄, IF₇.", why: "Third-period-onward central atoms have vacant d-orbitals available (classical explanation)." },
                { statement: "Odd-electron molecules: NO (11 valence e⁻), NO₂ (17 valence e⁻).", why: "An odd total electron count makes complete pairing impossible — no atom can satisfy the octet." },
                { statement: "Noble gases themselves form compounds: XeF₂, XeF₄, XeOF₂, KrF₂.", why: "A 'complete octet' does not guarantee inertness — the octet rule is a useful bookkeeping rule, not a law." },
              ],
            },
            {
              kind: "focus",
              title: "What examiners actually test here",
              points: [
                "Classifying a given molecule as incomplete / expanded / odd-electron octet.",
                "The octet rule's three formal limitations (NCERT lists them verbatim — a favourite assertion–reason source).",
                "Lewis-dot structures of O₃, CO₃²⁻, HNO₃, SO₄²⁻, NF₃ are asked directly.",
              ],
            },
            {
              kind: "trick",
              items: [
                { trick: "\"Be-B break it, P-S-I expand it, N-O odd it\"", recall: "Incomplete: Be, B · Expanded: P, S, I(halogens) · Odd-electron: NO, NO₂." },
              ],
            },
          ],
        },
        {
          id: "formal-charge",
          title: "Lewis Structures & Formal Charge",
          blocks: [
            {
              kind: "detailed",
              heading: "Writing a Lewis structure that survives marking schemes",
              points: [
                "Count ALL valence electrons (add electrons for anionic charge, subtract for cationic).",
                "Least electronegative atom is usually central (H and F are always terminal).",
                "Connect with single bonds, complete terminal octets, place leftovers on the central atom, then convert lone pairs to multiple bonds if the central octet is short.",
                "Formal charge FC = V − L − ½S, where V = valence electrons of the free atom, L = lone-pair (non-bonding) electrons, S = shared (bonding) electrons.",
                "The lowest-energy structure minimises formal charges and puts negative FC on the more electronegative atom.",
              ],
            },
            {
              kind: "illustration",
              level: "basic",
              question: "Assign formal charges to each oxygen in ozone, O₃.",
              thinking: "Draw the standard Lewis structure: central O double-bonded to one terminal O and single-bonded to the other, with the single-bonded O carrying three lone pairs. Then apply FC = V − L − ½S atom by atom.",
              solution: "Central O: V=6, L=2, S=6 → FC = 6 − 2 − 3 = +1. Double-bonded terminal O: V=6, L=4, S=4 → 6 − 4 − 2 = 0. Single-bonded terminal O: V=6, L=6, S=2 → 6 − 6 − 1 = −1. Net charge = +1 + 0 + (−1) = 0 ✓ (matches the neutral molecule).",
              fastMethod: "FC = (group valence) − (dots) − (bonds). Count bonds as sticks, dots as dots — no halving needed if you count bonds, not bonding electrons.",
              commonMistakes: ["Halving the lone-pair electrons as well as the shared ones — only shared electrons are halved.", "Forgetting the net FC of all atoms must equal the species' overall charge."],
            },
            {
              kind: "mistake",
              items: [
                { wrong: "Treating formal charge as the atom's real charge.", right: "FC is bookkeeping that assumes perfectly equal sharing; the real charge distribution follows electronegativity (oxidation state assumes the opposite extreme — complete transfer)." },
                { wrong: "Using formal charge and oxidation number interchangeably.", right: "For the S in SO₄²⁻: oxidation state +6, but formal charge in the expanded-octet structure is 0 — different bookkeeping, different answers." },
              ],
            },
          ],
        },
        {
          id: "resonance",
          title: "Resonance",
          blocks: [
            {
              kind: "detailed",
              heading: "One molecule, several drawings",
              paras: [
                "When a single Lewis structure cannot represent a molecule (experimental bond lengths sit between single and double), we draw a set of canonical structures whose weighted average — the resonance hybrid — is the real molecule. The hybrid is MORE stable than any individual canonical form; the stabilisation is the resonance energy.",
              ],
              points: [
                "Canonical forms differ only in electron positions — never in atom positions.",
                "O₃: two equivalent forms → both O–O bonds identical (128 pm, between 121 pm O=O and 148 pm O–O).",
                "CO₃²⁻: three equivalent forms → each C–O bond order = total bonds ÷ positions = 4/3.",
                "Benzene C–C = 139 pm, exactly between 134 (C=C) and 154 (C–C): bond order 1.5.",
              ],
            },
            {
              kind: "trap",
              items: [
                { trap: "\"The molecule flickers between the resonance structures.\"", reality: "Canonical forms have NO independent existence — there is only ever one real structure, the hybrid. 'Oscillating double bonds' is an auto-wrong phrase in board answers." },
                { trap: "\"More resonance structures always means more stable.\"", reality: "Only significant (low-energy, similar-energy) canonical forms stabilise strongly; equivalent forms stabilise the most." },
              ],
            },
            {
              kind: "misc",
              level: "medium",
              question: "Arrange the C–O bond lengths: CO, CO₂, CO₃²⁻.",
              answer: "CO < CO₂ < CO₃²⁻",
              explanation: "Bond order CO = 3 (shortest, 110 pm), CO₂ = 2 (120 pm), CO₃²⁻ = 4/3 (~136 pm). Higher bond order → shorter bond. A one-line ranking these exams recycle.",
            },
            { kind: "revision", points: ["Octet = tendency, with Be/B (short), P/S/I (expanded), NO/NO₂ (odd) exceptions.", "FC = V − L − ½S; net FC = species charge.", "Resonance hybrid is the only real structure; equivalent forms → fractional bond orders (CO₃²⁻ = 4/3)."] },
          ],
        },
      ],
    },

    // ═════════════════════════════ TOPIC 2 ═════════════════════════════
    {
      id: "ionic",
      title: "Ionic Bonding",
      intro: "Electron transfer, the energetics that actually decide it, and how 'ionic' compounds smuggle in covalent character.",
      subtopics: [
        {
          id: "ionic-formation",
          title: "Formation & Lattice Enthalpy",
          blocks: [
            {
              kind: "detailed",
              heading: "What really pays for an ionic bond",
              paras: [
                "Ionic bond formation is favoured by a low ionisation enthalpy of the metal, a high (very negative) electron-gain enthalpy of the non-metal, and — decisively — a large lattice enthalpy: the energy released when gaseous ions assemble into one mole of crystal.",
                "The classic subtlety: forming O²⁻(g) from O(g) is overall endothermic (the second electron is forced onto an already-negative ion), yet oxides like MgO are extremely stable — because the lattice enthalpy of the 2+/2− crystal overwhelms the cost. Ion formation is only the set-up; the crystal pays the bill.",
              ],
              points: [
                "Lattice enthalpy ↑ with higher ionic charges and smaller inter-ionic distance.",
                "Ionic compounds: crystalline, high mp/bp, conduct when molten or aqueous (not solid), soluble in polar solvents.",
              ],
            },
            {
              kind: "illustration",
              level: "intermediate",
              question: "Sketch the Born–Haber energy bookkeeping for NaCl(s) and state which single term makes the overall process exothermic.",
              thinking: "List every step from elements to crystal with its enthalpy sign: sublime Na, break ½Cl₂, ionise Na, add e⁻ to Cl, then condense the ions into the lattice.",
              solution: "Na(s) → Na(g) (+108 kJ, sublimation); ½Cl₂ → Cl(g) (+122 kJ, ½ bond dissociation); Na(g) → Na⁺(g) + e⁻ (+496 kJ, IE₁); Cl(g) + e⁻ → Cl⁻(g) (−349 kJ, ΔegH); Na⁺(g) + Cl⁻(g) → NaCl(s) (−788 kJ, lattice). Sum ≈ −411 kJ mol⁻¹ = ΔfH(NaCl). The costs (+726) exceed the electron-gain payback (−349); only the lattice enthalpy (−788) turns the total negative.",
              fastMethod: "Signs first, numbers later: three costs (sublime, dissociate, ionise), two paybacks (electron gain, lattice) — and lattice is always the big one.",
              commonMistakes: ["Using the full Cl₂ bond enthalpy instead of half for one Cl atom.", "Quoting lattice enthalpy with the wrong sign convention — define it as formation (exothermic) and stay consistent."],
            },
            {
              kind: "trap",
              items: [
                { trap: "\"NaCl exists as Na⁺Cl⁻ ion pairs.\"", reality: "In the solid there are no discrete molecules — each Na⁺ touches 6 Cl⁻ and vice versa (6:6 coordination). 'Molecule of NaCl' only makes sense in the vapour." },
              ],
            },
          ],
        },
        {
          id: "fajans",
          title: "Polarisation & Fajans' Rules",
          blocks: [
            {
              kind: "detailed",
              heading: "Covalent character inside ionic bonds",
              paras: [
                "A small, highly charged cation pulls the electron cloud of a large, easily deformable anion toward itself — the shared-cloud distortion is covalent character. Fajans' rules rank it.",
              ],
              points: [
                "Covalent character ↑ : smaller cation, larger anion, higher charges on either ion.",
                "A cation with an 18-electron (pseudo noble-gas) outer shell polarises far more than a same-size 8-electron cation: AgCl is much more covalent than KCl.",
                "Consequences: LiCl is more covalent than NaCl (soluble in ethanol); AgI is yellow and nearly insoluble while AgF is ionic and soluble.",
              ],
            },
            {
              kind: "trick",
              items: [
                { trick: "\"Small strong puller + big soft cloud → sharing\"", recall: "Small/high-charge cation + large/high-charge anion = maximum covalent character." },
              ],
            },
            {
              kind: "misc",
              level: "medium",
              question: "Arrange in increasing covalent character: NaCl, MgCl₂, AlCl₃.",
              answer: "NaCl < MgCl₂ < AlCl₃",
              explanation: "Cation charge rises (+1 → +2 → +3) and radius falls across the period → polarising power increases. AlCl₃ behaves substantially covalent (sublimes, dissolves in organic solvents).",
            },
            {
              kind: "misc",
              level: "hard",
              exams: ["JEE Main", "JEE Advanced"],
              question: "Why is AgCl less soluble in water than NaCl though both are 1:1 chlorides of similar radius cations?",
              answer: "Ag⁺ (18 e⁻ shell) polarises Cl⁻ strongly → significant covalent character → water's ion–dipole hydration cannot pay the higher effective 'lattice' cost.",
              explanation: "Pseudo noble-gas cations screen nuclear charge poorly (d-electrons shield badly), so the effective nuclear pull on the anion's cloud is larger than the noble-gas-core Na⁺ of comparable size.",
            },
            { kind: "revision", points: ["Ionic bond is paid for by lattice enthalpy, not electron gain (MgO proof).", "Fajans: small/high-charge cation + large anion + 18e⁻ shell → covalent character.", "LiCl > NaCl and AgCl > KCl in covalency — standard comparisons."] },
          ],
        },
      ],
    },

    // ═════════════════════════════ TOPIC 3 ═════════════════════════════
    {
      id: "bond-parameters",
      title: "Bond Parameters & Dipole Moment",
      intro: "Length, enthalpy, order and the vector that decides polarity.",
      subtopics: [
        {
          id: "length-order",
          title: "Bond Length · Enthalpy · Order",
          blocks: [
            {
              kind: "detailed",
              points: [
                "Bond order ↑ ⇒ bond length ↓ and bond enthalpy ↑ (for the same pair of atoms).",
                "Isoelectronic species share bond order: N₂, CO, NO⁺, CN⁻ all have bond order 3.",
                "C–C 154 pm > C=C 134 pm > C≡C 120 pm; enthalpies rise in the same order.",
                "CO has the highest bond enthalpy known for a diatomic (~1070 kJ mol⁻¹), above even N₂ (946).",
              ],
            },
            {
              kind: "exception",
              items: [
                { statement: "F–F bond enthalpy (159 kJ mol⁻¹) is LOWER than Cl–Cl (243), breaking the 'smaller = stronger' expectation.", why: "F is so small that its three lone pairs on each atom repel across the short bond — lone-pair repulsion outweighs better overlap. This single fact drives F₂'s hyper-reactivity and appears constantly in reasoning items." },
              ],
            },
            {
              kind: "focus",
              points: [
                "Rankings by bond order are free marks: compute order first, then order lengths inversely.",
                "Halogen bond-enthalpy order is Cl₂ > Br₂ > F₂ > I₂ — F₂ out of place, the rest by size.",
              ],
            },
          ],
        },
        {
          id: "dipole",
          title: "Dipole Moment & Polarity",
          blocks: [
            {
              kind: "detailed",
              heading: "μ = q × d — but as a vector",
              paras: [
                "Dipole moment is charge × separation, measured in debye (1 D = 3.336 × 10⁻³⁰ C m). It is a vector along each bond; the molecular dipole is the vector SUM, so a molecule with polar bonds can still be nonpolar if geometry cancels them.",
              ],
              points: [
                "Zero μ despite polar bonds: CO₂ (linear), BF₃ (trigonal planar), CCl₄ (tetrahedral), PCl₅, SF₆, XeF₄, trans-2-butene-type trans isomers, p-dichlorobenzene.",
                "Non-zero μ: H₂O (1.85 D, bent), NH₃ (1.47 D), CHCl₃, cis isomers, o- and m-dichlorobenzene.",
                "Order for dichlorobenzenes: ortho > meta > para (para = 0).",
              ],
            },
            {
              kind: "visual",
              title: "Vector cancellation across geometries",
              visual: "dipole-vectors",
              caption: "Same polar bonds, different geometry: CO₂ and BF₃ cancel to zero; H₂O and NH₃ add to a net dipole.",
            },
            {
              kind: "illustration",
              level: "advanced",
              exams: ["JEE Advanced"],
              question: "NH₃ has μ = 1.47 D but NF₃ only 0.24 D, though N–F bonds are more polar than N–H. Resolve the contradiction.",
              thinking: "The lone pair on nitrogen contributes its own moment. Decide the direction of the bond-moment resultant in each molecule relative to that lone-pair moment.",
              solution: "In NH₃, N is more electronegative than H, so each bond moment points from H toward N — the three-bond resultant points along the C₃ axis toward the lone pair. Lone-pair moment and bond resultant ADD → large μ. In NF₃, bond moments point from N toward the F atoms — the resultant opposes the lone-pair moment → near cancellation → tiny μ.",
              fastMethod: "Lone pair wins ties: whenever lone-pair and bond resultants oppose, expect an anomalously small dipole (NF₃, ClF₃ discussions).",
              commonMistakes: ["Ranking μ by bond polarity alone and forgetting the lone-pair vector.", "Claiming NF₃ is nonpolar — it is weakly polar, not zero."],
            },
            {
              kind: "illustration",
              level: "intermediate",
              exams: ["JEE Main", "JEE Advanced"],
              question: "HCl has observed μ = 1.03 D and bond length 127 pm. Calculate its percentage ionic character.",
              thinking: "Compare the observed moment with the hypothetical 100 % ionic moment (full charges e⁺/e⁻ separated by the bond length).",
              solution: "μ(ionic) = e × d = (1.6 × 10⁻¹⁹ C)(1.27 × 10⁻¹⁰ m) = 2.03 × 10⁻²⁹ C m = 6.09 D. % ionic = 1.03/6.09 × 100 ≈ 17 %.",
              fastMethod: "In debye: μ(100 % ionic) ≈ 4.8 × d(Å). Here 4.8 × 1.27 ≈ 6.1 D → 1.03/6.1 ≈ 17 %.",
              commonMistakes: ["Mixing pm with Å in the shortcut (4.8 works with ångström only)."],
            },
            {
              kind: "mistake",
              items: [
                { wrong: "\"BF₃ has polar bonds, so BF₃ is polar.\"", right: "The three 120°-spaced B–F vectors sum to zero — bond polarity ≠ molecular polarity." },
                { wrong: "Comparing dipole moments without drawing geometry.", right: "Always sketch the shape first; the vector sum is a geometry question, not an electronegativity question." },
              ],
            },
            { kind: "revision", points: ["Order ↑ → length ↓, enthalpy ↑; F–F weak (lp repulsion); CO strongest diatomic bond.", "μ is a vector sum: CO₂/BF₃/CCl₄ = 0; H₂O 1.85 D; NH₃ > NF₃ (lone pair).", "% ionic = μ_obs/μ_ionic × 100, with μ_ionic ≈ 4.8 × d(Å) debye."] },
          ],
        },
      ],
    },

    // ═════════════════════════════ TOPIC 4 ═════════════════════════════
    {
      id: "vsepr",
      title: "VSEPR Theory — Shapes of Molecules",
      intro: "Electron pairs repel; geometry is whatever minimises that repulsion.",
      subtopics: [
        {
          id: "vsepr-geometries",
          title: "Electron-Pair Geometries",
          blocks: [
            {
              kind: "detailed",
              heading: "The counting game",
              paras: [
                "Count the electron pairs (σ-bond pairs + lone pairs) around the central atom; they arrange to maximise separation. Bond pairs define the SHAPE; lone pairs occupy geometry positions but are invisible in the shape's name.",
              ],
              points: [
                "2 pairs → linear (BeCl₂) · 3 → trigonal planar (BF₃) · 4 → tetrahedral (CH₄) · 5 → trigonal bipyramidal (PCl₅) · 6 → octahedral (SF₆).",
                "In a trigonal bipyramid, lone pairs ALWAYS take equatorial positions (fewer 90° neighbours).",
                "In an octahedron, two lone pairs sit trans (opposite) — hence XeF₄ is square planar.",
              ],
            },
            {
              kind: "visual",
              title: "The AXₙEₘ shape gallery",
              visual: "vsepr-gallery",
              caption: "Parent geometries with lone pairs carved out: the eleven shapes every paper draws from.",
            },
            {
              kind: "trick",
              items: [
                { trick: "AXₙEₘ ledger: n + m = parent geometry, n alone = the visible shape.", recall: "AX₅ tbp → AX₄E see-saw (SF₄) → AX₃E₂ T-shape (ClF₃) → AX₂E₃ linear (XeF₂, I₃⁻)." },
                { trick: "\"Equatorial lounges\" — lone pairs lounge in the equator of a tbp.", recall: "Why ClF₃ is T-shaped and I₃⁻ is linear, not bent." },
              ],
            },
          ],
        },
        {
          id: "lone-pair-effects",
          title: "Lone-Pair Distortions",
          blocks: [
            {
              kind: "detailed",
              points: [
                "Repulsion order: lp–lp > lp–bp > bp–bp (a lone pair hugs its nucleus and spreads wide).",
                "Bond-angle staircase: CH₄ 109.5° → NH₃ 107° (one lp squeezes) → H₂O 104.5° (two lps squeeze harder).",
                "More electronegative surrounding atoms pull bond pairs away → smaller angles: NH₃ (107°) > NF₃ (~102°); PI₃ > PBr₃ > PCl₃ > PF₃.",
              ],
            },
            {
              kind: "trap",
              items: [
                { trap: "\"SF₄ is tetrahedral — four bonds!\"", reality: "Five electron pairs (4 bp + 1 lp): parent is trigonal bipyramidal, shape is see-saw with the lp equatorial." },
                { trap: "\"XeF₂ is bent like H₂O.\"", reality: "Five pairs (2 bp + 3 lp): all three lone pairs equatorial in the tbp → the two F sit axial → perfectly linear." },
              ],
            },
            {
              kind: "illustration",
              level: "intermediate",
              question: "Predict the shape and bond angles of ClF₃.",
              thinking: "Cl: 7 valence electrons; three bonds to F consume 3, leaving 4 = 2 lone pairs. Total 5 pairs → tbp parent. Place lone pairs to minimise 90° lp interactions.",
              solution: "Both lone pairs go equatorial (each then has only two 90° bp neighbours instead of three). Remaining: 2 axial F + 1 equatorial F → T-shape. The axial F–Cl–F angle bends slightly toward the equatorial F: ~87.5° instead of 90°, as the lone pairs push the axial bonds away.",
              fastMethod: "T-shape is the ONLY option for AX₃E₂ once you know 'lone pairs go equatorial' — no case analysis needed in the exam.",
              commonMistakes: ["Placing lone pairs axial and answering 'trigonal planar'.", "Reporting ideal 90° without the lone-pair compression."],
            },
            {
              kind: "misc",
              level: "challenge",
              exams: ["JEE Advanced"],
              question: "H₂O (104.5°) vs OF₂ (~103°) vs Cl₂O (~111°): rationalise the angle order Cl₂O > H₂O > OF₂.",
              answer: "Electronegativity + size both act.",
              explanation: "In OF₂, F pulls bond pairs away from O → pairs repel less at O → angle closes below H₂O. In Cl₂O, bond pairs sit closer to O than in H₂O (Cl is less electronegative than O) AND the bulky Cl atoms crowd sterically → angle opens past tetrahedral squeeze. Two competing effects, one clean ranking.",
            },
            { kind: "revision", points: ["Count σ-pairs + lps → parent geometry; lps equatorial (tbp), trans (octahedron).", "lp–lp > lp–bp > bp–bp; staircase 109.5° → 107° → 104.5°.", "Shape names: see-saw (SF₄), T (ClF₃), square planar (XeF₄), square pyramidal (BrF₅), linear (XeF₂/I₃⁻)."] },
          ],
        },
      ],
    },

    // ═════════════════════════════ TOPIC 5 ═════════════════════════════
    {
      id: "vbt-hybridisation",
      title: "Valence Bond Theory & Hybridisation",
      intro: "Bonds as orbital overlap — and mixed orbitals as the fix for observed geometries.",
      subtopics: [
        {
          id: "overlap",
          title: "Orbital Overlap — σ and π",
          blocks: [
            {
              kind: "detailed",
              points: [
                "σ bond: head-on (axial) overlap — s–s, s–p, or p–p end-on. Free rotation about a σ bond.",
                "π bond: sideways overlap of parallel p orbitals; electron cloud above and below the internuclear axis; rotation is restricted (basis of cis–trans isomerism).",
                "σ is stronger than π for the same atoms (greater overlap extent); a double bond = 1σ + 1π, triple = 1σ + 2π.",
                "Overlap strength order for the same n: p–p (axial) > s–p > s–s.",
              ],
            },
            {
              kind: "mistake",
              items: [
                { wrong: "\"π bonds are stronger because double bonds are stronger than single.\"", right: "The double bond is stronger as a PACKAGE; the individual π contribution is weaker than the σ. That's why π breaks first in addition reactions." },
              ],
            },
          ],
        },
        {
          id: "hybridisation",
          title: "Hybridisation",
          blocks: [
            {
              kind: "detailed",
              heading: "Mixing orbitals to match geometry",
              paras: [
                "Hybridisation mixes valence orbitals of similar energy into an equal number of degenerate hybrid orbitals whose directions match the observed geometry. It is invoked, not observed — a model that earns its keep by predicting shapes and angles.",
              ],
              points: [
                "sp (2 orbitals, 180°, BeCl₂/C₂H₂) · sp² (3, 120°, BF₃/C₂H₄) · sp³ (4, 109.5°, CH₄) · sp³d (5, tbp, PCl₅) · sp³d² (6, octahedral, SF₆).",
                "Steric number SN = σ bonds + lone pairs on the central atom → picks the hybridisation directly.",
                "Quick formula: SN = ½[V + M − c + a] (V = central atom's valence e⁻, M = monovalent atoms attached, c = cation charge, a = anion charge).",
                "% s-character 50 (sp) > 33 (sp²) > 25 (sp³): more s-character → shorter, stronger bonds and a more electronegative hybrid orbital.",
              ],
            },
            {
              kind: "visual",
              title: "Hybrid orbital geometries",
              visual: "hybrid-shapes",
              caption: "sp, sp², sp³ orbital sets with their fixed angles — geometry is baked into the mixing.",
            },
            {
              kind: "illustration",
              level: "basic",
              question: "Find the hybridisation of the central atom in (a) NH₄⁺ (b) SO₂ (c) I₃⁻.",
              thinking: "Apply SN = ½[V + M − c + a], or just count σ-bonds + lone pairs.",
              solution: "(a) N in NH₄⁺: ½[5 + 4 − 1 + 0] = 4 → sp³, tetrahedral. (b) S in SO₂: 2 σ bonds + 1 lone pair = 3 → sp², bent (~119°). (c) Central I in I₃⁻: ½[7 + 2 − 0 + 1] = 5 → sp³d; 2 bp + 3 lp → linear.",
              fastMethod: "Oxygen atoms bound by double bonds add σ only — count them as one each and skip M for them in the formula (they're not monovalent).",
              commonMistakes: ["Counting π bonds into the steric number.", "Forgetting to ADD the negative charge (a) and SUBTRACT the positive (c) in the formula."],
            },
            {
              kind: "exception",
              exams: ["JEE Main", "JEE Advanced"],
              items: [
                { statement: "sp³d and sp³d² hybridisation of nonmetals is a classical model under revision — modern bonding theory describes PF₅/SF₆ with 3-centre-4-electron bonds instead of d-orbital promotion.", why: "d orbitals of P/S are too high in energy for full participation; exams still accept the classical labels, but advanced comprehension passages have quoted the modern view." },
              ],
            },
            {
              kind: "trick",
              items: [
                { trick: "\"Half of V plus M, charge-corrected\"", recall: "SN = ½[V + M − c + a] → 2:sp, 3:sp², 4:sp³, 5:sp³d, 6:sp³d²." },
              ],
            },
            {
              kind: "misc",
              level: "medium",
              question: "Rank C–H bond lengths: ethane, ethene, ethyne.",
              answer: "ethyne < ethene < ethane",
              explanation: "Carbon is sp (50 % s), sp² (33 %), sp³ (25 %) respectively — more s-character holds electrons closer → shorter C–H.",
            },
            { kind: "revision", points: ["SN = σ + lp = ½[V + M − c + a] → hybridisation.", "s-character 50/33/25 % → bond length & orbital electronegativity trends.", "σ = axial (rotatable), π = sideways (locked); double = σ+π."] },
          ],
        },
      ],
    },

    // ═════════════════════════════ TOPIC 6 ═════════════════════════════
    {
      id: "mot",
      title: "Molecular Orbital Theory",
      intro: "Electrons belong to the whole molecule: orbitals combine, and magnetism plus bond order fall out of the filling.",
      subtopics: [
        {
          id: "mo-basics",
          title: "LCAO, Bonding & Antibonding",
          blocks: [
            {
              kind: "detailed",
              paras: [
                "Atomic orbitals of comparable energy and correct symmetry combine (LCAO): constructive overlap gives a bonding MO (electron density between nuclei, lower energy); destructive overlap gives an antibonding MO (node between nuclei, higher energy, starred σ*, π*). n atomic orbitals → n molecular orbitals.",
              ],
              points: [
                "Bond order = ½(Nb − Na). Order 0 ⇒ molecule does not exist (He₂).",
                "Unpaired MO electrons ⇒ paramagnetic; all paired ⇒ diamagnetic.",
                "Energy sequence for O₂ and F₂: σ2s < σ*2s < σ2p_z < (π2p_x = π2p_y) < (π*2p_x = π*2p_y) < σ*2p_z.",
                "For B₂, C₂, N₂ (s–p mixing): the σ2p_z rises ABOVE the π2p set → σ2s < σ*2s < (π2p_x = π2p_y) < σ2p_z < π* < σ*.",
              ],
            },
            {
              kind: "visual",
              title: "MO diagrams: N₂ vs O₂",
              visual: "mo-diagram",
              caption: "s–p mixing flips the σ2p/π2p order below O₂; O₂'s two unpaired π* electrons make it paramagnetic.",
            },
            {
              kind: "trick",
              items: [
                { trick: "\"Oxygen onwards, sigma comes down\"", recall: "O₂ and F₂ use the normal order (σ2p below π2p); B₂/C₂/N₂ use the mixed order (π below σ)." },
              ],
            },
          ],
        },
        {
          id: "mo-applications",
          title: "Bond Order, Magnetism & Species Ranking",
          blocks: [
            {
              kind: "detailed",
              points: [
                "O₂ (16 e⁻): order 2, TWO unpaired π* electrons → paramagnetic. MOT's signature triumph — Lewis/VBT predict all paired.",
                "B₂: order 1, paramagnetic (two unpaired π electrons — needs the mixed order!). C₂: order 2, diamagnetic (π⁴ — both bonds are π).",
                "N₂: order 3, diamagnetic, 946 kJ mol⁻¹ — the mixed order is why N₂⁺ (order 2.5) is LESS stable than N₂.",
                "Isoelectronic order-3 club (14 e⁻): N₂, CO, NO⁺, CN⁻, C₂²⁻.",
              ],
            },
            {
              kind: "illustration",
              level: "intermediate",
              question: "Arrange O₂⁺, O₂, O₂⁻, O₂²⁻ by bond length and state each species' magnetism.",
              thinking: "Electrons added to O₂ enter π* (antibonding) — each addition drops the bond order by ½; removal raises it.",
              solution: "Orders: O₂⁺ 2.5, O₂ 2, O₂⁻ 1.5, O₂²⁻ 1. Length is inverse: O₂⁺ < O₂ < O₂⁻ < O₂²⁻. Magnetism: O₂⁺ one unpaired (para), O₂ two (para), O₂⁻ one (para), O₂²⁻ none (dia).",
              fastMethod: "π* population 1→2→3→4 across the series; order = 2.5 − ½(extra π* electrons relative to O₂⁺).",
              alternateMethod: "KO₂ (superoxide, O₂⁻) is paramagnetic; Na₂O₂ (peroxide, O₂²⁻) is diamagnetic — anchor from the salts you know.",
              commonMistakes: ["Adding the extra electron to a bonding MO.", "Forgetting O₂²⁻ is the only diamagnetic member."],
            },
            {
              kind: "illustration",
              level: "advanced",
              exams: ["JEE Advanced"],
              question: "Between NO and NO⁺, which has the shorter bond, and why is CO's bond barely affected on forming CO⁺?",
              thinking: "Locate which MO loses the electron in each ionisation: antibonding loss strengthens, bonding loss weakens.",
              solution: "NO (15 e⁻) has one π* electron; removing it gives NO⁺ (order 2.5 → 3.0) → NO⁺ is shorter and stronger. In CO the HOMO is the (weakly bonding, largely carbon lone-pair) σ2p — removing it changes order only slightly (3 → 2.5 formally, but the orbital's bonding contribution is small), so CO⁺ has nearly the same bond length; experimentally it even contracts marginally.",
              commonMistakes: ["Assuming every cation of a diatomic has a stronger bond — it depends on whether the lost electron was bonding or antibonding (N₂⁺ is weaker than N₂; O₂⁺ is stronger than O₂)."],
            },
            {
              kind: "trap",
              items: [
                { trap: "\"C₂ has a double bond, so it must have a σ and a π.\"", reality: "In MOT, C₂'s two bonds are BOTH π (configuration ...π2p⁴ with σ2p empty) — a favourite advanced true/false." },
                { trap: "\"Paramagnetism of O₂ can be explained by resonance.\"", reality: "No Lewis-based picture explains it; only MO filling does. This exact assertion–reason pair is frequently asked." },
              ],
            },
            { kind: "revision", points: ["Order = ½(Nb − Na); zero ⇒ no molecule (He₂).", "Mixed order (π below σ) up to N₂; normal from O₂.", "O₂ para (2 e⁻ in π*), B₂ para, C₂ dia (both bonds π); O₂⁺<O₂<O₂⁻<O₂²⁻ in length.", "14-electron order-3 club: N₂, CO, NO⁺, CN⁻, C₂²⁻."] },
          ],
        },
      ],
    },

    // ═════════════════════════════ TOPIC 7 ═════════════════════════════
    {
      id: "hydrogen-bonding",
      title: "Hydrogen Bonding & Intermolecular Forces",
      intro: "The strongest of the weak forces — and the anomalies it writes across boiling points and biology.",
      subtopics: [
        {
          id: "h-bond",
          title: "Hydrogen Bonds — Inter vs Intra",
          blocks: [
            {
              kind: "detailed",
              heading: "When H bridges two electronegative atoms",
              paras: [
                "A hydrogen atom covalently bound to N, O or F is left so electron-poor that it attracts a lone pair of another N/O/F — a hydrogen bond (≈10–40 kJ mol⁻¹: far weaker than covalent ~400, far stronger than dispersion).",
              ],
              points: [
                "Intermolecular H-bonds link different molecules: water network, HF zig-zag chains, alcohols, carboxylic acid dimers.",
                "Intramolecular H-bonds close a ring within ONE molecule: o-nitrophenol, salicylaldehyde — these molecules then associate LESS with neighbours.",
                "Consequences: H₂O's anomalous boiling point and ice's openness; DNA base pairing; protein secondary structure.",
              ],
            },
            {
              kind: "misc",
              level: "medium",
              question: "o-Nitrophenol is steam-volatile but p-nitrophenol is not. Why?",
              answer: "Ortho: intramolecular H-bond (chelation) → no association → volatile. Para: intermolecular H-bonded network → high bp.",
              explanation: "The classic inter/intra discriminator — also explains why the ortho isomer is less water-soluble.",
            },
            {
              kind: "trap",
              items: [
                { trap: "\"F is the most electronegative, so HF must boil higher than H₂O.\"", reality: "H₂O boils at 100 °C vs HF at 19.5 °C: each water molecule can form ~4 H-bonds (2 donor H + 2 acceptor lone pairs) building a 3-D network; HF averages ~2 (chains). Number of H-bonds beats strength of one." },
                { trap: "\"Ice sinking would be normal; floating is chemically odd.\"", reality: "The tetrahedral H-bonded cage in ice is OPEN → density drops on freezing (max density at 4 °C). A commonly asked reasoning point." },
              ],
            },
            {
              kind: "detailed",
              heading: "The rest of the weak-force family (van der Waals)",
              points: [
                "London dispersion (instantaneous dipole–induced dipole): universal, grows with molecular size/surface — why I₂ is solid, Cl₂ gas.",
                "Dipole–dipole: permanent dipoles (HCl); dipole–induced dipole: polar + nonpolar neighbours.",
                "Strength ladder: dispersion < dipole–dipole < H-bond ≪ covalent/ionic.",
              ],
            },
            { kind: "revision", points: ["H on N/O/F + lone pair of N/O/F = H-bond (10–40 kJ mol⁻¹).", "Intramolecular H-bond (o-nitrophenol) → volatile, less soluble; intermolecular → high bp.", "H₂O > HF > NH₃ in bp: count H-bonds per molecule, not electronegativity.", "Dispersion grows with size — the default explanation for nonpolar trends."] },
          ],
        },
      ],
    },
  ],

  // ── One-screen chapter revision sheet ────────────────────────────────
  chapterRevision: [
    "Octet exceptions: Be/B short · P/S/halogens expanded · NO, NO₂ odd · noble gases react anyway.",
    "FC = V − L − ½S; best structure minimises FC; resonance hybrid is the only real structure (CO₃²⁻ order 4/3).",
    "Ionic bonds are paid for by lattice enthalpy (MgO argument); Fajans → covalent character (small cation, big anion, 18e⁻ shell).",
    "Bond order ↑ → length ↓, enthalpy ↑; F–F anomalously weak; CO = strongest diatomic bond.",
    "μ is a vector sum — CO₂, BF₃, CCl₄ zero; NH₃ > NF₃ (lone-pair direction); % ionic = μ_obs/(4.8·d Å) × 100.",
    "VSEPR: lp–lp > lp–bp > bp–bp; 109.5° → 107° → 104.5°; lps go equatorial (tbp) / trans (octahedral).",
    "Shapes: SF₄ see-saw · ClF₃ T · XeF₂/I₃⁻ linear · XeF₄ square planar · BrF₅ square pyramidal.",
    "SN = ½[V + M − c + a] → sp/sp²/sp³/sp³d/sp³d²; s-character 50/33/25 % drives length & acidity trends.",
    "MOT: order = ½(Nb−Na); mixed order till N₂, normal from O₂; O₂ & B₂ para, C₂ dia (both π bonds).",
    "O₂⁺ < O₂ < O₂⁻ < O₂²⁻ (length); 14-e⁻ order-3 club: N₂, CO, NO⁺, CN⁻, C₂²⁻.",
    "H-bond: N/O/F only, 10–40 kJ mol⁻¹; H₂O > HF > NH₃ bp (count the bonds); o-nitrophenol volatile (intramolecular).",
  ],
};
