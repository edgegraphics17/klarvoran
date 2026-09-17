import Link from "next/link";
import type { Leistung } from "@/lib/content/leistungen";

/**
 * Ganz anklickbare Zielkarte mit genau einem Ziel: Die Karte selbst ist der Link.
 * Kein Button mit eigenem href im Inneren (kein Link-in-Link) – das CTA-Label
 * unten ist reines Dekor-Element der Karte.
 * Hover: Karte wechselt zu Dunkelblau mit weißer Schrift und weißem Rand,
 * hebt sich um maximal 2 px an. Labels/Icons werden passend umgestellt.
 */
export function LeistungCard({
  leistung,
  hasMassnahmeBadge = false,
}: {
  leistung: Leistung;
  hasMassnahmeBadge?: boolean;
}) {
  return (
    <li className="list-none h-full">
      <Link
        href={leistung.href}
        className="group relative flex h-full flex-col gap-4 rounded-[var(--radius-md)] border border-navy-100 bg-white p-6 shadow-card transition-all duration-200 motion-reduce:transition-none hover:-translate-y-0.5 hover:border-white hover:bg-navy hover:text-white hover:shadow-card-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-btn-red"
      >
        <div className="flex items-center justify-between gap-2">
          <span className="inline-flex items-center rounded-[var(--radius-full)] bg-navy-50 px-3 py-1 text-xs font-mono font-semibold uppercase tracking-wide text-navy transition-colors group-hover:bg-white/10 group-hover:text-white">
            {leistung.eyebrow}
          </span>
          {hasMassnahmeBadge && (
            <span className="shrink-0 rounded bg-btn-red px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-white">
              AZAV-Maßnahme
            </span>
          )}
        </div>

        <h3 className="text-xl font-bold text-navy transition-colors group-hover:text-white">
          {leistung.title}
        </h3>

        <p className="text-sm leading-relaxed text-navy-600 transition-colors group-hover:text-white/80">
          {leistung.summary}
        </p>

        <ul className="space-y-1.5 text-sm text-navy-600 transition-colors group-hover:text-white/90">
          {leistung.bullets.map((b) => (
            <li key={b} className="flex items-start gap-2">
              <span
                className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-btn-red transition-colors group-hover:bg-white"
                aria-hidden="true"
              />
              <span>{b}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto space-y-4 pt-2">
          {leistung.price && (
            <p className="rounded-[var(--radius-sm)] bg-navy-50 px-3.5 py-3 font-mono text-sm font-semibold text-navy transition-colors group-hover:bg-white/10 group-hover:text-white">
              {leistung.price}
            </p>
          )}
          <div
            aria-hidden="true"
            className="flex items-center justify-between text-sm font-semibold text-navy transition-colors group-hover:text-white"
          >
            <span>{leistung.ctaLabel}</span>
            <span className="transition-transform duration-200 motion-reduce:transition-none group-hover:translate-x-1">
              →
            </span>
          </div>
        </div>
      </Link>
    </li>
  );
}
