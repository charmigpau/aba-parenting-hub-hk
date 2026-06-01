import { useLang } from "@/i18n/LanguageProvider";

type Testimonial = {
  skew: "left" | "right";
  clipColor: string;
  en: {
    quoteBefore: string;
    highlight: string;
    quoteMiddle: string;
    circled: string;
    quoteAfter: string;
    author: string;
    location: string;
  };
  zh: {
    quote: string;
    author: string;
    location: string;
  };
};

const TESTIMONIALS: Testimonial[] = [
  {
    skew: "left",
    clipColor: "#7D8C7D",
    en: {
      quoteBefore: "Charming didn't just help our son transition to ESF; she ",
      highlight: "trained our helper",
      quoteMiddle: " so that the ",
      circled: "meltdowns at home finally stopped.",
      quoteAfter: " She completely changed our family dynamics.",
      author: "Mother of a 4-year-old",
      location: "HK Island",
    },
    zh: {
      quote:
        "她不單幫我們的兒子順利過渡到英基 (ESF) 幼稚園，更悉心培訓了我們的外傭，令家中的情緒崩潰鬧劇終於停止。她徹底改變了我們整個家庭的互動氣氛。",
      author: "四歲男孩的媽媽",
      location: "港島家長",
    },
  },
  {
    skew: "right",
    clipColor: "#C5A059",
    en: {
      quoteBefore:
        "Under local school pressure, my daughter developed intense anxiety. Charming translated ",
      highlight: "behavioral science into gentle habits",
      quoteMiddle: " we could practice together. Now, ",
      circled: "she walks into class smiling.",
      quoteAfter: "",
      author: "Father of a Primary 2 Student",
      location: "Kowloon",
    },
    zh: {
      quote:
        "在本地小學的高壓環境下，女兒曾出現嚴重焦慮。Charming將冰冷的行為科學轉化為我們能一起實踐的溫柔習慣。現在，女兒終於重拾笑容上學去。",
      author: "小二女生的爸爸",
      location: "九龍家長",
    },
  },
];

function PaperClip({ color }: { color: string }) {
  return (
    <div className="paper-clip-svg" aria-hidden="true">
      <svg viewBox="0 0 30 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10,40 L10,15 C10,10 15,5 20,10 C25,15 25,25 20,30 L12,38 C8,43 2,38 5,30 L12,18"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    </div>
  );
}

export function SuccessStoriesSection() {
  const { lang } = useLang();
  const isZh = lang === "zh-HK";

  return (
    <section className="success-stories-container">
      <div className="watercolor-dots-container" style={{ justifyContent: "center" }} aria-hidden="true">
        <span className="dot dot-1" />
        <span className="dot dot-2" />
        <span className="dot dot-3" />
        <span className="dot dot-4" />
        <span className="dot dot-5" />
      </div>

      <div className="stories-header">
        <span className="editorial-eyebrow">
          {isZh ? "真實成長故事 · Real Breakthroughs" : "Real Breakthroughs • 真實成長故事"}
        </span>
        <h2 className="whimsical-title">
          {isZh ? (
            <>
              在壓力中，重新尋回 <span className="italic-serif">家的和諧</span>
            </>
          ) : (
            <>
              Families who found their <span className="italic-serif">harmony</span>
            </>
          )}
        </h2>
        <h3 className="whimsical-subtitle-zh">
          {isZh
            ? "陪伴無數香港家庭，在壓力中重新建立穩固連繫。"
            : "Walking alongside Hong Kong families to rebuild secure connection under pressure."}
        </h3>
      </div>

      <div className="testimonials-scatter-flow">
        {TESTIMONIALS.map((tm, i) => (
          <article
            key={i}
            className={`testimonial-paper-slip card-skew-${tm.skew}`}
          >
            <PaperClip color={tm.clipColor} />

            <div className="testimonial-content">
              <span className="quote-mark" aria-hidden="true">
                “
              </span>

              <p className={isZh ? "quote-en quote-muted" : "quote-en"}>
                {tm.en.quoteBefore}
                <span className="highlight-marker">{tm.en.highlight}</span>
                {tm.en.quoteMiddle}
                <span className="pencil-circle-wrapper">
                  {tm.en.circled}
                  <svg
                    className="circle-svg"
                    viewBox="0 0 120 45"
                    fill="none"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M5 22C5 12 45 4 85 6C110 8 115 22 105 32C90 40 40 42 15 35"
                      stroke="var(--theme-accent, #B69146)"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                {tm.en.quoteAfter}
              </p>

              <p className="quote-zh" lang="zh-Hant-HK">
                「{tm.zh.quote}」
              </p>

              <div className="quote-author">
                <span className="author-name">
                  {isZh ? tm.zh.author : tm.en.author}
                </span>
                <span className="author-location">
                  {isZh ? tm.zh.location : `${tm.en.location} • ${tm.zh.location}`}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
