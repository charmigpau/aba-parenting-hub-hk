import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { LanguageProvider } from "@/i18n/LanguageProvider";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Charming, BCBA — ABA Therapy & Parent Coaching in Hong Kong" },
      {
        name: "description",
        content:
          "Trilingual (English, Cantonese, Mandarin) Board Certified Behavior Analyst in Hong Kong. ABA therapy, parent consultation, and evidence-based parenting tips.",
      },
      { property: "og:title", content: "Charming, BCBA — ABA Therapy & Parent Coaching in Hong Kong" },
      {
        property: "og:description",
        content:
          "ABA therapy and parent coaching in English, Cantonese and Mandarin. Book a consultation or read weekly tips.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Charming Pau, BCBA" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Charming, BCBA — ABA Therapy & Parent Coaching in Hong Kong" },
      { name: "description", content: "As a Third Culture Mom and Board Certified Behavior Analyst (BCBA), I intimately understand the tightrope of parenting—balancing high-stakes local pre" },
      { property: "og:description", content: "As a Third Culture Mom and Board Certified Behavior Analyst (BCBA), I intimately understand the tightrope of parenting—balancing high-stakes local pre" },
      { name: "twitter:description", content: "As a Third Culture Mom and Board Certified Behavior Analyst (BCBA), I intimately understand the tightrope of parenting—balancing high-stakes local pre" },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/60f7164c-e541-44cf-bcbf-015e2e35c798/id-preview-6a8b0ccb--53690f0f-74d9-40c2-8dad-f191676962be.lovable.app-1780237192162.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/60f7164c-e541-44cf-bcbf-015e2e35c798/id-preview-6a8b0ccb--53690f0f-74d9-40c2-8dad-f191676962be.lovable.app-1780237192162.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Montserrat:wght@300;400;500;600&family=Noto+Serif+TC:wght@400;500;600&family=Noto+Serif+SC:wght@400;500;600&family=Noto+Sans+TC:wght@300;400;500&family=Noto+Sans+SC:wght@300;400;500&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Charming Pau, BCBA",
          description:
            "Trilingual Board Certified Behavior Analyst offering ABA therapy and parent consultation in Hong Kong.",
          areaServed: "Hong Kong",
          email: "charmingpau@sdfkhk.com",
          knowsLanguage: ["en", "zh-HK", "zh-Hant"],
        }),
      },
      { src: "https://www.instagram.com/embed.js", async: true, defer: true },
      { src: "https://www.threads.com/embed.js", async: true, defer: true },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <Outlet />
      </LanguageProvider>
    </QueryClientProvider>
  );
}
