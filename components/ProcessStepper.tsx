import type { ProcessStep } from "@/lib/content/process";

export function ProcessStepper({ steps }: { steps: ProcessStep[] }) {
  return (
    <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
      {steps.map((step, i) => (
        <li key={step.id} className="relative flex flex-col gap-3 rounded-[var(--radius-md)] border border-navy-100 bg-white p-6 shadow-card">
          <div className="flex items-center gap-3">
            <span
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy font-mono text-sm font-bold text-white"
              aria-hidden="true"
            >
              {String(step.id).padStart(2, "0")}
            </span>
            {i < steps.length - 1 && (
              <span className="hidden h-px flex-1 bg-navy-100 sm:hidden lg:block" aria-hidden="true" />
            )}
          </div>
          <h3 className="font-semibold text-navy">{step.title}</h3>
          <p className="text-sm leading-relaxed text-navy-600">{step.description}</p>
        </li>
      ))}
    </ol>
  );
}
