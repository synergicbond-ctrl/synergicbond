import "server-only";

import { S_BLOCK_MASTER_MARKDOWN } from "./content";

export type SBlockPartDef = {
  number: number;
  slug: string;
  title: string;
  fromSection: number;
  toSection: number;
  focus: string;
};

const PART_TITLES = [
  "NCERT coverage map and how to use this course",
  "Position, electronic configuration, occurrence and oxidation states",
  "Alkali metals: NCERT data table and trend audit",
  "Alkaline-earth metals: NCERT data table and trend audit",
  "Periodic orders: size, ionisation, basicity and reactivity",
  "Hydration enthalpy, lattice enthalpy and solubility",
  "Standard electrode potentials and reducing character",
  "Flame colours, emission wavelengths and photoelectric behaviour",
  "Anomalous behaviour of lithium",
  "Anomalous behaviour of beryllium",
  "Diagonal relationship: lithium and magnesium",
  "Diagonal relationship: beryllium and aluminium",
  "Oxygen chemistry: oxides, peroxides, superoxides and ozonides",
  "Reaction atlas of the metals",
  "Nitrides, carbides, sulphides and polysulphides",
  "Hydrides: saline, covalent and complex",
  "Liquid ammonia, solvated electrons, crown ethers and cryptands",
  "Halides: bonding, structures, hydrolysis and preparation",
  "Hydroxides: preparation, basicity, solubility and reactions",
  "Carbonates and hydrogencarbonates",
  "Nitrates, sulphates and hydrated salts",
  "Sodium chloride and sodium hydroxide",
  "Sodium carbonate, sodium hydrogencarbonate and the Solvay process",
  "Potassium carbonate, Leblanc chemistry and sodium-process extensions",
  "Magnesium and calcium compounds: reaction network",
  "Gypsum, plaster of Paris and Portland cement",
  "Hardness of water and s-block ion removal",
  "Biological importance, practical uses and data facts",
  "Master order bank, exception bank and JEE traps",
  "Worked examples and JEE Advanced challenge laboratory",
] as const;

const PART_FOCUS = [
  "Complete NCERT scope, lesson map and the six controlling ideas.",
  "Block position, configurations, oxidation states, occurrence and general character.",
  "Exact Group 1 data, density anomaly, metallic bonding and hydrated mobility.",
  "Exact Group 2 data, cross-group comparisons and hydrate formation.",
  "Core orders, process-dependent reactivity and water-reaction conditions.",
  "Energetic competition governing hydration, lattice strength and solubility.",
  "Thermochemical cycle, lithium paradox and gas-versus-aqueous comparisons.",
  "Flame wavelengths, cobalt glass, identification limits and photoemission.",
  "Every lithium exception derived from small size and polarising power.",
  "Covalent, amphoteric, hydrolytic and complex-forming beryllium chemistry.",
  "Li–Mg similarities, equations and limits of the diagonal analogy.",
  "Be–Al amphoterism, bridged chlorides, complexes and carbide hydrolysis.",
  "Oxygen-ion magnetism, product selection, preparations and life support.",
  "Reactions with water, hydrogen, nitrogen, halogens, sulphur, acids and bases.",
  "Gas-forming hydrolysis patterns and advanced polysulphide chemistry.",
  "Saline and covalent hydrides, stability, hydrolysis and complex hydrides.",
  "Solvated electrons, blue/bronze solutions, ion recognition and electrides.",
  "Fajans orders, BeCl₂ structures, fluoride lattices and MgCl₂ hydrolysis.",
  "Basicity and solubility orders, thermal behaviour and CO₂ stoichiometry.",
  "Solubility, decomposition, polarisation and bicarbonate equilibria.",
  "Nitrate products, sulphate solubility, hydrate facts and analytical tests.",
  "NaCl purification, membrane electrolysis, mercury-cell history and NaOH.",
  "Washing soda, baking soda, complete Solvay cycle, properties and uses.",
  "Potash, historical Leblanc route, fusion mixture and process comparison.",
  "MgO, milk of magnesia, quicklime, lime water, carbonate and carbide.",
  "Controlled dehydration, plaster setting, clinker phases and gypsum control.",
  "Temporary/permanent hardness, precipitation, complexing and ion exchange.",
  "NCERT biological data, ion gradients, uses and essential safety distinctions.",
  "All high-frequency orders, first-member exceptions and corrected traps.",
  "Twenty worked examples spanning theory, reactions, data and calculations.",
] as const;

export const S_BLOCK_PARTS: SBlockPartDef[] = PART_TITLES.map((title, index) => {
  const number = index + 1;
  return {
    number,
    slug: `part${number}`,
    title,
    fromSection: number,
    toSection: number,
    focus: PART_FOCUS[index] ?? title,
  };
});

const SECTION_HEADING = /^#\s+(\d+)\.\s+(.+)$/gm;

type SectionSlice = {
  number: number;
  start: number;
  end: number;
};

function sectionSlices(markdown: string): SectionSlice[] {
  const matches = [...markdown.matchAll(SECTION_HEADING)];
  return matches.map((match, index) => ({
    number: Number(match[1]),
    start: match.index ?? 0,
    end: matches[index + 1]?.index ?? markdown.length,
  }));
}

const MASTER_SECTIONS = sectionSlices(S_BLOCK_MASTER_MARKDOWN);

export function sBlockPartBySlug(slug: string) {
  return S_BLOCK_PARTS.find((part) => part.slug === slug);
}

export function sBlockPartMarkdown(part: SBlockPartDef) {
  const first = MASTER_SECTIONS.find((section) => section.number === part.fromSection);
  const last = MASTER_SECTIONS.find((section) => section.number === part.toSection);
  if (!first || !last) return "";
  return S_BLOCK_MASTER_MARKDOWN.slice(first.start, last.end).trim();
}
