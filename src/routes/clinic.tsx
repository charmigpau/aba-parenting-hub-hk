import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, Eyebrow, SectionTitle } from "@/components/site/PageShell";
import { useLang } from "@/i18n/LanguageProvider";

export const Route = createFileRoute("/clinic")({
  component: ClinicPage,
  head: () => ({
    meta: [
      { title: "Clinical Services & Therapy — Charming Pau, BCBA" },
      {
        name: "description",
        content:
          "Professional ABA therapy and clinical consultation services in Hong Kong. Book a session with Board Certified Behavior Analyst Charming Pau.",
      },
      { property: "og:title", content: "Clinical Services & Therapy — Charming Pau, BCBA" },
      { property: "og:url", content: "/clinic" },
    ],
    links: [{ rel: "canonical", href: "/clinic" }],
  }),
});

function ClinicPage() {
  const { t } = useLang();
  return (
    <PageShell>
      <section className="border-b border-hairline">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <Eyebrow>Clinical</Eyebrow>
          <SectionTitle className="mt-4">Clinical Services</SectionTitle>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted">
            Professional ABA therapy, parent consultations, and behavioral assessments.
            Individualized programs designed around your child and family.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-px bg-hairline md:grid-cols-2">
            <article className="bg-background p-8">
              <p className="eyebrow">01</p>
              <h3 className="mt-4 font-display text-2xl">Parent Consultation</h3>
              <p className="mt-3 text-sm text-ink-muted">
                60–90 minute focused session · in-person or online · follow-up summary included
              </p>
              <p className="mt-4 text-foreground/85">
                A single-session conversation to unpack a specific behavior, identify the function,
                and leave with concrete strategies you can use this week.
              </p>
            </article>
            <article className="bg-background p-8">
              <p className="eyebrow">02</p>
              <h3 className="mt-4 font-display text-2xl">ABA Therapy Sessions</h3>
              <p className="mt-3 text-sm text-ink-muted">
                Weekly 60-minute sessions · in-person in HK or hybrid · individualized program
              </p>
              <p className="mt-4 text-foreground/85">
                Ongoing individualized programming around communication, daily living, social skills,
                and school readiness. Parents are partners in every session.
              </p>
            </article>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6">
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
    </PageShell>
  );
}
