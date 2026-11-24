import { serveGatedHtmlNotes } from "@/lib/notes/htmlNotes";

// Alcohols, Phenols and Ethers: complete notes with drawn structures. One self-contained HTML file, JEE Advanced only.
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  return serveGatedHtmlNotes(request, "alcohols-phenols-ethers.html", "jee-advanced-notes");
}
