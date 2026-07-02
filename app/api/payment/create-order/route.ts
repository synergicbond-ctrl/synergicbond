export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { PLANS, isValidPlan } from "@/lib/subscription";

// Creates a Razorpay order for the chosen plan. The client opens Razorpay
// Checkout with the returned orderId + keyId. No SDK; direct REST + Basic auth.
export async function POST(req: Request) {
  try {
    const keyId = process.env.RAZORPAY_KEY_ID;
    const keySecret = process.env.RAZORPAY_KEY_SECRET;
    if (!keyId || !keySecret) {
      return NextResponse.json({ error: "Payments are not configured yet." }, { status: 503 });
    }

    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      return NextResponse.json({ error: "Please sign in to upgrade." }, { status: 401 });
    }

    const body = await req.json().catch(() => ({}));
    const plan = body?.plan;
    if (!isValidPlan(plan)) {
      return NextResponse.json({ error: "Invalid plan." }, { status: 400 });
    }
    const p = PLANS[plan];
    if (p.amount < 100) {
      return NextResponse.json({ error: "Payment amount must be at least 100 paise." }, { status: 400 });
    }

    const auth = Buffer.from(`${keyId}:${keySecret}`).toString("base64");
    const res = await fetch("https://api.razorpay.com/v1/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Basic ${auth}` },
      body: JSON.stringify({
        amount: p.amount,
        currency: "INR",
        receipt: `sb_${user.id.slice(0, 8)}_${Date.now()}`,
        // notes are echoed back on the webhook payload — our user/plan binding.
        notes: { user_id: user.id, plan },
      }),
    });

    if (!res.ok) {
      console.error("razorpay order error:", await res.text().catch(() => ""));
      return NextResponse.json({ error: "Could not start checkout. Please try again." }, { status: 500 });
    }

    const order = await res.json().catch(() => null);
    if (
      !order ||
      typeof order !== "object" ||
      typeof order.id !== "string" ||
      typeof order.amount !== "number" ||
      typeof order.currency !== "string"
    ) {
      console.error("razorpay order malformed:", order);
      return NextResponse.json({ error: "Could not start checkout. Please try again." }, { status: 500 });
    }

    return NextResponse.json({
      orderId: order.id,
      order_id: order.id,
      amount: order.amount,
      currency: order.currency,
      keyId,
      plan,
      label: p.label,
      email: user.email ?? "",
    });
  } catch (e) {
    console.error("create-order failed:", e);
    return NextResponse.json({ error: "Could not start checkout." }, { status: 500 });
  }
}
