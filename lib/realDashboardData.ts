import { supabase } from "@/lib/supabase";

export async function fetchRealDashboardData(userId: string) {
  // Fetch real analytics, tests, and progress mapped to the authenticated user ID
  const { data: analytics, error } = await supabase
    .from("analytics") // Adjust to your actual analytics/progress table name
    .select("*")
    .eq("user_id", userId)
    .single();

  if (error) {
    console.error("Error fetching user data:", error);
    return null;
  }

  return analytics;
}
