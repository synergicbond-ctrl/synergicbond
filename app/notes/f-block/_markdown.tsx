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

const components: Components = {
  h1: ({ children }) => {
    const text = flattenText(children);
    return (
      <h2 id={slugify(text)} className="scroll-mt-24 border-t border-fuchsia-300/15 pt-10 font-serif text-3xl font-black leading-tight text-white first:border-t-0 first:pt-0 sm:text-4xl">
        <span className="bg-gradient-to-r from-fuchsia-200 via-violet-200 to-cyan-200 bg-clip-text text-transparent">{children}</span>
      </h2>
    );
  },
  h2: ({ children }) => {
    const text = flattenText(children);
    return <h3 id={slugify(text)} className="scroll-mt-24 pt-7 text-2xl font-black leading-tight text-fuchsia-200 sm:text-[28px]">{children}</h3>;
  },
  h3: ({ children }) => <h4 className="pt-4 text-xl font-black leading-tight text-cyan-200 sm:text-[22px]">{children}</h4>,
  p: ({ children }) => <p className="max-w-[96ch] text-[15.5px] leading-[1.86] text-slate-300 sm:text-[16.5px]">{children}</p>,
  ul: ({ children }) => <ul className="ml-5 max-w-[96ch] list-disc space-y-2.5 text-slate-300 marker:text-fuchsia-300">{children}</ul>,
  ol: ({ children }) => <ol className="ml-6 max-w-[96ch] list-decimal space-y-2.5 text-slate-300 marker:font-black marker:text-cyan-300">{children}</ol>,
  li: ({ children }) => <li className="pl-1 text-[15.5px] leading-7 sm:text-base">{children}</li>,
  strong: ({ children }) => <strong className="font-black text-slate-50">{children}</strong>,
  blockquote: ({ children }) => (
    <blockquote className="my-5 rounded-lg border border-fuchsia-300/20 border-l-4 border-l-fuchsia-300 bg-[linear-gradient(90deg,rgba(134,39,160,.16),rgba(14,116,144,.08))] px-5 py-4 text-fuchsia-50">
      {children}
    </blockquote>
  ),
  table: ({ children }) => (
    <div className="my-6 overflow-x-auto rounded-lg border border-fuchsia-200/15 bg-[#050914] shadow-xl shadow-black/20">
      <table className="min-w-full border-collapse text-left text-sm sm:text-[15px]">{children}</table>
    </div>
  ),
  thead: ({ children }) => <thead className="bg-[linear-gradient(90deg,rgba(126,34,206,.28),rgba(8,145,178,.22))] text-fuchsia-100">{children}</thead>,
  th: ({ children }) => <th className="border-b border-fuchsia-100/15 px-4 py-3.5 font-black">{children}</th>,
  td: ({ children }) => <td className="border-b border-white/[.07] px-4 py-3.5 align-top leading-6 text-slate-300">{children}</td>,
  hr: () => <hr className="my-10 border-fuchsia-200/15" />,
};

export function FBlockMarkdown({ markdown }: { markdown: string }) {
  return (
    <div className="space-y-5">
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[[rehypeKatex, { throwOnError: false, strict: false }]]}
        components={components}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
}
