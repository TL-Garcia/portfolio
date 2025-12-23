import { Divider } from "../shared/divider";
import { Section } from "../shared/section";
import { ExperienceBulletpoints } from "./components/experience-bulletpoints";
import { Experience } from "./types";

type Props = {
  experiences: Experience[];
};

const ExperienceList = ({ experiences }: Props) => {
  // TODO: Find a better key
  return experiences.map((e, i) => {
    const isLastElement = i < experiences.length - 2;

    return (
      <>
        <ExperienceBulletpoints experience={e} key={e.timeLapse} />
        {isLastElement && <Divider />}
      </>
    );
  });
};

export const ExperienceSection = ({ experiences }: Props) => {
  return (
    <Section title="Experience">
      <div className="grid gap-4">
        <ExperienceList experiences={experiences} />
      </div>
    </Section>
  );
};
