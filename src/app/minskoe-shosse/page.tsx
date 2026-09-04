import Link from "next/link";
import PageShell from "@/components/PageShell";
const places=["Одинцово","Немчиновка","Сколково","Барвиха","Большие Вязёмы","Голицыно","Кубинка","Звенигород","Тучково"];
export default function MinskPage(){return <PageShell eyebrow="Зона выезда" title="Покос травы и спил деревьев по Минскому шоссе"><p>Выезжаем на дачные и загородные участки вдоль Минского направления.</p><div className="mt-8 flex flex-wrap gap-3">{places.map(x=><span key={x} className="rounded-[10px] border border-line bg-card px-4 py-3">{x}</span>)}</div><p><Link href="/rajony/odintsovskij" className="text-accent">Подробнее об Одинцовском районе</Link></p></PageShell>}
