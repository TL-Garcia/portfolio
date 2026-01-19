import { Body } from "../shared/body";
import { Divider } from "../shared/divider";
import { Heading } from "../shared/heading";
import { Section } from "../shared/section";
import { Experience } from "./types";

type Props = {
  experiences: Experience[];
};

const ExperienceBulletpoints = ({
  experience: { place, position, timeLapse, points },
}: {
  experience: Experience;
}) => {
  return (
    <article className="grid grid-cols-2 gap-x-8" key={place + position}>
      <Heading as="h3" level="tertiary">
        {place}
      </Heading>
      <Heading level="quaternary" as="p">
        {position}
      </Heading>

      <Body variant="secondary">{timeLapse}</Body>

      <ul className="grid gap-y-2">
        {points.map((point) => (
          <li>
            <Body as="span" variant="secondary">
              {point}
            </Body>
          </li>
        ))}
      </ul>
    </article>
  );
};

const ExperienceList = ({ experiences }: Props) => {
  // TODO: Find a better key
  return experiences.map((e, i) => {
    const isLastElement = i < experiences.length - 2;

    return (
      <>
        <ExperienceBulletpoints experience={e} key={e.timeLapse} />
        {isLastElement && <Divider gap="L" />}
      </>
    );
  });
};

export const ExperienceSection = ({ experiences }: Props) => {
  return (
    <Section title="Experience">
      <ExperienceList experiences={experiences} />
    </Section>
  );
};
