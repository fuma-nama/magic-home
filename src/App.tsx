import { Introduction } from "./Headline";
import "./styles/output.css";
import { Body } from "./Body";
import { useState } from "react";
import { RulesPanel } from "./doc/RulesPanel";
import { ChannelsPanel } from "./doc/ChannelsPanel";
import { InfoPanel } from "./doc/InfoPanel";
import { cn } from "./languages/cn";
import { Select } from "./util/components";
import {
  LanguageContext,
  LanguageContextType,
  useTranslate,
} from "./util/translate";
import en from "./languages/en";

function App() {
  const [lang, setLang] = useState("cn");

  const c: LanguageContextType = {
    languages: {
      cn: cn,
      en: en,
    },
    lang: lang,
    setLanguage(l) {
      setLang(l);
    },
  };
  return (
    <LanguageContext.Provider value={c}>
      <Page />
    </LanguageContext.Provider>
  );
}

export const Page = () => {
  const [tab, setTab] = useState<Tabs>(0);

  return (
    <div className="overflow-x-hidden overflow-y-auto bg-zinc-900 w-full h-full">
      <MobileSupport />
      <Nav tab={tab} setTab={setTab} />
      {tab === 0 && (
        <div className="flex flex-col gap-10">
          <Introduction />
          <Body />
        </div>
      )}
      {tab === 1 && <RulesPanel />}
      {tab === 2 && <ChannelsPanel />}
      {tab === 3 && <InfoPanel />}
    </div>
  );
};

type Tabs = 0 | 1 | 2 | 3;
type TabItemProps = {
  index: Tabs;
  tab: Tabs;
  onClick: (index: Tabs) => void;
  children: string;
};
const Link = ({ children, index, tab, onClick }: TabItemProps) => {
  return (
    <a
      className={`cursor-pointer font-bold rounded-lg text-xl p-2 transition-colors ${
        tab === index && "text-black bg-pink-600"
      }`}
      onClick={() => onClick(index)}
    >
      {children}
    </a>
  );
};

function Nav({ tab, setTab }: { tab: Tabs; setTab: (index: Tabs) => void }) {
  const { tArray, lang, setLang } = useTranslate();

  const tabs = tArray(["Home", "Rules", "Channels", "Info"]);

  return (
    <div className="flex flex-row bg-black/80 backdrop-blur-lg sticky top-0 w-full z-20 p-5 items-center gap-5 overflow-x-auto">
      <img
        src="https://cdn.discordapp.com/icons/676806725105352704/a_ace5313f9065cdf99038087ce4ed76cb.gif"
        className="h-10 rounded-full"
      />
      <a className="text-xl font-bold">綜合資本小天堂</a>

      <div className="flex flex-row gap-5">
        {tabs.map((text, i) => (
          <Link index={i as Tabs} key={i} tab={tab} onClick={setTab}>
            {text}
          </Link>
        ))}
      </div>
      <a className="ml-auto" href="https://homeofmagic.mystrikingly.com/">
        蜂蜜小鎮
      </a>
      <Select value={lang} onSelect={setLang}>
        {{
          cn: "Chinese",
          en: "English",
        }}
      </Select>
    </div>
  );
}

function MobileSupport() {
  const getWidth = () =>
    window.innerWidth < screen.width ? window.innerWidth : screen.width;

  const [width, setWidth] = useState(getWidth);
  window.onresize = () => {
    const winWidth = getWidth();
    setWidth(winWidth);
  };

  var ww = width; //get proper width
  var mw = 800; // min width of site
  var ratio = ww / mw; //calculate ratio

  return (
    <meta
      name="viewport"
      content={
        ww < mw
          ? `width=${ww}, initial-scale=${ratio}, maximum-scale=${ratio}, minimum-scale=${ratio} user-scalable=no`
          : "width=device-width, initial-scale=1.0"
      }
    />
  );
}

export default App;
