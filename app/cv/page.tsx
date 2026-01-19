import { ExperienceSection } from "./components/experience-section";
import { SkillsSection } from "./components/skills-section";
import { Header } from "./components/header";
import { Introduction } from "./components/introduction";
import { content } from "./content";
import { Divider } from "./components/shared/divider";

export default function CV() {
  /* 23cm is the size of an A4 sheet */
  return (
    <div className="max-w-[23cm] m-auto py-10 px-6 relative grid grid-cols-3 gap-x-8">
      <Header />

      <div className="col-span-3">
        <Divider />
      </div>

      <main className="grid grid-cols-subgrid col-span-3 pt-4">
        <div className="flex flex-col gap-8">
          <Introduction introduction={content.introduction} />

          <SkillsSection skills={content.skills} />
        </div>

        <div className="col-span-2">
          <ExperienceSection experiences={content.experience} />
        </div>
      </main>
    </div>
  );
}
