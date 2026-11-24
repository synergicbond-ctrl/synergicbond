import { serveGatedHtmlNotes } from "@/lib/notes/htmlNotes";

// Thermodynamics: animated 30-part course. One self-contained HTML file, JEE Advanced only.
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  return serveGatedHtmlNotes(request, "thermodynamics.html", "jee-advanced-notes");
}
