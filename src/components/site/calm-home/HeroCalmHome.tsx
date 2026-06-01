import heroImage from "@/assets/hero-mother-child.jpg";

export function HeroCalmHome() {
  return (
    <section className="urban-cozy-container">
      <div className="mx-auto max-w-6xl">
        <div className="hero-section">
          <div className="hero-content">
            <span className="editorial-accent-tag">The HK Third Way • 關係與科學</span>

            <h1 className="hero-title">
              Bridging the gap between <span className="italic-serif">clinical science</span> and relational security.
            </h1>

            <div className="trilingual-group">
              <p className="lang-zh-hant">為香港家庭連結臨床行為科學與溫暖的安全感。</p>
              <p className="lang-cantonese">等我哋一齊喺高壓嘅環境下，同仔女建立最真摯、最安穩嘅連繫。</p>
            </div>

            <div className="hero-cta-group">
              <a href="#intake" className="cta-primary-btn">Begin Your Journey</a>
              <a href="#coaching" className="cta-secondary-btn">Explore Our Philosophy</a>
            </div>
          </div>

          <div className="hero-visual-frame">
            <div className="solid-offset-backdrop" />
            <div className="botanical-illustration-container">
              <img
                src={heroImage}
                alt="Watercolor illustration of a mother holding her child's hand under a blooming branch"
                width={1024}
                height={1024}
                className="hero-illustration-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
