import { redirect } from "next/navigation";

// PHASE 1: /control-center was a duplicate Snap & Solve surface. The hero route is
// /snap-solve (identical components). Permanently route students to the canonical page.
export default function ControlCenterRedirect() {
  redirect("/snap-solve");
}
