import { serveGatedHtmlNotes } from "@/lib/notes/htmlNotes";

// Qualitative Salt Analysis (v3): complete notes with 3D films, Salt Lab tools in their topics and the 447-question bank. One self-contained HTML file, JEE Advanced only.
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  return serveGatedHtmlNotes(request, "salt-analysis.html", "jee-advanced-notes");
}
