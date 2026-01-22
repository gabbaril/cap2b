import { NextRequest, NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params

    // Get token from Authorization header
    const authHeader = req.headers.get("authorization")
    if (!authHeader?.startsWith("Bearer ")) {
      return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 })
    }
    const token = authHeader.replace("Bearer ", "")

    // Verify session using Supabase Auth
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser(token)

    if (userError || !user) {
      return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 })
    }

    // Fetch this broker's lead by id
    const { data: lead, error: leadError } = await supabase
      .from("leads")
      .select("*")
      .eq("id", id)
      .eq("assigned_to", user.id)
      .single()

    if (leadError || !lead) {
      return NextResponse.json({ ok: false, error: "Lead not found" }, { status: 404 })
    }

    // Fetch notes for this lead (adjust table/column names if yours differ)
    const { data: notes, error: notesError } = await supabase
      .from("lead_notes")
      .select("*")
      .eq("lead_id", id)
      .order("created_at", { ascending: true })

    if (notesError) {
      return NextResponse.json({ ok: false, error: "Failed to fetch notes" }, { status: 500 })
    }

    return NextResponse.json({ ok: true, lead, notes: notes ?? [] })
  } catch (err) {
    console.error("GET /api/broker/leads/[id] error:", err)
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 })
  }
}
