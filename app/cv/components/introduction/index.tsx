import { Body } from "../shared/body";
import { Section } from "../shared/section";

type Props = {
  introduction: string[];
};

export const Introduction = ({ introduction: content }: Props) => {
  return (
    <Section title="Summary">
      <div className="flex flex-col gap-2">
        {content.map((paragraph) => (
          <Body variant="secondary">{paragraph}</Body>
        ))}
      </div>
    </Section>
  );
};
