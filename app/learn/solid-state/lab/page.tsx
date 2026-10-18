import { redirect } from "next/navigation";

/** The interactive textbook now lives at the chapter root. */
export default function LabRedirect() {
  redirect("/learn/solid-state");
}
