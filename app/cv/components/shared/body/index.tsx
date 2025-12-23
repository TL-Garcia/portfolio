type Components = "p" | "b" | "i" | "span";

type Variants = "primary" | "secondary";

type Props = {
  as?: Components;
  variant?: Variants;
};

const bodyTextStylesByVariant: Record<Variants, string> = {
  primary: "",
  secondary: "text-gray-600",
};

export const Body = ({
  as: Component = "p",
  variant = "primary",
  children,
}: React.PropsWithChildren<Props>) => {
  const styles = bodyTextStylesByVariant[variant];
  return <Component className={styles}>{children}</Component>;
};
