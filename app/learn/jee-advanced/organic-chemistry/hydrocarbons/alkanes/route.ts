import { serveGatedHtmlNotes } from "@/lib/notes/htmlNotes";

// Hydrocarbons — Alkanes: complete notes, one self-contained HTML file.
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  return serveGatedHtmlNotes(request, "alkanes.html", "jee-advanced-notes");
}
