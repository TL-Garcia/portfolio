import Image from "next/image";

type Props = {
  id: string;
  alt: string;
};

export const Icon = ({ id, alt }: Props) => {
  return <Image src={`icons/${id}.svg`} width={24} height={24} alt={alt} />;
};
