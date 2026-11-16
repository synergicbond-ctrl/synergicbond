import { serveGatedHtmlNotes } from "@/lib/notes/htmlNotes";

// Hydrocarbons — Alkenes and Alkynes: complete notes, one self-contained HTML file.
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  return serveGatedHtmlNotes(request, "alkenes-alkynes.html", "jee-advanced-notes");
}
