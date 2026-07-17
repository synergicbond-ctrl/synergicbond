import { cookies } from "next/headers";
import { getUserEntitlements, type ProgramKey } from "@/lib/access/entitlements";
import { createClient } from "@/lib/supabase/server";
import { getRole, isPrivileged } from "@/lib/auth/roles";
import { PROGRAM_CATALOG, programKeyToHref } from "@/lib/programs";
import {
  canonicalizeCatalogProgramKey,
  isKnownCatalogProgramKey,
  portalDestinationsForContext,
  resolveActiveProgramContext,
  type ActiveProgramContext,
  type PortalDestinations,
} from "@/lib/portal/activeProgramState";

// ─────────────────────────────────────────────────────────────────────────────
// Active Program resolver — SERVER-ONLY single source of truth for the
// authenticated portal (Portal Reorganisation pass).
//
// Truth model (never fabricates ownership):
//   • entitledPrograms come exclusively from lib/access/entitlements
//     (active paid entitlements + Pro all-access + owner/admin privilege) and
//     are validated against the canonical PROGRAM_CATALOG. Expired/cancelled
//     rows are already filtered out by the entitlement layer; invalid keys are
//     dropped here.
//   • The active program is a PORTAL PREFERENCE, not an authorisation:
//     a cookie can only ever select between programs the server has already
//     verified the user owns. A tampered/unentitled/malformed cookie value is
//     ignored and the resolver falls back safely.
//
// Fallback order (spec):
//   1. valid saved preferred program (cookie, validated against entitlements);
//   2. most recently used entitled program — no server-side tracker exists
//      today, so this step is a no-op rather than a fabricated signal;
//   3. first entitled program in canonical catalogue order;
//   4. authenticated free workspace when no paid program exists.
// ─────────────────────────────────────────────────────────────────────────────

/** Preference cookie. SameSite=Lax + Secure (prod) + httpOnly — set only by
 *  the server after validating entitlement (app/api/portal/active-program). */
export const ACTIVE_PROGRAM_COOKIE = "sb_active_program";

export type { ActiveProgramContext, ActiveProgramSource, PortalProgram } from "@/lib/portal/activeProgramState";

const PORTAL_CATALOG = PROGRAM_CATALOG.map((program) => ({
  ...program,
  href: programKeyToHref(program.key),
}));

/** Canonical-catalogue validation: is this exact string a sellable key or a
 *  known alias? Anything else (garbage, tampered cookie, retired keys) is
 *  rejected. */
export function isCanonicalProgramKey(value: unknown): value is ProgramKey {
  return isKnownCatalogProgramKey(value, PORTAL_CATALOG);
}

/** Map any valid key/alias to its canonical catalogue key (or null). */
export function canonicalizeProgramKey(value: unknown): ProgramKey | null {
  return canonicalizeCatalogProgramKey(value, PORTAL_CATALOG);
}

/** Resolve the full portal context for the signed-in user. */
export async function getActiveProgramContext(): Promise<ActiveProgramContext> {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return resolveActiveProgramContext({
      hasUser: false,
      entitlementKeys: new Set(),
      isAllAccess: false,
      isPrivileged: false,
      catalog: [],
    });
  }

  const [entitlements, role] = await Promise.all([
    getUserEntitlements(),
    getRole(supabase, user.id),
  ]);
  const privileged = isPrivileged({ id: user.id, role });
  // Saved preference remains untrusted until the pure resolver validates it
  // against the real entitlement set supplied above.
  let preferredProgramKey: unknown;
  try {
    const jar = await cookies();
    preferredProgramKey = jar.get(ACTIVE_PROGRAM_COOKIE)?.value;
  } catch {
    // cookies() unavailable (e.g. static context) → safe catalogue fallback.
  }

  return resolveActiveProgramContext({
    hasUser: true,
    entitlementKeys: entitlements.keys,
    isAllAccess: entitlements.isPro,
    isPrivileged: privileged,
    preferredProgramKey,
    catalog: PORTAL_CATALOG,
  });
}

/** Portal navigation targets for a given context. Entrance programs use their
 *  program-scoped routes; board programs use their board dashboard; the free
 *  workspace uses the global (free) destinations. */
export function portalDestinations(ctx: ActiveProgramContext): PortalDestinations {
  return portalDestinationsForContext(ctx);
}
