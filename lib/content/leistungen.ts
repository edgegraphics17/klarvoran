export type Leistung = {
  id: string;
  eyebrow: string;
  title: string;
  audience: string;
  summary: string;
  bullets: string[];
  price: string;
  href: string;
  ctaLabel: string;
};

export const leistungen: Leistung[] = [
  {
    id: "avgs",
    eyebrow: "Für Arbeitsuchende mit Gutschein",
    title: "AVGS-Bewerbungscoaching",
    audience: "Jobcenter & Agentur für Arbeit",
    summary:
      "Individuelles 1:1-Coaching nach § 45 SGB III im Rahmen unserer zugelassenen Maßnahme – mit bewilligtem AVGS für dich kostenfrei.",
    bullets: [
      "32 Einheiten in bis zu 8 Wochen",
      "1:1-Einzelcoaching, keine Gruppe",
      "AZAV-zugelassen, CERTQUA-zertifiziert",
    ],
    price: "0 € mit bewilligtem AVGS",
    href: "/avgs",
    ctaLabel: "AVGS-Coaching ansehen",
  },
  {
    id: "einzelcoaching",
    eyebrow: "Für alle ohne AVGS-Anspruch",
    title: "1:1-Coaching",
    audience: "Selbstzahler",
    summary:
      "Dieselbe individuelle Coaching-Methode wie im AVGS-Programm – auch ohne Gutschein, in freiem Umfang und Format.",
    bullets: [
      "Umfang und Themen individuell abgestimmt",
      "Online, hybrid oder in Präsenz",
      "Bewerbung, Orientierung oder beides",
    ],
    price: "Preise auf Anfrage",
    href: "/leistungen/einzelcoaching",
    ctaLabel: "1:1-Coaching entdecken",
  },
  {
    id: "workshops",
    eyebrow: "Für Gruppen, Klassen & Teams",
    title: "Workshops & Team-Coachings",
    audience: "Institutionen & Unternehmen",
    summary:
      "Kompakte Formate zu Bewerbung, beruflicher Orientierung und digitaler Kompetenz für Gruppen bei Einrichtungen, Schulen und Unternehmen.",
    bullets: [
      "Halbtags-, Ganztags- oder Modulformat",
      "Themen individuell nach Bedarf",
      "Für Gruppen, vor Ort oder online",
    ],
    price: "Individuell, auf Anfrage",
    href: "/leistungen/workshops",
    ctaLabel: "Workshops entdecken",
  },
  {
    id: "kooperationen",
    eyebrow: "Jobcenter, Träger & Einrichtungen",
    title: "Für Institutionen",
    audience: "Kooperation & Zuweisung",
    summary:
      "Zuweisung, Kooperation oder Unterauftrag: passende Informationen für Vermittlungsfachkräfte, soziale Einrichtungen und Bildungsträger.",
    bullets: [
      "AZAV-Trägerdaten & Zulassung auf einen Blick",
      "Eigene Seite je Zielgruppe",
      "Direkter Kontakt für Kooperationsanfragen",
    ],
    price: "",
    href: "/fachkraefte-kooperationspartner",
    ctaLabel: "Für Institutionen",
  },
];
