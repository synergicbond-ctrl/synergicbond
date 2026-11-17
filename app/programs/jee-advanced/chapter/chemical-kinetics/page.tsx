import { redirect } from "next/navigation";

// Chemical Kinetics is now one complete HTML notes file served by a route
// handler under /learn/jee-advanced/complete-notes, so JEE Advanced readers go there.
export default function Page() {
  redirect("/learn/jee-advanced/complete-notes/chemical-kinetics");
}
