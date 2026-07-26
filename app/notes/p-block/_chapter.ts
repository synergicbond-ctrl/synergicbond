import type { ChapterTab, LessonRef } from "@/components/notes/canonical";
import { P_BLOCK_PARTS, type PBlockPartDef } from "./parts";
export const pBlockHref = (number: number) => `/notes/p-block/part${number}`;
export const sectionRangeLabel = (part: PBlockPartDef) => part.fromSection === part.toSection ? `Section ${part.fromSection}` : `Sections ${part.fromSection}–${part.toSection}`;
export function pBlockLessonRef(number: number): LessonRef | undefined { const part = P_BLOCK_PARTS.find((item) => item.number === number); return part ? { href: pBlockHref(part.number), number: `Lesson ${part.number}`, title: part.title, meta: sectionRangeLabel(part) } : undefined; }
export function pBlockTabs(currentPart?: number): ChapterTab[] { return [{ label: "All 20 lessons", href: "/notes/p-block", active: currentPart === undefined }, ...P_BLOCK_PARTS.map((part) => ({ label: `${part.number}. ${part.title}`, href: pBlockHref(part.number), active: currentPart === part.number }))]; }
