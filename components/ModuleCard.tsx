import type { CoachingModule } from "@/lib/content/modules";
import { Card } from "./Card";

export function ModuleCard({ module }: { module: CoachingModule }) {
  return (
    <Card as="li" className="flex flex-col gap-4">
      <div className="flex items-start justify-between gap-3">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[var(--radius-sm)] bg-navy font-mono text-sm font-bold text-white" aria-hidden="true">
          {module.id}
        </span>
        <span className="rounded-[var(--radius-full)] bg-red/10 px-3 py-1 font-mono text-xs font-semibold text-red">
          {module.ue} UE
        </span>
      </div>
      <h3 className="text-lg font-bold text-navy">{module.title}</h3>
      <p className="text-sm leading-relaxed text-navy-600">{module.summary}</p>
      <ul className="space-y-1.5 text-sm text-navy-600">
        {module.focus.map((f) => (
          <li key={f} className="flex gap-2">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-red" aria-hidden="true" />
            {f}
          </li>
        ))}
      </ul>
      <p className="mt-auto rounded-[var(--radius-sm)] bg-navy-50 px-3.5 py-3 text-sm text-navy">
        <strong className="font-semibold">Ergebnis:</strong> {module.outcome}
      </p>
    </Card>
  );
}
