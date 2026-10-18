import { readFile } from "node:fs/promises";
import path from "node:path";
import { getUserEntitlements } from "@/lib/access/entitlements";

// Serves the Reaction Intermediates notes (self-contained HTML + A4 PDF) from
// content/reaction-intermediates. The files live outside /public on purpose so
// that they are only reachable through this route, which requires a signed-in
// user (route handlers are not wrapped by layouts, so the check is made here).

export const dynamic = "force-dynamic";

const ROOT = path.join(process.cwd(), "content", "reaction-intermediates");

const FILES: Record<string, { file: string; type: string }> = {
  book: { file: "reaction-intermediates.html", type: "text/html; charset=utf-8" },
  pdf: { file: "reaction-intermediates.pdf", type: "application/pdf" },
};

export async function GET(_req: Request, ctx: { params: Promise<{ name: string }> }) {
  const { hasUser } = await getUserEntitlements();
  if (!hasUser) {
    return new Response("Sign in required", { status: 401, headers: { "Cache-Control": "no-store" } });
  }

  const { name } = await ctx.params;
  const entry = FILES[name];
  if (!entry) {
    return new Response("Not found", { status: 404, headers: { "Cache-Control": "no-store" } });
  }

  try {
    const body = await readFile(path.join(ROOT, entry.file));
    return new Response(new Uint8Array(body), {
      headers: {
        "Content-Type": entry.type,
        "Content-Disposition": name === "pdf" ? 'inline; filename="Reaction-Intermediates-JEE-Advanced.pdf"' : "inline",
        "Cache-Control": "private, no-store",
        "X-Content-Type-Options": "nosniff",
      },
    });
  } catch {
    return new Response("Not found", { status: 404, headers: { "Cache-Control": "no-store" } });
  }
}
