import type {
  PremiumChapterNotes, NoteBlock, NoteTopic, NotesExam,
} from "@/lib/premiumNotes/schema";
import { filterNotesForExam, notesStats } from "@/lib/premiumNotes/schema";
import { VISUAL_REGISTRY } from "./visuals";

// Premium Notes renderer — semantic, open editorial reading surface.
// No emoji structural UI. Left-rule callout system. One surface nesting depth.
// Colours carry meaning: cyan=concept, violet=orbital/exception/trick,
// gold=result/dyk, green=rule/answer, coral=trap/mistake/error.

const MONO = "var(--font-mono), ui-monospace, 'SF Mono', monospace";

function ExamTag({ exam }: { exam: string }) {
  return (
    <span style={{
      fontFamily: MONO,
      fontSize: "9px",
      fontWeight: 700,
      letterSpacing: "0.15em",
      textTransform: "uppercase",
      color: "var(--text-muted)",
      border: "1px solid var(--border)",
      borderRadius: "4px",
      padding: "1px 5px",
    }}>
      {exam}
    </span>
  );
}

function ExamTags({ exams }: { exams?: string[] }) {
  if (!exams?.length) return null;
  return <span style={{ display: "inline-flex", gap: "4px", marginLeft: "6px" }}>{exams.map((e) => <ExamTag key={e} exam={e} />)}</span>;
}

function MonoLabel({ text, color }: { text: string; color: string }) {
  return (
    <p style={{
      fontFamily: MONO,
      fontSize: "9px",
      fontWeight: 900,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      color,
      marginBottom: "0.4rem",
    }}>
      {text}
    </p>
  );
}

function LeftRail({
  label,
  color,
  children,
  exams,
}: {
  label: string;
  color: string;
  children: React.ReactNode;
  exams?: string[];
}) {
  return (
    <aside style={{ borderLeft: `3px solid ${color}`, paddingLeft: "1rem" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.4rem" }}>
        <MonoLabel text={label} color={color} />
        <ExamTags exams={exams} />
      </div>
      {children}
    </aside>
  );
}

function Block({ block }: { block: NoteBlock }) {
  switch (block.kind) {
    case "detailed":
      return (
        <div style={{ display: "flex", flexDirection: "column", gap: "0.55rem" }}>
          {block.heading && (
            <h5 style={{ fontSize: "0.9375rem", fontWeight: 600, color: "var(--chem-bond)", margin: 0 }}>
              {block.heading}
              <ExamTags exams={block.exams} />
            </h5>
          )}
          {block.paras?.map((p, i) => (
            <p key={i} style={{ fontSize: "1rem", lineHeight: 1.72, color: "var(--text-body)", margin: 0 }}>{p}</p>
          ))}
          {block.points && (
            <ul style={{ display: "flex", flexDirection: "column", gap: "0.35rem", margin: 0, padding: 0, listStyle: "none" }}>
              {block.points.map((pt, i) => (
                <li key={i} style={{ display: "flex", gap: "0.6rem", alignItems: "flex-start", fontSize: "1rem", lineHeight: 1.7, color: "var(--text-body)" }}>
                  <span aria-hidden style={{ color: "var(--chem-bond)", flexShrink: 0, marginTop: "0.2rem", fontSize: "0.7rem" }}>▸</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      );

    case "visual": {
      const Visual = VISUAL_REGISTRY[block.visual];
      return (
        <figure style={{ border: "1px solid var(--border)", borderRadius: "var(--radius)", overflow: "hidden", margin: 0 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0.5rem 1rem", borderBottom: "1px solid var(--border)" }}>
            <span style={{ fontFamily: MONO, fontSize: "9.5px", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-muted)" }}>
              Visual · {block.title}
            </span>
            <ExamTags exams={block.exams} />
          </div>
          <div style={{ padding: "1rem", background: "var(--background)" }}>
            {Visual
              ? <Visual />
              : <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", padding: "0.5rem 0" }}>Diagram "{block.visual}" is being produced — core notes above cover the concept.</p>
            }
          </div>
          {block.caption && (
            <figcaption style={{ padding: "0.5rem 1rem", borderTop: "1px solid var(--border)", fontSize: "0.8125rem", lineHeight: 1.55, color: "var(--text-muted)" }}>
              {block.caption}
            </figcaption>
          )}
        </figure>
      );
    }

    case "focus":
      return (
        <LeftRail label={block.title ?? "Key exam focus"} color="var(--chem-bond)" exams={block.exams}>
          <ul style={{ display: "flex", flexDirection: "column", gap: "0.35rem", margin: 0, padding: 0, listStyle: "none" }}>
            {block.points.map((p, i) => (
              <li key={i} style={{ display: "flex", gap: "0.55rem", fontSize: "1rem", lineHeight: 1.7, color: "var(--text-body)" }}>
                <span aria-hidden style={{ color: "var(--chem-bond)", flexShrink: 0 }}>◆</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </LeftRail>
      );

    case "trap":
      return (
        <LeftRail label="JEE / NEET trap" color="var(--chem-trap)" exams={block.exams}>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
            {block.items.map((t, i) => (
              <div key={i} style={{ display: "flex", flexDirection: "column", gap: "0.2rem" }}>
                <p style={{ fontSize: "0.9375rem", fontWeight: 600, color: "var(--chem-trap)", lineHeight: 1.55 }}>Assumption: {t.trap}</p>
                <p style={{ fontSize: "0.9375rem", color: "var(--text-body)", lineHeight: 1.65 }}>Reality: {t.reality}</p>
              </div>
            ))}
          </div>
        </LeftRail>
      );

    case "mistake":
      return (
        <LeftRail label="Common mistakes" color="var(--chem-energy)" exams={block.exams}>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
            {block.items.map((m, i) => (
              <div key={i} style={{ display: "flex", flexDirection: "column", gap: "0.2rem" }}>
                <p style={{ fontSize: "0.9375rem", fontWeight: 600, color: "var(--chem-energy)", lineHeight: 1.55 }}>Wrong: {m.wrong}</p>
                <p style={{ fontSize: "0.9375rem", color: "var(--text-body)", lineHeight: 1.65 }}>Correct: {m.right}</p>
              </div>
            ))}
          </div>
        </LeftRail>
      );

    case "exception":
      return (
        <LeftRail label="Critical exception" color="var(--chem-orbital)" exams={block.exams}>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {block.items.map((e, i) => (
              <div key={i}>
                <p style={{ fontSize: "0.9375rem", fontWeight: 600, color: "var(--chem-orbital)", lineHeight: 1.55 }}>{e.statement}</p>
                {e.why && <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: 1.6, marginTop: "0.2rem" }}>Why: {e.why}</p>}
              </div>
            ))}
          </div>
        </LeftRail>
      );

    case "trick":
      return (
        <LeftRail label="Memory anchor" color="var(--chem-rule)" exams={block.exams}>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {block.items.map((t, i) => (
              <div key={i}>
                <p style={{ fontSize: "0.9375rem", fontWeight: 600, color: "var(--chem-rule)", lineHeight: 1.55 }}>Mnemonic: {t.trick}</p>
                <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: 1.6 }}>Unlocks: {t.recall}</p>
              </div>
            ))}
          </div>
        </LeftRail>
      );

    case "scientist":
      return (
        <aside style={{ display: "flex", flexDirection: "column", gap: "0.5rem", borderLeft: "3px solid var(--chem-orbital)", paddingLeft: "1rem" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "0.5rem" }}>
            <p style={{ fontFamily: MONO, fontSize: "9px", fontWeight: 900, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--chem-orbital)" }}>
              Scientific history
            </p>
            {block.year && (
              <span style={{ fontFamily: MONO, fontSize: "9.5px", fontWeight: 700, color: "var(--text-muted)", border: "1px solid var(--border)", borderRadius: "4px", padding: "1px 6px" }}>
                {block.year}
              </span>
            )}
          </div>
          <p style={{ fontSize: "1rem", fontWeight: 600, color: "var(--chem-orbital)", lineHeight: 1.4 }}>{block.scientist}</p>
          <p style={{ fontSize: "0.9375rem", lineHeight: 1.72, color: "var(--text-body)" }}>{block.contribution}</p>
          {block.whyItMattered && (
            <p style={{ fontSize: "0.875rem", lineHeight: 1.6, color: "var(--text-muted)", paddingTop: "0.4rem", borderTop: "1px solid var(--border)" }}>
              <span style={{ fontWeight: 600, color: "var(--chem-orbital)" }}>Why it changed chemistry: </span>
              {block.whyItMattered}
            </p>
          )}
          {block.funFact && (
            <p style={{ fontSize: "0.8125rem", lineHeight: 1.55, color: "var(--text-muted)" }}>
              <span style={{ fontWeight: 600 }}>Anecdote: </span>{block.funFact}
            </p>
          )}
        </aside>
      );

    case "dyk":
      return (
        <LeftRail label="Did you know" color="var(--chem-energy)" exams={block.exams}>
          <p style={{ fontSize: "1rem", lineHeight: 1.72, color: "var(--text-body)" }}>{block.fact}</p>
          {block.connection && (
            <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", marginTop: "0.3rem" }}>
              <span style={{ fontWeight: 600, color: "var(--chem-energy)" }}>Connection: </span>
              {block.connection}
            </p>
          )}
        </LeftRail>
      );

    case "decoder":
      return (
        <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem", borderLeft: "3px solid var(--accent)", paddingLeft: "1rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <MonoLabel text={`Formula · ${block.title}`} color="var(--accent)" />
            <ExamTags exams={block.exams} />
          </div>
          {block.formula && (
            <div style={{ fontFamily: MONO, fontSize: "1.1rem", fontWeight: 700, color: "var(--foreground)", padding: "0.5rem 0", overflowX: "auto" }}>
              {block.formula}
            </div>
          )}
          <p style={{ fontSize: "1rem", lineHeight: 1.72, color: "var(--text-body)" }}>
            <span style={{ fontWeight: 600, color: "var(--foreground)" }}>Meaning: </span>
            {block.meaning}
          </p>
          {block.example && (
            <p style={{ fontFamily: MONO, fontSize: "0.875rem", color: "var(--text-muted)", borderTop: "1px solid var(--border)", paddingTop: "0.4rem" }}>
              Example: {block.example}
            </p>
          )}
          {block.insights?.length ? (
            <ul style={{ display: "flex", flexDirection: "column", gap: "0.25rem", margin: 0, padding: 0, listStyle: "none" }}>
              {block.insights.map((ins, i) => (
                <li key={i} style={{ display: "flex", gap: "0.5rem", fontSize: "0.875rem", lineHeight: 1.6, color: "var(--text-muted)" }}>
                  <span aria-hidden style={{ color: "var(--accent)", flexShrink: 0 }}>▸</span>
                  <span>{ins}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      );

    case "errorAnalysis":
      return (
        <aside style={{ display: "flex", flexDirection: "column", gap: "0.6rem", borderLeft: "3px solid var(--chem-trap)", paddingLeft: "1rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <MonoLabel text={block.title ?? "Exam vulnerability"} color="var(--chem-trap)" />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.45rem" }}>
            <p style={{ fontSize: "0.9375rem", fontWeight: 600, color: "var(--chem-trap)", lineHeight: 1.55 }}>The trap: {block.error}</p>
            <p style={{ fontSize: "0.875rem", lineHeight: 1.65, color: "var(--text-muted)" }}>
              <span style={{ fontWeight: 600, color: "var(--text-muted)" }}>Why it happens: </span>
              {block.whyItHappens}
            </p>
            <p style={{ fontSize: "0.9375rem", lineHeight: 1.65, color: "var(--chem-rule)" }}>
              <span style={{ fontWeight: 600 }}>Correct approach: </span>
              {block.correctApproach}
            </p>
            {block.verificationStep && (
              <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", borderTop: "1px solid var(--border)", paddingTop: "0.35rem" }}>
                <span style={{ fontWeight: 600, color: "var(--chem-bond)" }}>Self-check: </span>
                {block.verificationStep}
              </p>
            )}
          </div>
        </aside>
      );

    case "illustration": {
      const tricky = block.tricky;
      const labelColor = tricky ? "var(--chem-trap)" : "var(--chem-rule)";
      const labelText = tricky ? "Tricky example" : "Solved example";
      return (
        <section style={{
          borderRadius: "var(--radius)",
          border: `1px solid color-mix(in srgb, ${labelColor} 25%, transparent)`,
          borderLeftWidth: "3px",
          borderLeftColor: labelColor,
          overflow: "hidden",
        }}>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "0.5rem", padding: "0.75rem 1rem", borderBottom: "1px solid var(--border)" }}>
            <MonoLabel text={labelText} color={labelColor} />
            <span style={{ fontFamily: MONO, fontSize: "9px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)", border: "1px solid var(--border)", borderRadius: "4px", padding: "1px 5px" }}>
              {block.level}
            </span>
            {block.concept && (
              <span style={{ fontFamily: MONO, fontSize: "9px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--chem-bond)", border: "1px solid var(--border)", borderRadius: "4px", padding: "1px 5px" }}>
                {block.concept}
              </span>
            )}
            <ExamTags exams={block.exams} />
          </div>
          <div style={{ padding: "1rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <p style={{ fontSize: "1rem", fontWeight: 600, lineHeight: 1.6, color: "var(--foreground)" }}>{block.question}</p>

            {block.thinking && (
              <p style={{ fontSize: "0.9375rem", lineHeight: 1.7, color: "var(--text-muted)", borderTop: "1px solid var(--border)", paddingTop: "0.6rem" }}>
                <span style={{ fontWeight: 600, color: "var(--foreground)" }}>Approach: </span>
                {block.thinking}
              </p>
            )}

            {block.steps?.length ? (
              <ol style={{ display: "flex", flexDirection: "column", gap: "0.5rem", margin: 0, padding: 0, listStyle: "none" }}>
                {block.steps.map((s, i) => (
                  <li key={i} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                    <span style={{ fontFamily: MONO, fontSize: "9.5px", fontWeight: 700, color: labelColor, flexShrink: 0, marginTop: "0.25rem", minWidth: "1.5rem" }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      {s.label && <p style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--foreground)", marginBottom: "0.1rem" }}>{s.label}</p>}
                      <p style={{ fontSize: "0.9375rem", lineHeight: 1.65, color: "var(--text-body)" }}>{s.work}</p>
                    </div>
                  </li>
                ))}
              </ol>
            ) : block.solution ? (
              <p style={{ fontSize: "0.9375rem", lineHeight: 1.7, color: "var(--text-body)" }}>
                <span style={{ fontWeight: 600, color: "var(--foreground)" }}>Solution: </span>
                {block.solution}
              </p>
            ) : null}

            {block.answer && (
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", paddingTop: "0.6rem", borderTop: "1px solid var(--border)" }}>
                <span style={{ fontFamily: MONO, fontSize: "9px", fontWeight: 900, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--chem-rule)" }}>
                  Final answer
                </span>
                <span style={{ fontFamily: MONO, fontSize: "1.05rem", fontWeight: 700, color: "var(--chem-rule)" }}>{block.answer}</span>
              </div>
            )}

            {block.insight && (
              <p style={{ fontSize: "0.875rem", lineHeight: 1.6, color: "var(--text-muted)", borderTop: "1px solid var(--border)", paddingTop: "0.5rem" }}>
                <span style={{ fontWeight: 600, color: "var(--chem-orbital)" }}>Key insight: </span>
                {block.insight}
              </p>
            )}

            {(block.fastMethod || block.alternateMethod || block.commonMistakes?.length) && (
              <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem", paddingTop: "0.5rem", borderTop: "1px solid var(--border)" }}>
                {block.fastMethod && (
                  <p style={{ fontSize: "0.875rem", lineHeight: 1.6, color: "var(--text-muted)" }}>
                    <span style={{ fontWeight: 600, color: "var(--chem-rule)" }}>Fast method: </span>
                    {block.fastMethod}
                  </p>
                )}
                {block.alternateMethod && (
                  <p style={{ fontSize: "0.875rem", lineHeight: 1.6, color: "var(--text-muted)" }}>
                    <span style={{ fontWeight: 600, color: "var(--chem-orbital)" }}>Alternate: </span>
                    {block.alternateMethod}
                  </p>
                )}
                {block.commonMistakes?.length ? (
                  <p style={{ fontSize: "0.875rem", lineHeight: 1.6, color: "var(--text-muted)" }}>
                    <span style={{ fontWeight: 600, color: "var(--chem-energy)" }}>Watch out: </span>
                    {block.commonMistakes.join(" ")}
                  </p>
                ) : null}
              </div>
            )}
          </div>
        </section>
      );
    }

    case "misc":
      return (
        <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <span style={{ fontFamily: MONO, fontSize: "9px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--text-muted)" }}>Quick application</span>
            <span style={{ fontFamily: MONO, fontSize: "9px", color: "var(--text-muted)", border: "1px solid var(--border)", borderRadius: "4px", padding: "1px 5px" }}>{block.level}</span>
            <ExamTags exams={block.exams} />
          </div>
          <p style={{ fontSize: "1rem", fontWeight: 600, lineHeight: 1.6, color: "var(--foreground)" }}>{block.question}</p>
          <p style={{ fontSize: "0.9375rem", lineHeight: 1.7, color: "var(--text-body)" }}>
            <span style={{ fontFamily: MONO, fontWeight: 700, color: "var(--chem-rule)", marginRight: "0.4rem" }}>{block.answer}</span>
            {block.explanation}
          </p>
        </div>
      );

    case "revision":
      return (
        <LeftRail label={block.title ?? "One-screen revision"} color="var(--chem-bond)" exams={block.exams}>
          <ul style={{ display: "flex", flexDirection: "column", gap: "0.35rem", margin: 0, padding: 0, listStyle: "none" }}>
            {block.points.map((p, i) => (
              <li key={i} style={{ display: "flex", gap: "0.55rem", fontSize: "1rem", lineHeight: 1.7, color: "var(--text-body)" }}>
                <span aria-hidden style={{ color: "var(--chem-bond)", flexShrink: 0 }}>▸</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </LeftRail>
      );
  }
}

function Topic({ topic, index, defaultOpen }: { topic: NoteTopic; index: number; defaultOpen: boolean }) {
  return (
    <details open={defaultOpen} className="group" style={{ borderBottom: "1px solid var(--border)" }}>
      <summary style={{ cursor: "pointer", listStyle: "none", padding: "1rem 0", display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
        <span style={{
          fontFamily: MONO,
          fontSize: "10px",
          fontWeight: 700,
          color: "var(--chem-bond)",
          flexShrink: 0,
          marginTop: "0.35rem",
          minWidth: "2rem",
        }}>
          {String(index + 1).padStart(2, "0")}
        </span>
        <div style={{ flex: 1, minWidth: 0 }}>
          <span style={{
            display: "block",
            fontSize: "1.1rem",
            fontWeight: 600,
            color: "var(--foreground)",
            lineHeight: 1.35,
          }} className="group-open:text-[var(--chem-bond)]">
            {topic.title}
          </span>
          {topic.intro && (
            <span style={{ display: "block", fontSize: "0.875rem", color: "var(--text-muted)", lineHeight: 1.55, marginTop: "0.25rem" }}>
              {topic.intro}
            </span>
          )}
        </div>
        <span style={{ flexShrink: 0, color: "var(--text-muted)", fontSize: "1.1rem", transition: "transform 150ms" }} className="group-open:rotate-90">›</span>
      </summary>
      <div style={{ paddingBottom: "1.5rem", paddingLeft: "2.75rem", display: "flex", flexDirection: "column", gap: "2rem" }}>
        {topic.subtopics.map((st) => (
          <section key={st.id} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h4 style={{
              fontSize: "0.9375rem",
              fontWeight: 600,
              color: "var(--foreground)",
              borderLeft: "2px solid var(--chem-bond)",
              paddingLeft: "0.6rem",
              margin: 0,
            }}>
              {st.title}
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
              {st.blocks.map((b, i) => <Block key={i} block={b} />)}
            </div>
          </section>
        ))}
      </div>
    </details>
  );
}

export default function NotesRenderer({ notes, exam }: { notes: PremiumChapterNotes; exam: NotesExam }) {
  const scoped = filterNotesForExam(notes, exam);
  const stats = notesStats(scoped);
  const examples = (stats.byKind.get("illustration") ?? 0) + (stats.byKind.get("misc") ?? 0) + (stats.byKind.get("decoder") ?? 0);
  const diagrams = stats.byKind.get("visual") ?? 0;
  const traps = (stats.byKind.get("trap") ?? 0) + (stats.byKind.get("mistake") ?? 0) + (stats.byKind.get("errorAnalysis") ?? 0);

  return (
    <div style={{ color: "var(--foreground)" }}>
      {/* Compact stats strip */}
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        gap: "0.5rem",
        padding: "0.6rem 0",
        borderBottom: "1px solid var(--border)",
        marginBottom: "0.5rem",
        fontFamily: MONO,
        fontSize: "9.5px",
        fontWeight: 700,
        letterSpacing: "0.15em",
        textTransform: "uppercase",
        color: "var(--text-muted)",
      }}>
        <span style={{ color: "var(--chem-bond)" }}>{exam}</span>
        <span>·</span>
        <span>{stats.topics} topics</span>
        {examples > 0 && <><span>·</span><span style={{ color: "var(--chem-rule)" }}>{examples} examples</span></>}
        {diagrams > 0 && <><span>·</span><span style={{ color: "var(--chem-bond)" }}>{diagrams} diagrams</span></>}
        {traps > 0 && <><span>·</span><span style={{ color: "var(--chem-trap)" }}>{traps} traps</span></>}
      </div>

      {/* Topic accordions */}
      <div style={{ display: "flex", flexDirection: "column" }}>
        {scoped.topics.map((t, i) => <Topic key={t.id} topic={t} index={i} defaultOpen={i === 0} />)}
      </div>

      {/* Chapter revision sheet */}
      {scoped.chapterRevision.length > 0 && (
        <section style={{ marginTop: "2rem", borderLeft: "3px solid var(--chem-bond)", paddingLeft: "1rem" }}>
          <p style={{ fontFamily: MONO, fontSize: "9px", fontWeight: 900, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--chem-bond)", marginBottom: "0.75rem" }}>
            Chapter revision · {notes.title}
          </p>
          <ul style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "0.5rem",
            margin: 0, padding: 0, listStyle: "none",
          }}>
            {scoped.chapterRevision.map((p, i) => (
              <li key={i} style={{ display: "flex", gap: "0.55rem", fontSize: "0.9375rem", lineHeight: 1.65, color: "var(--text-body)" }}>
                <span aria-hidden style={{ color: "var(--chem-bond)", flexShrink: 0 }}>▸</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
