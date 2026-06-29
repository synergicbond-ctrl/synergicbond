"use client";

/**
 * PAYMENT GATEWAY — Razorpay Checkout (UPI / cards / netbanking / wallets).
 * Flow: POST /api/payment/create-order → open Razorpay Checkout → the
 * /api/payment/webhook (HMAC-verified) activates Pro server-side. The card-data
 * never touches our code; Razorpay's hosted checkout handles it.
 */

import { useState } from "react";
import { track } from "@vercel/analytics";
import { X, ShieldCheck, CreditCard, Smartphone, Building2, Wallet, Apple } from "lucide-react";

type PlanId = "pro_monthly" | "pro_annual";

function loadRazorpay(): Promise<void> {
  return new Promise((resolve, reject) => {
    if ((window as any).Razorpay) return resolve();
    const s = document.createElement("script");
    s.src = "https://checkout.razorpay.com/v1/checkout.js";
    s.onload = () => resolve();
    s.onerror = () => reject(new Error("Failed to load Razorpay"));
    document.body.appendChild(s);
  });
}

const methods = [
  { id: "card",       label: "Credit / Debit Card", icon: CreditCard,  hint: "Visa · Mastercard · RuPay" },
  { id: "upi",        label: "UPI",                 icon: Smartphone,  hint: "Any UPI app" },
  { id: "netbanking", label: "NetBanking",          icon: Building2,   hint: "All major banks" },
  { id: "phonepe",    label: "PhonePe",             icon: Wallet,      hint: "Wallet & UPI" },
  { id: "gpay",       label: "Google Pay",          icon: Wallet,      hint: "GPay UPI" },
  { id: "applepay",   label: "Apple Pay",           icon: Apple,       hint: "iOS / Safari" },
];

export default function PaymentGateway({
  open,
  onClose,
  planId = "pro_monthly",
  plan = "SYNERGIC BOND PRO",
  amount = "₹149",
  period = "month",
}: {
  open: boolean;
  onClose: () => void;
  planId?: PlanId;
  plan?: string;
  amount?: string;
  period?: string;
}) {
  const [selected, setSelected] = useState("upi");
  const [processing, setProcessing] = useState(false);

  if (!open) return null;

  async function handlePay() {
    setProcessing(true);
    try {
      const res = await fetch("/api/payment/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan: planId }),
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        if (res.status === 401) {
          window.location.href = "/auth/signin?next=/pricing";
          return;
        }
        alert(data?.error || "Could not start checkout. Please try again.");
        setProcessing(false);
        return;
      }

      await loadRazorpay();
      const rzp = new (window as any).Razorpay({
        key: data.keyId,
        amount: data.amount,
        currency: data.currency,
        name: "SYNERGIC BOND",
        description: data.label || plan,
        order_id: data.orderId,
        prefill: { email: data.email || "" },
        theme: { color: "#22D3EE" },
        handler: function () {
          // The webhook activates Pro server-side; this just confirms to the user.
          track("payment_success", { plan: planId });
          alert("Payment received! Your Pro access will activate within a few seconds.");
          window.location.reload();
        },
        modal: { ondismiss: () => setProcessing(false) },
      });
      rzp.open();
    } catch {
      alert("Checkout could not start. Please try again.");
      setProcessing(false);
    }
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/70 backdrop-blur-sm">
      <div className="relative max-w-md w-full rounded-3xl bg-[#111827] border border-white/[0.08] p-7 shadow-2xl">
        <button onClick={onClose} className="absolute top-4 right-4 text-white/40 hover:text-white">
          <X className="h-5 w-5" />
        </button>

        <div className="mb-6">
          <p className="text-xs font-bold text-cyan-400 uppercase tracking-wider">Checkout</p>
          <h3 className="text-xl font-black mt-1">{plan}</h3>
          <p className="text-3xl font-black text-white mt-2">{amount}<span className="text-sm text-white/40 font-normal"> / {period}</span></p>
        </div>

        <p className="text-xs font-semibold text-white/50 mb-3">Select payment method</p>
        <div className="grid grid-cols-2 gap-2 mb-6">
          {methods.map((m) => {
            const Icon = m.icon;
            const active = selected === m.id;
            return (
              <button
                key={m.id}
                onClick={() => setSelected(m.id)}
                className={`flex flex-col items-start gap-1 rounded-xl border p-3 text-left transition ${
                  active ? "border-cyan-400/60 bg-cyan-500/10" : "border-white/[0.08] bg-black/30 hover:border-white/20"
                }`}
              >
                <Icon className={`h-4 w-4 ${active ? "text-cyan-400" : "text-white/50"}`} />
                <span className="text-xs font-semibold text-white/80">{m.label}</span>
                <span className="text-[9px] text-white/30">{m.hint}</span>
              </button>
            );
          })}
        </div>

        <button
          onClick={handlePay}
          disabled={processing}
          className="w-full rounded-xl bg-gradient-to-r from-cyan-400 to-sky-500 py-3 text-sm font-bold text-black transition hover:-translate-y-0.5 disabled:opacity-60"
        >
          {processing ? "Processing..." : `Pay ${amount} Securely`}
        </button>

        <p className="flex items-center justify-center gap-1.5 text-[10px] text-white/30 mt-4">
          <ShieldCheck className="h-3 w-3 text-green-400" />
          256-bit encrypted · Gateway activates after backend connection
        </p>
      </div>
    </div>
  );
}
