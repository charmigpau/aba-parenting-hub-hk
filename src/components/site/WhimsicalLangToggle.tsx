import { useLang } from "@/i18n/LanguageProvider";
import type { Lang } from "@/i18n/dictionaries";

/**
 * Hand-sketched paper-tab language toggle. Switches the global site state
 * between English (EN) and Hong Kong Traditional Chinese (繁).
 */
export function WhimsicalLangToggle() {
  const { lang, setLang } = useLang();

  const other: Lang = lang === "en" ? "zh-HK" : "en";
  const otherLabel = other === "en" ? "EN" : "繁";
  const currentLabel = lang === "en" ? "EN" : "繁";

  return (
    <button
      type="button"
      onClick={() => setLang(other)}
      className="whimsical-lang-toggle"
      aria-label={`Switch language to ${otherLabel}`}
      title={`Switch to ${otherLabel}`}
    >
      <span className="lang-tab-scribble" aria-hidden="true" />
      <span className={"lang-tab-pill" + (lang === "en" ? " is-en" : " is-zh")}>
        <span className="lang-tab-active">{currentLabel}</span>
        <span className="lang-tab-sep" aria-hidden="true">/</span>
        <span className="lang-tab-other">{otherLabel}</span>
      </span>
    </button>
  );
}
