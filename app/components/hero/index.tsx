import { CTA } from "./components/cta";
import { HeroIllustration } from "./components/illustration";

export const Hero = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="h-screen max-w-[1300px] m-auto py-[25vh] relative">
      <h1 className="text-8xl font-serif mb-14 text-nowrap relative z-10 motion-safe:animate-slide-from-below-2">
        {children}
      </h1>

      <div className="motion-safe:animate-slide-from-below">
        <CTA />
      </div>

      <div className="motion-safe:animate-slide-from-left absolute top-1/12 right-0">
        <HeroIllustration />
      </div>
    </div>
  );
};
