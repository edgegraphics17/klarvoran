import type { Metadata } from "next";
import Image from "next/image";
import { Section, Eyebrow } from "@/components/Section";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CertificateFacts } from "@/components/CertificateFacts";
import { CertificateSeal } from "@/components/CertificateSeal";
import { ContactForm } from "@/components/ContactForm";
import { InstitutionCard, type InstitutionTarget } from "@/components/InstitutionCard";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Für Institutionen & Kooperationspartner",
  description:
    "KlarVoran (MS Coaching – Mazhar Said) für Jobcenter, Agentur für Arbeit, soziale Einrichtungen, Bildungsträger, Kommunen und öffentliche Auftraggeber.",
  alternates: { canonical: "/fachkraefte-kooperationspartner" },
};

const audiences: InstitutionTarget[] = [
  {
    title: "Jobcenter & Agentur für Arbeit",
    text: "AVGS, § 45 SGB III, Maßnahmezulassung, Zielgruppe, Ablauf und Ansprechpartner für Ihre Zuweisung.",
    href: "/fuer-jobcenter",
    cta: "Zur Jobcenter-Seite",
  },
  {
    title: "Soziale Einrichtungen & Beratungsstellen",
    text: "Externe Coaching- und Workshopangebote, berufliche Orientierung und Kooperationsmöglichkeiten für Ihre Klientinnen und Klienten.",
    href: "/fuer-soziale-einrichtungen",
    cta: "Zur Seite für soziale Einrichtungen",
  },
  {
    title: "Bildungsträger & Kooperationspartner",
    text: "Unterauftragnehmer, Honorardozent oder Vertretung – eigene AZAV-Struktur und Maßnahmeerfahrung.",
    href: "/fuer-bildungstraeger",
    cta: "Zur Seite für Bildungsträger",
  },
  {
    title: "Kommunen & öffentliche Auftraggeber",
    text: "Klar abgegrenzte Bildungs-, Coaching- und Workshopaufträge für regionale Projekte und Vorhaben.",
    href: "/fuer-kommunen",
    cta: "Zur Seite für Kommunen",
  },
];

export default function FachkraeftePage() {
  return (
    <>
      <Breadcrumbs items={[{ href: "/fachkraefte-kooperationspartner", label: "Für Institutionen" }]} />
      <Section tone="navy" className="pt-12">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.7fr]">
          <div>
            <Eyebrow tone="white">Für Institutionen & Kooperationspartner</Eyebrow>
            <h1 className="mt-4 max-w-3xl text-3xl font-bold text-white sm:text-4xl">
              Ein Träger, vier passende Wege
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
              KlarVoran ist die Marke, unter der {siteConfig.legalName} auftritt: eigenständig nach § 178 SGB III als
              Träger zugelassen. Wählen Sie den Bereich, der zu Ihrer Institution passt – für alle anderen Fragen
              erreichen Sie uns unten direkt.
            </p>
          </div>
          <Image
            src={"/images/team/meeting-tablet.jpg"}
            alt="Abstimmungsgespräch mit einem Kooperationspartner"
            width={1400}
            height={781}
            className="hidden w-full rounded-[var(--radius-lg)] lg:block"
          />
        </div>
      </Section>

      <Section tone="tint">
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((a) => (
            <InstitutionCard key={a.href} target={a} />
          ))}
        </ul>
      </Section>

      <Section tone="white">
        <Eyebrow>Zulassung</Eyebrow>
        <h2 className="mt-3 text-2xl font-bold text-navy sm:text-3xl">Trägerdaten im Überblick</h2>
        <div className="mt-8 grid items-start gap-8 lg:grid-cols-[280px_1fr]">
          {/* Ausschließlich das Trägerzeichen – kein pauschales Maßnahmesiegel. */}
          <CertificateSeal
            seal="traeger"
            caption="MS Coaching – Mazhar Said (Zugelassener Träger nach § 178 SGB III)"
          />
          <CertificateFacts />
        </div>
      </Section>

      <Section tone="navy">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow tone="white">Kooperationsanfrage</Eyebrow>
          <h2 className="mt-3 text-2xl font-bold sm:text-3xl">Teilnehmer zuweisen oder Kooperation anfragen</h2>
          <p className="mt-4 text-white/70">
            Ob Zuweisung, Rückfrage zur Maßnahme oder Anfrage als Kooperationspartner – schreiben Sie uns direkt.
            Wir melden uns zeitnah zurück.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-xl rounded-[var(--radius-lg)] bg-white p-6 sm:p-8">
          <ContactForm />
        </div>
      </Section>
    </>
  );
}
