"use client";

import { PageToc } from "./PageToc";
import { PartRail } from "./PartRail";
import type { ReaderPart } from "./types";

/**
 * The left rail. Chapters with numbered topics (a registry part) get the topic list with done ticks;
 * every other chapter gets the page's own headings.
 */
export function RailContent({
  chapterId,
  part,
  nextPart,
  onNavigate,
}: {
  chapterId: string;
  part?: ReaderPart;
  nextPart?: ReaderPart;
  onNavigate?: () => void;
}) {
  if (part && part.topics.length > 0) {
    return <PartRail chapterId={chapterId} part={part} nextPart={nextPart} onNavigate={onNavigate} />;
  }
  return <PageToc onNavigate={onNavigate} hue={part?.hue} />;
}
