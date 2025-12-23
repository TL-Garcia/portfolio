import React from "react";
import { Heading } from "../heading";

type Props = {
  title: string;
};

export const SectionTitle = ({ children }: React.PropsWithChildren) => {
  return (
    <Heading as="h2" level="secondary">
      {children}
    </Heading>
  );
};

const Divider = () => {
  return <hr className="my-2 border-y-2" />;
};

export const Section = ({
  title,
  children,
}: React.PropsWithChildren<Props>) => {
  return (
    <section>
      <SectionTitle>{title}</SectionTitle>
      <Divider />
      {children}
    </section>
  );
};
