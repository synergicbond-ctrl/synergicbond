import { createClient } from "@/lib/supabase/server";

export default async function DashboardPage() {
  const supabase = await createClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-8">
        Dashboard Debug
      </h1>

      <pre className="text-sm whitespace-pre-wrap">
{JSON.stringify(
  {
    session,
    user,
  },
  null,
  2
)}
      </pre>
    </main>
  );
}
