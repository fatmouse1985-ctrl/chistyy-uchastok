import PageShell from "@/components/PageShell";
import PricingTable from "@/components/PricingTable";
export default function PricesPage(){return <PageShell eyebrow="Стоимость работ" title="Прайс-лист"><p>Базовые цены на услуги. Точную смету фиксируем после осмотра участка или оценки по фотографиям.</p><div className="mt-8"><PricingTable section={false}/></div></PageShell>}
