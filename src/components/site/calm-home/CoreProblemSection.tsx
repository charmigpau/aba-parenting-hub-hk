const ITEMS = [
  {
    icon: "❋",
    title: "Overwhelmed by Meltdowns?",
    italic: "Generic parenting advice was never built for your child's nervous system.",
    zh: "面對情緒爆發感到無助？坊間的教養建議，從來不是為高敏感或神經多元的孩子而設。",
    span: "card-large",
  },
  {
    icon: "✦",
    title: "Exhausted by Power Struggles?",
    italic: "Burnout is a signal that the system at home needs structure, not more willpower.",
    zh: "日復一日的角力令你筋疲力盡？家裡需要的不是更多意志力，而是一套清晰的結構。",
    span: "card-medium",
  },
  {
    icon: "❀",
    title: "Navigating a New Diagnosis?",
    italic: "With the right behavioral roadmap, diagnosis becomes the beginning of clarity.",
    zh: "面對新的診斷感到迷惘？以正確的行為框架，診斷將成為清明與信心的起點。",
    span: "card-medium",
  },
  {
    icon: "✿",
    title: "Aligning the Whole Ecosystem.",
    italic: "Parents, co-parents, helpers, and schools — speaking one consistent behavioral language.",
    zh: "父母、家傭、學校 — 在同一套行為語言下協作，孩子才能真正得到一致的支持。",
    span: "card-large",
  },
];

export function CoreProblemSection() {
  return (
    <section className="urban-cozy-container">
      <div className="mx-auto max-w-6xl">
        <div className="features-section">
          <h2 className="section-title">
            The quiet exhaustion <span className="italic-serif">most parents never say out loud.</span>
          </h2>

          <div className="editorial-grid">
            {ITEMS.map((it) => (
              <article key={it.title} className={`asymmetric-card ${it.span}`}>
                <div className="card-icon-wrap">
                  <span className="custom-botanical-icon" style={{ color: "var(--accent-gold)" }}>{it.icon}</span>
                </div>
                <h3 className="card-title">{it.title}</h3>
                <p className="font-serif-italic">{it.italic}</p>
                <p className="card-desc-zh">{it.zh}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
