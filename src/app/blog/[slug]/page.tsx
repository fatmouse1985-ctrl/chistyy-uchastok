import { notFound } from "next/navigation";
import PageShell from "@/components/PageShell";
import { articles } from "@/lib/articles";

export function generateStaticParams(){return articles.map(({slug})=>({slug}));}
export default function ArticlePage({params}:{params:{slug:string}}){const article=articles.find(a=>a.slug===params.slug);if(!article)notFound();return <PageShell eyebrow="Блог" title={article.title}><p>{article.excerpt} В этой статье мы собрали основные рекомендации, которые помогут правильно спланировать работы на участке.</p><h2>С чего начать</h2><p>Оцените площадь, высоту растительности, доступ для техники и объём отходов. Эти параметры влияют на сроки и итоговую стоимость.</p><h2>Практические рекомендации</h2><p>Работы лучше выполнять последовательно и с соблюдением техники безопасности. Если задача требует специального оборудования, поручите её опытной бригаде.</p></PageShell>}
