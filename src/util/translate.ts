import React, { useContext } from "react";

export type Language = {
  [key: string]: string;
};
export type LanguageContextType = {
  languages: {
    [key: string]: Language;
  };
  lang: string;
  setLanguage: (lang: string) => void;
};

export const LanguageContext = React.createContext<LanguageContextType>({
  languages: {},
  lang: "unknown",
  setLanguage() {},
});

export const useTranslate = () => {
  const ctx = useContext(LanguageContext);
  const lang = ctx.languages[ctx.lang];
  const translator = {
    t(text: string): string {
      return lang && lang[text] ? lang[text] : text;
    },
    tArray(array: string[]) {
      return array.map((text) => translator.t(text));
    },
    lang: ctx.lang,
    setLang: ctx.setLanguage,
  };

  return translator;
};
