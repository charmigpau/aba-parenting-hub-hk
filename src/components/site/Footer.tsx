import { useLang } from "@/i18n/LanguageProvider";
import { Link } from "@tanstack/react-router";

const socials = [
  { name: "Instagram", href: "https://instagram.com/cheryl.bcba" },
  { name: "Facebook", href: "https://facebook.com/cheryl.bcba" },
  { name: "Threads", href: "https://www.threads.net/@cheryl.bcba" },
];

export function Footer() {
  const { t } = useLang();
  return (
    <footer className="mt-32 border-t border-hairline">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl">{t.brand.name}</p>
          <p className="eyebrow mt-2">{t.brand.tag}</p>
        </div>
        <div>
          <p className="eyebrow mb-4">{t.footer.followAlong}</p>
          <ul className="space-y-2 text-sm">
            {socials.map((s) => (
              <li key={s.name}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="hover:accent-underline"
                >
                  {s.name} <span className="text-ink-muted">↗</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow mb-4">{t.footer.contact}</p>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="mailto:hello@cheryl-bcba.hk" className="hover:accent-underline">
                hello@cheryl-bcba.hk
              </a>
            </li>
            <li>
              <Link to="/contact" className="hover:accent-underline">
                {t.cta.book} →
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="hairline">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 text-xs text-ink-muted">
          <span>© {new Date().getFullYear()} {t.brand.name}.</span>
          <span>{t.footer.rights}</span>
        </div>
      </div>
    </footer>
  );
}
