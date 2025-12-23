import React from "react";

type HeadingLevel = "primary" | "secondary" | "tertiary" | "quaternary";

type Props = {
  as: "h1" | "h2" | "h3" | "h4" | "p";
  level: HeadingLevel;
};

const styleByLevel: Record<HeadingLevel, string> = {
  primary: "text-4xl font-bold",
  secondary: "text-3xl font-bold lowercase",
  tertiary: "text-xl font-bold",
  quaternary: "text-xl",
};

export const Heading = ({
  children,
  as: Component,
  level,
}: React.PropsWithChildren<Props>) => {
  const classes = styleByLevel[level];

  return <Component className={classes}>{children}</Component>;
};
