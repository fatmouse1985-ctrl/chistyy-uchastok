import Hero from "@/components/Hero";
import ServiceGrid from "@/components/ServiceGrid";
import PricingTable from "@/components/PricingTable";
import FeaturesGrid from "@/components/FeaturesGrid";
import GeoGrid from "@/components/GeoGrid";
import Reviews from "@/components/Reviews";
import CTA from "@/components/CTA";

export default function Home() {
  const jsonLd = { "@context":"https://schema.org", "@type":"LocalBusiness", name:"Чистый Участок", url:"https://chistyy-uchastok.ru", telephone:"+79000000000", email:"info@chistyy-uchastok.ru", description:"Покос травы, спил деревьев и расчистка участков в Подмосковье", areaServed:{"@type":"AdministrativeArea",name:"Московская область"}, priceRange:"₽₽" };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}} /><Hero /><ServiceGrid /><PricingTable /><FeaturesGrid /><GeoGrid /><Reviews /><CTA /></>;
}
