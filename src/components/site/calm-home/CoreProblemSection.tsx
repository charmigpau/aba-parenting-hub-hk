import { useLang } from "@/i18n/LanguageProvider";

const ITEMS_EN = [
  {
    icon: "🌱",
    title: "Behavioral Consultation",
    body: "Practical, individualized ABA strategies designed to fit your unique household dynamic without sacrificing warmth.",
    span: "card-large",
  },
  {
    icon: "🤝",
    title: "Relational Security",
    body: "Moving away from rigid 'Tiger Parent' expectations toward secure attachment and emotional safety.",
    span: "card-medium",
  },
];

const ITEMS_ZH = [
  {
    icon: "🌱",
    title: "行為諮詢",
    body: "拒絕冰冷的臨床指令。我們將行為科學轉化為日常溫和、實用的育兒策略，貼合你家庭的真實節奏。",
    span: "card-large",
  },
  {
    icon: "🤝",
    title: "關係安全感",
    body: "陪伴家長跳出「填鴨高壓」的單一框架，在東亞社會壓力下，穩守家庭親密感與情感安全。",
    span: "card-medium",
  },
];

export function CoreProblemSection() {
  const { lang } = useLang();
  const isZh = lang === "zh-HK";
  const items = isZh ? ITEMS_ZH : ITEMS_EN;

  return (
    <section className="urban-cozy-container">
      <div className="mx-auto max-w-6xl">
        <div className="features-section">
          <h2 className="section-title">
            {isZh ? (
              <>
                以實證為本，<span className="italic-serif">滋養靈魂</span>的支援
              </>
            ) : (
              <>
                Evidence-Based, <span className="italic-serif">Soul-Nourishing</span> Support
              </>
            )}
          </h2>

          <div className="editorial-grid">
            {items.map((it) => (
              <article key={it.title} className={`asymmetric-card ${it.span}`}>
                <div className="card-icon-wrap">
                  <span className="custom-botanical-icon">{it.icon}</span>
                </div>
                <h3 className="card-title">{it.title}</h3>
                <p className="font-serif-italic">{it.body}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
