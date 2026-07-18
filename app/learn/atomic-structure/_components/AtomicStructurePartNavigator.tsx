"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Glass } from "@/components/notes/premium";
import { CanonicalNotesStyles, ChapterLessonGrid } from "@/components/notes/canonical";
import { ATOMIC_CONCEPT_GROUPS } from "../parts/groups";

type AtomicPart = { part: number; title: string; pages: string; href: string };

export function AtomicStructurePartNavigator({ parts }: { parts: readonly AtomicPart[] }) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const filteredGroups = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return ATOMIC_CONCEPT_GROUPS.map((group, index) => ({
      group,
      anchor: `group-${index + 1}`,
      parts: parts.filter((part) => {
        if (part.part < group.from || part.part > group.to) return false;
        if (!needle) return true;
        return (
          part.title.toLowerCase().includes(needle) ||
          group.label.toLowerCase().includes(needle) ||
          group.keywords.includes(needle) ||
          `part ${String(part.part).padStart(2, "0")}`.includes(needle) ||
          String(part.part) === needle
        );
      }),
    })).filter(({ parts }) => parts.length > 0);
  }, [parts, query]);

  return (
    <>
      <CanonicalNotesStyles />
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center">
        <label className="flex-1">
          <span className="sr-only">Search parts by topic, concept or formula name</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search topics — e.g. Rydberg, uncertainty, nodes, Aufbau…"
            className="w-full rounded-xl border border-white/15 bg-white/[0.04] px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
          />
        </label>
        <label className="sm:hidden">
          <span className="sr-only">Jump to a part</span>
          <select
            defaultValue=""
            onChange={(event) => { if (event.target.value) router.push(event.target.value); }}
            className="w-full rounded-xl border border-cyan-400/30 bg-[#0B1220] px-4 py-2.5 text-sm font-semibold text-cyan-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
          >
            <option value="" disabled>Jump to part…</option>
            {parts.map((part) => (
              <option key={part.href} value={part.href}>
                Part {String(part.part).padStart(2, "0")} — {part.title}
              </option>
            ))}
          </select>
        </label>
      </div>
      {filteredGroups.length === 0 ? (
        <Glass className="p-5 text-sm text-white/70">
          No parts match “{query}”. Try a broader term such as “Bohr”, “spectrum”, “orbital” or a part number.
        </Glass>
      ) : (
        <div className="space-y-7">
          {filteredGroups.map(({ group, anchor, parts }) => (
            <div key={group.label} id={anchor} style={{ scrollMarginTop: 90 }}>
              <h3
                className="sbnLessonGroupLabel"
                style={{ fontFamily: "Georgia, 'Iowan Old Style', 'Times New Roman', serif" }}
              >
                {group.label}
                <span className="ml-2 text-sm font-semibold normal-case tracking-normal" style={{ color: "#91a9bc" }}>
                  Parts {String(group.from).padStart(2, "0")}–{String(group.to).padStart(2, "0")}
                </span>
              </h3>
              <ChapterLessonGrid
                lessons={parts.map((part) => ({
                  href: part.href,
                  number: `Part ${String(part.part).padStart(2, "0")}`,
                  title: part.title,
                  meta: `Source pages ${part.pages}`,
                }))}
              />
            </div>
          ))}
        </div>
      )}
    </>
  );
}
