import { ChemistryMarkdown, Equation, C, tint } from "@/components/notes/chemistryMarkdown";

/* ------------------------------------------------------------------ */
/*  s-Block notes renderer.                                            */
/*                                                                    */
/*  Both parts render through the shared vivid multi-colour system     */
/*  (components/notes/chemistryMarkdown) so the s-block textbook       */
/*  matches the p-block / boron-family / carbon-family notes:          */
/*  gradient headings, gold emphasis, champagne equations, coral       */
/*  arrows, cyan-tinted tables and typed call-outs.                    */
/*                                                                    */
/*  Part B additionally carries its own `**Core Focus:**` call-out     */
/*  taxonomy and the `A —(cond)→ B` reaction shorthand, which are      */
/*  lifted out here before the markdown reaches ChemistryMarkdown.     */
/* ------------------------------------------------------------------ */

// Worked examples belong in the future question bank, not the concise
// textbook — strip the whole example paragraph (and a trailing display
// equation) before rendering.
function removeWorkedExamples(markdown: string) {
  return markdown.replace(
    /\n?\*\*Worked example[^*]*\*\*[\s\S]*?(?=\n\n|$)(?:\n\n\$\$[\s\S]*?\$\$\s*)?/gi,
    "",
  );
}

/* ---------- typed call-outs (Part B taxonomy) -------------------- */

type CalloutKind = "core-focus" | "exam-note" | "bonding-insight" | "exam-pattern";

const CALLOUT_META: Record<CalloutKind, { label: string; icon: string; accent: string }> = {
  "core-focus": { label: "Core Focus", icon: "★", accent: C.cyan },
  "exam-note": { label: "Exam Note", icon: "✎", accent: C.violet },
  "bonding-insight": { label: "Bonding Insight", icon: "◎", accent: C.teal },
  "exam-pattern": { label: "Exam Pattern", icon: "⚠", accent: C.gold },
};

const CALLOUT_LABEL_RE = /^\*\*(Core Focus|Exam Note|Bonding Insight|Exam Pattern)\b:?\*\*:?\s*/i;

function calloutKind(label: string): CalloutKind {
  return label.toLowerCase().replace(/\s+/g, "-") as CalloutKind;
}

function MultiColourCallout({ kind, body }: { kind: CalloutKind; body: string }) {
  const meta = CALLOUT_META[kind];
  return (
    <div className="my-5 rounded-xl p-4 pl-5" style={{ borderLeft: `4px solid ${meta.accent}`, background: tint(meta.accent, 0.1) }}>
      <p className="mb-1.5 flex items-center gap-1.5 text-[11px] font-black uppercase tracking-[0.18em]" style={{ color: meta.accent }}>
        <span aria-hidden className="text-[13px] leading-none">{meta.icon}</span>
        {meta.label}
      </p>
      <div className="space-y-2 text-[15px] leading-[1.75]" style={{ color: C.body }}>
        <ChemistryMarkdown markdown={body} />
      </div>
    </div>
  );
}

/* ---------- reactions: reuse the shared champagne / coral equation --- */

// A leading "Some phrase: " before the equation, e.g. "Calcination:",
// "Route 1:", "General carbothermic reduction (illustrative):".
const STEP_LABEL_RE = /^([A-Z][^:\n→⇌⇋⟶]{1,60}):\s+(?=.*[→⇌⇋⟶])/;
// Three consecutive lowercase words, or a comma followed by a lowercase
// clause ⇒ this is prose, not an equation.
const PROSE_RUN_RE = /[a-z]{3,}\s+[a-z]{3,}\s+[a-z]{3,}|,\s+[a-z]{3,}\s+[a-z]{3,}/;

function hasArrow(line: string) {
  return /(?:→|⇌|⇋|⟶)/.test(line);
}

function splitTrailingNote(text: string): { core: string; note: string | null } {
  const match = text.match(/\s+\(([^()]+)\)\s*$/);
  if (match && !/[→⇌⇋⟶]/.test(match[1])) {
    return { core: text.slice(0, text.length - match[0].length).trim(), note: match[1].trim() };
  }
  return { core: text.trim(), note: null };
}

function equationCore(line: string): string {
  return splitTrailingNote(line.replace(STEP_LABEL_RE, "")).core;
}

// The bare skeleton used for the prose / length tests: the equation core
// with every "—(condition)→" reduced to a plain arrow, so multi-word
// reaction conditions ("1150 °C, reduced pressure", "electric furnace")
// are not mistaken for prose.
function equationSkeleton(line: string): string {
  return equationCore(line).replace(/—\([^)]*\)→/g, " → ");
}

// A block is a reaction run only when every non-empty line, reduced to its
// equation skeleton, is a short arrow-bearing expression with no prose.
function isReactionBlock(block: string) {
  const lines = block.split("\n").map((l) => l.trim()).filter(Boolean);
  if (lines.length === 0) return false;
  return lines.every((line) => {
    if (/[\\{}$]/.test(line)) return false; // LaTeX — leave it to KaTeX
    if (!hasArrow(equationCore(line))) return false;
    const skeleton = equationSkeleton(line);
    if (skeleton.length > 150) return false;
    if (PROSE_RUN_RE.test(skeleton)) return false;
    return true;
  });
}

// Turn the authored `A + B —(condition)→ C` shorthand into the
// `A + B [condition] ⟶ C` form the shared <Equation> renderer expects,
// so s-block reactions look identical to the boron-family ones.
function toSharedEquation(core: string): string {
  return core.replace(/\s*—\(([^)]+)\)→\s*/g, " [$1] ⟶ ").replace(/\s+/g, " ").trim();
}

function ReactionLine({ line }: { line: string }) {
  const labelMatch = line.match(STEP_LABEL_RE);
  const label = labelMatch ? labelMatch[1].trim() : null;
  const afterLabel = labelMatch ? line.slice(labelMatch[0].length) : line;
  const { core, note } = splitTrailingNote(afterLabel);

  return (
    <div>
      {label ? (
        <p className="mb-0.5 text-[11px] font-black uppercase tracking-[0.16em]" style={{ color: tint(C.rxnArrow, 0.85) }}>
          {label}
        </p>
      ) : null}
      <Equation raw={toSharedEquation(core)} />
      {note ? (
        <p className="mt-1 text-[13px] leading-relaxed" style={{ color: C.faint }}>
          {note}
        </p>
      ) : null}
    </div>
  );
}

function ReactionRun({ block }: { block: string }) {
  const lines = block.split("\n").map((l) => l.trim()).filter(Boolean);
  return (
    <div className="my-6 space-y-1">
      {lines.map((line, i) => (
        <ReactionLine key={i} line={line} />
      ))}
    </div>
  );
}

/* ---------- segmentation ------------------------------------------- */

type Segment =
  | { type: "md"; text: string }
  | { type: "callout"; kind: CalloutKind; body: string }
  | { type: "reaction"; text: string };

const HEADING_RE = /^#{1,4}\s/;
const STANDALONE_BOLD_RE = /^\*\*[A-Z][^*\n]{2,70}\*\*\s*$/;
const TABLE_RE = /^\s*\|/;
const LIST_RE = /^\s*(?:-|\d+\.)\s/;
const MASTER_KEY_RE = /^\*\*Master key/i;
const QUOTE_RE = /^\s*>/;

function isCalloutStart(block: string) {
  return CALLOUT_LABEL_RE.test(block);
}

function isStopBlock(block: string) {
  return (
    HEADING_RE.test(block) ||
    STANDALONE_BOLD_RE.test(block) ||
    TABLE_RE.test(block) ||
    QUOTE_RE.test(block) ||
    MASTER_KEY_RE.test(block) ||
    isCalloutStart(block) ||
    isReactionBlock(block)
  );
}

function segmentMarkdown(markdown: string): Segment[] {
  const blocks = markdown.split(/\n{2,}/).map((b) => b.trim()).filter(Boolean);
  const segments: Segment[] = [];
  let mdBuffer: string[] = [];

  const flush = () => {
    if (mdBuffer.length) {
      segments.push({ type: "md", text: mdBuffer.join("\n\n") });
      mdBuffer = [];
    }
  };

  for (let i = 0; i < blocks.length; i += 1) {
    const block = blocks[i];

    if (isCalloutStart(block)) {
      flush();
      const label = block.match(CALLOUT_LABEL_RE)![1];
      const kind = calloutKind(label);
      const firstBody = block.replace(CALLOUT_LABEL_RE, "").trim();
      const bodyParts = firstBody ? [firstBody] : [];
      // The first line is a "lead-in" (follow-on paragraphs belong to the
      // callout) only when it is empty, very short, a question, a colon
      // lead-in, or a trailing parenthetical with no full sentence. A
      // complete sentence ending in "." is the whole callout — take only its
      // bullet list, never the surrounding section prose.
      const titleLike =
        bodyParts.length === 0 ||
        firstBody.length < 46 ||
        /[?:]\s*$/.test(firstBody) ||
        (/\)\s*$/.test(firstBody) && !/\. /.test(firstBody));
      let paragraphsTaken = 0;
      let j = i + 1;
      for (; j < blocks.length; j += 1) {
        const next = blocks[j];
        if (isStopBlock(next)) break;
        if (LIST_RE.test(next)) {
          bodyParts.push(next);
          continue;
        }
        if (!titleLike || paragraphsTaken >= 2) break;
        bodyParts.push(next);
        paragraphsTaken += 1;
      }
      i = j - 1;
      segments.push({ type: "callout", kind, body: bodyParts.join("\n\n") });
      continue;
    }

    if (isReactionBlock(block)) {
      flush();
      const runLines = [block];
      let j = i + 1;
      for (; j < blocks.length; j += 1) {
        if (isReactionBlock(blocks[j])) runLines.push(blocks[j]);
        else break;
      }
      i = j - 1;
      segments.push({ type: "reaction", text: runLines.join("\n") });
      continue;
    }

    mdBuffer.push(block);
  }

  flush();
  return segments;
}

/* ---------- public renderer -------------------------------------- */

export function SBlockMarkdown({ markdown }: { markdown: string; accent?: "amber" | "cyan" }) {
  // The page shell already prints each section's heading, so drop a leading
  // section-title line — `## 4. Nitrides…` (number-dot-word) or a plain
  // `## Structures of Metals…` — that repeats it. A numbered subsection like
  // `## 4.1 Nitrides` is deliberately NOT matched. Then lift `### 4.1`
  // subsections to `##` so they render at the cyan sub-heading level the
  // shared multi-colour system uses.
  const body = removeWorkedExamples(markdown)
    .replace(/^\s*##\s+(?:\d+\.\s+\D|[A-Z])[^\n]*\s*(?:\n+|$)/, "")
    .replace(/^###\s+/gm, "## ");

  const segments = segmentMarkdown(body);
  return (
    <div className="space-y-4">
      {segments.map((segment, index) => {
        if (segment.type === "callout") {
          return <MultiColourCallout key={index} kind={segment.kind} body={segment.body} />;
        }
        if (segment.type === "reaction") {
          return <ReactionRun key={index} block={segment.text} />;
        }
        return <ChemistryMarkdown key={index} markdown={segment.text} />;
      })}
    </div>
  );
}
