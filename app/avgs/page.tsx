import type { Metadata } from "next";
import { Suspense } from "react";
import { Section, Eyebrow } from "@/components/Section";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Card } from "@/components/Card";
import { FaqAccordion } from "@/components/FaqAccordion";
import { AvgsSchnellcheck } from "@/components/AvgsSchnellcheck";
import { FaqStructuredData } from "@/components/StructuredData";
import { CtaSection } from "@/components/CtaSection";
import { CertificateSeal } from "@/components/CertificateSeal";
import { ProcessStepper } from "@/components/ProcessStepper";
import { avgsFaq } from "@/lib/content/faq";
import { processSteps } from "@/lib/content/process";

export const metadata: Metadata = {
  title: "AVGS verstehen & beantragen",
  description:
    "Was ist ein AVGS, was ist AZAV, wer bekommt einen Gutschein und wie läuft die Beantragung ab? Plus AVGS-Schnellcheck für eine erste Einschätzung.",
  alternates: { canonical: "/avgs" },
};

const guideSteps = [
  {
    title: "1. Beratungstermin wahrnehmen",
    text: "Gehe zu deinem regulären Beratungstermin bei Jobcenter oder Agentur für Arbeit.",
  },
  {
    title: "2. Bedarf aktiv ansprechen",
    text: "Sag konkret, dass du Unterstützung bei Bewerbung, Orientierung oder Vorstellungsgespräch brauchst und begründe, warum individuelles Coaching sinnvoll ist.",
  },
  {
    title: "3. Gutschein erhalten",
    text: "Ist deine Vermittlungsfachkraft einverstanden, erhältst du einen AVGS mit Gültigkeitsdauer, Förderziel und Kostenträger.",
  },
  {
    title: "4. Gutschein bei uns einreichen",
    text: "Bring deinen Gutschein zu KlarVoran – wir prüfen ihn unverbindlich im kostenlosen Erstgespräch.",
  },
];

export default function AvgsPage() {
  return (
    <>
      <Breadcrumbs items={[{ href: "/avgs", label: "AVGS" }]} />

      {/* Dunkelblauer Einstieg. */}
      <Section tone="navy" className="pt-12">
        <Eyebrow tone="white">AVGS &amp; AZAV</Eyebrow>
        <h1 className="mt-4 max-w-3xl text-3xl font-bold text-white sm:text-4xl">
          Was ist ein AVGS – und wie bekommst du ihn?
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
          Der Aktivierungs- und Vermittlungsgutschein (AVGS) nach § 45 SGB III ist ein Gutschein von Jobcenter oder
          Agentur für Arbeit, mit dem Coaching wie unseres finanziert wird. Für dich ist die Maßnahme dadurch
          kostenfrei.
        </p>
      </Section>

      {/* Zertifikatsbereich: beide Zeichen getrennt auf weißem Grund, mit exakter
          Beschriftung. Trägerzeichen verlinkt auf den Trägernachweis; das
          Maßnahmenzertifikat liegt nicht als separater Nachweis vor, daher wird das
          Maßnahmezeichen bewusst NICHT verlinkt (keine Blindverlinkung). */}
      <Section tone="white" className="py-12 sm:py-14">
        <Eyebrow>Zulassung &amp; Zertifizierung</Eyebrow>
        <h2 className="mt-3 text-2xl font-bold text-navy sm:text-3xl">Träger und Maßnahme – eindeutig zugeordnet</h2>
        <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-start">
          <CertificateSeal
            seal="traeger"
            caption="MS Coaching – Mazhar Said (Zugelassener Träger nach § 178 SGB III)"
          />
          <CertificateSeal
            seal="massnahme"
            caption="Individuelles Bewerbungscoaching nach § 45 SGB III (Zugelassene Maßnahme nach AZAV)"
          />
        </div>
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-navy-600">
          <strong className="font-semibold text-navy">KlarVoran</strong> ist das AZAV-zertifizierte
          Coaching-Programm von <em>MS Coaching – Mazhar Said</em> in Frankfurt am Main. Die Kosten für das
          individuelle 1:1-Bewerbungscoaching werden bei Vorliegen eines AVGS nach § 45 Abs. 1 SGB III zu
          100&nbsp;% übernommen.
        </p>
      </Section>

      <Section tone="tint">
        <div className="grid gap-6 sm:grid-cols-2">
          <Card>
            <h2 className="text-lg font-bold text-navy">Was ist die AZAV?</h2>
            <p className="mt-2 text-sm leading-relaxed text-navy-600">
              Die AZAV (Akkreditierungs- und Zulassungsverordnung Arbeitsförderung) legt fest, welche Anforderungen
              ein Bildungsträger erfüllen muss, um Maßnahmen der Arbeitsförderung durchführen zu dürfen. KlarVoran
              (MS Coaching – Mazhar Said) ist als Träger zugelassen und durch CERTQUA zertifiziert.
            </p>
          </Card>
          <Card>
            <h2 className="text-lg font-bold text-navy">Wer bekommt einen AVGS?</h2>
            <p className="mt-2 text-sm leading-relaxed text-navy-600">
              Arbeitsuchende bzw. von Arbeitslosigkeit bedrohte Personen mit Unterstützungsbedarf – nach Ermessen
              der Vermittlungsfachkraft. Es besteht kein automatischer Rechtsanspruch, daher lohnt sich eine gute
              Begründung.
            </p>
          </Card>
        </div>
      </Section>

      {/* Integrierter Ablauf: 5-stufiger Prozess direkt hier, keine eigene Ablauf-Seite. */}
      <Section tone="white" id="ablauf">
        <Eyebrow>Ablauf</Eyebrow>
        <h2 className="mt-3 text-2xl font-bold text-navy sm:text-3xl">So läuft dein Coaching ab</h2>
        <div className="mt-8">
          <ProcessStepper steps={processSteps} />
        </div>
      </Section>

      <Section tone="tint" id="leitfaden">
        <Eyebrow tone="navy">Leitfaden</Eyebrow>
        <h2 className="mt-3 text-2xl font-bold text-navy sm:text-3xl">So beantragst du einen AVGS</h2>
        <ol className="mt-8 grid gap-5 sm:grid-cols-2">
          {guideSteps.map((step) => (
            <li key={step.title} className="rounded-[var(--radius-md)] border border-navy-100 bg-white p-5">
              <h3 className="font-semibold text-navy">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-600">{step.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* Schnellcheck: innen hell, umrahmt von der dunkelblauen Sektion. */}
      <Section tone="navy" id="schnellcheck">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow tone="white">AVGS-Schnellcheck</Eyebrow>
          <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">Wo stehst du gerade?</h2>
          <p className="mt-3 text-white/80">
            Fünf kurze Schritte für eine erste, unverbindliche Einschätzung – keine Anspruchszusage, sondern
            Orientierung für dein Gespräch mit uns.
          </p>
        </div>
        <div className="mx-auto mt-8 max-w-2xl rounded-[var(--radius-lg)] bg-white p-2 sm:p-4">
          <Suspense fallback={<div className="h-96 animate-pulse rounded-[var(--radius-lg)] bg-navy-50" />}>
            <AvgsSchnellcheck />
          </Suspense>
        </div>
      </Section>

      <Section tone="white">
        <Eyebrow>FAQ</Eyebrow>
        <h2 className="mt-3 text-2xl font-bold text-navy sm:text-3xl">Fragen rund um AZAV &amp; AVGS</h2>
        <div className="mt-8">
          <FaqAccordion items={avgsFaq} />
        </div>
        <FaqStructuredData items={avgsFaq} />
      </Section>

      <CtaSection
        title="Unsicher, ob das auf dich zutrifft?"
        description="Kein Problem – im kostenlosen Erstgespräch schauen wir gemeinsam auf deine Situation."
      />
    </>
  );
}
