// Adapts the Solid State course to the generic reader components in components/chapter-ui.
// Pure data shaping: the part list and groups are the ones the chapter already defines.
import type { ReaderChapter, ReaderData, ReaderPart, SearchItem } from "@/components/chapter-ui/types";
import { SOLID_STATE_PARTS } from "../parts";

export const SOLID_STATE_CHAPTER: ReaderChapter = {
  id: "solid-state",
  title: "Solid State",
  basePath: "/learn/solid-state",
  totalTopics: SOLID_STATE_PARTS.length,
};

/** The seven units of the chapter, as the contents page already groups them (part numbers inclusive). */
export const SOLID_STATE_UNITS: { label: string; hue: string; from: number; to: number }[] = [
  { label: "Foundations & crystal classification", hue: "var(--chem-bond)", from: 1, to: 4 },
  { label: "Lattice, unit cells & crystal systems", hue: "var(--chem-orbital)", from: 5, to: 10 },
  { label: "Symmetry, Z, radius & density", hue: "var(--chem-rule)", from: 11, to: 16 },
  { label: "Packing & void geometry", hue: "var(--chem-bond)", from: 17, to: 18 },
  { label: "Radius ratio & important structures", hue: "var(--chem-energy)", from: 19, to: 20 },
  { label: "Defects & electrical properties", hue: "var(--chem-trap)", from: 21, to: 22 },
  { label: "Magnetic properties", hue: "var(--chem-energy)", from: 23, to: 23 },
];

const unitFor = (part: number) => SOLID_STATE_UNITS.find((u) => part >= u.from && part <= u.to) ?? SOLID_STATE_UNITS[0];

export const solidStateParts: ReaderPart[] = SOLID_STATE_PARTS.map((p) => {
  const unit = unitFor(p.part);
  return {
    part: p.part,
    title: p.title,
    // the part slug is the address the contents always used; /learn/solid-state/<number> redirects to it
    href: `/learn/solid-state/${p.slug}`,
    groupLabel: unit.label,
    hue: unit.hue,
    topics: [],
  };
});

/** Search over every part title (sections are found by the on-page search through their headings). */
export const solidStateSearchItems: SearchItem[] = SOLID_STATE_PARTS.map((p) => ({
  id: `p${p.part}`,
  kind: "heading",
  topic: 0,
  part: p.part,
  title: `Part ${String(p.part).padStart(2, "0")} · ${p.title}`,
  text: p.title,
  sub: unitFor(p.part).label,
  href: `/learn/solid-state/${p.part}`,
}));

/** What AppShell needs to give Solid State its chapter map and chapter-wide search. */
export const solidStateReader: Omit<ReaderData, "part"> = {
  chapter: SOLID_STATE_CHAPTER,
  parts: solidStateParts,
  segments: [],
  searchItems: solidStateSearchItems,
};
