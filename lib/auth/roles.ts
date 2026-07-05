// ─────────────────────────────────────────────────────────────────────────────
// Role primitives — the CLIENT-SAFE core of the access system.
//
// These read only `profiles.role` through a passed-in Supabase client and import
// nothing server-only, so they are safe to pull into modules that also run on the
// client (e.g. lib/subscription.ts, which is imported by client pages). The
// higher-level access decisions that consult subscriptions/entitlements live in
// the server-only façade lib/auth/access.ts (which re-exports everything here).
//
// Privileged = owner ∪ admin ⇒ unrestricted access. No email hardcoding: the
// owner account is designated by profiles.role='owner' (migration 016).
// ─────────────────────────────────────────────────────────────────────────────
import type { SupabaseClient } from "@supabase/supabase-js";

export type Role = "owner" | "admin" | "mentor" | "student";

export interface AccessUser {
  id: string;
  email?: string | null;
  role: Role;
}

const VALID_ROLES: readonly Role[] = ["owner", "admin", "mentor", "student"];

/** Coerce any DB/unknown value to a valid Role (defaults to 'student'). */
export function normalizeRole(value: unknown): Role {
  return typeof value === "string" && (VALID_ROLES as readonly string[]).includes(value)
    ? (value as Role)
    : "student";
}

// ── Pure role predicates ─────────────────────────────────────────────────────

export function isOwner(user: AccessUser | null | undefined): boolean {
  return user?.role === "owner";
}

export function isAdmin(user: AccessUser | null | undefined): boolean {
  return user?.role === "admin";
}

/** Unrestricted access: owner OR admin. This is the single privilege gate. */
export function isPrivileged(user: AccessUser | null | undefined): boolean {
  return isOwner(user) || isAdmin(user);
}

// ── Role resolution (needs a Supabase client; no server-only imports) ─────────

/** Read a user's role from profiles. Defensive: any error / missing column /
 *  missing row degrades to 'student' so the app is correct before migration 016
 *  is applied. */
export async function getRole(supabase: SupabaseClient, userId: string): Promise<Role> {
  try {
    const { data } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", userId)
      .maybeSingle();
    return normalizeRole(data?.role);
  } catch {
    return "student";
  }
}

/** Resolve the signed-in user + their role into an AccessUser (or null). */
export async function getAccessUser(supabase: SupabaseClient): Promise<AccessUser | null> {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return null;
    return { id: user.id, email: user.email, role: await getRole(supabase, user.id) };
  } catch {
    return null;
  }
}

/** Is this specific user id privileged? (used by isProActive, which has the id) */
export async function isPrivilegedById(supabase: SupabaseClient, userId: string): Promise<boolean> {
  return isPrivileged({ id: userId, role: await getRole(supabase, userId) });
}

/** Is the currently signed-in user privileged? */
export async function isPrivilegedServer(supabase: SupabaseClient): Promise<boolean> {
  return isPrivileged(await getAccessUser(supabase));
}
