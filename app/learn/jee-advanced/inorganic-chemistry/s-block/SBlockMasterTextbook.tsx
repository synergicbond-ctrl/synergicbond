"use client";

import { useMemo, useState } from "react";
import { SBlockMarkdown } from "./_markdown";
import { SBlockVisual } from "./visuals";
import { S_BLOCK_SECTIONS } from "./content";

function H2({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="scroll-mt-28 border-b border-white/10 pb-4 pt-4 font-sans text-3xl font-black tracking-tight text-white sm:text-4xl">
      {children}
    </h2>
  );
}

export default function SBlockMasterTextbook() {
  const [query, setQuery] = useState("");
  const filtered = useMemo(
    () => S_BLOCK_SECTIONS.filter((s) => s.label.toLowerCase().includes(query.toLowerCase())),
    [query],
  );

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[var(--background)]/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.26em] text-[var(--text-muted)]">Synergic Bond • JEE Advanced Chemistry</p>
            <h1 className="mt-1 text-2xl font-black sm:text-3xl">s-Block Elements — Integrated Master Textbook</h1>
          </div>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Find a section…"
            className="w-full rounded-lg border border-white/10 bg-white/[0.06] px-4 py-3 text-sm outline-none placeholder:text-[var(--text-muted)] focus:border-[var(--accent)]/50 lg:w-80"
          />
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-8 lg:grid-cols-[290px_minmax(0,1fr)]">
        <aside className="lg:sticky lg:top-28 lg:h-[calc(100vh-8rem)] lg:overflow-y-auto">
          <nav className="rounded-lg border border-white/10 bg-white/[0.035] p-3">
            {filtered.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="block rounded-lg px-3 py-2.5 text-sm leading-5 text-[var(--text-muted)] transition hover:bg-[var(--surface-2)] hover:text-[var(--foreground)]"
              >
                {s.label}
              </a>
            ))}
          </nav>
        </aside>

        <article className="min-w-0 space-y-12">
          <section className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-7 sm:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-[var(--text-muted)]">NCERT core · JD Lee · classroom problem banks · cross-verified</p>
            <h2 className="mt-3 text-4xl font-black leading-tight sm:text-6xl">One continuous chapter, not a gallery of cards</h2>
            <p className="mt-5 max-w-4xl text-base leading-8 text-slate-300">
              Every periodic trend, preparation, reaction, exception, structure, industrial process, biological role and JEE Advanced problem sits
              inside the topic where it belongs — Group 1 and Group 2 built up from the same six governing principles (Section 1), so an exception
              like lithium or beryllium reads as a consequence of those principles rather than a fact to memorise separately. All diagrams below are
              original, hand-built figures, not screenshots or scans.
            </p>
          </section>

          {filtered.map((section) => (
            <section key={section.id}>
              <H2 id={section.id}>{section.label}</H2>
              <div className="mt-5 space-y-6">
                {section.blocks.map((block, index) =>
                  block.kind === "md" ? (
                    <SBlockMarkdown key={index} markdown={block.text} />
                  ) : (
                    <SBlockVisual key={index} id={block.id} />
                  ),
                )}
              </div>
            </section>
          ))}
        </article>
      </div>
    </main>
  );
}
