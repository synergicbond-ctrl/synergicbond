/* eslint-disable @next/next/no-img-element */
import type { ReactNode } from "react";
import Link from "next/link";
import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";

import { HYDROGEN_MASTER_MARKDOWN } from "./content";

export const metadata = {
  title: "Hydrogen Master Notes — NCERT + JEE Advanced | SYNERGIC BOND",
  description:
    "Complete Hydrogen master notes: NCERT coverage plus JEE Advanced depth on isotopes, ortho-para hydrogen, hydrides, water, heavy water, H2O2, hydrogen bonding and hydrogen economy.",
};

export const dynamic = "force-dynamic";

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
    .replace(/\\\[/g, () => "$$\n")
    .replace(/\\\]/g, () => "\n$$")
    .replace(/\\\(/g, () => "$")
    .replace(/\\\)/g, () => "$");
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
  ul: ({ children }) => <ul className="ml-1 space-y-2.5 text-slate-300">{children}</ul>,
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
      <img src={typeof src === "string" ? src : ""} alt={alt ?? "Hydrogen chemistry diagram"} loading="lazy" className="mx-auto h-auto w-full max-w-4xl rounded-2xl" />
    </span>
  ),
  a: ({ href, children }) => <a href={href} className="font-bold text-cyan-300 underline decoration-cyan-500/30 underline-offset-4 hover:text-cyan-100">{children}</a>,
  code: ({ children }) => <code className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-[0.9em] text-cyan-100">{children}</code>,
};

export default function HydrogenMasterNotesPage() {
  const markdown = normaliseMath(HYDROGEN_MASTER_MARKDOWN);
  const toc = HYDROGEN_MASTER_MARKDOWN
    .split("\n")
    .filter((line) => /^# \d+\./.test(line))
    .map((line) => line.replace(/^# /, ""));

  return (
    <main className="min-h-screen bg-[#0B0F19] text-white selection:bg-cyan-400 selection:text-black">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <nav className="mb-7 flex items-center gap-2 text-xs font-semibold text-slate-400 sm:text-sm">
          <Link href="/" className="hover:text-white">Home</Link><span>/</span>
          <Link href="/notes" className="hover:text-white">Chapter Notes</Link><span>/</span>
          <span className="text-cyan-300">Hydrogen</span>
        </nav>

        <header className="relative overflow-hidden rounded-[2rem] border border-cyan-400/25 bg-gradient-to-br from-slate-900 via-[#111827] to-cyan-950/50 p-7 shadow-2xl sm:p-11">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="relative z-10">
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full border border-red-400/25 bg-red-500/10 px-3 py-1 text-xs font-black text-red-200">NCERT PRIMARY</span>
              <span className="rounded-full border border-violet-400/25 bg-violet-500/10 px-3 py-1 text-xs font-black text-violet-200">JEE ADVANCED</span>
              <span className="rounded-full border border-emerald-400/25 bg-emerald-500/10 px-3 py-1 text-xs font-black text-emerald-200">26 ORIGINAL DIAGRAMS</span>
            </div>
            <h1 className="mt-5 text-4xl font-black tracking-tight sm:text-6xl">Hydrogen</h1>
            <p className="mt-4 max-w-3xl text-base font-medium leading-7 text-slate-300 sm:text-lg">Master notes combining complete NCERT coverage with advanced treatment of isotopes, dihydrogen, ortho–para hydrogen, hydrides, hydrogen bonding, water, heavy water, hydrogen peroxide and hydrogen economy.</p>
            <div className="mt-6 flex flex-wrap gap-3 text-xs font-bold text-slate-300">
              <span className="rounded-xl bg-white/[.06] px-3 py-2">61 structured sections</span>
              <span className="rounded-xl bg-white/[.06] px-3 py-2">Verified NCERT data anchors</span>
              <span className="rounded-xl bg-white/[.06] px-3 py-2">Reaction bank + JEE traps</span>
            </div>
          </div>
        </header>

        <div className="mt-10 grid gap-8 lg:grid-cols-[250px_minmax(0,1fr)]">
          <aside className="hidden lg:block">
            <div className="sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto rounded-2xl border border-white/10 bg-white/[.035] p-4">
              <p className="mb-3 text-xs font-black uppercase tracking-[.18em] text-slate-400">Chapter Map</p>
              <nav className="space-y-1.5">
                {toc.map((title) => <a key={title} href={`#${slugify(title)}`} className="block rounded-lg px-2 py-1.5 text-xs leading-5 text-slate-400 transition hover:bg-white/[.06] hover:text-cyan-200">{title}</a>)}
              </nav>
            </div>
          </aside>

          <article className="min-w-0 space-y-5 rounded-3xl border border-white/[.07] bg-slate-950/30 px-5 py-8 sm:px-8 lg:px-10">
            <ReactMarkdown remarkPlugins={[remarkGfm, remarkMath]} rehypePlugins={[rehypeKatex]} components={markdownComponents}>
              {markdown}
            </ReactMarkdown>
          </article>
        </div>
      </div>
    </main>
  );
}
