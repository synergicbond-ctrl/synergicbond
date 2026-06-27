/**
 * Client-side sandbox rate limiter.
 * Blocks >LIMIT actions within WINDOW ms and enforces a cooldown.
 * Use for high-cost actions: AI solves, file uploads, audio submissions.
 *
 * NOTE: This is a UX guardrail only. Real abuse protection MUST also be
 * enforced server-side (the API routes) — this just prevents accidental spam.
 */

const LIMIT = 10;            // max actions
const WINDOW = 60_000;       // per 60 seconds
const COOLDOWN = 30_000;     // lockout duration once tripped

type Bucket = { hits: number[]; lockedUntil: number };
const buckets: Record<string, Bucket> = {};

export function checkRateLimit(key = "default"): { allowed: boolean; cooldownLeft: number } {
  const now = Date.now();
  const b = (buckets[key] ??= { hits: [], lockedUntil: 0 });

  if (now < b.lockedUntil) {
    return { allowed: false, cooldownLeft: Math.ceil((b.lockedUntil - now) / 1000) };
  }

  // drop hits outside the window
  b.hits = b.hits.filter((t) => now - t < WINDOW);

  if (b.hits.length >= LIMIT) {
    b.lockedUntil = now + COOLDOWN;
    return { allowed: false, cooldownLeft: Math.ceil(COOLDOWN / 1000) };
  }

  b.hits.push(now);
  return { allowed: true, cooldownLeft: 0 };
}
