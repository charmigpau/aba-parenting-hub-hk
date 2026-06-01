const COHORTS = [
  {
    name: "The Calm Home Transition Framework",
    focus:
      "Build the daily architecture that ends morning meltdowns, transition battles, and bedtime negotiations. Routines, antecedent strategies, and the behavioral basics every parent deserves.",
    date: "Cohort opens March 2026",
    age: "Ages 3 – 9",
    seats: "Limited to 12 families",
  },
  {
    name: "Neurodiversity & Dynamic Play",
    focus:
      "For families supporting a child with autism, ADHD, or communication differences. Move from compliance to connection — emotional regulation, play-based learning, and bridging the communication gap.",
    date: "Cohort opens April 2026",
    age: "Ages 4 – 12",
    seats: "Limited to 10 families",
  },
];

export function WorkshopPortalSection() {
  return (
    <section id="workshops" className="scroll-mt-24 border-b border-hairline bg-background">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="eyebrow">— Workshop Portal</p>
            <h2 className="mt-4 font-display text-3xl leading-[1.08] md:text-[2.75rem]">
              Beyond the Diagnosis: Master the Art and Science of Your Child's Behavior.
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <p className="text-lg leading-relaxed text-foreground/80">
              Our upcoming interactive workshops are designed specifically for private-pay
              families looking for clarity, structure, and actionable behavioral tools — taught
              live by a Board Certified Behavior Analyst.
            </p>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          {COHORTS.map((c, i) => (
            <article
              key={c.name}
              className="fade-up group relative flex flex-col overflow-hidden border border-hairline bg-surface p-8 transition-shadow hover:shadow-[0_30px_60px_-30px_rgba(44,44,44,0.18)] md:p-10"
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <span
                aria-hidden
                className="absolute left-0 top-0 h-1 w-16"
                style={{ backgroundColor: "var(--accent)" }}
              />
              <p className="eyebrow">Cohort 0{i + 1}</p>
              <h3 className="mt-5 font-display text-[1.65rem] leading-snug md:text-[1.85rem]">
                {c.name}
              </h3>
              <p className="mt-5 text-[0.98rem] leading-relaxed text-ink-muted">{c.focus}</p>

              <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-hairline pt-6 text-sm">
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.2em] text-foreground/50">Date</dt>
                  <dd className="mt-1 text-foreground/85">{c.date}</dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.2em] text-foreground/50">Target Age</dt>
                  <dd className="mt-1 text-foreground/85">{c.age}</dd>
                </div>
                <div className="col-span-2">
                  <dt className="text-[10px] uppercase tracking-[0.2em] text-foreground/50">Seats</dt>
                  <dd className="mt-1 text-foreground/85">{c.seats}</dd>
                </div>
              </dl>

              <a
                href="#intake"
                className="mt-10 inline-flex items-center justify-between gap-3 rounded-full px-6 py-3.5 text-sm font-medium text-background transition-all hover:-translate-y-0.5"
                style={{ backgroundColor: "var(--foreground)" }}
              >
                <span>Register for Cohort</span>
                <span aria-hidden>→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
