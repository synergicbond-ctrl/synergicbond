import { redirect } from "next/navigation";

// Week 12: the old donate mock-up showed a fabricated fundraising bar and
// non-functional payment buttons (a "no fake data" violation). The honest
// contribution page now lives at /support.
export default function DonatePage() {
  redirect("/support");
}
