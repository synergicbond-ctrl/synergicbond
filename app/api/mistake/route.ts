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

    const { error } = await supabase
      .from("mistakes")
      .insert({
        user_id: user.id,
        chapter_id: body.chapterId,
        question: body.question,
        selected_answer: body.selectedAnswer,
        correct_answer: body.correctAnswer,
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
