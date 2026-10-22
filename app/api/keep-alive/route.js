import { supabase } from "@/_lib/supabase";

// Called daily by Vercel Cron (see vercel.json) so the free Supabase
// project doesn't get paused for inactivity.
export async function GET(request) {
  const secret = process.env.CRON_SECRET;
  if (secret && request.headers.get("authorization") !== `Bearer ${secret}`)
    return Response.json({ message: "Unauthorized" }, { status: 401 });

  const { error } = await supabase.from("cabins").select("id").limit(1);

  if (error) {
    console.error(error);
    return Response.json({ ok: false }, { status: 500 });
  }

  return Response.json({ ok: true });
}
