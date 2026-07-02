import { createBrowserClient } from "@supabase/ssr";

type BrowserSupabaseClient = ReturnType<typeof createBrowserClient>;

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const missingSupabaseError = { message: "Supabase is not configured." };

function missingQuery() {
  const query = {
    select: () => query,
    eq: () => query,
    order: () => query,
    maybeSingle: async () => ({ data: null, error: missingSupabaseError }),
    single: async () => ({ data: null, error: missingSupabaseError }),
    upsert: async () => ({ data: null, error: missingSupabaseError }),
    insert: async () => ({ data: null, error: missingSupabaseError }),
  };

  return query;
}

const unconfiguredSupabase = {
  auth: {
    getUser: async () => ({ data: { user: null }, error: null }),
    getSession: async () => ({ data: { session: null }, error: null }),
    onAuthStateChange: () => ({
      data: { subscription: { unsubscribe() {} } },
    }),
    signOut: async () => ({ error: null }),
    signInWithPassword: async () => ({
      data: { user: null, session: null },
      error: missingSupabaseError,
    }),
    signInWithOAuth: async () => ({
      data: { provider: null, url: null },
      error: missingSupabaseError,
    }),
    signUp: async () => ({
      data: { user: null, session: null },
      error: missingSupabaseError,
    }),
  },
  from: () => missingQuery(),
} as unknown as BrowserSupabaseClient;

export const supabase =
  supabaseUrl && supabaseAnonKey
    ? createBrowserClient(supabaseUrl, supabaseAnonKey)
    : unconfiguredSupabase;
