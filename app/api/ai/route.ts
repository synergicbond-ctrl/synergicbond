import OpenAI from "openai";

export async function POST(req: Request) {
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey || apiKey === "your_real_key_here") {
    return Response.json(
      {
        error:
          "Vision API is disabled. Add a valid OPENAI_API_KEY to enable it.",
      },
      { status: 500 }
    );
  }

  try {
    const body = await req.json();

    const client = new OpenAI({
      apiKey,
    });

    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "You are an expert chemistry vision tutor. Help students understand chemistry diagrams, equations, reactions, laboratory setups, and molecular structures.",
        },
        {
          role: "user",
          content:
            typeof body.prompt === "string"
              ? body.prompt
              : "Analyze this chemistry question.",
        },
      ],
    });

    return Response.json({
      answer:
        response.choices[0].message.content ??
        "No response generated.",
    });
  } catch (error) {
    return Response.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Vision request failed.",
      },
      { status: 500 }
    );
  }
}