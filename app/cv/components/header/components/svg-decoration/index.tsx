export const SVGDecoration = () => {
  return (
    <svg
      style={{ position: "absolute", top: "0", zIndex: "-1" }}
      width={240}
      height={240}
    >
      <rect
        x={50}
        y={10}
        width={70}
        height={70}
        stroke-width="5"
        fill="#FFC972"
      ></rect>
    </svg>
  );
};
