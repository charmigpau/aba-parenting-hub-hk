import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, Eyebrow } from "@/components/site/PageShell";
import { useLang } from "@/i18n/LanguageProvider";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About — Charming Pau, BCBA" },
      {
        name: "description",
        content:
          "Hong Kong-based Board Certified Behavior Analyst working trilingually with families in English, Cantonese and Mandarin.",
      },
      { property: "og:title", content: "About — Charming Pau, BCBA" },
      { property: "og:description", content: "Meet Charming, a trilingual BCBA based in Hong Kong." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

function AboutPage() {
  const { t } = useLang();
  return (
    <PageShell>
      <section className="border-b border-hairline">
        <div className="mx-auto max-w-6xl px-6 pt-20 pb-20 md:pt-28 md:pb-28">
          <Eyebrow>{t.about.eyebrow}</Eyebrow>
          <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[1.05] md:text-7xl">
            {t.about.title}
          </h1>
          <p className="mt-8 max-w-3xl text-lg text-ink-muted md:text-xl">{t.about.lead}</p>
        </div>
      </section>

      <section className="border-b border-hairline">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-20 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="aspect-[4/5] w-full bg-surface" aria-hidden />
            <p className="eyebrow mt-4">{t.brand.tag}</p>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            {t.about.bio.map((p, i) => (
              <p key={i} className="mb-6 text-lg leading-relaxed text-foreground/85">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-hairline">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-20 md:grid-cols-3">
          <div>
            <Eyebrow>{t.about.credentialsTitle}</Eyebrow>
            <ul className="mt-6 space-y-3 text-sm">
              {t.about.credentials.map((c) => (
                <li key={c} className="border-t border-hairline pt-3">
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Eyebrow>{t.about.languagesTitle}</Eyebrow>
            <ul className="mt-6 space-y-3 text-sm">
              {t.about.languages.map((l) => (
                <li key={l} className="border-t border-hairline pt-3">
                  {l}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Eyebrow>{t.about.approachTitle}</Eyebrow>
            <p className="mt-6 border-t border-hairline pt-3 text-sm leading-relaxed">
              {t.about.approach}
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-6 py-20 text-center md:py-28">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 border border-foreground bg-foreground px-6 py-3 text-sm text-background transition-colors hover:bg-transparent hover:text-foreground"
          >
            {t.cta.book} <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
