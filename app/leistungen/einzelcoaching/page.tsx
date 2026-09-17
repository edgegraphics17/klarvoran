import type { Metadata } from "next";
import Image from "next/image";
import { Section, Eyebrow } from "@/components/Section";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Card } from "@/components/Card";
import { CtaSection } from "@/components/CtaSection";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "1:1-Coaching für Selbstzahler",
  description:
    "Individuelles Bewerbungs- und Orientierungscoaching bei KlarVoran (MS Coaching – Mazhar Said) auch ohne AVGS – flexibler Umfang, online, hybrid oder in Präsenz in Frankfurt am Main.",
  alternates: { canonical: "/leistungen/einzelcoaching" },
};

const steps = [
  {
    title: "Ausgangslage klären",
    text: "Wir hören zunächst zu: Erfahrungen, Ziele, bisherige Bewerbungen und die reale Situation dahinter.",
  },
  {
    title: "Plan statt Standardprogramm",
    text: "Daraus entsteht ein individueller Plan – nur die Themen, die für deinen nächsten Schritt wirklich relevant sind.",
  },
  {
    title: "Gemeinsam umsetzen",
    text: "Unterlagen, Stellensuche, Gesprächstraining oder Orientierung – wir arbeiten die vereinbarten Schritte konkret durch.",
  },
  {
    title: "Fortschritt sichtbar machen",
    text: "Nach jeder Einheit ist klar, was erreicht wurde und was als Nächstes ansteht.",
  },
];

export default function EinzelcoachingPage() {
  return (
    <>
      <Breadcrumbs items={[{ href: "/leistungen", label: "Leistungen" }, { href: "/leistungen/einzelcoaching", label: "1:1-Coaching" }]} />
      <Section tone="white" className="pt-12">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Eyebrow>1:1-Coaching · Selbstzahler</Eyebrow>
            <h1 className="mt-4 max-w-xl text-3xl font-bold text-navy sm:text-4xl">
              Individuelles Coaching – auch ohne AVGS
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-navy-600">
              Nicht jeder hat Anspruch auf einen Aktivierungs- und Vermittlungsgutschein. Unser 1:1-Coaching folgt
              derselben Methode wie das AVGS-Programm – als Selbstzahler-Angebot, in Umfang und Format frei
              zugeschnitten auf deine Situation.
            </p>
          </div>
          <Image
            src={siteConfig.images.team.einzelgespraech}
            alt="Individuelles 1:1-Coaching-Gespräch"
            width={1600}
            height={678}
            className="w-full rounded-[var(--radius-lg)]"
          />
        </div>
      </Section>

      <Section tone="tint">
        <div className="grid gap-6 sm:grid-cols-2">
          <Card>
            <h2 className="text-lg font-bold text-navy">Für wen?</h2>
            <p className="mt-2 text-sm leading-relaxed text-navy-600">
              Für alle, die gezielte Unterstützung bei Bewerbung, beruflicher Orientierung oder Vorstellungsgesprächen
              suchen – unabhängig von Jobcenter oder Agentur für Arbeit.
            </p>
          </Card>
          <Card>
            <h2 className="text-lg font-bold text-navy">Format</h2>
            <p className="mt-2 text-sm leading-relaxed text-navy-600">
              Online, hybrid oder in Präsenz in den {siteConfig.presenceLocation.name} ({siteConfig.presenceLocation.region}).
              Anzahl und Länge der Einheiten legen wir gemeinsam fest.
            </p>
          </Card>
          <Card>
            <h2 className="text-lg font-bold text-navy">Themen</h2>
            <p className="mt-2 text-sm leading-relaxed text-navy-600">
              Standortbestimmung, Bewerbungsunterlagen, Stellensuche oder Vorstellungsgespräch – einzeln oder als
              zusammenhängendes Programm.
            </p>
          </Card>
          <Card>
            <h2 className="text-lg font-bold text-navy">Kosten</h2>
            <p className="mt-2 text-sm leading-relaxed text-navy-600">
              Da Umfang und Format individuell sind, nennen wir dir den Preis nach einem kurzen, kostenlosen
              Kennenlerngespräch. <strong className="font-semibold text-navy">Preise auf Anfrage.</strong>
            </p>
          </Card>
        </div>
      </Section>

      <Section tone="white">
        <Eyebrow>Ablauf</Eyebrow>
        <h2 className="mt-3 text-2xl font-bold text-navy sm:text-3xl">So läuft dein Coaching ab</h2>
        <ol className="mt-8 grid gap-5 sm:grid-cols-2">
          {steps.map((step, i) => (
            <li key={step.title} className="rounded-[var(--radius-md)] border border-navy-100 bg-white p-5">
              <span className="font-mono text-sm font-semibold text-red-700">{i + 1}</span>
              <h3 className="mt-1 font-semibold text-navy">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-600">{step.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      <CtaSection
        eyebrow="Nächster Schritt"
        title="Unverbindliches Kennenlerngespräch vereinbaren"
        description="Wir klären deine Situation, deinen Bedarf und den passenden Umfang – ganz ohne Verpflichtung."
        secondaryLabel="Alle Leistungen ansehen"
        secondaryHref="/leistungen"
      />
    </>
  );
}
