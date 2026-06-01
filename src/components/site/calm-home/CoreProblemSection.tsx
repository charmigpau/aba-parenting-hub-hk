const ITEMS = [
  {
    icon: "🌱",
    title: "Behavioral Consultation",
    italic: "Practical, individualized ABA strategies designed to fit your unique household dynamic without sacrificing warmth.",
    zh: "拒絕冰冷的臨床指令。我們將行為科學轉化為日常溫和、實用的育兒策略。",
    span: "card-large",
  },
  {
    icon: "🤝",
    title: "Relational Security",
    italic: "Moving away from rigid 'Tiger Parent' expectations toward secure attachment and emotional safety.",
    zh: "陪伴家長跳出「填鴨高壓」的單一框架，在東亞社會壓力下，穩守家庭親密感。",
    span: "card-medium",
  },
];

export function CoreProblemSection() {
  return (
    <section className="urban-cozy-container">
      <div className="mx-auto max-w-6xl">
        <div className="features-section">
          <h2 className="section-title">
            Evidence-Based, <span className="italic-serif">Soul-Nourishing</span> Support
          </h2>

          <div className="editorial-grid">
            {ITEMS.map((it) => (
              <article key={it.title} className={`asymmetric-card ${it.span}`}>
                <div className="card-icon-wrap">
                  <span className="custom-botanical-icon">{it.icon}</span>
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
