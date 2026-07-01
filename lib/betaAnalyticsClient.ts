"use client";

import type { BetaEventName, BetaFeedbackPayload } from "@/lib/betaAnalytics";

const ANON_KEY = "sb_beta_anonymous_id";
const SESSION_KEY = "sb_beta_session_id";

function makeId(prefix: string) {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return `${prefix}_${crypto.randomUUID()}`;
  }
  return `${prefix}_${Date.now()}_${Math.random().toString(36).slice(2)}`;
}

export function getBetaAnonymousId() {
  let id = window.localStorage.getItem(ANON_KEY);
  if (!id) {
    id = makeId("anon");
    window.localStorage.setItem(ANON_KEY, id);
  }
  return id;
}

export function getBetaSessionId() {
  let id = window.sessionStorage.getItem(SESSION_KEY);
  if (!id) {
    id = makeId("session");
    window.sessionStorage.setItem(SESSION_KEY, id);
  }
  return id;
}

export function trackBetaEvent(
  eventName: BetaEventName,
  metadata: Record<string, unknown> = {},
  route = typeof window !== "undefined" ? window.location.pathname : ""
) {
  if (typeof window === "undefined") return;

  if (eventName === "snap_solve_completed") {
    const current = Number(window.localStorage.getItem("sb_beta_solve_count") || "0");
    window.localStorage.setItem("sb_beta_solve_count", String(current + 1));
    window.dispatchEvent(new Event("beta-solve-completed"));
  }

  const payload = {
    eventName,
    anonymousId: getBetaAnonymousId(),
    sessionId: getBetaSessionId(),
    route,
    metadata,
  };

  const body = JSON.stringify(payload);
  if (navigator.sendBeacon) {
    const blob = new Blob([body], { type: "application/json" });
    navigator.sendBeacon("/api/beta/track", blob);
    return;
  }

  void fetch("/api/beta/track", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body,
    keepalive: true,
  }).catch(() => {});
}

export async function submitBetaFeedback(payload: Omit<BetaFeedbackPayload, "anonymousId" | "sessionId">) {
  const res = await fetch("/api/beta/feedback", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...payload,
      anonymousId: getBetaAnonymousId(),
      sessionId: getBetaSessionId(),
    }),
  });

  if (!res.ok) {
    throw new Error("Feedback could not be saved.");
  }
}
