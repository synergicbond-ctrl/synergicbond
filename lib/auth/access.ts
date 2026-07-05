// ─────────────────────────────────────────────────────────────────────────────
// Centralized role-based access control — the SERVER-SIDE façade and SINGLE
// SOURCE OF TRUTH for access decisions. Re-exports the client-safe role
// primitives (lib/auth/roles.ts) and adds the decisions that must consult real
// paid state (subscriptions / entitlements).
//
// No email hardcoding anywhere: privilege is derived from `profiles.role`
// (migration 016). Privileged = owner ∪ admin ⇒ unrestricted (bypasses
// subscription, payment, entitlement, premium, usage-limit and locked-content
// checks). mentor/student behave as normal users; the roles exist for future use.
//
// IMPORTANT: this module imports server-only code (lib/access/entitlements.ts →
// next/headers), so it must ONLY be imported from Server Components / route
// handlers / server actions. Client code and client-safe modules (e.g.
// lib/subscription.ts) import from lib/auth/roles.ts instead.
// ─────────────────────────────────────────────────────────────────────────────
import type { SupabaseClient } from "@supabase/supabase-js";
import { isProActive } from "@/lib/subscription";
import { hasProgramAccess as entitlementHasProgramAccess } from "@/lib/access/entitlements";
import {
  canAccessContent as routeCanAccessContent,
  isPublicRoute,
  isFreeChapter,
  type ContentRef,
} from "@/lib/access/contentAccess";
import { getAccessUser, isPrivileged } from "@/lib/auth/roles";

// Re-export the client-safe primitives so this file is the one documented entry
// point (`lib/auth/access.ts`) for server code.
export {
  type Role,
  type AccessUser,
  normalizeRole,
  isOwner,
  isAdmin,
  isPrivileged,
  getRole,
  getAccessUser,
  isPrivilegedById,
  isPrivilegedServer,
} from "@/lib/auth/roles";

// ── Access decisions (delegate to existing infra; privileged short-circuits) ──

/** All-access (Pro) content gate. Privileged users are already granted by
 *  isProActive, which short-circuits on role. */
export async function hasPremiumAccess(supabase: SupabaseClient): Promise<boolean> {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return false;
  return isProActive(supabase, user.id);
}

/** Unlimited AI-tool access. Free users still use AI within per-tool limits
 *  (snap quota / rate limiter); this returns true when limits do NOT apply. */
export async function canUseAiTool(supabase: SupabaseClient): Promise<boolean> {
  return hasPremiumAccess(supabase);
}

/** Does the signed-in user have access to a specific program? Delegates to the
 *  entitlement layer, which already grants ALL programs to privileged/Pro users. */
export async function hasProgramAccess(supabase: SupabaseClient, programSlug: string): Promise<boolean> {
  void supabase; // entitlement layer opens its own request-scoped client
  return entitlementHasProgramAccess(programSlug);
}

/** Can the user open a piece of content? Privileged ⇒ always true; otherwise
 *  delegates to the route-level content rules (public/free/auth/premium). */
export async function canAccessContent(supabase: SupabaseClient, content: ContentRef): Promise<boolean> {
  if (isPublicRoute(content.path) || isFreeChapter(content.path)) return true;
  const user = await getAccessUser(supabase);
  if (isPrivileged(user)) return true;
  if (!user) return false;
  const isPaid = content.premium ? await hasPremiumAccess(supabase) : true;
  return routeCanAccessContent({ id: user.id, isPaid }, content);
}
