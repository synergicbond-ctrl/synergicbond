import { serveGatedHtmlNotes } from "@/lib/notes/htmlNotes";

// Polymers: interactive master textbook with the 3D chain lab. One self-contained HTML file, JEE Advanced only.
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  return serveGatedHtmlNotes(request, "polymers.html", "jee-advanced-notes");
}
