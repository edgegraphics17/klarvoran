import type { Metadata } from "next";
import { Section, Eyebrow } from "@/components/Section";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzerklärung für KlarVoran (MS Coaching – Mazhar Said) gemäß DSGVO.",
  alternates: { canonical: "/datenschutz" },
};

export default function DatenschutzPage() {
  return (
    <>
      <Breadcrumbs items={[{ href: "/datenschutz", label: "Datenschutz" }]} />
      <Section tone="white" className="pt-12">
        <Eyebrow>Datenschutz</Eyebrow>
        <h1 className="mt-4 text-3xl font-bold text-navy sm:text-4xl">Datenschutzerklärung</h1>

        <div className="mt-10 max-w-2xl space-y-10 text-navy-600">
          <div className="rounded-[var(--radius-md)] border border-navy-100 bg-navy-50 p-5 text-sm">
            <p>
              <strong className="font-semibold text-navy">Hinweis:</strong> Dieser Text bietet eine strukturierte
              Grundlage und ersetzt keine individuelle Rechtsberatung. Bitte lass ihn – insbesondere Angaben zu
              Hosting und eingesetzten Dienstleistern – vor Veröffentlichung final prüfen.
            </p>
          </div>

          <section>
            <h2 className="text-xl font-bold text-navy">1. Verantwortlicher</h2>
            <p className="mt-3">
              {siteConfig.legalName}
              <br />
              {siteConfig.address.street}, {siteConfig.address.zip} {siteConfig.address.city}
              <br />
              E-Mail: {siteConfig.contact.email} · Telefon: {siteConfig.contact.phoneDisplay}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy">2. Server-Logfiles</h2>
            <p className="mt-3">
              Beim Aufruf dieser Website erhebt der Hosting-Anbieter automatisch technische Zugriffsdaten (z. B.
              IP-Adresse, Datum/Uhrzeit, aufgerufene Seite, Browsertyp), um die Website sicher und stabil
              auszuliefern (Art. 6 Abs. 1 lit. f DSGVO). Diese Daten werden nicht mit anderen Datenquellen
              zusammengeführt.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy">3. Kontakt-, Termin- und AVGS-Schnellcheck-Formulare</h2>
            <p className="mt-3">
              Wenn du unser Kontaktformular, das Terminanfrage-Formular oder den AVGS-Schnellcheck nutzt,
              verarbeiten wir die von dir angegebenen Daten (z. B. Name, E-Mail-Adresse, optional Telefonnummer,
              deine Angaben zu AVGS-Status und Anliegen) ausschließlich zur Bearbeitung deiner Anfrage (Art. 6 Abs.
              1 lit. b DSGVO – vorvertragliche Maßnahme, bzw. lit. a bei erteilter Einwilligung). Die Angaben werden
              nicht für Werbezwecke genutzt und nicht an Dritte außerhalb der Anfragebearbeitung weitergegeben.
            </p>
            <p className="mt-3">
              Wir verzichten bewusst auf die Abfrage sensibler Gesundheits- oder Sozialdaten in diesen Formularen.
              Solche Angaben werden – falls im weiteren Verlauf des Coachings erforderlich – ausschließlich über
              gesonderte, für diesen Zweck vorgesehene und abgesicherte Aufnahmeunterlagen erhoben.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy">4. Speicherdauer</h2>
            <p className="mt-3">
              Anfragedaten werden gelöscht, sobald sie für die Bearbeitung deiner Anfrage nicht mehr erforderlich
              sind, spätestens jedoch nach Ablauf gesetzlicher Aufbewahrungsfristen. Kommt eine Coaching-Maßnahme
              zustande, gelten die Dokumentations- und Aufbewahrungspflichten nach AZAV bzw. SGB III.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy">5. Keine Cookies, kein Tracking ohne Einwilligung</h2>
            <p className="mt-3">
              Diese Website setzt aktuell keine Analyse- oder Marketing-Cookies und keine Tracking-Dienste ein.
              Sollte künftig ein solcher Dienst hinzukommen, geschieht dies nur nach vorheriger, ausdrücklicher
              Einwilligung über ein Consent-Banner.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy">6. Externe Links & Karten</h2>
            <p className="mt-3">
              Links zu Google Maps öffnen sich in einem neuen Tab und laden erst nach deinem Klick – es werden
              keine Kartendaten von Google automatisch beim Seitenaufruf nachgeladen.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy">7. Deine Rechte</h2>
            <p className="mt-3">
              Du hast das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung,
              Datenübertragbarkeit sowie Widerspruch gegen die Verarbeitung deiner Daten. Zudem hast du das Recht,
              dich bei einer Datenschutzaufsichtsbehörde zu beschweren. Wende dich hierzu an{" "}
              {siteConfig.contact.email}.
            </p>
          </section>
        </div>
      </Section>
    </>
  );
}
