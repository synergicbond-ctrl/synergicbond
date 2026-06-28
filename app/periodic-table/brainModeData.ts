import type { BrainModeContext } from "@/lib/controlCenterTypes";

// Static knowledge graph: high-yield elements mapped to their exam intelligence.
// Equations are stored as clean LaTeX (double-backslash in source → single backslash at
// runtime) and rendered by the BrainModeModal's zero-dependency parser.
export const ELEMENT_BRAIN_MAP: Record<string, BrainModeContext> = {
  H: {
    symbol: "H",
    name: "Hydrogen",
    examWeightage: "High — redox, fuels & hydrides",
    jeeCoreConcepts: [
      "Isotopes: protium, deuterium, tritium",
      "Ortho- vs para-hydrogen",
      "Ionic, covalent & interstitial hydrides",
    ],
    reactions: [
      { equation: "N_2 + 3H_2 \\rightleftharpoons 2NH_3", mechanismContext: "Haber process — Fe catalyst, high pressure (equilibrium)" },
      { equation: "2H_2 + O_2 \\rightarrow 2H_2O", mechanismContext: "Combustion — highly exothermic, \\Delta H < 0" },
      { equation: "H_2 + Cl_2 \\rightarrow 2HCl", mechanismContext: "Photochemical free-radical chain reaction" },
    ],
  },
  C: {
    symbol: "C",
    name: "Carbon",
    examWeightage: "Very High — backbone of all Organic Chemistry",
    jeeCoreConcepts: [
      "Catenation & hybridization (sp, sp², sp³)",
      "Allotropes: diamond, graphite, fullerene",
      "GOC: inductive, resonance, hyperconjugation",
    ],
    reactions: [
      { equation: "C + O_2 \\rightarrow CO_2", mechanismContext: "Complete combustion in excess oxygen" },
      { equation: "2C + O_2 \\rightarrow 2CO", mechanismContext: "Incomplete combustion → carbon monoxide" },
      { equation: "CH_4 + Cl_2 \\rightarrow CH_3Cl + HCl", mechanismContext: "Free-radical halogenation (UV light, substitution)" },
    ],
  },
  N: {
    symbol: "N",
    name: "Nitrogen",
    examWeightage: "High — p-block, oxides & ammonia",
    jeeCoreConcepts: [
      "Anomalous behaviour & pπ-pπ multiple bonds",
      "Oxoacids & oxides of nitrogen",
      "Brown-ring test (analysis)",
    ],
    reactions: [
      { equation: "N_2 + O_2 \\rightarrow 2NO", mechanismContext: "Only at very high temperature (lightning / electric arc)" },
      { equation: "N_2 + 3H_2 \\rightleftharpoons 2NH_3", mechanismContext: "Haber process — industrial ammonia synthesis" },
      { equation: "NH_3 + HCl \\rightarrow NH_4Cl", mechanismContext: "Dense white fumes — classic NH₃ test" },
    ],
  },
  O: {
    symbol: "O",
    name: "Oxygen",
    examWeightage: "Very High — oxidation & oxides",
    jeeCoreConcepts: [
      "Paramagnetism of O₂ (MOT)",
      "Oxides: acidic, basic, amphoteric, neutral",
      "Peroxides & superoxides",
    ],
    reactions: [
      { equation: "2Mg + O_2 \\rightarrow 2MgO", mechanismContext: "Brilliant white flame — basic oxide formed" },
      { equation: "2H_2O_2 \\rightarrow 2H_2O + O_2", mechanismContext: "Disproportionation / catalytic decomposition" },
      { equation: "S + O_2 \\rightarrow SO_2", mechanismContext: "Forms acidic oxide (non-metal + O₂)" },
    ],
  },
  Na: {
    symbol: "Na",
    name: "Sodium",
    examWeightage: "High — s-block, alkali metals",
    jeeCoreConcepts: [
      "Flame colour (golden yellow)",
      "Reactivity & reducing power down the group",
      "Solutions in liquid ammonia (blue, conducting)",
    ],
    reactions: [
      { equation: "2Na + 2H_2O \\rightarrow 2NaOH + H_2", mechanismContext: "Vigorous & exothermic; floats and fizzes" },
      { equation: "2Na + Cl_2 \\rightarrow 2NaCl", mechanismContext: "Direct combination — ionic salt" },
      { equation: "2Na + O_2 \\rightarrow Na_2O_2", mechanismContext: "Sodium peroxide forms in excess oxygen" },
    ],
  },
  Mg: {
    symbol: "Mg",
    name: "Magnesium",
    examWeightage: "Medium — alkaline earth, diagonal w/ Li",
    jeeCoreConcepts: [
      "Diagonal relationship with lithium",
      "Burns in CO₂ and N₂ (Mg₃N₂)",
      "Hard-water hardness (Mg²⁺)",
    ],
    reactions: [
      { equation: "2Mg + O_2 \\rightarrow 2MgO", mechanismContext: "Dazzling white light — used in flares" },
      { equation: "Mg + 2HCl \\rightarrow MgCl_2 + H_2", mechanismContext: "Active metal displaces H₂ from dilute acid" },
      { equation: "Mg + 2H_2O \\rightarrow Mg(OH)_2 + H_2", mechanismContext: "Slow with hot water / fast with steam" },
    ],
  },
  Al: {
    symbol: "Al",
    name: "Aluminium",
    examWeightage: "Medium — amphoteric p-block metal",
    jeeCoreConcepts: [
      "Amphoteric oxide & hydroxide",
      "Thermite reaction (reduction)",
      "Passivation by oxide layer",
    ],
    reactions: [
      { equation: "2Al + Fe_2O_3 \\rightarrow Al_2O_3 + 2Fe", mechanismContext: "Thermite reaction — highly exothermic reduction" },
      { equation: "2Al + 6HCl \\rightarrow 2AlCl_3 + 3H_2", mechanismContext: "Reacts with acid (amphoteric)" },
      { equation: "2Al + 2NaOH + 2H_2O \\rightarrow 2NaAlO_2 + 3H_2", mechanismContext: "Also reacts with strong base — amphoteric" },
    ],
  },
  S: {
    symbol: "S",
    name: "Sulfur",
    examWeightage: "High — Contact process & oxoacids",
    jeeCoreConcepts: [
      "Allotropy (rhombic, monoclinic)",
      "Oxoacids of sulfur & structures",
      "Contact process (H₂SO₄)",
    ],
    reactions: [
      { equation: "S + O_2 \\rightarrow SO_2", mechanismContext: "Burns with a blue flame — acidic oxide" },
      { equation: "2SO_2 + O_2 \\rightleftharpoons 2SO_3", mechanismContext: "Contact process — V₂O₅ catalyst (equilibrium)" },
      { equation: "SO_3 + H_2O \\rightarrow H_2SO_4", mechanismContext: "Via oleum to avoid fog — sulfuric acid" },
    ],
  },
  Cl: {
    symbol: "Cl",
    name: "Chlorine",
    examWeightage: "High — halogens & disproportionation",
    jeeCoreConcepts: [
      "Oxidising power down the group",
      "Disproportionation in alkali",
      "Bleaching action (HOCl)",
    ],
    reactions: [
      { equation: "Cl_2 + 2KI \\rightarrow 2KCl + I_2", mechanismContext: "Displacement — Cl₂ liberates iodine" },
      { equation: "Cl_2 + H_2O \\rightarrow HCl + HOCl", mechanismContext: "Disproportionation; HOCl bleaches" },
      { equation: "Cl_2 + 2NaOH \\rightarrow NaCl + NaOCl + H_2O", mechanismContext: "Cold dilute alkali → hypochlorite" },
    ],
  },
  Fe: {
    symbol: "Fe",
    name: "Iron",
    examWeightage: "High — d-block, +2/+3 redox",
    jeeCoreConcepts: [
      "Fe²⁺ / Fe³⁺ redox & colours",
      "Variable oxidation states",
      "Rusting & corrosion (electrochemistry)",
    ],
    reactions: [
      { equation: "Fe + 2HCl \\rightarrow FeCl_2 + H_2", mechanismContext: "Dilute acid → Fe(II), pale green" },
      { equation: "2Fe + 3Cl_2 \\rightarrow 2FeCl_3", mechanismContext: "Strong oxidiser drives Fe(III)" },
      { equation: "3Fe + 4H_2O \\rightarrow Fe_3O_4 + 4H_2", mechanismContext: "Reversible reaction with steam" },
    ],
  },
  Cu: {
    symbol: "Cu",
    name: "Copper",
    examWeightage: "High — d-block below H in series",
    jeeCoreConcepts: [
      "Does not displace H₂ from dilute acids",
      "Reaction with HNO₃ (dilute vs conc.)",
      "Cu²⁺ complexes & colours",
    ],
    reactions: [
      { equation: "3Cu + 8HNO_3 \\rightarrow 3Cu(NO_3)_2 + 2NO + 4H_2O", mechanismContext: "Dilute HNO₃ → colourless NO" },
      { equation: "Cu + 2H_2SO_4 \\rightarrow CuSO_4 + SO_2 + 2H_2O", mechanismContext: "Hot conc. H₂SO₄ (acid as oxidiser, no H₂)" },
      { equation: "2Cu + O_2 \\rightarrow 2CuO", mechanismContext: "Black copper(II) oxide on heating in air" },
    ],
  },
  Zn: {
    symbol: "Zn",
    name: "Zinc",
    examWeightage: "Medium — amphoteric d-block",
    jeeCoreConcepts: [
      "Amphoteric oxide & hydroxide",
      "Galvanisation (sacrificial protection)",
      "d¹⁰ — colourless compounds",
    ],
    reactions: [
      { equation: "Zn + 2HCl \\rightarrow ZnCl_2 + H_2", mechanismContext: "Active metal liberates H₂ from acid" },
      { equation: "Zn + 2NaOH \\rightarrow Na_2ZnO_2 + H_2", mechanismContext: "Reacts with base too — amphoteric" },
      { equation: "2Zn + O_2 \\rightarrow 2ZnO", mechanismContext: "ZnO: yellow when hot, white when cold" },
    ],
  },
};
