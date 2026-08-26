import { z } from "zod";

const name = z.string().trim().min(2, "Bitte gib deinen Namen ein.").max(120);
const email = z.string().trim().email("Bitte gib eine gültige E-Mail-Adresse ein.");
const phone = z
  .string()
  .trim()
  .max(40)
  .optional()
  .or(z.literal(""));
const consent = z
  .union([z.literal("on"), z.literal("true"), z.boolean()])
  .refine((v) => v === "on" || v === "true" || v === true, {
    message: "Bitte stimme der Datenschutzerklärung zu.",
  });
// Honeypot: must stay empty. Bots that fill every field trip this.
const honeypot = z.string().max(0, "Ungültige Übermittlung.").optional().or(z.literal(""));

export const contactSchema = z.object({
  name,
  email,
  phone,
  message: z.string().trim().min(10, "Bitte beschreibe dein Anliegen etwas ausführlicher.").max(4000),
  consent,
  website: honeypot,
});

export const appointmentSchema = z.object({
  name,
  email,
  phone,
  format: z.enum(["praesenz_kriftel", "online", "hybrid", "unsicher"]),
  hasAvgs: z.enum(["ja", "nein", "unsicher"]),
  message: z.string().trim().max(4000).optional().or(z.literal("")),
  consent,
  website: honeypot,
});

export const avgsCheckSchema = z.object({
  status: z.enum(["hat_avgs", "moechte_beantragen", "unsicher"]),
  traeger: z.enum(["jobcenter", "arbeitsagentur", "andere_unsicher"]),
  anliegen: z.enum([
    "bewerbungsunterlagen",
    "berufliche_orientierung",
    "ausbildungsplatz",
    "vorstellungsgespraech",
    "anderes",
  ]),
  format: z.enum(["praesenz_kriftel", "online", "hybrid", "unsicher"]),
  name,
  email,
  phone,
  consent,
  source: z.string().trim().max(200).optional().or(z.literal("")),
  website: honeypot,
});

export type ContactInput = z.infer<typeof contactSchema>;
export type AppointmentInput = z.infer<typeof appointmentSchema>;
export type AvgsCheckInput = z.infer<typeof avgsCheckSchema>;
