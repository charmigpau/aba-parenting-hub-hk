import { Heart, Users, GraduationCap } from "lucide-react";

const PILLARS = [
  {
    icon: Heart,
    title: "Compassion Over Compliance",
    zhTitle: "關懷重於服從",
    body: "We believe behavior support should be relational, child-led, and respectful of your child's unique emotional needs.",
    zhBody: "我們相信行為支持應以關係為本、以兒童為主導，並尊重孩子獨特的情感需要。",
  },
  {
    icon: Users,
    title: "Ecosystem Alignment",
    zhTitle: "生態系統協同",
    body: "True progress happens when everyone is on the same page. We actively train parents and domestic helpers using proven, hands-on methods.",
    zhBody: "當所有人目標一致時，真正的進步才會發生。我們積極以實證、親身實踐的方法培訓家長及家務助理。",
  },
  {
    icon: GraduationCap,
    title: "School-Ready Confidence",
    zhTitle: "學校預備自信",
    body: "We bridge the clinical-classroom divide, giving educators the practical tools they need to help your child seamlessly integrate into Hong Kong's premier schools.",
    zhBody: "我們連結臨床與課堂的鴻溝，為教育工作者提供實用工具，助您的孩子順利融入香港頂尖學校。",
  },
];

export function PhilosophySection() {
  return (
    <section className="border-b border-hairline" style={{ backgroundColor: "#F5F0E8" }}>
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        {/* Centered Callout Box */}
        <div className="fade-up rounded-sm border border-foreground/10 bg-surface p-8 shadow-sm md:p-14">
          {/* Eyebrow */}
          <div className="mb-8 flex items-center gap-4">
            <span className="text-[10px] uppercase tracking-[0.24em] text-foreground/40">
              Our Philosophy
            </span>
            <span aria-hidden className="h-px flex-1 bg-foreground/10" />
            <span className="text-[10px] uppercase tracking-[0.24em] text-foreground/40">
              我們的理念
            </span>
          </div>

          {/* Section Title */}
          <h2 className="font-display text-center text-2xl leading-tight tracking-[-0.01em] text-foreground md:text-3xl">
            Practical. Compassionate. Human-Centered.
          </h2>

          {/* Main Essence Quote */}
          <div className="mx-auto mt-10 max-w-3xl text-center">
            <p className="font-display text-lg leading-[1.7] text-foreground/90 md:text-xl">
              &ldquo;Gentle, evidence-based behavior support that empowers families, domestic helpers, and educators — providing practical, human-centered strategies for school readiness and home harmony.&rdquo;
            </p>

            {/* Traditional Chinese Translation */}
            <p className="mt-6 text-sm leading-[1.8] text-foreground/60 md:text-base">
              「以溫暖、以實證為本的行為支持，賦能家庭、家務助理與教育工作者——為學前準備與和諧家庭生活提供實用、以人為本的策略。」
            </p>
          </div>

          {/* Divider */}
          <div className="mx-auto my-12 h-px max-w-xs bg-foreground/10" />

          {/* Three Pillars */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">
            {PILLARS.map((pillar, i) => (
              <div
                key={pillar.title}
                className="fade-up text-center"
                style={{ animationDelay: `${(i + 1) * 80}ms` }}
              >
                <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-foreground/10 bg-background">
                  <pillar.icon size={22} strokeWidth={1.2} className="text-primary" />
                </div>

                <h3 className="font-display text-base leading-tight text-foreground md:text-lg">
                  {pillar.title}
                </h3>
                <p className="mt-1 text-xs tracking-[0.04em] text-foreground/50">
                  {pillar.zhTitle}
                </p>

                <p className="mt-4a text-sm leading-[1.7] text-foreground/70">
                  {pillar.body}
                </p>
                <p className="mt-3 text-xs leading-[1.7] text-foreground/45">
                  {pillar.zhBody}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
