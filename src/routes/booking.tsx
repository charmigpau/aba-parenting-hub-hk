import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { PageShell, Eyebrow } from "@/components/site/PageShell";

// Paste your Google Calendar Appointment Scheduling embed URL here.
const GOOGLE_CALENDAR_EMBED_URL =
  "https://calendar.google.com/calendar/appointments/schedules/REPLACE_WITH_YOUR_SCHEDULE_ID?gv=true";

export const Route = createFileRoute("/booking")({
  component: BookingPage,
  head: () => ({
    meta: [
      { title: "Book a Consultation — Charming Pau, BCBA" },
      {
        name: "description",
        content:
          "Schedule a parent consultation with Charming Pau, BCBA. Choose a time and share your area of concern in confidence.",
      },
      { property: "og:title", content: "Book a Consultation — Charming Pau, BCBA" },
      { property: "og:url", content: "/booking" },
    ],
    links: [{ rel: "canonical", href: "/booking" }],
  }),
});

const FormSchema = z.object({
  parentName: z.string().trim().min(1, "Please enter your name").max(100, "Name is too long"),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z
    .string()
    .trim()
    .min(6, "Please enter a contact number")
    .max(32)
    .regex(/^[0-9+\-()\s]+$/, "Digits, spaces and + - ( ) only"),
  childAge: z
    .string()
    .trim()
    .max(20)
    .regex(/^[0-9A-Za-z\s\-]*$/, "Letters, numbers and dashes only")
    .optional()
    .or(z.literal("")),
  areaOfConcern: z.enum(
    [
      "communication",
      "social",
      "behavior",
      "daily-living",
      "school-readiness",
      "parent-coaching",
      "other",
    ],
    { message: "Please select an area of concern" },
  ),
  preferredLanguage: z.enum(["en", "yue", "cmn"], {
    message: "Please choose a language",
  }),
  notes: z
    .string()
    .trim()
    .max(1000, "Please keep notes under 1000 characters")
    .optional()
    .or(z.literal("")),
  consent: z.literal(true, { message: "Please confirm you agree to be contacted" }),
});

type FormValues = z.infer<typeof FormSchema>;

const AREAS: { value: FormValues["areaOfConcern"]; label: string }[] = [
  { value: "communication", label: "Communication & language" },
  { value: "social", label: "Social skills" },
  { value: "behavior", label: "Challenging behaviour" },
  { value: "daily-living", label: "Daily living & routines" },
  { value: "school-readiness", label: "School readiness" },
  { value: "parent-coaching", label: "Parent coaching" },
  { value: "other", label: "Other / not sure" },
];

function BookingPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      parentName: "",
      email: "",
      phone: "",
      childAge: "",
      areaOfConcern: undefined as unknown as FormValues["areaOfConcern"],
      preferredLanguage: undefined as unknown as FormValues["preferredLanguage"],
      notes: "",
      consent: false as unknown as true,
    },
  });

  const onSubmit = async (values: FormValues) => {
    setStatus("submitting");
    setErrorMsg(null);
    try {
      const res = await fetch("/api/public/booking-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || "Submission failed");
      }
      setStatus("success");
      reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
    }
  };

  return (
    <PageShell>
      <section className="border-b border-hairline">
        <div className="mx-auto max-w-6xl px-6 pt-20 pb-20 md:pt-28 md:pb-28">
          <Eyebrow>— Consultation Booking</Eyebrow>
          <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[1.05] md:text-7xl">
            Reserve a time. Share your context.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-muted md:text-xl">
            Pick an available slot on the calendar, then tell me a little about your child
            so the first session is focused and useful.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 px-6 py-20 md:py-28 lg:grid-cols-12">
          {/* Left — Google Calendar embed */}
          <div className="lg:col-span-6">
            <Eyebrow>— 01</Eyebrow>
            <h2 className="mt-4 font-display text-3xl md:text-4xl">Choose a time</h2>
            <p className="mt-3 text-sm text-ink-muted">
              All times shown in your local time zone.
            </p>
            <div className="mt-10 border border-hairline bg-surface">
              <div className="relative w-full" style={{ aspectRatio: "3 / 4" }}>
                <iframe
                  src={GOOGLE_CALENDAR_EMBED_URL}
                  title="Book an appointment with Charming Pau, BCBA"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full"
                  style={{ border: 0 }}
                />
              </div>
            </div>
          </div>

          {/* Right — Intake form */}
          <div className="lg:col-span-6">
            <Eyebrow>— 02</Eyebrow>
            <h2 className="mt-4 font-display text-3xl md:text-4xl">Tell me about your child</h2>
            <p className="mt-3 text-sm text-ink-muted">
              Brief context only. We'll go deeper together during the consultation.
            </p>

            {status === "success" ? (
              <div className="mt-10 border border-hairline p-10">
                <Eyebrow>—</Eyebrow>
                <p className="mt-6 font-display text-3xl leading-snug md:text-4xl">
                  Thank you — your intake was received.
                </p>
                <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                  Please complete the calendar booking on the left if you haven't yet.
                  You'll receive a confirmation email from Google Calendar.
                </p>
                <button
                  type="button"
                  className="mt-6 text-xs uppercase tracking-[0.18em] accent-underline"
                  onClick={() => setStatus("idle")}
                >
                  Submit another intake
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                autoComplete="on"
                className="mt-10 space-y-8"
              >
                <Field label="Parent / guardian name" error={errors.parentName?.message} required>
                  <input
                    type="text"
                    autoComplete="name"
                    maxLength={100}
                    className={inputCls}
                    {...register("parentName")}
                  />
                </Field>

                <div className="grid gap-8 sm:grid-cols-2">
                  <Field label="Email" error={errors.email?.message} required>
                    <input
                      type="email"
                      inputMode="email"
                      autoComplete="email"
                      maxLength={255}
                      className={inputCls}
                      {...register("email")}
                    />
                  </Field>
                  <Field label="Phone" error={errors.phone?.message} required>
                    <input
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel"
                      maxLength={32}
                      className={inputCls}
                      {...register("phone")}
                    />
                  </Field>
                </div>

                <div className="grid gap-8 sm:grid-cols-2">
                  <Field label="Child's age" error={errors.childAge?.message} hint="optional">
                    <input
                      type="text"
                      maxLength={20}
                      placeholder="e.g. 4"
                      className={inputCls}
                      {...register("childAge")}
                    />
                  </Field>
                  <Field
                    label="Preferred language"
                    error={errors.preferredLanguage?.message}
                    required
                  >
                    <select
                      className={inputCls}
                      defaultValue=""
                      {...register("preferredLanguage")}
                    >
                      <option value="" disabled>
                        Select…
                      </option>
                      <option value="en">English</option>
                      <option value="yue">Cantonese</option>
                      <option value="cmn">Mandarin</option>
                    </select>
                  </Field>
                </div>

                <Field label="Area of concern" error={errors.areaOfConcern?.message} required>
                  <select className={inputCls} defaultValue="" {...register("areaOfConcern")}>
                    <option value="" disabled>
                      Select an area…
                    </option>
                    {AREAS.map((a) => (
                      <option key={a.value} value={a.value}>
                        {a.label}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field label="Anything else?" error={errors.notes?.message} hint="optional">
                  <textarea
                    rows={4}
                    maxLength={1000}
                    placeholder="A short note about what you'd like to discuss."
                    className={inputCls}
                    {...register("notes")}
                  />
                </Field>

                <label className="flex items-start gap-3 pt-2 text-sm leading-relaxed text-ink-muted">
                  <input
                    type="checkbox"
                    className="mt-1 h-4 w-4 border-hairline text-accent focus:ring-accent"
                    {...register("consent")}
                  />
                  <span>
                    I agree to be contacted about my booking and understand my details will
                    be handled confidentially.
                  </span>
                </label>
                {errors.consent?.message && (
                  <p className="text-xs text-destructive">{errors.consent.message}</p>
                )}

                {status === "error" && errorMsg && (
                  <p className="border border-destructive/40 px-4 py-3 text-sm text-destructive">
                    {errorMsg}
                  </p>
                )}

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="inline-flex items-center gap-2 border border-foreground bg-foreground px-8 py-3 text-sm text-background transition-colors hover:bg-transparent hover:text-foreground disabled:opacity-60"
                  >
                    {status === "submitting" ? "Submitting…" : "Send intake"}{" "}
                    <span aria-hidden>→</span>
                  </button>
                </div>
              </form>
            )}

            <p className="mt-12 border-t border-hairline pt-6 text-xs leading-relaxed text-ink-muted">
              <strong className="font-medium text-foreground">Privacy.</strong> All data is
              handled in strict accordance with HK PDPO guidelines. Please do not submit
              sensitive medical records via this form.
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

const inputCls =
  "w-full border-0 border-b border-hairline bg-transparent py-3 text-base outline-none transition-colors focus:border-foreground";

function Field({
  label,
  error,
  hint,
  required,
  children,
}: {
  label: string;
  error?: string;
  hint?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="eyebrow flex items-baseline justify-between">
        <span>
          {label}
          {required && <span className="text-accent"> *</span>}
        </span>
        {hint && <span className="text-[10px] normal-case tracking-normal">{hint}</span>}
      </label>
      <div className="mt-3">{children}</div>
      {error && <p className="mt-2 text-xs text-destructive">{error}</p>}
    </div>
  );
}
