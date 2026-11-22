import { serveGatedHtmlNotes } from "@/lib/notes/htmlNotes";

// Chemistry in Everyday Life: complete notes (drugs, drug-target interaction, therapeutic classes, chemicals in food, cleansing agents), one self-contained HTML file — JEE Advanced only.
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  return serveGatedHtmlNotes(request, "chemistry-in-everyday-life.html", "jee-advanced-notes");
}
