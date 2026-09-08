import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { getService, serviceCategories, services } from "@/data/services";

export const metadata = {
  title: "Услуги",
  description:
    "Инъекционная, аппаратная и лазерная косметология Eco Clinic в Екатеринбурге.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        kicker="Каталог"
        title="Услуги клиники"
        text="Инъекции, лазер, SMAS, фотоомоложение, уходы и работа с телом. Протокол всегда собирается индивидуально."
      />
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        {serviceCategories.map((cat) => {
          const items = services
            .filter((s) => s.category === cat.id)
            .map((s) => getService(s.slug) ?? s);
          return (
            <div key={cat.id} className="mb-16">
              <h2 className="font-display text-3xl text-forest">{cat.label}</h2>
              <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {items.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/uslugi/${s.slug}`}
                    className="group overflow-hidden rounded-[1.8rem] bg-white/50"
                  >
                    <div className="relative aspect-[16/10]">
                      <Image
                        src={s.image}
                        alt={s.title}
                        fill
                        className="object-cover transition duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="font-display text-2xl text-forest">{s.title}</h3>
                      <p className="mt-2 text-sm text-mute">{s.short}</p>
                      {s.price && (
                        <p className="mt-3 text-sm text-gold">{s.price}</p>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </section>
      <CtaBand />
    </>
  );
}
