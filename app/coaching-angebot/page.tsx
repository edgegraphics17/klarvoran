import type { Metadata } from "next";
import { Section, Eyebrow } from "@/components/Section";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ModuleCard } from "@/components/ModuleCard";
import { FactStat } from "@/components/Card";
import { CtaSection } from "@/components/CtaSection";
import { coachingModules, totalUe } from "@/lib/content/modules";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Coaching-Angebot",
  description:
    "Individuelles Bewerbungscoaching nach § 45 SGB III: 32 UE in 4 Modulen, bis zu 8 Wochen, 1:1-Einzelcoaching in Präsenz (Kriftel), online oder hybrid.",
  alternates: { canonical: "/coaching-angebot" },
};

export default function CoachingAngebotPage() {
  return (
    <>
      <Breadcrumbs items={[{ href: "/coaching-angebot", label: "Coaching-Angebot" }]} />
      <Section tone="white" className="pt-12">
        <Eyebrow>Coaching-Angebot</Eyebrow>
        <h1 className="mt-4 max-w-3xl text-3xl font-bold text-navy sm:text-4xl">
          Individuelles Bewerbungscoaching und Aktivierung
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy-600">
          Ausschließlich 1:1-Einzelcoaching nach § 45 SGB III – kein Gruppenformat. Die vier Module bilden das
          zertifizierte Grundgerüst der Maßnahme und werden im Rahmen der zugelassenen Maßnahme individuell auf
          dich abgestimmt.
        </p>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-5">
          <FactStat value={`${totalUe} UE`} label="à 45 Minuten" />
          <FactStat value="8 Wochen" label="Maximale Laufzeit" />
          <FactStat value="1:1" label="Einzelcoaching" />
          <FactStat value="0 €" label="Mit bewilligtem AVGS" />
        </div>
      </Section>

      <Section tone="tint">
        <Eyebrow tone="navy">Durchführung</Eyebrow>
        <h2 className="mt-3 text-2xl font-bold text-navy sm:text-3xl">Präsenz, online oder hybrid</h2>
        <p className="mt-4 max-w-2xl text-navy-600">
          Präsenztermine finden ausschließlich in den {siteConfig.presenceLocation.name} statt (
          {siteConfig.presenceLocation.region}) – Hausbesuche bieten wir nicht an. Alternativ ist Online- oder
          Hybrid-Coaching möglich. In der Regel finden 1–2 Termine pro Woche statt.
        </p>
      </Section>

      <Section tone="white">
        <Eyebrow>Die 4 Module</Eyebrow>
        <h2 className="mt-3 text-2xl font-bold text-navy sm:text-3xl">Dein Weg in vier Schritten</h2>
        <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {coachingModules.map((m) => (
            <ModuleCard key={m.id} module={m} />
          ))}
        </ul>
        <p className="mt-8 max-w-2xl text-sm leading-relaxed text-navy-600">
          Jedes Modul endet mit einer gemeinsamen Reflexion der Zielerreichung, dokumentiert in der
          Sitzungsdokumentation. Anpassungen für Folgemodule sind im Rahmen der zugelassenen Maßnahme möglich.
        </p>
      </Section>

      <CtaSection
        title="Passt das Angebot zu deiner Situation?"
        description="Nutze unseren AVGS-Schnellcheck oder sichere dir direkt ein kostenloses Erstgespräch."
      />
    </>
  );
}
