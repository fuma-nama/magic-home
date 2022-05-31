import { Any, Language } from "../util/translate";

export const en: Language = {
  splits: [
    {
      key: [Any, "Members"],
      value: ([count]) => `${count} Members`,
    },
  ],
};
