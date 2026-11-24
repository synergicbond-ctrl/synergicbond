import { serveGatedHtmlNotes } from "@/lib/notes/htmlNotes";

// Qualitative Salt Analysis: complete notes, one self-contained HTML file — JEE Advanced only.
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  return serveGatedHtmlNotes(request, "qualitative-salt-analysis.html", "jee-advanced-notes");
}
