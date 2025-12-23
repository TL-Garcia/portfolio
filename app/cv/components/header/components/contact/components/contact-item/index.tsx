import { Icon } from "./components/icon";

type Props = {
  href: string;
  icon: string;
  alt: string;
  text: string;
};

export const ContactItem = ({ href, icon, alt, text: children }: Props) => {
  return (
    <li>
      <a className="flex gap-2" href={href}>
        <Icon id={icon} alt={alt} />
        <span>{children}</span>
      </a>
    </li>
  );
};
