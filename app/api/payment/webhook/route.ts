export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import crypto from "crypto";
import { createAdminClient } from "@/lib/supabase/admin";
import { PLANS, isValidPlan } from "@/lib/subscription";

// Razorpay webhook. Verifies the HMAC signature over the RAW body, then
// idempotently activates the subscription. Writes use the service-role client
// because there is no user session on a server-to-server webhook.
export async function POST(req: Request) {
  const secret = process.env.RAZORPAY_WEBHOOK_SECRET;
  const signature = req.headers.get("x-razorpay-signature") || "";
  const raw = await req.text();

  if (!secret) {
    console.error("razorpay webhook: RAZORPAY_WEBHOOK_SECRET missing");
    return NextResponse.json({ ok: false }, { status: 503 });
  }

  // Constant-time signature check over the exact raw payload.
  const expected = crypto.createHmac("sha256", secret).update(raw).digest("hex");
  const sigBuf = Buffer.from(signature);
  const expBuf = Buffer.from(expected);
  const valid = sigBuf.length === expBuf.length && crypto.timingSafeEqual(sigBuf, expBuf);
  if (!valid) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  let event: any;
  try {
    event = JSON.parse(raw);
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const admin = createAdminClient();
  if (!admin) {
    console.error("razorpay webhook: SUPABASE_SERVICE_ROLE_KEY missing");
    return NextResponse.json({ ok: false }, { status: 503 });
  }

  try {
    const paymentEntity = event?.payload?.payment?.entity ?? {};
    const orderEntity = event?.payload?.order?.entity ?? {};
    const eventId: string =
      paymentEntity.id || orderEntity.id || event?.id || crypto.randomUUID();

    // Idempotency: skip if we've already processed this event.
    const { data: seen } = await admin
      .from("payment_events")
      .select("event_id")
      .eq("event_id", eventId)
      .maybeSingle();
    if (seen) return NextResponse.json({ ok: true, duplicate: true });

    if (event?.event === "payment.captured" || event?.event === "order.paid") {
      const notes = paymentEntity.notes || orderEntity.notes || {};
      const userId = notes.user_id;
      const plan = notes.plan;
      if (userId && isValidPlan(plan)) {
        const expires = new Date(Date.now() + PLANS[plan].days * 86_400_000).toISOString();
        await admin.from("subscriptions").upsert(
          {
            user_id: userId,
            plan,
            status: "active",
            expires_at: expires,
            razorpay_payment_id: paymentEntity.id ?? null,
            updated_at: new Date().toISOString(),
          },
          { onConflict: "user_id" }
        );
      } else {
        console.error("razorpay webhook: missing/invalid notes", { userId, plan });
      }
    }

    await admin.from("payment_events").insert({ event_id: eventId, payload: event });
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("razorpay webhook processing error:", e);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
