import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { HeroCalmHome } from "@/components/site/calm-home/HeroCalmHome";
import { JournalBridgeSection } from "@/components/site/calm-home/JournalBridgeSection";
import { CoreProblemSection } from "@/components/site/calm-home/CoreProblemSection";
import { OnboardingQuizSection } from "@/components/site/calm-home/OnboardingQuizSection";
import { WorkshopPortalSection } from "@/components/site/calm-home/WorkshopPortalSection";
import { IndividualCoachingSection } from "@/components/site/calm-home/IndividualCoachingSection";

import { IntakeFormSection } from "@/components/site/calm-home/IntakeFormSection";
import { BookingSection } from "@/components/site/calm-home/BookingSection";
import { SuccessStoriesSection } from "@/components/site/calm-home/SuccessStoriesSection";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "CharmingBCBA | Top BCBA & SEN School Integration Specialist in Hong Kong" },
      {
        name: "description",
        content:
          "Expert ABA therapy, school readiness, and domestic helper training in Hong Kong. Led by Charming Pau (BCBA, MPH). Book a consultation for your family today.",
      },
      { property: "og:title", content: "CharmingBCBA | Top BCBA & SEN School Integration Specialist in Hong Kong" },
      {
        property: "og:description",
        content:
          "Expert ABA therapy, school readiness, and domestic helper training in Hong Kong. Led by Charming Pau (BCBA, MPH).",
      },
      { property: "og:image", content: "/assets/charming-brand-preview.png" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://charmingbcba.com/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "CharmingBCBA | Top BCBA & SEN School Integration Specialist in Hong Kong" },
      {
        name: "twitter:description",
        content:
          "Expert ABA therapy, school readiness, and domestic helper training in Hong Kong. Led by Charming Pau (BCBA, MPH).",
      },
      { name: "twitter:image", content: "/assets/charming-brand-preview.png" },
    ],
    links: [
      { rel: "canonical", href: "https://charmingbcba.com/" },
      { rel: "alternate", hrefLang: "en", href: "https://charmingbcba.com/" },
      { rel: "alternate", hrefLang: "zh-HK", href: "https://charmingbcba.com/?lang=zh" },
      { rel: "alternate", hrefLang: "x-default", href: "https://charmingbcba.com/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalBusiness",
          name: "CharmingBCBA",
          image: "https://charmingbcba.com/assets/logo.png",
          description:
            "Expert ABA therapy, school readiness, and domestic helper training in Hong Kong. Led by Charming Pau (BCBA, MPH).",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Hong Kong Island",
            addressCountry: "HK",
          },
          founder: {
            "@type": "Person",
            name: "Charming Pau",
            jobTitle: "BCBA, MPH",
          },
          knowsAbout: [
            "Applied Behavior Analysis",
            "Special Educational Needs",
            "Parent Consultation",
            "Helper Training",
            "School Integration",
          ],
          priceRange: "$$$",
          telephone: "+852",
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <PageShell>
      <HeroCalmHome />
      <JournalBridgeSection />
      <CoreProblemSection />
      <OnboardingQuizSection />

      <WorkshopPortalSection />
      <IndividualCoachingSection />
      <SuccessStoriesSection />
      <IntakeFormSection />
      <BookingSection />
    </PageShell>
  );
}
