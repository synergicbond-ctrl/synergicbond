"use client";

import { useEffect, useMemo, useState } from "react";

const PAGE_COUNT = 28;

const SECTIONS = [
  { label: "Cover and section map", page: 1 },
  { label: "Section 1 — Active Interface and Foundations", page: 2 },
  { label: "Section 2 — Physisorption, Chemisorption and MOT", page: 6 },
  { label: "Section 3 — Equilibria, Isotherms and Thermodynamics", page: 9 },
  { label: "Section 4 — Kinetics, Experiments and Applications", page: 12 },
  { label: "Section 5 — Catalysis Bridge", page: 14 },
  { label: "Final Revision", page: 16 },
  { label: "Appendix A — Complete Derivations", page: 18 },
  { label: "Appendix B — Additional Worked Examples", page: 21 },
  { label: "Fresh Visuals", page: 23 },
  { label: "Previous-Year Style Questions", page: 26 },
] as const;

function pagePath(page: number) {
  return `/surface-chemistry/adsorption-complete/page-${String(page).padStart(2, "0")}.png`;
}

export default function AdsorptionDocumentViewer() {
  const [zoom, setZoom] = useState(100);
  const [currentPage, setCurrentPage] = useState(1);

  const pages = useMemo(
    () => Array.from({ length: PAGE_COUNT }, (_, index) => index + 1),
    []
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        const page = Number((visible.target as HTMLElement).dataset.page);
        if (Number.isFinite(page)) setCurrentPage(page);
      },
      { threshold: [0.25, 0.5, 0.75] }
    );

    document
      .querySelectorAll<HTMLElement>("[data-adsorption-page]")
      .forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const goToPage = (page: number) => {
    document.getElementById(`adsorption-page-${page}`)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div
      className="min-h-screen bg-[#050914] text-slate-100"
      onContextMenu={(event) => event.preventDefault()}
    >
      <div className="sticky top-0 z-40 border-b border-white/10 bg-[#050914]/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1500px] flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
          <div>
            <p className="text-[11px] font-black uppercase tracking-[.18em] text-cyan-300">
              Exact document edition
            </p>
            <p className="mt-1 text-sm font-semibold text-white">
              Adsorption — page {currentPage} of {PAGE_COUNT}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <label className="sr-only" htmlFor="adsorption-section-jump">
              Jump to section
            </label>
            <select
              id="adsorption-section-jump"
              className="max-w-[280px] rounded-xl border border-white/10 bg-slate-950 px-3 py-2 text-sm text-slate-200 outline-none focus:border-cyan-300/50"
              value=""
              onChange={(event) => {
                const page = Number(event.target.value);
                if (page) goToPage(page);
              }}
            >
              <option value="">Jump to section</option>
              {SECTIONS.map((section) => (
                <option key={section.page} value={section.page}>
                  {section.label}
                </option>
              ))}
            </select>

            <button
              type="button"
              onClick={() => setZoom((value) => Math.max(70, value - 10))}
              className="rounded-xl border border-white/10 bg-white/[.04] px-3 py-2 text-sm font-bold text-slate-200 hover:border-cyan-300/30"
              aria-label="Zoom out"
            >
              −
            </button>
            <button
              type="button"
              onClick={() => setZoom(100)}
              className="min-w-16 rounded-xl border border-white/10 bg-white/[.04] px-3 py-2 text-sm font-bold text-slate-200 hover:border-cyan-300/30"
              aria-label="Reset zoom"
            >
              {zoom}%
            </button>
            <button
              type="button"
              onClick={() => setZoom((value) => Math.min(150, value + 10))}
              className="rounded-xl border border-white/10 bg-white/[.04] px-3 py-2 text-sm font-bold text-slate-200 hover:border-cyan-300/30"
              aria-label="Zoom in"
            >
              +
            </button>
          </div>
        </div>
      </div>

      <main className="mx-auto max-w-[1500px] px-2 py-6 sm:px-4 lg:px-8">
        <div className="mb-6 rounded-2xl border border-cyan-300/20 bg-cyan-300/[.055] px-4 py-3 text-sm leading-6 text-cyan-50">
          This web edition displays the uploaded notes page-for-page without rewriting, reordering, cropping or omitting any embedded image.
        </div>

        <div className="space-y-7">
          {pages.map((page) => (
            <section
              key={page}
              id={`adsorption-page-${page}`}
              data-page={page}
              data-adsorption-page
              className="scroll-mt-24"
              aria-label={`Adsorption notes page ${page}`}
            >
              <div className="mx-auto mb-2 flex max-w-[1180px] items-center justify-between px-1 text-xs font-bold uppercase tracking-[.15em] text-slate-500">
                <span>Page {page}</span>
                <button
                  type="button"
                  onClick={() => goToPage(1)}
                  className="hover:text-cyan-300"
                >
                  Back to top
                </button>
              </div>
              <div className="overflow-x-auto rounded-xl border border-white/10 bg-white shadow-[0_30px_100px_rgba(0,0,0,.45)]">
                <img
                  src={pagePath(page)}
                  alt={`Adsorption Complete JEE Advanced notes — page ${page}`}
                  width={1547}
                  height={2002}
                  loading={page <= 2 ? "eager" : "lazy"}
                  decoding="async"
                  draggable={false}
                  className="mx-auto block h-auto max-w-none select-none"
                  style={{ width: `${zoom}%`, minWidth: zoom > 100 ? `${zoom}%` : undefined }}
                />
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}
