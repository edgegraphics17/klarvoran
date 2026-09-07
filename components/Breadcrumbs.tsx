import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export type Crumb = { href: string; label: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ href: "/", label: "Startseite" }, ...items].map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      item: `${siteConfig.url}${item.href}`,
    })),
  };

  return (
    <nav aria-label="Breadcrumb" className="border-b border-navy-100 bg-navy-50/50">
      <div className="mx-auto max-w-6xl px-5 py-3 sm:px-6 lg:px-8">
        <ol className="flex flex-wrap items-center gap-1.5 text-sm text-navy-600">
          <li>
            <Link href="/" className="hover:text-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy rounded-[var(--radius-sm)]">
              Startseite
            </Link>
          </li>
          {items.map((item, i) => (
            <li key={item.href} className="flex items-center gap-1.5">
              <span aria-hidden="true">/</span>
              {i === items.length - 1 ? (
                <span aria-current="page" className="text-navy">
                  {item.label}
                </span>
              ) : (
                <Link href={item.href} className="hover:text-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy rounded-[var(--radius-sm)]">
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </nav>
  );
}
