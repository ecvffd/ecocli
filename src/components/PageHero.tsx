export function PageHero({
  kicker,
  title,
  text,
}: {
  kicker?: string;
  title: string;
  text?: string;
}) {
  return (
    <section className="border-b border-gold/15 bg-[linear-gradient(180deg,#f7f1e8,#efe4d4)]">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
        {kicker && (
          <p className="text-xs tracking-[0.32em] text-gold uppercase">{kicker}</p>
        )}
        <h1 className="font-display mt-4 max-w-4xl text-5xl leading-[1.05] text-forest md:text-7xl">
          {title}
        </h1>
        {text && <p className="mt-6 max-w-2xl text-lg text-mute">{text}</p>}
      </div>
    </section>
  );
}
