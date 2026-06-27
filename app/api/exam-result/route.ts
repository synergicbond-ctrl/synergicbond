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

    const body = await req.json();
    console.log("EXAM RESULT BODY:", body);

    const { error } = await supabase
      .from("exam_results")
      .insert({
        user_id: user.id,
        exam_name: body.examName,
        score: body.score,
        total: body.total,
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
