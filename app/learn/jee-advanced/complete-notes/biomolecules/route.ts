import { serveGatedHtmlNotes } from "@/lib/notes/htmlNotes";

// Biomolecules: complete notes. One self-contained HTML file, JEE Advanced only.
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  return serveGatedHtmlNotes(request, "biomolecules.html", "jee-advanced-notes");
}
