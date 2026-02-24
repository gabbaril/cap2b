import { NextResponse } from "next/server"
import { getSupabaseAdmin } from "@/lib/supabase-server"
import { sendLeadAssignmentEmail } from "@/lib/lead-assignment-email"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { adminSecret, leadId, clientId } = body

    // Verify admin authorization
    if (!adminSecret || adminSecret !== process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
      return NextResponse.json({ ok: false, error: "Non autorisé" }, { status: 401 })
    }

    if (!leadId || !clientId) {
      return NextResponse.json({ ok: false, error: "Lead ID et Client ID requis" }, { status: 400 })
    }

    const supabase = getSupabaseAdmin()

    // Create assignment
    const { data: assignment, error: assignError } = await supabase
      .from("lead_assignments")
      .insert({
        lead_id: leadId,
        client_id: clientId,
        assigned_by: "admin",
      })
      .select()
      .single()

    if (assignError) {
      // Check if already assigned
      if (assignError.code === "23505") {
        return NextResponse.json({ ok: false, error: "Lead déjà assigné à ce client" }, { status: 400 })
      }
      return NextResponse.json({ ok: false, error: assignError.message }, { status: 500 })
    }

    const [{ data: clientData, error: clientError }, { data: leadData, error: leadError }] = await Promise.all([
      supabase.from("clients").select("email, full_name").eq("id", clientId).single(),
      supabase.from("leads").select("id, lead_number, full_name, address, city").eq("id", leadId).single(),
    ])

    let emailNotification: { ok: boolean; message?: string } | null = null

    if (clientError || leadError || !clientData || !leadData) {
      console.error("[v0] Erreur récupération données courriel assignation client:", { clientError, leadError })
      emailNotification = { ok: false, message: clientError?.message || leadError?.message || "Données manquantes" }
    } else {
      const emailResult = await sendLeadAssignmentEmail({
        recipient: {
          email: clientData.email,
          fullName: clientData.full_name,
        },
        lead: {
          id: leadData.id,
          leadNumber: leadData.lead_number,
          fullName: leadData.full_name,
          address: leadData.address,
          city: leadData.city,
        },
      })

      emailNotification = {
        ok: emailResult.ok,
        message: emailResult.message,
      }

      if (!emailResult.ok) {
        console.error("[v0] Courriel assignation client non envoyé:", emailResult)
      }
    }

    return NextResponse.json({ ok: true, assignment, emailNotification })
  } catch (err: any) {
    return NextResponse.json({ ok: false, error: `Exception: ${err.message}` }, { status: 500 })
  }
}
