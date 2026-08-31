import type { ReactNode } from "react";
import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";

type Accent = "amber" | "cyan";

function flattenText(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(flattenText).join("");
  if (node && typeof node === "object" && "props" in node) {
    return flattenText((node as { props?: { children?: ReactNode } }).props?.children ?? "");
  }
  return "";
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[₀₁₂₃₄₅₆₇₈₉]/g, (digit) => ({ "₀": "0", "₁": "1", "₂": "2", "₃": "3", "₄": "4", "₅": "5", "₆": "6", "₇": "7", "₈": "8", "₉": "9" }[digit] ?? digit))
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function normaliseMath(markdown: string) {
  return markdown
    .replace(/\\\[\s*([\s\S]*?)\s*\\\]/g, (_match, expression: string) => `\n$$\n${expression.trim()}\n$$\n`)
    .replace(/\\\(([^\n]*?)\\\)/g, (_match, expression: string) => `$${expression.trim()}$`);
}

// Worked examples belong in the future question bank, not in the concise
// textbook. Remove the complete example paragraph (and any immediately
// following display-equation paragraph) before Markdown rendering so no
// worked-example prompt, answer, or orphaned calculation is shown.
function removeWorkedExamples(markdown: string) {
  return markdown.replace(
    /\n?\*\*Worked example[^*]*\*\*[\s\S]*?(?=\n\n|$)(?:\n\n\$\$[\s\S]*?\$\$\s*)?/gi,
    "",
  );
}

function makeComponents(accent: Accent): Components {
  const sectionBorder = accent === "cyan" ? "border-t-cyan-400/30" : "border-t-[var(--border)]";
  const h1Text = accent === "cyan" ? "text-cyan-50" : "text-[var(--foreground)]";
  const h2Text = accent === "cyan" ? "text-cyan-100/95" : "text-[var(--foreground)]";
  const markerColor = accent === "cyan" ? "marker:text-cyan-300" : "marker:text-[var(--accent)]";
  return {
    h1: ({ children }) => {
      const text = flattenText(children);
      return (
        <section className="mt-12 first:mt-0">
          <h2 id={slugify(text)} className={`scroll-mt-24 border-t ${sectionBorder} pt-10 text-center font-display text-3xl font-black leading-tight tracking-tight ${h1Text} sm:text-4xl`}>
            {children}
          </h2>
        </section>
      );
    },
    h2: ({ children }) => {
      const text = flattenText(children);
      return <h3 id={slugify(text)} className={`scroll-mt-24 pt-7 font-display text-2xl font-black leading-tight ${h2Text} sm:text-[28px]`}>{children}</h3>;
    },
    h3: ({ children }) => <h4 className="pt-4 font-display text-xl font-black leading-tight text-[var(--foreground)] sm:text-[22px]">{children}</h4>,
    h4: ({ children }) => <h5 className="pt-2 font-display text-base font-black text-[var(--text-muted)] sm:text-lg">{children}</h5>,
    p: ({ children }) => <p className="max-w-[94ch] text-[15.5px] leading-[1.86] text-slate-300 sm:text-[16.5px]">{children}</p>,
    ul: ({ children }) => <ul className={`ml-5 max-w-[94ch] list-disc space-y-2.5 text-slate-300 ${markerColor}`}>{children}</ul>,
    ol: ({ children }) => <ol className="ml-6 max-w-[94ch] list-decimal space-y-2.5 text-slate-300 marker:font-black marker:text-amber-300">{children}</ol>,
    li: ({ children }) => <li className="pl-1 text-[15.5px] leading-7 sm:text-base">{children}</li>,
    strong: ({ children }) => <strong className="font-black text-slate-50">{children}</strong>,
    em: ({ children }) => <em className="text-[var(--text-faint)]">{children}</em>,
    blockquote: ({ children }) => (
      <blockquote className="my-5 rounded-lg border border-[var(--border)] border-l-4 border-l-[var(--accent)] bg-[var(--surface-2)] px-5 py-4 text-[var(--foreground)] shadow-lg shadow-black/10">
        {children}
      </blockquote>
    ),
    hr: () => <hr className="my-10 border-[var(--border)]" />,
    table: ({ children }) => (
      <div className="my-6 overflow-x-auto rounded-lg border border-[var(--border)] bg-[var(--surface)] shadow-xl shadow-black/20 sm:mx-auto sm:w-fit sm:max-w-full">
        <table className="min-w-full border-collapse text-left text-sm sm:text-[15px]">{children}</table>
      </div>
    ),
    thead: ({ children }) => <thead className={`bg-[var(--surface-2)] ${accent === "cyan" ? "text-cyan-100" : "text-[var(--foreground)]"}`}>{children}</thead>,
    th: ({ children }) => <th className="border-b border-[var(--border)] px-4 py-3.5 font-black">{children}</th>,
    td: ({ children }) => <td className="border-b border-white/[.07] px-4 py-3.5 align-top leading-6 text-slate-300">{children}</td>,
    a: ({ href, children }) => <a href={href} className="font-bold text-[var(--accent)] underline decoration-[var(--accent)]/30 underline-offset-4 hover:text-[var(--foreground)]">{children}</a>,
    code: ({ children }) => <code className="rounded-md border border-[var(--border)] bg-[var(--surface-2)] px-1.5 py-0.5 font-mono text-[0.9em] text-[var(--foreground)]">{children}</code>,
  };
}

const AMBER_COMPONENTS = makeComponents("amber");
const CYAN_COMPONENTS = makeComponents("cyan");

function Markdown({ markdown, accent }: { markdown: string; accent: Accent }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm, remarkMath]}
      rehypePlugins={[[rehypeKatex, { throwOnError: false, strict: false }]]}
      components={accent === "cyan" ? CYAN_COMPONENTS : AMBER_COMPONENTS}
    >
      {normaliseMath(markdown)}
    </ReactMarkdown>
  );
}

/* ------------------------------------------------------------------ */
/*  Styled callouts — Core Focus / Exam Note / Bonding Insight /       */
/*  Exam Pattern. Authored in the content files as a leading           */
/*  `**Label:** …` paragraph; grouped and lifted out here so the       */
/*  source taxonomy renders as real callout components, not bold text. */
/* ------------------------------------------------------------------ */

type CalloutKind = "core-focus" | "exam-note" | "bonding-insight" | "exam-pattern";

const CALLOUT_META: Record<CalloutKind, { label: string; frame: string; badge: string; rule: string }> = {
  "core-focus": {
    label: "Core Focus",
    frame: "border-cyan-400/30 bg-cyan-500/[0.06]",
    badge: "bg-cyan-400/15 text-cyan-200",
    rule: "bg-cyan-400/60",
  },
  "exam-note": {
    label: "Exam Note",
    frame: "border-violet-400/30 bg-violet-500/[0.06]",
    badge: "bg-violet-400/15 text-violet-200",
    rule: "bg-violet-400/60",
  },
  "bonding-insight": {
    label: "Bonding Insight",
    frame: "border-teal-400/30 bg-teal-500/[0.06]",
    badge: "bg-teal-400/15 text-teal-200",
    rule: "bg-teal-400/60",
  },
  "exam-pattern": {
    label: "Exam Pattern",
    frame: "border-amber-400/30 bg-amber-500/[0.06]",
    badge: "bg-amber-400/15 text-amber-200",
    rule: "bg-amber-400/60",
  },
};

const CALLOUT_LABEL_RE = /^\*\*(Core Focus|Exam Note|Bonding Insight|Exam Pattern)\b:?\*\*:?\s*/i;

function calloutKind(label: string): CalloutKind {
  return label.toLowerCase().replace(/\s+/g, "-") as CalloutKind;
}

function Callout({ kind, body, accent }: { kind: CalloutKind; body: string; accent: Accent }) {
  const meta = CALLOUT_META[kind];
  return (
    <aside className={`my-6 overflow-hidden rounded-xl border ${meta.frame} shadow-lg shadow-black/20`}>
      <div className="flex items-stretch">
        <div className={`w-1 shrink-0 ${meta.rule}`} aria-hidden />
        <div className="min-w-0 flex-1 px-5 py-4 sm:px-6">
          <p className={`mb-2 inline-flex items-center rounded-md px-2 py-0.5 text-[10px] font-black uppercase tracking-[0.18em] ${meta.badge}`}>
            {meta.label}
          </p>
          <div className="callout-body space-y-3 text-[15px] leading-[1.8] text-slate-200">
            <Markdown markdown={body} accent={accent} />
          </div>
        </div>
      </div>
    </aside>
  );
}

/* ------------------------------------------------------------------ */
/*  Reaction blocks — a run of equation lines authored as plain text   */
/*  (`A + B —(condition)→ C + D`). Rendered centred, with the          */
/*  condition sitting over a drawn arrow. No `[heat]` / pill badges.   */
/* ------------------------------------------------------------------ */

const STEP_LABEL_RE = /^(Route\s*\d+|Step\s*\d+|Calcination|Reduction|Overall|Net(?:\s+reaction)?|Anode|Cathode|Industrial|Preparation|Hydrolysis|Roasting)\s*:?\s*/i;
const ARROW_SPLIT_SOURCE = "\\s*(?:—\\(([^)]+)\\)→|⟶|→|⇌|⇋)\\s*";

function hasArrow(line: string) {
  return /(?:→|⇌|⇋|⟶)/.test(line);
}

// A block counts as a reaction run only when every non-empty line is an
// equation and none of them reads as prose (a mid-sentence ". " with a
// following lowercase word, or an overly long line).
function isReactionBlock(block: string) {
  const lines = block.split("\n").map((l) => l.trim()).filter(Boolean);
  if (lines.length === 0) return false;
  return lines.every((line) => {
    const bare = line.replace(STEP_LABEL_RE, "");
    if (!hasArrow(bare)) return false;
    if (bare.length > 200) return false;
    if (/[a-z]{2}\.\s+[a-z]/.test(bare)) return false;
    return true;
  });
}

function ReactionLine({ line }: { line: string }) {
  const labelMatch = line.match(STEP_LABEL_RE);
  const label = labelMatch ? labelMatch[0].replace(/[:\s]+$/, "") : null;
  const rest = labelMatch ? line.slice(labelMatch[0].length) : line;

  // Trailing bare-parenthetical note, e.g. "(sodium beryllate)".
  let note: string | null = null;
  const noteMatch = rest.match(/\s+\(([^()]+)\)\s*$/);
  let core = rest;
  if (noteMatch && !/[→⇌⇋⟶]/.test(noteMatch[1])) {
    note = noteMatch[1];
    core = rest.slice(0, rest.length - noteMatch[0].length);
  }

  const species: string[] = [];
  const arrows: { condition: string | null; equilibrium: boolean }[] = [];
  const arrowRe = new RegExp(ARROW_SPLIT_SOURCE, "g");
  let lastIndex = 0;
  for (let m = arrowRe.exec(core); m !== null; m = arrowRe.exec(core)) {
    species.push(core.slice(lastIndex, m.index).trim());
    arrows.push({ condition: m[1] ? m[1].trim() : null, equilibrium: /⇌|⇋/.test(m[0]) });
    lastIndex = arrowRe.lastIndex;
  }
  species.push(core.slice(lastIndex).trim());

  return (
    <div className="flex flex-wrap items-end justify-center gap-x-2 gap-y-1 text-center font-mono text-[14.5px] text-slate-100 sm:text-[15.5px]">
      {label ? (
        <span className="mb-1 mr-1 rounded bg-white/[0.06] px-1.5 py-0.5 font-sans text-[10px] font-bold uppercase tracking-wider text-slate-400">
          {label}
        </span>
      ) : null}
      {species.map((sp, i) => (
        <span key={`s-${i}`} className="contents">
          <span className="whitespace-nowrap py-1">{sp}</span>
          {i < arrows.length ? (
            <span className="inline-flex flex-col items-center px-1">
              <span className="max-w-[16ch] text-[10px] leading-tight text-cyan-300/90 font-sans">
                {arrows[i].condition ?? " "}
              </span>
              <span className="text-lg leading-none text-slate-400">{arrows[i].equilibrium ? "⇌" : "⟶"}</span>
            </span>
          ) : null}
        </span>
      ))}
      {note ? <span className="w-full font-sans text-xs text-slate-400">({note})</span> : null}
    </div>
  );
}

function ReactionRun({ block }: { block: string }) {
  const lines = block.split("\n").map((l) => l.trim()).filter(Boolean);
  return (
    <div className="my-6 rounded-xl border border-cyan-300/15 bg-[#07111d] px-4 py-5 shadow-lg shadow-black/20 sm:px-8">
      <div className="space-y-4">
        {lines.map((line, i) => (
          <ReactionLine key={i} line={line} />
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Segmentation — split one authored markdown string into an ordered  */
/*  list of markdown / callout / reaction segments.                    */
/* ------------------------------------------------------------------ */

type Segment =
  | { type: "md"; text: string }
  | { type: "callout"; kind: CalloutKind; body: string }
  | { type: "reaction"; text: string };

const HEADING_RE = /^#{1,4}\s/;
const STANDALONE_BOLD_RE = /^\*\*[A-Z][^*\n]{2,70}\*\*\s*$/;
const TABLE_RE = /^\s*\|/;
const LIST_RE = /^\s*(?:-|\d+\.)\s/;
const MASTER_KEY_RE = /^\*\*Master key/i;

function isCalloutStart(block: string) {
  return CALLOUT_LABEL_RE.test(block);
}

function isStopBlock(block: string) {
  return (
    HEADING_RE.test(block) ||
    STANDALONE_BOLD_RE.test(block) ||
    TABLE_RE.test(block) ||
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
      const titleLike = firstBody.length < 90 || /[?)]\s*$/.test(firstBody) || bodyParts.length === 0;
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
      // Merge consecutive reaction blocks into one panel.
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

export function SBlockMarkdown({ markdown, accent = "amber" }: { markdown: string; accent?: Accent }) {
  const prepared = removeWorkedExamples(markdown);
  const segments = segmentMarkdown(prepared);

  return (
    <div className="space-y-5">
      {segments.map((segment, index) => {
        if (segment.type === "callout") {
          return <Callout key={index} kind={segment.kind} body={segment.body} accent={accent} />;
        }
        if (segment.type === "reaction") {
          return <ReactionRun key={index} block={segment.text} />;
        }
        return <Markdown key={index} markdown={segment.text} accent={accent} />;
      })}
    </div>
  );
}
