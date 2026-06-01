import { useState, type FormEvent } from "react";

const STEPS = ["You", "Your Family", "Your Child", "Your Path"];

type FormState = {
  name: string;
  email: string;
  challenge: string;
  age: string;
  path: string;
};

const EMPTY: FormState = { name: "", email: "", challenge: "", age: "", path: "" };

export function IntakeFormSection() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<FormState>(EMPTY);
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const update = (k: keyof FormState) => (v: string) => setData((d) => ({ ...d, [k]: v }));

  const canNext =
    (step === 0 && data.name.trim() && /.+@.+\..+/.test(data.email)) ||
    (step === 1 && data.challenge.trim().length > 4) ||
    (step === 2 && data.age.trim()) ||
    (step === 3 && data.path);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!canNext) return;
    if (step < 3) {
      setStep((s) => s + 1);
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSent(true);
    }, 600);
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
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-14 px-6 py-24 md:grid-cols-12 md:py-32">
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
            Tell us a little about your family. Charming personally reads every application
            and replies within two working days — no automated funnels, no sales calls.
          </p>

          <ol className="mt-10 space-y-3 text-sm">
            {STEPS.map((label, i) => {
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
        </div>

        <div className="md:col-span-6 md:col-start-7">
          {sent ? (
            <div className="fade-up border border-[rgba(248,245,240,0.2)] p-10">
              <p
                className="text-[0.7rem] uppercase tracking-[0.22em]"
                style={{ color: "rgba(248,245,240,0.6)" }}
              >
                Application received
              </p>
              <h3 className="mt-4 font-display text-3xl leading-tight">
                Thank you, {data.name.split(" ")[0]}.
              </h3>
              <p
                className="mt-4 text-[0.98rem] leading-relaxed"
                style={{ color: "rgba(248,245,240,0.8)" }}
              >
                Charming will personally review your application and reach out to{" "}
                <span style={{ color: "#F8F5F0" }}>{data.email}</span> within two working days.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8" key={step}>
              <div className="fade-up">
                {step === 0 && (
                  <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
                    <Field label="Parent Name">
                      <input
                        required
                        value={data.name}
                        onChange={(e) => update("name")(e.target.value)}
                        maxLength={120}
                        autoComplete="name"
                        className="intake-input"
                      />
                    </Field>
                    <Field label="Email Address">
                      <input
                        required
                        value={data.email}
                        onChange={(e) => update("email")(e.target.value)}
                        type="email"
                        maxLength={200}
                        autoComplete="email"
                        className="intake-input"
                      />
                    </Field>
                  </div>
                )}

                {step === 1 && (
                  <Field label="What is the primary challenge your family is experiencing right now?">
                    <textarea
                      required
                      value={data.challenge}
                      onChange={(e) => update("challenge")(e.target.value)}
                      rows={5}
                      maxLength={1200}
                      placeholder="Share as much or as little as feels right."
                      className="intake-input resize-none"
                    />
                  </Field>
                )}

                {step === 2 && (
                  <Field label="Age of your child(ren)?">
                    <input
                      required
                      value={data.age}
                      onChange={(e) => update("age")(e.target.value)}
                      maxLength={60}
                      placeholder="e.g. 4 and 7"
                      className="intake-input"
                    />
                  </Field>
                )}

                {step === 3 && (
                  <fieldset>
                    <legend className="block text-[0.7rem] uppercase tracking-[0.22em]" style={{ color: "rgba(248,245,240,0.6)" }}>
                      Are you looking for…
                    </legend>
                    <div className="mt-4 space-y-3">
                      {[
                        "Immediate workshop registration",
                        "Individual coaching",
                        "Both — I'd like guidance on the right fit",
                      ].map((opt) => (
                        <label
                          key={opt}
                          className="flex cursor-pointer items-center gap-4 border border-[rgba(248,245,240,0.18)] p-4 transition-colors hover:border-[#B69146]"
                          style={{
                            backgroundColor:
                              data.path === opt ? "rgba(182,145,70,0.08)" : "transparent",
                            borderColor:
                              data.path === opt ? "#B69146" : "rgba(248,245,240,0.18)",
                          }}
                        >
                          <input
                            type="radio"
                            name="path"
                            value={opt}
                            checked={data.path === opt}
                            onChange={(e) => update("path")(e.target.value)}
                            className="h-4 w-4 accent-[#B69146]"
                          />
                          <span className="text-[0.95rem]">{opt}</span>
                        </label>
                      ))}
                    </div>
                  </fieldset>
                )}
              </div>

              <div className="flex items-center justify-between gap-4 border-t border-[rgba(248,245,240,0.18)] pt-6">
                <button
                  type="button"
                  onClick={() => setStep((s) => Math.max(0, s - 1))}
                  disabled={step === 0}
                  className="text-sm tracking-wide transition-opacity disabled:opacity-30"
                  style={{ color: "rgba(248,245,240,0.75)" }}
                >
                  ← Back
                </button>

                <button
                  type="submit"
                  disabled={!canNext || submitting}
                  className="group inline-flex items-center gap-3 border px-7 py-4 text-sm tracking-wide transition-colors disabled:opacity-50"
                  style={{
                    borderColor: "#F8F5F0",
                    color: "#1f2a44",
                    backgroundColor: "#F8F5F0",
                  }}
                >
                  {submitting
                    ? "…"
                    : step === 3
                      ? "Submit Application"
                      : "Continue"}
                  <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
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
          padding: 0.7rem 0;
          font-size: 1rem;
          outline: none;
          transition: border-color 200ms ease;
          border-radius: 0;
          font-family: inherit;
        }
        .intake-input::placeholder { color: rgba(248,245,240,0.4); }
        .intake-input:focus { border-bottom-color: #B69146; }
      `}</style>
    </section>
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
