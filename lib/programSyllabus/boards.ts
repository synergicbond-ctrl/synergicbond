import type { ProgramSyllabus, SyllabusUnit, SyllabusBranch } from "./types";
import { getCbseChapters } from "@/lib/cbse/syllabus";
import { ISC_CLASS_12_UNITS, ISC_CLASS_11_UNITS } from "@/lib/isc/syllabus";

// Board program syllabuses. CBSE trees wrap the existing lib/cbse SSOT (no
// duplication) — that SSOT matches the official CBSE unit list (the uploaded
// CBSE PDF's text layer is glyph-corrupted; unit tables verified structurally
// + against the founder-supplied official chapter list). ISC Class 12 & 11 wrap
// lib/isc (transcribed from the official ISC Revised Syllabuses 2026/2026-27 PDFs).

const BOARD_QTYPES = [
  { key: "mark-1", label: "1 Mark", source: "bank" as const },
  { key: "mark-2", label: "2 Mark", source: "ai-subjective" as const },
  { key: "mark-3", label: "3 Mark", source: "ai-subjective" as const },
  { key: "mark-5", label: "5 Mark", source: "ai-subjective" as const },
  { key: "case-based", label: "Case Based", source: "ai-subjective" as const },
  { key: "competency", label: "Competency Based", source: "ai-subjective" as const },
  { key: "hots", label: "HOTS", source: "ai-subjective" as const },
];

function cbseUnits(cls: 11 | 12): SyllabusUnit[] {
  return getCbseChapters(cls).map((c) => ({
    id: c.id,
    code: `Unit ${c.unit}`,
    title: c.title,
    branch: c.category as SyllabusBranch,
    topics: [],
  }));
}

export const CBSE_11_SYLLABUS: ProgramSyllabus = {
  programId: "cbse-class-11",
  name: "CBSE Class 11 Chemistry",
  source: "Official CBSE XI–XII syllabus (uploaded PDF; unit list per official rationalized curriculum)",
  paperPattern: "Theory 70 marks · Practicals 30 marks",
  units: cbseUnits(11),
  questionTypes: BOARD_QTYPES,
  features: { notes: true, pyqs: false, mocks: true, analytics: true, practicals: true, projects: true, viva: true },
};

export const CBSE_12_SYLLABUS: ProgramSyllabus = {
  programId: "cbse-class-12",
  name: "CBSE Class 12 Chemistry",
  source: "Official CBSE XI–XII syllabus (uploaded PDF; unit list per official rationalized curriculum)",
  paperPattern: "Theory 70 marks · Practicals 30 marks",
  units: cbseUnits(12),
  questionTypes: BOARD_QTYPES,
  features: { notes: true, pyqs: false, mocks: true, analytics: true, practicals: true, projects: true, viva: true },
};

export const ISC_12_SYLLABUS: ProgramSyllabus = {
  programId: "isc-class-12",
  name: "ISC Class 12 Chemistry",
  source: "Official ISC Revised Syllabus 2026, Chemistry (862) Class XII (uploaded PDF)",
  paperPattern: "Paper I Theory 70 (Physical 25 · Inorganic 14 · Organic 31) · Paper II Practical 15 + Project 10 + Practical File 5",
  units: ISC_CLASS_12_UNITS.map((u) => ({
    id: u.id,
    code: `Unit ${u.unit}`,
    title: u.title,
    branch: u.category as SyllabusBranch,
    topics: u.topics,
  })),
  questionTypes: BOARD_QTYPES,
  features: { notes: true, pyqs: false, mocks: true, analytics: true, practicals: true, projects: true, viva: true },
};

export const ISC_11_SYLLABUS: ProgramSyllabus = {
  programId: "isc-class-11",
  name: "ISC Class 11 Chemistry",
  source: "Official ISC Revised Syllabus 2026-27, Chemistry Class XI",
  paperPattern: "Paper I Theory 70 (Physical 41 · Inorganic 6 · Organic 23) · Paper II Practical 15 + Project 10 + Practical File 5",
  units: ISC_CLASS_11_UNITS.map((u) => ({
    id: u.id,
    code: `Unit ${u.unit}`,
    title: u.title,
    branch: u.category as SyllabusBranch,
    topics: u.topics,
  })),
  questionTypes: BOARD_QTYPES,
  features: { notes: true, pyqs: false, mocks: true, analytics: true, practicals: true, projects: true, viva: true },
};
