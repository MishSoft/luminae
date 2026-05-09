import { create } from "zustand";

type LanguageCode = "eng" | "geo";

interface LangState {
  currentLang: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
}

export const useLangStore = create<LangState>((set) => ({
  currentLang: "eng",

  setLanguage: (lang) => set({ currentLang: lang }),
}));
