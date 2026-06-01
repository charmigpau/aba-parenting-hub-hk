import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, Eyebrow, SectionTitle } from "@/components/site/PageShell";
import { HeroSection } from "@/components/site/HeroSection";
import { TrustBanner } from "@/components/site/TrustBanner";
import { FamilyEcosystemSection } from "@/components/site/FamilyEcosystemSection";
import { CredentialsSection } from "@/components/site/CredentialsSection";
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
      <HeroSection />
      <TrustBanner />
      <CredentialsSection />


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
