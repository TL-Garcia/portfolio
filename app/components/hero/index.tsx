const description = [
  "I try to build things that work well for the people using them, not just the browser.",
  "I focus on creating stuff that actually solves a problem or makes life a little easier.",
  "And I care about doing it right—clean, thoughtful code that I’m proud to stand behind.",
];
export const Hero = () => {
  return (
    <div className="min-h-screen m-auto px-6 lg:py-[25vh] py-10 max-w-5xl">
      <h1 className="md:text-7xl text-5xl text-center font-heading mb-12 motion-safe:animate-slide-from-below-2 ">
        Hi, I'm Tomas
        <br /> A full-stack developer
        <br /> from Spain
      </h1>

      <nav className="grid gap-5 [writing-mode:vertical-lr] text-md text-gray-500 mb-12">
        <a className="">My work</a>
        <a>About me</a>
        <a>Other thing</a>
      </nav>

      <div>
        {description.map((d) => (
          <p
            className="text-xl leading-normal text-pretty"
            key={d[2] /*TODO: find better key*/}
          >
            {d}
          </p>
        ))}
      </div>
    </div>
  );
};
