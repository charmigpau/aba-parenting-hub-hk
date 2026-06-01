export function HeroCalmHome() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(60% 50% at 70% 20%, color-mix(in oklab, var(--primary) 22%, transparent), transparent 70%), radial-gradient(50% 45% at 15% 85%, color-mix(in oklab, var(--accent) 14%, transparent), transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-6 pt-20 pb-24 sm:pt-28 md:pt-32 md:pb-32">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <aside className="lg:col-span-3">
            <div className="fade-up flex items-start gap-3">
              <span aria-hidden className="mt-2 h-px w-6 bg-foreground/40" />
              <div>
                <p className="text-[10px] uppercase tracking-[0.24em] text-foreground/55">
                  The Calm Home Project
                </p>
                <p className="mt-2 text-[10px] uppercase tracking-[0.24em] text-foreground/55">
                  Charming Pau · BCBA
                </p>
              </div>
            </div>
          </aside>

          <div className="lg:col-span-9">
            <h1
              className="fade-up font-display text-[2.5rem] leading-[1.05] tracking-[-0.015em] text-foreground sm:text-5xl md:text-6xl lg:text-[4.5rem]"
              style={{ animationDelay: "80ms", fontWeight: 500 }}
            >
              The Calm Home Project:
              <span className="block text-foreground/70">
                Transform Power Struggles Into Connected Parenting.
              </span>
            </h1>

            <div
              className="fade-up mt-10 grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12"
              style={{ animationDelay: "200ms" }}
            >
              <div className="md:col-span-7">
                <p className="text-base leading-[1.75] text-foreground/75 md:text-[1.0625rem]">
                  A premium, evidence-based workshop series for proactive parents navigating
                  complex behaviors, ADHD, or autism diagnoses. Learn the precise behavioral
                  frameworks to eliminate daily burnout and restore peace to your household.
                </p>
              </div>

              <div className="md:col-span-5 md:border-l md:border-foreground/10 md:pl-8">
                <p className="text-[10px] uppercase tracking-[0.22em] text-foreground/50">
                  Begin where you need it most
                </p>
                <div className="mt-5 flex flex-col gap-3">
                  <a
                    href="#workshops"
                    className="group inline-flex w-full items-center justify-between gap-3 rounded-full px-6 py-3.5 text-sm font-medium text-background transition-all hover:-translate-y-0.5"
                    style={{ backgroundColor: "var(--accent)" }}
                  >
                    <span>Secure Your Workshop Seat</span>
                    <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                  </a>
                  <a
                    href="#coaching"
                    className="group inline-flex w-full items-center justify-between gap-3 rounded-full border border-foreground/30 bg-transparent px-6 py-3.5 text-sm font-medium text-foreground transition-all hover:-translate-y-0.5 hover:border-foreground hover:bg-foreground/[0.03]"
                  >
                    <span>Explore Individual Coaching</span>
                    <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
