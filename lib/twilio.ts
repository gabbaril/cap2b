/**
 * Twilio SMS integration using REST API directly (no npm package)
 * This avoids compatibility issues with the v0 runtime
 */

const TWILIO_API_BASE = "https://api.twilio.com/2010-04-01"

export function isTwilioConfigured() {
  return !!(
    process.env.TWILIO_ACCOUNT_SID && 
    process.env.TWILIO_AUTH_TOKEN && 
    process.env.TWILIO_PHONE_NUMBER
  )
}

export function getTwilioPhoneNumber() {
  return process.env.TWILIO_PHONE_NUMBER
}

/**
 * Format phone number to E.164 format for Twilio
 * Handles Canadian/US phone numbers
 */
export function formatPhoneForTwilio(phone: string): string {
  // Remove all non-numeric characters
  const cleaned = phone.replace(/\D/g, "")

  // If it starts with 1 (North America), add +
  if (cleaned.length === 11 && cleaned.startsWith("1")) {
    return `+${cleaned}`
  }

  // If it's 10 digits (North American without country code), add +1
  if (cleaned.length === 10) {
    return `+1${cleaned}`
  }

  // Otherwise, assume it already has country code
  return `+${cleaned}`
}

/**
 * Send an SMS via Twilio REST API
 * @param to - Phone number to send to
 * @param message - Message content
 */
export async function sendSms(to: string, message: string): Promise<{
  success: boolean
  messageId?: string
  error?: string
}> {
  const accountSid = process.env.TWILIO_ACCOUNT_SID
  const authToken = process.env.TWILIO_AUTH_TOKEN
  const fromNumber = process.env.TWILIO_PHONE_NUMBER

  if (!accountSid || !authToken) {
    return {
      success: false,
      error: "TWILIO_ACCOUNT_SID ou TWILIO_AUTH_TOKEN non configure.",
    }
  }

  if (!fromNumber) {
    return {
      success: false,
      error: "TWILIO_PHONE_NUMBER non configure.",
    }
  }

  try {
    const formattedTo = formatPhoneForTwilio(to)
    
    // Build form data for Twilio API
    const formData = new URLSearchParams()
    formData.append("To", formattedTo)
    formData.append("From", fromNumber)
    formData.append("Body", message)

    // Make request to Twilio REST API
    const response = await fetch(
      `${TWILIO_API_BASE}/Accounts/${accountSid}/Messages.json`,
      {
        method: "POST",
        headers: {
          "Authorization": `Basic ${Buffer.from(`${accountSid}:${authToken}`).toString("base64")}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData.toString(),
      }
    )

    const data = await response.json()

    if (!response.ok) {
      console.error("[Twilio] API error:", data)
      return {
        success: false,
        error: data.message || `Erreur Twilio (${response.status}): ${data.code || "Unknown"}`,
      }
    }

    console.log(`[Twilio] SMS envoye avec succes: ${data.sid}`)

    return {
      success: true,
      messageId: data.sid,
    }
  } catch (error: any) {
    console.error("[Twilio] Erreur envoi SMS:", error)

    return {
      success: false,
      error: error.message || "Erreur lors de l'envoi du SMS",
    }
  }
}
