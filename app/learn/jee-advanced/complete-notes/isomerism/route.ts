import { serveGatedHtmlNotes } from "@/lib/notes/htmlNotes";

// Isomerism: complete (structural, geometrical, conformational, optical) notes, one self-contained HTML file — JEE Advanced only.
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  return serveGatedHtmlNotes(request, "isomerism.html", "jee-advanced-notes");
}
