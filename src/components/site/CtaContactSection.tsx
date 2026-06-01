import { useState, type FormEvent } from "react";
import { useLang } from "@/i18n/LanguageProvider";
import { toast } from "sonner";

const COPY = {
  en: {
    eyebrow: "— Begin",
    headline: "Ready to Align Your Family Ecosystem?",
    sub: "Whether you are preparing for primary school interviews or need your domestic helper trained in positive behavior support, let's build a plan that works for your family's unique needs in Hong Kong.",
    name: "Parent Name",
    email: "Email Address",
    age: "Child's Age",
    goal: "Primary Goal",
    goalPlaceholder: "Select a focus area",
    goals: [
      "School Readiness",
      "Helper / Parent Training",
      "Early Intervention",
      "General Consultation",
    ],
    submit: "Request Initial Consultation",
    success: "Thank you. Charming's team will be in touch within two working days.",
    note: "Replies sent within 2 working days · Bilingual intake available",
  },
  zh: {
    eyebrow: "— 開始",
    headline: "準備好為您的家庭生態系統建立一致性了嗎？",
    sub: "無論您正準備小學面試，還是希望為家中外傭提供正向行為支援訓練，讓我們一起為您香港家庭的獨特需要，制定切實可行的方案。",
    name: "家長姓名",
    email: "電郵地址",
    age: "孩子年齡",
    goal: "主要目標",
    goalPlaceholder: "選擇諮詢重點",
    goals: [
      "升學準備",
      "外傭／家長訓練",
      "早期介入",
      "一般諮詢",
    ],
    submit: "預約初次諮詢",
    success: "感謝您。Charming 團隊將於兩個工作天內與您聯絡。",
    note: "兩個工作天內回覆 · 提供雙語接洽",
  },
} as const;

export function CtaContactSection() {
  const { lang } = useLang();
  const c = COPY[lang === "en" ? "en" : "zh"];
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      toast.success(c.success);
    }, 600);
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden"
      style={{ backgroundColor: "#1f2a44", color: "#F8F5F0" }}
    >
      {/* Soft glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, rgba(182,145,70,0.18), transparent 70%)",
        }}
      />
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-14 px-6 py-24 md:grid-cols-12 md:py-32">
        <div className="md:col-span-5">
          <p
            className="eyebrow fade-up"
            style={{ color: "rgba(248,245,240,0.65)", animationDelay: "0ms" }}
          >
            {c.eyebrow}
          </p>
          <h2
            className="fade-up mt-5 font-display text-4xl leading-[1.05] md:text-5xl"
            style={{ animationDelay: "80ms" }}
          >
            {c.headline}
          </h2>
          <p
            className="fade-up mt-6 max-w-md text-base leading-relaxed"
            style={{ color: "rgba(248,245,240,0.78)", animationDelay: "160ms" }}
          >
            {c.sub}
          </p>
          <p
            className="fade-up mt-10 text-xs tracking-[0.18em] uppercase"
            style={{ color: "rgba(248,245,240,0.55)", animationDelay: "240ms" }}
          >
            {c.note}
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="fade-up md:col-span-6 md:col-start-7"
          style={{ animationDelay: "200ms" }}
        >
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
            <Field label={c.name}>
              <input
                required
                name="name"
                type="text"
                maxLength={120}
                autoComplete="name"
                className="cta-input"
              />
            </Field>
            <Field label={c.email}>
              <input
                required
                name="email"
                type="email"
                maxLength={200}
                autoComplete="email"
                className="cta-input"
              />
            </Field>
            <Field label={c.age}>
              <input
                required
                name="age"
                type="number"
                min={0}
                max={21}
                inputMode="numeric"
                className="cta-input"
              />
            </Field>
            <Field label={c.goal}>
              <select required name="goal" defaultValue="" className="cta-input cta-select">
                <option value="" disabled>
                  {c.goalPlaceholder}
                </option>
                {c.goals.map((g) => (
                  <option key={g} value={g} style={{ color: "#2C2C2C" }}>
                    {g}
                  </option>
                ))}
              </select>
            </Field>
          </div>

          <div className="mt-10">
            <button
              type="submit"
              disabled={submitting}
              className="group inline-flex items-center gap-3 border px-7 py-4 text-sm tracking-wide transition-colors disabled:opacity-60"
              style={{
                borderColor: "#F8F5F0",
                color: "#1f2a44",
                backgroundColor: "#F8F5F0",
              }}
            >
              {submitting ? "…" : c.submit}
              <span aria-hidden className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </button>
          </div>
        </form>
      </div>

      <style>{`
        .cta-input {
          width: 100%;
          background: transparent;
          color: #F8F5F0;
          border: 0;
          border-bottom: 1px solid rgba(248,245,240,0.28);
          padding: 0.65rem 0 0.7rem;
          font-size: 0.98rem;
          outline: none;
          transition: border-color 200ms ease;
          border-radius: 0;
        }
        .cta-input::placeholder { color: rgba(248,245,240,0.45); }
        .cta-input:focus { border-bottom-color: #B69146; }
        .cta-select { appearance: none; background-image: none; padding-right: 1.5rem; }
        .cta-input option { background-color: #F8F5F0; }
      `}</style>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span
        className="block text-[0.7rem] uppercase tracking-[0.18em]"
        style={{ color: "rgba(248,245,240,0.6)" }}
      >
        {label}
      </span>
      <div className="mt-1">{children}</div>
    </label>
  );
}
