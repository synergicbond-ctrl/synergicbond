"use client";

import { useMemo, useState } from "react";
import { CanonicalChapterPage } from "@/components/notes/canonical";
import { SBlockMarkdown } from "./_markdown";
import { SBlockVisual } from "./visuals";
import { ALKALI_METAL_SECTIONS, ALKALINE_EARTH_METAL_SECTIONS } from "./content";

function H2({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="scroll-mt-28 border-b border-[var(--border)] pb-4 pt-4 font-sans text-3xl font-black tracking-tight text-[var(--foreground)] sm:text-4xl">
      {children}
    </h2>
  );
}

export default function SBlockMasterTextbook() {
  const [query, setQuery] = useState("");
  const filteredAlkali = useMemo(
    () => ALKALI_METAL_SECTIONS.filter((section) => section.label.toLowerCase().includes(query.toLowerCase())),
    [query],
  );
  const filteredAlkalineEarth = useMemo(
    () => ALKALINE_EARTH_METAL_SECTIONS.filter((section) => section.label.toLowerCase().includes(query.toLowerCase())),
    [query],
  );

  return (
    <CanonicalChapterPage
      mode="longform"
      discipline="JEE Advanced Chemistry"
      chapterTitle="s-Block Elements"
      chapterSlug="s-block"
      description="Two independent textbook parts: Alkali Metals and Alkaline Earth Metals."
      free={false}
    >
      <div className="grid gap-8 lg:grid-cols-[290px_minmax(0,1fr)]">
        <aside className="lg:sticky lg:top-8 lg:h-[calc(100vh-4rem)] lg:overflow-y-auto">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Find a section…"
            className="mb-3 w-full rounded-lg border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm outline-none placeholder:text-[var(--text-muted)] focus:border-[var(--accent)]/50"
          />
          <nav className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-3">
            <p className="px-3 pb-1 pt-2 text-xs font-black uppercase tracking-[0.16em] text-[var(--accent)]">Part A — Alkali Metals</p>
            {filteredAlkali.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="block rounded-lg px-3 py-2.5 text-sm leading-5 text-[var(--text-muted)] transition hover:bg-[var(--surface-2)] hover:text-[var(--foreground)]">{s.label}</a>
            ))}
            <p className="mt-3 border-t border-[var(--border)] px-3 pb-1 pt-4 text-xs font-black uppercase tracking-[0.16em] text-[var(--accent)]">Part B — Alkaline Earth Metals</p>
            {filteredAlkalineEarth.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="block rounded-lg px-3 py-2.5 text-sm leading-5 text-[var(--text-muted)] transition hover:bg-[var(--surface-2)] hover:text-[var(--foreground)]">{s.label}</a>
            ))}
          </nav>
        </aside>

        <article className="min-w-0 space-y-12">
          <section className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-7 sm:p-10">
            <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">Two independent textbook parts</h2>
            <p className="mt-5 max-w-4xl text-base leading-8 text-[var(--text-body)]">
              Part A covers only the Alkali Metals. Part B covers only the Alkaline Earth Metals. Each part has its own contents and reading sequence.
            </p>
          </section>

          <section aria-labelledby="part-a-alkali">
            <H2 id="part-a-alkali">Part A — Alkali Metals</H2>
            {filteredAlkali.map((section) => (
              <section key={section.id}>
                <H2 id={section.id}>{section.label}</H2>
                <div className="mt-5 space-y-6">{section.blocks.map((block, index) => block.kind === "md" ? <SBlockMarkdown key={index} markdown={block.text} /> : <SBlockVisual key={index} id={block.id} />)}</div>
              </section>
            ))}
          </section>
          <section aria-labelledby="part-b-alkaline-earth">
            <H2 id="part-b-alkaline-earth">Part B — Alkaline Earth Metals</H2>
            {filteredAlkalineEarth.map((section) => (
              <section key={section.id}>
                <H2 id={section.id}>{section.label}</H2>
                <div className="mt-5 space-y-6">{section.blocks.map((block, index) => block.kind === "md" ? <SBlockMarkdown key={index} markdown={block.text} /> : <SBlockVisual key={index} id={block.id} />)}</div>
              </section>
            ))}
          </section>
        </article>
      </div>
    </CanonicalChapterPage>
  );
}
