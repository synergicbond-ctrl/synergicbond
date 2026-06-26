import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET() {
  if (!supabase) {
    return NextResponse.json(
      {
        weakTopics: [],
        message: "Supabase is not configured.",
      },
      { status: 200 }
    );
  }

  const { data, error } = await supabase
    .from("mistakes")
    .select("*");

  if (error) {
    return NextResponse.json(
      {
        weakTopics: [],
        error: error.message,
      },
      { status: 500 }
    );
  }

  return NextResponse.json({
    weakTopics: data ?? [],
  });
}