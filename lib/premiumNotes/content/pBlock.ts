import type { PremiumChapterNotes } from "../schema";

export const P_BLOCK_NOTES: PremiumChapterNotes = {
  "chapterId": "p-block-elements",
  "title": "p-Block Elements — Groups 13 to 18",
  "tagline": "JEE Advanced source-complete notes: trends, structures, exceptions, preparations, reactions and high-yield comparison orders — rebuilt in the Synergic Bond learning style.",
  "topics": [
    {
      "id": "group-13-boron-family",
      "title": "Group 13 — Boron Family",
      "intro": "Boron to thallium: electron deficiency, the Al/Ga radius anomaly, diborane's 3c–2e bonds, borax and boric acid, and the inert-pair swing toward Tl(I).",
      "exams": ["JEE Advanced"],
      "subtopics": [
        {
          "id": "g13-occurrence-classification-general-properties",
          "title": "Occurrence, Classification & General Properties",
          "exams": ["JEE Advanced"],
          "blocks": [
            {
              "kind": "detailed",
              "heading": "Core Notes",
              "points": [
                "• Configuration: ns² np¹. Boron: [He] 2s² 2p¹. Aluminium: [Ne] 3s² 3p¹.",
                "• Occurrence — Boron: Borax Na₂B₄O₇·10H₂O, Kernite Na₂B₄O₇·4H₂O, Colemanite Ca₂B₆O₁₁·5H₂O. Never found free.",
                "• Occurrence — Aluminium: Bauxite Al₂O₃·2H₂O (chief ore), Cryolite Na₃AlF₆, Corundum Al₂O₃, Feldspar. 3rd most abundant element in Earth's crust, most abundant metal.",
                "• Classification: B is a metalloid (non-metal in reactivity); Al, Ga, In, Tl are metals. Only group where the first member is a true metalloid and the rest are metals.",
                "• Oxidation states: +3 is the group state (covalent, especially for B). +1 appears from Ga onward and becomes the MOST stable state for Tl (inert-pair effect).",
                "• Boron is extremely small and hard (2nd hardest element after diamond in some allotropic forms); has several allotropes (crystalline and amorphous)."
              ],
              "exams": ["JEE Advanced"]
            }
          ]
        },
        {
          "id": "g13-physical-chemical-trends",
          "title": "Physical & Chemical Trends",
          "exams": ["JEE Advanced"],
          "blocks": [
            {
              "kind": "detailed",
              "heading": "Core Notes",
              "points": [
                "ATOMIC RADIUS (pm)  •  B 88  •  Al 143  •  Ga 135  •  In 167  •  Tl 170",
                "→ Order: B < Ga < Al < In < Tl. TRAP Ga is SMALLER than Al (135 < 143) — the filled 3d¹⁰ subshell in Ga shields poorly, so effective nuclear charge rises and the atom contracts despite the extra shell.",
                "IONIZATION ENTHALPY IE₁ (kJ/mol)  •  B 801  •  Al 577  •  Ga 579  •  In 558  •  Tl 589",
                "→ Order: B > Tl > Ga > Al > In. Not a smooth decrease: d-block contraction lifts Ga above Al, and f-block (lanthanoid) contraction lifts Tl above In.",
                "ΣIE (IE₁+IE₂+IE₃) (kJ/mol)  •  B 6887  •  Al 5139  •  Ga 5529  •  In 5029  •  Tl 5438",
                "→ Boron's total is by far the largest — this is the quantitative reason B³⁺ never forms and boron is exclusively covalent.",
                "ELECTRONEGATIVITY (Pauling)  •  B 2.0  •  Al 1.5  •  Ga 1.6  •  In 1.7  •  Tl 1.8",
                "→ Falls sharply B → Al, then rises slightly down the group (Al < Ga < In < Tl) — again a d/f-contraction effect.",
                "DENSITY (g/cm³)  •  B 2.35 → Tl 11.85, increasing steadily down the group (B < Al < Ga < In < Tl).",
                "MELTING POINT (K)  •  B 2453  •  Al 933  •  Ga 303  •  In 430  •  Tl 576",
                "→ Huge drop B → Al (giant covalent icosahedral lattice → metallic lattice). Ga's 303 K (≈30 °C) is the group minimum — it melts in the hand — because solid Ga is built from discrete Ga₂ molecules, not a normal metallic lattice.",
                "BOILING POINT (K)  •  B 3923  •  Al 2740  •  Ga 2676  •  In 2356  •  Tl 1730 — decreases steadily.",
                "→ Ga therefore has the LARGEST liquid range of any element (303 K to 2676 K), a favourite one-mark fact.",
                "Metallic Character  •  Increases down the group: B (metalloid) → Al, Ga, In, Tl (metals).",
                "Catenation  •  Far weaker than carbon; B–B and Al–Al chains are rare — boron instead forms icosahedral B₁₂ cluster units in its allotropes."
              ],
              "exams": ["JEE Advanced"]
            },
            {
              "kind": "detailed",
              "heading": "Structure of the elements — why Ga is the odd one out",
              "points": [
                "• Boron: polymeric, built from icosahedral B₁₂ units (12 boron atoms at the vertices of a regular icosahedron) covalently linked into a rigid infinite lattice. This is why B is extremely hard and melts at 2453 K.",
                "• Aluminium, Indium, Thallium: normal metallic lattices — cubic close packed (CCP).",
                "• Gallium: unique — the solid contains DISCRETE DIATOMIC Ga₂ molecules. Only weak forces hold the molecules together, so very little energy is needed to melt it (303 K), yet breaking the strong covalent Ga–Ga bond to vaporise it needs a great deal (2676 K).",
                "• Density anomaly: V(solid Ga) > V(liquid Ga), i.e. solid gallium is LESS dense than its liquid and floats on it — the same anomaly water shows (V_ice > V_water). Gallium therefore expands on freezing, so it must not be stored in glass or metal containers filled to the brim."
              ],
              "exams": ["JEE Advanced"]
            },
            {
              "kind": "detailed",
              "heading": "Electropositive character — standard electrode potentials",
              "points": [
                "E°(M³⁺/M) in volts  •  B −0.87  •  Al −1.66  •  Ga −0.56  •  In −0.34  •  Tl +1.26",
                "→ Aluminium is the most electropositive (most negative E°), so Al³⁺ forms readily in solution. Thallium's E° is POSITIVE, so Tl³⁺ does NOT form spontaneously from the metal — instead Tl³⁺ is a strong oxidising agent.",
                "E°(M⁺/M) in volts  •  Al +0.55  •  Ga −0.79  •  In −0.18  •  Tl −0.34",
                "→ Compare the two rows: for Al the +3 route is hugely favourable and the +1 route is not; for Tl it is the reverse. This is the inert-pair effect expressed in measurable numbers rather than as an assertion.",
                "• Reading the sign: for M³⁺ + 3e⁻ → M with E° negative, the reverse (M → M³⁺ + 3e⁻) has E° positive, so ΔG° = −nFE° is negative and oxidation to M³⁺ is spontaneous. For Tl the arithmetic flips and Tl³⁺ formation is non-spontaneous."
              ],
              "exams": ["JEE Advanced"]
            },
            {
              "kind": "illustration",
              "level": "advanced",
              "concept": "Using E° and ΔG° = −nFE° to predict whether M³⁺ forms in solution",
              "tricky": true,
              "question": "Given E°(Al³⁺/Al) = −1.66 V and E°(Tl³⁺/Tl) = +1.26 V, predict whether Al³⁺ and Tl³⁺ are formed spontaneously when the respective metals are placed in aqueous acid. Support your answer with the sign of ΔG°. (F = 96500 C/mol)",
              "thinking": "The tabulated E° is always for the REDUCTION half-reaction M³⁺ + 3e⁻ → M. The question asks about the metal dissolving, which is OXIDATION — so reverse the sign of E° before substituting into ΔG° = −nFE°.",
              "steps": [
                { "label": "Write the process asked about", "work": "Dissolution is oxidation: M → M³⁺ + 3e⁻, with n = 3. E°(oxidation) = −E°(reduction)." },
                { "label": "Aluminium", "work": "E°(reduction) = −1.66 V ⇒ E°(oxidation) = +1.66 V. ΔG° = −nFE° = −(3)(96500)(+1.66) = −480,570 J/mol ≈ −480.6 kJ/mol. NEGATIVE ⇒ spontaneous. Al³⁺ forms readily." },
                { "label": "Thallium", "work": "E°(reduction) = +1.26 V ⇒ E°(oxidation) = −1.26 V. ΔG° = −(3)(96500)(−1.26) = +364,770 J/mol ≈ +364.8 kJ/mol. POSITIVE ⇒ non-spontaneous. Tl³⁺ does NOT form from the metal." },
                { "label": "Interpret chemically", "work": "Because Tl³⁺ is thermodynamically unwilling to exist, it readily accepts electrons to fall back to Tl⁺ — i.e. Tl³⁺ acts as a strong OXIDISING agent. This is exactly the inert-pair effect, now quantified rather than merely stated." }
              ],
              "answer": "Al: ΔG° ≈ −481 kJ/mol, spontaneous — Al³⁺ forms readily. Tl: ΔG° ≈ +365 kJ/mol, non-spontaneous — Tl³⁺ does not form; it is instead a strong oxidising agent.",
              "insight": "Any 'will this ion form / is this reaction feasible' question in inorganic chemistry reduces to this two-line calculation. Getting the sign convention right (reverse E° for oxidation) is where nearly all marks are lost.",
              "fastMethod": "E°(oxidation) positive ⇒ ΔG° negative ⇒ spontaneous. You can often answer without computing the number at all."
            },
            {
              "kind": "detailed",
              "heading": "Inert-pair effect — the quantitative basis (ΔE = E_np − E_ns)",
              "points": [
                "• The inert-pair effect is usually asserted ('the ns² pair is reluctant to bond'). The measurable quantity behind it is the ns–np energy separation ΔE = E_np − E_ns: the larger this gap, the more energy is needed to promote an ns electron into an np orbital, and the less willing the ns² pair is to participate in bonding.",
                "ΔE (eV)  •  B 4.5  •  Al 4.5  •  Ga 6.0  •  In 5.3  •  Tl 7.0",
                "• Thallium's gap (7.0 eV) is far larger than boron's or aluminium's (4.5 eV) — hence Tl⁺ dominates while B and Al are locked into the +3 state.",
                "• The same quantity explains the effect across the whole p-block, growing steadily toward the bottom right: Pb 9.0 · Bi 10.0 · Po 12.0 · At 16.0 eV. This is why Pb²⁺ and Bi³⁺ (rather than Pb⁴⁺ and Bi⁵⁺) are the stable states.",
                "• Stability of the +3 state DECREASES down the group (B → Tl); stability of the +1 state INCREASES down the group.",
                "• Consequences: Tl³⁺ < Tl⁺ in stability (so Tl³⁺ is an oxidising agent), while Ga⁺ < Ga³⁺ (so Ga⁺ is a reducing agent). General rule — the less stable the oxidation state, the more strongly the species pushes toward the stable one.",
                "• Ga⁺ is a stronger reducing agent than In⁺, because Ga⁺ is the less stable of the two."
              ],
              "exams": ["JEE Advanced"]
            },
            {
              "kind": "detailed",
              "heading": "Subvalent halides — why GaX₂ is NOT gallium(II)",
              "points": [
                "• GaCl₂ looks like a gallium(+2) compound, but gallium does not adopt +2. The compound is actually a MIXED-VALENCE salt: Ga⁺[Ga³⁺Cl₄]⁻ — one gallium in +1 and one in +3, averaging to the deceptive +2.",
                "• Consequence: in Ga[AlCl₄] the oxidation state of gallium is +1 (the AlCl₄⁻ carries the charge), not +2 or +3.",
                "• Preparation of the gallium(I) tetrachloroaluminate: 2Ga + Ga[GaCl₄] + 2Al₂Cl₆ →(≈190 °C) 4Ga[AlCl₄] (gallous tetrachloroaluminate).",
                "• Ga⁺ and In⁺ halides are unstable in aqueous solution and DISPROPORTIONATE: 3GaX → 2Ga + GaX₃, and 3InX → 2In + InX₃ — the +1 state collapses into the metal plus the +3 state.",
                "• The same 'apparent oxidation state' trap appears with TlI₃, which is NOT thallium(III) iodide — see the Tl chemistry notes."
              ],
              "exams": ["JEE Advanced"]
            }
          ]
        },
        {
          "id": "g13-anomalous-boron",
          "title": "Anomalous Behaviour of Boron",
          "exams": ["JEE Advanced"],
          "blocks": [
            {
              "kind": "exception",
              "items": [
                { "statement": "Boron compounds are electron-deficient and strongly Lewis acidic (BF₃, BCl₃).", "why": "Only 3 valence electrons for 4 valence orbitals (1s + 3p) — one orbital always stays empty, ready to accept a lone pair." },
                { "statement": "Boron never exceeds a covalency of 4 (e.g. in BF₄⁻), while Al can reach 6 (AlF₆³⁻).", "why": "Boron has no accessible d-orbitals (n = 2); aluminium (n = 3) does, so it can expand its octet." },
                { "statement": "Boron forms only covalent compounds; boron never forms a simple B³⁺ ion.", "why": "The sum of the first three ionization enthalpies is too high for simple cation formation — bonding is always by orbital overlap, not by outright electron loss." },
                { "statement": "Boron oxide and boric acid are acidic, but Al₂O₃ and Al(OH)₃ are amphoteric.", "why": "Consistent with the metalloid→metal transition down the group." },
                { "statement": "AlCl₃ exists as a dimer Al₂Cl₆ in the vapour phase / non-polar solvents.", "why": "Al completes its octet by accepting a lone pair from a Cl on a neighbouring molecule, forming two 3-centre bridging Al–Cl–Al bonds — unlike B, Al can do this because chlorine's lone pair donation only needs an empty orbital, which Al also has." }
              ]
            },
            {
              "kind": "trick",
              "items": [
                { "trick": "\"Boron Bonds, Never Becomes an ion\"", "recall": "B always stays covalent — no B³⁺ cation, ever." }
              ]
            },
            {
              "kind": "detailed",
              "heading": "Diagonal Relationship — Boron resembles Silicon, not Aluminium",
              "points": [
                "• Diagonal relationship: the 2nd-period element of one group often resembles the 3rd-period element of the NEXT group more than it resembles its own heavier group-mates — for Group 13/14 this means B behaves more like Si (diagonal neighbour) than like Al (its own group neighbour).",
                "• Reason: diagonal neighbours have similar size AND similar charge density (charge/radius ratio), because moving right across a period shrinks the atom while moving down a group enlarges it — the two effects roughly cancel diagonally.",
                "• B ↔ Si similarities: both form covalent, electron-deficient/electron-precise hydrides that are gases/volatile liquids, spontaneously flammable (B₂H₆, SiH₄ both ignite in air) — unlike Al, which forms an ionic-tending hydride (AlH₃ is polymeric/covalent-network, not molecular). Both B₂O₃ and SiO₂ are acidic oxides forming oxoacid-like species, unlike amphoteric Al₂O₃. Both boric acid and silicic acid are weak, and both borates and silicates form extended chain/network anionic structures built from BO₃/BO₄ or SiO₄ units.",
                "• Contrast this with Al, which behaves like a typical metal (amphoteric oxide/hydroxide, forms simple Al³⁺(aq), reacts with acid AND base) — the diagonal relationship is precisely why B looks so out-of-place if you only compare it within its own group."
              ],
              "exams": ["JEE Advanced"]
            },
            {
              "kind": "illustration",
              "level": "advanced",
              "concept": "Ordering Lewis acidity of BX₃ — where the 'expected' electronegativity trend fails",
              "tricky": true,
              "question": "Arrange BF₃, BCl₃, BBr₃ and BI₃ in order of increasing Lewis acid strength, and explain why the order does NOT follow the electronegativity of the halogen (which would naively predict BF₃ as the strongest Lewis acid, since F is most electronegative and should withdraw the most electron density from B).",
              "thinking": "Two competing effects operate on boron's empty p-orbital: (1) the inductive/electronegativity effect (more electronegative X pulls more electron density away from B, which should make B MORE electron-hungry, i.e. a stronger Lewis acid), and (2) pπ–pπ back-bonding (a halogen lone pair donates into boron's empty 2p orbital, partially filling it and REDUCING B's hunger for an external Lewis base). The observed order shows effect (2) dominates.",
              "steps": [
                { "label": "Set up the two competing effects", "work": "Inductive effect alone would predict Lewis acidity F > Cl > Br > I (matching electronegativity). But back-bonding effect: F's 2p orbital overlaps very efficiently with B's 2p orbital (same principal quantum number, similar size) — strong pπ–pπ back-donation. Cl, Br, I have progressively larger, more diffuse p-orbitals (3p, 4p, 5p) that overlap increasingly poorly with boron's compact 2p orbital." },
                { "label": "Rank back-bonding efficiency", "work": "Back-donation efficiency: F > Cl > Br > I (falls off sharply due to poor size/energy match for the heavier halogens)." },
                { "label": "Combine the effects", "work": "For BF₃, back-bonding is strongest, so it fills boron's empty orbital most effectively, LOWERING Lewis acidity despite F's high electronegativity. For BI₃, back-bonding is weakest (poor 2p–5p overlap), so boron's orbital stays genuinely empty and hungry, and the (still present, even if smaller) inductive pull makes it the strongest Lewis acid of the four." },
                { "label": "State the final order", "work": "Lewis acidity: BF₃ < BCl₃ < BBr₃ < BI₃ — the exact REVERSE of what electronegativity alone would predict." }
              ],
              "answer": "BF₃ < BCl₃ < BBr₃ < BI₃ (Lewis acidity increases as back-bonding weakens down the halogens, dominating over the inductive electronegativity effect).",
              "insight": "This is one of the most commonly mis-answered JEE Advanced questions precisely because the 'obvious' electronegativity-based answer (F strongest) is wrong. Any time boron trihalide acidity is asked, default to the back-bonding explanation, not the inductive one.",
              "commonMistakes": [
                "Answering based on electronegativity alone without considering that boron's EMPTY orbital is itself available for pπ back-donation from halogen lone pairs.",
                "Applying the same back-bonding logic to a case where the central atom has no empty orbital to receive it — this specific reversal only works because boron is genuinely electron-deficient."
              ]
            }
          ]
        },
        {
          "id": "g13-diborane",
          "title": "Diborane (B₂H₆) — Preparation, Structure & Reactions",
          "exams": ["JEE Advanced"],
          "blocks": [
            {
              "kind": "detailed",
              "heading": "Preparation",
              "points": [
                "• Laboratory: 2BF₃ + 6NaH → B₂H₆ + 6NaF (473 K).",
                "• Industrial: 2BCl₃ + 6LiAlH₄ → B₂H₆ + 6LiCl + 3AlCl₃ is NOT the NCERT route — the NCERT industrial route is: BF₃ + 3NaBH₄ excess (from NaH + B(OCH₃)₃) → gives diborane; commonly quoted as 2NaBH₄ + I₂ → B₂H₆ + 2NaI + H₂ (in diglyme solvent)."
              ],
              "exams": ["JEE Advanced"]
            },
            {
              "kind": "detailed",
              "heading": "Structure — the defining JEE topic",
              "points": [
                "• 4 terminal B–H bonds: normal 2-centre-2-electron (2c–2e) covalent bonds, 2 on each boron, roughly tetrahedral around each B.",
                "• 2 bridging B–H–B bonds: each is a 3-centre-2-electron (3c–2e) 'banana' bond — TWO electrons shared over THREE atoms (B, H, B).",
                "• Total valence electrons available for bonding: each B contributes 3, each H contributes 1 → 2(3) + 6(1) = 12 electrons = 6 pairs. 4 terminal bonds use 4 pairs; the remaining 2 pairs are stretched over the two 3c–2e bridges.",
                "• Each boron is sp³ hybridised. The bridging hydrogens sit above and below the B₂H₄ plane."
              ],
              "exams": ["JEE Advanced"]
            },
            {
              "kind": "detailed",
              "heading": "Reactions",
              "points": [
                "• Hydrolysis: B₂H₆ + 6H₂O → 2B(OH)₃ + 6H₂ (vigorous).",
                "• Combustion: B₂H₆ + 3O₂ → B₂O₃ + 3H₂O, ΔH highly negative — diborane was studied as a rocket fuel for exactly this reason.",
                "• With ammonia: forms an adduct B₂H₆·2NH₃ that on heating gives 'inorganic benzene' — borazine, B₃N₃H₆.",
                "• Acts as a Lewis acid: cleaves by donor molecules (e.g. CO) into two BH₃ adducts (borane-carbonyl)."
              ],
              "exams": ["JEE Advanced"]
            },
            {
              "kind": "trap",
              "items": [
                { "trap": "Students count diborane's boron–hydrogen bonds as '6 identical B–H bonds'.", "reality": "They are NOT identical: 4 are normal 2c–2e terminal bonds and 2 are 3c–2e bridging bonds — a completely different bonding type with a different (longer) bond length." }
              ]
            },
            {
              "kind": "illustration",
              "level": "intermediate",
              "concept": "Diborane bonding — counting 3c–2e bonds and bonding electron pairs",
              "tricky": true,
              "question": "Diborane (B₂H₆) is treated with excess trimethylamine, N(CH₃)₃, at low temperature. It cleaves symmetrically to give two products. Identify the products and explain, using electron counting, why symmetrical (not unsymmetrical) cleavage occurs with this reagent.",
              "thinking": "Diborane can be cleaved by Lewis bases in two ways: symmetrically (each B gets one bridging H converted to a terminal donor bond) or unsymmetrically (one B keeps all 4 H, the other becomes a borohydride-like species). Which path wins depends on the steric bulk of the incoming base — small bases go unsymmetrical, bulky bases go symmetrical, because a bulky base cannot approach the crowded, more electron-rich boron of the unsymmetrical intermediate.",
              "steps": [
                { "label": "Recall diborane's electron economy", "work": "B₂H₆ has 12 valence electrons total: 4 in terminal 2c–2e B–H bonds (2 per boron) and 4 shared over the 2 bridging 3c–2e B–H–B bonds (2 electrons each, spread over 3 atoms)." },
                { "label": "Apply symmetrical cleavage", "work": "A bulky Lewis base like N(CH₃)₃ cannot get close enough to force unsymmetrical cleavage (which needs the base to attack one boron while a hydride migrates to the other). Instead, the B–H–B bridge breaks so that EACH boron keeps one bridging H as a normal terminal H and accepts one N(CH₃)₃ lone pair to complete its octet." },
                { "label": "Write the product", "work": "B₂H₆ + 2N(CH₃)₃ → 2[BH₃·N(CH₃)₃] — two identical borane–amine adducts, each boron now sp³ and octet-complete (3 B–H bonds + 1 dative B←N bond)." }
              ],
              "answer": "2 [BH₃·N(CH₃)₃] — symmetrical cleavage, because the bulky amine can only attack from outside without disturbing the bridge geometry equally on both borons.",
              "insight": "This is the standard JEE Advanced distinguishing test between small bases (CO, PF₃ → unsymmetrical cleavage, giving [BH₂(CO)₂]⁺[BH₄]⁻-type ionic products) and bulky/strong bases (NH₃, amines → symmetrical cleavage, giving two neutral adducts).",
              "commonMistakes": [
                "Assuming diborane always cleaves the same way regardless of the base — the products genuinely differ with base size/strength.",
                "Forgetting that each product boron must still satisfy the octet rule after cleavage."
              ]
            }
          ]
        },
        {
          "id": "g13-borax-boric-acid",
          "title": "Borax & Boric Acid",
          "exams": ["JEE Advanced"],
          "blocks": [
            {
              "kind": "detailed",
              "heading": "Borax — Na₂B₄O₇·10H₂O",
              "points": [
                "• Correct formula written as Na₂[B₄O₅(OH)₄]·8H₂O — the tetranuclear anion has 2 sp³ (tetrahedral, BO₄) and 2 sp² (triangular, BO₃) boron atoms linked through bridging oxygens.",
                "• Borax bead test: on heating, borax loses water and swells to a transparent glassy bead of sodium metaborate + boric anhydride (NaBO₂ + B₂O₃). The bead dissolves coloured-metal oxides to give characteristic coloured metaborate glasses — a classic qualitative-analysis test (e.g. Cu²⁺ → blue in oxidising flame, red-brown in reducing flame).",
                "• Aqueous solution of borax is alkaline (hydrolysis of a salt of a strong base + weak acid): B₄O₇²⁻ + 7H₂O ⇌ 4H₃BO₃ + 2OH⁻."
              ],
              "exams": ["JEE Advanced"]
            },
            {
              "kind": "detailed",
              "heading": "Boric Acid — H₃BO₃",
              "points": [
                "• Structure: planar BO₃ triangular units linked by hydrogen bonds into two-dimensional sheets — this is exactly why it feels soapy/flaky and cleaves easily between layers.",
                "• Acidity: it is a WEAK MONOBASIC Lewis acid, not a Brønsted acid. It does not ionise to release H⁺ itself; instead it accepts OH⁻ from water: B(OH)₃ + 2H₂O ⇌ [B(OH)₄]⁻ + H₃O⁺.",
                "• On strong heating: 4H₃BO₃ → H₂B₄O₇ (tetraboric acid) → 2B₂O₃ (boric anhydride) + stepwise water loss.",
                "• Uses: eyewash (mild antiseptic), glass/enamel/pottery glaze, preservative."
              ],
              "exams": ["JEE Advanced"]
            },
            {
              "kind": "mistake",
              "items": [
                { "wrong": "Writing H₃BO₃ as a triprotic Brønsted acid because it has 3 OH groups.", "right": "It is monobasic — all 3 OH groups stay on boron; acidity comes entirely from Lewis acceptance of OH⁻ by the electron-deficient boron, not proton donation." }
              ]
            }
          ]
        },
        {
          "id": "g13-aluminium-chemistry",
          "title": "Aluminium — Amphoteric Chemistry & AlCl₃",
          "exams": ["JEE Advanced"],
          "blocks": [
            {
              "kind": "detailed",
              "heading": "Core Notes",
              "points": [
                "• Amphoteric character: Al reacts with both acids and alkalis, releasing H₂ — 2Al + 6HCl → 2AlCl₃ + 3H₂, and 2Al + 2NaOH + 2H₂O → 2NaAlO₂ + 3H₂.",
                "• Passivation: concentrated HNO₃ makes Al passive (forms a protective oxide layer) — same behaviour as Fe and Cr.",
                "• AlCl₃: covalent and a dimer (Al₂Cl₆) in the vapour phase and in non-polar solvents like benzene; ionic and hydrated (as [Al(H₂O)₆]³⁺) in aqueous solution — a favourite 'state changes bonding' JEE question.",
                "• Al₂O₃ is amphoteric: dissolves in acid to give Al³⁺ salts and in alkali to give aluminate, [Al(OH)₄]⁻ / AlO₂⁻.",
                "• Al is used as a reducing agent in the thermite reaction: Fe₂O₃ + 2Al → Al₂O₃ + 2Fe (highly exothermic, used for welding railway tracks)."
              ],
              "exams": ["JEE Advanced"]
            },
            {
              "kind": "detailed",
              "heading": "Hall-Héroult Process — industrial extraction of aluminium",
              "points": [
                "• Purified alumina (Al₂O₃, from bauxite via the Bayer process) is dissolved in molten cryolite (Na₃AlF₆) — NOT dissolved in water, because Al₂O₃'s melting point (~2345 K) is far too high to melt economically on its own; cryolite lowers the effective melting point to ~1220 K and also increases the melt's electrical conductivity.",
                "• Electrolysis is carried out in a steel vessel lined with graphite (acts as the CATHODE); graphite rods dipped into the melt act as the ANODE.",
                "• Cathode: Al³⁺ + 3e⁻ → Al (molten aluminium collects at the bottom, denser than the melt, and is tapped off periodically).",
                "• Anode: 2O²⁻ → O₂ + 4e⁻ — the oxygen produced reacts with the carbon anode itself (C + O₂ → CO₂), so the graphite anodes are consumed and must be replaced periodically. This is why Hall-Héroult cells need continuous anode maintenance, unlike a typical inert-electrode electrolysis.",
                "• Overall this is why aluminium extraction is so energy-intensive — it must be done by electrolysis (Al is too reactive/high in the reactivity series to be reduced by carbon alone, unlike iron)."
              ],
              "exams": ["JEE Advanced"]
            }
          ]
        },
        {
          "id": "g13-inert-pair-uses",
          "title": "Inert-Pair Effect in Ga/In/Tl & Uses",
          "exams": ["JEE Advanced"],
          "blocks": [
            {
              "kind": "detailed",
              "heading": "Core Notes",
              "points": [
                "• Down the group, the +1 oxidation state becomes progressively more stable relative to +3, culminating in Tl: Tl⁺ is MORE stable than Tl³⁺, and Tl³⁺ compounds are strong oxidising agents (reduced readily to Tl⁺).",
                "• TlCl₃ readily decomposes to TlCl + Cl₂ — a direct consequence of Tl(III) instability.",
                "• Uses: B — semiconductors (doping silicon), borosilicate glass, detergents (perborates). Al — aircraft/vehicle bodies (light + strong via alloys like duralumin), electrical cables, thermite welding, packaging (foil). Ga — semiconductors (GaAs LEDs). In — used in low-melting alloys, touchscreens (indium tin oxide, ITO). Tl — historically a rodenticide (now restricted, highly toxic)."
              ],
              "exams": ["JEE Advanced"]
            },
            {
              "kind": "trap",
              "items": [
                { "trap": "Boron is in Group 13, so it must have +3 as its only oxidation state and form B³⁺ cations like other group members.", "reality": "Boron NEVER forms simple B³⁺ ions — all boron compounds are covalent. The sum of the first three ionization enthalpies is far too high; boron satisfies its electron deficiency by orbital overlap (forming electron-deficient bonds like in B₂H₆ and BF₃), never by ionising." },
                { "trap": "Diborane has 6 B–H bonds that are all chemically identical 2-centre-2-electron covalent bonds.", "reality": "Diborane has TWO types of B–H bonds: 4 normal 2c–2e terminal bonds and 2 bridging 3c–2e bonds. They have different lengths, different bond strengths, and participate in entirely different bonding mechanisms." },
                { "trap": "Boric acid is triprotic (3 ionisable protons) because it has 3 OH groups, so it should release 3 H⁺ in water like other triprotic acids.", "reality": "Boric acid is MONOBASIC — it does not release H⁺ directly. Instead, it accepts OH⁻ from water (Lewis acid): B(OH)₃ + 2H₂O ⇌ [B(OH)₄]⁻ + H₃O⁺. Only one proton is released per boric acid molecule, despite the 3 OH groups." },
                { "trap": "Gallium has a smaller atomic radius than aluminium because gallium is directly below aluminium and period 4 comes after period 3.", "reality": "Gallium is SMALLER than aluminium (anomaly caused by poor shielding of the filled 3d¹⁰ subshell in gallium, which lets the effective nuclear charge rise despite additional electrons). The trend is: Al > Ga < In < Tl, not monotonic." }
              ]
            },
            {
              "kind": "focus",
              "title": "What examiners actually test on Group 13",
              "points": [
                "Ga < Al anomaly in atomic radius — always tested as a trend-ordering MCQ.",
                "Diborane's bonding: counting 2c–2e vs 3c–2e bonds and total valence electron pairs.",
                "Borax bead test colours and the difference between BO₃/BO₄ boron environments.",
                "Boric acid as a Lewis (not Brønsted) acid — one of the most repeated conceptual traps in the whole p-block.",
                "AlCl₃ dimer structure and why the bridging happens (Al accepting a Cl lone pair, not H like diborane)."
              ]
            }
          ]
        },
        {
          "id": "g13-problem-bank",
          "title": "Group 13 — JEE Problem Bank",
          "exams": ["JEE Advanced"],
          "blocks": [
            {
              "kind": "illustration",
              "level": "advanced",
              "concept": "Borax structure — counting sp² vs sp³ boron and explaining alkaline hydrolysis",
              "tricky": true,
              "question": "Borax is Na₂B₄O₇·10H₂O, better written as Na₂[B₄O₅(OH)₄]·8H₂O. (a) How many boron atoms in the anion are sp² and how many are sp³? (b) How many B–OH groups are present? (c) An aqueous borax solution is alkaline and can be titrated against HCl using methyl orange. Write the hydrolysis equation and explain why the solution is basic. (d) How many moles of HCl neutralise 1 mole of borax?",
              "thinking": "Do not memorise the borax anion — build it. The formula [B₄O₅(OH)₄]²⁻ carries a 2− charge on 4 boron atoms. Neutral boron is trigonal (BO₃, sp²); boron becomes tetrahedral (BO₄, sp³) exactly when it accepts an extra donor and picks up the formal negative charge. So the number of sp³ borons equals the magnitude of the anion charge.",
              "steps": [
                { "label": "Use the charge to find sp³ centres", "work": "The anion charge is 2−. Each tetrahedral (sp³, 4-coordinate) boron carries one formal negative charge; each trigonal (sp², 3-coordinate) boron is neutral. Charge 2− ⇒ exactly 2 sp³ borons, and therefore 4 − 2 = 2 sp² borons." },
                { "label": "Locate the OH groups", "work": "The formula shows (OH)₄ — 4 hydroxyl groups, two on each of the two tetrahedral borons. The two trigonal borons carry no OH; they are linked only through bridging oxygens of the B₄O₅ core." },
                { "label": "Write the hydrolysis", "work": "Borax is the salt of a STRONG base (NaOH) and a WEAK acid (boric acid), so the anion hydrolyses: B₄O₇²⁻ + 7H₂O ⇌ 4H₃BO₃ + 2OH⁻. The liberated OH⁻ is what makes the solution alkaline." },
                { "label": "Count the HCl equivalents", "work": "The 2 OH⁻ released per borax unit consume 2 HCl: Na₂B₄O₇ + 2HCl + 5H₂O → 4H₃BO₃ + 2NaCl. So 1 mol borax ≡ 2 mol HCl — borax is a DIACIDIC base, which is precisely why it is used as a primary standard for standardising acids." }
              ],
              "answer": "(a) 2 sp² and 2 sp³ boron. (b) 4 B–OH groups. (c) B₄O₇²⁻ + 7H₂O ⇌ 4H₃BO₃ + 2OH⁻ — salt of strong base + weak acid, so anion hydrolysis liberates OH⁻. (d) 2 mol HCl per mol borax.",
              "insight": "The charge-counting shortcut (anion charge = number of sp³/tetrahedral boron centres) works for every borate and is far more reliable than trying to recall the drawn structure under exam pressure.",
              "fastMethod": "In any borate anion, #(4-coordinate sp³ B) = magnitude of the negative charge; the rest are 3-coordinate sp².",
              "commonMistakes": [
                "Saying all 4 borons are equivalent — borax deliberately mixes BO₃ and BO₄ environments, and questions are built on exactly that asymmetry.",
                "Using 1:1 borax:HCl stoichiometry — it is 1:2, which changes every titration numerical built on borax."
              ]
            },
            {
              "kind": "illustration",
              "level": "advanced",
              "concept": "Why glycerol/mannitol sharpens the titration of boric acid",
              "tricky": true,
              "question": "Boric acid cannot be titrated sharply against NaOH using phenolphthalein, but the titration becomes sharp on adding excess glycerol (or mannitol). Explain, using the mechanism of boric acid's acidity, why a polyhydroxy compound has this effect. Would adding ethanol (a monohydric alcohol) work equally well?",
              "thinking": "The key is that boric acid is a LEWIS acid, not a Brønsted acid — its acidity comes from B accepting OH⁻ from water, which only weakly releases H₃O⁺. Anything that pulls that equilibrium to the right increases the effective acid strength. So ask: what would stabilise the [B(OH)₄]⁻ product?",
              "steps": [
                { "label": "Write the actual acid equilibrium", "work": "B(OH)₃ + 2H₂O ⇌ [B(OH)₄]⁻ + H₃O⁺. Because B(OH)₃ is a very weak Lewis acid (Ka ≈ 5.8 × 10⁻¹⁰), this equilibrium lies far LEFT — too few H₃O⁺ ions exist for a sharp endpoint." },
                { "label": "Introduce the polyol", "work": "A cis-diol (two OH groups on adjacent carbons, as in glycerol or mannitol) chelates the tetrahedral borate centre, forming a stable 5-membered cyclic borate ester — a bidentate chelate. Two diol molecules can bind one boron, giving a stable 1:2 borate-diol complex anion." },
                { "label": "Apply Le Chatelier", "work": "By consuming [B(OH)₄]⁻ as a stable chelate, the polyol pulls the equilibrium strongly to the RIGHT, releasing far more H₃O⁺. The effective acid strength rises by several orders of magnitude, converting boric acid into a titratable strong-enough monoprotic acid with a sharp phenolphthalein endpoint." },
                { "label": "Test ethanol", "work": "No. Ethanol is MONOhydric — it has only one OH and cannot chelate. Chelation (the entropy-favoured ring closure by a cis-diol) is the entire source of the stabilisation, so a monohydric alcohol gives no meaningful enhancement. The requirement is specifically a cis-1,2-diol." }
              ],
              "answer": "Glycerol/mannitol chelate the [B(OH)₄]⁻ anion as a stable cyclic borate ester, pulling B(OH)₃ + 2H₂O ⇌ [B(OH)₄]⁻ + H₃O⁺ to the right and sharply raising effective acidity. Ethanol will NOT work — it is monohydric and cannot chelate.",
              "insight": "This problem is the practical pay-off of knowing boric acid is a Lewis (not Brønsted) acid. If you believed it simply donated H⁺ from its OH groups, the glycerol effect would be inexplicable.",
              "commonMistakes": [
                "Claiming glycerol 'increases ionisation of the O–H bonds' — the O–H bonds never ionise; the boron centre accepts OH⁻.",
                "Assuming any alcohol works — the cis-diol geometry is essential."
              ]
            },
            {
              "kind": "illustration",
              "level": "advanced",
              "concept": "Borazine vs benzene — isoelectronic but not equally aromatic",
              "question": "Borazine (B₃N₃H₆) is called 'inorganic benzene'. (a) Show that it is isoelectronic with benzene. (b) Despite the analogy, borazine adds 3 moles of HCl readily whereas benzene does not undergo addition. Explain. (c) Write the preparation of borazine from diborane.",
              "thinking": "'Isoelectronic' guarantees the same electron count and a similar planar 6-membered ring — it does NOT guarantee equal delocalisation. The moment two ring atoms differ in electronegativity, the π cloud stops being uniform, and uneven π density is what permits addition.",
              "steps": [
                { "label": "Establish the isoelectronic relationship", "work": "Benzene C₆H₆: 6 C (4 valence e⁻ each) + 6 H = 24 + 6 = 30 valence electrons. Borazine B₃N₃H₆: 3 B (3 e⁻) + 3 N (5 e⁻) + 6 H = 9 + 15 + 6 = 30 valence electrons. A B–N unit supplies the same 8 electrons as a C–C unit, so the two rings are isoelectronic and both planar 6-membered." },
                { "label": "Explain the reactivity difference", "work": "In benzene all six carbons are identical, so the π electrons are perfectly, symmetrically delocalised — full aromatic stabilisation, and addition would destroy it. In borazine, nitrogen (EN 3.0) is much more electronegative than boron (EN 2.0). The π density is drawn toward N, leaving B centres δ+ and N centres δ−. The ring is therefore polarised, delocalisation is incomplete, and aromatic stabilisation is significantly weaker." },
                { "label": "Predict the addition regiochemistry", "work": "Because B is δ+ and N is δ−, addition is polar and regioselective: the nucleophilic Cl⁻ adds to boron and H⁺ adds to nitrogen. B₃N₃H₆ + 3HCl → B₃N₃H₉Cl₃ (each B picks up Cl, each N picks up H)." },
                { "label": "Write the preparation", "work": "Diborane + ammonia at low temperature gives the adduct, which on strong heating cyclises: 3B₂H₆ + 6NH₃ → 2B₃N₃H₆ + 12H₂ (via the intermediate B₂H₆·2NH₃, heated to ~450 K)." }
              ],
              "answer": "(a) Both have 30 valence electrons and a planar 6-ring. (b) B–N electronegativity difference polarises the ring (B δ+, N δ−), weakening delocalisation, so polar addition occurs: Cl to B, H to N. (c) 3B₂H₆ + 6NH₃ → 2B₃N₃H₆ + 12H₂.",
              "insight": "Isoelectronic ≠ identical properties. Whenever an inorganic ring is offered as an analogue of an aromatic organic ring, check the electronegativity difference between ring atoms — that difference is almost always the intended answer.",
              "commonMistakes": [
                "Calling borazine 'fully aromatic like benzene' — it has only partial aromatic character.",
                "Getting the addition orientation backwards; Cl⁻ (nucleophile) must go to the electron-poor boron."
              ]
            },
            {
              "kind": "illustration",
              "level": "intermediate",
              "concept": "Amphoterism of aluminium — a gas-volume numerical",
              "question": "Two identical 0.54 g samples of aluminium foil are taken. Sample A is dissolved in excess dilute HCl; sample B is dissolved in excess aqueous NaOH. Calculate the volume of H₂ liberated at STP in each case, and state what this proves about aluminium. (Al = 27 g/mol; molar volume at STP = 22.4 L)",
              "thinking": "Amphoteric metals give the SAME hydrogen stoichiometry with acid and with alkali, because in both cases the oxidation half-reaction is identical: Al → Al³⁺ + 3e⁻. Only the fate of the aluminium (as Al³⁺ or as aluminate) differs. Predict equal volumes before calculating.",
              "steps": [
                { "label": "Moles of Al", "work": "n(Al) = 0.54 / 27 = 0.020 mol." },
                { "label": "Reaction with HCl", "work": "2Al + 6HCl → 2AlCl₃ + 3H₂. Ratio Al : H₂ = 2 : 3, so n(H₂) = 0.020 × 3/2 = 0.030 mol." },
                { "label": "Reaction with NaOH", "work": "2Al + 2NaOH + 6H₂O → 2Na[Al(OH)₄] + 3H₂. Ratio Al : H₂ = 2 : 3 again, so n(H₂) = 0.020 × 3/2 = 0.030 mol — identical." },
                { "label": "Convert to volume", "work": "V = 0.030 × 22.4 = 0.672 L = 672 mL at STP, in BOTH cases." },
                { "label": "Interpret", "work": "Equal H₂ from acid and from base is the operational definition of an amphoteric metal: Al is oxidised Al⁰ → Al³⁺ (losing 3e⁻) regardless of medium; only the product changes (AlCl₃ in acid, aluminate in alkali)." }
              ],
              "answer": "672 mL of H₂ at STP in BOTH cases — proving aluminium is amphoteric.",
              "insight": "Because the electron count per metal atom is what fixes the H₂ yield, any amphoteric metal (Al, Zn, Sn, Pb) gives identical gas volumes in acid and alkali. Examiners exploit this by asking for a 'ratio' — the answer is 1:1.",
              "fastMethod": "n(H₂) = n(metal) × (electrons lost per atom) / 2. For Al that is 3/2 in either medium."
            },
            {
              "kind": "misc",
              "level": "easy",
              "question": "Arrange BF₃, BCl₃, BBr₃, BI₃ in increasing order of Lewis acid strength.",
              "answer": "BF₃ < BCl₃ < BBr₃ < BI₃",
              "explanation": "Back-bonding (halogen lone pair → empty 2p of B) is strongest for F (best 2p–2p overlap) and weakest for I, so BF₃'s boron is least electron-hungry. This REVERSES the electronegativity prediction.",
              "exams": ["JEE Advanced"]
            },
            {
              "kind": "misc",
              "level": "easy",
              "question": "How many 3-centre-2-electron bonds and how many 2-centre-2-electron B–H bonds are present in diborane?",
              "answer": "2 three-centre-2-electron (bridging) and 4 two-centre-2-electron (terminal)",
              "explanation": "Total valence electrons = 2(3) + 6(1) = 12 = 6 pairs. Four pairs form the 4 terminal B–H bonds; the remaining 2 pairs are spread over the two B–H–B bridges.",
              "exams": ["JEE Advanced"]
            },
            {
              "kind": "misc",
              "level": "easy",
              "question": "State the hybridisation of boron in BF₃ and in BF₄⁻.",
              "answer": "sp² in BF₃ (trigonal planar); sp³ in BF₄⁻ (tetrahedral)",
              "explanation": "BF₃ has 3 bond pairs and no lone pair (steric number 3). On accepting F⁻ the steric number becomes 4, so boron rehybridises to sp³ and the geometry becomes tetrahedral.",
              "exams": ["JEE Advanced"]
            },
            {
              "kind": "misc",
              "level": "medium",
              "question": "Boric acid has three OH groups yet is monobasic. Explain in one line and give its reaction with water.",
              "answer": "It is a Lewis acid: B(OH)₃ + 2H₂O ⇌ [B(OH)₄]⁻ + H₃O⁺",
              "explanation": "It does not donate H⁺ from its own OH groups. Electron-deficient boron accepts OH⁻ from water, releasing exactly one H₃O⁺ per molecule — hence monobasic.",
              "exams": ["JEE Advanced"]
            },
            {
              "kind": "misc",
              "level": "medium",
              "question": "In the borax bead test, what colour does a copper salt give in (i) the oxidising flame and (ii) the reducing flame?",
              "answer": "(i) Blue-green [Cu(BO₂)₂]; (ii) red-brown (Cu₂O, or metallic Cu)",
              "explanation": "The oxidising flame preserves Cu(II) as blue-green copper metaborate; the reducing flame reduces it to Cu(I)/Cu(0), giving an opaque red-brown bead.",
              "exams": ["JEE Advanced"]
            },
            {
              "kind": "misc",
              "level": "medium",
              "question": "What is formed when borax is heated strongly, and why is this the basis of the bead test?",
              "answer": "NaBO₂ + B₂O₃ (a transparent glassy bead)",
              "explanation": "Na₂B₄O₇·10H₂O loses water, then melts to sodium metaborate + boric anhydride. The B₂O₃ in the bead dissolves coloured metal oxides as characteristic coloured metaborates.",
              "exams": ["JEE Advanced"]
            },
            {
              "kind": "misc",
              "level": "medium",
              "question": "Why is anhydrous AlCl₃ a dimer in benzene but exists as [Al(H₂O)₆]³⁺ in water?",
              "answer": "In benzene Al completes its octet by Cl-bridging (Al₂Cl₆); water is a better donor and solvates/ionises it",
              "explanation": "Aluminium in AlCl₃ has only 6 valence electrons. In a non-donor solvent it accepts a chlorine lone pair from a neighbour forming two Al–Cl–Al bridges. Water, a stronger Lewis base, displaces the bridges to give the hexaaqua ion.",
              "exams": ["JEE Advanced"]
            },
            {
              "kind": "misc",
              "level": "hard",
              "question": "Which of BF₄⁻, AlF₆³⁻, BF₆³⁻ and AlCl₄⁻ does NOT exist, and why?",
              "answer": "BF₆³⁻ — boron cannot exceed covalency 4",
              "explanation": "Boron is in period 2 with no accessible d-orbitals, so its maximum covalency is 4 (BF₄⁻). Aluminium (period 3) can use d-orbitals and reach 6-coordination, so AlF₆³⁻ is fine.",
              "exams": ["JEE Advanced"]
            },
            {
              "kind": "misc",
              "level": "hard",
              "question": "Between Tl⁺ and Tl³⁺, which is more stable, and what does this imply about the oxidising nature of Tl³⁺?",
              "answer": "Tl⁺ is more stable; therefore Tl³⁺ is a strong oxidising agent",
              "explanation": "The inert-pair effect is strongest at the bottom of Group 13: the 6s² pair resists ionisation. Tl³⁺ readily accepts 2 electrons to revert to Tl⁺, so it oxidises other species (e.g. TlCl₃ → TlCl + Cl₂).",
              "exams": ["JEE Advanced"]
            },
            {
              "kind": "misc",
              "level": "hard",
              "question": "Diborane is treated with (i) CO and (ii) excess NH₃ at high temperature. Give the products.",
              "answer": "(i) 2 BH₃·CO (borane carbonyl); (ii) B₃N₃H₆ (borazine) + H₂",
              "explanation": "CO is a small donor that cleaves the bridges to give two borane–carbonyl adducts. Excess ammonia at high temperature gives the cyclic 'inorganic benzene', borazine.",
              "exams": ["JEE Advanced"]
            },
            {
              "kind": "misc",
              "level": "hard",
              "question": "Explain why the atomic radius of gallium is smaller than that of aluminium.",
              "answer": "Poor shielding by the filled 3d¹⁰ subshell in Ga raises the effective nuclear charge",
              "explanation": "Ga is preceded by the first transition series. d-electrons shield the nucleus poorly, so Z_eff felt by Ga's outer electrons exceeds that in Al, contracting the atom despite the extra shell. Order: B < Ga < Al < In < Tl.",
              "exams": ["JEE Advanced"]
            },
            {
              "kind": "misc",
              "level": "challenge",
              "question": "1 mole of borax is titrated with HCl using methyl orange. How many moles of HCl are consumed, and why is borax a primary standard?",
              "answer": "2 moles of HCl; it is pure, stable, non-hygroscopic and of high, exactly known equivalent mass",
              "explanation": "Na₂B₄O₇ + 2HCl + 5H₂O → 4H₃BO₃ + 2NaCl. Hydrolysis releases 2 OH⁻ per formula unit, making borax diacidic. Its high molar mass keeps weighing errors small — hence its use as a primary standard.",
              "exams": ["JEE Advanced"]
            },
            {
              "kind": "misc",
              "level": "challenge",
              "question": "Write the formula of potash alum and state what makes a salt a 'double salt' rather than a complex.",
              "answer": "K₂SO₄·Al₂(SO₄)₃·24H₂O — a double salt gives ALL its constituent ions in solution",
              "explanation": "Double salts exist only in the solid lattice; on dissolving they dissociate completely into K⁺, Al³⁺ and SO₄²⁻ (each detectable). A complex salt keeps its coordination sphere intact in solution, so the bound ion is not detectable by normal tests.",
              "exams": ["JEE Advanced"]
            },
            {
              "kind": "misc",
              "level": "challenge",
              "question": "Why does B₂H₆ hydrolyse vigorously while BF₃ merely forms an adduct with water?",
              "answer": "The hydridic B–H bonds react with H⁺ of water to release H₂; B–F bonds have no such hydride",
              "explanation": "B₂H₆ + 6H₂O → 2B(OH)₃ + 6H₂ — the H on boron is hydridic (δ−) and combines with the protic H (δ+) of water, an energetically large driving force. BF₃ has no hydride, so it only forms BF₃·OH₂ (and slowly gives fluoroboric acid).",
              "exams": ["JEE Advanced"]
            }
          ]
        }
      ]
    },
    {
      "id": "group-14-carbon-family",
      "title": "Group 14 — Carbon Family",
      "intro": "Carbon to lead: catenation collapse down the group, the inert-pair effect at its strongest, carbon's allotropes, and the SiO₄-tetrahedron logic behind every silicate.",
      "exams": ["JEE Advanced"],
      "subtopics": [
        {
          "id": "g14-occurrence-classification-general-properties",
          "title": "Occurrence, Classification & General Properties",
          "exams": ["JEE Advanced"],
          "blocks": [
            {
              "kind": "detailed",
              "heading": "Core Notes",
              "points": [
                "• Configuration: ns² np². Carbon: [He] 2s² 2p². Silicon: [Ne] 3s² 3p².",
                "• Occurrence — Carbon: free (diamond, graphite) and combined (carbonates, CO₂, coal, petroleum, all organic matter).",
                "• Occurrence — Silicon: 2nd most abundant element in Earth's crust after oxygen; always combined, never free — as silica (SiO₂, e.g. quartz, sand) and silicates.",
                "• Classification: C and Si are non-metals, Ge is a metalloid, Sn and Pb are metals — a clean non-metal → metalloid → metal progression down the group, sharper than in Group 13.",
                "• Oxidation states: +4 is the group state (mostly covalent). +2 becomes progressively more important and eventually dominant at Pb (inert-pair effect, stronger here than in Group 13 because it's now the ns² pair alone resisting ionisation after losing both np electrons)."
              ],
              "exams": ["JEE Advanced"]
            }
          ]
        },
        {
          "id": "g14-physical-chemical-trends",
          "title": "Physical & Chemical Trends",
          "exams": ["JEE Advanced"],
          "blocks": [
            {
              "kind": "detailed",
              "heading": "Core Notes",
              "points": [
                "Property  •  Trend / Notes",
                "Atomic Radius  •  C < Si < Ge < Sn < Pb — increases fairly regularly (unlike Group 13's Ga dip).",
                "Ionization Enthalpy  •  C > Si > Ge > Sn ≈ Pb — decreases down the group but flattens out at the bottom.",
                "Catenation  •  C >> Si > Ge ≈ Sn >> Pb. Carbon's C–C bond (346 kJ/mol) is far stronger than Si–Si (226 kJ/mol); catenation essentially disappears by lead.",
                "Melting Point  •  Very high for C (diamond, giant covalent, ~3820 K) and Si; then drops sharply and stays comparatively low for Ge, Sn, Pb (metallic bonding).",
                "Inert-pair effect  •  Strongest single trend in the group: Sn²⁺ is reducing (readily oxidised to Sn⁴⁺), while Pb⁴⁺ is a strong oxidising agent (readily reduced to Pb²⁺) — exact reverse partners, a very common redox MCQ pairing.",
                "Multiple bonding  •  Only carbon forms strong pπ–pπ bonds (C=C, C≡C); silicon and heavier members overwhelmingly prefer single bonds or pπ–dπ bonding to O/halogens instead."
              ],
              "exams": ["JEE Advanced"]
            }
          ]
        },
        {
          "id": "g14-allotropes-of-carbon",
          "title": "Allotropes of Carbon",
          "exams": ["JEE Advanced"],
          "blocks": [
            {
              "kind": "detailed",
              "heading": "Diamond",
              "points": [
                "• Every carbon is sp³ hybridised, tetrahedrally bonded to 4 other carbons (C–C = 154 pm) in a rigid, extended 3-D network.",
                "• Hardest known natural substance; poor conductor of electricity (no delocalised/free electrons — every valence electron is in a localised σ bond); excellent thermal conductor (vibrations transmit efficiently through the rigid lattice)."
              ],
              "exams": ["JEE Advanced"]
            },
            {
              "kind": "detailed",
              "heading": "Graphite",
              "points": [
                "• Each carbon is sp² hybridised, bonded to 3 others in flat hexagonal sheets (C–C = 141.5 pm, shorter than diamond due to partial double-bond character).",
                "• The 4th electron per carbon is delocalised across the sheet → graphite conducts electricity (along the sheet) and is soft/slippery — layers are held only by weak van der Waals forces and slide over each other, giving graphite its use as a dry lubricant and pencil 'lead'.",
                "• Thermodynamically more stable than diamond at room temperature and pressure (ΔG less positive), though the conversion is immeasurably slow without extreme conditions."
              ],
              "exams": ["JEE Advanced"]
            },
            {
              "kind": "detailed",
              "heading": "Fullerenes",
              "points": [
                "• C₆₀ (Buckminsterfullerene) is the most important — a closed cage of 20 hexagons + 12 pentagons, shaped like a football/soccer ball, all sp² carbon.",
                "• Only crystalline allotrope of carbon with a well-defined, finite molecular formula (unlike diamond/graphite, which are giant covalent network solids with no fixed formula).",
                "• Contains both single and double C–C bonds; does NOT have a fully delocalised aromatic system like graphite."
              ],
              "exams": ["JEE Advanced"]
            },
            {
              "kind": "trick",
              "items": [
                { "trick": "\"Diamond is Directionally-bonded (sp³, hard); Graphite Glides (sp², soft, conducts)\"", "recall": "sp³ tetrahedral network = hardest insulator; sp² sheets + van der Waals gaps = soft conductor." }
              ]
            }
          ]
        },
        {
          "id": "g14-oxides-of-carbon",
          "title": "Oxides of Carbon",
          "exams": ["JEE Advanced"],
          "blocks": [
            {
              "kind": "detailed",
              "heading": "Core Notes",
              "points": [
                "• Carbon monoxide, CO: neutral oxide (NOT acidic despite being a non-metal oxide — a classic JEE trap). Prepared by incomplete combustion, or in the lab by dehydration of formic acid with hot conc. H₂SO₄: HCOOH → CO + H₂O.",
                "• CO is isoelectronic with N₂ and CN⁻; it bonds to transition metals (e.g. Fe in haemoglobin) via the lone pair on carbon, forming very stable metal carbonyls — this is exactly why CO poisoning is dangerous (binds haemoglobin ~200× more strongly than O₂).",
                "• Carbon dioxide, CO₂: acidic oxide, linear molecule (O=C=O), sp hybridised carbon. Forms carbonic acid in water: CO₂ + H₂O ⇌ H₂CO₃."
              ],
              "exams": ["JEE Advanced"]
            },
            {
              "kind": "mistake",
              "items": [
                { "wrong": "Assuming CO is acidic because it's a non-metal oxide.", "right": "CO is neutral — it does not react with water, dilute acids, or dilute bases under normal conditions." }
              ]
            },
            {
              "kind": "detailed",
              "heading": "Producer Gas & Water Gas — industrial CO sources",
              "points": [
                "• Producer gas: air is passed over red-hot coke. C + O₂ → CO₂ (exothermic), immediately followed by CO₂ + C → 2CO (endothermic) — net product is a mixture of CO + N₂ (the nitrogen simply passes through from the air). Cheap industrial fuel and reducing agent, precisely because it's mostly made of the flammable/reducing CO.",
                "• Water gas (synthesis gas): steam is passed over red-hot coke. C + H₂O → CO + H₂ (endothermic) — gives a CO + H₂ mixture, an important industrial feedstock (e.g. for methanol synthesis, Fischer-Tropsch-type processes) as well as a fuel.",
                "• Both processes are the industrial-scale version of exactly the same idea: red-hot carbon reduces an oxidant (O₂ in air, or H₂O steam) while itself only reaching the +2 oxidation state (CO), not the fully oxidised +4 (CO₂) — because excess hot carbon is always present to reduce any CO₂ formed back to CO."
              ],
              "exams": ["JEE Advanced"]
            },
            {
              "kind": "illustration",
              "level": "intermediate",
              "concept": "Why CO₂ is a molecular gas but SiO₂ is a giant covalent solid, despite an identical formula ratio",
              "question": "CO₂ and SiO₂ both have the empirical formula 'XO₂', yet CO₂ is a gas at room temperature while SiO₂ (quartz/sand) is a hard solid melting above 1900 K. Explain this difference in terms of bonding, and predict which one would you expect to react with hot concentrated NaOH, and why.",
              "thinking": "The formula ratio is identical, so the difference MUST come from HOW the atoms are connected (multiple discrete small molecules vs one continuous covalent network), which in turn comes down to whether the central atom can form strong π bonds.",
              "steps": [
                { "label": "Carbon's bonding capability", "work": "Carbon (2p orbitals) forms strong, short pπ–pπ bonds with oxygen — CO₂ is O=C=O, a small, DISCRETE, linear triatomic molecule. Only weak van der Waals forces hold separate CO₂ molecules to each other, so it sublimes/is gaseous at ordinary conditions." },
                { "label": "Silicon's bonding limitation", "work": "Silicon (3p orbitals) is too large and diffuse for efficient pπ–pπ overlap with oxygen's compact 2p orbital — Si simply cannot form a strong Si=O double bond the way carbon forms C=O. Instead, silicon satisfies its 4 bonds with FOUR separate single Si–O bonds, each oxygen then bridging to another silicon." },
                { "label": "Consequence for structure", "work": "This forces SiO₂ into an extended 3-D network of corner-sharing SiO₄ tetrahedra (every O shared between 2 Si) — a single giant covalent 'molecule' extending through the whole crystal, requiring enormous energy to melt or break apart." },
                { "label": "Reactivity with NaOH", "work": "SiO₂, despite looking chemically inert, IS attacked by hot concentrated NaOH (a classic reaction, also the reason NaOH solutions are stored in polyethylene, not glass, bottles): SiO₂ + 2NaOH → Na₂SiO₃ + H₂O. CO₂ reacts with NaOH far more readily and under milder conditions (even cold, dilute NaOH): CO₂ + 2NaOH → Na₂CO₃ + H₂O, because it is a small, easily-attacked discrete molecule rather than a robust extended network." }
              ],
              "answer": "CO₂ is molecular (strong C=O pπ bonds → small discrete gas molecules); SiO₂ is a giant covalent network (Si cannot form Si=O π bonds efficiently, so it uses 4 single bonds per Si in an extended 3-D lattice of SiO₄ tetrahedra). Both react with NaOH, but SiO₂ needs hot, concentrated NaOH while CO₂ reacts even with cold, dilute NaOH.",
              "insight": "The 'why doesn't silicon behave like carbon' question is one of the most-repeated comparative reasoning prompts in Group 14 — the answer is almost always rooted in silicon's poor pπ–pπ overlap due to larger, more diffuse orbitals.",
              "fastMethod": "Whenever asked to compare a 2nd-period p-block element's compound to the analogous 3rd-period (or heavier) compound and explain a structural difference, check first whether pπ–pπ multiple bonding is possible for the heavier element — it almost never is, and that's usually the whole answer."
            }
          ]
        },
        {
          "id": "g14-silicates-zeolites-silicones",
          "title": "Silicates, Zeolites & Silicones",
          "exams": ["JEE Advanced"],
          "blocks": [
            {
              "kind": "detailed",
              "heading": "Core Notes",
              "points": [
                "• Every silicate is built from the SiO₄ tetrahedron. The number of oxygen atoms SHARED between adjacent tetrahedra sets the structure type: 0 shared → orthosilicate (isolated SiO₄⁴⁻); 1 shared → pyrosilicate (Si₂O₇⁶⁻); 2 shared → chain/pyroxene silicates; 3 shared → sheet silicates (mica, talc, kaolin); 4 shared → 3-D framework silicates (quartz, feldspar) — the same-formula ratio SiO₂ despite the very different structures.",
                "• Zeolites: 3-D aluminosilicate frameworks where some Si⁴⁺ is replaced by Al³⁺, giving the framework a net negative charge balanced by mobile cations (Na⁺, Ca²⁺) sitting in cavities — this is what makes them useful as ion-exchangers (water softening) and molecular sieves.",
                "• Silicones: synthetic polymers (R₂SiO)ₙ with a repeating –Si–O–Si–O– backbone and organic (methyl, etc.) groups attached to silicon. Prepared by hydrolysis of R₂SiCl₂ followed by condensation polymerisation. Water-repellent, thermally stable, chemically inert — used as sealants, lubricants, waterproofing agents and in medical implants.",
                "• Silicon carbide (SiC, carborundum): extremely hard, made by heating SiO₂ with excess coke; used as an abrasive.",
                "• Silica gel: amorphous (non-crystalline) SiO₂, prepared by acidifying sodium silicate solution — the resulting gel is dried to give a highly porous solid with an enormous internal surface area. Used as a desiccant (drying agent) and adsorbent precisely because of that huge surface area, not because of any special chemical reactivity — it works purely by physical adsorption of water/moisture into its pores."
              ],
              "exams": ["JEE Advanced"]
            }
          ]
        },
        {
          "id": "g14-tin-lead-compounds",
          "title": "Tin & Lead Compounds",
          "exams": ["JEE Advanced"],
          "blocks": [
            {
              "kind": "detailed",
              "heading": "Core Notes",
              "points": [
                "• SnCl₂ (tin(II) chloride): reducing agent (readily oxidised to Sn⁴⁺); used to reduce Hg²⁺ to Hg and Fe³⁺ to Fe²⁺ in qualitative tests.",
                "• PbO₂ (lead dioxide): strong oxidising agent (readily reduced to Pb²⁺); oxidises conc. HCl to Cl₂ and Mn²⁺ to MnO₄⁻.",
                "• Pb₃O₄ (red lead): mixed oxide, effectively 2PbO·PbO₂ — reacts with dilute HNO₃ to give Pb(NO₃)₂ + PbO₂ + water, a classic evidence-for-mixed-oxidation-state reaction.",
                "• PbS: occurs naturally as galena, the chief ore of lead."
              ],
              "exams": ["JEE Advanced"]
            },
            {
              "kind": "illustration",
              "level": "intermediate",
              "concept": "Inert-pair redox: Sn²⁺ as reductant, Pb⁴⁺ as oxidant",
              "question": "Equal moles of SnCl₂ and PbO₂ are separately treated with excess concentrated HCl. Write the balanced ionic equation for each reaction, identify which element is oxidised and which is reduced in each case, and explain why these two Group 14 compounds behave as opposite ends of the same redox couple.",
              "thinking": "Both reactions hinge on the same fact: the +2 state is unusually stable for Sn AND for Pb, but for opposite kinetic reasons — Sn²⁺ has 'unused' capacity to reach the group state (+4) so it is easily oxidised further, while Pb⁴⁺ is unstable relative to Pb²⁺ (inert-pair effect at its strongest for the heaviest member) so it readily grabs electrons to fall back to +2.",
              "steps": [
                { "label": "SnCl₂ + HCl (no redox partner needed from HCl here — SnCl₂ reduces something else)", "work": "SnCl₂ itself is the reducing agent; with conc. HCl alone (no oxidant present) it simply forms the complex [SnCl₄]²⁻ — no redox change. The redox behaviour shows up when SnCl₂ is added to an oxidant, e.g.: Sn²⁺ + Hg²⁺ → Sn⁴⁺ + Hg (Sn is oxidised, +2 → +4)." },
                { "label": "PbO₂ + conc. HCl", "work": "PbO₂ + 4HCl → PbCl₂ + Cl₂ + 2H₂O. Lead goes from +4 (in PbO₂) to +2 (in PbCl₂) — REDUCED. Chlorine goes from −1 (in HCl) to 0 (in Cl₂) — OXIDISED. PbO₂ is therefore the oxidising agent here, exactly analogous to how MnO₂ oxidises conc. HCl to Cl₂." },
                { "label": "State the general principle", "work": "Sn: +2 is the LESS stable state relative to the group state (+4) → SnCl₂ acts as a reducing agent, itself getting oxidised to Sn⁴⁺. Pb: +2 is the MORE stable state (inert-pair effect dominates at the bottom of the group) → PbO₂ (Pb⁴⁺) acts as an oxidising agent, itself getting reduced to Pb²⁺." }
              ],
              "answer": "Sn²⁺ → Sn⁴⁺ (Sn is oxidised; SnCl₂ is a reducing agent). Pb⁴⁺ → Pb²⁺ (Pb is reduced; PbO₂ is an oxidising agent). PbO₂ + 4HCl → PbCl₂ + Cl₂↑ + 2H₂O.",
              "insight": "This Sn²⁺/Pb⁴⁺ opposite-behaviour pair is one of the most frequently recycled redox facts in JEE Advanced inorganic chemistry — expect it disguised inside larger multi-step reaction sequences, not just asked directly.",
              "fastMethod": "Whenever you see Sn²⁺ in a reaction with any decent oxidant, assume it gets oxidised to Sn⁴⁺. Whenever you see Pb⁴⁺ (PbO₂, Pb₃O₄) with any decent reductant (or even just conc. HCl), assume it gets reduced to Pb²⁺."
            },
            {
              "kind": "trap",
              "items": [
                { "trap": "Carbon and silicon are in the same group (Group 14), so they should form similar oxides: CO₂ and SiO₂ are both gas/liquid at room temperature.", "reality": "CO₂ is a gas (discrete O=C=O molecules), while SiO₂ is a giant covalent solid melting above 1900 K. Silicon cannot form Si=O double bonds (diffuse 3p orbitals, poor pπ–pπ overlap), so SiO₂ is an extended 3-D network of SiO₄ tetrahedra, not a small molecule." },
                { "trap": "Carbon monoxide is a non-metal oxide, so it must be acidic like SO₂ and NO₂.", "reality": "CO is NEUTRAL — it does not react with water, dilute acids, or dilute bases under normal conditions. This is one of the most frequently tested exceptions to the 'non-metal oxide = acidic' rule." },
                { "trap": "Lead(IV) oxide PbO₂ and Lead(II) chloride PbCl₂ are equally stable because both contain lead.", "reality": "Pb⁴⁺ is highly unstable (strong inert-pair effect at the bottom of Group 14) — PbO₂ is a strong oxidising agent that readily gets reduced to Pb²⁺. In contrast, PbCl₂ is stable. The inert-pair effect makes Pb(II) far more stable than Pb(IV)." },
                { "trap": "Tin(II) chloride SnCl₂ and lead(II) chloride PbCl₂ should have similar reactivity as reducing/oxidising agents since they're both M²⁺ compounds.", "reality": "SnCl₂ is a strong REDUCING agent (Sn²⁺ easily oxidised to Sn⁴⁺ — the +2 state is less stable than the group state +4). PbCl₂ is inert — Pb(II) is actually MORE stable than Pb(IV). These are opposite ends of the same redox couple, a classic JEE pairing." }
              ]
            },
            {
              "kind": "focus",
              "title": "What examiners actually test on Group 14",
              "points": [
                "Sn²⁺ reducing vs Pb⁴⁺ oxidising — the single most-repeated Group 14 redox fact.",
                "CO's neutral (not acidic) character, and its bonding to transition metals via the lone pair on C.",
                "Diamond vs graphite: hybridisation, conductivity, and WHY (delocalised electron availability).",
                "Silicate classification by number of shared oxygens per SiO₄ tetrahedron.",
                "C₆₀ as the only carbon allotrope with a definite molecular formula."
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "group-15-nitrogen-family",
      "title": "Group 15 — Nitrogen Family",
      "intro": "Nitrogen to bismuth: periodic trends, hydrides, halides, nitrogen oxides, nitric acid chemistry, phosphorus and oxoacids.",
      "exams": [
        "JEE Advanced"
      ],
      "subtopics": [
        {
          "id": "g15-occurrence-classification-general-properties",
          "title": "Occurrence, Classification & General Properties",
          "exams": [
            "JEE Advanced"
          ],
          "blocks": [
            {
              "kind": "detailed",
              "heading": "Core Notes",
              "points": [
                "• Nitrogen: 78% of atmosphere. Chile Saltpetre (NaNO₃), Indian Saltpetre (KNO₃). Found in proteins.",
                "• Phosphorus: Apatite family (Ca₉ (PO₄)₆ .CaX₂). Found in bones/cells.",
                "• As, Sb, Bi: Found mainly as Sulphide minerals .",
                "• Classification: • Non-Metals: N, P • Metalloids: As, Sb • Metals: Bi, Mc",
                "• Polyatomic Nature: N₂ is a gas (diatomic). P₄, As₄, Sb₄ are solids (polyatomic).",
                "Moscovium (Mc) - Z=115: • Mass No: 289 (Isobar with Flerovium, Fl). • Config: [Rn] 5f¹⁴ 6d¹⁰ 7s² 7p³ . • Radioactive, short half-life.",
                "◆ A. Natural Occurrence (NCERT)",
                "• Nitrogen: 78% of atmosphere (by vol). • Chile Saltpetre: NaNO₃ • Indian Saltpetre: KNO₃ • Found in proteins (plants/animals).",
                "• Phosphorus: • Apatite Family: Ca₉ (PO₄)₆ .CaX₂ (X = F, Cl, OH). Major component of phosphate rocks. • Essential for bones and living cells (phosphoproteins).",
                "• As, Sb, Bi: Mainly found as Sulphide minerals."
              ],
              "exams": [
                "JEE Advanced"
              ]
            },
            {
              "kind": "detailed",
              "heading": "Continued",
              "points": [
                "◆ B. Moscovium (Mc) - Synthetic",
                "• Atomic Number: 115",
                "• Config: [Rn] 5f¹⁴ 6d¹⁰ 7s² 7p³",
                "• Nature: Synthetic, Radioactive.",
                "• Half-life: Very short (fraction of a second).",
                "• Chemistry: Not fully established due to short life."
              ],
              "exams": [
                "JEE Advanced"
              ]
            }
          ]
        },
        {
          "id": "g15-physical-trends-periodic-behaviour",
          "title": "Physical Trends & Periodic Behaviour",
          "exams": [
            "JEE Advanced"
          ],
          "blocks": [
            {
              "kind": "detailed",
              "heading": "Core Notes",
              "points": [
                "Property  •  Trend / Notes",
                "Atomic Radius  •  N < P < As < Sb < Bi (Increases down). Large increase N → P, small As → Bi.",
                "Ionization Energy  •  N > P > As > Sb > Bi Extra stable due to half-filled p -orbitals.",
                "Electronegativity  •  N(3.0) > P(2.1) > As(2.0) > Sb(1.9) = Bi(1.9)",
                "Melting Point  •  N < P < As > Sb > Bi TRAP Max at Arsenic .",
                "Boiling Point  •  N < P < As < Bi < Sb NCERT Table Sb (1860 K) > Bi (1837 K).",
                "Allotropy  •  All elements show allotropy EXCEPT Nitrogen .",
                "Bond Strength  •  P–P > N–N (Single Bond). N–N bond is weaker due to inter-electronic repulsion of non-bonding electrons (small bond length).",
                "◆ Oxidation States & Stability",
                "• Common States: -3, +3, +5."
              ],
              "exams": [
                "JEE Advanced"
              ]
            },
            {
              "kind": "detailed",
              "heading": "Continued",
              "points": [
                "• -3 State: Stability decreases down the group (Increase in size/metallic character). Bi hardly forms -3.",
                "• +5 State: Stability decreases down the group due to Inert Pair Effect . Bi(V) is a strong Oxidizing Agent (e.g. BiF₅).",
                "• +3 State: Stability increases down the group.",
                "Nitrogen Anomaly: 1. No d -orbitals (Max covalency = 4). 2. N cannot form NCl₅·3. Forms stable pπ–pπ multiple bonds (N≡N). 4. Catenation: Weaker in N than P.",
                "Bond Formation: P, As, Sb form single bonds. Bismuth forms metallic bonds in elemental state. Heavier elements form dπ–pπ bonds (e.g., R₃P=O).",
                "Atomic Radius  •  Increases Down. NOTE Large increase N → P. Small increase As → Bi (d/f orbitals).",
                "Melting Point  •  N < P < As > Sb > Bi TRAP Max at Arsenic . Decreases afterwards.",
                "Boiling Point  •  N < P < As < Sb < Bi (Regular increase due to size).",
                "Catenation  •  P >> N > As > Sb N–N bond is weak due to lone pair repulsion.",
                "Nitrogen Anomaly: 1. No d -orbitals (Max covalency = 4). 2. N cannot form NCl₅·3. Forms stable pπ–pπ multiple bonds (N≡N)."
              ],
              "exams": [
                "JEE Advanced"
              ]
            }
          ]
        },
        {
          "id": "g15-halides",
          "title": "Halides",
          "exams": [
            "JEE Advanced"
          ],
          "blocks": [
            {
              "kind": "detailed",
              "heading": "Core Notes",
              "points": [
                "◆ A. Trihalides (EX₃)",
                "• Stability: All trihalides are stable EXCEPT those of Nitrogen. Only NF₃ is known to be stable.",
                "• Nature: Predominantly Covalent. EXCEPTION BiF₃ is Ionic.",
                "◆ B. Pentahalides (EX₅)",
                "• N cannot form pentahalides (Absence of d-orbitals).",
                "• Bi rarely forms pentahalides (Inert Pair Effect). Only BiF₅ is known.",
                "• Character: Pentahalides are more covalent than trihalides (Higher polarizing power of +5 state).",
                "• Structure: Trigonal Bipyramidal (Gas). Axial bonds longer than equatorial.",
                "IMP Solid State Structures: 1. PCl₅ (s) is Ionic: [PCl₄ ]⁺ [PCl₆ ]⁻·2. PBr₅ (s) is Ionic: [PBr₄ ]⁺Br⁻ .",
                "Hydrolysis Products"
              ],
              "exams": [
                "JEE Advanced"
              ]
            },
            {
              "kind": "detailed",
              "heading": "Continued",
              "points": [
                "NCl₃  •  NH₃ + HOCl",
                "PCl₃  •  H₃PO₃ + HCl",
                "Sb/BiCl₃  •  SbOCl / BiOCl (White Turbidity)",
                "◆ A. Pentahalides (EX₅)",
                "• Formation: Formed by P, As, Sb. N cannot form (no d-orbitals).",
                "• Stability: Bi rarely forms pentahalides due to Inert Pair Effect (only BiF₅ is known).",
                "• Nature: More Covalent than Trihalides.",
                "• Structure (Gas): Trigonal Bipyramidal. Axial bonds longer than equatorial.",
                "JEE FAVORITE Solid State Structures: 1. PCl₅ (s) is Ionic: [PCl₄ ]⁺ (Tetrahedral) & [PCl₆ ]⁻ (Octahedral). 2. PBr₅ (s) is Ionic: [PBr₄ ]⁺Br⁻ .",
                "◆ B. Trihalides (EX₃)"
              ],
              "exams": [
                "JEE Advanced"
              ]
            },
            {
              "kind": "detailed",
              "heading": "Continued",
              "points": [
                "• Structure: Pyramidal (sp³).",
                "• Nature: Covalent. EXCEPTION BiF₃ is Ionic .",
                "• Hydrolysis (Memorize Products): • NCl₃ → NH₃ + HOCl (Water attacks Cl) • PCl₃ → H₃PO₃ + HCl (Water attacks P) • SbCl₃ /BiCl₃ → SbOCl / BiOCl (White Turbidity)"
              ],
              "exams": [
                "JEE Advanced"
              ]
            }
          ]
        },
        {
          "id": "g15-hydrides",
          "title": "Hydrides",
          "exams": [
            "JEE Advanced"
          ],
          "blocks": [
            {
              "kind": "detailed",
              "heading": "Core Notes",
              "points": [
                "Property  •  Order (Lowest → Highest)",
                "Melting Point  •  PH₃ < AsH₃ < SbH₃ < NH₃",
                "Boiling Point  •  PH₃ < AsH₃ < NH₃ < SbH₃ < BiH₃",
                "Thermal Stability  •  BiH₃ < SbH₃ < AsH₃ < PH₃ < NH₃",
                "Reducing Nature  •  NH₃ < PH₃ < AsH₃ < SbH₃ < BiH₃",
                "Basic Strength  •  BiH₃ < SbH₃ < AsH₃ < PH₃ < NH₃",
                "Bond Angle  •  BiH₃ ≈ 90° < PH₃ < NH₃ (107.8°)",
                "IMP Boiling/Melting Anomaly: NH₃ has higher MP/BP than expected due to Hydrogen Bonding .",
                "Ligands: PH₃ acts as a ligand in coordination compounds.",
                "Bond Angle  •  BiH₃ ≈ 90° < PH₃ < NH₃ (107.8°) (Drago's Rule: No hybridization below P)"
              ],
              "exams": [
                "JEE Advanced"
              ]
            },
            {
              "kind": "detailed",
              "heading": "Continued",
              "points": [
                "IMP Boiling Point Anomaly: PH₃ < AsH₃ < NH₃ < SbH₃ < BiH₃ (NH₃ higher due to H-Bonding)."
              ],
              "exams": [
                "JEE Advanced"
              ]
            },
            {
              "kind": "detailed",
              "heading": "Haber's Process — industrial manufacture of NH₃",
              "points": [
                "• Reaction: N₂(g) + 3H₂(g) ⇌ 2NH₃(g), ΔH = −92.4 kJ/mol (exothermic, reversible).",
                "• Catalyst: finely divided iron, promoted with Mo (molybdenum) or a mixture of K₂O and Al₂O₃ to increase catalytic efficiency.",
                "• Conditions: ~473–573 K (moderate temperature — a compromise, since the exothermic reaction favours LOW temperature by Le Chatelier but rate favours HIGH temperature) and 200 atm pressure (favours the forward reaction, which reduces gas moles: 4 mol reactant gas → 2 mol product gas).",
                "• Le Chatelier basis (a frequently tested reasoning question): high pressure shifts equilibrium right (fewer moles of gas on the product side); low temperature would maximise equilibrium yield but makes the rate too slow industrially, so a moderate temperature is chosen to balance yield against rate.",
                "• Lab preparation of NH₃ (distinct from industrial): heating any ammonium salt with a base, e.g. 2NH₄Cl + Ca(OH)₂ → CaCl₂ + 2NH₃ + 2H₂O."
              ],
              "exams": [
                "JEE Advanced"
              ]
            }
          ]
        },
        {
          "id": "g15-oxides-of-nitrogen",
          "title": "Oxides of Nitrogen",
          "exams": [
            "JEE Advanced"
          ],
          "blocks": [
            {
              "kind": "detailed",
              "heading": "Core Notes",
              "points": [
                "Oxide  •  Structure  •  Nature",
                "N₂O (+1)  •  Linear (N=N=O)  •  Neutral",
                "NO (+2)  •  Odd e⁻  •  Neutral",
                "N₂O₃ (+3)  •  Planar, Blue Solid  •  Acidic",
                "NO₂ (+4)  •  Angular, Brown Gas  •  Acidic",
                "N₂O₄ (+4)  •  Planar Dimer  •  Acidic",
                "N₂O₅ (+5)  •  Planar/Ionic Solid  •  Acidic",
                "Reactivity towards Oxygen: • Acidic: N, P oxides. • Amphoteric: As, Sb oxides. • Basic: Bi oxides.",
                "Oxide  •  Color / State  •  Properties",
                "N₂O (+1)  •  Colorless Gas  •  Neutral, Diamagnetic"
              ],
              "exams": [
                "JEE Advanced"
              ]
            },
            {
              "kind": "detailed",
              "heading": "Continued",
              "points": [
                "NO (+2)  •  Colorless Gas  •  Neutral, Paramagnetic (odd e⁻)",
                "N₂O₃ (+3)  •  Blue Solid  •  Acidic, Diamagnetic",
                "NO₂ (+4)  •  Brown Gas  •  Bent, Acidic, Paramagnetic",
                "N₂O₄ (+4)  •  Colorless Solid  •  Dimer of NO₂, Diamagnetic",
                "N₂O₅ (+5)  •  Colorless Solid  •  Ionic Solid: [NO₂ ]⁺ [NO₃ ]⁻"
              ],
              "exams": [
                "JEE Advanced"
              ]
            }
          ]
        },
        {
          "id": "g15-important-reactions-nitric-acid",
          "title": "Important Reactions & Nitric Acid",
          "exams": [
            "JEE Advanced"
          ],
          "blocks": [
            {
              "kind": "detailed",
              "heading": "Core Notes",
              "points": [
                "◆ A. Disproportionation",
                "• Nitrogen (+3): 3HNO₂ → HNO₃ + H₂O + 2NO",
                "• Phosphorus: Intermediate states disproportionate in both alkali and acid. 4H₃PO₃ → 3H₃PO₄ + PH₃",
                "• As, Sb, Bi: +3 state is stable (Inert Pair Effect), no disproportionation.",
                "◆ B. Nitric Acid (HNO₃)",
                "Metal  •  Dilute HNO₃  •  Conc. HNO₃",
                "Copper (Cu)  •  NO  •  NO₂",
                "Zinc (Zn)  •  N₂O  •  NO₂",
                "◆ C. Brown Ring Test",
                "• Complex: [Fe(H₂O)₅ (NO)]²⁺ ."
              ],
              "exams": [
                "JEE Advanced"
              ]
            },
            {
              "kind": "detailed",
              "heading": "Continued",
              "points": [
                "• Fe Oxidation State: +1.",
                "◆ A. HNO₃ + Metals (Crucial)",
                "Metal  •  Dilute HNO₃Product  •  Conc. HNO₃Product",
                "Copper (Cu)  •  NO (Nitric Oxide)  •  NO₂",
                "Zinc (Zn)  •  N₂O (Laughing Gas)  •  NO₂",
                "NOTE Cr, Al do not dissolve in Conc. HNO₃ (Passive Oxide).",
                "◆ B. Brown Ring Test (Nitrate)",
                "• Depends on reduction of Nitrate to NO by Fe²⁺ .",
                "• Fe Oxidation State: +1. NO Charge: +1."
              ],
              "exams": [
                "JEE Advanced"
              ]
            },
            {
              "kind": "detailed",
              "heading": "Ostwald's Process — industrial manufacture of HNO₃",
              "points": [
                "• Step 1 (catalytic oxidation of ammonia): 4NH₃ + 5O₂ →[Pt/Rh gauze catalyst, 500 K, 9 bar] 4NO + 6H₂O.",
                "• Step 2 (oxidation of NO): 2NO + O₂ → 2NO₂ (fast, spontaneous at ordinary temperature).",
                "• Step 3 (absorption in water): 3NO₂ + H₂O → 2HNO₃ + NO — the NO regenerated is recycled back into Step 2, making the process continuous.",
                "• The dilute HNO₃ produced (~68%) is concentrated by distillation with concentrated H₂SO₄ (a dehydrating agent) up to ~98%.",
                "• The whole process is essentially oxidising ammonia's nitrogen from −3 all the way to +5 (in HNO₃) through +2 (NO) and +4 (NO₂) intermediate states — a clean worked example of tracking oxidation state across a multi-step industrial process."
              ],
              "exams": [
                "JEE Advanced"
              ]
            },
            {
              "kind": "detailed",
              "heading": "Aqua Regia — dissolving noble metals",
              "points": [
                "• Aqua regia ('royal water'): a freshly prepared 1:3 mixture of concentrated HNO₃ and concentrated HCl — famous for dissolving noble metals (Au, Pt) that resist both acids individually.",
                "• Mechanism: HNO₃ oxidises a small amount of metal (e.g. Au → Au³⁺); the large excess of Cl⁻ from HCl then immediately complexes the metal ion as a very stable chloro-complex (e.g. [AuCl₄]⁻), continuously pulling the oxidation equilibrium forward — it's the COMBINATION of oxidation + complexation that dissolves the metal, neither acid does it alone.",
                "• Illustrative (unbalanced form often quoted): Au + HNO₃ + 4HCl → HAuCl₄ + NO + 2H₂O."
              ],
              "exams": [
                "JEE Advanced"
              ]
            },
            {
              "kind": "trap",
              "items": [
                { "trap": "Nitrogen should be able to form NCl₅ or NF₅ just like phosphorus forms PCl₅, since they're in the same group.", "reality": "Nitrogen can NEVER exceed a covalency of 4 (no accessible d-orbitals in n=2) — NCl₅ and NF₅ do not exist. Only phosphorus and heavier congeners (with accessible d-orbitals) can expand beyond 4 bonds, e.g. PCl₅." },
                { "trap": "In the brown ring test, the iron in [Fe(H₂O)₅(NO)]²⁺ should be Fe²⁺ since the starting reagent is a Fe²⁺ salt (FeSO₄).", "reality": "The iron oxidation state in the brown ring complex is +1, NOT +2. NO is bonded as NO⁺ formally donating an electron to Fe, shifting Fe from +2 to +1 in the complex — a frequently mis-assigned oxidation state." },
                { "trap": "Concentrated HNO₃ dissolves all reactive metals including aluminium and chromium, since it's a strong oxidising acid.", "reality": "Al and Cr become PASSIVE in concentrated HNO₃ — a thin protective oxide layer forms on the metal surface, preventing further reaction. This is the same passivation behaviour seen with Fe in conc. HNO₃." },
                { "trap": "All Group 15 oxoacid disproportionations should follow the same direction (like nitrogen's HNO₂ → HNO₃ + NO), since it's a group-wide behavior.", "reality": "As, Sb, and Bi's +3 oxidation state is actually STABLE due to the inert-pair effect — no disproportionation occurs for their +3 compounds, unlike nitrogen and phosphorus intermediate oxidation states, which readily disproportionate." }
              ]
            },
            {
              "kind": "focus",
              "title": "What examiners actually test on Group 15",
              "points": [
                "Nitrogen's anomaly: no d-orbitals (max covalency 4), pπ–pπ multiple bonding that heavier congeners can't replicate.",
                "Ga<Al-style trend breaks — here, the As melting-point maximum and the irregular boiling-point order.",
                "Phosphorus oxoacid basicity = P–OH count; disproportionation direction depends on which adjacent oxidation states are accessible.",
                "Industrial processes (Haber, Ostwald) as sources of Le Chatelier reasoning questions, not just as facts to recall.",
                "Brown ring test's exact complex ([Fe(H₂O)₅(NO)]²⁺) and the iron oxidation state trap (+1, not +2 or +3)."
              ]
            }
          ]
        },
        {
          "id": "g15-phosphorus-phosphine",
          "title": "Phosphorus & Phosphine",
          "exams": [
            "JEE Advanced"
          ],
          "blocks": [
            {
              "kind": "detailed",
              "heading": "Core Notes",
              "points": [
                "Property  •  White P  •  Red P",
                "Structure  •  Discrete P₄  •  Polymeric",
                "Reactivity  •  High (Glows)  •  Less Reactive",
                "Solubility  •  Sol. in CS₂  •  Insoluble",
                "Phosphine (PH₃): • Prep: P₄ + 3NaOH + 3H₂O → PH₃ + 3NaH₂PO₂ • Holme's Signal: Uses CaC₂ + Ca₃P₂ ."
              ],
              "exams": [
                "JEE Advanced"
              ]
            },
            {
              "kind": "detailed",
              "heading": "Oxides of Phosphorus — P₄O₆ and P₄O₁₀",
              "points": [
                "• P₄O₆ (phosphorus trioxide): formed by burning P₄ in a LIMITED supply of O₂. Structure: built on the same P₄ tetrahedron as white phosphorus, but with an oxygen atom inserted into each of the 6 P–P edges (no P=O bonds, no oxygen directly on any single P beyond the bridges). Each P is +3.",
                "• P₄O₁₀ (phosphorus pentoxide): formed by burning P₄ in EXCESS O₂. Structure: same P₄O₆ core (6 bridging O) PLUS one additional terminal P=O on each of the 4 phosphorus atoms — so P₄O₁₀ has 6 bridging + 4 terminal = 10 oxygens total. Each P is +5.",
                "• P₄O₁₀ is an extremely powerful dehydrating agent — famously used to convert HNO₃ to N₂O₅ and H₂SO₄ to SO₃ by literally removing water of constitution, not just water of crystallisation.",
                "• Hydrolysis: P₄O₆ + 6H₂O → 4H₃PO₃ (cold water); P₄O₁₀ + 6H₂O → 4H₃PO₄ (vigorous, even reacts with atmospheric moisture) — each oxide hydrolyses to the oxoacid matching its own P oxidation state (+3 → H₃PO₃, +5 → H₃PO₄), which is the fastest way to remember which acid comes from which oxide."
              ],
              "exams": [
                "JEE Advanced"
              ]
            }
          ]
        },
        {
          "id": "g15-oxoacids-of-phosphorus",
          "title": "Oxoacids of Phosphorus",
          "exams": [
            "JEE Advanced"
          ],
          "blocks": [
            {
              "kind": "detailed",
              "heading": "Core Notes",
              "points": [
                "Reducing power ∝ No. of P–H bonds.",
                "Acid  •  Basicity  •  Nature",
                "H₃PO₂  •  1 (Monobasic)  •  Very Strong R.A. (2 P-H)",
                "H₃PO₃  •  2 (Dibasic)  •  Strong R.A. (1 P-H)",
                "H₃PO₄  •  3 (Tribasic)  •  Non-reducing",
                "Disproportionation: 4H₃PO₃ → 3H₃PO₄ + PH₃"
              ],
              "exams": [
                "JEE Advanced"
              ]
            },
            {
              "kind": "illustration",
              "level": "advanced",
              "concept": "Disproportionation of phosphorus oxoacids — assigning oxidation states first",
              "tricky": true,
              "question": "Phosphorous acid (H₃PO₃) disproportionates on heating to give orthophosphoric acid and phosphine. (a) Assign the oxidation state of P in H₃PO₃, H₃PO₄ and PH₃. (b) Balance the disproportionation equation. (c) Explain why H₃PO₂ (hypophosphorous acid) does NOT disproportionate the same way despite having an even lower oxidation state of P.",
              "thinking": "Oxidation state of P in an oxoacid is found by treating every O as −2, every ionisable/acidic H (the ones on O) as +1, and — the step students most often skip — every P–H hydrogen contributes 0 to the P oxidation-state calculation the normal way (H is still +1, but it's bonded directly to P so it doesn't change with O count); the fastest method is to just balance the whole molecule to zero charge.",
              "steps": [
                { "label": "Oxidation state in H₃PO₃", "work": "H₃PO₃ has 2 P–OH and 1 P–H (from the basicity table: dibasic, 1 P–H). Whole-molecule charge balance: 3(+1) + x + 3(−2) = 0 → 3 + x − 6 = 0 → x = +3." },
                { "label": "Oxidation state in H₃PO₄", "work": "All 3 H are P–OH (tribasic, 0 P–H). 3(+1) + x + 4(−2) = 0 → 3 + x − 8 = 0 → x = +5." },
                { "label": "Oxidation state in PH₃", "work": "3(+1) + x = 0 → x = −3." },
                { "label": "Confirm disproportionation", "work": "P goes from +3 (in H₃PO₃) to BOTH +5 (in H₃PO₄, oxidised) and −3 (in PH₃, reduced) — the defining signature of disproportionation: the same starting oxidation state splits into a higher and a lower product." },
                { "label": "Balance by electron transfer", "work": "Per P atom going +3→+5: loses 2e⁻. Per P atom going +3→−3: gains 6e⁻. To balance electrons, 3 molecules must be oxidised for every 1 reduced (3×2e⁻ lost = 6e⁻ gained): 4H₃PO₃ → 3H₃PO₄ + PH₃." },
                { "label": "Why H₃PO₂ does not follow the same path", "work": "H₃PO₂ is monobasic — 1 P–OH and 2 P–H. Charge balance: 3(+1) + x + 2(−2) = 0 → 3 + x − 4 = 0 → x = +1. On heating, H₃PO₂ disproportionates too, but to a different pair: 2H₃PO₂ → H₃PO₃ + PH₃ (P: +1 → +3 oxidised, and +1 → −3 reduced). It goes to phosphorous acid, not directly to phosphoric acid, because +3 and −3 are the electron-balanced states accessible one step up and down from +1." }
              ],
              "answer": "P: +3 in H₃PO₃, +5 in H₃PO₄, −3 in PH₃. Balanced: 4H₃PO₃ → 3H₃PO₄ + PH₃. H₃PO₂ disproportionates too, but to H₃PO₃ + PH₃ (2H₃PO₂ → H₃PO₃ + PH₃), not to H₃PO₄, because it disproportionates to its adjacent accessible oxidation states.",
              "insight": "Reducing power ∝ number of P–H bonds is the shortcut, but disproportionation questions require the actual oxidation-state arithmetic — don't skip straight to the memorised rule when a question asks you to justify it.",
              "commonMistakes": [
                "Forgetting that H₃PO₂ ALSO disproportionates — a common false belief is that only H₃PO₃ does.",
                "Miscounting P–H vs P–OH hydrogens when assigning oxidation state — always cross-check against the basicity (basicity = number of P–OH groups)."
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "group-16-oxygen-family",
      "title": "Group 16 — Oxygen Family",
      "intro": "Chalcogens: periodic trends, oxidation states, hydrides, oxides, halides, O₂/O₃, sulphur allotropes, SO₂ and oxoacids.",
      "exams": [
        "JEE Advanced"
      ],
      "subtopics": [
        {
          "id": "g16-occurrence-general-features",
          "title": "Occurrence & General Features",
          "exams": [
            "JEE Advanced"
          ],
          "blocks": [
            {
              "kind": "detailed",
              "heading": "Core Notes",
              "points": [
                "Known as Chalcogens (Ore forming elements).",
                "• Oxygen: Most abundant in crust (46.6% mass). 21% of atmosphere (vol).",
                "• Sulphur (0.03-0.1%): • Gypsum: CaSO₄·2H₂O • Epsom Salt: MgSO₄·7H₂O • Baryte: BaSO₄ • Galena: PbS  •  Zinc Blende: ZnS  •  Copper Pyrites: CuFeS₂",
                "• Se/Te: Found as metal selenides/tellurides in sulphide ores.",
                "• Polonium (Po): Decay product of Thorium/Uranium. ADDED Radioactive. Short half-life (13.8 days).",
                "• Livermorium (Lv, Z=116): Synthetic, Radioactive. Mass=292.",
                "Classification: • Non-Metals: Oxygen, Sulphur • Metalloids: Selenium, Tellurium • Metals: Polonium",
                "◆ A. Natural Occurrence",
                "• Oxygen: Most abundant element on Earth's crust (46.6% by mass). 21% of atmosphere.",
                "• Sulfur: Occurs as Gypsum (CaSO₄·2H₂O), Epsom Salt (MgSO₄·7H₂O), Baryte (BaSO₄)."
              ],
              "exams": [
                "JEE Advanced"
              ]
            },
            {
              "kind": "detailed",
              "heading": "Continued",
              "points": [
                "• Polonium (Po): Radioactive (Decay product of Th/U).",
                "◆ B. Livermorium (Lv) - Synthetic",
                "• Atomic No: 116. Mass: 292.",
                "• Config: [Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁴ .",
                "• Nature: Radioactive, very short half-life."
              ],
              "exams": [
                "JEE Advanced"
              ]
            }
          ]
        },
        {
          "id": "g16-physical-trends",
          "title": "Physical Trends",
          "exams": [
            "JEE Advanced"
          ],
          "blocks": [
            {
              "kind": "detailed",
              "heading": "Core Notes",
              "points": [
                "Property  •  Trend / Details",
                "Radii  •  Increases Down. O < S < Se < Te < Po",
                "Ionization Enthalpy  •  Decreases Down. NOTE Lower than Grp 15 (due to stable p³of Grp 15).",
                "Electron Gain  •  S > Se > Te > Po > O TRAP Oxygen has least negative value (except Po) due to compact 2p-shell electron repulsion. S is most negative.",
                "Electronegativity  •  O(3.5) > S(2.58) > Se > Te > Po Oxygen is 2nd most electronegative element.",
                "Melting Point  •  O < S < Se < Te > Po Increases up to Te, then decreases. Anomaly: Po has lower MP than Te.",
                "Boiling Point  •  O < S < Se < Te > Po Increases up to Te, then decreases.",
                "Allotropy  •  All elements of the group exhibit allotropy.",
                "MP/BP Data Highlights (NCERT Table 7.6): 1. Large jump from O to S (due to O₂ gas vs S₈ solid). 2. Polonium Anomaly: MP: Te (725 K) > Po (520 K) . BP: Te (1260 K) > Po (1235 K) .",
                "Property  •  Trend / Notes"
              ],
              "exams": [
                "JEE Advanced"
              ]
            },
            {
              "kind": "detailed",
              "heading": "Continued",
              "points": [
                "Atomic Radius  •  Increases Down (Regular).",
                "Ionization Energy  •  O > S > Se > Te > Po Lower than Grp 15 (due to p⁴ vs stable p³).",
                "Electron Gain Enthalpy  •  S > Se > Te > Po > O TRAP S is most negative . Oxygen is less negative due to small size/repulsion.",
                "Melting/Boiling Pt  •  Increases with size. NOTE Large diff between O and S (O₂ gas vs S₈ solid).",
                "Anomalous Behavior of Oxygen: 1. Small size, High EN. 2. Strong H-Bonding (H₂O is liquid, H₂S is gas). 3. Absence of d -orbitals (Max covalency = 4). 4. Paramagnetic in nature (O₂)."
              ],
              "exams": [
                "JEE Advanced"
              ]
            }
          ]
        },
        {
          "id": "g16-oxidation-states",
          "title": "Oxidation States",
          "exams": [
            "JEE Advanced"
          ],
          "blocks": [
            {
              "kind": "detailed",
              "heading": "Core Notes",
              "points": [
                "• -2 State: Stability decreases down the group. Po hardly shows -2.",
                "• Oxygen: Shows -2 mostly. • In OF₂: +2 • In O₂F₂: +1 • In Peroxides: -1",
                "• +4 State: Stability Increases down (Inert Pair Effect). SO₂ is stable gas.",
                "• +6 State: Stability Decreases down. SF₆ is very stable.",
                "Stability with O and F: • Higher oxidation states (+4, +6) are more stable with Fluorine and Oxygen because they are highly electronegative. • Bonding with F is mostly covalent; with O it can be multiple bonds (dπ–pπ)."
              ],
              "exams": [
                "JEE Advanced"
              ]
            }
          ]
        },
        {
          "id": "g16-hydrides",
          "title": "Hydrides",
          "exams": [
            "JEE Advanced"
          ],
          "blocks": [
            {
              "kind": "detailed",
              "heading": "Core Notes",
              "points": [
                "Property  •  Trend (Low → High)",
                "Acidic Strength  •  H₂O < H₂S < H₂Se < H₂Te Dissociation enthalpy decreases down.",
                "Thermal Stability  •  H₂Po < H₂Te < H₂Se < H₂S < H₂O",
                "Enthalpy of Formation  •  Becomes less negative (or more positive) from H₂O to H₂Te, indicating decreasing stability.",
                "Reducing Nature  •  H₂O < H₂S < H₂Se < H₂Te (H₂O is non-reducing).",
                "Bond Angle  •  H₂Te < H₂Se < H₂S (92°) < H₂O (104.5°)",
                "V.IMP Boiling Point Anomaly: H₂S < H₂Se < H₂Te < H₂O (Water is liquid due to strong H-bonding).",
                "Elements: H₂O, H₂S, H₂Se, H₂Te, H₂Po",
                "Property  •  Order (Lowest → Highest)",
                "Acidic Character  •  H₂O < H₂S < H₂Se < H₂Te (Bond dissociation energy decreases down)."
              ],
              "exams": [
                "JEE Advanced"
              ]
            },
            {
              "kind": "detailed",
              "heading": "Continued",
              "points": [
                "V. IMP Boiling Point Anomaly: H₂S < H₂Se < H₂Te < H₂O Reason: Strong Intermolecular H-Bonding in Water."
              ],
              "exams": [
                "JEE Advanced"
              ]
            },
            {
              "kind": "detailed",
              "heading": "Preparation of H₂S",
              "points": [
                "• Laboratory: FeS + dilute H₂SO₄ → FeSO₄ + H₂S (Kipp's apparatus is the classic delivery setup for this exact reaction).",
                "• H₂S is a weak diprotic acid and an important precipitating/reducing agent in qualitative inorganic analysis — used to precipitate group-II sulphides (e.g. CuS, PbS, HgS) from acidic solution, and group-IV sulphides (e.g. ZnS, MnS) from ammoniacal/basic solution.",
                "• H₂S itself is oxidised by many oxidants (acts as a reducing agent, consistent with S going from −2 up to 0/+higher states) — e.g. 2H₂S + SO₂ → 3S + 2H₂O (this is also how sulphur can be recovered from H₂S-containing gas streams)."
              ],
              "exams": [
                "JEE Advanced"
              ]
            }
          ]
        },
        {
          "id": "g16-oxides-oxide-trends",
          "title": "Oxides & Oxide Trends",
          "exams": [
            "JEE Advanced"
          ],
          "blocks": [
            {
              "kind": "detailed",
              "heading": "Core Notes",
              "points": [
                "◆ A. Dioxides (EO₂)",
                "• States: O₃, SO₂ are Gases . SeO₂ is a Solid .",
                "• Redox Nature (Trend): • SO₂ is Reducing . • TeO₂ is Oxidizing .",
                "• Reducing property decreases down the group.",
                "◆ B. Acidic Character",
                "• Trend: Acidic character decreases down the group.",
                "• SO₂ is purely acidic.",
                "• TeO₂ is amphoteric.",
                "Elements: SO₂, SeO₂, TeO₂",
                "Property  •  Trend"
              ],
              "exams": [
                "JEE Advanced"
              ]
            },
            {
              "kind": "detailed",
              "heading": "Continued",
              "points": [
                "Reducing Nature  •  Decreases Down group. SO₂ is Reducing . TeO₂ is Oxidizing .",
                "Physical State  •  SO₂ (Gas) → SeO₂ (Solid).",
                "Acidic Nature  •  Decreases down group."
              ],
              "exams": [
                "JEE Advanced"
              ]
            }
          ]
        },
        {
          "id": "g16-halides",
          "title": "Halides",
          "exams": [
            "JEE Advanced"
          ],
          "blocks": [
            {
              "kind": "detailed",
              "heading": "Core Notes",
              "points": [
                "Stability: F > Cl > Br > I",
                "◆ A. Hexahalides (EX₆)",
                "• Only Hexafluorides are stable. All are gases.",
                "• Structure: Octahedral.",
                "• SF₆: Exceptionally stable due to steric reasons . Chemically inert.",
                "◆ B. Tetrahalides (EX₄)",
                "• States: SF₄ (Gas), SeF₄ (Liquid), TeF₄ (Solid).",
                "• Structure: sp³d . See-Saw geometry. (1 Lone Pair equatorial).",
                "◆ C. Di- & Monohalides",
                "• Dihalides (EX₂): All elements except Oxygen form Dichlorides and Dibromides . Structure: sp³ (Tetrahedral). e.g., SCl₂ ."
              ],
              "exams": [
                "JEE Advanced"
              ]
            },
            {
              "kind": "detailed",
              "heading": "Continued",
              "points": [
                "• Monohalides (E₂X₂): Dimeric in nature. Examples: S₂F₂, S₂Cl₂, S₂Br₂, Se₂Cl₂, Se₂Br₂ .",
                "• Disproportionation (NCERT): Dimeric halides disproportionate on heating: 2Se₂Cl₂ → SeCl₄ + 3Se",
                "• Hexafluorides (SF₆): • Structure: Octahedral . • Inertness: SF₆ is chemically inert due to steric protection of S by 6 F atoms.",
                "• Tetrafluorides (SF₄): • Structure: See-Saw (Trigonal Bipyramidal geometry with 1 Lone Pair at equatorial). • Physical State: SF₄ (Gas), SeF₄ (Liquid), TeF₄ (Solid).",
                "Hydrolysis: SF₆: No Hydrolysis. SF₄ + H₂O → SO₂ + HF (Easy Hydrolysis). TeF₆: Hydrolyses slowly."
              ],
              "exams": [
                "JEE Advanced"
              ]
            }
          ]
        },
        {
          "id": "g16-dioxygen-ozone",
          "title": "Dioxygen & Ozone",
          "exams": [
            "JEE Advanced"
          ],
          "blocks": [
            {
              "kind": "detailed",
              "heading": "Core Notes",
              "points": [
                "• Prep: Heating Chlorates/Nitrates/Permanganates. 2KClO₃ → 2KCl + 3O₂ (MnO₂ catalyst). Thermal decomposition: 2Ag₂O → 4Ag + O₂ .",
                "• Nature: Paramagnetic (even electrons, but unpaired in π*).",
                "• Reactions: • 4Al + 3O₂ → 2Al₂O₃ • 2ZnS + 3O₂ → 2ZnO + 2SO₂ • 2SO₂ + O₂ → 2SO₃ (V₂O₅ cat). • 4HCl + O₂ → 2Cl₂ + 2H₂O (CuCl₂ cat).",
                "• Prep: 3O₂ ↔ 2O₃ (ΔH = +142 kJ). Silent electric discharge.",
                "• Props: Pale blue gas, dark blue liquid, violet black solid.",
                "• Thermodynamics: Unstable vs O₂ . Decomposition is exothermic (ΔH -ve) and entropy increases (ΔS +ve). Large -ve ΔG.",
                "• Oxidizing Action: PbS(s) + 4O₃ → PbSO₄ (s) + 4O₂ 2I⁻ (aq) + H₂O + O₃ → 2OH⁻ + I₂ + O₂",
                "• Estimation: Iodine liberated above is titrated against Hypo (Na₂S₂O₃) using starch indicator.",
                "• Depletion: By NO (jets) and Freons. NO + O₃ → NO₂ + O₂ .",
                "• Structure: Angular (117°). Resonance hybrid. Bond length 128 pm."
              ],
              "exams": [
                "JEE Advanced"
              ]
            },
            {
              "kind": "detailed",
              "heading": "Continued",
              "points": [
                "◆ A. Dioxygen (O₂)",
                "• Prep: Heating Chlorates/Nitrates (KClO₃ → KCl + O₂ with MnO₂).",
                "• Nature: Paramagnetic (even though even electrons). Unpaired electrons in Anti-bonding π* orbitals.",
                "◆ B. Ozone (O₃)",
                "• Prep: Silent electric discharge on pure O₂ (Endothermic).",
                "• Structure: Bent (117°), Resonance Hybrid. Diamagnetic.",
                "• Test (Tailing of Mercury): 2Hg + O₃ → Hg₂O (Meniscus lost).",
                "• Estimation (Quantitative): O₃ + 2I⁻ + H₂O → I₂ + O₂ + 2OH⁻ (Titrate liberated I₂ with Na₂S₂O₃).",
                "• Depletion: By NO (Supersonic jets) and Freons. NO + O₃ → NO₂ + O₂"
              ],
              "exams": [
                "JEE Advanced"
              ]
            },
            {
              "kind": "detailed",
              "heading": "MOT explanation — why O₂ is paramagnetic despite an even electron count",
              "points": [
                "• Lewis structure (O=O) predicts ALL electrons paired — it cannot explain O₂'s paramagnetism, which is exactly why this is a favourite JEE Advanced 'Lewis structure fails, MO theory succeeds' question.",
                "• O₂ has 16 electrons total (8 from each O). MO filling order for O₂ (and F₂, since Z > 7): σ1s² σ*1s² σ2s² σ*2s² σ2pz² π2px²=π2py² π*2px¹=π*2py².",
                "• The KEY result: the two highest-energy electrons occupy the DEGENERATE π*2px and π*2py antibonding orbitals SEPARATELY (Hund's rule — maximum multiplicity), one electron each, both with parallel spin. Two unpaired electrons = paramagnetic.",
                "• Bond order calculation: BO = ½(bonding electrons − antibonding electrons). Count VALENCE electrons only — the filled core σ1s²/σ*1s² pair cancels exactly and can always be ignored. Bonding: σ2s² + σ2pz² + π2px² + π2py² = 8 electrons. Antibonding: σ*2s² + π*2px¹ + π*2py¹ = 4 electrons. BO = ½(8 − 4) = 2.",
                "• So MO theory reproduces the Lewis double bond (BO = 2) but adds what Lewis cannot: that this bond order of 2 is achieved with TWO electrons unpaired, not zero. Same bond order, completely different magnetic prediction — and experiment (liquid O₂ sticking to a magnet) backs MO theory.",
                "• This is also why O₂⁺ (dioxygenyl cation, removing one π* electron) has a HIGHER bond order (2.5) and shorter, stronger bond than neutral O₂ — a very common bond-order comparison question, and directly explains why Bartlett used PtF₆ (which is a strong enough oxidiser to form O₂⁺) to first predict Xe could also be oxidised, since Xe's first ionisation energy is close to O₂'s."
              ],
              "exams": [
                "JEE Advanced"
              ]
            }
          ]
        },
        {
          "id": "g16-sulphur-allotropes-sulphur-dioxide",
          "title": "Sulphur Allotropes & Sulphur Dioxide",
          "exams": [
            "JEE Advanced"
          ],
          "blocks": [
            {
              "kind": "detailed",
              "heading": "Core Notes",
              "points": [
                "Feature  •  Rhombic (α)  •  Monoclinic (β)",
                "Color  •  Yellow  •  Colorless (Needle)",
                "MP  •  385.8 K  •  393 K",
                "Solubility  •  Insol water, Sol CS₂  •  Sol CS₂",
                "Preparation  •  Evap of roll sulphur in CS₂  •  Melting rhombic & cooling",
                "Structure  •  S₈ (Puckered Crown)  •  S₈ (Puckered)",
                "Transition Temp: 369 K. Both stable at this temp. Cyclo-S₆: Chair form. IMP S₂ (Vapor): At high temp (~1000K), S₂ is dominant species. It is Paramagnetic like O₂ (unpaired e⁻ in π*).",
                "• Prep: • Burning S. • Roasting: 4FeS₂ + 11O₂ → 2Fe₂O₃ + 8SO₂ • Lab: SO₃²⁻ + 2H⁺ → H₂O + SO₂",
                "• SO₂ reactions: • With NaOH (limited SO₂): SO₂ + 2NaOH → Na₂SO₃ + H₂O; with EXCESS SO₂ the sulphite converts to bisulphite: Na₂SO₃ + SO₂ + H₂O → 2NaHSO₃. • With Cl₂ (charcoal catalyst): SO₂ + Cl₂ → SO₂Cl₂ (sulphuryl chloride). • With O₂ (V₂O₅ catalyst): 2SO₂ + O₂ ⇌ 2SO₃ — the key Contact Process step."
              ],
              "exams": [
                "JEE Advanced"
              ]
            },
            {
              "kind": "detailed",
              "heading": "Continued",
              "points": [
                "Yellow, Rhombic crystals  •  Colorless needle-like",
                "Stable below 369K  •  Stable above 369K",
                "Insol in water, Sol in CS₂  •  Sol in CS₂",
                "Transition Temp: 369K (96°C). Both stable at this temp. Structure: Both exist as S₈ puckered (crown) rings.",
                "JEE TRAP Vapor Phase Sulfur (S₂): At high temp (~1000K), S₈ dissociates to S₂ . Nature: S₂ is Paramagnetic (like O₂) due to unpaired electrons in π* orbitals.",
                "◆ Sulfur Dioxide (SO₂)",
                "• Prep: Roasting sulphide ores (FeS₂ + O₂ → Fe₂O₃ + SO₂).",
                "• Properties: Angular shape. Reducing agent. Bleaching action (temporary, due to reduction).",
                "• Reaction: Turns Lime Water milky (like CO₂). 5SO₂ + 2MnO₄⁻ + 2H₂O → 5SO₄²⁻ + 4H⁺ + 2Mn²⁺ (Decolorizes KMnO₄)."
              ],
              "exams": [
                "JEE Advanced"
              ]
            },
            {
              "kind": "detailed",
              "heading": "Frasch Process — extraction of elemental sulphur",
              "points": [
                "• Used to extract sulphur from underground deposits (mainly USA, along salt-dome formations) too deep/inconvenient for conventional mining.",
                "• Three concentric pipes are sunk into the sulphur deposit: superheated water (~443 K, under pressure, keeps it liquid above 373 K) is forced down the OUTER pipe to melt the sulphur (m.p. only ~393 K); compressed hot air is forced down the INNER pipe; the resulting molten sulphur + water froth is forced UP the MIDDLE pipe by the air pressure.",
                "• Gives very pure sulphur (~99.5%) directly, needing no further purification — this is exactly why it remained the dominant extraction method for decades.",
                "• Distinguish from the Contact Process: Frasch process extracts elemental sulphur from the ground; the Contact Process is the separate downstream step that converts that elemental sulphur into H₂SO₄."
              ],
              "exams": [
                "JEE Advanced"
              ]
            },
            {
              "kind": "illustration",
              "level": "intermediate",
              "concept": "Iodometric estimation of ozone — converting a gas-phase oxidant into a titration",
              "question": "A sample of ozonised oxygen is passed through excess acidified KI solution, liberating I₂. The liberated I₂ requires 20.0 mL of 0.1 M Na₂S₂O₃ solution for complete titration (using starch as indicator). Calculate the number of moles of O₃ present in the sample.",
              "thinking": "This is a two-step redox relay: O₃ oxidises I⁻ to I₂ first, then the liberated I₂ is titrated against a standard thiosulphate solution. Solve it by tracking electron-equivalents through both steps rather than trying to write one combined equation.",
              "steps": [
                { "label": "Step 1 — O₃ liberates I₂", "work": "O₃ + 2KI + H₂O → I₂ + O₂ + 2KOH (or ionically: O₃ + 2I⁻ + H₂O → I₂ + O₂ + 2OH⁻). Each O₃ molecule accepts 2 electrons (O: 0 → −2 in one of the three oxygens, released as OH⁻/H₂O) to liberate exactly 1 mole of I₂ per mole of O₃." },
                { "label": "Step 2 — I₂ vs thiosulphate", "work": "I₂ + 2Na₂S₂O₃ → 2NaI + Na₂S₄O₆. Each mole of I₂ requires 2 moles of S₂O₃²⁻." },
                { "label": "Moles of thiosulphate used", "work": "Moles of Na₂S₂O₃ = Molarity × Volume = 0.1 mol/L × 0.020 L = 2.0 × 10⁻³ mol." },
                { "label": "Back-calculate moles of I₂", "work": "From Step 2, moles of I₂ = moles of S₂O₃²⁻ / 2 = (2.0 × 10⁻³) / 2 = 1.0 × 10⁻³ mol." },
                { "label": "Back-calculate moles of O₃", "work": "From Step 1, moles of O₃ = moles of I₂ (1:1 ratio) = 1.0 × 10⁻³ mol." }
              ],
              "answer": "1.0 × 10⁻³ mol (1 mmol) of O₃.",
              "insight": "Any 'estimation of X via liberated iodine' problem (ozone, chlorine, hypochlorite, dichromate, Cu²⁺) reduces to the same two-step skeleton: (1) find the mole ratio between the analyte and I₂ from the first reaction, (2) use the fixed 1:2 ratio between I₂ and thiosulphate from the second. Master the skeleton once, reuse it for every iodometric numerical.",
              "commonMistakes": [
                "Forgetting the I₂-to-thiosulphate ratio is 1:2, not 1:1 — this is where most calculation errors happen.",
                "Not checking the actual O₃-to-I₂ stoichiometric ratio for a NEW analyte — it isn't always 1:1 (e.g. Cl₂ + 2KI → 2KCl + I₂ is also 1:1, but a dichromate-based estimation is not)."
              ]
            }
          ]
        },
        {
          "id": "g16-oxoacids-of-sulphur",
          "title": "Oxoacids of Sulphur",
          "exams": [
            "JEE Advanced"
          ],
          "blocks": [
            {
              "kind": "detailed",
              "heading": "Core Notes",
              "points": [
                "Acid  •  Formula  •  Feature",
                "Sulfurous  •  H₂SO₃  •  Lone pair on S.",
                "Sulfuric  •  H₂SO₄  •  King of chemicals.",
                "Peroxodisulfuric  •  H₂S₂O₈  •  Marshall's Acid . Contains -O-O- linkage.",
                "Pyrosulfuric  •  H₂S₂O₇  •  Oleum . Contains S-O-S linkage.",
                "Contact Process (H₂SO₄): Catalyst: V₂O₅ . Temp: 720K. Pressure: 2 bar. Step: Dissolve SO₃ in H₂SO₄ to make Oleum, then dilute."
              ],
              "exams": [
                "JEE Advanced"
              ]
            },
            {
              "kind": "exception",
              "items": [
                { "statement": "SO₃ is trigonal planar as a gas but exists as a cyclic trimer (S₃O₉) or a chain polymer in the solid state.", "why": "Gas-phase SO₃ has S in a genuinely sp² trigonal-planar AX₃ environment (3 bonding domains, no lone pair). On cooling, each S can expand its coordination by accepting a lone pair from a neighbouring SO₃'s oxygen, forming S–O–S bridges; the cyclic trimer has each sulphur back to a roughly tetrahedral (sp³) environment, which is the lower-energy solid-state arrangement." },
                { "statement": "SO₂ is bent/angular (AX₂E, one lone pair on S) but SO₃ has no lone pair on S at all.", "why": "SO₂'s S is +4 (one lone pair remains after 2 S=O-type bonding domains use up 2 of the 3 available electron domains); SO₃'s S is +6 (all 3 domains are used in bonding, no lone pair left) — different oxidation states genuinely give different steric numbers, not just different drawing conventions." }
              ]
            },
            {
              "kind": "illustration",
              "level": "advanced",
              "concept": "Assigning average vs actual oxidation states in peroxo/thio sulphur oxoacids",
              "tricky": true,
              "question": "Determine the oxidation state of sulphur in (a) H₂S₂O₃ (thiosulphuric acid) and (b) H₂S₂O₈ (peroxodisulphuric acid, Marshall's acid). Explain why the 'average oxidation state' method gives a misleading answer for H₂S₂O₃, and give the actual oxidation states of the two non-equivalent sulphur atoms.",
              "thinking": "H₂S₂O₃ is thiosulphuric acid: literally H₂SO₄ with ONE oxygen replaced by sulphur. That means the two sulphur atoms in the molecule are NOT chemically equivalent — the central S is exactly where it was in sulphuric acid (fully oxidised environment), while the added S is a terminal atom analogous to a terminal O in a normal sulphate — a completely different bonding environment. Averaging hides this.",
              "steps": [
                { "label": "Average method for H₂S₂O₃", "work": "Treat all 4 O as −2, both H as +1: 2(+1) + 2x + 4(−2) = 0 → 2 + 2x − 8 = 0 → x = +3 (average)." },
                { "label": "Why the average is misleading", "work": "H₂S₂O₃'s structure is the SO₄²⁻ tetrahedron of sulphuric acid with one O replaced by S. The CENTRAL sulphur keeps the same oxidation state it has in H₂SO₄ (+6), while the ATTACHED (terminal, replacing O) sulphur is in a low, sulphide-like environment (−2) — because it plays the structural role oxygen normally plays, and oxygen there is always treated as −2." },
                { "label": "Actual states in H₂S₂O₃", "work": "Central S keeps sulphuric acid's environment: +6. Terminal (thio) S sits where an oxygen would, so it is assigned −2, matching how oxygen is treated everywhere else. The true average is (+6 + (−2)) / 2 = +2, NOT the +3 the naive 'both sulphurs identical' method gave in the first step." },
                { "label": "H₂S₂O₈ (peroxodisulphuric acid)", "work": "Here BOTH sulphur atoms ARE equivalent (symmetric structure: two SO₄ groups joined by a peroxo –O–O– bridge, no S–S bond). Treat the 2 peroxo oxygens as −1 each (not −2, because O–O peroxo linkages are always −1 per O) and the other 6 oxygens as −2: 2(+1) + 2x + 6(−2) + 2(−1) = 0 → 2 + 2x − 12 − 2 = 0 → 2x = 12 → x = +6." }
              ],
              "answer": "H₂S₂O₃: central S = +6, terminal (thio) S = −2 (NOT a uniform +3 — the two sulphurs are chemically different). H₂S₂O₈: both S = +6 (equivalent, symmetric structure; remember the peroxo –O–O– oxygens count as −1, not −2).",
              "insight": "Whenever a formula contains a peroxo (–O–O–) or thio (S replacing O) group, the shortcut whole-molecule average oxidation-state formula either needs a modified O oxidation state (peroxo: −1) or breaks down entirely because the two 'equivalent-looking' atoms aren't equivalent (thio). Always check the actual structure before averaging.",
              "commonMistakes": [
                "Treating every oxygen in a peroxoacid as −2 — peroxo oxygens are −1.",
                "Assuming both sulphurs in H₂S₂O₃ are identical just because the formula looks symmetric — the structure is not symmetric."
              ]
            },
            {
              "kind": "trap",
              "items": [
                { "trap": "Oxygen's Lewis structure O=O suggests it should be diamagnetic (all electrons paired, like a normal double bond).", "reality": "O₂ is PARAMAGNETIC — Molecular Orbital Theory shows two unpaired electrons in the degenerate π* antibonding orbitals. The simple Lewis dot structure cannot explain this; only MOT correctly predicts O₂'s paramagnetism, which is why this is one of the most repeated MOT-application questions at JEE Advanced." },
                { "trap": "Every oxygen atom in a peroxoacid (like H₂S₂O₈) should be assigned oxidation state −2, same as in a normal oxoacid.", "reality": "Peroxo (–O–O–) oxygens are assigned −1, NOT −2, because each oxygen in the O–O linkage only partially gains an electron (the pair is shared between two oxygens, not fully transferred as in a normal O²⁻-like environment). Using −2 for all oxygens gives a wrong (average) oxidation state for the central atom." },
                { "trap": "SO₂ and SO₃ should have the same shape since sulphur is the central atom in both and only the oxygen count differs by one.", "reality": "SO₂ is bent/angular (AX₂E — sulphur is +4, retains one lone pair, steric number 3). SO₃ is trigonal planar (AX₃ — sulphur is +6, no lone pair, steric number 3 with all bonding domains). Different oxidation states genuinely change the steric number and hence the shape." },
                { "trap": "H₂S should have a higher boiling point than H₂O because sulphur is heavier and larger than oxygen.", "reality": "H₂O has a MUCH higher boiling point (373 K) than H₂S (213 K) despite oxygen being lighter — because O is small and highly electronegative enough to form strong hydrogen bonds, while S (larger, less electronegative) cannot hydrogen-bond effectively. Size/mass trends are overridden by hydrogen-bonding capability, exactly like the NH₃ vs PH₃ anomaly in Group 15." }
              ]
            },
            {
              "kind": "focus",
              "title": "What examiners actually test on Group 16",
              "points": [
                "O₂'s paramagnetism as an MO-vs-Lewis-structure question — always expect the bond-order calculation alongside it.",
                "Oxidation state assignment in peroxo (−1 O) and thio (non-equivalent S) oxoacids — the #1 source of calculation errors in this group.",
                "SO₂ (bent, lone pair) vs SO₃ (trigonal planar, no lone pair) — steric number differs because oxidation state differs.",
                "Frasch vs Contact process — extraction of the element vs manufacture of its acid, don't conflate them.",
                "H₂S vs H₂O anomalies (bond angle, boiling point) as hydrogen-bonding consequences, same logic as NH₃ in Group 15."
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "group-17-halogens",
      "title": "Group 17 — Halogens",
      "intro": "Halogen trends and anomalies, oxidizing behaviour, hydrogen halides, chlorine chemistry, oxides, oxoacids and interhalogens.",
      "exams": [
        "JEE Advanced"
      ],
      "subtopics": [
        {
          "id": "g17-occurrence-general-features",
          "title": "Occurrence & General Features",
          "exams": [
            "JEE Advanced"
          ],
          "blocks": [
            {
              "kind": "detailed",
              "heading": "Core Notes",
              "points": [
                "Halo (Salt) + Genes (Producer) = Salt Producers.",
                "• General Nature: Highly reactive non-metals. Show great similarity amongst themselves.",
                "• Fluorine: Insoluble fluorides. • Fluorspar: CaF₂ • Cryolite: Na₃AlF₆ • Fluoroapatite: 3Ca₃ (PO₄)₂ .CaF₂",
                "• Chlorine: Sea water (2.5% mass). • Dried seas: Carnallite KCl.MgCl₂·6H₂O .",
                "• Iodine: • Sea weeds (Laminaria) contain up to 0.5% I. • Chile saltpetre contains 0.2% Sodium Iodate (NaIO₃) .",
                "• Radioactive Elements: Astatine (At) and Tennessine (Ts, Z=117) are radioactive.",
                "• Fluorine: Fluorite (CaF₂), Cryolite (Na₃AlF₆), Fluorapatite.",
                "• Sea Water: 2.5% mass (NaCl, KCl, MgCl₂). Iodine in seaweed.",
                "V. IMP Iodine in Saltpetre: Found as Sodium Iodate (NaIO₃) . Concentration: 0.2% in Chile Saltpetre (NaNO₃).",
                "• Atomic Mass: 294"
              ],
              "exams": [
                "JEE Advanced"
              ]
            },
            {
              "kind": "detailed",
              "heading": "Continued",
              "points": [
                "• Config: [Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁵",
                "• Half-Life: Milliseconds (Very unstable).",
                "• Nature: Synthetic, Radioactive."
              ],
              "exams": [
                "JEE Advanced"
              ]
            }
          ]
        },
        {
          "id": "g17-physical-trends",
          "title": "Physical Trends",
          "exams": [
            "JEE Advanced"
          ],
          "blocks": [
            {
              "kind": "detailed",
              "heading": "Core Notes",
              "points": [
                "◆ A. Atomic Trends",
                "Property  •  Trend (Low → High)",
                "Atomic Radius  •  F < Cl < Br < I Halogens have the smallest atomic radii in their respective periods (effective nuclear charge).",
                "Ionization Energy  •  I < Br < Cl < F (Decreases down)",
                "Electronegativity  •  I(2.7) < Br(3.0) < Cl(3.2) < F(4.0)",
                "Electron Gain  •  I < Br < F < Cl (Negative value) Halogens have maximum negative electron gain enthalpy in their corresponding periods. TRAP F is less negative than Cl due to small size (e⁻ repulsion).",
                "Bond Dissoc. Enth.  •  I-I < F-F < Br-Br < Cl-Cl V.IMP F-F bond is weaker than Cl-Cl and Br-Br due to lone pair repulsion.",
                "◆ B. Macroscopic Trends",
                "Element  •  Color  •  State  •  Solubility in H₂O",
                "F₂  •  Yellow  •  Gas  •  Reacts"
              ],
              "exams": [
                "JEE Advanced"
              ]
            },
            {
              "kind": "detailed",
              "heading": "Continued",
              "points": [
                "Cl₂  •  Greenish Yellow  •  Gas  •  Reacts",
                "Br₂  •  Red  •  Liquid  •  Sparingly Soluble",
                "I₂  •  Violet  •  Solid  •  Sparingly Soluble",
                "Property  •  Trend Order",
                "Atomic Radius  •  F < Cl < Br < I",
                "Ionization Energy  •  F > Cl > Br > I",
                "Electronegativity  •  F(4.0) > Cl(3.2) > Br(3.0) > I(2.7)",
                "Melting & Boiling Pt  •  F₂ < Cl₂ < Br₂ < I₂ (Regular increase due to Van der Waals forces)",
                "Colors (NCERT): F₂: Yellow Cl₂: Greenish Yellow Br₂: Red (Liquid) I₂: Violet (Solid)"
              ],
              "exams": [
                "JEE Advanced"
              ]
            }
          ]
        },
        {
          "id": "g17-critical-anomalies",
          "title": "Critical Anomalies",
          "exams": [
            "JEE Advanced"
          ],
          "blocks": [
            {
              "kind": "detailed",
              "heading": "Core Notes",
              "points": [
                "1. Bond Dissociation Enthalpy: Cl₂ > Br₂ > F₂ > I₂Reason: F-F bond is weak due to large electron-electron repulsion between lone pairs on small F atoms.",
                "2. Electron Gain Enthalpy: Cl > F > Br > I Reason: F is less negative than Cl due to small 2p orbital size leading to repulsion.",
                "3. Oxide Stability Order: I > Cl > Br Reason: Middle row (Bromine) oxides are the least stable."
              ],
              "exams": [
                "JEE Advanced"
              ]
            }
          ]
        },
        {
          "id": "g17-chemical-properties-oxidizing-power",
          "title": "Chemical Properties & Oxidizing Power",
          "exams": [
            "JEE Advanced"
          ],
          "blocks": [
            {
              "kind": "detailed",
              "heading": "Core Notes",
              "points": [
                "◆ A. Reactivity & Oxidation States",
                "• Reactivity: Decreases down the group .",
                "• Fluorine: Only -1 . (No d-orbitals).",
                "• Cl, Br, I: -1, +1, +3, +5, +7.",
                "• Note: +4 and +6 occur in oxides and oxoacids of Chlorine and Bromine.",
                "◆ B. Oxidizing Power",
                "• Order: F₂ > Cl₂ > Br₂ > I₂ .",
                "• Fluorine (F₂): Strongest oxidizing agent. It oxidizes other halide ions of higher atomic number . F₂ + 2X⁻ → 2F⁻ + X₂ (X = Cl, Br, I)",
                "• Electrode Potential Dependency: Depends on: 1. Bond dissociation enthalpy. 2. Electron gain enthalpy. 3. Hydration enthalpy.",
                "◆ C. Reaction with Water (V.IMP)"
              ],
              "exams": [
                "JEE Advanced"
              ]
            },
            {
              "kind": "detailed",
              "heading": "Continued",
              "points": [
                "• F₂: Oxidizes water to Oxygen. 2F₂ (g) + 2H₂O(l) → 4H⁺ (aq) + 4F⁻ (aq) + O₂ (g) • Cl₂ / Br₂: Reacts to form Hypohalous acid. X₂ (g) + H₂O(l) → HX(aq) + HOX(aq) • I₂: Reaction is non-spontaneous . Reverse reaction occurs (I⁻ oxidized by O₂ in acid). 4I⁻ (aq) + 4H⁺ (aq) + O₂ (g) → 2I₂ (s) + 2H₂O(l)",
                "◆ D. Anomalous Fluorine",
                "• Only -1 OS. Low F-F bond energy.",
                "• Forms H-Bonds (HF is liquid).",
                "• Exothermic Reactions: Reactions of Fluorine are exothermic due to the small, strong bond formed by it with other elements."
              ],
              "exams": [
                "JEE Advanced"
              ]
            },
            {
              "kind": "detailed",
              "heading": "Iodine–Starch Complex — the titration end-point test",
              "points": [
                "• Free I₂ (or I₃⁻, since I₂ is only slightly soluble in water and is usually kept in solution as I⁻ + I₂ ⇌ I₃⁻) forms an intense deep blue-black complex with starch — the iodine molecules slot inside the helical amylose coil of starch.",
                "• This is the standard visual end-point indicator in iodometric/iodimetric titrations (e.g. estimating Cu²⁺ via liberated I₂, or standardising thiosulphate solutions): the blue colour appears when even a trace of free I₂ remains, and disappears sharply the instant the last I₂ is consumed by titrant (e.g. Na₂S₂O₃).",
                "• Starch indicator must be added NEAR the end-point, not at the start — adding it too early when I₂ concentration is high can make the iodine–starch complex bind so tightly that the colour change becomes sluggish and imprecise."
              ],
              "exams": [
                "JEE Advanced"
              ]
            }
          ]
        },
        {
          "id": "g17-hydrogen-halides",
          "title": "Hydrogen Halides",
          "exams": [
            "JEE Advanced"
          ],
          "blocks": [
            {
              "kind": "detailed",
              "heading": "Core Notes",
              "points": [
                "Property  •  Comparison (Lowest → Highest)",
                "Acidic Strength  •  HF < HCl < HBr < HI (Bond dissociation enthalpy decreases down).",
                "Stability  •  HI < HBr < HCl < HF (HF is most stable).",
                "Reducing Power  •  HF < HCl < HBr < HI (HI is strongest reducing agent).",
                "Boiling Point  •  HCl < HBr < HI < HF IMP HF is highest due to H-Bonding.",
                "Melting Point  •  HCl < HBr < HF < HI",
                "Property  •  Order (Lowest → Highest)",
                "Acidic Strength  •  HF < HCl < HBr < HI",
                "Thermal Stability  •  HI < HBr < HCl < HF",
                "Reducing Power  •  HF < HCl < HBr < HI"
              ],
              "exams": [
                "JEE Advanced"
              ]
            },
            {
              "kind": "detailed",
              "heading": "Continued",
              "points": [
                "Boiling Point Anomaly: HCl < HBr < HI < HF (HF is liquid due to strong H-Bonding)."
              ],
              "exams": [
                "JEE Advanced"
              ]
            },
            {
              "kind": "detailed",
              "heading": "Hydrogen Chloride — preparation, drying and tests",
              "points": [
                "• Laboratory preparation: NaCl + conc. H₂SO₄ → NaHSO₄ + HCl↑ (below 420 K). On stronger heating (823 K) the bisulphate reacts further: NaCl + NaHSO₄ → Na₂SO₄ + HCl↑. The low-temperature step is the one used, because it is easier to control.",
                "• Drying: HCl gas is dried by passing through concentrated H₂SO₄. It must NOT be dried over quicklime (CaO) or any basic drying agent, because HCl is acidic and would be absorbed and neutralised; P₄O₁₀ is also avoided in practice.",
                "• Properties: colourless, pungent gas; fumes strongly in moist air (forms acid mist); extremely soluble in water (fountain experiment) giving hydrochloric acid, a strong monobasic acid.",
                "• Test with ammonia: HCl + NH₃ → NH₄Cl — dense WHITE FUMES. This is the standard identification of HCl gas.",
                "• Test with silver nitrate: Cl⁻ + AgNO₃ → AgCl↓ (curdy white precipitate) which is SOLUBLE in dilute NH₄OH — this solubility distinguishes chloride from bromide (pale yellow, sparingly soluble) and iodide (yellow, insoluble in NH₄OH).",
                "• Aqua regia: 3 parts conc. HCl + 1 part conc. HNO₃, dissolves Au and Pt (see Group 15 notes for the oxidation-plus-complexation mechanism).",
                "• Uses: manufacture of chlorine, NH₄Cl and glucose (from corn starch); pickling/descaling of steel; extracting glue from bones; purifying bone black."
              ],
              "exams": [
                "JEE Advanced"
              ]
            },
            {
              "kind": "trap",
              "items": [
                { "trap": "HBr and HI can be prepared the same way as HCl, by heating the metal bromide/iodide with concentrated H₂SO₄.", "reality": "NO — concentrated H₂SO₄ is an OXIDISING agent and HBr/HI are strong reducing agents, so it oxidises the product: 2HBr + H₂SO₄ → Br₂ + SO₂ + 2H₂O, and 8HI + H₂SO₄ → 4I₂ + H₂S + 4H₂O. HBr and HI are therefore prepared using non-oxidising phosphoric acid (H₃PO₄) instead. This is one of the most repeated Group 17 preparation questions." },
                { "trap": "HF is the strongest hydrohalic acid because fluorine is the most electronegative halogen.", "reality": "HF is the WEAKEST (HF ≪ HCl < HBr < HI). Acid strength here tracks how easily the H–X bond breaks, and H–F is by far the strongest bond; HF also hydrogen-bonds into ion pairs in water, further suppressing dissociation." }
              ]
            }
          ]
        },
        {
          "id": "g17-oxides-of-halogens",
          "title": "Oxides of Halogens",
          "exams": [
            "JEE Advanced"
          ],
          "blocks": [
            {
              "kind": "detailed",
              "heading": "Core Notes",
              "points": [
                "• Fluorine: • OF₂: Stable at 298K. • O₂F₂: Unstable. Used to remove Pu as PuF₆ .",
                "• Chlorine: • Cl₂O, ClO₂, Cl₂O₆, Cl₂O₇ . • ClO₂: Bleaching agent (paper/water).",
                "• Bromine: • Br₂O, BrO₂, BrO₃ . • NOTE Least stable halogen oxides (Middle row anomaly). Only low temp.",
                "• Iodine: • I₂O₄, I₂O₅, I₂O₇ . Insoluble solids. • I₂O₅: Oxidizing agent, used to estimate CO .",
                "◆ A. Oxidizing Nature of Oxides",
                "• I₂O₅: Strong Oxidizing Agent . Used in estimation of CO.",
                "• ClO₂: Powerful Oxidizing/Bleaching Agent . Used for water treatment.",
                "• OF₂: Thermally stable at 298K.",
                "◆ B. Reactivity with Alkalies",
                "Condition  •  Products"
              ],
              "exams": [
                "JEE Advanced"
              ]
            },
            {
              "kind": "detailed",
              "heading": "Continued",
              "points": [
                "Cold & Dilute NaOH  •  Cl⁻ + OCl⁻ (Hypochlorite)",
                "Hot & Conc. NaOH  •  Cl⁻ + ClO₃⁻ (Chlorate)",
                "NCERT Bleaching Powder: Ca(OH)₂ + Cl₂Composition: Ca(OCl)₂ ċ CaCl₂ ċ Ca(OH)₂ ċ 2H₂O"
              ],
              "exams": [
                "JEE Advanced"
              ]
            }
          ]
        },
        {
          "id": "g17-chlorine",
          "title": "Chlorine",
          "exams": [
            "JEE Advanced"
          ],
          "blocks": [
            {
              "kind": "detailed",
              "heading": "Core Notes",
              "points": [
                "◆ A. Preparation",
                "• Deacon's Process: 4HCl + O₂ → 2Cl₂ + 2H₂O (CuCl₂, 723K).",
                "• Electrolytic: By-product of NaOH (Brine).",
                "• Lab: MnO₂ + HCl OR KMnO₄ + HCl .",
                "◆ B. Reactions with Ammonia (V.IMP)",
                "Condition  •  Products",
                "Excess NH₃  •  NH₄Cl + N₂ (White fumes)",
                "Excess Cl₂  •  NCl₃ (Explosive) + HCl",
                "◆ C. Reactions with Alkalies (V.IMP)",
                "Cold & Dilute NaOH  •  NaCl + NaOCl (Hypochlorite)"
              ],
              "exams": [
                "JEE Advanced"
              ]
            },
            {
              "kind": "detailed",
              "heading": "Continued",
              "points": [
                "Hot & Conc. NaOH  •  NaCl + NaClO₃ (Chlorate)",
                "Dry Slaked Lime  •  Ca(OCl)₂ (Bleaching Powder)",
                "Bleaching Powder: Ca(OCl)₂ .CaCl₂ .Ca(OH)₂·2H₂O ."
              ],
              "exams": [
                "JEE Advanced"
              ]
            },
            {
              "kind": "detailed",
              "heading": "Chlor-Alkali Process — industrial electrolysis of brine",
              "points": [
                "• Concentrated aqueous NaCl (brine) is electrolysed using a membrane cell (or historically, mercury/diaphragm cells) — the process is named for its THREE simultaneous products: chlorine (chlor-) and sodium hydroxide (-alkali), plus hydrogen.",
                "• Cathode: 2H₂O + 2e⁻ → H₂ + 2OH⁻ (water is reduced in preference to Na⁺, since Na⁺ is far harder to reduce than H₂O).",
                "• Anode: 2Cl⁻ → Cl₂ + 2e⁻ (Cl⁻ is oxidised in preference to water despite O₂ being thermodynamically easier, due to a large kinetic overpotential for O₂ evolution at the electrode).",
                "• Na⁺ ions migrate through the membrane to the cathode compartment, combining with the OH⁻ generated there to give NaOH solution.",
                "• Net cell reaction: 2NaCl + 2H₂O → 2NaOH + H₂ + Cl₂ — this single electrolysis is the industrial source of THREE major chemicals at once, which is exactly why it's economically central to the chemical industry.",
                "• This IS the 'Electrolytic' method referenced as a Cl₂ source above — chlorine here is really a co-product of NaOH manufacture, not the primary target."
              ],
              "exams": [
                "JEE Advanced"
              ]
            }
          ]
        },
        {
          "id": "g17-oxoacids-of-halogens",
          "title": "Oxoacids of Halogens",
          "exams": [
            "JEE Advanced"
          ],
          "blocks": [
            {
              "kind": "detailed",
              "heading": "Core Notes",
              "points": [
                "Acidic Strength: Increases with Oxidation Number.",
                "Type  •  Formula (Cl)  •  Name  •  Strength",
                "+1  •  HOCl  •  Hypochlorous  •  Weakest",
                "+3  •  HOClO  •  Chlorous  •  Weak",
                "+5  •  HOClO₂  •  Chloric  •  Strong",
                "+7  •  HOClO₃  •  Perchloric  •  Strongest",
                "Order: HClO < HClO₂ < HClO₃ < HClO₄",
                "Acidic Strength: Increases with Oxidation State.",
                "Acid  •  Formula  •  O.S.",
                "Hypochlorous  •  HOCl  •  +1"
              ],
              "exams": [
                "JEE Advanced"
              ]
            },
            {
              "kind": "detailed",
              "heading": "Continued",
              "points": [
                "Chlorous  •  HOClO  •  +3",
                "Chloric  •  HOClO₂  •  +5",
                "Perchloric  •  HOClO₃  •  +7",
                "Acidic Order: HClO < HClO₂ < HClO₃ < HClO₄ (Perchloric acid is strongest).",
                "Fluorine Exception: Forms only ONE oxoacid (HOF)."
              ],
              "exams": [
                "JEE Advanced"
              ]
            },
            {
              "kind": "illustration",
              "level": "intermediate",
              "concept": "Why acid strength rises with oxidation state — it's about the conjugate base, not the acid itself",
              "question": "Explain, in terms of bonding and charge distribution, why HClO₄ is a far stronger acid than HClO, even though both molecules have exactly one ionisable O–H bond.",
              "thinking": "Acid strength questions are almost always really questions about how STABLE the conjugate base is after the proton leaves — a more stable (lower energy, more delocalised) conjugate base means the equilibrium sits further toward ionisation, i.e. a stronger acid.",
              "steps": [
                { "label": "Count non-ionisable Cl=O bonds in each acid", "work": "HOCl: 0 additional Cl=O bonds (Cl is +1). HOClO₃ (HClO₄): 3 additional Cl=O bonds (Cl is +7)." },
                { "label": "Consider the conjugate base after deprotonation", "work": "ClO⁻ (from HOCl) has its single negative charge localised almost entirely on ONE oxygen — poorly stabilised, high energy, wants the proton back (weak acid). ClO₄⁻ (from HClO₄) has its negative charge delocalised by resonance over FOUR equivalent oxygens (each Cl–O bond has partial double-bond character, and all 4 oxygens share the negative charge equally by symmetry)." },
                { "label": "Add the inductive effect", "work": "Each additional terminal oxygen is also highly electronegative and inductively withdraws electron density through the Cl–O framework, further pulling electron density away from the O–H bond and making the O–H bond itself weaker/more polarised, easing proton loss in the first place." },
                { "label": "Combine both effects", "work": "More terminal O atoms → (a) easier initial O–H ionisation (inductive pull) AND (b) a far more stable, charge-delocalised conjugate base once ionised. Both effects point the same direction, compounding as oxidation state rises: HOCl < HOClO < HOClO₂ < HOClO₃." }
              ],
              "answer": "HClO₄ is far stronger because its conjugate base ClO₄⁻ delocalises negative charge over 4 equivalent oxygens (vs ClO⁻'s charge stuck on a single oxygen), and the 3 extra electronegative Cl=O groups inductively weaken the O–H bond to begin with.",
              "insight": "This exact reasoning — count non-ionisable terminal oxygens, argue conjugate-base delocalisation + induction — is the general-purpose tool for EVERY 'why is acid X stronger than acid Y' question across the whole oxoacid family (nitrogen, phosphorus, sulphur, chlorine all follow it identically).",
              "fastMethod": "More terminal O (or Cl=O / S=O / N=O style) groups on the central atom, for the same central-atom family → stronger acid, virtually without exception across this entire chapter."
            }
          ]
        },
        {
          "id": "g17-interhalogen-compounds",
          "title": "Interhalogen Compounds",
          "exams": [
            "JEE Advanced"
          ],
          "blocks": [
            {
              "kind": "detailed",
              "heading": "Core Notes",
              "points": [
                "Type XX' n where X is larger/less EN than X'.",
                "◆ A. Preparation",
                "• Cl₂ + F₂ (equal) → 2ClF",
                "• Cl₂ + 3F₂ (excess) → 2ClF₃",
                "• I₂ + Cl₂ (equimolar) → 2ICl",
                "• I₂ + 3Cl₂ (excess) → 2ICl₃",
                "◆ B. Properties & Uses",
                "• Reactivity: XX' > X₂ (except F₂) because X-X' bond is weaker.",
                "• Hydrolysis: XX' + H₂O → HX' + HOX (Oxyacid from larger halogen).",
                "• Uses: ClF₃ / BrF₃ used for U enrichment (UF₆)."
              ],
              "exams": [
                "JEE Advanced"
              ]
            },
            {
              "kind": "detailed",
              "heading": "Continued",
              "points": [
                "Type  •  Shape (VSEPR)  •  Examples & Color",
                "XX'  •  Linear  •  ICl (Ruby Red Solid) IBr (Black Solid)",
                "XX'₃  •  Bent T-shape  •  ClF₃ (Colorless Gas) BrF₃ (Yellow Green Liq)",
                "XX'₅  •  Square Pyramidal  •  BrF₅, IF₅ (Colorless)",
                "XX'₇  •  Pentagonal Bipyramidal  •  IF₇ (Colorless Gas)",
                "Props: Covalent, Diamagnetic, More reactive than Halogens.",
                "Formula  •  Physical State & Color",
                "ClF  •  Colorless Gas",
                "BrF  •  Pale Brown Gas",
                "ICl  •  Ruby Red Solid (α)"
              ],
              "exams": [
                "JEE Advanced"
              ]
            },
            {
              "kind": "detailed",
              "heading": "Continued",
              "points": [
                "IBr  •  Black Solid",
                "ClF₃  •  Colorless Gas",
                "BrF₃  •  Yellow Green Liquid",
                "IF₅  •  Colorless Gas",
                "BrF₅  •  Colorless Liquid",
                "Shapes: XX'₃ (Bent T-Shape), XX'₅ (Square Pyramidal), XX'₇ (Pentagonal Bipyramidal)."
              ],
              "exams": [
                "JEE Advanced"
              ]
            },
            {
              "kind": "illustration",
              "level": "advanced",
              "concept": "Deriving interhalogen shape and hybridisation from VSEPR, not memorisation",
              "tricky": true,
              "question": "For BrF₅: (a) determine the hybridisation of the central atom, (b) predict the molecular shape and bond angles, (c) state whether it is polar, and (d) explain why IF₇ cannot form an analogous 'ClF₇' with chlorine as the central atom.",
              "thinking": "Never memorise interhalogen shapes as a lookup table — derive them. Count central-atom valence electrons, subtract one per bond formed, and whatever remains in pairs is lone pairs. Steric number (bond pairs + lone pairs) gives hybridisation; VSEPR then places lone pairs to minimise 90° repulsions.",
              "steps": [
                { "label": "Count Br's valence electrons and bonding", "work": "Br has 7 valence electrons. It forms 5 Br–F bonds (using 5 electrons), leaving 7 − 5 = 2 electrons = 1 lone pair." },
                { "label": "Steric number and hybridisation", "work": "Steric number = 5 bond pairs + 1 lone pair = 6 → sp³d² hybridisation (octahedral electron geometry)." },
                { "label": "Molecular shape", "work": "With 1 of the 6 octahedral positions occupied by a lone pair, the molecular shape (atoms only) is square pyramidal — 4 F atoms in a base, 1 F at the apex, Br slightly below the base plane (pushed away from the lone pair)." },
                { "label": "Bond angles", "work": "Ideal octahedral angles are 90°, but lone-pair/bond-pair repulsion (stronger than bond-pair/bond-pair) compresses the basal F–Br–F angles slightly below 90° (~84.8°)." },
                { "label": "Polarity", "work": "The lone pair sits opposite the apical F, breaking any possibility of cancelling bond dipoles — BrF₅ is polar (net dipole moment along the C₄ axis, toward the lone pair)." },
                { "label": "Why chlorine cannot form an analogue of IF₇", "work": "IF₇ needs steric number 7 (sp³d³ hybridisation) on the central atom — this requires accessible d-orbitals of a size and energy that can actually participate in bonding with 7 surrounding atoms. Chlorine (period 3, 3d orbitals) is too small to physically accommodate 7 fluorine atoms around it without severe steric crowding — iodine's much larger radius is what makes IF₇ possible; a 'ClF₇' is sterically and energetically inaccessible." }
              ],
              "answer": "BrF₅: sp³d² hybridised Br, square pyramidal shape, basal angles slightly less than 90° (~84.8°), polar. ClF₇ does not exist because chlorine is too small to sterically accommodate 7 fluorine atoms, unlike the larger iodine in IF₇.",
              "insight": "The steric-number method (bond pairs + lone pairs → hybridisation → VSEPR shape) works identically for every interhalogen and every xenon compound in this chapter — learn the method once, not 15 separate shapes.",
              "fastMethod": "Steric number = (central atom's group number) − (net charge, if ion) − (number of X atoms bonded), then check remaining electrons ÷ 2 for lone pairs. Steric number 4/5/6/7 → sp³/sp³d/sp³d²/sp³d³.",
              "commonMistakes": [
                "Confusing electron geometry (always includes lone pairs) with molecular shape (atoms only) — BrF₅'s electron geometry is octahedral, but its molecular SHAPE is square pyramidal.",
                "Assuming any period-3 halogen can mimic IF₇ just because the formula pattern XF₇ 'looks' extendable."
              ]
            },
            {
              "kind": "trap",
              "items": [
                { "trap": "Electron gain enthalpy: fluorine is the most electronegative element, so students mark F as having the most negative electron gain enthalpy.", "reality": "CHLORINE has the most negative electron gain enthalpy (−349 kJ/mol vs F's −328 kJ/mol). Fluorine's added electron enters a tiny, crowded 2p subshell where inter-electronic repulsion partially offsets the energy release. The full order: Cl > F > Br > I." },
                { "trap": "Oxidising power vs electron gain enthalpy look like the same trend, so F₂ shouldn't be the strongest oxidant if Cl beats F on electron gain enthalpy.", "reality": "F₂ IS the strongest oxidising agent in solution — oxidising power depends on the WHOLE thermodynamic cycle (bond dissociation + electron gain + hydration). F₂'s very weak F–F bond (easy to break) and F⁻'s enormous hydration enthalpy (tiny ion) overwhelm the electron-gain-enthalpy deficit." },
                { "trap": "Interhalogen hydrolysis: students write the oxyacid coming from the SMALLER halogen because it 'holds oxygen better'.", "reality": "Hydrolysis always gives the oxyacid (HOX) from the LARGER (less electronegative, central) halogen and the plain halide acid (HX') from the smaller one: XX' + H₂O → HX' + HOX. The central atom keeps the positive character, so it takes the OH." },
                { "trap": "HF is the strongest hydrohalic acid because F is the most electronegative.", "reality": "HF is the WEAKEST acid of the four (HF << HCl < HBr < HI). The H–F bond is exceptionally strong, and in water HF also hydrogen-bonds into ion pairs — acid strength follows bond dissociation ease, so HI (weakest H–X bond) is the strongest acid." }
              ]
            },
            {
              "kind": "focus",
              "title": "What examiners actually test on Group 17",
              "points": [
                "The Cl-vs-F electron gain enthalpy inversion, and separately WHY F₂ still wins on oxidising power (full thermodynamic cycle).",
                "Cl₂ + NaOH product switch: cold/dilute → NaOCl, hot/conc. → NaClO₃ — condition-dependent products are a multi-select favourite.",
                "Interhalogen shape derivation via steric number, plus hydrolysis giving HOX from the larger halogen.",
                "Bleaching powder's real composition and available-chlorine logic.",
                "Oxoacid strength ordering by conjugate-base delocalisation — asked as 'arrange and justify', not just 'arrange'."
              ]
            }
          ]
        },
        {
          "id": "g17-pseudohalogens",
          "title": "Pseudohalogens & Pseudohalide Ions",
          "exams": ["JEE Advanced"],
          "blocks": [
            {
              "kind": "detailed",
              "heading": "Definition & Members",
              "points": [
                "• A PSEUDOHALOGEN is a molecule built from two or more electronegative atoms that, as a unit, behaves chemically like a halogen molecule (X₂). The corresponding anion is a PSEUDOHALIDE ion, behaving like X⁻.",
                "• Pseudohalogens (the X₂ analogues): cyanogen (CN)₂, thiocyanogen (SCN)₂, selenocyanogen (SeCN)₂, oxycyanogen (OCN)₂, and azidocarbondisulphide (SCSN₃)₂.",
                "• Pseudohalide ions (the X⁻ analogues): cyanide CN⁻, thiocyanate SCN⁻, cyanate OCN⁻, azide N₃⁻, isocyanate NCO⁻, and cyanamide NCN²⁻.",
                "• Note the pattern: every pseudohalide is a small, univalent, electronegative anion that can form a stable HX-type acid and a stable X₂-type dimer — exactly the two structural requirements for halogen-like behaviour."
              ],
              "exams": ["JEE Advanced"]
            },
            {
              "kind": "detailed",
              "heading": "Why they mimic halogens — the point-by-point analogy",
              "points": [
                "• Form the free dimer X₂: like Cl₂, they exist as (CN)₂, (SCN)₂ — formed by oxidation of the anion, e.g. 2CN⁻ → (CN)₂ + 2e⁻ (parallel to 2Cl⁻ → Cl₂ + 2e⁻).",
                "• Form HX-type acids: HCN (hydrocyanic acid), HSCN (thiocyanic acid), HN₃ (hydrazoic acid) — directly parallel to HCl, HBr.",
                "• Form insoluble silver salts: AgCN, AgSCN are insoluble precipitates, exactly like AgCl/AgBr — and this is why they interfere in halide qualitative analysis.",
                "• Form INTER-pseudohalogen compounds with real halogens: ClCN, BrCN, ICN — the direct analogues of the interhalogens ICl, BrF.",
                "• Disproportionate in alkali exactly like halogens: (CN)₂ + 2OH⁻ → CN⁻ + OCN⁻ + H₂O. Compare Cl₂ + 2OH⁻ → Cl⁻ + OCl⁻ + H₂O — same pattern, one atom reduced and one oxidised.",
                "• Act as ligands in coordination compounds: CN⁻ and SCN⁻ are classic strong-field/ambidentate ligands (e.g. [Fe(CN)₆]³⁻, [Fe(SCN)]²⁺ blood-red complex used to test Fe³⁺)."
              ],
              "exams": ["JEE Advanced"]
            },
            {
              "kind": "detailed",
              "heading": "Cyanogen (CN)₂ — the exemplar",
              "points": [
                "• Preparation: heating mercury(II) cyanide — Hg(CN)₂ →(Δ) Hg + (CN)₂. Also from Cu²⁺ + CN⁻: 2Cu²⁺ + 4CN⁻ → 2CuCN + (CN)₂.",
                "• Structure: linear, N≡C–C≡N — the two carbons are joined by a single C–C bond, each carbon triply bonded to its nitrogen. Both carbons are sp hybridised.",
                "• Combustion: burns in air with a characteristic ROSE-RED (peach) flame — 'cyanogen' literally means 'blue-producing' from its Prussian-blue chemistry, but the flame colour is the exam-relevant fact.",
                "• Highly toxic, colourless gas with a pungent almond-like odour.",
                "• Alkaline hydrolysis (disproportionation): (CN)₂ + 2NaOH → NaCN + NaOCN + H₂O — carbon goes from +3 in (CN)₂ to +2 in CN⁻ and +4 in OCN⁻."
              ],
              "exams": ["JEE Advanced"]
            },
            {
              "kind": "trap",
              "items": [
                { "trap": "Pseudohalogens are just another name for interhalogen compounds.", "reality": "Completely different. INTERhalogens (ICl, BrF₃) are made of TWO REAL halogens. PSEUDOhalogens ((CN)₂, (SCN)₂) contain NO halogen at all — they merely behave like halogens. A compound like ClCN, containing one real halogen and one pseudohalide, is an INTER-PSEUDOhalogen." },
                { "trap": "Because CN⁻ resembles Cl⁻, AgCN behaves like AgCl and dissolves in dilute ammonia during salt analysis.", "reality": "The analogy is chemical, not identical. Pseudohalides genuinely interfere with halide tests (both give white/pale silver precipitates), which is exactly why cyanide and thiocyanate must be removed before testing for halides — do not assume matching NH₄OH solubility." }
              ]
            },
            {
              "kind": "illustration",
              "level": "advanced",
              "concept": "Proving cyanogen is a pseudohalogen by oxidation-state bookkeeping",
              "tricky": true,
              "question": "Cyanogen reacts with hot aqueous NaOH: (CN)₂ + 2NaOH → NaCN + NaOCN + H₂O. (a) Assign the oxidation state of carbon in (CN)₂, CN⁻ and OCN⁻. (b) Prove this is a disproportionation. (c) Show that this reaction is structurally the same as the reaction of Cl₂ with cold dilute NaOH.",
              "thinking": "The whole claim 'cyanogen is a pseudohalogen' rests on it reproducing halogen REACTION PATTERNS, not on looking like a halogen. So the way to prove it is to run the oxidation-state bookkeeping on both reactions and show the pattern is identical.",
              "steps": [
                { "label": "Carbon in (CN)₂", "work": "N is −3 (more electronegative than C, triple-bonded). The molecule is neutral and the C–C bond contributes nothing to either carbon's oxidation state. Per CN unit: C + (−3) = 0 ⇒ C = +3." },
                { "label": "Carbon in CN⁻", "work": "N = −3, total charge −1: C + (−3) = −1 ⇒ C = +2. Carbon has been REDUCED (+3 → +2, gained 1 e⁻)." },
                { "label": "Carbon in OCN⁻", "work": "O = −2, N = −3, total charge −1: C + (−2) + (−3) = −1 ⇒ C = +4. Carbon has been OXIDISED (+3 → +4, lost 1 e⁻)." },
                { "label": "Confirm disproportionation", "work": "One carbon at +3 goes down to +2 while another goes up to +4 — the same element, same starting oxidation state, splitting into a higher and a lower product. Electrons balance 1:1, matching the 1:1 NaCN : NaOCN stoichiometry." },
                { "label": "Compare with chlorine", "work": "Cl₂ + 2NaOH → NaCl + NaOCl + H₂O. Cl at 0 splits into −1 (in Cl⁻, reduced) and +1 (in OCl⁻, oxidised), again 1:1. Identical structural pattern: X₂ + 2OH⁻ → X⁻ + OX⁻ + H₂O. This shared behaviour is precisely what earns (CN)₂ the label 'pseudohalogen'." }
              ],
              "answer": "(a) C is +3 in (CN)₂, +2 in CN⁻, +4 in OCN⁻. (b) Same element goes both up and down from +3 ⇒ disproportionation. (c) Both follow X₂ + 2OH⁻ → X⁻ + OX⁻ + H₂O, the defining halogen pattern.",
              "insight": "Whenever a question asks you to JUSTIFY the pseudohalogen label rather than just state it, the alkaline-disproportionation parallel is the cleanest single piece of evidence you can give.",
              "commonMistakes": [
                "Assigning C = +2 in (CN)₂ by forgetting that the C–C bond is between identical atoms and contributes zero.",
                "Calling the alkaline reaction a simple hydrolysis — it changes carbon's oxidation state, so it is redox."
              ]
            },
            {
              "kind": "misc",
              "level": "easy",
              "question": "Name any three pseudohalide ions.",
              "answer": "CN⁻ (cyanide), SCN⁻ (thiocyanate), N₃⁻ (azide) — also OCN⁻, NCN²⁻",
              "explanation": "Each is a small univalent electronegative anion forming a stable HX-type acid and an X₂-type dimer, the two criteria for halogen-like behaviour.",
              "exams": ["JEE Advanced"]
            },
            {
              "kind": "misc",
              "level": "medium",
              "question": "Write the product of (CN)₂ with aqueous NaOH and name the reaction type.",
              "answer": "NaCN + NaOCN + H₂O — a disproportionation",
              "explanation": "Carbon at +3 in (CN)₂ goes to +2 (CN⁻) and +4 (OCN⁻). Exactly parallel to Cl₂ + 2NaOH → NaCl + NaOCl + H₂O.",
              "exams": ["JEE Advanced"]
            },
            {
              "kind": "misc",
              "level": "medium",
              "question": "What is the difference between an interhalogen and an inter-pseudohalogen? Give one example of each.",
              "answer": "Interhalogen = two real halogens (e.g. ICl); inter-pseudohalogen = one halogen + one pseudohalide (e.g. ClCN)",
              "explanation": "Pseudohalogens themselves ((CN)₂, (SCN)₂) contain no halogen at all — they only mimic halogen chemistry.",
              "exams": ["JEE Advanced"]
            },
            {
              "kind": "misc",
              "level": "hard",
              "question": "Give the structure and hybridisation of cyanogen, and state its flame colour.",
              "answer": "Linear N≡C–C≡N, both carbons sp hybridised; burns with a rose-red (peach) flame",
              "explanation": "Each carbon forms one triple bond to N and one single bond to the other carbon — 2 sigma domains ⇒ sp, giving a fully linear molecule.",
              "exams": ["JEE Advanced"]
            },
            {
              "kind": "misc",
              "level": "challenge",
              "question": "Why must cyanide and thiocyanate be removed before testing a solution for halide ions?",
              "answer": "Their silver salts (AgCN, AgSCN) precipitate like silver halides and give false positives",
              "explanation": "Pseudohalides mimic halides closely enough to form insoluble white/pale silver salts, so an unremoved CN⁻ or SCN⁻ would be mistaken for Cl⁻ or Br⁻ in qualitative analysis.",
              "exams": ["JEE Advanced"]
            }
          ]
        }
      ]
    },
    {
      "id": "group-18-noble-gases",
      "title": "Group 18 — Noble Gases",
      "intro": "Occurrence, physical trends, Bartlett chemistry, xenon fluorides, hydrolysis, VSEPR structures and uses.",
      "exams": [
        "JEE Advanced"
      ],
      "subtopics": [
        {
          "id": "g18-occurrence-discovery-general-features",
          "title": "Occurrence, Discovery & General Features",
          "exams": [
            "JEE Advanced"
          ],
          "blocks": [
            {
              "kind": "detailed",
              "heading": "Core Notes",
              "points": [
                "He, Ne, Ar, Kr, Xe, Rn, Og",
                "• Atmosphere: All noble gases except Radon occur in the atmosphere. • Argon is the major constituent (~0.9% vol).",
                "• Radioactive Minerals: Helium is found in: • Pitchblende, Monazite, Cleveite.",
                "• Commercial Source: Main source of Helium is Natural Gas .",
                "• Radon: Decay product of Radium (²²⁶Ra).²²⁶Ra →²²²Rn +⁴He",
                "Atmospheric Abundance (Dry Air): Ar > Ne > He > Kr > Xe (Argon is most abundant, Xenon is least abundant).",
                "Oganesson (Og, Z=118): Synthetic.²⁴⁹Cf +⁴⁸Ca →²⁹⁴Og + 3n . Half-life 0.7 ms.",
                "• Atmosphere: ~1% by volume (Argon is major constituent).",
                "• Sources: He (Natural Gas), Rn (Decay of²²⁶Ra).",
                "• Neil Bartlett (1962): First noble gas compound. Reacted PtF₆ + O₂ → O₂⁺ [PtF₆ ]⁻ (Red solid). Since I.E. of Xe (1170 kJ) ≈ I.E. of O₂ (1175 kJ), he made: Xe⁺ [PtF₆ ]⁻ (First Compound)"
              ],
              "exams": [
                "JEE Advanced"
              ]
            },
            {
              "kind": "detailed",
              "heading": "Clathrate Compounds — how noble gases get physically trapped",
              "points": [
                "• Clathrates are NOT true chemical compounds — no covalent or ionic bonds form to the noble gas atom. Instead, the noble gas atom (Ar, Kr, Xe — atoms of the right size) gets physically trapped inside cage-like voids in a host lattice, most classically ice/water cages (gas hydrates) formed under pressure.",
                "• Formation depends critically on atomic size: the noble gas atom must be large enough to be held in the cage (weak van der Waals trapping) but small enough to actually fit — this is why He and Ne, being too small, do NOT form stable clathrates, while Ar, Kr and Xe do.",
                "• Because there's no true bonding, clathrates decompose on melting/warming or on dissolving the host lattice — they are a purely physical (host-guest) phenomenon, distinct from every other 'compound' discussed in this chapter, which is exactly why this topic is frequently used to test the true/false conceptual line between a compound and a clathrate."
              ],
              "exams": [
                "JEE Advanced"
              ]
            }
          ]
        },
        {
          "id": "g18-physical-trends",
          "title": "Physical Trends",
          "exams": [
            "JEE Advanced"
          ],
          "blocks": [
            {
              "kind": "detailed",
              "heading": "Core Notes",
              "points": [
                "◆ A. Atomic Trends",
                "Property  •  Trend (Low → High)",
                "Atomic Radius  •  He < Ne < Ar < Kr < Xe (Increases down)",
                "Ionization Energy  •  He > Ne > Ar > Kr > Xe (Decreases down)",
                "Electron Gain  •  Large Positive values (Stable Octet).",
                "Boiling Point  •  He < Ne < Ar < Kr < Xe (Increases down).",
                "◆ B. Unique Characteristics",
                "• State: Monoatomic gases. Colorless, odorless.",
                "• Solubility: Sparingly soluble in water (Solubility increases down).",
                "• Forces: Only weak Dispersion Forces ."
              ],
              "exams": [
                "JEE Advanced"
              ]
            },
            {
              "kind": "detailed",
              "heading": "Continued",
              "points": [
                "• Helium Anomaly: Lowest boiling point (4.2 K) of any known substance. Diffuses through rubber/glass.",
                "Trend: Increases Down the Group (He → Rn)",
                "Property  •  Comparison Order  •  Reason",
                "Atomic Radius  •  He < Ne < Ar < Kr < Xe  •  Increases due to added shells. (Van der Waals radii).",
                "Boiling Point  •  He < Ne < Ar < Kr < Xe  •  Increases with size due to stronger dispersion forces.",
                "Ionization Energy  •  He > Ne > Ar > Kr > Xe  •  Decreases down. He has highest IE in periodic table.",
                "Solubility in Water  •  He < Ne < Ar < Kr < Xe  •  Increases down due to dipole-induced dipole interaction.",
                "He Anomaly Lowest Boiling Point: Helium has the lowest boiling point of any known substance (4.2 K) . It can diffuse through rubber, glass, and plastic."
              ],
              "exams": [
                "JEE Advanced"
              ]
            }
          ]
        },
        {
          "id": "g18-chemical-reactivity-noble-gas-chemistry",
          "title": "Chemical Reactivity & Noble-Gas Chemistry",
          "exams": [
            "JEE Advanced"
          ],
          "blocks": [
            {
              "kind": "detailed",
              "heading": "Core Notes",
              "points": [
                "◆ A. Why Inert?",
                "• Completely filled ns²np⁶ shell.",
                "• High Ionization Enthalpy.",
                "• Positive Electron Gain Enthalpy.",
                "◆ B. Neil Bartlett's Experiment (1962)",
                "• Bartlett observed the reaction of PtF₆ with Oxygen to form O₂⁺ [PtF₆ ]⁻ . • Logic: First I.E. of O₂ (1175 kJ/mol) ≈ I.E. of Xe (1170 kJ/mol).",
                "• First Compound: Xe + PtF₆ → Xe⁺ [PtF₆ ]⁻ (Red Solid)",
                "• Scope: Compounds mostly formed by Xe (with F, O) and Kr (only KrF₂).",
                "◆ A. Powerful Fluorinating Agents",
                "Xenon fluorides are strong oxidizing and fluorinating agents."
              ],
              "exams": [
                "JEE Advanced"
              ]
            },
            {
              "kind": "detailed",
              "heading": "Continued",
              "points": [
                "• They fluorinate hydrogen donors easily.",
                "• Reaction with Fluoride Acceptors (Lewis Acids): XeF₂ + PF₅ → [XeF]⁺ [PF₆ ]⁻",
                "• Reaction with Fluoride Donors (Alkali Metals): XeF₆ + MF → M⁺ [XeF₇ ]⁻ (M = Na, K, Rb, Cs)",
                "◆ B. Preparation (Conditions V. Imp)",
                "Reactants  •  Cond.  •  Product",
                "Xe (Excess) + F₂  •  673K, 1 bar  •  XeF₂",
                "Xe + F₂ (1:5)  •  873K, 7 bar  •  XeF₄",
                "Xe + F₂ (1:20)  •  573K, 60 bar  •  XeF₆"
              ],
              "exams": [
                "JEE Advanced"
              ]
            }
          ]
        },
        {
          "id": "g18-reactions-hydrolysis-of-xenon-fluorides",
          "title": "Reactions & Hydrolysis of Xenon Fluorides",
          "exams": [
            "JEE Advanced"
          ],
          "blocks": [
            {
              "kind": "detailed",
              "heading": "Core Notes",
              "points": [
                "◆ A. With Water (Hydrolysis)",
                "• XeF₂: 2XeF₂ + 2H₂O → 2Xe + 4HF + O₂",
                "• XeF₄ (Disproportionation): 6XeF₄ + 12H₂O → 4Xe + 2XeO₃ + 24HF + 3O₂",
                "• XeF₆ (Complete): XeF₆ + 3H₂O → XeO₃ + 6HF",
                "◆ B. Partial Hydrolysis (XeF₆)",
                "• XeF₆ + H₂O → XeOF₄ + 2HF",
                "• XeF₆ + 2H₂O → XeO₂F₂ + 4HF",
                "◆ C. Fluoride Ion Acceptors/Donors",
                "• XeF₂ + PF₅ → [XeF]⁺ [PF₆ ]⁻",
                "• XeF₆ + MF → M⁺ [XeF₇ ]⁻ (M = Na, K, Rb, Cs)."
              ],
              "exams": [
                "JEE Advanced"
              ]
            },
            {
              "kind": "detailed",
              "heading": "Continued",
              "points": [
                "Comp  •  Hybrid.  •  Shape  •  Structure",
                "XeF₂  •  sp³d  •  Linear  •  3 LP (Equatorial)",
                "XeF₄  •  sp³d²  •  Sq. Planar  •  2 LP (Axial)",
                "XeF₆  •  sp³d³  •  Dist. Octa.  •  1 LP",
                "XeO₃  •  sp³  •  Pyramidal  •  1 LP",
                "V. IMP Hydrolysis Reactions: 1. XeF₂: 2XeF₂ + 2H₂O → 2Xe + 4HF + O₂ 2. XeF₆ (Complete): XeF₆ + 3H₂O → XeO₃ (Explosive solid) 3. XeF₄ (Disproportionation): Gives Xe + XeO₃ ."
              ],
              "exams": [
                "JEE Advanced"
              ]
            },
            {
              "kind": "illustration",
              "level": "advanced",
              "concept": "XeF₄ hydrolysis is a disproportionation — assign Xe's oxidation state to see why",
              "tricky": true,
              "question": "XeF₄ is hydrolysed by water: 6XeF₄ + 12H₂O → 4Xe + 2XeO₃ + 24HF + 3O₂. (a) Assign the oxidation state of Xe in XeF₄ and in XeO₃. (b) Show this is a disproportionation, not a simple hydrolysis. (c) Predict the hybridisation and shape of XeO₃, and explain why it is isostructural with XeF₃⁺ but NOT with XeF₄.",
              "thinking": "A 'hydrolysis' that changes the central atom's oxidation state is always secretly a disproportionation riding on top of a substitution — treat oxidation-state bookkeeping as the first move, not an afterthought, whenever a hydrolysis equation looks unbalanced in a way plain substitution can't explain (here, 6 Xe in but only 4+2=6 Xe out in TWO different products, not one).",
              "steps": [
                { "label": "Oxidation state in XeF₄", "work": "F is always −1. Xe + 4(−1) = 0 → Xe = +4." },
                { "label": "Oxidation state in XeO₃", "work": "O is −2. Xe + 3(−2) = 0 → Xe = +6." },
                { "label": "Oxidation state of the Xe(0) product", "work": "Elemental Xe is 0 by definition." },
                { "label": "Confirm disproportionation", "work": "Starting Xe(+4) splits into Xe(0) (reduced, gained 4e⁻) and Xe(+6) (oxidised, lost 2e⁻). Electron balance: for every 1 Xe oxidised (+4→+6, loses 2e⁻), 1 Xe must be reduced by an equivalent electron count spread appropriately — matching the 4:2 (i.e. 2:1) ratio of Xe:XeO₃ seen in the balanced equation (4 Xe formed : 2 XeO₃ formed) confirms the electron bookkeeping: 4×(4e⁻ gained) = 16e⁻ gained; 2×(2e⁻ lost) = 4e⁻ lost — the remaining electrons are accounted for by the O₂ produced (O in H₂O is −2, O in O₂ is 0, each O₂ represents 4 electrons released from oxygen oxidation), which is why O₂ appears in the products alongside HF." },
                { "label": "Hybridisation and shape of XeO₃", "work": "Xe contributes 8 valence electrons; 3 are used in 3 Xe=O bonds (dative/multiple bond character, but VSEPR-counted as 3 bonding domains), leaving 1 lone pair. Steric number = 3 + 1 = 4 → sp³ hybridised, trigonal pyramidal shape (AX₃E) — the same electron arrangement as NH₃ and as XeF₃⁺ (also AX₃E, sp³, pyramidal)." },
                { "label": "Why not isostructural with XeF₄", "work": "XeF₄ is AX₄E₂ (4 bond pairs + 2 lone pairs, sp³d², square planar) — a different steric number (6) entirely from XeO₃'s steric number (4). Same central atom, completely different electron count around it, so no structural relationship should be expected." }
              ],
              "answer": "Xe: +4 in XeF₄, +6 in XeO₃, 0 in elemental Xe — the hydrolysis is a disproportionation. XeO₃ is sp³, trigonal pyramidal (AX₃E), isostructural with XeF₃⁺ and NH₃ — not with XeF₄ (which is AX₄E₂, square planar).",
              "insight": "Any time a hydrolysis equation produces the SAME element in two different products (here, Xe⁰ and XeO₃), disproportionation is happening — check oxidation states before trying to balance by inspection alone.",
              "commonMistakes": [
                "Assuming all 'hydrolysis of XeFₙ' reactions are simple substitution (F replaced by OH/O) — XeF₂ and complete XeF₆ hydrolysis ARE simple substitution, but XeF₄'s is not.",
                "Comparing XeO₃'s shape to XeF₄'s shape just because both are xenon compounds — always compare by steric number, not by which element is central."
              ]
            }
          ]
        },
        {
          "id": "g18-xenon-fluoride-preparation",
          "title": "Xenon Fluoride Preparation",
          "exams": [
            "JEE Advanced"
          ],
          "blocks": [
            {
              "kind": "detailed",
              "heading": "Core Notes",
              "points": [
                "Compound  •  Reactants (Ratio)  •  Conditions",
                "XeF₂  •  Xe (Excess): F₂  •  673 K, 1 bar",
                "XeF₄  •  Xe: F₂ (1:5)  •  873 K, 7 bar",
                "XeF₆  •  Xe: F₂ (1:20)  •  573 K, 60-70 bar",
                "Alt Prep for XeF₆: XeF₄ + O₂F₂ → XeF₆ + O₂ (143 K)."
              ],
              "exams": [
                "JEE Advanced"
              ]
            }
          ]
        },
        {
          "id": "g18-structures-vsepr",
          "title": "Structures & VSEPR",
          "exams": [
            "JEE Advanced"
          ],
          "blocks": [
            {
              "kind": "detailed",
              "heading": "Core Notes",
              "points": [
                "Molecule  •  Hybridization  •  Geometry  •  Shape",
                "XeF₂  •  sp³d  •  Trigonal Bipyramidal  •  Linear (3 LP)",
                "XeF₄  •  sp³d²  •  Octahedral  •  Square Planar (2 LP)",
                "XeF₆  •  sp³d³  •  Pentagonal Bipyramidal  •  Distorted Octahedral (1 LP)",
                "XeOF₄  •  sp³d²  •  Octahedral  •  Square Pyramidal",
                "XeO₃  •  sp³  •  Tetrahedral  •  Pyramidal",
                "Note: XeO₃ is a colorless explosive solid."
              ],
              "exams": [
                "JEE Advanced"
              ]
            },
            {
              "kind": "detailed",
              "heading": "MOT alternative — 3-centre-4-electron bonding (why 'expanded octet via d-orbitals' is the outdated explanation)",
              "points": [
                "• The traditional textbook picture explains XeF₂'s hybridisation as sp³d, implying xenon's empty 5d orbitals mix in to accommodate 5 electron pairs. Modern bonding theory (increasingly tested at JEE Advanced/Olympiad level) shows Xe's 5d orbitals are actually too high in energy to meaningfully participate — the sp³d label is a useful VSEPR bookkeeping device, not literally accurate orbital physics.",
                "• The more accurate description for XeF₂: a linear 3-centre-4-electron (3c–4e) bond across F–Xe–F, built from just ONE Xe p-orbital (aligned along the F–Xe–F axis) combining with one p-orbital from each fluorine. This gives 3 molecular orbitals: one bonding (fully occupied), one non-bonding (fully occupied, largely localised on the two F atoms), and one antibonding (empty).",
                "• 4 electrons fill the bonding + non-bonding MOs (2 each), leaving the antibonding MO empty — net bonding character is real but WEAKER than two normal 2c–2e bonds would be, which is exactly why Xe–F bonds in these compounds are longer and weaker than typical single bonds, and why XeF₂ is a good fluorinating agent (its Xe–F bonds break relatively easily).",
                "• The same 3c–4e logic extends to explain hypervalent bonding generally (e.g. in I₃⁻, ClF₃, SF₄, PF₅) without needing to invoke d-orbital participation at all — if this framing comes up, recognise it as the SAME underlying idea as VSEPR's answer, just with a more physically defensible mechanism behind it."
              ],
              "exams": [
                "JEE Advanced"
              ]
            }
          ]
        },
        {
          "id": "g18-uses-of-noble-gases",
          "title": "Uses of Noble Gases",
          "exams": [
            "JEE Advanced"
          ],
          "blocks": [
            {
              "kind": "detailed",
              "heading": "Core Notes",
              "points": [
                "• Helium: • Balloons (light, non-inflammable). • Gas-cooled nuclear reactors. • Liquid He: Cryogenic agent for MRI/NMR magnets. • Diving: Diluent for O₂ (low solubility prevents 'bends').",
                "• Neon: Discharge tubes, fluorescent bulbs, botanical gardens.",
                "• Argon: Inert atmosphere for Metallurgy (Arc welding, Ti production), Electric bulbs.",
                "• Xe/Kr: Special purpose light bulbs (flash).",
                "• Helium: • Filling balloons (Non-inflammable, light). • Diving Apparatus: Diluent for oxygen (Low solubility in blood prevents \"bends\"). • MRI: Liquid He used as cryogenic agent for superconducting magnets.",
                "• Neon: • Discharge tubes (Orange glow). • Beacon lights (Penetrates fog).",
                "• Argon: • Inert atmosphere for Arc Welding . • Filling incandescent bulbs.",
                "• Xenon/Krypton: • High-efficiency light bulbs. • Flash photography."
              ],
              "exams": [
                "JEE Advanced"
              ]
            },
            {
              "kind": "trap",
              "items": [
                { "trap": "Argon is the most abundant noble gas in air (and generally), so it must be the hardest to extract.", "reality": "Argon IS the most abundant noble gas in the atmosphere (~0.9%), but xenon is the LEAST abundant — yet Xe is the only one that reliably forms stable compounds. Abundance ≠ chemical importance." },
                { "trap": "Clathrate compounds are chemical compounds formed by weak bonding between the noble gas and the host lattice.", "reality": "Clathrates are purely PHYSICAL trapping mechanisms — the noble gas sits in a cage-like void with NO covalent or ionic bonds to the host. They decompose on heating or dissolving the host, exactly because there's no true bonding." },
                { "trap": "XeF₄ hydrolysis is a simple substitution: XeF₄ + H₂O → XeO₂ + HF (with F replaced by O).", "reality": "XeF₄ hydrolysis is a DISPROPORTIONATION: 6XeF₄ + 12H₂O → 4Xe + 2XeO₃ + 24HF + 3O₂. Xenon starts at +4 and splits into +0 (Xe metal) and +6 (in XeO₃), with O being oxidised to O₂. The stoichiometry and products reflect electron transfer, not just substitution." },
                { "trap": "Noble gases all have electron gain enthalpy values near zero, meaning they are barely reluctant to accept electrons.", "reality": "Noble gases have POSITIVE electron gain enthalpy values — meaning energy must be ADDED to force them to accept an electron. Zero refers to neutral atoms at rest; noble gases actively repel added electrons, which is why they're inert in the first place." }
              ]
            },
            {
              "kind": "focus",
              "title": "What examiners actually test on Group 18",
              "points": [
                "Argon's abundance vs the rarity of Xe compounds — why the most abundant doesn't mean the most important.",
                "Clathrate compounds as purely PHYSICAL trapping, with no chemical bonding — a classic conceptual test for understanding 'what is a compound'.",
                "Xenon fluoride preparation conditions (temperature, pressure, Xe:F₂ ratio) and why they differ so sharply between XeF₂/XeF₄/XeF₆.",
                "XeF₄'s disproportionation in hydrolysis (Xe +4 → +0 + +6) vs simple substitution in XeF₂ and XeF₆ — condition-dependent products.",
                "VSEPR shape derivation for XeF₂/XeF₄/XeF₆ and how lone-pair positioning (equatorial vs axial) differs across the three."
              ]
            }
          ]
        }
      ]
    }
  ],
  "chapterRevision": [
    "Group 13: boron is electron-deficient and never cationic; know diborane's 3c–2e bridges cold, boric acid as a Lewis (not Brønsted) acid, the Ga < Al radius anomaly, and AlCl₃'s dimer-in-vapour / ionic-in-water duality.",
    "Group 14: catenation collapses after carbon; the inert-pair effect peaks here (Sn²⁺ reducing, Pb⁴⁺ oxidising). Know diamond vs graphite bonding cold, CO's neutral character, and silicate classification by shared-oxygen count.",
    "Group 15: connect periodic trends with the inert-pair effect, hydride orders, halide stability, nitrogen oxides and P–H-bond-based reducing character of phosphorus oxoacids.",
    "Group 16: compare O with heavier chalcogens; revise hydride acidity/stability, O₂/O₃ chemistry, sulphur allotropes, SO₂, halides and sulphur oxoacids.",
    "Group 17: fluorine is the major anomaly; revise electron-gain order, oxidizing power, HX orders, chlorine reactions, oxoacid strength and interhalogen shapes.",
    "Group 18: revise why noble gases are inert, Bartlett’s xenon breakthrough, controlled preparation/hydrolysis of XeF₂/XeF₄/XeF₆ and VSEPR structures.",
    "Treat every explicit exception, colour/state, order, reagent condition and balanced reaction in the chapter as a direct JEE Advanced recall target."
  ]
};
