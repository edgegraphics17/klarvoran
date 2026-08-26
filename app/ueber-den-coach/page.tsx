import type { Metadata } from "next";
import { Section, Eyebrow } from "@/components/Section";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CoachProfile } from "@/components/CoachProfile";
import { CtaSection } from "@/components/CtaSection";

export const metadata: Metadata = {
  title: "Über den Coach",
  description:
    "Mazhar Said: Gründer von MS Coaching, AZAV-zugelassener Träger in Frankfurt am Main. Qualifikationen, Erfahrung und Arbeitsweise.",
  alternates: { canonical: "/ueber-den-coach" },
};

export default function UeberDenCoachPage() {
  return (
    <>
      <Breadcrumbs items={[{ href: "/ueber-den-coach", label: "Über den Coach" }]} />
      <Section tone="white" className="pt-12">
        <Eyebrow>Über den Coach</Eyebrow>
        <h1 className="mt-4 max-w-3xl text-3xl font-bold text-navy sm:text-4xl">
          Dein Coach kennt dich mit Namen, nicht als Ticketnummer
        </h1>
        <div className="mt-12">
          <CoachProfile />
        </div>
      </Section>

      <CtaSection
        title="Lerne Mazhar im Erstgespräch persönlich kennen"
        description="Kostenlos und unverbindlich – wir klären gemeinsam, wie wir dich unterstützen können."
      />
    </>
  );
}
