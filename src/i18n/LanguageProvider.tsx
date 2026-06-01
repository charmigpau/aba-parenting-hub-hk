import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import {
  COLLOQUIAL,
  DICTS,
  GLOSSARY,
  LANGS,
  type Dict,
  type GlossaryKey,
  type Lang,
} from "./dictionaries";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Dict;
  /** Strict, clinically-vetted glossary lookup (HK Traditional Chinese only). */
  g: (key: GlossaryKey) => string;
  /** Warm colloquial Cantonese overlay — empty string in English mode. */
  c: (key: string) => string;
};

const LanguageContext = createContext<Ctx | null>(null);

const STORAGE_KEY = "site-lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Lang | null;
      // Migrate old codes if present
      const normalized = saved === ("zh-TW" as Lang) ? "zh-HK" : saved;
      if (normalized && DICTS[normalized as Lang]) setLangState(normalized as Lang);
    } catch {}
  }, []);

  useEffect(() => {
    const entry = LANGS.find((l) => l.code === lang);
    if (entry && typeof document !== "undefined") {
      document.documentElement.lang = entry.htmlLang;
      document.documentElement.dataset.lang = lang;
    }
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem(STORAGE_KEY, l);
    } catch {}
  };

  const g = (key: GlossaryKey) => GLOSSARY[lang][key];
  const c = (key: string) => (lang === "zh-HK" ? COLLOQUIAL[key] ?? "" : "");

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: DICTS[lang], g, c }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}
