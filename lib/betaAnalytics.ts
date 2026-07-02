export const BETA_EVENT_NAMES = [
  "signup",
  "login",
  "dashboard_visit",
  "search",
  "snap_solve_start",
  "snap_solve_completed",
  "learn_visit",
  "pyq_visit",
  "periodic_table_visit",
  "session_start",
  "session_end",
] as const;

export type BetaEventName = (typeof BETA_EVENT_NAMES)[number];

export const betaEventSet = new Set<string>(BETA_EVENT_NAMES);

export type BetaEventPayload = {
  eventName: BetaEventName;
  anonymousId: string;
  sessionId: string;
  route?: string;
  metadata?: Record<string, unknown>;
};

export type BetaFeedbackPayload = {
  anonymousId: string;
  sessionId: string;
  rating: number;
  mostUsefulFeature: string;
  biggestIssue: string;
  wouldRecommend: boolean;
  triggerReason: "solves" | "time" | "manual";
};

export function sanitizeAnalyticsText(value: unknown, maxLength = 500) {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, maxLength);
}

export function sanitizeMetadata(metadata: unknown): Record<string, unknown> {
  if (!metadata || typeof metadata !== "object" || Array.isArray(metadata)) return {};
  return Object.fromEntries(
    Object.entries(metadata as Record<string, unknown>)
      .filter(([key]) => key.length <= 60)
      .slice(0, 20)
      .map(([key, value]) => {
        if (typeof value === "string") return [key, value.slice(0, 300)];
        if (typeof value === "number" || typeof value === "boolean" || value === null) return [key, value];
        return [key, String(value).slice(0, 300)];
      })
  );
}
