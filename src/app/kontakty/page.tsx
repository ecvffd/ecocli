import { PageHero } from "@/components/PageHero";
import { BookingForm } from "@/components/BookingForm";
import { clinic } from "@/data/clinic";

export const metadata = {
  title: "Контакты",
  description: "Eco Clinic, Екатеринбург, Татищева, 47А. Телефоны, мессенджеры, карта.",
};

export default function ContactsPage() {
  const mapSrc =
    "https://yandex.ru/map-widget/v1/?ll=60.5555%2C56.8389&z=16&text=%D0%95%D0%BA%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%BD%D0%B1%D1%83%D1%80%D0%B3%20%D0%A2%D0%B0%D1%82%D0%B8%D1%89%D0%B5%D0%B2%D0%B0%2047%D0%90";

  return (
    <>
      <PageHero
        kicker="Контакты"
        title="Приходите в центр Екатеринбурга"
        text="Свяжитесь с нами любым удобным способом — или оставьте заявку, мы перезвоним."
      />
      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-2 lg:px-8">
        <div className="space-y-6">
          <p className="font-display text-3xl text-forest">{clinic.address}</p>
          <p className="text-mute">{clinic.hours}</p>
          <div className="space-y-2">
            {clinic.phones.map((p) => (
              <a key={p.value} href={p.href} className="block text-xl text-forest">
                {p.value}
              </a>
            ))}
            <a href={`mailto:${clinic.email}`} className="block text-gold">
              {clinic.email}
            </a>
          </div>
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href={clinic.socials.telegram}
              className="rounded-full bg-forest px-5 py-2 text-sm text-cream"
            >
              Telegram
            </a>
            <a
              href={clinic.socials.whatsapp}
              className="rounded-full bg-sage px-5 py-2 text-sm text-cream"
            >
              WhatsApp
            </a>
            <a
              href={clinic.socials.instagram}
              className="rounded-full border border-gold px-5 py-2 text-sm"
            >
              Instagram
            </a>
          </div>
          <div className="overflow-hidden rounded-[1.8rem] border border-gold/20">
            <iframe
              title="Карта Eco Clinic"
              src={mapSrc}
              className="h-[360px] w-full"
              loading="lazy"
            />
          </div>
        </div>
        <BookingForm />
      </section>
    </>
  );
}
