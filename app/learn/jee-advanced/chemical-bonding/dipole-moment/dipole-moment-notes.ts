// Dipole Moment — JEE Advanced / Chemical Bonding
// Directly-authored content blocks (no text-parsing layer). Every numeric value,
// structure and worked example here is carried over verbatim from the audited
// master notes; only the presentation format changed for this site's block model.

export type DipoleBlockKind =
  | "major"
  | "section"
  | "subheading"
  | "callout"
  | "bullets"
  | "numbered"
  | "table"
  | "formula"
  | "structure"
  | "paragraph";

export type DipoleBlock = {
  kind: DipoleBlockKind;
  text?: string;
  items?: string[];
  headers?: string[];
  rows?: string[][];
  structureId?: string;
  formulaLabel?: string;
};

const sections = [
  "Definition, Formula and Units",
  "Bond Moment, Molecular Dipole and Vector Addition",
  "Percentage Ionic Character",
  "The Pauling and Hannay–Smyth Equations",
  "The Complete Anatomy of Molecular Polarity",
  "Predicting Molecular Geometry from Dipole Moment",
  "NH₃ vs NF₃ and H₂O vs OF₂ — The Lone-Pair Reversal",
  "The Chloromethane Series and Induced Polarisation",
  "Substituted Benzenes",
  "Cis–Trans Isomerism and Conformational Analysis",
  "Special Cases: CO, B–N, Platinum Complexes, Ozone, Hydrazine/Peroxide",
  "Trigonal-Bipyramidal Phosphorus Systems and Hydride Trends",
  "Quick-Reference Comparisons",
] as const;

export const dipoleChapterMap: string[] = [...sections];

export const dipoleMomentBlocks: DipoleBlock[] = [
  // ============================================================ 1
  { kind: "major", text: `Section 1 - ${sections[0]}` },
  {
    kind: "paragraph",
    text: "Dipole moment (μ) is a quantitative measure of the polarity of a bond or molecule. It arises whenever the centre of positive charge and the centre of negative charge in a system do not coincide. It is a vector quantity — it possesses both magnitude and direction. By convention, the dipole arrow is drawn from the positive end to the negative end, with the crossed tail sitting on the electropositive atom.",
  },
  { kind: "structure", structureId: "dipole-arrow" },
  { kind: "formula", text: "\\mu = q \\times d", formulaLabel: "Definition" },
  {
    kind: "callout",
    text: "Core idea: μ is the product of the magnitude of the separated charge (q) and the distance (d) between the centres of positive and negative charge. A true 100% covalent bond does not exist even in H₂ — ionic resonance forms contribute a small amount, but cancel exactly in a homonuclear bond, leaving zero net moment.",
  },
  { kind: "subheading", text: "Units" },
  { kind: "formula", text: "1\\ \\text{D} = 10^{-18}\\ \\text{esu·cm} = 3.336\\times10^{-30}\\ \\text{C·m}", formulaLabel: "Debye" },
  { kind: "formula", text: "e = 1.6\\times10^{-19}\\ \\text{C} = 4.8\\times10^{-10}\\ \\text{esu}", formulaLabel: "Elementary charge" },
  { kind: "subheading", text: "Bond moment versus molecular moment" },
  {
    kind: "bullets",
    items: [
      "Diatomic heteronuclear molecule (e.g. HCl): bond moment = molecular dipole moment.",
      "Diatomic homonuclear molecule (e.g. Cl₂, N₂): μ = 0 because q = 0 — no permanent shift of the bond pair.",
      "Polyatomic molecule: the molecular dipole moment is the vector sum of every bond moment and every lone-pair moment present.",
    ],
  },
  { kind: "formula", text: "\\vec\\mu_{\\text{molecule}} = \\sum \\vec\\mu_{\\text{bonds}} + \\sum \\vec\\mu_{\\text{lone pairs}}", formulaLabel: "Vector sum" },

  // ============================================================ 2
  { kind: "major", text: `Section 2 - ${sections[1]}` },
  { kind: "structure", structureId: "hcl-bond" },
  {
    kind: "paragraph",
    text: "The dipole moment of one individual bond. In H–Cl, chlorine (more electronegative) pulls the shared pair, generating a bond moment directed toward Cl. Bond moments are approximately transferable between molecules and form the basis of vector-addition calculations.",
  },
  { kind: "structure", structureId: "co2-cancellation" },
  {
    kind: "paragraph",
    text: "The net, experimentally measured dipole of the whole molecule is the vector sum of all bond and lone-pair moments. A molecule can contain highly polar bonds yet be completely nonpolar overall if symmetry forces the vectors to cancel — CO₂ is the textbook case.",
  },
  { kind: "subheading", text: "Vector addition of two dipoles" },
  { kind: "structure", structureId: "vector-triangle" },
  { kind: "formula", text: "\\mu_R = \\sqrt{\\mu_1^2 + \\mu_2^2 + 2\\mu_1\\mu_2\\cos\\theta}", formulaLabel: "General case" },
  { kind: "formula", text: "\\mu_R = 2\\mu_b\\cos(\\theta/2)", formulaLabel: "Special case: μ₁ = μ₂ = μ_b" },
  {
    kind: "table",
    headers: ["θ", "cos term", "Result"],
    rows: [
      ["0°", "cos 0 = 1", "μ = 2μ_b (maximum, full reinforcement)"],
      ["109.5° (tetrahedral)", "cos 54.75° ≈ 0.577", "μ ≈ 1.15 μ_b"],
      ["120° (trigonal)", "cos 60° = 0.5", "μ = μ_b"],
      ["180° (linear)", "cos 90° = 0", "μ = 0 (complete cancellation)"],
    ],
  },

  // ============================================================ 3
  { kind: "major", text: `Section 3 - ${sections[2]}` },
  {
    kind: "paragraph",
    text: "If a bond A–B were 100% ionic, complete unit-charge separation would give a theoretical maximum (\"ionic\") dipole moment. Comparing the observed moment to this theoretical maximum gives the percentage ionic character.",
  },
  { kind: "formula", text: "\\mu_{\\text{ionic}} = e \\times d", formulaLabel: "Theoretical 100%-ionic moment" },
  { kind: "formula", text: "\\%\\ \\text{ionic character} = \\frac{\\mu_{\\text{observed}}}{\\mu_{\\text{ionic}}}\\times 100", formulaLabel: "Percentage ionic character" },
  { kind: "subheading", text: "Worked Example: HCl" },
  {
    kind: "paragraph",
    text: "Given: μ_obs(HCl) = 1.03 D; bond length d = 1.27 Å = 1.27×10⁻⁸ cm.",
  },
  {
    kind: "paragraph",
    text: "Step 1 — theoretical 100%-ionic moment: μ_ionic = (4.8×10⁻¹⁰ esu) × (1.27×10⁻⁸ cm) = 6.1×10⁻¹⁸ esu·cm = 6.1 D. Step 2 — % ionic character = (1.03 / 6.1) × 100 = 17.0%.",
  },
  {
    kind: "callout",
    text: "Chemical interpretation: H–Cl is only ≈17% ionic (≈83% covalent) — despite the substantial electronegativity gap, the bond is predominantly covalent.",
  },
  {
    kind: "table",
    headers: ["", "HF", "HCl", "HBr", "HI"],
    rows: [
      ["μ_obs (D)", "1.98", "1.03", "0.79", "0.38"],
      ["% ionic character", "45", "17", "12", "5"],
    ],
  },
  {
    kind: "callout",
    text: "Cross-check via charge ratio: % ionic = (q_obs/q_calc)×100. For LiF, μ_obs = 6.32 D, d = 0.156 nm ⟹ μ_ionic = (1.602×10⁻¹⁹ C)(0.156×10⁻⁹ m) = 2.496×10⁻²⁹ C·m. % ionic = (6.32×3.33×10⁻³⁰)/(2.496×10⁻²⁹) × 100 = 84.3% — the identical numeric result as the Hannay–Smyth cross-check in the next section.",
  },

  // ============================================================ 4
  { kind: "major", text: `Section 4 - ${sections[3]}` },
  { kind: "subheading", text: "Pauling empirical equation" },
  { kind: "formula", text: "\\%\\ \\text{ionic} = 100\\left[1 - e^{-\\tfrac{1}{4}(\\chi_A-\\chi_B)^2}\\right]" },
  {
    kind: "table",
    headers: ["Δχ", "0.1", "0.5", "1.0", "1.5", "1.7", "2.0", "2.5", "3.0"],
    rows: [["% ionic", "0.5", "6", "22", "43", "50", "63", "79", "89"]],
  },
  {
    kind: "callout",
    text: "Limitations: agreement is poor at high Δχ. Alkali-metal hydrides and hydrides of Ca, Sr, Ba are predominantly ionic even though Δχ < 1.7. HF: Δχ = 1.9 predicts 60% ionic character, but the true value is only ≈45%. The Δχ ≈ 1.7 \"50% ionic\" boundary is an empirical guideline, not an absolute law.",
  },
  { kind: "subheading", text: "Hannay–Smyth equation" },
  { kind: "paragraph", text: "Proposed to correct Pauling's shortcomings:" },
  { kind: "formula", text: "\\%\\ \\text{ionic} = 16(\\Delta\\chi) + 3.5(\\Delta\\chi)^2" },
  {
    kind: "table",
    headers: ["", "HF", "HCl", "HBr", "HI"],
    rows: [
      ["% ionic (approx.)", "43", "17", "13", "7"],
      ["% covalent (approx.)", "57", "83", "87", "93"],
    ],
  },
  { kind: "subheading", text: "Worked Example: LiF, solving for χ(Li)" },
  {
    kind: "numbered",
    items: [
      "Given: μ(LiF) = 6.32 D, χ_F = 4.0, bond length = 0.156 nm.",
      "Theoretical ionic moment: μ_ionic = (1.6×10⁻¹⁹ C)(0.156×10⁻⁹ m) = 2.496×10⁻²⁹ C·m.",
      "Observed % ionic character: (6.32 D × 3.34×10⁻³⁰ C·m·D⁻¹) / (2.496×10⁻²⁹ C·m) × 100 = 84.33%.",
      "Substitute into Hannay–Smyth: 84.33 = 16(4.0 − χ_Li) + 3.5(4.0 − χ_Li)².",
      "Expand and solve the quadratic: 3.5χ_Li² − 24χ_Li + 35.67 = 0.",
      "Roots: χ_Li = 0.9 or χ_Li = 13.5.",
    ],
  },
  {
    kind: "callout",
    text: "χ_Li = 13.5 is rejected — electronegativity cannot exceed 4.0 (the scale maximum, set by fluorine). The chemically acceptable root is χ_Li = 0.9, in excellent agreement with the accepted value for lithium (≈0.98).",
  },

  // ============================================================ 5
  { kind: "major", text: `Section 5 - ${sections[4]}` },
  {
    kind: "paragraph",
    text: "The observed molecular dipole moment is the resultant of several distinct physical contributions. Treating polarity as \"electronegativity difference alone\" is the single most common error in this topic.",
  },
  { kind: "formula", text: "\\vec\\mu = \\vec\\mu_h + \\vec\\mu_e + \\vec\\mu_L + \\vec\\mu_g + \\vec\\mu_d + \\vec\\mu_{\\text{induced}}" },
  { kind: "subheading", text: "Intrinsic homopolar dipole, μ_h" },
  { kind: "structure", structureId: "homopolar-origin" },
  {
    kind: "paragraph",
    text: "Arises purely from a difference in orbital size between the two bonded atoms — it exists even when Δχ = 0. When one atom uses a more compact orbital, the overlap electron cloud is displaced toward it. In every H–X hydrogen halide, hydrogen's 1s orbital is far more compact than any halogen orbital, so μ_h always acts toward H — directly opposing the electronegativity-based moment.",
  },
  { kind: "subheading", text: "Electronegativity / bond-pair moment, μ_e" },
  {
    kind: "paragraph",
    text: "The familiar contribution: unequal sharing of the bonding electron pair shifts density toward the more electronegative atom. Generally μ_e > μ_h in magnitude, so the net bond moment is directed toward the more electronegative atom — but μ_h is never negligible in a rigorous treatment.",
  },
  { kind: "subheading", text: "Hybrid lone-pair moment, μ_L" },
  { kind: "structure", structureId: "hcl-lone-pairs" },
  {
    kind: "callout",
    text: "A lone pair contributes zero dipole moment if it occupies a pure s or p orbital: the s-orbital is spherically symmetric, and a pure p-orbital's two lobes point in exactly opposite directions and cancel. Only a lone pair housed in a hybrid orbital has a net directional moment.",
  },
  { kind: "formula", text: "sp > sp^2 > sp^3", formulaLabel: "Lone-pair moment order (carbon-type hybrids: 4.4 D → 3.7 D)" },
  {
    kind: "paragraph",
    text: "HCl in detail: if Cl used pure 3s/3p orbitals for its lone pairs, they would contribute nothing. Using sp³ hybrids instead, all three lone pairs point into the hemisphere opposite the H–Cl bond, each making ≈71° with the −z axis. Their combined contribution (3μ_L cos71°) reinforces μ_e but is opposed by μ_h. The low observed μ(HCl) = 1.03 D reflects this three-way tug-of-war — not electronegativity alone.",
  },
  { kind: "subheading", text: "Group moment, μ_g" },
  {
    kind: "paragraph",
    text: "Functional groups (–CH₃, –OH, –NH₂, –NO₂, –Cl…) behave as a single vector — the resultant of all bond/electronic moments inside that group — and this vector is approximately transferable between different parent molecules.",
  },
  { kind: "formula", text: "\\mu_{CH_3} = 3\\mu_{C\\text{–}H}\\cos70°32' = \\mu_{C\\text{–}H} \\approx 0.4\\ \\text{D}" },
  {
    kind: "table",
    headers: ["Group", "μ (D)", "Direction (aromatic ring)"],
    rows: [
      ["–NO₂", "3.95", "away (−I and −R same direction)"],
      ["–CHO", "2.8", "away"],
      ["–OH", "1.7", "away (−I predominates over +R)"],
      ["–Cl", "1.55", "away"],
      ["–CO₂H", "0.9", "away"],
      ["–CH₃", "0.4", "toward"],
      ["–NH₂", "1.53", "toward (+R predominates over −I)"],
    ],
  },
  { kind: "subheading", text: "Dative / coordinate-bond moment, μ_d" },
  { kind: "structure", structureId: "co-resonance" },
  {
    kind: "paragraph",
    text: "Arises from charge separation associated with a coordinate bond or a charge-separated resonance contributor. The dative contribution nearly cancels the ordinary electronegativity-based CO moment, explaining CO's remarkably small μ ≈ 0.11–0.12 D (full breakdown in Section 11).",
  },
  { kind: "subheading", text: "Induced dipole moment" },
  {
    kind: "paragraph",
    text: "An external electric field — or the field of a neighbouring polar bond — can separate the charge centroids of an otherwise nonpolar region, creating an induced dipole.",
  },
  { kind: "formula", text: "\\mu_{\\text{induced}} = \\alpha E" },
  {
    kind: "paragraph",
    text: "No external field is even required in some cases: in the chloromethane series (Section 8), polarisation of one C–Cl bond electronically induces a moment in the other C–Cl bonds, opposing them and steadily reducing the net dipole as chlorination increases.",
  },

  // ============================================================ 6
  { kind: "major", text: `Section 6 - ${sections[5]}` },
  {
    kind: "paragraph",
    text: "Steric number (SN) = bond pairs (BP) + lone pairs (LP) on the central atom; the shape and its polarity follow directly once BP and LP are counted separately.",
  },
  {
    kind: "table",
    headers: ["Hybrid.", "Formula", "SN", "BP", "LP", "Shape", "Polarity", "Examples"],
    rows: [
      ["sp", "AB₂", "2", "2", "0", "Linear", "μ=0", "CO₂, CS₂, BeCl₂"],
      ["sp²", "AB₃", "3", "3", "0", "Trigonal planar", "μ=0", "BH₃, BCl₃, SO₃, BF₃"],
      ["sp²", "AB₂L", "3", "2", "1", "Bent", "μ≠0", "SnCl₂, CCl₂"],
      ["sp³", "AB₄", "4", "4", "0", "Tetrahedral", "μ=0", "CH₄, SiCl₄, CCl₄, CF₄"],
      ["sp³", "AB₃L", "4", "3", "1", "Pyramidal", "μ≠0", "NH₃, CCl₃⁻, NCl₃, NF₃"],
      ["sp³", "AB₂L₂", "4", "2", "2", "Bent", "μ≠0", "H₂O, H₂S, R–O–R, ICl₂⁺, I₃⁺"],
      ["sp³d", "AB₅", "5", "5", "0", "Trigonal bipyramidal", "μ=0", "PCl₅, PF₅, AsCl₅, SbCl₅"],
      ["sp³d", "AB₄L", "5", "4", "1", "See-saw", "μ≠0", "SF₄, SCl₄, SeCl₄"],
      ["sp³d", "AB₃L₂", "5", "3", "2", "T-shaped", "μ≠0", "ClF₃, BrF₃, IF₃"],
      ["sp³d", "AB₂L₃", "5", "2", "3", "Linear", "μ=0", "XeF₂, ICl₂⁻, I₃⁻"],
      ["sp³d²", "AB₆", "6", "6", "0", "Octahedral", "μ=0", "SF₆, TeF₆, ICl₆⁺, SCl₆"],
      ["sp³d²", "AB₅L", "6", "5", "1", "Square pyramidal", "μ≠0", "IF₅, BrF₅"],
      ["sp³d²", "AB₄L₂", "6", "4", "2", "Square planar", "μ=0", "XeF₄, I₅⁻, ICl₄⁻"],
      ["sp³d³", "AB₇", "7", "7", "0", "Pentagonal bipyramidal", "μ=0", "IF₇"],
      ["sp³d³", "AB₆L", "7", "6", "1", "Distorted octahedral", "μ≠0", "XeF₆"],
      ["sp³d³", "AB₅L₂", "7", "5", "2", "Pentagonal planar", "μ=0", "XeF₅⁻"],
    ],
  },
  {
    kind: "callout",
    text: "Important limitation: a nonzero dipole moment alone cannot distinguish cis-1,2-dichloroethene from the constitutionally different isomer 1,1-dichloroethene, which is also polar. Dipole moment must always be interpreted together with connectivity, not geometry alone.",
  },

  // ============================================================ 7
  { kind: "major", text: `Section 7 - ${sections[6]}` },
  { kind: "structure", structureId: "nh3-nf3" },
  {
    kind: "paragraph",
    text: "Despite N–H (Δχ=0.94) and N–F (Δχ=0.96) being almost identical in electronegativity difference, μ(NH₃)=1.46 D ≫ μ(NF₃)=0.20 D. Reason: μ(NH₃) = μ_R+μ_L (reinforcement) while μ(NF₃) = μ_R−μ_L (opposition), where μ_L is the N lone-pair moment and μ_R the resultant of the three bond moments.",
  },
  { kind: "structure", structureId: "h2o-of2" },
  {
    kind: "paragraph",
    text: "Same mechanism as NH₃/NF₃: in H₂O, the O lone-pair resultant reinforces the O–H bond resultant; in F₂O it opposes it. Additionally, O–F (Δχ=0.5) is intrinsically a weaker bond moment than O–H (Δχ=1.4).",
  },
  { kind: "subheading", text: "N₂F₂ cis vs trans — lone pairs defeat the naive prediction" },
  {
    kind: "paragraph",
    text: "Naive vector reasoning predicts trans-N₂F₂ (F atoms opposite) should have small/zero μ and cis-N₂F₂ (F atoms same side) should have a large μ — but the observed trans is exactly zero while cis is also nearly zero (0.16 D), because nitrogen lone-pair contributions substantially offset the bond-moment picture in both isomers.",
  },

  // ============================================================ 8
  { kind: "major", text: `Section 8 - ${sections[7]}` },
  { kind: "structure", structureId: "chloromethane-series" },
  {
    kind: "paragraph",
    text: "μ order: CH₃Cl > CH₂Cl₂ > CHCl₃ > CCl₄ (0). Naively, CH₂Cl₂ (two C–Cl bonds at 109°28′) should exceed CH₃Cl, and CHCl₃'s C–Cl moment should equal CH₃Cl's — but the reverse is observed.",
  },
  {
    kind: "callout",
    text: "Explanation: each polarised C–Cl bond (δ⁺C–Clδ⁻) induces an opposing dipole in the neighbouring C–Cl bonds. This induced-dipole opposition is negligible for the single C–Cl in CH₃Cl but grows with each additional chlorine, progressively suppressing the net C–Cl bond moment until CCl₄, symmetric, cancels to exactly zero. Also: CH₃Cl > CH₃F > CH₃Br > CH₃I (mixed-halide trend) and HF > HCl > HBr > HI.",
  },
  { kind: "subheading", text: "CH₃OH — full geometric vector calculation" },
  {
    kind: "paragraph",
    text: "Using μ(O–H)=1.7D, μ(C–O)=0.7D, μ(CH₃)=0.4D and the 110° C–O–H angle: geometric summation gives μ_calc≈1.56 D vs. μ_obs=1.65 D — the small gap is the (here-omitted) oxygen lone-pair contribution.",
  },

  // ============================================================ 9
  { kind: "major", text: `Section 9 - ${sections[8]}` },
  { kind: "structure", structureId: "benzene-mono" },
  { kind: "structure", structureId: "dichlorobenzene" },
  {
    kind: "paragraph",
    text: "For identical substituents (μ_X=μ_Y): μ_ortho=√3μ_X; μ_meta=μ_X; μ_para=0 → order ortho > meta > para. Different substituents, one donating + one withdrawing (e.g. CH₃, NO₂): order reverses to ortho < meta < para. When both substituents are electron-withdrawing (e.g. Cl, NO₂): order returns to ortho > meta > para.",
  },
  { kind: "formula", text: "\\mu = \\sqrt{\\mu_X^2+\\mu_Y^2+2\\mu_X\\mu_Y\\cos\\theta}\\qquad \\theta_{ortho}=60°,\\ \\theta_{meta}=120°,\\ \\theta_{para}=180°" },
  {
    kind: "table",
    headers: ["X, Y", "μ ortho", "μ meta", "μ para", "Trend"],
    rows: [
      ["CH₃, Cl", "1.35", "1.78", "1.90", "o<m<p"],
      ["CH₃, NO₂", "3.76", "4.17", "4.40", "o<m<p"],
      ["Cl, NO₂", "4.60", "3.69", "2.70", "o>m>p"],
      ["NH₂, NO₂", "3.64–4.26", "4.85", "6.20", "o<m<p"],
      ["Cl, CN", "4.75", "3.40", "2.50", "o>m>p"],
    ],
  },
  { kind: "structure", structureId: "hydroquinone" },
  {
    kind: "callout",
    text: "p-Dihydroxybenzene (hydroquinone): simple collinear cancellation predicts μ=0 for para-identical substituents, but hydroquinone shows μ ≈ 1.64 D. Reason: the O–H group moment is not collinear with the ring diagonal — the O lone pair (not delocalised into the ring) tilts the –OH group moment to ≈83° from the diagonal, so the two group vectors do not fully cancel.",
  },
  { kind: "subheading", text: "Mesomeric effects and other benzene comparisons" },
  {
    kind: "bullets",
    items: [
      "Ethyl chloride (μ=2.05D, inductive only) vs. vinyl chloride (μ=1.44D, +R opposes −I); chloroacetylene has its direction fully reversed because −I is so weak at an sp carbon.",
      "Pyrrole (μ=1.8D, net toward ring) vs. furan (μ=0.7D, net toward O) — the −I effect is stronger for O than N, so furan's inductive pull wins while pyrrole's ring delocalisation wins.",
      "Fluorobenzene (μ=1.63D) < chlorobenzene (μ=1.75D) — F(2p)→C(2p) π-donation is more efficient than Cl(3p)→C(2p), cancelling more of the −I effect in fluorobenzene.",
      "p-Nitroaniline: simple addition predicts μ≈5.48D (1.53+3.95), but observed μ=6.2D — the +R(NH₂) and −R(NO₂) effects are electronically coupled through the ring, enhancing charge separation beyond simple group-vector addition.",
    ],
  },

  // ============================================================ 10
  { kind: "major", text: `Section 10 - ${sections[9]}` },
  { kind: "structure", structureId: "cis-trans-dichloroethene" },
  {
    kind: "paragraph",
    text: "1,2-dichloroethene: cis μ = 1.86 D (later sources: ≈1.90 D); trans μ = 0. Dipole moment measurements can track the ratio of cis- to trans-forms in a dynamic equilibrium.",
  },
  { kind: "subheading", text: "Worked Example: monitoring an isomeric equilibrium" },
  {
    kind: "paragraph",
    text: "For cis/trans Pt(Et₃P)₂Cl₂: μ(cis) ≈ 10 D, μ(trans) = 0 D. At a given temperature, μ_obs = 4 D. The observed moment is the weighted average of the two forms: 4 D = (x)(10 D) + (1−x)(0) ⟹ x = 0.40 — 40% cis, 60% trans present at equilibrium.",
  },
  { kind: "formula", text: "K_{eq} = \\frac{[\\text{trans}]}{[\\text{cis}]} = \\frac{60}{40} = 1.5" },
  { kind: "subheading", text: "Dipolar repulsion and conformational stability" },
  {
    kind: "bullets",
    items: [
      "Butane-2,3-dione: trans-form (μ=0, more stable — the two C=O dipoles point opposite ways, minimising repulsion between negative O centres) vs. cis-form (μ≠0, less stable, reinforcing dipoles).",
      "1,2-Dichloroethane: anti-form has the two C–Cl moments pointing opposite ways (μ=0) and is intrinsically more stable — yet the observed gas-phase μ = 1.2 D proves a significant population of the higher-energy gauche rotamer (μ=3.2 D) is thermally populated.",
      "1,2-Ethanediol: dipolar-repulsion logic alone predicts anti should be preferred (as for dichloroethane), but the gauche form is actually more stable because it allows an intramolecular O–H···O hydrogen bond — the one case in this topic where a stronger interaction overrides the dipole-repulsion argument.",
    ],
  },

  // ============================================================ 11
  { kind: "major", text: `Section 11 - ${sections[10]}` },
  { kind: "subheading", text: "CO — three competing effects nearly cancel" },
  {
    kind: "paragraph",
    text: "μ(CO) = 0.11–0.12 D, directed toward carbon (opposite the electronegativity prediction). Lone-pair moments on C and O oppose and roughly cancel; the intrinsic homopolar and σ/π-electronegativity contributions both point toward O (more compact orbitals, more electronegative); the dative-bond contribution (⁻C≡O⁺) points toward C and overwhelms the sum of the other three, leaving a small net moment toward carbon.",
  },
  { kind: "subheading", text: "B–N dative linkage" },
  {
    kind: "paragraph",
    text: "R₃B←NR₃ ↔ R₃B̄=N⁺R₃: the dative N→B π-contribution opposes the σ-bond moment generated by the electronegativity difference, lowering the net B–N moment below the naive electronegativity-only prediction.",
  },
  { kind: "structure", structureId: "pt-complexes" },
  {
    kind: "paragraph",
    text: "Both trans-PtCl₂(PEt₃)₂ and trans-PtCl₂(SEt₂)₂ are square-planar complexes where naive symmetry predicts μ=0. This holds for PEt₃ (P has no lone pair left after coordinate bonding). But sulfur in SEt₂ retains an unshared lone pair whose moment — plus the rigid, non-freely-rotating S–Et bond moments — is not fully cancelled by the trans arrangement, giving a substantial residual μ = 2.4 D.",
  },
  { kind: "structure", structureId: "ozone" },
  {
    kind: "paragraph",
    text: "Ozone: Lewis resonance places formal + charge on the central O and formal − on a terminal O. The two O–O bond moments are not fully cancelled by the lone-pair moment on the central atom, leaving ozone measurably polar despite consisting of only one element.",
  },
  { kind: "subheading", text: "N₂H₄, H₂O₂ and related nonplanar conformations" },
  {
    kind: "bullets",
    items: [
      "N₂H₄: μ ≈ 1.85 D; gas-phase gauche/skew conformation, NH₂ halves rotated ≈95° from eclipsed. Rotation barrier: through-trans ≈16 kJ/mol; through-cis ≈49.8 kJ/mol.",
      "H₂O₂: μ ≈ 2.0 D; open-book structure with O–O as spine, dihedral ≈111.5° (gas), ≈90–94.8° (crystalline), 80–145° range in organic peroxides. Rotation barrier: trans ≈4.6 kJ/mol; cis ≈29.5 kJ/mol.",
      "N₂F₄(g) exists as a mixture of gauche and staggered forms, showing anomalous dipole behaviour. P₂H₄(g) exists predominantly in the gauche form.",
    ],
  },

  // ============================================================ 12
  { kind: "major", text: `Section 12 - ${sections[11]}` },
  { kind: "structure", structureId: "pclxfy-series" },
  {
    kind: "paragraph",
    text: "Trigonal bipyramidal geometry: three equatorial positions (120° apart) + two axial positions (180° apart). Substituting F for Cl gives μ=0 only when the substitution pattern preserves an axis or plane of symmetry (PCl₅, PCl₃F₂ with both F axial, PF₅) and μ≠0 for asymmetric patterns (PCl₄F, PCl₂F₃, PClF₄) — polarity depends on the actual position of each atom, not merely the formula.",
  },
  {
    kind: "callout",
    text: "P(CH₃)₃(CF₃)₂ and P(CH₃)₂(CF₃)₃ test the same axial/equatorial group-vector cancellation: CF₃ is a strong electron-withdrawing group while CH₃ is weakly donating, so their placement determines whether the molecule's overall vector arrangement cancels to zero.",
  },
  { kind: "structure", structureId: "sf4-clf3-brf5" },
  {
    kind: "paragraph",
    text: "SF₄, ClF₃ and BrF₅ give the AX₄E / AX₃E₂ / AX₅E geometry rules concrete experimental teeth: each has a lone pair occupying a nominal vertex, breaking the symmetry that would otherwise cancel the fluorine bond moments — unlike the parent-symmetry cases PF₅ and SF₆ (μ=0).",
  },
  { kind: "structure", structureId: "group15-hydrides" },
  {
    kind: "paragraph",
    text: "The full Group 15 hydride series NH₃ > PH₃ > AsH₃ > SbH₃. Two effects act together going down the group: the electronegativity difference χ(E)−χ(H) shrinks, weakening μ_e, and the bond angle closes toward 90° (from 107° in NH₃ to ~92° in SbH₃), meaning less s-character in the bonding orbitals, which lowers the hybrid lone-pair moment's reinforcement of μ_e.",
  },
  { kind: "structure", structureId: "group16-hydrides" },
  {
    kind: "paragraph",
    text: "The Group 16 analogue: H₂O > H₂S > H₂Se > H₂Te, same reasoning. The trend is not perfectly smooth — H₂Se and H₂Te are very close — because the shrinking electronegativity difference has nearly bottomed out and other small effects (relativistic contraction in Te, changing homopolar contribution) become comparable in size.",
  },

  // ============================================================ 13
  { kind: "major", text: `Section 13 - ${sections[12]}` },
  {
    kind: "paragraph",
    text: "A compact reference of further comparisons, each isolating one specific factor (resonance, conjugation, ring aromaticity, VSEPR lone-pair placement) that decides which of two related molecules has the larger dipole moment — and, in several cases, why a larger μ does not imply greater chemical reactivity.",
  },
  {
    kind: "table",
    headers: ["Comparison", "μ values", "Order", "Why"],
    rows: [
      ["DMF vs. acetone", "3.82 D vs. 2.88 D", "DMF > acetone", "Amide resonance (⁻O–C=N⁺) increases charge separation, yet N→C=O donation makes DMF the poorer electrophile — larger μ ≠ more reactive carbonyl."],
      ["Acetonitrile vs. propyne", "≈3.9 D vs. 0.78 D", "CH₃CN ≫ propyne", "C≡N has very strong Cᵟ⁺–Nᵟ⁻ polarisation; C≡C in propyne has no comparable heteronuclear dipole."],
      ["Thiophene vs. furan", "0.55 D vs. 0.66 D", "furan > thiophene", "O's stronger inductive pull outweighs S's greater polarizability."],
      ["DMSO vs. dimethyl sulfide", "≈3.96 D vs. 1.50 D", "DMSO ≫ DMS", "Oxidation introduces a strongly polarised S⁺–O⁻ linkage."],
      ["Acetaldehyde vs. acetone", "2.75 D vs. 2.88 D", "acetone > acetaldehyde", "Second methyl group modifies the resultant — yet acetaldehyde is normally the more electrophilic despite smaller μ."],
      ["Nitrobenzene vs. benzene", "≈4.0 D vs. 0 D", "nitrobenzene ≫ benzene", "Benzene is perfectly symmetric; −NO₂ introduces strong −I/−R withdrawal and N⁺O⁻ character."],
      ["Pyridine vs. benzene", "≈2.2 D vs. 0 D", "pyridine ≫ benzene", "Replacing one CH by N destroys hexagonal charge symmetry."],
      ["p-Nitroaniline vs. nitrobenzene", "≈6.2 D vs. ≈4.0 D", "p-nitroaniline > nitrobenzene", "−NH₂ (π-donor) and −NO₂ (π-acceptor) reinforce through the para-conjugated ring — push–pull enhancement beyond simple group-vector addition."],
      ["cis- vs. trans-1,2-difluoroethene", "cis≠0; trans≈0", "cis > trans", "C–F vectors cancel by symmetry in trans, reinforce in cis — the fluorine analogue of the dichloroethene case."],
      ["SOCl₂ vs. SO₂Cl₂", "≈1.4–1.5 D vs. 1.81 D", "SO₂Cl₂ > SOCl₂", "\"Having a lone pair\" does not guarantee a larger μ — the full vector resultant matters."],
      ["ClF₃ vs. IF₅", "≈0.5–0.6 D vs. ≈2.1 D", "IF₅ ≫ ClF₃", "T-shaped ClF₃ shows more cancellation than square-pyramidal IF₅'s substantial axial resultant."],
      ["SF₄ vs. PF₅", "0.632 D vs. 0", "SF₄ > PF₅", "PF₅'s ideal D₃ₕ symmetry cancels completely; SF₄'s equatorial lone pair destroys that cancellation — electron-pair geometry ≠ molecular symmetry."],
      ["H₂CO vs. H₂CS", "2.332 D vs. 1.647 D", "H₂CO > H₂CS", "O's much greater electronegativity beats S's greater polarizability — a direct counterexample to \"more polarizable ⟹ larger μ.\""],
    ],
  },
];
