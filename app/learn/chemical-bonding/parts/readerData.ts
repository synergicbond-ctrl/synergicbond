// Adapts the Chemical Bonding course data to the generic reader components in
// components/chapter-ui. Pure data shaping: no chemistry content is written or changed here.
import type { ReaderChapter, ReaderPart, SearchItem, StripSegment } from "@/components/chapter-ui/types";
import { CHEM_BOND_GROUPS, chemBondGroupForPart, chemBondPartMeta } from "./meta";
import { chemicalBondingTopics } from "./topicData";

export const CHEM_BOND_CHAPTER: ReaderChapter = {
  id: "chemical-bonding",
  title: "Chemical Bonding & Molecular Structure",
  basePath: "/learn/chemical-bonding",
  totalTopics: chemicalBondingTopics.length,
};

const nn = (n: number) => String(n).padStart(2, "0");

export const readerParts: ReaderPart[] = chemBondPartMeta.map((m) => {
  const group = chemBondGroupForPart(m.part);
  const topics = chemicalBondingTopics.filter((t) => t.part === m.part).map((t) => ({ number: t.number, title: t.title }));
  return {
    part: m.part,
    title: m.title,
    href: m.href,
    groupLabel: group.label,
    hue: group.hue,
    from: topics.length ? topics[0].number : undefined,
    to: topics.length ? topics[topics.length - 1].number : undefined,
    topics,
  };
});

export const readerGroups = CHEM_BOND_GROUPS.map((g) => ({
  label: g.label,
  hue: g.hue,
  from: g.from,
  to: g.to,
  parts: readerParts.filter((p) => p.part >= g.from && p.part <= g.to),
}));

const partByTopic = new Map<number, ReaderPart>();
for (const p of readerParts) for (const t of p.topics) partByTopic.set(t.number, p);

export const topicHrefs: Record<number, string> = Object.fromEntries(
  chemicalBondingTopics.map((t) => [t.number, `${partByTopic.get(t.number)?.href ?? CHEM_BOND_CHAPTER.basePath}#topic-${t.number}`]),
);

export const stripSegments: StripSegment[] = chemicalBondingTopics.map((t) => {
  const p = partByTopic.get(t.number);
  return { topic: t.number, part: t.part, hue: p?.hue ?? "#cbd5e1", href: topicHrefs[t.number], title: t.title };
});

export function hueForTopic(topic: number): string {
  return partByTopic.get(topic)?.hue ?? "#cbd5e1";
}

const clip = (s: string, n: number) => (s.length > n ? `${s.slice(0, n - 1)}…` : s);

/** Search index. Text is truncated so the payload stays small; titles carry most of the signal. */
export const searchItems: SearchItem[] = chemicalBondingTopics.flatMap((t) => {
  const p = partByTopic.get(t.number);
  const href = topicHrefs[t.number];
  const where = `Part ${nn(t.part)} · topic ${t.number}`;
  const out: SearchItem[] = [
    {
      id: `t${t.number}`,
      kind: "topic",
      topic: t.number,
      part: t.part,
      title: `${t.number} · ${t.title}`,
      text: clip([t.paragraphs[0], ...(t.bullets ?? [])].join(" "), 220),
      sub: `${p?.groupLabel ?? ""} · ${where}`,
      href,
    },
  ];
  if (t.formula) {
    out.push({
      id: `f${t.number}`,
      kind: "formula",
      topic: t.number,
      part: t.part,
      title: `Formula · ${t.title}`,
      text: clip(t.formula, 90),
      sub: `Formula card · ${where}`,
      href,
    });
  }
  if (t.exam) {
    out.push({
      id: `j${t.number}`,
      kind: "jee",
      topic: t.number,
      part: t.part,
      title: clip(t.exam, 120),
      text: clip(t.exam, 240),
      sub: `JEE focus · ${where}`,
      href,
    });
  }
  (t.examples ?? []).forEach((ex, i) =>
    out.push({
      id: `e${t.number}-${i}`,
      kind: "example",
      topic: t.number,
      part: t.part,
      title: ex.title,
      text: clip(ex.body, 120),
      sub: `Worked example · ${where}`,
      href,
    }),
  );
  return out;
});

/** Everything AppShell needs to give Chemical Bonding its chapter map, topic rail and chapter-wide search. */
export const readerData = {
  chapter: CHEM_BOND_CHAPTER,
  parts: readerParts,
  segments: stripSegments,
  searchItems,
};
