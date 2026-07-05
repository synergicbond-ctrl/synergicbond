import { createClient } from "@/lib/supabase/server";
import { isProActive } from "@/lib/subscription";
import { ENGINE_SLUGS } from "@/lib/engine/programSpec";
import { BOARDS, CLASSES, type BoardSlug, type ClassSlug, type PurchasedProgram } from "@/lib/boardDashboard";

// ─────────────────────────────────────────────────────────────────────────────
// Purchased-program entitlements — SERVER-ONLY (imports the cookie Supabase
// client, so bundling into a client component fails at build time by design).
//
// Truth model (never fabricates ownership):
//   • Pro subscription (subscriptions table, the LIVE product) ⇒ entitled to
//     every program — Pro is the all-access plan.
//   • user_program_entitlements rows (migration 013, service-role-written)
//     ⇒ granular per-program purchases/grants. Read defensively: until the
//     founder runs the migration, the query errors and we degrade to [].
//   • Signed-out or unentitled users get an empty list — the UI then shows
//     the browsable catalogue with no "purchased" badges.
// ─────────────────────────────────────────────────────────────────────────────

/** 'neet' | 'jee-main' | 'jee-advanced' | '<board>:<class>' */
export type ProgramKey = string;

export interface EntitlementSet {
  hasUser: boolean;
  isPro: boolean;
  /** Granular + Pro-derived program keys the user owns. */
  keys: Set<ProgramKey>;
}

const ALL_BOARD_KEYS: ProgramKey[] = BOARDS.flatMap((b) => CLASSES.map((c) => `${b.slug}:${c.slug}`));
export const ALL_PROGRAM_KEYS: ProgramKey[] = Array.from(new Set([
  ...ENGINE_SLUGS,
  ...ALL_BOARD_KEYS,
  "isc:class-11",
  "isc:class-12",
]));


interface EntitlementRow {
  program_key: string;
  status: string;
  expires_at: string | null;
}

export async function getUserEntitlements(): Promise<EntitlementSet> {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return { hasUser: false, isPro: false, keys: new Set() };

  const isPro = await isProActive(supabase, user.id);
  const keys = new Set<ProgramKey>(isPro ? ALL_PROGRAM_KEYS : []);

  // Granular rows — defensive: table may not be migrated yet (degrade to none).
  try {
    const { data, error } = await supabase
      .from("user_program_entitlements")
      .select("program_key, status, expires_at")
      .eq("user_id", user.id)
      .eq("status", "active");
    if (!error && data) {
      const now = Date.now();
      for (const row of data as EntitlementRow[]) {
        if (row.expires_at && new Date(row.expires_at).getTime() < now) continue;
        keys.add(row.program_key);
      }
    }
  } catch {
    // Table missing / transient error → Pro-derived set only.
  }

  return { hasUser: true, isPro, keys };
}

/** Does the signed-in user own this entrance program (or Pro)? */
export async function hasProgramAccess(slug: string): Promise<boolean> {
  const { keys } = await getUserEntitlements();
  return keys.has(slug);
}

/** Board-class entitlements in the shape the board dashboard pages consume. */
export async function getPurchasedBoardPrograms(): Promise<PurchasedProgram[]> {
  const { keys } = await getUserEntitlements();
  const out: PurchasedProgram[] = [];
  const seen = new Set<string>();
  for (const key of keys) {
    const [rawBoard, cls] = key.split(":");
    if (!cls) continue; // entrance keys have no ':'
    const board = rawBoard === "isc" ? "icse" : rawBoard;
    const combo = `${board}:${cls}`;
    if (seen.has(combo)) continue;
    if (BOARDS.some((b) => b.slug === board) && CLASSES.some((c) => c.slug === cls)) {
      seen.add(combo);
      out.push({ board: board as BoardSlug, class: cls as ClassSlug });
    }
  }
  return out;
}
