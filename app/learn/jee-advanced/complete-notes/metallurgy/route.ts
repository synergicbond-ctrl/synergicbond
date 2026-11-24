import { serveGatedHtmlNotes } from "@/lib/notes/htmlNotes";

// Metallurgy: complete notes with six live 3D labs. One self-contained HTML file, JEE Advanced only.
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  return serveGatedHtmlNotes(request, "metallurgy.html", "jee-advanced-notes");
}
