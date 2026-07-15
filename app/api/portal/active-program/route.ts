import { NextResponse } from "next/server";
import {
  ACTIVE_PROGRAM_COOKIE,
  canonicalizeProgramKey,
  getActiveProgramContext,
  portalDestinations,
} from "@/lib/portal/activeProgram";

// ─────────────────────────────────────────────────────────────────────────────
// /api/portal/active-program — Active Program preference endpoint.
//
//   GET  → the signed-in user's validated portal context (entitled programs,
//          active program, switcher state). Exposes only program keys/names
//          the server has verified the user owns — no ids, tokens or billing.
//   POST → { programKey } switches the active program. The key must resolve
//          to one of the user's entitled programs; anything else is rejected
//          (the cookie is a preference, never an authorisation bypass).
//
// Cookie: httpOnly + SameSite=Lax + Secure (prod) + path=/ — readable only by
// the server, so client state can never grant entitlement.
// ─────────────────────────────────────────────────────────────────────────────

export const dynamic = "force-dynamic";

const COOKIE_OPTS = {
  httpOnly: true,
  sameSite: "lax" as const,
  secure: process.env.NODE_ENV === "production",
  path: "/",
  maxAge: 60 * 60 * 24 * 180, // 180 days — a preference, not a credential
};

export async function GET() {
  const ctx = await getActiveProgramContext();
  if (!ctx.hasUser) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  return NextResponse.json({
    entitledPrograms: ctx.entitledPrograms.map(({ key, name, category, href, source }) => ({
      key, name, category, href, source,
    })),
    activeProgram: ctx.activeProgram
      ? { key: ctx.activeProgram.key, name: ctx.activeProgram.name, href: ctx.activeProgram.href }
      : null,
    activeProgramAccessSource: ctx.activeProgramAccessSource,
    isAllAccess: ctx.isAllAccess,
    canSwitchPrograms: ctx.canSwitchPrograms,
    destinations: portalDestinations(ctx),
  });
}

export async function POST(req: Request) {
  let programKey: unknown;
  try {
    ({ programKey } = await req.json());
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const canonical = canonicalizeProgramKey(programKey);
  if (!canonical) {
    return NextResponse.json({ error: "Unknown program" }, { status: 400 });
  }

  const ctx = await getActiveProgramContext();
  if (!ctx.hasUser) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Server-side entitlement check — the ONLY path that can set the cookie.
  const entitled = ctx.entitledPrograms.find((p) => p.key === canonical);
  if (!entitled) {
    return NextResponse.json({ error: "Not entitled to this program" }, { status: 403 });
  }

  const res = NextResponse.json({
    ok: true,
    activeProgram: { key: entitled.key, name: entitled.name, href: entitled.href },
  });
  res.cookies.set(ACTIVE_PROGRAM_COOKIE, entitled.key, COOKIE_OPTS);
  return res;
}
