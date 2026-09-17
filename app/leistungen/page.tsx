import type { Metadata } from "next";
import { Section, Eyebrow } from "@/components/Section";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { LeistungCard } from "@/components/LeistungCard";
import { CtaSection } from "@/components/CtaSection";
import { ContextGraphic } from "@/components/ContextGraphic";
import { leistungen } from "@/lib/content/leistungen";

export const metadata: Metadata = {
  title: "Leistungen – Coaching, Workshops & Kooperationen",
  description:
    "Vier klare Wege zu KlarVoran: AVGS-Bewerbungscoaching, 1:1-Coaching für Selbstzahler, Workshops & Team-Coachings für Gruppen sowie Kooperationen für Jobcenter, Träger und Einrichtungen.",
  alternates: { canonical: "/leistungen" },
};

export default function LeistungenPage() {
  return (
    <>
      <Breadcrumbs items={[{ href: "/leistungen", label: "Leistungen" }]} />
      <Section tone="navy" className="pt-12">
        <Eyebrow tone="white">Leistungen</Eyebrow>
        <h1 className="mt-4 max-w-3xl text-3xl font-bold text-white sm:text-4xl">
          Vier Wege zu einem klaren Schritt in Arbeit
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
          Egal ob du selbst einen Job suchst, ein Team weiterbilden willst oder als Institution einen verlässlichen
          Coaching-Partner brauchst: KlarVoran bietet vier klar getrennte Leistungen mit derselben Methode und
          demselben Anspruch an Struktur und Ergebnis.
        </p>
      </Section>

      <div className="bg-navy-50 px-5 py-10 sm:px-6 lg:px-8">
        <ContextGraphic
          variant="application"
          title="Bewerbungsunterlagen werden strukturiert geprüft und weiterentwickelt"
          className="mx-auto max-w-3xl"
        />
      </div>

      <Section tone="tint">
        <ul className="grid gap-6 sm:grid-cols-2">
          {leistungen.map((l) => (
            <LeistungCard key={l.id} leistung={l} />
          ))}
        </ul>
      </Section>

      <Section tone="white">
        <Eyebrow tone="navy">Eine Methode, vier Formate</Eyebrow>
        <h2 className="mt-3 text-2xl font-bold text-navy sm:text-3xl">Was sich nicht ändert</h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-navy-600">
          Ob AVGS-Coaching, Selbstzahler-Termin oder Workshop für eine Gruppe: Wir hören zuerst zu, klären die
          reale Ausgangslage und entwickeln daraus einen strukturierten, individuellen Plan – statt eines
          Standardprogramms von der Stange. Nur Umfang, Format und Kostenträger unterscheiden sich.
        </p>
      </Section>

      <CtaSection
        eyebrow="Unsicher, welche Leistung passt?"
        title="Lass uns kurz miteinander sprechen"
        description="Im kostenlosen Erstgespräch klären wir, welches Format zu deiner Situation oder zum Bedarf deiner Einrichtung passt."
      />
    </>
  );
}
