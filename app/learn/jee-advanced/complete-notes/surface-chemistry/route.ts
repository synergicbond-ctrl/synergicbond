import { serveGatedHtmlNotes } from "@/lib/notes/htmlNotes";

// Surface Chemistry (3D studio): complete notes, one self-contained HTML file — JEE Advanced only.
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  return serveGatedHtmlNotes(request, "surface-chemistry.html", "jee-advanced-notes");
}
