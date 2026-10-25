import { notFound } from "next/navigation";
/** Development-only pilot routes. Production never serves them. */
export function devOnly() {
  if (process.env.NODE_ENV === "production") notFound();
}
