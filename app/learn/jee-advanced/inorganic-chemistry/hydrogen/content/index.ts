import { H2O2_NOTES_SECTIONS } from "./h2o2-notes";
import type { HydrogenSection } from "./types";

export type { HydrogenBlock, HydrogenSection } from "./types";
export { HYDROGEN_QUESTION_BANK_MARKDOWN } from "./questionBank";

// Hydrogen chapter: the H2O2 theory sections. The JEE assignment sets live
// in their own question-bank view (question-bank/page.tsx).
export const HYDROGEN_SECTIONS: HydrogenSection[] = [...H2O2_NOTES_SECTIONS];
