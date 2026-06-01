import { useState, type FormEvent } from "react";
import { useLang } from "@/i18n/LanguageProvider";

export function Footer() {
  const { lang, t } = useLang();
  const isZh = lang === "zh-TW";
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "ok" | "error">("idle");

  const copy = isZh
    ? {
        navHeading: "瀏覽目錄",
        links: [
          { href: "/about", label: "我們的理念" },
          { href: "/services", label: "治療諮詢" },
          { href: "/services", label: "家長諮詢" },
          { href: "/resources", label: "社群連繫" },
        ],
        postcardTitle: "來自港灣的信",
        postcardDesc: "雙語的關係洞察、化作溫暖的臨床科學、與本地香港支援，輕輕送到你的信箱。",
        emailPlaceholder: "您的電郵地址…",
        joinUs: "加入我們",
        ecosystemHeading: "我們的共同生態",
        ecosystemBody: (
          <>
            <strong>CharmingBCBA</strong> 將臨床的安全感，與滋養靈魂的照護連繫起來。姊妹品牌
            <strong> SDFK</strong>，透過遊戲與探索，陪伴關係之中的成長。
          </>
        ),
        copyright: "© 2026 CharmingBCBA × SDFK。為本地及國際家庭提供關係安全感。",
        thanks: "已收到，謝謝你 ✿",
        invalid: "請輸入有效的電郵地址。",
      }
    : {
        navHeading: "Navigate",
        links: [
          { href: "/about", label: "Our Philosophy" },
          { href: "/services", label: "Clinical Care" },
          { href: "/services", label: "Parent Consultation" },
          { href: "/resources", label: "Community Hub" },
        ],
        postcardTitle: "Letters from the Sanctuary",
        postcardDesc:
          "Relational insights, clinical science made cozy, and local HK support delivered softly to your inbox.",
        emailPlaceholder: "Your email address…",
        joinUs: "Join Us",
        ecosystemHeading: "Our Shared Ecosystem",
        ecosystemBody: (
          <>
            <strong>CharmingBCBA</strong> bridges clinical security with soul-nourishing care. Its
            sister brand, <strong>SDFK</strong>, guides relational growth through play and
            exploration.
          </>
        ),
        copyright:
          "© 2026 CharmingBCBA × SDFK. Relational Security for local & international families.",
        thanks: "You're on the list ✿",
        invalid: "Please enter a valid email address.",
      };

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const trimmed = email.trim();
    const valid =
      trimmed.length > 0 &&
      trimmed.length <= 255 &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed);
    if (!valid) {
      setStatus("error");
      return;
    }
    setStatus("ok");
    setEmail("");
  }

  return (
    <footer className="whimsical-footer charming-theme">
      {/* Torn paper / wavy transition */}
      <div className="footer-transition-wave" aria-hidden="true">
        <svg viewBox="0 0 1440 40" fill="none" preserveAspectRatio="none">
          <path
            d="M0,20 Q120,5 240,25 T480,15 T720,25 T960,10 T1200,30 T1440,15 L1440,40 L0,40 Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="footer-content">
        <div className="footer-grid">
          {/* Postcard newsletter */}
          <div className="footer-col col-postcard">
            <div className="postcard-container">
              <span className="postcard-stamp" aria-hidden="true">
                📬
              </span>
              <h3 className="postcard-title">{copy.postcardTitle}</h3>
              <p className="postcard-desc">{copy.postcardDesc}</p>

              <form className="postcard-form" onSubmit={handleSubmit} noValidate>
                <label className="sr-only" htmlFor="footer-email">
                  Email
                </label>
                <input
                  id="footer-email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status !== "idle") setStatus("idle");
                  }}
                  placeholder={copy.emailPlaceholder}
                  className="postcard-input"
                  maxLength={255}
                  required
                  aria-invalid={status === "error"}
                />
                <button type="submit" className="postcard-btn">
                  {copy.joinUs}
                  <svg
                    className="btn-underline-svg"
                    viewBox="0 0 100 10"
                    fill="none"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M2 5C20 8 60 3 98 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </form>

              {status === "ok" && <p className="postcard-msg ok">{copy.thanks}</p>}
              {status === "error" && <p className="postcard-msg err">{copy.invalid}</p>}
            </div>
          </div>

          {/* Navigation */}
          <div className="footer-col col-links">
            <h4 className="footer-heading">{copy.navHeading}</h4>
            <ul className="footer-link-list">
              {copy.links.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="editorial-link">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Brand ecosystem */}
          <div className="footer-col col-brand-connect">
            <h4 className="footer-heading">{copy.ecosystemHeading}</h4>
            <p className="brand-desc-footer">{copy.ecosystemBody}</p>

            <div className="botanical-cross-sprig" aria-hidden="true">
              <svg viewBox="0 0 100 60" fill="none" className="cross-sprig-svg">
                <path
                  d="M25,50 Q40,30 50,20 Q60,10 75,10"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path d="M38,36 Q32,32 30,35 Q32,40 38,36 Z" fill="currentColor" opacity="0.8" />
                <path d="M48,26 Q42,20 40,24 Q44,28 48,26 Z" fill="currentColor" opacity="0.8" />
                <path
                  d="M75,50 Q60,35 50,20 Q40,5 25,5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path d="M62,38 Q68,34 70,37 Q68,42 62,38 Z" fill="currentColor" opacity="0.8" />
                <path d="M52,24 Q58,18 60,22 Q56,26 52,24 Z" fill="currentColor" opacity="0.8" />
                <path
                  d="M50,20 C46,16 42,12 45,8 C48,4 50,14 50,20 C50,14 52,4 55,8 C58,12 54,16 50,20 Z"
                  stroke="#C5A059"
                  strokeWidth="1.5"
                  fill="none"
                />
                <path
                  d="M50,20 Q45,28 40,35 M50,20 Q55,28 60,35"
                  stroke="#C5A059"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </div>

        <hr className="hand-ruled-line" style={{ opacity: 0.1 }} />

        <div className="footer-bottom">
          <p className="copyright-text">{copy.copyright}</p>
          <div className="mini-dots" aria-hidden="true">
            <span className="dot-mini m-dot-1" />
            <span className="dot-mini m-dot-2" />
            <span className="dot-mini m-dot-3" />
          </div>
          <span className="copyright-text" style={{ opacity: 0.7 }}>
            {t.brand.tag} · BCBA #1-21-55972
          </span>
        </div>
      </div>
    </footer>
  );
}
