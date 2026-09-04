import { Mail, Phone } from "lucide-react";
import LeadForm from "@/components/LeadForm";
import PageShell from "@/components/PageShell";
export default function ContactsPage(){return <PageShell eyebrow="Связаться с нами" title="Контакты"><div className="mb-8 space-y-3"><a className="flex items-center gap-2 text-xl text-accent" href="tel:+79000000000"><Phone/>+7 (900) 000-00-00</a><a className="flex items-center gap-2 text-accent" href="mailto:info@chistyy-uchastok.ru"><Mail/>info@chistyy-uchastok.ru</a><p>Работаем ежедневно по Москве и Московской области.</p></div><div className="rounded-2xl border border-line bg-card p-7"><LeadForm/></div></PageShell>}
