import { content } from "@/app/cv/content";
import { ContactItem } from "./components/contact-item";

export const Contact = () => {
  return (
    <ul className="">
      {content.contact.map((i) => (
        <ContactItem {...i} key={i.href} />
      ))}
    </ul>
  );
};
