import { redirect } from "next/navigation";

// Legacy duplicate route — canonical Mole Concept content lives at
// /notes/mole-concept (15-lesson AppShell course). This route had zero
// internal links; redirecting eliminates the architectural duplicate.
export default function LegacyMoleConceptRedirect() {
  redirect("/notes/mole-concept");
}
