import Container from "./Container";
import SectionHeader from "./SectionHeader";
import ServiceCard from "./ServiceCard";
import { services } from "@/lib/services";

export default function ServiceGrid() { return <section id="uslugi" className="section scroll-mt-16"><Container><SectionHeader tag="Наши услуги" title="Что мы делаем на участке" subtitle="Полный цикл работ по уходу за участком — от покоса травы до полной расчистки под строительство" /><div className="grid grid-cols-3 gap-5 max-[968px]:grid-cols-2 max-sm:grid-cols-1">{services.map(s => <ServiceCard key={s.slug} service={s} />)}</div></Container></section>; }
