import type { Metadata } from "next";
import { Section, Eyebrow } from "@/components/Section";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Card, FactStat } from "@/components/Card";
import { CertificateFacts } from "@/components/CertificateFacts";
import { ContactForm } from "@/components/ContactForm";
import { coachingModules, totalUe } from "@/lib/content/modules";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Für Fachkräfte & Kooperationspartner",
  description:
    "Trägerstatus, Zulassung und Maßnahmedaten von MS Coaching für Vermittlungsfachkräfte bei Jobcenter/Agentur für Arbeit sowie Kooperationspartner.",
  alternates: { canonical: "/fachkraefte-kooperationspartner" },
};

export default function FachkraeftePage() {
  return (
    <>
      <Breadcrumbs items={[{ href: "/fachkraefte-kooperationspartner", label: "Fachkräfte & Kooperationspartner" }]} />
      <Section tone="white" className="pt-12">
        <Eyebrow>Für Fachkräfte & Kooperationspartner</Eyebrow>
        <h1 className="mt-4 max-w-3xl text-3xl font-bold text-navy sm:text-4xl">
          AZAV-zugelassener Träger für Ihre Zuweisung
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy-600">
          MS Coaching ist eigenständig nach § 178 SGB III als Träger zugelassen – mit eigener zugelassener
          Maßnahme, nicht als Honorarcoach im Coachpool eines fremden Trägers. Diese Seite gibt Ihnen als
          Vermittlungsfachkraft oder Kooperationspartner einen schnellen, belastbaren Überblick.
        </p>
      </Section>

      <Section tone="tint">
        <Eyebrow tone="navy">Zulassung</Eyebrow>
        <h2 className="mt-3 text-2xl font-bold text-navy sm:text-3xl">Trägerdaten im Überblick</h2>
        <div className="mt-8">
          <CertificateFacts />
        </div>
      </Section>

      <Section tone="white">
        <Eyebrow>Maßnahme</Eyebrow>
        <h2 className="mt-3 text-2xl font-bold text-navy sm:text-3xl">
          Individuelles Bewerbungscoaching und Aktivierung
        </h2>
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-5">
          <FactStat value={`${totalUe} UE`} label="à 45 Minuten" />
          <FactStat value="8 Wochen" label="Maximale Laufzeit" />
          <FactStat value="1:1" label="Einzelcoaching" />
          <FactStat value="§ 45 SGB III" label="Rechtsgrundlage" />
        </div>

        <div className="mt-8 overflow-x-auto rounded-[var(--radius-md)] border border-navy-100">
          <table className="w-full min-w-[560px] border-collapse text-left text-sm">
            <thead>
              <tr className="bg-navy-50 text-navy">
                <th scope="col" className="px-4 py-3 font-semibold">
                  Modul
                </th>
                <th scope="col" className="px-4 py-3 font-semibold">
                  Inhalt
                </th>
                <th scope="col" className="px-4 py-3 text-right font-mono font-semibold">
                  UE
                </th>
              </tr>
            </thead>
            <tbody>
              {coachingModules.map((m) => (
                <tr key={m.id} className="border-t border-navy-100 text-navy-600">
                  <td className="px-4 py-3 font-medium text-navy">{m.title}</td>
                  <td className="px-4 py-3">{m.outcome}</td>
                  <td className="px-4 py-3 text-right font-mono">{m.ue}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          <Card>
            <h3 className="font-semibold text-navy">Zielgruppe</h3>
            <p className="mt-2 text-sm leading-relaxed text-navy-600">
              Arbeitsuchende bzw. von Arbeitslosigkeit bedrohte Personen mit Unterstützungsbedarf bei beruflicher
              Orientierung, im Bewerbungsprozess oder bei der Integration – ausdrücklich auch Personen mit
              eingeschränkten Deutschkenntnissen oder fehlender Digitalkompetenz.
            </p>
          </Card>
          <Card>
            <h3 className="font-semibold text-navy">Durchführungsform</h3>
            <p className="mt-2 text-sm leading-relaxed text-navy-600">
              Präsenz ausschließlich in den {siteConfig.presenceLocation.name} ({siteConfig.presenceLocation.region}
              ), alternativ online oder hybrid. Keine Hausbesuche.
            </p>
          </Card>
          <Card>
            <h3 className="font-semibold text-navy">Dokumentation</h3>
            <p className="mt-2 text-sm leading-relaxed text-navy-600">
              Sitzungsdokumentation nach jeder Einheit, laufende Anwesenheitsdokumentation, Abschlussbericht und
              Teilnahmebescheinigung mit Maßnahmebezeichnung, Zeitraum, Umfang und Inhalten.
            </p>
          </Card>
          <Card>
            <h3 className="font-semibold text-navy">Meldekanal</h3>
            <p className="mt-2 text-sm leading-relaxed text-navy-600">
              MS Coaching ist unter der Kennung „{siteConfig.kursnet.id}“ auf KURSNET / arbeitsagentur.de gelistet.
              Für Zuweisungen erreichen Sie uns direkt über das Kontaktformular unten oder telefonisch.
            </p>
          </Card>
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
