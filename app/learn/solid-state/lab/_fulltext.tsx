import type { ComponentType } from "react";
import { SOLID_STATE_PARTS as MASTER_PARTS } from "../master/_content";
import { PartArticle } from "../master/_shared";
import { SOLID_STATE_PARTS as COURSE_PARTS } from "../parts";
import { PartContentBody, type SolidStatePartData } from "../parts/_shared";
import { Chapter, KeyIdea } from "./_ui";
import { Fold } from "./_notes";

/** The written Master Notes for one or more parts, embedded in full (nothing is summarised). */
export function MasterNotes({ parts }: { parts: number[] }) {
  return (
    <div className="space-y-3">
      <div className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--text-muted)]">Complete written notes for this part</div>
      {parts.map((n) => {
        const part = MASTER_PARTS.find((p) => p.number === n);
        if (!part) return null;
        const examples = part.sections.reduce((s, sec) => s + sec.blocks.filter((b) => b.kind === "example").length, 0);
        return (
          <Fold
            key={n}
            id={`master-part-${n}`}
            kicker={`Master Notes · Part ${n}`}
            title={part.title}
            meta={`${part.sections.length} sections · ${examples} worked examples · ${part.review.length} review points · ${part.practice.length} practice questions`}
          >
            <PartArticle part={part} />
          </Fold>
        );
      })}
    </div>
  );
}

type CourseModule = { default: ComponentType; data?: SolidStatePartData };

/** The original 23-part course (parts 1-2 are standalone pages, 3-23 are data-driven). */
export async function SourceCourse() {
  const modules = (await Promise.all(COURSE_PARTS.map((p) => p.load()))) as CourseModule[];
  return (
    <Chapter id="source-course" n="APPENDIX" title="The original 23-part course" lead="The sequential 23-part course that is also available as separate pages, reproduced here in full: source-page references, solved examples, traps and edge cases for every part.">
      <KeyIdea title="How this relates to the rest of the textbook">
        {"The seven interactive parts above and the Master Notes inside them are the main route. This appendix keeps the earlier part-by-part course, with its own wording and its own solved examples, in the same place so that nothing on the site is left out."}
      </KeyIdea>
      <div className="space-y-3">
        {COURSE_PARTS.map((def, i) => {
          const mod = modules[i];
          const Standalone = mod.default;
          return (
            <Fold key={def.part} id={`course-part-${def.part}`} kicker={`Course · Part ${String(def.part).padStart(2, "0")} of ${COURSE_PARTS.length}`} title={def.title} meta={mod.data ? `Source pages ${mod.data.sourcePages} · ${mod.data.sections.length} sections · ${mod.data.examples.length} solved examples` : undefined}>
              <div className="mx-auto max-w-3xl">{mod.data ? <PartContentBody data={mod.data} /> : <Standalone />}</div>
            </Fold>
          );
        })}
      </div>
    </Chapter>
  );
}
