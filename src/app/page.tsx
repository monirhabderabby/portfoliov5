import Hero from "@/components/sections/hero";
import dynamic from "next/dynamic";
const AboutMe = dynamic(() => import("@/components/sections/about-me"), {
  ssr: false,
});
export default function Home() {
  return (
    <div className=" px-4 md:px-0 py-8">
      <Hero />
      <AboutMe />
    </div>
  );
}
