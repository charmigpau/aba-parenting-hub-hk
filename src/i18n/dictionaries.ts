export type Lang = "en" | "zh-HK";

export const LANGS: { code: Lang; label: string; htmlLang: string }[] = [
  { code: "en", label: "EN", htmlLang: "en" },
  { code: "zh-HK", label: "繁", htmlLang: "zh-Hant-HK" },
];

/**
 * Strict, clinically-vetted glossary shared across the site.
 * Hong Kong Traditional Chinese (繁體中文) — never Simplified.
 */
export const GLOSSARY = {
  en: {
    aba: "Applied Behavior Analysis (ABA)",
    bst: "Behavioral Skills Training (BST)",
    bcba: "Board Certified Behavior Analyst (BCBA)",
    sen: "Special Educational Needs (SEN)",
    relational_security: "Relational Security",
    parent_consult: "Parent Consultation",
    neuroscience: "Neuroscience",
    positive_reinforcement: "Positive Reinforcement",
    natural_teaching: "Natural Environment Training (NET)",
    discovery_call: "15-Minute Free Discovery Call",
    home_vibe_q: "Which landscape captures your current home vibe?",
    hk_third_way: "The HK Third Way",
  },
  "zh-HK": {
    aba: "應用行為分析 (ABA)",
    bst: "行為技能培訓 (BST)",
    bcba: "國際認證行為分析師 (BCBA)",
    sen: "特殊教育需要 (SEN)",
    relational_security: "關係安全感",
    parent_consult: "家長諮詢與指導",
    neuroscience: "腦神經科學",
    positive_reinforcement: "正向增強",
    natural_teaching: "自然環境教學 (NET)",
    discovery_call: "15分鐘免費探索諮詢",
    home_vibe_q: "哪一個情境最貼近您現時的家庭氣氛？",
    hk_third_way: "香港育兒第三條路",
  },
} as const;

export type GlossaryKey = keyof typeof GLOSSARY.en;

/**
 * Colloquial Cantonese (廣東話) overlays — shown as a soft secondary
 * line under formal 繁體中文 copy on parent-facing prompts. Keys are
 * referenced by components that want a warm, local fallback voice.
 */
export const COLLOQUIAL: Record<string, string> = {
  home_vibe_q: "你而家屋企嘅氣氛，最似邊一幅畫？",
  discovery_call: "傾15分鐘，傾下你屋企嘅情況，免費。",
  relational_security:
    "等我哋一齊喺高壓嘅環境下，同仔女建立最真摯、最安穩嘅連繫。",
  parent_consult: "搵個專業人士，傾下你而家頭痛緊嘅育兒難題。",
  hk_third_way: "唔使硬谷，又唔使放軟手腳 — 香港家長嘅第三條路。",
};

export type Dict = {
  brand: { name: string; tag: string };
  nav: { home: string; about: string; services: string; tips: string; contact: string; resources: string; clinic: string };
  cta: { book: string; learnMore: string; readTips: string; followAlong: string };
  home: {
    eyebrow: string;
    headline: string;
    sub: string;
    introTitle: string;
    intro: string;
    featuredEyebrow: string;
    featuredTitle: string;
    servicesEyebrow: string;
    servicesTitle: string;
    servicesBody: string;
    heroCtaBrand: string;
    heroCtaClinical: string;
  };
  about: {
    eyebrow: string;
    title: string;
    lead: string;
    bio: string[];
    credentialsTitle: string;
    credentials: string[];
    languagesTitle: string;
    languages: string[];
    approachTitle: string;
    approach: string;
  };
  services: {
    eyebrow: string;
    title: string;
    lead: string;
    items: {
      number: string;
      name: string;
      forWho: string;
      format: string;
      description: string;
    }[];
  };
  tips: {
    eyebrow: string;
    title: string;
    lead: string;
    items: { number: string; title: string; body: string }[];
    socialEyebrow: string;
    socialTitle: string;
    socialBody: string;
    handles: { ig: string; fb: string; threads: string };
  };
  contact: {
    eyebrow: string;
    title: string;
    lead: string;
    responseNote: string;
    form: {
      name: string;
      email: string;
      phone: string;
      phoneOptional: string;
      preferredLang: string;
      service: string;
      serviceOptions: { consultation: string; therapy: string; general: string };
      childAge: string;
      childAgeOptional: string;
      contactMethod: string;
      contactMethodOptions: { email: string; phone: string; whatsapp: string };
      message: string;
      submit: string;
      submitting: string;
      success: string;
      errors: {
        name: string;
        email: string;
        emailInvalid: string;
        message: string;
      };
    };
  };
  footer: {
    rights: string;
    followAlong: string;
    contact: string;
  };
};

const en: Dict = {
  brand: { name: "Charming Pau, BCBA", tag: "Trilingual BCBA · Hong Kong" },
  nav: { home: "Home", about: "About", services: "Services", tips: "Tips", contact: "Contact", resources: "Resources", clinic: "Clinic" },
  cta: { book: "Book a consultation", learnMore: "Learn more", readTips: "Read tips", followAlong: "Follow along" },
  home: {
    eyebrow: "Board Certified Behavior Analyst",
    headline: "Evidence-based support for families across Hong Kong.",
    sub: "Compassionate, trilingual ABA therapy and parent coaching — rooted in research, shaped around your child.",
    introTitle: "A practice built around your family.",
    intro:
      "I work with parents and children across Hong Kong in English, Cantonese and Mandarin. Whether you are navigating a new diagnosis, looking for strategies that actually fit your home, or seeking structured therapy for your child, sessions are designed to feel collaborative — never clinical.",
    featuredEyebrow: "01 — Field notes",
    featuredTitle: "Tips from the practice.",
    servicesEyebrow: "02 — What I offer",
    servicesTitle: "Two ways to work together.",
    servicesBody:
      "Single-session parent consultations for focused guidance, or ongoing ABA therapy for sustained progress. Both available in-person in HK and online.",
    heroCtaBrand: "Explore Resources & Community",
    heroCtaClinical: "Clinical Services & Therapy",
  },
  about: {
    eyebrow: "About",
    title: "Hello, I’m Charming.",
    lead:
      "A Board Certified Behavior Analyst based in Hong Kong, working trilingually with families navigating autism, developmental differences and everyday parenting challenges.",
    bio: [
      "I trained in applied behavior analysis with a focus on naturalistic, parent-mediated approaches. Over the past decade I have worked in clinics, schools and homes across Hong Kong and abroad, supporting families through early intervention, school readiness and the transitions that come after.",
      "My belief is simple: behavior change sticks when the people closest to the child are confident, supported and equipped with strategies that fit their real life.",
    ],
    credentialsTitle: "Credentials",
    credentials: [
      "Board Certified Behavior Analyst (BCBA)",
      "M.A. in Applied Behavior Analysis",
      "Registered Social Worker (HK)",
      "10+ years working with neurodivergent children and their families",
    ],
    languagesTitle: "Languages",
    languages: ["English", "Cantonese (廣東話)", "Mandarin (普通話)"],
    approachTitle: "Approach",
    approach:
      "Naturalistic, play-based and parent-led. Every plan starts with what your family actually needs — then we layer in the evidence-based strategies that move the needle.",
  },
  services: {
    eyebrow: "Services",
    title: "How we can work together.",
    lead:
      "Whether you need focused guidance on a single challenge or sustained support over time, every engagement is designed around your family.",
    items: [
      {
        number: "01",
        name: "Parent Consultation",
        forWho: "For parents seeking guidance on a specific behavior, transition or strategy.",
        format: "60–90 minute session · in-person or online · follow-up summary included",
        description:
          "A focused, single-session conversation to unpack what is happening, identify what is driving it, and leave with two or three concrete strategies you can begin using this week.",
      },
      {
        number: "02",
        name: "ABA Therapy Sessions",
        forWho: "For children and families seeking ongoing, structured behavior support.",
        format: "Weekly 60-minute sessions · in-person in HK or hybrid · individualized program",
        description:
          "Individualized ABA programming built around your child’s goals — communication, daily living, social skills, school readiness. Parents are partners in every session, with regular review of progress and direction.",
      },
    ],
  },
  tips: {
    eyebrow: "Tips",
    title: "ABA parenting, distilled.",
    lead:
      "Short, practical notes from the practice. For longer threads and weekly posts, follow along on Instagram, Facebook and Threads.",
    items: [
      {
        number: "01",
        title: "Catch the calm.",
        body: "Praise specifically when your child is doing the thing you want to see more of — not just when they stop doing what you don’t. ‘I love how you’re using your gentle hands’ teaches more than ‘stop hitting’.",
      },
      {
        number: "02",
        title: "First / then.",
        body: "Pair a less-preferred task with a preferred one using a simple ‘first shoes, then park’ structure. Visuals help. Predictability lowers the stakes for everyone.",
      },
      {
        number: "03",
        title: "Lower the bar to raise it.",
        body: "If a request reliably ends in meltdown, the request is too big. Break it down until your child can succeed, then layer the difficulty back in gradually.",
      },
      {
        number: "04",
        title: "Behavior is communication.",
        body: "Ask what the behavior is telling you before asking how to stop it. Escape, attention, access, sensory — the function shapes the response.",
      },
      {
        number: "05",
        title: "Reinforcement is not bribery.",
        body: "Bribery happens after a problem behavior starts. Reinforcement is planned in advance, tied to a clear expectation, and faded over time as the new behavior takes hold.",
      },
      {
        number: "06",
        title: "Repair, don’t lecture.",
        body: "When things go sideways, regulate first, repair second, teach third. Lectures land best on calm nervous systems — including ours.",
      },
    ],
    socialEyebrow: "03 — Follow along",
    socialTitle: "More tips, weekly.",
    socialBody:
      "I share short ABA parenting tips, behind-the-scenes from sessions and answers to common questions across Instagram, Facebook and Threads.",
    handles: { ig: "@charmingbcba", fb: "Charming Pau, BCBA", threads: "@charmingbcba" },
  },
  contact: {
    eyebrow: "Contact",
    title: "Request an appointment.",
    lead:
      "Tell me a little about your family and what you’re looking for. I’ll reply personally within two business days to arrange a time.",
    responseNote: "Responses within 2 business days · charmingpau@sdfkhk.com",
    form: {
      name: "Your name",
      email: "Email",
      phone: "Phone",
      phoneOptional: "Optional",
      preferredLang: "Preferred language",
      service: "What are you interested in?",
      serviceOptions: {
        consultation: "Parent Consultation",
        therapy: "ABA Therapy Sessions",
        general: "General enquiry",
      },
      childAge: "Child’s age",
      childAgeOptional: "Optional",
      contactMethod: "Preferred contact method",
      contactMethodOptions: { email: "Email", phone: "Phone", whatsapp: "WhatsApp" },
      message: "Tell me a bit about what you’re looking for",
      submit: "Send request",
      submitting: "Sending…",
      success:
        "Thank you — your request has been received. I’ll reply personally within two business days.",
      errors: {
        name: "Please enter your name.",
        email: "Please enter your email.",
        emailInvalid: "Please enter a valid email address.",
        message: "Please tell me a little about what you’re looking for.",
      },
    },
  },
  footer: {
    rights: "All rights reserved.",
    followAlong: "Follow along",
    contact: "Contact",
  },
};

const zhHant: Dict = {
  brand: { name: "鮑正敏 BCBA", tag: "三語 BCBA · 香港" },
  nav: { home: "首頁", about: "關於", services: "服務", tips: "育兒貼士", contact: "聯絡", resources: "資源", clinic: "診所" },
  cta: { book: "預約諮詢", learnMore: "了解更多", readTips: "閱讀貼士", followAlong: "追蹤我們" },
  home: {
    eyebrow: "國際認證行為分析師",
    headline: "以實證為本，陪伴香港家庭走每一步。",
    sub: "三語 ABA 治療與家長輔導 — 以研究為基礎，為你的孩子量身設計。",
    introTitle: "一個圍繞你家庭而建的執業。",
    intro:
      "我以英文、廣東話及普通話與香港的家長及孩子合作。無論你正面對新確診、希望找到真正適合家中環境的策略，或為孩子尋找結構化的治療，每節都會以協作的方式進行 — 而非冷冰冰的臨床安排。",
    featuredEyebrow: "01 — 執業筆記",
    featuredTitle: "來自實戰的貼士。",
    servicesEyebrow: "02 — 服務內容",
    servicesTitle: "兩種合作方式。",
    servicesBody:
      "單次家長諮詢提供聚焦指導；持續 ABA 治療則帶來長期進展。兩者均可於香港面授或線上進行。",
    heroCtaBrand: "探索資源與社群",
    heroCtaClinical: "臨床服務與治療",
  },
  about: {
    eyebrow: "關於",
    title: "你好，我是 Charming。",
    lead:
      "我是駐香港的國際認證行為分析師（BCBA），以三語陪伴家庭，面對自閉症、發展差異與日常育兒挑戰。",
    bio: [
      "我接受的訓練聚焦於自然情境、家長主導的應用行為分析。過去十年，我於香港及海外的診所、學校與家庭中工作，支援家庭走過早期介入、入學準備及之後的種種過渡。",
      "我的信念很簡單：當最親近孩子的人感到有信心、被支持並掌握合適的策略，行為改變才會真正持久。",
    ],
    credentialsTitle: "專業資歷",
    credentials: [
      "國際認證行為分析師（BCBA）",
      "應用行為分析文學碩士",
      "香港註冊社工",
      "逾十年陪伴神經多樣性兒童及其家庭的經驗",
    ],
    languagesTitle: "語言",
    languages: ["英文", "廣東話", "普通話"],
    approachTitle: "理念",
    approach:
      "以遊戲為本、家長主導的自然情境介入。每個計劃都由你家庭真正需要的事開始 — 再層層加入實證為本的策略。",
  },
  services: {
    eyebrow: "服務",
    title: "我們可以這樣合作。",
    lead:
      "無論你需要針對單一挑戰的聚焦指導，或長期持續的支援，每次合作都會圍繞你家庭的需要而設計。",
    items: [
      {
        number: "01",
        name: "家長諮詢",
        forWho: "適合希望就某個特定行為、過渡或策略獲得指引的家長。",
        format: "60–90 分鐘 · 面授或線上 · 附後續整理",
        description:
          "一次聚焦的對話，一同梳理正在發生的事、找出背後的成因，並帶走兩至三個本週即可開始實踐的具體策略。",
      },
      {
        number: "02",
        name: "ABA 治療課",
        forWho: "適合需要持續、結構化行為支援的孩子及家庭。",
        format: "每週 60 分鐘 · 香港面授或混合模式 · 個人化計劃",
        description:
          "圍繞孩子目標而設計的個人化 ABA 計劃 — 溝通、自理、社交技巧、入學準備。家長是每節的合作夥伴，並會定期檢視進度與方向。",
      },
    ],
  },
  tips: {
    eyebrow: "育兒貼士",
    title: "把 ABA，化作日常。",
    lead:
      "來自執業現場的短篇實用筆記。想看更長的文章與每週更新，歡迎在 Instagram、Facebook 及 Threads 追蹤我。",
    items: [
      {
        number: "01",
        title: "捕捉平靜的一刻。",
        body: "當孩子做出你希望看見更多的行為時，請具體地讚賞 — 而不只是在他停止你不喜歡的行為時才開口。「我好喜歡你用溫柔的手」比「不准打人」教得更多。",
      },
      {
        number: "02",
        title: "先…然後…。",
        body: "用簡單的「先穿鞋，然後去公園」結構，把較不喜歡的任務與喜歡的事連起來。配合視覺提示，可預測性會讓所有人都更輕鬆。",
      },
      {
        number: "03",
        title: "把門檻調低，才能再調高。",
        body: "如果一個要求總是以崩潰收場，那這要求太大了。把它拆細到孩子可以成功，然後再逐步加回難度。",
      },
      {
        number: "04",
        title: "行為，就是溝通。",
        body: "在問「怎樣令這行為停止」之前，先問「這行為在告訴我什麼」。逃避、注意、獲取、感官 — 功能會引導你的回應。",
      },
      {
        number: "05",
        title: "強化不是賄賂。",
        body: "賄賂發生在問題行為開始之後；強化是事前計劃好的，連繫到清晰的期望，並隨着新行為穩固而逐步淡出。",
      },
      {
        number: "06",
        title: "先修復，再說教。",
        body: "事情失控時，先安撫，再修復，最後才教。說教只在平靜的神經系統上才聽得進去 — 包括我們自己的。",
      },
    ],
    socialEyebrow: "03 — 追蹤我們",
    socialTitle: "更多貼士，每週更新。",
    socialBody:
      "我會在 Instagram、Facebook 及 Threads 分享 ABA 育兒短貼士、治療幕後與常見問題解答。",
    handles: { ig: "@charmingbcba", fb: "Charming Pau, BCBA", threads: "@charmingbcba" },
  },
  contact: {
    eyebrow: "聯絡",
    title: "預約一次見面。",
    lead: "請告訴我一點關於你家庭的情況，以及你正在尋找什麼。我會於兩個工作天內親自回覆。",
    responseNote: "兩個工作天內回覆 · charmingpau@sdfkhk.com",
    form: {
      name: "姓名",
      email: "電郵",
      phone: "電話",
      phoneOptional: "選填",
      preferredLang: "希望以哪種語言溝通",
      service: "你希望了解哪項服務？",
      serviceOptions: {
        consultation: "家長諮詢",
        therapy: "ABA 治療課",
        general: "一般查詢",
      },
      childAge: "孩子年齡",
      childAgeOptional: "選填",
      contactMethod: "希望透過哪種方式聯絡",
      contactMethodOptions: { email: "電郵", phone: "電話", whatsapp: "WhatsApp" },
      message: "請告訴我你正在尋找什麼",
      submit: "提交",
      submitting: "傳送中…",
      success: "謝謝你 — 已收到你的請求。我會於兩個工作天內親自回覆。",
      errors: {
        name: "請填寫你的姓名。",
        email: "請填寫電郵。",
        emailInvalid: "請填寫有效的電郵地址。",
        message: "請告訴我一點你正在尋找什麼。",
      },
    },
  },
  footer: { rights: "版權所有。", followAlong: "追蹤我們", contact: "聯絡" },
export const DICTS: Record<Lang, Dict> = {
  en,
  "zh-HK": zhHant,
};

