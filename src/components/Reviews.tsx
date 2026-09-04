import { Star } from "lucide-react";
import Container from "./Container";
import SectionHeader from "./SectionHeader";

const reviews = [
  ["СМ","Сергей М.","Истринский район, СНТ «Лесное»","Заказывал покос травы на 15 сотках. Ребята приехали на следующий день, за 2 часа всё скосили и убрали. Участок был заросший по пояс. Цена как договаривались — не изменилась."],
  ["ЕН","Елена Н.","Одинцовский район, КП «Николина Гора»","Спилили 3 старые берёзы, которые нависали над домом. Работали аккуратно, ничего не повредили. Вывезли весь мусор. Очень довольна, рекомендую!"],
  ["ДВ","Дмитрий В.","Раменский район, СНТ «Родник»","Расчистка участка под строительство — 20 соток леса и бурьяна. Бригада за 3 дня всё вычистила. Пни удалили дробилкой. Отдельное спасибо за честную смету."],
];
export default function Reviews() { return <section id="otzyvy" className="section scroll-mt-16"><Container><SectionHeader tag="Отзывы" title="Что говорят клиенты" /><div className="grid grid-cols-3 gap-5 max-[968px]:grid-cols-1">{reviews.map(([initials,name,place,text]) => <article key={name} className="rounded-2xl border border-line bg-card p-6"><div className="mb-3.5 flex items-center gap-3"><span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent-dim font-bold text-accent">{initials}</span><div><h3 className="text-[15px] font-semibold text-bright">{name}</h3><p className="text-[13px] text-dim">{place}</p></div></div><div className="mb-2 flex gap-1 text-accent" aria-label="5 из 5">{Array.from({length:5}).map((_,i)=><Star key={i} size={14} fill="currentColor" />)}</div><p className="text-sm leading-relaxed text-dim">{text}</p></article>)}</div></Container></section>; }
