import ProjectsContainer from "./projects-container";

const Projects = () => {
  return (
    <section className="w-full  text-white flex justify-center items-center">
      <div className="container px-4 md:px-6">
        <div className="mb-8">
          <h2 className="text-[30px] font-bold tracking-tighter  ">Projects</h2>
          <p className="text-white/60 font-light">
            Showcasing My Creativity and Technical Expertise
          </p>
        </div>
        <ProjectsContainer isSliced />
      </div>
    </section>
  );
};

export default Projects;
