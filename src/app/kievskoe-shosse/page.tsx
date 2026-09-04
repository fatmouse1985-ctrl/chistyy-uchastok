import Link from "next/link";
import PageShell from "@/components/PageShell";
const places=["Кокошкино","Селятино","Калининец","Апрелевка","Крёкшино","Рассудово","Наро-Фоминск","Бекасово"];
export default function KievPage(){return <PageShell eyebrow="Зона выезда" title="Покос травы и спил деревьев по Киевскому шоссе"><p>Работаем на участках вдоль Киевского направления — от МКАД до Наро-Фоминска и Вереи.</p><div className="mt-8 flex flex-wrap gap-3">{places.map(x=><span key={x} className="rounded-[10px] border border-line bg-card px-4 py-3">{x}</span>)}</div><p><Link href="/rajony/naro-fominskij" className="text-accent">Подробнее о Наро-Фоминском районе</Link></p></PageShell>}
