// ─────────────────────────────────────────────────────────────────────────────
// Content access rules — single source of truth for gating.
//
// Pure module (no server imports) so the proxy/middleware and UI can both use
// it. Enforcement policy:
//   • Public marketing + the one free chapter are open to everyone.
//   • Protected routes require a signed-in user (proxy redirects to
//     /auth/signin?next=<target>).
//   • Premium (paid) content is auth-gated here and additionally
//     subscription-gated at the page level via canAccessContent().
// No fabricated purchase data — paid access comes from real subscription state.
// ─────────────────────────────────────────────────────────────────────────────

/** Fully public — no auth, no paywall. */
const PUBLIC_EXACT = new Set<string>([
  "/",
  "/programs",
  "/learn",
  "/pricing",
  "/support",
  "/about",
]);

/** Public path prefixes (auth screens, marketing sub-pages). */
const PUBLIC_PREFIXES = ["/auth", "/pricing", "/support", "/about"];

/** Free content anyone can open (currently one free chapter). */
const FREE_CHAPTERS = new Set<string>(["/learn/mole-concept"]);

/** Whole-area protected prefixes — everything under these needs auth. */
const PROTECTED_PREFIXES = [
  "/dashboard",
  "/coach",
  "/tutor",
  "/chapter",
  "/quiz",
  "/exam",
  "/tests",
  "/pyq",
  "/revision",
  "/mistakes",
  "/analytics",
  "/ncert",
  "/readiness",
  "/board-examiner",
  "/memory",
  "/vault",
  "/search",
  "/upload",
  "/olympiads",
];

/** Sub-path protected: the exact base is public, but deeper pages need auth. */
const PROTECTED_SUBPREFIXES = ["/programs/", "/learn/"];

/** Free content — open to signed-out users and guests. */
export function isFreeChapter(path: string): boolean {
  return FREE_CHAPTERS.has(path);
}

/** Open to everyone (marketing, auth screens, free content). */
export function isPublicRoute(path: string): boolean {
  if (PUBLIC_EXACT.has(path)) return true;
  if (isFreeChapter(path)) return true;
  return PUBLIC_PREFIXES.some((p) => path === p || path.startsWith(p + "/"));
}

/** True when a route must not be opened by a signed-out user. */
export function requiresAuth(path: string): boolean {
  if (isPublicRoute(path)) return false;
  if (PROTECTED_PREFIXES.some((p) => path === p || path.startsWith(p + "/"))) return true;
  if (PROTECTED_SUBPREFIXES.some((p) => path.startsWith(p))) return true; // e.g. /programs/neet, /learn/atomic-structure
  return false;
}

export interface AccessUser {
  id: string;
  /** Real subscription/premium state — never fabricated. */
  isPaid?: boolean;
}

export interface ContentRef {
  path: string;
  /** Mark premium content that additionally needs a paid plan. */
  premium?: boolean;
}

/**
 * Whether a given user may open a piece of content.
 *  - public / free  → always
 *  - protected      → requires a signed-in user
 *  - premium        → additionally requires a paid plan
 */
export function canAccessContent(user: AccessUser | null, content: ContentRef): boolean {
  if (isPublicRoute(content.path) || isFreeChapter(content.path)) return true;
  if (!user) return false; // must sign in first
  if (content.premium) return Boolean(user.isPaid); // paid-only content
  return true; // signed-in user, non-premium protected content
}

/** Build the sign-in redirect target that returns the user to `target` after login. */
export function signinRedirect(target: string): string {
  return `/auth/signin?next=${encodeURIComponent(target)}`;
}
