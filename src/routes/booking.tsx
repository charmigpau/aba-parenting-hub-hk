import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { PageShell, Eyebrow, SectionTitle } from "@/components/site/PageShell";

// Paste your Google Calendar Appointment Scheduling embed URL here.
// Get it from Google Calendar → Appointment schedule → Share → Embed.
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
  parentName: z
    .string()
    .trim()
    .min(1, "Please enter your name")
    .max(100, "Name is too long"),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email")
    .max(255),
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
  consent: z.literal(true, {
    message: "Please confirm you agree to be contacted",
  }),
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
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle",
  );
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
      // POST body — PII is never placed in query parameters.
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
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <Eyebrow>Consultation Booking</Eyebrow>
          <SectionTitle className="mt-4">Reserve a time, share your context.</SectionTitle>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted">
            Pick an available slot on the calendar, then tell me a little about your
            child so the first session is focused and useful.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:py-20 lg:grid-cols-2">
          {/* Left — Google Calendar embed */}
          <div>
            <h2 className="font-display text-2xl">1. Choose a time</h2>
            <p className="mt-2 text-sm text-ink-muted">
              All times shown in your local time zone.
            </p>
            <div className="mt-6 overflow-hidden rounded-2xl border border-hairline bg-background shadow-sm">
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
          <div>
            <h2 className="font-display text-2xl">2. Tell me about your child</h2>
            <p className="mt-2 text-sm text-ink-muted">
              Brief context only. We'll go deeper together during the consultation.
            </p>

            {status === "success" ? (
              <div className="mt-6 rounded-2xl border border-primary bg-surface p-6">
                <p className="font-display text-xl">Thank you — your intake was received.</p>
                <p className="mt-2 text-sm text-ink-muted">
                  Please complete the calendar booking on the left if you haven't yet.
                  You'll receive a confirmation email from Google Calendar.
                </p>
                <button
                  type="button"
                  className="mt-4 text-sm underline underline-offset-4"
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
                className="mt-6 space-y-5"
              >
                <Field label="Parent / guardian name" error={errors.parentName?.message}>
                  <input
                    type="text"
                    autoComplete="name"
                    maxLength={100}
                    className={inputCls}
                    {...register("parentName")}
                  />
                </Field>

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Email" error={errors.email?.message}>
                    <input
                      type="email"
                      inputMode="email"
                      autoComplete="email"
                      maxLength={255}
                      className={inputCls}
                      {...register("email")}
                    />
                  </Field>
                  <Field label="Phone" error={errors.phone?.message}>
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

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Child's age (optional)" error={errors.childAge?.message}>
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

                <Field label="Area of concern" error={errors.areaOfConcern?.message}>
                  <select
                    className={inputCls}
                    defaultValue=""
                    {...register("areaOfConcern")}
                  >
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

                <Field label="Anything else? (optional)" error={errors.notes?.message}>
                  <textarea
                    rows={4}
                    maxLength={1000}
                    placeholder="A short note about what you'd like to discuss."
                    className={inputCls}
                    {...register("notes")}
                  />
                </Field>

                <label className="flex items-start gap-3 text-sm text-ink-muted">
                  <input
                    type="checkbox"
                    className="mt-1 h-4 w-4 rounded border-hairline text-primary focus:ring-primary"
                    {...register("consent")}
                  />
                  <span>
                    I agree to be contacted about my booking and understand my details
                    will be handled confidentially.
                  </span>
                </label>
                {errors.consent?.message && (
                  <p className="text-xs text-destructive">{errors.consent.message}</p>
                )}

                {status === "error" && errorMsg && (
                  <p className="rounded-md border border-destructive bg-destructive/5 px-3 py-2 text-sm text-destructive">
                    {errorMsg}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
                >
                  {status === "submitting" ? "Submitting…" : "Send intake"}
                </button>
              </form>
            )}

            <p className="mt-8 border-t border-hairline pt-6 text-xs leading-relaxed text-ink-muted">
              <strong className="font-medium text-foreground">Privacy.</strong> All data
              is handled in strict accordance with HK PDPO guidelines. Please do not
              submit sensitive medical records via this form.
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

const inputCls =
  "w-full rounded-md border border-hairline bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-ink-muted/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary";

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-xs uppercase tracking-wider text-ink-muted">
        {label}
      </label>
      {children}
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}
