import type { ReactNode } from "react";
import Container from "./Container";

export default function PageShell({ eyebrow, title, children }: { eyebrow?: string; title: string; children: ReactNode }) { return <section className="pb-10 pt-32"><Container className="max-w-4xl">{eyebrow && <p className="mb-2 font-semibold uppercase tracking-widest text-accent">{eyebrow}</p>}<h1 className="text-4xl font-extrabold leading-tight text-bright max-sm:text-[28px]">{title}</h1><div className="prose-site mt-6">{children}</div></Container></section>; }
