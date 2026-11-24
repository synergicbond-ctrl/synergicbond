import { serveGatedHtmlNotes } from "@/lib/notes/htmlNotes";

// Surface Chemistry: complete notes with 21 live 3D films and animated plates. One self-contained HTML file, JEE Advanced only.
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  return serveGatedHtmlNotes(request, "surface-chemistry.html", "jee-advanced-notes");
}
