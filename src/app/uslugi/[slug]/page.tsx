import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/CtaBand";
import { clinic } from "@/data/clinic";
import { getService, services } from "@/data/services";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.short,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  const related = services.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      <section className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 lg:grid-cols-2 lg:px-8">
        <div>
          <Link
            href="/uslugi"
            className="text-xs tracking-[0.25em] text-gold uppercase"
          >
            Услуги
          </Link>
          <h1 className="font-display mt-4 text-5xl text-forest md:text-6xl">
            {service.title}
          </h1>
          <p className="mt-5 text-lg text-mute">{service.lead}</p>
          {service.price && (
            <p className="mt-6 font-display text-3xl text-gold">{service.price}</p>
          )}
          <a
            href={clinic.bookingUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex rounded-full bg-forest px-7 py-3 text-sm tracking-[0.18em] text-cream uppercase"
          >
            Записаться
          </a>
        </div>
        <div className="relative aspect-[4/5] overflow-hidden rounded-[2.2rem] md:aspect-[5/4]">
          <Image src={service.image} alt={service.title} fill className="object-cover" />
        </div>
      </section>
      <section className="mx-auto max-w-3xl px-5 pb-16 lg:px-8">
        {service.sections.map((block) => (
          <article key={block.heading} className="mb-10">
            <h2 className="font-display text-3xl text-forest">{block.heading}</h2>
            {block.paragraphs.map((p) => (
              <p key={p} className="mt-4 leading-relaxed text-mute">
                {p}
              </p>
            ))}
          </article>
        ))}
        {service.priceGroups?.map((group) => (
          <article key={group.name ?? "prices"} className="mb-10">
            <h2 className="font-display text-3xl text-forest">
              {group.name ?? "Цены"}
            </h2>
            <div className="mt-4 divide-y divide-gold/20 border-y border-gold/20">
              {group.items.map((item) => (
                <div
                  key={item.name}
                  className="flex items-baseline justify-between gap-4 py-3 text-sm"
                >
                  <span className="text-mute">{item.name}</span>
                  <span className="shrink-0 text-gold">{item.price}</span>
                </div>
              ))}
            </div>
          </article>
        ))}
        {service.contraindications && (
          <article className="mb-10">
            <h2 className="font-display text-3xl text-forest">Противопоказания</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-mute">
              {service.contraindications.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        )}
        <p className="text-sm text-gold">{clinic.disclaimer}</p>
      </section>
      <section className="border-t border-gold/15 px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-display text-3xl text-forest">Смотрите также</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {related.map((s) => (
              <Link key={s.slug} href={`/uslugi/${s.slug}`} className="rounded-3xl bg-cream-deep p-5">
                <p className="font-display text-2xl text-forest">{s.title}</p>
                <p className="mt-2 text-sm text-mute">{s.short}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
