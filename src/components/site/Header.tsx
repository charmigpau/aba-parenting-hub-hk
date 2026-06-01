import { Link } from "@tanstack/react-router";
import { useLang } from "@/i18n/LanguageProvider";
import { useState, useEffect } from "react";
import { WhimsicalLangToggle } from "./WhimsicalLangToggle";

export function Header() {
  const { lang, setLang, t } = useLang();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [lang]);

  const navItems = [
    { to: "/", label: t.nav.home },
    { to: "/about", label: t.nav.about },
    { to: "/services", label: t.nav.services },
    { to: "/resources", label: t.nav.resources },
    { to: "/clinic", label: t.nav.clinic },
    { to: "/tips", label: t.nav.tips },
    { to: "/booking", label: "Booking" },
    { to: "/contact", label: t.nav.contact },
  ] as const;

  return (
    <header className="sticky top-0 z-40 border-b border-hairline bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link to="/" className="group flex flex-col leading-none">
          <span className="font-display text-xl">{t.brand.name}</span>
          <span className="eyebrow mt-1">{t.brand.tag}</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm text-foreground/80 transition-colors hover:text-foreground"
              activeProps={{ className: "text-sm text-foreground accent-underline" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
          <LangSwitcher lang={lang} setLang={setLang} />
        </nav>

        <button
          aria-label="Menu"
          className="md:hidden inline-flex h-9 w-9 items-center justify-center"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="relative block h-px w-5 bg-foreground before:absolute before:-top-1.5 before:left-0 before:h-px before:w-5 before:bg-foreground after:absolute after:top-1.5 after:left-0 after:h-px after:w-5 after:bg-foreground" />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-hairline">
          <nav className="mx-auto flex max-w-6xl flex-col px-6 py-4">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="border-b border-hairline py-3 text-sm"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4">
              <LangSwitcher lang={lang} setLang={setLang} />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

function LangSwitcher({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  return (
    <div className="flex items-center gap-1 text-xs">
      {LANGS.map((l, i) => (
        <span key={l.code} className="flex items-center gap-1">
          <button
            onClick={() => setLang(l.code)}
            className={
              "px-1.5 py-1 transition-colors " +
              (lang === l.code
                ? "text-foreground accent-underline"
                : "text-ink-muted hover:text-foreground")
            }
            aria-pressed={lang === l.code}
          >
            {l.label}
          </button>
          {i < LANGS.length - 1 && <span className="text-hairline">/</span>}
        </span>
      ))}
    </div>
  );
}
