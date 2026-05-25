import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, Eyebrow } from "@/components/site/PageShell";
import { useLang } from "@/i18n/LanguageProvider";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Services — Charming Pau, BCBA" },
      {
        name: "description",
        content:
          "Parent consultation and ABA therapy sessions in Hong Kong, available in English, Cantonese and Mandarin.",
      },
      { property: "og:title", content: "Services — Charming Pau, BCBA" },
      { property: "og:description", content: "Parent consultation and ongoing ABA therapy in Hong Kong." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
});

function ServicesPage() {
  const { t } = useLang();
  return (
    <PageShell>
      <section className="border-b border-hairline">
        <div className="mx-auto max-w-6xl px-6 pt-20 pb-20 md:pt-28 md:pb-28">
          <Eyebrow>{t.services.eyebrow}</Eyebrow>
          <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[1.05] md:text-7xl">
            {t.services.title}
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-ink-muted md:text-xl">{t.services.lead}</p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-6">
          {t.services.items.map((item, i) => (
            <article
              key={item.number}
              className={
                "grid grid-cols-1 gap-10 py-16 md:grid-cols-12 md:py-24 " +
                (i < t.services.items.length - 1 ? "border-b border-hairline" : "")
              }
            >
              <div className="md:col-span-4">
                <p className="font-display text-6xl text-ink-muted md:text-7xl">{item.number}</p>
              </div>
              <div className="md:col-span-7">
                <h2 className="font-display text-4xl leading-tight md:text-5xl">{item.name}</h2>
                <p className="eyebrow mt-6">{item.format}</p>
                <p className="mt-6 text-lg leading-relaxed text-foreground/85">
                  {item.description}
                </p>
                <p className="mt-6 border-t border-hairline pt-6 text-sm text-ink-muted">
                  {item.forWho}
                </p>
                <div className="mt-8">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 border border-foreground px-6 py-3 text-sm transition-colors hover:bg-foreground hover:text-background"
                  >
                    {t.cta.book} <span aria-hidden>→</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
