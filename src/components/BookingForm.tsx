"use client";

import { FormEvent, useState } from "react";
import { clinic } from "@/data/clinic";

export function BookingForm({ compact = false }: { compact?: boolean }) {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-3xl bg-forest p-8 text-cream">
        <p className="font-display text-3xl">Заявка принята</p>
        <p className="mt-3 text-cream/80">
          Администратор свяжется с вами, чтобы подтвердить время. Можно также
          записаться онлайн в виджете Dikidi.
        </p>
        <a
          href={clinic.bookingUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex rounded-full bg-gold px-5 py-3 text-sm tracking-wide text-forest"
        >
          Открыть онлайн-запись
        </a>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className={`rounded-3xl bg-white/70 p-6 shadow-[0_20px_60px_rgba(36,48,40,0.08)] backdrop-blur ${
        compact ? "" : "p-8"
      }`}
    >
      <p className="font-display text-3xl text-forest">Записаться на визит</p>
      <p className="mt-2 text-sm text-mute">
        Оставьте контакты — перезвоним и подберём удобное время.
      </p>
      <div className="mt-6 grid gap-4">
        <label className="grid gap-1 text-sm">
          Имя
          <input
            required
            name="name"
            className="rounded-2xl border border-gold-soft/50 bg-cream px-4 py-3 outline-none ring-gold/30 focus:ring-2"
          />
        </label>
        <label className="grid gap-1 text-sm">
          Телефон
          <input
            required
            name="phone"
            type="tel"
            placeholder="+7"
            className="rounded-2xl border border-gold-soft/50 bg-cream px-4 py-3 outline-none ring-gold/30 focus:ring-2"
          />
        </label>
        <label className="grid gap-1 text-sm">
          Комментарий
          <textarea
            name="comment"
            rows={compact ? 3 : 4}
            className="resize-none rounded-2xl border border-gold-soft/50 bg-cream px-4 py-3 outline-none ring-gold/30 focus:ring-2"
            placeholder="Процедура или удобное время"
          />
        </label>
        <button
          type="submit"
          className="rounded-full bg-forest px-6 py-3 text-sm tracking-[0.18em] text-cream uppercase transition hover:bg-sage"
        >
          Отправить
        </button>
        <p className="text-xs text-mute">
          Нажимая кнопку, вы соглашаетесь с{" "}
          <a href="/politika" className="underline underline-offset-2">
            политикой конфиденциальности
          </a>
          .
        </p>
      </div>
    </form>
  );
}
