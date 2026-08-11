// Bridge Bonding & Multicentre Bonding — JEE Advanced / Chemical Bonding
// Directly-authored content blocks (no text-parsing layer), following the same
// block model as the Dipole Moment and Formal Charges chapters. Every value,
// structure and worked example is carried over verbatim from the audited
// master notes.

export type BridgeBlockKind =
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

export type BridgeBlock = {
  kind: BridgeBlockKind;
  text?: string;
  items?: string[];
  headers?: string[];
  rows?: string[][];
  structureId?: string;
  formulaLabel?: string;
};

const sections = [
  "The Concept: 2c–2e, 3c–2e and 3c–4e Bonds",
  "Boron Hydrides: Diborane, B₂H₆",
  "Group 13 Trihalides — The Full B → Tl Trend",
  "Aluminium: Hydride, Borohydride and Organometallics",
  "Gallium, Indium and Thallium",
  "Beryllium Compounds",
  "Other Important Bridged Structures",
  "Multicentre Organometallic Clusters",
  "Classification and Master Data Tables",
  "Solved Problems",
  "Common Traps",
  "Advanced Conceptual Questions",
] as const;

export const bridgeChapterMap: string[] = [...sections];

export const bridgeBondingBlocks: BridgeBlock[] = [
  // ============================================================ 1
  { kind: "major", text: `Section 1 - ${sections[0]}` },
  {
    kind: "paragraph",
    text: "Bridge bonding is multicentre bonding in which one atom or group is bonded to two centres simultaneously, holding a cluster together with fewer electron pairs than a fully localized Lewis structure would demand. A normal covalent bond places one electron pair between two nuclei (2c–2e). In an electron-deficient fragment such as BH₃, boron has only 6 electrons around it — two short of an octet. Two such fragments can complete each other's octets by letting one hydrogen sit between both borons and donate its electron pair into a molecular orbital that spans all three nuclei at once: a 3-centre–2-electron (3c–2e) bond.",
  },
  {
    kind: "paragraph",
    text: "Where the bridging atom instead has a spare lone pair (a halide ion, for example), it can donate that pair into an empty acceptor orbital on both neighbours simultaneously, filling both a bonding and a non-bonding molecular orbital — a 3-centre–4-electron (3c–4e) bridge. This delocalized picture (not a fixed hybridisation label) is the modern description; hybridisation labels (sp³, sp³d, …) are retained only as geometry bookkeeping, exactly as JEE convention expects.",
  },
  {
    kind: "callout",
    text: "Historical note: This idea was first proposed for diborane by H. C. Longuet-Higgins and R. P. Bell (1943), building on William Dilthey's earlier bridge-bond concept; the informal name “banana bond” refers to the bent, off-axis shape of the resulting 3c–2e orbital.",
  },
  { kind: "subheading", text: "The 3c–2e vs 3c–4e comparison" },
  {
    kind: "table",
    headers: ["Feature", "3c–2e", "3c–4e"],
    rows: [
      ["Electrons", "2", "4"],
      ["MO occupancy", "Bonding MO filled", "Bonding + nonbonding MOs filled"],
      ["Typical bridge", "H, alkyl", "Halide / lone-pair donor"],
      ["Character", "Electron deficient", "Electron rich / donor bridge"],
      ["Approx. bond order per linkage", "~0.5", "~0.5"],
      ["Examples", "B–H–B, Be–H–Be, Al–CH₃–Al", "Al–Cl–Al, Be–Cl–Be, I–Cl–I"],
    ],
  },
  {
    kind: "paragraph",
    text: "Why both models give ~0.5 bond order per linkage: in 3c–2e, the single bonding pair is delocalized over two M–X linkages, so each linkage carries half a bond. In 3c–4e, a second pair fills the non-bonding MO, which has a node at the central bridging atom and contributes no additional M–X overlap population — so the extra two electrons raise the total electron count without raising the net bonding order per linkage.",
  },
  { kind: "subheading", text: "Electron counting: why B₂H₆ is “electron deficient”" },
  {
    kind: "table",
    headers: ["Bonding role", "Electrons required"],
    rows: [
      ["4 terminal B–H bonds (2c–2e each)", "4 pairs = 8 e⁻"],
      ["2 bridging B–H–B bonds (3c–2e each)", "2 pairs = 4 e⁻"],
      ["Total used", "6 pairs = 12 e⁻ — exactly matches the supply"],
    ],
  },
  {
    kind: "callout",
    text: "Key idea: Each BH₃ fragment (6 e⁻ around B) is 2 electrons short of an octet. A bridging H shares its single 1s electron pair with sp³ hybrids from BOTH boron atoms at once, so 2 electrons — not 4 — hold together 3 nuclei. This is the origin of the term “electron-deficient.”",
  },
  { kind: "subheading", text: "Conditions favouring bridge-bond formation" },
  {
    kind: "table",
    headers: ["Condition", "Chemical consequence"],
    rows: [
      ["Vacant acceptor orbital", "Permits bridging/donor interaction"],
      ["Weak competing back donation", "Association becomes more favourable"],
      ["Small bridging atom/group", "Efficient close approach; H is especially effective"],
      ["Bridge has a lone pair", "Commonly 3c–4e"],
      ["Bridge lacks a lone pair", "H/alkyl bridges commonly 3c–2e"],
      ["Multiple acceptor directions", "Polymerisation can occur"],
      ["Bulky substituents / external Lewis base", "Aggregation is reduced or bridges are cleaved"],
    ],
  },

  // ============================================================ 2
  { kind: "major", text: `Section 2 - ${sections[1]}` },
  { kind: "formula", text: "2\\,BH_3 \\rightleftharpoons B_2H_6" },
  { kind: "structure", structureId: "b2h6" },
  {
    kind: "table",
    headers: ["Structural quantity", "Value / result"],
    rows: [
      ["Terminal B–H bonds", "4 × 2c–2e"],
      ["B–H–B bridges", "2 × 3c–2e"],
      ["B–Hₜ", "≈119 pm"],
      ["B–Hβ", "≈133 pm"],
      ["B···B", "≈177 pm"],
      ["∠B–Hβ–B", "≈83°"],
      ["∠Hβ–B–Hβ", "≈97°"],
      ["∠Hₜ–B–Hₜ", "≈121.5°"],
      ["Maximum coplanar atoms", "6 (standard JEE convention)"],
      ["Point group", "D₂h"],
    ],
  },
  {
    kind: "callout",
    text: "JEE Focus: B–Hβ (133 pm) is LONGER than B–Hₜ (119 pm). Bridge ≠ stronger bond — each linkage within the multicentre bridge has lower bond order (≈0.5 vs 1), and lower bond order correlates with a longer, weaker bond.",
  },
  { kind: "subheading", text: "Preparation" },
  {
    kind: "bullets",
    items: [
      "Industrial: 2 BF₃ + 6 NaH → B₂H₆ + 6 NaF (180 °C)",
      "Laboratory: 2 NaBH₄ + I₂ → B₂H₆ + 2 NaI + H₂ (in diglyme)",
      "From a Lewis acid halide: 4 BCl₃ + 3 LiAlH₄ → 2 B₂H₆ + 3 LiAlCl₄",
    ],
  },
  { kind: "subheading", text: "Reactions" },
  {
    kind: "bullets",
    items: [
      "Adduct formation: B₂H₆ + 2 THF → 2 BH₃·THF — the B–H–B bridge is cleaved by a strong donor.",
      "Hydrolysis: B₂H₆ + 6 H₂O → 2 H₃BO₃ + 6 H₂",
      "Combustion (strongly exothermic; historically explored as a rocket-fuel oxidiser system): B₂H₆ + 3 O₂ → B₂O₃ + 3 H₂O",
      "With ammonia at low temperature: B₂H₆ + 2 NH₃ → [BH₂(NH₃)₂]⁺[BH₄]⁻ (the “diammoniate of diborane”, DADB)",
      "With ammonia on heating — forms borazine: 3 B₂H₆ + 6 NH₃ → 2 B₃N₃H₆ + 12 H₂",
    ],
  },
  { kind: "structure", structureId: "borazine" },
  {
    kind: "paragraph",
    text: "Borazine, B₃N₃H₆, is isoelectronic and isostructural with benzene (hence “inorganic benzene”), but the B–N bond is polarised (B δ+, N δ−) so borazine is far more reactive toward polar reagents (e.g. HCl adds across a B–N bond) than benzene is.",
  },
  { kind: "subheading", text: "BH₃ versus the boron trihalides" },
  { kind: "structure", structureId: "bf3-resonance" },
  {
    kind: "table",
    headers: ["Species", "Dominant form", "Reason"],
    rows: [
      ["BH₃", "B₂H₆", "Small H forms efficient 3c–2e bridges"],
      ["BF₃", "Monomer", "Strong F→B pπ–pπ donation"],
      ["BCl₃", "Monomer", "Stable discrete trigonal-planar molecule"],
      ["BBr₃ / BI₃", "Monomer", "Increasing steric cost of bridging"],
      ["BMe₃", "Monomer", "Methyl crowding suppresses diborane-like association"],
    ],
  },
  { kind: "subheading", text: "B₂Cl₄ — the deliberate non-example" },
  { kind: "structure", structureId: "b2cl4" },
  {
    kind: "callout",
    text: "Trap: B₂Cl₄ is frequently confused with B₂H₆ because both are “dimers of BX₃.” They are not analogous: in B₂Cl₄ each boron is already electronically satisfied by Cl→B π-donation (as in BCl₃), so the two BCl₂ units join through a direct 2c–2e B–B σ-bond, not a bridge. The molecule is staggered (D₂d) in the gas phase to minimise Cl lone-pair repulsion.",
  },

  // ============================================================ 3
  { kind: "major", text: `Section 3 - ${sections[2]}` },
  {
    kind: "paragraph",
    text: "One pattern governs every trihalide in this group: the fluoride is consistently the most ionic member, usually adopting an extended, high-coordination-number lattice, while the heavier halides (Cl, Br, I) are consistently the most covalent and molecular, typically as halide-bridged dimers M₂X₆. Small, hard F⁻ favours a fully ionic close-packed lattice; the larger, softer, more polarisable Cl⁻/Br⁻/I⁻ favour discrete covalent M–X bonds and 3c–4e bridging instead.",
  },
  {
    kind: "paragraph",
    text: "Going down the group (B → Al → Ga → In → Tl), increasing metallic/ionic character raises the typical coordination number and, at thallium, the inert-pair effect changes which oxidation state is even stable. The table below gives the coordination number, bond type and structure for every element at a glance; each is then worked through in detail with its own structures.",
  },
  {
    kind: "table",
    headers: ["Trihalide(s)", "Structure / CN", "Bond type", "Key point"],
    rows: [
      ["BF₃, BCl₃, BBr₃, BI₃", "Monomer, CN(B) = 3, trigonal planar", "No bridge — covalent, π-satisfied", "Small B, strong X→B pπ–pπ donation; never dimerises"],
      ["AlF₃(s)", "3-D network, CN(Al) = 6, octahedral", "Ionic / F donor-bridge framework", "Hard F⁻ favours the fully ionic lattice"],
      ["AlCl₃, AlBr₃, AlI₃", "Al₂X₆ dimer (vapour/solution), CN(Al) = 4; layered solid, CN(Al) = 6", "3c–4e halide bridge", "Terminal bonds shorter than bridging bonds"],
      ["GaF₃(s)", "3-D network, CN(Ga) = 6, octahedral", "Ionic / F donor-bridge framework", "Parallels AlF₃"],
      ["GaCl₃, GaBr₃, GaI₃", "Ga₂X₆ dimer, CN(Ga) = 4", "3c–4e halide bridge", "Isostructural with the Al₂X₆ series"],
      ["InF₃(s)", "3-D network, CN(In) = 6, octahedral", "Ionic / F donor-bridge framework", "Parallels AlF₃/GaF₃"],
      ["InCl₃, InBr₃, InI₃", "Layered solid, CN(In) = 6; In₂Cl₆ known in vapour", "3c–4e halide bridge (solid: extended)", "Weaker tendency to stay as a discrete molecular dimer than Al/Ga — more ionic character"],
      ["TlF₃(s)", "Ionic lattice, CN(Tl) = 6", "Ionic — genuine Tl(III)", "Hard F⁻ is the only halide that stabilises Tl³⁺"],
      ["TlCl₃, TlBr₃", "Molecular/ionic, thermally unstable", "Decomposes: TlX₃ → TlX + X₂", "Inert-pair effect destabilises Tl(III)"],
      ["“TlI₃”", "Ionic salt Tl⁺[I–I–I]⁻", "NOT a Tl(III) compound", "Tl³⁺ oxidises I⁻ to I₂/I₃⁻ instead of bonding to it — a classic exam trap"],
    ],
  },
  { kind: "subheading", text: "Aluminium trihalides" },
  {
    kind: "table",
    headers: ["Compound / state", "Structural description", "CN(Al)"],
    rows: [
      ["AlF₃(s)", "Extended network solid", "6"],
      ["AlCl₃(s)", "Extended/layered chloride-bridged solid", "6"],
      ["AlCl₃ vapour, lower T", "Al₂Cl₆ important", "4"],
      ["AlCl₃ vapour, higher T", "Monomer fraction increases", "3"],
      ["AlBr₃(s)", "Molecular/dimeric Al₂Br₆", "4"],
      ["AlI₃(s)", "Molecular/dimeric Al₂I₆", "4"],
    ],
  },
  { kind: "structure", structureId: "al2cl6" },
  { kind: "structure", structureId: "al2br6" },
  {
    kind: "paragraph",
    text: "Al₂Cl₆ and Al₂Br₆ contain two halide bridges. Terminal bonds are shorter than bridge bonds; representative Al₂Cl₆ values are ~206 pm (terminal Al–Cl) and ~221 pm (bridging Al–Cl). Halide bridges are classified as 3c–4e.",
  },
  {
    kind: "callout",
    text: "JEE Focus: Al₂Cl₆ ⇌ 2 AlCl₃ — vapour-density association numericals built around this equilibrium are a JEE Advanced favourite (worked example in Section 4).",
  },
  { kind: "structure", structureId: "alf3-network" },
  {
    kind: "callout",
    text: "JEE Focus: AlF₃(s) shows the fluoride/heavier-halide contrast directly — fluoride's small size and hard character push the structure all the way to a 3-D, corner-sharing AlF₆ octahedral network (CN 6), a genuinely different structural family from the molecular Al₂Cl₆ dimer (CN 4), even though both are “AlX₃.”",
  },

  // ============================================================ 4
  { kind: "major", text: `Section 4 - ${sections[3]}` },
  { kind: "structure", structureId: "alh3" },
  {
    kind: "paragraph",
    text: "An isolated AlH₃ molecule is a trigonal-planar electron-deficient model. Condensed alane contains six-coordinate Al in an AlH₆ network linked by bridging H; it should not be represented as a simple molecular Al₂H₆ analogue of diborane.",
  },
  { kind: "subheading", text: "Al(BH₄)₃" },
  { kind: "structure", structureId: "al-bh4-3" },
  {
    kind: "paragraph",
    text: "Al(BH₄)₃ is covalent and molecular: three BH₄⁻ groups are each bidentate, bridging to Al through two of their own hydrogens (B–H–Al, 3c–2e), giving Al six H-contacts overall. There is no direct Al–B bond — do not draw one. (Be(BH₄)₂ is the exact beryllium analogue; see Section 6.)",
  },
  { kind: "subheading", text: "Al₂(CH₃)₆" },
  { kind: "structure", structureId: "al2me6" },
  {
    kind: "table",
    headers: ["Quantity", "Result"],
    rows: [
      ["Bridging methyl groups", "2"],
      ["Terminal methyl groups", "4"],
      ["Bridge type", "3c–2e Al–Cβ–Al"],
      ["CN(Al)", "4"],
      ["Al–Cβ–Al angle", "≈75°"],
      ["Terminal Al–C", "≈197 pm"],
      ["Bridging Al–C", "≈214 pm"],
      ["Ordinary 2c–2e σ bonds", "22 (standard JEE counting)"],
      ["Maximum coplanar atoms", "10 (standard idealised counting)"],
    ],
  },
  { kind: "formula", text: "Al_2Me_6 + 2\\,NEt_3 \\rightarrow 2\\,Me_3Al\\!\\leftarrow\\!NEt_3" },
  { kind: "subheading", text: "Al₂Ph₆" },
  { kind: "structure", structureId: "al2ph6" },
  {
    kind: "paragraph",
    text: "Two phenyl groups bridge the Al centres through their ipso carbon atoms. The phenyl-ring orientation and π interaction are part of the structure; it is not simply Al₂Me₆ with CH₃ labels replaced by Ph.",
  },
  { kind: "subheading", text: "Worked numerical — degree of association of AlCl₃ vapour" },
  {
    kind: "paragraph",
    text: "At a fixed temperature and pressure, AlCl₃ vapour partially associates: 2 AlCl₃ ⇌ Al₂Cl₆. If M₀ = 133.5 g mol⁻¹ is the monomer molar mass, the theoretical vapour density of the pure monomer is D₀ = M₀/2 = 66.75. The observed vapour density is D_obs = 111.25. Find the degree of association α (the fraction of AlCl₃ molecules that have paired into Al₂Cl₆).",
  },
  {
    kind: "callout",
    text: "Solution: Starting from n₀ moles of monomer (mass conserved), if a fraction α of the monomer molecules associate in pairs, the total moles at equilibrium fall to n₀(1 − α/2), so the observed molar mass is M_obs = M₀ / (1 − α/2), i.e. D_obs = D₀ / (1 − α/2).",
  },
  { kind: "formula", text: "\\alpha = 2\\left(1-\\dfrac{D_0}{D_{obs}}\\right)=2\\left(1-\\dfrac{66.75}{111.25}\\right)=2(1-0.6)=0.8" },
  {
    kind: "paragraph",
    text: "So 80% of the AlCl₃ molecules are present as Al₂Cl₆ dimer under these conditions — consistent with Al₂Cl₆ being the dominant vapour species at lower temperature.",
  },

  // ============================================================ 5
  { kind: "major", text: `Section 5 - ${sections[4]}` },
  { kind: "structure", structureId: "ga2cl6" },
  {
    kind: "paragraph",
    text: "GaCl₃ is isostructural with AlCl₃ and dimerises to Ga₂Cl₆ through two 3c–4e μ-Cl bridges by the same reasoning as Al₂Cl₆ (CN(Ga) = 4 in the dimer). GaF₃(s), like AlF₃(s), is an extended ionic-type network with CN(Ga) = 6 — the fluoride/heavier-halide split holds across the whole group, not just for aluminium.",
  },
  { kind: "structure", structureId: "ga2h6" },
  {
    kind: "paragraph",
    text: "Digallane, Ga₂H₆, is structurally analogous to diborane, with two 3c–2e Ga–H–Ga bridges, but it is thermally far less stable than B₂H₆ — gallium's larger, more diffuse valence orbitals give weaker multicentre overlap than boron's compact 2p orbitals.",
  },
  { kind: "structure", structureId: "game3" },
  {
    kind: "callout",
    text: "JEE Focus: GaMe₃ breaks the pattern set by Al₂Me₆ — it is monomeric and trigonal planar in the gas phase, not a bridged dimer. Gallium's weaker Lewis acidity and larger, more diffuse orbitals make the alkyl-bridged dimer far less favourable than it is for aluminium. A trend confirmed for one compound class (halides) does not automatically carry over to another (alkyls) for the same element.",
  },
  { kind: "subheading", text: "Indium" },
  {
    kind: "table",
    headers: ["Compound / state", "Structural description", "CN(In)"],
    rows: [
      ["InF₃(s)", "Extended ionic network solid", "6"],
      ["InCl₃(s), InBr₃(s), InI₃(s)", "Layered solid, more ionic than AlCl₃/GaCl₃", "6"],
      ["InCl₃ vapour", "In₂Cl₆ dimer known, but the monomer fraction is more significant than for AlCl₃/GaCl₃ at comparable temperature", "4 (dimer) / 3 (monomer)"],
    ],
  },
  { kind: "structure", structureId: "in2cl6" },
  {
    kind: "paragraph",
    text: "In₂Cl₆ is built the same way as Al₂Cl₆ and Ga₂Cl₆ — two 3c–4e μ-Cl bridges — but indium's larger size and greater metallic character shift the balance further toward ionic, high-coordination solid-state structures, so the discrete molecular dimer is a smaller part of the overall picture than it is for Al or Ga. InI₃ is a genuine, ordinary In(III) iodide — a useful contrast with thallium below, where the analogous “TlI₃” is not what its formula suggests.",
  },
  { kind: "subheading", text: "Thallium and the inert-pair effect" },
  {
    kind: "paragraph",
    text: "Thallium's 6s² electron pair is held unusually tightly (poor shielding from the filled 4f and 5d shells, plus relativistic contraction), so it resists being used in bonding. The result is the inert-pair effect: Tl⁺ (using only the 6p electron) is generally more stable than Tl³⁺ (using both 6s and 6p electrons) — the reverse of the trend at boron and aluminium, where the group oxidation state (+3) dominates.",
  },
  {
    kind: "table",
    headers: ["Compound", "Structure / CN", "Bond type", "Key point"],
    rows: [
      ["TlF₃(s)", "Ionic lattice, CN(Tl) = 6", "Ionic — genuine Tl(III)", "Small, hard F⁻ is the one halide that stabilises Tl³⁺"],
      ["TlCl₃, TlBr₃", "Known but thermally unstable", "Decomposes: TlX₃ → TlX + X₂", "Heavier, softer, more reducing halides can't hold Tl³⁺"],
      ["“TlI₃”", "Ionic salt Tl⁺[I–I–I]⁻", "Not a Tl–I(III) bond at all", "Tl³⁺ oxidises I⁻ before a Tl(III)–I bond can form"],
    ],
  },
  { kind: "structure", structureId: "tli3" },
  {
    kind: "callout",
    text: "JEE Focus: The reduction potential for Tl³⁺ + 2e⁻ → Tl⁺ is high enough that Tl³⁺ oxidises I⁻ to I₂ (which then combines with excess I⁻ to give the linear I₃⁻ ion) rather than forming a stable covalent Tl(III)–I bond. What crystallises as solid “TlI₃” is therefore the ionic compound Tl⁺[I₃]⁻ — a Tl(I) salt of the triiodide anion, directly analogous to KI₃ or CsI₃ — not a Tl(III) trihalide at all. This is one of the most frequently tested traps in Group 13 chemistry.",
  },

  // ============================================================ 6
  { kind: "major", text: `Section 6 - ${sections[5]}` },
  {
    kind: "table",
    headers: ["Species/state", "Monomer", "Dimer / aggregate", "Condensed form", "Bridge type"],
    rows: [
      ["BeH₂", "Linear model", "Small hydride aggregates", "Polymeric Be–H–Be", "3c–2e"],
      ["BeF₂", "Linear molecular model", "—", "3-D BeF₄ tetrahedral network", "F donor bridge"],
      ["BeCl₂", "Linear monomer", "Be₂Cl₄ vapour dimer", "Edge-sharing BeCl₄ tetrahedral chains", "3c–4e"],
      ["BeBr₂ / BeI₂", "Linear molecular model", "Bridged dimers", "Bridged condensed forms", "3c–4e"],
      ["BeMe₂", "Linear molecular model", "Associated species", "Polymeric Be–C–Be", "3c–2e"],
    ],
  },
  { kind: "structure", structureId: "beh2" },
  { kind: "structure", structureId: "becl2" },
  {
    kind: "paragraph",
    text: "The vapour dimer and the solid are distinct. Solid BeCl₂ is represented as a chain of edge-sharing BeCl₄ tetrahedra; a flat rhombic chain is only a connectivity shorthand.",
  },
  { kind: "structure", structureId: "bef2-network" },
  {
    kind: "callout",
    text: "JEE Focus: Solid BeF₂ forms a three-dimensional network of corner-sharing BeF₄ tetrahedra (CN(Be) = 4). Never draw solid BeF₂ as linear F–Be–F — this is the key structural difference from solid BeCl₂, and mirrors the AlF₃/AlCl₃ pair: the fluoride of a given metal tends to be the most ionic, highest-symmetry lattice.",
  },
  { kind: "structure", structureId: "beme2" },
  {
    kind: "paragraph",
    text: "All methyl groups are bridging in the polymeric electron-deficient structure, producing repeated Be–C–Be multicentre units.",
  },
  { kind: "subheading", text: "Donor adducts: the trimethylamine adduct" },
  { kind: "structure", structureId: "beh2-nme3" },
  {
    kind: "paragraph",
    text: "In (BeH₂·NMe₃)₂ each Be has one terminal H, shares two bridging H atoms with the other Be, and accepts one donor pair from NMe₃.",
  },
  { kind: "subheading", text: "Be(BH₄)₂" },
  { kind: "structure", structureId: "be-bh4-2" },
  {
    kind: "paragraph",
    text: "Be(BH₄)₂ is the beryllium counterpart of Al(BH₄)₃: two BH₄⁻ groups are each bidentate, bridging to Be through two of their own hydrogens (B–H–Be, 3c–2e), giving Be four H-contacts in an approximately tetrahedral arrangement. As with Al(BH₄)₃, there is no direct Be–B bond.",
  },
  { kind: "formula", text: "BeCl_2 + 2\\,LiBH_4 \\rightarrow Be(BH_4)_2 + 2\\,LiCl" },
  {
    kind: "paragraph",
    text: "Hydride addition to electron-deficient BeH₂ also gives hydridoberyllates such as LiBeH₃ and Li₂BeH₄; diborane itself reacts with BeH₂ at about 95 °C to form Be(BH₄)₂ by the same overall transformation.",
  },
  { kind: "subheading", text: "Amide chemistry: reaction with dimethylamine" },
  { kind: "formula", text: "BeH_2 + 2\\,HNMe_2 \\rightarrow Be(NMe_2)_2 + 2\\,H_2" },
  { kind: "structure", structureId: "be-nme2-trimer" },
  {
    kind: "paragraph",
    text: "[Be(NMe₂)₂]₃ contains four bridging NMe₂ groups and two terminal NMe₂ groups. Greater steric bulk lowers the aggregation number and can ultimately give monomeric diamides (a sterically protected R′₂N–Be–NR′₂ monomer).",
  },
  { kind: "subheading", text: "Organoberyllium donor/bridge motifs" },
  { kind: "structure", structureId: "organoberyllium-motifs" },
  {
    kind: "table",
    headers: ["Motif", "Structural meaning"],
    rows: [
      ["[R₂BeH]₂²⁻", "Hydride-bridged dianionic dimer"],
      ["R-bridged donor dimer", "Alkyl bridges + terminal donor ligands"],
      ["R₂BeD₂", "Four-coordinate donor-saturated monomer"],
      ["R₂BeD", "Three-coordinate donor complex"],
      ["X-bridged donor adduct", "Two X bridges between two Be centres"],
    ],
  },
  {
    kind: "paragraph",
    text: "Proton-active donors can undergo protonolysis: R₂Be + HX → R₂Be·HX → RBeX + RH. RBeX products commonly oligomerise through X bridges. Donor coordination and steric bulk both reduce nuclearity.",
  },
  { kind: "subheading", text: "The Group 2 parallel: Grignard reagents" },
  { kind: "structure", structureId: "grignard" },
  {
    kind: "paragraph",
    text: "Magnesium shows the same bridging chemistry one group over. In ethereal solution, Grignard reagents sit in a dynamic Schlenk equilibrium, 2 RMgX ⇌ R₂Mg + MgX₂, and the individual RMgX is typically solvated as a four-coordinate monomer in strongly coordinating solvents (THF). In weaker donors such as Et₂O, or at higher concentration, a halide-bridged dimer [RMgX(OEt₂)]₂ becomes significant — the bridging halide again behaves as a 3c–4e donor bridge, exactly as in Be₂Cl₄ and Al₂Cl₆.",
  },
  {
    kind: "callout",
    text: "JEE Focus: 2 RMgX ⇌ R₂Mg + MgX₂ — the Schlenk equilibrium, and the fact that monomer, dimer and both equilibrium species can coexist, is a classic conceptual question.",
  },

  // ============================================================ 7
  { kind: "major", text: `Section 7 - ${sections[6]}` },
  { kind: "subheading", text: "I₂Cl₆" },
  { kind: "formula", text: "2\\,ICl_3 \\rightleftharpoons I_2Cl_6" },
  { kind: "structure", structureId: "i2cl6" },
  {
    kind: "paragraph",
    text: "I₂Cl₆ is a planar molecular dimer containing two μ-Cl bridges and four terminal Cl atoms. The chloride bridge is 3c–4e.",
  },
  { kind: "subheading", text: "Iron chloride dimers" },
  { kind: "structure", structureId: "fecl-dimers" },
  {
    kind: "paragraph",
    text: "FeCl₃ can form non-planar Fe₂Cl₆ in the vapour. FeCl₂ can also form doubly bridged Fe₂Cl₄ motifs. Transition-metal bonding should not be reduced to literal main-group hybridisation pictures.",
  },

  // ============================================================ 8
  { kind: "major", text: `Section 8 - ${sections[7]}` },
  { kind: "subheading", text: "[LiCH₃]₄" },
  { kind: "structure", structureId: "lich3-cubane" },
  {
    kind: "callout",
    text: "JEE Focus: The tetramer is conveniently represented by a cubane-type Li₄C₄ core with Li and methyl-carbon centres on alternate vertices. Each methyl carbon bridges three lithium atoms across a face of the Li₄ tetrahedron (μ₃) — not a simple 2c–2e Li–C single bond. The bonding is multicentre throughout the cluster.",
  },
  {
    kind: "paragraph",
    text: "Other lithium alkyls form related clusters: ethyllithium and n-butyllithium commonly aggregate as tetramers or hexamers depending on solvent and chain length, with Li–C multicentre bonding analogous to the cubane core of [LiCH₃]₄ (larger aggregates are often described as a hexagonal-prism arrangement of Li and C centres).",
  },

  // ============================================================ 9
  { kind: "major", text: `Section 9 - ${sections[8]}` },
  { kind: "subheading", text: "Fast classification table" },
  {
    kind: "table",
    headers: ["Species", "2c–2e", "3c–2e", "3c–4e / donor bridge", "Geometry / state"],
    rows: [
      ["B₂H₆", "Yes", "Yes", "No", "Nonplanar overall"],
      ["B₂Cl₄", "Yes (direct B–B)", "No", "No", "Staggered; not bridged"],
      ["AlF₃(s)", "No", "No", "Yes (F)", "3-D octahedral network"],
      ["Al₂Cl₆", "Yes", "No", "Yes", "Nonplanar; tetrahedral Al"],
      ["Al₂Br₆", "Yes", "No", "Yes", "Nonplanar"],
      ["Ga₂Cl₆", "Yes", "No", "Yes", "Nonplanar; isostructural with Al₂Cl₆"],
      ["Ga₂H₆", "Yes", "Yes", "No", "Nonplanar; analogous to B₂H₆"],
      ["GaMe₃", "Yes", "No", "No", "Monomeric trigonal planar"],
      ["In₂Cl₆", "Yes", "No", "Yes", "Nonplanar; more ionic character than Al/Ga"],
      ["“TlI₃”", "—", "No", "No (ionic, not a bridge)", "Tl⁺ + linear I₃⁻ salt"],
      ["Al₂Me₆", "Yes", "Yes", "No", "Nonplanar"],
      ["(AlH₃)ₙ", "Framework", "Yes", "No", "Octahedral local Al"],
      ["(BeH₂)ₙ", "Framework", "Yes", "No", "Tetrahedral local Be"],
      ["Be₂Cl₄", "Yes", "No", "Yes", "Vapour dimer"],
      ["BeCl₂(s)", "Framework", "No", "Yes", "Edge-sharing tetrahedral chain"],
      ["BeF₂(s)", "Framework", "No", "Donor-bridge network", "3-D tetrahedral network"],
      ["I₂Cl₆", "Yes", "No", "Yes", "Planar"],
      ["[RMgX(OEt₂)]₂", "Yes", "No", "Yes", "Halide-bridged dimer"],
      ["[LiCH₃]₄", "Multicentre", "Electron-deficient", "No", "Cubane-type aggregate"],
    ],
  },
  { kind: "subheading", text: "Master data table" },
  {
    kind: "table",
    headers: ["Species", "Aggregation", "Bridge", "Bond class", "CN", "Key data"],
    rows: [
      ["B₂H₆", "Dimer", "H", "3c–2e", "B: 4 contacts", "119/133 pm B–Hₜ/B–Hβ; B···B 177 pm"],
      ["B₂Cl₄", "— (B–B bonded)", "None", "2c–2e B–B", "B: 3", "Staggered D₂d"],
      ["AlF₃(s)", "3-D network", "F", "Ionic/donor-bridge", "Al: 6", "Corner-sharing AlF₆ octahedra"],
      ["Al₂Cl₆", "Dimer", "Cl", "3c–4e", "Al: 4", "Al–Clₜ ~206 pm; Al–Clβ ~221 pm"],
      ["Ga₂Cl₆", "Dimer", "Cl", "3c–4e", "Ga: 4", "Isostructural with Al₂Cl₆"],
      ["Ga₂H₆", "Dimer", "H", "3c–2e", "Ga: 4", "Analogous to B₂H₆; thermally less stable"],
      ["GaMe₃", "Monomer", "None", "2c–2e only", "Ga: 3", "Does not dimerise, unlike Al₂Me₆"],
      ["In₂Cl₆", "Dimer (vapour)", "Cl", "3c–4e", "In: 4", "Solid InCl₃ is CN 6, more ionic"],
      ["“TlI₃”", "Ionic salt", "None (not a bridge)", "Ionic Tl⁺/I₃⁻", "—", "Tl(I) triiodide, not Tl(III) iodide"],
      ["Al₂Me₆", "Dimer", "CH₃", "3c–2e", "Al: 4", "∠Al–Cβ–Al ~75°; Al–Cₜ ~197 pm; Al–Cβ ~214 pm"],
      ["(AlH₃)ₙ", "Polymer", "H", "3c–2e", "Al: 6", "AlH₆ octahedral connectivity"],
      ["(BeH₂)ₙ", "Polymer", "H", "3c–2e", "Be: 4", "Tetrahedral local Be"],
      ["Be₂Cl₄", "Dimer", "Cl", "3c–4e", "Be: 3", "Vapour aggregate"],
      ["BeCl₂(s)", "Polymer", "Cl", "3c–4e framework", "Be: 4", "Edge-sharing BeCl₄ tetrahedra"],
      ["BeF₂(s)", "3-D network", "F", "Donor-bridge framework", "Be: 4", "Corner-sharing BeF₄ tetrahedra"],
      ["I₂Cl₆", "Dimer", "Cl", "3c–4e", "Expanded I coordination", "Planar"],
      ["[RMgX(OEt₂)]₂", "Dimer", "X (halide)", "3c–4e", "Mg: 4", "Schlenk-equilibrium dimer"],
      ["[LiCH₃]₄", "Tetramer", "C/CH₃ multicentre", "Electron deficient", "Cluster", "Cubane-type Li₄C₄ core"],
    ],
  },
  { kind: "subheading", text: "Quick revision — deciding the bridge type" },
  {
    kind: "table",
    headers: ["Question to ask", "If yes →"],
    rows: [
      ["Does the bridging atom have a spare lone pair (halide, group-16 donor)?", "3c–4e bridge (e.g. Al₂Cl₆, Ga₂Cl₆, In₂Cl₆, Be₂Cl₄, I₂Cl₆, [RMgX]₂)"],
      ["Is the bridging atom/group H or an alkyl carbon with no lone pair?", "3c–2e bridge (e.g. B₂H₆, Ga₂H₆, Al₂Me₆, BeH₂, BeMe₂, [LiCH₃]₄)"],
      ["Can the monomer already relieve its electron deficiency by π-donation (F, Cl on B), or is the metal a weak enough Lewis acid (Ga in GaMe₃)?", "No bridge at all — stays monomeric (BF₃, BCl₃, GaMe₃) or forms a direct M–M bond (B₂Cl₄)"],
      ["Is the compound a solid rather than a discrete molecule/vapour species?", "Check the extended network separately — a vapour dimer is not the solid-state structure (BeCl₂, BeF₂, AlCl₃, AlF₃, InCl₃)"],
      ["Is a heavy p-block metal (Tl) in its group oxidation state with a soft/reducing halide (I)?", "Check for the inert-pair effect first — the formula may hide an ionic salt of a lower oxidation state (“TlI₃” = Tl⁺[I₃]⁻)"],
    ],
  },

  // ============================================================ 10
  { kind: "major", text: `Section 10 - ${sections[9]}` },
  { kind: "subheading", text: "Problem 1 — electron count for B₂H₆" },
  {
    kind: "paragraph",
    text: "Verify that the total valence-electron count in B₂H₆ is exactly enough for 4 terminal 2c–2e B–H bonds plus 2 bridging 3c–2e B–H–B bonds, and no more.",
  },
  {
    kind: "callout",
    text: "Solution: Valence electrons supplied: 2 B (3 each) + 6 H (1 each) = 6 + 6 = 12 e⁻ = 6 pairs. Electrons required: 4 terminal bonds × 2 e⁻ = 8 e⁻, plus 2 bridge bonds × 2 e⁻ = 4 e⁻; total 12 e⁻. The count matches exactly — there is no electron pair left over for a 7th (direct B–B) bond, which is why diborane is described as electron deficient rather than simply electron-poor: every available pair is already assigned to a bonding role.",
  },
  { kind: "subheading", text: "Problem 2 — degree of association of AlCl₃" },
  {
    kind: "paragraph",
    text: "See the fully worked example in Section 4: for D₀ = 66.75 and D_obs = 111.25, α = 0.8, i.e. 80% of the AlCl₃ is present as the dimer Al₂Cl₆ under the stated conditions.",
  },
  { kind: "subheading", text: "Problem 3 — identifying bridge type from the bridging atom" },
  {
    kind: "paragraph",
    text: "For each pair below, state whether the bridge is 3c–2e or 3c–4e, and justify using the presence or absence of a lone pair on the bridging atom: (i) Al₂(CH₃)₆ (ii) Al₂Cl₆ (iii) Be₂Cl₄.",
  },
  {
    kind: "callout",
    text: "Solution: (i) The bridging methyl carbon has no lone pair — only bonding pairs to its own H atoms — so the bridge is 3c–2e, exactly like H in B₂H₆. (ii) Bridging Cl retains a lone pair that it donates into an empty Al orbital on both aluminium centres, so the bridge is 3c–4e. (iii) By the same reasoning as (ii), the bridging Cl in Be₂Cl₄ is also 3c–4e.",
  },
  { kind: "subheading", text: "Problem 4 — why “TlI₃” is not a Tl(III) compound" },
  {
    kind: "paragraph",
    text: "InI₃ is an ordinary, covalent In(III) iodide. TlI₃ has the same formula ratio but is not the thallium analogue. Explain why, and state what TlI₃ actually is.",
  },
  {
    kind: "callout",
    text: "Solution: Tl³⁺ is a strong enough oxidiser that it oxidises I⁻ to I₂ before a stable Tl(III)–I bond can form (the inert-pair effect makes the Tl³⁺/Tl⁺ couple unusually favourable for reduction). The I₂ produced combines with the remaining I⁻ to give linear I₃⁻, and the thallium is left as Tl⁺. So “TlI₃” crystallises as the ionic salt Tl⁺[I₃]⁻ — a thallium(I) triiodide, with no Tl(III)–I bonding at all — while InI₃, where indium has no comparable inert-pair effect, is a genuine In(III) trihalide.",
  },

  // ============================================================ 11
  { kind: "major", text: `Section 11 - ${sections[10]}` },
  {
    kind: "bullets",
    items: [
      "State the physical state before assigning monomer, dimer or polymer.",
      "Do not draw solid BeF₂ or AlF₃ as simple discrete molecules; both are 3-D corner-sharing networks.",
      "Do not use the vapour Be₂Cl₄ dimer as the structure of solid BeCl₂.",
      "Do not draw Al(BH₄)₃ or Be(BH₄)₂ using ordinary localized M–B single bonds.",
      "Do not obtain Al₂Ph₆ by simply replacing CH₃ labels in Al₂Me₆.",
      "Do not interpret a BF₃ resonance contributor as a localized permanent B=F double bond.",
      "Do not call every bridge 3c–2e: halide bridges are usually treated as 3c–4e.",
      "Do not claim every bridge linkage is stronger than a terminal bond.",
      "Do not confuse B₂Cl₄ with B₂H₆ — B₂Cl₄ has a direct B–B bond and no bridge at all.",
      "Do not assume every Group 13 trihalide behaves like AlCl₃ — GaMe₃ stays monomeric where Al₂Me₆ dimerises, and InCl₃/TlCl₃ lean far more ionic than AlCl₃.",
      "Do not call “TlI₃” a thallium(III) compound — it is the ionic Tl(I) salt Tl⁺[I₃]⁻; InI₃, by contrast, is a genuine In(III) iodide.",
      "Do not assume borazine behaves like benzene chemically — the polarised B–N bond makes it far more reactive toward polar reagents.",
      "Do not treat a Grignard reagent as a single fixed species — monomer, dimer and the Schlenk equilibrium can all coexist.",
      "Strong Lewis bases and bulky substituents generally reduce aggregation.",
      "Hybridisation is a geometry shortcut, not the microscopic origin of multicentre bonding.",
    ],
  },

  // ============================================================ 12
  { kind: "major", text: `Section 12 - ${sections[11]}` },
  {
    kind: "numbered",
    items: [
      "Why do simple 3c–2e and 3c–4e models both give an average linkage bond order near 0.5? — In 3c–2e, the single bonding pair is delocalized over two M–X linkages, so each linkage carries ~0.5 bond order. In 3c–4e, the extra pair fills a non-bonding MO with a node at the bridging atom, adding electron count but essentially no extra M–X bonding population — so the net order per linkage stays near 0.5 in both cases.",
      "Why is B–Hβ longer than B–Hₜ in diborane? — The bridge bond order (~0.5) is lower than the terminal bond order (1), and lower bond order correlates with a longer, weaker bond.",
      "Why does BH₃ dimerise but BF₃ does not? — BH₃ has no way to relieve boron's electron deficiency except by bridging; F, unlike H, has lone pairs that donate into boron's empty p-orbital (pπ–pπ), already satisfying the octet in BF₃ so dimerisation is unnecessary.",
      "Why do Al₂Cl₆ and Al₂Me₆ contain different kinds of bridge despite both being dimers? — Bridging Cl has a lone pair to donate (3c–4e); bridging CH₃ has no lone pair on carbon, only bonding pairs to its own hydrogens (3c–2e).",
      "How does the structure of AlCl₃ change with state and temperature? — Solid AlCl₃ is an extended chloride-bridged network (CN 6). On vaporisation at lower temperature it exists mainly as the Al₂Cl₆ dimer (CN 4); at higher temperature increasing thermal energy breaks the Cl bridges and the monomer fraction (CN 3) grows.",
      "Why must solid BeF₂ and solid BeCl₂ be represented by different extended structures? — F is small and forms a fully 3-D corner-sharing BeF₄ network (silica-like); the larger, more polarisable Cl instead favours a 1-D chain of edge-sharing BeCl₄ tetrahedra.",
      "Why is Be(BH₄)₂ not represented by ordinary Be–B single bonds? — There is no direct Be–B bond. Each BH₄⁻ is bidentate, connecting to Be entirely through two 3c–2e B–H–Be bridges.",
      "Why does NMe₃ form an adduct with BeH₂ while HNMe₂ causes H₂ elimination? — NMe₃ has no N–H bond, so it can only donate its lone pair, giving a simple Lewis adduct. HNMe₂'s lone pair coordinates first, but its acidic N–H then undergoes intramolecular proton transfer to a hydridic Be–H, eliminating H₂ and forming a Be–N bond instead (protonolysis).",
      "How does steric bulk control aggregation in Be amides and Al alkyls? — Bulky R/NR₂ groups crowd the space around each metal, disfavouring additional bridging contacts; sufficiently bulky ligands can force the aggregation number down to a monomer.",
      "Why is [LiCH₃]₄ a multicentre-bonded cluster rather than a set of independent Li–C bonds? — Each methyl carbon bridges three lithium atoms (μ₃) across a face of the Li₄ tetrahedron through delocalised multicentre bonding, not a localized 2c–2e bond to a single Li.",
      "Why is B₂Cl₄ not considered a bridge-bonded species, unlike B₂H₆? — Cl→B π-donation already relieves boron's electron deficiency (as in BCl₃), so the two BCl₂ units join through a direct 2c–2e B–B σ-bond instead of forming a bridge.",
      "Why can a single Grignard reagent solution contain both monomeric and dimeric species at once? — The Schlenk equilibrium (2 RMgX ⇌ R₂Mg + MgX₂) and the solvation/bridging equilibria are dynamic and solvent- and concentration-dependent, so several species coexist in fast exchange rather than one fixed structure dominating.",
      "Why does GaMe₃ stay monomeric while Al₂Me₆ dimerises, even though both are Group 13 trimethyls? — Gallium is a weaker Lewis acid than aluminium and its valence orbitals are larger and more diffuse, giving poorer 3c–2e bridge-orbital overlap; the energetic payoff for dimerising is smaller for Ga than for Al, so GaMe₃ simply stays a monomer.",
      "Why is “TlI₃” not a thallium(III) compound, even though InI₃ is a normal indium(III) compound? — The inert-pair effect makes Tl³⁺ a strong enough oxidiser to oxidise I⁻ to I₂ (which combines with excess I⁻ to give I₃⁻) rather than forming a stable Tl(III)–I bond; indium has no comparable inert-pair effect, so In³⁺ simply bonds to I⁻ as expected. Solid “TlI₃” is therefore the ionic salt Tl⁺[I₃]⁻.",
    ],
  },
];
