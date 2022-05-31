import React from "react";
import { motion } from "framer-motion";
import { useTranslate } from "./translate";

export const Title = extendComponent(
  <a className="font-bold text-7xl leading-tight" />,
  true
);
export const Description = extendComponent(
  <a className="text-3xl font-medium whitespace-pre-line" />,
  true
);

export const Button = extendComponent(
  <motion.button whileHover={{ scale: 1.2 }} />,
  true
);

export const MarginDescription = extendComponent(
  <Description className="mt-8" />
);

export const LinkButton = (props: { link: string; [key: string]: any }) => {
  const open = window.open;
  return <Button {...props} onClick={() => open(props.link, "_blank")} />;
};

export const Img = extendComponent(
  <motion.img
    initial={{ y: "12vh", scale: 0.5 }}
    whileInView={{ y: 0, scale: 1 }}
  />
);

export const GradientTitle = extendComponent(
  <Title className="gradient-text from-purple-400 to-pink-600" />,
  true
);

export const Container = extendComponent(
  <motion.div
    transition={{ duration: 0.5 }}
    initial={{ opacity: 0, y: "3vh" }}
    whileInView={{ opacity: 1, y: 0 }}
  />
);
export const SizedImg = extendComponent(
  <Img className="flex-1 min-w-[5rem] max-w-3xl" />
);
export function extendComponent<T = undefined>(
  element: React.ReactElement<T>,
  translate?: boolean
): (props: T) => React.ReactElement {
  const props = element.props;

  const translateChild = (children: any): any | string | undefined => {
    if (!children || !translate) return children;
    const { t, tSplit, tLines } = useTranslate();

    if (typeof children === "string") return t(children);

    if ("text" in children && "type" in children) {
      const { text, type } = children as ArrayContext;

      switch (type) {
        case "lines":
          return tLines(text);
        case "split":
          return tSplit(text);
      }
    }

    if (children instanceof Array) {
      return children.map((e) => translateChild(e));
    }
  };

  return (extended: T) => {
    const { children } = extended as { [key: string]: any };

    return React.cloneElement<any>(
      element,
      {
        ...props,
        ...extended,
        ...extendProp<string>(
          "className",
          props,
          extended,
          (p, e) => `${p} ${e}`
        ),
      },
      translateChild(children)
    );
  };
}

function extendProp<T>(
  name: string,
  props: any,
  extended: any,
  onGet: (prop: T | undefined, extendedValue: T | undefined) => any
) {
  const m: { [key: string]: any } = {};
  m[name] = onGet(props[name], extended[name]);
  return m;
}

export type SelectProps = {
  children: {
    [value: string]: string;
  };
  value?: string;
  onSelect: (value: string) => void;
};
export function Select({ children: options, value, onSelect }: SelectProps) {
  const map = () => {
    const elements = [];

    for (const [value, label] of Object.entries(options)) {
      elements.push(
        <option key={value} value={value}>
          {label}
        </option>
      );
    }

    return elements;
  };

  return (
    <select value={value} onChange={(e) => onSelect(e.target.value)}>
      {map()}
    </select>
  );
}

type ArrayContext = {
  text: any[];
  type: "split" | "lines";
};
export function lines(...text: string[]): ArrayContext {
  return {
    text: text,
    type: "lines",
  };
}
export function split(...text: (string | any)[]): ArrayContext {
  return {
    text: text,
    type: "split",
  };
}
