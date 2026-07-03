"use client";

import { useEffect, useState } from "react";
import { Bookmark, BookmarkCheck } from "lucide-react";
import { toggleRevision, hasRevision, REVISION_EVENT, type RevisionItem } from "@/lib/revision/store";

// One-Tap Revision button (Roadmap V2 · Week 7). Drop anywhere with an item —
// PYQs, notes, tests, AI answers. Toggles the device-local revision list and
// stays in sync across mounted instances via REVISION_EVENT.

export default function AddToRevision({
  item,
  className = "",
}: {
  item: Omit<RevisionItem, "addedAt">;
  className?: string;
}) {
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const sync = () => setSaved(hasRevision(item.id));
    const t = setTimeout(sync, 0); // deferred initial read (client-only)
    window.addEventListener(REVISION_EVENT, sync);
    return () => {
      clearTimeout(t);
      window.removeEventListener(REVISION_EVENT, sync);
    };
  }, [item.id]);

  const onClick = () => setSaved(toggleRevision(item));

  return (
    <button
      onClick={onClick}
      aria-pressed={saved}
      className={`inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1 text-xs font-semibold transition ${
        saved
          ? "border-amber-400/40 bg-amber-400/10 text-amber-300"
          : "border-white/10 bg-white/[0.04] text-white/60 hover:border-amber-400/40 hover:text-amber-300"
      } ${className}`}
    >
      {saved ? <BookmarkCheck className="h-3.5 w-3.5" /> : <Bookmark className="h-3.5 w-3.5" />}
      {saved ? "Saved" : "Add to Revision"}
    </button>
  );
}
