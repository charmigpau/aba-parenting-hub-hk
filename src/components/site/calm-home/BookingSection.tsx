export function BookingSection() {
  return (
    <section className="booking-section-container">
      <div className="booking-editorial-layout">
        {/* Left Column: Conversational Invitation & Arrow Connector */}
        <div className="booking-invite-col">
          <span className="editorial-accent-tag">
            15-Min Discovery Call • 免費探索諮詢
          </span>

          <h2 className="whimsical-title">
            Let&rsquo;s find your family&rsquo;s{" "}
            <span className="pencil-circle-wrapper">
              Third Way.
              <svg
                className="circle-svg"
                viewBox="0 0 120 45"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M5 22C5 12 45 4 85 6C110 8 115 22 105 32C90 40 40 42 15 35C5 30 2 20 18 12C35 5 80 4 105 10C118 14 115 28 95 34"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>

          <div className="trilingual-passage">
            <p className="en-serif">
              No back-and-forth emails. No scheduling friction. Simply choose a quiet
              15 minutes to speak with us about your household&rsquo;s unique dynamics.
            </p>
            <p className="zh-serif">
              無需繁複的電郵往返。只需挑選一個方便的時間，讓我們在15分鐘的專屬對話中，為您理清頭緒，尋找最溫暖的臨床方案。
            </p>
          </div>

          {/* Whimsical Editorial Sweep Arrow pointing to the Calendar */}
          <div className="booking-arrow-wrap">
            <svg
              className="hand-arrow sweep-arrow"
              viewBox="0 0 120 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
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
            <span className="scribbled-note" style={{ marginLeft: 10 }}>
              Select a time on the paper ➔
            </span>
          </div>
        </div>

        {/* Right Column: The "Clipboard" Calendar Frame */}
        <div className="booking-widget-col">
          <div className="clipboard-notebook-canvas">
            <div className="clipboard-clip">
              <svg viewBox="0 0 80 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M15,22 L65,22 C68,22 70,18 70,14 L70,8 C70,4 68,2 65,2 L15,2 C12,2 10,4 10,8 L10,14 C10,18 12,22 15,22 Z"
                  fill="#E6A059"
                  opacity="0.15"
                />
                <path
                  d="M15,22 L65,22 M10,14 L10,8 M70,14 L70,8 M25,2 L55,2"
                  stroke="#4A4A4A"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <circle cx="40" cy="10" r="3" stroke="#4A4A4A" strokeWidth="1.5" />
              </svg>
            </div>

            <div className="calendar-embed-wrapper">
              <iframe
                src="https://calendly.com/your-username/15-min-discovery?hide_landing_page_details=1&hide_gdpr_banner=1&primary_color=7d8c7d"
                width="100%"
                height="100%"
                frameBorder="0"
                title="Book a 15-minute discovery call"
              />
            </div>

            <div className="paper-margin-line"></div>
          </div>

          <div className="clipboard-shadow"></div>
        </div>
      </div>
    </section>
  );
}
