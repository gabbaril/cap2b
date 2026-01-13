import { NextResponse } from "next/server"
import { getSupabaseAdmin } from "@/lib/supabase-server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { leadId, adminSecret } = body

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

    return NextResponse.json({
      ok: true,
      token: newToken,
      url: finalizationUrl,
      expires_at: expiresAt.toISOString(),
    })
  } catch (err: any) {
    return NextResponse.json({ ok: false, error: `Exception: ${err.message}` }, { status: 500 })
  }
}
