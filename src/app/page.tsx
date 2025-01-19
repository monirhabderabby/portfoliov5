import Contact from "@/components/sections/contact";
import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/projects";
import dynamic from "next/dynamic";
const AboutMe = dynamic(() => import("@/components/sections/about-me"), {
  ssr: false,
});
export default function Home() {
  return (
    <div className=" px-4 md:px-0 py-8">
      <Hero />
      <AboutMe />
      <Projects />

      <Contact />
    </div>
  );
}
