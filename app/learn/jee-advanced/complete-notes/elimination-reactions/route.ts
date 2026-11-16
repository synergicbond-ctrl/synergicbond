import { serveGatedHtmlNotes } from "@/lib/notes/htmlNotes";

// Elimination Reactions: complete notes, one self-contained HTML file — JEE Advanced only.
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  return serveGatedHtmlNotes(request, "elimination-reactions.html", "jee-advanced-notes");
}
