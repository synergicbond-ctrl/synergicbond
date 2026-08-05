"use client";

// lib/retrieval/record.ts — fire-and-forget persistence for retrieval
// results, following the exact contract of lib/attempts/client.ts:
// signed-out users still get in-UI feedback; failures never block answering.

import type { RetrievalItem, RetrievalResult } from "@/components/retrieval/types";
import { buildRetrievalSubmission, type RetrievalContext } from "./submission";

/** Record one answered retrieval item against /api/attempts. Never throws. */
export function recordRetrievalResult(
  item: RetrievalItem,
  result: RetrievalResult,
  context: RetrievalContext
): void {
  const submission = buildRetrievalSubmission(item, result, context);
  void fetch("/api/attempts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(submission),
    keepalive: true,
  }).catch(() => {
    // Signed-out / offline: in-UI feedback already happened; drop silently,
    // matching recordAttempt's behaviour.
  });
}
