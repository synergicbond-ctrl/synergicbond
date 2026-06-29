import { createClient } from "@/lib/supabase/server";
import { MechanismSchema, SCHEMA_VERSION, type Mechanism } from "@/lib/mechanismSchema";

// Persisted cache for generated mechanisms. Every operation degrades
// gracefully: if the table doesn't exist yet (migration not run) or RLS
// blocks it, we simply fall back to fresh generation — nothing throws.

export async function getCached(slug: string, language: string): Promise<Mechanism | null> {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("reaction_mechanisms")
      .select("data")
      .eq("slug", slug)
      .eq("language", language)
      .eq("schema_version", SCHEMA_VERSION)
      .maybeSingle();
    if (error || !data) return null;
    const parsed = MechanismSchema.safeParse(data.data);
    return parsed.success ? parsed.data : null;
  } catch {
    return null;
  }
}

export async function putCached(slug: string, language: string, mechanism: Mechanism): Promise<void> {
  try {
    const supabase = await createClient();
    await supabase.from("reaction_mechanisms").upsert(
      { slug, language, schema_version: SCHEMA_VERSION, data: mechanism },
      { onConflict: "slug,language,schema_version" },
    );
  } catch {
    /* table absent / RLS — ignore; will regenerate next time */
  }
}
