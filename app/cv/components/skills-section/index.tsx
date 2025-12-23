import { Section } from "../shared/section";

type Props = {
  skills: string[];
};

const SkillsList = ({ skills }: Props) => {
  return (
    <ul className="bulletpoints bulletpoints-multi-column">
      {skills.map((s) => (
        <li>{s}</li>
      ))}
    </ul>
  );
};

export const SkillsSection = ({ skills }: Props) => {
  return (
    <Section title="Skills">
      <SkillsList skills={skills} />
    </Section>
  );
};
