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
//   redox 10 lessons (15 sections) · hydrogen 8 lessons (22 chapters) ·
//   solid-state 10 parts · periodic-table master notes · s-block-elements 18 lessons ·
//   p-block-elements 20 lessons · d-block-elements 10 theory parts ·
//   isomerism 40 parts (169 source modules).
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
  // ── Solution and Colligative Properties ───────────────────────────────────
  // NOTE: Route returns 307 (premium redirect) despite no explicit requirePremiumLearnAccess guard.
  // Protection mechanism needs investigation (possible middleware/global redirect).
  {
    id: "solutions",
    syllabusId: "solutions",
    title: "Solution and Colligative Properties",
    href: "/learn/jee-advanced/solutions",
    lessonLabel: "17 parts",
    premium: true,
    description:
      "Complete JEE Advanced treatment of liquid solutions, Henry’s law, Raoult’s law, ideal and non-ideal behaviour, phase diagrams, distillation, azeotropes and all colligative properties.",
  },
  // ── Surface Chemistry ──────────────────────────────────────────────────────
  {
    id: "surface-chemistry",
    syllabusId: "surface-chemistry",
    title: "Surface Chemistry",
    href: "/learn/jee-advanced/surface-chemistry",
    lessonLabel: "12 parts",
    premium: true,
    description:
      "Complete JEE Advanced Surface Chemistry course: adsorption, physisorption and chemisorption, isotherms, catalysis, colloids, preparation and purification, electrical and optical properties, coagulation, emulsions and micelles — including a dedicated Adsorption deep-dive.",
  },
  // ── Chemical Kinetics ──────────────────────────────────────────────────────
  {
    id: "chemical-kinetics",
    syllabusId: "chemical-kinetics",
    title: "Chemical Kinetics",
    href: "/learn/jee-advanced/chemical-kinetics",
    lessonLabel: "20 parts",
    premium: true,
    description:
      "Complete JEE Advanced Chemical Kinetics course: rate laws, order and molecularity, integrated rate equations, half-life, Arrhenius theory, collision and transition-state theory, and complex (consecutive, parallel, reversible) reactions.",
  },
  // ── Gaseous State ──────────────────────────────────────────────────────────
  {
    id: "states-of-matter",
    syllabusId: "states-of-matter",
    title: "Gaseous State",
    href: "/learn/gaseous-state",
    lessonLabel: "16 parts",
    premium: true,
    description:
      "Complete JEE Advanced Gaseous State course: gas laws, kinetic theory, Maxwell speed distribution, real gases, van der Waals equation, critical constants and liquefaction.",
  },
  // ── Solid State ────────────────────────────────────────────────────────────
  {
    id: "solid-state",
    syllabusId: "solid-state",
    title: "Solid State",
    href: "/learn/solid-state/master",
    lessonLabel: "10 parts",
    premium: true,
    description:
      "Complete JEE Advanced Solid State notes covering crystal classification, lattices and unit cells, seven crystal systems, packing, voids, radius-ratio rules, important ionic structures, defects, electrical properties and magnetism.",
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
  // NOTE: Route returns 307 (premium redirect). Protection mechanism needs investigation.
  {
    id: "thermodynamics",
    syllabusId: "thermodynamics",
    title: "Thermodynamics",
    href: "/learn/thermodynamics",
    lessonLabel: "30 lessons",
    premium: true,
    description: "Complete 30-part course: systems and state functions, first law, entropy and the second law, free energies, Maxwell relations and equilibrium.",
  },
  // ── Chemical Equilibrium ───────────────────────────────────────────────────
  // NOTE: Route returns 307 (premium redirect). Protection mechanism needs investigation.
  {
    id: "chemical-equilibrium",
    syllabusId: "chemical-equilibrium",
    title: "Chemical Equilibrium",
    href: "/learn/chemical-equilibrium",
    lessonLabel: "18 parts",
    premium: true,
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
    lessonLabel: "8 lessons · 22 chapters",
    premium: true,
    description: "Complete Hydrogen course covering isotopes, H₂ molecular orbitals, ortho–para hydrogen, preparation and reactions, hydrides, diborane, mechanisms, hydrogen bonding, water, heavy water and hydrogen peroxide.",
  },
  // ── S-block Elements ──────────────────────────────────────────────────────
  {
    id: "s-block-elements",
    syllabusId: "s-block-elements",
    title: "S-block Elements",
    href: "/learn/jee-advanced/inorganic-chemistry/s-block",
    lessonLabel: "27 sections",
    premium: true,
    description: "JEE Advanced integrated master textbook for Groups 1 and 2: periodic trends, lithium and beryllium anomalies, diagonal relationships, hydrides, halides, oxoanion salts, liquid ammonia solutions, crown ethers, organolithium and Grignard chemistry, sodium and calcium industrial chemistry, complexometric water hardness, and biological roles.",
  },
  // ── D-block Elements ──────────────────────────────────────────────────────
  {
    id: "d-block-elements",
    syllabusId: "d-and-f-block-elements",
    title: "D-block Elements",
    href: "/notes/d-block",
    lessonLabel: "10 theory parts",
    premium: true,
    description: "JEE Advanced theory covering transition-element configurations, periodic trends, oxidation states, colour, magnetism, chromium, manganese and detailed Ag, Zn, Cu and Fe chemistry.",
  },

  // ── F-block Elements ──────────────────────────────────────────────────────
  {
    id: "f-block-elements",
    syllabusId: "d-and-f-block-elements",
    title: "F-block Elements",
    href: "/notes/f-block",
    lessonLabel: "4 parts · 21 visual lessons",
    premium: true,
    description:
      "Premium NCERT-first JEE Advanced chapter on lanthanoids and actinoids with exact visual maps for configurations, oxidation states, colour, magnetism, contraction, bonding, separation, applications and exam traps.",
  },

  // ── Principles of Qualitative Analysis / Salt Analysis ───────────────────
  // NOTE: Route returns 307 (premium redirect). Protection mechanism needs investigation.
  {
    id: "qualitative-analysis",
    syllabusId: "qualitative-analysis",
    title: "Principles of Qualitative Analysis",
    href: "/learn/jee-advanced/salt-analysis",
    lessonLabel: "18 parts",
    premium: true,
    description:
      "Complete qualitative analysis course covering preliminary tests, anions, cation groups, confirmatory reactions, interfering radicals and systematic mixture analysis.",
  },
  // ── Environmental Chemistry ───────────────────────────────────────────────
  // NOTE: Route returns 307 (premium redirect). Protection mechanism needs investigation.
  {
    id: "environmental-chemistry",
    syllabusId: "environmental-chemistry",
    title: "Environmental Chemistry",
    href: "/learn/jee-advanced/environmental-chemistry",
    lessonLabel: "15 parts",
    premium: true,
    description:
      "Atmospheric, water and soil chemistry; pollution mechanisms, industrial waste, control strategies, green chemistry and circular chemical design.",
  },
  // ── Polymers ──────────────────────────────────────────────────────────────
  // NOTE: Route returns 307 (premium redirect). Protection mechanism needs investigation.
  {
    id: "polymers",
    syllabusId: "polymers",
    title: "Polymers",
    href: "/learn/jee-advanced/polymers",
    lessonLabel: "26 sections",
    premium: true,
    description:
      "Polymer classification, chain architecture, polymerisation mechanisms, tacticity, molecular mass, plastics, rubbers, fibres, resins, biodegradable and conducting polymers.",
  },
  // ── P-block Elements ──────────────────────────────────────────────────────
  {
    id: "p-block-elements",
    syllabusId: "p-block-elements",
    sectionLabel: "Full block",
    title: "P-block Elements",
    href: "/notes/p-block",
    lessonLabel: "20 lessons",
    premium: true,
    description: "JEE Advanced notes for Groups 13–18: trends, boron and carbon chemistry, nitrogen and sulphur oxoacids, halogens, interhalogens and xenon compounds.",
  },
  {
    id: "boron-family",
    syllabusId: "p-block-elements",
    sectionLabel: "Group 13 deep dive",
    title: "The Boron Family",
    href: "/notes/boron-family",
    lessonLabel: "13 lessons + question bank",
    premium: true,
    description: "Group 13 (B, Al, Ga, In, Tl) in full: periodic trends and anomalies, the inert-pair effect, electron-deficient and multicentre bonding, borax and boric acid, boron halides, boranes and borazine, aluminium chemistry, and an integrated Q1–Q90 question bank with answer key.",
  },
  {
    id: "carbon-family",
    syllabusId: "p-block-elements",
    sectionLabel: "Group 14 deep dive",
    title: "The Carbon Family",
    href: "/notes/carbon-family",
    lessonLabel: "29 lessons",
    premium: true,
    description: "Group 14 (C, Si, Ge, Sn, Pb) in full: every property with increasing/decreasing/note order blocks, a MOT lens or JEE trap on each key species, energetics of the inert-pair effect, the carbon anomaly and catenation, allotropes and fullerene topology, carbides, CO/CO₂/carbonates and metal carbonyls, silicon extraction, silica, the full seven-class silicate system, glass, silicones, hydrides, halides, pπ–dπ complexes, tin/lead reaction maps, a uses section, a coverage checklist, 30 review questions with worked answers, and a full JEE question bank with answer key.",
  },
  {
    id: "nitrogen-family",
    syllabusId: "p-block-elements",
    sectionLabel: "Group 15 deep dive",
    title: "The Nitrogen Family",
    href: "/notes/nitrogen-family",
    lessonLabel: "28 lessons",
    premium: true,
    description: "Group 15 (N, P, As, Sb, Bi) in full: periodic trends and the inert-pair effect, the nitrogen anomaly and pπ–pπ bonding, allotropes of phosphorus, nitrides and phosphides, dinitrogen and the Haber process, ammonia, hydrazine / hydroxylamine / azides, the oxides and oxoacids of nitrogen, nitric acid and the Ostwald process, phosphine, phosphorus halides, the oxides and oxoacids of phosphorus, As/Sb/Bi comparative chemistry, one-page reaction networks, an NCERT Unit-7 ledger and an extended question-bank reaction set — with schematic structure and apparatus figures on every lesson.",
  },
  {
    id: "oxygen-family",
    syllabusId: "p-block-elements",
    sectionLabel: "Group 16 deep dive",
    title: "The Oxygen Family",
    href: "/notes/oxygen-family",
    lessonLabel: "25 lessons",
    premium: true,
    description: "Group 16 (O, S, Se, Te, Po) in full: periodic trends and the O-vs-S anomalies, the MO picture of O₂, ozone, the hydrides H₂E, the classification of oxides, hydrogen peroxide, allotropes of sulphur, sulphur dioxide, the oxoacids of sulphur, sulphuric acid and the Contact process, SF₆/SF₄, Se/Te/Po, one-page reaction networks, an NCERT Unit-7 ledger and an extended question-bank reaction set — with schematic structure and apparatus figures on every lesson.",
  },
  {
    id: "halogen-family",
    syllabusId: "p-block-elements",
    sectionLabel: "Group 17 deep dive",
    title: "The Halogen Family",
    href: "/notes/halogen-family",
    lessonLabel: "21 lessons",
    premium: true,
    description: "Group 17 (F, Cl, Br, I, At) in full: periodic trends and the fluorine anomaly, oxidising power and the ½ΔdissH + ΔegH + ΔhydH cycle, preparation of the halogens, chlorine and bleaching powder, the oxoacids of the halogens, the hydrogen halides, interhalogen compounds, pseudohalogens, one-page reaction networks, an NCERT Unit-7 ledger and an extended question-bank reaction set — with schematic structure and apparatus figures on every lesson.",
  },
  {
    id: "noble-gases",
    syllabusId: "p-block-elements",
    sectionLabel: "Group 18 deep dive",
    title: "The Noble Gases",
    href: "/notes/noble-gases",
    lessonLabel: "14 lessons",
    premium: true,
    description: "Group 18 (He, Ne, Ar, Kr, Xe, Rn) in full: why the noble gases are unreactive, isolation by fractional distillation of liquid air, clathrate compounds, Bartlett's discovery, the xenon fluorides and oxofluorides with full VSEPR, xenon–oxygen compounds and perxenates, compounds of krypton and radon, the uses of every noble gas, an NCERT Unit-7 ledger and an extended question-bank reaction set — with schematic structure and apparatus figures on every lesson.",
  },
  // ── Organic Chemistry (JEE Advanced) ─────────────────────────────────────
  {
    id: "general-organic-chemistry",
    syllabusId: "general-organic-chemistry",
    title: "General Organic Chemistry",
    href: "/learn/jee-advanced/organic-chemistry/goc",
    lessonLabel: "11 sections",
    premium: false,
    description: "Bond fission, carbocations, carbanions, radicals, carbenes, inductive/resonance/hyperconjugation/electromeric effects, aromaticity, and acid-base strength — with 25 JEE Advanced-pattern questions.",
  },
  {
    id: "hydrocarbons",
    syllabusId: "hydrocarbons",
    title: "Hydrocarbons",
    href: "/learn/jee-advanced/organic-chemistry/hydrocarbons",
    lessonLabel: "12 sections",
    premium: true,
    description: "Alkanes, alkenes, alkynes and aromatic hydrocarbons: full mechanisms for radical halogenation, electrophilic addition, EAS, ozonolysis, and 25 JEE Advanced-pattern questions.",
  },
  {
    id: "haloalkanes-haloarenes",
    syllabusId: "haloalkanes-haloarenes",
    title: "Haloalkanes and Haloarenes",
    href: "/learn/jee-advanced/organic-chemistry/haloalkanes-haloarenes",
    lessonLabel: "10 sections",
    premium: true,
    description: "SN1, SN2, E1, E2 mechanisms with full stereochemistry; nucleophilic aromatic substitution; named reactions and 25 JEE Advanced questions.",
  },
  {
    id: "alcohols-phenols-ethers",
    syllabusId: "alcohols-phenols-ethers",
    title: "Alcohols, Phenols and Ethers",
    href: "/learn/jee-advanced/organic-chemistry/alcohols-phenols-ethers",
    lessonLabel: "10 sections",
    premium: true,
    description: "Preparation, acidity comparisons, dehydration mechanisms, ether synthesis (Williamson), phenol reactions, and 25 JEE Advanced questions.",
  },
  {
    id: "carbonyls",
    syllabusId: "aldehydes-ketones",
    title: "Aldehydes, Ketones and Carboxylic Acids",
    href: "/learn/jee-advanced/organic-chemistry/carbonyls",
    lessonLabel: "11 sections",
    premium: true,
    description: "Nucleophilic addition to C=O, aldol condensation, Cannizzaro, Clemmensen and Wolff-Kishner reductions, carboxylic acid derivatives, and 25 JEE Advanced questions.",
  },
  {
    id: "amines",
    syllabusId: "amines",
    title: "Amines",
    href: "/learn/jee-advanced/organic-chemistry/amines",
    lessonLabel: "10 sections",
    premium: true,
    description: "Basicity trends, preparation (Gabriel, Hofmann, Curtius), diazotisation and coupling reactions, carbylamine test, and 25 JEE Advanced questions.",
  },
  {
    id: "biomolecules",
    syllabusId: "biomolecules",
    title: "Biomolecules",
    href: "/learn/jee-advanced/organic-chemistry/biomolecules",
    lessonLabel: "9 sections",
    premium: true,
    description: "Carbohydrates (monosaccharides, anomers, glycosidic bonds), amino acids, peptides, proteins, enzymes, nucleic acids and vitamins — with 25 JEE-pattern questions.",
  },
  {
    id: "chemistry-in-everyday-life",
    syllabusId: "chemistry-in-everyday-life",
    title: "Chemistry in Everyday Life",
    href: "/learn/jee-advanced/organic-chemistry/chemistry-in-everyday-life",
    lessonLabel: "8 sections",
    premium: true,
    description: "Drug classifications, mechanism of drug action, antiseptics vs disinfectants, food preservatives, cleansing agents, and 25 JEE-pattern questions.",
  },
  // ── Coordination Compounds ────────────────────────────────────────────────
  {
    id: "coordination-compounds",
    syllabusId: "coordination-compounds",
    title: "Coordination Compounds",
    href: "/learn/jee-advanced/inorganic-chemistry/coordination-compounds",
    lessonLabel: "11 sections",
    premium: true,
    description: "Werner's theory, IUPAC nomenclature, isomerism, VBT and CFT with d-orbital splitting, stability constants, and 25 JEE Advanced questions.",
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
  "p-block-elements": {
    href: "/notes/p-block",
    description:
      "The full P-block Elements route across Groups 13–18, plus six group-by-group deep dives: Boron (13), Carbon (14), Nitrogen (15), Oxygen (16), Halogen (17) and Noble Gases (18) — each with order blocks, structure and apparatus figures, an NCERT Unit-7 ledger, an extended question-bank reaction set, reaction networks, JEE traps and a coverage checklist.",
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
