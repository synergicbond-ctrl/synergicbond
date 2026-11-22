import { serveGatedHtmlNotes } from "@/lib/notes/htmlNotes";

// d- and f-Block Elements: complete notes with 275 questions, one self-contained HTML file — JEE Advanced only.
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  return serveGatedHtmlNotes(request, "d-and-f-block.html", "jee-advanced-notes");
}
