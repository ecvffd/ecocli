"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { clinic } from "@/data/clinic";
import { promos } from "@/data/services";

export function PromoSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = promos.length;

  const go = useCallback(
    (dir: number) => {
      setIndex((current) => (current + dir + count) % count);
    },
    [count],
  );

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => go(1), 5500);
    return () => window.clearInterval(id);
  }, [go, paused]);

  return (
    <section
      className="relative h-[80vh] min-h-[560px] overflow-hidden bg-forest"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Акции клиники"
    >
      {promos.map((promo, i) => (
        <article
          key={promo.title}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === index ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
          aria-hidden={i !== index}
        >
          <Image
            src={promo.image}
            alt=""
            fill
            priority={i === 0}
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(28,24,20,0.88)_0%,rgba(28,24,20,0.62)_38%,rgba(28,24,20,0.18)_70%,rgba(28,24,20,0.08)_100%)]" />
          <div className="relative z-10 flex h-full items-center px-6 md:px-16 lg:px-24">
            <div className="max-w-xl rounded-[2rem] bg-forest/55 p-8 text-cream shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-md md:p-10">
              <p className="text-xs tracking-[0.32em] text-gold-soft uppercase">
                Акция
              </p>
              <h1 className="font-display mt-3 text-4xl leading-[1.1] text-white md:text-5xl lg:text-6xl">
                {promo.title}
              </h1>
              <p className="mt-4 font-display text-2xl text-gold-soft md:text-3xl">
                {promo.price}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={clinic.bookingUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-cream px-7 py-3 text-sm tracking-[0.18em] text-forest uppercase"
                >
                  Записаться
                </a>
                <Link
                  href={promo.href}
                  className="rounded-full border border-white/70 px-7 py-3 text-sm tracking-[0.18em] text-white uppercase"
                >
                  Подробнее
                </Link>
              </div>
            </div>
          </div>
        </article>
      ))}

      <button
        type="button"
        onClick={() => go(-1)}
        className="absolute top-1/2 left-3 z-20 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-cream text-xl text-forest shadow md:left-6"
        aria-label="Предыдущая акция"
      >
        ‹
      </button>
      <button
        type="button"
        onClick={() => go(1)}
        className="absolute top-1/2 right-3 z-20 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-cream text-xl text-forest shadow md:right-6"
        aria-label="Следующая акция"
      >
        ›
      </button>

      <div className="absolute inset-x-0 bottom-6 z-20 flex justify-center gap-2">
        {promos.map((promo, i) => (
          <button
            key={promo.title}
            type="button"
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full transition-all ${
              i === index ? "w-8 bg-gold" : "w-2.5 bg-white/70"
            }`}
            aria-label={promo.title}
            aria-current={i === index}
          />
        ))}
      </div>
    </section>
  );
}
