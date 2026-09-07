import type { Metadata } from "next";
import { Section, Eyebrow } from "@/components/Section";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Card } from "@/components/Card";
import { CtaSection } from "@/components/CtaSection";

export const metadata: Metadata = {
  title: "Workshops & Team-Coachings für Gruppen",
  description:
    "Workshops und Team-Coachings von klarvoran (MS Coaching – Mazhar Said) zu Bewerbung, beruflicher Orientierung und digitaler Kompetenz – für Einrichtungen, Schulen und Unternehmen im Rhein-Main-Gebiet.",
  alternates: { canonical: "/leistungen/workshops" },
};

const themen = [
  {
    title: "Bewerbungstraining",
    text: "Lebenslauf, Anschreiben und Online-Bewerbung praxisnah für eine Gruppe aufbereitet.",
  },
  {
    title: "Berufliche Orientierung",
    text: "Eigene Stärken erkennen und realistische berufliche Perspektiven entwickeln.",
  },
  {
    title: "Vorstellungsgespräch & Auftreten",
    text: "Typische Situationen üben, Sicherheit im Auftreten und im Umgang mit Nervosität gewinnen.",
  },
  {
    title: "Digitale Kompetenz im Bewerbungsprozess",
    text: "Jobbörsen, Online-Formulare und digitale Tools sicher nutzen lernen.",
  },
];

const formats = [
  {
    title: "Halbtags-Workshop",
    text: "Kompakter Impuls zu einem einzelnen Thema, z. B. Bewerbungsunterlagen oder Vorstellungsgespräch.",
  },
  {
    title: "Ganztags-Workshop",
    text: "Vertiefte Bearbeitung mit praktischen Übungen und individuellem Feedback in der Gruppe.",
  },
  {
    title: "Modulreihe / Team-Coaching",
    text: "Mehrere Termine über einen längeren Zeitraum, z. B. begleitend zu einer Maßnahme oder einem Projekt.",
  },
];

export default function WorkshopsPage() {
  return (
    <>
      <Breadcrumbs items={[{ href: "/leistungen", label: "Leistungen" }, { href: "/leistungen/workshops", label: "Workshops & Team-Coachings" }]} />
      <Section tone="white" className="pt-12">
        <Eyebrow>Workshops & Team-Coachings</Eyebrow>
        <h1 className="mt-4 max-w-3xl text-3xl font-bold text-navy sm:text-4xl">
          Coaching-Wissen für die ganze Gruppe
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy-600">
          Für Einrichtungen, Schulen, Bildungsträger und Unternehmen: kompakte Workshop- und Team-Coaching-Formate
          rund um Bewerbung, berufliche Orientierung und digitale Kompetenz – zugeschnitten auf die jeweilige
          Gruppe statt als Standardvortrag.
        </p>
      </Section>

      <Section tone="tint">
        <Eyebrow tone="navy">Themen</Eyebrow>
        <h2 className="mt-3 text-2xl font-bold text-navy sm:text-3xl">Woran wir mit Gruppen arbeiten</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {themen.map((t) => (
            <Card key={t.title}>
              <h3 className="font-semibold text-navy">{t.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-600">{t.text}</p>
            </Card>
          ))}
        </div>
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-navy-600">
          Die konkrete Themenauswahl stimmen wir vorab mit der Einrichtung ab – auf die Zielgruppe, den
          Förderbedarf und die verfügbare Zeit zugeschnitten.
        </p>
      </Section>

      <Section tone="white">
        <Eyebrow>Format</Eyebrow>
        <h2 className="mt-3 text-2xl font-bold text-navy sm:text-3xl">Von Halbtag bis Modulreihe</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {formats.map((f) => (
            <Card key={f.title}>
              <h3 className="font-semibold text-navy">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-600">{f.text}</p>
            </Card>
          ))}
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          <Card>
            <h3 className="font-semibold text-navy">Gruppengröße & Ort</h3>
            <p className="mt-2 text-sm leading-relaxed text-navy-600">
              Für kleine bis mittlere Gruppen, vor Ort bei der Einrichtung, in den Kriftel Workspaces oder online –
              je nach Bedarf.
            </p>
          </Card>
          <Card>
            <h3 className="font-semibold text-navy">Kosten</h3>
            <p className="mt-2 text-sm leading-relaxed text-navy-600">
              Format, Dauer und Preis richten sich nach Gruppengröße und Umfang.{" "}
              <strong className="font-semibold text-navy">Individuell, auf Anfrage.</strong>
            </p>
          </Card>
        </div>
      </Section>

      <CtaSection
        eyebrow="Für Einrichtungen & Unternehmen"
        title="Workshop für eure Gruppe anfragen"
        description="Schreiben Sie uns Zielgruppe, Thema und gewünschten Zeitraum – wir melden uns mit einem passenden Vorschlag zurück."
        primaryLabel="Workshop anfragen"
        primaryHref="/kontakt"
        secondaryLabel="Für Institutionen"
        secondaryHref="/fachkraefte-kooperationspartner"
      />
    </>
  );
}
