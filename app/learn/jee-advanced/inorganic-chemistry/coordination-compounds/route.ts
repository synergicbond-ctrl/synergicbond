import { serveGatedHtmlNotes } from "@/lib/notes/htmlNotes";

// Coordination Compounds: complete notes, one self-contained HTML file.
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  return serveGatedHtmlNotes(request, "coordination-compounds.html", "jee-advanced-notes");
}
