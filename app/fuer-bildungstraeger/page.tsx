import type { Metadata } from "next";
import { Section, Eyebrow } from "@/components/Section";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Card, FactStat } from "@/components/Card";
import { CertificateFacts } from "@/components/CertificateFacts";
import { CertificateSeal } from "@/components/CertificateSeal";
import { ContactForm } from "@/components/ContactForm";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Für Bildungsträger & Kooperationspartner",
  description:
    "KlarVoran (MS Coaching – Mazhar Said) als Unterauftragnehmer, Honorardozent oder Jobcoach für Bildungsträger: eigene AZAV-Struktur, BvB-/Maßnahmeerfahrung, kurzfristiger regionaler Einsatz im Rhein-Main-Gebiet.",
  alternates: { canonical: "/fuer-bildungstraeger" },
};

export default function FuerBildungstraegerPage() {
  return (
    <>
      <Breadcrumbs items={[{ href: "/fachkraefte-kooperationspartner", label: "Für Institutionen" }, { href: "/fuer-bildungstraeger", label: "Bildungsträger" }]} />

      <Section tone="white" className="pt-12">
        <Eyebrow>Für Bildungsträger & Kooperationspartner</Eyebrow>
        <h1 className="mt-4 max-w-3xl text-3xl font-bold text-navy sm:text-4xl">
          Verlässlicher Jobcoach für Unteraufträge und Kooperationen
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy-600">
          {siteConfig.legalName} ist selbst nach § 178 SGB III als Träger zugelassen – kein Honorarcoach im
          Coachpool eines fremden Anbieters, sondern ein Partner mit eigener AZAV-Struktur, der auch als
          Unterauftragnehmer oder Honorardozent für andere Bildungsträger arbeitet.
        </p>
      </Section>

      <Section tone="tint">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-5">
          <FactStat value="AZAV" label="Eigene Trägerzulassung" />
          <FactStat value="BvB" label="Maßnahmeerfahrung" />
          <FactStat value="Rhein-Main" label="Kurzfristig regional einsetzbar" />
          <FactStat value="1:1" label="Jobcoaching & Bewerbungsmanagement" />
        </div>
      </Section>

      <Section tone="white">
        <Eyebrow>Einsatzmöglichkeiten</Eyebrow>
        <h2 className="mt-3 text-2xl font-bold text-navy sm:text-3xl">Wie Sie mit uns zusammenarbeiten können</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          <Card>
            <h3 className="font-semibold text-navy">Unterauftragnehmer</h3>
            <p className="mt-2 text-sm leading-relaxed text-navy-600">
              Durchführung von Coaching- oder Bewerbungsmodulen innerhalb Ihrer zugelassenen Maßnahme, auf Basis
              eines klar definierten Unterauftrags.
            </p>
          </Card>
          <Card>
            <h3 className="font-semibold text-navy">Honorardozent / Jobcoach</h3>
            <p className="mt-2 text-sm leading-relaxed text-navy-600">
              Einzelcoaching, Bewerbungsmanagement oder Gruppeneinheiten innerhalb Ihrer Programme – auf
              Honorarbasis.
            </p>
          </Card>
          <Card>
            <h3 className="font-semibold text-navy">Vertretung</h3>
            <p className="mt-2 text-sm leading-relaxed text-navy-600">
              Kurzfristige Vertretung bei Ausfall eigener Coaches, damit laufende Maßnahmen ohne Unterbrechung
              weiterlaufen.
            </p>
          </Card>
          <Card>
            <h3 className="font-semibold text-navy">Bewerbungsmanagement</h3>
            <p className="mt-2 text-sm leading-relaxed text-navy-600">
              Strukturierte Betreuung von Bewerbungsunterlagen, Stellenrecherche und Bewerbungsstrategie für Ihre
              Teilnehmenden.
            </p>
          </Card>
        </div>
      </Section>

      <Section tone="tint">
        <Eyebrow tone="navy">Erfahrung & Reichweite</Eyebrow>
        <h2 className="mt-3 text-2xl font-bold text-navy sm:text-3xl">Warum KlarVoran als Partner</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          <Card>
            <h3 className="font-semibold text-navy">BvB- und Maßnahmeerfahrung</h3>
            <p className="mt-2 text-sm leading-relaxed text-navy-600">
              Erfahrung als Coach und Dozent in der Erwachsenenbildung und in berufsvorbereitenden Bildungsmaßnahmen
              (BvB) – nicht nur in der eigenen Maßnahme.
            </p>
          </Card>
          <Card>
            <h3 className="font-semibold text-navy">Eigene AZAV-Struktur</h3>
            <p className="mt-2 text-sm leading-relaxed text-navy-600">
              Als eigenständig zugelassener Träger kennen wir die formalen Anforderungen an Dokumentation,
              Qualitätssicherung und Nachweisführung aus erster Hand.
            </p>
          </Card>
          <Card>
            <h3 className="font-semibold text-navy">Kurzfristige regionale Einsetzbarkeit</h3>
            <p className="mt-2 text-sm leading-relaxed text-navy-600">
              Präsenz in den {siteConfig.presenceLocation.name} ({siteConfig.presenceLocation.region}), online oder
              hybrid – auch für kurzfristigen Bedarf im Rhein-Main-Gebiet.
            </p>
          </Card>
          <Card>
            <h3 className="font-semibold text-navy">Zertifizierung</h3>
            <p className="mt-2 text-sm leading-relaxed text-navy-600">
              CERTQUA-zertifiziert ({siteConfig.certificate.number}), Fachbereich FB1 nach § 45 Abs. 1 SGB III.
            </p>
          </Card>
        </div>
      </Section>

      <Section tone="white">
        <Eyebrow>Trägerdaten</Eyebrow>
        <h2 className="mt-3 text-2xl font-bold text-navy sm:text-3xl">Zulassung im Überblick</h2>
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
          <Eyebrow tone="white">Kooperation anfragen</Eyebrow>
          <h2 className="mt-3 text-2xl font-bold sm:text-3xl">Unterauftrag oder Kooperation besprechen</h2>
          <p className="mt-4 text-white/70">
            Schreiben Sie uns kurz Ihren Bedarf – Umfang, Zeitraum und Art des Einsatzes. Wir melden uns zeitnah
            zurück.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-xl rounded-[var(--radius-lg)] bg-white p-6 sm:p-8">
          <ContactForm />
        </div>
      </Section>
    </>
  );
}
