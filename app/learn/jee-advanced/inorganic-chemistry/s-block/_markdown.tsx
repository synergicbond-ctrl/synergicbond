import type { ReactNode } from "react";
import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";

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

type CalloutKind = "core" | "exam" | "insight" | "trap" | "key" | "uses" | "reaction" | "trend" | "bonding";

function getCallout(text: string): { kind: CalloutKind; label: string; body: string } | null {
  const patterns: Array<[RegExp, CalloutKind, string]> = [
    [/^\s*\*\*Core Focus:\*\*\s*([\s\S]+)$/i, "core", "Core Focus"],
    [/^\s*\*\*Exam Note:\*\*\s*([\s\S]+)$/i, "exam", "Exam Note"],
    [/^\s*\*\*Bonding Insight:\*\*\s*([\s\S]+)$/i, "insight", "Bonding Insight"],
    [/^\s*\*\*JEE Trap:\*\*\s*([\s\S]+)$/i, "trap", "JEE Trap"],
    [/^\s*\*\*Key Point:\*\*\s*([\s\S]+)$/i, "key", "Key Point"],
    [/^\s*\*\*Uses:\*\*\s*([\s\S]+)$/i, "uses", "Uses"],
    [/^\s*\*\*Reaction:\*\*\s*([\s\S]+)$/i, "reaction", "Reaction"],
    [/^\s*\*\*Trend:\*\*\s*([\s\S]+)$/i, "trend", "Trend"],
  ];
  for (const [re, kind, label] of patterns) {
    const match = text.match(re);
    if (match) return { kind, label, body: match[1].trim() };
  }
  return null;
}

const calloutStyles: Record<CalloutKind, { border: string; bg: string; label: string; text: string }> = {
  core: { border: "#fbbf24", bg: "rgba(251,191,36,.08)", label: "#fbbf24", text: "#fde68a" },
  exam: { border: "#67e8f9", bg: "rgba(34,211,238,.08)", label: "#67e8f9", text: "#cffafe" },
  insight: { border: "#c084fc", bg: "rgba(192,132,252,.08)", label: "#c084fc", text: "#e9d5ff" },
  trap: { border: "#fb7185", bg: "rgba(251,113,133,.08)", label: "#fb7185", text: "#fecdd3" },
  key: { border: "#34d399", bg: "rgba(52,211,153,.08)", label: "#34d399", text: "#d1fae5" },
  uses: { border: "#f59e0b", bg: "rgba(245,158,11,.08)", label: "#f59e0b", text: "#fef3c7" },
  reaction: { border: "#22c55e", bg: "rgba(34,197,94,.08)", label: "#22c55e", text: "#dcfce7" },
  trend: { border: "#a78bfa", bg: "rgba(167,139,250,.08)", label: "#a78bfa", text: "#ede9fe" },
  bonding: { border: "#38bdf8", bg: "rgba(56,189,248,.08)", label: "#38bdf8", text: "#e0f2fe" },
};

const markdownComponents: Components = {
  h1: ({ children }) => {
    const text = flattenText(children);
    return (
      <section className="mt-12 first:mt-0">
        <h2
          id={slugify(text)}
          className="scroll-mt-24 border-t-2 pt-10 font-display text-3xl font-black leading-tight tracking-tight sm:text-4xl"
          style={{
            color: "#fbbf24",
            borderColor: "#fbbf24",
            textShadow: "0 0 20px rgba(251,191,36,.35)",
          }}
        >
          {children}
        </h2>
      </section>
    );
  },
  h2: ({ children }) => {
    const text = flattenText(children);
    return (
      <h3
        id={slugify(text)}
        className="scroll-mt-24 pt-7 font-display text-2xl font-black leading-tight sm:text-[28px]"
        style={{
          color: "#67e8f9",
          textShadow: "0 0 16px rgba(103,232,249,.34)",
        }}
      >
        {children}
      </h3>
    );
  },
  h3: ({ children }) => (
    <h4
      className="pt-4 font-display text-xl font-black leading-tight sm:text-[22px]"
      style={{
        color: "#f472b6",
        textShadow: "0 0 14px rgba(244,114,182,.33)",
      }}
    >
      {children}
    </h4>
  ),
  h4: ({ children }) => (
    <h5
      className="pt-2 font-display text-base font-black sm:text-lg"
      style={{
        color: "#c084fc",
        textShadow: "0 0 12px rgba(192,132,252,.25)",
      }}
    >
      {children}
    </h5>
  ),
  p: ({ children }) => {
    const text = flattenText(children).trim();
    const callout = getCallout(text);
    if (callout) {
      const style = calloutStyles[callout.kind];
      return (
        <div className="my-5 rounded-2xl border px-5 py-4 shadow-xl shadow-black/20" style={{ borderColor: style.border, background: style.bg }}>
          <div className="mb-2 text-[11px] font-black uppercase tracking-[0.22em]" style={{ color: style.label }}>
            {callout.label}
          </div>
          <p className="max-w-none text-[15.5px] leading-[1.86] text-slate-200 sm:text-[16.5px]" style={{ color: style.text }}>
            {callout.body}
          </p>
        </div>
      );
    }
    return <p className="max-w-[108ch] text-[15.5px] leading-[1.86] text-slate-300 sm:text-[16.5px]">{children}</p>;
  },
  ul: ({ children }) => <ul className="ml-5 max-w-[108ch] list-disc space-y-2.5 text-slate-300 marker:text-fuchsia-300">{children}</ul>,
  ol: ({ children }) => <ol className="ml-6 max-w-[108ch] list-decimal space-y-2.5 text-slate-300 marker:font-black marker:text-amber-300">{children}</ol>,
  li: ({ children }) => <li className="pl-1 text-[15.5px] leading-7 sm:text-base">{children}</li>,
  strong: ({ children }) => (
    <strong
      className="font-black"
      style={{ color: "#fde68a", textShadow: "0 0 8px rgba(253,230,138,.25)" }}
    >
      {children}
    </strong>
  ),
  em: ({ children }) => <em className="text-[var(--text-faint)]">{children}</em>,
  blockquote: ({ children }) => (
    <blockquote className="my-5 rounded-lg border border-[var(--border)] border-l-4 border-l-[var(--accent)] bg-[var(--surface-2)] px-5 py-4 text-[var(--foreground)] shadow-lg shadow-black/10">
      {children}
    </blockquote>
  ),
  hr: () => <hr className="my-10 border-[var(--border)]" />,
  table: ({ children }) => (
    <div className="my-6 overflow-x-auto rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-xl shadow-black/20">
      <table className="min-w-full border-collapse text-left text-sm sm:text-[15px]">{children}</table>
    </div>
  ),
  thead: ({ children }) => <thead className="bg-[var(--surface-2)] text-[var(--foreground)]">{children}</thead>,
  th: ({ children }) => <th className="border-b border-[var(--border)] px-4 py-3.5 font-black">{children}</th>,
  td: ({ children }) => <td className="border-b border-white/[.07] px-4 py-3.5 align-top leading-6 text-slate-300">{children}</td>,
  a: ({ href, children }) => (
    <a href={href} className="font-bold underline underline-offset-4" style={{ color: "#f472b6", textDecorationColor: "rgba(244,114,182,.35)" }}>
      {children}
    </a>
  ),
  code: ({ children }) => <code className="rounded-md border border-[var(--border)] bg-[var(--surface-2)] px-1.5 py-0.5 font-mono text-[0.9em] text-[var(--foreground)]">{children}</code>,
};

export function SBlockMarkdown({ markdown }: { markdown: string }) {
  return (
    <div className="space-y-5">
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[[rehypeKatex, { throwOnError: false, strict: false }]]}
        components={markdownComponents}
      >
        {normaliseMath(removeWorkedExamples(markdown))}
      </ReactMarkdown>
    </div>
  );
}
