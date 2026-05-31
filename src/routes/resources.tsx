import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Eyebrow } from "@/components/site/PageShell";

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
  checkoutUrl: string;
  glyph: string;
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
    glyph: "A",
  },
  {
    id: "soap-notes-template",
    title: "SOAP Notes Template",
    blurb:
      "Clean, clinician-friendly session note template with prompts for objective data and plan updates. Editable and printable.",
    price: "HK$ 80",
    cta: "Download",
    checkoutUrl: "https://buy.stripe.com/test_soap_notes",
    glyph: "S",
  },
  {
    id: "five-point-scale",
    title: "5-Point Scale",
    blurb:
      "A visual self-regulation scale to help learners name and rate internal experiences. Includes blank and themed variants.",
    price: "HK$ 60",
    cta: "Download",
    checkoutUrl: "https://buy.stripe.com/test_five_point_scale",
    glyph: "5",
  },
  {
    id: "token-board-pack",
    title: "Token Board Pack",
    blurb:
      "Twelve printable token boards across themes and counts to support reinforcement systems at home and school.",
    price: "HK$ 90",
    cta: "Purchase",
    checkoutUrl: "https://buy.stripe.com/test_token_board",
    glyph: "T",
  },
  {
    id: "visual-schedule-kit",
    title: "Visual Schedule Kit",
    blurb:
      "Modular icons and routine cards for first/then boards and daily schedules. Designed for clarity and consistency.",
    price: "HK$ 110",
    cta: "Purchase",
    checkoutUrl: "https://buy.stripe.com/test_visual_schedule",
    glyph: "V",
  },
  {
    id: "abc-data-sheet",
    title: "ABC Data Sheet",
    blurb:
      "Antecedent–Behavior–Consequence recording sheet with sample prompts and a quick-reference legend.",
    price: "Free",
    cta: "Download",
    checkoutUrl: "https://buy.stripe.com/test_abc_data",
    glyph: "ABC",
  },
  {
    id: "parent-coaching-guide",
    title: "Parent Coaching Guide",
    blurb:
      "A reflective workbook for caregivers — pairing, prompting, and shaping skills, with weekly practice prompts.",
    price: "HK$ 150",
    cta: "Purchase",
    checkoutUrl: "https://buy.stripe.com/test_parent_coaching",
    glyph: "P",
  },
];

function handleCheckout(url: string) {
  if (typeof window !== "undefined") {
    window.open(url, "_blank", "noopener,noreferrer");
  }
}

function ProductCard({ product, index }: { product: Product; index: number }) {
  const num = String(index + 1).padStart(2, "0");
  return (
    <article className="group flex flex-col bg-background p-8 transition-colors">
      <div className="flex items-baseline justify-between">
        <p className="eyebrow">— {num}</p>
        <span className="text-xs tracking-wider text-ink-muted">{product.price}</span>
      </div>

      <div
        className="mt-8 flex aspect-[4/3] w-full items-center justify-center border border-hairline bg-surface"
        aria-hidden
      >
        <span className="font-display text-7xl text-foreground/25 transition-colors duration-500 group-hover:text-foreground/45">
          {product.glyph}
        </span>
      </div>

      <h3 className="mt-8 font-display text-2xl leading-tight">{product.title}</h3>
      <p className="mt-4 text-sm leading-relaxed text-ink-muted">{product.blurb}</p>

      <button
        type="button"
        onClick={() => handleCheckout(product.checkoutUrl)}
        className="mt-8 inline-flex items-center gap-2 self-start border-b border-foreground/40 pb-1 text-xs uppercase tracking-[0.18em] text-foreground transition-colors hover:border-foreground"
        aria-label={`${product.cta} ${product.title}`}
      >
        {product.cta} <span aria-hidden>→</span>
      </button>
    </article>
  );
}

function ResourcesPage() {
  return (
    <PageShell>
      <section className="border-b border-hairline">
        <div className="mx-auto max-w-6xl px-6 pt-20 pb-20 md:pt-28 md:pb-28">
          <Eyebrow>— Digital Resources</Eyebrow>
          <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[1.05] md:text-7xl">
            Evidence-based tools for daily progress.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-muted md:text-xl">
            Printable templates, visual supports, and parent-friendly guides drawn from
            behaviour-analytic practice. Use them at home, in the classroom, or alongside
            consultation.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid grid-cols-1 gap-px bg-hairline md:grid-cols-2 lg:grid-cols-3">
            {products.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>

          <p className="mt-16 max-w-2xl border-t border-hairline pt-6 text-xs leading-relaxed text-ink-muted">
            Resources are educational tools intended to support practice. They are not a
            substitute for individualised clinical assessment, and outcomes vary with each
            learner and context.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
