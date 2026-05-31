import { useLang } from "@/i18n/LanguageProvider";

const COPY = {
  en: {
    sectionLabel: "Credentials & Media",
    sectionNumber: "02",
    qualTitle: "The Intellectual Foundation",
    qualSubtitle: "Elite qualifications rooted in global institutions",
    cardA: {
      label: "Advanced Clinical Degrees",
      body: "M.S. in Applied Behavior Analysis (Sage College, USA) & Master of Public Health (The University of Hong Kong, HKU).",
    },
    cardB: {
      label: "International Psychology",
      body: "Bachelor of Arts (Honours) in Health Studies & Psychology from McMaster University, Canada.",
    },
    cardC: {
      label: "Holistic Modalities",
      body: "Certified Practitioner in DIR Floortime® and Social Thinking® frameworks.",
    },
    mediaTag: "PUBLIC ADVOCACY",
    mediaTitle: "As Seen on TVB 《流行都市》: Words That Protect Childhood",
    mediaQuote: "A single careless phrase can alter a child's worldview, self-esteem, and security. Our words must build independent thinkers, not anxiety.",
    mediaByline: "— Charming Pau, Behavioral Therapist & BCBA",
    mediaCta: "Read the Full Interview",
    mediaCtaHref: "https://www.healthymindhk.com/post/interview-charming-1",
  },
  zh: {
    sectionLabel: "資歷與媒體",
    sectionNumber: "02",
    qualTitle: "學術根基",
    qualSubtitle: "植根於全球頂尖學府的精英資歷",
    cardA: {
      label: "高等臨床碩士雙學位",
      body: "美國 Sage College 應用行為分析理學碩士（M.S. ABA）及香港大學（HKU）公共衞生碩士（MPH）雙學位。",
    },
    cardB: {
      label: "國際心理與健康研究",
      body: "加拿大 McMaster University 健康研究及心理學文學士（榮譽）。",
    },
    cardC: {
      label: "多元全面治療方案",
      body: "DIR Floortime® 及 Social Thinking® 認證執業者。",
    },
    mediaTag: "大眾教育與發聲",
    mediaTitle: "TVB《流行都市》專訪：用言語守護孩子的成長心理",
    mediaQuote: "家長是孩子最信任的模仿對象。一句無心之失的說話，對孩子長遠的價值觀與自信心影響遠超想像。我們的言語應為孩子賦能，而非帶來焦慮。",
    mediaByline: "— 國際認證行為分析師 鮑正敏",
    mediaCta: "閱讀專訪與觀看影片",
    mediaCtaHref: "https://www.healthymindhk.com/post/interview-charming-1",
  },
} as const;

export function CredentialsSection() {
  const { lang } = useLang();
  const isZh = lang === "zh-TW";
  const c = isZh ? COPY.zh : COPY.en;

  return (
    <section className="border-b border-hairline">
      {/* Section Header */}
      <div className="mx-auto max-w-6xl px-6 pt-20 md:pt-28">
        <div className="fade-up flex items-center gap-4">
          <span className="text-[10px] uppercase tracking-[0.24em] text-foreground/40">
            {c.sectionNumber} — {c.sectionLabel}
          </span>
          <span aria-hidden className="h-px flex-1 bg-foreground/10" />
        </div>
      </div>

      {/* Part 1: Qualifications Grid */}
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="fade-up mb-14" style={{ animationDelay: "60ms" }}>
          <h2 className="font-display text-3xl leading-tight tracking-[-0.01em] text-foreground md:text-4xl">
            {c.qualTitle}
          </h2>
          <p className="mt-3 text-sm uppercase tracking-[0.18em] text-foreground/50">
            {c.qualSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 divide-y divide-foreground/10 border-t border-foreground/10 md:grid-cols-3 md:divide-x md:divide-y-0">
          {/* Card A */}
          <div
            className="fade-up group px-0 py-10 md:px-8 md:py-0 md:first:pl-0 md:first:pr-8"
            style={{ animationDelay: "120ms" }}
          >
            <div className="flex items-center gap-3">
              <span
                aria-hidden
                className="inline-block h-1.5 w-1.5 rounded-full bg-accent"
              />
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-foreground/60">
                {c.cardA.label}
              </p>
            </div>
            <p
              className={
                "mt-5 text-sm leading-[1.8] text-foreground/80 " +
                (isZh ? "tracking-[0.01em]" : "")
              }
            >
              {c.cardA.body}
            </p>
          </div>

          {/* Card B */}
          <div
            className="fade-up group px-0 py-10 md:border-l md:border-foreground/10 md:px-8 md:py-0"
            style={{ animationDelay: "180ms" }}
          >
            <div className="flex items-center gap-3">
              <span
                aria-hidden
                className="inline-block h-1.5 w-1.5 rounded-full bg-primary"
              />
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-foreground/60">
                {c.cardB.label}
              </p>
            </div>
            <p
              className={
                "mt-5 text-sm leading-[1.8] text-foreground/80 " +
                (isZh ? "tracking-[0.01em]" : "")
              }
            >
              {c.cardB.body}
            </p>
          </div>

          {/* Card C */}
          <div
            className="fade-up group px-0 py-10 md:border-l md:border-foreground/10 md:px-8 md:py-0 md:last:pr-0"
            style={{ animationDelay: "240ms" }}
          >
            <div className="flex items-center gap-3">
              <span
                aria-hidden
                className="inline-block h-1.5 w-1.5 rounded-full bg-foreground/50"
              />
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-foreground/60">
                {c.cardC.label}
              </p>
            </div>
            <p
              className={
                "mt-5 text-sm leading-[1.8] text-foreground/80 " +
                (isZh ? "tracking-[0.01em]" : "")
              }
            >
              {c.cardC.body}
            </p>
          </div>
        </div>
      </div>

      {/* Thin divider */}
      <div className="mx-auto max-w-6xl px-6">
        <div className="h-px w-full bg-foreground/10" />
      </div>

      {/* Part 2: Editorial Media Feature */}
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div
          className="fade-up grid grid-cols-1 gap-0 border border-foreground/10 md:grid-cols-2"
          style={{ animationDelay: "100ms" }}
        >
          {/* Left: Media Preview Box */}
          <div className="relative flex aspect-[4/3] items-center justify-center bg-foreground/[0.02] md:aspect-auto">
            <div className="absolute inset-4 border border-foreground/10" />
            <div className="relative z-10 flex flex-col items-center gap-4 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-foreground/15">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-foreground/70"
                >
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              </div>
              <p className="text-[10px] uppercase tracking-[0.22em] text-foreground/45">
                TVB 《流行都市》
              </p>
            </div>
            {/* Decorative corner marks */}
            <span
              aria-hidden
              className="absolute left-0 top-0 h-4 w-px bg-foreground/20"
            />
            <span
              aria-hidden
              className="absolute left-0 top-0 h-px w-4 bg-foreground/20"
            />
            <span
              aria-hidden
              className="absolute bottom-0 right-0 h-4 w-px bg-foreground/20"
            />
            <span
              aria-hidden
              className="absolute bottom-0 right-0 h-px w-4 bg-foreground/20"
            />
          </div>

          {/* Right: Typography Details */}
          <div className="flex flex-col justify-center border-t border-foreground/10 p-8 md:border-t-0 md:border-l md:p-12 lg:p-16">
            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-accent">
              {c.mediaTag}
            </p>
            <h3
              className={
                "mt-5 font-display text-2xl leading-[1.2] tracking-[-0.01em] text-foreground md:text-3xl " +
                (isZh ? "md:text-[1.625rem]" : "")
              }
            >
              {c.mediaTitle}
            </h3>
            <blockquote
              className={
                "mt-6 border-l border-foreground/15 pl-5 text-sm leading-[1.85] text-foreground/75 italic md:text-base " +
                (isZh ? "tracking-[0.01em]" : "")
              }
            >
              {c.mediaQuote}
            </blockquote>
            <p
              className={
                "mt-5 text-xs font-medium text-foreground/60 " +
                (isZh ? "" : "uppercase tracking-[0.12em]")
              }
            >
              {c.mediaByline}
            </p>
            <a
              href={c.mediaCtaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 inline-flex items-center gap-3 text-sm font-medium text-foreground transition-colors"
            >
              <span className="relative">
                {c.mediaCta}
                <span
                  aria-hidden
                  className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-100 bg-foreground/30 transition-transform duration-300 group-hover:scale-x-0"
                />
                <span
                  aria-hidden
                  className="absolute -bottom-0.5 left-0 h-px w-full origin-right scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100"
                />
              </span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              >
                <path d="M7 17L17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
