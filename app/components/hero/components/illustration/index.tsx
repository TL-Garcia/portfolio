export const HeroIllustration = () => {
  const sideSize = 785;
  const halfSideSize = 785 / 2;

  return (
    <svg
      width={sideSize}
      height={sideSize}
      xmlns="http://www.w3.org/2000/svg"
      className="overflow-visible"
    >
      <circle
        cx={halfSideSize}
        cy={halfSideSize}
        r={halfSideSize}
        className="fill-brand"
      />

      <image
        href="/pc.png"
        height={445}
        width={600}
        x={sideSize * 0.4}
        y={sideSize * 0.4}
      />
    </svg>
  );
};
