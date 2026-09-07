import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Section, Eyebrow } from "@/components/Section";
import { Button } from "@/components/Button";
import { Card, FactStat } from "@/components/Card";
import { TrustBar } from "@/components/TrustBar";
import { ModuleCard } from "@/components/ModuleCard";
import { ProcessStepper } from "@/components/ProcessStepper";
import { FaqAccordion } from "@/components/FaqAccordion";
import { CtaSection } from "@/components/CtaSection";
import { ServiceStructuredData } from "@/components/StructuredData";
import { coachingModules, totalUe } from "@/lib/content/modules";
import { processSteps } from "@/lib/content/process";
import { generalFaq } from "@/lib/content/faq";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "AVGS Coaching Frankfurt – Kostenloses Bewerbungscoaching",
  description:
    "MS Coaching: AZAV-zugelassener Bildungsträger in Frankfurt am Main. Individuelles Bewerbungscoaching, 32 UE in bis zu 8 Wochen – kostenfrei mit AVGS.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <ServiceStructuredData />

      <Section tone="white" className="pt-14 sm:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Eyebrow>AVGS Coaching Frankfurt · AZAV-zugelassener Träger</Eyebrow>
            <h1 className="mt-5 text-4xl font-bold leading-tight text-navy sm:text-5xl">
              0 € für dich. 32 Einheiten. Ein klarer Weg zurück in den Job.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-navy-600">
              Individuelles Bewerbungscoaching in Frankfurt am Main und im Rhein-Main-Gebiet – 1:1 mit Mazhar Said,
              strukturiert in vier Modulen. Mit bewilligtem AVGS trägt dein Jobcenter oder deine Agentur für Arbeit
              die vollen Kosten.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/termin" size="lg">
                Kostenloses Erstgespräch sichern
              </Button>
              <Button href="/avgs#schnellcheck" variant="ghost" size="lg">
                AVGS-Schnellcheck starten
              </Button>
            </div>
            <div className="mt-10">
              <TrustBar />
            </div>
          </div>

          <div className="mx-auto w-64 sm:w-80 lg:w-full">
            <Image
              src={siteConfig.images.badge}
              alt="Mazhar Said, Gründer von MS Coaching"
              width={480}
              height={480}
              priority
              className="w-full rounded-[var(--radius-lg)]"
            />
          </div>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-3 sm:gap-5">
          <FactStat value={`${totalUe} UE`} label="Coaching-Umfang" />
          <FactStat value="8 Wochen" label="Maximale Laufzeit" />
          <FactStat value="0 €" label="Mit bewilligtem AVGS" />
        </div>
      </Section>

      <Section tone="tint">
        <div className="grid gap-8 sm:grid-cols-3">
          <Card>
            <h2 className="text-lg font-bold text-navy">Wer ist das?</h2>
            <p className="mt-2 text-sm leading-relaxed text-navy-600">
              MS Coaching ist ein eigenständig nach § 178 SGB III zugelassener Bildungsträger – kein Honorarcoach im
              Coachpool eines fremden Trägers, sondern selbst zertifiziert (CERTQUA {siteConfig.certificate.number}).
            </p>
          </Card>
          <Card>
            <h2 className="text-lg font-bold text-navy">Für wen?</h2>
            <p className="mt-2 text-sm leading-relaxed text-navy-600">
              Für Arbeitsuchende bzw. von Arbeitslosigkeit bedrohte Personen im Raum Frankfurt/Rhein-Main mit
              Unterstützungsbedarf im Bewerbungsprozess, bei der beruflichen Orientierung oder Integration.
            </p>
          </Card>
          <Card>
            <h2 className="text-lg font-bold text-navy">Warum 0 €?</h2>
            <p className="mt-2 text-sm leading-relaxed text-navy-600">
              Mit einem bewilligten AVGS zahlt dein Kostenträger direkt an uns. Du zahlst nichts – wir zeigen dir,
              wie du den Gutschein bekommst.
            </p>
          </Card>
        </div>
      </Section>

      <Section tone="white">
        <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Eyebrow tone="navy">Programm</Eyebrow>
            <h2 className="mt-3 text-2xl font-bold text-navy sm:text-3xl">Die 4 Coaching-Module</h2>
          </div>
          <Link href="/coaching-angebot" className="text-sm font-semibold text-navy underline underline-offset-4 hover:text-red-700">
            Alle Details zum Coaching-Angebot →
          </Link>
        </div>
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {coachingModules.map((m) => (
            <ModuleCard key={m.id} module={m} />
          ))}
        </ul>
      </Section>

      <Section tone="tint">
        <div className="mb-10">
          <Eyebrow tone="navy">Ablauf</Eyebrow>
          <h2 className="mt-3 text-2xl font-bold text-navy sm:text-3xl">So läuft dein Einstieg ab</h2>
        </div>
        <ProcessStepper steps={processSteps} />
        <div className="mt-8">
          <Button href="/ablauf" variant="text">
            Ablauf im Detail ansehen →
          </Button>
        </div>
      </Section>

      <Section tone="white">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,220px)_1fr]">
          <div className="mx-auto w-40 sm:w-48 lg:mx-0 lg:w-full">
            <Image
              src={siteConfig.images.badge}
              alt="Mazhar Said"
              width={280}
              height={280}
              className="w-full rounded-[var(--radius-lg)]"
            />
          </div>
          <div>
            <Eyebrow>Über den Coach</Eyebrow>
            <blockquote className="mt-4 text-xl font-semibold leading-snug text-navy sm:text-2xl">
              „Ich bringe eine juristisch-strukturierte Denkweise mit pädagogischer Erfahrung zusammen – damit dein
              Weg zurück in den Job planbar wird, statt diffus zu bleiben.“
            </blockquote>
            <p className="mt-4 text-sm text-navy-600">Mazhar Said, Gründer von MS Coaching</p>
            <Button href="/ueber-den-coach" variant="text" className="mt-5">
              Mehr über Mazhar erfahren →
            </Button>
          </div>
        </div>
      </Section>

      <Section tone="navy">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <Eyebrow tone="white">Für Fachkräfte & Kooperationspartner</Eyebrow>
            <h2 className="mt-3 text-2xl font-bold sm:text-3xl">Vermittlungsfachkräfte und Bildungsträger</h2>
            <p className="mt-4 text-white/70">
              Trägerstatus, Zulassung, Maßnahmedaten und Durchführungsqualität auf einen Blick – für Jobcenter,
              Agentur für Arbeit und potenzielle Kooperationspartner.
            </p>
            <Button href="/fachkraefte-kooperationspartner" variant="ghost" size="lg" className="mt-6 border-white text-white hover:bg-white/10">
              Zum Fachkräfte-Bereich
            </Button>
          </div>
        </div>
      </Section>

      <Section tone="tint">
        <div className="mb-8">
          <Eyebrow tone="navy">FAQ</Eyebrow>
          <h2 className="mt-3 text-2xl font-bold text-navy sm:text-3xl">Häufige Fragen</h2>
        </div>
        <FaqAccordion items={generalFaq.slice(0, 4)} />
        <Button href="/faq" variant="text" className="mt-6">
          Alle Fragen ansehen →
        </Button>
      </Section>

      <CtaSection
        eyebrow="Nächster Schritt"
        title="Bereit für den ersten Schritt?"
        description="Im kostenlosen, unverbindlichen Erstgespräch klären wir deine Situation – ganz gleich, ob du schon einen AVGS hast oder noch unsicher bist."
      />
    </>
  );
}
