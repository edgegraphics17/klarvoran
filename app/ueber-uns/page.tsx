import type { Metadata } from "next";
import { Section, Eyebrow } from "@/components/Section";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Card } from "@/components/Card";
import { CtaSection } from "@/components/CtaSection";

export const metadata: Metadata = {
  title: "Über uns",
  description:
    "MS Coaching: Leitbild, Qualitätsverständnis und Werte des AZAV-zugelassenen Bildungsträgers für Bewerbungscoaching in Frankfurt am Main.",
  alternates: { canonical: "/ueber-uns" },
};

const values = [
  { title: "Verlässlichkeit", text: "Klare Zielvereinbarungen und Termine, auf die du dich verlassen kannst." },
  { title: "Respekt", text: "Du wirst ernst genommen – unabhängig von deiner Ausgangslage." },
  { title: "Professionalität", text: "Strukturierte Durchführung nach definierten Modulen, vollständig dokumentiert." },
  { title: "Integrationsorientierung", text: "Jeder Schritt zielt auf deine nachhaltige berufliche Perspektive." },
  { title: "Eigenverantwortung", text: "Coaching als Hilfe zur Selbsthilfe – du gestaltest deinen Weg aktiv mit." },
];

export default function UeberUnsPage() {
  return (
    <>
      <Breadcrumbs items={[{ href: "/ueber-uns", label: "Über uns" }]} />
      <Section tone="white" className="pt-12">
        <Eyebrow>Über uns</Eyebrow>
        <h1 className="mt-4 max-w-3xl text-3xl font-bold text-navy sm:text-4xl">
          Strukturiertes Coaching für nachhaltige berufliche Perspektiven
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy-600">
          Unser Ziel ist es, arbeitsuchende Menschen durch strukturiertes, individuelles Coaching nachhaltig in
          Arbeit, Ausbildung oder berufliche Perspektiven zu integrieren. Wir unterstützen dich dabei, deine
          Kompetenzen zu erkennen, realistische berufliche Ziele zu definieren und diese systematisch umzusetzen.
        </p>
      </Section>

      <Section tone="tint">
        <Eyebrow tone="navy">Qualitätsverständnis</Eyebrow>
        <h2 className="mt-3 text-2xl font-bold text-navy sm:text-3xl">Was Qualität für uns bedeutet</h2>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            "Klare Zielvereinbarungen",
            "Strukturierte Durchführung nach definierten Modulen",
            "Vollständige und nachvollziehbare Dokumentation",
            "Messbare Zielerreichung",
            "Regelmäßige Überprüfung und Weiterentwicklung unserer Prozesse",
          ].map((item) => (
            <li key={item} className="flex gap-3 rounded-[var(--radius-md)] border border-navy-100 bg-white p-4 text-sm text-navy-600">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-navy-600">
          Die Wirksamkeit unserer Maßnahme wird durch Teilnehmerfeedback, interne Audits und
          Managementbewertungen regelmäßig überprüft – auf Grundlage von § 45 SGB III, individuell statt
          standardisiert, transparent gegenüber Kostenträgern und DSGVO-konform.
        </p>
      </Section>

      <Section tone="white">
        <Eyebrow>Werte</Eyebrow>
        <h2 className="mt-3 text-2xl font-bold text-navy sm:text-3xl">Wofür wir stehen</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v) => (
            <Card key={v.title}>
              <h3 className="font-semibold text-navy">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-600">{v.text}</p>
            </Card>
          ))}
        </div>
        <p className="mt-8 max-w-2xl text-sm italic leading-relaxed text-navy-600">
          Wir verstehen Coaching als Hilfe zur Selbsthilfe und fördern nachhaltige Beschäftigungsfähigkeit.
        </p>
      </Section>

      <CtaSection
        title="Lerne uns im kostenlosen Erstgespräch kennen"
        description="Ganz unverbindlich klären wir, ob und wie wir dich unterstützen können."
      />
    </>
  );
}
