"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "./Logo";
import { clinic } from "@/data/clinic";
import { services } from "@/data/services";

const links = [
  { href: "/uslugi", label: "Услуги", hasMenu: true },
  { href: "/vrachi", label: "Врачи" },
  { href: "/o-klinike", label: "О клинике" },
  { href: "/stati", label: "Журнал" },
  { href: "/prajs", label: "Прайс" },
  { href: "/kontakty", label: "Контакты" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gold/15 bg-cream/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 lg:px-8">
        <Logo />
        <nav className="hidden items-center gap-7 text-[0.78rem] tracking-[0.18em] uppercase lg:flex">
          {links.map((link) =>
            link.hasMenu ? (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => setMenu(true)}
                onMouseLeave={() => setMenu(false)}
              >
                <Link href={link.href} className="hover:text-gold">
                  {link.label}
                </Link>
                {menu && (
                  <div className="absolute left-1/2 top-full z-20 w-[34rem] -translate-x-1/2 pt-4">
                    <div className="grid grid-cols-2 gap-x-6 gap-y-2 rounded-3xl border border-gold/20 bg-cream p-6 shadow-2xl">
                      {services.map((s) => (
                        <Link
                          key={s.slug}
                          href={`/uslugi/${s.slug}`}
                          className="text-[0.7rem] tracking-wide text-mute normal-case hover:text-forest"
                        >
                          {s.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link key={link.href} href={link.href} className="hover:text-gold">
                {link.label}
              </Link>
            ),
          )}
        </nav>
        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={clinic.phones[0].href}
            className="text-sm text-forest hover:text-gold"
          >
            {clinic.phones[0].value}
          </a>
          <a
            href={clinic.bookingUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-forest px-5 py-2.5 text-[0.72rem] tracking-[0.2em] text-cream uppercase"
          >
            Записаться
          </a>
        </div>
        <button
          className="grid h-11 w-11 place-items-center rounded-full border border-gold/40 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Меню"
        >
          <span className="flex flex-col gap-1.5">
            <span className="block h-px w-5 bg-forest" />
            <span className="block h-px w-5 bg-forest" />
            <span className="block h-px w-5 bg-forest" />
          </span>
        </button>
      </div>
      {open && (
        <div className="border-t border-gold/15 bg-cream px-5 py-6 lg:hidden">
          <div className="grid gap-3 text-sm tracking-[0.14em] uppercase">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a href={clinic.phones[0].href} className="text-gold normal-case tracking-normal">
              {clinic.phones[0].value}
            </a>
            <a
              href={clinic.bookingUrl}
              className="mt-2 inline-flex w-fit rounded-full bg-forest px-5 py-2 text-cream"
            >
              Записаться
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
