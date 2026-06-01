import coachingImg from "@/assets/coaching-family.jpg";

const FEATURES = [
  "Bespoke behavior plan written for your child, not a template",
  "Private weekly coaching with a BCBA — in-home or virtual",
  "Helper, co-parent, and school alignment included",
  "Discreet, white-glove communication between sessions",
];

export function IndividualCoachingSection() {
  return (
    <section id="coaching" className="scroll-mt-24 border-b border-hairline bg-background">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-20 md:grid-cols-12 md:gap-16 md:py-28">
        <div className="md:col-span-6">
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src={coachingImg}
              alt="A parent and child sharing a quiet, connected moment at home"
              loading="lazy"
              width={1080}
              height={1920}
              className="h-full w-full object-cover"
            />
            <span
              aria-hidden
              className="absolute left-0 top-0 h-10 w-10 border-l-2 border-t-2"
              style={{ borderColor: "var(--accent)" }}
            />
            <span
              aria-hidden
              className="absolute bottom-0 right-0 h-10 w-10 border-b-2 border-r-2"
              style={{ borderColor: "var(--accent)" }}
            />
          </div>
        </div>

        <div className="md:col-span-6 md:pt-6">
          <p className="eyebrow">— Private 1:1 Engagement</p>
          <h2 className="mt-4 font-display text-3xl leading-[1.08] md:text-[2.5rem]">
            Premium individual coaching for the family that needs more than a framework.
          </h2>
          <p className="mt-6 text-[1.02rem] leading-relaxed text-foreground/80">
            For families navigating complex diagnoses, school placement decisions, or behaviors
            that require a fully customized clinical approach, our private consultation is a
            high-touch, low-noise partnership — built around your home, your values, and your
            child's specific profile.
          </p>

          <ul className="mt-8 space-y-3">
            {FEATURES.map((f) => (
              <li key={f} className="flex gap-3 text-[0.98rem] leading-relaxed text-foreground/85">
                <span
                  aria-hidden
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                  style={{ backgroundColor: "var(--accent)" }}
                />
                <span>{f}</span>
              </li>
            ))}
          </ul>

          <a
            href="#intake"
            className="mt-10 inline-flex items-center gap-3 rounded-full px-7 py-4 text-sm font-medium text-background transition-all hover:-translate-y-0.5"
            style={{ backgroundColor: "var(--accent)" }}
          >
            <span>Apply for Private Consultation</span>
            <span aria-hidden>→</span>
          </a>
          <p className="mt-4 text-xs tracking-wide text-ink-muted">
            By application only · Limited engagements each quarter
          </p>
        </div>
      </div>
    </section>
  );
}
