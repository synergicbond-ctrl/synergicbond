import { SOLID_STATE_PARTS as MASTER_PARTS } from "../master/_content";
import { PartArticle } from "../master/_shared";
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
