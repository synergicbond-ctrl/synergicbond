"use client";

import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState, type CSSProperties, type KeyboardEvent as ReactKeyboardEvent, type ReactNode } from "react";
import styles from "./reader.module.css";
import { useOutline } from "./outline";
import type { SearchItem, SearchKind } from "./types";

const KINDS: { kind: SearchKind; label: string; glyph: string; color: string }[] = [
  { kind: "heading", label: "On this page", glyph: "§", color: "var(--c-visual)" },
  { kind: "topic", label: "Topics", glyph: "◆", color: "var(--c-concept)" },
  { kind: "formula", label: "Formulas", glyph: "∑", color: "var(--c-formula)" },
  { kind: "jee", label: "JEE notes", glyph: "★", color: "var(--c-jee)" },
  { kind: "example", label: "Examples", glyph: "▶", color: "var(--c-example)" },
];
const META = Object.fromEntries(KINDS.map((k) => [k.kind, k])) as Record<SearchKind, (typeof KINDS)[number]>;
const PER_GROUP = 5;

function run(items: SearchItem[], q: string, kind: SearchKind | "all"): SearchItem[] {
  const query = q.trim().toLowerCase();
  if (!query) return [];
  if (/^\d+$/.test(query)) {
    const n = Number(query);
    return items.filter((i) => i.kind === "topic" && i.topic === n);
  }
  const tokens = query.split(/\s+/);
  const scored: [number, SearchItem][] = [];
  for (const it of items) {
    if (kind !== "all" && it.kind !== kind) continue;
    const title = it.title.toLowerCase();
    const hay = `${title} ${it.text.toLowerCase()}`;
    if (!tokens.every((t) => hay.includes(t))) continue;
    let score = it.kind === "topic" ? 1 : 0;
    for (const t of tokens) score += title.startsWith(t) ? 4 : title.includes(t) ? 2 : 1;
    scored.push([score, it]);
  }
  scored.sort((a, b) => b[0] - a[0] || a[1].topic - b[1].topic);
  return scored.map((s) => s[1]);
}

function mark(text: string, q: string): ReactNode {
  const tokens = q.trim().toLowerCase().split(/\s+/).filter((t) => t && !/^\d+$/.test(t));
  if (!tokens.length) return text;
  const re = new RegExp(`(${tokens.map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`, "ig");
  return text.split(re).map((part, i) => (i % 2 ? <mark key={i}>{part}</mark> : part));
}

/** Button that opens the palette from anywhere on the page. */
export function SearchButton({ className, label = "Search this chapter" }: { className?: string; label?: string }) {
  return (
    <button type="button" className={className} onClick={() => window.dispatchEvent(new Event("sb:open-search"))}>
      <span aria-hidden="true">⌕</span>
      <span>{label}</span>
      <span aria-hidden="true" style={{ marginLeft: "auto", fontSize: "0.75rem", opacity: 0.7 }}>
        Ctrl K
      </span>
    </button>
  );
}

/** Ctrl/Cmd+K (or "/") search over topics, formulas, JEE notes and worked examples. */
export function SearchPalette({ items = [], chapterTitle }: { items?: SearchItem[]; chapterTitle: string }) {
  const router = useRouter();
  const outline = useOutline();
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const [kind, setKind] = useState<SearchKind | "all">("all");
  const [sel, setSel] = useState(0);

  useEffect(() => {
    const reset = () => {
      setQ("");
      setKind("all");
      setSel(0);
    };
    const onKey = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement | null;
      const typing = !!t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable);
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => {
          if (!o) reset();
          return !o;
        });
      } else if (e.key === "/" && !typing) {
        e.preventDefault();
        reset();
        setOpen(true);
      } else if (e.key === "Escape") {
        setOpen(false);
      }
    };
    const onOpen = () => {
      reset();
      setOpen(true);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("sb:open-search", onOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("sb:open-search", onOpen);
    };
  }, []);

  // chapter-wide index (when a chapter provides one) + the headings of the page being read
  const all = useMemo<SearchItem[]>(
    () => [
      ...outline.items.map((h) => ({
        id: `h-${h.id}`,
        kind: "heading" as const,
        topic: 0,
        part: 0,
        title: h.text,
        text: "",
        sub: "On this page",
        href: `#${h.id}`,
      })),
      ...items,
    ],
    [items, outline.items],
  );
  const hasKind = useMemo(() => new Set(all.map((i) => i.kind)), [all]);

  const results = useMemo(() => run(all, q, kind), [all, q, kind]);
  const counts = useMemo(() => {
    const c: Record<string, number> = { all: 0 };
    for (const r of run(all, q, "all")) {
      c[r.kind] = (c[r.kind] ?? 0) + 1;
      c.all += 1;
    }
    return c;
  }, [all, q]);

  // when showing "all", cap each group so one kind cannot crowd out the rest
  const visible = useMemo(() => {
    if (kind !== "all") return results.slice(0, 30);
    return KINDS.flatMap((k) => results.filter((r) => r.kind === k.kind).slice(0, PER_GROUP));
  }, [results, kind]);

  useEffect(() => {
    document.getElementById(`sb-pal-${sel}`)?.scrollIntoView({ block: "nearest" });
  }, [sel, visible]);

  if (!open) return null;

  const go = (it: SearchItem | undefined) => {
    if (!it) return;
    setOpen(false);
    if (it.href.startsWith("#")) {
      // same-page heading: scroll there directly
      document.getElementById(it.href.slice(1))?.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", it.href);
    } else {
      router.push(it.href);
    }
  };
  const onInputKey = (e: ReactKeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSel((s) => Math.min(s + 1, Math.max(0, visible.length - 1)));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSel((s) => Math.max(0, s - 1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      go(visible[sel]);
    }
  };

  let lastKind: SearchKind | null = null;
  return (
    <div className={styles.scrim} onMouseDown={(e) => e.target === e.currentTarget && setOpen(false)}>
      <div className={styles.pal} role="dialog" aria-modal="true" aria-label={`Search ${chapterTitle}`}>
        <div className={styles.palIn}>
          <span aria-hidden="true">⌕</span>
          <input
            autoFocus
            value={q}
            onChange={(e) => {
              setQ(e.target.value);
              setSel(0);
            }}
            onKeyDown={onInputKey}
            placeholder={
              hasKind.has("topic")
                ? `Search ${items.filter((i) => i.kind === "topic").length} topics, formulas, JEE notes… or type a topic number`
                : "Search the headings on this page…"
            }
            role="combobox"
            aria-expanded="true"
            aria-controls="sb-pal-list"
            aria-activedescendant={visible[sel] ? `sb-pal-${sel}` : undefined}
            aria-label="Search"
          />
          <span style={{ fontSize: "0.8rem", color: "var(--rd-ink3)" }}>{q.trim() ? `${counts.all} results` : ""}</span>
        </div>
        <div className={styles.palTabs} role="group" aria-label="Filter by kind">
          <button type="button" aria-pressed={kind === "all"} onClick={() => { setKind("all"); setSel(0); }}>
            All
          </button>
          {KINDS.filter((k) => hasKind.has(k.kind)).map((k) => (
            <button key={k.kind} type="button" aria-pressed={kind === k.kind} onClick={() => { setKind(k.kind); setSel(0); }}>
              {k.glyph} {k.label}
              {q.trim() ? ` ${counts[k.kind] ?? 0}` : ""}
            </button>
          ))}
        </div>
        <div className={styles.palList} id="sb-pal-list" role="listbox" aria-label="Results">
          {!q.trim() ? (
            <p className={styles.empty}>Type a word like “lone pair”, “bond order” or “Fajans”, or a topic number like 62.</p>
          ) : visible.length === 0 ? (
            <p className={styles.empty}>Nothing found for “{q}”. Try a shorter word.</p>
          ) : (
            visible.map((it, i) => {
              const m = META[it.kind];
              const head = it.kind !== lastKind ? m.label : null;
              lastKind = it.kind;
              return (
                <div key={it.id}>
                  {head && kind === "all" ? <div className={styles.palGroup}>{head}</div> : null}
                  <a
                    id={`sb-pal-${i}`}
                    role="option"
                    aria-selected={i === sel}
                    href={it.href}
                    className={styles.palItem}
                    style={{ "--c": m.color } as CSSProperties}
                    onMouseMove={() => setSel(i)}
                    onClick={(e) => {
                      e.preventDefault();
                      go(it);
                    }}
                  >
                    <i aria-hidden="true">{m.glyph}</i>
                    <span>
                      {mark(it.title, q)}
                      <small>{it.sub}</small>
                    </span>
                  </a>
                </div>
              );
            })
          )}
        </div>
        <div className={styles.palFoot}>
          <span>↑↓ move</span>
          <span>↵ open</span>
          <span>Esc close</span>
          <span style={{ marginLeft: "auto" }}>Searching {chapterTitle}</span>
        </div>
      </div>
    </div>
  );
}
