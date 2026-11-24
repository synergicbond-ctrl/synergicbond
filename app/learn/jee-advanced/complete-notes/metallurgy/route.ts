import { serveGatedHtmlNotes } from "@/lib/notes/htmlNotes";

// Metallurgy (3D studio): complete notes, one self-contained HTML file — JEE Advanced only.
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  return serveGatedHtmlNotes(request, "metallurgy.html", "jee-advanced-notes");
}
