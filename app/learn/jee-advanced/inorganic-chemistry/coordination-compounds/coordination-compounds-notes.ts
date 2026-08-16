// Coordination Compounds. Builds on Atomic Structure (orbital shapes,
// electron configuration) and Chemical Bonding (hybridisation) rather than
// re-deriving them — this chapter's own content is Werner's theory,
// nomenclature, isomerism, valence bond and crystal field theory, and the
// magnetic/colour/stability consequences that follow from d-orbital splitting.

export type CoordBlockKind =
  | "major"
  | "section"
  | "subheading"
  | "callout"
  | "bullets"
  | "numbered"
  | "table"
  | "formula"
  | "paragraph";

export type CoordBlock = {
  kind: CoordBlockKind;
  text?: string;
  items?: string[];
  headers?: string[];
  rows?: string[][];
  formulaLabel?: string;
};

const sections = [
  "Werner's Theory and Basic Terminology",
  "Nomenclature of Coordination Compounds",
  "Isomerism: Structural Isomers",
  "Isomerism: Stereoisomers",
  "Valence Bond Theory: Hybridisation and Magnetism",
  "Crystal Field Theory: Octahedral Splitting",
  "Crystal Field Theory: Tetrahedral and Square Planar Splitting",
  "CFSE, Colour and the Spectrochemical Series",
  "Stability of Complexes and the Chelate Effect",
  "JEE Advanced Question Bank",
];

export const coordChapterMap: string[] = [...sections];

function major(n: number): CoordBlock {
  return { kind: "major", text: `Section ${n} - ${sections[n - 1]}` };
}
function sub(text: string): CoordBlock {
  return { kind: "subheading", text };
}
function p(text: string): CoordBlock {
  return { kind: "paragraph", text };
}
function callout(label: string, text: string): CoordBlock {
  return { kind: "callout", text: `${label}: ${text}` };
}
function bullets(items: string[]): CoordBlock {
  return { kind: "bullets", items };
}
function numbered(items: string[]): CoordBlock {
  return { kind: "numbered", items };
}
function table(headers: string[], rows: string[][]): CoordBlock {
  return { kind: "table", headers, rows };
}
function formula(text: string, formulaLabel?: string): CoordBlock {
  return { kind: "formula", text, formulaLabel };
}

export const coordBlocks: CoordBlock[] = [
  // ── Section 1 ─────────────────────────────────────────────────────────────
  major(1),
  p("Werner's theory (1893) was the first to correctly separate a metal's TWO independent kinds of valence, resolving why compounds like CoCl3.6NH3 behaved as if cobalt could bond to more groups than its oxidation state alone would suggest."),
  table(
    ["Valence type", "Werner's term", "Modern equivalent", "Behaviour"],
    [
      ["Primary valence", "Ionisable/ionic valence", "Oxidation state of the metal", "Satisfied by negative ions; these ions ionise in solution and are precipitated by an appropriate reagent (e.g. free Cl- reacts with AgNO3)"],
      ["Secondary valence", "Non-ionisable/coordinate valence", "Coordination number", "Satisfied by ligands (neutral molecules or ions) directly bonded to the metal in a fixed geometric arrangement; these do NOT ionise in solution and are not precipitated by the corresponding reagent"],
    ]
  ),
  formula("[Co(NH_3)_6]Cl_3 \\longrightarrow [Co(NH_3)_6]^{3+} + 3\\,Cl^- \\quad \\text{(all 3 Cl}^-\\text{ ionise — coordination number 6, all satisfied by NH}_3\\text{)}"),
  formula("[Co(NH_3)_5Cl]Cl_2 \\longrightarrow [Co(NH_3)_5Cl]^{2+} + 2\\,Cl^- \\quad \\text{(only 2 of 3 Cl}^-\\text{ ionise — one Cl is inside the coordination sphere, non-ionisable)}"),
  callout("Key idea", "Werner correctly predicted that the NUMBER of ionisable chloride ions (measurable by titrating with AgNO3, or by conductivity) would vary systematically across the CoCl3.nNH3 series even though the total formula composition looked similar — this ionisable-chloride count is exactly what reveals how many Cl- ions sit inside the coordination sphere (non-ionisable, directly bonded to Co) versus outside it (ionisable, simple counter-ions), and was the key experimental evidence that first established the theory."),
  sub("Core terminology"),
  table(
    ["Term", "Definition"],
    [
      ["Coordination sphere", "The metal ion plus all ligands directly bonded to it, written inside square brackets"],
      ["Ligand", "A molecule or ion with at least one lone pair (a Lewis base) that donates electron density directly to the metal (a Lewis acid) to form a coordinate/dative bond"],
      ["Coordination number", "The total number of ligand donor atoms directly bonded to the central metal (counted per DONOR ATOM, not per ligand molecule — a bidentate ligand like ethylenediamine contributes 2 to the coordination number despite being one molecule)"],
      ["Denticity", "The number of donor atoms a single ligand uses to bind the same metal — monodentate (1, e.g. NH3, Cl-), bidentate (2, e.g. ethylenediamine/en, oxalate), polydentate (more, e.g. EDTA is hexadentate)"],
      ["Chelate", "A ring formed when a polydentate ligand binds the same metal at two or more points — chelate complexes are generally more stable than analogous complexes with monodentate ligands (developed fully in Section 9)"],
      ["Ambidentate ligand", "A ligand with two different possible donor atoms that can each bind the metal, giving genuinely different complexes depending on which one coordinates (e.g. -NO2 via N gives a nitro complex; -ONO via O gives a nitrito complex; -SCN via S gives thiocyanato, via N gives isothiocyanato)"],
    ]
  ),

  // ── Section 2 ─────────────────────────────────────────────────────────────
  major(2),
  p("IUPAC nomenclature for coordination compounds follows a fixed sequence, and every rule exists to remove genuine ambiguity — an unambiguous name must specify ligand identity, ligand count, oxidation state, and (where relevant) geometry/isomer, all in one string."),
  numbered([
    "Cation is named before anion, exactly as in simple ionic compound naming (e.g. potassium hexacyanoferrate(III), not the reverse).",
    "Within the coordination sphere, ligands are named in ALPHABETICAL order (ignoring any multiplying prefix), regardless of charge — negative (anionic) ligands, neutral ligands, and positive (cationic) ligands are all interleaved alphabetically, not grouped by charge type.",
    "Anionic ligand names end in '-o' (chloro, cyano, oxalato, hydroxo); neutral ligands mostly keep their molecular name (ethylenediamine, pyridine) with a few historical exceptions (aqua for H2O, ammine for NH3 — note the double 'm', distinguishing it from an organic amine, carbonyl for CO, nitrosyl for NO).",
    "Ligand count uses di-/tri-/tetra- for simple ligand names, but bis-/tris-/tetrakis- (with the ligand name in parentheses) whenever the simple prefix would itself be ambiguous — most commonly when the ligand name already contains di-/tri- (e.g. bis(ethylenediamine), since 'diethylenediamine' would be genuinely ambiguous about whether 'di' modifies the ligand count or is part of the ligand's own name).",
    "The metal's oxidation state is given as a Roman numeral in parentheses immediately after the metal name (Stock notation) — this is calculated by balancing the overall complex ion charge against the known charges of every ligand, and is NOT simply read off a periodic table position.",
    "If the overall complex ion is an ANION, the metal name takes the suffix '-ate' (ferrate, cobaltate, cuprate) — for several metals this uses the metal's LATIN name specifically (ferrate from ferrum, argentate from argentum, plumbate from plumbum, aurate from aurum) rather than the everyday English name.",
  ]),
  sub("Worked example: calculating oxidation state"),
  formula("[Cr(NH_3)_4Cl_2]^{+} \\Rightarrow x + 4(0) + 2(-1) = +1 \\Rightarrow x = +3", "NH3 is neutral, each Cl- is -1, overall complex ion charge is +1"),
  callout("JEE trap", "The most common nomenclature error is applying the WRONG multiplying prefix system — using 'di' instead of 'bis' for a ligand name that already contains a number prefix (like ethylenediamine), which produces a genuinely ambiguous name. Always check whether the ligand's own name contains di-/tri-/tetra- before choosing which prefix system to use for the ligand count."),

  // ── Section 3 ─────────────────────────────────────────────────────────────
  major(3),
  p("Structural isomers have the same overall formula but a genuinely different connectivity — which atoms are bonded to the metal differs between the isomers, not merely their spatial arrangement."),
  table(
    ["Type", "What differs", "Example"],
    [
      ["Ionisation isomerism", "Which ion is inside the coordination sphere (bonded to the metal) vs outside it (a simple counter-ion) — the two isomers give different ions in solution and therefore different chemical tests", "[Co(NH3)5Br]SO4 (gives a precipitate with BaCl2, confirming free SO4^2-, but not with AgNO3) vs [Co(NH3)5SO4]Br (the reverse — precipitates with AgNO3, not BaCl2)"],
      ["Hydrate/solvate isomerism", "Whether H2O is a ligand (inside the coordination sphere) or a molecule of crystallisation (outside it) — the specific case of ionisation isomerism where the exchanged species is water", "[Cr(H2O)6]Cl3 (violet, all 3 Cl- ionisable) vs [Cr(H2O)5Cl]Cl2.H2O (grey-green, only 2 Cl- ionisable) vs [Cr(H2O)4Cl2]Cl.2H2O (dark green, only 1 Cl- ionisable) — a classic, colour-linked example (the changing ligand set directly shifts the crystal field splitting, Section 6-8)"],
      ["Linkage isomerism", "Which atom of an ambidentate ligand (Section 1) is the actual donor atom", "[Co(NH3)5(NO2)]Cl2 (nitro, N-bonded, yellow-brown) vs [Co(NH3)5(ONO)]Cl2 (nitrito, O-bonded, red)"],
      ["Coordination isomerism", "Distribution of ligands between two different metal centres in a compound containing both a complex cation AND a complex anion", "[Co(NH3)6][Cr(CN)6] vs [Cr(NH3)6][Co(CN)6] — the same overall ligand set, but swapped between which metal each ligand type is bonded to"],
    ]
  ),

  // ── Section 4 ─────────────────────────────────────────────────────────────
  major(4),
  p("Stereoisomers share IDENTICAL connectivity (the same atoms bonded to the same other atoms) and differ only in the spatial arrangement of ligands around the metal — geometrical (cis-trans / fac-mer) isomerism and optical isomerism."),
  sub("Geometrical isomerism"),
  table(
    ["Geometry", "Isomer pair", "Description"],
    [
      ["Square planar, MA2B2", "cis / trans", "cis: the two identical A ligands are adjacent (90 degrees apart); trans: the two A ligands are opposite (180 degrees apart) — e.g. cisplatin, cis-[Pt(NH3)2Cl2], is a major anticancer drug, while its trans isomer is therapeutically inactive, a striking real-world consequence of geometric isomerism alone"],
      ["Octahedral, MA4B2", "cis / trans", "Directly analogous to the square planar case, just extended to six positions — e.g. [Co(NH3)4Cl2]+"],
      ["Octahedral, MA3B3", "facial (fac) / meridional (mer)", "fac: the three identical A ligands occupy one triangular face of the octahedron (all mutually cis); mer: the three A ligands lie along one meridian (two are trans to each other, forming a straight line through the metal, with the third cis to both)"],
    ]
  ),
  sub("Optical isomerism"),
  p("Octahedral complexes with three bidentate (chelating) ligands, [M(AA)3], are chiral — non-superimposable on their mirror image — for the same fundamental reason any tetrahedral or propeller-like stereocentre is chiral, and exist as a pair of enantiomers (commonly labelled Delta and Lambda for the direction of the propeller-like twist of the three chelate rings)."),
  callout("Key idea", "Optical isomerism in coordination compounds is a direct geometric consequence, not a coincidence — cis-[M(AA)2B2] type octahedral complexes (with two bidentate ligands and two different monodentate ligands, both cis) are ALSO chiral, while the corresponding TRANS isomer of the same complex is NOT chiral (it has an internal mirror plane) — a frequently tested pairing of geometric and optical isomerism together in one question, since recognising the cis arrangement's lack of symmetry (and the trans arrangement's presence of a mirror plane) is exactly what predicts optical activity."),

  // ── Section 5 ─────────────────────────────────────────────────────────────
  major(5),
  p("Valence bond theory (VBT) explains a complex's geometry and magnetic behaviour by proposing that the metal uses HYBRID orbitals (formed from a mix of its s, p, and d orbitals) to accept ligand lone pairs, and that the specific hybridisation used is decided by whether the ligand is a strong-field (pairs electrons first) or weak-field (leaves electrons unpaired) ligand."),
  table(
    ["Coordination number / geometry", "Hybridisation", "Orbitals used"],
    [
      ["4, tetrahedral", "sp3", "1 s + 3 p orbitals of the metal"],
      ["4, square planar", "dsp2", "1 (n-1)d + 1 s + 2 p orbitals — requires an inner d orbital to be available/vacated, typically seen for d8 metal ions like Ni2+, Pd2+, Pt2+"],
      ["6, octahedral (inner-orbital / low-spin)", "d2sp3", "Uses two INNER (n-1)d orbitals — possible only when enough (n-1)d orbitals are vacant, which requires pairing up existing d electrons first (a strong-field ligand)"],
      ["6, octahedral (outer-orbital / high-spin)", "sp3d2", "Uses two OUTER nd orbitals instead — leaves the (n-1)d electrons in their original, more unpaired arrangement (a weak-field ligand)"],
    ]
  ),
  sub("Magnetic moment"),
  formula("\\mu = \\sqrt{n(n+2)}\\ \\text{BM} \\quad (n = \\text{number of unpaired electrons, spin-only formula})"),
  p("Measuring a complex's magnetic moment experimentally and comparing it against the spin-only formula reveals the number of unpaired d electrons, which in turn reveals whether the complex is inner-orbital (low-spin, fewer unpaired electrons, typically smaller measured moment) or outer-orbital (high-spin, more unpaired electrons, larger measured moment) — this is precisely how VBT's ligand-dependent hybridisation choice is experimentally confirmed."),
  table(
    ["Complex", "d-electron count", "Ligand field", "Hybridisation", "Unpaired electrons", "Magnetic behaviour"],
    [
      ["[CoF6]^3-", "d6 (Co3+)", "Weak field (F- is a weak-field ligand)", "sp3d2 (outer-orbital)", "4 (high-spin)", "Paramagnetic"],
      ["[Co(NH3)6]^3+", "d6 (Co3+)", "Strong field (NH3 is a moderately strong-field ligand)", "d2sp3 (inner-orbital)", "0 (low-spin, fully paired)", "Diamagnetic"],
    ]
  ),
  callout("Warning / limitation", "Valence bond theory correctly predicts geometry and can rationalise a given magnetic moment after the fact, but it CANNOT independently predict which ligands will be strong-field versus weak-field, and it offers no explanation at all for the COLOUR of coordination compounds — both of these require crystal field theory (Sections 6-8), which is why VBT is now generally treated as a useful but incomplete first approximation, superseded for most quantitative and colour-related purposes by CFT."),

  // ── Section 6 ─────────────────────────────────────────────────────────────
  major(6),
  p("Crystal field theory (CFT) treats ligands as simple point negative charges (or dipoles) that electrostatically repel the metal's d electrons — this repulsion is not equal for all five d orbitals, because the five d orbitals point in different directions relative to where the ligands actually sit."),
  p("In an OCTAHEDRAL field, the six ligands approach directly along the +x, -x, +y, -y, +z, -z axes. The d(x2-y2) and d(z2) orbitals point DIRECTLY along these axes (directly at the incoming ligands), so electrons in these orbitals experience STRONGER repulsion and are raised in energy; the d(xy), d(yz), d(xz) orbitals point BETWEEN the axes (between the ligands), so electrons there experience WEAKER repulsion and are lowered in energy relative to the average (spherical field) energy."),
  formula("e_g = d_{x^2-y^2},\\ d_{z^2}\\ (\\text{higher energy}) \\qquad t_{2g} = d_{xy},\\ d_{yz},\\ d_{xz}\\ (\\text{lower energy})", "octahedral splitting"),
  formula("\\Delta_o = \\text{energy gap between } t_{2g} \\text{ and } e_g \\qquad \\text{(the octahedral crystal field splitting energy)}"),
  sub("Filling the split orbitals: high-spin vs low-spin"),
  p("For d4 through d7 configurations specifically, there is a genuine choice: electrons can either pair up within the lower t2g set first (low-spin, favoured when Delta_o is LARGE — a strong-field ligand) or spread out to occupy the higher eg set singly before any pairing occurs, following Hund's rule (high-spin, favoured when Delta_o is SMALL — a weak-field ligand). For d1-d3 and d8-d10, there is no such choice — the filling pattern is unambiguous regardless of field strength."),
  callout("JEE-to-university bridge", "The high-spin/low-spin choice for d4-d7 is a direct, quantitative extension of Hund's rule from GOC/Atomic Structure — the electron configuration always minimises total energy, and CFT simply adds a new competing energy term (Delta_o, the cost of promoting an electron to eg) against the pairing energy already familiar from atomic electron configurations. When Delta_o exceeds the pairing energy, pairing in t2g wins (low-spin); when the pairing energy exceeds Delta_o, spreading out to eg wins (high-spin) — the same minimise-total-energy logic, just with one more term in the comparison."),

  // ── Section 7 ─────────────────────────────────────────────────────────────
  major(7),
  p("Tetrahedral and square planar complexes split the same five d orbitals differently, because the ligands approach from different directions in each geometry."),
  formula("e = d_{x^2-y^2},\\ d_{z^2}\\ (\\text{LOWER energy in tetrahedral}) \\qquad t_2 = d_{xy},\\ d_{yz},\\ d_{xz}\\ (\\text{HIGHER energy in tetrahedral})", "tetrahedral splitting — inverted relative to octahedral"),
  formula("\\Delta_t \\approx \\dfrac{4}{9}\\Delta_o \\quad \\text{(for the same metal and same ligands)}"),
  callout("Key idea", "Tetrahedral splitting is smaller than octahedral splitting for two combined reasons: there are only 4 ligands instead of 6 (less total repulsion), and — just as importantly — NONE of the five d orbitals point directly at a ligand in the tetrahedral geometry (unlike octahedral, where eg points straight at two ligands each), so even the more-repelled t2 set in a tetrahedral field is repelled less than eg is in the octahedral case. Because Delta_t is always comparatively small, tetrahedral complexes are essentially ALWAYS high-spin in practice — the pairing energy almost never exceeds this smaller splitting, so the low-spin/high-spin choice from Section 6 is not really a live question for tetrahedral geometry the way it is for octahedral."),
  p("Square planar splitting is derived by imagining an octahedral complex with the two ligands along the z-axis pulled away to infinity — this stretches the octahedral pattern into four distinct energy levels, with d(x2-y2) rising highest (it points directly at all four remaining in-plane ligands) and d(z2) actually DROPPING in energy (it no longer faces any ligand along z at all)."),

  // ── Section 8 ─────────────────────────────────────────────────────────────
  major(8),
  p("Crystal field splitting energy (CFSE) is the net stabilisation (or destabilisation) gained by the actual d-electron distribution relative to the hypothetical unsplit, spherical-field average energy — and it is CFT's single biggest advance over VBT, since it also directly explains why most transition metal complexes are coloured."),
  formula("CFSE_{\\text{(octahedral)}} = \\left[-0.4\\,n(t_{2g}) + 0.6\\,n(e_g)\\right]\\Delta_o \\quad (+ \\text{pairing energy corrections if applicable})"),
  sub("Colour"),
  p("A d-d transition — an electron absorbing a specific photon of visible light and jumping from the lower (t2g) to the higher (eg) set — is what gives most transition metal complexes their colour: the complex appears the COMPLEMENTARY colour to whichever wavelength of visible light it absorbs to drive this transition. A complex with a d0 or d10 configuration has NO d-d transition possible at all (there are either no d electrons to promote, or no vacant d orbital to promote them into), and such complexes are correctly predicted to be colourless — e.g. Sc3+ (d0), Zn2+ (d10), Ti4+ (d0)."),
  sub("The spectrochemical series"),
  formula("I^- < Br^- < S^{2-} < SCN^- < Cl^- < N_3^- \\approx F^- < OH^- < C_2O_4^{2-} \\approx H_2O < NCS^- < py \\approx NH_3 < en < NO_2^- < CN^- \\approx CO", "increasing field strength / increasing Delta_o"),
  callout("Key idea", "The spectrochemical series is an experimentally determined ordering (from measured Delta_o values across many complexes), not something derivable from first principles the way orbital shapes are — but the ordering correlates loosely with how effectively a ligand can engage in pi-backbonding/pi-acceptor character in addition to simple sigma-donation: strong pi-acceptor ligands (CO, CN-) sit at the strong-field end, while purely sigma-donating halides sit toward the weak-field end. Learn the ORDER (and the position of common ligands relative to each other) rather than trying to re-derive it."),

  // ── Section 9 ─────────────────────────────────────────────────────────────
  major(9),
  p("Complex stability (measured by the overall formation/stability constant, K_f — larger K_f means a more stable complex, less dissociated back into free metal ion and ligands) depends on several factors, the most dramatic of which is the chelate effect."),
  bullets([
    "Charge density of the metal ion: a smaller, more highly charged metal ion generally forms more stable complexes (stronger electrostatic/ionic attraction to the ligand's donor lone pair) — this is the same charge-density reasoning that governs ionic-compound lattice energy and polarising power elsewhere in inorganic chemistry.",
    "Basicity of the ligand: a more strongly Lewis-basic ligand (a better electron-pair donor) forms a stronger, more stable metal-ligand bond, all else equal.",
    "The chelate effect: a complex with polydentate (chelating) ligands is markedly MORE stable than the corresponding complex with an equivalent number of monodentate ligands providing the same donor atoms — e.g. [Ni(en)3]2+ is significantly more stable than [Ni(NH3)6]2+, even though both provide 6 nitrogen donor atoms to the same metal.",
  ]),
  callout("Key idea", "The chelate effect is fundamentally an ENTROPY effect, not primarily an enthalpy one: replacing six separate monodentate NH3 ligands with three bidentate en ligands releases the six original NH3 molecules as free, independent particles in solution while only three en molecules are consumed — the reaction increases the total number of free particles in solution, a favourable entropy change (positive Delta S) that lowers the overall Gibbs free energy of complex formation (Delta G = Delta H - T Delta S) even when the bond enthalpies themselves are comparable. This is a direct, applied instance of thermodynamic reasoning from outside this chapter, not a separate 'chelate rule' to memorise in isolation."),

  // ── Section 10 ─────────────────────────────────────────────────────────────
  major(10),
  sub("Q1 (JEE Advanced pattern — magnetic moment/hybridisation)"),
  p("[Ni(CO)4] is diamagnetic while [NiCl4]^2- is paramagnetic, despite both containing Ni in the same oxidation state and the same coordination number. Explain."),
  callout("Answer", "Both are Ni(0)/Ni(II)-type d8/d10 tetrahedral-or-not cases depending on exact assignment, but the key distinguishing factor is ligand field strength (Section 8's spectrochemical series) combined with geometry: CO is an extremely strong-field ligand (near the top of the spectrochemical series, a strong pi-acceptor) and drives Ni to a low-spin, fully-paired sp3 tetrahedral arrangement in [Ni(CO)4] (Ni here is formally 0, d10 — actually fully filled, hence diamagnetic regardless of field strength). Cl- is a weak-field ligand (well toward the weak-field end of the spectrochemical series) and cannot force pairing, so [NiCl4]2- (Ni2+, d8) remains in a high-spin sp3 tetrahedral arrangement with unpaired electrons retained, giving a paramagnetic complex. The core reasoning is Section 8's field-strength-dependent electron pairing, applied here through the choice of ligand rather than geometry alone."),
  sub("Q2 (JEE Advanced pattern — isomerism identification)"),
  p("[Co(NH3)5Br]SO4 and [Co(NH3)5SO4]Br are dissolved separately in water and each treated with (a) excess BaCl2 solution and (b) excess AgNO3 solution. Predict and explain the observations."),
  callout("Answer", "This is ionisation isomerism (Section 3). [Co(NH3)5Br]SO4 has free SO4^2- outside the coordination sphere: it gives a white BaSO4 precipitate with BaCl2 (positive), but NO precipitate with AgNO3 (Br- is inside the coordination sphere, non-ionisable, so no free Br- is available to precipitate as AgBr). [Co(NH3)5SO4]Br shows the reverse: NO precipitate with BaCl2 (SO4^2- is coordinated, non-ionisable), but a pale yellow AgBr precipitate with AgNO3 (Br- is the free, ionisable counter-ion here) — a direct, practical illustration of exactly the ionisable-vs-coordinated distinction Werner's theory was built to explain (Section 1)."),
  sub("Q3 (JEE Advanced pattern — CFSE/colour reasoning)"),
  p("[Ti(H2O)6]^3+ is coloured (violet) while [Sc(H2O)6]^3+ is colourless. Both are octahedral aqua complexes of adjacent Group 3/4 metals in the +3 oxidation state. Explain the difference."),
  callout("Answer", "Ti3+ is d1 (one d electron available to undergo a d-d transition, Section 8) — the single electron sits in t2g at ground state and can absorb a specific-wavelength photon to be promoted to eg, and the complex appears the complementary colour of whatever wavelength is absorbed, giving the observed violet colour. Sc3+ is d0 (no d electrons at all) — there is no electron available to undergo any d-d transition, so no visible-light absorption of this type occurs, and the complex is correctly predicted to be colourless, exactly the d0/d10-colourless rule from Section 8."),
  sub("Q4 (JEE Advanced pattern — optical isomerism)"),
  p("Does trans-[CoCl2(en)2]+ show optical isomerism? Does the cis isomer? Explain the structural reasoning."),
  callout("Answer", "No, trans-[CoCl2(en)2]+ does NOT show optical isomerism — the trans arrangement (the two Cl- ligands opposite each other) possesses an internal mirror plane (the plane containing both Cl atoms and the metal, perpendicular to the two en rings), making it superimposable on its own mirror image (achiral). The CIS isomer DOES show optical isomerism — with the two Cl- ligands adjacent rather than opposite, no such mirror plane exists, and cis-[CoCl2(en)2]+ exists as a genuine pair of non-superimposable Delta/Lambda enantiomers, exactly the geometry-then-chirality reasoning chain established in Section 4's callout."),
];
