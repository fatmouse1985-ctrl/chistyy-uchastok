import Link from "next/link";
import { MapPin } from "lucide-react";
import Container from "./Container";
import SectionHeader from "./SectionHeader";
import { cities } from "@/lib/cities";

export default function GeoGrid() { return <section id="goroda" className="section scroll-mt-16 bg-card"><Container><SectionHeader tag="География" title="Где мы работаем" subtitle="Обслуживаем все районы Московской области. Выезжаем в СНТ, КП, ИЖС и города." /><div className="grid grid-cols-5 gap-2.5 max-[968px]:grid-cols-3 max-sm:grid-cols-1">{cities.map(c => <Link key={c.slug} href={`/goroda/${c.slug}`} className="flex items-center justify-center gap-1.5 rounded-[10px] border border-line bg-card p-3.5 text-center text-sm transition hover:border-accent hover:bg-card-hover hover:text-accent"><MapPin size={15} />{c.name}</Link>)}</div></Container></section>; }
