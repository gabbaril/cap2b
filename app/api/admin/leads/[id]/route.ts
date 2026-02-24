import { type NextRequest, NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"
import { Resend } from "resend"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    console.log("[v0] Fetching lead details for ID:", id)

    const supabase = createClient(supabaseUrl, supabaseServiceKey)

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

    if (error || !lead) {
      console.error("[v0] Error fetching lead:", error)
      return NextResponse.json({ error: "Lead not found" }, { status: 404 })
    }

    return NextResponse.json(lead)
  } catch (error) {
    console.error("[v0] Error in lead GET API:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const { brokerId } = (await request.json()) as {
      brokerId?: string | null
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey)

    const updates =
      brokerId
        ? {
          assigned_to: brokerId,
          status: "assigned",
          assigned_at: new Date().toISOString(),
        }
        : {
          assigned_to: null,
          status: "unassigned",
          assigned_at: null,
        }

    const { error } = await supabase
      .from("leads")
      .update(updates)
      .eq("id", id)

    if (error) {
      console.error("[v0] Error updating lead:", error)
      return NextResponse.json(
        { ok: false, error: error.message },
        { status: 500 }
      )
    }

    // Send courtesy email to broker when a lead is assigned
    if (brokerId && process.env.RESEND_API_KEY) {
      try {
        const resend = new Resend(process.env.RESEND_API_KEY)

        // Fetch broker info
        const { data: broker } = await supabase
          .from("brokers")
          .select("id, full_name, email")
          .eq("id", brokerId)
          .single()

        // Fetch lead info
        const { data: lead } = await supabase
          .from("leads")
          .select("id, full_name, email, phone, address, city, lead_number, property_type")
          .eq("id", id)
          .single()

        if (broker?.email && lead) {
          const leadUrl = `https://www.cap2b.ca/client/leads/${lead.id}`

          const emailHtml = `
<div style="font-family: Arial, sans-serif; font-size: 15px; line-height: 1.6; max-width: 600px; margin: 0 auto; padding: 20px;">
  <h2 style="color: #dc2626; margin-bottom: 20px;">Un nouveau lead vous a été attribué</h2>

  <p style="margin-bottom: 15px;">Bonjour ${broker.full_name},</p>

  <p style="margin-bottom: 20px;">Un nouveau lead vous a été attribué. Voici un résumé des informations :</p>

  <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 24px;">
    <tr>
      <td style="padding: 16px; background-color: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px;">
        <table width="100%" cellpadding="0" cellspacing="0">
          ${lead.lead_number ? `<tr><td style="padding: 6px 0; font-weight: bold; color: #374151; width: 140px;">Lead #:</td><td style="padding: 6px 0; color: #111827;">${lead.lead_number}</td></tr>` : ""}
          <tr><td style="padding: 6px 0; font-weight: bold; color: #374151; width: 140px;">Nom complet:</td><td style="padding: 6px 0; color: #111827;">${lead.full_name}</td></tr>
          ${lead.email ? `<tr><td style="padding: 6px 0; font-weight: bold; color: #374151;">Email:</td><td style="padding: 6px 0;"><a href="mailto:${lead.email}" style="color: #dc2626; text-decoration: none;">${lead.email}</a></td></tr>` : ""}
          ${lead.phone ? `<tr><td style="padding: 6px 0; font-weight: bold; color: #374151;">Téléphone:</td><td style="padding: 6px 0;"><a href="tel:${lead.phone}" style="color: #dc2626; text-decoration: none;">${lead.phone}</a></td></tr>` : ""}
          ${lead.address ? `<tr><td style="padding: 6px 0; font-weight: bold; color: #374151;">Adresse:</td><td style="padding: 6px 0; color: #111827;">${lead.address}${lead.city ? `, ${lead.city}` : ""}</td></tr>` : ""}
          ${lead.property_type ? `<tr><td style="padding: 6px 0; font-weight: bold; color: #374151;">Type de propriété:</td><td style="padding: 6px 0; color: #111827;">${lead.property_type}</td></tr>` : ""}
        </table>
      </td>
    </tr>
  </table>

  <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 24px;">
    <tr>
      <td align="center" style="padding: 10px 0;">
        <a href="${leadUrl}" 
           style="display: inline-block; background-color: #dc2626; color: #ffffff; padding: 14px 28px; text-decoration: none; border-radius: 6px; font-weight: bold; font-size: 14px;">
          Voir les détails complets du lead
        </a>
      </td>
    </tr>
  </table>

  <p style="margin-top: 30px;">Cordialement,<br/>L'équipe Cap2B</p>

  <p style="color: #9ca3af; font-size: 12px; margin-top: 24px;">Email envoyé automatiquement depuis cap2b.ca</p>
</div>`

          await resend.emails.send({
            from: "L'équipe Cap2B <nepasrepondre@cap2b.ca>",
            to: broker.email,
            subject: `Nouveau lead attribué - ${lead.full_name}${lead.address ? ` - ${lead.address}` : ""}`,
            html: emailHtml,
          })

          console.log(`[v0] Email d'assignation envoyé au courtier ${broker.email} pour le lead ${lead.id}`)
        }
      } catch (emailError: any) {
        // Non-bloquant: on log l'erreur mais on ne fail pas la requête
        console.error("[v0] Erreur envoi email d'assignation au courtier:", emailError)
      }
    }

    return NextResponse.json({ ok: true })
  } catch (error: any) {
    console.error("[v0] Error in PATCH lead:", error)
    return NextResponse.json(
      { ok: false, error: error.message },
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params

    const supabase = createClient(
      supabaseUrl,
      supabaseServiceKey
    )

    const { error } = await supabase
      .from("leads")
      .delete()
      .eq("id", id)

    if (error) {
      console.error("[v0] Error deleting lead:", error)
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      )
    }

    return NextResponse.json({ ok: true })
  } catch (error: any) {
    console.error("[v0] Error in DELETE lead:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
