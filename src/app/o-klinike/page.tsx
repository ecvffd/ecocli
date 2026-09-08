import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { clinic } from "@/data/clinic";

export const metadata = {
  title: "О клинике",
  description: "Eco Clinic — молодая клиника косметологии в центре Екатеринбурга.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="О клинике"
        title="Молодая клиника с медицинской дисциплиной"
        text="Eco Clinic — современная косметология в центре Екатеринбурга. Нам можно доверять."
      />
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-2 lg:px-8">
        <div className="relative min-h-[420px] overflow-hidden rounded-[2rem]">
          <Image
            src="/images/lounge.jpg"
            alt="Пространство Eco Clinic"
            fill
            className="object-cover"
          />
        </div>
        <div className="space-y-5 text-lg leading-relaxed text-mute">
          {clinic.about.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </section>
      <section className="bg-forest text-cream">
        <div className="mx-auto max-w-3xl px-5 py-20 lg:px-8">
          <p className="text-xs tracking-[0.3em] text-gold uppercase">Философия</p>
          <h2 className="font-display mt-4 text-4xl">Экология красоты</h2>
          <p className="mt-6 text-cream/80">{clinic.philosophyIntro}</p>
          {clinic.philosophyBody.map((p) => (
            <p key={p} className="mt-4 text-cream/75">
              {p}
            </p>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <h2 className="font-display text-4xl text-forest">Безопасность</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {clinic.safety.map((p) => (
            <p key={p} className="rounded-[1.5rem] bg-cream-deep p-6 text-mute">
              {p}
            </p>
          ))}
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {clinic.values.map((v) => (
            <div key={v.title} className="border-t border-gold pt-5">
              <h3 className="font-display text-3xl text-forest">{v.title}</h3>
              <p className="mt-3 text-mute">{v.text}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="border-t border-gold/15 px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-display text-3xl text-forest">Реквизиты</h2>
          <div className="mt-6 grid gap-2 text-sm text-mute md:grid-cols-2">
            <p>{clinic.requisites.legalName}</p>
            <p>Расчётный счёт: {clinic.requisites.account}</p>
            <p>ИНН: {clinic.requisites.inn}</p>
            <p>КПП: {clinic.requisites.kpp}</p>
            <p>ОГРН: {clinic.requisites.ogrn}</p>
            <p>Банк: {clinic.requisites.bank}</p>
            <p>БИК: {clinic.requisites.bik}</p>
            <p>Кор. счёт: {clinic.requisites.corr}</p>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
