// ─────────────────────────────────────────────────────────────────────────────
// Active-program state — pure entitlement resolver.
//
// This module deliberately has no Next.js, cookie, or Supabase dependencies so
// the portal's entitlement contract can be exercised with safe fixtures. The
// server adapter in activeProgram.ts supplies real user entitlements and the
// httpOnly preference cookie; this resolver never treats the preference as an
// access grant.
// ─────────────────────────────────────────────────────────────────────────────

export type ActiveProgramSource = "purchase" | "all-access" | "owner-admin";

export interface ActiveProgramCatalogEntry {
  key: string;
  name: string;
  category: "Boards" | "Entrance";
  href: string;
  aliasKeys?: readonly string[];
}

export interface PortalProgram {
  key: string;
  name: string;
  category: "Boards" | "Entrance";
  href: string;
  source: ActiveProgramSource;
}

export interface ActiveProgramContext {
  hasUser: boolean;
  entitledPrograms: PortalProgram[];
  activeProgram: PortalProgram | null;
  activeProgramAccessSource: ActiveProgramSource | null;
  isAllAccess: boolean;
  canSwitchPrograms: boolean;
}

export interface ResolveActiveProgramInput {
  hasUser: boolean;
  entitlementKeys: ReadonlySet<string>;
  isAllAccess: boolean;
  isPrivileged: boolean;
  preferredProgramKey?: unknown;
  catalog: readonly ActiveProgramCatalogEntry[];
}

export interface PortalDestinations {
  home: string;
  learn: string;
  practice: string;
  tests: string;
  revision: string;
  progress: string;
  aiTools: string;
}

const EMPTY: ActiveProgramContext = {
  hasUser: false,
  entitledPrograms: [],
  activeProgram: null,
  activeProgramAccessSource: null,
  isAllAccess: false,
  canSwitchPrograms: false,
};

/** Accept only a known canonical catalogue key or one of its explicit aliases. */
export function isKnownCatalogProgramKey(
  value: unknown,
  catalog: readonly ActiveProgramCatalogEntry[],
): value is string {
  if (typeof value !== "string" || value.length === 0 || value.length > 64) return false;
  return catalog.some((program) => program.key === value || (program.aliasKeys ?? []).includes(value));
}

/** Resolve a known alias to its canonical catalogue key. */
export function canonicalizeCatalogProgramKey(
  value: unknown,
  catalog: readonly ActiveProgramCatalogEntry[],
): string | null {
  if (!isKnownCatalogProgramKey(value, catalog)) return null;
  return catalog.find((program) => program.key === value || (program.aliasKeys ?? []).includes(value))?.key ?? null;
}

function ownsCatalogProgram(keys: ReadonlySet<string>, program: ActiveProgramCatalogEntry): boolean {
  return keys.has(program.key) || (program.aliasKeys ?? []).some((key) => keys.has(key));
}

/**
 * Turn a verified entitlement set plus an untrusted preference into portal
 * state. Catalogue order is intentionally the deterministic fallback order.
 */
export function resolveActiveProgramContext(input: ResolveActiveProgramInput): ActiveProgramContext {
  if (!input.hasUser) return EMPTY;

  const source: ActiveProgramSource = input.isPrivileged
    ? "owner-admin"
    : input.isAllAccess
      ? "all-access"
      : "purchase";

  const entitledPrograms = input.catalog
    .filter((program) => ownsCatalogProgram(input.entitlementKeys, program))
    .map((program): PortalProgram => ({
      key: program.key,
      name: program.name,
      category: program.category,
      href: program.href,
      source,
    }));

  if (entitledPrograms.length === 0) {
    return {
      hasUser: true,
      entitledPrograms: [],
      activeProgram: null,
      activeProgramAccessSource: null,
      isAllAccess: false,
      canSwitchPrograms: false,
    };
  }

  const preferredKey = canonicalizeCatalogProgramKey(input.preferredProgramKey, input.catalog);
  const activeProgram = preferredKey
    ? entitledPrograms.find((program) => program.key === preferredKey) ?? entitledPrograms[0]
    : entitledPrograms[0];

  return {
    hasUser: true,
    entitledPrograms,
    activeProgram,
    activeProgramAccessSource: activeProgram.source,
    isAllAccess: input.isAllAccess,
    canSwitchPrograms: entitledPrograms.length > 1,
  };
}

/** Resolve portal links only from already-validated active-program state. */
export function portalDestinationsForContext(ctx: ActiveProgramContext): PortalDestinations {
  const active = ctx.activeProgram;
  if (active && !active.key.includes(":")) {
    const base = `/programs/${active.key}`;
    return {
      home: "/dashboard",
      learn: `${base}/learn`,
      practice: `${base}/practice`,
      tests: `${base}/tests`,
      revision: `${base}/revision`,
      progress: `${base}/progress`,
      aiTools: "/ai-lab",
    };
  }
  if (active) {
    return {
      home: "/dashboard",
      learn: `${active.href}/full-syllabus`,
      practice: `${active.href}/practice`,
      tests: `${active.href}/custom-test`,
      revision: `${active.href}/revision`,
      progress: `${active.href}/analytics`,
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
