import { notFound } from "next/navigation";
import LeadForm from "@/components/LeadForm";
import PageShell from "@/components/PageShell";
import { cities } from "@/lib/cities";
import { services } from "@/lib/services";

export function generateStaticParams() { return cities.flatMap(c=>services.map(s=>({city:c.slug,service:s.slug}))); }
export default function LocalServicePage({params}:{params:{city:string;service:string}}) { const city=cities.find(c=>c.slug===params.city); const service=services.find(s=>s.slug===params.service); if(!city||!service) notFound(); return <PageShell eyebrow="Услуги рядом" title={`${service.title} в городе ${city.name}`}><p>{service.description} Бригада выезжает по городу {city.name} и в ближайшие населённые пункты Московской области.</p><h2>Цена</h2><p className="text-xl font-bold !text-accent">{service.price}</p><p>Рассчитаем точную цену по фотографии участка или после бесплатного осмотра.</p><div className="mt-10 rounded-2xl border border-line bg-card p-7"><LeadForm /></div></PageShell>; }
