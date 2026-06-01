import { Link } from "@tanstack/react-router";
import { useLang } from "@/i18n/LanguageProvider";

const COPY = {
  en: {
    badge: "🇭🇰 CLINICAL INTEGRITY & CHILDHOOD BRILLIANCE",
    headline: "Bridging the gap between clinical therapy, home life, and school success in Hong Kong.",
    sub: "Dual-credentialed BCBA and Public Health professional helping neurodivergent children thrive in top-tier schools, and empowering parents and domestic helpers to build a consistent Family Ecosystem.",
    primary: "Book a Consultation",
    secondary: "Explore My Services",
    meta: "Hong Kong · English · 繁體中文 · 普通話",
  },
  zh: {
    badge: "🇭🇰 連結臨床治療、家庭生活與校園成就",
    headline: "在臨床治療、家庭生活與校園成就之間，為香港孩子搭建橋樑。",
    sub: "由兼具國際認證行為分析師 (BCBA) 及公共衛生專業資歷的鮑正敏創辦，協助神經多樣性孩子於頂尖學校綻放光芒，並賦能家長與家庭傭工，共同建立穩定一致的「家庭生態系統」。",
    primary: "預約諮詢",
    secondary: "探索服務內容",
    meta: "香港 · English · 繁體中文 · 普通話",
  },
} as const;

export function HeroSection() {
  const { lang, setLang } = useLang();
  const isZh = lang === "zh-HK";
  const c = isZh ? COPY.zh : COPY.en;

  return (
    <section className="relative overflow-hidden bg-[#FDFBF7]">
      {/* Top utility row: badge + language pill */}
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 pt-8 sm:pt-10">
        <div
          className="fade-up flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.22em] text-foreground/70 sm:text-xs"
        >
          <span aria-hidden className="hidden h-px w-6 bg-foreground/30 sm:inline-block" />
          <span>{c.badge}</span>
        </div>

        {/* Language pill */}
        <div
          className="fade-up inline-flex items-center rounded-full border border-foreground/15 bg-background/60 p-0.5 text-[11px] font-medium backdrop-blur"
          role="group"
          aria-label="Language"
        >
          <button
            type="button"
            onClick={() => setLang("en")}
            aria-pressed={!isZh}
            className={
              "rounded-full px-3 py-1 tracking-wider transition-colors " +
              (!isZh
                ? "bg-foreground text-background"
                : "text-foreground/60 hover:text-foreground")
            }
          >
            EN
          </button>
          <button
            type="button"
            onClick={() => setLang("zh-HK")}
            aria-pressed={isZh}
            className={
              "rounded-full px-3 py-1 tracking-wider transition-colors " +
              (isZh
                ? "bg-foreground text-background"
                : "text-foreground/60 hover:text-foreground")
            }
          >
            繁中
          </button>
        </div>
      </div>

      {/* Thin editorial divider */}
      <div className="mx-auto mt-8 max-w-6xl px-6">
        <div className="h-px w-full bg-foreground/10" />
      </div>

      {/* Editorial asymmetric grid */}
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20 md:py-28 lg:py-32">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left column — small editorial meta label */}
          <aside className="lg:col-span-3">
            <div className="fade-up flex items-start gap-3" style={{ animationDelay: "60ms" }}>
              <span aria-hidden className="mt-2 h-px w-6 bg-foreground/40" />
              <div>
                <p className="text-[10px] uppercase tracking-[0.24em] text-foreground/55">
                  {isZh ? "卷宗 / 001" : "Volume / 001"}
                </p>
                <p className="mt-2 text-[10px] uppercase tracking-[0.24em] text-foreground/55">
                  {isZh ? "鮑正敏 · BCBA" : "Charming Pau · BCBA"}
                </p>
              </div>
            </div>
          </aside>

          {/* Right column — headline + sub + CTAs */}
          <div className="lg:col-span-9">
            <h1
              className="fade-up font-display text-[2.25rem] leading-[1.08] tracking-[-0.015em] text-foreground sm:text-5xl md:text-6xl lg:text-[4.25rem]"
              style={{ animationDelay: "120ms", fontWeight: 500 }}
            >
              {c.headline}
            </h1>

            <div
              className="fade-up mt-10 grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12"
              style={{ animationDelay: "220ms" }}
            >
              <div className="md:col-span-7">
                <p
                  className={
                    "text-base leading-[1.75] text-foreground/75 md:text-[1.0625rem] " +
                    (isZh ? "tracking-[0.01em]" : "")
                  }
                >
                  {c.sub}
                </p>
              </div>

              <div className="md:col-span-5 md:border-l md:border-foreground/10 md:pl-8">
                <p className="text-[10px] uppercase tracking-[0.22em] text-foreground/50">
                  {isZh ? "預約諮詢" : "Begin a conversation"}
                </p>
                <div className="mt-5 flex flex-col gap-3">
                  <Link
                    to="/contact"
                    className="group inline-flex w-full items-center justify-between gap-3 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background transition-all hover:-translate-y-0.5 hover:bg-foreground/90"
                  >
                    <span>{c.primary}</span>
                    <span aria-hidden className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                  <Link
                    to="/services"
                    className="group inline-flex w-full items-center justify-between gap-3 rounded-full border border-foreground/25 bg-transparent px-6 py-3.5 text-sm font-medium text-foreground transition-all hover:-translate-y-0.5 hover:border-foreground hover:bg-foreground/[0.03]"
                  >
                    <span>{c.secondary}</span>
                    <span aria-hidden className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Meta footer */}
            <div
              className="fade-up mt-16 flex items-center gap-4 border-t border-foreground/10 pt-6"
              style={{ animationDelay: "320ms" }}
            >
              <span className="text-[10px] uppercase tracking-[0.24em] text-foreground/45">
                {c.meta}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
