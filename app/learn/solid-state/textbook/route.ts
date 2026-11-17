import { readFile } from "node:fs/promises";
import path from "node:path";
import { getUserEntitlements } from "@/lib/access/entitlements";
import { signinRedirect } from "@/lib/access/contentAccess";
import { hasPremiumLearnAccess } from "@/lib/access/premiumLearnPolicy";

// The interactive Solid State textbook: one self-contained HTML file (text, KaTeX, 3D labs and figures inline).
// Route handlers are not wrapped by the chapter layout, so the same Solid State access rule is checked here:
// signed-out readers go to sign-in, readers without the programme go to pricing.
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const { pathname } = new URL(request.url);
  const { hasUser, keys } = await getUserEntitlements();
  if (!hasUser) return Response.redirect(new URL(signinRedirect(pathname), request.url), 307);
  if (!hasPremiumLearnAccess(keys, "solid-state")) {
    return Response.redirect(new URL(`/pricing?next=${encodeURIComponent(pathname)}`, request.url), 307);
  }
  const file = path.join(process.cwd(), "content", "solid-state-html", "solid-state-textbook.html");
  const body = await readFile(file);
  return new Response(new Uint8Array(body), {
    headers: { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "private, no-store", "X-Content-Type-Options": "nosniff" },
  });
}
