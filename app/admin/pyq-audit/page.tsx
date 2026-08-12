import React from "react";
import PYQDominationDashboard from "@/components/PYQDominationDashboard";
import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "PYQ Domination Audit — Synergic Bond Admin",
  description: "Internal administrative tracking and verification dashboard for the 1,300+ PYQ Domination Plan.",
};

export default function PYQAuditAdminPage() {
  return (
    <main className="min-h-screen bg-[#0B0F19] text-white antialiased py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Admin Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.08] pb-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-semibold uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5" />
                Internal Admin Route
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              PYQ Question Bank Audit & Tracking
            </h1>
            <p className="text-sm text-white/60">
              Restricted internal dashboard for monitoring chapter-wise coverage and verification status.
            </p>
          </div>

          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.08] text-sm font-medium text-white/80 hover:text-white transition-all w-fit"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Public Homepage
          </Link>
        </div>

        {/* Dashboard Component */}
        <div className="pt-2">
          <PYQDominationDashboard />
        </div>
      </div>
    </main>
  );
}
