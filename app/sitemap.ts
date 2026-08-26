import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

const paths = [
  "/",
  "/ueber-uns",
  "/coaching-angebot",
  "/avgs",
  "/ablauf",
  "/ueber-den-coach",
  "/fachkraefte-kooperationspartner",
  "/faq",
  "/kontakt",
  "/termin",
  "/impressum",
  "/datenschutz",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
