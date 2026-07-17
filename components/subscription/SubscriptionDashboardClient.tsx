"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  CreditCard, AlertTriangle, CheckCircle2, 
  Sparkles, Lock, ArrowRight, RefreshCw, ShieldAlert, BadgeAlert 
} from "lucide-react";
import PaymentGateway from "@/components/PaymentGateway";
import StudentDetailsForm from "@/components/StudentDetailsForm";
import { PLANS, PROGRAM_ACCESS_PRICE_PAISE_BY_KEY, COMING_SOON_PROGRAM_KEYS, COMING_SOON_NOTE } from "@/lib/subscription";
import { programKeyToHref, PROGRAM_CATALOG } from "@/lib/programs";

type UserSub = {
  plan: string | null;
  status: string;
  expires_at: string | null;
  created_at?: string;
  updated_at?: string;
};

type UserEntitlement = {
  program_key: string;
  status: string;
  expires_at: string | null;
  created_at: string;
  updated_at: string;
};

type Props = {
  user: { id: string; email?: string } | null;
  subscription: UserSub | null;
  entitlements: UserEntitlement[];
  nowMs: number;
  /** Owner role; used only to label a role-based all-access card. */
  isOwner?: boolean;
  /** Owner/admin role → may open the admin console. */
  isStaff?: boolean;
};

export default function SubscriptionDashboardClient({ user, subscription, entitlements, nowMs, isOwner = false, isStaff = false }: Props) {
  const [selectedPlan, setSelectedPlan] = useState<{ id: string; name: string; amount: number; isProgram: boolean } | null>(null);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [gatewayOpen, setGatewayOpen] = useState(false);
  const [consentChecked, setConsentChecked] = useState(false);

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] text-center p-6">
        <Lock className="h-12 w-12 text-cyan-400 mb-4" />
        <h2 className="text-xl font-black">Authentication Required</h2>
        <p className="text-white/60 text-sm mt-2 max-w-sm">Please sign in to view and manage your subscriptions.</p>
        <a href="/auth/signin?next=/dashboard/subscription" className="mt-4 px-6 py-2.5 rounded-xl bg-cyan-500 text-black font-bold hover:opacity-90 transition">
          Sign In
        </a>
      </div>
    );
  }

  // Active Pro Subscription
  const isPro = subscription?.status === "active" && subscription?.expires_at && new Date(subscription.expires_at).getTime() > nowMs;
  // Owner/admin get unrestricted all-access at the application layer — treated
  // exactly like Pro here, but never shown purchase/upgrade prompts.
  const roleAllAccess = isStaff;
  const allAccess = roleAllAccess || Boolean(isPro);
  const proDaysRemaining = isPro && subscription?.expires_at
    ? Math.max(0, Math.ceil((new Date(subscription.expires_at).getTime() - nowMs) / 86_400_000))
    : 0;

  // Founder/owner grant — an all-access Pro provisioned manually (source of the
  // grant lives on user_program_entitlements.source='grant'); labelled distinctly.
  const isFounder = subscription?.plan === "founder";
  const planLabel = isFounder ? "FOUNDER ACCESS" : subscription?.plan === "pro_annual" ? "PRO ANNUAL" : "PRO MONTHLY";
  const planName = isFounder ? "Founder Access — All Programs" : subscription?.plan === "pro_annual" ? "Pro Annual All-Access" : "Pro Monthly All-Access";

  // Active Entitlements map (only includes non-expired, active entitlements)
  const activeEntitlements = entitlements.filter(e => {
    if (e.status !== "active") return false;
    if (!e.expires_at) return true; // lifetime
    return new Date(e.expires_at).getTime() > nowMs;
  });

  const getEntitlementDaysRemaining = (expiresAt: string | null) => {
    if (!expiresAt) return Infinity;
    return Math.max(0, Math.ceil((new Date(expiresAt).getTime() - nowMs) / 86_400_000));
  };

  // Check if a specific program key is active
  const isProgramActive = (key: string) => {
    return activeEntitlements.some(e => e.program_key === key);
  };

  const getProgramEntitlement = (key: string) => {
    return activeEntitlements.find(e => e.program_key === key);
  };

  // Program catalogue from the SSOT (lib/programs.ts); prices derive from the
  // paise map so nothing is duplicated. `comingSoon` programs (State Boards)
  // keep their row but are not purchasable — no price, no Add Plan, no checkout.
  const PROGRAMS_LIST = PROGRAM_CATALOG.map((p) => ({
    ...p,
    price: (PROGRAM_ACCESS_PRICE_PAISE_BY_KEY[p.key] ?? 49900) / 100,
    comingSoon: COMING_SOON_PROGRAM_KEYS.has(p.key),
  }));

  // Expiry Center filtering (expiring in <= 30 days)
  const expiringItems = [];

  if (isPro && proDaysRemaining <= 30) {
    expiringItems.push({
      id: subscription!.plan!,
      name: planName,
      days: proDaysRemaining,
      isProgram: false,
      amount: subscription!.plan === "pro_annual" ? PLANS.pro_annual.amount : PLANS.pro_monthly.amount
    });
  }

  for (const ent of activeEntitlements) {
    if (ent.expires_at) {
      const days = getEntitlementDaysRemaining(ent.expires_at);
      if (days <= 30) {
        const progInfo = PROGRAMS_LIST.find(p => p.key === ent.program_key);
        expiringItems.push({
          id: ent.program_key,
          name: progInfo?.name || ent.program_key.toUpperCase().replace(":", " "),
          days,
          isProgram: true,
          amount: PROGRAM_ACCESS_PRICE_PAISE_BY_KEY[ent.program_key] || 49900
        });
      }
    }
  }

  // Handle click on Buy/Renew
  const initiatePurchase = (id: string, name: string, amount: number, isProgram: boolean) => {
    setSelectedPlan({ id, name, amount, isProgram });
    setConsentChecked(false);
    setDetailsOpen(true);
  };

  const handleConfirm = () => {
    setConfirmOpen(false);
    setGatewayOpen(true);
  };

  const formatDate = (dateStr: string | null) => {
    if (!dateStr) return "Lifetime";
    return new Date(dateStr).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric"
    });
  };

  // One row in the "Upgrade & Add Programs" catalogue. Handles three states:
  //  • comingSoon (State Boards) → neutral badge + note, never purchasable.
  //  • role all-access           → "Preview" (unlocked), no purchase prompt.
  //  • normal user               → price + Add Plan / Owned.
  const renderProgramRow = (p: (typeof PROGRAMS_LIST)[number], blurb: string) => {
    const active = isProgramActive(p.key);
    return (
      <div key={p.key} className="flex items-center justify-between border-b border-white/[0.04] pb-3 last:border-0 last:pb-0">
        <div>
          <h4 className="font-bold text-white text-sm">{p.name}</h4>
          <p className="text-xs text-white/40 mt-0.5">{p.comingSoon ? COMING_SOON_NOTE : blurb}</p>
        </div>
        <div className="text-right">
          {p.comingSoon ? (
            // State Boards: owner may open the dashboard shell to preview safely;
            // normal users see an inert Coming Soon badge (no route, no checkout).
            roleAllAccess ? (
              <Link
                href={programKeyToHref(p.key)}
                className="inline-block px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider bg-white/[0.06] text-white/60 hover:bg-white/10 hover:text-white/80 transition"
              >
                Coming Soon · Preview
              </Link>
            ) : (
              <span className="inline-block px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider bg-white/[0.06] text-white/60">
                Coming Soon
              </span>
            )
          ) : roleAllAccess ? (
            // Owner/admin: no checkout — open the same experience a subscriber gets.
            <Link
              href={programKeyToHref(p.key)}
              className="inline-block px-4 py-1.5 rounded-lg text-xs font-extrabold bg-cyan-500 hover:bg-cyan-400 text-black transition"
            >
              Preview →
            </Link>
          ) : (
            <>
              <div className="font-black text-cyan-400 text-sm">₹{p.price}</div>
              <button
                disabled={active}
                onClick={() => initiatePurchase(p.key, p.name, p.price * 100, true)}
                className={`mt-1.5 px-4 py-1.5 rounded-lg font-extrabold text-xs transition ${
                  active
                    ? "bg-white/10 text-white/40 cursor-not-allowed"
                    : "bg-cyan-500 hover:bg-cyan-400 text-black"
                }`}
              >
                {active ? "Owned" : "Add Plan"}
              </button>
            </>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Expiry Center Alert Banner */}
      {expiringItems.length > 0 && (
        <div className="mb-8 space-y-3">
          <div className="flex items-center gap-2 text-amber-400 font-extrabold uppercase tracking-wider text-xs mb-1">
            <BadgeAlert className="h-4 w-4" /> Expiring Soon Center
          </div>
          {expiringItems.map(item => (
            <div 
              key={item.id} 
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 rounded-2xl border border-amber-500/30 bg-amber-500/5 backdrop-blur-sm"
            >
              <div className="flex gap-3">
                <AlertTriangle className="h-5 w-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-black text-white text-sm sm:text-base">{item.name}</h4>
                  <p className="text-white/60 text-xs mt-1">
                    Your access expires in <span className="text-amber-400 font-extrabold">{item.days} days</span> ({formatDate(
                      item.isProgram ? getProgramEntitlement(item.id)?.expires_at || null : subscription?.expires_at || null
                    )}). Renew now to extend access without interruption.
                  </p>
                </div>
              </div>
              <button 
                onClick={() => initiatePurchase(item.id, item.name, item.amount, item.isProgram)}
                className="w-full sm:w-auto px-5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs transition flex items-center justify-center gap-1.5"
              >
                <RefreshCw className="h-3.5 w-3.5" /> Renew Plan
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Hero Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-white/[0.06] pb-6 mb-8">
        <div>
          <h1 className="text-3xl font-black tracking-tight">Subscription Management</h1>
          <p className="text-white/50 text-sm mt-1">View active entitlements, renew plans, or upgrade to new programs.</p>
        </div>
        {isStaff && (
          <Link
            href="/dashboard/subscription/admin"
            className="px-4 py-2 rounded-xl border border-cyan-400/30 bg-cyan-500/10 text-cyan-300 font-bold text-xs hover:bg-cyan-500/20 transition flex items-center gap-1.5"
          >
            <Sparkles className="h-3.5 w-3.5" /> Admin Analytics
          </Link>
        )}
      </div>

      {/* My Plans Area */}
      <section className="mb-10">
        <h2 className="text-lg font-black mb-4 flex items-center gap-2">
          <CreditCard className="h-5 w-5 text-cyan-400" /> My Active Plans
        </h2>

        {!allAccess && activeEntitlements.length === 0 ? (
          <div className="p-8 rounded-3xl border border-white/[0.06] bg-[#111827] text-center max-w-lg mx-auto">
            <Lock className="h-10 w-10 text-white/30 mx-auto mb-3" />
            <h3 className="font-bold">No Active Subscriptions</h3>
            <p className="text-white/50 text-xs mt-1 leading-relaxed">
              You are currently on the Free Tier. Unlock exam prep programs below or upgrade to Pro for absolute all-access.
            </p>
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {/* Owner / Admin all-access card (role-based, no subscription needed) */}
            {roleAllAccess && !isPro && (
              <div className="relative overflow-hidden rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-cyan-950/20 to-sky-950/20 p-5 shadow-lg">
                <div className="absolute top-0 right-0 bg-cyan-500 text-black text-[9px] font-black px-3 py-1 rounded-bl-xl uppercase tracking-wider">
                  All-Access
                </div>
                <h3 className="font-black text-cyan-300 text-lg uppercase tracking-wide">
                  {isOwner ? "Owner Access" : "Admin Access"}
                </h3>
                <div className="mt-3 space-y-2 text-xs text-white/70">
                  <div className="flex justify-between">
                    <span>Access</span>
                    <span className="font-bold text-cyan-300">All programs &amp; tools</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Expires on</span>
                    <span className="font-bold text-white">Never</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Renewal Status</span>
                    <span className="text-green-400 font-bold flex items-center gap-1">
                      <CheckCircle2 className="h-3.5 w-3.5" /> Active
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Pro Subscription Card */}
            {isPro && (
              <div className="relative overflow-hidden rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-cyan-950/20 to-sky-950/20 p-5 shadow-lg">
                <div className="absolute top-0 right-0 bg-cyan-500 text-black text-[9px] font-black px-3 py-1 rounded-bl-xl uppercase tracking-wider">
                  All-Access
                </div>
                <h3 className="font-black text-cyan-300 text-lg uppercase tracking-wide">
                  {planLabel}
                </h3>
                <div className="mt-3 space-y-2 text-xs text-white/70">
                  <div className="flex justify-between">
                    <span>Days remaining</span>
                    <span className="font-bold text-cyan-300">{isFounder ? "Lifetime" : `${proDaysRemaining} days`}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Expires on</span>
                    <span className="font-bold text-white">{isFounder ? "Never" : formatDate(subscription!.expires_at)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Renewal Status</span>
                    <span className="text-green-400 font-bold flex items-center gap-1">
                      <CheckCircle2 className="h-3.5 w-3.5" /> Active
                    </span>
                  </div>
                </div>
                {!isFounder && (
                  <button
                    onClick={() => initiatePurchase(
                      subscription!.plan!,
                      planName,
                      subscription!.plan === "pro_annual" ? PLANS.pro_annual.amount : PLANS.pro_monthly.amount,
                      false
                    )}
                    className="w-full mt-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-extrabold text-xs transition"
                  >
                    Extend Subscription
                  </button>
                )}
              </div>
            )}

            {/* Individual Program Cards */}
            {activeEntitlements.map(ent => {
              const progInfo = PROGRAMS_LIST.find(p => p.key === ent.program_key);
              const days = getEntitlementDaysRemaining(ent.expires_at);
              const isInfinite = days === Infinity;

              return (
                <div key={ent.program_key} className="rounded-2xl border border-white/[0.08] bg-[#111827] p-5">
                  <h3 className="font-black text-white text-base leading-tight">
                    {progInfo?.name || ent.program_key.toUpperCase().replace(":", " ")}
                  </h3>
                  <div className="mt-4 space-y-2 text-xs text-white/70">
                    <div className="flex justify-between">
                      <span>Days remaining</span>
                      <span className="font-bold text-white">
                        {isInfinite ? "Lifetime" : `${days} days`}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Expires on</span>
                      <span className="font-bold text-white">{formatDate(ent.expires_at)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Purchase Date</span>
                      <span className="font-bold text-white">{formatDate(ent.created_at)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Renewal Status</span>
                      <span className="text-green-400 font-bold flex items-center gap-1">
                        <CheckCircle2 className="h-3.5 w-3.5" /> Active
                      </span>
                    </div>
                  </div>
                  {!isInfinite && (
                    <button 
                      onClick={() => initiatePurchase(
                        ent.program_key,
                        progInfo?.name || ent.program_key,
                        PROGRAM_ACCESS_PRICE_PAISE_BY_KEY[ent.program_key] || 49900,
                        true
                      )}
                      className="w-full mt-4 py-2 rounded-xl border border-white/10 hover:border-white/20 text-white font-extrabold text-xs transition bg-white/5"
                    >
                      Extend Access (1 Year)
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* Upgrade Engine */}
      <section>
        <h2 className="text-lg font-black mb-4 flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-cyan-400" /> Upgrade & Add Programs
        </h2>

        {roleAllAccess ? (
          <div className="p-5 rounded-2xl border border-cyan-400/20 bg-cyan-500/5 mb-6 text-sm text-cyan-300 leading-relaxed">
            ✨ You have <strong>{isOwner ? "Owner" : "Admin"} all-access</strong>. Every program and tool is unlocked for you at the application layer — nothing to purchase. Programs below are shown for preview only.
          </div>
        ) : isPro && (
          <div className="p-5 rounded-2xl border border-cyan-400/20 bg-cyan-500/5 mb-6 text-sm text-cyan-300 leading-relaxed">
            ✨ You currently hold a **Pro All-Access** subscription. Every program (NEET, JEE, CBSE, ISC) is fully unlocked for you at the application layer. You do not need to buy individual programs unless you wish to pre-purchase them to extend access beyond your Pro expiration date.
          </div>
        )}

        <div className="grid gap-6 md:grid-cols-2">
          {/* Boards Section */}
          <div className="rounded-2xl border border-white/[0.08] bg-[#111827] p-6">
            <h3 className="font-black text-sm text-white/40 uppercase tracking-widest mb-4">School Board Programs</h3>
            <div className="space-y-4">
              {PROGRAMS_LIST.filter(p => p.category === "Boards").map(p =>
                renderProgramRow(p, "Annual plan · access to notes, tests, evaluations")
              )}
            </div>
          </div>

          {/* Entrance Exams Section */}
          <div className="rounded-2xl border border-white/[0.08] bg-[#111827] p-6">
            <h3 className="font-black text-sm text-white/40 uppercase tracking-widest mb-4">Entrance Prep Programs</h3>
            <div className="space-y-4">
              {PROGRAMS_LIST.filter(p => p.category === "Entrance").map(p =>
                renderProgramRow(p, "Annual plan · full entrance syllabus access")
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Confirmation Modal */}
      {confirmOpen && selectedPlan && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm">
          <div className="relative max-w-md w-full rounded-3xl bg-[#111827] border border-white/[0.08] p-7 shadow-2xl">
            <div className="mb-5">
              <h3 className="text-xl font-black">Confirm Purchase</h3>
              <p className="text-white/60 text-xs mt-1">Review the details before proceeding to payment.</p>
            </div>

            <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-4 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-xs text-white/60 font-semibold">Selected Program</span>
                <span className="text-xs text-white font-extrabold text-right max-w-[200px] truncate">{selectedPlan.name}</span>
              </div>
              <div className="flex justify-between items-center mt-3">
                <span className="text-xs text-white/60 font-semibold">Validity</span>
                <span className="text-xs text-cyan-400 font-extrabold">365 Days (1 Year)</span>
              </div>
              <div className="flex justify-between items-center mt-3 pt-3 border-t border-white/[0.06]">
                <span className="text-sm text-white/80 font-black">Total Price</span>
                <span className="text-lg text-white font-black">₹{selectedPlan.amount / 100}</span>
              </div>
            </div>

            {/* Term warnings */}
            <div className="mb-5 bg-white/[0.02] border border-white/5 rounded-xl p-3 text-[10px] text-white/60 leading-relaxed space-y-1">
              <p className="font-extrabold text-amber-400">Subscription Terms</p>
              <p>
                This is an annual program subscription. Access remains active for 365 days from activation. 
                Once expired, paid content will be locked unless renewed.
              </p>
              <p className="text-white/40">
                Once added, a program cannot be removed or downgraded. Please confirm before payment.
              </p>
            </div>

            {/* Irreversible purchase warning */}
            <div className="flex gap-3 p-3.5 rounded-xl border border-red-500/20 bg-red-500/5 mb-5">
              <ShieldAlert className="h-5 w-5 text-red-400 flex-shrink-0" />
              <div>
                <h5 className="text-[10px] font-black text-red-400 uppercase tracking-wide">Irreversible Purchase Warning</h5>
                <p className="text-[9px] text-white/50 leading-relaxed mt-0.5">
                  All program purchases are final and non-refundable. Under no circumstances can this payment be reversed, refunded, or transferred once processed.
                </p>
              </div>
            </div>

            {/* Legal Consent Checkbox */}
            <label className="flex items-start gap-2.5 mb-6 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={consentChecked}
                onChange={(e) => setConsentChecked(e.target.checked)}
                className="mt-0.5 rounded border-white/10 bg-black/50 text-cyan-500 focus:ring-0 focus:ring-offset-0 h-3.5 w-3.5"
              />
              <span className="text-[10px] text-white/70 leading-normal">
                I understand this annual program subscription will be added to my account after payment. 
                It cannot be removed or downgraded during the active period.
              </span>
            </label>

            <div className="flex gap-3">
              <button 
                onClick={() => setConfirmOpen(false)}
                className="flex-1 py-3 rounded-xl border border-white/10 hover:border-white/20 text-white font-bold text-xs transition"
              >
                Cancel
              </button>
              <button 
                onClick={handleConfirm}
                disabled={!consentChecked}
                className="flex-1 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-sky-500 text-black font-black text-xs transition hover:brightness-110 flex items-center justify-center gap-1.5 shadow-lg shadow-cyan-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Proceed to Pay <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Student Details Step */}
      <StudentDetailsForm
        open={detailsOpen}
        onClose={() => setDetailsOpen(false)}
        onComplete={() => {
          setDetailsOpen(false);
          setConfirmOpen(true);
        }}
        userEmail={user?.email}
      />

      {/* Razorpay Gateway Portal */}
      {gatewayOpen && selectedPlan && (
        <PaymentGateway 
          open={gatewayOpen}
          onClose={() => setGatewayOpen(false)}
          planId={!selectedPlan.isProgram ? selectedPlan.id : undefined}
          programKey={selectedPlan.isProgram ? selectedPlan.id : undefined}
          plan={selectedPlan.name}
          amount={`₹${selectedPlan.amount / 100}`}
          period={selectedPlan.isProgram ? "year" : (selectedPlan.id === "pro_annual" ? "year" : "month")}
        />
      )}
    </div>
  );
}
