import { serveGatedHtmlNotes } from "@/lib/notes/htmlNotes";

// Chemical Kinetics: complete notes, one self-contained HTML file — JEE Advanced only.
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  return serveGatedHtmlNotes(request, "chemical-kinetics.html", "jee-advanced-notes");
}
