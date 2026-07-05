import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import SubscriptionDashboardClient from "@/components/subscription/SubscriptionDashboardClient";

export const dynamic = "force-dynamic";

function getTimestamp() {
  return Date.now();
}

export default async function SubscriptionDashboardPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/auth/signin?next=/dashboard/subscription");
  }

  // Get current Pro subscription status
  const { data: subscription } = await supabase
    .from("subscriptions")
    .select("plan, status, expires_at, created_at, updated_at")
    .eq("user_id", user.id)
    .maybeSingle();

  // Get current granular entitlements
  const { data: entitlements } = await supabase
    .from("user_program_entitlements")
    .select("program_key, status, expires_at, created_at, updated_at")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false });

  // Map to correct shapes defensively
  const userSub = subscription ? {
    plan: subscription.plan,
    status: subscription.status,
    expires_at: subscription.expires_at,
    created_at: subscription.created_at,
    updated_at: subscription.updated_at,
  } : null;

  const userEntitlements = (entitlements || []).map(ent => ({
    program_key: ent.program_key,
    status: ent.status,
    expires_at: ent.expires_at,
    created_at: ent.created_at,
    updated_at: ent.updated_at,
  }));

  const nowMs = getTimestamp();

  return (
    <main className="min-h-screen bg-[#0B0F19] text-white py-12">
      <SubscriptionDashboardClient 
        user={{ id: user.id, email: user.email }}
        subscription={userSub}
        entitlements={userEntitlements}
        nowMs={nowMs}
      />
    </main>
  );
}
