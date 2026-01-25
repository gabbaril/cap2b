import { NextResponse } from "next/server"
import { getSupabaseAdmin } from "@/lib/supabase-server"
import { sendSms, isTwilioConfigured } from "@/lib/twilio"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { leadId, adminSecret, sendSmsNotification, leadPhone, leadName } = body

    // Verify admin secret
    if (!adminSecret || adminSecret !== process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
      return NextResponse.json({ ok: false, error: "Non autorisé" }, { status: 401 })
    }

    if (!leadId) {
      return NextResponse.json({ ok: false, error: "Lead ID manquant" }, { status: 400 })
    }

    const supabase = getSupabaseAdmin()

    // Verify lead exists
    const { data: lead, error: leadError } = await supabase.from("leads").select("id").eq("id", leadId).single()

    if (leadError || !lead) {
      return NextResponse.json({ ok: false, error: "Lead introuvable" }, { status: 404 })
    }

    // Generate new token
    const newToken = `${leadId}-${Date.now()}-${Math.random().toString(36).substring(2, 15)}`
    const expiresAt = new Date()
    expiresAt.setHours(expiresAt.getHours() + 72)

    const { data: tokenData, error: tokenError } = await supabase
      .from("lead_access_tokens")
      .insert({
        lead_id: leadId,
        token: newToken,
        expires_at: expiresAt.toISOString(),
      })
      .select()
      .single()

    if (tokenError) {
      return NextResponse.json({ ok: false, error: "Erreur création token" }, { status: 500 })
    }

    const finalizationUrl = `${process.env.NEXT_PUBLIC_SITE_URL || "https://www.valeurmaisonrapide.com"}/admin/finaliser?token=${newToken}`

    // Send SMS notification if requested
    let smsResult = null
    if (sendSmsNotification && leadPhone && isTwilioConfigured()) {
      try {
        const smsMessage = `Bonjour${leadName ? ` ${leadName}` : ''},\n\nVoici votre nouveau lien pour finaliser votre fiche d'evaluation:\n${finalizationUrl}\n\nCe lien est valide 72h.\n\nValeur Maison Rapide`
        smsResult = await sendSms(leadPhone, smsMessage)
        console.log("[v0] SMS de nouveau token envoyé à:", leadPhone)
      } catch (smsError: any) {
        console.error("[v0] Erreur envoi SMS token:", smsError)
      }
    }

    return NextResponse.json({
      ok: true,
      token: newToken,
      url: finalizationUrl,
      expires_at: expiresAt.toISOString(),
      smsResult,
    })
  } catch (err: any) {
    return NextResponse.json({ ok: false, error: `Exception: ${err.message}` }, { status: 500 })
  }
}
