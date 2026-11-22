import { OLYMPIAD_NOTES_DIR, serveGatedHtmlNotes } from "@/lib/notes/htmlNotes";

// d- and f-Block Elements: complete Olympiad notes (theory + 450 questions),
// one self-contained HTML file — Chemistry Olympiad track only.
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  return serveGatedHtmlNotes(request, "d-and-f-block-elements.html", "olympiad-notes", OLYMPIAD_NOTES_DIR);
}
