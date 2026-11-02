import { readFile } from "node:fs/promises";
import path from "node:path";
import { getUserEntitlements } from "@/lib/access/entitlements";
import { hasPremiumLearnAccess } from "@/lib/access/premiumLearnPolicy";

// The interactive Solid State textbook: one self-contained HTML file (text, KaTeX, 3D labs and figures inline).
// Route handlers are not wrapped by the chapter layout, so the same Solid State access rule is checked here.
export const dynamic = "force-dynamic";

export async function GET() {
  const { hasUser, keys } = await getUserEntitlements();
  if (!hasUser) return new Response("Sign in required", { status: 401, headers: { "Cache-Control": "no-store" } });
  if (!hasPremiumLearnAccess(keys, "solid-state")) {
    return new Response("Premium access required", { status: 403, headers: { "Cache-Control": "no-store" } });
  }
  const file = path.join(process.cwd(), "content", "solid-state-html", "solid-state-textbook.html");
  const body = await readFile(file);
  return new Response(new Uint8Array(body), {
    headers: { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "private, no-store", "X-Content-Type-Options": "nosniff" },
  });
}
