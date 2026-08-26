# MS Coaching — Website

Produktionsreife Website für MS Coaching (AZAV-zugelassener Bildungsträger, Frankfurt am Main). Next.js 16 (App Router) · TypeScript · Tailwind CSS v4.

## Setup

```bash
npm install
cp .env.example .env.local   # Werte prüfen/anpassen, siehe unten
npm run dev
```

Website läuft danach unter [http://localhost:3000](http://localhost:3000).

## Environment-Variablen

Siehe [`./.env.example`](./.env.example) für alle Variablen mit Erklärung. Kurzfassung:

| Variable | Zweck | Ohne Konfiguration |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Kanonische Domain (SEO, Sitemap, OG) | Fällt auf `https://www.mscoaching.de` zurück |
| `NEXT_PUBLIC_PHONE_DISPLAY`, `NEXT_PUBLIC_EMAIL`, `NEXT_PUBLIC_WHATSAPP_NUMBER` | Kontaktangaben (Header, Footer, Kontaktseite) | Fällt auf die Angaben von Mazhars Visitenkarte zurück |
| `NEXT_PUBLIC_BOOKING_URL` | Externe Kalender-Buchungsseite auf `/termin` | Es wird ausschließlich das Terminanfrage-Formular angezeigt |
| `RESEND_API_KEY` **oder** `FORM_WEBHOOK_URL` | Tatsächlicher Versand der drei Formulare (Kontakt, Termin, AVGS-Schnellcheck) | In Development: Anfragen werden in die Server-Konsole geloggt (klar als Development gekennzeichnet). In Production: Formulare melden ehrlich "aktuell nicht übermittelbar" und verweisen auf Telefon/E-Mail/WhatsApp — es wird nie ein Erfolg vorgetäuscht. |

**Wichtiger Hinweis zur Domain:** Die vorhandene Visitenkarte nennt `www.mscoaching.com`, die E-Mail-Adresse nutzt aber `mscoaching.de`. Bitte vor Go-Live klären, welche Domain tatsächlich registriert ist, und `NEXT_PUBLIC_SITE_URL` entsprechend setzen.

## Checks

```bash
npm run lint        # ESLint (Next Core Web Vitals + TypeScript)
npx tsc --noEmit     # TypeScript-Typecheck
npm test             # Unit-Tests (AVGS-Entscheidungslogik + Formular-Validierung)
npm run build        # Produktions-Build, alle Seiten statisch vorgerendert
```

Alle vier Checks sind aktuell grün.

## Architektur

- **`lib/site-config.ts`** — zentrale Konfiguration (Kontakt, Adresse, Zertifikatsdaten, Navigation). Einziger Ort, an dem operative Daten gepflegt werden.
- **`lib/content/*`** — Inhalte (Module, Ablaufschritte, FAQ, Coach-Profil) getrennt von der Darstellung.
- **`lib/avgs-logic.ts`** — reine, testbare Entscheidungslogik für den AVGS-Schnellcheck (keine Anspruchszusage, nur Orientierung).
- **`lib/server/*`** — Validierung (Zod), Rate-Limiting-Schnittstelle, Lead-Versand-Adapter (Resend/Webhook/Dev-Fallback).
- **`app/*/actions.ts`** — Next.js Server Actions je Formular. Formulare funktionieren dadurch auch ohne JavaScript (Progressive Enhancement) und werden bei vorhandenem JavaScript um Lade-/Erfolgs-/Fehlerzustände ergänzt.
- **`components/*`** — wiederverwendbare UI-Bausteine (Header, Footer, Buttons, Karten, Stepper, Formularfelder, AVGS-Schnellcheck, FAQ-Accordion u. a.).

## Design-System

Tokens in `app/globals.css`: Navy `#1b222e` (dominant), Rot `#ec1c23` (sparsam, nur CTAs/große Akzente — als Fließtextfarbe auf Weiß bewusst vermieden, da der Kontrast unter WCAG-AA-Normaltext liegt), Radien in vier Stufen (`--radius-sm/md/lg/full`). Schrift: Manrope (Headlines/Fließtext), JetBrains Mono ausschließlich für Kennzahlen/Zertifikatsnummern.

## Bekannte externe Restschritte

- E-Mail-/CRM-Dienst für den Lead-Versand konfigurieren (`RESEND_API_KEY` oder `FORM_WEBHOOK_URL`).
- Kontaktdaten (Telefon, E-Mail, Domain) von Mazhar final bestätigen lassen (siehe `.env.example`).
- Optional: externe Kalenderbuchung (`NEXT_PUBLIC_BOOKING_URL`) einrichten, falls gewünscht.
- Impressum/Datenschutz vor Veröffentlichung durch eine rechtliche Prüfung gegenlesen lassen.
