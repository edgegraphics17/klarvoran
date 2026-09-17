import type { Metadata } from "next";
import Image from "next/image";
import { Section, Eyebrow } from "@/components/Section";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Card, FactStat } from "@/components/Card";
import { CertificateSeal } from "@/components/CertificateSeal";
import { ContactForm } from "@/components/ContactForm";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Für soziale Einrichtungen, Caritas & Beratungsstellen",
  description:
    "KlarVoran unterstützt soziale Einrichtungen, Caritas, IB und Beratungsstellen mit externen Coaching- und Workshopangeboten für ihre Klientinnen und Klienten – unkompliziert, kooperativ, im Rhein-Main-Gebiet.",
  alternates: { canonical: "/fuer-soziale-einrichtungen" },
};

export default function FuerSozialeEinrichtungenPage() {
  return (
    <>
      <Breadcrumbs items={[{ href: "/fachkraefte-kooperationspartner", label: "Für Institutionen" }, { href: "/fuer-soziale-einrichtungen", label: "Soziale Einrichtungen" }]} />

      <Section tone="white" className="pt-12">
        <Eyebrow>Für soziale Einrichtungen, Caritas, IB & Beratungsstellen</Eyebrow>
        <h1 className="mt-4 max-w-3xl text-3xl font-bold text-navy sm:text-4xl">
          Ein externer Coaching-Partner für Ihre Klientinnen und Klienten
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy-600">
          KlarVoran (MS Coaching – Mazhar Said) ergänzt Ihre Arbeit dort, wo eigene Kapazitäten für individuelles
          Bewerbungscoaching oder Workshops fehlen – unkompliziert, verlässlich und ohne langen Abstimmungsaufwand.
        </p>
      </Section>

      <Section tone="tint">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-5">
          <FactStat value="1:1" label="Einzelcoaching" />
          <FactStat value="Workshops" label="Für Gruppen" />
          <FactStat value="AZAV" label="Zugelassener Träger" />
          <FactStat value="Rhein-Main" label="Präsenz, online, hybrid" />
        </div>
      </Section>

      {/* Trägerdaten: ausschließlich das Trägerzeichen, kein Maßnahmesiegel. */}
      <Section tone="white" className="py-12 sm:py-14">
        <Eyebrow>Trägerdaten im Überblick</Eyebrow>
        <div className="mt-6 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
          <CertificateSeal
            seal="traeger"
            caption="MS Coaching – Mazhar Said (Zugelassener Träger nach § 178 SGB III)"
          />
          <p className="max-w-md text-sm leading-relaxed text-navy-600">
            {siteConfig.legalName} ist eigenständig nach § 178 SGB III zugelassen und durch CERTQUA zertifiziert
            (Zertifikat {siteConfig.certificate.number}).
          </p>
        </div>
      </Section>

      <Section tone="white">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <Image
            src={siteConfig.images.team.einzelgespraech}
            alt="Individuelles Coaching-Gespräch"
            width={1600}
            height={678}
            className="hidden w-full rounded-[var(--radius-lg)] lg:block"
          />
          <div>
            <Eyebrow>Was wir anbieten</Eyebrow>
            <h2 className="mt-3 text-2xl font-bold text-navy sm:text-3xl">Passend zu Ihrem Klientel</h2>
          </div>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          <Card>
            <h3 className="font-semibold text-navy">Einzelcoaching</h3>
            <p className="mt-2 text-sm leading-relaxed text-navy-600">
              Individuelles Bewerbungs- und Orientierungscoaching für Klientinnen und Klienten mit AVGS oder als
              Selbstzahler-Angebot – siehe{" "}
              <a href="/leistungen/einzelcoaching" className="underline underline-offset-4 hover:text-red-700">
                1:1-Coaching
              </a>
              .
            </p>
          </Card>
          <Card>
            <h3 className="font-semibold text-navy">Niedrigschwellige Workshops</h3>
            <p className="mt-2 text-sm leading-relaxed text-navy-600">
              Kompakte Gruppenformate zu Bewerbung, Orientierung und digitaler Kompetenz – siehe{" "}
              <a href="/leistungen/workshops" className="underline underline-offset-4 hover:text-red-700">
                Workshops & Team-Coachings
              </a>
              .
            </p>
          </Card>
          <Card>
            <h3 className="font-semibold text-navy">Berufliche Orientierung & Bewerbungstraining</h3>
            <p className="mt-2 text-sm leading-relaxed text-navy-600">
              Von der Standortbestimmung bis zur bewerbungsfähigen Unterlagenmappe – strukturiert und individuell
              statt nach Schema F.
            </p>
          </Card>
          <Card>
            <h3 className="font-semibold text-navy">Direkte, verständliche Sprache</h3>
            <p className="mt-2 text-sm leading-relaxed text-navy-600">
              Erfahrung mit Menschen in schwierigen Lebenslagen, mit Migrationsgeschichte und mit
              Behörden- und Alltagsproblemen – ohne Bevormundung.
            </p>
          </Card>
        </div>
      </Section>

      <Section tone="tint">
        <Eyebrow tone="navy">Zusammenarbeit</Eyebrow>
        <h2 className="mt-3 text-2xl font-bold text-navy sm:text-3xl">Wie eine Kooperation aussehen kann</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          <Card>
            <h3 className="font-semibold text-navy">Direkte Zuweisung</h3>
            <p className="mt-2 text-sm leading-relaxed text-navy-600">
              Sie verweisen Klientinnen und Klienten an uns – mit AVGS über Jobcenter/Agentur für Arbeit oder als
              Selbstzahler-Termin.
            </p>
          </Card>
          <Card>
            <h3 className="font-semibold text-navy">Projekt- oder Budgetkooperation</h3>
            <p className="mt-2 text-sm leading-relaxed text-navy-600">
              Workshops oder Coaching-Kontingente im Rahmen eigener Projektmittel oder Budgets Ihrer Einrichtung –
              Umfang und Konditionen klären wir gemeinsam.
            </p>
          </Card>
          <Card>
            <h3 className="font-semibold text-navy">AZAV-Hintergrund</h3>
            <p className="mt-2 text-sm leading-relaxed text-navy-600">
              {siteConfig.legalName} ist eigenständig nach § 178 SGB III zugelassen und durch CERTQUA zertifiziert
              (Zertifikat {siteConfig.certificate.number}) – relevant, sobald Klientinnen und Klienten einen AVGS
              einbringen.
            </p>
          </Card>
          <Card>
            <h3 className="font-semibold text-navy">Ansprechpartner</h3>
            <p className="mt-2 text-sm leading-relaxed text-navy-600">
              Ein fester Ansprechpartner für alle Anfragen: {siteConfig.founder}, Gründer von KlarVoran – kurze
              Wege statt Callcenter.
            </p>
          </Card>
        </div>
      </Section>

      <Section tone="navy">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow tone="white">Kontakt aufnehmen</Eyebrow>
          <h2 className="mt-3 text-2xl font-bold sm:text-3xl">Kooperation oder Klientin/Klienten vorstellen</h2>
          <p className="mt-4 text-white/70">
            Schreiben Sie uns kurz, worum es geht – Einzelcoaching, Workshop-Anfrage oder grundsätzliches
            Kooperationsinteresse. Wir melden uns zeitnah zurück.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-xl rounded-[var(--radius-lg)] bg-white p-6 sm:p-8">
          <ContactForm />
        </div>
      </Section>
    </>
  );
}
