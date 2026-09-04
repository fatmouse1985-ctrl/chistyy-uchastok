import Container from "./Container";
import SectionHeader from "./SectionHeader";
import { pricing } from "@/lib/pricing";

export default function PricingTable({ section = true }: { section?: boolean }) {
  const table = <div className="overflow-x-auto rounded-2xl border border-line bg-card p-8 max-sm:p-3"><table className="w-full min-w-[620px] border-collapse text-left"><thead><tr>{["Вид работ", "Ед. изм.", "Цена"].map(x => <th key={x} className="border-b border-line px-4 py-3.5 text-sm font-semibold uppercase tracking-wide text-dim">{x}</th>)}</tr></thead><tbody>{pricing.map(([work, unit, price]) => <tr key={work} className="hover:bg-accent/5"><td className="border-b border-line px-4 py-3.5 text-[15px]">{work}</td><td className="border-b border-line px-4 py-3.5 text-[15px]">{unit}</td><td className="whitespace-nowrap border-b border-line px-4 py-3.5 text-right font-bold text-accent">{price}</td></tr>)}</tbody></table></div>;
  return section ? <section id="tseny" className="section scroll-mt-16 bg-card"><Container><SectionHeader tag="Цены" title="Прайс-лист на услуги" subtitle="Фиксированные цены без скрытых платежей. Точную стоимость назовём после осмотра участка." />{table}</Container></section> : table;
}
