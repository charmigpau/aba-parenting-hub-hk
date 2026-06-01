import { useLang } from "@/i18n/LanguageProvider";
import { Award } from "lucide-react";

const COPY = {
  en: {
    eyebrow: "03 — About the Clinician",
    heading: "Meet Charming Pau, BCBA, MPH",
    subheading: "Senior School Integration & Family Ecosystem Specialist",
    body: [
      "With 15 years of clinical experience, Charming is a dual-credentialed Board Certified Behavior Analyst (BCBA) and Public Health professional. She specializes in transitioning neurodivergent children into competitive mainstream and international schools across Hong Kong.",
      "Understanding the unique pressures of Hong Kong families, Charming goes beyond the child, training parents and domestic helpers to create a unified, supportive home environment.",
    ],
    credentialsTitle: "Clinical Credentials",
    credentials: [
      "Master of Public Health (MPH) — HKU",
      "Board Certified Behavior Analyst (BCBA)",
      "Certified DIR Floortime® & Social Thinking® Practitioner",
      "100+ Successful Mainstream School Transitions",
    ],
    placeholderLabel: "Professional Headshot",
  },
  zh: {
    eyebrow: "03 — 關於治療師",
    heading: "認識鮑正敏，BCBA, MPH",
    subheading: "資深學校融合與家庭生態系統專家",
    body: [
      "鮑正敏擁有十五年臨床經驗，是國際認證行為分析師（BCBA）兼公共衞生專業人員雙重資歷。她專注於協助神經多樣性兒童順利過渡至香港具競爭力的主流及國際學校。",
      "深明香港家庭的獨特壓力，Charming 的服務不只圍繞孩子本身，更為家長及家傭提供培訓，打造一致且具支援性的家庭環境。",
    ],
    credentialsTitle: "臨床專業資歷",
    credentials: [
      "公共衞生碩士（MPH）— 香港大學",
      "國際認證行為分析師（BCBA）",
      "DIR Floortime® 及 Social Thinking® 認證執業者",
      "逾百名兒童成功融入主流學校",
    ],
    placeholderLabel: "專業形象照",
  },
} as const;

export function AboutClinicianSection() {
  const { lang } = useLang();
  const isZh = lang === "zh-TW";
  const c = isZh ? COPY.zh : COPY.en;

  return (
    <section className="border-b border-hairline">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="fade-up mb-14 flex items-center gap-4 md:mb-20">
          <span className="text-[10px] uppercase tracking-[0.24em] text-foreground/40">
            {c.eyebrow}
          </span>
          <span aria-hidden className="h-px flex-1 bg-foreground/10" />
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
          {/* Left: Image Placeholder */}
          <div className="fade-up md:col-span-5" style={{ animationDelay: "60ms" }}>
            <div className="relative aspect-[4/5] w-full border border-foreground/10 bg-foreground/[0.02]">
              {/* Decorative corner marks */}
              <span aria-hidden className="absolute left-0 top-0 h-4 w-px bg-foreground/20" />
              <span aria-hidden className="absolute left-0 top-0 h-px w-4 bg-foreground/20" />
              <span aria-hidden className="absolute bottom-0 right-0 h-4 w-px bg-foreground/20" />
              <span aria-hidden className="absolute bottom-0 right-0 h-px w-4 bg-foreground/20" />

              {/* Center label */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                <Award size={32} strokeWidth={1} className="text-foreground/25" aria-hidden />
                <p className="text-[10px] uppercase tracking-[0.22em] text-foreground/40">
                  {c.placeholderLabel}
                </p>
              </div>
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="fade-up md:col-span-6 md:col-start-7" style={{ animationDelay: "120ms" }}>
            <h2 className="font-display text-3xl leading-tight tracking-[-0.01em] text-foreground md:text-4xl">
              {c.heading}
            </h2>
            <p className="mt-3 text-sm uppercase tracking-[0.18em] text-foreground/50">
              {c.subheading}
            </p>

            <div className="mt-8 space-y-5">
              {c.body.map((p, i) => (
                <p
                  key={i}
                  className={`text-base leading-[1.8] text-foreground/80 ${isZh ? "tracking-[0.01em]" : ""}`}
                >
                  {p}
                </p>
              ))}
            </div>

            {/* Credentials List */}
            <div className="mt-12">
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-foreground/60">
                {c.credentialsTitle}
              </p>
              <ul className="mt-5 space-y-0">
                {c.credentials.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 border-t border-hairline py-3 text-sm leading-[1.7] text-foreground/80"
                  >
                    <span
                      aria-hidden
                      className="mt-[0.4em] inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                    />
                    <span className={isZh ? "tracking-[0.01em]" : ""}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
