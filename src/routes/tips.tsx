import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Eyebrow } from "@/components/site/PageShell";
import { useLang } from "@/i18n/LanguageProvider";

export const Route = createFileRoute("/tips")({
  component: TipsPage,
  head: () => ({
    meta: [
      { title: "ABA Parenting Tips — Charming Pau, BCBA" },
      {
        name: "description",
        content:
          "Short, practical ABA parenting tips from a Hong Kong BCBA — distilled from real sessions.",
      },
      { property: "og:title", content: "ABA Parenting Tips — Charming Pau, BCBA" },
      { property: "og:description", content: "Practical ABA tips for Hong Kong families." },
      { property: "og:url", content: "/tips" },
    ],
    links: [{ rel: "canonical", href: "/tips" }],
  }),
});

const socials = [
  {
    name: "Instagram",
    handleKey: "ig" as const,
    href: "https://www.instagram.com/charmingbcba/",
  },
  {
    name: "Facebook",
    handleKey: "fb" as const,
    href: "https://www.facebook.com/charmingbcba",
  },
  {
    name: "Threads",
    handleKey: "threads" as const,
    href: "https://www.threads.com/@charmingbcba",
  },
];

function TipsPage() {
  const { t } = useLang();
  return (
    <PageShell>
      <section className="border-b border-hairline">
        <div className="mx-auto max-w-6xl px-6 pt-20 pb-20 md:pt-28 md:pb-28">
          <Eyebrow>{t.tips.eyebrow}</Eyebrow>
          <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[1.05] md:text-7xl">
            {t.tips.title}
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-ink-muted md:text-xl">{t.tips.lead}</p>
        </div>
      </section>

      <section className="border-b border-hairline">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid grid-cols-1 gap-px bg-hairline md:grid-cols-2">
            {t.tips.items.map((tip) => (
              <article key={tip.number} className="bg-background p-8 md:p-10">
                <p className="eyebrow">{tip.number}</p>
                <h2 className="mt-4 font-display text-3xl leading-tight md:text-4xl">
                  {tip.title}
                </h2>
                <p className="mt-5 leading-relaxed text-foreground/85">{tip.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-20 md:grid-cols-12 md:py-28">
          <div className="md:col-span-5">
            <Eyebrow>{t.tips.socialEyebrow}</Eyebrow>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">{t.tips.socialTitle}</h2>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <p className="text-lg leading-relaxed text-foreground/85">{t.tips.socialBody}</p>
            <ul className="mt-10 divide-y divide-hairline border-y border-hairline">
              {socials.map((s) => (
                <li key={s.name}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex items-center justify-between py-5 transition-colors hover:text-foreground"
                  >
                    <span className="font-display text-2xl">{s.name}</span>
                    <span className="flex items-center gap-3 text-sm text-ink-muted">
                      {t.tips.handles[s.handleKey]} <span aria-hidden>↗</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
