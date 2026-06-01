import { useLang } from "@/i18n/LanguageProvider";
import { GraduationCap, Users, Brain } from "lucide-react";

const COPY = {
  en: {
    eyebrow: "Comprehensive Support",
    title: "The Family Ecosystem Approach",
    cards: [
      {
        title: "Mainstream School Integration",
        body: "Navigating the highly competitive HK school system. From early intervention (ages 2–4) to executing Individualized Education Programs (IEPs), I collaborate directly with educators to ensure your child thrives in the classroom.",
      },
      {
        title: "Domestic Helper & Parent Training",
        body: "Therapy shouldn't stop when the session ends. Using Behavioral Skills Training (BST) and live role-play, I provide specialized, hands-on training for parents and domestic helpers to manage behaviors consistently at home.",
      },
      {
        title: "ABA Blended with Floortime®",
        body: "Moving beyond traditional rigid therapy. I utilize a rare blend of data-driven Applied Behavior Analysis (ABA) and child-led DIR Floortime® to foster emotional regulation, social thinking, and genuine connection.",
      },
    ],
  },
  zh: {
    eyebrow: "全面支援",
    title: "家庭生態系統支援方案",
    cards: [
      {
        title: "主流學校融合支援",
        body: "帶領家庭穿梭香港競爭激烈的學校體系。從早期介入（2–4歲）到執行個別化教育計劃（IEP），我直接與教育工作者合作，確保你的孩子在校園茁壯成長。",
      },
      {
        title: "家傭與家長培訓",
        body: "治療不應在課堂結束時停止。我運用行為技巧訓練（BST）及實景角色扮演，為家長與家傭提供專業、實務導向的培訓，讓家庭日常中的行為管理保持一致。",
      },
      {
        title: "ABA 結合 Floortime®",
        body: "超越傳統僵化的治療模式。我將數據主導的應用行為分析（ABA）與以孩子為中心的 DIR Floortime® 罕有地結合，促進情緒調節、社交思維與真實連結。",
      },
    ],
  },
} as const;

const ICONS = [GraduationCap, Users, Brain];

export function FamilyEcosystemSection() {
  const { lang } = useLang();
  const isZh = lang === "zh-HK";
  const c = isZh ? COPY.zh : COPY.en;

  return (
    <section className="border-b border-hairline">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="fade-up mb-14 md:mb-20">
          <p className="text-[10px] uppercase tracking-[0.24em] text-foreground/55">
            {c.eyebrow}
          </p>
          <h2 className="mt-5 font-display text-3xl leading-tight tracking-[-0.01em] text-foreground md:text-4xl">
            {c.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {c.cards.map((card, i) => {
            const Icon = ICONS[i];
            return (
              <div
                key={card.title}
                className="fade-up border border-foreground/10 bg-background p-8 md:p-10"
                style={{ animationDelay: `${120 + i * 60}ms` }}
              >
                <Icon
                  size={28}
                  strokeWidth={1.5}
                  className="text-primary/80"
                  aria-hidden
                />
                <h3 className="mt-6 font-display text-xl leading-tight tracking-[-0.01em] text-foreground md:text-[1.35rem]">
                  {card.title}
                </h3>
                <p className="mt-4 text-sm leading-[1.8] text-foreground/75">
                  {card.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
