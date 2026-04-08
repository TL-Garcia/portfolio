import { Hero } from "./components/hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans">
      <Hero />
      <section id="second" className="h-screen max-w-[1300px] m-auto py-6">
        <h2 className="text-6xl font-serif">About me</h2>
      </section>
    </div>
  );
}
