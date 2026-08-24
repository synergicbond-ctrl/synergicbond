import { redirect } from "next/navigation";

// Canonical alias — the navbar's "Practice" destination is /pyq
// (see FREE_DESTINATIONS.practice in components/Navbar.tsx). This route
// exists only so a literal /practice URL doesn't 404.
export default function PracticeRedirect() {
  redirect("/pyq");
}
