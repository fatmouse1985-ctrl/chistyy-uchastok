export default function SectionHeader({ tag, title, subtitle }: { tag?: string; title: string; subtitle?: string }) {
  return (
    <div className="mb-10 text-center">
      {tag && <span className="mb-2.5 inline-block text-sm font-semibold uppercase tracking-widest text-accent">{tag}</span>}
      <h2 className="text-[32px] font-extrabold tracking-tight text-bright max-sm:text-[26px]">{title}</h2>
      {subtitle && <p className="mx-auto mt-2.5 max-w-2xl text-[17px] text-dim">{subtitle}</p>}
    </div>
  );
}
