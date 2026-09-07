import { siteConfig } from "@/lib/site-config";

export function OrganizationStructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    logo: `${siteConfig.url}${siteConfig.images.badge}`,
    email: siteConfig.contact.email,
    telephone: siteConfig.contact.phoneDisplay,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      postalCode: siteConfig.address.zip,
      addressLocality: siteConfig.address.city,
      addressCountry: "DE",
    },
    founder: {
      "@type": "Person",
      name: siteConfig.founder,
    },
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Trägerzulassung § 178 SGB III",
      recognizedBy: {
        "@type": "Organization",
        name: siteConfig.certificate.issuerFull,
      },
      identifier: siteConfig.certificate.number,
    },
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
}

export function FaqStructuredData({ items }: { items: { question: string; answer: string }[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
}

export function ServiceStructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Individuelles Bewerbungscoaching und Aktivierung",
    provider: {
      "@type": "EducationalOrganization",
      name: siteConfig.name,
      legalName: siteConfig.legalName,
    },
    areaServed: {
      "@type": "City",
      name: "Frankfurt am Main",
    },
    audience: {
      "@type": "Audience",
      audienceType: "Arbeitsuchende mit AVGS",
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR",
      description: "Kostenfrei bei bewilligtem Aktivierungs- und Vermittlungsgutschein (AVGS).",
    },
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
}
