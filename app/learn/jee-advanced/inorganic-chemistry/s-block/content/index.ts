import { AEM_NOTES_SECTIONS } from "./aem-notes";
import { SALTS_INDUSTRY_SECTIONS } from "./salts-industry";
import { ANOMALIES_SECTIONS } from "./anomalies";
import { JD_LEE_ENHANCEMENTS as ALKALI_CORE_SECTIONS } from "./jd-lee-enhancements";
import type { SBlockSection } from "./types";

export type { SBlockBlock, SBlockSection } from "./types";

const lithiumSection = ANOMALIES_SECTIONS[0];
const LITHIUM_ONLY_SECTION: SBlockSection = {
  ...lithiumSection,
  label: "Anomalous Behaviour of Lithium",
  blocks: lithiumSection.blocks.slice(0, 3).map((block) =>
    block.kind === "md"
      ? {
          ...block,
          text: block.text
            .split("## 18.7 Diagonal relationship: lithium and magnesium")[0]
            .replace(
              "## 18.3 Thermal behaviour: lithium salts decompose like Group 2, not Group 1",
              "## 18.3 Thermal behaviour of lithium salts",
            ),
        }
      : block,
  ),
};

// Keep the two textbook parts independent. Part A contains only Group 1
// material; Part B contains only Group 2 material. Question-bank and
// worked-example sections remain excluded.
export const ALKALI_METAL_SECTIONS: SBlockSection[] = [
  ...ALKALI_CORE_SECTIONS,
  LITHIUM_ONLY_SECTION,
  ...SALTS_INDUSTRY_SECTIONS.slice(2),
];

export const ALKALINE_EARTH_METAL_SECTIONS: SBlockSection[] = [...AEM_NOTES_SECTIONS];

export const S_BLOCK_SECTIONS: SBlockSection[] = [
  ...ALKALI_METAL_SECTIONS,
  ...ALKALINE_EARTH_METAL_SECTIONS,
];
