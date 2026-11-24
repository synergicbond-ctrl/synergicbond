import { serveGatedHtmlNotes } from "@/lib/notes/htmlNotes";

// d- and f-Block Elements: theory and 275 questions. One self-contained HTML file, JEE Advanced only.
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  return serveGatedHtmlNotes(request, "d-and-f-block.html", "jee-advanced-notes");
}
