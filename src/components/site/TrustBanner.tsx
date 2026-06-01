import { useLang } from "@/i18n/LanguageProvider";

const SCHOOLS = ["ESF", "HKIS", "CDNIS", "Victoria Educational Organisation", "Dalton", "IMS", "VSA", "HKA"];

const COPY = {
  en: {
    eyebrow: "Trusted placements",
    lead: "Successfully transitioned over 100 children into Hong Kong's top-tier schools, including:",
  },
  zh: {
    eyebrow: "信賴實績",
    lead: "成功協助超過 100 位孩子順利過渡至本港頂尖學府，包括：",
  },
} as const;

export function TrustBanner() {
  const { lang } = useLang();
  const c = lang === "zh-HK" ? COPY.zh : COPY.en;

  return (
    <section className="border-y border-foreground/10 bg-[#FDFBF7]">
      <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-4">
            <div className="flex items-start gap-3">
              <span aria-hidden className="mt-2 h-px w-6 bg-foreground/40" />
              <div>
                <p className="text-[10px] uppercase tracking-[0.24em] text-foreground/55">
                  {c.eyebrow}
                </p>
                <p className="mt-3 font-display text-lg leading-snug text-foreground/85 md:text-xl">
                  {c.lead}
                </p>
              </div>
            </div>
          </div>

          <div className="md:col-span-8">
            <ul className="grid grid-cols-2 gap-px overflow-hidden bg-foreground/10 sm:grid-cols-3 md:grid-cols-4">
              {SCHOOLS.map((name) => (
                <li
                  key={name}
                  className="flex min-h-[88px] items-center justify-center bg-[#FDFBF7] px-4 py-6 text-center"
                >
                  <span className="font-display text-sm tracking-wide text-foreground/80 md:text-base">
                    {name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
