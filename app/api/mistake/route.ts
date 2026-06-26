export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      userId,
      chapterId,
      question,
      selectedAnswer,
      correctAnswer,
    } = body;

    // 👇 RIGHT HERE (THIS IS THE PLACE)
    console.log("Mistake Stored", {
      userId,
      chapterId,
      question,
      selectedAnswer,
      correctAnswer,
    });

    return Response.json({ success: true });

  } catch (e) {
    return Response.json({ error: "failed" }, { status: 500 });
  }
}