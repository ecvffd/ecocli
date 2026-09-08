import { clinic } from "@/data/clinic";
import { BookingForm } from "./BookingForm";

export function CtaBand() {
  return (
    <section className="bg-cream-deep">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 lg:grid-cols-2 lg:px-8 lg:py-20">
        <div>
          <p className="text-xs tracking-[0.3em] text-gold uppercase">Контакты</p>
          <h2 className="font-display mt-3 text-4xl text-forest md:text-5xl">
            Как с нами связаться
          </h2>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-mute">
            {clinic.tagline}
          </p>

          <div className="mt-8 space-y-3">
            {clinic.phones.map((p) => (
              <a
                key={p.value}
                href={p.href}
                className="font-display block text-3xl leading-none text-forest md:text-4xl"
              >
                {p.value}
              </a>
            ))}
          </div>

          <div className="mt-6 space-y-1.5 text-base text-forest">
            <p>{clinic.address}</p>
            <p>{clinic.hours}</p>
            <a href={`mailto:${clinic.email}`} className="block hover:text-gold">
              {clinic.email}
            </a>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={clinic.socials.whatsapp}
              className="rounded-full bg-sage px-5 py-2.5 text-sm text-cream"
            >
              WhatsApp
            </a>
            <a
              href={clinic.socials.telegram}
              className="rounded-full bg-forest px-5 py-2.5 text-sm text-cream"
            >
              Telegram
            </a>
            <a
              href={clinic.socials.instagram}
              className="rounded-full border border-gold px-5 py-2.5 text-sm text-forest"
            >
              Instagram
            </a>
          </div>
        </div>
        <BookingForm />
      </div>
    </section>
  );
}
