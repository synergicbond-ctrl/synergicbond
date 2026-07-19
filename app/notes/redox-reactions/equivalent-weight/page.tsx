import { permanentRedirect } from "next/navigation";

// The Equivalent Weight & n-Factor unit now lives at lessons 1–5 of the
// 10-lesson Redox Reactions course. Old URL preserved via permanent redirect.
export default function EquivalentWeightRedirect() {
  permanentRedirect("/notes/redox-reactions/part1");
}
