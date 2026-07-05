import Link from "next/link";
import { redirect } from "next/navigation";
import {
  User, Mail, Phone, Calendar, GraduationCap, Target, CreditCard,
  ShieldCheck, Clock, ArrowLeft, CheckCircle2,
} from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import { getUserEntitlements } from "@/lib/access/entitlements";
import { getRole, isPrivileged } from "@/lib/auth/roles";
import { COMING_SOON_PROGRAM_KEYS } from "@/lib/subscription";
import { classLabel, boardLabel } from "@/lib/studentOptions";
import { resolveOwnedPrograms } from "@/components/dashboard/MyPrograms";
import ProfileEditForm from "@/components/dashboard/ProfileEditForm";

export const dynamic = "force-dynamic";

function getTimestamp() {
  return Date.now();
}

// Student profile — real data only, straight from the existing profiles /
// subscriptions / entitlements schema. Role comes from profiles.role (016);
// no email checks anywhere.
export default async function ProfilePage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/auth/signin?next=/dashboard/profile");

  const [{ data: profile }, { data: subscription }, entitlements, role] = await Promise.all([
    supabase
      .from("profiles")
      .select("full_name, email, phone, date_of_birth, class_standard, board_program, created_at")
      .eq("id", user.id)
      .maybeSingle(),
    supabase
      .from("subscriptions")
      .select("plan, status, expires_at")
      .eq("user_id", user.id)
      .maybeSingle(),
    getUserEntitlements(),
    getRole(supabase, user.id),
  ]);

  const privileged = isPrivileged({ id: user.id, role });
  const ownedPrograms = resolveOwnedPrograms(entitlements.keys, {
    isOwner: privileged,
    comingSoonKeys: COMING_SOON_PROGRAM_KEYS,
  });

  const nowMs = getTimestamp();
  const proActive =
    subscription?.status === "active" &&
    !!subscription.expires_at &&
    new Date(subscription.expires_at).getTime() > nowMs;

  const subscriptionLabel = privileged
    ? `${role === "owner" ? "Owner" : "Admin"} — all-access (no subscription needed)`
    : proActive
      ? subscription!.plan === "founder"
        ? "Founder Access — All Programs"
        : subscription!.plan === "pro_annual"
          ? "Pro Annual All-Access"
          : "Pro Monthly All-Access"
      : ownedPrograms.length > 0
        ? `${ownedPrograms.length} program${ownedPrograms.length > 1 ? "s" : ""} active`
        : "Free Tier";

  const joined = profile?.created_at
    ? new Date(profile.created_at).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" })
    : null;
  const dob = profile?.date_of_birth
    ? new Date(profile.date_of_birth).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" })
    : null;

  const displayName = profile?.full_name || user.email?.split("@")[0] || "Student";

  const infoRows: { icon: React.ReactNode; label: string; value: string | null }[] = [
    { icon: <User className="h-4 w-4" />, label: "Name", value: profile?.full_name ?? null },
    { icon: <Mail className="h-4 w-4" />, label: "Email", value: profile?.email || user.email || null },
    { icon: <Phone className="h-4 w-4" />, label: "Phone", value: profile?.phone ?? null },
    { icon: <Calendar className="h-4 w-4" />, label: "Date of birth", value: dob },
    { icon: <GraduationCap className="h-4 w-4" />, label: "Class", value: classLabel(profile?.class_standard) },
    { icon: <Target className="h-4 w-4" />, label: "Board / Exam target", value: boardLabel(profile?.board_program) },
    { icon: <Clock className="h-4 w-4" />, label: "Joined", value: joined },
  ];

  return (
    <main className="min-h-screen bg-[#0B0F19] text-white py-10">
      <div className="max-w-3xl mx-auto px-4">
        <Link
          href="/dashboard"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-white/50 hover:text-white transition mb-6"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> Back to Dashboard
        </Link>

        {/* Identity header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.06] pb-6 mb-8">
          <div className="flex items-center gap-4">
            <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-cyan-500/25 to-purple-500/25 border border-cyan-400/20 flex items-center justify-center text-xl font-black text-cyan-300">
              {displayName.charAt(0).toUpperCase()}
            </div>
            <div>
              <h1 className="text-2xl font-black tracking-tight flex items-center gap-2">
                {displayName}
                {privileged && (
                  <span className="px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-wider bg-cyan-500/15 text-cyan-300 flex items-center gap-1">
                    <ShieldCheck className="h-3 w-3" /> {role}
                  </span>
                )}
              </h1>
              <p className="text-white/50 text-xs mt-0.5">{subscriptionLabel}</p>
            </div>
          </div>
          <ProfileEditForm
            userId={user.id}
            initial={{
              full_name: profile?.full_name ?? "",
              phone: profile?.phone ?? "",
              date_of_birth: profile?.date_of_birth ?? "",
              class_standard: profile?.class_standard ?? "",
              board_program: profile?.board_program ?? "",
            }}
          />
        </div>

        {/* Personal information */}
        <section className="mb-8">
          <h2 className="text-sm font-black text-white/40 uppercase tracking-widest mb-4">Personal Information</h2>
          <div className="rounded-2xl border border-white/[0.08] bg-[#111827] divide-y divide-white/[0.04]">
            {infoRows.map((row) => (
              <div key={row.label} className="flex items-center justify-between gap-4 px-5 py-3.5">
                <span className="flex items-center gap-2.5 text-xs font-bold text-white/50">
                  <span className="text-cyan-400/70">{row.icon}</span> {row.label}
                </span>
                <span className="text-sm font-semibold text-white text-right">
                  {row.value ?? <span className="text-white/30 font-normal">Not added yet</span>}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Subscription + programs */}
        <section>
          <h2 className="text-sm font-black text-white/40 uppercase tracking-widest mb-4">Subscription &amp; Programs</h2>
          <div className="rounded-2xl border border-white/[0.08] bg-[#111827] p-5">
            <div className="flex items-center justify-between gap-4 pb-4 border-b border-white/[0.04]">
              <span className="flex items-center gap-2.5 text-xs font-bold text-white/50">
                <CreditCard className="h-4 w-4 text-cyan-400/70" /> Subscription status
              </span>
              <span className="text-sm font-black text-cyan-300">{subscriptionLabel}</span>
            </div>

            {ownedPrograms.length === 0 ? (
              <div className="pt-4 text-xs text-white/50">
                No subscribed programs yet.{" "}
                <Link href="/pricing" className="text-cyan-300 font-bold hover:text-cyan-200 transition">
                  Browse programs →
                </Link>
              </div>
            ) : (
              <ul className="pt-4 space-y-2.5">
                {ownedPrograms.map((p) => (
                  <li key={p.key} className="flex items-center justify-between gap-3 text-sm">
                    <span className="flex items-center gap-2 font-semibold text-white">
                      <CheckCircle2 className="h-3.5 w-3.5 text-green-400 flex-shrink-0" /> {p.name}
                    </span>
                    <span className="text-[10px] font-black uppercase tracking-wider text-white/40">
                      {p.comingSoon ? "Coming Soon" : p.ownerPreview ? "Owner preview" : "Active"}
                    </span>
                  </li>
                ))}
              </ul>
            )}

            <div className="pt-4 mt-1">
              <Link
                href="/dashboard/subscription"
                className="text-xs font-bold text-cyan-300 hover:text-cyan-200 transition"
              >
                Manage subscription →
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
