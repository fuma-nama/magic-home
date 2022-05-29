import { Introduction } from "./Headline";
import "./styles/output.css";
import { Body } from "./Body";
import { useState } from "react";

function App() {
  return <MyComponent />;
}

export const MyComponent = () => {
  return (
    <div className="overflow-x-hidden overflow-y-auto bg-zinc-900 w-full h-full">
      <MobileSupport />
      <Nav />
      <div className="flex flex-col gap-10">
        <Introduction />
        <Body />
      </div>
    </div>
  );
};

function Nav() {
  return (
    <div className="flex flex-row bg-black/50 backdrop-blur-lg sticky top-0 w-full z-20 p-5 items-center gap-5">
      <img
        src="https://cdn.discordapp.com/icons/676806725105352704/a_ace5313f9065cdf99038087ce4ed76cb.gif"
        className="h-10 rounded-full"
      />
      <a className="font-bold">綜合資本小天堂</a>
      <a className="ml-auto">Designed by MONEY</a>
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
    console.log(winWidth);
  };

  var ww = width; //get proper width
  var mw = 1000; // min width of site
  var ratio = ww / mw; //calculate ratio

  return (
    <meta
      name="viewport"
      content={`width=${ww}, ${
        ww < mw
          ? `initial-scale=${ratio}, maximum-scale=${ratio}, minimum-scale=${ratio}`
          : "initial-scale=1.0, maximum-scale=2, minimum-scale=1.0"
      } user-scalable=no`}
    />
  );
}

export default App;
