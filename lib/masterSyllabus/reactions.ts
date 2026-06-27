export interface ReactionDetail {
  name: string;
  category: string;
  reactants: string[];
  products: string[];
  conditions?: string[];
  memoryTrick?: string;
  chapterId: string;
}

export const masterReactions: ReactionDetail[] = [
  {
    name: "Wurtz Reaction",
    category: "organic",
    reactants: ["Alkyl halide (2 R-X)", "Sodium metal (2 Na)", "Dry ether"],
    products: ["Symmetrical alkane (R-R)", "Sodium halide (2 NaX)"],
    conditions: ["Dry ether medium", "Anhydrous conditions"],
    memoryTrick: "Double the R group and drop the halogens with Na!",
    chapterId: "haloalkanes-haloarenes"
  }
];
