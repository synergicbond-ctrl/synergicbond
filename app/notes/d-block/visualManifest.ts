export type Figure = {
  part: number;
  src: string;
  alt: string;
  caption: string;
  anchor: string;
  width: number;
  height: number;
};

const visual = "/notes/d-block/visuals/";

export const FIGURES: Figure[] = [
  { part: 1, src: `${visual}cu-ag-au-transition-metals-explained.webp`, alt: "Comparison of copper, silver and gold as transition metals", caption: "Cu, Ag and Au qualify because accessible ions retain an incomplete d subshell.", anchor: "p1-why-copper-silver-gold-and-palladium-are-different", width: 1672, height: 941 },
  { part: 1, src: `${visual}electron-configurations-and-orbital-anomalies.webp`, alt: "Electron configurations and orbital filling anomalies in the d block", caption: "Use the configuration exceptions as an energy-balance result, then apply the ns-first removal rule to ions.", anchor: "p1-complete-first-row-configurations", width: 1448, height: 1086 },
  { part: 1, src: `${visual}the-coinage-metals-paradox-explained.webp`, alt: "Why coinage metals remain transition elements despite filled neutral d shells", caption: "A filled d shell in a neutral atom does not settle the classification; examine chemically accessible ions.", anchor: "p1-why-copper-silver-gold-and-palladium-are-different", width: 1672, height: 941 },
  { part: 1, src: `${visual}trends-in-d-block-elements-explained.webp`, alt: "Overview of characteristic trends in d-block elements", caption: "The characteristic properties follow from accessible d electrons and small energy gaps, not from position alone.", anchor: "p1-variable-oxidation-state", width: 1448, height: 1086 },

  { part: 2, src: `${visual}density-profile-of-the-3d-series.webp`, alt: "Density profile across the 3d transition series", caption: "Density rises overall as mass increases while atomic volume changes much less smoothly.", anchor: "p2-first-transition-series", width: 1774, height: 887 },
  { part: 2, src: `${visual}density-trends-in-the-d-block.webp`, alt: "Density trends across d-block elements", caption: "Treat density as mass divided by volume, with structure and radius irregularities preventing a perfectly smooth trend.", anchor: "p2-density-is-not-controlled-by-atomic-mass-alone", width: 1672, height: 941 },
  { part: 2, src: `${visual}lanthanoid-contraction-infographic-in-neon-style.webp`, alt: "Lanthanoid contraction and its consequences", caption: "Weak 4f shielding progressively increases effective nuclear attraction across the lanthanoids.", anchor: "p2-mechanism-of-lanthanoid-contraction", width: 1672, height: 941 },
  { part: 2, src: `${visual}the-causal-chain-subatomic-to-macroscopic.webp`, alt: "Causal chain from electronic structure to d-block properties", caption: "Link poor shielding and effective nuclear charge to the measurable trends instead of memorising isolated facts.", anchor: "p2-cause-effect-chain-from-4d-to-5d", width: 1774, height: 887 },
  { part: 2, src: `${visual}the-heavyweight-champions-of-the-periodic-table.webp`, alt: "Osmium and iridium as exceptionally dense d-block metals", caption: "Osmium and iridium combine very large mass with compact metallic volume.", anchor: "p2-high-density-of-5d-metals", width: 1774, height: 887 },
  { part: 2, src: `${visual}the-leaky-shield-in-lanthanoids.webp`, alt: "Weak shielding by 4f electrons during lanthanoid contraction", caption: "Read poor 4f shielding as the cause of the extra contraction before the 5d series.", anchor: "p2-mechanism-of-lanthanoid-contraction", width: 1145, height: 1374 },

  { part: 3, src: `${visual}electrode-potentials-across-the-3d-series.webp`, alt: "Standard electrode potentials across the 3d series", caption: "E°(M²⁺/M) records an aqueous redox balance, not one universal measure of reactivity.", anchor: "p3-selected-first-row-values", width: 1672, height: 941 },
  { part: 3, src: `${visual}energetic-jumps-and-subshell-stability.webp`, alt: "Energetic jumps associated with stable d5 and d10 subshells", caption: "Extra energy is required when ionisation disrupts especially stable d5 or d10 arrangements.", anchor: "p3-interpreting-the-irregularities", width: 1672, height: 941 },
  { part: 3, src: `${visual}explaining-reactive-anomalies-in-metals.webp`, alt: "Manganese nickel and zinc anomalies in 3d-series reactivity", caption: "Mn, Ni and Zn show why electron configuration and competing energy terms interrupt a smooth trend.", anchor: "p3-selected-first-row-values", width: 1672, height: 941 },
  { part: 3, src: `${visual}ionization-energies-in-the-3d-series.webp`, alt: "First second and third ionisation energies across the 3d series", caption: "Track successive ionisation energies through the ion-formation chain rather than relying on a single trend line.", anchor: "p3-ion-formation-chain", width: 1672, height: 941 },
  { part: 3, src: `${visual}manganese-and-technetium-anomalies-infographic.webp`, alt: "Manganese and technetium anomalies in transition-metal chemistry", caption: "Use manganese anomalies as a prompt to weigh configuration and energetics alongside periodic position.", anchor: "p3-enthalpy-of-atomisation", width: 1672, height: 941 },
  { part: 3, src: `${visual}redox-potentials-across-the-3d-series.webp`, alt: "Redox potential trend across the 3d series", caption: "Atomisation, ionisation and hydration all contribute to the observed redox-potential pattern.", anchor: "p3-potential-is-not-a-universal-constant-of-reactivity", width: 1672, height: 941 },
  { part: 3, src: `${visual}the-mn-tc-anomaly-explained.webp`, alt: "Explanation of the manganese technetium anomaly", caption: "Compare the row trend with the special stability effects that make manganese an important exception.", anchor: "p3-cohesion-chain", width: 1672, height: 941 },

  { part: 4, src: `${visual}d-block-elements-oxidation-states-and-stability.webp`, alt: "Oxidation states and stability patterns in d-block elements", caption: "Oxidation-state stability depends on ligands, medium and redox conditions as well as electron count.", anchor: "p4-first-row-pattern", width: 1448, height: 1086 },

  { part: 5, src: `${visual}industrial-catalyst-map-design.webp`, alt: "Map of industrial transition-metal catalysts", caption: "Connect each industrial process to the surface or redox role performed by its transition-metal catalyst.", anchor: "p5-representative-industrial-examples", width: 1672, height: 941 },
  { part: 5, src: `${visual}industrial-catalyst-map-infographic-design.webp`, alt: "Industrial catalyst applications infographic", caption: "Industrial catalysts are selected for a useful pathway, selectivity and stability—not simply for fast adsorption.", anchor: "p5-design-principle", width: 1672, height: 941 },
  { part: 5, src: `${visual}industrial-catalyst-map-infographic.webp`, alt: "Industrial transition-metal catalyst map", caption: "Use the examples to revise the connection between variable oxidation states and practical catalytic cycles.", anchor: "p5-catalysis-chain", width: 1672, height: 941 },
  { part: 5, src: `${visual}introduction-to-catalysis-pathways-infographic.webp`, alt: "Catalysis pathways on transition-metal surfaces", caption: "Adsorption can activate bonds and supply an alternative pathway with a lower activation barrier.", anchor: "p5-surface-adsorption-and-bond-activation", width: 1672, height: 941 },
  { part: 5, src: `${visual}ligand-field-theory-and-observed-colour.webp`, alt: "Ligand field splitting and observed colour", caption: "Ligand identity changes the electronic environment of a complex and helps set its observable properties.", anchor: "p5-common-ligand-types", width: 1672, height: 941 },
  { part: 5, src: `${visual}why-transition-metals-speed-up-reactions.webp`, alt: "Why transition metals accelerate reactions", caption: "Surface adsorption and variable oxidation states provide complementary routes to catalytic acceleration.", anchor: "p5-surface-adsorption-and-bond-activation", width: 1672, height: 941 },

  { part: 6, src: `${visual}colour-and-magnetism-in-d-block-complexes.webp`, alt: "Colour and magnetism in d-block complexes", caption: "Colour and magnetism both arise from the electronic structure, but they require separate decision paths.", anchor: "p6-main-mechanisms-in-this-chapter", width: 1672, height: 941 },
  { part: 6, src: `${visual}colour-and-magnetism-of-transition-metals.webp`, alt: "Colour and magnetism of transition metals", caption: "Use electron configuration, geometry and ligand field together when explaining a transition-metal observation.", anchor: "p6-colour-decision-path", width: 1448, height: 1086 },
  { part: 6, src: `${visual}d-block-elements-colour-and-magnetism.webp`, alt: "D-block colour and magnetism overview", caption: "The number of unpaired electrons determines spin-only magnetism, while allowed electronic transitions determine colour.", anchor: "p6-magnetism-decision-path", width: 1448, height: 1086 },
  { part: 6, src: `${visual}ligands-and-color-transitions-diagram.webp`, alt: "Nickel complexes showing ligand-dependent colour changes", caption: "Nickel complexes show directly that ligand identity changes splitting and therefore the observed colour.", anchor: "p6-ligand-dependent-nickel-example", width: 1672, height: 941 },

  { part: 7, src: `${visual}d-block-elements-alloys-and-compounds.webp`, alt: "Alloys and compounds of d-block elements", caption: "Substitutional alloy formation follows from comparable atomic sizes and metallic bonding across the d block.", anchor: "p7-substitutional-alloys", width: 1448, height: 1086 },

  { part: 8, src: `${visual}chromium-and-manganese-reaction-atlas.webp`, alt: "Chromium and manganese reaction atlas", caption: "Use the reaction atlas to distinguish chromium redox chemistry from the later manganese routes.", anchor: "p8-redox-sequence", width: 1448, height: 1086 },
  { part: 8, src: `${visual}chromium-chemistry-from-ore-to-oxidation.webp`, alt: "Chromium chemistry from chromite ore to chromium oxidation states", caption: "The ore-to-dichromate route links roasting, acidification and chromium(VI) speciation in one sequence.", anchor: "p8-preparation-of-potassium-dichromate", width: 1448, height: 1086 },

  { part: 9, src: `${visual}manganese-chemistry-oxidation-states-and-reaction.webp`, alt: "Manganese oxidation states and reactions", caption: "Manganese chemistry is organised by oxidation state and by the medium controlling the reduction product.", anchor: "p9-why-mn-ii-is-important", width: 1448, height: 1086 },

  { part: 10, src: `${visual}d-block-elements-compounds-and-reactions-study.webp`, alt: "Study overview of important d-block compounds and reactions", caption: "Use this final overview to connect compound tests, colours, redox changes and ligand effects across the chapter.", anchor: "p10-final-synthesis", width: 1448, height: 1086 },
];
