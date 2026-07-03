// ─────────────────────────────────────────────────────────────────────────────
// Programs SSOT (Roadmap V2 · Week 1 — Programs Foundation).
//
// Single config map behind /programs and /programs/[slug]. Week 2 (Learn) and
// Week 3 (Practice) hang program-scoped routes off these same slugs, so keep
// slugs stable. `examTags` must match lib/masterSyllabus Exam tags exactly —
// programs without verified syllabus data in the SSOT carry no tags and render
// as honest structure-only hubs (no fake content, per roadmap rules).
// ─────────────────────────────────────────────────────────────────────────────

import type { PYQExam } from "@/lib/pyq";

export interface ProgramSection {
  label: string;
  desc: string;
  /** Program-scoped segment under /programs/[slug]/. */
  path: "learn" | "practice" | "tests";
  icon: string;
}

export type ProgramGroup = "entrance" | "boards" | "global";

export interface Program {
  slug: string;
  name: string;
  kicker: string;
  tagline: string;
  chips: string[];
  /** Landing-page grouping. */
  group: ProgramGroup;
  /** masterSyllabus exam tags — empty means no verified syllabus yet. */
  examTags: string[];
  /** lib/pyq exam tag — absent means no verified PYQ/test mapping yet. */
  pyqExam?: PYQExam;
  syllabusHeading?: string;
  syllabusBlurb?: string;
  /** Pre-existing deep route for this program, if one exists. */
  legacyHub?: { href: string; label: string };
  /** Full Tailwind class strings (JIT needs literals, no interpolation). */
  accent: {
    text: string;
    chip: string;
    card: string;
    gradient: string;
  };
}

// Program-scoped sections (Weeks 2–4). Hub cards compose the href as
// /programs/[slug]/[path]; the global /learn, /pyq and /tests routes stay as
// secondary fallback links.
export const PROGRAM_SECTIONS: ProgramSection[] = [
  { label: "Learn", desc: "Chapters · notes · formula cards · vault · NCERT", path: "learn", icon: "📖" },
  { label: "Practice", desc: "PYQs with chapter, topic and difficulty filters", path: "practice", icon: "🎯" },
  { label: "Tests", desc: "Chapter · topic · full-paper tests", path: "tests", icon: "📋" },
];

export const PROGRAMS: Program[] = [
  {
    slug: "neet",
    name: "NEET",
    group: "entrance",
    kicker: "🇮🇳 National · Medical Entrance",
    tagline: "NCERT-anchored chemistry for the medical entrance — memory-heavy inorganic, application-based organic and physical.",
    chips: ["+4 / −1 Marking", "45 Questions", "NCERT Focused", "180 Marks"],
    examTags: ["NEET"],
    pyqExam: "NEET",
    syllabusHeading: "NEET Chemistry Syllabus",
    syllabusBlurb: "Official NTA syllabus rendered from the verified master syllabus",
    legacyHub: { href: "/neet", label: "NEET Chemistry tools" },
    accent: {
      text: "text-emerald-400",
      chip: "border-emerald-700 text-emerald-300",
      card: "border-emerald-800/60 hover:border-emerald-500",
      gradient: "from-emerald-950/30",
    },
  },
  {
    slug: "jee-main",
    name: "JEE Main",
    group: "entrance",
    kicker: "🇮🇳 National · Engineering Entrance",
    tagline: "Speed and accuracy across the full NCERT-plus syllabus — the qualifying gate for NITs, IIITs and JEE Advanced.",
    chips: ["+4 / −1 Marking", "Numerical Answer Type", "2 Sessions / Year", "NTA Pattern"],
    examTags: ["JEE MAIN"],
    pyqExam: "JEE Main",
    syllabusHeading: "JEE Main Chemistry Syllabus",
    syllabusBlurb: "Official NTA syllabus rendered from the verified master syllabus",
    legacyHub: { href: "/jee", label: "JEE Chemistry tools" },
    accent: {
      text: "text-cyan-400",
      chip: "border-cyan-700 text-cyan-300",
      card: "border-cyan-800/60 hover:border-cyan-500",
      gradient: "from-cyan-950/30",
    },
  },
  {
    slug: "jee-advanced",
    name: "JEE Advanced",
    group: "entrance",
    kicker: "🇮🇳 National · IIT Entrance",
    tagline: "Multi-concept problems, partial marking and mechanism-level depth — chemistry the way IIT paper-setters test it.",
    chips: ["Partial Marking", "Multi-Correct", "Matrix Match", "Numerical Type"],
    examTags: ["JEE ADVANCED"],
    pyqExam: "JEE Advanced",
    syllabusHeading: "JEE Advanced Chemistry Syllabus",
    syllabusBlurb: "Official JAB syllabus rendered from the verified master syllabus",
    legacyHub: { href: "/jee", label: "JEE Chemistry tools" },
    accent: {
      text: "text-sky-400",
      chip: "border-sky-700 text-sky-300",
      card: "border-sky-800/60 hover:border-sky-500",
      gradient: "from-sky-950/30",
    },
  },
  {
    slug: "olympiad",
    name: "Olympiad",
    group: "entrance",
    kicker: "🌍 International · NSEC → INChO → IChO",
    tagline: "University-depth theoretical and practical chemistry beyond JEE — for the national and international olympiad track.",
    chips: ["NSEC", "INChO", "IChO", "USNCO"],
    examTags: [],
    legacyHub: { href: "/olympiad", label: "Olympiad Chemistry tools" },
    accent: {
      text: "text-violet-400",
      chip: "border-violet-700 text-violet-300",
      card: "border-violet-800/60 hover:border-violet-500",
      gradient: "from-violet-950/30",
    },
  },
  {
    slug: "cbse",
    name: "CBSE",
    group: "boards",
    kicker: "🏫 Board · Class 11–12",
    tagline: "NCERT-first preparation for CBSE boards — the same verified NCERT-aligned content that powers the entrance tracks.",
    chips: ["Class 11", "Class 12", "NCERT Aligned", "Board Pattern"],
    examTags: [],
    accent: {
      text: "text-amber-400",
      chip: "border-amber-700 text-amber-300",
      card: "border-amber-800/60 hover:border-amber-500",
      gradient: "from-amber-950/30",
    },
  },
  {
    slug: "icse",
    name: "ICSE",
    group: "boards",
    kicker: "🏫 Board · Class 11–12 (ISC)",
    tagline: "Concept-rich chemistry for the ISC curriculum — descriptive answers, named reactions and rigorous fundamentals.",
    chips: ["Class 11", "Class 12", "ISC Pattern", "Theory + Practical"],
    examTags: [],
    accent: {
      text: "text-rose-400",
      chip: "border-rose-700 text-rose-300",
      card: "border-rose-800/60 hover:border-rose-500",
      gradient: "from-rose-950/30",
    },
  },
  {
    slug: "state-boards",
    name: "State Boards",
    group: "boards",
    kicker: "🏫 Board · State Curricula",
    tagline: "Chemistry fundamentals mapped to state board curricula — built on the same verified core content library.",
    chips: ["Class 11", "Class 12", "State Pattern", "Bilingual Ready"],
    examTags: [],
    accent: {
      text: "text-orange-400",
      chip: "border-orange-700 text-orange-300",
      card: "border-orange-800/60 hover:border-orange-500",
      gradient: "from-orange-950/30",
    },
  },
  {
    slug: "gate",
    name: "GATE",
    group: "global",
    kicker: "🎓 Postgraduate · GATE Chemistry (CY)",
    tagline: "Graduate-level chemistry for GATE CY — physical, organic and inorganic depth with numerical-answer and 1/2-mark MCQ practice.",
    chips: ["GATE CY", "MCQ +1/−⅓", "NAT no negative", "Graduate Depth"],
    examTags: [],
    legacyHub: { href: "/gate", label: "GATE Chemistry tools" },
    accent: {
      text: "text-teal-400",
      chip: "border-teal-700 text-teal-300",
      card: "border-teal-800/60 hover:border-teal-500",
      gradient: "from-teal-950/30",
    },
  },
  {
    slug: "international",
    name: "International",
    group: "global",
    kicker: "🌍 International · AP · IB · A-Level · MCAT",
    tagline: "Chemistry mapped to international curricula — AP, IB, A-Level and MCAT tracks built on the same verified core library.",
    chips: ["AP", "IB", "A-Level", "MCAT"],
    examTags: [],
    accent: {
      text: "text-indigo-400",
      chip: "border-indigo-700 text-indigo-300",
      card: "border-indigo-800/60 hover:border-indigo-500",
      gradient: "from-indigo-950/30",
    },
  },
];

export function getProgram(slug: string): Program | undefined {
  return PROGRAMS.find((p) => p.slug === slug);
}
