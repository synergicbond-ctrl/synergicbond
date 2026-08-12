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

const markdownComponents: Components = {
  h1: ({ children }) => {
    const text = flattenText(children);
    return (
      <section className="mt-12 first:mt-0">
        <h2 id={slugify(text)} className="scroll-mt-24 border-t border-cyan-300/20 pt-10 font-sans text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl">
          <span className="bg-gradient-to-r from-cyan-200 via-violet-200 to-amber-200 bg-clip-text text-transparent">{children}</span>
        </h2>
      </section>
    );
  },
  h2: ({ children }) => {
    const text = flattenText(children);
    return <h3 id={slugify(text)} className="scroll-mt-24 pt-7 font-sans text-2xl font-black leading-tight text-cyan-200 sm:text-[28px]">{children}</h3>;
  },
  h3: ({ children }) => <h4 className="pt-4 font-sans text-xl font-black leading-tight text-violet-200 sm:text-[22px]">{children}</h4>,
  h4: ({ children }) => <h5 className="pt-2 font-sans text-base font-black text-amber-200 sm:text-lg">{children}</h5>,
  p: ({ children }) => <p className="max-w-[94ch] text-[15.5px] leading-[1.86] text-[var(--text-body)] sm:text-[16.5px]">{children}</p>,
  ul: ({ children }) => <ul className="ml-5 max-w-[94ch] list-disc space-y-2.5 text-[var(--text-body)] marker:text-cyan-300">{children}</ul>,
  ol: ({ children }) => <ol className="ml-6 max-w-[94ch] list-decimal space-y-2.5 text-[var(--text-body)] marker:font-black marker:text-amber-300">{children}</ol>,
  li: ({ children }) => <li className="pl-1 text-[15.5px] leading-7 sm:text-base">{children}</li>,
  strong: ({ children }) => <strong className="font-black text-slate-50">{children}</strong>,
  em: ({ children }) => <em className="text-violet-100">{children}</em>,
  blockquote: ({ children }) => (
    <blockquote className="my-5 rounded-2xl border border-cyan-300/20 border-l-4 border-l-cyan-300 bg-[linear-gradient(90deg,rgba(25,116,145,.16),rgba(90,54,138,.1))] px-5 py-4 text-cyan-50 shadow-lg shadow-black/10">
      {children}
    </blockquote>
  ),
  hr: () => <hr className="my-10 border-cyan-200/15" />,
  table: ({ children }) => (
    <div className="my-6 overflow-x-auto rounded-2xl border border-cyan-200/15 bg-[#050b14] shadow-xl shadow-black/20">
      <table className="min-w-full border-collapse text-left text-sm sm:text-[15px]">{children}</table>
    </div>
  ),
  thead: ({ children }) => <thead className="bg-[linear-gradient(90deg,rgba(18,105,137,.28),rgba(83,51,139,.26))] text-cyan-100">{children}</thead>,
  th: ({ children }) => <th className="border-b border-cyan-100/15 px-4 py-3.5 font-black">{children}</th>,
  td: ({ children }) => <td className="border-b border-white/[.07] px-4 py-3.5 align-top leading-6 text-[var(--text-body)]">{children}</td>,
  a: ({ href, children }) => <a href={href} className="font-bold text-cyan-300 underline decoration-cyan-500/30 underline-offset-4 hover:text-cyan-100">{children}</a>,
  code: ({ children }) => <code className="rounded-md border border-cyan-200/10 bg-cyan-300/[.08] px-1.5 py-0.5 font-mono text-[0.9em] text-cyan-100">{children}</code>,
};

export function SBlockMarkdown({ markdown }: { markdown: string }) {
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
