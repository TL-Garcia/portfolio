"use client";

import React from "react";

type Props = {
  texts: string[];
  interval?: number;
  delay?: number;
};

type State = {
  char: number;
  text: number;
  direction: "forward" | "backward";
};

const INITIAL_STATE: State = { char: 0, text: 0, direction: "forward" };

// TODO: Clean this up
// TODO: Make accessible

export const Typewritten = ({ texts, interval = 250, delay = 0 }: Props) => {
  const [state, setState] = React.useState(INITIAL_STATE);

  React.useEffect(() => {
    let intervalId: Parameters<typeof clearInterval>[0];

    const timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        setState((prev) => {
          const currentText = texts[prev.text];
          const isOnLastChar = prev.char === currentText.length;

          if (isOnLastChar) {
            return { ...prev, char: prev.char - 1, direction: "backward" };
          }

          const isOnFirstChar = prev.char === 0;

          if (isOnFirstChar && prev.direction === "backward") {
            // Move to next text
            const isLastText = prev.text === texts.length - 1;

            return isLastText
              ? INITIAL_STATE
              : { ...INITIAL_STATE, text: prev.text + 1 };
          }

          const nextChar =
            prev.direction === "forward" ? prev.char + 1 : prev.char - 1;

          return { ...prev, char: nextChar };
        });
      }, interval);
    }, delay);

    () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, [texts]);

  const currentText = texts[state.text];

  return (
    <span className="border-r-4 border-r-foreground animate-blink-caret">
      {currentText.slice(0, state.char)}
    </span>
  );
};
