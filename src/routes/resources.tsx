import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, Eyebrow, SectionTitle } from "@/components/site/PageShell";
import { useLang } from "@/i18n/LanguageProvider";

export const Route = createFileRoute("/resources")({
  component: ResourcesPage,
  head: () => ({
    meta: [
      { title: "Resources & Community — Charming Pau, BCBA" },
      {
        name: "description",
        content:
          "Free ABA resources, parenting guides, and community content from Charming Pau, BCBA — for families in Hong Kong.",
      },
      { property: "og:title", content: "Resources & Community — Charming Pau, BCBA" },
      { property: "og:url", content: "/resources" },
    ],
    links: [{ rel: "canonical", href: "/resources" }],
  }),
});

function ResourcesPage() {
  const { t } = useLang();
  return (
    <PageShell>
      <section className="border-b border-hairline">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <Eyebrow>Resources</Eyebrow>
          <SectionTitle className="mt-4">Coming Soon</SectionTitle>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted">
            Free ABA resources, printable guides, and community content for families.
            Follow{" "}
            <a
              href="https://www.instagram.com/charmingbcba/"
              target="_blank"
              rel="noopener noreferrer"
              className="accent-underline"
            >
              @charmingbcba
            </a>{" "}
            on Instagram for weekly tips while we build this section.
          </p>
          <div className="mt-10">
            <Link
              to="/"
              className="inline-flex items-center gap-2 border border-foreground px-6 py-3 text-sm transition-colors hover:bg-foreground hover:text-background"
            >
              ← Back to home
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
