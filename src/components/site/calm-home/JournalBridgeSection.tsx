import { useEffect } from "react";
import { useLang } from "@/i18n/LanguageProvider";



export function JournalBridgeSection() {
  const { lang } = useLang();
  const isZh = lang === "zh-HK";

  useEffect(() => {
    const arrows = document.querySelectorAll<HTMLElement>(".hand-arrow");
    if (!arrows.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.35 },
    );

    arrows.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="editorial-canvas charming-theme journal-bridge">
      <div className="journal-entry">
        {/* SECTION A */}
        <div className="content-block-a">
          {isZh ? (
            <p className="cantonese-sans">
              我哋相信，臨床科學唔應該感覺冷冰冰；用有溫度嘅育兒方式，默默守護每一個家庭。
            </p>
          ) : (
            <p className="en-serif">We believe clinical science shouldn&apos;t feel clinical.</p>
          )}
        </div>


        {/* Loop-de-loop arrow */}
        <div className="arrow-divider-wrap">
          <svg
            className="hand-arrow loop-arrow"
            viewBox="0 0 100 150"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M50,10 C45,40 25,60 35,80 C45,95 70,85 65,65 C60,45 35,55 30,100 C28,110 32,125 45,135"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M32,122 C35,125 45,135 45,135 C45,135 46,122 43,115"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="scribbled-note">{isZh ? "繼續閱讀…" : "Keep reading..."}</span>
        </div>

        {/* SECTION B */}
        <div className="content-block-b journal-flow">
          <div className="col-text">
            <p className={isZh ? "zh-serif" : "en-serif"}>
              {isZh ? "一個讓父母安心成長的港灣。" : "A sanctuary for parental growth."}
            </p>


            <div className="inline-arrow-wrap">
              <svg
                className="hand-arrow sweep-arrow"
                viewBox="0 0 120 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M10,15 C45,5 90,15 105,40"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M92,34 C100,38 105,40 105,40 C105,40 102,30 99,23"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>

          <div className="col-illustration">
            <div className="dashed-guide-wrap">
              <svg
                className="hand-arrow dashed-arrow"
                viewBox="0 0 150 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M130,10 Q90,30 110,60 T30,85"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeDasharray="6 6"
                />
                <path
                  d="M42,75 C35,80 30,85 30,85 C30,85 41,86 48,84"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
