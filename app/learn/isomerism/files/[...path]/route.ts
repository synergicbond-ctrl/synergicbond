import { readFile } from "node:fs/promises";
import path from "node:path";
import { getUserEntitlements } from "@/lib/access/entitlements";
import { hasPremiumLearnAccess } from "@/lib/access/premiumLearnPolicy";

// Serves Isomerism PDFs / HTML tools from content/isomerism-resources behind
// the same entitlement the /learn/isomerism layout enforces. Route handlers
// are not wrapped by layouts, so the check is repeated here.

export const dynamic = "force-dynamic";

const ROOT = path.join(process.cwd(), "content", "isomerism-resources");

const TYPES: Record<string, string> = {
  ".pdf": "application/pdf",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
};

export async function GET(_req: Request, ctx: { params: Promise<{ path: string[] }> }) {
  const { hasUser, keys } = await getUserEntitlements();
  if (!hasUser) return new Response("Sign in required", { status: 401, headers: { "Cache-Control": "no-store" } });
  if (!hasPremiumLearnAccess(keys, "isomerism")) {
    return new Response("Premium access required", { status: 403, headers: { "Cache-Control": "no-store" } });
  }

  const { path: segments } = await ctx.params;
  const target = path.resolve(ROOT, ...segments.map((s) => decodeURIComponent(s)));
  const type = TYPES[path.extname(target).toLowerCase()];
  if (!type || (target !== ROOT && !target.startsWith(ROOT + path.sep))) {
    return new Response("Not found", { status: 404, headers: { "Cache-Control": "no-store" } });
  }

  try {
    const body = await readFile(target);
    return new Response(new Uint8Array(body), {
      headers: {
        "Content-Type": type,
        "Content-Disposition": "inline",
        "Cache-Control": "private, no-store",
        "X-Content-Type-Options": "nosniff",
      },
    });
  } catch {
    return new Response("Not found", { status: 404, headers: { "Cache-Control": "no-store" } });
  }
}
