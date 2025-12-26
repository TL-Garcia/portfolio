import { Hero } from "./components/hero";
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

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <Hero>{content.hero}</Hero>
      <section id="second" className="h-screen max-w-[1300px] m-auto">
        <h2>About me</h2>
      </section>
    </div>
  );
}
