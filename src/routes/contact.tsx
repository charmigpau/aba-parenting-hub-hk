import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Eyebrow } from "@/components/site/PageShell";
import { useLang } from "@/i18n/LanguageProvider";
import { useState, type FormEvent } from "react";
import { z } from "zod";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — Request an appointment with Charming Pau, BCBA" },
      {
        name: "description",
        content:
          "Request a parent consultation or ABA therapy session in Hong Kong. Replies within two business days.",
      },
      { property: "og:title", content: "Contact — Charming Pau, BCBA" },
      { property: "og:description", content: "Request an appointment. Trilingual BCBA in Hong Kong." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

function ContactPage() {
  const { t } = useLang();
  const f = t.contact.form;

  const schema = z.object({
    name: z.string().trim().min(1, f.errors.name).max(120),
    email: z.string().trim().min(1, f.errors.email).email(f.errors.emailInvalid).max(255),
    phone: z.string().trim().max(40).optional(),
    preferredLang: z.string().max(40),
    service: z.string().max(40),
    childAge: z.string().trim().max(20).optional(),
    contactMethod: z.string().max(40),
    message: z.string().trim().min(1, f.errors.message).max(2000),
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    const result = schema.safeParse(data);
    if (!result.success) {
      const errs: Record<string, string> = {};
      for (const issue of result.error.issues) {
        const k = issue.path[0]?.toString() ?? "";
        if (!errs[k]) errs[k] = issue.message;
      }
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 700));
    setSubmitting(false);
    setDone(true);
  };

  return (
    <PageShell>
      <section className="border-b border-hairline">
        <div className="mx-auto max-w-6xl px-6 pt-20 pb-20 md:pt-28 md:pb-28">
          <Eyebrow>{t.contact.eyebrow}</Eyebrow>
          <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[1.05] md:text-7xl">
            {t.contact.title}
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-ink-muted md:text-xl">{t.contact.lead}</p>
          <p className="eyebrow mt-8">{t.contact.responseNote}</p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
          {done ? (
            <div className="border border-hairline p-10 text-center">
              <Eyebrow>—</Eyebrow>
              <p className="mt-6 font-display text-3xl leading-snug md:text-4xl">
                {f.success}
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="space-y-8">
              <Field label={f.name} name="name" error={errors.name} required />
              <Field
                label={f.email}
                name="email"
                type="email"
                error={errors.email}
                required
              />
              <Field
                label={f.phone}
                name="phone"
                type="tel"
                error={errors.phone}
                hint={f.phoneOptional}
              />

              <SelectField
                label={f.preferredLang}
                name="preferredLang"
                options={["English", "中文（廣東話）", "中文（普通話）"]}
              />

              <SelectField
                label={f.service}
                name="service"
                options={[
                  f.serviceOptions.consultation,
                  f.serviceOptions.therapy,
                  f.serviceOptions.general,
                ]}
              />

              <Field
                label={f.childAge}
                name="childAge"
                hint={f.childAgeOptional}
                error={errors.childAge}
              />

              <SelectField
                label={f.contactMethod}
                name="contactMethod"
                options={[
                  f.contactMethodOptions.email,
                  f.contactMethodOptions.phone,
                  f.contactMethodOptions.whatsapp,
                ]}
              />

              <div>
                <label className="eyebrow block" htmlFor="message">
                  {f.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="mt-3 w-full border-0 border-b border-hairline bg-transparent py-3 text-base outline-none transition-colors focus:border-foreground"
                />
                {errors.message && (
                  <p className="mt-2 text-xs text-destructive">{errors.message}</p>
                )}
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center gap-2 border border-foreground bg-foreground px-8 py-3 text-sm text-background transition-colors hover:bg-transparent hover:text-foreground disabled:opacity-60"
                >
                  {submitting ? f.submitting : f.submit} <span aria-hidden>→</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </PageShell>
  );
}

function Field({
  label,
  name,
  type = "text",
  error,
  hint,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  error?: string;
  hint?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="eyebrow flex items-baseline justify-between" htmlFor={name}>
        <span>
          {label}
          {required && <span className="text-accent"> *</span>}
        </span>
        {hint && <span className="text-[10px] normal-case tracking-normal">{hint}</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        className="mt-3 w-full border-0 border-b border-hairline bg-transparent py-3 text-base outline-none transition-colors focus:border-foreground"
      />
      {error && <p className="mt-2 text-xs text-destructive">{error}</p>}
    </div>
  );
}

function SelectField({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <div>
      <label className="eyebrow block" htmlFor={name}>
        {label}
      </label>
      <select
        id={name}
        name={name}
        defaultValue={options[0]}
        className="mt-3 w-full border-0 border-b border-hairline bg-transparent py-3 text-base outline-none transition-colors focus:border-foreground"
      >
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}
