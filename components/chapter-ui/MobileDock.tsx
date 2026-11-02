"use client";

import Link from "next/link";
import { useEffect, useState, type CSSProperties } from "react";
import styles from "./reader.module.css";
import { ComfortPanel } from "./ComfortPanel";
import { HighlightsPanel } from "./Highlighter";
import { ModeSwitch } from "./ModeSwitch";
import { RailContent } from "./RailContent";
import type { ReaderPart } from "./types";

/** Phone-only bottom bar: contents, reading settings, search and Next. */
export function MobileDock({
  chapterId,
  hubHref,
  part,
  nextPart,
  next,
}: {
  chapterId: string;
  hubHref?: string;
  part?: ReaderPart;
  nextPart?: ReaderPart;
  /** generic next link (any chapter) used when there is no registry part */
  next?: { href: string; label: string };
}) {
  const [open, setOpen] = useState<null | "contents" | "settings">(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const nextLink = nextPart ? { href: nextPart.href, label: "Next part →" } : next ? { href: next.href, label: "Next →" } : null;

  return (
    <>
      <div className={styles.dock} style={part ? ({ "--h": part.hue } as CSSProperties) : undefined}>
        <button type="button" onClick={() => setOpen("contents")}>
          ☰ Contents
        </button>
        <button type="button" onClick={() => setOpen("settings")}>
          Aa Settings
        </button>
        <button type="button" onClick={() => window.dispatchEvent(new Event("sb:open-search"))}>
          ⌕ Search
        </button>
        {nextLink ? (
          <Link href={nextLink.href} className={styles.go}>
            {nextLink.label}
          </Link>
        ) : hubHref ? (
          <Link href={hubHref}>All lessons</Link>
        ) : (
          <span />
        )}
      </div>
      {open ? (
        <div className={styles.sheet} role="dialog" aria-modal="true" aria-label={open === "contents" ? "Contents" : "Reading settings"}>
          <div className={styles.sheetHead}>
            <b>{open === "contents" ? "Contents" : "Reading settings"}</b>
            <button type="button" className={styles.btn} onClick={() => setOpen(null)}>
              Close
            </button>
          </div>
          {open === "contents" ? (
            <RailContent chapterId={chapterId} part={part} nextPart={nextPart} onNavigate={() => setOpen(null)} />
          ) : (
            <>
              <ModeSwitch />
              <ComfortPanel />
              <HighlightsPanel chapterId={chapterId} />
            </>
          )}
        </div>
      ) : null}
    </>
  );
}
