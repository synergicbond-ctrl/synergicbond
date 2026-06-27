"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function DebugPage() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    async function load() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      console.log("USER FULL:", JSON.stringify(user, null, 2));

      setData(user);
    }

    load();
  }, []);

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </main>
  );
}
