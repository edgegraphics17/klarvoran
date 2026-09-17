import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Section, Eyebrow } from "@/components/Section";
import { Button } from "@/components/Button";
import { TrustBar } from "@/components/TrustBar";
import { LeistungCard } from "@/components/LeistungCard";
import { FaqAccordion } from "@/components/FaqAccordion";
import { CtaSection } from "@/components/CtaSection";
import { CertificateSeal } from "@/components/CertificateSeal";
import { ServiceStructuredData } from "@/components/StructuredData";
import { leistungen } from "@/lib/content/leistungen";
import { generalFaq } from "@/lib/content/faq";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "KlarVoran – Bewerbungscoaching, Workshops & Kooperationen",
  description:
    "KlarVoran: AVGS-Bewerbungscoaching, 1:1-Coaching, Workshops & Team-Coachings sowie Kooperationen für Institutionen – von MS Coaching – Mazhar Said, AZAV-zugelassener Bildungsträger in Frankfurt am Main.",
  alternates: { canonical: "/" },
};

// Die Methode in vier Schritten – Symbole laut Kundenvorgabe:
// Gespräch, Wegweiser, Laptop, nächster Schritt.
const methodSteps = [
  {
    title: "Verstanden werden",
    text: "Wir starten mit einem echten Gespräch: Deine Situation, deine Ziele, deine Hürden – ohne Formulare-Babysitting.",
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 5.5h16a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H9l-4.2 3.4a.5.5 0 0 1-.8-.4V6.5a1 1 0 0 1 1-1Z" />
        <path d="M8 9.5h8M8 12.5h5" />
      </svg>
    ),
  },
  {
    title: "System verstehen",
    text: "Jobcenter, AVGS, Bewerbungsprozess: Wir ordnen dein Umfeld und zeigen dir, wo deine Hebel liegen.",
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M6 21V3" />
        <path d="M6 4.5h11l-2.5 3 2.5 3H6" />
        <path d="M6 12.5h8l-2 2.5 2 2.5H6" />
      </svg>
    ),
  },
  {
    title: "Selbst handeln",
    text: "Bewerbung, Unterlagen, Gespräche: Du arbeitest mit konkreten Werkzeugen – 1:1 begleitet, in deinem Tempo.",
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="4" y="5" width="16" height="10" rx="1" />
        <path d="M2.5 18.5h19" />
      </svg>
    ),
  },
  {
    title: "Dranbleiben",
    text: "Zwischen den Terminen bleibt es nicht stehen: klare nächste Schritte, nach jeder Einheit dokumentiert.",
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 20h5v-4h5v-4h5V8h3" />
        <path d="M18.5 5.5 21 8l-2.5 2.5" />
      </svg>
    ),
  },
];

const institutionTargets = [
  {
    href: "/fuer-jobcenter",
    title: "Jobcenter & Agentur für Arbeit",
    text: "AZAV-zugelassene Maßnahme nach § 45 SGB III mit allen Stammdaten für Ihre Zuweisung.",
    cta: "Zuweisung vorbereiten",
  },
  {
    href: "/fuer-soziale-einrichtungen",
    title: "Soziale Einrichtungen",
    text: "Individuelles Bewerbungscoaching als Ergänzung für Ihre Klientinnen und Klienten.",
    cta: "Angebot für Einrichtungen",
  },
  {
    href: "/fuer-bildungstraeger",
    title: "Bildungsträger",
    text: "Eigene AZAV-Struktur, BvB-Erfahrung und kurzfristiger Einsatz als Unterauftragnehmer.",
    cta: "Kooperation ansehen",
  },
];

export default function HomePage() {
  return (
    <>
      <ServiceStructuredData />

      {/* Hero: dunkelblauer Einstieg, weiße Überschrift, keine Fototapete. */}
      <Section tone="navy" className="pt-14 sm:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Eyebrow tone="white">AZAV-zugelassener Bildungsträger · Frankfurt &amp; Rhein-Main</Eyebrow>
            <h1 className="mt-5 text-4xl font-bold leading-tight text-white sm:text-5xl">
              Klar sehen. Selbstständig handeln. Beruflich vorankommen.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
              KlarVoran begleitet Menschen mit individuellem Coaching in Arbeit – als AVGS-Maßnahme, als
              Selbstzahler-Coaching oder als Workshop für Gruppen. Für Institutionen sind wir zugleich AZAV-
              zugelassener Kooperationspartner.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/termin" size="lg" onDark>
                Kostenloses Erstgespräch sichern
              </Button>
              <Button href="/fachkraefte-kooperationspartner" variant="secondary" size="lg" onDark>
                Ich bin Institution / Fachkraft
              </Button>
            </div>
            <div className="mt-10">
              <TrustBar tone="dark" />
            </div>
          </div>

          <div className="mx-auto w-64 sm:w-80 lg:w-full">
            <Image
              src={siteConfig.images.badge}
              alt="Mazhar Said, Gründer von KlarVoran"
              width={480}
              height={480}
              priority
              className="w-full rounded-[var(--radius-lg)]"
            />
          </div>
        </div>
      </Section>

      {/* Kompakter weißer Vertrauensbereich: Trägerzeichen + GEO-Definition.
          Bewusst KEIN Maßnahmezeichen an dieser Stelle. */}
      <Section tone="white" className="py-12 sm:py-14">
        <div className="grid items-center gap-10 lg:grid-cols-[260px_1fr]">
          <CertificateSeal
            seal="traeger"
            caption="MS Coaching – Mazhar Said (Zugelassener Träger nach § 178 SGB III)"
          />
          <div>
            <h2 className="text-xl font-bold text-navy sm:text-2xl">
              MS Coaching – Mazhar Said, die Organisation hinter KlarVoran
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-navy-600">
              <strong className="font-semibold text-navy">KlarVoran</strong> ist das AZAV-zertifizierte
              Coaching-Programm von <em>MS Coaching – Mazhar Said</em> in Frankfurt am Main. Die Kosten für das
              individuelle 1:1-Bewerbungscoaching werden bei Vorliegen eines Aktivierungs- und
              Vermittlungsgutscheins (AVGS nach § 45 Abs. 1 SGB III) zu 100&nbsp;% von den Jobcentern und der
              Agentur für Arbeit übernommen.
            </p>
            <Button href="/dokumente/CERTQUA.pdf" external variant="text" className="mt-4">
              Zertifikat Trägerzulassung (PDF) →
            </Button>
          </div>
        </div>
      </Section>

      {/* Leistungen: dunkelblaue Fläche, weiße Zielkarten mit Invert-Hover. */}
      <Section tone="navy">
        <div className="mb-10 text-center">
          <Eyebrow tone="white">Leistungen</Eyebrow>
          <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">Vier klare Wege zu KlarVoran</h2>
          <p className="mx-auto mt-3 max-w-2xl text-white/80">
            Eine Methode, vier Formate – je nachdem, ob du selbst einen Job suchst, ein Team weiterbilden willst
            oder als Institution kooperieren möchtest.
          </p>
        </div>
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {leistungen.map((l, i) => (
            <LeistungCard key={l.id} leistung={l} hasMassnahmeBadge={i === 0} />
          ))}
        </ul>
      </Section>

      {/* Die Methode in 4 Schritten: ruhige Lesefläche, echte Icons + HTML-Text. */}
      <Section tone="tint">
        <div className="mb-10">
          <Eyebrow tone="navy">Die Methode</Eyebrow>
          <h2 className="mt-3 text-2xl font-bold text-navy sm:text-3xl">In vier Schritten voran</h2>
        </div>
        <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {methodSteps.map((step, i) => (
            <li
              key={step.title}
              className="flex flex-col gap-3 rounded-[var(--radius-md)] border border-navy-100 bg-white p-6 shadow-card"
            >
              <span className="text-btn-red" aria-hidden="true">
                {step.icon}
              </span>
              <span className="font-mono text-xs font-semibold uppercase tracking-wide text-navy-600">
                Schritt {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-bold text-navy">{step.title}</h3>
              <p className="text-sm leading-relaxed text-navy-600">{step.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* Gründerabschnitt: ruhige weiße Lesefläche. */}
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
            <p className="mt-4 text-sm text-navy-600">Mazhar Said, Gründer von KlarVoran</p>
            <Button href="/ueber-den-coach" variant="text" className="mt-5">
              Mehr über Mazhar erfahren →
            </Button>
          </div>
        </div>
      </Section>

      {/* Für Institutionen: dunkelblaue Fläche mit drei weißen Zielkarten. */}
      <Section tone="navy">
        <div className="mb-10">
          <Eyebrow tone="white">Für Institutionen</Eyebrow>
          <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
            Jobcenter, soziale Einrichtungen &amp; Bildungsträger
          </h2>
          <p className="mt-4 max-w-2xl text-white/80">
            Trägerstatus, Zulassung und Kooperationsmöglichkeiten – mit eigener Seite je nach Zielgruppe.
          </p>
        </div>
        <ul className="grid gap-6 md:grid-cols-3">
          {institutionTargets.map((t) => (
            <li key={t.href} className="list-none h-full">
              <Link
                href={t.href}
                className="group flex h-full flex-col gap-3 rounded-[var(--radius-md)] border border-white/20 bg-white p-6 shadow-card transition-all duration-200 motion-reduce:transition-none hover:-translate-y-0.5 hover:border-white hover:bg-navy hover:text-white hover:shadow-card-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-btn-red"
              >
                <h3 className="text-lg font-bold text-navy transition-colors group-hover:text-white">{t.title}</h3>
                <p className="text-sm leading-relaxed text-navy-600 transition-colors group-hover:text-white/80">
                  {t.text}
                </p>
                <span
                  aria-hidden="true"
                  className="mt-auto flex items-center justify-between pt-2 text-sm font-semibold text-navy transition-colors group-hover:text-white"
                >
                  <span>{t.cta}</span>
                  <span className="transition-transform duration-200 motion-reduce:transition-none group-hover:translate-x-1">→</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
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
