import { NextResponse } from "next/server"
import { getSupabaseAdmin } from "@/lib/supabase-server"

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params
    const supabase = getSupabaseAdmin()

    console.log("[v0 API] Fetching token for lead:", id)

    const { data, error } = await supabase
      .from("lead_access_tokens")
      .select("token")
      .eq("lead_id", id)
      .eq("is_used", false)
      .maybeSingle()

    if (error) {
      console.error("[v0 API] Error fetching token:", error)
      return NextResponse.json({ token: null })
    }

    console.log("[v0 API] Token found:", !!data?.token)
    return NextResponse.json({ token: data?.token || null })
  } catch (error) {
    console.error("[v0 API] Unexpected error:", error)
    return NextResponse.json({ token: null })
  }
}
