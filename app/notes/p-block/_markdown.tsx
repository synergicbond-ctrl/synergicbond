/* eslint-disable @next/next/no-img-element */
import type { ReactNode } from "react";
import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";
import { renderViz } from "./_visuals/registry";

/**
 * P-block markdown renderer.
 *
 * Identical to the shared Hydrogen renderer except for one addition: a fenced
 * block tagged `viz` is handed to the visual registry instead of being printed
 * as code. That is the bridge that lets a plain-Markdown lesson embed real SVG
 * components without migrating the chapter to MDX.
 *
 *     ~~~viz
 *     { "type": "MODiagram", "caption": "...", ... }
 *     ~~~
 *
 * Tilde fences are used rather than backtick fences because the lesson source
 * is a String.raw template literal, which a backtick would terminate.
 *
 * Everything else — GFM tables, KaTeX display and inline maths, blockquotes —
 * behaves exactly as in the other chapters, so the two renderers stay visually
 * interchangeable.
 */

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

/** Convert only COMPLETE LaTeX delimiter pairs, so one stray delimiter cannot
 *  swallow the rest of the chapter into a single KaTeX block. */
function normaliseMath(markdown: string) {
  return markdown
    .replace(/\\\[\s*([\s\S]*?)\s*\\\]/g, (_match, expression: string) => `\n$$\n${expression.trim()}\n$$\n`)
    .replace(/\\\(([^\n]*?)\\\)/g, (_match, expression: string) => `$${expression.trim()}$`);
}

const markdownComponents: Components = {
  h1: ({ children }) => {
    const text = flattenText(children);
    return <h2 id={slugify(text)} className="scroll-mt-24 border-t border-white/10 pt-10 text-3xl font-black tracking-tight text-white sm:text-4xl">{children}</h2>;
  },
  h2: ({ children }) => {
    const text = flattenText(children);
    return <h3 id={slugify(text)} className="scroll-mt-24 pt-4 text-2xl font-black tracking-tight text-cyan-100">{children}</h3>;
  },
  h3: ({ children }) => <h4 className="pt-2 text-xl font-black text-violet-100">{children}</h4>,
  h4: ({ children }) => <h5 className="text-base font-black text-amber-100">{children}</h5>,
  p: ({ children }) => <p className="text-[15px] leading-7 text-slate-300 sm:text-base">{children}</p>,
  ul: ({ children }) => <ul className="ml-5 list-disc space-y-2.5 text-slate-300 marker:text-cyan-300">{children}</ul>,
  ol: ({ children }) => <ol className="ml-6 list-decimal space-y-2 text-slate-300 marker:font-bold marker:text-cyan-300">{children}</ol>,
  li: ({ children }) => <li className="pl-1 leading-7 marker:text-cyan-300">{children}</li>,
  strong: ({ children }) => <strong className="font-black text-white">{children}</strong>,
  blockquote: ({ children }) => <blockquote className="rounded-2xl border-l-4 border-cyan-400 bg-cyan-500/[.07] px-5 py-4 text-cyan-50">{children}</blockquote>,
  hr: () => <hr className="my-8 border-white/10" />,
  table: ({ children }) => <div className="my-5 overflow-x-auto rounded-2xl border border-white/10"><table className="min-w-full border-collapse text-left text-sm">{children}</table></div>,
  thead: ({ children }) => <thead className="bg-cyan-500/10 text-cyan-100">{children}</thead>,
  th: ({ children }) => <th className="border-b border-white/10 px-4 py-3 font-black">{children}</th>,
  td: ({ children }) => <td className="border-b border-white/[.06] px-4 py-3 align-top leading-6 text-slate-300">{children}</td>,
  img: ({ src, alt }) => (
    <span className="my-7 block overflow-hidden rounded-3xl border border-white/10 bg-white p-2 shadow-2xl shadow-black/30">
      <img src={typeof src === "string" ? src : ""} alt={alt ?? "P-block chemistry diagram"} loading="lazy" className="mx-auto h-auto w-full max-w-4xl rounded-2xl" />
    </span>
  ),
  a: ({ href, children }) => <a href={href} className="font-bold text-cyan-300 underline decoration-cyan-500/30 underline-offset-4 hover:text-cyan-100">{children}</a>,

  // The visual bridge. A ~~~viz fence renders a diagram; every other fence and
  // all inline code keep the normal code styling.
  code: ({ className, children }) => {
    const lang = /language-(\w+)/.exec(className ?? "")?.[1];
    if (lang === "viz") return <>{renderViz(flattenText(children))}</>;
    return <code className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-[0.9em] text-cyan-100">{children}</code>;
  },
  // A fenced block arrives wrapped in <pre>; unwrap it when it is a visual so
  // the figure is not nested inside a monospace block.
  pre: ({ children }) => {
    const inner = children as { props?: { className?: string } } | undefined;
    if (/language-viz/.test(inner?.props?.className ?? "")) return <>{children}</>;
    return <pre className="my-4 overflow-x-auto rounded-xl bg-black/40 p-4 text-[13px] text-slate-200">{children}</pre>;
  },
};

export function PBlockMarkdown({ markdown }: { markdown: string }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm, remarkMath]}
      rehypePlugins={[[rehypeKatex, { throwOnError: false, strict: false }]]}
      components={markdownComponents}
    >
      {normaliseMath(markdown)}
    </ReactMarkdown>
  );
}
