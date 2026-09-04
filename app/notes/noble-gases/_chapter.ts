import type { ChapterTab, LessonRef } from "@/components/notes/canonical";
import { NOBLE_GASES_PARTS, type NobleGasesPartDef } from "./parts";

export const nobleGasesHref = (number: number) => `/notes/noble-gases/part${number}`;

export const sectionLabel = (part: NobleGasesPartDef) => `Section ${part.section}`;

export function nobleGasesLessonRef(number: number): LessonRef | undefined {
  const part = NOBLE_GASES_PARTS.find((item) => item.number === number);
  return part
    ? { href: nobleGasesHref(part.number), number: `Lesson ${part.number}`, title: part.title, meta: sectionLabel(part) }
    : undefined;
}

const NOBLE_GASES_NAV_GROUPS = [
  { label: "Trends & inertness", first: 1, last: 4 },
  { label: "Compounds of xenon", first: 5, last: 5 },
  { label: "Other noble gases & uses", first: 6, last: 7 },
  { label: "Orders, traps, revision", first: 8, last: 10 },
  { label: "Review & checklist", first: 11, last: 12 },
  { label: "NCERT & question-bank layer", first: 13, last: 14 },
] as const;

export function nobleGasesTabs(currentPart?: number): ChapterTab[] {
  return [
    { label: "All 14 lessons", href: "/notes/noble-gases", active: currentPart === undefined },
    ...NOBLE_GASES_NAV_GROUPS.map((group) => ({
      label: group.label,
      href: nobleGasesHref(group.first),
      active: currentPart !== undefined && currentPart >= group.first && currentPart <= group.last,
    })),
  ];
}
