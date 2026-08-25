import { H2O2_NOTES_SECTIONS } from "./h2o2-notes";
import { HYDROGEN_ASSIGNMENTS_SECTIONS } from "./hydrogen-assignments";
import type { HydrogenSection } from "./types";

export type { HydrogenBlock, HydrogenSection } from "./types";

// Hydrogen chapter structure: comprehensive H2O2 theory followed by integrated assignments
// covering hydrogen fundamentals, water chemistry, heavy water, and H2O2 redox reactions
export const HYDROGEN_SECTIONS: HydrogenSection[] = [
  ...H2O2_NOTES_SECTIONS,
  ...HYDROGEN_ASSIGNMENTS_SECTIONS,
];
