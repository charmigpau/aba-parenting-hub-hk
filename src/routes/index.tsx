import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, Eyebrow, SectionTitle } from "@/components/site/PageShell";
import { useLang } from "@/i18n/LanguageProvider";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Charming Pau, BCBA — Trilingual ABA in Hong Kong" },
      {
        name: "description",
        content:
          "Trilingual Board Certified Behavior Analyst in Hong Kong. ABA therapy, parent coaching, and weekly tips in English, Cantonese and Mandarin.",
      },
      { property: "og:title", content: "Charming Pau, BCBA — Trilingual ABA in Hong Kong" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Index() {
  const { t } = useLang();
  return (
    <PageShell>
      {/* Hero */}
      <section className="border-b border-hairline">
        <div className="mx-auto max-w-6xl px-6 pt-20 pb-24 md:pt-32 md:pb-32">
          <Eyebrow>{t.home.eyebrow}</Eyebrow>
          <h1 className="fade-up mt-6 max-w-4xl font-display text-5xl leading-[1.02] sm:text-6xl md:text-7xl lg:text-[5.5rem]">
            {t.home.headline}
          </h1>
          <p className="fade-up mt-8 max-w-2xl text-lg text-ink-muted md:text-xl" style={{ animationDelay: "120ms" }}>
            {t.home.sub}
          </p>
          <div className="fade-up mt-10 flex flex-wrap items-center gap-6" style={{ animationDelay: "240ms" }}>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border border-foreground bg-foreground px-6 py-3 text-sm text-background transition-colors hover:bg-transparent hover:text-foreground"
            >
              {t.cta.book} <span aria-hidden>→</span>
            </Link>
            <Link to="/services" className="text-sm accent-underline">
              {t.cta.learnMore}
            </Link>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="border-b border-hairline">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-20 md:grid-cols-12 md:py-28">
          <div className="md:col-span-4">
            <Eyebrow>— 00</Eyebrow>
            <h2 className="mt-4 font-display text-3xl md:text-4xl">{t.home.introTitle}</h2>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <p className="text-lg leading-relaxed text-foreground/85">{t.home.intro}</p>
          </div>
        </div>
      </section>

      {/* Featured tips */}
      <section className="border-b border-hairline">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="flex items-end justify-between gap-6">
            <div>
              <Eyebrow>{t.home.featuredEyebrow}</Eyebrow>
              <SectionTitle>{t.home.featuredTitle}</SectionTitle>
            </div>
            <Link to="/tips" className="hidden text-sm accent-underline sm:inline-flex">
              {t.cta.readTips} →
            </Link>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-px bg-hairline md:grid-cols-3">
            {t.tips.items.slice(0, 3).map((tip) => (
              <article key={tip.number} className="bg-background p-8">
                <p className="eyebrow">{tip.number}</p>
                <h3 className="mt-4 font-display text-2xl leading-tight">{tip.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-ink-muted">{tip.body}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 sm:hidden">
            <Link to="/tips" className="text-sm accent-underline">
              {t.cta.readTips} →
            </Link>
          </div>
        </div>
      </section>

      {/* Services teaser */}
      <section>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-20 md:grid-cols-12 md:py-28">
          <div className="md:col-span-5">
            <Eyebrow>{t.home.servicesEyebrow}</Eyebrow>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">{t.home.servicesTitle}</h2>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <p className="text-lg leading-relaxed text-foreground/85">{t.home.servicesBody}</p>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 border border-foreground px-6 py-3 text-sm transition-colors hover:bg-foreground hover:text-background"
              >
                {t.cta.learnMore} <span aria-hidden>→</span>
              </Link>
              <Link to="/contact" className="text-sm accent-underline">
                {t.cta.book}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
