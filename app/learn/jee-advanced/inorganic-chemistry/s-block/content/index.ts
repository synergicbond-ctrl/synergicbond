import { AEM_NOTES_SECTIONS } from "./aem-notes";
import { SALTS_INDUSTRY_SECTIONS } from "./salts-industry";
import { ANOMALIES_SECTIONS } from "./anomalies";
import { JD_LEE_ENHANCEMENTS as ALKALI_CORE_SECTIONS } from "./jd-lee-enhancements";
import type { SBlockSection } from "./types";

export type { SBlockBlock, SBlockSection } from "./types";

// Keep the two textbook parts independent. Part A contains only Group 1
// material; Part B contains only Group 2 material. Question-bank and
// worked-example sections remain excluded.
export const ALKALI_METAL_SECTIONS: SBlockSection[] = [
  ...ALKALI_CORE_SECTIONS,
  ...ANOMALIES_SECTIONS.slice(0, 1),
  ...SALTS_INDUSTRY_SECTIONS.slice(2),
];

export const ALKALINE_EARTH_METAL_SECTIONS: SBlockSection[] = [...AEM_NOTES_SECTIONS];

export const S_BLOCK_SECTIONS: SBlockSection[] = [
  ...ALKALI_METAL_SECTIONS,
  ...ALKALINE_EARTH_METAL_SECTIONS,
];
