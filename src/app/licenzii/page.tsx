import { PageHero } from "@/components/PageHero";
import { clinic } from "@/data/clinic";

export const metadata = {
  title: "Лицензии",
  description: "Медицинские лицензии и санитарно-эпидемиологические заключения Eco Clinic.",
};

export default function LicensesPage() {
  return (
    <>
      <PageHero
        kicker="Документы"
        title="Лицензии"
        text="Клиника работает на основании медицинской лицензии и санитарно-эпидемиологических заключений."
      />
      <section className="mx-auto max-w-5xl px-5 py-16 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {clinic.licenses.map((l) => (
            <article
              key={l.number}
              className="rounded-[1.8rem] border border-gold/25 bg-white/50 p-8"
            >
              <p className="text-xs tracking-[0.22em] text-gold uppercase">{l.title}</p>
              <p className="font-display mt-4 text-3xl text-forest">{l.number}</p>
            </article>
          ))}
        </div>
        <p className="mt-10 text-sm text-mute">
          Оригиналы документов можно посмотреть в клинике по адресу {clinic.address}.
        </p>
      </section>
    </>
  );
}
