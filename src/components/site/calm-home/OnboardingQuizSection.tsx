import { useState } from "react";
import { useLang } from "@/i18n/LanguageProvider";

type Question = {
  title: { en: string; zh: string };
  options: { en: string; zh: string }[];
};

const QUESTIONS: Question[] = [
  {
    title: {
      en: "Which landscape captures your current home vibe?",
      zh: "哪一個情境最貼近您現時的家庭氣氛？",
    },
    options: [
      {
        en: '"The High-Stakes Pressure Cooker" — Caught in local academic competition, feeling stressed and hurried.',
        zh: "「步步為營嘅溫室」—— 被本地升學或催谷氣氛包圍，感到焦慮與匆忙。",
      },
      {
        en: '"The Relational Retreat" — Prioritizing secure connection, but feeling isolated from community support.',
        zh: "「溫暖但孤立的小島」—— 極力想維持溫和親密的關係，卻感到缺乏同路人支持。",
      },
      {
        en: '"The Third Way Dream" — Wanting relational security AND clear developmental progress, but struggling to balance.',
        zh: "「尋求第三條出路」—— 渴望同時擁有臨床實用的行為方案，與溫暖安穩的親子關係。",
      },
    ],
  },
  {
    title: {
      en: "When a meltdown happens, what's your instinct?",
      zh: "當孩子崩潰時，你的第一反應通常是？",
    },
    options: [
      { en: "Set a firm limit and ride it out.", zh: "立即設下界線，等情緒過去。" },
      { en: "Hold them close and co-regulate first.", zh: "先抱緊佢，一齊平復情緒。" },
      { en: "Honestly? I freeze and second-guess myself.", zh: "坦白講，我會僵住、不停懷疑自己。" },
    ],
  },
  {
    title: {
      en: "What do you wish you had more of?",
      zh: "你最希望多一點的是什麼？",
    },
    options: [
      { en: "A clear behavior plan I can actually follow.", zh: "一份我真正跟得到的行為方案。" },
      { en: "Confidence that I'm not breaking my child.", zh: "確信我冇傷害到我嘅孩子。" },
      { en: "A community of parents who get it.", zh: "一群真正明白你的同路家長。" },
    ],
  },
  {
    title: {
      en: "How does your child experience school or daycare?",
      zh: "孩子在學校或托管的狀態如何？",
    },
    options: [
      { en: "Thriving academically, struggling socially.", zh: "學業亮眼，但社交有困難。" },
      { en: "Anxious, withdrawn, or shutting down.", zh: "焦慮、退縮或經常封閉自己。" },
      { en: "Bright at home, dysregulated in groups.", zh: "在家活躍開朗，到群體就失調。" },
    ],
  },
  {
    title: {
      en: "Where would you love us to meet you first?",
      zh: "你希望我們從哪裡開始陪伴你？",
    },
    options: [
      { en: "A private 1:1 consultation with Charming.", zh: "與 Charming 私人一對一諮詢。" },
      { en: "A small parent workshop cohort.", zh: "小組家長工作坊。" },
      { en: "Just letters and resources to begin.", zh: "先收取信件與資源，慢慢開始。" },
    ],
  },
];

export function OnboardingQuizSection() {
  const { lang } = useLang();
  const isZh = lang === "zh-HK";
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});

  const total = QUESTIONS.length;
  const q = QUESTIONS[step];
  const progress = Math.round(((step + 1) / total) * 100);

  const select = (i: number) => setAnswers((a) => ({ ...a, [step]: i }));
  const next = () => setStep((s) => Math.min(total - 1, s + 1));
  const prev = () => setStep((s) => Math.max(0, s - 1));

  return (
    <section className="journal-quiz-container charming-theme">
      <div className="quiz-journal-wrapper">
        <div className="journal-bookmark">
          {isZh ? "CharmingBCBA × SDFK · 旅程起點" : "CharmingBCBA × SDFK · A Reflection Journey"}
        </div>

        <div className="quiz-header">
          <span className="quiz-step-count">
            {isZh ? `第 ${step + 1} 題 / 共 ${total} 題` : `Reflection ${step + 1} of ${total}`}
          </span>
          <h2 className="quiz-main-title">{isZh ? q.title.zh : q.title.en}</h2>

          <div className="crayon-progress-bar-wrap" aria-hidden="true">
            <div className="crayon-line" />
            <div className="crayon-fill" style={{ width: `${progress}%` }} />
          </div>
        </div>

        <div className="quiz-options-flow">
          {q.options.map((opt, i) => {
            const selected = answers[step] === i;
            return (
              <button
                type="button"
                key={i}
                onClick={() => select(i)}
                className={"quiz-option-card" + (selected ? " selected" : "")}
                aria-pressed={selected}
              >
                <div className="option-hand-bubble" aria-hidden="true">
                  <span className="bubble-check" />
                </div>
                <div className="option-content">
                  <p className="option-text">{isZh ? opt.zh : opt.en}</p>
                </div>
              </button>
            );
          })}
        </div>

        <div className="quiz-navigation-footer">
          <button
            type="button"
            className="quiz-nav-btn btn-prev"
            onClick={prev}
            disabled={step === 0}
          >
            ➔ {isZh ? "返回" : "Go Back"}
          </button>

          <button
            type="button"
            className="quiz-nav-btn btn-next"
            onClick={next}
            disabled={answers[step] === undefined || step === total - 1}
          >
            {step === total - 1
              ? isZh
                ? "完成反思"
                : "Finish Reflection"
              : isZh
                ? "下一題"
                : "Next Reflection"}
            <svg
              className="btn-underline-svg"
              viewBox="0 0 160 10"
              fill="none"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M4 6C40 9 100 3 156 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
