// Haloalkanes and Haloarenes — nucleophilic substitution (SN1/SN2), the
// competing elimination pathways, Grignard chemistry, and why haloarenes
// behave completely differently from haloalkanes. Builds on the reactive
// intermediates and electronic effects from General Organic Chemistry and
// the elimination/addition mechanisms from Hydrocarbons.

export type HaloBlockKind =
  | "major"
  | "section"
  | "subheading"
  | "callout"
  | "bullets"
  | "numbered"
  | "table"
  | "formula"
  | "paragraph";

export type HaloBlock = {
  kind: HaloBlockKind;
  text?: string;
  items?: string[];
  headers?: string[];
  rows?: string[][];
  formulaLabel?: string;
};

const sections = [
  "SN2: Concerted Backside Attack and Walden Inversion",
  "SN1: Stepwise Ionisation and Racemisation",
  "SN1 vs SN2: The Four Deciding Factors",
  "Substitution vs Elimination: The Full Competition",
  "Preparation of Haloalkanes",
  "Grignard Reagents and Organometallic Chemistry",
  "Haloarenes: Why the Ring Resists Nucleophilic Substitution",
  "When Haloarenes Do React: Activated SNAr and the Benzyne Mechanism",
  "Named Conversions: Finkelstein, Swarts, Wurtz-Fittig, Fittig",
  "JEE Advanced Question Bank",
];

export const haloChapterMap: string[] = [...sections];

function major(n: number): HaloBlock {
  return { kind: "major", text: `Section ${n} - ${sections[n - 1]}` };
}
function sub(text: string): HaloBlock {
  return { kind: "subheading", text };
}
function p(text: string): HaloBlock {
  return { kind: "paragraph", text };
}
function callout(label: string, text: string): HaloBlock {
  return { kind: "callout", text: `${label}: ${text}` };
}
function bullets(items: string[]): HaloBlock {
  return { kind: "bullets", items };
}
function numbered(items: string[]): HaloBlock {
  return { kind: "numbered", items };
}
function table(headers: string[], rows: string[][]): HaloBlock {
  return { kind: "table", headers, rows };
}
function formula(text: string, formulaLabel?: string): HaloBlock {
  return { kind: "formula", text, formulaLabel };
}

export const haloBlocks: HaloBlock[] = [
  // ── Section 1 ─────────────────────────────────────────────────────────────
  major(1),
  p("SN2 (substitution, nucleophilic, bimolecular) is a single concerted step: the nucleophile attacks the carbon from the face directly opposite the leaving group, exactly as the leaving group departs. No intermediate forms — bond-breaking and bond-forming happen simultaneously."),
  formula("Nu^- + R{-}X \\longrightarrow [Nu{\\cdots}R{\\cdots}X]^{\\ddagger} \\longrightarrow Nu{-}R + X^-", "SN2, showing the pentacoordinate transition state"),
  table(
    ["Feature", "SN2 behaviour"],
    [
      ["Rate law", "Rate = k[substrate][nucleophile] — second order overall, bimolecular; both reactants appear in the rate-determining (and only) step"],
      ["Stereochemistry", "Walden inversion — complete inversion of configuration at the reacting carbon, exactly like an umbrella flipping inside out, because the nucleophile can only approach from the face opposite the leaving group"],
      ["Substrate preference", "Methyl > 1 degree > 2 degree >> 3 degree (3 degree essentially never reacts by SN2)"],
      ["Why substrate preference runs this way", "Steric hindrance around the electrophilic carbon blocks backside approach — a tertiary carbon has three bulky alkyl groups crowding the face the nucleophile needs to attack from"],
    ]
  ),
  callout("Key idea", "Walden inversion is not merely an observed curiosity — it is the direct geometric consequence of a single-step, backside-attack mechanism, and it is the standard way SN2 is distinguished experimentally from SN1 in a stereochemistry-tracking problem: a single enantiomerically pure SN2 substrate gives a single inverted enantiomer as product, never a racemic mixture."),

  // ── Section 2 ─────────────────────────────────────────────────────────────
  major(2),
  p("SN1 (substitution, nucleophilic, unimolecular) proceeds in two distinct steps: slow ionisation of the substrate to a carbocation (the rate-determining step), followed by fast attack of the nucleophile on the planar, sp2 cationic carbon."),
  numbered([
    "Step 1 (slow, rate-determining): R-X -> R+ + X- — ionisation, generating a planar carbocation stabilised exactly as described in GOC Section 3 (hyperconjugation, +I, resonance if available).",
    "Step 2 (fast): R+ + Nu- -> R-Nu — the nucleophile attacks the empty p orbital from either face, since the cation is planar and both faces are equally accessible.",
  ]),
  table(
    ["Feature", "SN1 behaviour"],
    [
      ["Rate law", "Rate = k[substrate] only — first order; the nucleophile does not appear in the rate law because it acts only in the fast second step, after the rate-determining ionisation is already complete"],
      ["Stereochemistry", "Racemisation (with a slight net-inversion bias in practice) — the planar carbocation is attacked from both faces roughly equally, giving predominantly a racemic mixture starting from a single enantiomer"],
      ["Substrate preference", "3 degree > 2 degree >> 1 degree > methyl (methyl and primary essentially never proceed by SN1)"],
      ["Why substrate preference runs this way", "Directly tracks carbocation stability (GOC Section 3) — the rate-determining step IS carbocation formation, so anything that stabilises the cation accelerates the whole reaction"],
    ]
  ),
  callout("JEE trap", "SN1 racemisation is usually described as 'slightly more inversion than retention' rather than a perfect 50:50 mixture, because the leaving group X- initially departs on one specific face and can partially shield that face from immediate nucleophilic attack (an ion-pair effect) before it fully diffuses away — a nuance worth knowing for a 'which of the following is TRUE' style question, even though 'predominant racemisation' remains the correct first-order description."),

  // ── Section 3 ─────────────────────────────────────────────────────────────
  major(3),
  table(
    ["Factor", "Favours SN2", "Favours SN1"],
    [
      ["Substrate", "Methyl, 1 degree (unhindered, accessible backside)", "3 degree, or any substrate giving a resonance-stabilised cation (benzylic, allylic)"],
      ["Nucleophile strength/concentration", "Strong, high concentration (nucleophile appears in the rate law, so a stronger/more concentrated nucleophile directly speeds the reaction)", "Weak nucleophile, or even just the solvent acting as a weak nucleophile — strength is irrelevant since the nucleophile isn't involved in the rate-determining step"],
      ["Solvent", "Polar APROTIC solvents (DMSO, DMF, acetone, acetonitrile) — these solvate the cation poorly but leave the nucleophile 'naked' and highly reactive, since there's no hydrogen bonding to trap it", "Polar PROTIC solvents (water, alcohols) — hydrogen bonding stabilises the developing carbocation and the leaving anion through solvation, lowering the energy of the rate-determining ionisation step"],
      ["Leaving group ability", "A good leaving group helps both mechanisms similarly (weak, stable, resonance-delocalised conjugate base: I- > Br- > Cl- >> F-)", "Same trend, but even more critical here since ionisation is the rate-determining step"],
    ]
  ),
  callout("Key idea", "Polar protic vs polar aprotic solvent choice is one of the most reliable single 'tells' in a mechanism-identification question: a strong nucleophile (like CN- or a thiolate) in DMSO signals SN2; a weak nucleophile like water or ethanol as the solvent itself signals SN1 (solvolysis). Students frequently misclassify a reaction by focusing only on substrate class and ignoring the solvent, which can override a marginal substrate case (e.g. a secondary substrate can be pushed toward SN1 by a protic solvent + weak nucleophile, or toward SN2 by a strong nucleophile + aprotic solvent)."),

  // ── Section 4 ─────────────────────────────────────────────────────────────
  major(4),
  p("Every alkyl halide reaction with a base/nucleophile is really a competition between four possible pathways (SN1, SN2, E1, E2) happening at once, and the actual product distribution depends on exactly the same substrate/nucleophile/solvent factors from Section 3, plus whether the reagent is acting primarily as a base or as a nucleophile."),
  table(
    ["Substrate + reagent combination", "Dominant pathway", "Reasoning"],
    [
      ["Methyl or 1 degree halide + strong nucleophile/weak base (e.g. NaCN, NaN3, RS-)", "SN2", "Unhindered backside attack is fast and favoured; these nucleophiles are poor bases so elimination is minimal"],
      ["1 degree halide + strong, BULKY base (e.g. potassium tert-butoxide, DBU)", "E2", "Steric bulk blocks backside SN2 approach at the carbon, so the base instead removes a beta-hydrogen"],
      ["2 degree halide + strong nucleophile/moderate base", "Mixture of SN2 and E2", "Genuinely competitive; exact ratio depends on nucleophile bulk and temperature (higher temperature favours elimination, an entropy-driven preference for the two-fragment E2 product)"],
      ["3 degree halide + strong base (e.g. NaOH, NaOEt)", "E2 (substitution is sterically blocked)", "SN2 is impossible (too hindered); SN1 is possible but a strong base outcompetes the weak nucleophile pathway, favouring elimination"],
      ["3 degree halide + weak nucleophile/weak base, protic solvent (e.g. H2O, ROH as solvent)", "Mixture of SN1 and E1", "Both proceed through the same carbocation intermediate; genuinely gives a mixture, with E1 favoured by higher temperature"],
    ]
  ),
  callout("Warning / limitation", "'3 degree + strong base = pure elimination' is a useful default but not an absolute law — a tertiary substrate under SN1/E1 conditions (weak nucleophile, protic solvent, no deliberate base) genuinely gives a mixture of substitution and elimination products, since both draw from the same carbocation intermediate. Always check whether the reagent is functioning as a strong dedicated base (pushes toward E2) or as a weak nucleophile/solvent (opens the SN1/E1 mixture) before assuming a single clean product."),

  // ── Section 5 ─────────────────────────────────────────────────────────────
  major(5),
  table(
    ["Method", "Reaction", "Notes"],
    [
      ["From alcohols", "R-OH + HX (or SOCl2, or PX3/PX5) -> R-X", "SOCl2 (thionyl chloride) is preferred preparatively — the byproducts (SO2, HCl) are gases that escape, giving a cleaner product without a separate purification step"],
      ["Free-radical halogenation of alkanes", "R-H + X2 --(hv/heat)--> R-X + HX", "Covered in full in the Hydrocarbons chapter (Section 2) — regioselectivity follows radical stability"],
      ["Addition of HX or X2 to alkenes/alkynes", "Covered in full in the Hydrocarbons chapter (Sections 5 and 8)", "Markovnikov/anti-Markovnikov regiochemistry as already established"],
      ["Finkelstein reaction", "R-Cl (or R-Br) + NaI --(dry acetone)--> R-I + NaCl (or NaBr) precipitate", "Driven forward by the insolubility of NaCl/NaBr in dry acetone (Le Chatelier — removing a product as a precipitate pulls the equilibrium forward); the standard method to make an alkyl iodide"],
      ["Swarts reaction", "R-Cl (or R-Br) + AgF (or Hg2F2, CoF2, SbF3) -> R-F", "The standard method to introduce fluorine, since direct F2 halogenation (Hydrocarbons Section 2) is too violent/unselective to use synthetically"],
    ]
  ),

  // ── Section 6 ─────────────────────────────────────────────────────────────
  major(6),
  formula("R{-}X + Mg \\xrightarrow{\\text{dry ether}} R{-}Mg{-}X", "formation of a Grignard reagent"),
  p("A Grignard reagent is formed by inserting magnesium metal into the C-X bond of an alkyl or aryl halide, generating a carbon-magnesium bond that is strongly polarised toward carbon (carbon is the more electronegative partner in a C-Mg bond) — the carbon effectively behaves as a carbanion, making Grignard reagents powerful nucleophiles and strong bases."),
  callout("Warning / limitation", "Grignard formation and use require strictly anhydrous, aprotic conditions (dry ether or THF) — any trace of water, or any other acidic proton source (an -OH, -NH, or even a terminal alkyne C-H, GOC/Hydrocarbons Section 7) immediately destroys the reagent by simple acid-base protonation, R-MgX + H-A -> R-H + Mg(X)(A). This single incompatibility is exactly why Grignard reagents cannot be prepared from, or reacted in the presence of, any substrate that also carries an -OH, -NH2, or -COOH group — a frequent 'which of these can/cannot form a Grignard reagent' or 'predict what goes wrong' question."),
  bullets([
    "Reaction with formaldehyde (HCHO) gives a primary alcohol after aqueous workup.",
    "Reaction with any other aldehyde gives a secondary alcohol.",
    "Reaction with a ketone gives a tertiary alcohol.",
    "Reaction with CO2 (dry ice), followed by acidic workup, gives a carboxylic acid with one additional carbon — a standard chain-extension method.",
    "Reaction with an epoxide (e.g. ethylene oxide) opens the strained ring, giving a primary alcohol with two additional carbons.",
  ]),
  callout("Key idea", "The Grignard-plus-carbonyl reaction family (aldehyde/ketone to alcohol) is the clearest example in this whole topic of a carbanion-like species acting as the nucleophile toward the electrophilic carbonyl carbon (GOC Section 1's nucleophile/electrophile framing applied directly) — the same electromeric-effect logic from GOC Section 8 (nucleophilic addition pushes the C=O pi electrons fully onto oxygen) governs exactly how this addition proceeds, well before the Aldehydes/Ketones chapter develops carbonyl chemistry in full."),

  // ── Section 7 ─────────────────────────────────────────────────────────────
  major(7),
  p("A haloarene (aryl halide, C6H5-X) is dramatically less reactive toward nucleophilic substitution than a comparable haloalkane under ordinary conditions — SN1 and SN2 are BOTH essentially unavailable, for two independent reasons."),
  numbered([
    "SN2 is geometrically impossible: backside attack would require the nucleophile to approach through the plane of the aromatic ring itself, which is sterically and electronically blocked by the ring's own pi system and substituents.",
    "SN1 is thermodynamically disfavoured: ionisation would require forming an aryl cation, with the empty orbital in the sp2 plane (in-plane, not part of the aromatic pi system) — GOC Section 3 already established that vinyl/aryl cations are extremely unstable and essentially never form, since the empty orbital cannot be stabilised by the ring's pi system at all.",
  ]),
  callout("Key idea", "There is a second, independent reason haloarenes resist substitution even before considering the carbocation argument: resonance donation of a halogen's lone pair into the ring (GOC Section 6, the halogen's +R/+M character) gives the C-X bond partial double-bond character, shortening and strengthening it relative to a simple alkyl C-X bond, and making the carbon more electron-rich (less attractive to a nucleophile) than an ordinary sp3 halocarbon. Both effects — geometric/electronic blocking of substitution, and reduced electrophilicity from resonance donation — point the same direction and reinforce each other."),

  // ── Section 8 ─────────────────────────────────────────────────────────────
  major(8),
  p("Haloarenes are not completely inert to nucleophilic substitution — two special mechanisms allow it, each requiring specific structural conditions absent from an ordinary, unactivated haloarene."),
  sub("Activated nucleophilic aromatic substitution (SNAr, addition-elimination)"),
  p("When strong electron-withdrawing groups (-NO2 especially) are positioned ORTHO or PARA to the halogen, they stabilise a negatively charged addition intermediate (a Meisenheimer complex) by direct resonance delocalisation of the incoming negative charge onto their own oxygens — exactly analogous to the arenium-ion resonance argument from Hydrocarbons Section 9, but with a nucleophile adding instead of an electrophile, and a stabilised anion instead of a stabilised cation."),
  formula("\\text{2,4-dinitrochlorobenzene} + OH^- \\longrightarrow [\\text{Meisenheimer complex, resonance-stabilised by both -NO}_2\\text{ groups}] \\longrightarrow \\text{2,4-dinitrophenol} + Cl^-"),
  callout("Key idea", "SNAr reactivity requires the electron-withdrawing group(s) at ortho/para to the leaving halogen specifically — a meta-nitro group cannot resonance-stabilise the Meisenheimer intermediate (exactly the same ortho/para-only resonance restriction from GOC Section 6 and Hydrocarbons Section 11), so meta-substituted haloarenes remain essentially unreactive toward SNAr even with a strong EWG present. More EWGs (as in 2,4-dinitro or 2,4,6-trinitro substrates) accelerate the reaction further, additively."),
  sub("Benzyne mechanism (elimination-addition, requires a very strong base)"),
  p("With an extremely strong, non-nucleophilic-ish base (typically NaNH2) and NO activating EWG present, an unactivated haloarene can still react via a completely different two-step pathway: the strong base removes a proton ortho to the halogen, and the resulting carbanion expels the halide, generating a strained, highly reactive benzyne (aryne) intermediate with a distorted in-plane triple bond. A nucleophile (often NH2- itself, or the solvent) then adds to either carbon of the strained triple bond."),
  callout("Warning / limitation", "Because the nucleophile can add to EITHER carbon of the symmetric-looking benzyne intermediate, this mechanism characteristically gives a MIXTURE of two substitution products when the original halogen was not on a symmetric position (e.g. chlorobenzene with a specific isotopic or substituent label at the ortho position gives substitution both at the original halogen-bearing carbon and at the adjacent one) — a classic way examiners test whether a student has understood the benzyne mechanism rather than assuming ordinary, single-site substitution."),

  // ── Section 9 ─────────────────────────────────────────────────────────────
  major(9),
  table(
    ["Named reaction", "Reagents/conditions", "Product", "Mechanistic note"],
    [
      ["Finkelstein reaction", "R-X (Cl/Br) + NaI, dry acetone", "R-I", "Halide-exchange SN2, driven by NaCl/NaBr precipitating out of the aprotic solvent (Section 5)"],
      ["Swarts reaction", "R-X (Cl/Br) + AgF/Hg2F2/CoF2/SbF3", "R-F", "The standard route to alkyl fluorides, since direct fluorination is unselective (Section 5)"],
      ["Wurtz reaction", "2 R-X + 2Na, dry ether", "R-R (symmetrical alkane)", "Free-radical coupling — covered fully in Hydrocarbons Section 1"],
      ["Fittig reaction", "2 Ar-X + 2Na, dry ether", "Ar-Ar (a symmetrical biaryl, e.g. biphenyl from bromobenzene)", "The aromatic analogue of the Wurtz reaction — same reagent (Na/dry ether), same symmetrical-product limitation"],
      ["Wurtz-Fittig reaction", "Ar-X + R-X + 2Na, dry ether", "Ar-R (an alkylbenzene)", "The cross-coupled version, combining one aryl and one alkyl halide — genuinely useful for making an UNsymmetrical alkylbenzene, unlike a mixed Wurtz/Fittig of two different halides of the same class"],
    ]
  ),
  callout("Common trap", "Fittig and Wurtz-Fittig both use sodium metal in dry ether and both couple aryl halides, but only Wurtz-Fittig is a practical route to an unsymmetrical product (aryl-alkyl) — a pure Fittig reaction with two DIFFERENT aryl halides suffers from exactly the same statistical-mixture problem as a mixed Wurtz reaction (Hydrocarbons/Section 1 callout) and is a poor synthetic choice for a specific unsymmetrical biaryl target."),

  // ── Section 10 ─────────────────────────────────────────────────────────────
  major(10),
  sub("Q1 (JEE Advanced pattern — mechanism/stereochemistry)"),
  p("(R)-2-bromobutane is treated with NaOH in (a) acetone and (b) water. Predict the stereochemical outcome in each case and explain the mechanistic basis."),
  callout("Answer", "(a) In acetone (polar aprotic), NaOH acts as a strong, unhindered nucleophile toward a secondary substrate: SN2 dominates, giving a single, completely INVERTED product — (S)-butan-2-ol — via backside attack (Section 1). (b) In water (polar protic, and now a comparatively weaker effective nucleophile due to hydrogen-bond solvation), the secondary substrate shifts substantially toward SN1: the planar carbocation is attacked from both faces, giving predominantly RACEMIC butan-2-ol (with a slight excess of the inverted product from the ion-pair effect, Section 2 trap) — a genuinely different stereochemical outcome from the same substrate, purely due to the solvent/nucleophile-strength change (Section 3)."),
  sub("Q2 (JEE Advanced pattern — multiple correct, haloarene reactivity)"),
  p("Which of the following undergo hydrolysis with aqueous NaOH under mild conditions (no forcing heat, no NaNH2)? (A) Chlorobenzene (B) 2,4-Dinitrochlorobenzene (C) 3-Nitrochlorobenzene (D) 2,4,6-Trinitrochlorobenzene (picryl chloride)."),
  callout("Answer", "B and D react readily (D reacts fastest of all, even in cold water) via SNAr — both have -NO2 groups at ortho/para to the chlorine, able to resonance-stabilise the Meisenheimer intermediate (Section 8). A does not react under these mild conditions (no activation at all). C does NOT react either, despite having a nitro group, because it is at the META position — meta substituents cannot resonance-stabilise the addition intermediate, exactly the same ortho/para-only restriction seen in EAS directing effects (Hydrocarbons Section 11)."),
  sub("Q3 (JEE Advanced pattern — synthesis/Grignard)"),
  p("Propose a synthesis of 2-methylpropan-2-ol (tert-butyl alcohol) starting from methylmagnesium iodide and an appropriate carbonyl compound."),
  callout("Answer", "React CH3-MgI with acetone, (CH3)2C=O: the Grignard carbon (nucleophilic, Section 6) attacks the electrophilic carbonyl carbon, and aqueous acidic workup protonates the resulting magnesium alkoxide. Since acetone is a KETONE, the product is a TERTIARY alcohol (Section 6 bullet list) — (CH3)3C-OH, tert-butyl alcohol — confirming the reagent-to-alcohol-class correspondence (aldehyde-not-formaldehyde to 2 degree, ketone to 3 degree) directly."),
  sub("Q4 (JEE Advanced pattern — benzyne mechanism)"),
  p("Chlorobenzene specifically labelled with 14C at the carbon bearing chlorine is treated with NaNH2 in liquid ammonia. What is observed about the position of the -NH2 group in the aniline product, and why?"),
  callout("Answer", "The -NH2 group is found at BOTH the originally labelled (14C) carbon AND the adjacent (ortho) carbon, in roughly comparable amounts — direct evidence for the benzyne mechanism (Section 8). The strong base removes a proton ortho to the leaving chlorine, expelling chloride to form a symmetric-looking benzyne across the two carbons; the incoming nucleophile (NH2-) can then add to either carbon of the strained triple bond with similar probability, scrambling the original substitution position — a result that a simple, single-site SNAr or SN2-type mechanism could never produce."),
];
