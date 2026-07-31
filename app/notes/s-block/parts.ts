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

const PARTS = [
  {
    title: "NCERT scope, electronic architecture and occurrence",
    focus:
      "Complete NCERT map, position in the periodic table, electronic configurations, oxidation states, occurrence and general physical character.",
  },
  {
    title: "Group 1 and Group 2 data tables",
    focus:
      "Exact alkali-metal and alkaline-earth-metal data, density and melting-point anomalies, metallic bonding and hydrate formation.",
  },
  {
    title: "Periodic trends, hydration and solubility",
    focus:
      "Atomic and ionic size, ionisation enthalpy, basicity, reactivity, lattice enthalpy, hydration enthalpy and solubility logic.",
  },
  {
    title: "Electrode potentials, reducing power and flame chemistry",
    focus:
      "Thermochemical interpretation of reducing strength, the lithium paradox, emission wavelengths, flame tests and photoelectric behaviour.",
  },
  {
    title: "Anomalous behaviour of lithium and beryllium",
    focus:
      "All first-member exceptions derived from small size, high charge density, polarising power, covalency, amphoterism and complex formation.",
  },
  {
    title: "Diagonal relationships: Li–Mg and Be–Al",
    focus:
      "Similarities, balanced equations, structural parallels, amphoterism, complexes and the limits of each diagonal analogy.",
  },
  {
    title: "Oxygen compounds and reaction atlas",
    focus:
      "Oxides, peroxides, superoxides, ozonides, magnetism, product selection and reactions of s-block metals with common reagents.",
  },
  {
    title: "Nitrides, carbides, sulphides and hydrides",
    focus:
      "Gas-forming hydrolysis, polysulphide chemistry, saline and covalent hydrides, stability, preparation and complex hydrides.",
  },
  {
    title: "Liquid ammonia, ion hosts and halides",
    focus:
      "Solvated electrons, blue and bronze solutions, crown ethers, cryptands, electrides, halide bonding, structures, hydrolysis and preparation.",
  },
  {
    title: "Hydroxides, carbonates and hydrogencarbonates",
    focus:
      "Preparation, basicity, solubility, thermal behaviour, carbon dioxide stoichiometry, decomposition and bicarbonate equilibria.",
  },
  {
    title: "Nitrates, sulphates, sodium chloride and sodium hydroxide",
    focus:
      "Thermal products, sulphate-solubility trends, hydrated salts, analytical facts, NaCl purification and industrial NaOH manufacture.",
  },
  {
    title: "Sodium and potassium carbonates: Solvay and Leblanc",
    focus:
      "Washing soda, baking soda, potash, the complete Solvay cycle, historical Leblanc chemistry, properties, reactions and uses.",
  },
  {
    title: "Magnesium and calcium compounds, gypsum and cement",
    focus:
      "MgO, milk of magnesia, quicklime, lime water, calcium carbide, gypsum, plaster of Paris, clinker phases and Portland cement.",
  },
  {
    title: "Hardness of water, biology, uses and safety",
    focus:
      "Temporary and permanent hardness, treatment methods, ion exchange, biological roles of Na, K, Mg and Ca, practical uses and safety facts.",
  },
  {
    title: "Master order bank, JEE traps and worked examples",
    focus:
      "High-frequency orders, first-member exceptions, corrected statement traps and twenty integrated JEE Advanced worked examples.",
  },
] as const;

export const S_BLOCK_PARTS: SBlockPartDef[] = PARTS.map((part, index) => {
  const number = index + 1;
  const fromSection = index * 2 + 1;

  return {
    number,
    slug: `part${number}`,
    title: part.title,
    fromSection,
    toSection: fromSection + 1,
    focus: part.focus,
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
  const first = MASTER_SECTIONS.find(
    (section) => section.number === part.fromSection,
  );
  const last = MASTER_SECTIONS.find(
    (section) => section.number === part.toSection,
  );

  if (!first || !last) return "";
  return S_BLOCK_MASTER_MARKDOWN.slice(first.start, last.end).trim();
}
