export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import crypto from "crypto";
import { createAdminClient } from "@/lib/supabase/admin";
import { PLANS, isValidPlan, isSaleableProgram, type PlanId } from "@/lib/subscription";
import { ALL_PROGRAM_KEYS } from "@/lib/access/entitlements";

type RazorpayNotes = {
  user_id?: unknown;
  plan?: unknown;
  program_key?: unknown;
  type?: unknown;
  name?: unknown;
  email?: unknown;
  message?: unknown;
  amount_rupees?: unknown;
};

type RazorpayEntity = {
  id?: string;
  order_id?: string;
  notes?: RazorpayNotes;
};

type RazorpayWebhookEvent = {
  id?: string;
  event?: string;
  payload?: {
    payment?: { entity?: RazorpayEntity };
    order?: { entity?: RazorpayEntity };
  };
};

type ValidNotesResult =
  | { userId: string; plan: PlanId }
  | { userId: string; programKey: string }
  | { type: "contribution"; name: string; email: string; message: string; amount_rupees: string };

function getValidNotes(notes?: RazorpayNotes): ValidNotesResult | null {
  if (notes?.type === "contribution") {
    return {
      type: "contribution",
      name: typeof notes.name === "string" ? notes.name : "Anonymous",
      email: typeof notes.email === "string" ? notes.email : "",
      message: typeof notes.message === "string" ? notes.message : "",
      amount_rupees: typeof notes.amount_rupees === "string" ? notes.amount_rupees : "0",
    };
  }
  if (typeof notes?.user_id === "string") {
    if (isValidPlan(notes.plan)) {
      return { userId: notes.user_id, plan: notes.plan };
    }
    if (
      typeof notes.program_key === "string" &&
      ALL_PROGRAM_KEYS.includes(notes.program_key) &&
      // Never activate a "Coming Soon" program (e.g. State Boards) even if an
      // order somehow carried its key — no purchase path should exist for it.
      isSaleableProgram(notes.program_key)
    ) {
      return { userId: notes.user_id, programKey: notes.program_key };
    }
  }
  return null;
}

async function fetchOrderNotes(orderId: string) {
  const keyId = process.env.RAZORPAY_KEY_ID;
  const keySecret = process.env.RAZORPAY_KEY_SECRET;
  if (!keyId || !keySecret) return null;

  const auth = Buffer.from(`${keyId}:${keySecret}`).toString("base64");
  const res = await fetch(`https://api.razorpay.com/v1/orders/${orderId}`, {
    headers: { Authorization: `Basic ${auth}` },
  });

  if (!res.ok) {
    console.error("razorpay webhook: order notes lookup failed", { orderId, status: res.status });
    return null;
  }

  const order = await res.json().catch(() => null);
  const notes = order && typeof order === "object" ? (order as RazorpayEntity).notes : undefined;
  return getValidNotes(notes);
}

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

  let event: RazorpayWebhookEvent;
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
    const eventId = paymentEntity.id || orderEntity.id || event?.id;
    if (!eventId) {
      console.error("razorpay webhook: missing event id");
      return NextResponse.json({ ok: false }, { status: 400 });
    }

    // Idempotency: skip if we've already processed this event.
    const { data: seen, error: seenError } = await admin
      .from("payment_events")
      .select("event_id")
      .eq("event_id", eventId)
      .maybeSingle();
    if (seenError) {
      console.error("razorpay webhook: idempotency lookup failed", seenError);
      return NextResponse.json({ ok: false }, { status: 500 });
    }
    if (seen) return NextResponse.json({ ok: true, duplicate: true });

    if (event?.event === "payment.captured" || event?.event === "order.paid") {
      const orderId = paymentEntity.order_id || orderEntity.id;
      const validNotes =
        getValidNotes(paymentEntity.notes) ||
        getValidNotes(orderEntity.notes) ||
        (orderId ? await fetchOrderNotes(orderId) : null);

      if (validNotes) {
        if ("plan" in validNotes) {
          const { data: existingSub } = await admin
            .from("subscriptions")
            .select("expires_at")
            .eq("user_id", validNotes.userId)
            .maybeSingle();

          const daysToAdd = PLANS[validNotes.plan].days;
          let newExpiresAt: Date;
          const now = new Date();

          if (existingSub?.expires_at && new Date(existingSub.expires_at) > now) {
            newExpiresAt = new Date(new Date(existingSub.expires_at).getTime() + daysToAdd * 86_400_000);
          } else {
            newExpiresAt = new Date(now.getTime() + daysToAdd * 86_400_000);
          }

          const { error: subscriptionError } = await admin.from("subscriptions").upsert(
            {
              user_id: validNotes.userId,
              plan: validNotes.plan,
              status: "active",
              expires_at: newExpiresAt.toISOString(),
              razorpay_payment_id: paymentEntity.id ?? null,
              updated_at: now.toISOString(),
            },
            { onConflict: "user_id" }
          );
          if (subscriptionError) {
            console.error("razorpay webhook: subscription upsert failed", subscriptionError);
            return NextResponse.json({ ok: false }, { status: 500 });
          }
        } else if ("programKey" in validNotes) {
          const { data: existingEnt } = await admin
            .from("user_program_entitlements")
            .select("expires_at")
            .eq("user_id", validNotes.userId)
            .eq("program_key", validNotes.programKey)
            .maybeSingle();

          let newExpiresAt: Date;
          const now = new Date();

          if (existingEnt?.expires_at && new Date(existingEnt.expires_at) > now) {
            newExpiresAt = new Date(new Date(existingEnt.expires_at).getTime() + 365 * 86_400_000);
          } else {
            newExpiresAt = new Date(now.getTime() + 365 * 86_400_000);
          }

          const { error: entitlementError } = await admin.from("user_program_entitlements").upsert(
            {
              user_id: validNotes.userId,
              program_key: validNotes.programKey,
              source: "purchase",
              status: "active",
              razorpay_payment_id: paymentEntity.id ?? null,
              expires_at: newExpiresAt.toISOString(),
              updated_at: now.toISOString(),
            },
            { onConflict: "user_id,program_key" }
          );
          if (entitlementError) {
            console.error("razorpay webhook: entitlement upsert failed", entitlementError);
            return NextResponse.json({ ok: false }, { status: 500 });
          }
        } else if ("type" in validNotes && validNotes.type === "contribution") {
          const now = new Date();
          const { error: contribError } = await admin.from("contributions").upsert(
            {
              name: validNotes.name,
              email: validNotes.email || null,
              message: validNotes.message || null,
              amount: Number(validNotes.amount_rupees) || 0,
              payment_id: paymentEntity.id ?? null,
              order_id: orderId || "",
              status: "paid",
              updated_at: now.toISOString(),
            },
            { onConflict: "order_id" }
          );
          if (contribError) {
            console.error("razorpay webhook: contribution upsert failed", contribError);
            return NextResponse.json({ ok: false }, { status: 500 });
          }
        }
      } else {
        console.error("razorpay webhook: missing/invalid notes", {
          event: event.event,
          paymentId: paymentEntity.id,
          orderId,
        });
      }
    }

    const { error: eventInsertError } = await admin
      .from("payment_events")
      .insert({ event_id: eventId, payload: event });
    if (eventInsertError) {
      console.error("razorpay webhook: event insert failed", eventInsertError);
      return NextResponse.json({ ok: false }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("razorpay webhook processing error:", e);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
