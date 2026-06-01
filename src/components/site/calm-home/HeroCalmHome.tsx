import heroImage from "@/assets/hero-mother-child.jpg";
import { useLang } from "@/i18n/LanguageProvider";

export function HeroCalmHome() {
  const { lang } = useLang();
  const isZh = lang === "zh-HK";

  return (
    <main className="editorial-canvas charming-theme">
      <section className="journal-entry">
        {/* 1. Signature 5-Watercolor-Dot Motif */}
        <div className="watercolor-dots-container" aria-hidden="true">
          <span className="dot dot-1" />
          <span className="dot dot-2" />
          <span className="dot dot-3" />
          <span className="dot dot-4" />
          <span className="dot dot-5" />
        </div>

        {/* 2. Hand-Annotated Header */}
        <div className="header-group">
          <span className="editorial-eyebrow">
            {isZh ? "關係與科學 · 神經科學與情感連結" : "NEUROSCIENCE X RELATIONSHIP"}
          </span>

          {isZh ? (
            <>
              <h1 className="whimsical-title">
                差異化，是{" "}
                <span className="scribble-strikeout-wrapper">
                  改寫提問的方式。
                  <svg
                    className="scribble-svg"
                    viewBox="0 0 300 40"
                    fill="none"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M5 20C40 18 120 12 180 18C210 21 240 25 285 22M20 22C60 21 140 18 200 24C240 28 270 20 295 19"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </h1>
              <h2 className="whimsical-subtitle">
                <span className="highlight-marker">移除</span>所有妨礙{" "}
                <span className="pencil-circle-wrapper">
                  思考
                  <svg
                    className="circle-svg"
                    viewBox="0 0 120 45"
                    fill="none"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M5 22C5 12 45 4 85 6C110 8 115 22 105 32C90 40 40 42 15 35C5 30 2 20 18 12C35 5 80 4 105 10C118 14 115 28 95 34"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                的障礙。
              </h2>
            </>
          ) : (
            <>
              <h1 className="whimsical-title">
                Differentiation is{" "}
                <span className="scribble-strikeout-wrapper">
                  changing the question.
                  <svg
                    className="scribble-svg"
                    viewBox="0 0 300 40"
                    fill="none"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M5 20C40 18 120 12 180 18C210 21 240 25 285 22M20 22C60 21 140 18 200 24C240 28 270 20 295 19"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M220 23C235 15 250 8 265 18C275 25 260 32 250 28C240 24 255 12 270 15"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </h1>
              <h2 className="whimsical-subtitle">
                <span className="highlight-marker">REMOVING</span> what&apos;s in the way of{" "}
                <span className="pencil-circle-wrapper">
                  thinking.
                  <svg
                    className="circle-svg"
                    viewBox="0 0 120 45"
                    fill="none"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M5 22C5 12 45 4 85 6C110 8 115 22 105 32C90 40 40 42 15 35C5 30 2 20 18 12C35 5 80 4 105 10C118 14 115 28 95 34"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </h2>
            </>
          )}
        </div>

        <hr className="hand-ruled-line" />

        {/* 3. Whimsical Showcase */}
        <div className="journal-flow">
          <div className="journal-column col-text">
            <div className="trilingual-passage">
              {isZh ? (
                <>
                  <p className="zh-serif">
                    兩間課室可以得到相同的成績，卻培養出截然不同的學習者。
                  </p>
                  <p className="zh-serif">
                    香港的傳統高壓框架常教導我們追求「相同的標準答案」，但真正的成長在於培養靈魂深處的自主思考。
                  </p>
                  <p className="cantonese-sans">
                    等我哋一齊用溫暖嘅關係，取代冰冷嘅指令，幫仔女建立最安穩嘅心靈堡壘。
                  </p>
                </>
              ) : (
                <p className="en-serif">
                  Two classrooms can get the same results. They are not creating the same
                  learners.
                </p>
              )}
            </div>

            <div className="cta-button-container">
              <a href="#intake" className="hand-drawn-btn">
                {isZh ? "由一次傾談開始 ➔" : "Begin with a Chat ➔"}
                <svg
                  className="btn-underline-svg"
                  viewBox="0 0 200 10"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 5C40 8 120 3 198 6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="journal-column col-illustration">
            <div className="watercolor-frame">
              <div className="illustration-canvas">
                <img
                  src={heroImage}
                  alt={
                    isZh
                      ? "媽媽與孩子在盛開花枝下牽手的水彩塗鴉"
                      : "Whimsical watercolor doodle of a mother holding her child's hand under a blooming branch"
                  }
                  className="storybook-doodle"
                  width={1024}
                  height={1024}
                />
                <span className="hand-corner top-left" aria-hidden="true" />
                <span className="hand-corner bottom-right" aria-hidden="true" />
              </div>
              <div className="watercolor-shadow" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
