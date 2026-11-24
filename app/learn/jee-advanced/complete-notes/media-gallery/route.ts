import { serveGatedHtmlNotes } from "@/lib/notes/htmlNotes";

// Topic Media Gallery: all films, diagrams and labs of Surface Chemistry, Salt Analysis, Metallurgy and Chemistry in Everyday Life. One self-contained HTML file, JEE Advanced only.
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  return serveGatedHtmlNotes(request, "media-gallery.html", "jee-advanced-notes");
}
