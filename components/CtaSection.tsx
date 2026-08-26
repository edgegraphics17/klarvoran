import { Button } from "./Button";
import { Section } from "./Section";

export function CtaSection({
  eyebrow,
  title,
  description,
  primaryLabel = "Kostenloses Erstgespräch sichern",
  primaryHref = "/termin",
  secondaryLabel = "AVGS-Schnellcheck starten",
  secondaryHref = "/avgs#schnellcheck",
}: {
  eyebrow?: string;
  title: string;
  description: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <Section tone="navy">
      <div className="mx-auto max-w-2xl text-center">
        {eyebrow && <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-wide text-red">{eyebrow}</p>}
        <h2 className="text-2xl font-bold sm:text-3xl">{title}</h2>
        <p className="mt-4 text-white/70">{description}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href={primaryHref} size="lg">
            {primaryLabel}
          </Button>
          <Button href={secondaryHref} variant="ghost" size="lg" className="border-white text-white hover:bg-white/10">
            {secondaryLabel}
          </Button>
        </div>
      </div>
    </Section>
  );
}
