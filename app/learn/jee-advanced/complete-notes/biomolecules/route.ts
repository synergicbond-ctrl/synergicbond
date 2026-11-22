import { serveGatedHtmlNotes } from "@/lib/notes/htmlNotes";

// Biomolecules: complete carbohydrate, amino acid, protein and nucleic acid notes, one self-contained HTML file — JEE Advanced only.
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  return serveGatedHtmlNotes(request, "biomolecules.html", "jee-advanced-notes");
}
