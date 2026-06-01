const ITEMS = [
  {
    title: "Overwhelmed by Meltdowns?",
    body:
      "You've tried every gentle script and timer. You're not failing — generic parenting advice was never built for a nervous system like your child's. There is a precise framework underneath the chaos.",
  },
  {
    title: "Exhausted by Power Struggles?",
    body:
      "Mornings, transitions, screen time — the same battles on loop. Burnout isn't weakness; it's a signal that the system at home needs structure, not more willpower from you.",
  },
  {
    title: "Navigating a New Diagnosis?",
    body:
      "An autism, ADHD, or behavioral diagnosis can feel like a closing door. With the right behavioral roadmap, it becomes the beginning of clarity — for your child and for you.",
  },
];

export function CoreProblemSection() {
  return (
    <section className="border-y border-hairline bg-background">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="eyebrow">— You are not alone</p>
          <h2 className="mt-4 font-display text-3xl leading-[1.1] md:text-4xl">
            The quiet exhaustion most parents never say out loud.
          </h2>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-px bg-hairline md:grid-cols-3">
          {ITEMS.map((item, i) => (
            <article
              key={item.title}
              className="fade-up bg-background p-8 md:p-10"
              style={{ animationDelay: `${i * 90}ms` }}
            >
              <span
                aria-hidden
                className="block h-px w-10"
                style={{ backgroundColor: "var(--accent)" }}
              />
              <h3 className="mt-6 font-display text-2xl leading-snug">{item.title}</h3>
              <p className="mt-4 text-[0.95rem] leading-relaxed text-ink-muted">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
