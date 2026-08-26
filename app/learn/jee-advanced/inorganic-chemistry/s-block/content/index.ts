import { FOUNDATIONS_SECTIONS } from "./foundations";
import { AEM_NOTES_SECTIONS } from "./aem-notes";
import { REACTIONS_SECTIONS } from "./reactions";
import { SALTS_INDUSTRY_SECTIONS } from "./salts-industry";
import { ANOMALIES_SECTIONS } from "./anomalies";
import { APPLICATIONS_SECTIONS } from "./applications";
import { USES_SECTIONS } from "./uses";
import { ORDER_BANK_SECTIONS } from "./order-bank";
import { ASSIGNMENTS_SECTIONS } from "./assignments";
import { JD_LEE_ENHANCEMENTS } from "./jd-lee-enhancements";
import type { SBlockSection } from "./types";

export type { SBlockBlock, SBlockSection } from "./types";

// Ordered so the chapter reads as one continuous narrative: foundations and
// data first, then comprehensive AEM notes, then the full reaction chemistry,
// then the two first-member anomalies (which lean on everything before them),
// then industrial salts, then applications, uses, exam questions, J.D. Lee enhancements,
// and finally assignments.
export const S_BLOCK_SECTIONS: SBlockSection[] = [
  ...FOUNDATIONS_SECTIONS,
  ...AEM_NOTES_SECTIONS,
  ...REACTIONS_SECTIONS,
  ...SALTS_INDUSTRY_SECTIONS.slice(0, 2), // carbonates, nitrates-sulphates
  ...ANOMALIES_SECTIONS,
  ...SALTS_INDUSTRY_SECTIONS.slice(2), // sodium-chemistry, carbonate-industry
  ...APPLICATIONS_SECTIONS,
  ...USES_SECTIONS,
  ...ORDER_BANK_SECTIONS,
  ...JD_LEE_ENHANCEMENTS,
  ...ASSIGNMENTS_SECTIONS,
];
