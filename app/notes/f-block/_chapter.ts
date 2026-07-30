import type { ChapterTab, LessonRef } from "@/components/notes/canonical";
import { F_BLOCK_PARTS } from "./parts";

export const fBlockHref = (number: number) => `/notes/f-block/part${number}`;

export function fBlockLessonRef(number: number): LessonRef | undefined {
  const part = F_BLOCK_PARTS.find((item) => item.number === number);
  return part
    ? {
        href: fBlockHref(part.number),
        number: `Part ${part.number}`,
        title: part.title,
        meta: `${part.printPages} · ${part.focus}`,
      }
    : undefined;
}

export function fBlockTabs(currentPart?: number): ChapterTab[] {
  return [
    {
      label: "All 4 parts",
      href: "/notes/f-block",
      active: currentPart === undefined,
    },
    ...F_BLOCK_PARTS.map((part) => ({
      label: `${part.number}. ${part.title}`,
      href: fBlockHref(part.number),
      active: currentPart === part.number,
    })),
  ];
}
