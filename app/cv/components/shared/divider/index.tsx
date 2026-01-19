const GAP_SIZES = {
  S: 2,
  M: 4,
  L: 8,
};

type Props = {
  gap?: "S" | "M" | "L";
};

export const Divider = ({ gap = "M" }: Props) => {
  return <hr className={`my-${GAP_SIZES[gap]} border-gray-300 border-y-1`} />;
};
