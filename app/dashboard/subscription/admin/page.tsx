import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export default function AdminAnalyticsPage() {
  // Disabled for security hardening (no secure admin role config exists yet).
  // Returning 404 Not Found to prevent exposing platform metrics.
  notFound();
}
