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

const DEFAULT_SITE_URL = "https://www.cap2b.ca"

export async function sendLeadAssignmentEmail({
  recipient,
  lead,
}: {
  recipient: AssignmentRecipient
  lead: LeadSummary
}) {
  if (!process.env.RESEND_API_KEY || !recipient.email) {
    return
  }

  const resend = new Resend(process.env.RESEND_API_KEY)
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || DEFAULT_SITE_URL
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

  await resend.emails.send({
    from: "CAP2B <nepasrepondre@valeurmaisonrapide.com>",
    to: [recipient.email],
    subject: `${leadLabel} - ${lead.fullName}`,
    html,
  })
}
