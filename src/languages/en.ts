import { Any, Language } from "../util/translate";

export const en: Language = {
  splits: [
    {
      key: [Any, "Years"],
      value: ([years]) => `${years} Years`,
    },
    {
      key: [Any, "Members"],
      value: ([count]) => `${count} Members`,
    },
  ],
};
