import { notFound } from "next/navigation";
import PageShell from "@/components/PageShell";
const districts={"naro-fominskij":"Наро-Фоминский район","odintsovskij":"Одинцовский район"};
export function generateStaticParams(){return Object.keys(districts).map(slug=>({slug}));}
export default function DistrictPage({params}:{params:{slug:string}}){const name=districts[params.slug as keyof typeof districts];if(!name)notFound();return <PageShell eyebrow="Районы выезда" title={`Услуги в ${name}`}><p>Выполняем покос травы, спил деревьев, удаление пней и комплексную расчистку участков. Выезжаем в города, посёлки, СНТ и коттеджные посёлки района.</p></PageShell>}
