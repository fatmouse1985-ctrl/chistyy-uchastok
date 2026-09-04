"use client";

import Link from "next/link";
import { Leaf, Menu, Phone, X } from "lucide-react";
import { useState } from "react";

const links = [["/#uslugi", "Услуги"], ["/tseny", "Цены"], ["/#goroda", "Города"], ["/#otzyvy", "Отзывы"], ["/blog", "Блог"], ["/kontakty", "Контакты"]];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-bg/95 backdrop-blur-md">
      <div className="mx-auto flex min-h-[65px] max-w-site items-center justify-between gap-5 px-5">
        <Link href="/" className="flex items-center gap-2.5 text-xl font-bold text-bright">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-bg"><Leaf size={21} /></span>
          <span>Чистый Участок</span>
        </Link>
        <nav className="flex items-center gap-7 max-[968px]:hidden">
          {links.map(([href, label]) => <Link key={href} href={href} className="text-[15px] text-dim transition hover:text-accent">{label}</Link>)}
        </nav>
        <a href="tel:+79000000000" className="flex items-center gap-2 whitespace-nowrap rounded-[10px] bg-accent px-5 py-2.5 text-[15px] font-semibold text-bg transition hover:bg-accent-dark max-sm:hidden"><Phone size={17} />+7 (900) 000-00-00</a>
        <button type="button" aria-label={open ? "Закрыть меню" : "Открыть меню"} aria-expanded={open} onClick={() => setOpen(!open)} className="hidden text-ink max-[968px]:block">{open ? <X /> : <Menu />}</button>
      </div>
      {open && <nav className="border-t border-line bg-bg px-5 py-5 min-[969px]:hidden">{links.map(([href, label]) => <Link key={href} href={href} onClick={() => setOpen(false)} className="block border-b border-line py-3 text-dim hover:text-accent">{label}</Link>)}<a href="tel:+79000000000" className="mt-4 flex items-center gap-2 text-accent"><Phone size={17} />+7 (900) 000-00-00</a></nav>}
    </header>
  );
}
