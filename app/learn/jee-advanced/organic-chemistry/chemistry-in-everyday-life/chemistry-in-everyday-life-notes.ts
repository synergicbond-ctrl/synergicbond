// Chemistry in Everyday Life — drugs, drug-target interaction, food
// chemicals, and cleansing agents. Distinct from Environmental Chemistry
// (which covers pollution/atmospheric chemistry). Draws on the enzyme
// active-site concept from Biomolecules and the amine/acid-base chemistry
// built across the organic sequence rather than re-deriving them.

export type CielBlockKind =
  | "major"
  | "section"
  | "subheading"
  | "callout"
  | "bullets"
  | "numbered"
  | "table"
  | "formula"
  | "paragraph";

export type CielBlock = {
  kind: CielBlockKind;
  text?: string;
  items?: string[];
  headers?: string[];
  rows?: string[][];
  formulaLabel?: string;
};

const sections = [
  "Classification of Drugs",
  "Drug-Target Interaction: Enzymes and Receptors",
  "Antacids and Antihistamines",
  "Neurologically Active Drugs: Tranquilizers and Analgesics",
  "Antimicrobials: Antibiotics, Antiseptics and Disinfectants",
  "Antifertility Drugs",
  "Chemicals in Food: Preservatives, Sweeteners and Antioxidants",
  "Cleansing Agents: Soaps and Synthetic Detergents",
  "JEE/NEET Question Bank",
];

export const cielChapterMap: string[] = [...sections];

function major(n: number): CielBlock {
  return { kind: "major", text: `Section ${n} - ${sections[n - 1]}` };
}
function sub(text: string): CielBlock {
  return { kind: "subheading", text };
}
function p(text: string): CielBlock {
  return { kind: "paragraph", text };
}
function callout(label: string, text: string): CielBlock {
  return { kind: "callout", text: `${label}: ${text}` };
}
function bullets(items: string[]): CielBlock {
  return { kind: "bullets", items };
}
function table(headers: string[], rows: string[][]): CielBlock {
  return { kind: "table", headers, rows };
}
function formula(text: string, formulaLabel?: string): CielBlock {
  return { kind: "formula", text, formulaLabel };
}

export const cielBlocks: CielBlock[] = [
  // ── Section 1 ─────────────────────────────────────────────────────────────
  major(1),
  p("A drug is any chemical of low molecular mass (typically under about 500 u) that interacts with a specific biological macromolecule to produce a defined physiological response. Drugs are classified along several independent axes at once, and a single drug is normally described using more than one of these classifications simultaneously."),
  table(
    ["Classification basis", "Categories"],
    [
      ["Pharmacological effect", "What the drug DOES physiologically — e.g. analgesic (relieves pain), antipyretic (reduces fever), antiseptic — this is the most clinically useful classification, since it tells a physician what a drug is prescribed for"],
      ["Drug action / mechanism", "HOW the drug produces its effect at the molecular level — e.g. by inhibiting a specific enzyme, or by binding a specific receptor (Section 2) — the most useful classification for a chemist designing a new drug"],
      ["Chemical structure", "The core molecular scaffold shared by a family of drugs — e.g. sulphonamides, all sharing a common structural motif, tend to share related biological activity"],
      ["Molecular target", "The specific biomolecule the drug binds — e.g. a drug can be classified simply as 'an enzyme inhibitor' or 'a receptor antagonist' independent of which disease it treats"],
    ]
  ),
  callout("Key idea", "These four classification systems are not competing alternatives — a real drug is usually described by all four at once (e.g. 'a sulphonamide (structure) that acts as an enzyme inhibitor (mechanism) with antibacterial pharmacological effect, targeting a specific bacterial enzyme'), and recognising which classification a question is actually asking about is the first step in almost every question in this chapter."),

  // ── Section 2 ─────────────────────────────────────────────────────────────
  major(2),
  p("Most drugs work by binding to one of two kinds of biological target: an enzyme (Biomolecules Section 5) or a receptor — and the specific way a drug binds determines whether it is classified as an inhibitor/antagonist or an activator/agonist."),
  sub("Enzymes as drug targets"),
  table(
    ["Inhibition type", "Mechanism", "Consequence"],
    [
      ["Competitive inhibition", "The drug closely resembles the enzyme's natural substrate in shape/functional groups and binds directly at the active site (Biomolecules Section 5's active-site concept), physically blocking the real substrate from binding", "Effect can be overcome by increasing substrate concentration, since the drug and substrate are genuinely competing for the same binding site"],
      ["Non-competitive inhibition", "The drug binds at a DIFFERENT site (an allosteric site), changing the enzyme's overall three-dimensional shape (a direct consequence of the tertiary-structure sensitivity already established in Biomolecules Section 4) so the active site itself no longer functions properly, even though the substrate can still bind there", "Effect is NOT overcome by increasing substrate concentration, since the drug isn't competing for the same site at all"],
    ]
  ),
  sub("Receptors as drug targets"),
  p("A receptor is a specific protein (usually embedded in the cell membrane) that binds a natural messenger molecule and triggers a biological response. Drugs targeting receptors are classified by whether they mimic or block the natural messenger:"),
  bullets([
    "An agonist binds the receptor and mimics the natural messenger's shape/chemistry closely enough to trigger the same biological response the messenger normally produces.",
    "An antagonist binds the receptor (often at or near the same site) but does NOT trigger the biological response itself — it simply occupies the site, physically blocking the natural messenger from binding and producing its normal effect.",
  ]),
  callout("JEE-to-university bridge", "Both enzyme inhibition and receptor antagonism ultimately reduce to the same structural principle already used throughout Biomolecules and the organic sequence: a molecule's biological activity depends on a specific three-dimensional shape fitting a specific binding site (the 'lock and key'/'induced fit' framing from Biomolecules Section 5), and a drug is simply a synthetic molecule engineered to exploit that same shape-matching requirement, either by mimicking the natural ligand (agonist) or by blocking its site without activating it (antagonist/competitive inhibitor)."),

  // ── Section 3 ─────────────────────────────────────────────────────────────
  major(3),
  sub("Antacids"),
  p("An antacid neutralises excess stomach HCl by simple acid-base chemistry (not enzyme/receptor targeting) — early antacids were simple bases like NaHCO3 or Mg(OH)2, but these carry drawbacks (NaHCO3 raises systemic pH and can cause alkalosis with excess use; Mg(OH)2, unreacted, causes diarrhoea). Modern antacids like ranitidine work completely differently: they are H2-receptor ANTAGONISTS (Section 2) that block histamine from stimulating acid-producing cells in the first place, reducing acid secretion at the source rather than merely neutralising acid already produced."),
  sub("Antihistamines"),
  p("Antihistamines are H1-receptor antagonists (Section 2) that block histamine's action at the H1 receptor specifically, relieving allergy symptoms (sneezing, itching, watery eyes) that histamine would otherwise trigger through that receptor."),
  callout("Key idea", "Ranitidine (an H2-blocker, reducing stomach acid) and a typical antihistamine (an H1-blocker, relieving allergy symptoms) both block the SAME natural messenger, histamine, but at two DIFFERENT receptor subtypes (H1 vs H2) that produce entirely different physiological effects — a direct, frequently tested illustration of receptor SELECTIVITY: a drug's target is not merely 'histamine' in the abstract, but a specific receptor subtype, and the two subtypes require chemically distinct drug scaffolds to block effectively."),

  // ── Section 4 ─────────────────────────────────────────────────────────────
  major(4),
  sub("Tranquilizers"),
  p("Tranquilizers act on the central nervous system to relieve stress, anxiety, and mental disorders, and are broadly grouped by chemical class: benzodiazepines (e.g. used for anxiety and sleep disorders) and barbiturates (derivatives of barbituric acid, used as sedative-hypnotics) are the two major structural families covered at this level."),
  sub("Analgesics"),
  table(
    ["Class", "Examples", "Mechanism / notes"],
    [
      ["Non-narcotic (non-opioid)", "Aspirin (acetylsalicylic acid), paracetamol", "Relieve pain without acting on opioid receptors; aspirin ALSO has antipyretic and anti-inflammatory action, and irreversibly inhibits the cyclooxygenase enzyme (a direct example of Section 2's enzyme-inhibition mechanism) responsible for producing prostaglandins, the signalling molecules that mediate pain and inflammation"],
      ["Narcotic (opioid)", "Morphine and related opioid analgesics", "Act as agonists (Section 2) at opioid receptors in the central nervous system; effective against severe pain but carry a genuine risk of tolerance and dependence, restricting their use to closely medically supervised settings"],
    ]
  ),
  callout("JEE-to-university bridge", "Aspirin's synthesis is a direct, applied example of Fischer esterification (Alcohols/Phenols Section 2) — salicylic acid (itself made industrially by the Kolbe-Schmitt reaction, Alcohols/Phenols Section 6) is acetylated at its phenolic -OH using acetic anhydride, converting a phenol into an ester. Its mechanism of action (irreversible cyclooxygenase inhibition) is a direct example of Section 2's enzyme-inhibition framework, making aspirin one of the few molecules in this entire chapter whose synthesis, mechanism, AND classification can all be traced directly back to earlier organic chemistry content rather than memorised as an isolated fact."),

  // ── Section 5 ─────────────────────────────────────────────────────────────
  major(5),
  p("Antimicrobial drugs are classified by their target organism and, critically, by whether they kill the target (-cidal) or merely stop it reproducing, allowing the body's own immune system to clear the (now non-multiplying) population (-static)."),
  table(
    ["Term", "Meaning"],
    [
      ["Bactericidal", "Kills bacteria directly (e.g. penicillin)"],
      ["Bacteriostatic", "Stops bacterial reproduction/growth without necessarily killing existing bacteria outright (e.g. many tetracyclines, erythromycin)"],
      ["Broad-spectrum antibiotic", "Effective against a wide range of both gram-positive and gram-negative bacteria"],
      ["Narrow-spectrum (limited-spectrum) antibiotic", "Effective against a single organism or a small, specific group of organisms"],
    ]
  ),
  sub("Antiseptics vs disinfectants"),
  p("Both antiseptics and disinfectants kill or prevent the growth of microorganisms, and the distinction is entirely about WHERE they are applied, not their chemical mechanism — the same compound can sometimes serve both roles at different concentrations."),
  table(
    ["Term", "Application", "Example"],
    [
      ["Antiseptic", "Applied directly to LIVING tissue (skin, wounds) — must be mild enough not to damage the tissue itself", "Dilute (0.2%) phenol solution; furacin; soframycin"],
      ["Disinfectant", "Applied to NON-LIVING/inanimate objects and surfaces (floors, instruments) — can be considerably harsher/more concentrated since living-tissue safety is not a constraint", "1% phenol solution (note: the SAME compound, phenol, at a higher concentration than the antiseptic use above — a frequently tested concentration-dependent dual role); chlorine; SO2"],
    ]
  ),
  callout("Common trap", "Phenol at 0.2% concentration is a genuine antiseptic (used on skin), but at 1% concentration the same compound is used as a disinfectant, not on living tissue — a specific, commonly tested example that the antiseptic/disinfectant distinction is about CONCENTRATION and APPLICATION SITE rather than the compound's identity being fundamentally different in each role."),

  // ── Section 6 ─────────────────────────────────────────────────────────────
  major(6),
  p("Antifertility drugs prevent pregnancy by chemically mimicking the natural regulation of the reproductive hormonal cycle — a combination of a synthetic progesterone derivative and a synthetic estrogen derivative is used to suppress ovulation, since sustained progesterone-like signalling naturally suppresses further ovulation during an existing pregnancy, and the synthetic combination reproduces that suppression artificially."),
  callout("Key idea", "Antifertility drugs are a direct, applied example of Section 2's receptor-agonist mechanism — the synthetic hormone analogues bind the SAME hormone receptors the body's own progesterone and estrogen normally would, triggering the same downstream suppression-of-ovulation signalling, rather than acting through any fundamentally new mechanism specific to this drug class."),

  // ── Section 7 ─────────────────────────────────────────────────────────────
  major(7),
  table(
    ["Category", "Purpose", "Examples"],
    [
      ["Food preservatives", "Prevent microbial spoilage (Section 5's antimicrobial logic, applied to food rather than the human body) and oxidative degradation, extending shelf life", "Sodium benzoate, sodium metabisulphite (both most effective in mildly acidic food, since the active antimicrobial form is the protonated/neutral acid, which crosses microbial cell membranes more readily than the ionised carboxylate form)"],
      ["Artificial sweeteners", "Provide sweetness without the caloric/metabolic load of natural sugar, or for use by diabetics", "Aspartame (a dipeptide derivative — methyl ester of aspartic acid and phenylalanine, connecting directly back to Biomolecules Section 4's peptide bond chemistry; not heat-stable, limiting its use in cooked/baked foods), saccharin (stable to heat, used in cooking, excreted unchanged from the body), sucralose (a chlorinated sugar derivative, heat-stable)"],
      ["Antioxidants (food)", "Prevent oxidative rancidity of fats/oils by being preferentially oxidised themselves, protecting the food's own fat/oil content", "Butylated hydroxyanisole (BHA), butylated hydroxytoluene (BHT) — both work by intercepting the free-radical chain reaction of oxidative rancidity, a direct application of the free-radical chemistry established in GOC Section 4/Hydrocarbons Section 2 (the antioxidant itself forms a comparatively stable radical upon reacting with the chain-propagating radical, terminating the chain rather than propagating it further)"],
    ]
  ),
  callout("JEE-to-university bridge", "BHA/BHT's antioxidant action is a direct, applied example of free-radical chain-reaction chemistry from GOC Section 4 and Hydrocarbons Section 2 — rancidity is itself a free-radical chain autoxidation of unsaturated fat, and BHA/BHT interrupt that chain by reacting preferentially with the propagating radical to form a new, comparatively stable and unreactive radical (stabilised by resonance into the aromatic ring, GOC Section 6), functioning as a chain-TERMINATION step rather than allowing the chain to continue propagating through the food's own fat molecules."),

  // ── Section 8 ─────────────────────────────────────────────────────────────
  major(8),
  p("A soap is the sodium or potassium salt of a long-chain fatty acid (made by saponification — base-catalysed hydrolysis of a fat/oil ester, itself an application of the ester hydrolysis chemistry from Alcohols/Phenols Section 2/Carbonyls). A synthetic detergent is any similarly amphiphilic (having both a polar head and a non-polar tail) cleansing molecule that is NOT a fatty acid salt."),
  formula("\\text{Fat/oil (triglyceride)} + 3\\,NaOH \\xrightarrow{\\Delta} \\text{glycerol} + 3\\,RCOONa\\ (\\text{soap})", "saponification"),
  sub("Why soap and detergents clean: micelle formation"),
  p("Both soaps and detergents are amphiphilic — a long non-polar hydrocarbon 'tail' (soluble in oil/grease, insoluble in water) attached to a polar/ionic 'head' (soluble in water). In water above a threshold concentration (the critical micelle concentration), these molecules spontaneously aggregate into micelles: spherical clusters with the non-polar tails all pointing INWARD (away from water, clustering together, and able to dissolve/trap oily grease inside the micelle's core) and the polar/ionic heads pointing OUTWARD (in contact with the surrounding water, keeping the whole micelle water-soluble and able to be rinsed away)."),
  sub("Soap vs synthetic detergent: hard water"),
  table(
    ["Property", "Soap", "Synthetic detergent"],
    [
      ["Behaviour in hard water (Ca2+/Mg2+ present)", "Ca2+/Mg2+ react with the soap's carboxylate head to form an insoluble precipitate (scum) that cannot form functional micelles, wasting soap and leaving a visible residue", "Most synthetic detergents' sulfonate (-SO3-) or sulfate (-OSO3-) heads form Ca2+/Mg2+ salts that REMAIN water-soluble, so detergents continue to work effectively in hard water where soap fails"],
      ["Biodegradability", "Readily biodegradable (the straight-chain fatty acid tail is metabolised by microorganisms without difficulty)", "Depends on the tail structure: a straight, UNbranched hydrocarbon chain is biodegradable, but a BRANCHED hydrocarbon chain resists microbial breakdown and can persist as environmental pollution — this branching/biodegradability link is the direct reason older branched-chain detergents were phased out in favour of straight-chain formulations"],
    ]
  ),
  table(
    ["Detergent type", "Head group charge", "Example"],
    [
      ["Anionic", "Negative", "Sodium salts of long-chain alkylbenzenesulfonic acids or alkyl hydrogen sulfates"],
      ["Cationic", "Positive", "Quaternary ammonium salts, e.g. cetyltrimethylammonium bromide — also used for their antiseptic/germicidal properties (Section 5), not purely for cleaning"],
      ["Non-ionic", "None (a polar but uncharged head, e.g. a polyether chain)", "E.g. the ester formed between polyethylene glycol and a fatty acid"],
    ]
  ),
  callout("Key idea", "The soap-versus-hard-water failure and its fix by synthetic detergents is a direct, applied solubility argument: Ca2+/Mg2+ carboxylate salts (from soap) are insoluble because the ionic lattice energy of the 2+ metal ion with the carboxylate anion is too favourable relative to hydration energy, precipitating out — while the corresponding Ca2+/Mg2+ sulfonate/sulfate salts (from most synthetic detergents) remain soluble because the anion's different charge distribution and geometry gives a less favourable lattice energy relative to hydration, keeping the salt in solution. This is the same ionic solubility reasoning used elsewhere in inorganic chemistry, applied here to explain a specific, everyday household observation."),

  // ── Section 9 ─────────────────────────────────────────────────────────────
  major(9),
  sub("Q1 (NEET/JEE Main pattern — mechanism classification)"),
  p("A newly discovered drug increases its inhibitory effect on a target enzyme even when the natural substrate concentration is raised significantly. Classify the inhibition type and explain the reasoning."),
  callout("Answer", "This is NON-competitive inhibition (Section 2). If the drug were competing directly with the substrate for the SAME active site (competitive inhibition), increasing substrate concentration would out-compete the drug and reduce its apparent inhibitory effect — since raising substrate concentration does NOT reduce the drug's effect here, the drug must be binding at a separate (allosteric) site, altering the enzyme's overall shape rather than directly blocking substrate access to the active site."),
  sub("Q2 (NEET/JEE Main pattern — drug classification)"),
  p("Explain why ranitidine is classified as an antacid even though it does not directly neutralise stomach acid the way NaHCO3 or Mg(OH)2 does."),
  callout("Answer", "Ranitidine works by receptor antagonism (Section 2/3) rather than direct acid-base neutralisation: it blocks the H2 histamine receptor on acid-secreting stomach cells, reducing the AMOUNT of acid produced in the first place. It is still classified as an antacid by pharmacological effect (Section 1's effect-based classification) — both ranitidine and NaHCO3 ultimately relieve the same symptom (excess stomach acidity) — even though their mechanisms (Section 1's mechanism-based classification) are completely different: one is direct chemical neutralisation, the other is receptor-mediated suppression of acid secretion."),
  sub("Q3 (NEET/JEE Main pattern — structure-property reasoning)"),
  p("A particular synthetic detergent formulation was found to persist for weeks in a river downstream of a factory, causing foam accumulation, while a competing formulation broke down within days. Propose a structural explanation."),
  callout("Answer", "The persistent detergent most likely has a BRANCHED hydrocarbon tail, while the one that broke down quickly has a STRAIGHT, unbranched tail (Section 8) — microbial enzymes that degrade detergent tails are adapted to process straight hydrocarbon chains efficiently but struggle with branch points, allowing branched-tail detergents to resist biodegradation and accumulate in the environment. This is exactly why straight-chain (linear alkylbenzenesulfonate) detergent formulations replaced earlier branched-chain formulations industrially."),
  sub("Q4 (NEET/JEE Main pattern — food chemistry)"),
  p("Aspartame is not recommended for use in baked goods that require prolonged high-temperature cooking, while saccharin is. Explain the structural reason for this difference."),
  callout("Answer", "Aspartame is a dipeptide-derived methyl ester (Section 7) — it contains a peptide bond (Biomolecules Section 4) and a methyl ester group, both of which can hydrolyse under prolonged heat, breaking the molecule down into its constituent amino acids and losing its sweet taste. Saccharin has a fundamentally different, more thermally robust structure with no such hydrolysable peptide or ester linkage central to its sweetness, so it remains stable and retains its sweetening property even under sustained high-temperature cooking conditions."),
];
