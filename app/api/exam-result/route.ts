import { createClient } from "@/lib/supabase/server";

export async function POST(req: Request) {
  try {
    const supabase = await createClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return Response.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const body = await req.json().catch(() => null);
    if (!body || typeof body !== "object") {
      return Response.json(
        { error: "Invalid JSON body" },
        { status: 400 }
      );
    }

    const { examName, score, total } = body as {
      examName?: unknown;
      score?: unknown;
      total?: unknown;
    };

    const parsedScore = typeof score === "number" ? score : typeof score === "string" ? Number(score) : NaN;
    const parsedTotal = typeof total === "number" ? total : typeof total === "string" ? Number(total) : NaN;

    if (
      typeof examName !== "string" ||
      !examName.trim() ||
      !Number.isFinite(parsedScore) ||
      !Number.isFinite(parsedTotal) ||
      parsedScore < 0 ||
      parsedTotal <= 0
    ) {
      return Response.json(
        { error: "examName, score, and total are required" },
        { status: 400 }
      );
    }

    const { error } = await supabase
      .from("exam_results")
      .insert({
        user_id: user.id,
        exam_name: examName.trim(),
        score: parsedScore,
        total: parsedTotal,
      });

    if (error) {
      console.error(error);

      return Response.json(
        { error: error.message },
        { status: 500 }
      );
    }

    return Response.json({ success: true });
  } catch (e) {
    console.error(e);

    return Response.json(
      { error: "failed" },
      { status: 500 }
    );
  }
}
