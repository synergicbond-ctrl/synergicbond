import { FOUNDATIONS_SECTIONS } from "./foundations";
import { REACTIONS_SECTIONS } from "./reactions";
import { SALTS_INDUSTRY_SECTIONS } from "./salts-industry";
import { ANOMALIES_SECTIONS } from "./anomalies";
import { APPLICATIONS_SECTIONS } from "./applications";
import type { SBlockSection } from "./types";

export type { SBlockBlock, SBlockSection } from "./types";

// Ordered so the chapter reads as one continuous narrative: foundations and
// data first, then the full reaction chemistry, then the two first-member
// anomalies (which lean on everything before them), then industrial salts,
// then applications, then the closing order bank and problem lab.
export const S_BLOCK_SECTIONS: SBlockSection[] = [
  ...FOUNDATIONS_SECTIONS,
  ...REACTIONS_SECTIONS,
  ...SALTS_INDUSTRY_SECTIONS.slice(0, 2), // carbonates, nitrates-sulphates
  ...ANOMALIES_SECTIONS,
  ...SALTS_INDUSTRY_SECTIONS.slice(2), // sodium-chemistry, carbonate-industry
  ...APPLICATIONS_SECTIONS,
];
