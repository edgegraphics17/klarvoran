import { siteConfig } from "@/lib/site-config";

const items = [
  { label: "AZAV-Träger nach § 178 SGB III", value: null },
  { label: `CERTQUA-Zertifikat ${siteConfig.certificate.number}`, value: null },
  { label: "0 € für dich mit bewilligtem AVGS", value: null },
  { label: "Eigenständiger Träger, kein Coachpool", value: null },
];

export function TrustBar() {
  return (
    <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-medium text-navy-600">
      {items.map((item) => (
        <li key={item.label} className="flex items-center gap-2">
          <svg viewBox="0 0 20 20" width="16" height="16" fill="none" aria-hidden="true" className="shrink-0 text-red">
            <path
              d="M4 10.5 8 14l8-9"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {item.label}
        </li>
      ))}
    </ul>
  );
}
