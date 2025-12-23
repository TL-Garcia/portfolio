import { Heading } from "../shared/heading";
import { Contact } from "./components/contact";

export const Header = () => {
  // TODO: Link gap values to <main> content
  return (
    <header className="grid grid-cols-3 items-end gap-8">
      <Heading level="primary" as="h1">
        Tomas <br /> Loroño Garcia
      </Heading>
      <Heading level="tertiary" as="p">
        Full Stack <br /> Web Developer
      </Heading>

      <Contact />
    </header>
  );
};
