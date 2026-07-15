import { cookies } from "next/headers";
import { getUserEntitlements, type ProgramKey } from "@/lib/access/entitlements";
import { createClient } from "@/lib/supabase/server";
import { getRole, isPrivileged } from "@/lib/auth/roles";
import { PROGRAM_CATALOG, ownsCatalogProgram, programKeyToHref, type CatalogProgram } from "@/lib/programs";

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

export type ActiveProgramSource = "purchase" | "all-access" | "owner-admin";

export interface PortalProgram {
  /** Canonical catalogue key ('neet' | 'cbse:class-11' | …). */
  key: ProgramKey;
  name: string;
  category: CatalogProgram["category"];
  /** Where this program's workspace lives. */
  href: string;
  source: ActiveProgramSource;
}

export interface ActiveProgramContext {
  hasUser: boolean;
  /** Validated, canonical, currently-entitled programs (catalogue order). */
  entitledPrograms: PortalProgram[];
  /** null ⇒ authenticated free workspace. */
  activeProgram: PortalProgram | null;
  activeProgramAccessSource: ActiveProgramSource | null;
  isAllAccess: boolean;
  canSwitchPrograms: boolean;
}

const EMPTY: ActiveProgramContext = {
  hasUser: false,
  entitledPrograms: [],
  activeProgram: null,
  activeProgramAccessSource: null,
  isAllAccess: false,
  canSwitchPrograms: false,
};

/** Canonical-catalogue validation: is this exact string a sellable key or a
 *  known alias? Anything else (garbage, tampered cookie, retired keys) is
 *  rejected. */
export function isCanonicalProgramKey(value: unknown): value is ProgramKey {
  if (typeof value !== "string" || value.length === 0 || value.length > 64) return false;
  return PROGRAM_CATALOG.some((p) => p.key === value || (p.aliasKeys ?? []).includes(value));
}

function catalogEntryFor(key: ProgramKey): CatalogProgram | undefined {
  return PROGRAM_CATALOG.find((p) => p.key === key || (p.aliasKeys ?? []).includes(key));
}

/** Map any valid key/alias to its canonical catalogue key (or null). */
export function canonicalizeProgramKey(value: unknown): ProgramKey | null {
  if (!isCanonicalProgramKey(value)) return null;
  return catalogEntryFor(value)?.key ?? null;
}

/** Resolve the full portal context for the signed-in user. */
export async function getActiveProgramContext(): Promise<ActiveProgramContext> {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return EMPTY;

  const [entitlements, role] = await Promise.all([
    getUserEntitlements(),
    getRole(supabase, user.id),
  ]);
  const privileged = isPrivileged({ id: user.id, role });
  const isAllAccess = entitlements.isPro || privileged; // authoritative owner/admin all-access

  const source: ActiveProgramSource = privileged
    ? "owner-admin"
    : isAllAccess
      ? "all-access"
      : "purchase";

  // Canonical, deduped, catalogue-ordered entitled list. ownsCatalogProgram
  // handles the isc↔icse alias split; anything not in the catalogue is dropped.
  const entitledPrograms: PortalProgram[] = PROGRAM_CATALOG
    .filter((p) => ownsCatalogProgram(entitlements.keys, p))
    .map((p) => ({
      key: p.key,
      name: p.name,
      category: p.category,
      href: programKeyToHref(p.key),
      source,
    }));

  if (entitledPrograms.length === 0) {
    // Authenticated free workspace — genuinely free features only.
    return {
      hasUser: true,
      entitledPrograms: [],
      activeProgram: null,
      activeProgramAccessSource: null,
      isAllAccess: false,
      canSwitchPrograms: false,
    };
  }

  // 1. Saved preference — only honoured when it maps to an entitled program.
  let active: PortalProgram | undefined;
  try {
    const jar = await cookies();
    const raw = jar.get(ACTIVE_PROGRAM_COOKIE)?.value;
    if (raw && isCanonicalProgramKey(raw)) {
      const entry = catalogEntryFor(raw);
      if (entry) active = entitledPrograms.find((p) => p.key === entry.key);
    }
  } catch {
    // cookies() unavailable (e.g. static context) → fall through to default.
  }

  // 3. First entitled program in canonical catalogue order.
  if (!active) active = entitledPrograms[0];

  return {
    hasUser: true,
    entitledPrograms,
    activeProgram: active,
    activeProgramAccessSource: active.source,
    isAllAccess,
    canSwitchPrograms: entitledPrograms.length > 1,
  };
}

/** Portal navigation targets for a given context. Entrance programs use their
 *  program-scoped routes; board programs use their board dashboard; the free
 *  workspace uses the global (free) destinations. */
export function portalDestinations(ctx: ActiveProgramContext): {
  home: string; learn: string; practice: string; tests: string;
  revision: string; progress: string; aiTools: string;
} {
  const key = ctx.activeProgram?.key;
  if (key && !key.includes(":")) {
    const base = `/programs/${key}`;
    return {
      home: "/dashboard",
      learn: `${base}/learn`,
      practice: `${base}/practice`,
      tests: `${base}/tests`,
      revision: "/revision",
      progress: `${base}/progress`,
      aiTools: "/ai-lab",
    };
  }
  if (key) {
    const base = programKeyToHref(key); // /dashboard/<board>/<class>
    return {
      home: "/dashboard",
      learn: `${base}/full-syllabus`,
      practice: `${base}/practice`,
      tests: `${base}/custom-test`,
      revision: "/revision",
      progress: "/performance",
      aiTools: "/ai-lab",
    };
  }
  return {
    home: "/dashboard",
    learn: "/notes",
    practice: "/pyq",
    tests: "/tests",
    revision: "/revision",
    progress: "/performance",
    aiTools: "/ai-lab",
  };
}