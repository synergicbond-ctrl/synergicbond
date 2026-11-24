import { serveGatedHtmlNotes } from "@/lib/notes/htmlNotes";

// Environmental Chemistry: complete 12-part notes. One self-contained HTML file, JEE Advanced only.
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  return serveGatedHtmlNotes(request, "environmental-chemistry.html", "jee-advanced-notes");
}
