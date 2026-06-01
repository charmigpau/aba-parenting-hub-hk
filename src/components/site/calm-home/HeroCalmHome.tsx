export function HeroCalmHome() {
  return (
    <section className="urban-cozy-container">
      <div className="mx-auto max-w-6xl">
        <div className="hero-section">
          <div>
            <span className="editorial-accent-tag">The Calm Home Project · Charming Pau, BCBA</span>
            <h1 className="hero-title">
              Transform power struggles into <span className="italic-serif">connected parenting.</span>
            </h1>

            <div className="trilingual-group">
              <p className="lang-zh-hant">將親子角力，化為深度連結的教養。</p>
              <p className="lang-cantonese">由香港首屈一指的行為分析師，為高需求家庭打造的尊尚教養旅程。</p>
            </div>

            <p className="mb-10 max-w-xl text-[1rem] leading-[1.75]" style={{ color: "var(--text-slate)" }}>
              A premium, evidence-based workshop series and 1:1 coaching practice for proactive
              parents navigating complex behaviors, ADHD, or autism diagnoses — built to restore
              calm, clarity, and connection at home.
            </p>

            <div className="hero-cta-group">
              <a href="#workshops" className="cta-primary-btn">Secure Your Workshop Seat →</a>
              <a href="#coaching" className="cta-secondary-btn">Explore 1:1 Coaching →</a>
            </div>
          </div>

          <div className="hero-visual-frame">
            <div className="solid-offset-backdrop" />
            <div className="botanical-illustration-container">
              <svg className="botanical-svg" viewBox="0 0 200 220" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M100 210 C100 140 100 90 100 30" stroke="#7D8C7D" strokeWidth="1.2" />
                <path d="M100 150 C70 140 55 120 50 95" stroke="#7D8C7D" strokeWidth="1" fill="none" />
                <path d="M100 130 C130 122 148 105 155 80" stroke="#7D8C7D" strokeWidth="1" fill="none" />
                <path d="M100 110 C80 100 68 82 65 60" stroke="#7D8C7D" strokeWidth="1" fill="none" />
                <ellipse cx="50" cy="95" rx="14" ry="6" fill="#C5A059" opacity="0.55" transform="rotate(-30 50 95)" />
                <ellipse cx="155" cy="80" rx="16" ry="7" fill="#7D8C7D" opacity="0.45" transform="rotate(30 155 80)" />
                <ellipse cx="65" cy="60" rx="12" ry="5" fill="#7D8C7D" opacity="0.5" transform="rotate(-25 65 60)" />
                <circle cx="100" cy="30" r="9" fill="#C5A059" opacity="0.7" />
                <circle cx="100" cy="30" r="4" fill="#4F5D4F" />
                <path d="M65 210 Q100 200 135 210" stroke="#C5A059" strokeWidth="0.8" fill="none" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
