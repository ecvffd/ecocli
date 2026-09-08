import Link from "next/link";
import { Logo } from "./Logo";
import { clinic } from "@/data/clinic";
import { services } from "@/data/services";

export function Footer() {
  const mid = Math.ceil(services.length / 2);
  return (
    <footer className="bg-forest text-cream">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-4 lg:px-8">
        <div className="space-y-5">
          <Logo light />
          <p className="max-w-xs text-sm leading-relaxed text-cream/70">
            {clinic.mission}
          </p>
          <div className="flex gap-3">
            <a
              href={clinic.socials.telegram}
              className="rounded-full border border-cream/20 px-3 py-1 text-xs tracking-widest uppercase"
            >
              Telegram
            </a>
            <a
              href={clinic.socials.instagram}
              className="rounded-full border border-cream/20 px-3 py-1 text-xs tracking-widest uppercase"
            >
              Instagram
            </a>
          </div>
        </div>
        <div>
          <p className="text-xs tracking-[0.25em] text-gold uppercase">Услуги</p>
          <ul className="mt-4 space-y-2 text-sm text-cream/75">
            {services.slice(0, mid).map((s) => (
              <li key={s.slug}>
                <Link href={`/uslugi/${s.slug}`} className="hover:text-cream">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs tracking-[0.25em] text-gold uppercase">Ещё</p>
          <ul className="mt-4 space-y-2 text-sm text-cream/75">
            {services.slice(mid).map((s) => (
              <li key={s.slug}>
                <Link href={`/uslugi/${s.slug}`} className="hover:text-cream">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-3 text-sm text-cream/80">
          <p className="text-xs tracking-[0.25em] text-gold uppercase">Клиника</p>
          <p>{clinic.address}</p>
          <p>{clinic.hours}</p>
          {clinic.phones.map((p) => (
            <a key={p.value} href={p.href} className="block hover:text-gold">
              {p.value}
            </a>
          ))}
          <a href={`mailto:${clinic.email}`} className="block hover:text-gold">
            {clinic.email}
          </a>
          <div className="flex flex-col gap-2 pt-2 text-cream/70">
            <Link href="/o-klinike">О компании</Link>
            <Link href="/vrachi">Врачи</Link>
            <Link href="/prajs">Скачать прайс</Link>
            <Link href="/licenzii">Лицензии</Link>
            <Link href="/politika">Политика конфиденциальности</Link>
            <a href={clinic.contractUrl} target="_blank" rel="noreferrer">
              Скачать договор
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="mx-auto max-w-7xl space-y-4 px-5 py-8 text-xs leading-relaxed text-cream/55 lg:px-8">
          <p>
            {clinic.legalName}. ИНН {clinic.requisites.inn}, ОГРН{" "}
            {clinic.requisites.ogrn}. Лицензия {clinic.licenses[0].number}.
          </p>
          <p>{clinic.disclaimer}</p>
          <p>© {new Date().getFullYear()} Eco Clinic</p>
        </div>
      </div>
    </footer>
  );
}
