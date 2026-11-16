import { redirect } from "next/navigation";

// Chemical Kinetics is now one complete HTML notes file served by a route
// handler at /learn/jee-advanced/chemical-kinetics, so send readers there.
export default function Page() {
  redirect("/learn/jee-advanced/chemical-kinetics");
}
