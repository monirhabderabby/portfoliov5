import { projects } from "@/data/projects";
import { HeroParallax } from "../ui/herp-parallax";

const Projects = () => {
  return (
    <div>
      <HeroParallax products={projects} />
    </div>
  );
};

export default Projects;
