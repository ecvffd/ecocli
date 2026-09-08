import Image from "next/image";
import Link from "next/link";
import { clinic } from "@/data/clinic";
import { doctors } from "@/data/doctors";
import { articles } from "@/data/articles";
import { homepageGroups, services } from "@/data/services";
import { CtaBand } from "@/components/CtaBand";
import { PromoSlider } from "@/components/PromoSlider";

export default function Home() {
  return (
    <>
      <PromoSlider />

      <section className="bg-forest text-cream">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <p className="text-xs tracking-[0.3em] text-gold uppercase">Услуги клиники</p>
          <h2 className="font-display mt-3 max-w-3xl text-4xl md:text-6xl">
            То, за чем приходят чаще всего
          </h2>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {homepageGroups.map((g) => (
              <Link
                key={g.title}
                href={g.href}
                className="group relative min-h-[280px] overflow-hidden rounded-[2rem]"
              >
                <Image
                  src={g.image}
                  alt={g.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/85 via-forest/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="font-display text-3xl">{g.title}</h3>
                  {"note" in g && g.note && (
                    <p className="mt-2 text-sm text-cream/75">{g.note}</p>
                  )}
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            {services.slice(0, 8).map((s) => (
              <Link
                key={s.slug}
                href={`/uslugi/${s.slug}`}
                className="rounded-full border border-cream/20 px-4 py-2 text-sm text-cream/80 hover:border-gold hover:text-gold"
              >
                {s.title}
              </Link>
            ))}
            <Link
              href="/uslugi"
              className="rounded-full bg-gold px-4 py-2 text-sm text-forest"
            >
              Все направления
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-24 lg:grid-cols-2 lg:px-8">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem]">
          <Image
            src="/images/reception.jpg"
            alt="Интерьер Eco Clinic"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <p className="text-xs tracking-[0.3em] text-gold uppercase">Eco Clinic — это</p>
          <h2 className="font-display mt-4 text-4xl text-forest md:text-5xl">
            Три принципа, на которых держится клиника
          </h2>
          <p className="mt-6 text-mute">{clinic.philosophyIntro}</p>
          <div className="mt-10 grid gap-6">
            {clinic.values.map((v, i) => (
              <div key={v.title} className="border-t border-gold/20 pt-5">
                <p className="text-xs tracking-[0.25em] text-gold">
                  0{i + 1}
                </p>
                <h3 className="font-display mt-1 text-3xl text-forest">{v.title}</h3>
                <p className="mt-2 text-mute">{v.text}</p>
              </div>
            ))}
          </div>
          <Link
            href="/o-klinike"
            className="mt-10 inline-flex text-sm tracking-[0.18em] uppercase text-gold"
          >
            Читать о клинике
          </Link>
        </div>
      </section>

      <section className="relative overflow-hidden bg-cream-deep">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-20 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-xs tracking-[0.3em] text-gold uppercase">Комфорт оплаты</p>
            <h2 className="font-display mt-4 text-5xl text-forest">
              {clinic.installment.title}
            </h2>
            <p className="mt-2 text-xl text-sage">{clinic.installment.subtitle}</p>
            <p className="mt-6 max-w-xl text-mute">{clinic.installment.text}</p>
            <p className="mt-4 text-sm text-gold">{clinic.installment.note}</p>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem]">
            <Image
              src="/images/lounge.jpg"
              alt="Пространство клиники"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs tracking-[0.3em] text-gold uppercase">Команда</p>
            <h2 className="font-display mt-3 text-4xl text-forest md:text-5xl">
              Специалисты Eco Clinic
            </h2>
          </div>
          <Link href="/vrachi" className="text-sm tracking-[0.16em] uppercase text-gold">
            Все врачи
          </Link>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {doctors.map((d) => (
            <Link key={d.slug} href="/vrachi" className="group">
              <div className="relative aspect-[3/4] overflow-hidden rounded-[1.8rem]">
                <Image
                  src={d.image}
                  alt={d.name}
                  fill
                  className="bg-cream-deep object-cover object-top transition duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="font-display mt-4 text-2xl text-forest">{d.name}</h3>
              <p className="mt-1 text-sm text-mute">{d.role}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-gold/15">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <p className="text-xs tracking-[0.3em] text-gold uppercase">Журнал</p>
          <h2 className="font-display mt-3 text-4xl text-forest">Полезная информация</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {articles.slice(0, 6).map((a) => (
              <Link key={a.slug} href={`/stati/${a.slug}`} className="group">
                <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem]">
                  <Image
                    src={a.image}
                    alt={a.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-display mt-4 text-2xl text-forest">{a.title}</h3>
                <p className="mt-2 text-sm text-mute">{a.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
