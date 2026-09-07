function digitsOnly(value: string) {
  return value.replace(/[^\d]/g, "");
}

const phoneDisplay = process.env.NEXT_PUBLIC_PHONE_DISPLAY ?? "+49 177 9548140";
const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? digitsOnly(phoneDisplay);

export const siteConfig = {
  // "klarvoran" ist die öffentliche Marke/Website. Der AZAV-zugelassene Träger
  // dahinter ist rechtlich weiterhin "MS Coaching – Mazhar Said" (siehe legalName) –
  // dieser Name bleibt maßgeblich für Impressum, Zertifikat und alle rechtlich/
  // formal geprüfbaren Angaben (z. B. gegenüber Vermittlungsfachkräften).
  name: "klarvoran",
  legalName: "MS Coaching – Mazhar Said",
  founder: "Mazhar Said",
  claim: "Der schnellste Weg zur Arbeit",
  tagline: "Kostenloses Bewerbungscoaching mit AVGS",
  description:
    "klarvoran ist das Bewerbungscoaching-Programm von MS Coaching – Mazhar Said, einem AZAV-zugelassenen Bildungsträger in Frankfurt am Main. Individuelles Bewerbungscoaching nach § 45 SGB III – für Berechtigte kostenfrei mit AVGS.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.klarvoran.de",
  locale: "de_DE",

  contact: {
    phoneDisplay,
    phoneHref: `tel:${digitsOnly(phoneDisplay).replace(/^0/, "+49")}`,
    email: process.env.NEXT_PUBLIC_EMAIL ?? "hello@mscoaching.de",
    whatsappNumber,
    whatsappHref: (message?: string) =>
      `https://wa.me/${whatsappNumber}${message ? `?text=${encodeURIComponent(message)}` : ""}`,
  },

  // Ladungsfähige Anschrift des Trägers (aus CERTQUA-Trägerzertifikat / Visitenkarte).
  address: {
    company: "MS Coaching – Mazhar Said",
    street: "Kolberger Weg 23",
    zip: "65931",
    city: "Frankfurt am Main",
    country: "Deutschland",
    mapsQuery: encodeURIComponent("Kolberger Weg 23, 65931 Frankfurt am Main"),
  },

  // Durchführungsort für Präsenztermine. Genaue Anschrift ist in den Projektunterlagen
  // nicht hinterlegt – bewusst nicht erfunden, sondern zur Bestätigung markiert.
  presenceLocation: {
    name: "Kriftel Workspaces",
    region: "Kriftel, Main-Taunus-Kreis",
    note: "Die genaue Anschrift für dein Präsenzgespräch erhältst du mit der Terminbestätigung.",
    mapsQuery: encodeURIComponent("Kriftel Workspaces, Kriftel"),
  },

  certificate: {
    number: "26-20859-T",
    issuer: "CERTQUA",
    issuerFull:
      "CERTQUA – Gesellschaft der Deutschen Wirtschaft zur Förderung und Zertifizierung von Qualitätssicherungssystemen in der Beruflichen Bildung mbH, Bonn",
    legalBasis: "§ 178 SGB III",
    field: "FB1 – Maßnahmen zur Aktivierung und beruflichen Eingliederung nach § 45 Abs. 1 Satz 1 Nr. 1–5 SGB III",
    validFrom: "24.07.2026",
    validTo: "23.07.2031",
    pdfHref: "/dokumente/CERTQUA.pdf",
  },

  // Externe Kalender-Integration (z. B. Cal.com/Calendly). Wenn nicht gesetzt, wird
  // ausschließlich das Terminanfrage-Formular verwendet.
  booking: {
    url: process.env.NEXT_PUBLIC_BOOKING_URL || null,
  },

  kursnet: {
    id: "MSCoaching",
  },

  images: {
    badge: "/images/mazhar-badge.png",
  },

  nav: [
    { href: "/", label: "Startseite" },
    { href: "/ueber-uns", label: "Über uns" },
    { href: "/coaching-angebot", label: "Coaching-Angebot" },
    { href: "/avgs", label: "AVGS" },
    { href: "/ablauf", label: "Ablauf" },
    { href: "/ueber-den-coach", label: "Über den Coach" },
    { href: "/fachkraefte-kooperationspartner", label: "Fachkräfte & Partner" },
    { href: "/faq", label: "FAQ" },
    { href: "/kontakt", label: "Kontakt" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
