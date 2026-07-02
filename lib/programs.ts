// ─────────────────────────────────────────────────────────────────────────────
// Programs SSOT (Roadmap V2 · Week 1 — Programs Foundation).
//
// Single config map behind /programs and /programs/[slug]. Week 2 (Learn) and
// Week 3 (Practice) hang program-scoped routes off these same slugs, so keep
// slugs stable. `examTags` must match lib/masterSyllabus Exam tags exactly —
// programs without verified syllabus data in the SSOT carry no tags and render
// as honest structure-only hubs (no fake content, per roadmap rules).
// ─────────────────────────────────────────────────────────────────────────────

export interface ProgramTool {
  label: string;
  desc: string;
  href: string;
  icon: string;
}

export interface Program {
  slug: string;
  name: string;
  kicker: string;
  tagline: string;
  chips: string[];
  /** masterSyllabus exam tags — empty means no verified syllabus yet. */
  examTags: string[];
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

// Learn / Practice / Tests links stay global until the program-scoped routes
// land in Weeks 2–3 — every href below is a real, existing route.
export const PROGRAM_TOOLS: ProgramTool[] = [
  { label: "Learn", desc: "Notes · formula cards · vault · NCERT references", href: "/learn", icon: "📖" },
  { label: "Practice PYQs", desc: "Previous-year questions with chapter intelligence", href: "/pyq", icon: "🎯" },
  { label: "Tests", desc: "Chapter · topic · previous-paper tests", href: "/tests", icon: "📋" },
];

export const PROGRAMS: Program[] = [
  {
    slug: "neet",
    name: "NEET",
    kicker: "🇮🇳 National · Medical Entrance",
    tagline: "NCERT-anchored chemistry for the medical entrance — memory-heavy inorganic, application-based organic and physical.",
    chips: ["+4 / −1 Marking", "45 Questions", "NCERT Focused", "180 Marks"],
    examTags: ["NEET"],
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
    kicker: "🇮🇳 National · Engineering Entrance",
    tagline: "Speed and accuracy across the full NCERT-plus syllabus — the qualifying gate for NITs, IIITs and JEE Advanced.",
    chips: ["+4 / −1 Marking", "Numerical Answer Type", "2 Sessions / Year", "NTA Pattern"],
    examTags: ["JEE MAIN"],
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
    kicker: "🇮🇳 National · IIT Entrance",
    tagline: "Multi-concept problems, partial marking and mechanism-level depth — chemistry the way IIT paper-setters test it.",
    chips: ["Partial Marking", "Multi-Correct", "Matrix Match", "Numerical Type"],
    examTags: ["JEE ADVANCED"],
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
];

export function getProgram(slug: string): Program | undefined {
  return PROGRAMS.find((p) => p.slug === slug);
}
