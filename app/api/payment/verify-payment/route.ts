export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import crypto from "crypto";
import { NextResponse } from "next/server";

type VerifyPaymentBody = {
  razorpay_payment_id?: unknown;
  razorpay_order_id?: unknown;
  razorpay_signature?: unknown;
};

function safeCompareHex(expected: string, received: string) {
  const expectedBuffer = Buffer.from(expected, "hex");
  const receivedBuffer = Buffer.from(received, "hex");

  if (expectedBuffer.length !== receivedBuffer.length) {
    return false;
  }

  return crypto.timingSafeEqual(expectedBuffer, receivedBuffer);
}

export async function POST(req: Request) {
  try {
    const keySecret = process.env.RAZORPAY_KEY_SECRET;
    if (!keySecret) {
      return NextResponse.json({ success: false, error: "Payments are not configured yet." }, { status: 503 });
    }

    const body = await req.json().catch(() => null) as VerifyPaymentBody | null;
    const paymentId = typeof body?.razorpay_payment_id === "string" ? body.razorpay_payment_id : "";
    const orderId = typeof body?.razorpay_order_id === "string" ? body.razorpay_order_id : "";
    const signature = typeof body?.razorpay_signature === "string" ? body.razorpay_signature : "";

    if (!paymentId || !orderId || !signature) {
      return NextResponse.json({ success: false, error: "Missing Razorpay payment verification fields." }, { status: 400 });
    }

    const expectedSignature = crypto
      .createHmac("sha256", keySecret)
      .update(`${orderId}|${paymentId}`)
      .digest("hex");

    if (!safeCompareHex(expectedSignature, signature)) {
      return NextResponse.json({ success: false, error: "Payment signature verification failed." }, { status: 400 });
    }

    return NextResponse.json({ success: true, orderId, paymentId });
  } catch (error) {
    console.error("verify-payment failed:", error);
    return NextResponse.json({ success: false, error: "Could not verify payment." }, { status: 500 });
  }
}
