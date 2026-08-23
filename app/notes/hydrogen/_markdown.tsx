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

export function slugify(value: string) {
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

const markdownComponents: Components = {
  h1: ({ children }) => {
    const text = flattenText(children);
    return (
      <section className="mt-12 first:mt-0">
        <h2 id={slugify(text)} className="scroll-mt-24 border-t border-[var(--border)] pt-10 font-sans text-3xl font-black leading-tight tracking-tight text-[var(--foreground)] sm:text-4xl">
          {children}
        </h2>
      </section>
    );
  },
  h2: ({ children }) => {
    const text = flattenText(children);
    return <h3 id={slugify(text)} className="scroll-mt-24 pt-7 font-sans text-2xl font-black leading-tight text-[var(--chem-bond)] sm:text-[28px]">{children}</h3>;
  },
  h3: ({ children }) => <h4 className="pt-4 font-sans text-xl font-black leading-tight text-[var(--chem-orbital)] sm:text-[22px]">{children}</h4>,
  h4: ({ children }) => <h5 className="pt-2 font-sans text-base font-black text-[var(--chem-energy)] sm:text-lg">{children}</h5>,
  p: ({ children }) => <p className="max-w-[92ch] text-[15.5px] leading-[1.85] text-[var(--text-muted)] sm:text-[16.5px]">{children}</p>,
  ul: ({ children }) => <ul className="ml-5 max-w-[92ch] list-disc space-y-2.5 text-[var(--text-muted)] marker:text-cyan-300">{children}</ul>,
  ol: ({ children }) => <ol className="ml-6 max-w-[92ch] list-decimal space-y-2.5 text-[var(--text-muted)] marker:font-black marker:text-amber-300">{children}</ol>,
  li: ({ children }) => <li className="pl-1 text-[15.5px] leading-7 sm:text-base">{children}</li>,
  strong: ({ children }) => <strong className="font-black text-slate-50">{children}</strong>,
  em: ({ children }) => <em className="text-violet-100">{children}</em>,
  blockquote: ({ children }) => (
    <blockquote className="my-5 rounded-lg border border-[var(--chem-bond)] border-l-4 border-l-[var(--chem-bond)] bg-[var(--surface)] px-5 py-4 text-[var(--foreground)]">
      {children}
    </blockquote>
  ),
  hr: () => <hr className="my-10 border-[var(--border)]" />,
  table: ({ children }) => (
    <div className="my-6 overflow-x-auto rounded-lg border border-[var(--border)] bg-[var(--surface)]">
      <table className="min-w-full border-collapse text-left text-sm sm:text-[15px]">{children}</table>
    </div>
  ),
  thead: ({ children }) => <thead className="bg-[var(--surface)] text-[var(--foreground)]">{children}</thead>,
  th: ({ children }) => <th className="border-b border-[var(--border)] px-4 py-3.5 font-black">{children}</th>,
  td: ({ children }) => <td className="border-b border-[var(--border)] px-4 py-3.5 align-top leading-6 text-[var(--text-muted)]">{children}</td>,
  a: ({ href, children }) => <a href={href} className="font-bold text-[var(--chem-bond)] underline decoration-[var(--chem-bond)]/30 underline-offset-4 hover:text-[var(--chem-bond)]">{children}</a>,
  code: ({ children }) => <code className="rounded-md border border-[var(--border)] bg-[var(--surface)] px-1.5 py-0.5 font-mono text-[0.9em] text-[var(--foreground)]">{children}</code>,
};

export function HydrogenMarkdown({ markdown }: { markdown: string }) {
  return (
    <div className="space-y-5">
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[[rehypeKatex, { throwOnError: false, strict: false }]]}
        components={markdownComponents}
      >
        {normaliseMath(markdown)}
      </ReactMarkdown>
    </div>
  );
}
