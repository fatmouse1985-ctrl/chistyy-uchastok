import Link from "next/link";
import { notFound } from "next/navigation";
import PageShell from "@/components/PageShell";
import ServiceCard from "@/components/ServiceCard";
import { cities } from "@/lib/cities";
import { services } from "@/lib/services";

export function generateStaticParams() { return cities.map(({slug})=>({city:slug})); }
export default function CityPage({params}:{params:{city:string}}) { const city=cities.find(c=>c.slug===params.city); if(!city) notFound(); return <PageShell eyebrow="География работ" title={`Услуги в городе ${city.name}`}><p>Выезжаем на участки, в СНТ и коттеджные посёлки города {city.name}. Оценим объём работ и согласуем фиксированную стоимость.</p><div className="mt-10 grid grid-cols-2 gap-5 max-sm:grid-cols-1">{services.map(s=><ServiceCard key={s.slug} service={s}/>)}</div><p className="mt-8"><Link className="text-accent" href="/#form">Оставить общую заявку</Link></p></PageShell>; }
