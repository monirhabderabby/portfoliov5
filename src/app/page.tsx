import AboutMe from "@/components/sections/about-me";
import Hero from "@/components/sections/hero";

export default function Home() {
  return (
    <div className=" px-4 md:px-0 py-8">
      <Hero />
      <AboutMe />
    </div>
  );
}
