import { readFile } from "node:fs/promises";
import path from "node:path";
import { getPaidContentStatus } from "@/lib/auth/guards";
import { FAMILY_ASSIGNMENTS, isAssignmentChapter } from "@/lib/assignments/registry";

// Serves the p-block family assignment PDFs from content/assignments behind the
// same Pro/privileged rule as the chapter layouts (route handlers are not
// wrapped by layouts). Only file names listed in the registry are served.

export const dynamic = "force-dynamic";

const NO_STORE = { "Cache-Control": "no-store" };

export async function GET(_req: Request, ctx: { params: Promise<{ chapter: string; path: string[] }> }) {
  const status = await getPaidContentStatus();
  if (status === "signed-out") return new Response("Sign in required", { status: 401, headers: NO_STORE });
  if (status === "needs-pro") return new Response("Premium access required", { status: 403, headers: NO_STORE });

  const { chapter, path: segments } = await ctx.params;
  const name = segments.length === 1 ? decodeURIComponent(segments[0]) : "";
  if (!isAssignmentChapter(chapter) || !FAMILY_ASSIGNMENTS[chapter].items.some((i) => i.file === name)) {
    return new Response("Not found", { status: 404, headers: NO_STORE });
  }
  try {
    const body = await readFile(path.join(process.cwd(), "content", "assignments", chapter, name));
    return new Response(new Uint8Array(body), {
      headers: { "Content-Type": "application/pdf", "Content-Disposition": "inline", "Cache-Control": "private, no-store", "X-Content-Type-Options": "nosniff" },
    });
  } catch {
    return new Response("Not found", { status: 404, headers: NO_STORE });
  }
}
