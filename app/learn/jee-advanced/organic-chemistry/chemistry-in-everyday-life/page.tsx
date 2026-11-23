import { permanentRedirect } from "next/navigation";

// Chemistry in Everyday Life is now the complete self-contained HTML notes
// under /learn/jee-advanced/complete-notes. Old URL preserved via permanent redirect.
export default function ChemistryInEverydayLifeRedirect() {
  permanentRedirect("/learn/jee-advanced/complete-notes/chemistry-in-everyday-life");
}
