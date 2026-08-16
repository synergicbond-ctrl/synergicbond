// University Chemistry — B.Sc. curriculum architecture (Years 1-3).
//
// Source: UGC Choice Based Credit System (CBCS) model curriculum for B.Sc.
// Chemistry (Honours), as adopted by Dibrugarh University (Board of Studies
// in Chemistry, 10 April 2017) — a real, publicly published implementation
// of the UGC model syllabus, not a fabricated structure. Verified via direct
// PDF retrieval before this file was written.
//
// Real structure confirmed: 14 Core theory papers (C-1 through C-14) across
// six semesters, each paired with a lab course; roughly even split across
// Inorganic / Organic / Physical Chemistry; Discipline Specific Elective
// (DSE) papers begin in Semester V. Individual universities following the
// UGC model syllabus vary slightly in paper ordering and elective offerings
// — this is a MODEL curriculum, not a single binding national standard, and
// this file says so rather than presenting it as universally fixed.
//
// Status is tracked explicitly per paper so the UI never claims content
// exists where it doesn't — "coming-soon" papers render as honestly labeled
// placeholders, never fabricated stubs.

export type PaperStatus = "available" | "coming-soon";

export interface UniversityUnit {
  title: string;
  topics: string[];
}

export interface UniversityPaper {
  code: string;
  slug: string;
  title: string;
  branch: "Inorganic" | "Organic" | "Physical";
  status: PaperStatus;
  /** Populated only once real unit content exists for this paper. */
  units?: UniversityUnit[];
}

export interface UniversitySemester {
  number: number;
  slug: string;
  papers: UniversityPaper[];
}

export interface UniversityYear {
  number: 1 | 2 | 3;
  slug: string;
  title: string;
  semesters: UniversitySemester[];
}

export const UNIVERSITY_CURRICULUM: UniversityYear[] = [
  {
    number: 1,
    slug: "bsc-1",
    title: "B.Sc. Chemistry — Year 1",
    semesters: [
      {
        number: 1,
        slug: "semester-1",
        papers: [
          {
            code: "C-1",
            slug: "inorganic-chemistry-1",
            title: "Inorganic Chemistry I",
            branch: "Inorganic",
            status: "available",
            units: [
              {
                title: "Atomic Structure",
                topics: [
                  "Bohr's atomic model and its limitations",
                  "Dual nature of matter and radiation; de Broglie's equation",
                  "Heisenberg's uncertainty principle",
                  "The Schrödinger wave equation and its physical significance",
                  "Quantum numbers (n, l, ml, ms) and their significance",
                  "Shapes of s, p and d orbitals; radial and angular nodes",
                  "Radial and angular probability distribution curves",
                  "Aufbau principle and its limitations, Pauli exclusion principle, Hund's rule of maximum multiplicity",
                  "Electronic configurations of atoms and ions; extra stability of half-filled and fully-filled orbitals",
                  "Exceptional configurations (Cr, Cu, and related anomalies)",
                ],
              },
            ],
          },
          {
            code: "C-2",
            slug: "physical-chemistry-1",
            title: "Physical Chemistry I",
            branch: "Physical",
            status: "available",
            units: [
              {
                title: "Mathematical Concepts for Chemistry",
                topics: [
                  "Functions and their graphical behaviour; linearising non-linear chemical relationships",
                  "Differentiation: standard rules, rates of change, maxima and minima applied to chemical systems",
                  "Partial derivatives, the total differential, and the test for an exact differential",
                  "Integration: standard integrals and their use in deriving integrated rate laws and reversible work",
                  "Taylor and Maclaurin series expansions; the virial equation as a series in 1/V",
                  "Permutations, combinations and elementary probability; the statistical basis of entropy",
                  "Significant figures, error propagation, and treatment of experimental uncertainty",
                ],
              },
            ],
          },
        ],
      },
      {
        number: 2,
        slug: "semester-2",
        papers: [
          { code: "C-3", slug: "organic-chemistry-1", title: "Organic Chemistry I", branch: "Organic", status: "coming-soon" },
          { code: "C-4", slug: "physical-chemistry-2", title: "Physical Chemistry II", branch: "Physical", status: "coming-soon" },
        ],
      },
    ],
  },
  {
    number: 2,
    slug: "bsc-2",
    title: "B.Sc. Chemistry — Year 2",
    semesters: [
      {
        number: 3,
        slug: "semester-3",
        papers: [
          { code: "C-5", slug: "inorganic-chemistry-2", title: "Inorganic Chemistry II", branch: "Inorganic", status: "coming-soon" },
          { code: "C-6", slug: "organic-chemistry-2", title: "Organic Chemistry II", branch: "Organic", status: "coming-soon" },
          { code: "C-7", slug: "physical-chemistry-3", title: "Physical Chemistry III", branch: "Physical", status: "coming-soon" },
        ],
      },
      {
        number: 4,
        slug: "semester-4",
        papers: [
          { code: "C-8", slug: "inorganic-chemistry-3", title: "Inorganic Chemistry III", branch: "Inorganic", status: "coming-soon" },
          { code: "C-9", slug: "organic-chemistry-3", title: "Organic Chemistry III", branch: "Organic", status: "coming-soon" },
          { code: "C-10", slug: "physical-chemistry-4", title: "Physical Chemistry IV", branch: "Physical", status: "coming-soon" },
        ],
      },
    ],
  },
  {
    number: 3,
    slug: "bsc-3",
    title: "B.Sc. Chemistry — Year 3",
    semesters: [
      {
        number: 5,
        slug: "semester-5",
        papers: [
          { code: "C-11", slug: "organic-chemistry-4", title: "Organic Chemistry IV", branch: "Organic", status: "coming-soon" },
          { code: "C-12", slug: "physical-chemistry-5", title: "Physical Chemistry V", branch: "Physical", status: "coming-soon" },
          { code: "DSE-1", slug: "dse-1", title: "Discipline Specific Elective I", branch: "Physical", status: "coming-soon" },
          { code: "DSE-2", slug: "dse-2", title: "Discipline Specific Elective II", branch: "Physical", status: "coming-soon" },
        ],
      },
      {
        number: 6,
        slug: "semester-6",
        papers: [
          { code: "C-13", slug: "inorganic-chemistry-4", title: "Inorganic Chemistry IV", branch: "Inorganic", status: "coming-soon" },
          { code: "C-14", slug: "organic-chemistry-5", title: "Organic Chemistry V", branch: "Organic", status: "coming-soon" },
          { code: "DSE-3", slug: "dse-3", title: "Discipline Specific Elective III", branch: "Physical", status: "coming-soon" },
          { code: "DSE-4", slug: "dse-4", title: "Discipline Specific Elective IV", branch: "Physical", status: "coming-soon" },
        ],
      },
    ],
  },
];

export function findYear(slug: string): UniversityYear | undefined {
  return UNIVERSITY_CURRICULUM.find((y) => y.slug === slug);
}

export function findSemester(yearSlug: string, semesterSlug: string): UniversitySemester | undefined {
  return findYear(yearSlug)?.semesters.find((s) => s.slug === semesterSlug);
}

export function findPaper(yearSlug: string, semesterSlug: string, paperSlug: string): UniversityPaper | undefined {
  return findSemester(yearSlug, semesterSlug)?.papers.find((p) => p.slug === paperSlug);
}

export function totalPapers(): number {
  return UNIVERSITY_CURRICULUM.flatMap((y) => y.semesters).flatMap((s) => s.papers).length;
}

export function availablePapers(): number {
  return UNIVERSITY_CURRICULUM.flatMap((y) => y.semesters)
    .flatMap((s) => s.papers)
    .filter((p) => p.status === "available").length;
}
