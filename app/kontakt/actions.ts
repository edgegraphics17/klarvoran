"use server";

import { contactSchema } from "@/lib/server/schemas";
import { sendLead } from "@/lib/server/mailer";
import { checkRateLimit } from "@/lib/server/rate-limit";
import { getClientIp } from "@/lib/server/request-ip";
import type { ActionState } from "@/lib/server/action-state";

export async function submitContactForm(_prev: ActionState, formData: FormData): Promise<ActionState> {
  const ip = await getClientIp();
  const rate = checkRateLimit(`kontakt:${ip}`, 5, 60_000);
  if (!rate.allowed) {
    return {
      status: "rate-limited",
      message: `Zu viele Anfragen. Bitte versuche es in ${rate.retryAfterSeconds} Sekunden erneut oder schreib uns direkt per WhatsApp.`,
    };
  }

  const raw = Object.fromEntries(formData.entries());
  const parsed = contactSchema.safeParse(raw);

  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0]?.toString();
      if (key && !fieldErrors[key]) fieldErrors[key] = issue.message;
    }
    return { status: "error", message: "Bitte überprüfe deine Eingaben.", fieldErrors };
  }

  if (parsed.data.website) {
    // Honeypot ausgelöst – stiller Erfolg, kein echter Versand.
    return { status: "success", message: "Danke für deine Nachricht! Wir melden uns zeitnah bei dir." };
  }

  const result = await sendLead({
    formType: "kontakt",
    name: parsed.data.name,
    email: parsed.data.email,
    phone: parsed.data.phone || undefined,
    summaryLines: ["Nachricht:", parsed.data.message],
  });

  if (result.dev) {
    return {
      status: "dev-success",
      message:
        "Development-Modus: Kein E-Mail-Dienst konfiguriert. Deine Anfrage wurde in der Server-Konsole protokolliert, nicht wirklich versendet.",
    };
  }

  if (!result.delivered) {
    return {
      status: "error",
      message:
        "Deine Anfrage konnte gerade nicht übermittelt werden. Bitte erreiche uns in der Zwischenzeit direkt per Telefon, E-Mail oder WhatsApp.",
    };
  }

  return { status: "success", message: "Danke für deine Nachricht! Wir melden uns zeitnah bei dir." };
}
