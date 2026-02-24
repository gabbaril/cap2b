import { Resend } from "resend"

type AssignmentRecipient = {
  email: string
  fullName?: string | null
}

type LeadSummary = {
  id: string
  leadNumber?: string | null
  fullName: string
  address?: string | null
  city?: string | null
}

export type LeadAssignmentEmailResult = {
  ok: boolean
  reason?: "missing_api_key" | "missing_recipient" | "resend_error"
  message?: string
}

const DEFAULT_SITE_URL = "https://www.cap2b.ca"
const DEFAULT_FROM_EMAIL = "CAP2B <onboarding@resend.dev>"

export async function sendLeadAssignmentEmail({
  recipient,
  lead,
}: {
  recipient: AssignmentRecipient
  lead: LeadSummary
}): Promise<LeadAssignmentEmailResult> {
  if (!process.env.RESEND_API_KEY) {
    return {
      ok: false,
      reason: "missing_api_key",
      message: "RESEND_API_KEY manquante",
    }
  }

  if (!recipient.email) {
    return {
      ok: false,
      reason: "missing_recipient",
      message: "Aucun destinataire de courriel",
    }
  }

  const resend = new Resend(process.env.RESEND_API_KEY)
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || DEFAULT_SITE_URL
  const fromEmail = process.env.RESEND_FROM_EMAIL || DEFAULT_FROM_EMAIL
  const leadUrl = `${siteUrl}/client/leads/${lead.id}`
  const recipientName = recipient.fullName || "Bonjour"
  const leadLabel = lead.leadNumber ? `Lead ${lead.leadNumber}` : "Nouveau lead"
  const leadLocation = [lead.address, lead.city].filter(Boolean).join(", ")

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 620px; margin: 0 auto; color: #111827;">
      <h2 style="margin-bottom: 8px;">${leadLabel} assigné</h2>
      <p style="margin: 0 0 16px 0;">${recipientName},</p>
      <p style="margin: 0 0 12px 0;">Un lead vous a été attribué dans la plateforme CAP2B.</p>
      <div style="background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px; padding: 12px 16px; margin: 0 0 16px 0;">
        <p style="margin: 0 0 6px 0;"><strong>Nom:</strong> ${lead.fullName}</p>
        ${leadLocation ? `<p style="margin: 0;"><strong>Adresse:</strong> ${leadLocation}</p>` : ""}
      </div>
      <a href="${leadUrl}" style="display:inline-block;background:#dc2626;color:#ffffff;text-decoration:none;font-weight:700;font-size:14px;padding:12px 18px;border-radius:8px;">
        Ouvrir le lead dans la plateforme
      </a>
      <p style="color:#6b7280;font-size:12px;margin-top:24px;">Courriel automatisé envoyé par CAP2B.</p>
    </div>
  `

  const { error } = await resend.emails.send({
    from: fromEmail,
    to: [recipient.email],
    subject: `${leadLabel} - ${lead.fullName}`,
    html,
  })

  if (error) {
    return {
      ok: false,
      reason: "resend_error",
      message: error.message,
    }
  }

  return { ok: true }
}
