import { FOUNDATIONS_SECTIONS } from "./foundations";
import { AEM_NOTES_SECTIONS } from "./aem-notes";
import { REACTIONS_SECTIONS } from "./reactions";
import { SALTS_INDUSTRY_SECTIONS } from "./salts-industry";
import { ANOMALIES_SECTIONS } from "./anomalies";
import { APPLICATIONS_SECTIONS } from "./applications";
import type { SBlockSection } from "./types";

export type { SBlockBlock, SBlockSection } from "./types";

// Ordered so the chapter reads as one continuous narrative: foundations and
// data first, then comprehensive AEM notes, then the full reaction chemistry,
// then the two first-member anomalies (which lean on everything before them),
// then industrial salts, applications, and uses. The legacy order-bank and
// enhancement appendices are intentionally excluded: they duplicated the core
// notes and are reserved for a later question-bank release.
export const S_BLOCK_SECTIONS: SBlockSection[] = [
  ...FOUNDATIONS_SECTIONS,
  ...AEM_NOTES_SECTIONS,
  ...REACTIONS_SECTIONS,
  ...SALTS_INDUSTRY_SECTIONS.slice(0, 2), // carbonates, nitrates-sulphates
  ...ANOMALIES_SECTIONS,
  ...SALTS_INDUSTRY_SECTIONS.slice(2), // sodium-chemistry, carbonate-industry
  // Keep the four explanatory application sections only. The trailing
  // order-bank and worked-example blocks are question material reserved for
  // the later question-bank release.
  ...APPLICATIONS_SECTIONS.slice(0, 4),
];
