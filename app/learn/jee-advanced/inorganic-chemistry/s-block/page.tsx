"use client";

import { useMemo, useState } from "react";

type NotePage = {
  title: string;
  summary: string;
  paragraphs: string[];
  core: string[];
  equations: string[];
  jee: string[];
  example: [string, string];
  table: string[][] | null;
  diagram: string | null;
};

const notePages: NotePage[] = [
  {
    "title": "The s-Block: Position, Scope and JEE Advanced Strategy",
    "summary": "The s-block contains elements whose differentiating electron enters an outer s orbital. Group 1 has ns¹ and normally gives M⁺; Group 2 has ns² and normally gives M²⁺. The chapter is governed by size, charge density, ionisation, hydration, lattice enthalpy, polarisation and kinetics rather than variable oxidation states.",
    "core": [
      "The outer s density is spherical and becomes more diffuse as n increases; down a group size and electropositive character increase.",
      "Ordinary M⁺ and M²⁺ ions have noble-gas configurations, so their salts are generally colourless and diamagnetic.",
      "Three recurring competitions organise the chapter: lattice versus hydration enthalpy; ionisation/atomisation cost versus solvation release; and cation polarising power versus anion polarizability.",
      "Lithium and beryllium are anomalous because they are very small, strongly hydrated and strongly polarising.",
      "For unfamiliar orders, identify the controlling energetic term instead of relying only on memory."
    ],
    "equations": [
      "Group 1: [noble gas] ns¹ → M⁺ + e⁻",
      "Group 2: [noble gas] ns² → M²⁺ + 2e⁻"
    ],
    "jee": [
      "Always specify phase when comparing reducing strength.",
      "An exception usually means two trends compete."
    ],
    "example": [
      "Why are ordinary Na⁺ and Ca²⁺ salts generally colourless?",
      "Both cations are closed-shell. They have no partially filled d subshell for visible d-d transitions; colour normally comes from an anion, radical ion or lattice defect."
    ],
    "table": null,
    "paragraphs": [
      "A reliable way to study the s-block is to treat each observation as the result of a competition among a small set of energies. Ionisation and atomisation oppose formation of gaseous cations, whereas lattice formation and hydration stabilise the final ionic state. Polarisation then decides how far the real bond departs from the ideal ionic model. Kinetics explains why a thermodynamically favourable reaction may still be slow when a protective film is present.",
      "Molecular-orbital theory is essential when the anion itself contains an O-O bond. The metal is usually a spectator cation; the difference between oxide, peroxide and superoxide is therefore understood by counting electrons in the oxygen fragment. In contrast, three-centre bonding and aggregation are needed for electron-deficient BeH2 and organolithium compounds."
    ],
    "diagram": null
  },
  {
    "title": "Masterclass A - Radial Distribution, Penetration, Shielding and the Special Role of s Orbitals",
    "summary": "The spherical s orbital penetrates close to the nucleus and has non-zero density at the nucleus. Its radial size and node count change with n, controlling shielding, ionisation and the diffuse metallic bonding of the heavier s-block elements.",
    "paragraphs": [
      "An orbital picture based only on a boundary surface is incomplete. For an s orbital, the angular function is constant and all variation is radial. The radial probability distribution 4πr²|R(r)|² gives the most useful measure of where the electron is likely to be found. A 1s orbital has no radial node, 2s has one and 3s has two. As n rises, the outer maximum moves farther from the nucleus and the electron is increasingly shielded by inner shells.",
      "Penetration means that some electron density occurs within inner-shell regions. For the same principal shell, s penetrates more strongly than p, p more than d and d more than f. This is why an ns electron experiences a larger effective nuclear charge than an np electron of similar average radius. Down Group 1 or 2, however, the increase in n and shielding dominates, so the outer electron becomes easier to remove despite the increased nuclear charge.",
      "The diffuse outer ns orbital also explains weak overlap between neighbouring atoms in Group 1 metals. A single electron per atom occupies a broad conduction band, but the cohesive energy is modest. In Group 2, two valence electrons can contribute, and the higher electron density generally strengthens metallic bonding. Crystal-structure changes prevent a perfectly monotonic melting-point trend.",
      "The first-member anomaly follows partly from the compactness of 2s. Lithium and beryllium are much smaller than the next members; their cations have high charge density, strong hydration and strong polarising power. They therefore show enhanced covalency and complex formation compared with the rest of their groups."
    ],
    "core": [
      "Number of radial nodes in ns = n - 1",
      "For equal n: penetration s > p > d > f",
      "Down a group: size and shielding increase; ionisation enthalpy generally falls"
    ],
    "equations": [],
    "jee": [
      "Do not confuse a radial node with an angular nodal plane.",
      "The radial distribution, not just the orbital boundary, explains penetration."
    ],
    "example": [
      "Why is the 2s electron of Li still more tightly held than the 3s electron of Na?",
      "The 2s orbital is smaller and experiences less shielding. The increased nuclear charge of Na is outweighed by the new shell and stronger shielding, so IE1 falls from Li to Na."
    ],
    "table": [
      [
        "Orbital",
        "Radial nodes",
        "Angular nodes",
        "Total nodes"
      ],
      [
        "1s",
        "0",
        "0",
        "0"
      ],
      [
        "2s",
        "1",
        "0",
        "1"
      ],
      [
        "3s",
        "2",
        "0",
        "2"
      ]
    ],
    "diagram": null
  },
  {
    "title": "Group 1: Occurrence, Abundance and Important Minerals",
    "summary": "Alkali metals are too reactive to occur free. Sodium and potassium are abundant in evaporites and seawater; lithium is concentrated in silicate minerals and brines; rubidium and caesium are generally by-products.",
    "core": [
      "Lithium occurs in spodumene, lepidolite, petalite and concentrated brines.",
      "Sodium occurs as rock salt, trona, mirabilite, borax and Chile saltpetre; solar evaporation is important.",
      "Potassium occurs as sylvite, sylvinite and carnallite; soluble potassium salts are called potash.",
      "Rb and Cs occur dispersed in lithium/potassium minerals; pollucite is an important Cs mineral.",
      "Francium exists only in minute radioactive quantities."
    ],
    "equations": [],
    "jee": [
      "Chemical similarity does not guarantee co-occurrence because lattice fit depends on ionic radius.",
      "For extraction, eliminate aqueous electrolysis first."
    ],
    "example": [
      "Why are Group 1 metals not extracted by reducing their oxides with carbon?",
      "Their oxides are very stable and the metals are stronger reducing agents than carbon under normal metallurgical conditions. Fused-salt electrolysis or specialised displacement methods are used."
    ],
    "table": [
      [
        "Element",
        "Representative source",
        "JEE significance"
      ],
      [
        "Li",
        "Spodumene, lepidolite, brines",
        "Small-ion anomaly"
      ],
      [
        "Na",
        "Rock salt, seawater, trona",
        "Industrial feedstock"
      ],
      [
        "K",
        "Sylvite, sylvinite, carnallite",
        "Fertiliser chemistry"
      ],
      [
        "Rb/Cs",
        "By-products; pollucite for Cs",
        "Specialised uses"
      ]
    ],
    "paragraphs": [
      "Natural occurrence is controlled not only by abundance but also by ionic size and lattice compatibility. Ions of similar charge may fail to substitute extensively for one another when their radii differ too much. Evaporite deposits concentrate soluble chlorides and sulfates, whereas less soluble carbonates, fluorides and phosphates occur as rocks and ores.",
      "Extraction follows directly from the very negative reduction potentials of the metals. Water is reduced before M+ or M2+ in aqueous electrolysis, and ordinary chemical reductants are generally insufficient. Consequently, fused-salt electrolysis, vapour-phase displacement or specialised metallothermic routes are required."
    ],
    "diagram": null
  },
  {
    "title": "Group 1 Electronic Configuration and the +1 Oxidation State",
    "summary": "Every alkali-metal atom has one electron outside a noble-gas core. The first ionisation enthalpy is low, whereas the second is enormous because a core electron would have to be removed. Hence +1 is overwhelmingly stable.",
    "core": [
      "Configurations are Li [He]2s¹, Na [Ne]3s¹, K [Ar]4s¹, Rb [Kr]5s¹, Cs [Xe]6s¹ and Fr [Rn]7s¹.",
      "Loss of ns¹ gives a compact closed-shell M⁺ ion.",
      "M⁺ ions are diamagnetic; most salts are ionic because the cations have low charge and low electronegativity.",
      "IE₁ decreases down the group because size and shielding increase.",
      "Simple oxidation state does not mean simple chemistry: radical oxygen anions, aggregation and solvation create diversity."
    ],
    "equations": [
      "M(g) → M⁺(g) + e⁻",
      "M⁺(g) → M²⁺(g) + e⁻  (very endothermic)"
    ],
    "jee": [
      "The stable oxidation state follows the large IE discontinuity.",
      "Closed shell does not guarantee a completely ionic Li compound."
    ],
    "example": [
      "Why is Na²⁺ not a normal oxidation state?",
      "Na⁺ has the neon configuration. A second ionisation removes a 2p core electron and costs far more energy than lattice or hydration formation can compensate."
    ],
    "table": null,
    "paragraphs": [
      "The decisive feature is the large discontinuity after removal of the valence s electron or pair. Once the noble-gas core is reached, the next ionisation demands removal of a compact core electron. Lattice and hydration energies cannot normally compensate for this enormous cost, so Group 1 remains +1 and Group 2 remains +2 in ordinary chemistry.",
      "Closed-shell cations have no low-energy d-d transitions. Their compounds are therefore colourless unless colour is produced by the anion, a radical ion, charge transfer, a trapped electron or an impurity. This distinction is important in superoxides, ozonides and F-centre-containing halides."
    ],
    "diagram": null
  },
  {
    "title": "Atomic and Ionic Radii of Alkali Metals",
    "summary": "Alkali-metal atoms are the largest in their periods. Both atomic and ionic radii increase down the group, while each M⁺ ion is much smaller than the parent atom because the outer shell is lost and effective attraction increases.",
    "core": [
      "Metallic radii approximately follow Li 152 < Na 186 < K 227 < Rb 248 < Cs 265 pm.",
      "Six-coordinate ionic radii follow Li⁺ 76 < Na⁺ 102 < K⁺ 138 < Rb⁺ 152 < Cs⁺ 167 pm.",
      "The contraction M → M⁺ controls lattice packing, hydration and transport.",
      "Li⁺ differs sharply from Na⁺ and is unusually strongly hydrated.",
      "Large K⁺/Rb⁺/Cs⁺ stabilise large oxygen anions such as O₂⁻."
    ],
    "equations": [],
    "jee": [
      "Radius-ratio rules are approximate because polarisation and detailed lattice energies also matter.",
      "Use hydrated radius, not bare radius, for mobility."
    ],
    "example": [
      "Which has the larger effective size in water, Li⁺ or Cs⁺?",
      "Li⁺ can have the larger hydrodynamic size because it binds a tight, extensive hydration shell, while Cs⁺ is weakly hydrated."
    ],
    "table": [
      [
        "Property",
        "Li",
        "Na",
        "K",
        "Rb",
        "Cs"
      ],
      [
        "Metallic radius / pm",
        "152",
        "186",
        "227",
        "248",
        "265"
      ],
      [
        "M⁺ radius / pm",
        "76",
        "102",
        "138",
        "152",
        "167"
      ]
    ],
    "paragraphs": [
      "Bare ionic radius and effective radius in solution are not interchangeable. Li+ and Be2+ are small in a crystal but strongly orient and bind surrounding water molecules. The solvated entity therefore moves as a much larger object, explaining why the smallest bare ion need not have the greatest mobility.",
      "Radius also governs polarising power. For equal charge, a smaller cation generates a stronger electric field at the anion and increases covalency. For equal size, a higher charge is even more effective; this is why Be2+ is far more polarising than Li+ and why many beryllium compounds are molecular or polymeric rather than simple ionic solids."
    ],
    "diagram": null
  },
  {
    "title": "Ionisation Enthalpy, Electronegativity and Bond Character in Group 1",
    "summary": "Low IE₁ and low electronegativity make alkali metals highly electropositive. Most compounds are ionic, but small Li⁺ has enough polarising power to induce appreciable covalency, especially with large anions.",
    "core": [
      "IE₁ decreases Li > Na > K > Rb > Cs.",
      "Electronegativity is low and generally decreases down the group.",
      "Fajans' rule: covalency increases with cation charge density and anion polarizability; LiI is therefore much more covalent than LiF.",
      "For a fixed cation, F⁻ < Cl⁻ < Br⁻ < I⁻ in polarizability.",
      "Greater covalency promotes organic-solvent solubility and lower melting points."
    ],
    "equations": [],
    "jee": [
      "Electronegativity difference and lattice enthalpy are not the same quantity.",
      "LiF is strongly ionic yet sparingly soluble because of its very high lattice enthalpy."
    ],
    "example": [
      "Arrange LiF, LiCl, LiBr and LiI in increasing covalent character.",
      "LiF < LiCl < LiBr < LiI, because anion size and polarizability increase from F⁻ to I⁻."
    ],
    "table": [
      [
        "Quantity",
        "Li",
        "Na",
        "K",
        "Rb",
        "Cs"
      ],
      [
        "IE₁ / kJ mol⁻¹",
        "520",
        "496",
        "419",
        "403",
        "376"
      ],
      [
        "Pauling χ (approx.)",
        "1.0",
        "0.9",
        "0.8",
        "0.8",
        "0.7"
      ]
    ],
    "paragraphs": [
      "Ionisation enthalpy is only one term in a real reaction. A metal may have a low gas-phase ionisation enthalpy yet not be the strongest reducing agent in water because atomisation and hydration contributions differ. The correct comparison therefore requires a thermodynamic cycle with phases stated explicitly.",
      "Fajans' rules are best viewed as an electrostatic distortion model. A small, highly charged cation polarises a large, soft anion, shifts electron density toward the cation and creates partial covalent bonding. The model predicts trends but does not replace full lattice-energy, orbital-overlap and structure considerations."
    ],
    "diagram": null
  },
  {
    "title": "Physical Properties of Alkali Metals",
    "summary": "Alkali metals are silvery, soft, low-density metals with unusually low melting and boiling points. These properties follow from weak metallic bonding by one diffuse valence electron per atom.",
    "core": [
      "Softness increases down the group as cohesive energy falls.",
      "Melting points decrease approximately Li 454, Na 371, K 336, Rb 312, Cs 302 K.",
      "Density generally increases, but K is less dense than Na because atomic volume increases disproportionately.",
      "Li, Na and K float on water but react chemically with it.",
      "They conduct heat and electricity well; liquid sodium is an effective heat-transfer medium."
    ],
    "equations": [],
    "jee": [
      "Irregular density or melting-point values must be retained as data.",
      "Reactivity and melting point may correlate with size but are controlled by different energies."
    ],
    "example": [
      "Why is K less dense than Na?",
      "The increase in atomic volume from Na to K is proportionally larger than the increase in atomic mass, so mass per unit volume falls."
    ],
    "table": [
      [
        "Property",
        "Li",
        "Na",
        "K",
        "Rb",
        "Cs"
      ],
      [
        "Density / g cm⁻³",
        "0.53",
        "0.97",
        "0.86",
        "1.53",
        "1.90"
      ],
      [
        "m.p. / K",
        "454",
        "371",
        "336",
        "312",
        "302"
      ]
    ],
    "paragraphs": [
      "Metallic bonding becomes weaker when the valence orbital is diffuse and only a small number of electrons are available for delocalisation. Group 1 therefore has low cohesive energy, low hardness and low melting point. Group 2 supplies two electrons per atom and usually has stronger cohesion, although changes in crystal structure make the numerical trend irregular.",
      "A simple band picture is useful: the closely spaced s-derived levels of a macroscopic crystal broaden into a partly occupied band, allowing conductivity. Increasing atomic size broadens the real-space orbital but reduces the electron-nucleus attraction and generally weakens the cohesive energy per atom."
    ],
    "diagram": null
  },
  {
    "title": "Metal Structures, Hardness and Cohesive Energy",
    "summary": "At ordinary temperature alkali metals commonly adopt body-centred cubic lattices. Their low cohesive energies explain softness and low melting points; cohesive energy is closely related in magnitude to atomisation enthalpy.",
    "core": [
      "BCC coordination number is 8; low-temperature Li can adopt a close-packed modification.",
      "Cohesive energy decreases as atoms enlarge and the ns electron becomes diffuse.",
      "Approximate atomisation enthalpies fall Li 161 > Na 108 > K 90 > Rb 82 > Cs 78 kJ mol⁻¹.",
      "Only one electron per atom contributes strongly to metallic bonding.",
      "Softness, low m.p. and low vaporisation energy are manifestations of weak cohesion."
    ],
    "equations": [
      "M(s) → M(g)  ΔH = atomisation enthalpy",
      "Greater cohesive energy generally means greater hardness and m.p."
    ],
    "jee": [
      "Cohesive energy and atomisation enthalpy use opposite sign conventions in some texts.",
      "Crystal structure alone does not determine bond strength."
    ],
    "example": [
      "Why is Li harder than Cs?",
      "Li atoms are smaller and their valence-electron density overlaps more strongly; Cs has a diffuse 6s electron and larger internuclear separation."
    ],
    "table": null,
    "paragraphs": [
      "Metallic bonding becomes weaker when the valence orbital is diffuse and only a small number of electrons are available for delocalisation. Group 1 therefore has low cohesive energy, low hardness and low melting point. Group 2 supplies two electrons per atom and usually has stronger cohesion, although changes in crystal structure make the numerical trend irregular.",
      "A simple band picture is useful: the closely spaced s-derived levels of a macroscopic crystal broaden into a partly occupied band, allowing conductivity. Increasing atomic size broadens the real-space orbital but reduces the electron-nucleus attraction and generally weakens the cohesive energy per atom."
    ],
    "diagram": null
  },
  {
    "title": "Flame Colours, Spectra and Colour of Compounds",
    "summary": "Alkali-metal atoms emit characteristic visible light because flame energy can excite their outer electrons. Their ordinary salts are colourless because M⁺ ions are closed-shell.",
    "core": [
      "Li gives crimson red, Na intense yellow, K violet, Rb red-violet and Cs blue-violet.",
      "Representative wavelengths are Li 670.8, Na 589.2, K 766.5, Rb about 780 and Cs about 455.5 nm.",
      "Trace Na can mask other colours; cobalt glass helps observe K.",
      "Flame photometry measures emission intensity; atomic absorption measures ground-state absorption.",
      "Superoxides, ozonides and F-centres are important coloured exceptions."
    ],
    "equations": [],
    "jee": [
      "A flame test requires atomisation and volatilisation, not merely the presence of an aqueous ion.",
      "Colour of KO₂ arises from O₂⁻, not K⁺."
    ],
    "example": [
      "Why do Be and Mg show no useful flame colour while Na does?",
      "Their valence electrons are too strongly held for efficient visible excitation in an ordinary flame, whereas Na has an intense low-energy 3s→3p emission."
    ],
    "table": [
      [
        "Metal",
        "Flame colour",
        "Approx. λ / nm"
      ],
      [
        "Li",
        "Crimson red",
        "670.8"
      ],
      [
        "Na",
        "Yellow",
        "589.2"
      ],
      [
        "K",
        "Violet",
        "766.5"
      ],
      [
        "Rb",
        "Red-violet",
        "780"
      ],
      [
        "Cs",
        "Blue-violet",
        "455.5"
      ]
    ],
    "paragraphs": [
      "A flame test is an emission experiment, not a colour of the ground-state ion. Thermal energy populates an excited atomic state; return to lower states emits characteristic wavelengths. Sodium emission is exceptionally intense, so traces of sodium can mask weaker potassium or lithium colours.",
      "Colour in an alkali-metal compound must be assigned to the actual chromophore. O2- and O3- are radical anions, F-centres contain trapped electrons, and transition-metal impurities introduce their own electronic transitions. The closed-shell M+ or M2+ cation is usually not the origin."
    ],
    "diagram": null
  },
  {
    "title": "Born-Haber Cycle and Lattice-Enthalpy Reasoning",
    "summary": "A Born-Haber cycle resolves ionic-solid formation into atomisation, bond dissociation, ionisation, electron gain and lattice formation. It explains thermodynamic stability and allows unknown lattice or electron-gain terms to be estimated.",
    "core": [
      "For NaCl the elements are converted into gaseous atoms, then ions, then the crystal.",
      "Sublimation, half Cl-Cl dissociation and Na ionisation are endothermic.",
      "Electron gain by Cl and lattice formation are exothermic.",
      "Hess's law makes the long route equal to the measured enthalpy of formation.",
      "Smaller ions and higher charges make lattice formation more exothermic; deviations from ideal models can signal covalency."
    ],
    "equations": [
      "ΔHf = ΔHatom + ½D(X₂) + IE₁ + EA + U_latt",
      "Qualitatively,",
      "U",
      "increases with",
      "z⁺z⁻",
      "and decreases with r⁺+r⁻"
    ],
    "jee": [
      "Keep lattice-formation and lattice-dissociation sign conventions consistent.",
      "Born-Haber cycles explain feasibility, not rate."
    ],
    "example": [
      "Why can MgCl₂ form despite the large IE₁+IE₂ of Mg?",
      "The high-charge Mg²⁺-Cl⁻ lattice releases substantial energy, and hydration is also strong; these terms compensate ionisation and atomisation costs."
    ],
    "table": null,
    "paragraphs": [
      "The Born-Haber cycle is Hess's law written for ion formation and crystal assembly. It separates measurable and non-measurable contributions and forces sign discipline. A highly exothermic lattice enthalpy can compensate for endothermic atomisation and ionisation, while a favourable hydration enthalpy can reverse an apparently simple gas-phase order.",
      "For comparisons, the magnitude of lattice enthalpy generally rises with increasing charge product and decreasing interionic distance. This electrostatic rule is powerful but deviations reveal covalency, unusual structures or incorrect radius assumptions. Solubility requires the additional entropy and hydration terms, so a larger lattice enthalpy does not by itself prove insolubility."
    ],
    "diagram": null
  },
  {
    "title": "Masterclass C - Quantitative Born-Haber Analysis and the Limits of the Ionic Model",
    "summary": "A Born-Haber cycle converts formation of an ionic solid into atomisation, ionisation, anion formation and lattice assembly. It is both a calculation device and a test of bonding assumptions.",
    "paragraphs": [
      "For NaCl(s), one route is direct formation from Na(s) and 1/2Cl2(g). The indirect route sublimes Na, ionises Na(g), dissociates half a mole of Cl2, attaches an electron to Cl(g), and then assembles Na+(g) and Cl-(g) into the crystal. Hess's law requires both paths to have the same total enthalpy.",
      "A consistent sign convention is essential. Atomisation, bond dissociation and ionisation are endothermic. First electron affinity of chlorine is exothermic when written Cl(g) + e- -> Cl-(g). Lattice formation is strongly exothermic; lattice dissociation has the same magnitude but the opposite sign. Many apparent errors are merely sign-convention errors.",
      "The cycle also helps evaluate covalency. If the lattice enthalpy inferred from thermochemical data differs markedly from a purely electrostatic Born-Lande or Kapustinskii estimate, the hard-sphere ionic model may be inadequate. Polarisation, short-range repulsion and partial covalency can then be important.",
      "For Group 2 halides the ionisation cost includes IE1 + IE2, but the lattice enthalpy is much more exothermic because the charge product is doubled and the cation is smaller. This compensation explains why stable M2+ ionic compounds form despite the large second ionisation enthalpy.",
      "Born-Haber reasoning should not be used alone for solubility. Dissolution replaces crystal lattice interactions with ion-solvent interactions and includes an entropy change. A compound may possess a large lattice enthalpy and still dissolve if hydration and entropy compensate sufficiently."
    ],
    "core": [
      "Hess cycle: ΔHf = sum of atomisation + ionisation + electron-affinity + lattice-formation terms",
      "State the lattice convention before calculation",
      "Large deviations from electrostatic estimates can signal covalency"
    ],
    "equations": [],
    "jee": [],
    "example": [
      "Why can MgCl2 be stable despite IE1 + IE2 being much larger than IE1 of Na?",
      "Mg2+ and Cl- form a much more strongly bound lattice than Na+ and Cl-. The extra lattice stabilisation compensates for the second ionisation cost."
    ],
    "table": null,
    "diagram": "born-haber"
  },
  {
    "title": "Standard Potentials and Reducing Strength of Alkali Metals",
    "summary": "Aqueous reducing power depends on the complete process M(s)→M⁺(aq)+e⁻. Lithium has the most negative standard reduction potential because hydration of small Li⁺ is exceptionally exothermic.",
    "core": [
      "Relevant steps are atomisation, ionisation and hydration.",
      "Atomisation/ionisation absorb energy; hydration releases it.",
      "Approximate E°: Li -3.04, Na -2.71, K -2.93, Rb -2.93, Cs -2.93 V.",
      "Li is thermodynamically strongest in water but reacts less violently than K/Cs because kinetics and phase behaviour differ.",
      "In the gas phase, electron loss follows IE₁ and favours Cs."
    ],
    "equations": [
      "M(s) → M(g) → M⁺(g)+e⁻ → M⁺(aq)+e⁻",
      "More negative E°(M⁺/M) means stronger aqueous reducing metal"
    ],
    "jee": [
      "Do not equate water-reaction violence with E°.",
      "E° values are reduction potentials; a very negative value means the reverse oxidation is favourable."
    ],
    "example": [
      "Reconcile Cs having lowest IE₁ with Li having most negative E°.",
      "Cs loses a gaseous electron most easily, but Li⁺ hydration releases far more energy, making overall aqueous oxidation of Li exceptionally favourable."
    ],
    "table": null,
    "paragraphs": [
      "A standard reduction potential for M+/M measures the free-energy change for the complete aqueous half-cell process. It includes atomisation of the solid, ionisation of the gaseous atom and hydration of the gaseous cation. Lithium's exceptionally favourable hydration term makes its potential very negative even though its first ionisation enthalpy is the highest in Group 1.",
      "Reaction violence is kinetic. Sodium or potassium may react faster with water because melting, surface renewal and heat transfer are more favourable, while lithium can still be the stronger thermodynamic reducing agent in aqueous solution."
    ],
    "diagram": null
  },
  {
    "title": "General Chemical Reactions of Alkali Metals",
    "summary": "Alkali metals react readily with electronegative elements and proton donors. Rate usually increases down the group, while product identity depends on anion stability, cation size and conditions.",
    "core": [
      "With water: 2M+2H₂O→2MOH+H₂; violence generally increases down the group.",
      "With halogens: 2M+X₂→2MX; Li halides show greatest covalency.",
      "With hydrogen they form saline MH at elevated temperature.",
      "With alcohols they form alkoxides and H₂.",
      "With NH₃, sulfur, phosphorus and carbon they form amides, sulfides/polysulfides, phosphides and specialised carbon compounds."
    ],
    "equations": [
      "2Na + 2H₂O → 2NaOH + H₂↑",
      "2K + Cl₂ → 2KCl",
      "2Li + H₂ → 2LiH"
    ],
    "jee": [
      "State observations as well as products.",
      "Lithium alone forms Li₃N readily by direct reaction with N₂."
    ],
    "example": [
      "Why does K often ignite on water?",
      "The reaction is strongly exothermic; low-melting K forms a mobile molten globule and releases H₂ rapidly, so the heat can ignite metal or hydrogen."
    ],
    "table": null,
    "paragraphs": [
      "This topic should be interpreted through size, charge density, lattice enthalpy, hydration, polarisation and kinetic accessibility. The observed behaviour is the net result of these factors rather than a single isolated trend.",
      "For JEE Advanced, connect every reaction to structure and energetics, and retain the important exceptions as consequences of the same framework."
    ],
    "diagram": null
  },
  {
    "title": "Normal Oxides of Group 1",
    "summary": "Normal oxides contain O²⁻. Lithium preferentially gives Li₂O on combustion; pure Na₂O and heavier normal oxides require controlled preparation because larger cations favour peroxide or superoxide.",
    "core": [
      "Li₂O has an antifluorite-type ionic arrangement.",
      "Na₂O can be made by controlled oxidation or reduction of sodium peroxide/nitrate/nitrite with Na.",
      "M₂O reacts vigorously with water to give 2MOH.",
      "Normal oxides neutralise acids and acidic oxides.",
      "O²⁻ is so basic that it cannot persist in water."
    ],
    "equations": [
      "4Li + O₂ → 2Li₂O",
      "Na₂O + H₂O → 2NaOH",
      "M₂O + CO₂ → M₂CO₃"
    ],
    "jee": [
      "Combustion product selection is a lattice-stability problem.",
      "Metal remains +1; oxygen is -2 in normal oxide."
    ],
    "example": [
      "Oxidation state of oxygen in Li₂O?",
      "-2, because 2(+1)+x=0."
    ],
    "table": null,
    "paragraphs": [
      "The oxygen fragment should be analysed independently by molecular-orbital theory. Adding electrons to O2 fills antibonding pi* orbitals: O2 has bond order 2, O2- has 1.5 and O2^2- has 1. The number of unpaired electrons simultaneously predicts magnetism, so superoxide is paramagnetic whereas peroxide is diamagnetic.",
      "Cation size controls which oxygen anion is stabilised in the solid. A small cation provides a compact lattice well matched to O2-, whereas large cations reduce the lattice penalty for accommodating the larger, more diffuse O2- radical. Product formation is therefore a lattice-stabilisation problem rather than a change in the oxidation state of the metal."
    ],
    "diagram": null
  },
  {
    "title": "Peroxides: Structure, Preparation and Reactions",
    "summary": "Peroxides contain the O-O bonded dianion O₂²⁻. Sodium readily forms Na₂O₂; it is an oxidant, oxygen source and precursor to H₂O₂ under cold conditions.",
    "core": [
      "MO theory gives bond order 1 and all electrons paired, so O₂²⁻ is diamagnetic.",
      "Na₂O₂ is prepared in dry, CO₂-free oxygen.",
      "Ice-cold water or acid can yield H₂O₂; warmer conditions promote O₂ evolution.",
      "Na₂O₂ absorbs CO₂ while releasing O₂.",
      "It oxidises CO, SO₂ and other reducing species."
    ],
    "equations": [
      "2Na + O₂ → Na₂O₂",
      "Na₂O₂ + 2H₂O → 2NaOH + H₂O₂",
      "2Na₂O₂ + 2CO₂ → 2Na₂CO₃ + O₂"
    ],
    "jee": [
      "Peroxide oxygen has oxidation state -1.",
      "Diamagnetism distinguishes peroxide from superoxide."
    ],
    "example": [
      "Bond-order sequence for O₂⁺, O₂, O₂⁻, O₂²⁻?",
      "2.5 > 2 > 1.5 > 1; adding electrons to antibonding π* orbitals lowers bond order."
    ],
    "table": null,
    "paragraphs": [
      "The oxygen fragment should be analysed independently by molecular-orbital theory. Adding electrons to O2 fills antibonding pi* orbitals: O2 has bond order 2, O2- has 1.5 and O2^2- has 1. The number of unpaired electrons simultaneously predicts magnetism, so superoxide is paramagnetic whereas peroxide is diamagnetic.",
      "Cation size controls which oxygen anion is stabilised in the solid. A small cation provides a compact lattice well matched to O2-, whereas large cations reduce the lattice penalty for accommodating the larger, more diffuse O2- radical. Product formation is therefore a lattice-stabilisation problem rather than a change in the oxidation state of the metal."
    ],
    "diagram": null
  },
  {
    "title": "Superoxides and Ozonides",
    "summary": "Superoxides contain O₂⁻ and are stabilised by large, weakly polarising K⁺, Rb⁺ and Cs⁺. Their odd electron controls colour and magnetism.",
    "core": [
      "O₂⁻ has bond order 1.5 and one unpaired electron, so it is paramagnetic.",
      "KO₂, RbO₂ and CsO₂ are yellow-orange oxygen-rich solids.",
      "Hydrolysis gives hydroxide, H₂O₂ and O₂.",
      "KO₂ consumes CO₂ and regenerates oxygen in breathing apparatus.",
      "Ozonides contain bent O₃⁻ and are prepared under dry, low-temperature ozone conditions."
    ],
    "equations": [
      "K + O₂ → KO₂",
      "2KO₂ + 2H₂O → 2KOH + H₂O₂ + O₂",
      "4KO₂ + 2CO₂ → 2K₂CO₃ + 3O₂"
    ],
    "jee": [
      "K remains +1 in KO₂.",
      "Large cations stabilise large anions by reducing lattice strain, not by stronger polarisation."
    ],
    "example": [
      "Why is KO₂ paramagnetic but K₂O₂ diamagnetic?",
      "KO₂ contains O₂⁻ with one unpaired π* electron; O₂²⁻ in K₂O₂ has paired π* electrons."
    ],
    "table": null,
    "paragraphs": [
      "The oxygen fragment should be analysed independently by molecular-orbital theory. Adding electrons to O2 fills antibonding pi* orbitals: O2 has bond order 2, O2- has 1.5 and O2^2- has 1. The number of unpaired electrons simultaneously predicts magnetism, so superoxide is paramagnetic whereas peroxide is diamagnetic.",
      "Cation size controls which oxygen anion is stabilised in the solid. A small cation provides a compact lattice well matched to O2-, whereas large cations reduce the lattice penalty for accommodating the larger, more diffuse O2- radical. Product formation is therefore a lattice-stabilisation problem rather than a change in the oxidation state of the metal."
    ],
    "diagram": null
  },
  {
    "title": "Masterclass B - Molecular-Orbital Theory of O2, O2-, O2^2-, O2+ and O2^2+",
    "summary": "The oxide/peroxide/superoxide distinction is an electron-counting problem on the oxygen fragment. MO theory simultaneously predicts bond order, O-O length, bond strength and magnetism.",
    "paragraphs": [
      "For oxygen and fluorine, the useful valence-level order is σ2s < σ*2s < σ2p_z < π2p_x = π2p_y < π*2p_x = π*2p_y < σ*2p_z. The 2s pair cancels in bond order because both σ2s and σ*2s are filled, so changes among the common oxygen species occur mainly in the antibonding π*2p orbitals.",
      "Neutral O2 has two electrons occupying separate degenerate π* orbitals according to Hund's rule. It therefore has two unpaired electrons and bond order 2. Addition of one electron gives O2-, forcing one π* orbital to contain a pair while the other remains singly occupied. Superoxide consequently has one unpaired electron and bond order 1.5.",
      "Addition of a second electron gives O2^2-. Both π* orbitals are now fully occupied; all electrons are paired and the bond order is 1. Peroxide therefore has the longest and weakest O-O bond among O2, O2- and O2^2-. Removal of electrons from π* has the opposite effect: O2+ has bond order 2.5 and O2^2+ has bond order 3.",
      "The metal cation does not change oxidation state across M2O, M2O2 and MO2 for Group 1; it remains +1. The different stoichiometries arise because oxygen has -2 in oxide, an average -1 in peroxide and an average -1/2 in superoxide. Large K+, Rb+ and Cs+ stabilise the large, diffuse superoxide anion more effectively in the lattice.",
      "Ozonide, O3-, is not analysed by the same diatomic diagram. It is a bent, delocalised radical anion with an unpaired electron. Its salts are highly reactive and are stabilised most effectively by large cations at low temperature."
    ],
    "core": [
      "Bond order = (bonding electrons - antibonding electrons)/2",
      "Filling π* lowers bond order",
      "Unpaired π* electrons produce paramagnetism"
    ],
    "equations": [
      "O2 + e- -> O2-",
      "O2- + e- -> O2^2-"
    ],
    "jee": [
      "Peroxide is diamagnetic; superoxide is paramagnetic.",
      "Bond length: O2^2- > O2- > O2 > O2+ > O2^2+."
    ],
    "example": [
      "Arrange O2, O2-, O2^2- in increasing bond strength.",
      "O2^2- < O2- < O2 because their bond orders are 1, 1.5 and 2 respectively."
    ],
    "table": [
      [
        "Species",
        "Valence e-",
        "Bond order",
        "Unpaired e-",
        "Magnetism"
      ],
      [
        "O2^2+",
        "10",
        "3",
        "0",
        "Diamagnetic"
      ],
      [
        "O2+",
        "11",
        "2.5",
        "1",
        "Paramagnetic"
      ],
      [
        "O2",
        "12",
        "2",
        "2",
        "Paramagnetic"
      ],
      [
        "O2-",
        "13",
        "1.5",
        "1",
        "Paramagnetic"
      ],
      [
        "O2^2-",
        "14",
        "1",
        "0",
        "Diamagnetic"
      ]
    ],
    "diagram": "mo-oxygen"
  },
  {
    "title": "Alkali-Metal Hydroxides",
    "summary": "Group 1 hydroxides are strongly basic, generally highly soluble white solids. Basicity, solubility and thermal stability generally increase down the group, while LiOH is the main anomaly.",
    "core": [
      "They form from metals/oxides and industrial electrolysis or causticisation.",
      "Dissolution is strongly exothermic because ions hydrate.",
      "2LiOH→Li₂O+H₂O on heating; heavier hydroxides are more stable.",
      "They absorb CO₂ to give carbonate and, with excess CO₂, hydrogen carbonate in solution.",
      "Molten hydroxides attack silica, glass and amphoteric oxides."
    ],
    "equations": [
      "2M + 2H₂O → 2MOH + H₂",
      "2LiOH → Li₂O + H₂O",
      "2NaOH + CO₂ → Na₂CO₃ + H₂O"
    ],
    "jee": [
      "Basic strength and solubility are related but distinct.",
      "Limited and excess CO₂ can give different products."
    ],
    "example": [
      "Why is LiOH less thermally stable than KOH?",
      "Small Li⁺ strongly polarises OH⁻ and stabilises compact Li₂O, facilitating dehydration."
    ],
    "table": null,
    "paragraphs": [
      "Basicity and solubility are distinct. Basicity concerns the tendency of dissolved hydroxide to furnish OH-, whereas solubility depends on the balance between lattice separation and hydration. In Group 2, lattice enthalpy falls rapidly down the group, so hydroxide solubility rises even though hydration becomes less exothermic.",
      "Be(OH)2 is amphoteric because the small Be2+ centre strongly polarises Be-O bonds and forms stable hydroxo complexes in excess base. The heavier hydroxides are increasingly ionic and behave as ordinary bases."
    ],
    "diagram": null
  },
  {
    "title": "Sulfides and Polysulfides of Group 1",
    "summary": "Alkali metals form ionic M₂S and coloured M₂Sₙ. Polysulfide ions contain zig-zag sulfur chains and show variable average oxidation states.",
    "core": [
      "S²⁻ hydrolyses strongly, so sulfide solutions are alkaline.",
      "Sulfur dissolves in M₂S to form S₂²⁻, S₃²⁻ and higher chain anions.",
      "Average sulfur oxidation state in Sₙ²⁻ is -2/n, but atoms need not be equivalent.",
      "Acidification releases H₂S and sulfur.",
      "Oxidation can produce thiosulfate, sulfite or sulfate depending on conditions."
    ],
    "equations": [
      "2Na + S → Na₂S",
      "Na₂S + (n-1)S → Na₂Sₙ",
      "S²⁻ + H₂O ⇌ HS⁻ + OH⁻"
    ],
    "jee": [
      "Average oxidation state is bookkeeping, not a local fractional charge.",
      "Polysulfide composition depends on solvent and sulfur concentration."
    ],
    "example": [
      "Average oxidation state of S in S₄²⁻?",
      "-1/2, since 4x=-2."
    ],
    "table": null,
    "paragraphs": [
      "Polysulfides contain S-S bonded chains or rings carrying an overall 2- charge. Their colour and redox chemistry arise from delocalisation over the sulfur framework. The formula M2Sn does not imply a single isolated S_n unit in every solid; the actual structure may be polymeric.",
      "Hydrolysis of sulfide is important because S2- is a very strong base in water. Stepwise protonation forms HS- and H2S, so the observed species depend strongly on pH."
    ],
    "diagram": null
  },
  {
    "title": "Carbonates and Hydrogen Carbonates of Group 1",
    "summary": "Most alkali carbonates are soluble and thermally stable. Li₂CO₃ is sparingly soluble and decomposes; LiHCO₃ exists only in solution, whereas NaHCO₃ and heavier hydrogen carbonates are isolable.",
    "core": [
      "CO₃²⁻ hydrolysis makes carbonate solutions alkaline.",
      "Thermal stability increases as cation polarising power decreases.",
      "Li₂CO₃→Li₂O+CO₂ because Li⁺ distorts CO₃²⁻ and stabilises Li₂O.",
      "Hydrogen carbonates decompose to carbonate, CO₂ and H₂O.",
      "Low NaHCO₃ solubility in ammoniated brine enables the Solvay process; KHCO₃ is too soluble."
    ],
    "equations": [
      "Li₂CO₃ → Li₂O + CO₂",
      "2NaHCO₃ → Na₂CO₃ + CO₂ + H₂O",
      "CO₃²⁻ + H₂O ⇌ HCO₃⁻ + OH⁻"
    ],
    "jee": [
      "Thermal stability and solubility require separate explanations.",
      "Both lattice and hydration terms control solubility."
    ],
    "example": [
      "Why is solid LiHCO₃ not isolated?",
      "Small Li⁺ strongly polarises HCO₃⁻ and the solid-state balance favours Li₂CO₃, CO₂ and H₂O."
    ],
    "table": null,
    "paragraphs": [
      "Thermal decomposition of an oxosalt is favoured when the cation strongly polarises the polyatomic anion and when gaseous products provide a large entropy gain. Small Li+ and Be2+ therefore destabilise carbonate and nitrate ions more effectively than their heavier congeners.",
      "Solubility cannot be inferred from charge alone. For a series with the same anion, hydration becomes less favourable down the group, while lattice enthalpy also changes. The observed trend identifies which term changes more strongly; Group 2 hydroxides and sulfates provide classic opposite examples."
    ],
    "diagram": null
  },
  {
    "title": "Nitrates, Nitrites and Sulfates of Group 1",
    "summary": "Alkali nitrates are soluble oxidising salts. LiNO₃ gives oxide, NO₂ and O₂ on heating; NaNO₃ through CsNO₃ usually give nitrites and O₂. Sulfates are mostly stable, with useful hydrate behaviour.",
    "core": [
      "2MNO₃→2MNO₂+O₂ for Na-K-Rb-Cs.",
      "4LiNO₃→2Li₂O+4NO₂+O₂, resembling Group 2.",
      "Nitrites can oxidise or reduce because N is +3.",
      "Acid sulfates can form pyrosulfates on heating.",
      "Glauber's salt Na₂SO₄·10H₂O shows a transition near 32.4 °C."
    ],
    "equations": [
      "2NaNO₃ → 2NaNO₂ + O₂",
      "4LiNO₃ → 2Li₂O + 4NO₂ + O₂",
      "2NaHSO₄ → Na₂S₂O₇ + H₂O"
    ],
    "jee": [
      "Nitrate products diagnose polarising power.",
      "Nitrite redox role depends on reaction conditions."
    ],
    "example": [
      "Which nitrate gives brown gas on heating, LiNO₃ or KNO₃?",
      "LiNO₃ gives brown NO₂; KNO₃ mainly gives KNO₂ and colourless O₂."
    ],
    "table": null,
    "paragraphs": [
      "Thermal decomposition of an oxosalt is favoured when the cation strongly polarises the polyatomic anion and when gaseous products provide a large entropy gain. Small Li+ and Be2+ therefore destabilise carbonate and nitrate ions more effectively than their heavier congeners.",
      "Solubility cannot be inferred from charge alone. For a series with the same anion, hydration becomes less favourable down the group, while lattice enthalpy also changes. The observed trend identifies which term changes more strongly; Group 2 hydroxides and sulfates provide classic opposite examples."
    ],
    "diagram": null
  },
  {
    "title": "Halides and Polyhalides of Group 1",
    "summary": "Alkali halides are model ionic solids, but structure, solubility and covalency change strongly with ion size. Lithium halides deviate most from ideal ionic behaviour.",
    "core": [
      "NaCl-type lattices are 6:6 coordinated; CsCl-type lattices are 8:8.",
      "LiF is sparingly soluble because of very high lattice enthalpy.",
      "LiCl, LiBr and LiI have increasing covalency and organic-solvent solubility.",
      "Melting points generally fall F→I for a fixed cation.",
      "Large cations stabilise I₃⁻ and higher polyhalides through delocalised bonding."
    ],
    "equations": [
      "2M + X₂ → 2MX",
      "I⁻ + I₂ ⇌ I₃⁻"
    ],
    "jee": [
      "Radius ratio is useful but approximate.",
      "The least soluble salt cannot be predicted from hydration alone."
    ],
    "example": [
      "Why is LiI more organic-soluble than LiF?",
      "I⁻ is much more polarizable, so LiI has greater covalent character; LiF retains a very strong ionic lattice."
    ],
    "table": null,
    "paragraphs": [
      "Halide structure is governed by size ratio, polarisation and coordination requirements. NaCl and CsCl lattices are limiting models with coordination numbers 6 and 8, but radius-ratio rules are approximate because ions are compressible and bonding is not perfectly hard-sphere ionic.",
      "Hydrated chlorides of Be and Mg cannot be dehydrated simply by strong heating because the highly polarising cation weakens O-H bonds in coordinated water. Hydrolysis then produces hydroxychloride or oxide and HCl. An ammonium-chloride double salt or a chlorinating atmosphere is used to suppress this pathway."
    ],
    "diagram": null
  },
  {
    "title": "Saline Hydrides of Alkali Metals",
    "summary": "Alkali-metal hydrides MH are ionic solids containing H⁻. They are very strong bases and reducing agents and react violently with protic substances.",
    "core": [
      "They are prepared by direct combination with H₂ at elevated temperature.",
      "H⁻ is isoelectronic with He and larger than Li⁺ because it has only one proton attracting two electrons.",
      "Hydrolysis is quantitative and liberates H₂.",
      "Hydrides are precursors to complex hydrides such as LiAlH₄ and NaBH₄.",
      "All must be protected from moisture."
    ],
    "equations": [
      "2M + H₂ → 2MH",
      "MH + H₂O → MOH + H₂"
    ],
    "jee": [
      "Hydrogen is -1 in saline hydrides and +1 in water.",
      "H⁻ is larger than Li⁺ despite equal electron count."
    ],
    "example": [
      "Which is larger, H⁻ or Li⁺?",
      "H⁻, because its two electrons are attracted by one proton rather than three."
    ],
    "table": null,
    "paragraphs": [
      "Saline hydrides contain H- and are strong bases because the hydride ion readily accepts a proton to form H2. Their reactions with water are therefore acid-base reactions accompanied by gas evolution. In contrast, BeH2 is electron deficient and uses bridging 3-centre-2-electron bonds rather than an ionic H- lattice.",
      "Complex hydrides such as BH4- and AlH4- distribute electron density over several E-H bonds and act as hydride-transfer reagents. Their practical reducing behaviour is controlled by solvent, counter-cation and accessibility of the substrate."
    ],
    "diagram": null
  },
  {
    "title": "Solubility, Hydration and Ionic Mobility in Group 1",
    "summary": "Dissolution is determined by the cost of separating lattice ions and the energy released by hydration. Since both terms vary with ion size, solubility orders are rarely explained by one factor.",
    "core": [
      "Hydration magnitude decreases Li⁺ > Na⁺ > K⁺ > Rb⁺ > Cs⁺.",
      "Li⁺ frequently forms hydrated salts and has a large hydrodynamic radius.",
      "Aqueous mobility generally increases Li⁺→Cs⁺ because hydration weakens.",
      "Small hard anions can create very high lattice energies, making LiF and Li₂CO₃ sparingly soluble.",
      "Entropy and crystal hydration may modify purely enthalpic predictions."
    ],
    "equations": [],
    "jee": [
      "A small bare ion can move slowly because it drags a large solvent shell.",
      "Solubility is a free-energy property."
    ],
    "example": [
      "Why can Cs⁺ move faster than Li⁺ in water?",
      "Cs⁺ is weakly hydrated and travels with a smaller solvent envelope; Li⁺ carries a tight hydration shell."
    ],
    "table": [
      [
        "Ion",
        "Li⁺",
        "Na⁺",
        "K⁺",
        "Rb⁺",
        "Cs⁺"
      ],
      [
        "ΔHhyd / kJ mol⁻¹",
        "-506",
        "-406",
        "-330",
        "-310",
        "-276"
      ],
      [
        "Hydration",
        "very high",
        "high",
        "moderate",
        "lower",
        "lowest"
      ]
    ],
    "paragraphs": [
      "Dissolution may be written as lattice separation followed by hydration of the separated ions. The enthalpy of solution is the algebraic sum of these large opposing terms, so even a small experimental value can result from cancellation. Entropy and crystal defects then influence the final free energy.",
      "Ionic mobility is a transport property. A strongly hydrated ion drags a larger solvent shell and experiences greater friction, so Li+ can move more slowly than K+ or Cs+ despite having the smallest crystallographic radius."
    ],
    "diagram": null
  },
  {
    "title": "Masterclass D - Solubility: Lattice Enthalpy, Hydration Enthalpy, Entropy and Ion Size",
    "summary": "Solubility trends in the s-block are often the result of two large terms changing in opposite directions. The observed order reveals which term changes faster.",
    "paragraphs": [
      "Imagine dissolution in two stages: separate the ionic solid into gaseous ions, then hydrate those ions. The first step is endothermic and related to lattice dissociation; the second is exothermic. The enthalpy of solution is their algebraic sum. Because both terms are large, a modest change in ionic size can reverse the trend.",
      "For Group 2 hydroxides, the OH- ion is relatively small. Increasing cation size weakens the lattice substantially, while the decrease in cation hydration is not enough to offset that weakening. Solubility therefore increases from Mg(OH)2 toward Ba(OH)2. Be(OH)2 is additionally complicated by covalency and amphoterism.",
      "For Group 2 sulfates, the large sulfate ion makes the lattice enthalpy less sensitive to cation size, whereas hydration of M2+ decreases strongly down the group. Solubility therefore falls sharply, reaching very low values for BaSO4. Carbonates show a broadly similar decrease in solubility.",
      "For Group 1 fluorides, LiF is sparingly soluble because its small ions produce a particularly strong lattice. As the cation grows, the lattice weakens enough for solubility to rise. Lithium salts with large, polarisable anions can instead show enhanced covalency and unusual organic-solvent solubility.",
      "Entropy matters whenever the number and freedom of particles change. Hydration can order water molecules around a small highly charged ion, reducing entropy, while lattice defects and polymorphism can alter the solid-state term. Thus, lattice-versus-hydration is the first model, not the entire free-energy calculation."
    ],
    "core": [
      "ΔGsol = ΔHlattice,diss + ΔHhydration - TΔSsol",
      "Group 2 hydroxides: solubility generally increases down the group",
      "Group 2 sulfates and carbonates: solubility generally decreases down the group"
    ],
    "equations": [],
    "jee": [],
    "example": [
      "Why is BaSO4 much less soluble than MgSO4?",
      "Hydration of Mg2+ is far more exothermic. The sulfate lattice does not weaken enough down the group to compensate for the loss of hydration, so BaSO4 is much less soluble."
    ],
    "table": [
      [
        "Series",
        "Trend down group",
        "Dominant explanation"
      ],
      [
        "M(OH)2",
        "Solubility increases",
        "Lattice weakening dominates"
      ],
      [
        "MSO4",
        "Solubility decreases",
        "Loss of hydration dominates"
      ],
      [
        "MCO3",
        "Solubility decreases",
        "Loss of hydration and strong lattice"
      ],
      [
        "Group 1 MF",
        "Generally increases",
        "LiF lattice exceptionally strong"
      ]
    ],
    "diagram": "hydration-lattice"
  },
  {
    "title": "Alkali Metals in Liquid Ammonia",
    "summary": "Pure liquid ammonia dissolves alkali metals to give solvated cations and solvated electrons. These solutions bridge ordinary ionic solutions and metallic conduction and are powerful reducing media.",
    "core": [
      "Dilute solutions are deep blue because solvated electrons absorb visible light.",
      "Dilute solutions are paramagnetic and highly conducting.",
      "Concentrated solutions become copper-bronze with metallic lustre and changed magnetic behaviour.",
      "Impurities such as Fe catalyse slow formation of metal amide and H₂.",
      "The medium permits reductions, including aromatic-ring reduction, that cannot survive in water."
    ],
    "equations": [
      "M + (x+y)NH₃ → [M(NH₃)ₓ]⁺ + [e(NH₃)ᵧ]⁻",
      "2M + 2NH₃ → 2MNH₂ + H₂"
    ],
    "jee": [
      "Blue colour and paramagnetism belong to solvated electrons.",
      "Bronze solutions represent a distinct concentrated electronic state."
    ],
    "example": [
      "Why can Na/NH₃ reduce benzene whereas Na/H₂O cannot?",
      "Water immediately consumes sodium to form H₂; ammonia is less acidic and stabilises solvated electrons long enough for electron transfer."
    ],
    "table": null,
    "paragraphs": [
      "The blue species is not a simple metal atom. The metal transfers an electron to the solvent, producing an ammoniated cation and an electron localised in a solvent cavity. The cavity stabilises the diffuse electron by orienting the positive ends of NH3 dipoles toward it.",
      "Dilute solutions contain largely independent solvated electrons and are paramagnetic. At higher concentration, electron-electron interactions, spin pairing and metal-like clusters produce a bronze, highly conducting phase. This continuous evolution explains why the same system can display both solution and metallic properties."
    ],
    "diagram": null
  },
  {
    "title": "Masterclass E - Solvated Electrons and the Metal-Ammonia Continuum",
    "summary": "Alkali metals dissolve in rigorously dry liquid ammonia by ionising into solvated cations and solvated electrons. Concentration controls colour, magnetism and conductivity.",
    "paragraphs": [
      "The solvent ammonia has a molecular dipole and can stabilise both positive ions and diffuse electrons. Around the electron, NH3 molecules orient their partially positive hydrogen ends inward, creating a solvent cavity. The electron occupies a diffuse state rather than a conventional atomic orbital on a single metal centre.",
      "At low concentration the solution is deep blue because the solvated electron absorbs visible light. Independent solvated electrons give paramagnetism. Electrical conduction is unusually high because electrons, not only heavy ions, carry charge through the liquid.",
      "As the concentration increases, the average distance between electron cavities falls. Spin pairing, overlap of electron states and association with metal-rich clusters become important. The colour changes to bronze and the conductivity approaches metallic behaviour. The concentrated phase is often described as a liquid metal-ammonia solution rather than an ordinary electrolyte.",
      "Impurities or catalysts accelerate conversion to amide and hydrogen. In the absence of such catalysts, evaporation of ammonia can recover the metal. The solutions are powerful reducing media because the solvated electron can transfer directly to a substrate without the competing reaction with water.",
      "In organic chemistry, dissolving-metal reduction of an aromatic ring proceeds through sequential electron transfer and protonation. Alkynes can be reduced to trans-alkenes because the radical-anion and anion intermediates adopt geometries that lead to anti protonation."
    ],
    "core": [
      "Dilute: blue, paramagnetic, solvated electrons",
      "Concentrated: bronze, metal-like, extensive electron interaction",
      "Impurities promote amide formation"
    ],
    "equations": [
      "M + xNH3 -> [M(NH3)x]+ + e-(NH3)y",
      "2M + 2NH3 -> 2MNH2 + H2"
    ],
    "jee": [],
    "example": [
      "Why can these reductions be carried out in NH3 but not in water?",
      "In water the alkali metal or electron rapidly reduces H2O to H2. Liquid ammonia is less acidic and can support the solvated-electron state long enough for selective reductions."
    ],
    "table": null,
    "diagram": "ammonia-electron"
  },
  {
    "title": "Alkali-Metal Compounds with Carbon",
    "summary": "Group 1 carbon chemistry includes ionic carbides, graphite intercalation compounds, acetylides and highly reactive organoalkali clusters. Lithium gives the most developed molecular organometallic chemistry.",
    "core": [
      "Lithium can form an ionic carbide; heavier metals more readily form graphite intercalation phases.",
      "Intercalation inserts metal/electron layers between graphene sheets and can give metallic conductivity.",
      "Acetylides contain C₂²⁻ or substituted acetylide ions and are strong bases/nucleophiles.",
      "Organolithium compounds are strongly polar and aggregated.",
      "Heavier organoalkali compounds are more ionic, reactive and difficult to control."
    ],
    "equations": [
      "2M + HC≡CH → MC≡CM + H₂  (appropriate metals/conditions)",
      "2K + HgR₂ → 2KR + Hg"
    ],
    "jee": [
      "Classify a carbide before predicting hydrolysis.",
      "Aggregation changes with solvent and concentration."
    ],
    "example": [
      "Why are organopotassium compounds more ionic than organolithium compounds?",
      "K⁺ is larger and less polarising, so the carbon fragment has more carbanion character."
    ],
    "table": null,
    "paragraphs": [
      "The C-Li bond is highly polar, but solid and solution structures are rarely monomeric. Electron-deficient multicentre interactions aggregate organolithium units into dimers, tetramers or hexamers. Donor solvents and chelating ligands can break these aggregates and markedly change reactivity.",
      "In synthetic reasoning, the carbon bonded to Li or Mg behaves as a nucleophilic carbanion equivalent. Proton transfer is extremely fast, so moisture, alcohols and terminal alkynes destroy the reagent. Addition to polar multiple bonds creates a new C-C bond after hydrolytic work-up."
    ],
    "diagram": null
  },
  {
    "title": "Organolithium Reagents: Structures and Reactions",
    "summary": "Organolithium compounds are powerful bases and nucleophiles and advanced examples of multicentre cluster bonding. Tetramers and hexamers are often more realistic than monomers.",
    "core": [
      "Methyllithium, ethyllithium and n-butyllithium aggregate in solids and solution.",
      "Cluster bonding distributes electron density over Li-C frameworks.",
      "They are made by organic-halide reaction with Li or metal-halogen exchange.",
      "They deprotonate weak acids and add to carbonyl compounds.",
      "Transmetalation and CO₂ capture produce many organic derivatives."
    ],
    "equations": [
      "R-X + 2Li → RLi + LiX",
      "RLi + CO₂ → RCO₂Li →(H₃O⁺) RCO₂H",
      "RLi + R′CHO → alcohol after work-up"
    ],
    "jee": [
      "Dry, oxygen-free conditions are essential.",
      "RLi is not a completely free R⁻; aggregation and solvation control selectivity."
    ],
    "example": [
      "Product of CH₃Li, then CO₂ and acidic work-up?",
      "CH₃CO₂H. The methyl carbanion equivalent attacks CO₂ and the carboxylate is protonated."
    ],
    "table": null,
    "paragraphs": [
      "The C-Li bond is highly polar, but solid and solution structures are rarely monomeric. Electron-deficient multicentre interactions aggregate organolithium units into dimers, tetramers or hexamers. Donor solvents and chelating ligands can break these aggregates and markedly change reactivity.",
      "In synthetic reasoning, the carbon bonded to Li or Mg behaves as a nucleophilic carbanion equivalent. Proton transfer is extremely fast, so moisture, alcohols and terminal alkynes destroy the reagent. Addition to polar multiple bonds creates a new C-C bond after hydrolytic work-up."
    ],
    "diagram": null
  },
  {
    "title": "Complexes, Crown Ethers, Cryptands, Sodides and Electrides",
    "summary": "Ordinary alkali ions are weak complex formers, but macrocyclic ligands bind them strongly by size matching. Cryptands can isolate unusual counterions such as Na⁻ or cavity electrons.",
    "core": [
      "Aqua binding is strongest for Li⁺.",
      "12-crown-4 roughly favours Li⁺, 15-crown-5 Na⁺ and 18-crown-6 K⁺.",
      "Cryptands encapsulate ions more completely than crown ethers.",
      "Complexation can dissolve salts in organic solvents and enable phase transfer.",
      "Cation encapsulation can stabilise sodides and electrides."
    ],
    "equations": [
      "K⁺ + 18-crown-6 ⇌ [K(18-crown-6)]⁺",
      "[Na(cryptand)]⁺Na⁻"
    ],
    "jee": [
      "Selectivity depends on solvent and counterion as well as cavity size.",
      "An electride has an electron as the anionic species."
    ],
    "example": [
      "Why does 18-crown-6 favour K⁺ over Li⁺?",
      "Its cavity matches K⁺, allowing many favourable ion-dipole contacts without severe ligand distortion."
    ],
    "table": null,
    "paragraphs": [
      "Complex stability reflects charge density, donor hardness, cavity size and desolvation. Alkali cations are hard acids and bind oxygen donors; selectivity arises when the ligand cavity matches the cation closely enough to maximise contacts without excessive strain.",
      "A cryptand surrounds a cation in three dimensions and usually binds more strongly than an analogous crown ether. By separating the cation from its counter-anion, these ligands can reveal unusual anions such as sodide or an electron-containing electride."
    ],
    "diagram": "crown"
  },
  {
    "title": "Masterclass F - Three-Centre Bonding in BeH2, Bridging in BeCl2 and Aggregation in RLi",
    "summary": "Several s-block compounds cannot be represented adequately by isolated two-centre bonds. Electron deficiency and strong polarisation produce bridging and multicentre structures.",
    "paragraphs": [
      "A monomeric H-Be-H unit would contain only four valence electrons around beryllium. In the solid, BeH2 therefore forms chains or networks with bridging hydrogen atoms. A Be-H-Be bridge is described as a 3-centre-2-electron bond: one electron pair is delocalised over two Be centres and one H atom.",
      "BeCl2 is linear as an isolated high-temperature monomer, but chlorine lone pairs can donate into empty orbitals on a neighbouring Be centre. The vapour can contain a bridged dimer, while the solid forms polymeric chains of tetrahedrally coordinated Be with bridging chlorides. The bonding is covalent and Lewis acidic rather than a simple Be2+/Cl- lattice.",
      "Organolithium compounds also aggregate. A polar Li-C interaction alone does not satisfy the electron-deficient lithium centres, so Li and C atoms form multicentre frameworks. Methyllithium commonly forms tetramers or higher aggregates, and n-butyllithium changes aggregation with solvent and temperature.",
      "Donor solvents such as ethers or amines coordinate lithium and compete with Li-C-Li bridges. Disaggregation increases the concentration of reactive monomeric or low-aggregate species, explaining why solvent and additives can dramatically alter rate and selectivity.",
      "JEE structural questions often use simplified hybridisation language, but the deeper picture is donor-acceptor and multicentre bonding. Hybridisation labels indicate geometry; they do not by themselves explain why a bridge forms or how the electrons are shared."
    ],
    "core": [
      "BeH2: polymeric, 3c-2e Be-H-Be bridges",
      "BeCl2: linear monomer, bridged dimer, polymeric solid",
      "RLi: aggregated multicentre structures; donor solvents reduce aggregation"
    ],
    "equations": [],
    "jee": [],
    "example": [
      "Why is solid BeCl2 polymeric whereas gaseous BeCl2 becomes linear at high temperature?",
      "Bridging chloride donation stabilises electron-deficient Be in the condensed phase. At high temperature entropy and bond cleavage favour isolated linear molecules."
    ],
    "table": null,
    "diagram": "be-bridges"
  },
  {
    "title": "Anomalous Behaviour of Lithium",
    "summary": "Lithium departs from Group 1 because Li and Li⁺ are exceptionally small. High IE, hydration and polarising power create greater covalency, complexation and Group 2-like thermal behaviour.",
    "core": [
      "Li is harder and higher-melting than other alkali metals.",
      "It forms Li₂O and reacts directly with N₂ to form Li₃N.",
      "LiOH, Li₂CO₃ and LiNO₃ decompose anomalously.",
      "LiF, Li₂CO₃ and Li₃PO₄ are sparingly soluble; LiCl is hydrated and deliquescent.",
      "LiCl/LiBr/LiI show organic-solvent solubility and lithium forms stable organolithium compounds."
    ],
    "equations": [
      "6Li + N₂ → 2Li₃N",
      "4LiNO₃ → 2Li₂O + 4NO₂ + O₂",
      "Li₂CO₃ → Li₂O + CO₂"
    ],
    "jee": [
      "The anomaly arises from several linked size effects, not one cause.",
      "Separate properties of Li atom from Li⁺ in solution."
    ],
    "example": [
      "Name two sparingly soluble Li salts whose Na/K analogues are soluble.",
      "LiF and Li₂CO₃; Li₃PO₄ is another."
    ],
    "table": null,
    "paragraphs": [
      "The first member anomaly is not a list of unrelated exceptions. Small radius raises ionisation and hydration enthalpies, increases polarising power, favours covalency and limits coordination because only compact valence orbitals are available. Most special reactions can be traced to one or more of these causes.",
      "Diagonal resemblance is partial, not identity. Moving down a group increases size while moving across a period decreases it; the two effects can offset along a diagonal. Similar charge density and electronegativity then produce parallel behaviour in selected compounds, but differences in charge and valence orbitals impose clear limits."
    ],
    "diagram": null
  },
  {
    "title": "Diagonal Relationship: Lithium and Magnesium",
    "summary": "Li resembles Mg because down-group size increase and across-period size decrease partly cancel. Their ions have similar radii and their compounds show related hydration, polarisation and thermal behaviour.",
    "core": [
      "Both metals are relatively hard and react slowly with water.",
      "Both form nitrides directly and normal oxides rather than stable superoxides.",
      "Their hydroxides are less soluble and decompose on heating.",
      "Their carbonates decompose and solid hydrogen carbonates are not isolated.",
      "LiCl and MgCl₂ are hydrated, deliquescent and alcohol-soluble."
    ],
    "equations": [],
    "jee": [
      "Diagonal similarity is selective, not identity.",
      "Mg²⁺ still has greater charge density than Li⁺."
    ],
    "example": [
      "Why do LiNO₃ and Mg(NO₃)₂ both give oxides on heating?",
      "Both cations polarise nitrate strongly and stabilise compact oxide lattices."
    ],
    "table": [
      [
        "Basis",
        "Li / Li⁺",
        "Mg / Mg²⁺"
      ],
      [
        "Atomic radius / pm",
        "152",
        "160"
      ],
      [
        "Ionic radius / pm",
        "76",
        "72"
      ],
      [
        "Result",
        "High hydration/covalency",
        "High hydration/covalency"
      ]
    ],
    "paragraphs": [
      "The first member anomaly is not a list of unrelated exceptions. Small radius raises ionisation and hydration enthalpies, increases polarising power, favours covalency and limits coordination because only compact valence orbitals are available. Most special reactions can be traced to one or more of these causes.",
      "Diagonal resemblance is partial, not identity. Moving down a group increases size while moving across a period decreases it; the two effects can offset along a diagonal. Similar charge density and electronegativity then produce parallel behaviour in selected compounds, but differences in charge and valence orbitals impose clear limits."
    ],
    "diagram": null
  },
  {
    "title": "Extraction of Group 1 Metals and the Downs Cell",
    "summary": "Alkali metals cannot be deposited from water. Sodium is produced by electrolysis of molten NaCl-CaCl₂; K, Rb and Cs can be prepared by displacement with continuous vapour removal.",
    "core": [
      "CaCl₂ lowers the operating temperature to about 600 °C and reduces Na vapour pressure.",
      "Cathode: Na⁺ gains an electron; graphite anode: Cl⁻ gives Cl₂.",
      "A separator prevents Na-Cl₂ recombination; molten Na rises because it is less dense.",
      "Na vapour can reduce molten KCl while volatile K is removed.",
      "Rb/Cs chlorides can be reduced with Ca under reduced pressure."
    ],
    "equations": [
      "Na⁺ + e⁻ → Na",
      "2Cl⁻ → Cl₂ + 2e⁻",
      "Na + KCl ⇌ NaCl + K(g)"
    ],
    "jee": [
      "Volatile-product removal can drive a displacement equilibrium.",
      "CaCl₂ modifies the melt; it is not intended to produce Ca."
    ],
    "example": [
      "Why use NaCl-CaCl₂ rather than pure NaCl?",
      "The mixture lowers melting point, energy cost and sodium vapour pressure and improves current efficiency."
    ],
    "table": null,
    "paragraphs": [
      "Industrial chemistry is best learned as a material-flow and equilibrium problem. Each process uses recycling, selective precipitation, gas removal or melting-point control to drive an otherwise inconvenient reaction. Writing the purpose of every unit operation is more useful than memorising an isolated flow sheet.",
      "When an industrial equation is tested in JEE, identify the economic reagent, recycled reagent, useful product and unavoidable by-product. Also distinguish thermodynamic feasibility from engineering choices such as temperature, electrode separation, corrosion control and particle size."
    ],
    "diagram": "downs"
  },
  {
    "title": "Sodium Chloride: Sources, Purification, Structure and Uses",
    "summary": "NaCl is the central feedstock of sodium chemistry. Its purification uses precipitation and common-ion effects; its crystal is the classic 6:6 ionic lattice.",
    "core": [
      "Seawater and rock salt are major sources.",
      "Crude salt contains Ca²⁺, Mg²⁺, sulfate and insoluble matter.",
      "HCl in saturated brine precipitates NaCl by the common-ion effect while more soluble chlorides remain.",
      "Each Na⁺ and Cl⁻ has octahedral coordination in interpenetrating fcc arrays.",
      "Uses include food, de-icing/freezing mixtures and production of NaOH, Cl₂, H₂, Na₂CO₃ and Na."
    ],
    "equations": [
      "NaCl(s) ⇌ Na⁺(aq) + Cl⁻(aq)",
      "High [Cl⁻] shifts the equilibrium left"
    ],
    "jee": [
      "Common-ion precipitation works only with favourable relative solubilities.",
      "CN 6 describes an infinite lattice, not NaCl₆ molecules."
    ],
    "example": [
      "Why does HCl gas precipitate NaCl from saturated brine?",
      "It raises [Cl⁻], shifting the dissolution equilibrium toward solid NaCl."
    ],
    "table": null,
    "paragraphs": [
      "Halide structure is governed by size ratio, polarisation and coordination requirements. NaCl and CsCl lattices are limiting models with coordination numbers 6 and 8, but radius-ratio rules are approximate because ions are compressible and bonding is not perfectly hard-sphere ionic.",
      "Hydrated chlorides of Be and Mg cannot be dehydrated simply by strong heating because the highly polarising cation weakens O-H bonds in coordinated water. Hydrolysis then produces hydroxychloride or oxide and HCl. An ammonium-chloride double salt or a chlorinating atmosphere is used to suppress this pathway."
    ],
    "diagram": null
  },
  {
    "title": "Sodium Hydroxide: Causticisation and Chlor-Alkali",
    "summary": "NaOH is made by electrolysis of purified brine and by causticisation of sodium carbonate. Modern membrane cells separate products; older mercury-cell chemistry remains exam-relevant.",
    "core": [
      "Overall chlor-alkali reaction gives NaOH, Cl₂ and H₂.",
      "At the anode Cl⁻ is oxidised; at the cathode water is reduced to H₂ and OH⁻.",
      "A membrane prevents product mixing.",
      "In the mercury process Na amalgam forms and then reacts with water.",
      "Causticisation is driven by precipitation of CaCO₃."
    ],
    "equations": [
      "2NaCl + 2H₂O → 2NaOH + Cl₂ + H₂",
      "Na₂CO₃ + Ca(OH)₂ → 2NaOH + CaCO₃↓"
    ],
    "jee": [
      "Water, not Na⁺, is reduced at an inert aqueous cathode.",
      "Cell designs differ in separation and environmental impact, not net stoichiometry."
    ],
    "example": [
      "Why does causticisation proceed?",
      "Low-solubility CaCO₃ precipitates, removing products from equilibrium and driving NaOH formation."
    ],
    "table": null,
    "paragraphs": [
      "Basicity and solubility are distinct. Basicity concerns the tendency of dissolved hydroxide to furnish OH-, whereas solubility depends on the balance between lattice separation and hydration. In Group 2, lattice enthalpy falls rapidly down the group, so hydroxide solubility rises even though hydration becomes less exothermic.",
      "Be(OH)2 is amphoteric because the small Be2+ centre strongly polarises Be-O bonds and forms stable hydroxo complexes in excess base. The heavier hydroxides are increasingly ionic and behave as ordinary bases."
    ],
    "diagram": null
  },
  {
    "title": "Sodium Carbonate and the Solvay Process",
    "summary": "The Solvay process converts brine and limestone into Na₂CO₃ while recycling NH₃ and much CO₂. Its key step is selective precipitation of NaHCO₃ from cold ammoniated brine.",
    "core": [
      "Brine is purified, ammoniated and carbonated.",
      "NH₄HCO₃ forms in situ and precipitates NaHCO₃ with NaCl.",
      "Calcination converts NaHCO₃ to light soda ash and recycles CO₂.",
      "Limestone supplies CaO/CO₂; Ca(OH)₂ recovers NH₃ from NH₄Cl.",
      "CaCl₂ is the main by-product; KHCO₃ is too soluble for a potassium analogue."
    ],
    "equations": [
      "NaCl + NH₄HCO₃ → NaHCO₃↓ + NH₄Cl",
      "2NaHCO₃ → Na₂CO₃ + CO₂ + H₂O",
      "2NH₄Cl + Ca(OH)₂ → 2NH₃ + CaCl₂ + 2H₂O"
    ],
    "jee": [
      "NH₃ is a circulating reagent, not a net raw material.",
      "Solubility and common-ion effects operate together."
    ],
    "example": [
      "What are net raw materials and main products?",
      "NaCl and CaCO₃ are consumed; Na₂CO₃ is desired and CaCl₂ is the principal by-product."
    ],
    "table": null,
    "paragraphs": [
      "Thermal decomposition of an oxosalt is favoured when the cation strongly polarises the polyatomic anion and when gaseous products provide a large entropy gain. Small Li+ and Be2+ therefore destabilise carbonate and nitrate ions more effectively than their heavier congeners.",
      "Solubility cannot be inferred from charge alone. For a series with the same anion, hydration becomes less favourable down the group, while lattice enthalpy also changes. The observed trend identifies which term changes more strongly; Group 2 hydroxides and sulfates provide classic opposite examples."
    ],
    "diagram": "solvay"
  },
  {
    "title": "Washing Soda, Baking Soda and Potassium Carbonate",
    "summary": "Na₂CO₃ occurs as soda ash and washing soda; NaHCO₃ is a mild base and CO₂ source. K₂CO₃ requires a different route because KHCO₃ does not precipitate in the Solvay process.",
    "core": [
      "Washing soda is Na₂CO₃·10H₂O and loses water stepwise on heating.",
      "Carbonate hydrolysis gives alkaline cleaning solutions.",
      "NaHCO₃ releases CO₂ on heating and is used in baking powders and extinguishers.",
      "Baking powder combines NaHCO₃, a solid acid and starch.",
      "K₂CO₃ can be prepared by a Leblanc-type sulfate route and is used in hard glass/fusion mixtures."
    ],
    "equations": [
      "Na₂CO₃·10H₂O → Na₂CO₃·H₂O + 9H₂O",
      "2NaHCO₃ → Na₂CO₃ + CO₂ + H₂O",
      "K₂SO₄ + CaCO₃ + 2C → K₂CO₃ + CaS + 2CO"
    ],
    "jee": [
      "NaHCO₃ is amphiprotic but mildly basic in water.",
      "Hydrate mass-loss numericals are common."
    ],
    "example": [
      "Why is NaHCO₃ preferred in baking?",
      "It releases CO₂ at moderate temperature and is less strongly alkaline than Na₂CO₃."
    ],
    "table": null,
    "paragraphs": [
      "Thermal decomposition of an oxosalt is favoured when the cation strongly polarises the polyatomic anion and when gaseous products provide a large entropy gain. Small Li+ and Be2+ therefore destabilise carbonate and nitrate ions more effectively than their heavier congeners.",
      "Solubility cannot be inferred from charge alone. For a series with the same anion, hydration becomes less favourable down the group, while lattice enthalpy also changes. The observed trend identifies which term changes more strongly; Group 2 hydroxides and sulfates provide classic opposite examples."
    ],
    "diagram": null
  },
  {
    "title": "Biological Importance of Sodium and Potassium",
    "summary": "Na⁺ is the major extracellular cation and K⁺ the major intracellular cation. Their maintained concentration gradients drive nerve impulses, transport and osmotic regulation.",
    "core": [
      "The Na⁺/K⁺-ATPase pumps 3 Na⁺ out and 2 K⁺ in per ATP.",
      "Ion channels convert stored gradients into action potentials.",
      "Na⁺ gradients drive glucose and amino-acid cotransport.",
      "K⁺ activates many intracellular enzymes.",
      "Biological selectivity depends on dehydration cost and ligand geometry, not just charge."
    ],
    "equations": [
      "ATP + H₂O + 3Na⁺in + 2K⁺out → ADP + Pi + 3Na⁺out + 2K⁺in"
    ],
    "jee": [
      "Membrane concentrations are actively maintained, not equilibrium distributions.",
      "Selective channels can reject a smaller ion."
    ],
    "example": [
      "Why can a K⁺ channel reject Na⁺?",
      "The channel geometry compensates K⁺ dehydration efficiently; Na⁺ is too small to make all optimal donor contacts."
    ],
    "table": null,
    "paragraphs": [
      "Biological selectivity is achieved by proteins and membranes rather than by isolated-ion chemistry alone. Na+ and K+ have the same charge but different size and hydration, allowing ion channels to discriminate through precisely arranged donor groups. Mg2+ and Ca2+ have higher charge density and serve as enzyme cofactors, structural ions and signalling agents.",
      "The free concentration of a biological ion can be far smaller than its total concentration because much of it is bound to proteins, phosphates or mineral phases. Therefore biological function should not be inferred only from bulk abundance."
    ],
    "diagram": null
  },
  {
    "title": "Group 1 Consolidation: High-Yield Orders and Traps",
    "summary": "This page unifies the most tested Group 1 orders and the reason controlling each. Use it as a checkpoint before moving to Group 2.",
    "core": [
      "Radius increases Li→Cs; IE₁ and hydration magnitude decrease.",
      "Hydrated mobility generally increases Li⁺→Cs⁺.",
      "Softness increases and m.p. generally decreases down the group.",
      "Characteristic oxygen products are Li₂O, Na₂O₂ and KO₂/RbO₂/CsO₂.",
      "Li is strongest aqueous reducing agent, while water-reaction violence usually increases down the group.",
      "LiOH, Li₂CO₃ and LiNO₃ show Group 2-like decomposition."
    ],
    "equations": [],
    "jee": [
      "The commonest error is using one trend while ignoring a competing term.",
      "Evaluate each multiple-correct statement independently."
    ],
    "example": [
      "Can Li be strongest aqueous reducing agent while Cs has lowest IE₁?",
      "Yes. The first concerns M(s)→M⁺(aq), dominated partly by hydration; the second concerns a gaseous atom."
    ],
    "table": [
      [
        "Question",
        "Controlling idea"
      ],
      [
        "Solubility",
        "Lattice + hydration + entropy"
      ],
      [
        "Thermal stability",
        "Polarisation + product lattice"
      ],
      [
        "Reducing power",
        "Complete thermodynamic cycle"
      ],
      [
        "Reaction rate",
        "Kinetics, surface, phase"
      ],
      [
        "Complex selectivity",
        "Size + cavity + solvation"
      ]
    ],
    "paragraphs": [
      "This topic should be interpreted through size, charge density, lattice enthalpy, hydration, polarisation and kinetic accessibility. The observed behaviour is the net result of these factors rather than a single isolated trend.",
      "For JEE Advanced, connect every reaction to structure and energetics, and retain the important exceptions as consequences of the same framework."
    ],
    "diagram": null
  },
  {
    "title": "Masterclass G - Complete Group 1 Reaction Atlas",
    "summary": "The following reaction set collects the high-yield transformations of Li, Na, K, Rb and Cs and identifies the controlling exception.",
    "paragraphs": [
      "With oxygen, product identity changes down the group. Lithium gives mainly Li2O, sodium gives mainly Na2O2 and the heavier metals give superoxides under excess oxygen. Controlled conditions can produce other stoichiometries, so examination questions must specify oxygen supply and metal.",
      "With water, all metals form MOH and H2, but the rate increases sharply down the group. Lithium remains solid and reacts comparatively steadily; sodium melts into a mobile sphere; potassium often ignites the hydrogen; Rb and Cs may react explosively. The kinetic sequence is not identical to aqueous standard-potential order.",
      "Only lithium combines readily with N2 to form Li3N. All form saline hydrides on heating with H2. With sulfur, normal sulfides and polysulfides may form. With alcohols they form alkoxides, while terminal alkynes can furnish acetylides, particularly for the heavier alkali metals.",
      "With halogens the reaction is vigorous and gives MX. Lithium halides show the greatest covalent character, increasing from LiF to LiI. With liquid ammonia, either solvated-electron solutions or amides form depending on purity and catalysts.",
      "The metal is a one-electron reductant. It can reduce TiCl4 or ZrCl4, generate organometallic compounds and produce radical anions in non-aqueous media. Always balance electron transfer explicitly."
    ],
    "core": [
      "Li + N2 is unique in Group 1",
      "Oxygen product shifts oxide -> peroxide -> superoxide down the group",
      "All form +1 compounds"
    ],
    "equations": [
      "4Li + O2 -> 2Li2O",
      "2Na + O2 -> Na2O2",
      "K + O2 -> KO2",
      "2M + 2H2O -> 2MOH + H2",
      "2M + H2 -> 2MH",
      "2Li + 2C -> Li2C2 (under suitable conditions)",
      "2M + 2ROH -> 2MOR + H2",
      "2M + X2 -> 2MX"
    ],
    "jee": [
      "Specify oxygen excess and temperature.",
      "Do not infer reaction rate from E° alone."
    ],
    "example": [
      "Checkpoint",
      "Use the governing principle stated in the section."
    ],
    "table": [
      [
        "Reagent",
        "Li",
        "Na",
        "K/Rb/Cs"
      ],
      [
        "O2 (typical)",
        "Li2O",
        "Na2O2",
        "MO2"
      ],
      [
        "N2",
        "Li3N",
        "No direct normal nitride",
        "No direct normal nitride"
      ],
      [
        "H2O",
        "LiOH + H2, slower",
        "NaOH + H2, vigorous",
        "MOH + H2, explosive tendency"
      ],
      [
        "H2",
        "LiH",
        "NaH",
        "MH"
      ]
    ],
    "diagram": null
  },
  {
    "title": "Masterclass J - Industrial Sodium Chemistry as an Integrated Network",
    "summary": "NaCl, NaOH, Na2CO3, NaHCO3, Cl2 and H2 form an interconnected heavy-chemical network. Process questions test selective separation and recycling.",
    "paragraphs": [
      "In the chlor-alkali process, purified brine is electrolysed. Chloride is oxidised at the anode, water is reduced at the cathode, and NaOH remains in solution. Modern membrane cells keep chlorine away from hydroxide and restrict migration of chloride while allowing hydrated Na+ transport.",
      "In the Downs cell, molten NaCl is electrolysed because aqueous solution would produce H2 instead of Na. CaCl2 lowers the melting point, reducing energy use and sodium vapour pressure. A separator prevents sodium and chlorine from recombining.",
      "The Solvay process exploits the low solubility of NaHCO3 in ammoniated brine. CO2 converts NH3/H2O into hydrogen carbonate species, precipitating NaHCO3, which is calcined to Na2CO3. NH3 is regenerated from NH4Cl using Ca(OH)2; limestone supplies both CaO and CO2. The net consumables are NaCl and CaCO3, while CaCl2 is the major by-product.",
      "K2CO3 is not made efficiently by the same route because KHCO3 is too soluble to precipitate under comparable conditions. This is a direct application of solubility rather than an oxidation-state difference.",
      "Na2CO3 and NaOH can be interconverted by causticisation with lime. The direction used industrially depends on demand, purity and economics. NaHCO3 is obtained as a separate product for baking, fire extinguishers and mild neutralisation."
    ],
    "core": [
      "Chlor-alkali: brine -> NaOH + Cl2 + H2",
      "Downs: molten NaCl -> Na + Cl2",
      "Solvay net: 2NaCl + CaCO3 -> Na2CO3 + CaCl2"
    ],
    "equations": [
      "2NaCl + 2H2O -> 2NaOH + Cl2 + H2",
      "2NaCl(l) -> 2Na(l) + Cl2(g)",
      "2NaHCO3 -> Na2CO3 + CO2 + H2O",
      "Na2CO3 + Ca(OH)2 -> 2NaOH + CaCO3"
    ],
    "jee": [],
    "example": [
      "Why is CaCl2 added in the Downs cell?",
      "It lowers the melting point of the electrolyte, reducing energy consumption and sodium vapour pressure; it also helps maintain a workable liquid phase."
    ],
    "table": null,
    "diagram": null
  },
  {
    "title": "Masterclass L - Complete Numerical Data Tables for JEE Advanced",
    "summary": "Rounded standard values provide a consistent data set for orders, interpolation and thermochemical reasoning. Exact values can vary slightly with coordination number and reference source.",
    "paragraphs": [
      "Ionic radii depend on coordination number, so a table must state or consistently assume a coordination environment. The values below use common six-coordinate radii except for Be2+, where four-coordinate and six-coordinate values are often distinguished.",
      "Hydration enthalpy values are negative; tables often compare magnitudes. A more negative value means stronger hydration. Standard potentials are reduction potentials for M+/M or M2+/M in aqueous solution and therefore contain atomisation, ionisation and hydration contributions.",
      "Melting and boiling points are not perfectly monotonic because crystal structures change. Use the data rather than forcing a simple trend when an examination supplies or asks for an exception."
    ],
    "core": [
      "State radius convention",
      "Keep sign of hydration enthalpy",
      "E° is phase-specific"
    ],
    "equations": [],
    "jee": [],
    "example": [
      "Checkpoint",
      "Use the governing principle stated in the section."
    ],
    "table": [
      [
        "Group 1",
        "Li",
        "Na",
        "K",
        "Rb",
        "Cs"
      ],
      [
        "IE1 / kJ mol-1",
        "520",
        "496",
        "419",
        "403",
        "376"
      ],
      [
        "Hydration ΔH / kJ mol-1",
        "-506",
        "-406",
        "-330",
        "-310",
        "-276"
      ],
      [
        "Metallic radius / pm",
        "152",
        "186",
        "227",
        "248",
        "265"
      ],
      [
        "M+ radius / pm",
        "76",
        "102",
        "138",
        "152",
        "167"
      ],
      [
        "mp / K",
        "454",
        "371",
        "336",
        "312",
        "302"
      ],
      [
        "Density / g cm-3",
        "0.53",
        "0.97",
        "0.86",
        "1.53",
        "1.90"
      ],
      [
        "E° / V",
        "-3.04",
        "-2.71",
        "-2.93",
        "-2.98",
        "-3.03 (approx.)"
      ]
    ],
    "diagram": null
  },
  {
    "title": "Group 2: Overview, Occurrence and Major Minerals",
    "summary": "Group 2 contains Be, Mg, Ca, Sr, Ba and Ra with general configuration ns². They are less reactive than Group 1, normally form M²⁺, and show increasing reactivity and basicity down the group.",
    "core": [
      "Be occurs in beryl and bertrandite.",
      "Mg occurs in magnesite, dolomite, carnallite and seawater.",
      "Ca occurs as limestone, chalk, marble, gypsum, anhydrite, fluorite and fluoroapatite.",
      "Sr occurs as celestite/strontianite; Ba as barytes/witherite.",
      "Ra is a scarce radioactive decay product."
    ],
    "equations": [],
    "jee": [
      "The term alkaline earth refers to basic refractory oxides occurring in minerals.",
      "Soluble Ba²⁺ is toxic, while BaSO₄ is safe enough diagnostically because it is extremely insoluble."
    ],
    "example": [
      "Why is BaSO₄ used in radiography despite barium toxicity?",
      "Its lattice is so stable that it releases negligible Ba²⁺ in the gut, while Ba strongly absorbs X-rays."
    ],
    "table": [
      [
        "Element",
        "Important source"
      ],
      [
        "Be",
        "Beryl, bertrandite"
      ],
      [
        "Mg",
        "Magnesite, dolomite, seawater"
      ],
      [
        "Ca",
        "Limestone, gypsum, fluorite"
      ],
      [
        "Sr",
        "Celestite, strontianite"
      ],
      [
        "Ba",
        "Barytes, witherite"
      ]
    ],
    "paragraphs": [
      "Natural occurrence is controlled not only by abundance but also by ionic size and lattice compatibility. Ions of similar charge may fail to substitute extensively for one another when their radii differ too much. Evaporite deposits concentrate soluble chlorides and sulfates, whereas less soluble carbonates, fluorides and phosphates occur as rocks and ores.",
      "Extraction follows directly from the very negative reduction potentials of the metals. Water is reduced before M+ or M2+ in aqueous electrolysis, and ordinary chemical reductants are generally insufficient. Consequently, fused-salt electrolysis, vapour-phase displacement or specialised metallothermic routes are required."
    ],
    "diagram": null
  },
  {
    "title": "Group 2 Electronic Configuration, Oxidation State and Radii",
    "summary": "Group 2 atoms contain two outer s electrons. High lattice and hydration enthalpies stabilise M²⁺ despite the cost of two ionisations; the third ionisation is prohibitively large because it removes a core electron.",
    "core": [
      "Configurations are Be [He]2s², Mg [Ne]3s², Ca [Ar]4s², Sr [Kr]5s², Ba [Xe]6s² and Ra [Rn]7s².",
      "Atomic and ionic radii increase down the group.",
      "Group 2 atoms/ions are smaller than Group 1 counterparts in the same period because nuclear charge is greater.",
      "Typical M²⁺ ions are closed-shell and diamagnetic.",
      "Be²⁺ is never a simple free aqueous ion; it is strongly solvated/complexed."
    ],
    "equations": [
      "M(g) → M²⁺(g)+2e⁻ requires IE₁+IE₂",
      "M²⁺ + ligands → hydrated or complex ions"
    ],
    "jee": [
      "High IE₂ does not prevent M²⁺ formation because lattice and hydration compensate.",
      "Be²⁺ radius depends strongly on coordination number."
    ],
    "example": [
      "Why is IE₃ of Mg much larger than IE₂?",
      "Mg²⁺ has the neon configuration; IE₃ removes a compact 2p core electron."
    ],
    "table": null,
    "paragraphs": [
      "The decisive feature is the large discontinuity after removal of the valence s electron or pair. Once the noble-gas core is reached, the next ionisation demands removal of a compact core electron. Lattice and hydration energies cannot normally compensate for this enormous cost, so Group 1 remains +1 and Group 2 remains +2 in ordinary chemistry.",
      "Closed-shell cations have no low-energy d-d transitions. Their compounds are therefore colourless unless colour is produced by the anion, a radical ion, charge transfer, a trapped electron or an impurity. This distinction is important in superoxides, ozonides and F-centre-containing halides."
    ],
    "diagram": null
  },
  {
    "title": "Ionisation, Electronegativity and Hydration in Group 2",
    "summary": "IE₁ and IE₂ decrease down Group 2, and electronegativity falls. M²⁺ ions have much larger hydration enthalpies than M⁺ ions because they have higher charge and smaller size.",
    "core": [
      "Approximate IE₁: Be 899, Mg 737, Ca 590, Sr 549, Ba 503 kJ mol⁻¹.",
      "Approximate IE₂: Be 1757, Mg 1450, Ca 1145, Sr 1064, Ba 965 kJ mol⁻¹.",
      "Hydration magnitude follows Be²⁺ > Mg²⁺ > Ca²⁺ > Sr²⁺ > Ba²⁺.",
      "Strong hydration explains many hydrated chlorides/nitrates.",
      "Be compounds are substantially covalent; Ca/Sr/Ba salts with hard anions are largely ionic."
    ],
    "equations": [],
    "jee": [
      "Compare tabulated hydration values per mole of ions.",
      "Thermodynamic favourability can coexist with kinetic passivation."
    ],
    "example": [
      "Why are MgCl₂ and CaCl₂ commonly hydrated while NaCl is not?",
      "The divalent ions have much higher charge density and hydration enthalpy."
    ],
    "table": [
      [
        "Ion",
        "Be²⁺",
        "Mg²⁺",
        "Ca²⁺",
        "Sr²⁺",
        "Ba²⁺"
      ],
      [
        "ΔHhyd / kJ mol⁻¹",
        "-2494",
        "-1921",
        "-1577",
        "-1443",
        "-1305"
      ]
    ],
    "paragraphs": [
      "Ionisation enthalpy is only one term in a real reaction. A metal may have a low gas-phase ionisation enthalpy yet not be the strongest reducing agent in water because atomisation and hydration contributions differ. The correct comparison therefore requires a thermodynamic cycle with phases stated explicitly.",
      "Fajans' rules are best viewed as an electrostatic distortion model. A small, highly charged cation polarises a large, soft anion, shifts electron density toward the cation and creates partial covalent bonding. The model predicts trends but does not replace full lattice-energy, orbital-overlap and structure considerations."
    ],
    "diagram": null
  },
  {
    "title": "Physical Properties and Metallic Bonding of Group 2",
    "summary": "Group 2 metals are generally harder, denser and higher-melting than Group 1 because two valence electrons and smaller atoms strengthen metallic bonding. Melting-point trends are irregular because structures vary.",
    "core": [
      "Be is hard/high-melting; Mg is light and structurally useful.",
      "Group 2 m.p. values exceed corresponding Group 1 values but are not monotonic.",
      "All conduct heat/electricity.",
      "Ca gives brick-red, Sr crimson and Ba apple-green flames; Be/Mg have no useful flame colour.",
      "Cohesive energy is greater than in Group 1."
    ],
    "equations": [],
    "jee": [
      "Do not force a monotonic m.p. trend where data are irregular.",
      "No flame colour means ordinary flame excitation is unsuitable, not absence of spectra."
    ],
    "example": [
      "Why is Mg harder than Na?",
      "Mg is smaller and contributes two valence electrons per atom to stronger metallic bonding."
    ],
    "table": [
      [
        "Metal",
        "Be",
        "Mg",
        "Ca",
        "Sr",
        "Ba"
      ],
      [
        "m.p. / °C",
        "1287",
        "649",
        "839",
        "768",
        "727"
      ],
      [
        "Flame",
        "none",
        "none",
        "brick red",
        "crimson",
        "apple green"
      ]
    ],
    "paragraphs": [
      "Metallic bonding becomes weaker when the valence orbital is diffuse and only a small number of electrons are available for delocalisation. Group 1 therefore has low cohesive energy, low hardness and low melting point. Group 2 supplies two electrons per atom and usually has stronger cohesion, although changes in crystal structure make the numerical trend irregular.",
      "A simple band picture is useful: the closely spaced s-derived levels of a macroscopic crystal broaden into a partly occupied band, allowing conductivity. Increasing atomic size broadens the real-space orbital but reduces the electron-nucleus attraction and generally weakens the cohesive energy per atom."
    ],
    "diagram": null
  },
  {
    "title": "General Chemical Reactions of Group 2 Metals",
    "summary": "Group 2 metals are less reactive than Group 1 but become more reactive down the group. Be and Mg are often passivated; Ca, Sr and Ba react readily with water and non-metals.",
    "core": [
      "With O₂ they form MO; Ba also forms BaO₂.",
      "Be/Mg burning in air can also produce nitrides.",
      "Be is inert to water, Mg reacts with hot water/steam, Ca-Sr-Ba with cold water.",
      "Halogens give MX₂; covalency decreases down the group.",
      "At high temperature they form nitrides, phosphides, sulfides and hydrides."
    ],
    "equations": [
      "2M + O₂ → 2MO",
      "M + 2H₂O → M(OH)₂ + H₂",
      "3M + N₂ → M₃N₂"
    ],
    "jee": [
      "Passivation explains slow rate, not unfavourable thermodynamics.",
      "Burning in air may give oxide-nitride mixtures."
    ],
    "example": [
      "What forms when Mg burns in air?",
      "Mostly MgO with some Mg₃N₂."
    ],
    "table": null,
    "paragraphs": [
      "This topic should be interpreted through size, charge density, lattice enthalpy, hydration, polarisation and kinetic accessibility. The observed behaviour is the net result of these factors rather than a single isolated trend.",
      "For JEE Advanced, connect every reaction to structure and energetics, and retain the important exceptions as consequences of the same framework."
    ],
    "diagram": null
  },
  {
    "title": "Reactions with Water, Acids, Bases and Liquid Ammonia",
    "summary": "Water and acid-base behaviour expose the special position of Be and Mg. Be is amphoteric and passivated; Mg reacts after film disruption; heavier metals are strongly electropositive.",
    "core": [
      "Be does not react with water and is protected by BeO.",
      "Be dissolves in alkali as [Be(OH)₄]²⁻ and releases H₂.",
      "Mg reacts slowly with cold water, faster with hot water and steam.",
      "Ca, Sr and Ba react rapidly with cold water.",
      "Ca/Sr/Ba form solvated-electron solutions in liquid ammonia, though less readily than alkali metals."
    ],
    "equations": [
      "Be + 2OH⁻ + 2H₂O → [Be(OH)₄]²⁻ + H₂",
      "Mg + H₂O(g) → MgO + H₂",
      "Ca + 2H₂O → Ca(OH)₂ + H₂"
    ],
    "jee": [
      "Specify acid and conditions because oxidising acids may passivate.",
      "Be amphoterism does not extend normally to heavier metals."
    ],
    "example": [
      "Why does Mg react more readily with steam than cold water?",
      "Higher temperature disrupts the surface film and steam favours MgO formation."
    ],
    "table": null,
    "paragraphs": [
      "The blue species is not a simple metal atom. The metal transfers an electron to the solvent, producing an ammoniated cation and an electron localised in a solvent cavity. The cavity stabilises the diffuse electron by orienting the positive ends of NH3 dipoles toward it.",
      "Dilute solutions contain largely independent solvated electrons and are paramagnetic. At higher concentration, electron-electron interactions, spin pairing and metal-like clusters produce a bronze, highly conducting phase. This continuous evolution explains why the same system can display both solution and metallic properties."
    ],
    "diagram": null
  },
  {
    "title": "Group 2 Oxides and Peroxides",
    "summary": "Group 2 monoxides become increasingly ionic and basic down the group. BeO is covalent/amphoteric, MgO weakly basic and refractory, and CaO-SrO-BaO strongly basic. Peroxide stability increases down the group.",
    "core": [
      "Most MO solids adopt rock-salt-type lattices; BeO is a covalent network.",
      "BeO dissolves in acids and alkalis.",
      "MgO reacts slowly with water; CaO reacts vigorously.",
      "Basicity increases BeO < MgO < CaO < SrO < BaO.",
      "BaO₂ is stable and historically used to prepare H₂O₂."
    ],
    "equations": [
      "MO + H₂O → M(OH)₂",
      "2BaO₂ → 2BaO + O₂",
      "BaO₂ + H₂SO₄ → BaSO₄↓ + H₂O₂"
    ],
    "jee": [
      "BeO amphoterism follows high polarising power.",
      "BaSO₄ precipitation helps drive H₂O₂ formation."
    ],
    "example": [
      "Arrange BeO, MgO, CaO, BaO in increasing basicity.",
      "BeO < MgO < CaO < BaO."
    ],
    "table": null,
    "paragraphs": [
      "The oxygen fragment should be analysed independently by molecular-orbital theory. Adding electrons to O2 fills antibonding pi* orbitals: O2 has bond order 2, O2- has 1.5 and O2^2- has 1. The number of unpaired electrons simultaneously predicts magnetism, so superoxide is paramagnetic whereas peroxide is diamagnetic.",
      "Cation size controls which oxygen anion is stabilised in the solid. A small cation provides a compact lattice well matched to O2-, whereas large cations reduce the lattice penalty for accommodating the larger, more diffuse O2- radical. Product formation is therefore a lattice-stabilisation problem rather than a change in the oxidation state of the metal."
    ],
    "diagram": null
  },
  {
    "title": "Group 2 Hydroxides",
    "summary": "Solubility, basicity and thermal stability of M(OH)₂ generally increase down Group 2. Lattice enthalpy falls faster than hydration enthalpy as the cation enlarges.",
    "core": [
      "Be(OH)₂ is amphoteric and polymeric.",
      "Mg(OH)₂ is sparingly soluble and used as milk of magnesia.",
      "Ca(OH)₂ solution is lime water and suspension milk of lime.",
      "Sr(OH)₂ and Ba(OH)₂ are more soluble/strongly basic.",
      "All decompose to oxides, with thermal stability increasing down the group."
    ],
    "equations": [
      "Be(OH)₂ + 2OH⁻ → [Be(OH)₄]²⁻",
      "M(OH)₂ → MO + H₂O",
      "Ca(OH)₂ + CO₂ → CaCO₃↓ + H₂O"
    ],
    "jee": [
      "Hydroxide solubility increases while sulfate solubility decreases.",
      "Basic strength is not the same as reaction rate."
    ],
    "example": [
      "Why is Ba(OH)₂ more soluble than Mg(OH)₂?",
      "Ba²⁺ gives a much lower lattice enthalpy, and that decrease outweighs the fall in hydration."
    ],
    "table": null,
    "paragraphs": [
      "Basicity and solubility are distinct. Basicity concerns the tendency of dissolved hydroxide to furnish OH-, whereas solubility depends on the balance between lattice separation and hydration. In Group 2, lattice enthalpy falls rapidly down the group, so hydroxide solubility rises even though hydration becomes less exothermic.",
      "Be(OH)2 is amphoteric because the small Be2+ centre strongly polarises Be-O bonds and forms stable hydroxo complexes in excess base. The heavier hydroxides are increasingly ionic and behave as ordinary bases."
    ],
    "diagram": null
  },
  {
    "title": "Group 2 Halides and the Structure of BeCl₂",
    "summary": "Be halides are covalent/electron-deficient; Ca, Sr and Ba halides are largely ionic. BeCl₂ changes structure with phase and hydrated MgCl₂ hydrolyses during heating.",
    "core": [
      "BeF₂ is network-covalent and poorly conducting when fused.",
      "Solid BeCl₂ has Cl-bridged polymeric chains with roughly tetrahedral Be.",
      "High-temperature vapour contains linear monomer; cooler vapour includes bridged dimers/oligomers.",
      "MgCl₂·6H₂O gives Mg(OH)Cl/MgO on simple heating.",
      "Fluorides are often less soluble than chlorides because of high lattice enthalpy."
    ],
    "equations": [
      "BeO + C + Cl₂ → BeCl₂ + CO",
      "MgCl₂·6H₂O → Mg(OH)Cl + HCl + 5H₂O",
      "Mg(OH)Cl → MgO + HCl"
    ],
    "jee": [
      "A gas-phase linear molecule does not describe the solid.",
      "Direct dehydration of MgCl₂ hydrate fails because hydrolysis competes."
    ],
    "example": [
      "Why is solid BeCl₂ polymeric?",
      "Chloride bridges raise Be coordination and reduce electron deficiency."
    ],
    "table": null,
    "paragraphs": [
      "Halide structure is governed by size ratio, polarisation and coordination requirements. NaCl and CsCl lattices are limiting models with coordination numbers 6 and 8, but radius-ratio rules are approximate because ions are compressible and bonding is not perfectly hard-sphere ionic.",
      "Hydrated chlorides of Be and Mg cannot be dehydrated simply by strong heating because the highly polarising cation weakens O-H bonds in coordinated water. Hydrolysis then produces hydroxychloride or oxide and HCl. An ammonium-chloride double salt or a chlorinating atmosphere is used to suppress this pathway."
    ],
    "diagram": null
  },
  {
    "title": "Group 2 Sulfates and the Solubility Trend",
    "summary": "Sulfate solubility falls sharply down Group 2: Be/Mg sulfates are soluble, CaSO₄ is sparingly soluble and BaSO₄ is extremely insoluble.",
    "core": [
      "MgSO₄·7H₂O is Epsom salt.",
      "CaSO₄ occurs as gypsum and anhydrite.",
      "BaSO₄ precipitation tests sulfate and removes Ba²⁺.",
      "SO₄²⁻ is large, so cation-size change affects lattice less than it affects hydration.",
      "BaSO₄ is thermally and chemically resistant."
    ],
    "equations": [
      "Ba²⁺ + SO₄²⁻ → BaSO₄↓"
    ],
    "jee": [
      "Do not reuse the hydroxide-solubility explanation for sulfates.",
      "Acidification avoids carbonate/sulfite interference in sulfate tests."
    ],
    "example": [
      "Decreasing solubility order for MgSO₄, CaSO₄, SrSO₄, BaSO₄?",
      "MgSO₄ > CaSO₄ > SrSO₄ > BaSO₄."
    ],
    "table": null,
    "paragraphs": [
      "Thermal decomposition of an oxosalt is favoured when the cation strongly polarises the polyatomic anion and when gaseous products provide a large entropy gain. Small Li+ and Be2+ therefore destabilise carbonate and nitrate ions more effectively than their heavier congeners.",
      "Solubility cannot be inferred from charge alone. For a series with the same anion, hydration becomes less favourable down the group, while lattice enthalpy also changes. The observed trend identifies which term changes more strongly; Group 2 hydroxides and sulfates provide classic opposite examples."
    ],
    "diagram": null
  },
  {
    "title": "Group 2 Carbonates and Hydrogen Carbonates",
    "summary": "Group 2 carbonates are sparingly soluble and decompose to oxide and CO₂. Thermal stability increases down the group as cation polarising power decreases. Hydrogen carbonates exist mainly in solution.",
    "core": [
      "Carbonates precipitate from soluble M²⁺ salts and CO₃²⁻.",
      "BeCO₃ is unstable and basic carbonate forms.",
      "MgCO₃ decomposes more readily than BaCO₃.",
      "CaCO₃ dissolves in CO₂-rich water as Ca(HCO₃)₂.",
      "The reversible equilibrium causes temporary hardness and limestone cave formations."
    ],
    "equations": [
      "MCO₃ → MO + CO₂",
      "CaCO₃ + CO₂ + H₂O ⇌ Ca(HCO₃)₂(aq)"
    ],
    "jee": [
      "Solubility and thermal stability are separate trends.",
      "Group 2 hydrogen carbonates are chiefly solution species."
    ],
    "example": [
      "Why does MgCO₃ decompose more readily than BaCO₃?",
      "Mg²⁺ polarises CO₃²⁻ more strongly and stabilises the compact MgO product."
    ],
    "table": null,
    "paragraphs": [
      "Thermal decomposition of an oxosalt is favoured when the cation strongly polarises the polyatomic anion and when gaseous products provide a large entropy gain. Small Li+ and Be2+ therefore destabilise carbonate and nitrate ions more effectively than their heavier congeners.",
      "Solubility cannot be inferred from charge alone. For a series with the same anion, hydration becomes less favourable down the group, while lattice enthalpy also changes. The observed trend identifies which term changes more strongly; Group 2 hydroxides and sulfates provide classic opposite examples."
    ],
    "diagram": null
  },
  {
    "title": "Group 2 Nitrates",
    "summary": "All Group 2 nitrates are soluble and decompose to oxide, NO₂ and O₂. The pattern resembles LiNO₃ and reflects strong polarisation by divalent cations.",
    "core": [
      "They are prepared by dissolving carbonate/hydroxide in dilute HNO₃.",
      "Hydration decreases down the group.",
      "General decomposition is 2M(NO₃)₂→2MO+4NO₂+O₂.",
      "Brown NO₂ and O₂ are characteristic observations.",
      "The nitrate ion acts as an internal oxidant/oxygen source."
    ],
    "equations": [
      "MCO₃ + 2HNO₃ → M(NO₃)₂ + CO₂ + H₂O",
      "2M(NO₃)₂ → 2MO + 4NO₂ + O₂"
    ],
    "jee": [
      "Balance the coefficients carefully.",
      "LiNO₃ follows the same pattern."
    ],
    "example": [
      "Products of heating Ca(NO₃)₂?",
      "CaO, NO₂ and O₂."
    ],
    "table": null,
    "paragraphs": [
      "Thermal decomposition of an oxosalt is favoured when the cation strongly polarises the polyatomic anion and when gaseous products provide a large entropy gain. Small Li+ and Be2+ therefore destabilise carbonate and nitrate ions more effectively than their heavier congeners.",
      "Solubility cannot be inferred from charge alone. For a series with the same anion, hydration becomes less favourable down the group, while lattice enthalpy also changes. The observed trend identifies which term changes more strongly; Group 2 hydroxides and sulfates provide classic opposite examples."
    ],
    "diagram": null
  },
  {
    "title": "Group 2 Hydrides",
    "summary": "Hydrides change from electron-deficient covalent BeH₂ to increasingly ionic CaH₂, SrH₂ and BaH₂. Their reactivity reflects both bridging bonds and hydride ions.",
    "core": [
      "BeH₂ is prepared indirectly and has bridging three-centre two-electron bonds.",
      "MgH₂ has intermediate character.",
      "CaH₂/SrH₂/BaH₂ contain H⁻ and hydrolyse vigorously.",
      "CaH₂ can dry compatible organic solvents and generate H₂.",
      "Thermal behaviour depends on lattice and M-H bond character."
    ],
    "equations": [
      "2BeCl₂ + LiAlH₄ → 2BeH₂ + LiCl + AlCl₃",
      "CaH₂ + 2H₂O → Ca(OH)₂ + 2H₂"
    ],
    "jee": [
      "Bridging H in BeH₂ is not a terminal classical H⁻.",
      "A drying agent must not react with the solvent."
    ],
    "example": [
      "Why is BeH₂ polymeric?",
      "Bridging hydrogens form multicentre bonds that reduce electron deficiency at Be."
    ],
    "table": null,
    "paragraphs": [
      "Saline hydrides contain H- and are strong bases because the hydride ion readily accepts a proton to form H2. Their reactions with water are therefore acid-base reactions accompanied by gas evolution. In contrast, BeH2 is electron deficient and uses bridging 3-centre-2-electron bonds rather than an ionic H- lattice.",
      "Complex hydrides such as BH4- and AlH4- distribute electron density over several E-H bonds and act as hydride-transfer reagents. Their practical reducing behaviour is controlled by solvent, counter-cation and accessibility of the substrate."
    ],
    "diagram": null
  },
  {
    "title": "Nitrides, Phosphides and Chalcogenides of Group 2",
    "summary": "At high temperature Group 2 metals form nitrides M₃N₂, phosphides M₃P₂ and chalcogenides MS/MSe/MTe. Hydrolysis reveals the formal anions.",
    "core": [
      "Nitrides contain N³⁻ and hydrolyse to NH₃.",
      "Mg₃N₂ forms when Mg burns in air.",
      "Phosphides release PH₃ on hydrolysis.",
      "Sulfides release H₂S with acids.",
      "The reactions show the strong reducing power of hot electropositive metals."
    ],
    "equations": [
      "Mg₃N₂ + 6H₂O → 3Mg(OH)₂ + 2NH₃",
      "Ca₃P₂ + 6H₂O → 3Ca(OH)₂ + 2PH₃",
      "MS + 2H⁺ → M²⁺ + H₂S"
    ],
    "jee": [
      "Nitride N³⁻ is not azide N₃⁻.",
      "Hydrolysis products identify the anion class."
    ],
    "example": [
      "Gas from Mg₃N₂ and water?",
      "NH₃."
    ],
    "table": null,
    "paragraphs": [
      "Polysulfides contain S-S bonded chains or rings carrying an overall 2- charge. Their colour and redox chemistry arise from delocalisation over the sulfur framework. The formula M2Sn does not imply a single isolated S_n unit in every solid; the actual structure may be polymeric.",
      "Hydrolysis of sulfide is important because S2- is a very strong base in water. Stepwise protonation forms HS- and H2S, so the observed species depend strongly on pH."
    ],
    "diagram": null
  },
  {
    "title": "Carbides of Group 2",
    "summary": "Different Group 2 carbides contain different carbon anions and yield different hydrocarbons on hydrolysis. Classification by hydrolysis product is highly testable.",
    "core": [
      "Be₂C is a methanide and gives CH₄.",
      "Mg₂C₃ is an allylide/propenide carbide and gives propyne.",
      "CaC₂, SrC₂ and BaC₂ are acetylides and give ethyne.",
      "CaC₂ is manufactured from CaO and coke in an electric furnace.",
      "All react vigorously with moisture."
    ],
    "equations": [
      "Be₂C + 4H₂O → 2Be(OH)₂ + CH₄",
      "Mg₂C₃ + 4H₂O → 2Mg(OH)₂ + CH₃C≡CH",
      "CaC₂ + 2H₂O → Ca(OH)₂ + HC≡CH"
    ],
    "jee": [
      "Do not assume every carbide gives acetylene.",
      "Hydrolysis conserves the carbon skeleton of the anion."
    ],
    "example": [
      "Match Be₂C, Mg₂C₃ and CaC₂ with products.",
      "CH₄, propyne and ethyne respectively."
    ],
    "table": null,
    "paragraphs": [
      "This topic should be interpreted through size, charge density, lattice enthalpy, hydration, polarisation and kinetic accessibility. The observed behaviour is the net result of these factors rather than a single isolated trend.",
      "For JEE Advanced, connect every reaction to structure and energetics, and retain the important exceptions as consequences of the same framework."
    ],
    "diagram": null
  },
  {
    "title": "Group 2 Complexes and Hydrolysis of Be²⁺",
    "summary": "Complex formation is strongest for Be²⁺ and Mg²⁺ because of high charge density. Hydrated Be²⁺ strongly polarises coordinated water, causing acidity and hydroxo-bridged species.",
    "core": [
      "Be commonly forms tetrahedral [Be(H₂O)₄]²⁺ and [BeF₄]²⁻.",
      "Mg commonly forms octahedral [Mg(H₂O)₆]²⁺.",
      "Strong Be-O bonding weakens O-H bonds and causes hydrolysis.",
      "Further hydrolysis can create hydroxo-bridged polymers.",
      "In excess alkali [Be(OH)₄]²⁻ forms."
    ],
    "equations": [
      "[Be(H₂O)₄]²⁺ + H₂O ⇌ [Be(H₂O)₃(OH)]⁺ + H₃O⁺",
      "Be(OH)₂ + 2OH⁻ → [Be(OH)₄]²⁻"
    ],
    "jee": [
      "Hydrolysis is acid-base chemistry, not redox.",
      "Coordination number depends on size and ligand packing, not simply 'd-orbital availability'."
    ],
    "example": [
      "Why is BeSO₄ solution acidic?",
      "Hydrated Be²⁺ polarises coordinated water and releases H₃O⁺."
    ],
    "table": null,
    "paragraphs": [
      "Complex stability reflects charge density, donor hardness, cavity size and desolvation. Alkali cations are hard acids and bind oxygen donors; selectivity arises when the ligand cavity matches the cation closely enough to maximise contacts without excessive strain.",
      "A cryptand surrounds a cation in three dimensions and usually binds more strongly than an analogous crown ether. By separating the cation from its counter-anion, these ligands can reveal unusual anions such as sodide or an electron-containing electride."
    ],
    "diagram": null
  },
  {
    "title": "Anomalous Behaviour of Beryllium",
    "summary": "Be is far smaller than Mg and has high IE and electronegativity. Its compounds are predominantly covalent, its oxide/hydroxide amphoteric and its common coordination number low.",
    "core": [
      "Be is protected by BeO and does not react with water.",
      "BeO and Be(OH)₂ dissolve in acid and alkali.",
      "BeCl₂ and BeH₂ are polymeric/electron-deficient.",
      "Be salts hydrolyse strongly and Be forms stable complexes.",
      "Simple BeCO₃ is unstable; basic carbonates are common."
    ],
    "equations": [
      "Be + 2OH⁻ + 2H₂O → [Be(OH)₄]²⁻ + H₂",
      "BeO + 2H⁺ → Be²⁺ + H₂O",
      "BeO + 2OH⁻ + H₂O → [Be(OH)₄]²⁻"
    ],
    "jee": [
      "Explain coordination using size/steric factors rather than literal empty d orbitals.",
      "Beryllium compounds require toxicity precautions."
    ],
    "example": [
      "Two differences between Be and Mg?",
      "BeO/Be(OH)₂ are amphoteric and BeCl₂ is strongly covalent/polymeric; Mg compounds are more ionic and basic."
    ],
    "table": null,
    "paragraphs": [
      "The first member anomaly is not a list of unrelated exceptions. Small radius raises ionisation and hydration enthalpies, increases polarising power, favours covalency and limits coordination because only compact valence orbitals are available. Most special reactions can be traced to one or more of these causes.",
      "Diagonal resemblance is partial, not identity. Moving down a group increases size while moving across a period decreases it; the two effects can offset along a diagonal. Similar charge density and electronegativity then produce parallel behaviour in selected compounds, but differences in charge and valence orbitals impose clear limits."
    ],
    "diagram": null
  },
  {
    "title": "Diagonal Relationship: Beryllium and Aluminium",
    "summary": "Be and Al show diagonal similarity because their charge density, electronegativity and polarising behaviour are comparable. Both are passivated, amphoteric and form covalent associated chlorides.",
    "core": [
      "Both develop protective oxide films.",
      "BeO/Be(OH)₂ and Al₂O₃/Al(OH)₃ are amphoteric.",
      "BeCl₂ and AlCl₃ are Lewis acids with bridging/association.",
      "They form [BeF₄]²⁻ and [AlF₆]³⁻.",
      "Both form nitrides/carbides and their salts hydrolyse."
    ],
    "equations": [
      "Be(OH)₂ + 2OH⁻ → [Be(OH)₄]²⁻",
      "Al(OH)₃ + OH⁻ → [Al(OH)₄]⁻"
    ],
    "jee": [
      "Diagonal similarity does not imply identical formulas.",
      "Be is +2 while Al is +3."
    ],
    "example": [
      "Why are BeCl₂ and AlCl₃ soluble in organic solvents?",
      "Strong cation polarisation gives substantial covalent character and molecular/associated species."
    ],
    "table": null,
    "paragraphs": [
      "The first member anomaly is not a list of unrelated exceptions. Small radius raises ionisation and hydration enthalpies, increases polarising power, favours covalency and limits coordination because only compact valence orbitals are available. Most special reactions can be traced to one or more of these causes.",
      "Diagonal resemblance is partial, not identity. Moving down a group increases size while moving across a period decreases it; the two effects can offset along a diagonal. Similar charge density and electronegativity then produce parallel behaviour in selected compounds, but differences in charge and valence orbitals impose clear limits."
    ],
    "diagram": null
  },
  {
    "title": "Masterclass H - Complete Group 2 Reaction Atlas",
    "summary": "Group 2 reactions are moderated by stronger metallic bonding and protective films, but the +2 oxidation state remains dominant throughout.",
    "paragraphs": [
      "Beryllium is protected by a compact BeO film and is essentially inert to water. Magnesium reacts slowly with cold water, faster with hot water and readily with steam to give MgO and H2. Calcium, strontium and barium react increasingly rapidly with cold water to give M(OH)2 and H2.",
      "On burning, Be and Mg can form both oxide and nitride because hot metal reduces atmospheric nitrogen. Ca, Sr and Ba form normal oxides; Ba also readily forms BaO2. All form nitrides M3N2 at high temperature and these hydrolyse to NH3.",
      "Ca, Sr and Ba form ionic hydrides MH2. BeH2 and MgH2 have much greater covalent character. With carbon, different carbide anions are possible: Be2C gives CH4 on hydrolysis, Mg2C3 gives propyne, and CaC2 gives ethyne.",
      "All react with halogens to form MX2. BeX2 is strongly covalent, MgX2 intermediate and the heavier halides mainly ionic. Hydrated Be and Mg chlorides hydrolyse on heating, whereas heavier hydrated chlorides can often be dehydrated more directly.",
      "Beryllium is amphoteric and dissolves in strong base through hydroxo-complex formation. Other Group 2 metals and hydroxides are predominantly basic."
    ],
    "core": [
      "Reactivity with water increases Be < Mg < Ca < Sr < Ba",
      "Common oxidation state +2",
      "Carbide hydrolysis product identifies the carbide anion"
    ],
    "equations": [
      "M + 2H2O -> M(OH)2 + H2",
      "3M + N2 -> M3N2",
      "M3N2 + 6H2O -> 3M(OH)2 + 2NH3",
      "CaC2 + 2H2O -> Ca(OH)2 + C2H2",
      "Be + 2OH- + 2H2O -> [Be(OH)4]^2- + H2"
    ],
    "jee": [],
    "example": [
      "Checkpoint",
      "Use the governing principle stated in the section."
    ],
    "table": [
      [
        "Metal/carbide",
        "Hydrolysis product",
        "Carbide type"
      ],
      [
        "Be2C",
        "CH4",
        "Methanide, C4-"
      ],
      [
        "Mg2C3",
        "C3H4 (propyne)",
        "Allylenide/C3^4- description"
      ],
      [
        "CaC2",
        "C2H2",
        "Acetylide, C2^2-"
      ]
    ],
    "diagram": null
  },
  {
    "title": "Masterclass I - Thermal Decomposition Atlas and Polarisation Model",
    "summary": "Thermal stability is governed by cation polarising power, anion structure, lattice stability of the product and entropy gained by gas evolution.",
    "paragraphs": [
      "A small cation strongly distorts an oxoanion and weakens bonds within it. Lithium carbonate therefore decomposes more readily than Na2CO3, and all Group 2 carbonates decompose to MO + CO2. Stability rises down Group 2 as polarising power falls.",
      "Group 1 nitrates show a classic split. LiNO3 gives Li2O, NO2 and O2, resembling Group 2 nitrates. NaNO3 and heavier nitrates give nitrites plus O2 under ordinary textbook conditions. The small Li+ ion destabilises nitrate more strongly and stabilises the oxide product.",
      "Group 2 nitrates all form the oxide, NO2 and O2. Hydroxides generally become more thermally stable down Group 2. LiOH decomposes on heating whereas heavier Group 1 hydroxides are much more stable.",
      "Hydrogen carbonates commonly decompose to carbonate, CO2 and H2O. Group 2 hydrogen carbonates exist mainly in solution. Sulfates are generally more thermally stable, though high temperatures can yield oxide and sulfur oxides depending on the metal.",
      "Entropy strongly favours reactions that create gases, but the temperature required depends on product-lattice stability and kinetic barriers. Therefore the qualitative polarisation rule predicts orders more reliably than exact decomposition temperatures."
    ],
    "core": [
      "Small cation -> stronger anion polarisation -> lower oxosalt stability",
      "Gas evolution gives favourable entropy at high T",
      "Li often resembles Group 2"
    ],
    "equations": [
      "Li2CO3 -> Li2O + CO2",
      "2LiNO3 -> Li2O + 2NO2 + 1/2O2",
      "2NaNO3 -> 2NaNO2 + O2",
      "2M(NO3)2 -> 2MO + 4NO2 + O2",
      "MCO3 -> MO + CO2"
    ],
    "jee": [],
    "example": [
      "Checkpoint",
      "Use the governing principle stated in the section."
    ],
    "table": [
      [
        "Compound series",
        "Typical thermal product"
      ],
      [
        "Li2CO3",
        "Li2O + CO2"
      ],
      [
        "Na2CO3 to Cs2CO3",
        "Stable at ordinary laboratory heating"
      ],
      [
        "LiNO3",
        "Li2O + NO2 + O2"
      ],
      [
        "NaNO3 to CsNO3",
        "Nitrite + O2"
      ],
      [
        "Group 2 nitrates",
        "MO + NO2 + O2"
      ],
      [
        "Group 2 carbonates",
        "MO + CO2"
      ]
    ],
    "diagram": null
  },
  {
    "title": "Masterclass M - Group 2 Numerical Data and Flame Diagnostics",
    "summary": "Group 2 cations are smaller and more strongly hydrated than corresponding Group 1 cations. Data explain their higher lattice energies, extensive hydration and stronger polarisation.",
    "paragraphs": [
      "The first ionisation enthalpy of a Group 2 element exceeds that of the Group 1 element in the same period because of increased nuclear charge and smaller size. The second ionisation enthalpy of Group 2 is nevertheless much lower than the second ionisation enthalpy of Group 1, because Group 1 has already reached a noble-gas configuration after losing one electron.",
      "Be and Mg do not show a useful flame colour because their electrons are held too strongly for ordinary flame excitation and their strongest emissions lie outside the easily observed visible region. Ca gives brick red, Sr crimson and Ba apple green."
    ],
    "core": [
      "IE1(Group 2) > IE1(Group 1) in same period",
      "IE2(Group 2) << IE2(Group 1) in same period",
      "Hydration magnitude decreases down Group 2"
    ],
    "equations": [],
    "jee": [],
    "example": [
      "Checkpoint",
      "Use the governing principle stated in the section."
    ],
    "table": [
      [
        "Group 2",
        "Be",
        "Mg",
        "Ca",
        "Sr",
        "Ba"
      ],
      [
        "IE1 / kJ mol-1",
        "899",
        "737",
        "590",
        "549",
        "503"
      ],
      [
        "IE2 / kJ mol-1",
        "1757",
        "1450",
        "1145",
        "1064",
        "965"
      ],
      [
        "Hydration ΔH / kJ mol-1",
        "-2494",
        "-1921",
        "-1577",
        "-1443",
        "-1305"
      ],
      [
        "M2+ radius / pm",
        "45*",
        "72",
        "100",
        "118",
        "135"
      ],
      [
        "mp / K",
        "1560",
        "924",
        "1124",
        "1062",
        "1002"
      ],
      [
        "Flame",
        "None",
        "None",
        "Brick red",
        "Crimson",
        "Apple green"
      ]
    ],
    "diagram": null
  },
  {
    "title": "Extraction and Uses of Group 2 Metals",
    "summary": "Group 2 metals are not produced from aqueous electrolysis. Fused chloride electrolysis is common, while Mg can also be made from seawater and by vacuum thermal reduction.",
    "core": [
      "Seawater Mg²⁺ is precipitated as Mg(OH)₂, converted to MgCl₂ and dehydrated without hydrolysis.",
      "Molten MgCl₂ gives Mg and Cl₂.",
      "The Pidgeon process reduces calcined dolomite with ferrosilicon under vacuum and condenses Mg vapour.",
      "Ca is obtained from fused CaCl₂.",
      "Be-Cu alloys, Mg light alloys, Ca reductant/getter and Sr/Ba speciality salts are important uses."
    ],
    "equations": [
      "Mg²⁺ + 2OH⁻ → Mg(OH)₂↓",
      "MgCl₂(l) → Mg + Cl₂",
      "CaCl₂(l) → Ca + Cl₂"
    ],
    "jee": [
      "Simple heating of MgCl₂ hydrate gives basic chloride/MgO.",
      "Vacuum drives Mg formation by removing vapour."
    ],
    "example": [
      "Why dry MgCl₂ in HCl/NH₄Cl conditions?",
      "These conditions suppress hydrolysis and allow water removal without forming Mg(OH)Cl or MgO."
    ],
    "table": null,
    "paragraphs": [
      "Industrial chemistry is best learned as a material-flow and equilibrium problem. Each process uses recycling, selective precipitation, gas removal or melting-point control to drive an otherwise inconvenient reaction. Writing the purpose of every unit operation is more useful than memorising an isolated flow sheet.",
      "When an industrial equation is tested in JEE, identify the economic reagent, recycled reagent, useful product and unavoidable by-product. Also distinguish thermodynamic feasibility from engineering choices such as temperature, electrode separation, corrosion control and particle size."
    ],
    "diagram": null
  },
  {
    "title": "Important Magnesium Compounds",
    "summary": "Mg compounds connect refractory materials, medicine, hydration chemistry and speciality cements. Their behaviour reflects strong Mg²⁺ hydration and moderate polarising power.",
    "core": [
      "MgO is refractory and weakly basic; light/heavy magnesia differ in surface area.",
      "Mg(OH)₂ suspension is milk of magnesia and acts as an antacid.",
      "Basic Mg carbonate is used in fillers/pharmaceuticals and gives MgO on heating.",
      "MgSO₄·7H₂O is Epsom salt.",
      "Sorel cement forms from MgO-MgCl₂ paste and hardens to oxychloride phases."
    ],
    "equations": [
      "MgCO₃ → MgO + CO₂",
      "Mg(OH)₂ + 2HCl → MgCl₂ + 2H₂O"
    ],
    "jee": [
      "A sparingly soluble base can neutralise acid without an immediate high [OH⁻].",
      "Drying-agent choice is specific to the substance dried."
    ],
    "example": [
      "Why is MgO a refractory?",
      "It has a high melting point and strong ionic lattice and resists basic slags."
    ],
    "table": null,
    "paragraphs": [
      "This topic should be interpreted through size, charge density, lattice enthalpy, hydration, polarisation and kinetic accessibility. The observed behaviour is the net result of these factors rather than a single isolated trend.",
      "For JEE Advanced, connect every reaction to structure and energetics, and retain the important exceptions as consequences of the same framework."
    ],
    "diagram": null
  },
  {
    "title": "Calcium Oxide (Quicklime) and the Lime Cycle",
    "summary": "Quicklime is produced by calcining limestone. The CaCO₃-CaO-CO₂ equilibrium is controlled by temperature and CO₂ pressure and underlies lime kilns, fluxing and construction.",
    "core": [
      "CaCO₃(s)⇌CaO(s)+CO₂(g); removing CO₂ drives decomposition.",
      "Kilns operate around 1070-1270 K depending on feed and gas flow.",
      "CaO reacts exothermically with water in slaking.",
      "CaO absorbs moisture/CO₂ and reacts with acidic oxides.",
      "Uses include cement, fluxing, sugar purification and soda lime."
    ],
    "equations": [
      "CaCO₃ ⇌ CaO + CO₂",
      "CaO + H₂O → Ca(OH)₂",
      "CaO + SiO₂ → CaSiO₃"
    ],
    "jee": [
      "Solids have nearly constant activity, so CO₂ pressure is critical.",
      "Quicklime=CaO; slaked lime=Ca(OH)₂; limestone=CaCO₃."
    ],
    "example": [
      "How does CO₂ removal help a lime kiln?",
      "It lowers product partial pressure and shifts decomposition toward CaO."
    ],
    "table": null,
    "paragraphs": [
      "Industrial chemistry is best learned as a material-flow and equilibrium problem. Each process uses recycling, selective precipitation, gas removal or melting-point control to drive an otherwise inconvenient reaction. Writing the purpose of every unit operation is more useful than memorising an isolated flow sheet.",
      "When an industrial equation is tested in JEE, identify the economic reagent, recycled reagent, useful product and unavoidable by-product. Also distinguish thermodynamic feasibility from engineering choices such as temperature, electrode separation, corrosion control and particle size."
    ],
    "diagram": "lime-cycle"
  },
  {
    "title": "Calcium Hydroxide: Lime Water, Milk of Lime and Mortar",
    "summary": "Ca(OH)₂ is made by slaking CaO. Its saturated solution is lime water and suspension is milk of lime. Carbonation and chlorination make it important in tests and industry.",
    "core": [
      "Limited water gives slaked-lime powder; excess gives suspension.",
      "CO₂ first forms CaCO₃ turbidity; excess CO₂ forms soluble Ca(HCO₃)₂.",
      "Milk of lime reacts with Cl₂ to give chloride/hypochlorite products.",
      "Mortar contains slaked lime, sand and water and hardens partly by carbonation.",
      "Uses include whitewash, sugar purification, water treatment and bleaching powder."
    ],
    "equations": [
      "Ca(OH)₂ + CO₂ → CaCO₃↓ + H₂O",
      "CaCO₃ + CO₂ + H₂O → Ca(HCO₃)₂",
      "2Ca(OH)₂ + 2Cl₂ → CaCl₂ + Ca(OCl)₂ + 2H₂O"
    ],
    "jee": [
      "Excess CO₂ clears the lime-water test.",
      "Whitewash brightens as fine CaCO₃ forms."
    ],
    "example": [
      "Why does lime water turn milky then clear?",
      "CaCO₃ precipitates first; excess CO₂ converts it into soluble Ca(HCO₃)₂."
    ],
    "table": null,
    "paragraphs": [
      "Basicity and solubility are distinct. Basicity concerns the tendency of dissolved hydroxide to furnish OH-, whereas solubility depends on the balance between lattice separation and hydration. In Group 2, lattice enthalpy falls rapidly down the group, so hydroxide solubility rises even though hydration becomes less exothermic.",
      "Be(OH)2 is amphoteric because the small Be2+ centre strongly polarises Be-O bonds and forms stable hydroxo complexes in excess base. The heavier hydroxides are increasingly ionic and behave as ordinary bases."
    ],
    "diagram": null
  },
  {
    "title": "Calcium Carbonate: Forms, Reactions and Geology",
    "summary": "CaCO₃ occurs as limestone, chalk, marble, calcite and aragonite. Its acid reaction, decomposition and CO₂-dependent solubility connect geology, metallurgy and qualitative chemistry.",
    "core": [
      "Calcite is rhombohedral/trigonal and aragonite orthorhombic.",
      "CaCO₃ precipitates from Ca²⁺ and CO₃²⁻.",
      "Acids release CO₂; H₂SO₄ can form a passivating CaSO₄ coat.",
      "Heating gives CaO; limestone/dolomite act as fluxes.",
      "CO₂-rich water dissolves limestone and later deposits stalactites/stalagmites."
    ],
    "equations": [
      "Ca²⁺ + CO₃²⁻ → CaCO₃↓",
      "CaCO₃ + 2HCl → CaCl₂ + CO₂ + H₂O"
    ],
    "jee": [
      "Calcite and aragonite are polymorphs.",
      "An insoluble product coating can slow an acid reaction."
    ],
    "example": [
      "Why can H₂SO₄ react less completely with CaCO₃ than HCl?",
      "Sparingly soluble CaSO₄ coats the surface; soluble CaCl₂ does not."
    ],
    "table": null,
    "paragraphs": [
      "Thermal decomposition of an oxosalt is favoured when the cation strongly polarises the polyatomic anion and when gaseous products provide a large entropy gain. Small Li+ and Be2+ therefore destabilise carbonate and nitrate ions more effectively than their heavier congeners.",
      "Solubility cannot be inferred from charge alone. For a series with the same anion, hydration becomes less favourable down the group, while lattice enthalpy also changes. The observed trend identifies which term changes more strongly; Group 2 hydroxides and sulfates provide classic opposite examples."
    ],
    "diagram": null
  },
  {
    "title": "Gypsum, Plaster of Paris and Anhydrite",
    "summary": "Controlled dehydration of gypsum gives plaster of Paris, which sets by rehydration and crystal interlocking. Excess heating produces slowly hydrating dead-burnt material.",
    "core": [
      "Gypsum is CaSO₄·2H₂O.",
      "Heating near 393 K gives CaSO₄·½H₂O.",
      "The hemihydrate notation means one water per two formula units.",
      "Water causes partial dissolution and reprecipitation of interlocking gypsum crystals.",
      "Strong heating gives anhydrite/dead-burnt plaster with poor setting."
    ],
    "equations": [
      "CaSO₄·2H₂O → CaSO₄·½H₂O + 3/2H₂O",
      "CaSO₄·½H₂O + 3/2H₂O → CaSO₄·2H₂O"
    ],
    "jee": [
      "Setting is hydration/recrystallisation, not simple drying.",
      "Mass-loss calculations often test hemihydrate stoichiometry."
    ],
    "example": [
      "Why does plaster harden with water?",
      "It rehydrates and forms interlocking gypsum crystals."
    ],
    "table": null,
    "paragraphs": [
      "Industrial chemistry is best learned as a material-flow and equilibrium problem. Each process uses recycling, selective precipitation, gas removal or melting-point control to drive an otherwise inconvenient reaction. Writing the purpose of every unit operation is more useful than memorising an isolated flow sheet.",
      "When an industrial equation is tested in JEE, identify the economic reagent, recycled reagent, useful product and unavoidable by-product. Also distinguish thermodynamic feasibility from engineering choices such as temperature, electrode separation, corrosion control and particle size."
    ],
    "diagram": null
  },
  {
    "title": "Portland Cement: Composition, Manufacture and Setting",
    "summary": "Portland cement is made by firing limestone and clay to clinker, then grinding with a small amount of gypsum. Setting is a multistep hydration of calcium silicates and aluminates.",
    "core": [
      "Typical oxides: CaO 50-60%, SiO₂ 20-25%, Al₂O₃ 5-10%, with smaller MgO/Fe₂O₃/SO₃.",
      "Major clinker phases are C₃S, C₂S, C₃A and ferrite.",
      "Raw meal is heated in a rotary kiln and clinker cooled/ground.",
      "Gypsum retards rapid C₃A hydration and prevents flash set.",
      "C₃S gives early strength; C₂S contributes later strength through hydrated silicate gel."
    ],
    "equations": [
      "Limestone + clay →(kiln) clinker",
      "Clinker + 2-3% gypsum → Portland cement"
    ],
    "jee": [
      "Gypsum slows setting; it is not simply a filler.",
      "Cement setting differs from lime mortar carbonation."
    ],
    "example": [
      "What is the role of gypsum?",
      "It controls rapid aluminate hydration and provides workable setting time."
    ],
    "table": null,
    "paragraphs": [
      "Industrial chemistry is best learned as a material-flow and equilibrium problem. Each process uses recycling, selective precipitation, gas removal or melting-point control to drive an otherwise inconvenient reaction. Writing the purpose of every unit operation is more useful than memorising an isolated flow sheet.",
      "When an industrial equation is tested in JEE, identify the economic reagent, recycled reagent, useful product and unavoidable by-product. Also distinguish thermodynamic feasibility from engineering choices such as temperature, electrode separation, corrosion control and particle size."
    ],
    "diagram": null
  },
  {
    "title": "Hardness of Water",
    "summary": "Hardness is caused mainly by Ca²⁺ and Mg²⁺. Temporary hardness arises from hydrogen carbonates and can be boiled away; permanent hardness requires precipitation, ion exchange or sequestration.",
    "core": [
      "Soap first forms insoluble Ca/Mg stearates and scale reduces heat transfer.",
      "Boiling converts HCO₃⁻ to CO₃²⁻ and precipitates salts.",
      "Clark's lime process precipitates carbonate and Mg(OH)₂.",
      "Washing soda, zeolite and ion exchange remove hardness ions.",
      "Calgon/polyphosphates sequester ions in soluble complexes."
    ],
    "equations": [
      "Ca(HCO₃)₂ → CaCO₃↓ + CO₂ + H₂O",
      "Ca²⁺ + CO₃²⁻ → CaCO₃↓",
      "2R-Na + Ca²⁺ → R₂-Ca + 2Na⁺"
    ],
    "jee": [
      "Hardness is often reported as mg L⁻¹ CaCO₃ equivalent.",
      "Na⁺ exchange softens but does not fully demineralise."
    ],
    "example": [
      "40 mg L⁻¹ Ca²⁺ corresponds to what hardness?",
      "100 mg L⁻¹ as CaCO₃, using factor 100/40=2.5."
    ],
    "table": null,
    "paragraphs": [
      "Hardness is analytically expressed as an equivalent mass concentration of CaCO3 so that different Ca2+ and Mg2+ salts can be compared on the same charge basis. Temporary hardness is associated mainly with hydrogen carbonates and is removed by shifting carbonate equilibria; permanent hardness requires precipitation, ion exchange or sequestration.",
      "Soap failure is a precipitation reaction, not a loss of surfactant activity in principle. Ca2+ or Mg2+ consumes stearate ions as an insoluble salt before enough free surfactant remains to form lather."
    ],
    "diagram": null
  },
  {
    "title": "Biological Importance of Magnesium and Calcium",
    "summary": "Mg²⁺ supports ATP chemistry and chlorophyll; Ca²⁺ forms mineral structure and acts as a tightly controlled signal. Selective oxygen-donor coordination is central to both.",
    "core": [
      "Mg²⁺ binds ATP phosphate groups and supports kinases.",
      "Chlorophyll contains Mg in a porphyrin-like ligand.",
      "Most body Ca is stored in bones/teeth as apatite-like mineral.",
      "Transient cytosolic Ca²⁺ signals control contraction, secretion and enzymes.",
      "Ca²⁺ participates in clotting and is regulated by parathyroid hormone/calcitonin."
    ],
    "equations": [],
    "jee": [
      "Biological selectivity reflects geometry, hydration and kinetics.",
      "Bone is a dynamic reservoir, not inert material."
    ],
    "example": [
      "Why is Mg²⁺ associated with ATP?",
      "It coordinates phosphate oxygens, screens charge and organises ATP for enzyme-catalysed transfer."
    ],
    "table": null,
    "paragraphs": [
      "Biological selectivity is achieved by proteins and membranes rather than by isolated-ion chemistry alone. Na+ and K+ have the same charge but different size and hydration, allowing ion channels to discriminate through precisely arranged donor groups. Mg2+ and Ca2+ have higher charge density and serve as enzyme cofactors, structural ions and signalling agents.",
      "The free concentration of a biological ion can be far smaller than its total concentration because much of it is bound to proteins, phosphates or mineral phases. Therefore biological function should not be inferred only from bulk abundance."
    ],
    "diagram": null
  },
  {
    "title": "Masterclass K - Calcium, Magnesium, Gypsum, Plaster and Cement Chemistry",
    "summary": "The CaCO3-CaO-Ca(OH)2 cycle links geology, construction and industrial chemistry; magnesium compounds add refractory, medicinal and cement applications.",
    "paragraphs": [
      "Calcination of limestone is an equilibrium. Removing CO2 and maintaining sufficiently high temperature drives CaCO3 -> CaO + CO2. Adding limited water to quicklime gives an exothermic slaking reaction and produces Ca(OH)2. Exposure to atmospheric CO2 slowly regenerates CaCO3, which is the basis of lime mortar hardening.",
      "Lime water is a clear saturated solution, whereas milk of lime is a suspension. CO2 first gives a CaCO3 precipitate; excess CO2 converts it into soluble Ca(HCO3)2. This reversible sequence explains temporary hardness, cave formation and the lime-water test.",
      "Heating gypsum carefully removes three-quarters of its water per formula unit and gives calcium sulfate hemihydrate, commonly written CaSO4·1/2H2O. Addition of water reforms interlocking gypsum crystals, causing plaster to set. Excessive heating gives poorly reactive anhydrous material called dead-burnt plaster.",
      "Portland cement contains clinker phases rather than one pure compound. C3S hydrates relatively rapidly and contributes early strength; C2S hydrates more slowly and contributes later strength; C3A reacts very rapidly and is moderated by gypsum; C4AF contributes less to strength but affects manufacture and colour. Hydration forms calcium-silicate-hydrate gel and Ca(OH)2.",
      "MgO is refractory; Mg(OH)2 is used as milk of magnesia; MgSO4·7H2O is Epsom salt. Heating hydrated MgCl2 directly causes hydrolysis, so anhydrous MgCl2 requires protected dehydration or a double-salt route. Sorel cement is based on MgO and MgCl2 solution and sets through oxychloride phases."
    ],
    "core": [
      "Lime cycle: CaCO3 <-> CaO <-> Ca(OH)2",
      "Plaster sets by rehydration to gypsum",
      "Cement phases: C3S, C2S, C3A, C4AF"
    ],
    "equations": [
      "CaCO3 -> CaO + CO2",
      "CaO + H2O -> Ca(OH)2",
      "Ca(OH)2 + CO2 -> CaCO3 + H2O",
      "CaCO3 + CO2 + H2O -> Ca(HCO3)2"
    ],
    "jee": [],
    "example": [
      "Checkpoint",
      "Use the governing principle stated in the section."
    ],
    "table": [
      [
        "Material",
        "Formula/phase",
        "Key role"
      ],
      [
        "Quicklime",
        "CaO",
        "Basic oxide; cement and metallurgy"
      ],
      [
        "Slaked lime",
        "Ca(OH)2",
        "Mortar, water treatment, whitewash"
      ],
      [
        "Gypsum",
        "CaSO4·2H2O",
        "Cement retarder; source of plaster"
      ],
      [
        "Plaster of Paris",
        "CaSO4·1/2H2O",
        "Sets by rehydration"
      ],
      [
        "C3S",
        "3CaO·SiO2",
        "Early cement strength"
      ],
      [
        "C2S",
        "2CaO·SiO2",
        "Later strength"
      ]
    ],
    "diagram": null
  },
  {
    "title": "Qualitative Analysis of Group 1 and Group 2 Ions",
    "summary": "Identification combines flame emission, selective precipitation, Ksp and confirmatory reactions. Group 1 ions are rarely precipitated; Group 2 ions give useful carbonates, sulfates, oxalates and chromates.",
    "core": [
      "Li⁺/Na⁺/K⁺ are mainly distinguished by flame or spectroscopy.",
      "Ca²⁺ gives white oxalate; Sr²⁺ and Ba²⁺ are differentiated by flame and sulfate/chromate chemistry.",
      "BaSO₄ is dense white; BaCrO₄ is yellow under controlled pH.",
      "Mg²⁺ can precipitate as MgNH₄PO₄ in ammoniacal solution.",
      "Selective precipitation requires control of pH, concentration and complexants."
    ],
    "equations": [
      "Ba²⁺ + SO₄²⁻ → BaSO₄↓",
      "Ca²⁺ + C₂O₄²⁻ → CaC₂O₄↓",
      "Mg²⁺ + NH₄⁺ + PO₄³⁻ → MgNH₄PO₄↓"
    ],
    "jee": [
      "A low Ksp is insufficient unless ionic product exceeds it.",
      "Flame colours may be masked and need confirmation."
    ],
    "example": [
      "How is sulfate confirmed with barium salt?",
      "Acidify to remove carbonate/sulfite interference, then add Ba²⁺; persistent white BaSO₄ confirms sulfate."
    ],
    "table": null,
    "paragraphs": [
      "Selective precipitation depends on Ksp, common-ion concentration, complex formation and pH. A flame test is supportive rather than definitive because contamination and overlapping emissions are common. Confirmatory tests should therefore combine an independent precipitation or complexation reaction with the flame observation.",
      "In a separation scheme, reagent order matters. Adding a strongly precipitating anion too early can co-precipitate several ions, whereas controlled pH or complexation can keep selected ions in solution."
    ],
    "diagram": null
  },
  {
    "title": "Group 1 versus Group 2: Complete Comparison",
    "summary": "Doubling cation charge and decreasing radius changes metallic bonding, hydration, covalency, oxide basicity, salt solubility and decomposition. Cross-group comparison is a powerful revision method.",
    "core": [
      "Group 1 gives M⁺; Group 2 gives M²⁺ with larger lattice and hydration enthalpies.",
      "Group 2 metals are harder/higher-melting because two valence electrons strengthen bonding.",
      "Group 1 hydroxides are highly soluble; Group 2 hydroxide solubility increases down the group and Be(OH)₂ is amphoteric.",
      "Group 1 carbonates are mostly soluble/stable except Li; Group 2 carbonates are insoluble/decompose.",
      "Group 2 sulfate solubility falls to BaSO₄.",
      "Li-Mg and Be-Al diagonal relationships summarise first-member anomalies."
    ],
    "equations": [],
    "jee": [
      "Cross-group reasoning often predicts unfamiliar facts.",
      "Charge effects are strongest for small cations."
    ],
    "example": [
      "Why is BaSO₄ insoluble while K₂SO₄ is soluble?",
      "Ba²⁺ and SO₄²⁻ create a high-charge lattice; the K₂SO₄ lattice is more easily overcome by hydration."
    ],
    "table": [
      [
        "Feature",
        "Group 1",
        "Group 2"
      ],
      [
        "Valence ion",
        "M⁺",
        "M²⁺"
      ],
      [
        "Oxygen compounds",
        "Oxide/peroxide/superoxide",
        "MO; heavier peroxides"
      ],
      [
        "Hydroxides",
        "Highly soluble strong bases",
        "Solubility/basicity rise down group"
      ],
      [
        "Carbonates",
        "Mostly soluble/stable",
        "Insoluble; decompose"
      ],
      [
        "Complexes",
        "Weak except Li/macrocycles",
        "Strongest for Be/Mg"
      ]
    ],
    "paragraphs": [
      "A trend table should include the controlling reason and the major exception. Pure memorisation becomes unreliable when two energetic terms change in opposite directions. For each order, identify whether size, charge density, lattice enthalpy, hydration, polarisation or entropy is dominant.",
      "Conversion maps are particularly valuable for s-block chemistry because oxidation states change little. The challenge is instead recognition of anions, hydration states, gas evolution and thermal products."
    ],
    "diagram": null
  },
  {
    "title": "Master Trend Tables and Exception Map",
    "summary": "This page condenses principal orders and their controlling reasons. Use it for rapid revision only after understanding the detailed pages.",
    "core": [
      "Group 1 radius increases Li→Cs; IE₁ and hydration magnitude reverse.",
      "Group 2 radius increases Be→Ba; IE and hydration magnitude reverse.",
      "Group 2 hydroxide solubility/basicity increase down the group.",
      "Group 2 sulfate solubility decreases down the group.",
      "Carbonate/nitrate thermal stability usually increases as polarisation falls.",
      "Covalent character increases with smaller cation and larger anion."
    ],
    "equations": [],
    "jee": [
      "Retain data exceptions such as K density and irregular Group 2 m.p.",
      "A trend is a dominant factor, not an inviolable law."
    ],
    "example": [
      "More covalent: BeI₂ or BaF₂?",
      "BeI₂, because Be²⁺ is strongly polarising and I⁻ is highly polarizable."
    ],
    "table": [
      [
        "Property",
        "Trend",
        "Reason"
      ],
      [
        "Hydration |ΔH|",
        "small ion > large ion",
        "charge density"
      ],
      [
        "Metal softness",
        "increases down Group 1",
        "cohesion falls"
      ],
      [
        "Oxide basicity",
        "increases down group",
        "ionic O²⁻ character"
      ],
      [
        "Carbonate stability",
        "increases down group",
        "polarisation falls"
      ],
      [
        "Group 2 sulfate solubility",
        "decreases down group",
        "hydration falls"
      ],
      [
        "Group 2 hydroxide solubility",
        "increases down group",
        "lattice falls faster"
      ]
    ],
    "paragraphs": [
      "A trend table should include the controlling reason and the major exception. Pure memorisation becomes unreliable when two energetic terms change in opposite directions. For each order, identify whether size, charge density, lattice enthalpy, hydration, polarisation or entropy is dominant.",
      "Conversion maps are particularly valuable for s-block chemistry because oxidation states change little. The challenge is instead recognition of anions, hydration states, gas evolution and thermal products."
    ],
    "diagram": null
  },
  {
    "title": "Reaction Maps for Rapid Revision",
    "summary": "Conversion maps reduce descriptive chemistry to linked species. The reagent, phase and condition written above an arrow are as important as the formula at its end.",
    "core": [
      "NaCl(l)→Na, whereas NaCl(aq)→NaOH+Cl₂+H₂.",
      "Li→Li₂O, Na→Na₂O₂, K/Rb/Cs→MO₂ in oxygen.",
      "CaCO₃⇌CaO→Ca(OH)₂→CaCO₃; excess CO₂ gives Ca(HCO₃)₂.",
      "Gypsum⇌plaster⇌anhydrite through controlled heating/hydration.",
      "Be₂C, Mg₂C₃ and CaC₂ give CH₄, C₃H₄ and C₂H₂ on hydrolysis."
    ],
    "equations": [
      "NaCl(aq) --electrolysis→ NaOH + Cl₂ + H₂",
      "CaCO₃ --Δ→ CaO --H₂O→ Ca(OH)₂ --CO₂→ CaCO₃",
      "CaSO₄·2H₂O --393 K→ CaSO₄·½H₂O"
    ],
    "jee": [
      "Always write phase labels.",
      "Excess reagent frequently changes products."
    ],
    "example": [
      "Convert CaCO₃ conceptually into plaster of Paris.",
      "Calcine to CaO, hydrate to Ca(OH)₂, react with H₂SO₄ to gypsum, then heat near 393 K."
    ],
    "table": null,
    "paragraphs": [
      "A trend table should include the controlling reason and the major exception. Pure memorisation becomes unreliable when two energetic terms change in opposite directions. For each order, identify whether size, charge density, lattice enthalpy, hydration, polarisation or entropy is dominant.",
      "Conversion maps are particularly valuable for s-block chemistry because oxidation states change little. The challenge is instead recognition of anions, hydration states, gas evolution and thermal products."
    ],
    "diagram": null
  },
  {
    "title": "Masterclass N - Fifty High-Yield Statements with Corrections",
    "summary": "This section targets statement-based and multiple-correct questions by pairing each common claim with the precise correction.",
    "paragraphs": [
      "1. 'Lithium is always the most reactive alkali metal.' Correction: lithium is the strongest aqueous reducing agent by E°, but visible reaction rate depends on kinetics and medium.",
      "2. 'All alkali-metal salts are soluble.' Correction: LiF, Li2CO3 and Li3PO4 are sparingly soluble; several perchlorates and complex salts also show exceptions.",
      "3. 'All Group 1 oxygen compounds are diamagnetic.' Correction: superoxides and ozonides are paramagnetic radical salts.",
      "4. 'Peroxide has a stronger O-O bond than superoxide.' Correction: peroxide bond order is 1, superoxide 1.5; peroxide has the weaker, longer bond.",
      "5. 'Beryllium is unreactive because it is not electropositive.' Correction: it is thermodynamically reducing but kinetically protected by an adherent oxide film.",
      "6. 'Solubility of Group 2 hydroxides decreases down the group because hydration decreases.' Correction: lattice enthalpy decreases more strongly, so solubility increases.",
      "7. 'BaSO4 is insoluble because Ba2+ is large.' Correction: weak Ba2+ hydration is not sufficient to overcome the sulfate lattice.",
      "8. 'BeCl2 is ionic because Be is a metal.' Correction: high polarising power makes BeCl2 covalent and polymeric.",
      "9. 'Hydrated MgCl2 can be dehydrated by heating.' Correction: it hydrolyses; protected or double-salt methods are needed.",
      "10. 'Group 2 nitrates give nitrites on heating.' Correction: they give oxides, NO2 and O2.",
      "11. 'Na2CO3 is prepared by directly carbonating NaOH in the Solvay process.' Correction: NaHCO3 is selectively precipitated from ammoniated brine and then calcined.",
      "12. 'K2CO3 can be made by Solvay because K and Na are similar.' Correction: KHCO3 is too soluble for selective precipitation.",
      "13. 'All calcium sulfate obtained by heating gypsum is plaster of Paris.' Correction: controlled heating gives hemihydrate; stronger heating gives anhydrite/dead-burnt plaster.",
      "14. 'A flame colour is a colour of the ionic crystal.' Correction: it is atomic emission from excited gaseous species.",
      "15. 'Smallest ion has highest mobility.' Correction: strong hydration can give the smallest bare ion the largest hydrodynamic size.",
      "16. 'Covalent character always decreases solubility in water and increases it in organic solvent.' Correction: this is a useful tendency, not a universal law; lattice and specific solvation also matter.",
      "17. 'All hydrides of Group 2 are ionic.' Correction: BeH2 is covalent/electron deficient and MgH2 has substantial covalent character.",
      "18. 'Li and Mg are identical because of diagonal relationship.' Correction: they share selected properties, but charge and group chemistry remain different.",
      "19. 'Cement setting is simple drying.' Correction: it is hydration and formation of new solid phases.",
      "20. 'Temporary hardness means the salt is temporary.' Correction: it means hardness is removable by boiling due to hydrogen-carbonate equilibria.",
      "21. 'All alkali-metal hydroxides remain unchanged on heating.' Correction: LiOH decomposes to Li2O, whereas the heavier hydroxides are substantially more thermally stable.",
      "22. 'Lithium can form only Li2O with oxygen.' Correction: Li2O is the principal combustion product, but peroxide formation is possible under suitable conditions; product language must include conditions.",
      "23. 'Sodium always burns exclusively to Na2O2.' Correction: Na2O2 is favoured in excess oxygen, while Na2O can be prepared under controlled oxygen supply or by reduction routes.",
      "24. 'Hydrolysis of KO2 produces only KOH and O2.' Correction: primary stoichiometry includes H2O2 as well as O2; peroxide may subsequently decompose under reaction conditions.",
      "25. 'The aqueous standard potential of an alkali metal is determined only by its ionisation enthalpy.' Correction: atomisation, ionisation and hydration together determine the free-energy change.",
      "26. 'The order of violence with water must be identical to the order of aqueous E° values.' Correction: E° is thermodynamic; melting, surface renewal, heat transfer and activation barriers control observed rate.",
      "27. 'Alkali metals can be deposited from ordinary aqueous salt solutions if a large voltage is applied.' Correction: water or hydrogen ions are reduced preferentially; molten-salt electrolysis is required.",
      "28. 'Potassium is necessarily manufactured by direct electrolysis of molten KCl.' Correction: industrial separation can exploit reduction of KCl by sodium followed by removal of volatile potassium, which drives the equilibrium.",
      "29. 'Alkali-metal ions do not form complexes.' Correction: their ordinary complexes are weaker than those of small multivalent ions, but Li+ aqua complexes and highly selective crown-ether and cryptand complexes are important.",
      "30. 'Crown-ether selectivity is governed only by ionic charge.' Correction: cavity size, donor geometry, cation size, desolvation and counter-ion effects all contribute.",
      "31. 'All metal-ammonia solutions have the same colour and magnetic behaviour.' Correction: dilute solutions are blue and paramagnetic; concentrated solutions become bronze/metallic as electron states overlap and pair.",
      "32. 'The blue colour of an alkali-metal/liquid-ammonia solution belongs to the metal cation.' Correction: it is principally due to the solvated electron.",
      "33. 'Every alkali-metal halide must possess the NaCl lattice.' Correction: structure depends on radius and conditions; CsCl-type coordination is common for sufficiently large cations and polymorphism can occur.",
      "34. 'The radius-ratio rule predicts an ionic crystal structure exactly.' Correction: it is a geometrical guide; polarisation, compressibility, energetics and temperature can change the preferred structure.",
      "35. 'LiF is the most covalent lithium halide because it is least soluble.' Correction: LiI is most covalent because I− is most polarizable; LiF is sparingly soluble mainly because of its exceptionally strong lattice.",
      "36. 'A large hydration enthalpy guarantees high solubility.' Correction: dissolution depends on the balance of hydration, lattice separation and entropy, not hydration alone.",
      "37. 'Thermal stability of alkali-metal carbonates decreases down the group.' Correction: it generally increases as cation polarising power decreases; Li2CO3 is the prominent unstable member.",
      "38. 'All alkali-metal hydrogen carbonates can be isolated as stable solids.' Correction: LiHCO3 is known essentially in solution, whereas the heavier congeners form isolable solids.",
      "39. 'Every Group 2 hydroxide is a strong, freely soluble base.' Correction: Be(OH)2 is amphoteric, Mg(OH)2 is sparingly soluble and weak in bulk solution, and solubility/basicity increase toward Ba(OH)2.",
      "40. 'All Group 2 metals react rapidly with cold water.' Correction: Be is protected and essentially inert, Mg reacts slowly and more readily with hot water or steam, while Ca, Sr and Ba react increasingly rapidly.",
      "41. 'Calling a beryllium compound covalent means it contains no ionic contribution.' Correction: bonding is a continuum; the useful conclusion is strong polarisation, directional/network bonding and extensive hydrolysis relative to heavier congeners.",
      "42. 'Magnesium burning in air gives pure MgO.' Correction: hot magnesium also fixes atmospheric nitrogen to form some Mg3N2.",
      "43. 'Barium gives only BaO on combustion.' Correction: the large Ba2+ ion stabilises peroxide strongly, so BaO2 is readily formed under oxygen-rich conditions.",
      "44. 'The sulfate-solubility trend is a lattice-energy trend alone.' Correction: lattice and hydration terms both change; decreasing hydration down Group 2 is decisive in the fall toward BaSO4.",
      "45. 'Group 2 carbonate solubility falls because lattice enthalpy rises sharply down the group.' Correction: the large carbonate ion makes lattice change comparatively modest, while cation hydration becomes much less favourable.",
      "46. 'Be2+ cannot exceed coordination number four simply because it has no vacant d orbitals.' Correction: modern bonding does not require d-orbital hybridisation; small size, ligand crowding, charge density and orbital energetics govern the usual low coordination number.",
      "47. 'BeCl2 has one universal hybridisation and one universal shape.' Correction: hot gaseous BeCl2 is linear, cooler vapour contains bridged associates and the solid is polymeric; structure must be stated with phase.",
      "48. 'Heating MgCl2·6H2O is a straightforward route to anhydrous MgCl2.' Correction: coordinated water promotes hydrolysis to basic chloride/MgO and HCl; protected dehydration or ammonium double salts are used.",
      "49. 'CaCO3 always decomposes at one fixed temperature.' Correction: the equilibrium temperature depends strongly on CO2 partial pressure, particle size, heat transfer and residence time.",
      "50. 'Plaster of Paris hardens because it dries and loses water.' Correction: the hemihydrate takes up water and recrystallises as interlocking gypsum crystals."
    ],
    "core": [
      "Treat absolute words such as all, always and only with caution.",
      "State the medium, phase and conditions."
    ],
    "equations": [],
    "jee": [],
    "example": [
      "Statement: KO2 is diamagnetic because K+ is closed shell.",
      "False. K+ is closed shell, but O2- contains one unpaired electron and makes KO2 paramagnetic."
    ],
    "table": null,
    "diagram": null
  },
  {
    "title": "Masterclass O - Formula, Energy and Reaction Index",
    "summary": "A compact final index connects the equations to the physical idea they represent. It is intended for rapid retrieval after the detailed explanations have been studied.",
    "paragraphs": [
      "Energetics: ΔG° = −nFE°. For dissolution, separate lattice dissociation, hydration and entropy; a single large term never decides the result by itself.",
      "Oxygen species: bond order rises O2^2− (1) < O2− (1.5) < O2 (2) < O2+ (2.5), while bond length changes in the reverse order. O2 and O2− are paramagnetic; O2^2− is diamagnetic.",
      "Thermal signatures: Li2CO3 and all Group 2 carbonates give oxide + CO2; LiNO3 and Group 2 nitrates give oxide + NO2 + O2; heavier Group 1 nitrates give nitrite + O2.",
      "Solubility signatures: Group 2 hydroxide solubility increases down the group because lattice enthalpy falls rapidly; sulfate solubility decreases because hydration becomes insufficient.",
      "Industrial signatures: Downs means molten NaCl electrolysis; chlor-alkali means aqueous brine electrolysis; Solvay means selective NaHCO3 precipitation and ammonia recovery; plaster setting means hydration to gypsum."
    ],
    "core": [
      "Always specify phase, medium and temperature.",
      "Distinguish thermodynamic feasibility from kinetic rate.",
      "Use charge density and lattice/hydration competition before memorising an order.",
      "For hardness: mg L−1 as CaCO3 = concentration × 50/equivalent mass."
    ],
    "equations": [
      "ΔG° = −nFE°",
      "2LiNO3 → Li2O + 2NO2 + 1/2O2",
      "2MNO3 → 2MNO2 + O2  (M = Na, K, Rb, Cs)",
      "MCO3 → MO + CO2  (Group 2)",
      "CaSO4·1/2H2O + 3/2H2O → CaSO4·2H2O"
    ],
    "jee": [],
    "example": [
      "Why can an order be correct but its explanation still lose marks?",
      "Because JEE Advanced often tests the controlling cause. State the relevant competition—such as lattice versus hydration—or the phase-dependent structure, not only the memorised sequence."
    ],
    "table": [
      [
        "Trigger phrase",
        "Immediate framework",
        "Main caution"
      ],
      [
        "Most reactive",
        "Thermodynamics or observed rate?",
        "State medium"
      ],
      [
        "Most soluble",
        "Lattice + hydration + entropy",
        "Do not use hydration alone"
      ],
      [
        "Most stable on heating",
        "Polarisation + product lattice + gas entropy",
        "Compare products"
      ],
      [
        "Structure",
        "Phase + coordination + electron count",
        "Avoid one universal hybridisation"
      ]
    ],
    "diagram": null
  },
  {
    "title": "Advanced Thermodynamic Problems: Lattice and Hydration",
    "summary": "Solubility and stability problems are usually competitions among lattice, hydration and entropy. Write a thermodynamic cycle and identify which term changes most.",
    "core": [
      "For dissolution, ΔHsol≈lattice dissociation+hydration of all ions.",
      "Group 2 hydroxide lattice enthalpy falls rapidly down the group, so solubility rises.",
      "For large SO₄²⁻, lattice changes less while hydration falls strongly, so sulfate solubility decreases.",
      "Strong cation polarisation destabilises carbonate and stabilises oxide products.",
      "Gas formation gives a favourable entropy contribution to decomposition at high temperature."
    ],
    "equations": [
      "ΔGsol = ΔHsol - TΔSsol",
      "ΔHsol ≈ U_diss + ΣΔHhyd",
      "ΔGdecomp = ΔHdecomp - TΔSdecomp"
    ],
    "jee": [
      "Entropy and crystal hydration can reverse simple enthalpy predictions.",
      "Thermal stability is pressure-dependent because gases are produced."
    ],
    "example": [
      "Explain opposite hydroxide and sulfate solubility trends.",
      "Hydroxide lattice enthalpy falls faster than hydration; for sulfate, hydration falls more than the relatively small lattice change."
    ],
    "table": null,
    "paragraphs": [
      "The Born-Haber cycle is Hess's law written for ion formation and crystal assembly. It separates measurable and non-measurable contributions and forces sign discipline. A highly exothermic lattice enthalpy can compensate for endothermic atomisation and ionisation, while a favourable hydration enthalpy can reverse an apparently simple gas-phase order.",
      "For comparisons, the magnitude of lattice enthalpy generally rises with increasing charge product and decreasing interionic distance. This electrostatic rule is powerful but deviations reveal covalency, unusual structures or incorrect radius assumptions. Solubility requires the additional entropy and hydration terms, so a larger lattice enthalpy does not by itself prove insolubility."
    ],
    "diagram": null
  },
  {
    "title": "Advanced Electrochemical and Kinetic Problems",
    "summary": "Electrode potentials, water-reaction rates and extraction feasibility answer different questions. Separating thermodynamics from kinetics prevents major errors.",
    "core": [
      "E° predicts equilibrium tendency under standard aqueous conditions, not activation barrier.",
      "Li has very negative E° due to hydration but reacts less violently than heavier metals.",
      "Be is thermodynamically reducing yet kinetically passivated.",
      "Molten electrolysis avoids water reduction.",
      "Removing volatile K can drive Na+KCl→NaCl+K(g)."
    ],
    "equations": [
      "ΔG° = -nFE°cell",
      "E°cell = E°cathode - E°anode"
    ],
    "jee": [
      "A negative metal reduction potential does not guarantee rapid reaction.",
      "Extraction questions require phase and competing electrode reactions."
    ],
    "example": [
      "Why is Ca not deposited from aqueous CaCl₂?",
      "Water is reduced to H₂ more readily; Ca requires molten-salt electrolysis."
    ],
    "table": null,
    "paragraphs": [
      "A standard reduction potential for M+/M measures the free-energy change for the complete aqueous half-cell process. It includes atomisation of the solid, ionisation of the gaseous atom and hydration of the gaseous cation. Lithium's exceptionally favourable hydration term makes its potential very negative even though its first ionisation enthalpy is the highest in Group 1.",
      "Reaction violence is kinetic. Sodium or potassium may react faster with water because melting, surface renewal and heat transfer are more favourable, while lithium can still be the stronger thermodynamic reducing agent in aqueous solution."
    ],
    "diagram": null
  },
  {
    "title": "Advanced Thermal-Decomposition Problems",
    "summary": "Decomposition of s-block salts depends on cation polarisation, product-oxide stability, gas entropy and lattice enthalpy. Lithium and beryllium/magnesium often deviate.",
    "core": [
      "Li₂CO₃ decomposes while heavier alkali carbonates are stable.",
      "LiNO₃ and Group 2 nitrates give oxide+NO₂+O₂; heavier Group 1 nitrates give nitrite+O₂.",
      "Group 2 carbonate stability increases Mg<Ca<Sr<Ba.",
      "Hydroxide stability increases down Group 2; LiOH is anomalous in Group 1.",
      "Hydrated MgCl₂ hydrolyses instead of simply dehydrating."
    ],
    "equations": [
      "4LiNO₃ → 2Li₂O + 4NO₂ + O₂",
      "2KNO₃ → 2KNO₂ + O₂",
      "MCO₃ → MO + CO₂"
    ],
    "jee": [
      "Balance gaseous products carefully.",
      "A more stable oxide product can make the parent salt less stable."
    ],
    "example": [
      "Increasing thermal stability of MgCO₃, CaCO₃, SrCO₃, BaCO₃?",
      "MgCO₃ < CaCO₃ < SrCO₃ < BaCO₃."
    ],
    "table": null,
    "paragraphs": [
      "In advanced problems, first classify the question: periodic trend, thermodynamic cycle, structure/MO theory, equilibrium-solubility, reaction sequence or industrial process. Then state the governing principle before manipulating equations or data.",
      "A defensible solution explains exceptions explicitly. Merely writing an order without identifying the competing terms is insufficient for multi-correct and assertion-type questions."
    ],
    "diagram": null
  },
  {
    "title": "Advanced Structural and Bonding Problems",
    "summary": "s-Block structures range from extended ionic lattices to electron-deficient polymers and macrocyclic complexes. Identify whether the species is a molecule, polymer, cluster or crystal before applying shape rules.",
    "core": [
      "NaCl and CsCl are infinite 6:6 and 8:8 lattices.",
      "BeCl₂ is linear only as a hot gas monomer and bridged/polymeric in condensed phases.",
      "BeH₂ has three-centre two-electron bridges.",
      "Organolithium compounds are multicentre clusters.",
      "Crown ethers bind around a ring; cryptands encapsulate cations."
    ],
    "equations": [
      "Bond order: O₂²⁻=1; O₂⁻=1.5",
      "CN(NaCl)=6; CN(CsCl)=8"
    ],
    "jee": [
      "Do not assign molecular shapes to formula units in infinite lattices.",
      "Hybridisation language is simplified and should not replace structural evidence."
    ],
    "example": [
      "State phase-dependent structures of BeCl₂.",
      "High-temperature gas: linear monomer; cooler vapour: bridged dimers/oligomers; solid: polymeric chains."
    ],
    "table": null,
    "paragraphs": [
      "In advanced problems, first classify the question: periodic trend, thermodynamic cycle, structure/MO theory, equilibrium-solubility, reaction sequence or industrial process. Then state the governing principle before manipulating equations or data.",
      "A defensible solution explains exceptions explicitly. Merely writing an order without identifying the competing terms is insufficient for multi-correct and assertion-type questions."
    ],
    "diagram": null
  },
  {
    "title": "Industrial Processes: Integrated JEE Problems",
    "summary": "Industrial s-block chemistry combines equilibrium, electrolysis, recycling and separation. Process questions test chemical logic and engineering design together.",
    "core": [
      "Downs cell depends on molten electrolysis, lowered m.p. and product separation.",
      "Chlor-alkali cells separate Cl₂ from OH⁻/H₂.",
      "Solvay depends on selective NaHCO₃ precipitation and reagent recycling.",
      "Lime kilns remove CO₂ and supply heat.",
      "Cement manufacture creates clinker and then controls hydration with gypsum."
    ],
    "equations": [],
    "jee": [
      "A recycled reagent may disappear from the net equation but remain essential.",
      "By-products and separations often determine economic viability."
    ],
    "example": [
      "Why is CaCl₂ the Solvay by-product?",
      "NH₄Cl is treated with Ca(OH)₂ to recover NH₃; the remaining Ca²⁺ and Cl⁻ form CaCl₂."
    ],
    "table": [
      [
        "Process",
        "Key principle",
        "Product"
      ],
      [
        "Downs",
        "Molten electrolysis",
        "Na"
      ],
      [
        "Chlor-alkali",
        "Aqueous electrolysis + separation",
        "NaOH/Cl₂/H₂"
      ],
      [
        "Solvay",
        "Selective precipitation + recycle",
        "Na₂CO₃"
      ],
      [
        "Lime kiln",
        "Gas-solid equilibrium",
        "CaO"
      ],
      [
        "Cement",
        "Solid reaction + hydration",
        "Hydraulic binder"
      ]
    ],
    "paragraphs": [
      "In advanced problems, first classify the question: periodic trend, thermodynamic cycle, structure/MO theory, equilibrium-solubility, reaction sequence or industrial process. Then state the governing principle before manipulating equations or data.",
      "A defensible solution explains exceptions explicitly. Merely writing an order without identifying the competing terms is insufficient for multi-correct and assertion-type questions."
    ],
    "diagram": null
  },
  {
    "title": "JEE Advanced Practice Set - Questions 1 to 12",
    "summary": "Attempt these without consulting the notes. The set mixes reasoning, structures, calculations and industrial chemistry.",
    "core": [
      "Q1. Order Li⁺, Na⁺, K⁺, Cs⁺ by bare radius and hydrated mobility.",
      "Q2. Reconcile Li as strongest aqueous reducing metal with Cs having lowest IE₁.",
      "Q3. Give oxygen products of Li, Na and K and their magnetic character.",
      "Q4. Compare LiF and LiI for lattice, covalency and organic solubility.",
      "Q5. Write a Born-Haber expression for NaCl.",
      "Q6. Why does the Solvay process fail for K₂CO₃?",
      "Q7. Write equations for Na in liquid NH₃ and amide formation.",
      "Q8. Match Be₂C, Mg₂C₃, CaC₂ with hydrolysis products.",
      "Q9. Explain opposite Group 2 hydroxide/sulfate solubility trends.",
      "Q10. Products of heating LiNO₃, NaNO₃ and Ca(NO₃)₂.",
      "Q11. Why does MgCl₂·6H₂O not directly yield anhydrous MgCl₂?",
      "Q12. 48.6 mg L⁻¹ Mg²⁺: hardness as CaCO₃?"
    ],
    "equations": [],
    "jee": [
      "For Q12 use equivalent-weight conversion.",
      "State phases and conditions."
    ],
    "example": [
      "Suggested time",
      "35 minutes."
    ],
    "table": null,
    "paragraphs": [
      "In advanced problems, first classify the question: periodic trend, thermodynamic cycle, structure/MO theory, equilibrium-solubility, reaction sequence or industrial process. Then state the governing principle before manipulating equations or data.",
      "A defensible solution explains exceptions explicitly. Merely writing an order without identifying the competing terms is insufficient for multi-correct and assertion-type questions."
    ],
    "diagram": null
  },
  {
    "title": "JEE Advanced Practice Set - Questions 13 to 24",
    "summary": "This set emphasises phase-dependent structures, process cycles, assertion-reason and linked equilibria.",
    "core": [
      "Q13. Give phase-dependent BeCl₂ structures.",
      "Q14. Order O₂⁺, O₂, O₂⁻, O₂²⁻ by bond order and length.",
      "Q15. Why is BeSO₄ solution acidic while BaSO₄ is insoluble?",
      "Q16. Write the complete Solvay cycle and recycled species.",
      "Q17. Why does excess CO₂ clear lime-water turbidity?",
      "Q18. Compare NaCl/CsCl coordination and limits of radius ratio.",
      "Q19. Why does plaster set while dead-burnt plaster sets poorly?",
      "Q20. Role of gypsum in cement.",
      "Q21. Explain K⁺ selectivity of 18-crown-6 and K⁺ channels.",
      "Q22. Assertion: Be is reducing. Reason: Be is inert to water. Assess.",
      "Q23. E°cell for Ca oxidation and Cu²⁺ reduction, given -2.87 and +0.34 V.",
      "Q24. Convert CaCO₃ to CaSO₄·½H₂O."
    ],
    "equations": [],
    "jee": [
      "Use monomer/dimer/polymer terminology in structures.",
      "Include reagents and conditions in conversions."
    ],
    "example": [
      "Suggested time",
      "40 minutes."
    ],
    "table": null,
    "paragraphs": [
      "In advanced problems, first classify the question: periodic trend, thermodynamic cycle, structure/MO theory, equilibrium-solubility, reaction sequence or industrial process. Then state the governing principle before manipulating equations or data.",
      "A defensible solution explains exceptions explicitly. Merely writing an order without identifying the competing terms is insufficient for multi-correct and assertion-type questions."
    ],
    "diagram": null
  },
  {
    "title": "Solutions to Practice Set - Questions 1 to 12",
    "summary": "Model answers emphasise the controlling reason rather than only the final order.",
    "core": [
      "A1. Bare radius Li⁺<Na⁺<K⁺<Cs⁺; mobility generally Li⁺<Na⁺<K⁺<Cs⁺ due to hydration.",
      "A2. Cs loses a gaseous electron most easily; Li⁺ hydration makes aqueous oxidation most favourable.",
      "A3. Li₂O/O²⁻ diamagnetic; Na₂O₂/O₂²⁻ diamagnetic; KO₂/O₂⁻ paramagnetic.",
      "A4. LiF has larger lattice enthalpy; LiI greater covalency and organic solubility.",
      "A5. ΔHf=sublimation+½bond dissociation+IE+EA+lattice formation.",
      "A6. KHCO₃ is too soluble to precipitate.",
      "A7. Metal gives solvated M⁺ and e⁻; 2Na+2NH₃→2NaNH₂+H₂.",
      "A8. Be₂C→CH₄; Mg₂C₃→C₃H₄; CaC₂→C₂H₂.",
      "A9. Hydroxide lattice falls faster; sulfate hydration falls more.",
      "A10. Li nitrate→oxide+NO₂+O₂; Na nitrate→nitrite+O₂; Ca nitrate→oxide+NO₂+O₂.",
      "A11. Hydrolysis yields Mg(OH)Cl/MgO and HCl.",
      "A12. Equivalent weight Mg²⁺=12.15; hardness=48.6×50/12.15=200 mg L⁻¹."
    ],
    "equations": [],
    "jee": [
      "Balanced equations are expected.",
      "Equivalent weight automatically accounts for ionic charge."
    ],
    "example": [
      "Self-check rule",
      "Full credit requires naming the controlling energetic or structural factor."
    ],
    "table": null,
    "paragraphs": [
      "In advanced problems, first classify the question: periodic trend, thermodynamic cycle, structure/MO theory, equilibrium-solubility, reaction sequence or industrial process. Then state the governing principle before manipulating equations or data.",
      "A defensible solution explains exceptions explicitly. Merely writing an order without identifying the competing terms is insufficient for multi-correct and assertion-type questions."
    ],
    "diagram": null
  },
  {
    "title": "Solutions to Practice Set - Questions 13 to 24",
    "summary": "These solutions integrate structure, equilibrium and industrial chemistry.",
    "core": [
      "A13. Hot gas linear monomer; cooler vapour bridged dimers/oligomers; solid polymeric chain.",
      "A14. Bond order O₂⁺ 2.5>O₂ 2>O₂⁻ 1.5>O₂²⁻ 1; length reverse.",
      "A15. Hydrated Be²⁺ hydrolyses; BaSO₄ has an exceptionally stable lattice.",
      "A16. Brine+NH₃+CO₂→NaHCO₃; calcine; limestone supplies CaO/CO₂; lime recovers NH₃.",
      "A17. CaCO₃ precipitates, then excess CO₂ forms soluble Ca(HCO₃)₂.",
      "A18. NaCl 6:6; CsCl 8:8; radius ratio neglects polarisation and full lattice energy.",
      "A19. Plaster rehydrates to interlocking gypsum; dead-burnt anhydrite hydrates slowly.",
      "A20. Gypsum retards C₃A and prevents flash set.",
      "A21. Size matching compensates K⁺ dehydration.",
      "A22. Both statements true but kinetic inertness does not explain thermodynamic reducing power.",
      "A23. E°cell=0.34-(-2.87)=3.21 V.",
      "A24. CaCO₃→CaO→Ca(OH)₂→gypsum→hemihydrate."
    ],
    "equations": [],
    "jee": [
      "A correct conclusion with a wrong reason loses assertion-reason credit.",
      "Write half-reactions before calculating E°."
    ],
    "example": [
      "Final revision rule",
      "For every exception, name size, charge density, lattice, hydration, polarisation or kinetics."
    ],
    "table": null,
    "paragraphs": [
      "In advanced problems, first classify the question: periodic trend, thermodynamic cycle, structure/MO theory, equilibrium-solubility, reaction sequence or industrial process. Then state the governing principle before manipulating equations or data.",
      "A defensible solution explains exceptions explicitly. Merely writing an order without identifying the competing terms is insufficient for multi-correct and assertion-type questions."
    ],
    "diagram": null
  },
  {
    "title": "Appendix - Additional Fully Solved Problems P1-P20",
    "summary": "Twenty original problems target the most commonly confused thermodynamic, structural and industrial points.",
    "paragraphs": [
      "P1. Why does Li form Li3N directly while Na does not?\nSolution: Li+ is small and forms a high-lattice-enthalpy nitride with N3-. Lithium also has enough kinetic reactivity toward N2 under suitable conditions. The larger Na+ ion gives less lattice stabilisation for the highly charged nitride ion, so direct formation is not favourable under ordinary conditions.",
      "P2. Explain why KO2 is paramagnetic but K2O2 is diamagnetic.\nSolution: K+ is closed shell in both. O2- has 13 valence electrons and one unpaired electron in π*; O2^2- has 14 valence electrons with both π* orbitals fully paired.",
      "P3. Why is LiF sparingly soluble while LiCl is highly soluble and often hydrated?\nSolution: LiF has a very strong compact lattice because both ions are small. In LiCl the lattice is weaker, hydration is effective and some covalent character can aid non-aqueous solubility. Solubility is the net free-energy balance, not hydration alone.",
      "P4. Why is lithium the strongest reducing agent in water but not necessarily the fastest metal-water reaction?\nSolution: The standard potential includes the very exothermic hydration of Li+. Rate depends on surface film, melting, heat transfer and activation barriers. Thermodynamic strength and kinetic violence are different.",
      "P5. Arrange O2+, O2, O2-, O2^2- in decreasing bond length.\nSolution: O2^2- > O2- > O2 > O2+ because bond order increases 1, 1.5, 2, 2.5 and bond length decreases as bond order rises.",
      "P6. Why does Group 2 hydroxide solubility increase down the group?\nSolution: The lattice weakens strongly as M2+ becomes larger. Although hydration also becomes less exothermic, the lattice decrease dominates for hydroxides.",
      "P7. Why does sulfate solubility decrease from MgSO4 to BaSO4?\nSolution: Hydration of M2+ falls sharply down the group, while the large sulfate ion makes lattice variation comparatively smaller. Loss of hydration dominates.",
      "P8. Why is BeO amphoteric but BaO strongly basic?\nSolution: Be2+ strongly polarises O2-, producing appreciable covalency and allowing reaction with both acids and bases. BaO is much more ionic and readily furnishes basic oxide/hydroxide behaviour.",
      "P9. Why does hydrated MgCl2 give HCl on heating?\nSolution: Mg2+ strongly polarises coordinated water and promotes hydrolysis. Mg-OH-Cl species form, then MgO, releasing HCl; simple dehydration is therefore unsuccessful.",
      "P10. Why is KHCO3 not selectively precipitated in the Solvay process?\nSolution: KHCO3 is too soluble in the ammoniated brine medium, so the process lacks the selective precipitation step that makes NaHCO3 separation practical.",
      "P11. Calculate hardness as CaCO3 equivalent for 95 mg L-1 MgCl2 (M = 95 g mol-1).\nSolution: 95 mg L-1 MgCl2 is 1 mmol L-1, providing 2 milliequivalents L-1 of charge. CaCO3 equivalent mass is 50 mg per milliequivalent, so hardness = 100 mg L-1 as CaCO3.",
      "P12. Why does CaCO3 dissolve in excess CO2 but reprecipitate when the solution is heated?\nSolution: CO2 and water convert CO3^2- into soluble HCO3-. Heating expels CO2 and shifts equilibrium back toward CO3^2-, causing CaCO3 precipitation.",
      "P13. Why is concentrated alkali-metal/ammonia solution bronze and less strongly paramagnetic?\nSolution: At high concentration electron states overlap, electrons pair and metal-rich clusters form. The system develops metal-like optical and conductive behaviour and fewer independent unpaired spins.",
      "P14. Explain the coordination selectivity of 12-crown-4, 15-crown-5 and 18-crown-6.\nSolution: Each ring presents inward oxygen donors at a characteristic cavity size. Best fit maximises ion-donor contacts with minimum strain: smaller cavities favour Li+, intermediate Na+, and larger 18-crown-6 strongly binds K+. Solvent and counter-ion can modify selectivity.",
      "P15. Why is solid BeH2 polymeric?\nSolution: A monomeric BeH2 is electron deficient. Bridging H atoms allow 3-centre-2-electron Be-H-Be bonds, increasing coordination and delocalising the limited electron pairs.",
      "P16. Predict products on heating LiNO3 and KNO3.\nSolution: LiNO3 -> Li2O + NO2 + O2; KNO3 -> KNO2 + O2. Li+ polarises nitrate strongly and resembles Group 2 behaviour.",
      "P17. Why is anhydrous CaCl2 unsuitable for drying NH3?\nSolution: CaCl2 forms addition compounds with NH3, so it removes and binds the gas rather than merely absorbing water.",
      "P18. Why is BaSO4 usable as an X-ray contrast material despite soluble barium toxicity?\nSolution: BaSO4 has an extremely low solubility and releases negligible Ba2+ under normal gastrointestinal conditions; soluble barium salts are toxic.",
      "P19. Why is gypsum added to cement clinker?\nSolution: It moderates the rapid hydration of C3A and prevents flash setting, allowing time for mixing and placement.",
      "P20. Explain why K is less dense than Na although it has larger atomic mass.\nSolution: The increase in atomic volume from Na to K is proportionally greater than the increase in mass, so density falls."
    ],
    "core": [],
    "equations": [],
    "jee": [
      "Use these after completing the full chapter."
    ],
    "example": [
      "Final check",
      "Explain the principle before stating the result."
    ],
    "table": null,
    "diagram": null
  },
  {
    "title": "153 - Precision Group 1 Data Dashboard",
    "summary": "Verified values from the handwritten data sheet, with the reason behind each order.",
    "paragraphs": [
      "Radius increases with shell number; IE₁ and melting point decrease overall; density has the K < Na anomaly.",
      "The aqueous potential order is not the IE₁ order because hydration and atomisation contribute."
    ],
    "core": [
      "Li is hardest among the alkali metals.",
      "Specific heat per gram falls strongly with molar mass."
    ],
    "equations": [],
    "jee": [
      "Never equate most negative E° with fastest water reaction."
    ],
    "example": [
      "Why is K less dense than Na?",
      "Atomic volume increases proportionally more than mass."
    ],
    "table": [
      [
        "Property",
        "Li",
        "Na",
        "K",
        "Rb",
        "Cs"
      ],
      [
        "radius / pm",
        "152",
        "186",
        "227",
        "248",
        "265"
      ],
      [
        "IE₁ / kJ mol⁻¹",
        "520",
        "496",
        "419",
        "403",
        "376"
      ],
      [
        "density / g cm⁻³",
        "0.53",
        "0.97",
        "0.86",
        "1.53",
        "1.90"
      ]
    ],
    "diagram": "trend-dashboard"
  },
  {
    "title": "154 - Li versus Na Electrode-Potential Energy Cycle",
    "summary": "Atomisation, ionisation and hydration explain the lithium paradox.",
    "paragraphs": [
      "Li has a higher ionisation enthalpy than Na, but Li⁺ hydration is far more exothermic.",
      "Reaction violence is controlled by kinetics and surface behaviour."
    ],
    "core": [],
    "equations": [
      "Li: +159 + 520 - 520 ≈ +159 kJ mol⁻¹",
      "Na: +109 + 496 - 406 ≈ +199 kJ mol⁻¹",
      "ΔG° = -nFE°"
    ],
    "jee": [
      "State phases when using an electrochemical cycle."
    ],
    "example": [
      "Why does Li react less violently than K?",
      "K melts and spreads; rate is kinetic."
    ],
    "table": null,
    "diagram": "electrode-cycle"
  },
  {
    "title": "155 - Flame Spectrum, D Lines and Photoelectric Effect",
    "summary": "The characteristic wavelengths and their electronic origin.",
    "paragraphs": [
      "Na gives a close doublet at 589.0 and 589.6 nm.",
      "K and Cs are useful photoemissive materials because of low work functions.",
      "Colours of chromate, dichromate and permanganate arise from their anions."
    ],
    "core": [],
    "equations": [],
    "jee": [],
    "example": [
      "Why can Na mask K?",
      "Its yellow emission is exceptionally intense."
    ],
    "table": [
      [
        "Element",
        "colour",
        "nm"
      ],
      [
        "Li",
        "crimson",
        "670.8"
      ],
      [
        "Na",
        "yellow",
        "589.0/589.6"
      ],
      [
        "K",
        "lilac",
        "766.5"
      ],
      [
        "Rb",
        "red-violet",
        "780"
      ],
      [
        "Cs",
        "blue-violet",
        "455.5"
      ]
    ],
    "diagram": "flame-spectrum"
  },
  {
    "title": "156 - Hydration, Mobility and Hydroxide Solubility",
    "summary": "The smallest bare ion need not move fastest in water.",
    "paragraphs": [
      "Li⁺ carries a strongly bound hydration shell and therefore has a large hydrodynamic radius.",
      "The numerical series 13.0, 108.3, 112.8, 197.6 and 385.6 refers to hydroxide solubility, not metal solubility."
    ],
    "core": [
      "|ΔHhyd|: Li⁺ > Na⁺ > K⁺ > Rb⁺ > Cs⁺",
      "mobility generally shows the reverse tendency"
    ],
    "equations": [],
    "jee": [],
    "example": [
      "Why is Li⁺ conductivity not highest?",
      "It moves with a large hydration shell."
    ],
    "table": [
      [
        "MOH",
        "LiOH",
        "NaOH",
        "KOH",
        "RbOH",
        "CsOH"
      ],
      [
        "g/100 g H₂O",
        "13.0",
        "108.3",
        "112.8",
        "197.6",
        "385.6"
      ]
    ],
    "diagram": "hydration-mobility"
  },
  {
    "title": "158 - Oxygen Species and MO Interpretation",
    "summary": "Oxide, peroxide and superoxide are distinguished by the oxygen fragment.",
    "paragraphs": [
      "Li stabilises O²⁻, Na stabilises O₂²⁻, and K-Cs stabilise O₂⁻ on combustion.",
      "Superoxide is paramagnetic; peroxide is diamagnetic."
    ],
    "core": [],
    "equations": [
      "BO: O₂⁺ 2.5 > O₂ 2 > O₂⁻ 1.5 > O₂²⁻ 1"
    ],
    "jee": [],
    "example": [
      "Why is KO₂ paramagnetic?",
      "O₂⁻ has one unpaired π* electron."
    ],
    "table": null,
    "diagram": "oxygen-products"
  },
  {
    "title": "159 - Na₂O₂ and KO₂ Reaction Atlas",
    "summary": "Balanced absorber, oxidising and peroxide-forming reactions.",
    "paragraphs": [
      "Na₂O₂ can preserve H₂O₂ in cold water but gives O₂ in warmer water.",
      "KO₂ removes CO₂ and releases O₂."
    ],
    "core": [],
    "equations": [
      "2Na₂O₂ + 2CO₂ → 2Na₂CO₃ + O₂",
      "4KO₂ + 2CO₂ → 2K₂CO₃ + 3O₂",
      "2Cr(OH)₃ + 3Na₂O₂ → 2Na₂CrO₄ + 2NaOH + 2H₂O"
    ],
    "jee": [
      "Balance oxygen carefully; source arrows were shorthand."
    ],
    "example": [
      "O₂ from 8 mol KO₂?",
      "6 mol."
    ],
    "table": null,
    "diagram": "peroxide-network"
  },
  {
    "title": "161 - NaOH Reaction Atlas",
    "summary": "Gas absorption, disproportionation, amphoteric dissolution and precipitation.",
    "paragraphs": [
      "Cold dilute chlorine gives hypochlorite; hot concentrated chlorine gives chlorate.",
      "Al and Zn dissolve in aqueous alkali as hydroxo complexes with H₂ evolution."
    ],
    "core": [],
    "equations": [
      "Cl₂ + 2NaOH → NaCl + NaOCl + H₂O",
      "3Cl₂ + 6NaOH → 5NaCl + NaClO₃ + 3H₂O",
      "P₄ + 3NaOH + 3H₂O → PH₃ + 3NaH₂PO₂",
      "4S + 6NaOH → 2Na₂S + Na₂S₂O₃ + 3H₂O"
    ],
    "jee": [],
    "example": [
      "Product of hot concentrated Cl₂/NaOH?",
      "NaCl and NaClO₃."
    ],
    "table": null,
    "diagram": "naoh-atlas"
  },
  {
    "title": "162 - LiH, LiAlH₄ and NaBH₄",
    "summary": "Hydride basicity, preparation and reducing selectivity.",
    "paragraphs": [
      "LiH is saline and releases H₂ from water.",
      "LiAlH₄ is stronger and less selective than NaBH₄."
    ],
    "core": [],
    "equations": [
      "LiH + H₂O → LiOH + H₂",
      "4LiH + AlCl₃ → LiAlH₄ + 3LiCl",
      "4NaH + B(OCH₃)₃ → NaBH₄ + 3NaOCH₃"
    ],
    "jee": [],
    "example": [
      "Which reduces an ester readily?",
      "LiAlH₄."
    ],
    "table": null,
    "diagram": "hydride-atlas"
  },
  {
    "title": "163 - Liquid Ammonia Regimes",
    "summary": "Solvated electrons produce the characteristic blue, conducting solution.",
    "paragraphs": [
      "Dilute solutions are blue and paramagnetic.",
      "Concentrated solutions are bronze and metal-like."
    ],
    "core": [],
    "equations": [
      "M + (x+y)NH₃ ⇌ [M(NH₃)ₓ]⁺ + [e(NH₃)ᵧ]⁻",
      "2M + 2NH₃ → 2MNH₂ + H₂"
    ],
    "jee": [],
    "example": [
      "Why does blue fade?",
      "Metal amide forms on standing."
    ],
    "table": [
      [
        "metal",
        "-33.4 °C",
        "0 °C"
      ],
      [
        "Li",
        "10.9",
        "11.3"
      ],
      [
        "Na",
        "25.1",
        "23.0"
      ],
      [
        "K",
        "47.1",
        "48.5"
      ]
    ],
    "diagram": "ammonia-regimes"
  },
  {
    "title": "164 - Detailed Alkali Halide Data",
    "summary": "Melting, solubility, colour centres, polyhalides and structure types.",
    "paragraphs": [
      "For fixed X, ionic character generally increases from LiX to CsX.",
      "F-centres are trapped electrons in anion vacancies.",
      "CsCl, CsBr and CsI commonly use the 8-coordinate CsCl type."
    ],
    "core": [],
    "equations": [
      "KI + I₂ ⇌ KI₃",
      "KF + BrF₃ → K[BrF₄]"
    ],
    "jee": [],
    "example": [
      "Why is LiI more covalent than LiF?",
      "I⁻ is much more polarizable."
    ],
    "table": null,
    "diagram": "halide-structures"
  },
  {
    "title": "166 - BeCl₂, Carbonate Resonance and Nitrate Decomposition",
    "summary": "Three high-yield structural ideas from the image set.",
    "paragraphs": [
      "BeCl₂ is linear at high-temperature vapour, bridged in cooler vapour and polymeric in the solid.",
      "All three C-O bonds in CO₃²⁻ are equivalent with average bond order 4/3."
    ],
    "core": [],
    "equations": [
      "4LiNO₃ → 2Li₂O + 4NO₂ + O₂",
      "2MNO₃ → 2MNO₂ + O₂"
    ],
    "jee": [],
    "example": [
      "Why no d-orbital explanation?",
      "Bridging and electron deficiency are sufficient."
    ],
    "table": null,
    "diagram": "becl2-phases"
  },
  {
    "title": "167 - Six Element Reaction Maps",
    "summary": "Li, Na, K, Mg, Ca and Ba are organised as conversion hubs.",
    "paragraphs": [
      "The maps make sequence questions explicit and condition dependent.",
      "CaC₂ links calcium chemistry to acetylene and calcium cyanamide."
    ],
    "core": [],
    "equations": [
      "CaC₂ + 2H₂O → Ca(OH)₂ + C₂H₂",
      "CaC₂ + N₂ → CaCN₂ + C",
      "2BaO + O₂ → 2BaO₂"
    ],
    "jee": [],
    "example": [
      "Product of Mg₃N₂ hydrolysis?",
      "Mg(OH)₂ and NH₃."
    ],
    "table": null,
    "diagram": "reaction-maps"
  },
  {
    "title": "168 - Lime, Carbide and Nitrolim Network",
    "summary": "Industrial calcium chemistry in one balanced map.",
    "paragraphs": [
      "Calcination, slaking, carbonation, carbide formation and cyanamide formation are linked."
    ],
    "core": [],
    "equations": [
      "CaCO₃ → CaO + CO₂",
      "CaO + 3C → CaC₂ + CO",
      "CaC₂ + N₂ → CaCN₂ + C"
    ],
    "jee": [],
    "example": [
      "Why remove CO₂ from lime kiln?",
      "It shifts CaCO₃ decomposition forward."
    ],
    "table": null,
    "diagram": "lime-atlas"
  },
{
  "title": "Masterclass P - Bond Angle and Bond Length Comparison Framework",
  "summary": "A dedicated structural-comparison layer for oxygen species, oxoacid salts, beryllium compounds, ionic lattices and carbides. The method combines MOT bond order, resonance, lone-pair compression, coordination geometry, phase and ionic size.",
  "paragraphs": [
    "Bond length normally decreases as bond order increases. This is especially reliable for the O₂ family because the same two atoms are compared while electrons are added to antibonding π* orbitals.",
    "Resonance equalises symmetry-equivalent bonds. CO₃²⁻ has three equal C-O bonds of average bond order 4/3, while HCO₃⁻ has two equivalent non-OH C-O bonds and a longer C-OH bond.",
    "A lone pair occupies more angular space than a bond pair. Therefore NO₂⁻ is bent with an angle below 120°, and SO₃²⁻ is trigonal pyramidal with O-S-O below the tetrahedral value.",
    "Phase and coordination must be stated. BeCl₂ is linear as a high-temperature monomer, bridged in cooler vapour and polymeric in the solid; [BeCl₄]²⁻ is tetrahedral.",
    "For comparable structures, increasing ion size increases distance: M-F < M-Cl < M-Br < M-I; Li-X < Na-X < K-X < Rb-X < Cs-X; Mg-O < Ca-O < Sr-O < Ba-O."
  ],
  "core": [
    "O-O length: O₂⁺ < O₂ < O₂⁻ < O₂²⁻",
    "Angles: NO₂⁺ 180° > NO₃⁻ 120° > NO₂⁻ (<120°)",
    "BeCl₂(g) 180°; [BeCl₄]²⁻ about 109.5°",
    "[Be(H₂O)₄]²⁺ tetrahedral; [Mg(H₂O)₆]²⁺ octahedral",
    "Terminal Be-Cl is shorter than bridging Be-Cl in a vapour dimer"
  ],
  "equations": [
    "BO(O₂⁺, O₂, O₂⁻, O₂²⁻) = 2.5, 2, 1.5, 1",
    "Average BO(C-O in CO₃²⁻) = (2 + 1 + 1)/3 = 4/3"
  ],
  "jee": [
    "Diatomic species have no bond angle.",
    "A lattice coordination angle is not a discrete-molecule angle.",
    "Do not use one geometry for all phases of BeCl₂ or BeH₂."
  ],
  "example": [
    "Why are all C-O bonds in carbonate equal although one Lewis form shows one C=O bond?",
    "The three canonical forms are equivalent. The real ion is a delocalised resonance hybrid with average C-O bond order 4/3 at every position."
  ],
  "table": [
    [
      "Species",
      "Shape / angle",
      "Bond-length result",
      "Controlling idea"
    ],
    [
      "O₂⁺ / O₂ / O₂⁻ / O₂²⁻",
      "Diatomic",
      "112 < 121 < 133 < 149 pm, approximately",
      "MOT antibonding occupancy"
    ],
    [
      "CO₂ / CO₃²⁻",
      "180° / 120°",
      "C-O in CO₂ shorter",
      "Bond order 2 vs 4/3"
    ],
    [
      "HCO₃⁻",
      "C approximately planar",
      "C-OH longer; other two equal",
      "Restricted resonance"
    ],
    [
      "BeCl₂ / [BeCl₄]²⁻",
      "180° / 109.5°",
      "Different coordination",
      "Phase and ligand number"
    ],
    [
      "SO₄²⁻ / SO₃²⁻",
      "109.5° / <109.5°",
      "Angle compressed in sulfite",
      "Lone pair"
    ],
    [
      "Li₂O / LiCl",
      "tetrahedral / octahedral local Li",
      "109.5° vs 90° and 180°",
      "Lattice coordination"
    ]
  ],
  "diagram": "bond-geometry"
},
{
  "title": "Original JEE Advanced Bond-Angle and Bond-Length Questions",
  "summary": "Twenty original comparison questions based on the newly integrated structural material. The answer key is placed below the full question set.",
  "paragraphs": [],
  "core": [
    "Q1. Arrange O₂⁺, O₂, O₂⁻ and O₂²⁻ in increasing O-O bond length.",
    "Q2. Arrange O₂⁺, O₂, KO₂ and Na₂O₂ in increasing O-O bond length.",
    "Q3. O₂⁻ and O₃⁻ are odd-electron oxygen anions. Which has a bond angle? State its shape and bond-equivalence result.",
    "Q4. Are the three C-O bond lengths in Na₂CO₃ equal? Calculate average bond order.",
    "Q5. In HCO₃⁻, compare C-OH with the two non-OH C-O bonds.",
    "Q6. Compare CO₂ and CO₃²⁻ in O-C-O angle and C-O length.",
    "Q7. Arrange NO₂⁺, NO₃⁻ and NO₂⁻ in decreasing bond angle.",
    "Q8. Which has shorter N-O: NO₂⁺ or NO₃⁻?",
    "Q9. Compare Cl-Be-Cl in BeCl₂(g) and [BeCl₄]²⁻.",
    "Q10. In Be₂Cl₄ vapour, compare terminal and bridging Be-Cl lengths.",
    "Q11. Why is one H-Be-H angle insufficient for solid BeH₂?",
    "Q12. Compare O-M-O angles in [Be(H₂O)₄]²⁺ and [Mg(H₂O)₆]²⁺.",
    "Q13. Compare O-S-O in SO₄²⁻ and SO₃²⁻.",
    "Q14. Arrange M-F, M-Cl, M-Br, M-I in increasing M-X length.",
    "Q15. Arrange Li-X, Na-X, K-X, Rb-X, Cs-X in increasing distance.",
    "Q16. Arrange Mg-O, Ca-O, Sr-O, Ba-O in increasing distance.",
    "Q17. Compare ideal local angles around Li⁺ in antifluorite Li₂O and NaCl-type LiCl.",
    "Q18. Arrange C-C lengths represented by CaC₂, C₂H₄ and C₂H₆.",
    "Q19. Count species with all indicated bonds equal: CO₃²⁻, NO₃⁻, HCO₃⁻, O₃⁻ and BeCl₂(g).",
    "Q20. Identify the chloride that is linear monomer, bridged dimer and polymeric solid; compare bridge and terminal lengths."
  ],
  "equations": [],
  "jee": [
    "Write all orders with a reason: bond order, resonance, lone pair, coordination or ionic size."
  ],
  "example": [
    "What is the quickest first check in a bond-length order?",
    "Compare the same atom pair and assign bond order. Then check whether charge, phase or coordination changes the comparison."
  ],
  "table": [
    [
      "Q",
      "Answer",
      "Q",
      "Answer"
    ],
    [
      "1",
      "O₂⁺ < O₂ < O₂⁻ < O₂²⁻",
      "11",
      "Polymeric bridge network"
    ],
    [
      "2",
      "O₂⁺ < O₂ < KO₂ < Na₂O₂",
      "12",
      "109.5°; 90°/180°"
    ],
    [
      "3",
      "O₃⁻; bent; two equal O-O",
      "13",
      "SO₄²⁻ > SO₃²⁻"
    ],
    [
      "4",
      "Equal; BO = 4/3",
      "14",
      "M-F < M-Cl < M-Br < M-I"
    ],
    [
      "5",
      "C-OH longer",
      "15",
      "Li-X < Na-X < K-X < Rb-X < Cs-X"
    ],
    [
      "6",
      "180° vs 120°; CO₂ shorter",
      "16",
      "Mg-O < Ca-O < Sr-O < Ba-O"
    ],
    [
      "7",
      "NO₂⁺ > NO₃⁻ > NO₂⁻",
      "17",
      "109.5° vs 90°/180°"
    ],
    [
      "8",
      "NO₂⁺",
      "18",
      "CaC₂ < C₂H₄ < C₂H₆"
    ],
    [
      "9",
      "180° vs 109.5°",
      "19",
      "4"
    ],
    [
      "10",
      "terminal shorter",
      "20",
      "BeCl₂; terminal shorter; 180°"
    ]
  ],
  "diagram": null
},
{
  "title": "Detailed Solutions - Bond Angle and Bond Length Comparisons",
  "summary": "Reasoned solutions to the twenty structural-comparison questions.",
  "paragraphs": [
    "Q1. Bond order falls 2.5 → 2 → 1.5 → 1 as electrons occupy antibonding π* orbitals. Therefore O₂⁺ < O₂ < O₂⁻ < O₂²⁻ in length.",
    "Q2. KO₂ contains O₂⁻ and Na₂O₂ contains O₂²⁻. Hence O₂⁺ < O₂ < KO₂ < Na₂O₂.",
    "Q3. O₂⁻ is diatomic and has no angle. O₃⁻ is bent; resonance interchanges terminal oxygen roles, so its two O-O bonds are equivalent in the ideal model.",
    "Q4. Carbonate is a trigonal-planar resonance hybrid. Average C-O bond order = (2 + 1 + 1)/3 = 4/3, so all three lengths are equal.",
    "Q5. The two non-protonated O atoms share resonance and have equal shorter C-O bonds. C-OH has more single-bond character and is longer.",
    "Q6. CO₂ is linear, 180°, with C=O order 2. CO₃²⁻ is trigonal planar, 120°, with average order 4/3; carbonate C-O is longer.",
    "Q7. NO₂⁺ is linear 180°, NO₃⁻ is trigonal planar 120°, and a lone pair bends NO₂⁻ below 120°.",
    "Q8. Nitronium has higher N-O bond order than nitrate, so NO₂⁺ has the shorter N-O bond.",
    "Q9. BeCl₂(g) is linear 180°. [BeCl₄]²⁻ is tetrahedral, about 109.5°.",
    "Q10. A bridge shares electron density between two Be centres. Each bridging Be-Cl contact is longer than a terminal two-centre Be-Cl bond.",
    "Q11. Solid BeH₂ is an extended bridged network with local approximately tetrahedral Be coordination, not isolated linear molecules.",
    "Q12. [Be(H₂O)₄]²⁺ is tetrahedral, 109.5°. [Mg(H₂O)₆]²⁺ is octahedral, with 90° cis and 180° trans angles.",
    "Q13. Sulfate is tetrahedral near 109.5°. Sulfite is pyramidal and its lone pair compresses O-S-O below 109.5°.",
    "Q14. Halide radius grows F⁻ → I⁻, so M-F < M-Cl < M-Br < M-I.",
    "Q15. Cation radius grows Li⁺ → Cs⁺, so Li-X < Na-X < K-X < Rb-X < Cs-X for comparable coordination.",
    "Q16. The M²⁺ radius grows Mg²⁺ → Ba²⁺, giving Mg-O < Ca-O < Sr-O < Ba-O.",
    "Q17. Li is tetrahedrally coordinated in antifluorite Li₂O, giving about 109.5°. Li is octahedrally coordinated in LiCl, giving 90° and 180°.",
    "Q18. CaC₂ contains acetylide with triple-bond-like C-C character. Thus CaC₂ < C₂H₄ < C₂H₆.",
    "Q19. CO₃²⁻, NO₃⁻, O₃⁻ and BeCl₂(g) qualify. HCO₃⁻ does not have all three C-O bonds equal. Total = 4.",
    "Q20. A is BeCl₂. Its high-temperature monomer is linear 180°; cooler vapour is bridged and the solid is polymeric. Terminal bonds are shorter than bridge contacts."
  ],
  "core": [],
  "equations": [],
  "jee": [
    "Always state phase and local coordination before quoting an angle."
  ],
  "example": [
    "Why is 'BeCl₂ is linear' incomplete?",
    "It is true for the high-temperature gaseous monomer, but the cooler vapour contains bridged dimers and the solid is polymeric."
  ],
  "table": null,
  "diagram": null
},

  {
    title: "NCERT Core Coverage Map",
    summary: "The compulsory NCERT foundation is mapped explicitly so advanced enrichment never hides a standard fact, reaction, compound or exception.",
    paragraphs: [
      "NCERT is the conceptual floor of this master chapter. Group trends, reactions, anomalous behaviour, sodium compounds, calcium compounds and biological roles are all retained, then connected to deeper thermodynamic, structural and molecular-orbital explanations.",
      "All wording, diagrams, examples and questions in this edition are newly composed. NCERT labels identify the syllabus layer; they do not indicate verbatim reproduction."
    ],
    core: [
      "Group 1 and Group 2 general characteristics and periodic trends.",
      "Reactions with air, water, hydrogen and halogens; reducing behaviour and liquid-ammonia solutions.",
      "Oxides, hydroxides, halides and oxoacid salts.",
      "Lithium and beryllium anomalies; Li-Mg and Be-Al diagonal relationships.",
      "NaCl, NaOH, Na2CO3, NaHCO3, CaO, Ca(OH)2, CaCO3, plaster of Paris and cement.",
      "Biological importance of Na+, K+, Mg2+ and Ca2+."
    ],
    equations: [],
    table: [
      ["NCERT layer", "Advanced integration"],
      ["Atomic and ionic trends", "Shielding, penetration, hydration and lattice-energy analysis"],
      ["Oxygen compounds", "MO bond order and magnetism of O2, O2-, O2^2-"],
      ["Water reactivity", "Kinetics versus thermodynamic electrode potential"],
      ["First-member anomalies", "Charge density, polarisation and multicentre bonding"],
      ["Industrial compounds", "Downs, membrane chlor-alkali, Solvay, lime and cement cycles"]
    ],
    jee: ["Use NCERT facts as the starting statement, then supply the advanced reason.", "Do not replace a standard exception with an overgeneralised trend."],
    example: ["Why is an explicit NCERT layer necessary in an advanced text?", "Because JEE questions often test a direct standard statement first and only then demand deeper reasoning."],
    diagram: "flow"
  },
  {
    title: "NCERT Core - Group 1 Reaction Set",
    summary: "The standard reactions of alkali metals are organised by product control, exception and exam consequence.",
    paragraphs: [
      "Alkali metals have [NG]ns1 configurations and form M+ ions. Their reaction products with oxygen are controlled by cation-anion size matching: Li stabilises oxide, Na commonly gives peroxide, and K-Rb-Cs stabilise superoxides.",
      "Lithium alone combines readily with nitrogen to form Li3N. Its behaviour reflects high lattice enthalpy and is a major Li-Mg diagonal similarity."
    ],
    core: ["Reactivity with water generally increases down the group.", "Lithium is the strongest thermodynamic reducing agent in water but is not the most violent kinetically.", "Small Li+ is strongly hydrated and therefore has a large hydrated radius."],
    equations: ["4Li + O2 -> 2Li2O", "2Na + O2 -> Na2O2", "K + O2 -> KO2", "2M + 2H2O -> 2MOH + H2", "2M + H2 -> 2MH", "6Li + N2 -> 2Li3N"],
    table: [["Trend", "Down Group 1"], ["Atomic radius", "increases"], ["First ionisation enthalpy", "decreases generally"], ["Hydration enthalpy magnitude", "decreases"], ["Melting point", "decreases generally"], ["Softness", "increases"]],
    jee: ["Separate reaction rate from reducing strength.", "Explain oxide/peroxide/superoxide selection through lattice-size compatibility."],
    example: ["Which Group 1 metal forms a nitride directly and a sparingly soluble fluoride?", "Lithium."],
    diagram: "electron"
  },
  {
    title: "NCERT Core - Oxygen Species and MO Theory",
    summary: "Oxide, peroxide and superoxide chemistry is connected directly to bond order, magnetism and life-support reactions.",
    paragraphs: ["Adding electrons to antibonding pi* orbitals lowers O-O bond order. O2- has one unpaired electron and is paramagnetic; O2^2- has all electrons paired and is diamagnetic."],
    core: ["Bond strength: O2 > O2- > O2^2-.", "Bond length: O2 < O2- < O2^2-.", "Large alkali cations stabilise large oxygen anions."],
    equations: ["4KO2 + 2CO2 -> 2K2CO3 + 3O2", "2O2^- + 2H2O -> H2O2 + 2OH^- + O2"],
    table: [["Species", "Bond order", "Magnetism"], ["O2", "2", "paramagnetic"], ["O2-", "1.5", "paramagnetic"], ["O2^2-", "1", "diamagnetic"]],
    jee: ["Use MO occupancy, not memorised colour alone, to identify oxygen species."],
    example: ["Arrange O2, O2- and O2^2- by bond length.", "O2 < O2- < O2^2-."],
    diagram: "mo"
  },
  {
    title: "NCERT Core - Lithium Anomaly and Salts",
    summary: "Lithium exceptions are assembled into one cause-effect network based on size, hydration and polarising power.",
    paragraphs: ["Lithium has the smallest Group 1 cation, the greatest hydration enthalpy magnitude and the highest polarising power. Its compounds are therefore less uniformly ionic than those of heavier alkali metals."],
    core: ["Li2CO3, LiF and Li3PO4 are sparingly soluble.", "LiHCO3 exists only in solution.", "LiNO3 gives Li2O on heating; Na-Cs nitrates give nitrites.", "LiCl, LiBr and LiI show enhanced covalent character."],
    equations: ["Li2CO3 -> Li2O + CO2", "4LiNO3 -> 2Li2O + 4NO2 + O2", "2NaNO3 -> 2NaNO2 + O2"],
    table: [["Family", "Lithium behaviour"], ["Carbonate", "sparingly soluble; decomposes"], ["Hydrogen carbonate", "stable only in solution"], ["Nitrate", "gives oxide"], ["Fluoride", "sparingly soluble"], ["Halides", "greater covalent character"]],
    jee: ["Link each exception to polarisation or lattice-hydration competition rather than listing it without cause."],
    example: ["Why does LiNO3 not behave like NaNO3 on heating?", "Li+ strongly polarises nitrate, favouring decomposition to the oxide."],
    diagram: "flow"
  },
  {
    title: "NCERT Core - Sodium Industrial Compounds",
    summary: "NaCl, NaOH, Na2CO3 and NaHCO3 are connected through molten electrolysis, brine electrolysis and the Solvay cycle.",
    paragraphs: ["Molten NaCl gives sodium at the cathode, whereas aqueous brine gives hydrogen because water is reduced preferentially. Modern chlor-alkali plants use ion-selective membranes to separate products."],
    core: ["NaHCO3 precipitates from ammoniated brine because it is relatively sparingly soluble.", "Ammonia and carbon dioxide are recycled in the Solvay process.", "KHCO3 is too soluble for an efficient potassium analogue."],
    equations: ["2NaCl(l) -> 2Na + Cl2", "2NaCl(aq) + 2H2O -> 2NaOH + H2 + Cl2", "NH3 + CO2 + H2O -> NH4HCO3", "NH4HCO3 + NaCl -> NaHCO3 + NH4Cl", "2NaHCO3 -> Na2CO3 + CO2 + H2O"],
    table: [["Compound", "High-yield use"], ["NaCl", "industrial feedstock"], ["NaOH", "paper, soap, alumina and synthesis"], ["Na2CO3", "glass and water softening"], ["NaHCO3", "baking, mild alkali and extinguishers"]],
    jee: ["Distinguish molten and aqueous electrolysis products.", "Track material recycling in the Solvay sequence."],
    example: ["Why cannot K2CO3 be made efficiently by the Solvay process?", "KHCO3 does not precipitate sufficiently from the corresponding medium."],
    diagram: "flow"
  },
  {
    title: "NCERT Core - Group 2 Trends and Reactions",
    summary: "The standard Group 2 trends are expressed through charge density, hydration, lattice energy and passivation.",
    paragraphs: ["Group 2 metals have [NG]ns2 configurations and form M2+ ions. Their ions are smaller and more highly charged than Group 1 ions, giving stronger hydration and generally stronger ionic lattices."],
    core: ["Hydroxide solubility increases down the group.", "Sulfate solubility decreases down the group.", "Carbonate thermal stability increases down the group.", "Be is passivated; Mg reacts with hot water or steam; Ca-Sr-Ba react increasingly rapidly with cold water."],
    equations: ["2M + O2 -> 2MO", "M + 2H2O -> M(OH)2 + H2", "3M + N2 -> M3N2", "M3N2 + 6H2O -> 3M(OH)2 + 2NH3"],
    table: [["Property", "Down Group 2"], ["Hydroxide solubility", "increases"], ["Sulfate solubility", "decreases"], ["Carbonate stability", "increases"], ["Basicity", "increases"], ["Water reactivity", "increases"]],
    jee: ["Use competing lattice and hydration enthalpies to explain opposite solubility trends."],
    example: ["Why is BaSO4 almost insoluble while MgSO4 is soluble?", "Hydration becomes much less favourable for Ba2+ while the sulfate lattice remains strong."],
    diagram: "flow"
  },
  {
    title: "NCERT Core - Beryllium and Calcium Compounds",
    summary: "Beryllium anomaly, the Be-Al relationship, the lime cycle, plaster and cement are consolidated into an exam-ready chapter.",
    paragraphs: ["Be2+ is extremely small and strongly polarising, so BeO and Be(OH)2 are amphoteric, BeCl2 is bridged and covalent, and beryllium salts hydrolyse strongly. Calcium chemistry is dominated by carbonate, oxide, hydroxide and sulfate transformations."],
    core: ["Be and Al form amphoteric oxides and hydroxides, covalent hydrolysable chlorides and fluoro-complexes.", "Quicklime = CaO; slaked lime = Ca(OH)2; lime water = clear saturated solution; milk of lime = suspension.", "Plaster of Paris is CaSO4·1/2H2O and sets by rehydration to gypsum."],
    equations: ["CaCO3 <=> CaO + CO2", "CaO + H2O -> Ca(OH)2", "Ca(OH)2 + CO2 -> CaCO3 + H2O", "CaCO3 + CO2 + H2O -> Ca(HCO3)2", "CaSO4·2H2O -> CaSO4·1/2H2O + 3/2H2O"],
    table: [["Material", "Identity"], ["Quicklime", "CaO"], ["Slaked lime", "Ca(OH)2"], ["Gypsum", "CaSO4·2H2O"], ["Plaster of Paris", "CaSO4·1/2H2O"]],
    jee: ["Do not explain Be coordination by compulsory d-orbital hybridisation.", "Use equilibrium and CO2 pressure in the lime cycle."],
    example: ["A solid gives CaO and CO2 on heating, then reforms as a precipitate when CO2 is passed through lime water. Identify it.", "CaCO3."],
    diagram: "flow"
  },
  {
    title: "NCERT Core - Biological Roles and Audit",
    summary: "The biological roles of Na+, K+, Mg2+ and Ca2+ are followed by a zero-omission NCERT coverage audit.",
    paragraphs: ["Na+ is the principal extracellular cation and K+ the principal intracellular cation. Mg2+ stabilises ATP and sits at the centre of chlorophyll. Ca2+ supports biomineralisation, contraction, clotting and intracellular signalling."],
    core: ["Na+/K+-ATPase exports 3 Na+ and imports 2 K+ per ATP.", "ATP commonly functions biologically as an Mg-ATP complex.", "Cytosolic Ca2+ is maintained low and released transiently as a signal."],
    equations: [],
    table: [["Audit area", "Status"], ["General Group 1 and 2 properties", "complete"], ["Core reactions and salts", "complete"], ["Lithium and beryllium anomalies", "complete"], ["Sodium and calcium compounds", "complete"], ["Biological importance", "complete"], ["NCERT-style reasoning", "complete"]],
    jee: ["Treat NCERT as the compulsory base, then add the deeper reason and exception."],
    example: ["Which ion is central to chlorophyll and commonly complexes ATP?", "Mg2+."],
    diagram: "electron"
  },

];

function Diagram({ type }: { type: string | null }) {
  if (!type) return null;
  if (type === "mo-oxygen") return <div className="diagram"><h4>MO result for oxygen species</h4><div className="moGrid">{[["O₂²⁺","3","dia"],["O₂⁺","2.5","para"],["O₂","2","para (2 unpaired)"],["O₂⁻","1.5","para"],["O₂²⁻","1","dia"]].map(x=><div key={x[0]}><b>{x[0]}</b><span>Bond order {x[1]}</span><small>{x[2]}</small></div>)}</div><p>Electrons added to O₂ enter antibonding π* orbitals, lowering bond order and changing magnetism.</p></div>;
  if (type === "born-haber") return <div className="diagram"><h4>Born-Haber logic</h4><div className="flow"><span>elements</span><b>→ atomisation</b><span>gaseous atoms</span><b>→ ionisation / EA</b><span>gaseous ions</span><b>→ lattice formation</b><span>crystal</span></div></div>;
  if (type === "hydration-lattice") return <div className="diagram"><h4>Dissolution balance</h4><p><b>Crystal</b> + lattice dissociation → gaseous ions; hydration then stabilises aqueous ions. Entropy determines the final ΔG.</p></div>;
  if (type === "ammonia-electron") return <div className="diagram"><h4>Solvated electron</h4><div className="electron">e⁻</div><p>NH₃ dipoles form a solvent cavity around the diffuse electron. Dilute solutions are blue and paramagnetic; concentrated solutions are bronze and metal-like.</p></div>;
  if (type === "be-bridges") return <div className="diagram"><h4>Bridging structures</h4><p className="formula">Be-H-Be-H-Be &nbsp;&nbsp; | &nbsp;&nbsp; Be-Cl-Be-Cl-Be</p><p>BeH₂ uses 3-centre-2-electron bridges; BeCl₂ uses chloride donation into electron-deficient Be centres.</p></div>;
  if (type === "downs") return <div className="diagram"><h4>Downs cell</h4><p>Molten NaCl/CaCl₂; Na forms at the steel cathode, Cl₂ at the graphite anode, and a separator prevents recombination.</p></div>;
  if (type === "solvay") return <div className="diagram"><h4>Solvay process</h4><div className="flow"><span>brine</span><b>→ NH₃</b><span>ammoniated brine</span><b>→ CO₂</b><span>NaHCO₃↓</span><b>→ heat</b><span>Na₂CO₃</span></div><p>NH₃ and CO₂ are recycled; CaCl₂ is the principal by-product.</p></div>;
  if (type === "lime-cycle") return <div className="diagram"><h4>Lime cycle</h4><div className="flow"><span>CaCO₃</span><b>⇄ heat / CO₂</b><span>CaO</span><b>⇄ H₂O</b><span>Ca(OH)₂</span></div></div>;
  if (type === "crown") return <div className="diagram"><h4>Crown-ether selectivity</h4><div className="electron">K⁺</div><p>Inward O donors replace part of the hydration shell; cavity-size matching controls selectivity.</p></div>;

  if (type === "trend-dashboard") return <div className="diagram"><h4>Group 1 trend dashboard</h4><div className="moGrid">{[["radius","152 → 265 pm","increases"],["IE₁","520 → 376","decreases"],["m.p.","454 → 302 K","decreases"],["density","0.53, 0.97, 0.86, 1.53, 1.90","K < Na anomaly"]].map(x=><div key={x[0]}><b>{x[0]}</b><span>{x[1]}</span><small>{x[2]}</small></div>)}</div></div>;
  if (type === "electrode-cycle") return <div className="diagram"><h4>Li/Na energy components</h4><div className="flow"><span>metal</span><b>+ atomisation</b><span>gas atom</span><b>+ IE₁</b><span>gas ion</span><b>+ hydration</b><span>aqueous ion</span></div><p>Li: 159 + 520 - 520 ≈ 159; Na: 109 + 496 - 406 ≈ 199 kJ mol⁻¹.</p></div>;
  if (type === "flame-spectrum") return <div className="diagram"><h4>Flame wavelengths</h4><div className="moGrid">{[["Cs","455.5","blue-violet"],["Na","589.0/589.6","yellow"],["Li","670.8","crimson"],["K","766.5","lilac"],["Rb","780","red-violet"]].map(x=><div key={x[0]}><b>{x[0]}</b><span>{x[1]} nm</span><small>{x[2]}</small></div>)}</div></div>;
  if (type === "hydration-mobility") return <div className="diagram"><h4>Hydration reverses the bare-size expectation</h4><div className="flow"><span>small Li⁺</span><b>→ strong hydration</b><span>large moving entity</span><b>→</b><span>lower mobility</span></div></div>;
  if (type === "oxygen-products") return <div className="diagram"><h4>Oxygen products</h4><div className="moGrid">{[["Li₂O","O²⁻","dia"],["Na₂O₂","O₂²⁻, BO 1","dia"],["KO₂","O₂⁻, BO 1.5","para"]].map(x=><div key={x[0]}><b>{x[0]}</b><span>{x[1]}</span><small>{x[2]}</small></div>)}</div></div>;
  if (type === "peroxide-network") return <div className="diagram"><h4>Peroxide / superoxide gas chemistry</h4><div className="flow"><span>Na₂O₂</span><b>+ CO₂</b><span>Na₂CO₃ + O₂</span><span>KO₂</span><b>+ CO₂</b><span>K₂CO₃ + O₂</span></div></div>;
  if (type === "naoh-atlas") return <div className="diagram"><h4>NaOH reaction families</h4><div className="moGrid">{[["CO₂","carbonate / bicarbonate","absorption"],["Cl₂","hypochlorite / chlorate","disproportionation"],["Al, Zn","hydroxo complexes + H₂","amphoteric"],["NH₄⁺","NH₃","acid-base"],["P₄, S","PH₃ / sulfide-thiosulfate","redox"]].map(x=><div key={x[0]}><b>{x[0]}</b><span>{x[1]}</span><small>{x[2]}</small></div>)}</div></div>;
  if (type === "hydride-atlas") return <div className="diagram"><h4>Hydride reagent ladder</h4><div className="flow"><span>LiH</span><b>saline base</b><span>LiAlH₄</span><b>strong reducer</b><span>NaBH₄</span><b>milder reducer</b></div></div>;
  if (type === "ammonia-regimes") return <div className="diagram"><h4>Metal-ammonia concentration regimes</h4><div className="flow"><span>dilute blue</span><b>solvated e⁻</b><span>paramagnetic</span><b>→ concentration</b><span>bronze metal-like</span></div></div>;
  if (type === "halide-structures") return <div className="diagram"><h4>Alkali-halide structure types</h4><div className="flow"><span>NaCl type</span><b>CN 6</b><span>CsCl type</span><b>CN 8</b><span>CsCl, CsBr, CsI</span></div></div>;
  if (type === "becl2-phases") return <div className="diagram"><h4>BeCl₂ phase structures</h4><div className="flow"><span>linear monomer</span><b>cool</b><span>bridged dimer</span><b>solid</b><span>polymeric chain</span></div></div>;
  if (type === "reaction-maps") return <div className="diagram"><h4>Element-centred maps</h4><div className="moGrid">{["Li","Na","K","Mg","Ca","Ba"].map(x=><div key={x}><b>{x}</b><span>O₂ • H₂O • N₂ • Cl₂</span><small>plus characteristic branch</small></div>)}</div></div>;
  if (type === "lime-atlas") return <div className="diagram"><h4>Lime-carbide-cyanamide network</h4><div className="flow"><span>CaCO₃</span><b>Δ</b><span>CaO</span><b>3C</b><span>CaC₂</span><b>N₂</b><span>CaCN₂</span></div></div>;
  if (type === "bond-geometry") return <div className="diagram"><h4>Bond-angle and bond-length dashboard</h4><div className="moGrid">{[["O₂ family","BO ↓ ⇒ length ↑","O₂⁺ < O₂ < O₂⁻ < O₂²⁻"],["CO₃²⁻","120°; three equal C-O","BO 4/3"],["NO₂⁺ / NO₃⁻ / NO₂⁻","180° > 120° > bent","lone-pair compression"],["BeCl₂ / [BeCl₄]²⁻","180° / 109.5°","phase + coordination"],["SO₄²⁻ / SO₃²⁻","109.5° / smaller","lone pair" ]].map(x=><div key={x[0]}><b>{x[0]}</b><span>{x[1]}</span><small>{x[2]}</small></div>)}</div><p>For reliable comparisons: identify the atom pair, assign bond order, check resonance, count lone pairs, then state phase and coordination.</p></div>;
  return null;
}

export default function SBlockNCERTHandwrittenMasterV3() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const filtered = useMemo(() => notePages.map((p,i)=>({p,i})).filter(({p})=>JSON.stringify(p).toLowerCase().includes(query.toLowerCase())), [query]);
  const page = notePages[active];
  return <main className="shell">
    <aside>
      <div className="brand">SYNERGIC BOND</div>
      <h1>s-Block NCERT Master Notes</h1>
      <input aria-label="Search notes" value={query} onChange={(e: { target: { value: string } })=>setQuery(e.target.value)} placeholder="Search reaction, compound, trend..." />
      <nav>{filtered.map(({p,i})=><button key={p.title} className={i===active?"active":""} onClick={()=>setActive(i)}><span>{String(i+1).padStart(2,"0")}</span>{p.title}</button>)}</nav>
    </aside>
    <article>
      <header><span className="eyebrow">JEE ADVANCED • NCERT-CORE • HANDWRITTEN-IMAGE INTEGRATED V3</span><h2>{page.title}</h2><p className="summary">{page.summary}</p></header>
      {page.paragraphs.map((x,i)=><p key={i} className="theory">{x}</p>)}
      <Diagram type={page.diagram} />
      {page.core.length>0 && <section><h3>Core statements</h3><ul>{page.core.map(x=><li key={x}>{x}</li>)}</ul></section>}
      {page.equations.length>0 && <section><h3>Equations and reaction set</h3><div className="equations">{page.equations.map(x=><code key={x}>{x}</code>)}</div></section>}
      {page.table && <section><h3>Data / comparison table</h3><div className="tableWrap"><table><thead><tr>{page.table[0].map(x=><th key={x}>{x}</th>)}</tr></thead><tbody>{page.table.slice(1).map((r,i)=><tr key={i}>{r.map((x,j)=><td key={j}>{x}</td>)}</tr>)}</tbody></table></div></section>}
      {page.jee.length>0 && <section className="jee"><h3>JEE Advanced focus</h3>{page.jee.map(x=><p key={x}>◆ {x}</p>)}</section>}
      <section className="worked"><h3>Worked checkpoint</h3><p><b>Question.</b> {page.example[0]}</p><p><b>Answer.</b> {page.example[1]}</p></section>
      <footer><button disabled={active===0} onClick={()=>setActive(active-1)}>Previous</button><span>{active+1} / {notePages.length}</span><button disabled={active===notePages.length-1} onClick={()=>setActive(active+1)}>Next</button></footer>
    </article>
    <style jsx>{`
      :global(body){margin:0;background:#07111f;color:#eaf2ff;font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}
      .shell{min-height:100vh;display:grid;grid-template-columns:340px 1fr;background:radial-gradient(circle at 85% 5%,#12365b 0,#07111f 34%)}
      aside{position:sticky;top:0;height:100vh;overflow:hidden;border-right:1px solid #24415f;background:#081522eF;padding:24px;box-sizing:border-box}
      .brand{font-size:12px;letter-spacing:.22em;color:#66d9ff;font-weight:800} h1{font-size:22px;margin:8px 0 18px} input{width:100%;box-sizing:border-box;border:1px solid #315577;background:#0c2034;color:white;border-radius:10px;padding:12px;margin-bottom:14px}
      nav{height:calc(100vh - 150px);overflow:auto;display:flex;flex-direction:column;gap:6px} nav button{text-align:left;border:0;background:transparent;color:#aebed0;padding:9px 10px;border-radius:9px;cursor:pointer;display:flex;gap:9px;line-height:1.25} nav button span{color:#59d8ff;font-variant-numeric:tabular-nums} nav button.active,nav button:hover{background:#153453;color:white}
      article{max-width:1020px;width:100%;margin:0 auto;padding:52px 54px 90px;box-sizing:border-box} .eyebrow{font-size:11px;letter-spacing:.18em;color:#61d9ff;font-weight:800} h2{font-size:38px;line-height:1.12;margin:12px 0 14px} .summary{font-size:18px;line-height:1.65;color:#c7d7e8;border-left:4px solid #61d9ff;padding-left:18px}
      .theory{font-size:16px;line-height:1.75;color:#d7e4f1} section,.diagram{margin:26px 0;padding:22px;border:1px solid #284967;border-radius:16px;background:#0b1c2e} h3{margin:0 0 14px;color:#7ce4ff} ul{line-height:1.65} li{margin:7px 0} .equations{display:grid;gap:8px} code,.formula{display:block;background:#06101b;border:1px solid #244965;padding:12px;border-radius:9px;color:#fff;font-family:"Cambria Math",ui-monospace,monospace;white-space:pre-wrap}
      .tableWrap{overflow:auto} table{border-collapse:collapse;width:100%;font-size:14px} th,td{border:1px solid #31516d;padding:9px;vertical-align:top} th{background:#173c5b;color:#fff} td{color:#dce8f4} .jee{border-color:#806b2a;background:#211d0e} .jee h3{color:#ffd76b} .worked{border-color:#285e4f;background:#0d251f}
      .flow{display:flex;gap:8px;align-items:center;flex-wrap:wrap} .flow span{padding:10px 12px;border:1px solid #3a6688;border-radius:10px;background:#102b43} .flow b{color:#69dfff} .moGrid{display:grid;grid-template-columns:repeat(5,1fr);gap:8px} .moGrid div{padding:12px;border:1px solid #305672;border-radius:10px;text-align:center} .moGrid span,.moGrid small{display:block;margin-top:5px} .electron{width:66px;height:66px;border:2px solid #65e4ff;border-radius:50%;display:grid;place-items:center;margin:12px auto;font-size:22px;font-weight:800;box-shadow:0 0 25px #43c8ff55}
      article footer{display:flex;justify-content:space-between;align-items:center;margin-top:38px} article footer button{border:1px solid #315577;background:#102941;color:#fff;padding:10px 18px;border-radius:9px} article footer button:disabled{opacity:.35}
      @media(max-width:900px){.shell{display:block}aside{position:relative;height:auto}nav{height:280px}article{padding:30px 20px}h2{font-size:30px}.moGrid{grid-template-columns:1fr 1fr}}
    `}</style>
  </main>;
}
