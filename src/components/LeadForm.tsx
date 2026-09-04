"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { services } from "@/lib/services";

export default function LeadForm() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setLoading(true);
    const data = Object.fromEntries(new FormData(event.currentTarget));
    const response = await fetch("/api/zayavka", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
    setLoading(false); setSent(response.ok);
  }
  if (sent) return <div className="flex min-h-72 flex-col items-center justify-center text-center"><CheckCircle2 size={48} className="mb-4 text-accent" /><h3 className="text-2xl font-bold text-bright">Заявка отправлена</h3><p className="mt-2 text-dim">Мы свяжемся с вами в ближайшее время.</p></div>;
  const input = "w-full rounded-[10px] border border-line bg-bg px-4 py-3 text-[15px] text-ink outline-none transition placeholder:text-dim/70 focus:border-accent focus:ring-2 focus:ring-accent-dim";
  return <form onSubmit={submit}>
    <div className="mb-3.5"><label htmlFor="name" className="mb-1.5 block text-sm text-dim">Ваше имя</label><input id="name" name="name" className={input} placeholder="Как к вам обращаться?" required /></div>
    <div className="grid grid-cols-2 gap-3 max-sm:grid-cols-1"><div className="mb-3.5"><label htmlFor="phone" className="mb-1.5 block text-sm text-dim">Телефон</label><input id="phone" name="phone" type="tel" className={input} placeholder="+7 (___) ___-__-__" required /></div><div className="mb-3.5"><label htmlFor="area" className="mb-1.5 block text-sm text-dim">Площадь, соток</label><input id="area" name="area" type="number" min="1" className={input} placeholder="10" /></div></div>
    <div className="mb-3.5"><label htmlFor="service" className="mb-1.5 block text-sm text-dim">Услуга</label><select id="service" name="service" className={input}>{services.map(s => <option key={s.slug} value={s.slug}>{s.title}</option>)}<option value="complex">Комплексные работы</option></select></div>
    <button disabled={loading} className="mt-1.5 flex w-full items-center justify-center gap-2 rounded-[10px] bg-accent p-3.5 font-bold text-bg transition hover:bg-accent-dark disabled:opacity-60">{loading ? "Отправляем..." : "Получить расчёт"}<ArrowRight size={18} /></button>
    <p className="mt-3 text-center text-xs text-dim">Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности</p>
  </form>;
}
