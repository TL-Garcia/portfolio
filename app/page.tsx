import { CTA } from "./components/cta";
import { Typewritten } from "./components/typewritten";

const content = {
  hero: (
    <>
      Hi, I'm <span className="font-heading bg-brand-alt">Tomas </span>
      <br /> A{" "}
      <Typewritten
        texts={["full-stack developer", "platform engineer"]}
        delay={1200}
      />
      <br /> from Spain
    </>
  ),
};

const Hero = ({ text }) => {
  // TODO: Make motion accessible
  return (
    <div className="h-screen max-w-[1300px] m-auto grid grid-cols-2 place-content-center items-center">
      <h1 className="text-8xl font-serif mb-14 text-nowrap z-10 animate-slide-from-below-2">
        {text}
      </h1>
      <svg
        width={785}
        height={785}
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible animate-slide-from-left"
      >
        <circle cx={785 / 2} cy={785 / 2} r={785 / 2} className="fill-brand" />

        <image
          href="/pc.png"
          height={445}
          width={600}
          x={785 * 0.4}
          y={785 * 0.4}
        />
      </svg>

      <div className="animate-slide-from-below">
        <CTA />
      </div>
    </div>
  );
};
export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <Hero text={content.hero} />
      <section id="second" className="h-screen">
        <h2>About me</h2>
      </section>
    </div>
  );
}
