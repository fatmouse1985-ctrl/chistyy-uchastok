import { notFound } from "next/navigation";
import type { Metadata } from "next";
import LeadForm from "@/components/LeadForm";
import PageShell from "@/components/PageShell";
import { services } from "@/lib/services";

export function generateStaticParams() { return services.map(({ slug }) => ({ slug })); }
export function generateMetadata({ params }: { params: { slug: string } }): Metadata { const service=services.find(s=>s.slug===params.slug); return { title: service?.title ?? "Услуга", description: service?.description }; }
export default function ServicePage({ params }: { params: { slug: string } }) { const service=services.find(s=>s.slug===params.slug); if(!service) notFound(); return <PageShell eyebrow="Услуги" title={`${service.title} в Подмосковье`}><p>{service.description} Работаем аккуратно, используем профессиональную технику и заранее согласовываем смету.</p><h2>Стоимость работ</h2><p className="text-xl font-bold !text-accent">{service.price}</p><p>Окончательная стоимость зависит от площади, сложности доступа и необходимости вывоза отходов.</p><div className="mt-10 rounded-2xl border border-line bg-card p-7"><h2 className="!mt-0">Получить точный расчёт</h2><LeadForm /></div></PageShell>; }
