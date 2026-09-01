"use client";

import { useMemo, useState } from "react";
import { CanonicalChapterPage } from "@/components/notes/canonical";
import { SBlockMarkdown } from "./_markdown";
import { SBlockVisual } from "./visuals";
import { ALKALI_METAL_SECTIONS, ALKALINE_EARTH_METAL_SECTIONS, type SBlockSection } from "./content";

const GRADIENT: React.CSSProperties = {
  color: "#3fd0ee",
  backgroundImage: "linear-gradient(100deg, #3fd0ee, #a98cff 55%, #f472c0)",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  WebkitTextFillColor: "transparent",
};

function PartHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2
      id={id}
      className="scroll-mt-28 w-fit border-b-2 pb-2 pt-4 font-sans text-[2rem] font-black leading-tight tracking-tight sm:text-[2.5rem]"
      style={{ ...GRADIENT, borderColor: "rgba(63, 208, 238, 0.4)" }}
    >
      {children}
    </h2>
  );
}

function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2
      id={id}
      className="scroll-mt-28 w-fit border-b-2 pb-2 pt-6 font-sans text-[1.7rem] font-black leading-tight tracking-tight sm:text-[2rem]"
      style={{ ...GRADIENT, borderColor: "rgba(63, 208, 238, 0.3)" }}
    >
      {children}
    </h2>
  );
}

function SectionBody({ section }: { section: SBlockSection }) {
  return (
    <div className="mt-5 space-y-6">
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
      <div className="grid gap-8 lg:grid-cols-[290px_minmax(0,1fr)]">
        <aside className="lg:sticky lg:top-8 lg:h-[calc(100vh-4rem)] lg:overflow-y-auto">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Find a section…"
            className="mb-3 w-full rounded-lg border border-cyan-400/20 bg-[var(--surface)] px-4 py-3 text-sm outline-none placeholder:text-[var(--text-muted)] focus:border-cyan-400/50"
          />
          <nav className="rounded-lg border border-cyan-400/15 bg-[var(--surface)] p-3">
            <p className="px-3 pb-1 pt-2 text-xs font-black uppercase tracking-[0.16em] text-[#3fd0ee]">Part A — Alkali Metals</p>
            {filteredAlkali.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="block rounded-lg px-3 py-2.5 text-sm leading-5 text-[var(--text-muted)] transition hover:bg-[var(--surface-2)] hover:text-[#a5f3fc]">{s.label}</a>
            ))}
            <p className="mt-3 border-t border-cyan-400/15 px-3 pb-1 pt-4 text-xs font-black uppercase tracking-[0.16em] text-[#3fd0ee]">Part B — Alkaline Earth Metals</p>
            {filteredAlkalineEarth.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="block rounded-lg px-3 py-2.5 text-sm leading-5 text-[var(--text-muted)] transition hover:bg-[var(--surface-2)] hover:text-[#a5f3fc]">{s.label}</a>
            ))}
          </nav>
        </aside>

        <article className="min-w-0 max-w-[52rem] space-y-12">
          <section className="rounded-xl border border-cyan-400/20 bg-[var(--surface)] p-7 sm:p-10">
            <h2 className="w-fit text-3xl font-black leading-tight sm:text-4xl" style={GRADIENT}>Two independent textbook parts</h2>
            <p className="mt-5 max-w-4xl text-base leading-8 text-[var(--text-body)]">
              Part A covers only the Alkali Metals. Part B covers only the Alkaline Earth Metals. Each part has its own contents and reading sequence.
            </p>
          </section>

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
