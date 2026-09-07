import type { Metadata } from "next";
import Image from "next/image";
import { Section, Eyebrow } from "@/components/Section";
import { Button } from "@/components/Button";
import { FactStat } from "@/components/Card";
import { TrustBar } from "@/components/TrustBar";
import { LeistungCard } from "@/components/LeistungCard";
import { ProcessStepper } from "@/components/ProcessStepper";
import { FaqAccordion } from "@/components/FaqAccordion";
import { CtaSection } from "@/components/CtaSection";
import { ServiceStructuredData } from "@/components/StructuredData";
import { leistungen } from "@/lib/content/leistungen";
import { processSteps } from "@/lib/content/process";
import { generalFaq } from "@/lib/content/faq";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "klarvoran – Bewerbungscoaching, Workshops & Kooperationen",
  description:
    "klarvoran: AVGS-Bewerbungscoaching, 1:1-Coaching, Workshops & Team-Coachings sowie Kooperationen für Institutionen – von MS Coaching – Mazhar Said, AZAV-zugelassener Bildungsträger in Frankfurt am Main.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <ServiceStructuredData />

      <Section tone="white" className="pt-14 sm:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Eyebrow>AZAV-zugelassener Bildungsträger · Frankfurt & Rhein-Main</Eyebrow>
            <h1 className="mt-5 text-4xl font-bold leading-tight text-navy sm:text-5xl">
              Klar sehen. Selbstständig handeln. Beruflich vorankommen.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-navy-600">
              klarvoran begleitet Menschen mit individuellem Coaching in Arbeit – als AVGS-Maßnahme, als
              Selbstzahler-Coaching oder als Workshop für Gruppen. Für Institutionen sind wir zugleich AZAV-
              zugelassener Kooperationspartner.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/termin" size="lg">
                Kostenloses Erstgespräch sichern
              </Button>
              <Button href="/fachkraefte-kooperationspartner" variant="ghost" size="lg">
                Ich bin Institution / Fachkraft
              </Button>
            </div>
            <div className="mt-10">
              <TrustBar />
            </div>
          </div>

          <div className="mx-auto w-64 sm:w-80 lg:w-full">
            <Image
              src={siteConfig.images.badge}
              alt="Mazhar Said, Gründer von klarvoran"
              width={480}
              height={480}
              priority
              className="w-full rounded-[var(--radius-lg)]"
            />
          </div>
        </div>
      </Section>

      <Section tone="tint">
        <div className="mb-10 text-center">
          <Eyebrow tone="navy">Leistungen</Eyebrow>
          <h2 className="mt-3 text-2xl font-bold text-navy sm:text-3xl">Vier klare Wege zu klarvoran</h2>
          <p className="mx-auto mt-3 max-w-2xl text-navy-600">
            Eine Methode, vier Formate – je nachdem, ob du selbst einen Job suchst, ein Team weiterbilden willst
            oder als Institution kooperieren möchtest.
          </p>
        </div>
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {leistungen.map((l) => (
            <LeistungCard key={l.id} leistung={l} />
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
            <p className="mt-4 text-sm text-navy-600">Mazhar Said, Gründer von klarvoran</p>
            <Button href="/ueber-den-coach" variant="text" className="mt-5">
              Mehr über Mazhar erfahren →
            </Button>
          </div>
        </div>
      </Section>

      <Section tone="navy">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <Eyebrow tone="white">Für Institutionen</Eyebrow>
            <h2 className="mt-3 text-2xl font-bold sm:text-3xl">Jobcenter, soziale Einrichtungen & Bildungsträger</h2>
            <p className="mt-4 text-white/70">
              Trägerstatus, Zulassung und Kooperationsmöglichkeiten – mit eigener Seite je nach Zielgruppe: Jobcenter,
              soziale Einrichtungen oder Bildungsträger.
            </p>
            <Button href="/fachkraefte-kooperationspartner" variant="ghost" size="lg" className="mt-6 border-white text-white hover:bg-white/10">
              Zum Institutionen-Bereich
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
