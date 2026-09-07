import type { Metadata } from "next";
import { Suspense } from "react";
import { Section, Eyebrow } from "@/components/Section";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Card } from "@/components/Card";
import { FaqAccordion } from "@/components/FaqAccordion";
import { AvgsSchnellcheck } from "@/components/AvgsSchnellcheck";
import { FaqStructuredData } from "@/components/StructuredData";
import { CtaSection } from "@/components/CtaSection";
import { avgsFaq } from "@/lib/content/faq";

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
    text: "Bring deinen Gutschein zu klarvoran – wir prüfen ihn unverbindlich im kostenlosen Erstgespräch.",
  },
];

export default function AvgsPage() {
  return (
    <>
      <Breadcrumbs items={[{ href: "/avgs", label: "AVGS" }]} />
      <Section tone="white" className="pt-12">
        <Eyebrow>AVGS & AZAV</Eyebrow>
        <h1 className="mt-4 max-w-3xl text-3xl font-bold text-navy sm:text-4xl">
          Was ist ein AVGS – und wie bekommst du ihn?
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy-600">
          Der Aktivierungs- und Vermittlungsgutschein (AVGS) nach § 45 SGB III ist ein Gutschein von Jobcenter oder
          Agentur für Arbeit, mit dem Coaching wie unseres finanziert wird. Für dich ist die Maßnahme dadurch
          kostenfrei.
        </p>
      </Section>

      <Section tone="tint">
        <div className="grid gap-6 sm:grid-cols-2">
          <Card>
            <h2 className="text-lg font-bold text-navy">Was ist die AZAV?</h2>
            <p className="mt-2 text-sm leading-relaxed text-navy-600">
              Die AZAV (Akkreditierungs- und Zulassungsverordnung Arbeitsförderung) legt fest, welche Anforderungen
              ein Bildungsträger erfüllen muss, um Maßnahmen der Arbeitsförderung durchführen zu dürfen. klarvoran
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

      <Section tone="white" id="leitfaden">
        <Eyebrow>Leitfaden</Eyebrow>
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

      <Section tone="tint" id="schnellcheck">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow tone="navy">AVGS-Schnellcheck</Eyebrow>
          <h2 className="mt-3 text-2xl font-bold text-navy sm:text-3xl">Wo stehst du gerade?</h2>
          <p className="mt-3 text-navy-600">
            Fünf kurze Schritte für eine erste, unverbindliche Einschätzung – keine Anspruchszusage, sondern
            Orientierung für dein Gespräch mit uns.
          </p>
        </div>
        <div className="mx-auto mt-8 max-w-2xl">
          <Suspense fallback={<div className="h-96 animate-pulse rounded-[var(--radius-lg)] bg-white" />}>
            <AvgsSchnellcheck />
          </Suspense>
        </div>
      </Section>

      <Section tone="white">
        <Eyebrow>FAQ</Eyebrow>
        <h2 className="mt-3 text-2xl font-bold text-navy sm:text-3xl">Fragen rund um AZAV & AVGS</h2>
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
