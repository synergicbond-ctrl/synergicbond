import { submitAttempt, getUserAttempts, getAttemptWithAnswers } from "@/lib/attempts/store";
import { summarizeAnswers } from "@/lib/attempts/scoring";
import type { AttemptSource } from "@/lib/attempts/schema";

// ─────────────────────────────────────────────────────────────────────────────
// /api/attempts (Roadmap V2 · Week 5A)
//   POST        — save one attempt session (exam paper / test answer /
//                 practice answer). Correctness for PYQ-bank questions is
//                 derived server-side from the SSOT.
//   GET         — the signed-in user's sessions (?source=&exam=&limit=).
//   GET ?id=    — one session + ordered answers + scoring summary (review).
// Follows the auth pattern of app/api/mistake/route.ts.
// ─────────────────────────────────────────────────────────────────────────────

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const result = await submitAttempt(body);
    if (result.error === "Unauthorized") return Response.json({ error: result.error }, { status: 401 });
    if (result.error === "Invalid attempt payload") return Response.json({ error: result.error }, { status: 400 });
    if (result.error !== null) return Response.json({ error: result.error }, { status: 500 });
    return Response.json({ attempt: result.data.attempt, summary: summarizeAnswers(result.data.answers) });
  } catch (e) {
    console.error("[attempts] POST failed:", e);
    return Response.json({ error: "failed" }, { status: 500 });
  }
}

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const id = url.searchParams.get("id");

    if (id) {
      const result = await getAttemptWithAnswers(id);
      if (result.error === "Unauthorized") return Response.json({ error: result.error }, { status: 401 });
      if (result.error === "Not found") return Response.json({ error: result.error }, { status: 404 });
      if (result.error !== null) return Response.json({ error: result.error }, { status: 500 });
      return Response.json({ ...result.data, summary: summarizeAnswers(result.data.answers) });
    }

    const limitParam = Number(url.searchParams.get("limit"));
    const { data, error } = await getUserAttempts({
      source: (url.searchParams.get("source") as AttemptSource) ?? undefined,
      exam: url.searchParams.get("exam") ?? undefined,
      limit: Number.isFinite(limitParam) && limitParam > 0 ? limitParam : undefined,
    });
    if (error === "Unauthorized") return Response.json({ error }, { status: 401 });
    if (error) return Response.json({ error }, { status: 500 });
    return Response.json({ attempts: data });
  } catch (e) {
    console.error("[attempts] GET failed:", e);
    return Response.json({ error: "failed" }, { status: 500 });
  }
}
