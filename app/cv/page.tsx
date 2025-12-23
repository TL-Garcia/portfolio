import { ExperienceSection } from "./components/experience-section";
import { SkillsSection } from "./components/skills-section";
import { Header } from "./components/header";
import { Introduction } from "./components/introduction";
import { content } from "./content";
import { Divider } from "./components/shared/divider";

export default function CV() {
  // TODO: Investigate using subgrid
  /* 23cm is the size of an A4 sheet */
  return (
    <div className="max-w-[23cm] h-[29.7cm] m-auto py-4 px-2 relative">
      <Header />
      <svg
        style={{ position: "absolute", top: "0", zIndex: "-1" }}
        width={240}
        height={240}
      >
        <rect
          x={50}
          y={10}
          width={70}
          height={70}
          stroke-width="5"
          fill="#FFC972"
        ></rect>
      </svg>

      <Divider />

      <main className="grid grid-cols-3 gap-8 pt-8">
        <div className="flex flex-col gap-8">
          <Introduction introduction={content.introduction} />

          <SkillsSection skills={content.skills} />
        </div>

        <div className="col-span-2">
          <ExperienceSection experiences={content.experience} />
        </div>
      </main>

      {/*<button className="download-btn">Download as PDF</button>*/}
    </div>
  );
}
