import Link from "next/link";
import { ArrowRight, Axe, Scissors, Sprout, TreePine, Trees, Truck } from "lucide-react";
import type { Service } from "@/lib/services";

const icons = { Sprout, Axe, Trees, TreePine, Truck, Scissors };
export default function ServiceCard({ service }: { service: Service }) {
  const Icon = icons[service.icon];
  return <Link href={`/uslugi/${service.slug}`} className="group relative overflow-hidden rounded-2xl border border-line bg-card p-7 transition duration-300 before:absolute before:inset-x-0 before:top-0 before:h-[3px] before:origin-left before:scale-x-0 before:bg-accent before:transition-transform hover:-translate-y-[3px] hover:border-accent hover:bg-card-hover hover:before:scale-x-100">
    <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent-dim text-accent"><Icon size={25} /></span><h3 className="mb-2 text-xl font-bold text-bright">{service.title}</h3><p className="mb-3.5 text-[15px] text-dim">{service.description}</p><div className="font-semibold text-accent">{service.price}</div><span className="mt-3 inline-flex items-center gap-1.5 text-[15px] font-semibold text-accent transition-all group-hover:gap-2.5">Подробнее <ArrowRight size={17} /></span>
  </Link>;
}
