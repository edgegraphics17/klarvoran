import type { Metadata } from "next";
import { Section, Eyebrow } from "@/components/Section";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/Button";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Kontaktiere KlarVoran per Telefon, E-Mail, WhatsApp oder Formular – wir melden uns zeitnah zurück.",
  alternates: { canonical: "/kontakt" },
};

export default function KontaktPage() {
  return (
    <>
      <Breadcrumbs items={[{ href: "/kontakt", label: "Kontakt" }]} />
      <Section tone="white" className="pt-12">
        <Eyebrow>Kontakt</Eyebrow>
        <h1 className="mt-4 max-w-3xl text-3xl font-bold text-navy sm:text-4xl">Sprich uns an</h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy-600">
          Ob per Telefon, WhatsApp, E-Mail oder Formular – wähle den Weg, der für dich am einfachsten ist.
        </p>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-6">
            <div className="rounded-[var(--radius-md)] border border-navy-100 bg-white p-6">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-navy-600">Telefon</h2>
              <a href={siteConfig.contact.phoneHref} className="mt-2 block text-lg font-semibold text-navy hover:text-red-700">
                {siteConfig.contact.phoneDisplay}
              </a>
            </div>
            <div className="rounded-[var(--radius-md)] border border-navy-100 bg-white p-6">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-navy-600">E-Mail</h2>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="mt-2 block break-all text-lg font-semibold text-navy hover:text-red-700"
              >
                {siteConfig.contact.email}
              </a>
            </div>
            <div className="rounded-[var(--radius-md)] border border-navy-100 bg-white p-6">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-navy-600">WhatsApp</h2>
              <p className="mt-2 text-sm text-navy-600">Schreib uns direkt – meist der schnellste Weg.</p>
              <Button href={siteConfig.contact.whatsappHref()} external variant="secondary" className="mt-4">
                WhatsApp öffnen
              </Button>
            </div>
            <div className="rounded-[var(--radius-md)] border border-navy-100 bg-white p-6">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-navy-600">Anschrift</h2>
              <p className="mt-2 text-sm text-navy-600">
                {siteConfig.address.street}
                <br />
                {siteConfig.address.zip} {siteConfig.address.city}
              </p>
              <Button
                href={`https://www.google.com/maps/search/?api=1&query=${siteConfig.address.mapsQuery}`}
                external
                variant="text"
                className="mt-3"
              >
                Auf Google Maps ansehen →
              </Button>
            </div>
          </div>

          <div className="rounded-[var(--radius-lg)] border border-navy-100 bg-white p-6 sm:p-8">
            <h2 className="text-lg font-bold text-navy">Formular</h2>
            <p className="mt-2 text-sm text-navy-600">Wir melden uns in der Regel innerhalb von 1–2 Werktagen.</p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
