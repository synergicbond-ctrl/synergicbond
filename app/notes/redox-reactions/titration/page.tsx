import { permanentRedirect } from "next/navigation";

// The Titration & Volumetric Analysis unit now lives at lessons 6–10 of the
// 10-lesson Redox Reactions course. Old URL preserved via permanent redirect.
export default function TitrationRedirect() {
  permanentRedirect("/notes/redox-reactions/part6");
}
