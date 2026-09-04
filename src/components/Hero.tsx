import { Check, ClipboardPenLine, Phone } from "lucide-react";
import Container from "./Container";
import LeadForm from "./LeadForm";

export default function Hero() {
  return <section className="relative overflow-hidden pb-[60px] pt-[120px] before:pointer-events-none before:absolute before:left-1/2 before:top-0 before:h-[400px] before:w-[800px] before:-translate-x-1/2 before:bg-[radial-gradient(ellipse,var(--accent-dim),transparent_70%)]">
    <Container className="relative grid grid-cols-[1.2fr_1fr] items-center gap-[50px] max-[968px]:grid-cols-1 max-[968px]:gap-8">
      <div><div className="mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-card px-3.5 py-1.5 text-sm text-accent"><span className="h-2 w-2 animate-pulse rounded-full bg-accent" />Работаем по всему Подмосковью</div>
        <h1 className="mb-5 text-[44px] font-extrabold leading-[1.15] tracking-tight text-bright max-[968px]:text-[34px] max-sm:text-[28px]">Покос травы, спил деревьев и расчистка участков <span className="text-accent">в Подмосковье</span></h1>
        <p className="mb-7 max-w-xl text-lg text-dim">Профессиональные бригады с собственной техникой. Покос от 500 руб/сотка, спил деревьев от 500 руб/шт. Выезд в день обращения.</p>
        <div className="mb-8 flex flex-wrap gap-3">{["Выезд в день обращения", "Собственная техника", "Фиксированная цена", "Работаем по договору"].map(x => <span key={x} className="flex items-center gap-2 text-[15px]"><Check size={17} className="text-accent" />{x}</span>)}</div>
        <div className="flex flex-wrap gap-3.5"><a href="#form" className="btn-primary"><ClipboardPenLine size={19} />Оставить заявку</a><a href="tel:+79000000000" className="btn-outline"><Phone size={19} />Позвонить</a></div>
      </div>
      <div id="form" className="scroll-mt-24 rounded-2xl border border-line bg-card p-7"><h2 className="text-[22px] font-bold text-bright">Бесплатный расчёт стоимости</h2><p className="mb-5 mt-1 text-sm text-dim">Заполните форму — перезвоним за 15 минут</p><LeadForm /></div>
    </Container>
  </section>;
}
