import Contact from "@/components/sections/contact";
import Educations from "@/components/sections/educations";
import Experiences from "@/components/sections/experiences";
import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/projects/projects";
import Skills from "@/components/sections/skills";
import dynamic from "next/dynamic";
const AboutMe = dynamic(() => import("@/components/sections/about-me"), {
  ssr: false,
});
const Achievements = dynamic(
  () => import("@/components/sections/achivements"),
  {
    ssr: false,
  }
);
export default function Home() {
  return (
    <>
      <div>
        <div className="px-0  py-8 ">
          <Hero />
          <AboutMe />
          <div className="space-y-[100px] md:space-y-[200px] mt-[200px] md:mt-0">
            <Skills />
            <Projects />
            <div className="py-0 md:py-[80px] bg-black">
              <Experiences />

              <Educations />

              <Achievements isSliced />
            </div>
          </div>
        </div>

        <Contact />
      </div>
    </>
  );
}
