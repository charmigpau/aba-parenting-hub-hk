import { Link } from "@tanstack/react-router";
import { useLang } from "@/i18n/LanguageProvider";
import charmingPortrait from "@/assets/charming-portrait.jpg";

export function HeroSection() {
  const { t } = useLang();

  return (
    <section className="relative overflow-hidden border-b border-hairline">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24 lg:py-32">
        {/* Asymmetric grid: images left (5fr), text right (7fr) on desktop */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left: Overlapping images */}
          <div className="relative order-1 lg:order-none lg:col-span-5">
            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              {/* Image stack container */}
              <div className="relative aspect-[4/5] w-full">
                {/* Back image — offset up and left */}
                <div
                  className="absolute -top-4 -left-4 w-[78%] overflow-hidden rounded-2xl shadow-[0_20px_60px_-15px_rgba(74,74,74,0.25)]"
                  style={{ animationDelay: "80ms" }}
                >
                  <div className="aspect-[3/4] bg-primary/20">
                    <img
                      src={charmingPortrait}
                      alt="Charming Pau, BCBA"
                      className="h-full w-full object-cover opacity-90"
                      loading="eager"
                    />
                  </div>
                </div>

                {/* Front image — offset down and right, on top */}
                <div
                  className="absolute top-[18%] left-[22%] w-[76%] overflow-hidden rounded-2xl shadow-[0_24px_64px_-12px_rgba(74,74,74,0.3)]"
                  style={{ animationDelay: "160ms" }}
                >
                  <div className="aspect-[3/4] bg-accent/15">
                    <img
                      src={charmingPortrait}
                      alt="Charming Pau — ABA therapy session"
                      className="h-full w-full object-cover"
                      loading="eager"
                    />
                  </div>
                </div>

                {/* Decorative soft accent shape behind */}
                <div
                  className="absolute -bottom-6 -right-6 h-32 w-32 rounded-full bg-accent/10 blur-2xl"
                  aria-hidden="true"
                />
                <div
                  className="absolute -top-8 -right-2 h-24 w-24 rounded-full bg-primary/10 blur-xl"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>

          {/* Right: Text block */}
          <div className="lg:col-span-7 lg:col-start-6">
            <p className="eyebrow fade-up">{t.home.eyebrow}</p>
            <h1 className="fade-up mt-6 font-display text-4xl leading-[1.05] sm:text-5xl md:text-6xl lg:text-[3.75rem]" style={{ animationDelay: "80ms" }}>
              {t.home.headline}
            </h1>
            <p className="fade-up mt-6 max-w-xl text-lg leading-relaxed text-ink-muted md:text-xl" style={{ animationDelay: "160ms" }}>
              {t.home.sub}
            </p>

            {/* Dual CTA paths */}
            <div className="fade-up mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-5" style={{ animationDelay: "240ms" }}>
              {/* Path A — Brand / CharmingBCBA: Soft Gold */}
              <Link
                to="/resources"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-7 py-3.5 text-sm font-medium text-accent-foreground shadow-[0_4px_20px_-4px_rgba(197,160,89,0.4)] transition-all hover:shadow-[0_6px_28px_-4px_rgba(197,160,89,0.55)] hover:-translate-y-0.5"
              >
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent-foreground/60" />
                {t.home.heroCtaBrand}
              </Link>

              {/* Path B — Clinical / SDFK: Sage Green */}
              <Link
                to="/clinic"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-[0_4px_20px_-4px_rgba(125,140,125,0.4)] transition-all hover:shadow-[0_6px_28px_-4px_rgba(125,140,125,0.55)] hover:-translate-y-0.5"
              >
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary-foreground/60" />
                {t.home.heroCtaClinical}
              </Link>
            </div>

            {/* Trust micro-copy */}
            <p className="fade-up mt-6 text-xs text-ink-muted/70" style={{ animationDelay: "320ms" }}>
              BCBA Certification · 10+ Years Experience · English · Cantonese · Mandarin
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
