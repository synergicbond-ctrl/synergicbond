"use client";

import { useMemo, useState } from "react";
import { CanonicalChapterPage } from "@/components/notes/canonical";
import { C, tint } from "@/components/notes/chemistryMarkdown";
import { SBlockMarkdown } from "./_markdown";
import { SBlockVisual } from "./visuals";
import { ALKALI_METAL_SECTIONS, ALKALINE_EARTH_METAL_SECTIONS, type SBlockSection } from "./content";

// Part title — the shared boron-family H1 treatment.
function PartHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2
      id={id}
      className="scroll-mt-28 w-fit pt-7 font-sans text-[1.9rem] font-black leading-tight tracking-tight sm:text-[2.25rem]"
      style={{
        color: C.cyan,
        backgroundImage: `linear-gradient(100deg, ${C.cyan}, ${C.violet} 55%, ${C.pink})`,
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        WebkitTextFillColor: "transparent",
        borderTop: `2px solid ${tint(C.cyan, 0.35)}`,
      }}
    >
      {children}
    </h2>
  );
}

// Numbered section heading — the shared boron-family H2 treatment (cyan,
// restrained underline). Deliberately NOT the gradient part-title size.
function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2
      id={id}
      className="mt-2 inline-block scroll-mt-28 border-b-2 pb-1 pt-8 font-sans text-[1.45rem] font-black leading-tight"
      style={{ color: C.cyan, borderColor: tint(C.cyan, 0.4) }}
    >
      {children}
    </h2>
  );
}

function SectionBody({ section }: { section: SBlockSection }) {
  return (
    <div className="mt-4 space-y-5">
      {section.blocks.map((block, index) =>
        block.kind === "md" ? (
          <SBlockMarkdown key={index} markdown={block.text} />
        ) : (
          <SBlockVisual key={index} id={block.id} />
        ),
      )}
    </div>
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
      <div className="grid gap-7 lg:grid-cols-[240px_minmax(0,1fr)]">
        <aside className="lg:sticky lg:top-8 lg:h-[calc(100vh-4rem)] lg:overflow-y-auto">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Find a section…"
            className="mb-3 w-full rounded-lg border border-cyan-400/15 bg-[var(--surface)] px-3.5 py-2.5 text-[13px] outline-none placeholder:text-[var(--text-muted)] focus:border-cyan-400/40"
          />
          <nav className="rounded-lg border border-cyan-400/12 bg-[var(--surface)] p-2.5">
            <p className="px-2.5 pb-1 pt-1.5 text-[10px] font-black uppercase tracking-[0.16em] text-[#3fd0ee]">Part A — Alkali Metals</p>
            {filteredAlkali.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="block rounded-md px-2.5 py-2 text-[13px] leading-5 text-[var(--text-muted)] transition hover:bg-[var(--surface-2)] hover:text-[#a5f3fc]">{s.label}</a>
            ))}
            <p className="mt-2 border-t border-cyan-400/12 px-2.5 pb-1 pt-3 text-[10px] font-black uppercase tracking-[0.16em] text-[#3fd0ee]">Part B — Alkaline Earth Metals</p>
            {filteredAlkalineEarth.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="block rounded-md px-2.5 py-2 text-[13px] leading-5 text-[var(--text-muted)] transition hover:bg-[var(--surface-2)] hover:text-[#a5f3fc]">{s.label}</a>
            ))}
          </nav>
        </aside>

        <article className="min-w-0 max-w-3xl space-y-10">
          <section aria-labelledby="part-a-alkali">
            <PartHeading id="part-a-alkali">Part A — Alkali Metals</PartHeading>
            {filteredAlkali.map((section) => (
              <section key={section.id}>
                <SectionHeading id={section.id}>{section.label}</SectionHeading>
                <SectionBody section={section} />
              </section>
            ))}
          </section>

          <section aria-labelledby="part-b-alkaline-earth">
            <PartHeading id="part-b-alkaline-earth">Part B — Alkaline Earth Metals</PartHeading>
            {filteredAlkalineEarth.map((section) => (
              <section key={section.id}>
                <SectionHeading id={section.id}>{section.label}</SectionHeading>
                <SectionBody section={section} />
              </section>
            ))}
          </section>
        </article>
      </div>
    </CanonicalChapterPage>
  );
}
