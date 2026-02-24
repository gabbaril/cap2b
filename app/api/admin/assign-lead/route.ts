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

    let emailNotification: { ok: boolean; message?: string } | null = null

    if (brokerError) {
      console.error("[v0] Error fetching broker for assignment email:", brokerError)
      emailNotification = { ok: false, message: brokerError.message }
    } else {
      const emailResult = await sendLeadAssignmentEmail({
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

      emailNotification = {
        ok: emailResult.ok,
        message: emailResult.message,
      }

      if (!emailResult.ok) {
        console.error("[v0] Broker assignment email not sent:", emailResult)
      }
    }

    return NextResponse.json({ ...data, emailNotification })
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
