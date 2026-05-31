export type Lang = "en" | "zh-HK" | "zh-TW";

export const LANGS: { code: Lang; label: string; htmlLang: string }[] = [
  { code: "en", label: "EN", htmlLang: "en" },
  { code: "zh-HK", label: "粵", htmlLang: "zh-HK" },
  { code: "zh-TW", label: "繁", htmlLang: "zh-Hant-TW" },
];

export type Dict = {
  brand: { name: string; tag: string };
  nav: { home: string; about: string; services: string; tips: string; contact: string };
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
  nav: { home: "Home", about: "About", services: "Services", tips: "Tips", contact: "Contact" },
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
  brand: { name: "包芷晴 BCBA", tag: "三語 BCBA · 香港" },
  nav: { home: "首頁", about: "關於", services: "服務", tips: "育兒貼士", contact: "聯絡" },
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
};

const zhHans: Dict = {
  brand: { name: "包芷晴 BCBA", tag: "三语 BCBA · 香港" },
  nav: { home: "首页", about: "关于", services: "服务", tips: "育儿贴士", contact: "联系" },
  cta: { book: "预约咨询", learnMore: "了解更多", readTips: "阅读贴士", followAlong: "关注我们" },
  home: {
    eyebrow: "国际认证行为分析师",
    headline: "以实证为本，陪伴香港家庭走每一步。",
    sub: "三语 ABA 治疗与家长辅导 — 以研究为基础，为你的孩子量身设计。",
    introTitle: "一个围绕你家庭而建的执业。",
    intro:
      "我以英文、广东话及普通话与香港的家长和孩子合作。无论你正面对新确诊、希望找到真正适合家中环境的策略，或为孩子寻找结构化的治疗，每节都会以协作的方式进行 — 而不是冷冰冰的临床安排。",
    featuredEyebrow: "01 — 执业笔记",
    featuredTitle: "来自实战的贴士。",
    servicesEyebrow: "02 — 服务内容",
    servicesTitle: "两种合作方式。",
    servicesBody:
      "单次家长咨询提供聚焦指导；持续 ABA 治疗则带来长期进展。两者均可于香港面授或线上进行。",
  },
  about: {
    eyebrow: "关于",
    title: "你好，我是 Charming。",
    lead:
      "我是驻香港的国际认证行为分析师（BCBA），以三语陪伴家庭，面对自闭症、发展差异与日常育儿挑战。",
    bio: [
      "我接受的训练聚焦于自然情境、家长主导的应用行为分析。过去十年，我于香港及海外的诊所、学校与家庭中工作，支援家庭走过早期介入、入学准备及之后的种种过渡。",
      "我的信念很简单：当最亲近孩子的人感到有信心、被支持并掌握合适的策略，行为改变才会真正持久。",
    ],
    credentialsTitle: "专业资历",
    credentials: [
      "国际认证行为分析师（BCBA）",
      "应用行为分析文学硕士",
      "香港注册社工",
      "逾十年陪伴神经多样性儿童及其家庭的经验",
    ],
    languagesTitle: "语言",
    languages: ["英文", "广东话", "普通话"],
    approachTitle: "理念",
    approach:
      "以游戏为本、家长主导的自然情境介入。每个计划都由你家庭真正需要的事开始 — 再层层加入实证为本的策略。",
  },
  services: {
    eyebrow: "服务",
    title: "我们可以这样合作。",
    lead:
      "无论你需要针对单一挑战的聚焦指导，或长期持续的支援，每次合作都会围绕你家庭的需要而设计。",
    items: [
      {
        number: "01",
        name: "家长咨询",
        forWho: "适合希望就某个特定行为、过渡或策略获得指引的家长。",
        format: "60–90 分钟 · 面授或线上 · 附后续整理",
        description:
          "一次聚焦的对话，一同梳理正在发生的事、找出背后的成因，并带走两至三个本周即可开始实践的具体策略。",
      },
      {
        number: "02",
        name: "ABA 治疗课",
        forWho: "适合需要持续、结构化行为支援的孩子及家庭。",
        format: "每周 60 分钟 · 香港面授或混合模式 · 个性化计划",
        description:
          "围绕孩子目标而设计的个性化 ABA 计划 — 沟通、自理、社交技巧、入学准备。家长是每节的合作伙伴，并会定期检视进度与方向。",
      },
    ],
  },
  tips: {
    eyebrow: "育儿贴士",
    title: "把 ABA，化作日常。",
    lead:
      "来自执业现场的短篇实用笔记。想看更长的文章与每周更新，欢迎在 Instagram、Facebook 及 Threads 关注我。",
    items: [
      {
        number: "01",
        title: "捕捉平静的一刻。",
        body: "当孩子做出你希望看见更多的行为时，请具体地赞赏 — 而不只是在他停止你不喜欢的行为时才开口。「我好喜欢你用温柔的手」比「不准打人」教得更多。",
      },
      {
        number: "02",
        title: "先…然后…。",
        body: "用简单的「先穿鞋，然后去公园」结构，把较不喜欢的任务与喜欢的事连起来。配合视觉提示，可预测性会让所有人都更轻松。",
      },
      {
        number: "03",
        title: "把门槛调低，才能再调高。",
        body: "如果一个要求总是以崩溃收场，那这要求太大了。把它拆细到孩子可以成功，然后再逐步加回难度。",
      },
      {
        number: "04",
        title: "行为，就是沟通。",
        body: "在问「怎样令这行为停止」之前，先问「这行为在告诉我什么」。逃避、注意、获取、感官 — 功能会引导你的回应。",
      },
      {
        number: "05",
        title: "强化不是贿赂。",
        body: "贿赂发生在问题行为开始之后；强化是事前计划好的，连系到清晰的期望，并随着新行为稳固而逐步淡出。",
      },
      {
        number: "06",
        title: "先修复，再说教。",
        body: "事情失控时，先安抚，再修复，最后才教。说教只在平静的神经系统上才听得进去 — 包括我们自己的。",
      },
    ],
    socialEyebrow: "03 — 关注我们",
    socialTitle: "更多贴士，每周更新。",
    socialBody: "我会在 Instagram、Facebook 及 Threads 分享 ABA 育儿短贴士、治疗幕后与常见问题解答。",
    handles: { ig: "@charmingbcba", fb: "Charming Pau, BCBA", threads: "@charmingbcba" },
  },
  contact: {
    eyebrow: "联系",
    title: "预约一次见面。",
    lead: "请告诉我一点关于你家庭的情况，以及你正在寻找什么。我会于两个工作天内亲自回覆。",
    responseNote: "两个工作天内回覆 · charmingpau@sdfkhk.com",
    form: {
      name: "姓名",
      email: "电邮",
      phone: "电话",
      phoneOptional: "选填",
      preferredLang: "希望以哪种语言沟通",
      service: "你希望了解哪项服务？",
      serviceOptions: { consultation: "家长咨询", therapy: "ABA 治疗课", general: "一般查询" },
      childAge: "孩子年龄",
      childAgeOptional: "选填",
      contactMethod: "希望透过哪种方式联系",
      contactMethodOptions: { email: "电邮", phone: "电话", whatsapp: "WhatsApp" },
      message: "请告诉我你正在寻找什么",
      submit: "提交",
      submitting: "传送中…",
      success: "谢谢你 — 已收到你的请求。我会于两个工作天内亲自回覆。",
      errors: {
        name: "请填写你的姓名。",
        email: "请填写电邮。",
        emailInvalid: "请填写有效的电邮地址。",
        message: "请告诉我一点你正在寻找什么。",
      },
    },
  },
  footer: { rights: "版权所有。", followAlong: "关注我们", contact: "联系" },
};

export const DICTS: Record<Lang, Dict> = {
  en,
  "zh-HK": zhHant,
  "zh-TW": zhHant,
};
// zhHans kept for reference but not exposed
void zhHans;
