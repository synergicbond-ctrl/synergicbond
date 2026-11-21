import { serveGatedHtmlNotes } from "@/lib/notes/htmlNotes";

// Protein secondary structure: 30-scene 3D animation (alpha-helix, beta-pleated sheet) with full notes, one self-contained HTML file — JEE Advanced only.
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  return serveGatedHtmlNotes(request, "protein-secondary-structure.html", "jee-advanced-notes");
}
