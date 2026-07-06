"use client";

/**
 * PAYMENT GATEWAY — Razorpay Checkout (UPI / cards / netbanking / wallets).
 * Flow: POST /api/payment/create-order -> open Razorpay Checkout ->
 * POST /api/payment/verify-payment -> webhook activates Pro server-side.
 * The card data never touches our code; Razorpay's hosted checkout handles it.
 */

import { useState, useEffect, useCallback } from "react";
import { track } from "@vercel/analytics";
import { X, ShieldCheck, CreditCard, Smartphone, Building2, Wallet, Apple } from "lucide-react";

type PlanId = "pro_monthly" | "pro_annual";

type RazorpayOrderResponse = {
  keyId?: string;
  amount?: number;
  currency?: string;
  label?: string;
  orderId?: string;
  order_id?: string;
  email?: string;
  error?: string;
};

type RazorpaySuccessResponse = {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
};

type RazorpayFailureResponse = {
  error?: {
    code?: string;
    description?: string;
    reason?: string;
    metadata?: {
      payment_id?: string;
      order_id?: string;
    };
  };
};

type RazorpayOptions = {
  key?: string;
  amount?: number;
  currency?: string;
  name: string;
  description: string;
  order_id?: string;
  prefill: { email: string };
  theme: { color: string };
  handler: (response: RazorpaySuccessResponse) => void;
  modal: { ondismiss: () => void };
};

type RazorpayInstance = {
  open: () => void;
  on: (event: "payment.failed", handler: (response: RazorpayFailureResponse) => void) => void;
};

type RazorpayConstructor = new (options: RazorpayOptions) => RazorpayInstance;

type RazorpayWindow = Window & typeof globalThis & {
  Razorpay?: RazorpayConstructor;
};

function loadRazorpay(): Promise<void> {
  return new Promise((resolve, reject) => {
    if ((window as RazorpayWindow).Razorpay) return resolve();
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
  programKey,
  plan = "SYNERGIC BOND PRO",
  amount = "₹149",
  period = "month",
  type,
  customAmount,
  name = "",
  email = "",
  message = "",
  onSuccess,
}: {
  open: boolean;
  onClose: () => void;
  planId?: string;
  programKey?: string;
  plan?: string;
  amount?: string;
  period?: string;
  type?: "contribution" | "subscription" | "program";
  customAmount?: number;
  name?: string;
  email?: string;
  message?: string;
  onSuccess?: () => void;
}) {
  const [selected, setSelected] = useState("upi");
  const [processing, setProcessing] = useState(false);

  const [consentChecked, setConsentChecked] = useState(false);

  // Don't allow closing mid-checkout; Razorpay owns the flow once processing.
  const handleClose = useCallback(() => {
    if (!processing) onClose();
  }, [processing, onClose]);

  // ESC key closes; lock background scroll while open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, handleClose]);

  if (!open) return null;

  async function handlePay() {
    if (!consentChecked) return;
    setProcessing(true);
    try {
      const res = await fetch("/api/payment/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(
          type === "contribution"
            ? { type: "contribution", amount: customAmount, name, email, message }
            : programKey
            ? { programKey }
            : { plan: planId }
        ),
      });
      const data = await res.json().catch(() => ({})) as RazorpayOrderResponse;

      if (!res.ok) {
        if (res.status === 401) {
          window.location.href = `/auth/signin?next=${encodeURIComponent(window.location.pathname)}`;
          return;
        }
        alert(data?.error || "Could not start checkout. Please try again.");
        setProcessing(false);
        return;
      }

      const orderId = data.orderId || data.order_id;
      if (!data.keyId || !data.amount || !data.currency || !orderId) {
        alert("Checkout could not start. Please try again.");
        setProcessing(false);
        return;
      }

      await loadRazorpay();
      const Razorpay = (window as RazorpayWindow).Razorpay;
      if (!Razorpay) throw new Error("Razorpay checkout failed to load");

      const rzp = new Razorpay({
        key: data.keyId,
        amount: data.amount,
        currency: data.currency,
        name: "SYNERGIC BOND",
        description: data.label || plan,
        order_id: orderId,
        prefill: { email: data.email || "" },
        theme: { color: "#22D3EE" },
        handler: async function (response) {
          const verifyRes = await fetch("/api/payment/verify-payment", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              ...response,
              type,
              name,
              email,
              message,
              amount: customAmount,
            }),
          });
          const verifyData = await verifyRes.json().catch(() => ({})) as { success?: boolean; error?: string };

          if (!verifyRes.ok || !verifyData.success) {
            track("payment_verification_failed", { plan: planId || programKey || "contribution" });
            alert(verifyData.error || "Payment could not be verified. Please contact support.");
            setProcessing(false);
            return;
          }

          track("payment_success", { plan: planId || programKey || "contribution" });
          
          if (type === "contribution") {
            if (onSuccess) onSuccess();
            return;
          }

          alert("Payment verified. Your access will activate within a few seconds.");
          // Take the student straight to their subscription dashboard so they
          // immediately see the purchased program, status, and expiry date.
          window.location.href = "/dashboard/subscription";
        },
        modal: {
          ondismiss: () => {
            track("payment_cancelled", { plan: planId || programKey || "contribution" });
            setProcessing(false);
          },
        },
      });
      rzp.on("payment.failed", (response) => {
        track("payment_failed", {
          plan: planId || programKey || "contribution",
          reason: response.error?.reason || response.error?.code || "unknown",
        });
        if (type === "contribution") {
          const wantRetry = window.confirm(
            (response.error?.description || "Payment failed.") + "\n\nWould you like to retry your contribution?"
          );
          if (wantRetry) {
            setProcessing(false);
            return;
          }
        } else {
          alert(response.error?.description || "Payment failed. Please try again.");
        }
        setProcessing(false);
      });
      rzp.open();
    } catch {
      alert("Checkout could not start. Please try again.");
      setProcessing(false);
    }
  }

  return (
    <div
      className="sb-modal-overlay fixed inset-0 z-[100] flex items-end justify-center bg-black/70 backdrop-blur-sm sm:items-center sm:p-6"
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="payment-title"
    >
      <div
        className="sb-modal-panel relative flex max-h-[90vh] w-full max-w-md flex-col overflow-hidden rounded-t-3xl border border-white/[0.08] bg-[#111827] shadow-2xl sm:rounded-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          aria-label="Close checkout"
          className="absolute top-4 right-4 z-10 text-white/40 transition hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Scrollable body */}
        <div className="flex-1 overflow-y-auto overscroll-contain px-6 pt-7 pb-5 sm:px-7">
          <div className="mb-6 pr-8">
            <p className="text-xs font-bold text-cyan-400 uppercase tracking-wider">Checkout</p>
            <h3 id="payment-title" className="text-xl font-black mt-1">{plan}</h3>
            <p className="text-3xl font-black text-white mt-2">{amount}<span className="text-sm text-white/40 font-normal"> / {period}</span></p>
          </div>

          <p className="text-xs font-semibold text-white/50 mb-3">Select payment method</p>
          <div className="grid grid-cols-2 gap-2 mb-5">
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

          {/* Warning Copy */}
          {type === "contribution" ? (
            <div className="bg-black/40 border border-white/5 rounded-xl p-3 text-[10px] text-white/60 leading-relaxed space-y-1.5">
              <p className="font-extrabold text-cyan-400">Contribution Terms</p>
              <p>
                Your contribution directly funds student server infrastructure, verified question bank expansion, and free educational tools.
              </p>
              <p className="text-white/40">
                This is a voluntary contribution to support affordable chemistry education.
              </p>
            </div>
          ) : (
            <div className="bg-black/40 border border-white/5 rounded-xl p-3 text-[10px] text-white/60 leading-relaxed space-y-1.5">
              <p className="font-extrabold text-amber-400">Subscription Terms</p>
              <p>
                This is an annual program subscription. Access remains active for 365 days from activation.
                Once expired, paid content will be locked unless renewed.
              </p>
              <p className="text-white/40">
                Once added, a program cannot be removed or downgraded. Please confirm before payment.
              </p>
            </div>
          )}
        </div>

        {/* Sticky footer — consent + pay stay visible on every screen */}
        <div className="shrink-0 border-t border-white/[0.08] bg-[#111827] px-6 pt-4 pb-6 sm:px-7">
          {/* Legal Consent Checkbox */}
          <label className="flex items-start gap-2.5 mb-4 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={consentChecked}
              onChange={(e) => setConsentChecked(e.target.checked)}
              className="mt-0.5 rounded border-white/10 bg-black/50 text-cyan-500 focus:ring-0 focus:ring-offset-0 h-3.5 w-3.5"
            />
            <span className="text-[10px] text-white/70 leading-normal">
              {type === "contribution"
                ? "I understand this is a voluntary contribution to support affordable chemistry education."
                : "I understand this annual program subscription will be added to my account after payment. It cannot be removed or downgraded during the active period."}
            </span>
          </label>

          <button
            onClick={handlePay}
            disabled={processing || !consentChecked}
            className="w-full rounded-xl bg-gradient-to-r from-cyan-400 to-sky-500 py-3 text-sm font-bold text-black transition hover:-translate-y-0.5 disabled:translate-y-0 disabled:opacity-50"
          >
            {processing ? "Processing..." : `Pay ${amount} Securely`}
          </button>

          <p className="flex items-center justify-center gap-1.5 text-[10px] text-white/30 mt-3">
            <ShieldCheck className="h-3 w-3 text-green-400" />
            256-bit encrypted · Gateway activates after backend connection
          </p>
        </div>
      </div>
    </div>
  );
}
