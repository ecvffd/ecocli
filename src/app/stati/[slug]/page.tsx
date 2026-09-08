import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/CtaBand";
import { articles, getArticle } from "@/data/articles";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return { title: article.title, description: article.excerpt };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  return (
    <>
      <article className="mx-auto max-w-3xl px-5 py-16 lg:px-8">
        <Link
          href="/stati"
          className="text-xs tracking-[0.25em] text-gold uppercase"
        >
          Журнал
        </Link>
        <h1 className="font-display mt-4 text-5xl text-forest">{article.title}</h1>
        <p className="mt-4 text-lg text-mute">{article.excerpt}</p>
        <div className="relative my-10 aspect-[16/9] overflow-hidden rounded-[2rem]">
          <Image src={article.image} alt={article.title} fill className="object-cover" />
        </div>
        {article.body.map((block, i) => (
          <section key={i} className="mb-8">
            {block.heading && (
              <h2 className="font-display text-3xl text-forest">{block.heading}</h2>
            )}
            {block.paragraphs.map((p) => (
              <p key={p} className="mt-4 leading-relaxed text-mute">
                {p}
              </p>
            ))}
          </section>
        ))}
        {article.related.length > 0 && (
          <div className="mt-12 flex flex-wrap gap-3">
            {article.related.map((slugRel) => (
              <Link
                key={slugRel}
                href={`/uslugi/${slugRel}`}
                className="rounded-full border border-gold/40 px-4 py-2 text-sm text-forest"
              >
                Смотреть услугу
              </Link>
            ))}
          </div>
        )}
      </article>
      <CtaBand />
    </>
  );
}
