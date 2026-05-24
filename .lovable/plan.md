## Goal

A polished, trilingual (English / Traditional Chinese / Simplified Chinese) website for a Hong Kong-based BCBA. It positions the practitioner, shares ABA parenting tips (linking out to Instagram, Facebook, Threads), and lets parents request a consultation or therapy session via a contact form (manual follow-up).

## Design direction

Editorial-minimal aesthetic, locked tokens:
- Background `#f5f3ee` (warm off-white), surface `#e8e4dd`, accent `#c9a84c` (muted gold), ink `#0d0d0d`.
- Type pairing: serif display (Instrument Serif / Cormorant) for headlines, clean grotesque (Inter / Work Sans) for body.
- Generous whitespace, thin hairlines, large editorial headings, restrained motion (subtle fades on scroll only).
- Section numbering (01 / 02 / 03) and small-caps eyebrows for an editorial feel.

## Site map (separate TanStack routes)

```text
/                Home — hero, positioning, featured tips, CTA
/about           BCBA bio, credentials, approach, languages spoken
/services        Consultation + ABA therapy session offerings
/tips            ABA parenting tips: curated highlights + Instagram/Threads/Facebook links
/contact         Booking request form (manual follow-up)
```

Each route gets its own `head()` with unique title, description, og:title, og:description.

## Trilingual support

- Languages: English (en), Traditional Chinese (zh-Hant), Simplified Chinese (zh-Hans).
- Language switcher: dropdown in the header showing "EN / 繁 / 简".
- Implementation: a lightweight React context + dictionary files (`src/i18n/en.ts`, `zh-hant.ts`, `zh-hans.ts`). Selection persists in `localStorage`. Headings use the serif for EN and a tasteful CJK serif (Noto Serif TC/SC) for Chinese.
- All UI copy, route metadata, and form labels translated.

## Page contents

**Home** — Editorial hero with practitioner name and one-line positioning ("Trilingual BCBA · Hong Kong"); short intro paragraph; 3 featured tip cards linking to /tips; services teaser linking to /services; CTA to /contact.

**About** — Portrait placeholder, bio, BCBA credentials, languages, approach to ABA, values. Editorial two-column layout.

**Services** — Two offerings: (1) Parent Consultation, (2) ABA Therapy Sessions. Each with description, who it's for, session format, and a "Request appointment" CTA to /contact.

**Tips** — A curated list of ~6 short ABA parenting tips (static, editable in code, all 3 languages). Below: a "Follow along" block linking to Instagram, Facebook Page, and Threads with handles + icons. No live feed embeds (keeps the page fast and avoids third-party iframes that break editorial layout).

**Contact** — Booking request form with Zod validation:
fields: name, email, phone (optional), preferred language, service interested in (consultation / therapy / general), child's age (optional), preferred contact method, message. Client-side validation with clear errors; on submit show a confirmation state ("Thanks — we'll reply within 2 business days"). Also list email and a note that responses come within 2 business days. No backend yet — submissions are not stored; the form is presentational + validation. (If the user later wants emails delivered, we'll add Lovable Cloud + email.)

## Technical details

- TanStack Start file-based routing under `src/routes/`. Shared `Header` (logo + nav + language switcher) and `Footer` (socials + contact) imported in each page.
- Design tokens defined in `src/styles.css` (oklch) overriding the defaults to the editorial palette; serif + sans font families wired via Google Fonts `<link>` in `__root.tsx`.
- i18n: `src/i18n/` with `LanguageProvider`, `useT()` hook, and dictionary objects keyed by route/section.
- Form: react-hook-form + zod (already common). No external network calls.
- SEO: per-route `head()`; JSON-LD `LocalBusiness` / `Person` on home and about.
- Accessibility: semantic landmarks, focus states, alt text, sufficient contrast on gold accent (used sparingly on dark text only).

## Out of scope (can add later)

- Backend storage of contact submissions or email delivery (would require Lovable Cloud).
- Live Instagram / Threads feed embeds.
- Real-time calendar booking.
- Blog CMS for tips (currently hardcoded in dictionaries).
