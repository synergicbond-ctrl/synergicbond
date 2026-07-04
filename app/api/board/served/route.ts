export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { getServedQuestionIds } from "@/lib/cbse/served";

// ─────────────────────────────────────────────────────────────────────────────
// GET /api/board/served?resetAfter=<iso> — the signed-in student's served
// objective-question ids, derived from attempt_answers (non-repetition). No new
// table. `resetAfter` narrows the window so a device-side reset takes effect.
// ─────────────────────────────────────────────────────────────────────────────

export async function GET(req: Request) {
  try {
    const resetAfter = new URL(req.url).searchParams.get("resetAfter") ?? undefined;
    const { ids, hasUser } = await getServedQuestionIds(resetAfter);
    if (!hasUser) return NextResponse.json({ error: "Unauthorized", ids: [] }, { status: 401 });
    return NextResponse.json({ ids });
  } catch (e) {
    console.error("[board/served] failed:", e);
    return NextResponse.json({ ids: [] }, { status: 500 });
  }
}
