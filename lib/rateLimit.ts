// ---------------------------------------------------------------------------
// In-memory fixed-window rate limiter (abuse guard for paid AI routes).
//
// LIMITATION (documented honestly): this counter is per warm serverless
// instance — it is NOT shared across Vercel lambdas, so the effective global
// limit is (limit × concurrent instances). It is a first-line abuse guard, not
// a hard quota. Upgrade to Upstash/Vercel KV for cross-instance accuracy
// (Phase 2). Distinct from lib/rateLimiter.ts, which is client-side only.
// ---------------------------------------------------------------------------

type Bucket = { count: number; resetAt: number };
const store = new Map<string, Bucket>();

export interface RateLimitResult {
  ok: boolean;
  remaining: number;
  retryAfter: number; // seconds until the window resets
}

function prune(now: number) {
  // Opportunistic cleanup to keep the Map bounded under sustained traffic.
  if (store.size < 5000) return;
  for (const [k, b] of store) if (now >= b.resetAt) store.delete(k);
}

export function rateLimit(key: string, limit: number, windowMs: number): RateLimitResult {
  const now = Date.now();
  prune(now);
  const b = store.get(key);
  if (!b || now >= b.resetAt) {
    store.set(key, { count: 1, resetAt: now + windowMs });
    return { ok: true, remaining: limit - 1, retryAfter: 0 };
  }
  if (b.count >= limit) {
    return { ok: false, remaining: 0, retryAfter: Math.ceil((b.resetAt - now) / 1000) };
  }
  b.count += 1;
  return { ok: true, remaining: limit - b.count, retryAfter: 0 };
}

export function clientIp(req: Request): string {
  const xff = req.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0].trim();
  return req.headers.get("x-real-ip") || "unknown";
}
