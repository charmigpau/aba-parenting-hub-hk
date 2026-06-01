import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { HeroCalmHome } from "@/components/site/calm-home/HeroCalmHome";
import { JournalBridgeSection } from "@/components/site/calm-home/JournalBridgeSection";
import { CoreProblemSection } from "@/components/site/calm-home/CoreProblemSection";
import { WorkshopPortalSection } from "@/components/site/calm-home/WorkshopPortalSection";
import { IndividualCoachingSection } from "@/components/site/calm-home/IndividualCoachingSection";
import { IntakeFormSection } from "@/components/site/calm-home/IntakeFormSection";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "The Calm Home Project — Charming BCBA" },
      {
        name: "description",
        content:
          "Premium, evidence-based behavioral coaching and parenting workshops for families navigating ADHD, autism, and complex behaviors. Led by Charming Pau, BCBA.",
      },
      { property: "og:title", content: "The Calm Home Project — Charming BCBA" },
      {
        property: "og:description",
        content:
          "Transform power struggles into connected parenting. Premium workshops and 1:1 coaching led by a Board Certified Behavior Analyst.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Index() {
  return (
    <PageShell>
      <HeroCalmHome />
      <CoreProblemSection />
      <WorkshopPortalSection />
      <IndividualCoachingSection />
      <IntakeFormSection />
    </PageShell>
  );
}
