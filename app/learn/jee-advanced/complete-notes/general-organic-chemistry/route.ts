import { serveGatedHtmlNotes } from "@/lib/notes/htmlNotes";

// General Organic Chemistry: complete notes with drawn structures and animations. One self-contained HTML file, JEE Advanced only.
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  return serveGatedHtmlNotes(request, "general-organic-chemistry.html", "jee-advanced-notes");
}
