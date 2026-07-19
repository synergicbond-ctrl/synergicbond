import type { ComponentType } from "react";

export type SolidStatePartDefinition = {
  part: number;
  slug: string;
  title: string;
  load: () => Promise<{ default: ComponentType }>;
};

export const SOLID_STATE_PARTS: SolidStatePartDefinition[] = [
  { part: 1, slug: "introduction-to-solid-state", title: "Introduction to Solid State", load: () => import("./parts/part01") },
  { part: 2, slug: "crystalline-and-amorphous-solids", title: "Crystalline and Amorphous Solids", load: () => import("./parts/part02") },
  { part: 3, slug: "polycrystalline-solids", title: "Polycrystalline Solids", load: () => import("./parts/part03") },
  { part: 4, slug: "classification-of-crystalline-solids", title: "Classification of Crystalline Solids", load: () => import("./parts/part04") },
  { part: 5, slug: "crystal-lattice-lattice-point-and-unit-cell", title: "Crystal Lattice, Lattice Point and Unit Cell", load: () => import("./parts/part05") },
  { part: 6, slug: "contribution-and-sharing-of-particles-in-unit-cells", title: "Contribution and Sharing of Particles in Unit Cells", load: () => import("./parts/part06") },
  { part: 7, slug: "primitive-and-centred-unit-cells", title: "Primitive and Centred Unit Cells", load: () => import("./parts/part07") },
  { part: 8, slug: "dimensional-development-of-crystal-lattices", title: "Dimensional Development of Crystal Lattices", load: () => import("./parts/part08") },
  { part: 9, slug: "seven-crystal-systems", title: "Seven Crystal Systems", load: () => import("./parts/part09") },
  { part: 10, slug: "fourteen-bravais-lattices", title: "Fourteen Bravais Lattices", load: () => import("./parts/part10") },
  { part: 11, slug: "symmetry-of-a-cube", title: "Symmetry Elements of a Cube", load: () => import("./parts/part11") },
  { part: 12, slug: "effective-number-of-atoms-per-unit-cell-z", title: "Effective Number of Atoms per Unit Cell (Z)", load: () => import("./parts/part12") },
  { part: 13, slug: "atomic-radius-edge-length-relations", title: "Atomic Radius–Edge Length Relations", load: () => import("./parts/part13") },
  { part: 14, slug: "coordination-number-and-neighbour-shells", title: "Coordination Number and Neighbour Shells", load: () => import("./parts/part14") },
  { part: 15, slug: "density-of-unit-cell", title: "Density of Unit Cell", load: () => import("./parts/part15") },
  { part: 16, slug: "crystal-stoichiometry-and-atom-removal-problems", title: "Crystal Stoichiometry and Atom-Removal Problems", load: () => import("./parts/part16") },
  { part: 17, slug: "packing-in-solids", title: "Packing in Solids", load: () => import("./parts/part17") },
  { part: 18, slug: "voids-in-crystal-packing", title: "Voids in Crystal Packing", load: () => import("./parts/part18") },
  { part: 19, slug: "radius-ratio-and-limiting-geometry", title: "Radius Ratio and Limiting Geometry", load: () => import("./parts/part19") },
  { part: 20, slug: "important-crystal-structures", title: "Important Crystal Structures", load: () => import("./parts/part20") },
  { part: 21, slug: "defects-in-solids", title: "Defects in Solids", load: () => import("./parts/part21") },
  { part: 22, slug: "electrical-properties-of-solids", title: "Electrical Properties of Solids", load: () => import("./parts/part22") },
  { part: 23, slug: "magnetic-properties-of-solids", title: "Magnetic Properties of Solids", load: () => import("./parts/part23") },
];

export const SOLID_STATE_PART_COUNT = SOLID_STATE_PARTS.length;
