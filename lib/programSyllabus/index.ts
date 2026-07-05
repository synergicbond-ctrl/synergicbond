import type { ProgramSyllabus } from "./types";
import { NEET_SYLLABUS } from "./neet";
import { JEE_MAIN_SYLLABUS } from "./jeeMain";
import { JEE_ADVANCED_SYLLABUS } from "./jeeAdvanced";
import { NSEC_SYLLABUS } from "./nsec";
import { GATE_SYLLABUS } from "./gate";
import { CBSE_11_SYLLABUS, CBSE_12_SYLLABUS, ISC_11_SYLLABUS, ISC_12_SYLLABUS } from "./boards";

// Program Syllabus registry — the nine premium programs, each with ONLY its
// own official tree (see types.ts isolation contract).

export const PROGRAM_SYLLABUSES: Record<string, ProgramSyllabus> = {
  neet: NEET_SYLLABUS,
  "jee-main": JEE_MAIN_SYLLABUS,
  "jee-advanced": JEE_ADVANCED_SYLLABUS,
  "cbse-class-11": CBSE_11_SYLLABUS,
  "cbse-class-12": CBSE_12_SYLLABUS,
  "isc-class-11": ISC_11_SYLLABUS,
  "isc-class-12": ISC_12_SYLLABUS,
  nsec: NSEC_SYLLABUS,
  gate: GATE_SYLLABUS,
};

export function getProgramSyllabus(programId: string): ProgramSyllabus | undefined {
  return PROGRAM_SYLLABUSES[programId];
}

/** Hub slug → the program syllabus tree(s) shown on that hub. Programs absent
 *  here (state-boards, international) keep their honest structure-only state. */
export const HUB_SYLLABUS_MAP: Record<string, string[]> = {
  neet: ["neet"],
  "jee-main": ["jee-main"],
  "jee-advanced": ["jee-advanced"],
  olympiad: ["nsec"],
  gate: ["gate"],
  cbse: ["cbse-class-11", "cbse-class-12"],
  icse: ["isc-class-11", "isc-class-12"],
};

export type { ProgramSyllabus, SyllabusUnit, SyllabusBranch, ProgramQType } from "./types";
export { BRANCH_LABELS } from "./types";
