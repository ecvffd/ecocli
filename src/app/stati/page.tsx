import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { articles } from "@/data/articles";

export const metadata = {
  title: "Полезная информация",
  description: "Статьи Eco Clinic о процедурах, омоложении и уходе за кожей.",
};

export default function ArticlesPage() {
  return (
    <>
      <PageHero
        kicker="Журнал"
        title="Полезная информация"
        text="Разбираем запросы, с которыми чаще всего приходят в клинику: морщины, овал, пигмент, тело и аппаратные методики."
      />
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((a) => (
            <Link key={a.slug} href={`/stati/${a.slug}`} className="group">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[1.6rem]">
                <Image
                  src={a.image}
                  alt={a.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <h2 className="font-display mt-4 text-3xl text-forest">{a.title}</h2>
              <p className="mt-2 text-sm text-mute">{a.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
