import { useMemo, useState, type FormEvent } from "react";

type AgeBracket = "2-4" | "4-9" | "other";
type Track = "workshop" | "1on1" | "both";

type FormState = {
  age: AgeBracket | "";
  // 2-4
  comm24: string[];
  notes24: string;
  // 4-9
  social49: string[];
  notes49: string;
  // outcome
  outcome: string;
  track: Track | "";
};

const EMPTY: FormState = {
  age: "",
  comm24: [],
  notes24: "",
  social49: [],
  notes49: "",
  outcome: "",
  track: "",
};

const AGE_OPTIONS: {
  id: AgeBracket;
  title: string;
  desc: string;
}[] = [
  {
    id: "2-4",
    title: "My child is 2 to 4 years old",
    desc: "Early milestones, functional language, and foundational routines.",
  },
  {
    id: "4-9",
    title: "My child is 4 to 9 years old",
    desc: "Social communication, peer dynamics, school readiness, and emotional regulation.",
  },
  {
    id: "other",
    title: "Other / Multiple children",
    desc: "A blended set of needs across siblings or ages.",
  },
];

const COMM_24 = [
  "Leads me by the hand or points to what they want rather than using words",
  "Uses single words or short phrases, but struggles to communicate when upset or overwhelmed",
  "Communicates fluently in everyday situations, but struggles to follow multi-step directions",
  "Pulls away, cries, or exhibits intense meltdowns when unable to express what they want",
];

const SOCIAL_49 = [
  "Understanding peer perspectives, sharing \u201Cflexible space,\u201D or compromising during play",
  "Navigating \u201Chidden rules\u201D in school, structured activities, or group settings",
  "Managing emotional regulation when plans change unexpectedly or transitions occur",
  "Sustaining conversational turn-taking or connecting meaningfully with friends",
];

const TRACK_OPTIONS: { id: Track; title: string; desc: string }[] = [
  {
    id: "workshop",
    title: "Interactive Parenting Workshops",
    desc: "Cohort-based learning and peer support.",
  },
  {
    id: "1on1",
    title: "Bespoke 1:1 Behavioral Consultation",
    desc: "High-touch, customized behavior plans.",
  },
  { id: "both", title: "Both pathways", desc: "I'd like guidance on the right blend." },
];

export function IntakeFormSection() {
  const [data, setData] = useState<FormState>(EMPTY);
  const [step, setStep] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  // Steps depend on age selection
  const steps = useMemo(() => {
    const base = ["Your child", "Outcome"];
    if (data.age === "2-4") return ["Your child", "Communication", "Outcome"];
    if (data.age === "4-9") return ["Your child", "Social dynamics", "Outcome"];
    return base;
  }, [data.age]);

  const update = <K extends keyof FormState>(k: K, v: FormState[K]) =>
    setData((d) => ({ ...d, [k]: v }));

  const toggleArr = (k: "comm24" | "social49", value: string) =>
    setData((d) => {
      const has = d[k].includes(value);
      return { ...d, [k]: has ? d[k].filter((v) => v !== value) : [...d[k], value] };
    });

  const isLastStep = step === steps.length - 1;

  const canContinue =
    (step === 0 && data.age !== "") ||
    (step === 1 && data.age === "other") ||
    (step === 1 && data.age === "2-4") || // checkboxes optional, notes optional
    (step === 1 && data.age === "4-9") ||
    (step === steps.length - 1 && data.outcome.trim().length > 4 && data.track !== "");

  function next() {
    if (isLastStep) return;
    setStep((s) => Math.min(steps.length - 1, s + 1));
  }
  function back() {
    setStep((s) => Math.max(0, s - 1));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!isLastStep) {
      next();
      return;
    }
    if (!canContinue) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSent(true);
    }, 700);
  }

  return (
    <section
      id="intake"
      className="scroll-mt-24 relative overflow-hidden"
      style={{ backgroundColor: "#1f2a44", color: "#F8F5F0" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(55% 45% at 50% 0%, rgba(182,145,70,0.22), transparent 70%)",
        }}
      />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-16 px-6 py-24 md:grid-cols-12 md:py-32">
        {/* Left intro */}
        <div className="md:col-span-5">
          <p
            className="text-[0.7rem] uppercase tracking-[0.22em]"
            style={{ color: "rgba(248,245,240,0.6)" }}
          >
            — Begin Your Application
          </p>
          <h2 className="mt-5 font-display text-4xl leading-[1.05] md:text-5xl">
            A quiet conversation, before anything else.
          </h2>
          <p
            className="mt-6 max-w-md text-[1.02rem] leading-relaxed"
            style={{ color: "rgba(248,245,240,0.78)" }}
          >
            A few thoughtful questions help Charming understand your child's world.
            Every application is personally reviewed within 24–48 hours — no
            automated funnels, no sales calls.
          </p>

          {!sent && (
            <ol className="mt-10 space-y-3 text-sm">
              {steps.map((label, i) => {
                const state = i < step ? "done" : i === step ? "active" : "todo";
                return (
                  <li key={label} className="flex items-center gap-3">
                    <span
                      className="inline-flex h-6 w-6 items-center justify-center rounded-full border text-[11px]"
                      style={{
                        borderColor:
                          state === "todo" ? "rgba(248,245,240,0.25)" : "#B69146",
                        backgroundColor: state === "done" ? "#B69146" : "transparent",
                        color: state === "done" ? "#1f2a44" : "#F8F5F0",
                      }}
                    >
                      {i + 1}
                    </span>
                    <span
                      style={{
                        color:
                          state === "todo"
                            ? "rgba(248,245,240,0.5)"
                            : "rgba(248,245,240,0.95)",
                      }}
                    >
                      {label}
                    </span>
                  </li>
                );
              })}
            </ol>
          )}
        </div>

        {/* Right form */}
        <div className="md:col-span-6 md:col-start-7">
          {sent ? (
            <div className="fade-up border border-[rgba(248,245,240,0.2)] p-10 md:p-12">
              <p
                className="text-[0.7rem] uppercase tracking-[0.22em]"
                style={{ color: "#B69146" }}
              >
                Application received
              </p>
              <h3 className="mt-5 font-display text-3xl leading-tight md:text-4xl">
                Thank you for trusting us with your family's story.
              </h3>
              <p
                className="mt-6 text-[1rem] leading-relaxed"
                style={{ color: "rgba(248,245,240,0.82)" }}
              >
                Our clinical team will personally review your application and reach
                out within <span style={{ color: "#F8F5F0" }}>24–48 hours</span> with
                tailored next steps. In the meantime, take a slow breath — you are
                already doing the most important work.
              </p>
              <p
                className="mt-8 text-[0.78rem] uppercase tracking-[0.22em]"
                style={{ color: "rgba(248,245,240,0.5)" }}
              >
                — Charming Pau, BCBA · MPH
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-10" key={step}>
              <div className="fade-up space-y-8">
                {/* STEP 0 — AGE */}
                {step === 0 && (
                  <>
                    <Legend>Tell us a little bit about your child.</Legend>
                    <div className="space-y-4">
                      {AGE_OPTIONS.map((opt) => {
                        const selected = data.age === opt.id;
                        return (
                          <button
                            type="button"
                            key={opt.id}
                            onClick={() => update("age", opt.id)}
                            className="group block w-full border p-6 text-left transition-all duration-300 md:p-7"
                            style={{
                              borderColor: selected
                                ? "#B69146"
                                : "rgba(248,245,240,0.18)",
                              backgroundColor: selected
                                ? "rgba(182,145,70,0.08)"
                                : "transparent",
                            }}
                          >
                            <div className="flex items-start gap-5">
                              <span
                                aria-hidden
                                className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border"
                                style={{
                                  borderColor: selected
                                    ? "#B69146"
                                    : "rgba(248,245,240,0.4)",
                                  backgroundColor: selected ? "#B69146" : "transparent",
                                }}
                              />
                              <div>
                                <p className="font-display text-xl leading-tight md:text-[1.4rem]">
                                  {opt.title}
                                </p>
                                <p
                                  className="mt-2 text-sm leading-relaxed"
                                  style={{ color: "rgba(248,245,240,0.7)" }}
                                >
                                  {opt.desc}
                                </p>
                              </div>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </>
                )}

                {/* STEP 1 — Age-conditional */}
                {step === 1 && data.age === "2-4" && (
                  <>
                    <Legend>
                      How does your child typically communicate their needs when
                      frustrated?{" "}
                      <span
                        className="text-[0.7rem] uppercase tracking-[0.22em]"
                        style={{ color: "rgba(248,245,240,0.55)" }}
                      >
                        Select all that apply
                      </span>
                    </Legend>
                    <CheckboxList
                      values={data.comm24}
                      options={COMM_24}
                      onToggle={(v) => toggleArr("comm24", v)}
                    />
                    <Field label="Any specific communication milestones or daily routines you are currently working on?">
                      <textarea
                        value={data.notes24}
                        onChange={(e) => update("notes24", e.target.value)}
                        rows={4}
                        maxLength={1200}
                        placeholder="Optional — share whatever feels relevant."
                        className="intake-input resize-none"
                      />
                    </Field>
                  </>
                )}

                {step === 1 && data.age === "4-9" && (
                  <>
                    <Legend>
                      Which of these social, peer, or behavioral dynamics currently
                      feels the most challenging?{" "}
                      <span
                        className="text-[0.7rem] uppercase tracking-[0.22em]"
                        style={{ color: "rgba(248,245,240,0.55)" }}
                      >
                        Select all that apply
                      </span>
                    </Legend>
                    <CheckboxList
                      values={data.social49}
                      options={SOCIAL_49}
                      onToggle={(v) => toggleArr("social49", v)}
                    />
                    <Field label="Briefly describe a recent social, school, or peer situation that felt difficult for them.">
                      <textarea
                        value={data.notes49}
                        onChange={(e) => update("notes49", e.target.value)}
                        rows={4}
                        maxLength={1200}
                        placeholder="Optional — a small story helps us understand context."
                        className="intake-input resize-none"
                      />
                    </Field>
                  </>
                )}

                {step === 1 && data.age === "other" && (
                  <Field label="Tell us a little about each child — ages, what feels hardest, what you're hoping for.">
                    <textarea
                      value={data.notes24}
                      onChange={(e) => update("notes24", e.target.value)}
                      rows={6}
                      maxLength={1500}
                      placeholder="A few sentences is plenty."
                      className="intake-input resize-none"
                    />
                  </Field>
                )}

                {/* FINAL STEP — Outcome + Track */}
                {step === steps.length - 1 && step !== 0 && (
                  <>
                    <Field label="In your own words, what does a successful outcome look like for your family over the next 6 weeks?">
                      <textarea
                        required
                        value={data.outcome}
                        onChange={(e) => update("outcome", e.target.value)}
                        rows={5}
                        maxLength={1500}
                        placeholder="e.g., I want to be able to leave the playground without a meltdown, or help my child feel more confident making friends at school."
                        className="intake-input resize-none"
                      />
                    </Field>

                    <div>
                      <Legend>Which pathway are you interested in exploring?</Legend>
                      <div className="space-y-3">
                        {TRACK_OPTIONS.map((opt) => {
                          const selected = data.track === opt.id;
                          return (
                            <label
                              key={opt.id}
                              className="flex cursor-pointer items-start gap-4 border p-5 transition-colors"
                              style={{
                                borderColor: selected
                                  ? "#B69146"
                                  : "rgba(248,245,240,0.18)",
                                backgroundColor: selected
                                  ? "rgba(182,145,70,0.08)"
                                  : "transparent",
                              }}
                            >
                              <input
                                type="radio"
                                name="track"
                                value={opt.id}
                                checked={selected}
                                onChange={() => update("track", opt.id)}
                                className="mt-1 h-4 w-4 accent-[#B69146]"
                              />
                              <div>
                                <p className="text-[1rem] leading-tight">{opt.title}</p>
                                <p
                                  className="mt-1 text-sm"
                                  style={{ color: "rgba(248,245,240,0.7)" }}
                                >
                                  {opt.desc}
                                </p>
                              </div>
                            </label>
                          );
                        })}
                      </div>
                    </div>
                  </>
                )}
              </div>

              <div className="flex items-center justify-between gap-4 border-t border-[rgba(248,245,240,0.18)] pt-6">
                <button
                  type="button"
                  onClick={back}
                  disabled={step === 0}
                  className="text-sm tracking-wide transition-opacity disabled:opacity-30"
                  style={{ color: "rgba(248,245,240,0.75)" }}
                >
                  ← Back
                </button>

                <button
                  type="submit"
                  disabled={!canContinue || submitting}
                  className="group inline-flex items-center gap-3 border px-7 py-4 text-sm tracking-wide transition-colors disabled:opacity-40"
                  style={{
                    borderColor: "#F8F5F0",
                    color: "#1f2a44",
                    backgroundColor: "#F8F5F0",
                  }}
                >
                  {submitting
                    ? "…"
                    : isLastStep
                      ? "Submit Application"
                      : "Continue"}
                  <span
                    aria-hidden
                    className="transition-transform group-hover:translate-x-1"
                  >
                    →
                  </span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      <style>{`
        .intake-input {
          width: 100%;
          background: transparent;
          color: #F8F5F0;
          border: 0;
          border-bottom: 1px solid rgba(248,245,240,0.28);
          padding: 0.85rem 0;
          font-size: 1rem;
          outline: none;
          transition: border-color 200ms ease;
          border-radius: 0;
          font-family: inherit;
          line-height: 1.55;
        }
        .intake-input::placeholder { color: rgba(248,245,240,0.4); }
        .intake-input:focus { border-bottom-color: #B69146; }
      `}</style>
    </section>
  );
}

function Legend({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-display text-[1.35rem] leading-snug md:text-[1.55rem]">
      {children}
    </p>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span
        className="block text-[0.7rem] uppercase tracking-[0.22em]"
        style={{ color: "rgba(248,245,240,0.6)" }}
      >
        {label}
      </span>
      <div className="mt-3">{children}</div>
    </label>
  );
}

function CheckboxList({
  values,
  options,
  onToggle,
}: {
  values: string[];
  options: string[];
  onToggle: (v: string) => void;
}) {
  return (
    <div className="space-y-3">
      {options.map((opt) => {
        const checked = values.includes(opt);
        return (
          <label
            key={opt}
            className="flex cursor-pointer items-start gap-4 border p-5 transition-colors"
            style={{
              borderColor: checked ? "#B69146" : "rgba(248,245,240,0.18)",
              backgroundColor: checked ? "rgba(182,145,70,0.08)" : "transparent",
            }}
          >
            <span
              aria-hidden
              className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center border"
              style={{
                borderColor: checked ? "#B69146" : "rgba(248,245,240,0.45)",
                backgroundColor: checked ? "#B69146" : "transparent",
                color: "#1f2a44",
              }}
            >
              {checked ? "✓" : ""}
            </span>
            <input
              type="checkbox"
              className="sr-only"
              checked={checked}
              onChange={() => onToggle(opt)}
            />
            <span className="text-[0.98rem] leading-relaxed">{opt}</span>
          </label>
        );
      })}
    </div>
  );
}
