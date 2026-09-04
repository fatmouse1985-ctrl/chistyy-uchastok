import Link from "next/link";
import { Leaf, Mail, Phone } from "lucide-react";
import Container from "./Container";
import { services } from "@/lib/services";

export default function Footer() {
  return <footer id="kontakty" className="mt-[60px] border-t border-line py-12 pb-7">
    <Container>
      <div className="mb-8 grid grid-cols-[2fr_1fr_1fr_1fr] gap-8 max-[968px]:grid-cols-2 max-sm:grid-cols-1">
        <div><h3 className="mb-3 flex items-center gap-2 text-lg font-bold text-bright"><Leaf className="text-accent" />Чистый Участок</h3><p className="max-w-xs text-sm text-dim">Покос травы, спил деревьев и расчистка участков в Москве и Подмосковье.</p></div>
        <div><h4 className="mb-3.5 font-bold text-bright">Услуги</h4><ul className="space-y-2">{services.slice(0, 4).map(s => <li key={s.slug}><Link className="text-sm text-dim hover:text-accent" href={`/uslugi/${s.slug}`}>{s.title}</Link></li>)}</ul></div>
        <div><h4 className="mb-3.5 font-bold text-bright">География</h4><ul className="space-y-2"><li><Link className="text-sm text-dim hover:text-accent" href="/kievskoe-shosse">Киевское шоссе</Link></li><li><Link className="text-sm text-dim hover:text-accent" href="/minskoe-shosse">Минское шоссе</Link></li><li><Link className="text-sm text-dim hover:text-accent" href="/goroda/odintsovo">Одинцово</Link></li><li><Link className="text-sm text-dim hover:text-accent" href="/goroda/naro-fominsk">Наро-Фоминск</Link></li></ul></div>
        <div><h4 className="mb-3.5 font-bold text-bright">Контакты</h4><div className="space-y-3 text-sm text-dim"><a className="flex items-center gap-2 hover:text-accent" href="tel:+79000000000"><Phone size={16} />+7 (900) 000-00-00</a><a className="flex items-center gap-2 hover:text-accent" href="mailto:info@chistyy-uchastok.ru"><Mail size={16} />info@chistyy-uchastok.ru</a></div></div>
      </div>
      <div className="flex justify-between gap-4 border-t border-line pt-5 text-[13px] text-dim max-sm:flex-col"><span>© {new Date().getFullYear()} Чистый Участок</span><Link href="/politika-konfidentsialnosti" className="hover:text-accent">Политика конфиденциальности</Link></div>
    </Container>
  </footer>;
}
