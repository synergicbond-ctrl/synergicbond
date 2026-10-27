/** Chapter description handed from a chapter's data layer to the generic reader components. */
export interface ReaderTopicRef {
  number: number;
  title: string;
}

export interface ReaderPart {
  part: number;
  title: string;
  href: string;
  /** unit / group this part belongs to */
  groupLabel: string;
  hue: string;
  /** first and last topic number, absent for parts without numbered topics (e.g. practice) */
  from?: number;
  to?: number;
  topics: ReaderTopicRef[];
}

export interface StripSegment {
  topic: number;
  part: number;
  hue: string;
  href: string;
  title: string;
}

export type SearchKind = "heading" | "topic" | "formula" | "jee" | "example";

export interface SearchItem {
  id: string;
  kind: SearchKind;
  topic: number;
  part: number;
  title: string;
  /** extra searchable text (not displayed in full) */
  text: string;
  sub: string;
  href: string;
}

export interface ReaderChapter {
  id: string;
  title: string;
  basePath: string;
  totalTopics: number;
}

/** Optional per-chapter data that unlocks the chapter map, topic rail and chapter-wide search. */
export interface ReaderData {
  chapter: ReaderChapter;
  parts: ReaderPart[];
  segments: StripSegment[];
  searchItems: SearchItem[];
  /** the part being shown (lesson pages) */
  part?: number;
}
