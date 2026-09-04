import type { MetadataRoute } from "next";
import { cities } from "@/lib/cities";
import { services } from "@/lib/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://chistyy-uchastok.ru";
  const staticPaths = ["", "/blog", "/o-nas", "/kontakty", "/tseny", "/kievskoe-shosse", "/minskoe-shosse", "/rajony/naro-fominskij", "/rajony/odintsovskij", "/politika-konfidentsialnosti"];
  const paths = [...staticPaths, ...services.map(s=>`/uslugi/${s.slug}`), ...cities.map(c=>`/goroda/${c.slug}`), ...cities.flatMap(c=>services.map(s=>`/goroda/${c.slug}/${s.slug}`)), "/blog/pokos-travy-tsena", "/blog/razreshenie-na-spil", "/blog/kak-izbavitsya-ot-borshchevika"];
  return paths.map(url => ({ url: `${base}${url}`, lastModified: new Date(), changeFrequency: url === "" ? "weekly" : "monthly", priority: url === "" ? 1 : .7 }));
}
