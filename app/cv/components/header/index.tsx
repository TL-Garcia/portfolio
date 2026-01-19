import { Heading } from "../shared/heading";
import { Contact } from "./components/contact";
import { SVGDecoration } from "./components/svg-decoration";

export const Header = () => {
  return (
    <header className="grid grid-cols-subgrid col-span-3 items-end relative">
      <Heading level="primary" as="h1">
        Tomas <br aria-hidden /> Loroño Garcia
      </Heading>
      <Heading level="tertiary" as="p">
        Full Stack <br aria-hidden /> Web Developer
      </Heading>

      <Contact />

      <SVGDecoration />
    </header>
  );
};
