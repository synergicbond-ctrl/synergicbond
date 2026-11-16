import { readFile } from "node:fs/promises";
import path from "node:path";
import { getUserEntitlements } from "@/lib/access/entitlements";
import { signinRedirect } from "@/lib/access/contentAccess";
import { hasPremiumLearnAccess, type PremiumLearnChapter } from "@/lib/access/premiumLearnPolicy";

// Complete chapter notes that are published as one self-contained HTML file
// (text, figures, fonts and scripts inline). The files live in
// content/jee-advanced-notes and are listed in next.config.ts
// outputFileTracingIncludes so they ship with each route's function.
//
// Route handlers are not wrapped by layouts, so the premium rule is checked
// here: signed-out readers go to sign-in, readers without the programme go to
// pricing — the same outcome as requirePremiumLearnAccess in a chapter layout.

export const HTML_NOTES_DIR = path.join(process.cwd(), "content", "jee-advanced-notes");

const NO_STORE = { "Cache-Control": "no-store" };

export async function serveGatedHtmlNotes(
  request: Request,
  file: string,
  chapter: PremiumLearnChapter,
): Promise<Response> {
  const { pathname } = new URL(request.url);
  const { hasUser, keys } = await getUserEntitlements();
  if (!hasUser) {
    return Response.redirect(new URL(signinRedirect(pathname), request.url), 307);
  }
  if (!hasPremiumLearnAccess(keys, chapter)) {
    return Response.redirect(new URL(`/pricing?next=${encodeURIComponent(pathname)}`, request.url), 307);
  }
  try {
    const body = await readFile(path.join(HTML_NOTES_DIR, file));
    return new Response(new Uint8Array(body), {
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "Cache-Control": "private, no-store",
        "X-Content-Type-Options": "nosniff",
      },
    });
  } catch {
    return new Response("Not found", { status: 404, headers: NO_STORE });
  }
}
