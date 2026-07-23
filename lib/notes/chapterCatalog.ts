// ─────────────────────────────────────────────────────────────────────────────
// Authored-chapter catalog — SAFE METADATA ONLY.
//
// The Notes Explorer needs to know which chapters have real authored
// full-notes courses (route, lesson count, access tier) so every chapter can
// be presented as a uniform card. This file carries ONLY public metadata —
// titles, routes, lesson counts, descriptions. It must NEVER import or
// re-export premium note bodies: those stay server-gated behind their route
// layouts (requirePaidContent / requirePremiumLearnAccess) and the
// server-filtered notesEngine payload in app/notes/page.tsx.
//
// Counts audited against the live route tree on 2026-07-19:
//   atomic-structure 25 lessons (55 sections) · chemical-bonding 24 lessons (189 topics) ·
//   thermodynamics 30 · chemical-equilibrium 18 · electrochemistry 24 ·
//   mole-concept 15 · stoichiometry 9 · concentration-terms 6 · eudiometry 6 ·
//   redox 10 lessons (15 sections) · hydrogen 8 lessons (72 sections) ·
//   periodic-table master notes · isomerism 40 parts (169 source modules).
// ─────────────────────────────────────────────────────────────────────────────

export interface AuthoredCourse {
  /** Unique card id. */
  id: string;
  /** masterSyllabus chapter this course belongs to. */
  syllabusId: string;
  /**
   * Shown when one syllabus chapter has several authored courses
   * (e.g. Some Basic Concepts → Mole Concept / Stoichiometry / …).
   */
  sectionLabel?: string;
  title: string;
  href: string;
  /** Honest lesson counting, e.g. "30 lessons" — from the real route tree. */
  lessonLabel: string;
  /** True when the route itself is entitlement-gated (server-side). */
  premium: boolean;
  description: string;
}

export const AUTHORED_COURSES: AuthoredCourse[] = [
  // ── Some Basic Concepts of Chemistry ───────────────────────────────────────
  {
    id: "mole-concept-course",
    syllabusId: "mole-concept",
    sectionLabel: "Section 1",
    title: "Mole Concept",
    href: "/notes/mole-concept",
    lessonLabel: "15 lessons",
    premium: false,
    description: "Mole, Avogadro constant, atomic and molecular mass scales, formula units, gaseous molar volume and percentage composition.",
  },
  {
    id: "stoichiometry",
    syllabusId: "mole-concept",
    sectionLabel: "Section 2",
    title: "Stoichiometry",
    href: "/notes/stoichiometry",
    lessonLabel: "9 lessons",
    premium: true,
    description: "Reaction stoichiometry, limiting reagent, percentage yield, sequential and parallel reactions, and mixture analysis.",
  },
  {
    id: "concentration-terms",
    syllabusId: "mole-concept",
    sectionLabel: "Section 3",
    title: "Concentration Terms",
    href: "/notes/concentration-terms",
    lessonLabel: "6 lessons",
    premium: true,
    description: "Molarity, molality, mole fraction, percentage concentrations, ppm and interconversion of concentration units.",
  },
  {
    id: "eudiometry",
    syllabusId: "mole-concept",
    sectionLabel: "Section 4",
    title: "Eudiometry",
    href: "/notes/eudiometry",
    lessonLabel: "6 lessons",
    premium: true,
    description: "Gas-phase reaction analysis, eudiometer volume relationships and combustion of hydrocarbon problems.",
  },
  // ── Redox Reactions ────────────────────────────────────────────────────────
  {
    id: "redox-reactions",
    syllabusId: "redox-reactions",
    title: "Redox Reactions",
    href: "/notes/redox-reactions",
    lessonLabel: "10 lessons",
    premium: false,
    description: "Equivalent weight and n-factor across all species classes, principle of equivalence, and volumetric titration analysis.",
  },
  // ── Atomic Structure ───────────────────────────────────────────────────────
  {
    id: "atomic-structure",
    syllabusId: "atomic-structure",
    title: "Atomic Structure",
    href: "/learn/atomic-structure",
    lessonLabel: "25 lessons",
    premium: true,
    description: "From Dalton and cathode rays through Bohr, spectra, quantum numbers, the Schrödinger equation, orbitals and olympiad problem sets.",
  },
  // ── Thermodynamics ─────────────────────────────────────────────────────────
  {
    id: "thermodynamics",
    syllabusId: "thermodynamics",
    title: "Thermodynamics",
    href: "/learn/thermodynamics",
    lessonLabel: "30 lessons",
    premium: false,
    description: "Complete 30-part course: systems and state functions, first law, entropy and the second law, free energies, Maxwell relations and equilibrium.",
  },
  // ── Chemical Equilibrium ───────────────────────────────────────────────────
  {
    id: "chemical-equilibrium",
    syllabusId: "chemical-equilibrium",
    title: "Chemical Equilibrium",
    href: "/learn/chemical-equilibrium",
    lessonLabel: "18 parts",
    premium: false,
    description: "Eighteen continuous parts covering mass action, Kc/Kp/Kx, reaction Gibbs energy, Le Chatelier applications and phase equilibria.",
  },
  // ── Isomerism ──────────────────────────────────────────────────────────────
  {
    id: "isomerism",
    syllabusId: "isomerism",
    title: "Isomerism",
    href: "/learn/isomerism",
    lessonLabel: "40 parts",
    premium: true,
    description: "A 40-part route from constitutional isomerism and tautomerism through geometrical and conformational isomerism to optical activity, chirality, R/S assignment and stereoisomer counting.",
  },
  // ── Chemical Bonding ───────────────────────────────────────────────────────
  {
    id: "chemical-bonding",
    syllabusId: "chemical-bonding",
    title: "Chemical Bonding",
    href: "/learn/chemical-bonding",
    lessonLabel: "24 lessons · 189 topics",
    premium: true,
    description: "Authoritative 189-topic course — Lewis theory, lattice energy, VBT and hybridisation, VSEPR, back bonding, MOT, hydrogen bonding, silicates and integrated JEE Advanced practice.",
  },
  // ── Electrochemistry ───────────────────────────────────────────────────────
  {
    id: "electrochemistry",
    syllabusId: "electrochemistry",
    title: "Electrochemistry",
    href: "/notes/electrochemistry",
    lessonLabel: "24 lessons",
    premium: true,
    description: "Galvanic and electrolytic cells, electrode potentials, Nernst equation, conductance, Kohlrausch's law and Faraday's laws.",
  },
  // ── Periodic Table ─────────────────────────────────────────────────────────
  {
    id: "periodic-table",
    syllabusId: "periodic-table",
    title: "Classification of Elements & Periodicity",
    href: "/learn/periodic-table",
    lessonLabel: "Master notes · 11 sections",
    premium: false,
    description: "NCERT-first periodicity master notes with animated SVGs, verified data tables, Zeff and Slater rules, trends and worked examples.",
  },
  // ── Metallurgy / Isolation of Metals ─────────────────────────────────────
  {
    id: "metallurgy",
    syllabusId: "metallurgy",
    title: "Isolation of Metals (Metallurgy)",
    href: "/notes/metallurgy",
    lessonLabel: "8 lessons",
    premium: true,
    description:
      "Complete JEE Advanced metallurgy covering minerals and ores, beneficiation, gravity and magnetic separation, froth flotation, leaching, calcination, roasting, reduction, Ellingham diagrams, extraction of metals and refining.",
  },
  // ── Hydrogen ───────────────────────────────────────────────────────────────
  {
    id: "hydrogen",
    syllabusId: "hydrogen",
    title: "Hydrogen",
    href: "/notes/hydrogen",
    lessonLabel: "8 lessons · 72 sections",
    premium: true,
    description: "Isotopes, dihydrogen, ortho–para hydrogen, hydrides, water, heavy water, hydrogen peroxide, hydrogen bonding and hydrogen economy.",
  },
];

/**
 * Chapter-level card metadata for syllabus chapters whose authored courses are
 * SECTIONS of one chapter (e.g. Some Basic Concepts of Chemistry). The Notes
 * Explorer shows ONE card for the whole chapter; the individual sections stay
 * reachable from the selected-chapter shortcuts and the course chrome tabs.
 */
export interface CourseGroupCard {
  /** Entry route for the chapter card CTA — a free section when access is mixed. */
  href: string;
  description: string;
}

export const COURSE_GROUP_CARDS: Record<string, CourseGroupCard> = {
  "mole-concept": {
    href: "/notes/mole-concept",
    description:
      "One chapter in four sections — Mole Concept (free), Stoichiometry, Concentration Terms and Eudiometry: from the mole and Avogadro constant to limiting reagent, concentration units and gas-phase analysis.",
  },
};

/** Honest lesson total across a chapter's sections, parsed from lessonLabel. */
export function groupLessonTotal(courses: AuthoredCourse[]): number {
  return courses.reduce((sum, course) => {
    const count = /^(\d+)\s+lessons?/.exec(course.lessonLabel);
    return sum + (count ? Number(count[1]) : 0);
  }, 0);
}

const BY_SYLLABUS = new Map<string, AuthoredCourse[]>();
for (const course of AUTHORED_COURSES) {
  const list = BY_SYLLABUS.get(course.syllabusId) ?? [];
  list.push(course);
  BY_SYLLABUS.set(course.syllabusId, list);
}

export function coursesForSyllabusChapter(syllabusId: string): AuthoredCourse[] {
  return BY_SYLLABUS.get(syllabusId) ?? [];
}
