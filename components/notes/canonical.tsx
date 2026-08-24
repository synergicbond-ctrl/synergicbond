import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";

// ─────────────────────────────────────────────────────────────────────────────
// Canonical JEE Advanced Notes Design System.
//
// The single shared UI language for every authored chapter — extracted from
// the Periodic Table master notes (app/learn/periodic-table/
// PeriodicTableMasterNotesV2.tsx), the visual source of truth. Chapters keep
// their own real content structure (tab count, topic groups, lesson counts);
// only the shell, tabs, lesson cards and pager come from here.
//
// Server-component safe: no hooks, no state — pure Links + CSS. Presentation
// only; never import content or access-control code here.
// ─────────────────────────────────────────────────────────────────────────────

// These now read from the site token layer in app/globals.css rather than
// carrying a second, competing palette. Every value below is consumed inside
// the CSS template literal further down, so `var(--…)` resolves normally.
//
// `cyan` deliberately maps to neutral text rather than a chemistry hue: this
// object styles CHROME (tabs, cards, pagers), and the system reserves the
// --chem-* scale for content. Chrome gets neutral by default and gold when
// active, which is what keeps a dense chapter index calm.
export const NT = {
  bg: "var(--background)",
  bgGrid: "var(--surface-2)",
  surface: "var(--surface)",
  surface2: "var(--surface-2)",
  border: "var(--border)",
  borderSoft: "var(--border)",
  text: "var(--foreground)",
  textDim: "var(--text-body)",
  textFaint: "var(--text-muted)",
  gold: "var(--accent)",
  cyan: "var(--text-muted)",
  serif: "var(--font-display), Georgia, 'Times New Roman', serif",
  mono: "var(--font-mono), ui-monospace, Consolas, monospace",
  sans: "var(--font-sans), -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
} as const;

export interface ChapterTab {
  label: string;
  href: string;
  active?: boolean;
}

export interface LessonRef {
  href: string;
  number: string;
  title: string;
  /** Optional real metadata line (source pages, topic tag…). Never fabricated. */
  meta?: string;
}

export interface LessonGroup {
  label: string;
  lessons: LessonRef[];
}

const CANONICAL_CSS = `
.sbnShell { min-height: 100vh; background: ${NT.bg}; color: ${NT.text}; }
.sbnHeader {
  width: 100%;
  border-bottom: 1px solid ${NT.border};
  background: ${NT.surface};
  padding: clamp(18px, 3vw, 34px) clamp(14px, 3vw, 42px);
}
.sbnHeaderInner { max-width: 1560px; margin: 0 auto; }
.sbnHeaderRow {
  display: flex; flex-wrap: wrap; align-items: baseline;
  justify-content: space-between; gap: 10px; margin-bottom: 18px;
}
.sbnKicker {
  color: ${NT.text}; font-family: ${NT.serif};
  font-size: clamp(1.35rem, 2.4vw, 2rem); font-weight: 900;
}
.sbnSubtitle {
  margin-top: 4px; color: ${NT.cyan}; font-family: ${NT.sans};
  font-size: clamp(.95rem, 1.4vw, 1.08rem); font-weight: 750;
}
.sbnHeaderTag {
  color: ${NT.gold}; font-family: ${NT.mono}; font-size: 12px;
  font-weight: 900; letter-spacing: .1em; text-transform: uppercase;
}
.sbnTabs { display: flex; flex-wrap: wrap; gap: 9px; align-items: center; }
.sbnTab {
  display: inline-block;
  border: 1px solid ${NT.border};
  border-left: 4px solid ${NT.cyan};
  border-radius: 13px;
  padding: 10px 13px;
  background: ${NT.surface};
  color: ${NT.textDim};
  font-family: ${NT.sans};
  font-size: clamp(.82rem, 1.1vw, .96rem);
  font-weight: 700;
  line-height: 1.25;
  text-decoration: none;
  cursor: pointer;
}
.sbnTab:hover { color: ${NT.text}; border-color: ${NT.cyan}; }
.sbnTabActive {
  border-color: ${NT.gold};
  border-left-color: ${NT.gold};
  background: var(--accent-wash);
  color: ${NT.gold};
  font-weight: 900;
   }
.sbnTabActive:hover { color: ${NT.gold}; border-color: ${NT.gold}; }
.sbnMain { width: 100%; min-width: 0; max-width: 1500px; margin: 0 auto; padding: 28px 24px 92px; }
.sbnMainBleed { width: 100%; min-width: 0; }
/* Contain content-level horizontal overflow at the page edge (clip keeps
   position:sticky working, unlike hidden); equations/tables scroll inside. */
.sbnMain, .sbnMainBleed { overflow-x: clip; }
.sbnShell .katex-display { overflow-x: auto; overflow-y: hidden; max-width: 100%; }
.sbnShell table { max-width: 100%; }
.sbnPartChrome { width: 100%; min-width: 0; max-width: 1500px; margin: 0 auto; padding: 22px 24px; }
.sbnLessonGroup { margin: 34px 0 10px; }
.sbnLessonGroupLabel {
  color: ${NT.gold}; font-family: ${NT.serif}; font-size: 22px; font-weight: 700;
  border-bottom: 2px solid ${NT.border}; padding-bottom: 10px; margin-bottom: 16px;
  scroll-margin-top: 90px;
}
.sbnLessonGrid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 14px; }
.sbnLessonCard {
  display: flex; flex-direction: column; gap: 8px; min-width: 0;
  background: ${NT.surface};
  border: 1px solid ${NT.border};
  border-left: 4px solid ${NT.cyan};
  border-radius: 13px;
  padding: 16px 18px;
  text-decoration: none;
  transition: border-color .15s ease, background .15s ease;
}
.sbnLessonCard:hover { border-color: ${NT.cyan}; background: ${NT.surface2}; }
.sbnLessonCardCurrent {
  border-color: ${NT.gold}; border-left-color: ${NT.gold};
  background: var(--accent-wash);
   }
.sbnLessonCardCurrent:hover { border-color: ${NT.gold}; background: var(--accent-wash); }
.sbnLessonNumber {
  color: ${NT.cyan}; font-family: ${NT.mono}; font-size: 11.5px;
  font-weight: 900; letter-spacing: .14em; text-transform: uppercase;
}
.sbnLessonCardCurrent .sbnLessonNumber { color: ${NT.gold}; }
.sbnLessonTitle {
  color: ${NT.text}; font-family: ${NT.sans}; font-size: 15px;
  font-weight: 800; line-height: 1.4;
}
.sbnLessonMeta { color: ${NT.textFaint}; font-family: ${NT.sans}; font-size: 12px; font-weight: 600; }
.sbnPager {
  display: grid; grid-template-columns: 1fr auto 1fr; gap: 12px; align-items: stretch;
  border-top: 1px solid ${NT.border}; margin-top: 40px; padding-top: 22px;
}
.sbnPagerCard {
  display: flex; flex-direction: column; gap: 6px; min-width: 0; justify-content: center;
  border: 1px solid ${NT.border}; border-radius: 12px;
  padding: 12px 15px;
  background: ${NT.surface};
  text-decoration: none;
  box-shadow: 0 10px 28px rgba(0,0,0,.18);
}
.sbnPagerCard:hover { border-color: ${NT.cyan}; }
.sbnPagerNext { border-color: var(--accent-dim); text-align: right; }
.sbnPagerNext:hover { border-color: ${NT.gold}; }
.sbnPagerLabel {
  font-family: ${NT.mono}; font-size: 11px; font-weight: 900;
  letter-spacing: .12em; text-transform: uppercase; color: ${NT.cyan};
}
.sbnPagerNext .sbnPagerLabel { color: ${NT.gold}; }
.sbnPagerTitle { color: ${NT.text}; font-family: ${NT.sans}; font-size: 13.5px; font-weight: 800; line-height: 1.35; }
.sbnPagerHub {
  display: flex; align-items: center; justify-content: center;
  border: 1px solid ${NT.border}; border-radius: 12px;
  padding: 12px 15px;
  background: ${NT.surface};
  color: ${NT.text}; font-family: ${NT.sans}; font-size: 13px; font-weight: 800;
  text-decoration: none; box-shadow: 0 10px 28px rgba(0,0,0,.18);
}
.sbnPagerHub:hover { border-color: ${NT.textFaint}; }
.sbnPagerSpacer { border: 1px dashed ${NT.borderSoft}; border-radius: 12px; opacity: .35; }
@media (max-width: 900px) {
  .sbnLessonGrid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .sbnMain { padding: 20px 15px 78px; }
  .sbnTabs { flex-wrap: nowrap; overflow-x: auto; padding-bottom: 6px; -webkit-overflow-scrolling: touch; scrollbar-width: thin; }
  .sbnTab { flex: 0 0 auto; white-space: nowrap; }
}
@media (max-width: 560px) {
  .sbnLessonGrid { grid-template-columns: 1fr; }
  .sbnMain { padding-inline: 13px; }
  .sbnPager { grid-template-columns: 1fr; }
  .sbnPagerNext { text-align: left; }
  .sbnPagerSpacer { display: none; }
}

/* ── Chapter identity header — orients the reader within the chapter ─
   Appears at the top of each lesson page: chapter subject + name (large
   editorial serif) + one-line descriptor + topic count, then a thin
   accent rule. The lesson/topic hero follows immediately below.
   Nothing here is a card — typography and spacing carry the identity. */
.sbnChaptIdent { margin-bottom: 2.25rem; }
.sbnChaptMeta {
  font-family: ${NT.mono};
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: ${NT.textFaint};
  margin-bottom: 0.5rem;
}
.sbnChaptName {
  font-family: ${NT.serif};
  font-optical-sizing: auto;
  font-size: clamp(2rem, 4.4vw, 3rem);
  font-weight: 600;
  line-height: 1.1;
  letter-spacing: -0.025em;
  margin: 0 0 0.55rem;
}
.sbnChaptDesc {
  font-family: ${NT.sans};
  font-size: 1rem;
  line-height: 1.62;
  color: ${NT.textDim};
  max-width: 50ch;
  margin: 0 0 0.65rem;
}
.sbnChaptFooter {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.sbnChaptBadge {
  font-family: ${NT.mono};
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: ${NT.textFaint};
  white-space: nowrap;
}
.sbnChaptRule { flex: 1; height: 1px; }

/* ── Chapter reading shell — sidebar variant ─────────────────────
   Two-column layout: reading canvas (flex-1) + fixed-width chapter rail.
   Used for full lesson/part pages where the chapter contents belong
   permanently on the right rather than in a top pill wall. */
.sbnLessonBar {
  width: 100%;
  border-bottom: 1px solid ${NT.border};
  background: ${NT.surface};
  padding: 10px 24px;
}
.sbnLessonBarInner {
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 8px;
}
.sbnLessonBarBack {
  font-family: ${NT.mono};
  font-size: 11px;
  font-weight: 900;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${NT.textFaint};
  text-decoration: none;
  transition: color 0.12s;
}
.sbnLessonBarBack:hover { color: ${NT.text}; }
.sbnLessonBarPos {
  font-family: ${NT.mono};
  font-size: 11px;
  font-weight: 900;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${NT.gold};
}
.sbnSidebarBody {
  display: grid;
  grid-template-columns: 1fr 258px;
  gap: 0;
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;
  padding: 0 24px;
  align-items: start;
}
.sbnCanvas {
  min-width: 0;
  padding: 48px 40px 80px 0;
}
.sbnRail {
  position: sticky;
  top: 20px;
  max-height: calc(100vh - 40px);
  overflow-y: auto;
  padding: 32px 0 32px 20px;
  border-left: 1px solid ${NT.border};
  scrollbar-width: thin;
  scrollbar-color: ${NT.border} transparent;
}
.sbnRailTitle {
  font-family: ${NT.mono};
  font-size: 9px;
  font-weight: 900;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: ${NT.textFaint};
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid ${NT.border};
}
.sbnRailGroup { margin-bottom: 20px; }
.sbnRailGroupLabel {
  font-family: ${NT.mono};
  font-size: 8px;
  font-weight: 900;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  margin-bottom: 5px;
  padding: 0 8px 5px;
  border-bottom: 1px solid ${NT.border};
}
.sbnRailLink {
  display: flex;
  align-items: flex-start;
  gap: 7px;
  padding: 5px 8px;
  border-radius: 5px;
  font-family: ${NT.sans};
  font-size: 11.5px;
  font-weight: 450;
  color: ${NT.textFaint};
  text-decoration: none;
  line-height: 1.4;
  transition: color 0.12s, background 0.12s;
  border-left: 2px solid transparent;
}
.sbnRailLink:hover { color: ${NT.text}; background: rgba(246,239,223,0.04); }
.sbnRailLinkActive {
  color: ${NT.text};
  font-weight: 700;
  background: rgba(246,239,223,0.05);
}
.sbnRailNum {
  font-family: ${NT.mono};
  font-size: 9px;
  font-weight: 900;
  flex-shrink: 0;
  margin-top: 1px;
  opacity: 0.45;
  min-width: 18px;
}
/* ── Mobile Chapter Contents drawer ─────────────────────────────── */
.sbnMobileContents { display: none; }
.sbnMobileContentsSummary {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 0;
  cursor: pointer;
  list-style: none;
  user-select: none;
}
.sbnMobileContentsSummary::-webkit-details-marker { display: none; }
.sbnMobileContentsSummary::marker { display: none; }
.sbnMobileCLabel {
  font-family: ${NT.mono};
  font-size: 9px;
  font-weight: 900;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: ${NT.textFaint};
}
.sbnMobileCPos {
  font-family: ${NT.mono};
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: ${NT.gold};
  margin-left: auto;
}
.sbnMobileCChevron {
  font-size: 8px;
  color: ${NT.textFaint};
  transition: transform 120ms;
  flex-shrink: 0;
}
details.sbnMobileContentsWrap[open] .sbnMobileCChevron { transform: rotate(180deg); }
.sbnMobileContentsBody {
  max-height: 55vh;
  overflow-y: auto;
  padding: 6px 0 12px;
  border-top: 1px solid ${NT.border};
}
@media (max-width: 960px) {
  .sbnSidebarBody { grid-template-columns: 1fr; padding: 0 16px; }
  .sbnRail { display: none; }
  .sbnCanvas { padding: 32px 0 60px; }
  .sbnLessonBar { padding: 10px 16px; }
  .sbnMobileContents {
    display: block;
    order: -1;
    position: sticky;
    top: 0;
    z-index: 20;
    background: ${NT.surface};
    border-bottom: 1px solid ${NT.border};
    margin: 0 -16px;
    padding: 0 16px;
  }
}
@media (max-width: 560px) {
  .sbnCanvas { padding: 24px 0 48px; }
}
`;

export function CanonicalNotesStyles() {
  return <style>{CANONICAL_CSS}</style>;
}

/**
 * Canonical chapter shell: dark navy page, gradient header with chapter
 * kicker + subtitle, gold section tag, and the rectangular rounded top tab
 * navigation (cyan inactive / gold active) from the Periodic Table reference.
 */
export function ChapterTopTabs({ tabs, ariaLabel = "Chapter sections" }: { tabs: ChapterTab[]; ariaLabel?: string }) {
  return (
    <nav className="sbnTabs" aria-label={ariaLabel}>
      {tabs.map((tab) => (
        <Link
          key={`${tab.href}-${tab.label}`}
          href={tab.href}
          aria-current={tab.active ? "page" : undefined}
          className={`sbnTab${tab.active ? " sbnTabActive" : ""}`}
        >
          {tab.label}
        </Link>
      ))}
    </nav>
  );
}

export function ChapterLessonCard({ lesson, current }: { lesson: LessonRef; current?: boolean }) {
  return (
    <Link
      href={lesson.href}
      aria-current={current ? "page" : undefined}
      className={`sbnLessonCard${current ? " sbnLessonCardCurrent" : ""}`}
    >
      <span className="sbnLessonNumber">{lesson.number}</span>
      <span className="sbnLessonTitle">{lesson.title}</span>
      {lesson.meta && <span className="sbnLessonMeta">{lesson.meta}</span>}
    </Link>
  );
}

export function ChapterLessonGrid({ lessons, currentHref }: { lessons: LessonRef[]; currentHref?: string }) {
  return (
    <div className="sbnLessonGrid">
      {lessons.map((lesson) => (
        <ChapterLessonCard key={lesson.href} lesson={lesson} current={lesson.href === currentHref} />
      ))}
    </div>
  );
}

/** Lesson grid organised by the chapter's REAL topic groups (anchor targets for top tabs). */
export function ChapterLessonGroups({ groups, currentHref, anchorPrefix = "group" }: {
  groups: LessonGroup[];
  currentHref?: string;
  anchorPrefix?: string;
}) {
  return (
    <>
      {groups.map((group, index) => (
        <section key={group.label} className="sbnLessonGroup" id={`${anchorPrefix}-${index + 1}`}>
          <h2 className="sbnLessonGroupLabel" style={{ scrollMarginTop: 90 }}>{group.label}</h2>
          <ChapterLessonGrid lessons={group.lessons} currentHref={currentHref} />
        </section>
      ))}
    </>
  );
}

/**
 * Canonical bottom pager: previous-lesson card (cyan) with its real title,
 * "All lessons" hub link in the centre, next-lesson card (gold) with its real
 * title. Never bare numbers.
 */
export function ChapterLessonPager({
  prev,
  next,
  hubHref,
  hubLabel = "All lessons",
}: {
  prev?: LessonRef;
  next?: LessonRef;
  hubHref: string;
  hubLabel?: string;
}) {
  return (
    <nav className="sbnPager" aria-label="Lesson navigation">
      {prev ? (
        <Link href={prev.href} className="sbnPagerCard">
          <span className="sbnPagerLabel">← Previous · {prev.number}</span>
          <span className="sbnPagerTitle">{prev.title}</span>
        </Link>
      ) : (
        <span className="sbnPagerSpacer" aria-hidden />
      )}
      <Link href={hubHref} className="sbnPagerHub">{hubLabel}</Link>
      {next ? (
        <Link href={next.href} className="sbnPagerCard sbnPagerNext">
          <span className="sbnPagerLabel">Next · {next.number} →</span>
          <span className="sbnPagerTitle">{next.title}</span>
        </Link>
      ) : (
        <span className="sbnPagerSpacer" aria-hidden />
      )}
    </nav>
  );
}

/**
 * Canonical topic header primitive.
 *
 * Renders the three-layer heading used in chemistry chapter and lesson pages:
 *   eyebrow  — JetBrains Mono / sb-tech-label / coloured  (e.g. "TOPIC 04 · CHEMICAL BONDING")
 *   title    — Source Serif 4 / sb-editorial-title          (e.g. "Valence Bond Theory")
 *   rule     — 1 px hairline in the accent colour
 *   descriptor — Inter Tight / muted / optional
 *
 * Pass `accentColor` as a CSS variable reference (default: `var(--accent)`)
 * to wire semantic chemistry hues — cyan for bonding topics, violet for orbital
 * topics, etc. The rule and eyebrow share the same colour.
 *
 * Used by chapter lesson shells and section headers. Never placed to the right,
 * vertically, or floating — always at the top of the article or section.
 */
export function TopicHeader({
  eyebrow,
  title,
  descriptor,
  accentColor = "var(--accent)",
  as: Tag = "h1",
}: {
  eyebrow: string;
  title: string;
  descriptor?: string;
  accentColor?: string;
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <header style={{ marginBottom: "1.5rem" }}>
      <p
        className="sb-tech-label"
        style={{
          color: accentColor,
          fontSize: "11px",
          fontWeight: 900,
          marginBottom: "0.5rem",
          letterSpacing: "0.22em",
        }}
      >
        {eyebrow}
      </p>
      <Tag
        className="sb-editorial-title"
        style={{
          fontSize: Tag === "h1" ? "clamp(2rem, 4vw, 3rem)" : "clamp(1.35rem, 2.6vw, 1.9rem)",
          fontWeight: 600,
          lineHeight: 1.12,
          color: accentColor,
          margin: 0,
        }}
      >
        {title}
      </Tag>
      <div
        style={{
          height: 1,
          background: accentColor,
          opacity: 0.25,
          marginTop: "0.75rem",
        }}
        aria-hidden
      />
      {descriptor && (
        <p
          style={{
            marginTop: "0.5rem",
            fontSize: "0.875rem",
            color: "var(--text-muted)",
            fontFamily: NT.sans,
          }}
        >
          {descriptor}
        </p>
      )}
    </header>
  );
}

/**
 * Compact top strip for part pages: back-to-chapter link + current position
 * badge, in the canonical language. Sits above the part content, under the
 * chapter header.
 */
export function ChapterPartStrip({
  hubHref,
  hubLabel,
  positionLabel,
}: {
  hubHref: string;
  hubLabel: string;
  positionLabel: string;
}) {
  return (
    <div
      style={{
        display: "flex", flexWrap: "wrap", alignItems: "center",
        justifyContent: "space-between", gap: 10, margin: "0 0 18px",
      }}
    >
      <Link
        href={hubHref}
        className="sbnTab"
        style={{ borderLeftColor: NT.cyan }}
      >
        ← {hubLabel}
      </Link>
      <span className="sbnHeaderTag">{positionLabel}</span>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Chapter Identity Header
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Chapter-level orientation header for lesson pages.
 * Appears above the lesson TopicHeader. The chapter name is the large
 * editorial element; the lesson title (h1) follows below it.
 * No card, no border — typography and spacing carry the identity.
 */
export function ChapterIdentityHeader({
  subject,
  chapterName,
  descriptor,
  topicCount,
  accentColor,
}: {
  subject: string;
  chapterName: string;
  descriptor: string;
  topicCount: number;
  accentColor: string;
}) {
  return (
    <header className="sbnChaptIdent">
      <p className="sbnChaptMeta">{subject}</p>
      <p className="sbnChaptName" style={{ color: accentColor }}>{chapterName}</p>
      <p className="sbnChaptDesc">{descriptor}</p>
      <div className="sbnChaptFooter">
        <span className="sbnChaptBadge">{topicCount} Topics</span>
        <div className="sbnChaptRule" style={{ background: accentColor, opacity: 0.15 }} />
      </div>
    </header>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Chapter Contents Rail
//
// Right-side sticky index used by chapter lesson pages (e.g. Atomic Structure).
// Shows the chapter's full lesson/topic list grouped by concept sections.
// Replaces the top tab/pill wall; keeps the reading canvas uncluttered.
// ─────────────────────────────────────────────────────────────────────────────

export interface ChapterRailGroup {
  label: string;
  from: number;
  to: number;
  accent: string;
}

export interface ChapterRailLesson {
  part: number;
  title: string;
  href: string;
}

/**
 * Permanent right-side chapter index for desktop reading views.
 * Groups all lessons by concept section, highlights the current lesson,
 * and uses each group's semantic accent colour for its label and active item.
 */
export function ChapterContentsRail({
  title = "Chapter Contents",
  groups,
  lessons,
  currentPart,
}: {
  title?: string;
  groups: ChapterRailGroup[];
  lessons: ChapterRailLesson[];
  currentPart: number;
}) {
  const groupedList = groups.map((group) => {
    const groupLessons = lessons.filter(
      (l) => l.part >= group.from && l.part <= group.to
    );
    if (groupLessons.length === 0) return null;
    return (
      <div key={group.label} className="sbnRailGroup">
        <div className="sbnRailGroupLabel" style={{ color: group.accent }}>
          {group.label}
        </div>
        {groupLessons.map((lesson) => {
          const active = lesson.part === currentPart;
          return (
            <Link
              key={lesson.href}
              href={lesson.href}
              aria-current={active ? "page" : undefined}
              className={`sbnRailLink${active ? " sbnRailLinkActive" : ""}`}
              style={active ? { borderLeftColor: group.accent, color: group.accent } : {}}
            >
              <span className="sbnRailNum">{String(lesson.part).padStart(2, "0")}</span>
              <span>{lesson.title}</span>
            </Link>
          );
        })}
      </div>
    );
  });

  return (
    <>
      {/* Desktop sticky rail */}
      <aside className="sbnRail" aria-label="Chapter contents">
        <div className="sbnRailTitle">{title}</div>
        {groupedList}
      </aside>

      {/* Mobile sticky drawer — hidden at desktop, order:-1 puts it above canvas in single-col grid */}
      <nav className="sbnMobileContents" aria-label="Chapter contents">
        <details className="sbnMobileContentsWrap">
          <summary className="sbnMobileContentsSummary">
            <span className="sbnMobileCLabel">{title}</span>
            <span className="sbnMobileCPos">
              {String(currentPart).padStart(2, "0")}&thinsp;/&thinsp;{String(lessons.length).padStart(2, "0")}
            </span>
            <span className="sbnMobileCChevron" aria-hidden="true">▾</span>
          </summary>
          <div className="sbnMobileContentsBody">
            {groupedList}
          </div>
        </details>
      </nav>
    </>
  );
}