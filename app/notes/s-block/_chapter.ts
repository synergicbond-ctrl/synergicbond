import type { ChapterTab, LessonRef } from "@/components/notes/canonical";
import { S_BLOCK_PARTS, type SBlockPartDef } from "./parts";
export const sBlockHref = (number: number) => `/notes/s-block/part${number}`;
export const sectionRangeLabel = (part: SBlockPartDef) => part.fromSection === part.toSection ? `Section ${part.fromSection}` : `Sections ${part.fromSection}–${part.toSection}`;
export function sBlockLessonRef(number: number): LessonRef | undefined { const part = S_BLOCK_PARTS.find((item) => item.number === number); return part ? { href: sBlockHref(part.number), number: `Lesson ${part.number}`, title: part.title, meta: sectionRangeLabel(part) } : undefined; }
export function sBlockTabs(currentPart?: number): ChapterTab[] { return [{ label: "All 18 lessons", href: "/notes/s-block", active: currentPart === undefined }, ...S_BLOCK_PARTS.map((part) => ({ label: `${part.number}. ${part.title}`, href: sBlockHref(part.number), active: currentPart === part.number }))]; }
