import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { doctors } from "@/data/doctors";

export const metadata = {
  title: "Врачи клиники",
  description: "Специалисты Eco Clinic: дерматокосметологи, хирурги и эстетисты.",
};

export default function DoctorsPage() {
  return (
    <>
      <PageHero
        kicker="Команда"
        title="Специалисты Eco Clinic"
        text="Наши эксперты в области медицины помогут вам. Индивидуальный подход, сертифицированные методики, регулярное обучение."
      />
      <section className="mx-auto max-w-7xl space-y-20 px-5 py-16 lg:px-8">
        {doctors.map((d, i) => (
          <article
            key={d.slug}
            id={d.slug}
            className={`grid items-start gap-10 lg:grid-cols-12 ${
              i % 2 ? "lg:[&>div:first-child]:order-2" : ""
            }`}
          >
            <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] lg:col-span-5">
              <Image
                src={d.image}
                alt={d.name}
                fill
                className="bg-cream-deep object-cover object-top"
              />
            </div>
            <div className="lg:col-span-7">
              <p className="text-xs tracking-[0.25em] text-gold uppercase">{d.role}</p>
              <h2 className="font-display mt-3 text-4xl text-forest">{d.name}</h2>
              <p className="mt-4 text-lg text-mute">{d.short}</p>
              <h3 className="mt-8 text-xs tracking-[0.22em] text-gold uppercase">
                Образование
              </h3>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-mute">
                {d.education.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              {d.extra && (
                <>
                  <h3 className="mt-8 text-xs tracking-[0.22em] text-gold uppercase">
                    Практика и сертификаты
                  </h3>
                  <ul className="mt-3 space-y-2 text-sm leading-relaxed text-mute">
                    {d.extra.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </article>
        ))}
      </section>
      <CtaBand />
    </>
  );
}
