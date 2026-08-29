"use client";

import { useMemo, useState } from "react";
import { CanonicalChapterPage } from "@/components/notes/canonical";
import { SBlockMarkdown } from "./_markdown";
import { SBlockVisual } from "./visuals";
import { S_BLOCK_SECTIONS } from "./content";

function H2({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="scroll-mt-28 border-b border-[var(--border)] pb-4 pt-4 font-sans text-3xl font-black tracking-tight text-[var(--foreground)] sm:text-4xl">
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
    <CanonicalChapterPage
      mode="longform"
      discipline="JEE Advanced Chemistry"
      chapterTitle="s-Block Elements"
      chapterSlug="s-block"
      description="One continuous chapter, not a gallery of cards: Group 1 and Group 2 periodic trends, energetics, reactions, and industrial chemistry."
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
            <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">One continuous chapter, not a gallery of cards</h2>
            <p className="mt-5 max-w-4xl text-base leading-8 text-[var(--text-body)]">
              Every periodic trend, preparation, reaction, exception, structure, industrial process and biological role sits inside the topic where it
              belongs. Group 1 and Group 2 are built from the same governing principles, so exceptions such as lithium and beryllium follow naturally
              from the chemistry rather than appearing as isolated facts. Diagrams are clear, responsive and designed for study on any screen.
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
    </CanonicalChapterPage>
  );
}
