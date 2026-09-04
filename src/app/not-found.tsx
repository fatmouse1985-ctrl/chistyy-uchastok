import Link from "next/link";
import { Home } from "lucide-react";
import PageShell from "@/components/PageShell";
export default function NotFound(){return <PageShell eyebrow="Ошибка 404" title="Страница не найдена"><p>Возможно, адрес изменился или страница была удалена.</p><Link href="/" className="btn-primary mt-8"><Home size={19}/>Вернуться на главную</Link></PageShell>}
