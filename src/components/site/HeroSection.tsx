import { Link } from "@tanstack/react-router";
import { useLang } from "@/i18n/LanguageProvider";
import charmingPortrait from "@/assets/charming-portrait.jpg";

export function HeroSection() {
  const { t } = useLang();

  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24 lg:py-28">
        {/* Asymmetric grid: images left (5fr), text right (7fr) on desktop */}
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-12">
          {/* Left: Overlapping pebble-shaped images */}
          <div className="relative order-1 lg:order-none lg:col-span-5">
            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              <div className="relative aspect-[4/5] w-full">
                {/* Soft sage blob behind */}
                <div
                  className="absolute -top-6 right-0 h-56 w-56 rounded-full bg-primary/15 blur-3xl"
                  aria-hidden="true"
                />
                <div
                  className="absolute -bottom-10 -left-6 h-40 w-40 rounded-full bg-accent/15 blur-3xl"
                  aria-hidden="true"
                />

                {/* Back image — pebble shape, soft */}
                <div
                  className="fade-up absolute -top-4 -left-4 w-[78%] overflow-hidden rounded-[3rem] border border-foreground/5 bg-surface shadow-[0_30px_60px_-30px_rgba(44,44,44,0.18)]"
                  style={{ animationDelay: "80ms" }}
                >
                  <div className="aspect-[3/4] bg-primary/10">
                    <img
                      src={charmingPortrait}
                      alt="Charming Pau, BCBA"
                      className="h-full w-full object-cover opacity-95"
                      loading="eager"
                    />
                  </div>
                </div>

                {/* Front image — pebble shape, offset down-right, on top */}
                <div
                  className="fade-up absolute top-[18%] left-[22%] w-[76%] overflow-hidden rounded-[3rem] border border-foreground/5 bg-surface shadow-[0_40px_80px_-30px_rgba(44,44,44,0.28)]"
                  style={{ animationDelay: "160ms" }}
                >
                  <div className="aspect-[3/4] bg-accent/10">
                    <img
                      src={charmingPortrait}
                      alt="Charming Pau — ABA therapy session"
                      className="h-full w-full object-cover"
                      loading="eager"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Text block */}
          <div className="lg:col-span-7 lg:col-start-6">
            <div className="fade-up flex items-center gap-3">
              <span className="h-px w-8 bg-accent/60" aria-hidden />
              <p className="eyebrow !text-accent">{t.home.eyebrow}</p>
            </div>
            <h1
              className="fade-up mt-6 font-display text-4xl leading-[1.1] sm:text-5xl md:text-6xl lg:text-[3.75rem]"
              style={{ animationDelay: "80ms" }}
            >
              {t.home.headline}
            </h1>
            <p
              className="fade-up mt-7 max-w-xl text-lg leading-relaxed text-ink-muted md:text-xl"
              style={{ animationDelay: "160ms" }}
            >
              {t.home.sub}
            </p>

            {/* Dual CTA paths — thin border pill style */}
            <div
              className="fade-up mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
              style={{ animationDelay: "240ms" }}
            >
              {/* Path A — Brand / CharmingBCBA: Soft Gold */}
              <Link
                to="/resources"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-accent bg-accent/5 px-8 py-4 text-xs font-medium uppercase tracking-[0.18em] text-accent-foreground transition-all hover:bg-accent hover:text-background hover:-translate-y-0.5"
              >
                {t.home.heroCtaBrand}
              </Link>

              {/* Path B — Clinical / SDFK: Sage Green */}
              <Link
                to="/clinic"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-primary bg-primary/5 px-8 py-4 text-xs font-medium uppercase tracking-[0.18em] text-foreground transition-all hover:bg-primary hover:text-primary-foreground hover:-translate-y-0.5"
              >
                {t.home.heroCtaClinical}
              </Link>
            </div>

            {/* Trust micro-copy */}
            <div className="fade-up mt-10 flex items-center gap-3" style={{ animationDelay: "320ms" }}>
              <span className="h-px w-6 bg-accent/40" aria-hidden />
              <p className="text-[10px] uppercase tracking-[0.2em] text-ink-muted/80">
                BCBA Certification · 10+ Years Experience · English · Cantonese · Mandarin
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
