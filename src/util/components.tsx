import React from "react";
import { motion } from "framer-motion";

export const Title = extendComponent(
  <a className="font-bold text-7xl leading-tight" />
);
export const Description = extendComponent(
  <a className="text-3xl font-medium" />
);
export const MarginDescription = extendComponent(
  <Description className="mt-8" />
);
export const LinkButton = (props: { link: string; [key: string]: any }) => {
  const open = window.open;
  return <Button {...props} onClick={() => open(props.link, "_blank")} />;
};
export const Button = extendComponent(
  <motion.button whileHover={{ scale: 1.2 }} />
);
export const Img = extendComponent(
  <motion.img
    initial={{ y: "12vh", scale: 0.5 }}
    whileInView={{ y: 0, scale: 1 }}
  />
);
export const GradientTitle = extendComponent(
  <Title className="gradient-text from-purple-400 to-pink-600" />
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
  element: React.ReactElement<T>
): (props: T) => React.ReactElement {
  const props = element.props;
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
      children
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
