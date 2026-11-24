import { serveGatedHtmlNotes } from "@/lib/notes/htmlNotes";

// Qualitative Salt Analysis: complete notes with 3D films and the Salt Lab. One self-contained HTML file, JEE Advanced only.
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  return serveGatedHtmlNotes(request, "salt-analysis.html", "jee-advanced-notes");
}
