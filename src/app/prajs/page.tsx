import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { clinic } from "@/data/clinic";
import { getService, promos, services } from "@/data/services";

export const metadata = {
  title: "Прайс",
  description: "Актуальные цены и акции Eco Clinic. Скачать полный прайс-лист.",
};

export default function PricePage() {
  return (
    <>
      <PageHero
        kicker="Прайс-лист"
        title="Всегда актуальные цены и акции"
        text="Сайт носит информационный характер и не является офертой. Точную стоимость уточняйте у администратора."
      />
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <a
          href={clinic.priceUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex rounded-full bg-forest px-7 py-3 text-sm tracking-[0.18em] text-cream uppercase"
        >
          Скачать прайс
        </a>
        <h2 className="font-display mt-14 text-3xl text-forest">Акции</h2>
        <div className="mt-6 divide-y divide-gold/20 border-y border-gold/20">
          {promos.map((p) => (
            <Link
              key={p.title}
              href={p.href}
              className="flex items-center justify-between gap-4 py-5"
            >
              <span className="font-display text-2xl text-forest">{p.title}</span>
              <span className="text-gold">{p.price}</span>
            </Link>
          ))}
        </div>
        <h2 className="font-display mt-16 text-3xl text-forest">Направления</h2>
        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/uslugi/${s.slug}`}
              className="flex items-center justify-between rounded-2xl bg-white/50 px-5 py-4"
            >
              <span>{s.title}</span>
              <span className="text-sm text-gold">
                {(getService(s.slug) ?? s).price ?? "по запросу"}
              </span>
            </Link>
          ))}
        </div>
        <p className="mt-10 text-sm text-mute">{clinic.disclaimer}</p>
      </section>
      <CtaBand />
    </>
  );
}
