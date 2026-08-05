"use client";

import { useEffect, useRef } from "react";
import renderMathInElement from "katex/contrib/auto-render";
import "katex/dist/katex.min.css";

export type ChemicalEquilibriumPartProps = {
  part: number;
  title: string;
  sourcePages: string;
  html: string;
};

export default function ChemicalEquilibriumPart({ part, title, sourcePages, html }: ChemicalEquilibriumPartProps) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    renderMathInElement(ref.current, {
      delimiters: [
        { left: "$$", right: "$$", display: true },
        { left: "$", right: "$", display: false },
      ],
      throwOnError: false,
      strict: false,
      // Default output already includes MathML, which is what screen readers
      // announce; stated explicitly so a future config edit can't silently
      // drop it and make every equation unreadable to assistive tech.
      output: "htmlAndMathml",
    });

    // WCAG 2.1.1: a horizontally scrollable region must be reachable by
    // keyboard. Equations and (since the mobile pass) wide tables scroll
    // inside their own box, so give the ones that actually overflow a focus
    // stop and an accessible name. Runs after KaTeX, which creates
    // .katex-display.
    const scrollers = ref.current.querySelectorAll<HTMLElement>(".katex-display, table");
    scrollers.forEach((el) => {
      if (el.scrollWidth <= el.clientWidth) return;
      el.tabIndex = 0;
      el.setAttribute("role", "region");
      if (!el.getAttribute("aria-label")) {
        el.setAttribute(
          "aria-label",
          el.tagName === "TABLE" ? "Data table, scrollable" : "Equation, scrollable"
        );
      }
    });
  }, [html]);

  return (
    <article ref={ref} className="ce-note mx-auto w-full max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
      <header className="mb-8 border-b border-slate-200 pb-5">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-indigo-700">Chemical Equilibrium · Part {String(part).padStart(2, "0")}</p>
        <h1 className="mt-2 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">{title}</h1>
        <p className="sr-only">Source pages {sourcePages}</p>
      </header>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <style jsx global>{`
        .ce-note { color: #172033; line-height: 1.72; }
        .ce-note h2 { margin-top: 2.2rem; font-size: 1.75rem; font-weight: 900; color: #172554; }
        .ce-note h3 { margin-top: 1.65rem; font-size: 1.22rem; font-weight: 850; color: #6d28d9; }
        .ce-note h4 { margin-top: 1.35rem; font-size: 1.05rem; font-weight: 800; color: #0f766e; }
        .ce-note p { margin: .72rem 0; }
        .ce-note ul, .ce-note ol { margin: .8rem 0; padding-left: 1.35rem; }
        .ce-note li { margin: .38rem 0; }
        .ce-note strong { color: #9f1239; font-weight: 850; }
        .ce-note table { width: 100%; border-collapse: collapse; margin: 1rem 0 1.35rem; font-size: .95rem; }
        .ce-note th { background: #eef2ff; color: #312e81; font-weight: 800; }
        .ce-note th, .ce-note td { border: 1px solid #cbd5e1; padding: .65rem .72rem; vertical-align: top; }
        .ce-note blockquote { border-left: 4px solid #8b5cf6; background: #f5f3ff; padding: .8rem 1rem; margin: 1rem 0; }
        .ce-note .katex-display { overflow-x: auto; overflow-y: hidden; padding: .4rem 0; }
        /* Mobile: wide data tables pan horizontally instead of crushing
           columns or overflowing the page (chemistry is never shrunk). */
        @media (max-width: 720px) {
          .ce-note table { display: block; max-width: 100%; overflow-x: auto; -webkit-overflow-scrolling: touch; }
          .ce-note th, .ce-note td { white-space: nowrap; }
        }
        .ce-note code { border-radius: .35rem; background: #f1f5f9; padding: .12rem .32rem; }
      `}</style>
    </article>
  );
}
