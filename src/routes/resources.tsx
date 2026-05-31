import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Eyebrow, SectionTitle } from "@/components/site/PageShell";

export const Route = createFileRoute("/resources")({
  component: ResourcesPage,
  head: () => ({
    meta: [
      { title: "Digital Resources — Charming Pau, BCBA" },
      {
        name: "description",
        content:
          "Evidence-based ABA tools, printable templates, and visual supports for parents, educators, and clinicians.",
      },
      { property: "og:title", content: "Digital Resources — Charming Pau, BCBA" },
      {
        property: "og:description",
        content:
          "Evidence-based ABA tools, printable templates, and visual supports for parents, educators, and clinicians.",
      },
      { property: "og:url", content: "/resources" },
    ],
    links: [{ rel: "canonical", href: "/resources" }],
  }),
});

type Product = {
  id: string;
  title: string;
  blurb: string;
  price: string;
  cta: "Purchase" | "Download";
  // Stripe Payment Link — paste real URLs here when ready.
  checkoutUrl: string;
  thumb: { hue: string; glyph: string };
};

const products: Product[] = [
  {
    id: "act-storybooks",
    title: "ACT Storybooks",
    blurb:
      "Illustrated stories that introduce acceptance and values-based skills for young learners. Evidence-based tools for daily progress.",
    price: "HK$ 120",
    cta: "Purchase",
    checkoutUrl: "https://buy.stripe.com/test_act_storybooks",
    thumb: { hue: "from-[#E8E0CF] to-[#D7C9A8]", glyph: "A" },
  },
  {
    id: "soap-notes-template",
    title: "SOAP Notes Template",
    blurb:
      "Clean, clinician-friendly session note template with prompts for objective data and plan updates. Editable and printable.",
    price: "HK$ 80",
    cta: "Download",
    checkoutUrl: "https://buy.stripe.com/test_soap_notes",
    thumb: { hue: "from-[#DCE3DC] to-[#B9C6B9]", glyph: "S" },
  },
  {
    id: "five-point-scale",
    title: "5-Point Scale",
    blurb:
      "A visual self-regulation scale to help learners name and rate internal experiences. Includes blank and themed variants.",
    price: "HK$ 60",
    cta: "Download",
    checkoutUrl: "https://buy.stripe.com/test_five_point_scale",
    thumb: { hue: "from-[#EAD9C5] to-[#C9A059]", glyph: "5" },
  },
  {
    id: "token-board-pack",
    title: "Token Board Pack",
    blurb:
      "Twelve printable token boards across themes and counts to support reinforcement systems at home and school.",
    price: "HK$ 90",
    cta: "Purchase",
    checkoutUrl: "https://buy.stripe.com/test_token_board",
    thumb: { hue: "from-[#E2DCD0] to-[#BBB29F]", glyph: "T" },
  },
  {
    id: "visual-schedule-kit",
    title: "Visual Schedule Kit",
    blurb:
      "Modular icons and routine cards for first/then boards and daily schedules. Designed for clarity and consistency.",
    price: "HK$ 110",
    cta: "Purchase",
    checkoutUrl: "https://buy.stripe.com/test_visual_schedule",
    thumb: { hue: "from-[#D9E2E3] to-[#A8BCBE]", glyph: "V" },
  },
  {
    id: "abc-data-sheet",
    title: "ABC Data Sheet",
    blurb:
      "Antecedent–Behavior–Consequence recording sheet with sample prompts and a quick-reference legend.",
    price: "Free",
    cta: "Download",
    checkoutUrl: "https://buy.stripe.com/test_abc_data",
    thumb: { hue: "from-[#EFE6D5] to-[#D5C3A0]", glyph: "ABC" },
  },
  {
    id: "parent-coaching-guide",
    title: "Parent Coaching Guide",
    blurb:
      "A reflective workbook for caregivers — pairing, prompting, and shaping skills, with weekly practice prompts.",
    price: "HK$ 150",
    cta: "Purchase",
    checkoutUrl: "https://buy.stripe.com/test_parent_coaching",
    thumb: { hue: "from-[#E5D8D2] to-[#B79C92]", glyph: "P" },
  },
];

function handleCheckout(url: string) {
  // Headless redirect to a Stripe Payment Link (no Stripe.js required).
  if (typeof window !== "undefined") {
    window.open(url, "_blank", "noopener,noreferrer");
  }
}

function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group break-inside-avoid mb-6 rounded-2xl border border-hairline bg-background p-5 transition-colors duration-300 hover:border-primary">
      <div
        className={`aspect-[4/3] w-full overflow-hidden rounded-xl bg-gradient-to-br ${product.thumb.hue} flex items-center justify-center`}
        aria-hidden
      >
        <span className="font-display text-6xl text-foreground/40">
          {product.thumb.glyph}
        </span>
      </div>
      <div className="mt-5 flex items-start justify-between gap-3">
        <h3 className="font-display text-2xl leading-tight">{product.title}</h3>
        <span className="shrink-0 text-xs tracking-wider text-ink-muted">
          {product.price}
        </span>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-ink-muted">{product.blurb}</p>
      <button
        type="button"
        onClick={() => handleCheckout(product.checkoutUrl)}
        className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md bg-accent px-4 py-2.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        aria-label={`${product.cta} ${product.title}`}
      >
        {product.cta === "Purchase" ? "Purchase" : "Download"}
        <span aria-hidden>→</span>
      </button>
    </article>
  );
}

function ResourcesPage() {
  return (
    <PageShell>
      <section className="border-b border-hairline">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <Eyebrow>Digital Resources</Eyebrow>
          <SectionTitle className="mt-4">Evidence-based tools for daily progress.</SectionTitle>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted">
            Printable templates, visual supports, and parent-friendly guides drawn from
            behaviour-analytic practice. Use them at home, in the classroom, or alongside
            consultation.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>

          <p className="mt-12 max-w-2xl text-xs leading-relaxed text-ink-muted">
            Resources are educational tools intended to support practice. They are not a
            substitute for individualised clinical assessment, and outcomes vary with each
            learner and context.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
