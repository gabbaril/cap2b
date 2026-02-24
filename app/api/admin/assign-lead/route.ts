import { NextResponse } from "next/server"
import { getSupabaseAdmin } from "@/lib/supabase-server"
import { sendLeadAssignmentEmail } from "@/lib/lead-assignment-email"

export async function POST(request: Request) {
  try {
    const supabase = getSupabaseAdmin()
    const body = await request.json()
    const { leadId, brokerId } = body

    const { data, error } = await supabase
      .from("leads")
      .update({
        assigned_to: brokerId,
        status: "assigned",
        assigned_at: new Date().toISOString(),
      })
      .eq("id", leadId)
      .select("id, lead_number, full_name, address, city")
      .single()

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    const { data: brokerData, error: brokerError } = await supabase
      .from("brokers")
      .select("email, full_name")
      .eq("id", brokerId)
      .single()

    if (brokerError) {
      console.error("[v0] Error fetching broker for assignment email:", brokerError)
    } else {
      try {
        await sendLeadAssignmentEmail({
          recipient: {
            email: brokerData.email,
            fullName: brokerData.full_name,
          },
          lead: {
            id: data.id,
            leadNumber: data.lead_number,
            fullName: data.full_name,
            address: data.address,
            city: data.city,
          },
        })
      } catch (emailError) {
        console.error("[v0] Error sending broker assignment email:", emailError)
      }
    }

    return NextResponse.json(data)
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
