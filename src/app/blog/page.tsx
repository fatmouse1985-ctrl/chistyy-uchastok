import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageShell from "@/components/PageShell";
import { articles } from "@/lib/articles";

export default function BlogPage(){return <PageShell eyebrow="Полезные статьи" title="Блог об уходе за участком"><div className="grid gap-5">{articles.map(a=><Link key={a.slug} href={`/blog/${a.slug}`} className="group rounded-2xl border border-line bg-card p-6 transition hover:-translate-y-[3px] hover:border-accent hover:bg-card-hover"><h2 className="!mt-0">{a.title}</h2><p>{a.excerpt}</p><span className="mt-4 inline-flex items-center gap-2 text-accent">Читать <ArrowRight size={17}/></span></Link>)}</div></PageShell>}
