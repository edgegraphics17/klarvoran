import type { Leistung } from "@/lib/content/leistungen";
import { Card } from "./Card";
import { Eyebrow } from "./Section";
import { Button } from "./Button";

export function LeistungCard({ leistung }: { leistung: Leistung }) {
  return (
    <Card as="li" className="flex flex-col gap-4">
      <Eyebrow tone="navy">{leistung.eyebrow}</Eyebrow>
      <h3 className="text-xl font-bold text-navy">{leistung.title}</h3>
      <p className="text-sm leading-relaxed text-navy-600">{leistung.summary}</p>
      <ul className="space-y-1.5 text-sm text-navy-600">
        {leistung.bullets.map((b) => (
          <li key={b} className="flex gap-2">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-red" aria-hidden="true" />
            {b}
          </li>
        ))}
      </ul>
      <div className="mt-auto space-y-4">
        {leistung.price && (
          <p className="rounded-[var(--radius-sm)] bg-navy-50 px-3.5 py-3 font-mono text-sm font-semibold text-navy">
            {leistung.price}
          </p>
        )}
        <Button href={leistung.href} variant="ghost" className="w-full">
          {leistung.ctaLabel}
        </Button>
      </div>
    </Card>
  );
}
