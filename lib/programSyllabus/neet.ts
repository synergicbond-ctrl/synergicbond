import type { ProgramSyllabus, SyllabusUnit, SyllabusBranch } from "./types";
import { masterSyllabus } from "@/lib/masterSyllabus/all";

// NEET Chemistry — derived from the platform's verified master syllabus,
// filtered STRICTLY to NEET-tagged chapters (NTA rationalized syllabus).
// No official NEET PDF was uploaded in the syllabus set — this tree reuses the
// existing verified SSOT and says so honestly; upload the NTA PDF to pin it.
// Only NEET's own chapters appear; no other program is referenced.

interface DirChapter {
  id: string;
  title: string;
  category: string;
  exams: string[];
  concepts: { id: string; title: string }[];
}

const NEET_CHAPTERS = (masterSyllabus as unknown as DirChapter[]).filter((c) => c.exams.includes("NEET"));

const units: SyllabusUnit[] = NEET_CHAPTERS.map((c) => ({
  id: c.id,
  title: c.title,
  branch: (["physical", "inorganic", "organic"].includes(c.category) ? c.category : "general") as SyllabusBranch,
  topics: c.concepts.slice(0, 8).map((k) => k.title),
}));

export const NEET_SYLLABUS: ProgramSyllabus = {
  programId: "neet",
  name: "NEET Chemistry",
  source: "NTA rationalized NEET syllabus via the verified master-syllabus SSOT (official NTA PDF not in the uploaded set — upload to pin verbatim)",
  units,
  questionTypes: [
    { key: "scq", label: "SCQ", source: "bank" },
    { key: "assertion-reason", label: "Assertion–Reason", source: "bank" },
    { key: "statement", label: "Statement Based", source: "bank" },
    { key: "ncert-based", label: "NCERT Based", source: "bank" },
  ],
  features: { notes: true, pyqs: true, mocks: true, analytics: true, practicals: false, projects: false, viva: false },
};
