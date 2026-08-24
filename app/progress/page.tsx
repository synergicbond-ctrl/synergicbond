import { redirect } from "next/navigation";

// Canonical alias — the navbar's "Progress" destination is /performance
// (see FREE_DESTINATIONS.progress in components/Navbar.tsx). This route
// exists only so a literal /progress URL doesn't 404.
export default function ProgressRedirect() {
  redirect("/performance");
}
