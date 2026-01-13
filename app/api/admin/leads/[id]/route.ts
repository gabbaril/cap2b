import { type NextRequest, NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params
    console.log("[v0] Fetching lead details for ID:", id)

    const supabase = createClient(supabaseUrl, supabaseServiceKey)

    // Récupérer le lead avec toutes ses informations
    const { data: lead, error } = await supabase
      .from("leads")
      .select(`
        *,
        brokers:assigned_to (
          id,
          full_name,
          email,
          company_name
        )
      `)
      .eq("id", id)
      .single()

    if (error) {
      console.error("[v0] Error fetching lead:", error)
      return NextResponse.json({ error: "Lead not found" }, { status: 404 })
    }

    console.log("[v0] Lead fetched successfully:", lead?.lead_number)
    return NextResponse.json(lead)
  } catch (error) {
    console.error("[v0] Error in lead details API:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
