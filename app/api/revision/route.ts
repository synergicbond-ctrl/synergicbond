export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { z } from "zod";
import { addToRevision, reviewRevisionItem } from "@/lib/revision/server";
import { revisionContentTypes, revisionRatings } from "@/lib/revision/types";
import { createClient } from "@/lib/supabase/server";

const addSchema = z.object({
  action: z.literal("add"),
  contentType: z.enum(revisionContentTypes),
  sourceId: z.string().min(1),
  program: z.string().optional(),
});

const reviewSchema = z.object({
  action: z.literal("review"),
  revisionItemId: z.string().uuid(),
  rating: z.enum(revisionRatings),
});

const payloadSchema = z.discriminatedUnion("action", [addSchema, reviewSchema]);

export async function POST(req: Request) {
  try {
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      return NextResponse.json({ error: "Supabase is not configured for revision" }, { status: 503 });
    }

    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const json = await req.json().catch(() => null);
    const parsed = payloadSchema.safeParse(json);
    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid revision payload", issues: parsed.error.issues }, { status: 400 });
    }

    if (parsed.data.action === "add") {
      const item = await addToRevision(supabase, user.id, parsed.data);
      return NextResponse.json({ success: true, item });
    }

    const item = await reviewRevisionItem(supabase, user.id, parsed.data.revisionItemId, parsed.data.rating);
    return NextResponse.json({ success: true, item });
  } catch (error) {
    console.error("Revision API error:", error);
    return NextResponse.json({ error: "Revision request failed" }, { status: 500 });
  }
}
