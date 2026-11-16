import { serveGatedHtmlNotes } from "@/lib/notes/htmlNotes";

// Chemical Bonding: complete notes, one self-contained HTML file (replaces the 24-lesson course).
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  return serveGatedHtmlNotes(request, "chemical-bonding.html", "chemical-bonding");
}
