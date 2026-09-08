import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-32 text-center">
      <p className="text-xs tracking-[0.3em] text-gold uppercase">404</p>
      <h1 className="font-display mt-4 text-5xl text-forest">Страница не найдена</h1>
      <p className="mt-4 text-mute">Вернитесь на главную или откройте каталог услуг.</p>
      <div className="mt-8 flex justify-center gap-3">
        <Link href="/" className="rounded-full bg-forest px-6 py-3 text-sm text-cream">
          На главную
        </Link>
        <Link href="/uslugi" className="rounded-full border border-gold px-6 py-3 text-sm">
          Услуги
        </Link>
      </div>
    </section>
  );
}
