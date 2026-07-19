import type { ChapterTab, LessonGroup, LessonRef } from "@/components/notes/canonical";

// Canonical chapter metadata for Redox Reactions — the original 15 numbered
// sections (Equivalent Weight 1–8 · Titration 1–7) merged into 10 lessons.
// Every original section renders inside its lesson with its own number and
// title; nothing is dropped or reordered. Presentation only.

export interface RedoxSectionRef {
  /** Original section number within its unit (kept visible in the lesson). */
  id: number;
  title: string;
}

export interface RedoxLessonMeta {
  number: number;
  title: string;
  unit: "equivalent-weight" | "titration";
  sections: RedoxSectionRef[];
}

export const REDOX_LESSONS: RedoxLessonMeta[] = [
  {
    number: 1,
    title: "Equivalent Weight — Basic Rules, Oxides & Ionic Species",
    unit: "equivalent-weight",
    sections: [
      { id: 1, title: "Basic Rules & Oxide Formulations" },
      { id: 2, title: "Gaseous Oxides & Ionic Species" },
    ],
  },
  {
    number: 2,
    title: "Acidic Oxides, Basicity, Hydrated Salts & Complex Species",
    unit: "equivalent-weight",
    sections: [
      { id: 3, title: "Acidic Oxides & Basicity Cases" },
      { id: 4, title: "Hydrated Salts & Complex Species" },
    ],
  },
  {
    number: 3,
    title: "Disproportionation & Redox Formulas",
    unit: "equivalent-weight",
    sections: [{ id: 5, title: "Disproportionation & Redox Formulas" }],
  },
  {
    number: 4,
    title: "Principle & Law of Equivalence — Numericals and Applications",
    unit: "equivalent-weight",
    sections: [
      { id: 6, title: "Principle of Equivalence & Numericals" },
      { id: 7, title: "Law of Equivalence Applications" },
    ],
  },
  {
    number: 5,
    title: "Advanced n-Factor Workings",
    unit: "equivalent-weight",
    sections: [{ id: 8, title: "Advanced n-Factor Workings" }],
  },
  {
    number: 6,
    title: "Volumetric Analysis Basics, Equipment & Primary Standards",
    unit: "titration",
    sections: [
      { id: 1, title: "Volumetric Analysis Basics & Equipment" },
      { id: 2, title: "Primary Standards & End Point vs Equivalence Point" },
    ],
  },
  {
    number: 7,
    title: "Redox Titrations & Mixed Compound Problems",
    unit: "titration",
    sections: [{ id: 3, title: "Redox Titrations & Mixed Compound Problems" }],
  },
  {
    number: 8,
    title: "Multi-Step Aliquot Dilutions & Metal Equivalents",
    unit: "titration",
    sections: [{ id: 4, title: "Multi-Step Aliquot Dilutions & Metal Equivalents" }],
  },
  {
    number: 9,
    title: "Iodometry vs Iodimetry, Bleaching Powder & Ozone/Peroxide Analysis",
    unit: "titration",
    sections: [
      { id: 5, title: "Iodometry vs Iodimetry & Bleaching Powder" },
      { id: 6, title: "Iodometric Calculations & Ozone/Peroxide Analysis" },
    ],
  },
  {
    number: 10,
    title: "Advanced Applications & Precipitation/Conductometric Titrations",
    unit: "titration",
    sections: [{ id: 7, title: "Advanced Applications & Precipitation/Conductometric Titrations" }],
  },
];

export const REDOX_GROUPS = [
  { label: "Equivalent Weight & n-Factor", from: 1, to: 5 },
  { label: "Titration & Volumetric Analysis", from: 6, to: 10 },
] as const;

export function redoxHref(number: number): string {
  return `/notes/redox-reactions/part${number}`;
}

export function redoxLessonRef(number: number): LessonRef | undefined {
  const lesson = REDOX_LESSONS.find((item) => item.number === number);
  if (!lesson) return undefined;
  const group = REDOX_GROUPS.find((g) => lesson.number >= g.from && lesson.number <= g.to);
  return {
    href: redoxHref(lesson.number),
    number: `Lesson ${lesson.number}`,
    title: lesson.title,
    meta: group?.label,
  };
}

export function redoxTabs(currentPart?: number): ChapterTab[] {
  return [
    { label: "All 10 lessons", href: "/notes/redox-reactions", active: currentPart === undefined },
    ...REDOX_GROUPS.map((group, index) => ({
      label: group.label,
      href: `/notes/redox-reactions#group-${index + 1}`,
      active: currentPart !== undefined && currentPart >= group.from && currentPart <= group.to,
    })),
  ];
}

export function redoxLessonGroups(): LessonGroup[] {
  return REDOX_GROUPS.map((group) => ({
    label: group.label,
    lessons: REDOX_LESSONS.filter((lesson) => lesson.number >= group.from && lesson.number <= group.to)
      .map((lesson) => ({
        href: redoxHref(lesson.number),
        number: `Lesson ${lesson.number}`,
        title: lesson.title,
        meta: lesson.sections.length > 1 ? `${lesson.sections.length} sections` : undefined,
      })),
  }));
}
