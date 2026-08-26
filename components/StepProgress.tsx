export function StepProgress({ current, total, labels }: { current: number; total: number; labels: string[] }) {
  const percent = Math.round((current / total) * 100);
  return (
    <div className="mb-8">
      <div
        role="progressbar"
        aria-valuenow={current}
        aria-valuemin={1}
        aria-valuemax={total}
        aria-label={`Schritt ${current} von ${total}: ${labels[current - 1]}`}
        className="h-2 w-full overflow-hidden rounded-[var(--radius-full)] bg-navy-100"
      >
        <div
          className="h-full rounded-[var(--radius-full)] bg-red transition-[width] duration-300 motion-reduce:transition-none"
          style={{ width: `${percent}%` }}
        />
      </div>
      <p className="mt-3 font-mono text-xs font-semibold uppercase tracking-wide text-navy-600">
        Schritt {current} von {total} · {labels[current - 1]}
      </p>
    </div>
  );
}
