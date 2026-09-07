import type { Metadata } from "next";
import Image from "next/image";
import { Section, Eyebrow } from "@/components/Section";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ProcessStepper } from "@/components/ProcessStepper";
import { CtaSection } from "@/components/CtaSection";
import { Button } from "@/components/Button";
import { processSteps } from "@/lib/content/process";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Ablauf",
  description:
    "Vom Erstkontakt bis zur Teilnahmebescheinigung: So läuft dein Bewerbungscoaching bei klarvoran in Frankfurt und Kriftel ab.",
  alternates: { canonical: "/ablauf" },
};

export default function AblaufPage() {
  return (
    <>
      <Breadcrumbs items={[{ href: "/ablauf", label: "Ablauf" }]} />
      <Section tone="white" className="pt-12">
        <Eyebrow>Ablauf</Eyebrow>
        <h1 className="mt-4 max-w-3xl text-3xl font-bold text-navy sm:text-4xl">
          Vom Erstkontakt bis zur Teilnahmebescheinigung
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy-600">
          Fünf klare Schritte – transparent und nachvollziehbar, wie es sich für einen zertifizierten Träger
          gehört.
        </p>
        <Image
          src={siteConfig.images.team.whiteboard}
          alt="Coaching-Ablauf wird gemeinsam durchgesprochen"
          width={1400}
          height={781}
          className="mt-10 hidden w-full max-w-2xl rounded-[var(--radius-lg)] sm:block"
        />
        <div className="mt-10">
          <ProcessStepper steps={processSteps} />
        </div>
      </Section>

      <Section tone="tint">
        <Eyebrow tone="navy">Standort</Eyebrow>
        <h2 className="mt-3 text-2xl font-bold text-navy sm:text-3xl">{siteConfig.presenceLocation.name}</h2>
        <p className="mt-4 max-w-2xl text-navy-600">
          Präsenztermine finden ausschließlich in den {siteConfig.presenceLocation.name} statt (
          {siteConfig.presenceLocation.region}). {siteConfig.presenceLocation.note} Alternativ bieten wir Online-
          und Hybrid-Coaching an.
        </p>
        <div className="mt-6">
          <Button
            href={`https://www.google.com/maps/search/?api=1&query=${siteConfig.presenceLocation.mapsQuery}`}
            external
            variant="ghost"
          >
            Region auf Google Maps ansehen
          </Button>
        </div>
      </Section>

      <CtaSection
        title="Bereit für Schritt 1?"
        description="Melde dich unverbindlich – wir klären gemeinsam, wie dein Einstieg aussieht."
      />
    </>
  );
}
