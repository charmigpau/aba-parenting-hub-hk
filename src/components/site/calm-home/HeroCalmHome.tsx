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
              <svg className="botanical-svg" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M50 90C50 90 48 50 60 30M60 30C65 20 55 10 50 15C45 10 35 20 40 30M40 30C52 50 50 90 50 90" stroke="#7D8C7D" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M47 55C42 53 40 48 45 46C50 44 52 50 47 55Z" fill="#C5A059" opacity="0.8" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
