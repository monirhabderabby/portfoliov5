import Contact from "@/components/sections/contact";
import Educations from "@/components/sections/educations";
import Experiences from "@/components/sections/experiences";
import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/projects";
import Skills from "@/components/sections/skills";
import dynamic from "next/dynamic";
const AboutMe = dynamic(() => import("@/components/sections/about-me"), {
  ssr: false,
});
export default function Home() {
  return (
    <div className=" px-4 md:px-0 py-8">
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />

      <div className="py-[80px] bg-black">
        <Experiences />

        <Educations />
      </div>

      <Contact />
    </div>
  );
}
