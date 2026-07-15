// ─────────────────────────────────────────────────────────────────────────────
// Direct premium-learning route access.
//
// The shared /learn visual chapters do not carry a program slug in their URL,
// so their server layout must map the chapter to the real programme
// entitlements that are allowed to open it. This keeps a paid programme member
// working while ensuring that free, expired, and unrelated programme accounts
// never receive the premium lesson payload.
// ─────────────────────────────────────────────────────────────────────────────

import { redirect } from "next/navigation";
import { getUserEntitlements } from "@/lib/access/entitlements";
import { signinRedirect } from "@/lib/access/contentAccess";
import { hasPremiumLearnAccess, type PremiumLearnChapter } from "@/lib/access/premiumLearnPolicy";

export {
  hasPremiumLearnAccess,
  PREMIUM_LEARN_ELIGIBLE_PROGRAM_KEYS,
  type PremiumLearnChapter,
} from "@/lib/access/premiumLearnPolicy";

/**
 * Run in each direct premium chapter layout before any child content renders.
 * Access is based on live entitlement rows (which also represent Pro and
 * owner/admin all-access), never on a client preference or the route alone.
 */
export async function requirePremiumLearnAccess(
  chapter: PremiumLearnChapter,
  path: string,
): Promise<void> {
  const { hasUser, keys } = await getUserEntitlements();
  if (!hasUser) redirect(signinRedirect(path));
  if (!hasPremiumLearnAccess(keys, chapter)) {
    redirect(`/pricing?next=${encodeURIComponent(path)}`);
  }
}