import { serveGatedHtmlNotes } from "@/lib/notes/htmlNotes";

// Hydrocarbons — Aromatic substitution (EAS and NAS): complete notes, one self-contained HTML file.
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  return serveGatedHtmlNotes(request, "aromatic-substitution.html", "jee-advanced-notes");
}
