import React, { useContext } from "react";

export const Any = 0;
export type Language = {
  [key: string]: string | any;
  splits?: SpiltPair[];
  lines?: LinePair[];
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

type Pair<K, V> = {
  key: K;
  value: V;
};
export type SpiltPair = Pair<
  (string | typeof Any)[],
  (params: any[]) => string
>;
export type LinePair = Pair<string[], string | string[]>;

function matchSpilt(text: (string | any)[], { key }: SpiltPair): boolean {
  if (text.length !== key.length) return false;

  for (let i = 0; i < text.length; i++) {
    const element = text[i];

    if (typeof element === "string" && element === key[i]) {
      continue;
    } else if (key[i] === Any) {
      continue;
    }

    return false;
  }
  return true;
}

export const useTranslate = () => {
  const ctx = useContext(LanguageContext);
  const lang = ctx.languages[ctx.lang];
  const translator = {
    tSplit(text: (string | any)[]): string | undefined {
      if (!lang.splits) return;

      for (const split of lang.splits) {
        if (matchSpilt(text, split)) {
          return split.value(text);
        }
      }
    },
    t(text: string): string {
      return lang && lang[text] ? lang[text] : text;
    },
    tArray(array: string[]) {
      return array.map((text) => translator.t(text));
    },
    tLines(text: string[]): string {
      if (lang.lines) {
        for (const pair of lang.lines) {
          const equal = arraysEqual<string>(pair.key, text);

          if (equal) {
            return typeof pair.value === "string"
              ? pair.value
              : pair.value.join("\n");
          }
        }
      }

      return text.join("\n");
    },
    lang: ctx.lang,
    setLang: ctx.setLanguage,
  };

  return translator;
};

function arraysEqual<T>(a: T[], b: T[]): boolean {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length !== b.length) return false;

  // If you don't care about the order of the elements inside
  // the array, you should sort both arrays here.
  // Please note that calling sort on an array will modify that array.
  // you might want to clone your array first.

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}
