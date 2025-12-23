import { Body } from "../../../shared/body";
import { Heading } from "../../../shared/heading";
import { Experience } from "../../types";

type Props = {
  experience: Experience;
};

export const ExperienceBulletpoints = ({
  experience: { place, position, timeLapse, points },
}: Props) => {
  // TODO: Investigate using subgrid
  // TODO: Think of a better key
  // TODO: Include position as separate text style
  return (
    <article className="grid grid-cols-2" key={timeLapse}>
      <div className="col-span-2">
        <Heading as="h3" level="tertiary">
          <div className="grid grid-cols-2">
            <span>{place}</span>
            <span className="font-normal">{position}</span>
          </div>
        </Heading>
      </div>

      <Body variant="secondary">{timeLapse}</Body>

      <ul className="">
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
