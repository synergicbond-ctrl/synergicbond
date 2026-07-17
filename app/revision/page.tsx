import RevisionWorkspace from "@/components/revision/RevisionWorkspace";

// ─────────────────────────────────────────────────────────────────────────────
// /revision — Revision Queue (Dashboard Simplification pass: Memory System +
// Revision Engine merged here). Saved Attempts moved to /tests/history (now
// "Test History", under Tests where it belongs). Daily Revision Queue
// (SM-2 spaced repetition, /memory) is cross-linked below instead of
// duplicated — one data store, reachable from one destination.
// ─────────────────────────────────────────────────────────────────────────────

export default function RevisionPage() {
  return <RevisionWorkspace />;
}
