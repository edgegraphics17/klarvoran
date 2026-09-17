import Image from "next/image";
import Link from "next/link";

type Seal = "traeger" | "massnahme";

const sealConfig = {
  traeger: {
    src: "/images/zertifikate/Certqua_Zeichen_AZAV_gross_4c.jpg",
    width: 783,
    height: 396,
    alt: "CERTQUA – zugelassener Träger nach AZAV",
    // Trägerzeichen: verlinkt auf den Trägernachweis (CERTQUA-Zertifikat als PDF).
    href: "/dokumente/CERTQUA.pdf",
    linkLabel: "Zertifikat Trägerzulassung (PDF)",
  },
  massnahme: {
    src: "/images/zertifikate/edfe60fc-0379-42b4-adc7-c8703546c2bf.jpg",
    width: 1566,
    height: 792,
    alt: "CERTQUA – zugelassene Maßnahme nach AZAV",
    // Maßnahmenzertifikat liegt (noch) nicht als separater Nachweis vor:
    // bewusst KEINE Blindverlinkung – das Zeichen wird nur gezeigt.
    href: null,
    linkLabel: null,
  },
} as const;

/**
 * CERTQUA-Zeichen in Originaldatei, vollständig und unverzerrt (object-contain),
 * auf weißem Grund, ohne Dark-Mode-Filter. Breite standardmäßig 260 px
 * (Vorgabe 240–280 px im Inhalt). Link beschriftet das Zertifikat eindeutig
 * als Träger- oder Maßnahmezertifikat; Hover hebt nur den Linkrahmen hervor,
 * nicht das Zeichen selbst.
 */
export function CertificateSeal({
  seal,
  caption,
  width = 260,
  className = "",
}: {
  seal: Seal;
  caption: string;
  width?: number;
  className?: string;
}) {
  const config = sealConfig[seal];

  const image = (
    <Image
      src={config.src}
      alt={config.alt}
      width={config.width}
      height={config.height}
      sizes={`${width}px`}
      className="h-auto w-full object-contain"
      priority={false}
    />
  );

  return (
    <figure
      className={`flex w-full max-w-[280px] flex-col items-center rounded-[var(--radius-md)] border border-navy-100 bg-white p-4 ${className}`}
      style={{ width }}
    >
      <div className="w-full" style={{ maxWidth: width }}>
        {config.href ? (
          <Link
            href={config.href}
            className="block rounded-[var(--radius-sm)] p-1 transition-colors hover:bg-navy-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-btn-red"
            aria-label={`${config.alt} – ${config.linkLabel}`}
          >
            {image}
          </Link>
        ) : (
          image
        )}
      </div>
      <figcaption className="mt-3 text-center text-xs leading-relaxed text-navy-600">{caption}</figcaption>
      {config.href && (
        <Link
          href={config.href}
          className="mt-2 text-xs font-semibold text-navy underline underline-offset-4 hover:text-btn-red focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-btn-red"
        >
          {config.linkLabel}
        </Link>
      )}
    </figure>
  );
}
