"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { listRevision, removeRevision, REVISION_EVENT, type RevisionItem, type RevisionItemType } from "@/lib/revision/store";

// Saved-for-Revision list (Roadmap V2 · Week 7) — renders the device-local
// items collected via the one-tap button, on /revision. Client component; the
// page around it stays server-rendered.

const TYPE_LABEL: Record<RevisionItemType, string> = {
  pyq: "PYQ", note: "Note", test: "Test", ai: "AI", formula: "Formula", reaction: "Reaction", fact: "Fact",
};

export default function SavedRevisionList() {
  const [items, setItems] = useState<RevisionItem[] | null>(null); // null = pre-mount

  useEffect(() => {
    const sync = () => setItems(listRevision());
    const t = setTimeout(sync, 0);
    window.addEventListener(REVISION_EVENT, sync);
    return () => {
      clearTimeout(t);
      window.removeEventListener(REVISION_EVENT, sync);
    };
  }, []);

  return (
    <section className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-[var(--foreground)]">Saved for Revision</h2>
        {items && items.length > 0 && (
          <span className="rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-bold text-amber-700">{items.length}</span>
        )}
      </div>
      <p className="mt-1 text-sm text-[var(--text-muted)]">Anything you tapped "Add to Revision" on — PYQs, notes and more.</p>

      {items === null ? (
        <p className="mt-4 text-sm text-[var(--text-muted)]">Loading…</p>
      ) : items.length === 0 ? (
        <p className="mt-4 text-sm text-[var(--text-muted)]">
          Nothing saved yet — tap <span className="font-semibold text-[var(--accent)]">Add to Revision</span> on any question in the{" "}
          <Link href="/pyq" className="font-bold text-[var(--accent)] hover:underline">PYQ Center</Link> and it lands here.
        </p>
      ) : (
        <ul className="mt-4 divide-y divide-[var(--border)]">
          {items.map((it) => (
            <li key={it.id} className="flex items-center gap-3 py-3">
              <span className="shrink-0 rounded bg-[var(--surface-2)] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-[var(--text-muted)]">
                {TYPE_LABEL[it.type]}
              </span>
              <Link href={it.href} className="min-w-0 flex-1">
                <span className="block truncate text-sm font-semibold text-[var(--foreground)] hover:text-[var(--accent)]">{it.title}</span>
                {it.subtitle && <span className="block truncate text-xs text-[var(--text-muted)]">{it.subtitle}</span>}
              </Link>
              <button
                onClick={() => removeRevision(it.id)}
                className="shrink-0 text-xs font-semibold text-[var(--text-muted)] transition hover:text-[var(--chem-trap)]"
                aria-label={`Remove ${it.title}`}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
